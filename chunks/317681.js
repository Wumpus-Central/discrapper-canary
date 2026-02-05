"use strict";
n.d(t, { FV: () => E, M3: () => h, O7: () => m, SQ: () => g, cd: () => A, ke: () => I, n$: () => p, pY: () => T }),
    n(321073);
var r = n(155718),
    i = n(721768),
    a = n(861382),
    s = n(978561),
    o = n(31717),
    l = n(522602),
    u = n(408018),
    c = n(323350),
    d = n(711371),
    _ = n(551483);
let f = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function p(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, _.Xg];
}
function h(e) {
    if (null == e.selection) return null;
    let t = d.VW.above(e, { at: e.selection.focus, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || d.ZF.isCollapsed(e.selection)
        ? t
        : (d.VW.above(e, { at: e.selection.anchor, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function m(e) {
    let t = p(e),
        n = [],
        r = t?.[0].children;
    if (null != r) for (let e of r) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function g(e, t, n) {
    let r = {};
    if (null == t.options) return {};
    let i = p(e),
        a = Object.fromEntries(t.options.map((e) => [e.name, e])),
        s = i?.[0].children;
    if (null != s) {
        for (let t of s)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let i = a[t.optionName];
                null != i && (r[t.optionName] = E(e, i, t, n));
            }
    }
    return r;
}
function E(e, t, n, i) {
    let a = n.children.map((n) => {
        if (t.type === r.n4.ATTACHMENT) {
            let e = l.A.getUpload(i, t.name, o.C.SlashCommand);
            if (null != e) return { type: "text", text: e.filename ?? "" };
        }
        if (d.l5.isText(n)) return { type: "text", text: n.text };
        if (d.VW.isVoid(e, n)) {
            let e = (0, u.QR)(n);
            if (null != e) return e;
        }
        return { type: "text", text: (0, c.IQ)(n, { mode: "raw" }) };
    });
    if (t.type !== r.n4.STRING) {
        for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim(); ) a.shift();
        for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim(); ) a.pop();
    }
    return a;
}
function A(e, t, n, r, a) {
    if (null == e.options) return {};
    let o = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            s.J({ option: e, content: r[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: a }),
        ]),
    );
    return i._y(n, o), o;
}
function I(e, t, n, r, o) {
    let [l] = r,
        u = a.A.getActiveCommand(n),
        c = u?.options?.find((e) => e.name === l.optionName);
    if (null == c) return;
    let d = E(e, c, l, n),
        _ = s.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: o });
    return i.H2(n, { [l.optionName]: { lastValidationResult: _ } }), _;
}
function T(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        r = [],
        i = new Set(m(e)),
        a = {},
        s = new Set();
    for (let e of t.options) (a[e.displayName] = e), i.has(e.name) || s.add(e.displayName);
    let o = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ("line" === i.type || "applicationCommand" === i.type)
            for (let l = 0; l < i.children.length; l++) {
                let u,
                    _ = i.children[l],
                    p = [t, l];
                if (d.AS.isType(_, "applicationCommandOption")) {
                    null != o &&
                        ((o.valueRange.focus = d.VW.before(e, p) ?? d.VW.start(e, [])),
                        (o.text = (0, c.WO)(n, { mode: "raw", range: o.valueRange }).trim()),
                        r.push(o),
                        (o = null));
                    continue;
                }
                if (d.l5.isText(_))
                    for (f.lastIndex = 0; null != (u = f.exec(_.text)); ) {
                        if (0 !== u.index && null == _.text.charAt(u.index - 1).match(/(\t|\s)/)) continue;
                        let e = u[1];
                        if (!s.has(e)) continue;
                        s.delete(e);
                        let t = a[e];
                        if (null == t) continue;
                        let i = { path: p, offset: u.index },
                            l = { path: p, offset: i.offset + u[0].length },
                            d = { path: p, offset: l.offset },
                            f = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: i, focus: l },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        null != o &&
                            ((o.valueRange.focus = f.keyRange.anchor),
                            (o.text = (0, c.WO)(n, { mode: "raw", range: o.valueRange }).trim()),
                            r.push(o)),
                            (o = f);
                    }
            }
    }
    return (
        null != o &&
            ((o.valueRange.focus = d.VW.end(e, [])),
            (o.text = (0, c.WO)(n, { mode: "raw", range: o.valueRange }).trim()),
            r.push(o)),
        r
    );
}

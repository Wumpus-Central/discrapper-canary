"use strict";
n.d(t, { FV: () => A, M3: () => p, O7: () => g, SQ: () => x, cd: () => E, ke: () => C, n$: () => f, pY: () => I }),
    n(321073);
var l = n(155718),
    i = n(721768),
    s = n(861382),
    r = n(203779),
    a = n(31717),
    o = n(522602),
    u = n(408018),
    c = n(323350),
    d = n(820066),
    h = n(551483);
let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function f(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, h.Xg];
}
function p(e) {
    if (null == e.selection) return null;
    let t = d.VW.above(e, { at: e.selection.focus, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || d.ZF.isCollapsed(e.selection)
        ? t
        : (d.VW.above(e, { at: e.selection.anchor, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function g(e) {
    let t = f(e),
        n = [],
        l = t?.[0].children;
    if (null != l) for (let e of l) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function x(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let i = f(e),
        s = Object.fromEntries(t.options.map((e) => [e.name, e])),
        r = i?.[0].children;
    if (null != r) {
        for (let t of r)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let i = s[t.optionName];
                null != i && (l[t.optionName] = A(e, i, t, n));
            }
    }
    return l;
}
function A(e, t, n, i) {
    let s = n.children.map((n) => {
        if (t.type === l.n4.ATTACHMENT) {
            let e = o.A.getUpload(i, t.name, a.C.SlashCommand);
            if (null != e) return { type: "text", text: e.filename ?? "" };
        }
        if (d.l5.isText(n)) return { type: "text", text: n.text };
        if (d.VW.isVoid(e, n)) {
            let e = (0, u.QR)(n);
            if (null != e) return e;
        }
        return { type: "text", text: (0, c.IQ)(n, { mode: "raw" }) };
    });
    if (t.type !== l.n4.STRING) {
        for (; s.length > 0 && "text" === s[0].type && "" === s[0].text.trim(); ) s.shift();
        for (; s.length > 0 && "text" === s[s.length - 1].type && "" === s[s.length - 1].text.trim(); ) s.pop();
    }
    return s;
}
function E(e, t, n, l, s) {
    if (null == e.options) return {};
    let a = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            r.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: s }),
        ]),
    );
    return i._y(n, a), a;
}
function C(e, t, n, l, a) {
    let [o] = l,
        u = s.A.getActiveCommand(n),
        c = u?.options?.find((e) => e.name === o.optionName);
    if (null == c) return;
    let d = A(e, c, o, n),
        h = r.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: a });
    return i.H2(n, { [o.optionName]: { lastValidationResult: h } }), h;
}
function I(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        i = new Set(g(e)),
        s = {},
        r = new Set();
    for (let e of t.options) (s[e.displayName] = e), i.has(e.name) || r.add(e.displayName);
    let a = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ("line" === i.type || "applicationCommand" === i.type)
            for (let o = 0; o < i.children.length; o++) {
                let u,
                    h = i.children[o],
                    f = [t, o];
                if (d.AS.isType(h, "applicationCommandOption")) {
                    null != a &&
                        ((a.valueRange.focus = d.VW.before(e, f) ?? d.VW.start(e, [])),
                        (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                        l.push(a),
                        (a = null));
                    continue;
                }
                if (d.l5.isText(h))
                    for (m.lastIndex = 0; null != (u = m.exec(h.text)); ) {
                        if (0 !== u.index && null == h.text.charAt(u.index - 1).match(/(\t|\s)/)) continue;
                        let e = u[1];
                        if (!r.has(e)) continue;
                        r.delete(e);
                        let t = s[e];
                        if (null == t) continue;
                        let i = { path: f, offset: u.index },
                            o = { path: f, offset: i.offset + u[0].length },
                            d = { path: f, offset: o.offset },
                            m = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: i, focus: o },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        null != a &&
                            ((a.valueRange.focus = m.keyRange.anchor),
                            (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                            l.push(a)),
                            (a = m);
                    }
            }
    }
    return (
        null != a &&
            ((a.valueRange.focus = d.VW.end(e, [])),
            (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
            l.push(a)),
        l
    );
}

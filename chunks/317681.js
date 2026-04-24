"use strict";
n.d(t, { FV: () => x, M3: () => f, O7: () => g, SQ: () => _, cd: () => C, ke: () => A, n$: () => p, pY: () => E }),
    n(321073);
var l = n(155718),
    i = n(721768),
    s = n(861382),
    a = n(978561),
    r = n(31717),
    o = n(522602),
    c = n(408018),
    u = n(323350),
    d = n(820066),
    h = n(551483);
let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function p(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, h.Xg];
}
function f(e) {
    if (null == e.selection) return null;
    let t = d.VW.above(e, { at: e.selection.focus, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || d.ZF.isCollapsed(e.selection)
        ? t
        : (d.VW.above(e, { at: e.selection.anchor, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function g(e) {
    let t = p(e),
        n = [],
        l = t?.[0].children;
    if (null != l) for (let e of l) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function _(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let i = p(e),
        s = Object.fromEntries(t.options.map((e) => [e.name, e])),
        a = i?.[0].children;
    if (null != a) {
        for (let t of a)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let i = s[t.optionName];
                null != i && (l[t.optionName] = x(e, i, t, n));
            }
    }
    return l;
}
function x(e, t, n, i) {
    let s = n.children.map((n) => {
        if (t.type === l.n4.ATTACHMENT) {
            let e = o.A.getUpload(i, t.name, r.C.SlashCommand);
            if (null != e) return { type: "text", text: e.filename ?? "" };
        }
        if (d.l5.isText(n)) return { type: "text", text: n.text };
        if (d.VW.isVoid(e, n)) {
            let e = (0, c.QR)(n);
            if (null != e) return e;
        }
        return { type: "text", text: (0, u.IQ)(n, { mode: "raw" }) };
    });
    if (t.type !== l.n4.STRING) {
        for (; s.length > 0 && "text" === s[0].type && "" === s[0].text.trim(); ) s.shift();
        for (; s.length > 0 && "text" === s[s.length - 1].type && "" === s[s.length - 1].text.trim(); ) s.pop();
    }
    return s;
}
function C(e, t, n, l, s) {
    if (null == e.options) return {};
    let r = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            a.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: s }),
        ]),
    );
    return i._y(n, r), r;
}
function A(e, t, n, l, r) {
    let [o] = l,
        c = s.A.getActiveCommand(n),
        u = c?.options?.find((e) => e.name === o.optionName);
    if (null == u) return;
    let d = x(e, u, o, n),
        h = a.J({ option: u, content: d, guildId: t, channelId: n, allowEmptyValues: r });
    return i.H2(n, { [o.optionName]: { lastValidationResult: h } }), h;
}
function E(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        i = new Set(g(e)),
        s = {},
        a = new Set();
    for (let e of t.options) (s[e.displayName] = e), i.has(e.name) || a.add(e.displayName);
    let r = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ("line" === i.type || "applicationCommand" === i.type)
            for (let o = 0; o < i.children.length; o++) {
                let c,
                    h = i.children[o],
                    p = [t, o];
                if (d.AS.isType(h, "applicationCommandOption")) {
                    null != r &&
                        ((r.valueRange.focus = d.VW.before(e, p) ?? d.VW.start(e, [])),
                        (r.text = (0, u.WO)(n, { mode: "raw", range: r.valueRange }).trim()),
                        l.push(r),
                        (r = null));
                    continue;
                }
                if (d.l5.isText(h))
                    for (m.lastIndex = 0; null != (c = m.exec(h.text)); ) {
                        if (0 !== c.index && null == h.text.charAt(c.index - 1).match(/(\t|\s)/)) continue;
                        let e = c[1];
                        if (!a.has(e)) continue;
                        a.delete(e);
                        let t = s[e];
                        if (null == t) continue;
                        let i = { path: p, offset: c.index },
                            o = { path: p, offset: i.offset + c[0].length },
                            d = { path: p, offset: o.offset },
                            m = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: i, focus: o },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        null != r &&
                            ((r.valueRange.focus = m.keyRange.anchor),
                            (r.text = (0, u.WO)(n, { mode: "raw", range: r.valueRange }).trim()),
                            l.push(r)),
                            (r = m);
                    }
            }
    }
    return (
        null != r &&
            ((r.valueRange.focus = d.VW.end(e, [])),
            (r.text = (0, u.WO)(n, { mode: "raw", range: r.valueRange }).trim()),
            l.push(r)),
        l
    );
}

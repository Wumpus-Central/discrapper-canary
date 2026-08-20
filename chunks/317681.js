n.d(t, { FV: () => A, M3: () => f, O7: () => p, SQ: () => x, cd: () => E, ke: () => _, n$: () => g, pY: () => v }),
    n(321073);
var i = n(155718),
    l = n(721768),
    s = n(861382),
    r = n(203779),
    a = n(31717),
    o = n(522602),
    c = n(408018),
    u = n(323350),
    d = n(820066),
    h = n(551483);
let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function g(e) {
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
function p(e) {
    let t = g(e),
        n = [],
        i = t?.[0].children;
    if (null != i) for (let e of i) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function x(e, t, n) {
    let i = {};
    if (null == t.options) return {};
    let l = g(e),
        s = Object.fromEntries(t.options.map((e) => [e.name, e])),
        r = l?.[0].children;
    if (null != r) {
        for (let t of r)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let l = s[t.optionName];
                null != l && (i[t.optionName] = A(e, l, t, n));
            }
    }
    return i;
}
function A(e, t, n, l) {
    let s = n.children.map((n) => {
        if (t.type === i.n4.ATTACHMENT) {
            let e = o.A.getUpload(l, t.name, a.C.SlashCommand);
            if (null != e) return { type: "text", text: e.filename ?? "" };
        }
        if (d.l5.isText(n)) return { type: "text", text: n.text };
        if (d.VW.isVoid(e, n)) {
            let e = (0, c.QR)(n);
            if (null != e) return e;
        }
        return { type: "text", text: (0, u.IQ)(n, { mode: "raw" }) };
    });
    if (t.type !== i.n4.STRING) {
        for (; s.length > 0 && "text" === s[0].type && "" === s[0].text.trim(); ) s.shift();
        for (; s.length > 0 && "text" === s[s.length - 1].type && "" === s[s.length - 1].text.trim(); ) s.pop();
    }
    return s;
}
function E(e, t, n, i, s) {
    if (null == e.options) return {};
    let a = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            r.J({ option: e, content: i[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: s }),
        ]),
    );
    return l._y(n, a), a;
}
function _(e, t, n, i, a) {
    let [o] = i,
        c = s.A.getActiveCommand(n),
        u = c?.options?.find((e) => e.name === o.optionName);
    if (null == u) return;
    let d = A(e, u, o, n),
        h = r.J({ option: u, content: d, guildId: t, channelId: n, allowEmptyValues: a });
    return l.H2(n, { [o.optionName]: { lastValidationResult: h } }), h;
}
function v(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        i = [],
        l = new Set(p(e)),
        s = {},
        r = new Set();
    for (let e of t.options) (s[e.displayName] = e), l.has(e.name) || r.add(e.displayName);
    let a = null;
    for (let t = 0; t < n.length; t++) {
        let l = n[t];
        if ("line" === l.type || "applicationCommand" === l.type)
            for (let o = 0; o < l.children.length; o++) {
                let c,
                    h = l.children[o],
                    g = [t, o];
                if (d.AS.isType(h, "applicationCommandOption")) {
                    null != a &&
                        ((a.valueRange.focus = d.VW.before(e, g) ?? d.VW.start(e, [])),
                        (a.text = (0, u.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                        i.push(a),
                        (a = null));
                    continue;
                }
                if (d.l5.isText(h))
                    for (m.lastIndex = 0; null != (c = m.exec(h.text)); ) {
                        if (0 !== c.index && null == h.text.charAt(c.index - 1).match(/(\t|\s)/)) continue;
                        let e = c[1];
                        if (!r.has(e)) continue;
                        r.delete(e);
                        let t = s[e];
                        if (null == t) continue;
                        let l = { path: g, offset: c.index },
                            o = { path: g, offset: l.offset + c[0].length },
                            d = { path: g, offset: o.offset },
                            m = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: l, focus: o },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        null != a &&
                            ((a.valueRange.focus = m.keyRange.anchor),
                            (a.text = (0, u.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                            i.push(a)),
                            (a = m);
                    }
            }
    }
    return (
        null != a &&
            ((a.valueRange.focus = d.VW.end(e, [])),
            (a.text = (0, u.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
            i.push(a)),
        i
    );
}

(n.d(t, { FV: () => y, M3: () => f, O7: () => g, SQ: () => x, cd: () => v, ke: () => E, n$: () => h, pY: () => N }),
    n(321073));
var l = n(155718),
    i = n(721768),
    a = n(861382),
    r = n(203779),
    s = n(31717),
    o = n(522602),
    u = n(408018),
    c = n(323350),
    d = n(820066),
    p = n(551483);
let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function h(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, p.Xg];
}
function f(e) {
    if (null == e.selection) return null;
    let t = d.VW.above(e, { at: e.selection.focus, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || d.ZF.isCollapsed(e.selection)
        ? t
        : (d.VW.above(e, { at: e.selection.anchor, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function g(e) {
    let t = h(e),
        n = [],
        l = t?.[0].children;
    if (null != l) for (let e of l) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function x(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let i = h(e),
        a = Object.fromEntries(t.options.map((e) => [e.name, e])),
        r = i?.[0].children;
    if (null != r) {
        for (let t of r)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let i = a[t.optionName];
                null != i && (l[t.optionName] = y(e, i, t, n));
            }
    }
    return l;
}
function y(e, t, n, i) {
    let a = n.children.map((n) => {
        if (t.type === l.n4.ATTACHMENT) {
            let e = o.A.getUpload(i, t.name, s.C.SlashCommand);
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
        for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim();) a.shift();
        for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim();) a.pop();
    }
    return a;
}
function v(e, t, n, l, a) {
    if (null == e.options) return {};
    let s = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            r.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: a }),
        ]),
    );
    return (i._y(n, s), s);
}
function E(e, t, n, l, s) {
    let [o] = l,
        u = a.A.getActiveCommand(n),
        c = u?.options?.find((e) => e.name === o.optionName);
    if (null == c) return;
    let d = y(e, c, o, n),
        p = r.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: s });
    return (i.H2(n, { [o.optionName]: { lastValidationResult: p } }), p);
}
function N(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        i = new Set(g(e)),
        a = {},
        r = new Set();
    for (let e of t.options) ((a[e.displayName] = e), i.has(e.name) || r.add(e.displayName));
    let s = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ("line" === i.type || "applicationCommand" === i.type)
            for (let o = 0; o < i.children.length; o++) {
                let u,
                    p = i.children[o],
                    h = [t, o];
                if (d.AS.isType(p, "applicationCommandOption")) {
                    null != s &&
                        ((s.valueRange.focus = d.VW.before(e, h) ?? d.VW.start(e, [])),
                        (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
                        l.push(s),
                        (s = null));
                    continue;
                }
                if (d.l5.isText(p))
                    for (m.lastIndex = 0; null != (u = m.exec(p.text));) {
                        if (0 !== u.index && null == p.text.charAt(u.index - 1).match(/(\t|\s)/)) continue;
                        let e = u[1];
                        if (!r.has(e)) continue;
                        r.delete(e);
                        let t = a[e];
                        if (null == t) continue;
                        let i = { path: h, offset: u.index },
                            o = { path: h, offset: i.offset + u[0].length },
                            d = { path: h, offset: o.offset },
                            m = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: i, focus: o },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        (null != s &&
                            ((s.valueRange.focus = m.keyRange.anchor),
                            (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
                            l.push(s)),
                            (s = m));
                    }
            }
    }
    return (
        null != s &&
            ((s.valueRange.focus = d.VW.end(e, [])),
            (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
            l.push(s)),
        l
    );
}

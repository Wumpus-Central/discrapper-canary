n.d(t, { FV: () => y, M3: () => g, O7: () => f, SQ: () => x, cd: () => v, ke: () => N, n$: () => h, pY: () => E }),
    n(321073);
var l = n(155718),
    i = n(721768),
    r = n(861382),
    a = n(203779),
    s = n(31717),
    o = n(522602),
    u = n(408018),
    c = n(323350),
    d = n(820066),
    m = n(551483);
let p = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function h(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, m.Xg];
}
function g(e) {
    if (null == e.selection) return null;
    let t = d.VW.above(e, { at: e.selection.focus, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || d.ZF.isCollapsed(e.selection)
        ? t
        : (d.VW.above(e, { at: e.selection.anchor, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function f(e) {
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
        r = Object.fromEntries(t.options.map((e) => [e.name, e])),
        a = i?.[0].children;
    if (null != a) {
        for (let t of a)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let i = r[t.optionName];
                null != i && (l[t.optionName] = y(e, i, t, n));
            }
    }
    return l;
}
function y(e, t, n, i) {
    let r = n.children.map((n) => {
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
        for (; r.length > 0 && "text" === r[0].type && "" === r[0].text.trim(); ) r.shift();
        for (; r.length > 0 && "text" === r[r.length - 1].type && "" === r[r.length - 1].text.trim(); ) r.pop();
    }
    return r;
}
function v(e, t, n, l, r) {
    if (null == e.options) return {};
    let s = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            a.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: r }),
        ]),
    );
    return i._y(n, s), s;
}
function N(e, t, n, l, s) {
    let [o] = l,
        u = r.A.getActiveCommand(n),
        c = u?.options?.find((e) => e.name === o.optionName);
    if (null == c) return;
    let d = y(e, c, o, n),
        m = a.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: s });
    return i.H2(n, { [o.optionName]: { lastValidationResult: m } }), m;
}
function E(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        i = new Set(f(e)),
        r = {},
        a = new Set();
    for (let e of t.options) (r[e.displayName] = e), i.has(e.name) || a.add(e.displayName);
    let s = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ("line" === i.type || "applicationCommand" === i.type)
            for (let o = 0; o < i.children.length; o++) {
                let u,
                    m = i.children[o],
                    h = [t, o];
                if (d.AS.isType(m, "applicationCommandOption")) {
                    null != s &&
                        ((s.valueRange.focus = d.VW.before(e, h) ?? d.VW.start(e, [])),
                        (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
                        l.push(s),
                        (s = null));
                    continue;
                }
                if (d.l5.isText(m))
                    for (p.lastIndex = 0; null != (u = p.exec(m.text)); ) {
                        if (0 !== u.index && null == m.text.charAt(u.index - 1).match(/(\t|\s)/)) continue;
                        let e = u[1];
                        if (!a.has(e)) continue;
                        a.delete(e);
                        let t = r[e];
                        if (null == t) continue;
                        let i = { path: h, offset: u.index },
                            o = { path: h, offset: i.offset + u[0].length },
                            d = { path: h, offset: o.offset },
                            p = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: i, focus: o },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        null != s &&
                            ((s.valueRange.focus = p.keyRange.anchor),
                            (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
                            l.push(s)),
                            (s = p);
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

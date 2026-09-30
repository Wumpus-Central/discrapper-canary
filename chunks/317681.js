(n.d(t, { FV: () => E, M3: () => m, O7: () => g, SQ: () => y, cd: () => v, ke: () => A, n$: () => p, pY: () => C }),
    n(321073));
var l = n(155718),
    r = n(721768),
    i = n(861382),
    a = n(203779),
    s = n(31717),
    u = n(522602),
    o = n(408018),
    c = n(323350),
    d = n(820066),
    f = n(551483);
let h = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function p(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, f.Xg];
}
function m(e) {
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
function y(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let r = p(e),
        i = Object.fromEntries(t.options.map((e) => [e.name, e])),
        a = r?.[0].children;
    if (null != a) {
        for (let t of a)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let r = i[t.optionName];
                null != r && (l[t.optionName] = E(e, r, t, n));
            }
    }
    return l;
}
function E(e, t, n, r) {
    let i = n.children.map((n) => {
        if (t.type === l.n4.ATTACHMENT) {
            let e = u.A.getUpload(r, t.name, s.C.SlashCommand);
            if (null != e) return { type: "text", text: e.filename ?? "" };
        }
        if (d.l5.isText(n)) return { type: "text", text: n.text };
        if (d.VW.isVoid(e, n)) {
            let e = (0, o.QR)(n);
            if (null != e) return e;
        }
        return { type: "text", text: (0, c.IQ)(n, { mode: "raw" }) };
    });
    if (t.type !== l.n4.STRING) {
        for (; i.length > 0 && "text" === i[0].type && "" === i[0].text.trim();) i.shift();
        for (; i.length > 0 && "text" === i[i.length - 1].type && "" === i[i.length - 1].text.trim();) i.pop();
    }
    return i;
}
function v(e, t, n, l, i) {
    if (null == e.options) return {};
    let s = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            a.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: i }),
        ]),
    );
    return (r._y(n, s), s);
}
function A(e, t, n, l, s) {
    let [u] = l,
        o = i.A.getActiveCommand(n),
        c = o?.options?.find((e) => e.name === u.optionName);
    if (null == c) return;
    let d = E(e, c, u, n),
        f = a.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: s });
    return (r.H2(n, { [u.optionName]: { lastValidationResult: f } }), f);
}
function C(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        r = new Set(g(e)),
        i = {},
        a = new Set();
    for (let e of t.options) ((i[e.displayName] = e), r.has(e.name) || a.add(e.displayName));
    let s = null;
    for (let t = 0; t < n.length; t++) {
        let r = n[t];
        if ("line" === r.type || "applicationCommand" === r.type)
            for (let u = 0; u < r.children.length; u++) {
                let o,
                    f = r.children[u],
                    p = [t, u];
                if (d.AS.isType(f, "applicationCommandOption")) {
                    null != s &&
                        ((s.valueRange.focus = d.VW.before(e, p) ?? d.VW.start(e, [])),
                        (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
                        l.push(s),
                        (s = null));
                    continue;
                }
                if (d.l5.isText(f))
                    for (h.lastIndex = 0; null != (o = h.exec(f.text));) {
                        if (0 !== o.index && null == f.text.charAt(o.index - 1).match(/(\t|\s)/)) continue;
                        let e = o[1];
                        if (!a.has(e)) continue;
                        a.delete(e);
                        let t = i[e];
                        if (null == t) continue;
                        let r = { path: p, offset: o.index },
                            u = { path: p, offset: r.offset + o[0].length },
                            d = { path: p, offset: u.offset },
                            h = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: r, focus: u },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        (null != s &&
                            ((s.valueRange.focus = h.keyRange.anchor),
                            (s.text = (0, c.WO)(n, { mode: "raw", range: s.valueRange }).trim()),
                            l.push(s)),
                            (s = h));
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

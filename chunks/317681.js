(n.d(t, { FV: () => E, M3: () => m, O7: () => g, SQ: () => y, cd: () => v, ke: () => x, n$: () => h, pY: () => L }),
    n(321073));
var l = n(155718),
    r = n(721768),
    i = n(861382),
    a = n(203779),
    u = n(31717),
    o = n(522602),
    s = n(408018),
    c = n(323350),
    f = n(820066),
    p = n(551483);
let d = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function h(e) {
    let t = f.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, p.Xg];
}
function m(e) {
    if (null == e.selection) return null;
    let t = f.VW.above(e, { at: e.selection.focus, match: (e) => f.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || f.ZF.isCollapsed(e.selection)
        ? t
        : (f.VW.above(e, { at: e.selection.anchor, match: (e) => f.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function g(e) {
    let t = h(e),
        n = [],
        l = t?.[0].children;
    if (null != l) for (let e of l) f.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function y(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let r = h(e),
        i = Object.fromEntries(t.options.map((e) => [e.name, e])),
        a = r?.[0].children;
    if (null != a) {
        for (let t of a)
            if (f.AS.isType(t, "applicationCommandOption")) {
                let r = i[t.optionName];
                null != r && (l[t.optionName] = E(e, r, t, n));
            }
    }
    return l;
}
function E(e, t, n, r) {
    let i = n.children.map((n) => {
        if (t.type === l.n4.ATTACHMENT) {
            let e = o.A.getUpload(r, t.name, u.C.SlashCommand);
            if (null != e) return { type: "text", text: e.filename ?? "" };
        }
        if (f.l5.isText(n)) return { type: "text", text: n.text };
        if (f.VW.isVoid(e, n)) {
            let e = (0, s.QR)(n);
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
    let u = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            a.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: i }),
        ]),
    );
    return (r._y(n, u), u);
}
function x(e, t, n, l, u) {
    let [o] = l,
        s = i.A.getActiveCommand(n),
        c = s?.options?.find((e) => e.name === o.optionName);
    if (null == c) return;
    let f = E(e, c, o, n),
        p = a.J({ option: c, content: f, guildId: t, channelId: n, allowEmptyValues: u });
    return (r.H2(n, { [o.optionName]: { lastValidationResult: p } }), p);
}
function L(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = f.VW.richValue(e),
        l = [],
        r = new Set(g(e)),
        i = {},
        a = new Set();
    for (let e of t.options) ((i[e.displayName] = e), r.has(e.name) || a.add(e.displayName));
    let u = null;
    for (let t = 0; t < n.length; t++) {
        let r = n[t];
        if ("line" === r.type || "applicationCommand" === r.type)
            for (let o = 0; o < r.children.length; o++) {
                let s,
                    p = r.children[o],
                    h = [t, o];
                if (f.AS.isType(p, "applicationCommandOption")) {
                    null != u &&
                        ((u.valueRange.focus = f.VW.before(e, h) ?? f.VW.start(e, [])),
                        (u.text = (0, c.WO)(n, { mode: "raw", range: u.valueRange }).trim()),
                        l.push(u),
                        (u = null));
                    continue;
                }
                if (f.l5.isText(p))
                    for (d.lastIndex = 0; null != (s = d.exec(p.text));) {
                        if (0 !== s.index && null == p.text.charAt(s.index - 1).match(/(\t|\s)/)) continue;
                        let e = s[1];
                        if (!a.has(e)) continue;
                        a.delete(e);
                        let t = i[e];
                        if (null == t) continue;
                        let r = { path: h, offset: s.index },
                            o = { path: h, offset: r.offset + s[0].length },
                            f = { path: h, offset: o.offset },
                            d = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: r, focus: o },
                                valueRange: { anchor: f, focus: f },
                                text: "",
                            };
                        (null != u &&
                            ((u.valueRange.focus = d.keyRange.anchor),
                            (u.text = (0, c.WO)(n, { mode: "raw", range: u.valueRange }).trim()),
                            l.push(u)),
                            (u = d));
                    }
            }
    }
    return (
        null != u &&
            ((u.valueRange.focus = f.VW.end(e, [])),
            (u.text = (0, c.WO)(n, { mode: "raw", range: u.valueRange }).trim()),
            l.push(u)),
        l
    );
}

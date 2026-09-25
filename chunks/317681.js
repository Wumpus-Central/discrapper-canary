(n.d(t, { FV: () => y, M3: () => m, O7: () => g, SQ: () => x, cd: () => A, ke: () => v, n$: () => p, pY: () => E }),
    n(321073));
var l = n(155718),
    i = n(721768),
    r = n(861382),
    s = n(203779),
    a = n(31717),
    o = n(522602),
    u = n(408018),
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
function x(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let i = p(e),
        r = Object.fromEntries(t.options.map((e) => [e.name, e])),
        s = i?.[0].children;
    if (null != s) {
        for (let t of s)
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
        for (; r.length > 0 && "text" === r[0].type && "" === r[0].text.trim();) r.shift();
        for (; r.length > 0 && "text" === r[r.length - 1].type && "" === r[r.length - 1].text.trim();) r.pop();
    }
    return r;
}
function A(e, t, n, l, r) {
    if (null == e.options) return {};
    let a = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            s.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: r }),
        ]),
    );
    return (i._y(n, a), a);
}
function v(e, t, n, l, a) {
    let [o] = l,
        u = r.A.getActiveCommand(n),
        c = u?.options?.find((e) => e.name === o.optionName);
    if (null == c) return;
    let d = y(e, c, o, n),
        f = s.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: a });
    return (i.H2(n, { [o.optionName]: { lastValidationResult: f } }), f);
}
function E(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        i = new Set(g(e)),
        r = {},
        s = new Set();
    for (let e of t.options) ((r[e.displayName] = e), i.has(e.name) || s.add(e.displayName));
    let a = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ("line" === i.type || "applicationCommand" === i.type)
            for (let o = 0; o < i.children.length; o++) {
                let u,
                    f = i.children[o],
                    p = [t, o];
                if (d.AS.isType(f, "applicationCommandOption")) {
                    null != a &&
                        ((a.valueRange.focus = d.VW.before(e, p) ?? d.VW.start(e, [])),
                        (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                        l.push(a),
                        (a = null));
                    continue;
                }
                if (d.l5.isText(f))
                    for (h.lastIndex = 0; null != (u = h.exec(f.text));) {
                        if (0 !== u.index && null == f.text.charAt(u.index - 1).match(/(\t|\s)/)) continue;
                        let e = u[1];
                        if (!s.has(e)) continue;
                        s.delete(e);
                        let t = r[e];
                        if (null == t) continue;
                        let i = { path: p, offset: u.index },
                            o = { path: p, offset: i.offset + u[0].length },
                            d = { path: p, offset: o.offset },
                            h = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: i, focus: o },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        (null != a &&
                            ((a.valueRange.focus = h.keyRange.anchor),
                            (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                            l.push(a)),
                            (a = h));
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

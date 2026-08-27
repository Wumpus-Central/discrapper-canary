n.d(t, { FV: () => v, M3: () => p, O7: () => g, SQ: () => y, cd: () => A, ke: () => E, n$: () => m, pY: () => x }),
    n(321073);
var l = n(155718),
    r = n(721768),
    i = n(861382),
    s = n(203779),
    a = n(31717),
    u = n(522602),
    o = n(408018),
    c = n(323350),
    d = n(820066),
    f = n(551483);
let h = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function m(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, f.Xg];
}
function p(e) {
    if (null == e.selection) return null;
    let t = d.VW.above(e, { at: e.selection.focus, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null;
    return null != t || d.ZF.isCollapsed(e.selection)
        ? t
        : (d.VW.above(e, { at: e.selection.anchor, match: (e) => d.AS.isType(e, "applicationCommandOption") }) ?? null);
}
function g(e) {
    let t = m(e),
        n = [],
        l = t?.[0].children;
    if (null != l) for (let e of l) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function y(e, t, n) {
    let l = {};
    if (null == t.options) return {};
    let r = m(e),
        i = Object.fromEntries(t.options.map((e) => [e.name, e])),
        s = r?.[0].children;
    if (null != s) {
        for (let t of s)
            if (d.AS.isType(t, "applicationCommandOption")) {
                let r = i[t.optionName];
                null != r && (l[t.optionName] = v(e, r, t, n));
            }
    }
    return l;
}
function v(e, t, n, r) {
    let i = n.children.map((n) => {
        if (t.type === l.n4.ATTACHMENT) {
            let e = u.A.getUpload(r, t.name, a.C.SlashCommand);
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
        for (; i.length > 0 && "text" === i[0].type && "" === i[0].text.trim(); ) i.shift();
        for (; i.length > 0 && "text" === i[i.length - 1].type && "" === i[i.length - 1].text.trim(); ) i.pop();
    }
    return i;
}
function A(e, t, n, l, i) {
    if (null == e.options) return {};
    let a = Object.fromEntries(
        e.options.map((e) => [
            e.name,
            s.J({ option: e, content: l[e.name] ?? null, guildId: t, channelId: n, allowEmptyValues: i }),
        ]),
    );
    return r._y(n, a), a;
}
function E(e, t, n, l, a) {
    let [u] = l,
        o = i.A.getActiveCommand(n),
        c = o?.options?.find((e) => e.name === u.optionName);
    if (null == c) return;
    let d = v(e, c, u, n),
        f = s.J({ option: c, content: d, guildId: t, channelId: n, allowEmptyValues: a });
    return r.H2(n, { [u.optionName]: { lastValidationResult: f } }), f;
}
function x(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = d.VW.richValue(e),
        l = [],
        r = new Set(g(e)),
        i = {},
        s = new Set();
    for (let e of t.options) (i[e.displayName] = e), r.has(e.name) || s.add(e.displayName);
    let a = null;
    for (let t = 0; t < n.length; t++) {
        let r = n[t];
        if ("line" === r.type || "applicationCommand" === r.type)
            for (let u = 0; u < r.children.length; u++) {
                let o,
                    f = r.children[u],
                    m = [t, u];
                if (d.AS.isType(f, "applicationCommandOption")) {
                    null != a &&
                        ((a.valueRange.focus = d.VW.before(e, m) ?? d.VW.start(e, [])),
                        (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                        l.push(a),
                        (a = null));
                    continue;
                }
                if (d.l5.isText(f))
                    for (h.lastIndex = 0; null != (o = h.exec(f.text)); ) {
                        if (0 !== o.index && null == f.text.charAt(o.index - 1).match(/(\t|\s)/)) continue;
                        let e = o[1];
                        if (!s.has(e)) continue;
                        s.delete(e);
                        let t = i[e];
                        if (null == t) continue;
                        let r = { path: m, offset: o.index },
                            u = { path: m, offset: r.offset + o[0].length },
                            d = { path: m, offset: u.offset },
                            h = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: { anchor: r, focus: u },
                                valueRange: { anchor: d, focus: d },
                                text: "",
                            };
                        null != a &&
                            ((a.valueRange.focus = h.keyRange.anchor),
                            (a.text = (0, c.WO)(n, { mode: "raw", range: a.valueRange }).trim()),
                            l.push(a)),
                            (a = h);
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

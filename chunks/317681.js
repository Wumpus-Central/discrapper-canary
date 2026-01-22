n.d(t, {
    FV: () => E,
    M3: () => h,
    O7: () => m,
    SQ: () => g,
    cd: () => b,
    ke: () => y,
    n$: () => _,
    pY: () => O,
}),
    n(591487),
    n(727858),
    n(747238),
    n(321073),
    n(896048),
    n(446912),
    n(733351);
var r = n(155718),
    i = n(721768),
    a = n(861382),
    s = n(978561),
    o = n(31717),
    l = n(522602),
    c = n(408018),
    u = n(323350),
    d = n(711371),
    f = n(551483);
let p = RegExp("([\\p{L}\\p{N}\\p{sc=Deva}\\p{sc=Thai}_-]+):", "gu");
function _(e) {
    let t = d.VW.richValue(e)[0];
    return null == t || "applicationCommand" !== t.type ? null : [t, f.Xg];
}
function h(e) {
    var t, n;
    if (null == e.selection) return null;
    let r =
        null !=
        (t = d.VW.above(e, {
            at: e.selection.focus,
            match: (e) => d.AS.isType(e, "applicationCommandOption"),
        }))
            ? t
            : null;
    return null != r || d.ZF.isCollapsed(e.selection)
        ? r
        : null !=
            (n = d.VW.above(e, {
                at: e.selection.anchor,
                match: (e) => d.AS.isType(e, "applicationCommandOption"),
            }))
          ? n
          : null;
}
function m(e) {
    let t = _(e),
        n = [],
        r = null == t ? void 0 : t[0].children;
    if (null != r) for (let e of r) d.AS.isType(e, "applicationCommandOption") && n.push(e.optionName);
    return n;
}
function g(e, t, n) {
    let r = {};
    if (null == t.options) return {};
    let i = _(e),
        a = Object.fromEntries(t.options.map((e) => [e.name, e])),
        s = null == i ? void 0 : i[0].children;
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
            if (null != e) {
                var a;
                return {
                    type: "text",
                    text: null != (a = e.filename) ? a : "",
                };
            }
        }
        if (d.l5.isText(n))
            return {
                type: "text",
                text: n.text,
            };
        if (d.VW.isVoid(e, n)) {
            let e = (0, c.QR)(n);
            if (null != e) return e;
        }
        return {
            type: "text",
            text: (0, u.IQ)(n, { mode: "raw" }),
        };
    });
    if (t.type !== r.n4.STRING) {
        for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim(); ) a.shift();
        for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim(); ) a.pop();
    }
    return a;
}
function b(e, t, n, r, a) {
    if (null == e.options) return {};
    let o = Object.fromEntries(
        e.options.map((e) => {
            var i;
            return [
                e.name,
                s.J({
                    option: e,
                    content: null != (i = r[e.name]) ? i : null,
                    guildId: t,
                    channelId: n,
                    allowEmptyValues: a,
                }),
            ];
        }),
    );
    return i._y(n, o), o;
}
function y(e, t, n, r, o) {
    var l;
    let [c] = r,
        u = a.A.getActiveCommand(n),
        d = null == u || null == (l = u.options) ? void 0 : l.find((e) => e.name === c.optionName);
    if (null == d) return;
    let f = E(e, d, c, n),
        p = s.J({
            option: d,
            content: f,
            guildId: t,
            channelId: n,
            allowEmptyValues: o,
        });
    return i.H2(n, { [c.optionName]: { lastValidationResult: p } }), p;
}
function O(e, t) {
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
            for (let c = 0; c < i.children.length; c++) {
                let f,
                    _ = i.children[c],
                    h = [t, c];
                if (d.AS.isType(_, "applicationCommandOption")) {
                    if (null != o) {
                        var l;
                        (o.valueRange.focus = null != (l = d.VW.before(e, h)) ? l : d.VW.start(e, [])),
                            (o.text = (0, u.WO)(n, {
                                mode: "raw",
                                range: o.valueRange,
                            }).trim()),
                            r.push(o),
                            (o = null);
                    }
                    continue;
                }
                if (d.l5.isText(_))
                    for (p.lastIndex = 0; null != (f = p.exec(_.text)); ) {
                        if (0 !== f.index && null == _.text.charAt(f.index - 1).match(/(\t|\s)/)) continue;
                        let e = f[1];
                        if (!s.has(e)) continue;
                        s.delete(e);
                        let t = a[e];
                        if (null == t) continue;
                        let i = {
                                path: h,
                                offset: f.index,
                            },
                            l = {
                                path: h,
                                offset: i.offset + f[0].length,
                            },
                            c = {
                                path: h,
                                offset: l.offset,
                            },
                            d = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: {
                                    anchor: i,
                                    focus: l,
                                },
                                valueRange: {
                                    anchor: c,
                                    focus: c,
                                },
                                text: "",
                            };
                        null != o &&
                            ((o.valueRange.focus = d.keyRange.anchor),
                            (o.text = (0, u.WO)(n, {
                                mode: "raw",
                                range: o.valueRange,
                            }).trim()),
                            r.push(o)),
                            (o = d);
                    }
            }
    }
    return (
        null != o &&
            ((o.valueRange.focus = d.VW.end(e, [])),
            (o.text = (0, u.WO)(n, {
                mode: "raw",
                range: o.valueRange,
            }).trim()),
            r.push(o)),
        r
    );
}

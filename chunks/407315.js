n.d(t, {
    Ay: () => h,
    Q9: () => N,
    W: () => C,
}),
    n(896048),
    n(321073),
    n(747238),
    n(812715);
var r = n(28728),
    i = n(635377),
    a = n.n(i),
    s = n(927813),
    o = n(752238),
    l = n(186306),
    c = n(323350),
    u = n(35277),
    d = n(711371),
    f = n(551483);
let p = new Set(["line"]),
    _ = /^[a-z0-9_+\-.#]+$/i;
function h(e) {
    let { onChange: t } = e,
        n = null;
    return (
        (e.onChange = () => {
            d.VW.richValue(e) !== n &&
                (l.o.withMergedEntry(e, () => {
                    d.VW.withoutNormalizing(e, () => m(e));
                }),
                (n = d.VW.richValue(e))),
                t();
        }),
        e
    );
}
function m(e) {
    let t = E(e);
    y(e, t);
}
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function E(e) {
    let t = [],
        n = null;
    for (let r of d.VW.blocks(e))
        (n = b(
            e,
            r,
            null != n && (n.isInCodeBlock || n.opensCodeBlock),
            null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
            null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null,
        )),
            t.push(n);
    return A(t), t;
}
function b(e, t, n, r, i) {
    var a;
    let s = T(t),
        l = s[0],
        c = s[s.length - 1],
        u = null;
    if (null != c) {
        let [t] = d.VW.node(e, c.path);
        u = t.text.substring(c.offset + 3);
    }
    let f = n && null != l,
        p = n && 0 === s.length,
        h = r && 0 === s.length,
        m = (f ? s.slice(1) : s).length % 2 == 1,
        g = m && (null == u || "" === u || null != u.match(_)),
        E = g && null != u && null != (a = o.default.resolveLanguageName(u)) ? a : null;
    return {
        blockEntry: t,
        wasInCodeBlock: n,
        isInCodeBlock: p,
        isStyledCodeBlockLine: h,
        lang: m || f ? E : i,
        hljsTypes: null,
        closesCodeBlock: f,
        opensCodeBlock: m,
        opensCodeBlockOnOwnLine: g,
    };
}
function y(e, t) {
    for (let n of t) {
        let [t, r] = n.blockEntry,
            i = O(n);
        (null == t ? void 0 : t.codeBlockState) != i && u.b.setNodes(e, { codeBlockState: i }, { at: r });
    }
}
function O(e) {
    return e.isStyledCodeBlockLine || e.wasInCodeBlock
        ? {
              lang: e.lang,
              wasInCodeBlock: e.wasInCodeBlock,
              isInCodeBlock: e.isInCodeBlock,
              isStyledCodeBlockLine: e.isStyledCodeBlockLine,
              hljsTypes: e.hljsTypes,
          }
        : null;
}
function A(e) {
    let t = [],
        n = !1;
    for (let i of e) {
        let a = i === e[e.length - 1];
        if ((i.closesCodeBlock || a) && (n && a && !i.closesCodeBlock && t.push(i), (n = !1), t.length > 0)) {
            let e = t.map((e) => (0, c.IQ)(e.blockEntry[0])).join("\n"),
                n = t[0].lang;
            if (null != n && null != r.A.getLanguage(n)) {
                let r = I(e, n);
                if (null != r && r.length === t.length) {
                    let e = [];
                    for (let n = 0; n < t.length; n++) {
                        let i,
                            a = r[n]
                                .replace(/&amp;/g, "&")
                                .replace(/&lt;/g, "<")
                                .replace(/&gt;/g, ">")
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            s = [],
                            o = 0,
                            l = 0;
                        for (; null != (i = g.exec(a)); ) {
                            let t = i.index + i[0].length,
                                n = i.index - l;
                            i.index > l &&
                                (e.length > 0 &&
                                    s.push({
                                        types: [...e],
                                        start: o,
                                        end: o + n,
                                    }),
                                (o += n)),
                                "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                (l = t);
                        }
                        if (e.length > 0) {
                            let t = a.length - l;
                            s.push({
                                types: [...e],
                                start: o,
                                end: o + t,
                            });
                        }
                        t[n].hljsTypes = s;
                    }
                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
            }
            t = [];
        }
        n && t.push(i), i.opensCodeBlock && (n = !0);
    }
}
let v = {
        max: 1 / 0,
        maxAge: +s.A.Millis.MINUTE,
        updateAgeOnGet: !0,
    },
    S = new (a())(v);
function I(e, t) {
    let n = "".concat(e, "-").concat(t),
        r = S.get(n);
    if (null != r) return r;
    let i = o.default.highlight(t, e, !1);
    if (null == i || i.illegal) return null;
    let a = i.value.split("\n");
    return S.set(n, a), a;
}
function T(e) {
    let t,
        [n, r] = e;
    if (!p.has(n.type)) return [];
    let i = [],
        a = /\\|```/g;
    for (let e = 0; e < n.children.length; e++) {
        let s = n.children[e];
        if (d.l5.isText(s))
            for (a.lastIndex = 0; null != (t = a.exec(s.text)); ) {
                if ("\\" === t[0]) {
                    a.lastIndex += 1;
                    continue;
                }
                i.push({
                    path: d.PW.child(r, e),
                    offset: t.index,
                });
            }
    }
    return i;
}
function C(e, t) {
    let n = 0;
    for (let i of d.VW.nodes(e, {
        at: {
            anchor: {
                path: f.fP,
                offset: 0,
            },
            focus: t,
        },
        mode: "lowest",
        match: (e) => d.l5.isText(e),
    })) {
        var r;
        let e = i[0].text;
        d.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let a = e.match(/```/g);
        n += null != (r = null == a ? void 0 : a.length) ? r : 0;
    }
    return n % 2 != 0;
}
function N(e) {
    if (null == e.selection) return !1;
    let t = d.ZF.start(e.selection);
    return C(e, t);
}

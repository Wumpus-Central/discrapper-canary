"use strict";
n.d(t, { Ay: () => h, Q9: () => I, W: () => A }), n(321073);
var r = n(79719),
    i = n(635377),
    s = n.n(i),
    a = n(927813),
    o = n(752238),
    l = n(186306),
    u = n(323350),
    c = n(35277),
    d = n(711371),
    _ = n(551483);
let f = new Set(["line"]),
    p = /^[a-z0-9_+\-.#]+$/i;
function h(e) {
    let { onChange: t } = e,
        n = null;
    return (
        (e.onChange = () => {
            d.VW.richValue(e) !== n &&
                (l.o.withMergedEntry(e, () => {
                    d.VW.withoutNormalizing(e, () =>
                        (function (e) {
                            let t = (function (e) {
                                let t = [],
                                    n = null;
                                for (let r of d.VW.blocks(e))
                                    (n = (function (e, t, n, r, i) {
                                        let s = (function (e) {
                                                let t,
                                                    [n, r] = e;
                                                if (!f.has(n.type)) return [];
                                                let i = [],
                                                    s = /\\|```/g;
                                                for (let e = 0; e < n.children.length; e++) {
                                                    let a = n.children[e];
                                                    if (d.l5.isText(a))
                                                        for (s.lastIndex = 0; null != (t = s.exec(a.text)); ) {
                                                            if ("\\" === t[0]) {
                                                                s.lastIndex += 1;
                                                                continue;
                                                            }
                                                            i.push({ path: d.PW.child(r, e), offset: t.index });
                                                        }
                                                }
                                                return i;
                                            })(t),
                                            a = s[0],
                                            l = s[s.length - 1],
                                            u = null;
                                        if (null != l) {
                                            let [t] = d.VW.node(e, l.path);
                                            u = t.text.substring(l.offset + 3);
                                        }
                                        let c = n && null != a,
                                            _ = n && 0 === s.length,
                                            h = r && 0 === s.length,
                                            E = (c ? s.slice(1) : s).length % 2 == 1,
                                            m = E && (null == u || "" === u || null != u.match(p)),
                                            g = m && null != u ? (o.default.resolveLanguageName(u) ?? null) : null;
                                        return {
                                            blockEntry: t,
                                            wasInCodeBlock: n,
                                            isInCodeBlock: _,
                                            isStyledCodeBlockLine: h,
                                            lang: E || c ? g : i,
                                            hljsTypes: null,
                                            closesCodeBlock: c,
                                            opensCodeBlock: E,
                                            opensCodeBlockOnOwnLine: m,
                                        };
                                    })(
                                        e,
                                        r,
                                        null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                        null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                        null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null,
                                    )),
                                        t.push(n);
                                return (
                                    (function (e) {
                                        let t = [],
                                            n = !1;
                                        for (let i of e) {
                                            let s = i === e[e.length - 1];
                                            if (
                                                (i.closesCodeBlock || s) &&
                                                (n && s && !i.closesCodeBlock && t.push(i), (n = !1), t.length > 0)
                                            ) {
                                                let e = t.map((e) => (0, u.IQ)(e.blockEntry[0])).join("\n"),
                                                    n = t[0].lang;
                                                if (null != n && null != r.A.getLanguage(n)) {
                                                    let r = (function (e, t) {
                                                        let n = `${e}-${t}`,
                                                            r = g.get(n);
                                                        if (null != r) return r;
                                                        let i = o.default.highlight(t, e, !1);
                                                        if (null == i || i.illegal) return null;
                                                        let s = i.value.split("\n");
                                                        return g.set(n, s), s;
                                                    })(e, n);
                                                    if (null != r && r.length === t.length) {
                                                        let e = [];
                                                        for (let n = 0; n < t.length; n++) {
                                                            let i,
                                                                s = r[n]
                                                                    .replace(/&amp;/g, "&")
                                                                    .replace(/&lt;/g, "<")
                                                                    .replace(/&gt;/g, ">")
                                                                    .replace(/&quot;/g, '"')
                                                                    .replace(/&#x27;/g, "'"),
                                                                a = [],
                                                                o = 0,
                                                                l = 0;
                                                            for (; null != (i = E.exec(s)); ) {
                                                                let t = i.index + i[0].length,
                                                                    n = i.index - l;
                                                                i.index > l &&
                                                                    (e.length > 0 &&
                                                                        a.push({ types: [...e], start: o, end: o + n }),
                                                                    (o += n)),
                                                                    "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                                                    (l = t);
                                                            }
                                                            if (e.length > 0) {
                                                                let t = s.length - l;
                                                                a.push({ types: [...e], start: o, end: o + t });
                                                            }
                                                            t[n].hljsTypes = a;
                                                        }
                                                    } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
                                                }
                                                t = [];
                                            }
                                            n && t.push(i), i.opensCodeBlock && (n = !0);
                                        }
                                    })(t),
                                    t
                                );
                            })(e);
                            var n,
                                i = e,
                                s = t;
                            for (let e of s) {
                                let [t, r] = e.blockEntry,
                                    s =
                                        (n = e).isStyledCodeBlockLine || n.wasInCodeBlock
                                            ? {
                                                  lang: n.lang,
                                                  wasInCodeBlock: n.wasInCodeBlock,
                                                  isInCodeBlock: n.isInCodeBlock,
                                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                                  hljsTypes: n.hljsTypes,
                                              }
                                            : null;
                                t?.codeBlockState != s && c.b.setNodes(i, { codeBlockState: s }, { at: r });
                            }
                        })(e),
                    );
                }),
                (n = d.VW.richValue(e))),
                t();
        }),
        e
    );
}
let E = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    m = { max: 1 / 0, maxAge: +a.A.Millis.MINUTE, updateAgeOnGet: !0 },
    g = new (s())(m);
function A(e, t) {
    let n = 0;
    for (let r of d.VW.nodes(e, {
        at: { anchor: { path: _.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => d.l5.isText(e),
    })) {
        let e = r[0].text;
        d.PW.equals(r[1], t.path) && (e = e.substring(0, t.offset));
        let i = e.match(/```/g);
        n += i?.length ?? 0;
    }
    return n % 2 != 0;
}
function I(e) {
    if (null == e.selection) return !1;
    let t = d.ZF.start(e.selection);
    return A(e, t);
}

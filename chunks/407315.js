"use strict";
n.d(t, { Ay: () => f, Q9: () => C, W: () => A }), n(321073);
var i = n(79719),
    l = n(635377),
    s = n.n(l),
    r = n(927813),
    a = n(752238),
    o = n(186306),
    c = n(323350),
    u = n(35277),
    d = n(711371),
    h = n(551483);
let m = new Set(["line"]),
    p = /^[a-z0-9_+\-.#]+$/i;
function f(e) {
    let { onChange: t } = e,
        n = null;
    return (
        (e.onChange = () => {
            d.VW.richValue(e) !== n &&
                (o.o.withMergedEntry(e, () => {
                    d.VW.withoutNormalizing(e, () =>
                        (function (e) {
                            let t = (function (e) {
                                let t = [],
                                    n = null;
                                for (let i of d.VW.blocks(e))
                                    (n = (function (e, t, n, i, l) {
                                        let s = (function (e) {
                                                let t,
                                                    [n, i] = e;
                                                if (!m.has(n.type)) return [];
                                                let l = [],
                                                    s = /\\|```/g;
                                                for (let e = 0; e < n.children.length; e++) {
                                                    let r = n.children[e];
                                                    if (d.l5.isText(r))
                                                        for (s.lastIndex = 0; null != (t = s.exec(r.text)); ) {
                                                            if ("\\" === t[0]) {
                                                                s.lastIndex += 1;
                                                                continue;
                                                            }
                                                            l.push({ path: d.PW.child(i, e), offset: t.index });
                                                        }
                                                }
                                                return l;
                                            })(t),
                                            r = s[0],
                                            o = s[s.length - 1],
                                            c = null;
                                        if (null != o) {
                                            let [t] = d.VW.node(e, o.path);
                                            c = t.text.substring(o.offset + 3);
                                        }
                                        let u = n && null != r,
                                            h = n && 0 === s.length,
                                            f = i && 0 === s.length,
                                            g = (u ? s.slice(1) : s).length % 2 == 1,
                                            _ = g && (null == c || "" === c || null != c.match(p)),
                                            x = _ && null != c ? (a.default.resolveLanguageName(c) ?? null) : null;
                                        return {
                                            blockEntry: t,
                                            wasInCodeBlock: n,
                                            isInCodeBlock: h,
                                            isStyledCodeBlockLine: f,
                                            lang: g || u ? x : l,
                                            hljsTypes: null,
                                            closesCodeBlock: u,
                                            opensCodeBlock: g,
                                            opensCodeBlockOnOwnLine: _,
                                        };
                                    })(
                                        e,
                                        i,
                                        null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                        null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                        null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null,
                                    )),
                                        t.push(n);
                                return (
                                    (function (e) {
                                        let t = [],
                                            n = !1;
                                        for (let l of e) {
                                            let s = l === e[e.length - 1];
                                            if (
                                                (l.closesCodeBlock || s) &&
                                                (n && s && !l.closesCodeBlock && t.push(l), (n = !1), t.length > 0)
                                            ) {
                                                let e = t.map((e) => (0, c.IQ)(e.blockEntry[0])).join("\n"),
                                                    n = t[0].lang;
                                                if (null != n && null != i.A.getLanguage(n)) {
                                                    let i = (function (e, t) {
                                                        let n = `${e}-${t}`,
                                                            i = x.get(n);
                                                        if (null != i) return i;
                                                        let l = a.default.highlight(t, e, !1);
                                                        if (null == l || l.illegal) return null;
                                                        let s = l.value.split("\n");
                                                        return x.set(n, s), s;
                                                    })(e, n);
                                                    if (null != i && i.length === t.length) {
                                                        let e = [];
                                                        for (let n = 0; n < t.length; n++) {
                                                            let l,
                                                                s = i[n]
                                                                    .replace(/&amp;/g, "&")
                                                                    .replace(/&lt;/g, "<")
                                                                    .replace(/&gt;/g, ">")
                                                                    .replace(/&quot;/g, '"')
                                                                    .replace(/&#x27;/g, "'"),
                                                                r = [],
                                                                a = 0,
                                                                o = 0;
                                                            for (; null != (l = g.exec(s)); ) {
                                                                let t = l.index + l[0].length,
                                                                    n = l.index - o;
                                                                l.index > o &&
                                                                    (e.length > 0 &&
                                                                        r.push({ types: [...e], start: a, end: a + n }),
                                                                    (a += n)),
                                                                    "</span>" === l[0] ? e.pop() : e.push(l[1]),
                                                                    (o = t);
                                                            }
                                                            if (e.length > 0) {
                                                                let t = s.length - o;
                                                                r.push({ types: [...e], start: a, end: a + t });
                                                            }
                                                            t[n].hljsTypes = r;
                                                        }
                                                    } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
                                                }
                                                t = [];
                                            }
                                            n && t.push(l), l.opensCodeBlock && (n = !0);
                                        }
                                    })(t),
                                    t
                                );
                            })(e);
                            var n,
                                l = e,
                                s = t;
                            for (let e of s) {
                                let [t, i] = e.blockEntry,
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
                                t?.codeBlockState != s && u.b.setNodes(l, { codeBlockState: s }, { at: i });
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
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    _ = { max: 1 / 0, maxAge: +r.A.Millis.MINUTE, updateAgeOnGet: !0 },
    x = new (s())(_);
function A(e, t) {
    let n = 0;
    for (let i of d.VW.nodes(e, {
        at: { anchor: { path: h.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => d.l5.isText(e),
    })) {
        let e = i[0].text;
        d.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let l = e.match(/```/g);
        n += l?.length ?? 0;
    }
    return n % 2 != 0;
}
function C(e) {
    if (null == e.selection) return !1;
    let t = d.ZF.start(e.selection);
    return A(e, t);
}

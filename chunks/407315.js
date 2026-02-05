"use strict";
n.d(t, { Ay: () => h, Q9: () => R, W: () => N }), n(321073);
var r = n(28728),
    i = n(635377),
    a = n.n(i),
    s = n(927813),
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
    I(e, t);
}
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function E(e) {
    let t = [],
        n = null;
    for (let r of d.VW.blocks(e))
        (n = A(
            e,
            r,
            null != n && (n.isInCodeBlock || n.opensCodeBlock),
            null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
            null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null,
        )),
            t.push(n);
    return y(t), t;
}
function A(e, t, n, r, i) {
    let a = b(t),
        s = a[0],
        l = a[a.length - 1],
        u = null;
    if (null != l) {
        let [t] = d.VW.node(e, l.path);
        u = t.text.substring(l.offset + 3);
    }
    let c = n && null != s,
        _ = n && 0 === a.length,
        f = r && 0 === a.length,
        h = (c ? a.slice(1) : a).length % 2 == 1,
        m = h && (null == u || "" === u || null != u.match(p)),
        g = m && null != u ? (o.default.resolveLanguageName(u) ?? null) : null;
    return {
        blockEntry: t,
        wasInCodeBlock: n,
        isInCodeBlock: _,
        isStyledCodeBlockLine: f,
        lang: h || c ? g : i,
        hljsTypes: null,
        closesCodeBlock: c,
        opensCodeBlock: h,
        opensCodeBlockOnOwnLine: m,
    };
}
function I(e, t) {
    for (let n of t) {
        let [t, r] = n.blockEntry,
            i = T(n);
        t?.codeBlockState != i && c.b.setNodes(e, { codeBlockState: i }, { at: r });
    }
}
function T(e) {
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
function y(e) {
    let t = [],
        n = !1;
    for (let i of e) {
        let a = i === e[e.length - 1];
        if ((i.closesCodeBlock || a) && (n && a && !i.closesCodeBlock && t.push(i), (n = !1), t.length > 0)) {
            let e = t.map((e) => (0, u.IQ)(e.blockEntry[0])).join("\n"),
                n = t[0].lang;
            if (null != n && null != r.A.getLanguage(n)) {
                let r = C(e, n);
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
                            i.index > l && (e.length > 0 && s.push({ types: [...e], start: o, end: o + n }), (o += n)),
                                "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                (l = t);
                        }
                        if (e.length > 0) {
                            let t = a.length - l;
                            s.push({ types: [...e], start: o, end: o + t });
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
let S = { max: 1 / 0, maxAge: +s.A.Millis.MINUTE, updateAgeOnGet: !0 },
    v = new (a())(S);
function C(e, t) {
    let n = `${e}-${t}`,
        r = v.get(n);
    if (null != r) return r;
    let i = o.default.highlight(t, e, !1);
    if (null == i || i.illegal) return null;
    let a = i.value.split("\n");
    return v.set(n, a), a;
}
function b(e) {
    let t,
        [n, r] = e;
    if (!f.has(n.type)) return [];
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
                i.push({ path: d.PW.child(r, e), offset: t.index });
            }
    }
    return i;
}
function N(e, t) {
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
function R(e) {
    if (null == e.selection) return !1;
    let t = d.ZF.start(e.selection);
    return N(e, t);
}

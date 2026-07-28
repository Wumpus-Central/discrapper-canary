"use strict";
n.d(t, { CC: () => d, JT: () => f, Kq: () => u, P_: () => l, SK: () => h, Sl: () => c, _E: () => p });
var r = n(334887),
    i = n(909630),
    a = n(192734),
    o = n(576024),
    s = n(582128);
let l = Symbol("default");
function u({ values: e, children: t }) {
    for (let [n, r] of e) t = s.createElement(n.Provider, { value: r }, t);
    return t;
}
function c(e) {
    let {
        className: t,
        style: n,
        children: r,
        defaultClassName: i,
        defaultChildren: a,
        defaultStyle: o,
        values: l,
    } = e;
    return (0, s.useMemo)(() => {
        let e, s, u;
        return (
            (e = "function" == typeof t ? t({ ...l, defaultClassName: i }) : t),
            (s = "function" == typeof n ? n({ ...l, defaultStyle: o || {} }) : n),
            (u = "function" == typeof r ? r({ ...l, defaultChildren: a }) : null == r ? a : r),
            {
                className: null != e ? e : i,
                style: s || o ? { ...o, ...s } : void 0,
                children: null != u ? u : a,
                "data-rac": "",
            }
        );
    }, [t, n, r, i, a, o, l]);
}
function d(e, t) {
    let n = (0, s.useContext)(e);
    if (null === t) return null;
    if (n && "object" == typeof n && "slots" in n && n.slots) {
        let e = t || l;
        if (!n.slots[e]) {
            let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)),
                r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
            throw Error(`${r} Valid slot names are ${e}.`);
        }
        return n.slots[e];
    }
    return n;
}
function f(e, t, n) {
    let { ref: o, ...l } = d(n, e.slot) || {},
        u = (0, r.U)((0, s.useMemo)(() => (0, i.P)(t, o), [t, o])),
        c = (0, a.v)(l, e);
    return (
        "style" in l &&
            l.style &&
            "style" in e &&
            e.style &&
            ("function" == typeof l.style || "function" == typeof e.style
                ? (c.style = (t) => {
                      let n = "function" == typeof l.style ? l.style(t) : l.style,
                          r = { ...t.defaultStyle, ...n },
                          i = "function" == typeof e.style ? e.style({ ...t, defaultStyle: r }) : e.style;
                      return { ...r, ...i };
                  })
                : (c.style = { ...l.style, ...e.style })),
        [c, u]
    );
}
function p(e = !0) {
    let [t, n] = (0, s.useState)(e),
        r = (0, s.useRef)(!1),
        i = (0, s.useCallback)((e) => {
            (r.current = !0), n(!!e);
        }, []);
    return (
        (0, o.N)(() => {
            r.current || n(!1);
        }, []),
        [i, t]
    );
}
function h(e) {
    let t = /^(data-.*)$/,
        n = {};
    for (let r in e) t.test(r) || (n[r] = e[r]);
    return n;
}

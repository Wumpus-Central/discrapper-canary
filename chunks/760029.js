"use strict";
r.d(t, { CC: () => f, JT: () => d, Kq: () => u, P_: () => l, SK: () => h, Sl: () => c, _E: () => p });
var n = r(334887),
    i = r(909630),
    o = r(192734),
    a = r(576024),
    s = r(582128);
let l = Symbol("default");
function u({ values: e, children: t }) {
    for (let [r, n] of e) t = s.createElement(r.Provider, { value: n }, t);
    return t;
}
function c(e) {
    let {
        className: t,
        style: r,
        children: n,
        defaultClassName: i,
        defaultChildren: o,
        defaultStyle: a,
        values: l,
    } = e;
    return (0, s.useMemo)(() => {
        let e, s, u;
        return (
            (e = "function" == typeof t ? t({ ...l, defaultClassName: i }) : t),
            (s = "function" == typeof r ? r({ ...l, defaultStyle: a || {} }) : r),
            (u = "function" == typeof n ? n({ ...l, defaultChildren: o }) : null == n ? o : n),
            {
                className: null != e ? e : i,
                style: s || a ? { ...a, ...s } : void 0,
                children: null != u ? u : o,
                "data-rac": "",
            }
        );
    }, [t, r, n, i, o, a, l]);
}
function f(e, t) {
    let r = (0, s.useContext)(e);
    if (null === t) return null;
    if (r && "object" == typeof r && "slots" in r && r.slots) {
        let e = t || l;
        if (!r.slots[e]) {
            let e = new Intl.ListFormat().format(Object.keys(r.slots).map((e) => `"${e}"`)),
                n = t ? `Invalid slot "${t}".` : "A slot prop is required.";
            throw Error(`${n} Valid slot names are ${e}.`);
        }
        return r.slots[e];
    }
    return r;
}
function d(e, t, r) {
    let { ref: a, ...l } = f(r, e.slot) || {},
        u = (0, n.U)((0, s.useMemo)(() => (0, i.P)(t, a), [t, a])),
        c = (0, o.v)(l, e);
    return (
        "style" in l &&
            l.style &&
            "style" in e &&
            e.style &&
            ("function" == typeof l.style || "function" == typeof e.style
                ? (c.style = (t) => {
                      let r = "function" == typeof l.style ? l.style(t) : l.style,
                          n = { ...t.defaultStyle, ...r },
                          i = "function" == typeof e.style ? e.style({ ...t, defaultStyle: n }) : e.style;
                      return { ...n, ...i };
                  })
                : (c.style = { ...l.style, ...e.style })),
        [c, u]
    );
}
function p(e = !0) {
    let [t, r] = (0, s.useState)(e),
        n = (0, s.useRef)(!1),
        i = (0, s.useCallback)((e) => {
            (n.current = !0), r(!!e);
        }, []);
    return (
        (0, a.N)(() => {
            n.current || r(!1);
        }, []),
        [i, t]
    );
}
function h(e) {
    let t = /^(data-.*)$/,
        r = {};
    for (let n in e) t.test(n) || (r[n] = e[n]);
    return r;
}

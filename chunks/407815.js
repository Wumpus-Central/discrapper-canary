"use strict";
r.d(t, { CC: () => f, JT: () => d, Kq: () => u, P_: () => l, SK: () => h, Sl: () => c, _E: () => p, tT: () => y });
var n = r(184093),
    i = r(814204),
    o = r(582128),
    a = r(361854),
    s = r(475921);
let l = Symbol("default");
function u({ values: e, children: t }) {
    for (let [r, n] of e) t = o.createElement(r.Provider, { value: n }, t);
    return t;
}
function c(e) {
    let {
        className: t,
        style: r,
        children: n,
        defaultClassName: i,
        defaultChildren: a,
        defaultStyle: s,
        values: l,
        render: u,
    } = e;
    return (0, o.useMemo)(() => {
        let e, o, c;
        return (
            (e = "function" == typeof t ? t({ ...l, defaultClassName: i }) : t),
            (o = "function" == typeof r ? r({ ...l, defaultStyle: s || {} }) : r),
            (c = "function" == typeof n ? n({ ...l, defaultChildren: a }) : null == n ? a : n),
            {
                className: e ?? i,
                style: o || s ? { ...s, ...o } : void 0,
                children: c ?? a,
                "data-rac": "",
                render: u ? (e) => u(e, l) : void 0,
            }
        );
    }, [t, r, n, i, a, s, l, u]);
}
function f(e, t) {
    let r = (0, o.useContext)(e);
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
        u = (0, s.U)((0, o.useMemo)(() => (0, i.P)(t, a), [t, a])),
        c = (0, n.v)(l, e);
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
    let [t, r] = (0, o.useState)(e),
        n = (0, o.useRef)(!1),
        i = (0, o.useCallback)((e) => {
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
function m(e, t, r) {
    let { render: n, ...s } = t,
        l = (0, o.useRef)(null),
        u = (0, o.useMemo)(() => (0, i.P)(r, l), [r, l]);
    (0, a.N)(() => {}, [e, n]);
    let c = { ...s, ref: u };
    return n ? n(c, void 0) : o.createElement(e, c);
}
let v = {},
    y = new Proxy(
        {},
        {
            get(e, t) {
                if ("string" != typeof t) return;
                let r = v[t];
                return r || ((r = (0, o.forwardRef)(m.bind(null, t))), (v[t] = r)), r;
            },
        },
    );

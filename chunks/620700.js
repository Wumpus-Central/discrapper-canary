"use strict";
n.d(t, { A: () => h }), n(938796);
var r = n(627968),
    i = n(64700),
    s = n(380610),
    a = n(348056),
    o = n(833291),
    l = n(333421),
    u = n(100392),
    c = n(950980),
    d = n(836156);
let _ = i.lazy(() =>
        n
            .e("67696")
            .then(n.bind(n, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    f = i.lazy(() =>
        n
            .e("78078")
            .then(n.bind(n, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    p = RegExp("^" + o.st.source, o.st.flags);
function h(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? p.exec(e) : null),
        parse: (e, t) => ({ target: e, type: "devLink" }),
        react: (e, t, n) => {
            let o = e.target[0];
            return (0, s.h4)(o)
                ? (0, r.jsxs)(
                      i.Fragment,
                      { children: [(0, r.jsx)("span", { children: o }), (0, r.jsx)(a.A, { url: o }, o)] },
                      n.key,
                  )
                : (0, u.W0)(o)
                  ? (0, r.jsxs)(
                        i.Fragment,
                        { children: [(0, r.jsx)("span", { children: o }), (0, r.jsx)(c.Z, { url: o })] },
                        n.key,
                    )
                  : (0, d.i)(o)
                    ? (0, r.jsx)(
                          i.Fragment,
                          {
                              children: (0, r.jsxs)(i.Suspense, {
                                  fallback: null,
                                  children: [(0, r.jsx)("span", { children: o }), (0, r.jsx)(_, { url: o })],
                              }),
                          },
                          n.key,
                      )
                    : (0, l.my)(o)
                      ? (0, r.jsx)(
                            i.Fragment,
                            {
                                children: (0, r.jsxs)(i.Suspense, {
                                    fallback: null,
                                    children: [(0, r.jsx)("span", { children: o }), (0, r.jsx)(f, { url: o })],
                                }),
                            },
                            n.key,
                        )
                      : (0, r.jsx)("span", { children: o }, n.key);
        },
        order: 6,
    };
}

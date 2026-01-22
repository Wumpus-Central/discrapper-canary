n.d(t, {
    A: () => p,
}),
    n(591487),
    n(727858),
    n(747238),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(380610),
    s = n(348056),
    o = n(833291),
    l = n(100392),
    c = n(950980),
    u = n(836156);
let d = i.lazy(() =>
        n
            .e("67696")
            .then(n.bind(n, 881267))
            .then((e) => ({
                default: e.PlaygroundEmbed,
            })),
    ),
    f = RegExp("^" + o.st.source, o.st.flags);

function p(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? f.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: "devLink",
        }),
        react: (e, t, n) => {
            let o = e.target[0];
            return (0, a.h4)(o)
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)("span", {
                                  children: o,
                              }),
                              (0, r.jsx)(
                                  s.A,
                                  {
                                      url: o,
                                  },
                                  o,
                              ),
                          ],
                      },
                      n.key,
                  )
                : (0, l.W0)(o)
                  ? (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)("span", {
                                    children: o,
                                }),
                                (0, r.jsx)(c.Z, {
                                    url: o,
                                }),
                            ],
                        },
                        n.key,
                    )
                  : (0, u.i)(o)
                    ? (0, r.jsx)(
                          i.Fragment,
                          {
                              children: (0, r.jsxs)(i.Suspense, {
                                  fallback: null,
                                  children: [
                                      (0, r.jsx)("span", {
                                          children: o,
                                      }),
                                      (0, r.jsx)(d, {
                                          url: o,
                                      }),
                                  ],
                              }),
                          },
                          n.key,
                      )
                    : (0, r.jsx)(
                          "span",
                          {
                              children: o,
                          },
                          n.key,
                      );
        },
        order: 6,
    };
}

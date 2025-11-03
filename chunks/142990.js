n.d(t, { Z: () => _ }), n(413496), n(433524), n(35282), n(997841);
var r = n(951288),
    i = n(647438),
    a = n(865427),
    o = n(853425),
    s = n(830121),
    l = n(922699),
    c = n(887580),
    u = n(811364);
let d = i.lazy(() =>
        n
            .e("61061")
            .then(n.bind(n, 982661))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    f = RegExp("^" + s.oO.source, s.oO.flags);
function _(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? f.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: "devLink",
        }),
        react: (e, t, n) => {
            let s = e.target[0];
            return (0, a.mG)(s)
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [(0, r.jsx)("span", { children: s }), (0, r.jsx)(o.Z, { url: s }, s)],
                      },
                      n.key,
                  )
                : (0, l.$2)(s)
                  ? (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [(0, r.jsx)("span", { children: s }), (0, r.jsx)(c.v, { url: s })],
                        },
                        n.key,
                    )
                  : (0, u.Y)(s)
                    ? (0, r.jsx)(
                          i.Fragment,
                          {
                              children: (0, r.jsxs)(i.Suspense, {
                                  fallback: null,
                                  children: [(0, r.jsx)("span", { children: s }), (0, r.jsx)(d, { url: s })],
                              }),
                          },
                          n.key,
                      )
                    : (0, r.jsx)("span", { children: s }, n.key);
        },
        order: 6,
    };
}

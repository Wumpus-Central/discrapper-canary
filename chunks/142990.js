n.d(t, { Z: () => f }), n(413496), n(433524), n(35282), n(997841);
var r = n(951288),
    i = n(647438),
    a = n(316686),
    o = n(865427),
    s = n(853425),
    l = n(830121),
    c = n(887580);
let u = i.lazy(() =>
        Promise.all([n.e("33622"), n.e("75215"), n.e("66548"), n.e("950"), n.e("36182")])
            .then(n.bind(n, 600406))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    d = RegExp("^" + l.oO.source, l.oO.flags);
function f(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? d.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: "devLink",
        }),
        react: (e, t, n) => {
            let l = e.target[0];
            return (0, o.mG)(l)
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [(0, r.jsx)("span", { children: l }), (0, r.jsx)(s.Z, { url: l }, l)],
                      },
                      n.key,
                  )
                : (0, c.$2)(l)
                  ? (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [(0, r.jsx)("span", { children: l }), (0, r.jsx)(c.vF, { url: l })],
                        },
                        n.key,
                    )
                  : (0, a.Y)(l)
                    ? (0, r.jsx)(
                          i.Fragment,
                          {
                              children: (0, r.jsxs)(i.Suspense, {
                                  fallback: null,
                                  children: [(0, r.jsx)("span", { children: l }), (0, r.jsx)(u, { url: l })],
                              }),
                          },
                          n.key,
                      )
                    : (0, r.jsx)("span", { children: l }, n.key);
        },
        order: 6,
    };
}

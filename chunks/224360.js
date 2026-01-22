n.d(t, {
    A: () => O,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    c = n(915089),
    u = n(61881),
    d = n(788593),
    f = n(507247),
    p = n(973397),
    b = n(985018),
    g = n(461349),
    m = n(105778);

function y(e) {
    let { applicationId: t, userId: n, onClick: l } = e,
        { coverImageUrl: i, gameName: c, isLoading: f } = (0, p.A)(t),
        y = (0, a.bG)([u.A], () => u.A.suggestedFetchIsLoading),
        O = b.intl.formatToPlainString(b.t["3mb1s5"], {
            game: c,
        });
    return f || y
        ? (0, r.jsx)("div", {
              className: g.mD,
          })
        : (0, r.jsx)(s.m, {
              text: O,
              ariaHidden: !0,
              children: (0, r.jsxs)(o.DUT, {
                  className: m.c9,
                  onClick: l,
                  "aria-label": O,
                  children: [
                      (0, r.jsx)(d.A, {
                          className: m.Iv,
                          imageSrc: i,
                          gameName: c,
                          applicationId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, r.jsx)(o.pa$, {
                          size: "md",
                          className: m.Xv,
                          color: o.LU0.colors.WHITE,
                      }),
                  ],
              }),
          });
}

function O(e) {
    let { userId: t, games: n, onDismiss: l, onClick: a, className: s } = e,
        u = (0, c.GV)();
    return (0, r.jsxs)("aside", {
        className: i()(m.kL, s),
        "aria-labelledby": u,
        children: [
            (0, r.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, r.jsx)(o.DUT, {
                        className: m.r,
                        "aria-label": b.intl.string(b.t["pUR+3g"]),
                        onClick: l,
                        children: (0, r.jsx)(o.PGe, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(o.Heading, {
                        id: u,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: b.intl.string(b.t.zMUr6Z),
                    }),
                ],
            }),
            (0, r.jsx)(f.A, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n } = e;
                    return (0, r.jsx)(y, {
                        onClick: () => a(n),
                        userId: t,
                        applicationId: n,
                    });
                },
            }),
        ],
    });
}

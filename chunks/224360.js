n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(990078),
    o = n(397927),
    d = n(915089),
    c = n(61881),
    u = n(788593),
    g = n(507247),
    m = n(973397),
    x = n(985018),
    f = n(461349),
    h = n(105778);
function p(e) {
    let { applicationId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, gameName: d, isLoading: g } = (0, m.A)(t),
        p = (0, r.bG)([c.A], () => c.A.suggestedFetchIsLoading),
        _ = x.intl.formatToPlainString(x.t["3mb1s5"], { game: d });
    return g || p
        ? (0, i.jsx)("div", { className: f.mD })
        : (0, i.jsx)(s.m, {
              text: _,
              ariaHidden: !0,
              children: (0, i.jsxs)(o.DUT, {
                  className: h.c9,
                  onClick: l,
                  "aria-label": _,
                  children: [
                      (0, i.jsx)(u.A, {
                          className: h.Iv,
                          imageSrc: a,
                          gameName: d,
                          applicationId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(o.pa$, { size: "md", className: h.Xv, color: o.LU0.colors.WHITE }),
                  ],
              }),
          });
}
function _(e) {
    let { userId: t, games: n, onDismiss: l, onClick: r, className: s } = e,
        c = (0, d.GV)();
    return (0, i.jsxs)("aside", {
        className: a()(h.kL, s),
        "aria-labelledby": c,
        children: [
            (0, i.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, i.jsx)(o.DUT, {
                        className: h.r,
                        "aria-label": x.intl.string(x.t["pUR+3g"]),
                        onClick: l,
                        children: (0, i.jsx)(o.PGe, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(o.Heading, {
                        id: c,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: x.intl.string(x.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)(g.A, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n } = e;
                    return (0, i.jsx)(p, { onClick: () => r(n), userId: t, applicationId: n });
                },
            }),
        ],
    });
}

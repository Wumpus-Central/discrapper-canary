n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(990078),
    o = n(397927),
    c = n(915089),
    d = n(152621),
    u = n(61881),
    g = n(788593),
    m = n(507247),
    x = n(985018),
    f = n(461349),
    p = n(105778);
function h(e) {
    let { applicationId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, gameName: c, isLoading: m } = (0, d.A)(t),
        h = (0, s.bG)([u.A], () => u.A.suggestedFetchIsLoading),
        _ = x.intl.formatToPlainString(x.t["3mb1s5"], { game: c });
    return m || h
        ? (0, i.jsx)("div", { className: f.mD })
        : (0, i.jsx)(r.m, {
              text: _,
              ariaHidden: !0,
              children: (0, i.jsxs)(o.DUT, {
                  className: p.c9,
                  onClick: l,
                  "aria-label": _,
                  children: [
                      (0, i.jsx)(g.A, {
                          className: p.Iv,
                          imageSrc: a,
                          gameName: c,
                          applicationId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(o.pa$, { size: "md", className: p.Xv, color: o.LU0.colors.WHITE }),
                  ],
              }),
          });
}
function _(e) {
    let { userId: t, games: n, onDismiss: l, onClick: s, className: r } = e,
        d = (0, c.GV)();
    return (0, i.jsxs)("aside", {
        className: a()(p.kL, r),
        "aria-labelledby": d,
        children: [
            (0, i.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, i.jsx)(o.DUT, {
                        className: p.r,
                        "aria-label": x.intl.string(x.t["pUR+3g"]),
                        onClick: l,
                        children: (0, i.jsx)(o.PGe, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(o.Heading, {
                        id: d,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: x.intl.string(x.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)(m.A, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n } = e;
                    return (0, i.jsx)(h, { onClick: () => s(n), userId: t, applicationId: n });
                },
            }),
        ],
    });
}

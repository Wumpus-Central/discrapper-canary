i.d(t, { A: () => p });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(311907),
    r = i(990078),
    d = i(397927),
    o = i(915089),
    c = i(201438),
    u = i(61881),
    g = i(788593),
    m = i(985018),
    h = i(442356),
    x = i(5477);
function A(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: o, isLoading: A } = (0, c.A)(t),
        p = (0, a.bG)([u.A], () => u.A.suggestedFetchIsLoading),
        f = m.intl.formatToPlainString(m.t["3mb1s5"], { game: o });
    return A || p
        ? (0, n.jsx)("div", { className: h.mD })
        : (0, n.jsx)(r.m, {
              text: f,
              ariaHidden: !0,
              children: (0, n.jsxs)(d.DUT, {
                  className: x.c9,
                  onClick: l,
                  "aria-label": f,
                  children: [
                      (0, n.jsx)(g.A, {
                          className: x.Iv,
                          imageSrc: s,
                          gameName: o,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(d.pa$, { size: "md", className: x.Xv, color: d.LU0.colors.WHITE }),
                  ],
              }),
          });
}
function p(e) {
    let { userId: t, games: i, onDismiss: l, onClick: a, className: r } = e,
        c = (0, o.GV)();
    return (0, n.jsxs)("aside", {
        className: s()(x.kL, r),
        "aria-labelledby": c,
        children: [
            (0, n.jsxs)("div", {
                className: x.wx,
                children: [
                    (0, n.jsx)(d.DUT, {
                        className: x.r,
                        "aria-label": m.intl.string(m.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(d.PGe, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(d.Heading, {
                        id: c,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: m.intl.string(m.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: x.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(A, { onClick: () => a(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}

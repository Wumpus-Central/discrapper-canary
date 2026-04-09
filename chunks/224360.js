i.d(t, { A: () => A });
var n = i(627968);
i(64700);
var s = i(503698),
    l = i.n(s),
    a = i(311907),
    r = i(990078),
    o = i(397927),
    d = i(915089),
    c = i(201438),
    u = i(61881),
    g = i(788593),
    m = i(985018),
    h = i(522500),
    x = i(97717);
function p(e) {
    let { applicationId: t, userId: i, onClick: s } = e,
        { coverImageUrl: l, gameName: d, isLoading: p } = (0, c.A)(t),
        A = (0, a.bG)([u.A], () => u.A.suggestedFetchIsLoading),
        f = m.intl.formatToPlainString(m.t["3mb1s5"], { game: d });
    return p || A
        ? (0, n.jsx)("div", { className: h.mD })
        : (0, n.jsx)(r.m, {
              text: f,
              ariaHidden: !0,
              children: (0, n.jsxs)(o.DUT, {
                  className: x.c9,
                  onClick: s,
                  "aria-label": f,
                  children: [
                      (0, n.jsx)(g.A, {
                          className: x.Iv,
                          imageSrc: l,
                          gameName: d,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(o.pa$, { size: "md", className: x.Xv, color: o.LU0.colors.WHITE }),
                  ],
              }),
          });
}
function A(e) {
    let { userId: t, games: i, onDismiss: s, onClick: a, className: r } = e,
        c = (0, d.GV)();
    return (0, n.jsxs)("aside", {
        className: l()(x.kL, r),
        "aria-labelledby": c,
        children: [
            (0, n.jsxs)("div", {
                className: x.wx,
                children: [
                    (0, n.jsx)(o.DUT, {
                        className: x.r,
                        "aria-label": m.intl.string(m.t["pUR+3g"]),
                        onClick: s,
                        children: (0, n.jsx)(o.PGe, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(o.Heading, {
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
                        { children: (0, n.jsx)(p, { onClick: () => a(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}

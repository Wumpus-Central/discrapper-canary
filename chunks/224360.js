i.d(t, { A: () => v });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(311907),
    r = i(990078),
    d = i(939249),
    o = i(663341),
    c = i(827734),
    u = i(789645),
    g = i(534514),
    m = i(915089),
    h = i(201438),
    x = i(61881),
    p = i(788593),
    A = i(985018),
    f = i(442356),
    j = i(5477);
function I(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: u, isLoading: g } = (0, h.A)(t),
        m = (0, a.bG)([x.A], () => x.A.suggestedFetchIsLoading),
        I = A.intl.formatToPlainString(A.t["3mb1s5"], { game: u });
    return g || m
        ? (0, n.jsx)("div", { className: f.mD })
        : (0, n.jsx)(r.m, {
              text: I,
              ariaHidden: !0,
              children: (0, n.jsxs)(d.D, {
                  className: j.c9,
                  onClick: l,
                  "aria-label": I,
                  children: [
                      (0, n.jsx)(p.A, {
                          className: j.Iv,
                          imageSrc: s,
                          gameName: u,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(o.p, { size: "md", className: j.Xv, color: c.A.colors.WHITE }),
                  ],
              }),
          });
}
function v(e) {
    let { userId: t, games: i, onDismiss: l, onClick: a, className: r } = e,
        o = (0, m.GV)();
    return (0, n.jsxs)("aside", {
        className: s()(j.kL, r),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: j.wx,
                children: [
                    (0, n.jsx)(d.D, {
                        className: j.r,
                        "aria-label": A.intl.string(A.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(u.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(g.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: j.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(I, { onClick: () => a(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}

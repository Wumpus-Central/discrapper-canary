n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(990078),
    o = n(397927),
    c = n(915089),
    d = n(152621),
    u = n(61881),
    g = n(788593),
    m = n(985018),
    x = n(496527),
    p = n(853228);
function f(e) {
    let { applicationId: t, userId: n, onClick: a } = e,
        { coverImageUrl: l, gameName: c, isLoading: f } = (0, d.A)(t),
        h = (0, s.bG)([u.A], () => u.A.suggestedFetchIsLoading),
        _ = m.intl.formatToPlainString(m.t["3mb1s5"], { game: c });
    return f || h
        ? (0, i.jsx)("div", { className: x.mD })
        : (0, i.jsx)(r.m, {
              text: _,
              ariaHidden: !0,
              children: (0, i.jsxs)(o.DUT, {
                  className: p.c9,
                  onClick: a,
                  "aria-label": _,
                  children: [
                      (0, i.jsx)(g.A, {
                          className: p.Iv,
                          imageSrc: l,
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
function h(e) {
    let { userId: t, games: n, onDismiss: a, onClick: s, className: r } = e,
        d = (0, c.GV)();
    return (0, i.jsxs)("aside", {
        className: l()(p.kL, r),
        "aria-labelledby": d,
        children: [
            (0, i.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, i.jsx)(o.DUT, {
                        className: p.r,
                        "aria-label": m.intl.string(m.t["pUR+3g"]),
                        onClick: a,
                        children: (0, i.jsx)(o.PGe, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(o.Heading, {
                        id: d,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: m.intl.string(m.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: p.Vg,
                children: n.map((e) => {
                    let { applicationId: n } = e;
                    return (0, i.jsx)(
                        "li",
                        { children: (0, i.jsx)(f, { onClick: () => s(n), userId: t, applicationId: n }) },
                        n,
                    );
                }),
            }),
        ],
    });
}

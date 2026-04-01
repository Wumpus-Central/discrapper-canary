n.d(t, { A: () => _ });
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
    m = n(788593),
    g = n(985018),
    p = n(522500),
    x = n(97717);
function f(e) {
    let { applicationId: t, userId: n, onClick: a } = e,
        { coverImageUrl: l, gameName: c, isLoading: f } = (0, d.A)(t),
        _ = (0, s.bG)([u.A], () => u.A.suggestedFetchIsLoading),
        h = g.intl.formatToPlainString(g.t["3mb1s5"], { game: c });
    return f || _
        ? (0, i.jsx)("div", { className: p.mD })
        : (0, i.jsx)(r.m, {
              text: h,
              ariaHidden: !0,
              children: (0, i.jsxs)(o.DUT, {
                  className: x.c9,
                  onClick: a,
                  "aria-label": h,
                  children: [
                      (0, i.jsx)(m.A, {
                          className: x.Iv,
                          imageSrc: l,
                          gameName: c,
                          applicationId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(o.pa$, { size: "md", className: x.Xv, color: o.LU0.colors.WHITE }),
                  ],
              }),
          });
}
function _(e) {
    let { userId: t, games: n, onDismiss: a, onClick: s, className: r } = e,
        d = (0, c.GV)();
    return (0, i.jsxs)("aside", {
        className: l()(x.kL, r),
        "aria-labelledby": d,
        children: [
            (0, i.jsxs)("div", {
                className: x.wx,
                children: [
                    (0, i.jsx)(o.DUT, {
                        className: x.r,
                        "aria-label": g.intl.string(g.t["pUR+3g"]),
                        onClick: a,
                        children: (0, i.jsx)(o.PGe, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(o.Heading, {
                        id: d,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: g.intl.string(g.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: x.Vg,
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

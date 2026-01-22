n.d(t, {
    E: () => d,
    l: () => p,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(585958),
    s = n(788593),
    o = n(461349),
    c = n(640830);

function u(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n } = (0, a.n)(t);
    return null != n && "" !== n
        ? (0, r.jsx)("div", {
              className: l()(o.PY, c.LH),
              children: (0, r.jsx)(s.R, {
                  imageSrc: n,
              }),
          })
        : (0, r.jsx)("div", {
              className: l()(o.mD, c.LH),
          });
}

function d(e) {
    let { applicationId: t, size: n = "default", className: i } = e;
    return (0, r.jsxs)("div", {
        className: l()(
            c.kL,
            c.Yi,
            {
                [c.PG]: "small" === n,
                [c.$g]: "medium" === n,
            },
            i,
        ),
        "aria-hidden": !0,
        children: [
            null != t
                ? (0, r.jsx)(u, {
                      applicationId: t,
                  })
                : (0, r.jsx)("div", {
                      className: o.mD,
                  }),
            (0, r.jsxs)("div", {
                className: c.RC,
                children: [
                    (0, r.jsx)("div", {
                        className: c.h$,
                    }),
                    (0, r.jsx)("div", {
                        className: c.h$,
                    }),
                ],
            }),
        ],
    });
}

function p(e) {
    let { applicationIds: t, size: n = "default", className: i } = e,
        a = "small" === n ? t.slice(0, 3) : t.slice(0, 4);
    return (0, r.jsx)("div", {
        className: l()(
            c.kL,
            c.Nu,
            {
                [c.PG]: "small" === n,
                [c.$g]: "medium" === n,
            },
            i,
        ),
        "aria-hidden": !0,
        children: a.map((e, t) =>
            (0, r.jsx)(
                u,
                {
                    applicationId: e,
                },
                t,
            ),
        ),
    });
}

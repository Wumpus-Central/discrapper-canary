n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(827734),
    a = n(834730),
    r = n(534514),
    o = n(836480),
    c = n(976860),
    d = n(954571),
    u = n(396415),
    m = n(652215),
    A = n(985018),
    h = n(505973);
function x() {
    var e, t, n;
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsxs)("header", {
                className: h.wx,
                children: [
                    (0, i.jsx)(r.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t.IuMx1Y),
                    }),
                    (0, i.jsx)(a.E, { tag: "div", variant: "heading-md/normal", children: A.intl.string(A.t.DwevPs) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: h.Vg,
                children:
                    ((e = o.Q),
                    (t = A.intl.string(A.t.AhKnz4)),
                    (n = () => {
                        d.default.track(m.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, c.pX)(m.BVt.GUILD_DISCOVERY);
                    }),
                    (0, i.jsxs)(
                        "button",
                        {
                            className: h.kL,
                            onClick: n,
                            children: [
                                "function" == typeof e
                                    ? (0, i.jsx)("div", {
                                          className: h.Kk,
                                          children: (0, i.jsx)(e, {
                                              className: h.__invalid_iconInner,
                                              color: l.A.colors.WHITE.css,
                                          }),
                                      })
                                    : (0, i.jsx)("img", { className: h.Kk, alt: "", src: e }),
                                (0, i.jsx)(a.E, { className: h.Qq, variant: "text-md/medium", children: t }),
                                (0, i.jsx)(u.A, { className: h.UE }),
                            ],
                        },
                        t,
                    )),
            }),
        ],
    });
}

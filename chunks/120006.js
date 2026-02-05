n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(976860),
    s = n(954571),
    o = n(396415),
    d = n(652215),
    c = n(985018),
    u = n(605540);
function A() {
    var e, t, n;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsxs)("header", {
                className: u.wx,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: c.intl.string(c.t.IuMx1Y),
                    }),
                    (0, i.jsx)(a.Text, {
                        tag: "div",
                        variant: "heading-md/normal",
                        children: c.intl.string(c.t.DwevPs),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: u.Vg,
                children:
                    ((e = a.QGJ),
                    (t = c.intl.string(c.t.AhKnz4)),
                    (n = () => {
                        s.default.track(d.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, l.pX)(d.BVt.GUILD_DISCOVERY);
                    }),
                    (0, i.jsxs)(
                        "button",
                        {
                            className: u.kL,
                            onClick: n,
                            children: [
                                "function" == typeof e
                                    ? (0, i.jsx)("div", {
                                          className: u.Kk,
                                          children: (0, i.jsx)(e, {
                                              className: u.__invalid_iconInner,
                                              color: a.LU0.colors.WHITE.css,
                                          }),
                                      })
                                    : (0, i.jsx)("img", { className: u.Kk, alt: "", src: e }),
                                (0, i.jsx)(a.Text, { className: u.Qq, variant: "text-md/medium", children: t }),
                                (0, i.jsx)(o.A, { className: u.UE }),
                            ],
                        },
                        t,
                    )),
            }),
        ],
    });
}

n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(342952),
    l = n(397927),
    c = n(429913),
    u = n(287809),
    d = n(405269),
    f = n(403362),
    p = n(985018),
    _ = n(102373);
let h = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: h, guildId: m, className: g } = e,
        E = (0, c.h)(i),
        b = (0, s.yK)([u.default], () => {
            var e;
            return null != (e = n.map((e) => u.default.getUser(e)).filter(f.Vq)) ? e : [];
        }),
        y = null == E ? void 0 : E.name,
        O = null != t ? (0, d.Fe)(new Date(t)) : null,
        A = null == E ? void 0 : E.getIconURL(32);
    if (null == t) return null;
    let v = null == h || "" === h;
    return (0, r.jsxs)("div", {
        className: a()(g, _.kL),
        children: [
            (0, r.jsx)("div", {
                className: _.gS,
                "aria-hidden": "true",
                children:
                    null != A
                        ? (0, r.jsx)("img", {
                              src: A,
                              alt: "",
                              className: _.NH,
                          })
                        : (0, r.jsx)(l.kN9, {
                              size: "sm",
                              color: "currentColor",
                          }),
            }),
            (0, r.jsxs)("div", {
                className: _.i0,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: _.NV,
                        variant: "text-md/normal",
                        color: v ? "text-subtle" : "text-default",
                        children: v ? p.intl.string(p.t.Cyxddp) : h,
                    }),
                    null != y &&
                        "" !== y &&
                        (0, r.jsx)(l.Text, {
                            className: _.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: y,
                        }),
                    (0, r.jsx)(l.Text, {
                        className: _.xD,
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: O,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.jW,
                children: (0, r.jsx)(o.A, {
                    maxUsers: 4,
                    users: b,
                    guildId: m,
                    size: l._3J.SIZE_24,
                    "aria-label": p.intl.string(p.t.WTozwe),
                }),
            }),
        ],
    });
};

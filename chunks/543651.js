n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(36563),
    l = n(481060),
    c = n(835473),
    u = n(594174),
    d = n(55935),
    f = n(823379),
    p = n(388032),
    _ = n(467826);
let m = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: m, guildId: h, className: g } = e,
        E = (0, c.q)(i),
        b = (0, o.Wu)([u.default], () => {
            var e;
            return null != (e = n.map((e) => u.default.getUser(e)).filter(f.lm)) ? e : [];
        }),
        y = null == E ? void 0 : E.name,
        O = null != t ? (0, d.Xf)(new Date(t)) : null,
        v = null == E ? void 0 : E.getIconURL(32);
    if (null == t) return null;
    let S = null == m || "" === m;
    return (0, r.jsxs)("div", {
        className: a()(g, _.container),
        children: [
            (0, r.jsx)("div", {
                className: _.clipIcon,
                "aria-hidden": "true",
                children:
                    null != v
                        ? (0, r.jsx)("img", {
                              src: v,
                              alt: "",
                              className: _.clipIconImage,
                          })
                        : (0, r.jsx)(l.pzj, {
                              size: "sm",
                              color: "currentColor",
                          }),
            }),
            (0, r.jsxs)("div", {
                className: _.clipTextInfo,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: _.clipTitle,
                        variant: "text-md/normal",
                        color: S ? "text-secondary" : "text-default",
                        children: S ? p.intl.string(p.t.Cyxddp) : m,
                    }),
                    null != y &&
                        "" !== y &&
                        (0, r.jsx)(l.Text, {
                            className: _.clipSubtitle,
                            color: "text-secondary",
                            variant: "text-sm/medium",
                            children: y,
                        }),
                    (0, r.jsx)(l.Text, {
                        className: _.clipSubtitle,
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children: O,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.clipAvatars,
                children: (0, r.jsx)(s.Z, {
                    maxUsers: 4,
                    users: b,
                    guildId: h,
                    size: l.EFr.SIZE_24,
                    "aria-label": p.intl.string(p.t.WTozwe),
                }),
            }),
        ],
    });
};

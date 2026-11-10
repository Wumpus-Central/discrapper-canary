i.r(e);
var a = i(477900);
i(582128);
var r = i(855986),
    l = i(331322),
    t = i(97808),
    n = i(778712),
    c = i(287809),
    d = i(486020),
    u = i(378763),
    h = i(233569);
i.d(
    e,
    {},
    {
        default: function (s) {
            let { character: e, organizationIconUrl: i } = s,
                o = (0, r.bG)([c.default], () => c.default.getCurrentUser());
            return (0, a.jsxs)(l.B, {
                direction: "horizontal",
                align: "center",
                justify: "center",
                gap: 12,
                fullWidth: !1,
                "aria-hidden": !0,
                children: [
                    null == e && null != o
                        ? (0, a.jsx)(t.eu, {
                              src: d.Ay.getUserAvatarURL(o, !1, 96),
                              size: n._3.SIZE_96,
                              "aria-hidden": !0,
                          })
                        : (0, a.jsx)(u.A, { iconUrl: e?.iconUrl, size: 96, className: h.K }),
                    (0, a.jsxs)(l.B, {
                        direction: "horizontal",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, a.jsx)("div", { className: h.O }),
                            (0, a.jsx)("div", { className: h.O }),
                            (0, a.jsx)("div", { className: h.O }),
                        ],
                    }),
                    (0, a.jsx)(u.A, { iconUrl: i, size: 96, className: h.K }),
                ],
            });
        },
    },
);

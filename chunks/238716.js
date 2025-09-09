t.d(n, { default: () => j }), t(388685), t(953529);
var i = t(951288),
    s = t(647438),
    a = t(442837),
    l = t(755721),
    r = t(481060),
    o = t(933557),
    c = t(600164),
    d = t(313201),
    x = t(592125),
    u = t(853856),
    h = t(117984),
    m = t(388032),
    p = t(589253);
function j(e) {
    let { channelId: n, onClose: t, transitionState: j, heading: k, formTitle: f, allowReset: v = !1 } = e,
        z = (0, d.Dt)(),
        N = (0, a.e7)([x.Z], () => x.Z.getChannel(n)),
        g = (0, o.ZP)(N),
        C = u.Z.getNickname(n),
        [b, y] = s.useState(null != C ? C : "");
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            e.preventDefault(), (0, h.UT)(n, b), t();
        },
        children: (0, i.jsxs)(r.Y0X, {
            transitionState: j,
            "aria-labelledby": z,
            parentComponent: "FavoritesSetNicknameModal",
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !0,
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            id: z,
                            variant: "heading-lg/semibold",
                            children: k,
                        }),
                        (0, i.jsx)(r.olH, { onClick: t }),
                    ],
                }),
                (0, i.jsxs)(r.hzk, {
                    children: [
                        (0, i.jsx)("div", {
                            className: p.name,
                            children: (0, i.jsx)(r.oil, {
                                label: f,
                                value: b,
                                onChange: y,
                                placeholder: null != g ? g : void 0,
                                maxLength: 100,
                                autoFocus: !0,
                            }),
                        }),
                        v && null != C
                            ? (0, i.jsx)(l.zx, {
                                  look: l.zx.Looks.LINK,
                                  color: l.zx.Colors.LINK,
                                  size: l.zx.Sizes.NONE,
                                  onClick: function () {
                                      (0, h.UT)(n, null), t();
                                  },
                                  className: p.reset,
                                  children: m.intl.string(m.t.aE02R0),
                              })
                            : null,
                        (0, i.jsx)(r.Text, {
                            className: p.description,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: m.intl.string(m.t["2vyz+P"]),
                        }),
                    ],
                }),
                (0, i.jsx)(r.mzw, {
                    children: (0, i.jsxs)(r.hE2, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, i.jsx)(r.zxk, {
                                variant: "primary",
                                text: k,
                                type: "submit",
                            }),
                            (0, i.jsx)(r.zxk, {
                                variant: "secondary",
                                text: m.intl.string(m.t["ETE/oK"]),
                                onClick: t,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}

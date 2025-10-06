n.d(t, { default: () => p }), n(388685), n(953529);
var i = n(951288),
    s = n(647438),
    a = n(442837),
    r = n(481060),
    l = n(933557),
    c = n(600164),
    o = n(313201),
    d = n(592125),
    x = n(853856),
    u = n(117984),
    h = n(388032),
    m = n(589253);
function p(e) {
    let { channelId: t, onClose: n, transitionState: p, heading: j, formTitle: v, allowReset: f = !1 } = e,
        k = (0, o.Dt)(),
        g = (0, a.e7)([d.Z], () => d.Z.getChannel(t)),
        b = (0, l.ZP)(g),
        y = x.Z.getNickname(t),
        [C, E] = s.useState(null != y ? y : "");
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            e.preventDefault(), (0, u.UT)(t, C), n();
        },
        children: (0, i.jsxs)(r.Y0X, {
            transitionState: p,
            "aria-labelledby": k,
            parentComponent: "FavoritesSetNicknameModal",
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !0,
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            id: k,
                            variant: "heading-lg/semibold",
                            children: j,
                        }),
                        (0, i.jsx)(r.olH, { onClick: n }),
                    ],
                }),
                (0, i.jsxs)(r.hzk, {
                    children: [
                        (0, i.jsx)("div", {
                            className: m.name,
                            children: (0, i.jsx)(r.oil, {
                                label: v,
                                value: C,
                                onChange: E,
                                placeholder: null != b ? b : void 0,
                                maxLength: 100,
                                autoFocus: !0,
                            }),
                        }),
                        f && null != y
                            ? (0, i.jsx)("div", {
                                  className: m.reset,
                                  children: (0, i.jsx)(r.Avr, {
                                      text: h.intl.string(h.t.aE02R0),
                                      onClick: function () {
                                          (0, u.UT)(t, null), n();
                                      },
                                      textVariant: "text-sm/normal",
                                  }),
                              })
                            : null,
                        (0, i.jsx)(r.Text, {
                            className: m.description,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: h.intl.string(h.t["2vyz+P"]),
                        }),
                    ],
                }),
                (0, i.jsx)(r.mzw, {
                    children: (0, i.jsxs)(r.hE2, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, i.jsx)(r.zxk, {
                                variant: "primary",
                                text: j,
                                type: "submit",
                            }),
                            (0, i.jsx)(r.zxk, {
                                variant: "secondary",
                                text: h.intl.string(h.t["ETE/oK"]),
                                onClick: n,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}

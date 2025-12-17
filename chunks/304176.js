n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(194983),
    o = n(481060),
    s = n(493773),
    l = n(367907),
    c = n(829883),
    u = n(623624),
    d = n(973542),
    f = n(48950),
    p = n(703656),
    _ = n(592125),
    m = n(485386),
    h = n(944486),
    g = n(626135),
    E = n(524444),
    b = n(981631),
    y = n(176505),
    O = n(388032),
    v = n(288027);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 40,
    N = (e) => {
        let { roleIcon: t, guild: n } = e,
            { name: S } = t;
        (0, s.ZP)(() => {
            g.default.track(
                b.rMx.OPEN_POPOUT,
                I(
                    {
                        type: "Role Icon Popout",
                        guild_id: n.id,
                    },
                    (0, l.v_)(_.Z.getChannel(h.Z.getChannelId(n.id))),
                ),
            );
        });
        let T = (0, i.e7)([m.Z], () => (null != t.roleId ? m.Z.getRole(n.id, t.roleId) : void 0)),
            N = (0, d.Z)(T),
            P = N
                ? O.intl.formatToPlainString(O.t.t0928V, { name: S })
                : O.intl.formatToPlainString(O.t.UDDkGy, { name: S }),
            R = C(I({}, t), {
                src: null == t.src ? t.src : (0, c.o)(t.src, A),
                size: A,
            }),
            w = () => {
                (0, u.f)({
                    guildId: n.id,
                    location: { section: b.jXE.ROLE_ICON_POPOUT },
                });
            },
            D = () => {
                (0, p.uL)(b.Z5c.CHANNEL(n.id, y.oC.ROLE_SUBSCRIPTIONS));
            },
            x = N ? D : w;
        return (0, r.jsx)(o.VqE, {
            children: (0, r.jsx)(E.W_, {
                children: (0, r.jsxs)("div", {
                    className: v.popoutContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.mainContent,
                            children: [
                                (0, r.jsx)("div", {
                                    className: v.roleIconContainer,
                                    children: (0, r.jsx)(
                                        f.Z,
                                        C(I({}, R), {
                                            enableTooltip: !1,
                                            className: v.__invalid_roleIcon,
                                            enableHeight: !1,
                                        }),
                                    ),
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.truncatingText,
                                    children: [
                                        (0, r.jsx)(o.Heading, {
                                            variant: "heading-md/semibold",
                                            className: v.roleName,
                                            children: (0, r.jsx)(a.Z, { children: S }),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            children: P,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: O.intl.string(O.t["H930+H"]),
                            onClick: x,
                            icon: o.Ucv,
                            fullWidth: !0,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
        });
    };

n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(493773),
    s = n(367907),
    l = n(111028),
    c = n(91218),
    u = n(829883),
    d = n(623624),
    f = n(973542),
    _ = n(703656),
    p = n(592125),
    h = n(485386),
    m = n(944486),
    g = n(626135),
    E = n(524444),
    b = n(981631),
    y = n(176505),
    O = n(388032),
    v = n(804309);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 40,
    C = (e) => {
        let { roleIcon: t, guild: n } = e,
            { name: I } = t;
        (0, a.ZP)(() => {
            g.default.track(
                b.rMx.OPEN_POPOUT,
                T(
                    {
                        type: "Role Icon Popout",
                        guild_id: n.id,
                    },
                    (0, s.v_)(p.Z.getChannel(m.Z.getChannelId(n.id))),
                ),
            );
        });
        let S = (0, i.e7)([h.Z], () => (null != t.roleId ? h.Z.getRole(n.id, t.roleId) : void 0)),
            C = (0, f.Z)(S),
            R = C
                ? O.intl.formatToPlainString(O.t.t0928f, { name: I })
                : O.intl.formatToPlainString(O.t.UDDkGx, { name: I }),
            P = A(T({}, t), {
                src: null == t.src ? t.src : (0, u.o)(t.src, N),
                size: N,
            }),
            w = () => {
                (0, d.f)({
                    guildId: n.id,
                    location: { section: b.jXE.ROLE_ICON_POPOUT },
                });
            },
            D = () => {
                (0, _.uL)(b.Z5c.CHANNEL(n.id, y.oC.ROLE_SUBSCRIPTIONS));
            },
            L = C ? D : w;
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
                                        c.Z,
                                        A(T({}, P), {
                                            enableTooltip: !1,
                                            className: v.__invalid_roleIcon,
                                            enableHeight: !1,
                                        }),
                                    ),
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.truncatingText,
                                    children: [
                                        (0, r.jsx)(o.X6q, {
                                            variant: "heading-md/semibold",
                                            className: v.roleName,
                                            children: (0, r.jsx)(l.Z, { children: I }),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            children: R,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.zxk, {
                            size: "sm",
                            variant: "secondary",
                            text: O.intl.string(O.t["H930+P"]),
                            onClick: L,
                            icon: o.$Eu,
                            fullWidth: !0,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
        });
    };

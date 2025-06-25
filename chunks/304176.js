n.d(t, { Z: () => S });
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(481060),
    i = n(493773),
    s = n(367907),
    a = n(111028),
    c = n(91218),
    u = n(829883),
    d = n(623624),
    p = n(973542),
    m = n(703656),
    g = n(592125),
    f = n(430824),
    b = n(944486),
    h = n(709586),
    O = n(626135),
    y = n(524444),
    v = n(981631),
    j = n(176505),
    P = n(388032),
    x = n(854422);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: S } = t;
    (0, i.ZP)(() => {
        O.default.track(
            v.rMx.OPEN_POPOUT,
            C(
                {
                    type: 'Role Icon Popout',
                    guild_id: n.id
                },
                (0, s.v_)(g.Z.getChannel(b.Z.getChannelId(n.id)))
            )
        );
    });
    let N = (0, l.e7)([f.Z], () => (null != t.roleId ? f.Z.getRole(n.id, t.roleId) : void 0)),
        E = (0, p.Z)(N),
        Z = E ? P.intl.formatToPlainString(P.t.t0928f, { name: S }) : P.intl.formatToPlainString(P.t.UDDkGx, { name: S }),
        T = w(C({}, t), {
            src: null == t.src ? t.src : (0, u.o)(t.src, 40),
            size: 40
        }),
        R = E
            ? () => {
                  (0, m.uL)(v.Z5c.CHANNEL(n.id, j.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, d.f)({
                      guildId: n.id,
                      location: { section: v.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, r.jsx)(o.VqE, {
        children: (0, r.jsx)(y.W_, {
            children: (0, r.jsxs)('div', {
                className: x.popoutContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.mainContent,
                        children: [
                            (0, r.jsx)('div', {
                                className: x.roleIconContainer,
                                children: (0, r.jsx)(
                                    c.Z,
                                    w(C({}, T), {
                                        enableTooltip: !1,
                                        className: x.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                )
                            }),
                            (0, r.jsxs)('div', {
                                className: x.truncatingText,
                                children: [
                                    (0, r.jsx)(o.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: x.roleName,
                                        children: (0, r.jsx)(a.Z, { children: S })
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        children: Z
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(o.zxk, {
                        size: o.zxk.Sizes.SMALL,
                        color: o.zxk.Colors.PRIMARY,
                        className: x.ctaButton,
                        innerClassName: x.ctaButtonContent,
                        fullWidth: !0,
                        onClick: R,
                        autoFocus: !0,
                        children: [
                            (0, r.jsx)(h.Z, {
                                width: 14,
                                height: 14,
                                className: x.boosterBadge
                            }),
                            P.intl.string(P.t['H930+P'])
                        ]
                    })
                ]
            })
        })
    });
};

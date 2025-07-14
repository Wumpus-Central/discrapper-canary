n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var o = n(442837),
    l = n(481060),
    i = n(493773),
    a = n(367907),
    s = n(111028),
    c = n(91218),
    u = n(829883),
    d = n(623624),
    p = n(973542),
    m = n(703656),
    g = n(592125),
    f = n(485386),
    b = n(944486),
    h = n(626135),
    O = n(524444),
    y = n(981631),
    v = n(176505),
    j = n(388032),
    P = n(854422);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let C = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: C } = t;
    (0, i.ZP)(() => {
        h.default.track(
            y.rMx.OPEN_POPOUT,
            x(
                {
                    type: 'Role Icon Popout',
                    guild_id: n.id
                },
                (0, a.v_)(g.Z.getChannel(b.Z.getChannelId(n.id)))
            )
        );
    });
    let S = (0, o.e7)([f.Z], () => (null != t.roleId ? f.Z.getRole(n.id, t.roleId) : void 0)),
        E = (0, p.Z)(S),
        N = E ? j.intl.formatToPlainString(j.t.t0928f, { name: C }) : j.intl.formatToPlainString(j.t.UDDkGx, { name: C }),
        T = w(x({}, t), {
            src: null == t.src ? t.src : (0, u.o)(t.src, 40),
            size: 40
        }),
        Z = E
            ? () => {
                  (0, m.uL)(y.Z5c.CHANNEL(n.id, v.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, d.f)({
                      guildId: n.id,
                      location: { section: y.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, r.jsx)(l.VqE, {
        children: (0, r.jsx)(O.W_, {
            children: (0, r.jsxs)('div', {
                className: P.popoutContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.mainContent,
                        children: [
                            (0, r.jsx)('div', {
                                className: P.roleIconContainer,
                                children: (0, r.jsx)(
                                    c.Z,
                                    w(x({}, T), {
                                        enableTooltip: !1,
                                        className: P.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                )
                            }),
                            (0, r.jsxs)('div', {
                                className: P.truncatingText,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: P.roleName,
                                        children: (0, r.jsx)(s.Z, { children: C })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: N
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(l.zxk, {
                        size: 'sm',
                        variant: 'secondary',
                        text: j.intl.string(j.t['H930+P']),
                        onClick: Z,
                        icon: l.$Eu,
                        fullWidth: !0,
                        autoFocus: !0
                    })
                ]
            })
        })
    });
};

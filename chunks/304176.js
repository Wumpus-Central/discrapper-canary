n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    i = n(493773),
    s = n(367907),
    l = n(111028),
    c = n(91218),
    u = n(829883),
    d = n(623624),
    p = n(973542),
    g = n(703656),
    m = n(592125),
    f = n(430824),
    b = n(944486),
    h = n(709586),
    y = n(626135),
    _ = n(524444),
    O = n(981631),
    v = n(176505),
    j = n(388032),
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
function P(e, t) {
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
let N = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: N } = t;
    (0, i.ZP)(() => {
        y.default.track(
            O.rMx.OPEN_POPOUT,
            C(
                {
                    type: 'Role Icon Popout',
                    guild_id: n.id
                },
                (0, s.v_)(m.Z.getChannel(b.Z.getChannelId(n.id)))
            )
        );
    });
    let T = (0, o.e7)([f.Z], () => (null != t.roleId ? f.Z.getRole(n.id, t.roleId) : void 0)),
        w = (0, p.Z)(T),
        S = w ? j.NW.formatToPlainString(j.t.t0928f, { name: N }) : j.NW.formatToPlainString(j.t.UDDkGx, { name: N }),
        I = P(C({}, t), {
            src: null == t.src ? t.src : (0, u.o)(t.src, 40),
            size: 40
        }),
        k = w
            ? () => {
                  (0, g.uL)(O.Z5c.CHANNEL(n.id, v.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, d.f)({
                      guildId: n.id,
                      location: { section: O.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, r.jsx)(a.VqE, {
        children: (0, r.jsx)(_.W_, {
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
                                    P(C({}, I), {
                                        enableTooltip: !1,
                                        className: x.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                )
                            }),
                            (0, r.jsxs)('div', {
                                className: x.truncatingText,
                                children: [
                                    (0, r.jsx)(a.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: x.roleName,
                                        children: (0, r.jsx)(l.Z, { children: N })
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: S
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        className: x.ctaButton,
                        innerClassName: x.ctaButtonContent,
                        fullWidth: !0,
                        onClick: k,
                        autoFocus: !0,
                        children: [
                            (0, r.jsx)(h.Z, {
                                width: 14,
                                height: 14,
                                className: x.boosterBadge
                            }),
                            j.NW.string(j.t['H930+P'])
                        ]
                    })
                ]
            })
        })
    });
};

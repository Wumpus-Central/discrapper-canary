n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var o = n(442837),
    l = n(755721),
    i = n(481060),
    a = n(493773),
    s = n(367907),
    c = n(111028),
    u = n(91218),
    d = n(829883),
    p = n(623624),
    m = n(973542),
    g = n(703656),
    f = n(592125),
    b = n(485386),
    h = n(944486),
    O = n(709586),
    y = n(626135),
    v = n(524444),
    j = n(981631),
    P = n(176505),
    x = n(388032),
    C = n(854422);
function w(e) {
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
function S(e, t) {
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
let E = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: E } = t;
    (0, a.ZP)(() => {
        y.default.track(
            j.rMx.OPEN_POPOUT,
            w(
                {
                    type: 'Role Icon Popout',
                    guild_id: n.id
                },
                (0, s.v_)(f.Z.getChannel(h.Z.getChannelId(n.id)))
            )
        );
    });
    let N = (0, o.e7)([b.Z], () => (null != t.roleId ? b.Z.getRole(n.id, t.roleId) : void 0)),
        Z = (0, m.Z)(N),
        T = Z ? x.intl.formatToPlainString(x.t.t0928f, { name: E }) : x.intl.formatToPlainString(x.t.UDDkGx, { name: E }),
        R = S(w({}, t), {
            src: null == t.src ? t.src : (0, d.o)(t.src, 40),
            size: 40
        }),
        _ = Z
            ? () => {
                  (0, g.uL)(j.Z5c.CHANNEL(n.id, P.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, p.f)({
                      guildId: n.id,
                      location: { section: j.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, r.jsx)(i.VqE, {
        children: (0, r.jsx)(v.W_, {
            children: (0, r.jsxs)('div', {
                className: C.popoutContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: C.mainContent,
                        children: [
                            (0, r.jsx)('div', {
                                className: C.roleIconContainer,
                                children: (0, r.jsx)(
                                    u.Z,
                                    S(w({}, R), {
                                        enableTooltip: !1,
                                        className: C.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                )
                            }),
                            (0, r.jsxs)('div', {
                                className: C.truncatingText,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: C.roleName,
                                        children: (0, r.jsx)(c.Z, { children: E })
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        children: T
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(l.zx, {
                        size: l.zx.Sizes.SMALL,
                        color: l.zx.Colors.PRIMARY,
                        className: C.ctaButton,
                        innerClassName: C.ctaButtonContent,
                        fullWidth: !0,
                        onClick: _,
                        autoFocus: !0,
                        children: [
                            (0, r.jsx)(O.Z, {
                                width: 14,
                                height: 14,
                                className: C.boosterBadge
                            }),
                            x.intl.string(x.t['H930+P'])
                        ]
                    })
                ]
            })
        })
    });
};

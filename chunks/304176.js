n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    i = n(493773),
    s = n(367907),
    c = n(111028),
    l = n(91218),
    u = n(829883),
    d = n(623624),
    p = n(973542),
    g = n(703656),
    m = n(592125),
    f = n(430824),
    _ = n(944486),
    b = n(709586),
    h = n(626135),
    y = n(524444),
    v = n(981631),
    O = n(176505),
    x = n(388032),
    j = n(854422);
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
let T = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: T } = t;
    (0, i.ZP)(() => {
        h.default.track(
            v.rMx.OPEN_POPOUT,
            C(
                {
                    type: 'Role Icon Popout',
                    guild_id: n.id
                },
                (0, s.v_)(m.Z.getChannel(_.Z.getChannelId(n.id)))
            )
        );
    });
    let N = (0, o.e7)([f.Z], () => (null != t.roleId ? f.Z.getRole(n.id, t.roleId) : void 0)),
        I = (0, p.Z)(N),
        w = I ? x.NW.formatToPlainString(x.t.t0928f, { name: T }) : x.NW.formatToPlainString(x.t.UDDkGx, { name: T }),
        S = P(C({}, t), {
            src: null == t.src ? t.src : (0, u.o)(t.src, 40),
            size: 40
        }),
        k = I
            ? () => {
                  (0, g.uL)(v.Z5c.CHANNEL(n.id, O.oC.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, d.f)({
                      guildId: n.id,
                      location: { section: v.jXE.ROLE_ICON_POPOUT }
                  });
              };
    return (0, r.jsx)(a.VqE, {
        children: (0, r.jsx)(y.W_, {
            children: (0, r.jsxs)('div', {
                className: j.popoutContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: j.mainContent,
                        children: [
                            (0, r.jsx)('div', {
                                className: j.roleIconContainer,
                                children: (0, r.jsx)(
                                    l.Z,
                                    P(C({}, S), {
                                        enableTooltip: !1,
                                        className: j.__invalid_roleIcon,
                                        enableHeight: !1
                                    })
                                )
                            }),
                            (0, r.jsxs)('div', {
                                className: j.truncatingText,
                                children: [
                                    (0, r.jsx)(a.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: j.roleName,
                                        children: (0, r.jsx)(c.Z, { children: T })
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        children: w
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        className: j.ctaButton,
                        innerClassName: j.ctaButtonContent,
                        fullWidth: !0,
                        onClick: k,
                        autoFocus: !0,
                        children: [
                            (0, r.jsx)(b.Z, {
                                width: 14,
                                height: 14,
                                className: j.boosterBadge
                            }),
                            x.NW.string(x.t['H930+P'])
                        ]
                    })
                ]
            })
        })
    });
};

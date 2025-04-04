n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(693789),
    a = n(235874),
    s = n(481060),
    l = n(944613),
    c = n(607070),
    u = n(605436),
    d = n(496675),
    f = n(475413),
    _ = n(981631),
    p = n(388032),
    h = n(645214);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { guild: t, guildMember: n, numRoles: m, highestRole: E, onAddRole: y, buttonRef: v } = e,
        O = (0, i.e7)([c.Z], () => c.Z.roleStyle);
    if (!(0, i.e7)([d.Z], () => d.Z.can(_.Plq.MANAGE_ROLES, t))) return null;
    let I = (e) => (0, u.Gy)(t.id, e.id) && !e.managed && d.Z.isRoleHigher(t, E, e) && -1 === n.roles.indexOf(e.id);
    return (0, r.jsx)(a.y, {
        targetElementRef: v,
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(l.Z, {
                guild: t,
                roleStyle: O,
                roleFilter: I,
                onSelect: y,
                onClose: n
            });
        },
        children: (e) =>
            (0, r.jsx)(s.DY3, {
                text: p.NW.string(p.t.icyMgY),
                'aria-label': !1,
                shouldShow: m > 0,
                children: (0, r.jsxs)(
                    f.kF,
                    b(
                        g(
                            {
                                ref: v,
                                className: h.button,
                                color: o.zx.Colors.CUSTOM,
                                themeColor: 'none',
                                size: o.zx.Sizes.NONE,
                                grow: !1,
                                'aria-label': p.NW.string(p.t.icyMgY),
                                buttonRef: v
                            },
                            e
                        ),
                        {
                            children: [
                                (0, r.jsx)(s.qJs, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                0 === m &&
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: p.NW.string(p.t.icyMgY)
                                    })
                            ]
                        }
                    )
                )
            })
    });
}

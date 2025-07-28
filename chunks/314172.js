n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(235874),
    o = n(481060),
    s = n(944613),
    l = n(607070),
    c = n(345162),
    u = n(496675),
    d = n(981631),
    f = n(388032),
    _ = n(645214);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { guild: t, guildMember: n, numRoles: p, highestRole: m, onAddRole: E, buttonRef: b } = e,
        y = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (!(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_ROLES, t))) return null;
    let O = (e) => !(0, c.fI)(e) && !e.managed && u.Z.isRoleHigher(t, m, e) && -1 === n.roles.indexOf(e.id);
    return (0, r.jsx)(a.y, {
        targetElementRef: b,
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(s.Z, {
                guild: t,
                roleStyle: y,
                roleFilter: O,
                onSelect: E,
                onClose: n
            });
        },
        children: (e) =>
            (0, r.jsx)(o.DY3, {
                text: f.intl.string(f.t.icyMgY),
                'aria-label': !1,
                shouldShow: p > 0,
                children: (0, r.jsxs)(
                    o.P3F,
                    g(
                        h(
                            {
                                innerRef: b,
                                className: _.button,
                                role: 'button',
                                'aria-label': f.intl.string(f.t.icyMgY)
                            },
                            e
                        ),
                        {
                            children: [
                                (0, r.jsx)(o.qJs, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                0 === p &&
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: f.intl.string(f.t.icyMgY)
                                    })
                            ]
                        }
                    )
                )
            })
    });
}

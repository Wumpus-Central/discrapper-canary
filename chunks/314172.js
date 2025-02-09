n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(693789),
    s = n(235874),
    o = n(481060),
    l = n(944613),
    u = n(607070),
    c = n(605436),
    d = n(496675),
    f = n(475413),
    _ = n(981631),
    p = n(388032),
    h = n(238600);
function m(e) {
    let { guild: t, guildMember: n, numRoles: m, highestRole: g, onAddRole: E, buttonRef: v } = e,
        y = (0, r.e7)([u.Z], () => u.Z.roleStyle);
    if (!(0, r.e7)([d.Z], () => d.Z.can(_.Plq.MANAGE_ROLES, t))) return null;
    let I = (e) => (0, c.Gy)(t.id, e.id) && !e.managed && d.Z.isRoleHigher(t, g, e) && -1 === n.roles.indexOf(e.id);
    return (0, i.jsx)(s.y, {
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(l.Z, {
                guild: t,
                roleStyle: y,
                roleFilter: I,
                onSelect: E,
                onClose: n
            });
        },
        children: (e) =>
            (0, i.jsx)(o.DY3, {
                text: p.intl.string(p.t.icyMgY),
                'aria-label': !1,
                shouldShow: m > 0,
                children: (0, i.jsxs)(f.kF, {
                    className: h.button,
                    color: a.zx.Colors.CUSTOM,
                    themeColor: 'none',
                    size: a.zx.Sizes.NONE,
                    grow: !1,
                    'aria-label': p.intl.string(p.t.icyMgY),
                    buttonRef: v,
                    ...e,
                    children: [
                        (0, i.jsx)(o.qJs, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        0 === m &&
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'none',
                                children: p.intl.string(p.t.icyMgY)
                            })
                    ]
                })
            })
    });
}

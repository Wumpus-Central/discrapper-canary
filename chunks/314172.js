r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(693789),
    o = r(235874),
    l = r(481060),
    u = r(944613),
    c = r(607070),
    d = r(605436),
    f = r(496675),
    _ = r(475413),
    h = r(981631),
    p = r(388032),
    m = r(154304);
function g(e) {
    let { guild: n, guildMember: r, numRoles: g, highestRole: E, onAddRole: v, buttonRef: I } = e,
        T = (0, a.e7)([c.Z], () => c.Z.roleStyle);
    if (!(0, a.e7)([f.Z], () => f.Z.can(h.Plq.MANAGE_ROLES, n))) return null;
    let b = (e) => (0, d.Gy)(n.id, e.id) && !e.managed && f.Z.isRoleHigher(n, E, e) && -1 === r.roles.indexOf(e.id);
    return (0, i.jsx)(o.y, {
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(u.Z, {
                guild: n,
                roleStyle: T,
                roleFilter: b,
                onSelect: v,
                onClose: r
            });
        },
        children: (e) =>
            (0, i.jsx)(l.TooltipContainer, {
                text: p.intl.string(p.t.icyMgY),
                'aria-label': !1,
                shouldShow: g > 0,
                children: (0, i.jsxs)(_.kF, {
                    className: m.button,
                    color: s.zx.Colors.CUSTOM,
                    themeColor: 'none',
                    size: s.zx.Sizes.NONE,
                    grow: !1,
                    'aria-label': p.intl.string(p.t.icyMgY),
                    buttonRef: I,
                    ...e,
                    children: [
                        (0, i.jsx)(l.PlusSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        0 === g &&
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'none',
                                children: p.intl.string(p.t.icyMgY)
                            })
                    ]
                })
            })
    });
}

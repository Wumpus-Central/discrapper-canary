r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(693789),
    s = r(235874),
    l = r(481060),
    u = r(944613),
    c = r(607070),
    d = r(605436),
    f = r(496675),
    p = r(475413),
    h = r(981631),
    _ = r(388032),
    m = r(154304);
function g(e) {
    let { guild: n, guildMember: r, numRoles: g, highestRole: E, onAddRole: v, buttonRef: y } = e,
        b = (0, a.e7)([c.Z], () => c.Z.roleStyle);
    if (!(0, a.e7)([f.Z], () => f.Z.can(h.Plq.MANAGE_ROLES, n))) return null;
    let I = (e) => (0, d.Gy)(n.id, e.id) && !e.managed && f.Z.isRoleHigher(n, E, e) && -1 === r.roles.indexOf(e.id);
    return (0, i.jsx)(s.y, {
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(u.Z, {
                guild: n,
                roleStyle: b,
                roleFilter: I,
                onSelect: v,
                onClose: r
            });
        },
        children: (e) =>
            (0, i.jsx)(l.TooltipContainer, {
                text: _.intl.string(_.t.icyMgY),
                'aria-label': !1,
                shouldShow: g > 0,
                children: (0, i.jsxs)(p.kF, {
                    className: m.button,
                    color: o.zx.Colors.CUSTOM,
                    themeColor: 'none',
                    size: o.zx.Sizes.NONE,
                    grow: !1,
                    'aria-label': _.intl.string(_.t.icyMgY),
                    buttonRef: y,
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
                                children: _.intl.string(_.t.icyMgY)
                            })
                    ]
                })
            })
    });
}

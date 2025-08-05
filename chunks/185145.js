(n.d(t, { T: () => m }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(346486),
    s = n(545594),
    l = n(314897),
    c = n(271383),
    u = n(322937),
    d = n(134049),
    f = n(893732),
    _ = n(590433),
    p = n(388032),
    h = n(790806);
function m(e) {
    let { guild: t, disabledUntil: n } = e,
        [m, g] = (0, d.i)(t.id),
        E = (0, i.e7)([c.ZP, l.default], () => c.ZP.getMember(t.id, l.default.getId()), [t.id]);
    (0, u.$)(E);
    let b = () =>
        m
            ? (0, r.jsx)(f.Z, {
                  onClose: () => g(t.id),
                  guildName: t.name
              })
            : null;
    return (0, r.jsxs)('div', {
        children: [
            b(),
            (0, r.jsx)(s.i, {
                bannerIcon: (0, r.jsx)(a.YlB, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.bannerIcon
                }),
                bannerHeader: p.intl.string(p.t['9UoK6e']),
                bannerSubtext: p.intl.format(p.t['4ZwD5O'], { link: _.cu }),
                textStyles: h.bannerContainer,
                headerStyles: h.bannerHeader,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/semibold',
                    children: (0, r.jsx)(o.Z, {
                        deadline: new Date(n),
                        showUnits: !0,
                        stopAtOneSec: !0
                    })
                })
            })
        ]
    });
}

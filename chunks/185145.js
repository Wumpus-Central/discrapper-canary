n.d(t, { T: () => g }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(346486),
    a = n(545594),
    s = n(314897),
    c = n(271383),
    u = n(322937),
    d = n(134049),
    p = n(893732),
    h = n(590433),
    f = n(388032),
    m = n(790806);
function g(e) {
    let { guild: t, disabledUntil: n } = e,
        [g, b] = (0, d.i)(t.id),
        _ = (0, i.e7)([c.ZP, s.default], () => c.ZP.getMember(t.id, s.default.getId()), [t.id]);
    return (
        (0, u.$)(_),
        (0, r.jsxs)('div', {
            children: [
                g
                    ? (0, r.jsx)(p.Z, {
                          onClose: () => b(t.id),
                          guildName: t.name
                      })
                    : null,
                (0, r.jsx)(a.i, {
                    bannerIcon: (0, r.jsx)(l.YlB, {
                        size: 'md',
                        color: 'currentColor',
                        className: m.bannerIcon
                    }),
                    bannerHeader: f.NW.string(f.t['9UoK6e']),
                    bannerSubtext: f.NW.format(f.t['4ZwD5O'], { link: h.cu }),
                    containerStyles: m.bannerContainer,
                    headerStyles: m.bannerHeader,
                    children: (0, r.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        children: (0, r.jsx)(o.Z, {
                            deadline: new Date(n),
                            showUnits: !0,
                            stopAtOneSec: !0
                        })
                    })
                })
            ]
        })
    );
}

n.d(t, {
    T: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(346486),
    s = n(545594),
    o = n(314897),
    c = n(271383),
    d = n(322937),
    u = n(134049),
    h = n(893732),
    p = n(590433),
    m = n(388032),
    f = n(614435);
function g(e) {
    let { guild: t, disabledUntil: n } = e,
        [g, C] = (0, u.i)(t.id),
        x = (0, l.e7)([c.ZP, o.default], () => c.ZP.getMember(t.id, o.default.getId()), [t.id]);
    return (
        (0, d.$)(x),
        (0, i.jsxs)('div', {
            children: [
                g
                    ? (0, i.jsx)(h.Z, {
                          onClose: () => C(t.id),
                          guildName: t.name
                      })
                    : null,
                (0, i.jsx)(s.i, {
                    bannerIcon: (0, i.jsx)(r.ClockWarningIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.bannerIcon
                    }),
                    bannerHeader: m.intl.string(m.t['9UoK6e']),
                    bannerSubtext: m.intl.format(m.t['4ZwD5O'], { link: p.cu }),
                    containerStyles: f.bannerContainer,
                    headerStyles: f.bannerHeader,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        children: (0, i.jsx)(a.Z, {
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

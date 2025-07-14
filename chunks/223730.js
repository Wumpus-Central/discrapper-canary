n.d(t, {
    K: () => _,
    y: () => b
});
var r = n(255367),
    i = n(442837),
    l = n(481060),
    o = n(230711),
    s = n(695346),
    a = n(771845),
    c = n(88658),
    u = n(782896),
    d = n(981631),
    h = n(29953),
    p = n(388032),
    f = n(420473);
let g = () => {
    o.Z.open(d.oAB.ACTIVITY_PRIVACY);
};
function m(e) {
    let { children: t, onClick: n } = e;
    return (0, r.jsxs)(l.P3F, {
        className: f.chevronButton,
        onClick: n,
        children: [
            (0, r.jsx)('div', {
                className: f.chevronButtonContent,
                children: t
            }),
            (0, r.jsx)(l.Fbu, {
                color: l.TVs.colors.TEXT_SECONDARY,
                size: 'xs'
            })
        ]
    });
}
function b(e) {
    let { onClosePopout: t } = e,
        n = s.G6.useSetting(),
        o = (0, i.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
        d = (0, c._o)(),
        f = o.filter((e) => !d.has(e));
    return 0 === o.length
        ? null
        : (0, r.jsxs)(m, {
              onClick: () => {
                  (t(), g());
              },
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/semibold',
                      children: p.intl.string(n ? h.default['3GrhnJ'] : h.default['54ycKC'])
                  }),
                  (0, r.jsx)(u.c, { guildIds: f })
              ]
          });
}
function _(e) {
    let { onClosePopout: t } = e;
    return (0, r.jsx)(l.P3F, {
        className: f.customizeLink,
        onClick: () => {
            (t(), g());
        },
        children: (0, r.jsx)(l.Text, {
            variant: 'text-xs/medium',
            color: 'text-link',
            children: p.intl.string(p.t['ZrN+DQ'])
        })
    });
}

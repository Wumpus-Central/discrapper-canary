n.d(t, {
    K: () => m,
    y: () => g
});
var r = n(255367),
    i = n(442837),
    l = n(481060),
    o = n(695346),
    s = n(771845),
    a = n(88658),
    c = n(782896),
    u = n(797910),
    d = n(388032),
    h = n(420473);
let p = () => {};
function f(e) {
    let { children: t, onClick: n } = e;
    return (0, r.jsxs)(l.P3F, {
        className: h.chevronButton,
        onClick: n,
        children: [
            (0, r.jsx)('div', {
                className: h.chevronButtonContent,
                children: t
            }),
            (0, r.jsx)(l.Fbu, {
                color: l.TVs.colors.TEXT_SECONDARY,
                size: 'xs'
            })
        ]
    });
}
function g() {
    let e = o.G6.useSetting(),
        t = (0, i.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        n = (0, a._o)(),
        h = t.filter((e) => !n.has(e));
    return 0 === t.length
        ? null
        : (0, r.jsxs)(f, {
              onClick: p,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/semibold',
                      children: d.intl.string(e ? u.default['3GrhnJ'] : u.default['54ycKC'])
                  }),
                  (0, r.jsx)(c.c, { guildIds: h })
              ]
          });
}
function m() {
    return (0, r.jsx)(l.P3F, {
        className: h.customizeLink,
        onClick: p,
        children: (0, r.jsx)(l.Text, {
            variant: 'text-xs/medium',
            color: 'text-link',
            children: d.intl.string(d.t['ZrN+DQ'])
        })
    });
}

n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(231757),
    a = n(553795),
    s = n(915863),
    o = n(388032),
    c = n(542471);
function u(e) {
    let { platform: t, color: n, look: u, onAction: d, Icon: m } = e;
    if ((0, i.e7)([a.Z], () => a.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let p =
        null != m
            ? (0, l.jsx)(m, { className: c.platformIcon })
            : (0, l.jsx)('img', {
                  alt: '',
                  className: c.platformIcon,
                  src: t.icon.whiteSVG
              });
    return (0, l.jsx)(
        s.Z,
        {
            onClick: () => {
                null == d || d(),
                    (0, r.Z)({
                        platformType: t.type,
                        location: 'Activity Action'
                    });
            },
            color: n,
            look: u,
            fullWidth: !0,
            children: (0, l.jsxs)('div', {
                className: c.flex,
                children: [p, o.intl.format(o.t.XWSHTU, { platform: t.name })]
            })
        },
        'connect-platform-activity'
    );
}

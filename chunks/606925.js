n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(231757),
    a = n(553795),
    s = n(915863),
    l = n(388032),
    c = n(289356);
function u(e) {
    let { platform: t, color: n, look: u, onAction: d, Icon: f } = e;
    if ((0, i.e7)([a.Z], () => a.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let _ = () => {
            (null == d || d(),
                (0, o.Z)({
                    platformType: t.type,
                    location: 'Activity Action'
                }));
        },
        p =
            null != f
                ? (0, r.jsx)(f, { className: c.platformIcon })
                : (0, r.jsx)('img', {
                      alt: '',
                      className: c.platformIcon,
                      src: t.icon.whiteSVG
                  });
    return (0, r.jsx)(
        s.Z,
        {
            onClick: _,
            color: n,
            look: u,
            fullWidth: !0,
            children: (0, r.jsxs)('div', {
                className: c.flex,
                children: [p, l.intl.format(l.t.XWSHTU, { platform: t.name })]
            })
        },
        'connect-platform-activity'
    );
}

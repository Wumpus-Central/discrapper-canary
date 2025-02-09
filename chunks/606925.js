n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(231757),
    a = n(553795),
    s = n(915863),
    o = n(388032),
    u = n(579026);
function c(e) {
    let { platform: t, color: n, look: c, onAction: d, Icon: m } = e;
    if ((0, i.e7)([a.Z], () => a.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let h =
        null != m
            ? (0, l.jsx)(m, { className: u.platformIcon })
            : (0, l.jsx)('img', {
                  alt: '',
                  className: u.platformIcon,
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
            look: c,
            fullWidth: !0,
            children: (0, l.jsxs)('div', {
                className: u.flex,
                children: [h, o.intl.format(o.t.XWSHTU, { platform: t.name })]
            })
        },
        'connect-platform-activity'
    );
}

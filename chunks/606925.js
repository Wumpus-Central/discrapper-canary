n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(231757),
    r = n(553795),
    s = n(915863),
    o = n(388032),
    c = n(542471);
function u(e) {
    let { platform: t, color: n, look: u, onAction: d, Icon: m } = e;
    if ((0, l.e7)([r.Z], () => r.Z.getAccounts().some((e) => e.type === t.type))) return null;
    let f =
        null != m
            ? (0, i.jsx)(m, { className: c.platformIcon })
            : (0, i.jsx)('img', {
                  alt: '',
                  className: c.platformIcon,
                  src: t.icon.whiteSVG
              });
    return (0, i.jsx)(
        s.Z,
        {
            onClick: () => {
                null == d || d(),
                    (0, a.Z)({
                        platformType: t.type,
                        location: 'Activity Action'
                    });
            },
            color: n,
            look: u,
            fullWidth: !0,
            children: (0, i.jsxs)('div', {
                className: c.flex,
                children: [f, o.intl.format(o.t.XWSHTU, { platform: t.name })]
            })
        },
        'connect-platform-activity'
    );
}

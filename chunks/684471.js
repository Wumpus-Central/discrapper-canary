n.d(e, { Z: () => h });
var r = n(200651);
n(192379);
var s = n(481060),
    o = n(442837),
    i = n(594174),
    c = n(51144),
    a = n(473092),
    l = n(955708),
    u = n(850165),
    d = n(388032),
    N = n(948582),
    E = n(282668);
function h(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: h } = t,
        _ = (0, o.e7)([i.default], () => {
            let t = i.default.getUser(e);
            return c.ZP.getName(t);
        });
    return (0, r.jsx)(u.Z, {
        header: d.NW.string(d.t.sSMgCw),
        description: d.NW.formatToPlainString(d.t.q2QrTU, { username: _ }),
        heroImageSrc: E,
        heroImageAlt: d.NW.string(d.t['3QhxXF']),
        children: (0, r.jsxs)('div', {
            className: N.buttonContainer,
            children: [
                (0, r.jsx)(s.zxk, {
                    color: s.zxk.Colors.BRAND,
                    size: s.zxk.Sizes.LARGE,
                    className: N.button,
                    onClick: () => {
                        h(l.x.TAKE_ACTION), n(a.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: d.NW.string(d.t['+o4Q7e'])
                }),
                (0, r.jsx)(s.zxk, {
                    color: s.zxk.Colors.PRIMARY,
                    size: s.zxk.Sizes.LARGE,
                    className: N.button,
                    onClick: () => {
                        h(l.x.SAFETY_TIPS), n(a.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: d.NW.string(d.t.xLkGzM)
                })
            ]
        })
    });
}

n.d(e, { Z: () => h });
var s = n(200651);
n(192379);
var i = n(481060),
    r = n(442837),
    o = n(594174),
    a = n(51144),
    c = n(473092),
    l = n(955708),
    d = n(850165),
    u = n(388032),
    E = n(26445),
    _ = n(282668);
function h(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: h } = t,
        N = (0, r.e7)([o.default], () => {
            let t = o.default.getUser(e);
            return a.ZP.getName(t);
        });
    return (0, s.jsx)(d.Z, {
        header: u.intl.string(u.t.sSMgCw),
        description: u.intl.formatToPlainString(u.t.q2QrTU, { username: N }),
        heroImageSrc: _,
        heroImageAlt: u.intl.string(u.t['3QhxXF']),
        children: (0, s.jsxs)('div', {
            className: E.buttonContainer,
            children: [
                (0, s.jsx)(i.zxk, {
                    color: i.zxk.Colors.BRAND,
                    size: i.zxk.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        h(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: u.intl.string(u.t['+o4Q7e'])
                }),
                (0, s.jsx)(i.zxk, {
                    color: i.zxk.Colors.PRIMARY,
                    size: i.zxk.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        h(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: u.intl.string(u.t.xLkGzM)
                })
            ]
        })
    });
}

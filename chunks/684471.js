n.d(e, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    s = n(442837),
    a = n(594174),
    o = n(51144),
    c = n(473092),
    l = n(955708),
    d = n(850165),
    u = n(388032),
    E = n(948582),
    _ = n(282668);
function h(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: h } = t,
        p = (0, s.e7)([a.default], () => {
            let t = a.default.getUser(e);
            return o.ZP.getName(t);
        });
    return (0, r.jsx)(d.Z, {
        header: u.intl.string(u.t.sSMgCw),
        description: u.intl.formatToPlainString(u.t.q2QrTU, { username: p }),
        heroImageSrc: _,
        heroImageAlt: u.intl.string(u.t['3QhxXF']),
        children: (0, r.jsxs)('div', {
            className: E.buttonContainer,
            children: [
                (0, r.jsx)(i.zxk, {
                    text: u.intl.string(u.t['+o4Q7e']),
                    variant: 'primary',
                    fullWidth: !0,
                    onClick: () => {
                        (h(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION));
                    }
                }),
                (0, r.jsx)(i.zxk, {
                    text: u.intl.string(u.t.xLkGzM),
                    variant: 'secondary',
                    fullWidth: !0,
                    onClick: () => {
                        (h(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS));
                    }
                })
            ]
        })
    });
}

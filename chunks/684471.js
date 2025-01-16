e.d(n, {
    Z: function () {
        return h;
    }
});
var r = e(200651);
e(192379);
var o = e(481060),
    i = e(442837),
    s = e(594174),
    a = e(51144),
    c = e(473092),
    l = e(955708),
    u = e(850165),
    d = e(388032),
    E = e(461247),
    N = e(282668);
function h(t) {
    let { senderId: n, trackAnalyticsEvent: e, onNavigate: h } = t,
        f = (0, i.e7)([s.default], () => {
            let t = s.default.getUser(n);
            return a.ZP.getName(t);
        });
    return (0, r.jsx)(u.Z, {
        header: d.intl.string(d.t.sSMgCw),
        description: d.intl.formatToPlainString(d.t.q2QrTU, { username: f }),
        heroImageSrc: N,
        heroImageAlt: d.intl.string(d.t['3QhxXF']),
        children: (0, r.jsxs)('div', {
            className: E.buttonContainer,
            children: [
                (0, r.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        h(l.InappropriateConversationModalSlideKeys.TAKE_ACTION), e(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: d.intl.string(d.t['+o4Q7e'])
                }),
                (0, r.jsx)(o.Button, {
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        h(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS), e(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: d.intl.string(d.t.xLkGzM)
                })
            ]
        })
    });
}

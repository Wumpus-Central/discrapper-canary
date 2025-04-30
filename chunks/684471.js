n.d(e, { Z: () => _ });
var r = n(200651);
n(192379);
var s = n(481060),
    i = n(442837),
    o = n(594174),
    c = n(51144),
    a = n(473092),
    l = n(955708),
    u = n(850165),
    d = n(388032),
    E = n(948582),
    h = n(282668);
function _(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: _ } = t,
        N = (0, i.e7)([o.default], () => {
            let t = o.default.getUser(e);
            return c.ZP.getName(t);
        });
    return (0, r.jsx)(u.Z, {
        header: d.intl.string(d.t.sSMgCw),
        description: d.intl.formatToPlainString(d.t.q2QrTU, { username: N }),
        heroImageSrc: h,
        heroImageAlt: d.intl.string(d.t['3QhxXF']),
        children: (0, r.jsxs)('div', {
            className: E.buttonContainer,
            children: [
                (0, r.jsx)(s.zxk, {
                    color: s.zxk.Colors.BRAND,
                    size: s.zxk.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        _(l.x.TAKE_ACTION), n(a.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                    children: d.intl.string(d.t['+o4Q7e'])
                }),
                (0, r.jsx)(s.zxk, {
                    color: s.zxk.Colors.PRIMARY,
                    size: s.zxk.Sizes.LARGE,
                    className: E.button,
                    onClick: () => {
                        _(l.x.SAFETY_TIPS), n(a.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                    children: d.intl.string(d.t.xLkGzM)
                })
            ]
        })
    });
}

n.d(e, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(442837),
    a = n(594174),
    o = n(51144),
    c = n(473092),
    l = n(955708),
    d = n(850165),
    u = n(388032),
    x = n(948582),
    p = n(282668);
function h(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: h } = t,
        g = (0, s.e7)([a.default], () => {
            let t = a.default.getUser(e);
            return o.ZP.getName(t);
        });
    return (0, i.jsx)(d.Z, {
        header: u.intl.string(u.t.sSMgCw),
        description: u.intl.formatToPlainString(u.t.q2QrTU, { username: g }),
        heroImageSrc: p,
        heroImageAlt: u.intl.string(u.t["3QhxXF"]),
        children: (0, i.jsxs)("div", {
            className: x.buttonContainer,
            children: [
                (0, i.jsx)(r.zxk, {
                    text: u.intl.string(u.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        h(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, i.jsx)(r.zxk, {
                    text: u.intl.string(u.t.xLkGzM),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        h(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

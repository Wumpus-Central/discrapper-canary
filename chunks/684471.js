n.d(e, { Z: () => g });
var i = n(54381);
n(473749);
var r = n(481060),
    s = n(442837),
    a = n(594174),
    o = n(51144),
    c = n(473092),
    l = n(955708),
    d = n(850165),
    u = n(388032),
    p = n(394968),
    x = n(282668);
function g(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: g } = t,
        h = (0, s.e7)([a.default], () => {
            let t = a.default.getUser(e);
            return o.ZP.getName(t);
        });
    return (0, i.jsx)(d.Z, {
        header: u.intl.string(u.t.sSMgC6),
        description: u.intl.formatToPlainString(u.t.q2QrTY, { username: h }),
        heroImageSrc: x,
        heroImageAlt: u.intl.string(u.t["3QhxXJ"]),
        children: (0, i.jsxs)("div", {
            className: p.buttonContainer,
            children: [
                (0, i.jsx)(r.Button, {
                    text: u.intl.string(u.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        g(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, i.jsx)(r.Button, {
                    text: u.intl.string(u.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        g(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

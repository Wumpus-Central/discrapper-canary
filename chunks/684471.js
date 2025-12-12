n.d(e, { Z: () => h });
var i = n(54381);
n(473749);
var r = n(970683),
    s = n(481060),
    a = n(442837),
    o = n(594174),
    c = n(51144),
    l = n(473092),
    d = n(955708),
    u = n(850165),
    p = n(388032),
    x = n(394968);
function h(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: h } = t,
        _ = (0, a.e7)([o.default], () => {
            let t = o.default.getUser(e);
            return c.ZP.getName(t);
        });
    return (0, i.jsx)(u.Z, {
        header: p.intl.string(p.t.sSMgC6),
        description: p.intl.formatToPlainString(p.t.q2QrTY, { username: _ }),
        heroImage: (0, i.jsx)(r.K, { alt: p.intl.string(p.t["3QhxXJ"]) }),
        children: (0, i.jsxs)("div", {
            className: x.buttonContainer,
            children: [
                (0, i.jsx)(s.Button, {
                    text: p.intl.string(p.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        h(d.x.TAKE_ACTION), n(l.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, i.jsx)(s.Button, {
                    text: p.intl.string(p.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        h(d.x.SAFETY_TIPS), n(l.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

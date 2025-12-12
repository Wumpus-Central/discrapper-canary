n.d(e, { Z: () => x });
var i = n(54381);
n(473749);
var r = n(970683),
    a = n(481060),
    s = n(442837),
    o = n(594174),
    c = n(51144),
    l = n(473092),
    d = n(955708),
    u = n(850165),
    f = n(388032),
    p = n(72595);
function x(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: x } = t,
        h = (0, s.e7)([o.default], () => {
            let t = o.default.getUser(e);
            return c.ZP.getName(t);
        });
    return (0, i.jsx)(u.Z, {
        header: f.intl.string(f.t.sSMgC6),
        description: f.intl.formatToPlainString(f.t.q2QrTY, { username: h }),
        heroImage: (0, i.jsx)(r.K, { alt: f.intl.string(f.t["3QhxXJ"]) }),
        children: (0, i.jsxs)("div", {
            className: p.buttonContainer,
            children: [
                (0, i.jsx)(a.Button, {
                    text: f.intl.string(f.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        x(d.x.TAKE_ACTION), n(l.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, i.jsx)(a.Button, {
                    text: f.intl.string(f.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        x(d.x.SAFETY_TIPS), n(l.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

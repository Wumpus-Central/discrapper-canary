n.d(e, { A: () => A });
var r = n(627968);
n(64700);
var i = n(492917),
    a = n(397927),
    s = n(311907),
    l = n(287809),
    c = n(427262),
    o = n(665909),
    d = n(237170),
    u = n(12105),
    x = n(985018),
    m = n(286965);
function A(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: A } = t,
        f = (0, s.bG)([l.default], () => {
            let t = l.default.getUser(e);
            return c.Ay.getName(t);
        });
    return (0, r.jsx)(u.A, {
        header: x.intl.string(x.t.sSMgC6),
        description: x.intl.formatToPlainString(x.t.q2QrTY, { username: f }),
        heroImage: (0, r.jsx)(i.$wK, { alt: x.intl.string(x.t["3QhxXJ"]) }),
        children: (0, r.jsxs)("div", {
            className: m.UD,
            children: [
                (0, r.jsx)(a.Button, {
                    text: x.intl.string(x.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        A(d.G.TAKE_ACTION), n(o.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, r.jsx)(a.Button, {
                    text: x.intl.string(x.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        A(d.G.SAFETY_TIPS), n(o.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

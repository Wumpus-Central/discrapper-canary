n.d(e, { A: () => A });
var i = n(627968);
n(64700);
var s = n(492917),
    r = n(397927),
    a = n(311907),
    l = n(287809),
    o = n(427262),
    c = n(665909),
    d = n(237170),
    E = n(12105),
    _ = n(985018),
    u = n(286965);
function A(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: A } = t,
        h = (0, a.bG)([l.default], () => {
            let t = l.default.getUser(e);
            return o.Ay.getName(t);
        });
    return (0, i.jsx)(E.A, {
        header: _.intl.string(_.t.sSMgC6),
        description: _.intl.formatToPlainString(_.t.q2QrTY, { username: h }),
        heroImage: (0, i.jsx)(s.$wK, { alt: _.intl.string(_.t["3QhxXJ"]) }),
        children: (0, i.jsxs)("div", {
            className: u.UD,
            children: [
                (0, i.jsx)(r.Button, {
                    text: _.intl.string(_.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        A(d.G.TAKE_ACTION), n(c.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, i.jsx)(r.Button, {
                    text: _.intl.string(_.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        A(d.G.SAFETY_TIPS), n(c.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

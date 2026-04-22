n.d(e, { A: () => _ });
var a = n(627968);
n(64700);
var r = n(247770),
    s = n(821609),
    i = n(311907),
    l = n(287809),
    o = n(427262),
    c = n(665909),
    d = n(237170),
    u = n(12105),
    E = n(985018),
    h = n(230780);
function _(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: _ } = t,
        A = (0, i.bG)([l.default], () => {
            let t = l.default.getUser(e);
            return o.Ay.getName(t);
        });
    return (0, a.jsx)(u.A, {
        header: E.intl.string(E.t.sSMgC6),
        description: E.intl.formatToPlainString(E.t.q2QrTY, { username: A }),
        heroImage: (0, a.jsx)(r.$, { alt: E.intl.string(E.t["3QhxXJ"]) }),
        children: (0, a.jsxs)("div", {
            className: h.UD,
            children: [
                (0, a.jsx)(s.$, {
                    text: E.intl.string(E.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        _(d.G.TAKE_ACTION), n(c.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, a.jsx)(s.$, {
                    text: E.intl.string(E.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        _(d.G.SAFETY_TIPS), n(c.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}

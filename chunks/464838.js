n.d(e, { A: () => _ });
var a = n(627968);
n(64700);
var i = n(247770),
    r = n(821609),
    s = n(311907),
    l = n(287809),
    o = n(427262),
    c = n(665909),
    d = n(237170),
    E = n(12105),
    u = n(985018),
    A = n(230780);
function _(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: _ } = t,
        h = (0, s.bG)([l.default], () => {
            let t = l.default.getUser(e);
            return o.Ay.getName(t);
        });
    return (0, a.jsx)(E.A, {
        header: u.intl.string(u.t.sSMgC6),
        description: u.intl.formatToPlainString(u.t.q2QrTY, { username: h }),
        heroImage: (0, a.jsx)(i.$, { alt: u.intl.string(u.t["3QhxXJ"]) }),
        children: (0, a.jsxs)("div", {
            className: A.UD,
            children: [
                (0, a.jsx)(r.$, {
                    text: u.intl.string(u.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        _(d.G.TAKE_ACTION), n(c.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, a.jsx)(r.$, {
                    text: u.intl.string(u.t.xLkGzP),
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

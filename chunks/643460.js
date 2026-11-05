var i = e(477900);
e(582128);
var s = e(189213),
    n = e(214947),
    o = e(534890),
    c = e(26137),
    l = e(625903),
    a = e(834730),
    d = e(230837),
    m = e(975571),
    h = e(652215),
    u = e(99206),
    x = e(792996),
    C = e(463292);
function j(t) {
    let { onClose: r } = t,
        e = [
            {
                icon: (0, i.jsx)(n.FriendsIcon, { size: "refresh_sm", color: "currentColor" }),
                text: x.intl.string(x.t.vXBrdg),
            },
            {
                icon: (0, i.jsx)(o.ChatIcon, { size: "refresh_sm", color: "currentColor" }),
                text: x.intl.string(x.t["i7/QHN"]),
            },
            {
                icon: (0, i.jsx)(c.UserCircleIcon, { size: "refresh_sm", color: "currentColor" }),
                text: x.intl.string(x.t.ZmBfKJ),
            },
            {
                icon: (0, i.jsx)(l.SettingsIcon, { size: "refresh_sm", color: "currentColor" }),
                text: x.intl.format(x.t.wBlJCr, {
                    recentActivityURL: m.A.getArticleURL(h.MVz.MEMBER_LIST_ACTIVITY_FEED),
                    handleActivityPrivacyClick: () => {
                        (r(), (0, d.A)(u.J.ACTIVITY_PRIVACY));
                    },
                }),
            },
        ];
    return (0, i.jsxs)("div", {
        className: C.Q2,
        children: [
            (0, i.jsx)(a.E, { variant: "body-sm/semibold", children: x.intl.string(x.t.YjqBbg) }),
            e.map((t, r) => {
                let { icon: e, text: s } = t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: C.Gc,
                        children: [
                            (0, i.jsx)("div", { className: C.qS, children: e }),
                            (0, i.jsx)(a.E, { variant: "body-sm/medium", color: "text-muted", children: s }),
                        ],
                    },
                    `memberlist-learn-more-note-${r}`,
                );
            }),
        ],
    });
}
e.d(
    r,
    {},
    {
        default: function (t) {
            let { transitionState: r, onClose: e } = t;
            return (0, i.jsx)(s.a, {
                transitionState: r,
                title: x.intl.string(x.t.pWLGnF),
                subtitle: x.intl.string(x.t.WKxo8n),
                actions: [],
                onClose: e,
                children: (0, i.jsx)(j, { onClose: e }),
            });
        },
    },
);

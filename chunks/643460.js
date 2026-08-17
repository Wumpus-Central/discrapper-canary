r.d(e, { default: () => j });
var i = r(477900);
r(582128);
var s = r(189213),
    n = r(214947),
    l = r(534890),
    o = r(26137),
    c = r(625903),
    a = r(834730),
    d = r(230837),
    m = r(975571),
    x = r(652215),
    h = r(99206),
    u = r(375708),
    C = r(636929);
function j(t) {
    let { transitionState: e, onClose: r } = t;
    return (0, i.jsx)(s.Modal, {
        transitionState: e,
        title: u.intl.string(u.t.pWLGnF),
        subtitle: u.intl.string(u.t.WKxo8n),
        actions: [],
        onClose: r,
        children: (0, i.jsx)(v, { onClose: r }),
    });
}
function v(t) {
    let { onClose: e } = t,
        r = [
            { icon: (0, i.jsx)(n.$, { size: "refresh_sm", color: "currentColor" }), text: u.intl.string(u.t.vXBrdg) },
            {
                icon: (0, i.jsx)(l.ChatIcon, { size: "refresh_sm", color: "currentColor" }),
                text: u.intl.string(u.t["i7/QHN"]),
            },
            { icon: (0, i.jsx)(o.r, { size: "refresh_sm", color: "currentColor" }), text: u.intl.string(u.t.ZmBfKJ) },
            {
                icon: (0, i.jsx)(c.SettingsIcon, { size: "refresh_sm", color: "currentColor" }),
                text: u.intl.format(u.t.wBlJCr, {
                    recentActivityURL: m.A.getArticleURL(x.MVz.MEMBER_LIST_ACTIVITY_FEED),
                    handleActivityPrivacyClick: () => {
                        e(), (0, d.A)(h.J.ACTIVITY_PRIVACY);
                    },
                }),
            },
        ];
    return (0, i.jsxs)("div", {
        className: C.Q2,
        children: [
            (0, i.jsx)(a.E, { variant: "text-sm/semibold", children: u.intl.string(u.t.YjqBbg) }),
            r.map((t, e) => {
                let { icon: r, text: s } = t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: C.Gc,
                        children: [
                            (0, i.jsx)("div", { className: C.qS, children: r }),
                            (0, i.jsx)(a.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                        ],
                    },
                    `memberlist-learn-more-note-${e}`,
                );
            }),
        ],
    });
}

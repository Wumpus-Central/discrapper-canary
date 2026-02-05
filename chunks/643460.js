r.d(e, { default: () => m });
var s = r(627968);
r(64700);
var i = r(158954),
    n = r(397927),
    o = r(725177),
    l = r(975571),
    c = r(652215),
    a = r(857266),
    d = r(985018),
    x = r(461162);
function m(t) {
    let { transitionState: e, onClose: r } = t;
    return (0, s.jsx)(i.Modal, {
        transitionState: e,
        title: d.intl.string(d.t.pWLGnF),
        subtitle: d.intl.string(d.t.WKxo8n),
        actions: [],
        onClose: r,
        children: (0, s.jsx)(u, { onClose: r }),
    });
}
function u(t) {
    let { onClose: e } = t,
        r = [
            { icon: (0, s.jsx)(n.$yI, { size: "refresh_sm", color: "currentColor" }), text: d.intl.string(d.t.vXBrdg) },
            {
                icon: (0, s.jsx)(n.oyn, { size: "refresh_sm", color: "currentColor" }),
                text: d.intl.string(d.t["i7/QHN"]),
            },
            { icon: (0, s.jsx)(n.rMq, { size: "refresh_sm", color: "currentColor" }), text: d.intl.string(d.t.ZmBfKJ) },
            {
                icon: (0, s.jsx)(n.Zes, { size: "refresh_sm", color: "currentColor" }),
                text: d.intl.format(d.t.wBlJCr, {
                    recentActivityURL: l.A.getArticleURL(c.MVz.MEMBER_LIST_ACTIVITY_FEED),
                    handleActivityPrivacyClick: () => {
                        e(), (0, o.A)(a.J.ACTIVITY_PRIVACY);
                    },
                }),
            },
        ];
    return (0, s.jsxs)("div", {
        className: x.Q2,
        children: [
            (0, s.jsx)(n.Text, { variant: "text-sm/semibold", children: d.intl.string(d.t.YjqBbg) }),
            r.map((t, e) => {
                let { icon: r, text: i } = t;
                return (0, s.jsxs)(
                    "div",
                    {
                        className: x.Gc,
                        children: [
                            (0, s.jsx)("div", { className: x.qS, children: r }),
                            (0, s.jsx)(n.Text, { variant: "text-sm/medium", color: "text-muted", children: i }),
                        ],
                    },
                    `memberlist-learn-more-note-${e}`,
                );
            }),
        ],
    });
}

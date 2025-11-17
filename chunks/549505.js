r.d(e, { default: () => m });
var i = r(54381);
r(473749);
var n = r(793030),
    s = r(481060),
    o = r(547972),
    l = r(63063),
    c = r(981631),
    a = r(332325),
    d = r(388032),
    x = r(688364);
function m(t) {
    let { transitionState: e, onClose: r } = t;
    return (0, i.jsx)(n.Modal, {
        transitionState: e,
        title: d.intl.string(d.t.pWLGnF),
        subtitle: d.intl.string(d.t.WKxo8n),
        actions: [],
        onClose: r,
        children: (0, i.jsx)(u, { onClose: r }),
    });
}
function u(t) {
    let { onClose: e } = t,
        r = [
            {
                icon: (0, i.jsx)(s.iFz, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
                text: d.intl.string(d.t.vXBrdg),
            },
            {
                icon: (0, i.jsx)(s.kBi, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
                text: d.intl.string(d.t["i7/QHN"]),
            },
            {
                icon: (0, i.jsx)(s.lMe, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
                text: d.intl.string(d.t.ZmBfKJ),
            },
            {
                icon: (0, i.jsx)(s.ewm, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
                text: d.intl.format(d.t.wBlJCr, {
                    recentActivityURL: l.Z.getArticleURL(c.BhN.MEMBER_LIST_ACTIVITY_FEED),
                    handleActivityPrivacyClick: () => {
                        e(), (0, o.Z)(a.Z.ACTIVITY_PRIVACY);
                    },
                }),
            },
        ];
    return (0, i.jsxs)("div", {
        className: x.notes,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-sm/semibold",
                children: d.intl.string(d.t.YjqBbg),
            }),
            r.map((t, e) => {
                let { icon: r, text: n } = t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: x.badgeNote,
                        children: [
                            (0, i.jsx)("div", {
                                className: x.badge,
                                children: r,
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-tertiary",
                                children: n,
                            }),
                        ],
                    },
                    "memberlist-learn-more-note-".concat(e),
                );
            }),
        ],
    });
}

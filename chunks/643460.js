e.d(r, { default: () => j });
var i = e(627968);
e(64700);
var s = e(189213),
    n = e(214947),
    l = e(534890),
    o = e(26137),
    c = e(625903),
    a = e(834730),
    d = e(230837),
    m = e(975571),
    x = e(652215),
    u = e(99206),
    h = e(375708),
    C = e(643833);
function j(t) {
    let { transitionState: r, onClose: e } = t;
    return (0, i.jsx)(s.Modal, {
        transitionState: r,
        title: h.intl.string(h.t.pWLGnF),
        subtitle: h.intl.string(h.t.WKxo8n),
        actions: [],
        onClose: e,
        children: (0, i.jsx)(v, { onClose: e }),
    });
}
function v(t) {
    let { onClose: r } = t,
        e = [
            { icon: (0, i.jsx)(n.$, { size: "refresh_sm", color: "currentColor" }), text: h.intl.string(h.t.vXBrdg) },
            {
                icon: (0, i.jsx)(l.o, { size: "refresh_sm", color: "currentColor" }),
                text: h.intl.string(h.t["i7/QHN"]),
            },
            { icon: (0, i.jsx)(o.r, { size: "refresh_sm", color: "currentColor" }), text: h.intl.string(h.t.ZmBfKJ) },
            {
                icon: (0, i.jsx)(c.Z, { size: "refresh_sm", color: "currentColor" }),
                text: h.intl.format(h.t.wBlJCr, {
                    recentActivityURL: m.A.getArticleURL(x.MVz.MEMBER_LIST_ACTIVITY_FEED),
                    handleActivityPrivacyClick: () => {
                        r(), (0, d.A)(u.J.ACTIVITY_PRIVACY);
                    },
                }),
            },
        ];
    return (0, i.jsxs)("div", {
        className: C.Q2,
        children: [
            (0, i.jsx)(a.E, { variant: "text-sm/semibold", children: h.intl.string(h.t.YjqBbg) }),
            e.map((t, r) => {
                let { icon: e, text: s } = t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: C.Gc,
                        children: [
                            (0, i.jsx)("div", { className: C.qS, children: e }),
                            (0, i.jsx)(a.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                        ],
                    },
                    `memberlist-learn-more-note-${r}`,
                );
            }),
        ],
    });
}

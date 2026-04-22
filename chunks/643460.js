r.d(e, { default: () => m });
var s = r(627968);
r(64700);
var i = r(189213),
    n = r(214947),
    l = r(534890),
    o = r(26137),
    c = r(625903),
    a = r(834730),
    d = r(866903),
    A = r(975571),
    _ = r(652215),
    h = r(436620),
    u = r(985018),
    x = r(643833);
function m(t) {
    let { transitionState: e, onClose: r } = t;
    return (0, s.jsx)(i.Modal, {
        transitionState: e,
        title: u.intl.string(u.t.pWLGnF),
        subtitle: u.intl.string(u.t.WKxo8n),
        actions: [],
        onClose: r,
        children: (0, s.jsx)(C, { onClose: r }),
    });
}
function C(t) {
    let { onClose: e } = t,
        r = [
            { icon: (0, s.jsx)(n.$, { size: "refresh_sm", color: "currentColor" }), text: u.intl.string(u.t.vXBrdg) },
            {
                icon: (0, s.jsx)(l.o, { size: "refresh_sm", color: "currentColor" }),
                text: u.intl.string(u.t["i7/QHN"]),
            },
            { icon: (0, s.jsx)(o.r, { size: "refresh_sm", color: "currentColor" }), text: u.intl.string(u.t.ZmBfKJ) },
            {
                icon: (0, s.jsx)(c.Z, { size: "refresh_sm", color: "currentColor" }),
                text: u.intl.format(u.t.wBlJCr, {
                    recentActivityURL: A.A.getArticleURL(_.MVz.MEMBER_LIST_ACTIVITY_FEED),
                    handleActivityPrivacyClick: () => {
                        e(), (0, d.A)(h.J.ACTIVITY_PRIVACY);
                    },
                }),
            },
        ];
    return (0, s.jsxs)("div", {
        className: x.Q2,
        children: [
            (0, s.jsx)(a.E, { variant: "text-sm/semibold", children: u.intl.string(u.t.YjqBbg) }),
            r.map((t, e) => {
                let { icon: r, text: i } = t;
                return (0, s.jsxs)(
                    "div",
                    {
                        className: x.Gc,
                        children: [
                            (0, s.jsx)("div", { className: x.qS, children: r }),
                            (0, s.jsx)(a.E, { variant: "text-sm/medium", color: "text-muted", children: i }),
                        ],
                    },
                    `memberlist-learn-more-note-${e}`,
                );
            }),
        ],
    });
}

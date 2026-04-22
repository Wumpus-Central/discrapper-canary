s.d(e, { default: () => _ });
var i = s(627968),
    a = s(64700),
    l = s(189213),
    n = s(834730),
    r = s(664121),
    c = s(998445),
    o = s(950305),
    u = s(687966),
    d = s(253932),
    g = s(975571),
    h = s(341915),
    m = s(651892),
    x = s(792620),
    f = s(652215),
    p = s(985018),
    T = s(510070);
function _(t) {
    let { transitionState: e, onClose: s, questContent: r, quest: c } = t,
        o = d.H1.useSetting(),
        u = ((t) => {
            switch (t) {
                case h.uF.QUEST_BAR:
                case h.uF.QUEST_BAR_V2:
                    return { location: !0, age: !0, activity: !0 };
                case h.uF.ACTIVITY_PANEL:
                case h.uF.QUESTS_EMBED:
                case h.uF.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(r),
        _ = a.useMemo(
            () =>
                (0, m.JM)({
                    isTargetedDisclosure: null != u,
                    isContextualDisclosure: o,
                    gamePublisher: c.config.messages.gamePublisher,
                    gameTitle: c.config.messages.gameTitle,
                    cosponsorName: c.config.cosponsorMetadata?.name,
                    isVideoQuest: (0, x.vv)(c),
                }),
            [c, u, o],
        );
    return (0, i.jsxs)(l.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        title: p.intl.string(p.t.GcsZKJ),
        actions: [{ onClick: () => s(), text: p.intl.string(p.t.cpT0Cq) }],
        children: [
            (0, i.jsx)(n.E, { variant: "text-sm/medium", color: "text-default", className: T.gt, children: _ }),
            (0, i.jsx)(v, { targetedTraits: u, isContextualDisclosure: o }),
            (0, i.jsx)(n.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: p.intl.format(p.t.tzq9Wa, {
                    privacySettingsUrl: g.A.getArticleURL(f.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function v(t) {
    let { targetedTraits: e, isContextualDisclosure: s } = t;
    if (null == e) return null;
    if (s)
        return (0, i.jsx)("ul", {
            className: T.OK,
            children: (0, i.jsx)(E, { icon: r.R, children: p.intl.string(p.t["2bL0wT"]) }),
        });
    let { location: a, age: l, activity: n } = e;
    return (0, i.jsxs)("ul", {
        className: T.OK,
        children: [
            a && (0, i.jsx)(E, { icon: c.L, children: p.intl.string(p.t.xQSdPv) }),
            l && (0, i.jsx)(E, { icon: o.n, children: p.intl.string(p.t.mYt7hQ) }),
            n && (0, i.jsx)(E, { icon: u._, children: p.intl.string(p.t.XAsWxQ) }),
        ],
    });
}
function E(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(n.E, {
        variant: "text-sm/medium",
        tag: "li",
        className: T.hD,
        children: [(0, i.jsx)(e, { size: "xs", color: "currentColor" }), s],
    });
}

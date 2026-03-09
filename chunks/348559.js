s.d(e, { default: () => h });
var i = s(627968),
    n = s(64700),
    r = s(158954),
    a = s(397927),
    l = s(253932),
    c = s(975571),
    o = s(341915),
    u = s(651892),
    d = s(792620),
    x = s(652215),
    g = s(985018),
    m = s(645345);
function h(t) {
    let { transitionState: e, onClose: s, questContent: h, quest: _ } = t,
        f = l.H1.useSetting(),
        p = ((t) => {
            switch (t) {
                case o.uF.QUEST_BAR:
                case o.uF.QUEST_BAR_V2:
                    return { location: !0, age: !0, activity: !0 };
                case o.uF.ACTIVITY_PANEL:
                case o.uF.QUESTS_EMBED:
                case o.uF.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(h),
        S = n.useMemo(
            () =>
                (0, u.JM)({
                    isTargetedDisclosure: null != p,
                    isContextualDisclosure: f,
                    gamePublisher: _.config.messages.gamePublisher,
                    gameTitle: _.config.messages.gameTitle,
                    cosponsorName: _.config.cosponsorMetadata?.name,
                    isVideoQuest: (0, d.vv)(_),
                }),
            [_, p, f],
        );
    return (0, i.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        title: g.intl.string(g.t.GcsZKJ),
        actions: [{ onClick: () => s(), text: g.intl.string(g.t.cpT0Cq) }],
        children: [
            (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", className: m.gt, children: S }),
            (0, i.jsx)(T, { targetedTraits: p, isContextualDisclosure: f }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: g.intl.format(g.t.tzq9Wa, {
                    privacySettingsUrl: c.A.getArticleURL(x.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function T(t) {
    let { targetedTraits: e, isContextualDisclosure: s } = t;
    if (null == e) return null;
    if (s)
        return (0, i.jsx)("ul", {
            className: m.OK,
            children: (0, i.jsx)(_, { icon: a.RR9, children: g.intl.string(g.t["2bL0wT"]) }),
        });
    let { location: n, age: r, activity: l } = e;
    return (0, i.jsxs)("ul", {
        className: m.OK,
        children: [
            n && (0, i.jsx)(_, { icon: a.L_e, children: g.intl.string(g.t.xQSdPv) }),
            r && (0, i.jsx)(_, { icon: a.nys, children: g.intl.string(g.t.mYt7hQ) }),
            l && (0, i.jsx)(_, { icon: a._xR, children: g.intl.string(g.t.XAsWxQ) }),
        ],
    });
}
function _(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(a.Text, {
        variant: "text-sm/medium",
        tag: "li",
        className: m.hD,
        children: [(0, i.jsx)(e, { size: "xs", color: "currentColor" }), s],
    });
}

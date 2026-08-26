s.d(e, { default: () => S });
var i = s(477900),
    n = s(582128),
    r = s(189213),
    l = s(834730),
    c = s(664121),
    a = s(998445),
    o = s(950305),
    u = s(687966),
    d = s(885386),
    m = s(975571),
    g = s(738822),
    x = s(651892),
    h = s(792620),
    T = s(652215),
    f = s(375708),
    E = s(738541);
function S(t) {
    let { transitionState: e, onClose: s, questContent: c, quest: a, returnRef: o } = t,
        u = d.H1.useSetting(),
        S = (function (t) {
            switch (t) {
                case g.uF.QUEST_BAR:
                case g.uF.QUEST_BAR_V2:
                    return { location: !0, age: !0, activity: !0 };
                case g.uF.ACTIVITY_PANEL:
                case g.uF.QUESTS_EMBED:
                case g.uF.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(c),
        p = n.useMemo(
            () =>
                (0, x.JM)({
                    isTargetedDisclosure: null != S,
                    isContextualDisclosure: u,
                    gamePublisher: a.config.messages.gamePublisher,
                    gameTitle: a.config.messages.gameTitle,
                    cosponsorName: a.config.cosponsorMetadata?.name,
                    isVideoQuest: (0, h.vv)(a),
                }),
            [a, S, u],
        );
    return (0, i.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        returnRef: o,
        title: f.intl.string(f.t.GcsZKJ),
        actions: [{ onClick: () => s(), text: f.intl.string(f.t.cpT0Cq) }],
        children: [
            (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-default", className: E.gt, children: p }),
            (0, i.jsx)(j, { targetedTraits: S, isContextualDisclosure: u }),
            (0, i.jsx)(l.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: f.intl.format(f.t.tzq9Wa, {
                    privacySettingsUrl: m.A.getArticleURL(T.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function j(t) {
    let { targetedTraits: e, isContextualDisclosure: s } = t;
    if (null == e) return null;
    if (s)
        return (0, i.jsx)("ul", {
            className: E.OK,
            children: (0, i.jsx)(p, { icon: c.R, children: f.intl.string(f.t["2bL0wT"]) }),
        });
    let { location: n, age: r, activity: l } = e;
    return (0, i.jsxs)("ul", {
        className: E.OK,
        children: [
            n && (0, i.jsx)(p, { icon: a.GlobeEarthIcon, children: f.intl.string(f.t.xQSdPv) }),
            r && (0, i.jsx)(p, { icon: o.UserIcon, children: f.intl.string(f.t.mYt7hQ) }),
            l && (0, i.jsx)(p, { icon: u.GameControllerIcon, children: f.intl.string(f.t.XAsWxQ) }),
        ],
    });
}
function p(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(l.E, {
        variant: "text-sm/medium",
        tag: "li",
        className: E.hD,
        children: [(0, i.jsx)(e, { size: "xs", color: "currentColor" }), s],
    });
}

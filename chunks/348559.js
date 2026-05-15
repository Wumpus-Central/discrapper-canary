s.d(e, { default: () => S });
var i = s(627968),
    n = s(64700),
    r = s(189213),
    l = s(834730),
    a = s(664121),
    c = s(998445),
    u = s(950305),
    o = s(687966),
    d = s(885386),
    m = s(975571),
    g = s(507107),
    x = s(651892),
    h = s(792620),
    T = s(652215),
    f = s(375708),
    E = s(510070);
function S(t) {
    let { transitionState: e, onClose: s, questContent: a, quest: c, returnRef: u } = t,
        o = d.H1.useSetting(),
        S = ((t) => {
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
        })(a),
        _ = n.useMemo(
            () =>
                (0, x.JM)({
                    isTargetedDisclosure: null != S,
                    isContextualDisclosure: o,
                    gamePublisher: c.config.messages.gamePublisher,
                    gameTitle: c.config.messages.gameTitle,
                    cosponsorName: c.config.cosponsorMetadata?.name,
                    isVideoQuest: (0, h.vv)(c),
                }),
            [c, S, o],
        );
    return (0, i.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        returnRef: u,
        title: f.intl.string(f.t.GcsZKJ),
        actions: [{ onClick: () => s(), text: f.intl.string(f.t.cpT0Cq) }],
        children: [
            (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-default", className: E.gt, children: _ }),
            (0, i.jsx)(j, { targetedTraits: S, isContextualDisclosure: o }),
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
            children: (0, i.jsx)(_, { icon: a.R, children: f.intl.string(f.t["2bL0wT"]) }),
        });
    let { location: n, age: r, activity: l } = e;
    return (0, i.jsxs)("ul", {
        className: E.OK,
        children: [
            n && (0, i.jsx)(_, { icon: c.L, children: f.intl.string(f.t.xQSdPv) }),
            r && (0, i.jsx)(_, { icon: u.n, children: f.intl.string(f.t.mYt7hQ) }),
            l && (0, i.jsx)(_, { icon: o._, children: f.intl.string(f.t.XAsWxQ) }),
        ],
    });
}
function _(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(l.E, {
        variant: "text-sm/medium",
        tag: "li",
        className: E.hD,
        children: [(0, i.jsx)(e, { size: "xs", color: "currentColor" }), s],
    });
}

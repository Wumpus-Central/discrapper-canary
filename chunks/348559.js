s.d(e, { default: () => p });
var i = s(477900),
    n = s(582128),
    r = s(323889),
    a = s(189213),
    l = s(834730),
    c = s(664121),
    o = s(998445),
    u = s(950305),
    d = s(687966),
    m = s(885386),
    g = s(975571),
    x = s(738822),
    h = s(651892),
    T = s(792620),
    E = s(652215),
    f = s(375708),
    S = s(738541);
function p(t) {
    let { transitionState: e, onClose: s, questContent: c, quest: o, returnRef: u } = t,
        d = m.H1.useSetting(),
        p = (function (t) {
            switch (t) {
                case x.uF.QUEST_BAR:
                case x.uF.QUEST_BAR_V2:
                    return { location: !0, age: !0, activity: !0 };
                case x.uF.ACTIVITY_PANEL:
                case x.uF.QUESTS_EMBED:
                case x.uF.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(c),
        C = n.useMemo(
            () =>
                (0, h.JM)({
                    adCreativeType: r.p.QUEST,
                    isTargetedDisclosure: null != p,
                    isContextualDisclosure: d,
                    gamePublisher: o.config.messages.gamePublisher,
                    gameTitle: o.config.messages.gameTitle,
                    cosponsorName: o.config.cosponsorMetadata?.name,
                    isVideoQuest: (0, T.vv)(o),
                }),
            [o, p, d],
        );
    return (0, i.jsxs)(a.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        returnRef: u,
        title: f.intl.string(f.t.GcsZKJ),
        actions: [{ onClick: () => s(), text: f.intl.string(f.t.cpT0Cq) }],
        children: [
            (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-default", className: S.gt, children: C }),
            (0, i.jsx)(j, { targetedTraits: p, isContextualDisclosure: d }),
            (0, i.jsx)(l.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: f.intl.format(f.t.tzq9Wa, {
                    privacySettingsUrl: g.A.getArticleURL(E.MVz.QUESTS_PRIVACY_CONTROLS),
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
            className: S.OK,
            children: (0, i.jsx)(C, { icon: c.R, children: f.intl.string(f.t["2bL0wT"]) }),
        });
    let { location: n, age: r, activity: a } = e;
    return (0, i.jsxs)("ul", {
        className: S.OK,
        children: [
            n && (0, i.jsx)(C, { icon: o.GlobeEarthIcon, children: f.intl.string(f.t.xQSdPv) }),
            r && (0, i.jsx)(C, { icon: u.UserIcon, children: f.intl.string(f.t.mYt7hQ) }),
            a && (0, i.jsx)(C, { icon: d.GameControllerIcon, children: f.intl.string(f.t.XAsWxQ) }),
        ],
    });
}
function C(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(l.E, {
        variant: "text-sm/medium",
        tag: "li",
        className: S.hD,
        children: [(0, i.jsx)(e, { size: "xs", color: "currentColor" }), s],
    });
}

s.d(e, { default: () => g });
var i = s(54381),
    n = s(473749),
    r = s(793030),
    a = s(481060),
    c = s(63063),
    l = s(509212),
    o = s(497505),
    u = s(981631),
    d = s(388032),
    m = s(849845);
function g(t) {
    let { transitionState: e, onClose: s, questContent: g, quest: T } = t,
        h = ((t) => {
            switch (t) {
                case o.jn.QUEST_BAR:
                case o.jn.QUEST_BAR_V2:
                    return {
                        location: !0,
                        age: !0,
                        activity: !0,
                    };
                case o.jn.ACTIVITY_PANEL:
                case o.jn.QUESTS_EMBED:
                case o.jn.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(g),
        p = n.useMemo(() => {
            var t;
            return (0, l.Fs)({
                isTargetedDisclosure: null != h,
                gamePublisher: T.config.messages.gamePublisher,
                gameTitle: T.config.messages.gameTitle,
                cosponsorName: null == (t = T.config.cosponsorMetadata) ? void 0 : t.name,
            });
        }, [T, h]);
    return (0, i.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        title: d.intl.string(d.t.GcsZKJ),
        actions: [
            {
                onClick: () => s(),
                text: d.intl.string(d.t.cpT0Cq),
            },
        ],
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                className: m.upperBodyText,
                children: p,
            }),
            (0, i.jsx)(x, { targetedTraits: h }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: d.intl.format(d.t.tzq9Wa, {
                    privacySettingsUrl: c.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function x(t) {
    let { targetedTraits: e } = t;
    if (null == e) return null;
    {
        let { location: t, age: s, activity: n } = e;
        return (0, i.jsxs)("ul", {
            className: m.targetList,
            children: [
                t &&
                    (0, i.jsx)(T, {
                        icon: a.enf,
                        children: d.intl.string(d.t.xQSdPv),
                    }),
                s &&
                    (0, i.jsx)(T, {
                        icon: a.tBG,
                        children: d.intl.string(d.t.mYt7hQ),
                    }),
                n &&
                    (0, i.jsx)(T, {
                        icon: a.iWm,
                        children: d.intl.string(d.t.XAsWxQ),
                    }),
            ],
        });
    }
}
function T(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(a.Text, {
        variant: "text-sm/medium",
        tag: "li",
        className: m.targetItem,
        children: [
            (0, i.jsx)(e, {
                size: "xs",
                color: "currentColor",
            }),
            s,
        ],
    });
}

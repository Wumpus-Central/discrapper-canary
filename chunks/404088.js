i.d(e, { default: () => x });
var s = i(54381),
    n = i(473749),
    r = i(793030),
    a = i(481060),
    c = i(63063),
    l = i(49436),
    o = i(304696),
    u = i(981631),
    d = i(388032),
    m = i(838462);
function x(t) {
    let { transitionState: e, onClose: i, questContent: x, quest: f } = t,
        T = ((t) => {
            switch (t) {
                case l.jn.QUEST_BAR:
                case l.jn.QUEST_BAR_V2:
                    return {
                        location: !0,
                        age: !0,
                        activity: !0,
                    };
                case l.jn.ACTIVITY_PANEL:
                case l.jn.QUESTS_EMBED:
                case l.jn.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(x),
        h = n.useMemo(() => {
            var t;
            return (0, o.Fs)({
                isTargetedDisclosure: null != T,
                gamePublisher: f.config.messages.gamePublisher,
                gameTitle: f.config.messages.gameTitle,
                cosponsorName: null == (t = f.config.cosponsorMetadata) ? void 0 : t.name,
            });
        }, [f, T]);
    return (0, s.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: i,
        title: d.intl.string(d.t.GcsZKJ),
        actions: [
            {
                onClick: () => i(),
                text: d.intl.string(d.t.cpT0Cq),
            },
        ],
        children: [
            (0, s.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: m.upperBodyText,
                children: h,
            }),
            (0, s.jsx)(g, { targetedTraits: T }),
            (0, s.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: d.intl.format(d.t.tzq9Wa, {
                    privacySettingsUrl: c.Z.getArticleURL(u.BhN.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function g(t) {
    let { targetedTraits: e } = t;
    if (null == e) return null;
    {
        let { location: t, age: i, activity: n } = e;
        return (0, s.jsxs)("ul", {
            className: m.targetList,
            children: [
                t &&
                    (0, s.jsx)(f, {
                        icon: a.enf,
                        children: d.intl.string(d.t.xQSdPv),
                    }),
                i &&
                    (0, s.jsx)(f, {
                        icon: a.tBG,
                        children: d.intl.string(d.t.mYt7hQ),
                    }),
                n &&
                    (0, s.jsx)(f, {
                        icon: a.iWm,
                        children: d.intl.string(d.t.XAsWxQ),
                    }),
            ],
        });
    }
}
function f(t) {
    let { icon: e, children: i } = t;
    return (0, s.jsxs)(a.Text, {
        variant: "text-sm/medium",
        tag: "li",
        className: m.targetItem,
        children: [
            (0, s.jsx)(e, {
                size: "xs",
                color: "currentColor",
            }),
            i,
        ],
    });
}

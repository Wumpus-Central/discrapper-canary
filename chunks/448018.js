n.d(t, { v: () => p });
var s = n(497505),
    r = n(988303),
    a = n(941348),
    o = n(658590),
    i = n(647365),
    l = n(743294);
let c = {
        component: i.Z,
        getCollapsedHeight: () => 40,
        getPreEnrollmentExpandedHeight: () => 240,
        getPostEnrollmentBackgroundImage: (e) => 'linear-gradient(90deg, '.concat(e.config.colors.primary, ', ').concat(e.config.colors.secondary, ')'),
        getPreEnrollmentBackgroundColor: (e) => void 0,
        canCollapseOnBlur: (e) => {
            var t;
            return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) == null;
        },
        shouldExpandOnQuestComplete: (e) => !0,
        getVerticalPadding: () => 8
    },
    d = l.Li,
    u = {
        component: a.Z,
        getCollapsedHeight: (e) => {
            var t;
            return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40;
        },
        getPreEnrollmentExpandedHeight: () => 270,
        getPostEnrollmentBackgroundImage: () => 'linear-gradient(90deg, '.concat(l.aY, ', ').concat(l.v6, ')'),
        getPreEnrollmentBackgroundColor: (e) => 'var(--home-background)',
        canCollapseOnBlur: (e) => !0,
        shouldExpandOnQuestComplete: (e) => !1,
        getVerticalPadding: () => d
    },
    p = (e, t, n) => {
        var a;
        let i = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null,
            l = (!i && t === r.P.V2) || (i && n === r.P.V2) || (0, o.a)(e),
            d = l ? u : c;
        return {
            component: d.component,
            collapsedHeight: d.getCollapsedHeight(e),
            preEnrollmentExpandedHeight: d.getPreEnrollmentExpandedHeight(e),
            postEnrollmentBackgroundImage: d.getPostEnrollmentBackgroundImage(e),
            preEnrollmentBackgroundColor: d.getPreEnrollmentBackgroundColor(e),
            canCollapseOnBlur: d.canCollapseOnBlur(e),
            shouldExpandOnQuestComplete: d.shouldExpandOnQuestComplete(e),
            paddingVertical: d.getVerticalPadding(),
            trackingCtx: { content: l ? s.jn.QUEST_BAR_V2 : s.jn.QUEST_BAR }
        };
    };

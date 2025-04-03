n.d(t, { v: () => p });
var r = n(497505),
    o = n(988303),
    s = n(941348),
    a = n(658590),
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
            return (null == (t = e.userStatus) ? void 0 : t.completedAt) == null;
        },
        shouldExpandOnQuestComplete: (e) => !0,
        getVerticalPadding: () => 8
    },
    d = l.Li,
    u = {
        component: s.Z,
        getCollapsedHeight: (e) => {
            var t;
            return (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null ? 66 : 40;
        },
        getPreEnrollmentExpandedHeight: () => 270,
        getPostEnrollmentBackgroundImage: () => 'linear-gradient(90deg, '.concat(l.aY, ', ').concat(l.v6, ')'),
        getPreEnrollmentBackgroundColor: (e) => 'var(--home-background)',
        canCollapseOnBlur: (e) => !0,
        shouldExpandOnQuestComplete: (e) => !1,
        getVerticalPadding: () => d
    },
    p = (e, t, n) => {
        var s;
        let i = (null == (s = e.userStatus) ? void 0 : s.enrolledAt) != null,
            l = (!i && t === o.P.V2) || (i && n === o.P.V2) || (0, a.a)(e),
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
            trackingCtx: { content: l ? r.jn.QUEST_BAR_V2 : r.jn.QUEST_BAR }
        };
    };

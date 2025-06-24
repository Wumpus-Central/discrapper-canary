n.d(t, { v: () => p });
var r = n(497505),
    s = n(988303),
    o = n(941348),
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
    u = l.Li,
    d = {
        component: o.Z,
        getCollapsedHeight: (e) => {
            var t;
            return (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null ? 66 : 40;
        },
        getPreEnrollmentExpandedHeight: () => 270,
        getPostEnrollmentBackgroundImage: () => 'linear-gradient(90deg, '.concat(l.aY, ', ').concat(l.v6, ')'),
        getPreEnrollmentBackgroundColor: (e) => 'var(--home-background)',
        canCollapseOnBlur: (e) => !0,
        shouldExpandOnQuestComplete: (e) => !1,
        getVerticalPadding: () => u
    },
    p = (e, t, n) => {
        var o;
        let i = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
            l = (!i && t === s.P.V2) || (i && n === s.P.V2) || (0, a.a)(e),
            u = l ? d : c;
        return {
            component: u.component,
            collapsedHeight: u.getCollapsedHeight(e),
            preEnrollmentExpandedHeight: u.getPreEnrollmentExpandedHeight(e),
            postEnrollmentBackgroundImage: u.getPostEnrollmentBackgroundImage(e),
            preEnrollmentBackgroundColor: u.getPreEnrollmentBackgroundColor(e),
            canCollapseOnBlur: u.canCollapseOnBlur(e),
            shouldExpandOnQuestComplete: u.shouldExpandOnQuestComplete(e),
            paddingVertical: u.getVerticalPadding(),
            trackingCtx: { content: l ? r.jn.QUEST_BAR_V2 : r.jn.QUEST_BAR }
        };
    };

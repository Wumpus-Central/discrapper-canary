n.d(t, { v: () => g });
var r = n(497505),
    i = n(988303),
    a = n(941348),
    o = n(658590),
    s = n(647365),
    l = n(743294);
let c = 40,
    u = 240,
    d = 8,
    f = {
        component: s.Z,
        getCollapsedHeight: () => c,
        getPreEnrollmentExpandedHeight: () => u,
        getPostEnrollmentBackgroundImage: (e) =>
            "linear-gradient(90deg, ".concat(e.config.colors.primary, ", ").concat(e.config.colors.secondary, ")"),
        getPreEnrollmentBackgroundColor: (e) => void 0,
        canCollapseOnBlur: (e) => {
            var t;
            return (null == (t = e.userStatus) ? void 0 : t.completedAt) == null;
        },
        shouldExpandOnQuestComplete: (e) => !0,
        getVerticalPadding: () => d,
    },
    _ = 66,
    p = 270,
    h = l.Li,
    m = {
        component: a.Z,
        getCollapsedHeight: (e) => {
            var t;
            return (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null ? _ : c;
        },
        getPreEnrollmentExpandedHeight: () => p,
        getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(l.aY, ", ").concat(l.v6, ")"),
        getPreEnrollmentBackgroundColor: (e) => "var(--home-background)",
        canCollapseOnBlur: (e) => !0,
        shouldExpandOnQuestComplete: (e) => !1,
        getVerticalPadding: () => h,
    },
    g = (e, t, n) => {
        var a;
        let s = (null == (a = e.userStatus) ? void 0 : a.enrolledAt) != null,
            l = (!s && t === i.P.V2) || (s && n === i.P.V2) || (0, o.a)(e),
            c = l ? m : f;
        return {
            component: c.component,
            collapsedHeight: c.getCollapsedHeight(e),
            preEnrollmentExpandedHeight: c.getPreEnrollmentExpandedHeight(e),
            postEnrollmentBackgroundImage: c.getPostEnrollmentBackgroundImage(e),
            preEnrollmentBackgroundColor: c.getPreEnrollmentBackgroundColor(e),
            canCollapseOnBlur: c.canCollapseOnBlur(e),
            shouldExpandOnQuestComplete: c.shouldExpandOnQuestComplete(e),
            paddingVertical: c.getVerticalPadding(),
            trackingCtx: { content: l ? r.jn.QUEST_BAR_V2 : r.jn.QUEST_BAR },
        };
    };

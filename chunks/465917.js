l.d(t, { A: () => V });
var n = l(627968),
    i = l(64700),
    a = l(585510),
    s = l(903093),
    C = l(661531),
    r = l(231483),
    o = l(534514),
    d = l(834730),
    c = l(821609),
    u = l(192308),
    m = l(793574),
    h = l(834409),
    x = l(671576),
    g = l(449585),
    H = l(93474),
    p = l(985018),
    j = l(626576);
function _(e) {
    if (null == (e.dmsDisabledUntil ?? e.invitesDisabledUntil)) return "";
    let t = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case t && l:
            return p.intl.string(p.t.CEygF8);
        case t:
            return p.intl.string(p.t.Wmbjcz);
        case l:
            return p.intl.string(p.t.Q1QrAi);
        default:
            return "";
    }
}
function f(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i } = e,
        a = i.raidDetectedAt ?? i.dmSpamDetectedAt;
    return (0, n.jsxs)("div", {
        className: j.hD,
        children: [
            (0, n.jsxs)("div", {
                className: j.iD,
                children: [
                    (0, n.jsx)(r.l, { size: "md", className: j.F_, color: C.A.unsafe_rawColors.RED_345.css }),
                    (0, n.jsxs)("div", {
                        className: j.Tm,
                        children: [
                            (0, n.jsx)(o.D, {
                                className: j.R_,
                                variant: "heading-lg/semibold",
                                color: "text-feedback-critical",
                                children: (0, s.Qm)(i) ? p.intl.string(p.t.raRxxT) : p.intl.string(p.t["4nbAta"]),
                            }),
                            (0, n.jsx)(d.E, {
                                className: j.Ng,
                                variant: "text-sm/medium",
                                children: p.intl.format(p.t["4QIIZl"], {
                                    dateTime: new Date(a ?? "").toLocaleString(p.intl.currentLocale, s.yc),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: j.UD,
                children: [
                    (0, n.jsx)(c.$, { variant: "secondary", onClick: l, text: p.intl.string(p.t.ISiXba), size: "sm" }),
                    (0, n.jsx)(c.$, {
                        variant: "critical-primary",
                        onClick: t,
                        size: "sm",
                        text: p.intl.string(p.t.UgXhdn),
                    }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { onHandleEnableLockdown: t, incidentData: l, guildName: i } = e;
    return (0, n.jsxs)("div", {
        className: j.hD,
        children: [
            (0, n.jsxs)("div", {
                className: j.iD,
                children: [
                    (0, n.jsx)(r.l, { size: "md", className: j.F_, color: C.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: j.Tm,
                        children: [
                            (0, n.jsx)(o.D, {
                                className: j.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: _(l),
                            }),
                            (0, n.jsx)(d.E, { className: j.Ng, variant: "text-sm/medium", children: (0, s.ql)(l, i) }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.$, { onClick: t, text: p.intl.string(p.t.e1bMNf), size: "sm" }),
        ],
    });
}
function v(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i, guildName: a } = e;
    return (0, n.jsxs)("div", {
        className: j.hD,
        children: [
            (0, n.jsxs)("div", {
                className: j.iD,
                children: [
                    (0, n.jsx)(r.l, { size: "md", className: j.F_, color: C.A.unsafe_rawColors.BRAND_360.css }),
                    (0, n.jsxs)("div", {
                        className: j.Tm,
                        children: [
                            (0, n.jsx)(o.D, {
                                className: j.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: _(i),
                            }),
                            (0, n.jsx)(d.E, { className: j.Ng, variant: "text-sm/medium", children: (0, s.ql)(i, a) }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: j.UD,
                children: [
                    (0, n.jsx)(c.$, { onClick: l, text: p.intl.string(p.t.ISiXba), variant: "secondary", size: "sm" }),
                    (0, n.jsx)(c.$, { onClick: t, text: p.intl.string(p.t.e1bMNf), size: "sm" }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { guild: t, incidentData: l, isUnderLockdown: a, isRaidDetected: C } = e,
        r = i.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let e = { source: h.Eo.MEMBER_SAFETY_PAGE, location: m.A.MEMBER_SAFETY_PAGE, alertType: (0, s.$5)(l) };
                return (l) => (0, n.jsx)(x.default, { ...l, guildId: t.id, analyticsData: e });
            });
        }, [t.id, l]),
        o = i.useCallback(() => {
            let e = H.A.getLastIncidentAlertMessage(t.id);
            (0, g.is)(e, t.id);
        }, [t.id]),
        d = (() => {
            switch (!0) {
                case C && a:
                    return 3;
                case C:
                    return 1;
                case a:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == l) return null;
    switch (d) {
        case 1:
            return (0, n.jsx)(f, { onHandleEnableLockdown: r, onHandleReportFalseAlarm: o, incidentData: l });
        case 2:
            return (0, n.jsx)(b, { onHandleEnableLockdown: r, incidentData: l, guildName: t.name });
        case 3:
            return (0, n.jsx)(v, {
                onHandleEnableLockdown: r,
                onHandleReportFalseAlarm: o,
                incidentData: l,
                guildName: t.name,
            });
        default:
            return null;
    }
}
function V(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: l, incidentData: i, isUnderLockdown: C } = (0, a.Li)(t.id),
        r = !1;
    return (null != i && (r = (0, s.k$)(i) && l), r || C)
        ? (0, n.jsx)(A, { guild: t, incidentData: i, isUnderLockdown: C, isRaidDetected: r })
        : null;
}

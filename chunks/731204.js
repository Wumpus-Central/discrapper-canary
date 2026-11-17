l.d(t, { A: () => V });
var n = l(477900),
    i = l(582128),
    s = l(585510),
    a = l(903093),
    C = l(646514),
    r = l(231483),
    d = l(534514),
    o = l(834730),
    c = l(821609),
    u = l(192308),
    m = l(793574),
    h = l(834409),
    g = l(671576),
    f = l(449585),
    x = l(93474),
    H = l(792996),
    p = l(666097);
function j(e) {
    if (null == (e.dmsDisabledUntil ?? e.invitesDisabledUntil)) return "";
    let t = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case t && l:
            return H.intl.string(H.t.CEygF8);
        case t:
            return H.intl.string(H.t.Wmbjcz);
        case l:
            return H.intl.string(H.t.Q1QrAi);
        default:
            return "";
    }
}
function v(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i } = e,
        s = i.raidDetectedAt ?? i.dmSpamDetectedAt;
    return (0, n.jsxs)("div", {
        className: p.hD,
        children: [
            (0, n.jsxs)("div", {
                className: p.iD,
                children: [
                    (0, n.jsx)(r.ShieldIcon, { size: "md", className: p.F_, color: C.A.unsafe_rawColors.RED_345.css }),
                    (0, n.jsxs)("div", {
                        className: p.Tm,
                        children: [
                            (0, n.jsx)(d.D, {
                                className: p.R_,
                                variant: "heading-lg/semibold",
                                color: "text-feedback-critical",
                                children: (0, a.Qm)(i) ? H.intl.string(H.t.raRxxT) : H.intl.string(H.t["4nbAta"]),
                            }),
                            (0, n.jsx)(o.E, {
                                className: p.Ng,
                                variant: "body-sm/medium",
                                children: H.intl.format(H.t["4QIIZl"], {
                                    dateTime: new Date(s ?? "").toLocaleString(H.intl.currentLocale, a.yc),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: p.UD,
                children: [
                    (0, n.jsx)(c.$, { variant: "secondary", onClick: l, text: H.intl.string(H.t.ISiXba), size: "sm" }),
                    (0, n.jsx)(c.$, {
                        variant: "critical-primary",
                        onClick: t,
                        size: "sm",
                        text: H.intl.string(H.t.UgXhdn),
                    }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { onHandleEnableLockdown: t, incidentData: l, guildName: i } = e;
    return (0, n.jsxs)("div", {
        className: p.hD,
        children: [
            (0, n.jsxs)("div", {
                className: p.iD,
                children: [
                    (0, n.jsx)(r.ShieldIcon, {
                        size: "md",
                        className: p.F_,
                        color: C.A.unsafe_rawColors.BRAND_360.css,
                    }),
                    (0, n.jsxs)("div", {
                        className: p.Tm,
                        children: [
                            (0, n.jsx)(d.D, {
                                className: p.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: j(l),
                            }),
                            (0, n.jsx)(o.E, { className: p.Ng, variant: "body-sm/medium", children: (0, a.ql)(l, i) }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.$, { onClick: t, text: H.intl.string(H.t.e1bMNf), size: "sm" }),
        ],
    });
}
function A(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: i, guildName: s } = e;
    return (0, n.jsxs)("div", {
        className: p.hD,
        children: [
            (0, n.jsxs)("div", {
                className: p.iD,
                children: [
                    (0, n.jsx)(r.ShieldIcon, {
                        size: "md",
                        className: p.F_,
                        color: C.A.unsafe_rawColors.BRAND_360.css,
                    }),
                    (0, n.jsxs)("div", {
                        className: p.Tm,
                        children: [
                            (0, n.jsx)(d.D, {
                                className: p.R_,
                                variant: "heading-lg/semibold",
                                color: "text-brand",
                                children: j(i),
                            }),
                            (0, n.jsx)(o.E, { className: p.Ng, variant: "body-sm/medium", children: (0, a.ql)(i, s) }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: p.UD,
                children: [
                    (0, n.jsx)(c.$, { onClick: l, text: H.intl.string(H.t.ISiXba), variant: "secondary", size: "sm" }),
                    (0, n.jsx)(c.$, { onClick: t, text: H.intl.string(H.t.e1bMNf), size: "sm" }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { guild: t, incidentData: l, isUnderLockdown: s, isRaidDetected: C } = e,
        r = i.useCallback(() => {
            (0, u.mM)(async () => {
                let e = { source: h.Eo.MEMBER_SAFETY_PAGE, location: m.A.MEMBER_SAFETY_PAGE, alertType: (0, a.$5)(l) };
                return (l) => (0, n.jsx)(g.default, { ...l, guildId: t.id, analyticsData: e });
            });
        }, [t.id, l]),
        d = i.useCallback(() => {
            let e = x.A.getLastIncidentAlertMessage(t.id);
            (0, f.is)(e, t.id);
        }, [t.id]),
        o = (function () {
            switch (!0) {
                case C && s:
                    return 3;
                case C:
                    return 1;
                case s:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == l) return null;
    switch (o) {
        case 1:
            return (0, n.jsx)(v, { onHandleEnableLockdown: r, onHandleReportFalseAlarm: d, incidentData: l });
        case 2:
            return (0, n.jsx)(b, { onHandleEnableLockdown: r, incidentData: l, guildName: t.name });
        case 3:
            return (0, n.jsx)(A, {
                onHandleEnableLockdown: r,
                onHandleReportFalseAlarm: d,
                incidentData: l,
                guildName: t.name,
            });
        default:
            return null;
    }
}
function V(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: l, incidentData: i, isUnderLockdown: C } = (0, s.Li)(t.id),
        r = !1;
    return (null != i && (r = (0, a.k$)(i) && l), r || C)
        ? (0, n.jsx)(M, { guild: t, incidentData: i, isUnderLockdown: C, isRaidDetected: r })
        : null;
}

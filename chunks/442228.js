var l = t(477900),
    i = t(582128),
    r = t(503698),
    a = t.n(r),
    s = t(123292),
    o = t(688810),
    u = t(183555),
    c = t(702476),
    d = t(501925),
    f = t(900179),
    S = t(792996),
    A = t(975316);
let T = i.memo(function (e) {
    let {
            userId: n,
            userBio: t,
            onClose: r,
            animateOnHoverOrFocusOnly: T = !1,
            isHoveringOrFocusing: h = !1,
            hidePersonalInformation: m = !1,
            hideRestrictedProfile: g = !1,
            viewFullBioDisabled: x = !1,
        } = e,
        { context: E } = (0, u.NJ)(),
        { analyticsLocations: R } = (0, o.Ay)(),
        [p, C] = i.useState(!1),
        [y, j] = i.useState(!1),
        v = i.useRef(null);
    if (m || null == t || "" === t) return null;
    let P = p || y;
    return (0, l.jsxs)(f.A, {
        heading: S.intl.string(S.t.ZzAR2Y),
        hideHeading: !0,
        children: [
            (0, l.jsx)("div", {
                ref: (e) => {
                    ((v.current = e),
                        null == e ||
                            (C(!y && e.scrollHeight - e.clientHeight > 1),
                            e.getBoundingClientRect().height > 57.75 && j(!0)));
                },
                className: a()(A.mA, y && A.Em, P && A.ps),
                onBlur: function (e) {
                    null == v.current ||
                        v.current.contains(e.relatedTarget) ||
                        (null == v.current.querySelector('[aria-expanded="true"][aria-controls]') &&
                            (v.current.scrollTop = 0));
                },
                children: (0, l.jsx)(d.A, {
                    userId: n,
                    guildId: E?.guildId,
                    userBio: t,
                    setLineClamp: !1,
                    textColor: "text-strong",
                    animateOnHoverOrFocusOnly: T,
                    isHoveringOrFocusing: h,
                }),
            }),
            P &&
                (0, l.jsx)("div", {
                    className: A.HV,
                    children: (0, l.jsx)(s.Q, {
                        textVariant: "body-xs/normal",
                        size: "sm",
                        variant: "secondary",
                        text: S.intl.string(S.t.YDiPq8),
                        onClick: function () {
                            (r?.(),
                                (0, c.openUserProfileModal)({
                                    ...E,
                                    userId: n,
                                    hideRestrictedProfile: g,
                                    sourceAnalyticsLocations: R,
                                }));
                        },
                        disabled: x,
                    }),
                }),
        ],
    });
});
t.d(n, {}, { A: T });

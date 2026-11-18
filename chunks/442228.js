var l = t(477900),
    i = t(582128),
    a = t(503698),
    r = t.n(a),
    s = t(123292),
    o = t(688810),
    u = t(183555),
    c = t(100663),
    d = t(501925),
    f = t(900179),
    A = t(792996),
    S = t(975316);
let h = i.memo(function (e) {
    let {
            userId: n,
            userBio: t,
            onClose: a,
            animateOnHoverOrFocusOnly: h = !1,
            isHoveringOrFocusing: T = !1,
            hidePersonalInformation: m = !1,
            hideRestrictedProfile: g = !1,
            viewFullBioDisabled: x = !1,
        } = e,
        { context: E } = (0, u.NJ)(),
        { analyticsLocations: p } = (0, o.Ay)(),
        [R, C] = i.useState(!1),
        [y, v] = i.useState(!1),
        j = i.useRef(null);
    if (m || null == t || "" === t) return null;
    let P = R || y;
    return (0, l.jsxs)(f.A, {
        heading: A.intl.string(A.t.ZzAR2Y),
        hideHeading: !0,
        children: [
            (0, l.jsx)("div", {
                ref: (e) => {
                    ((j.current = e),
                        null == e ||
                            (C(!y && e.scrollHeight - e.clientHeight > 1),
                            e.getBoundingClientRect().height > 57.75 && v(!0)));
                },
                className: r()(S.mA, y && S.Em, P && S.ps),
                onBlur: function (e) {
                    null == j.current ||
                        j.current.contains(e.relatedTarget) ||
                        (null == j.current.querySelector('[aria-expanded="true"][aria-controls]') &&
                            (j.current.scrollTop = 0));
                },
                children: (0, l.jsx)(d.A, {
                    userId: n,
                    guildId: E?.guildId,
                    userBio: t,
                    setLineClamp: !1,
                    textColor: "text-strong",
                    animateOnHoverOrFocusOnly: h,
                    isHoveringOrFocusing: T,
                }),
            }),
            P &&
                (0, l.jsx)("div", {
                    className: S.HV,
                    children: (0, l.jsx)(s.Q, {
                        textVariant: "body-xs/normal",
                        size: "sm",
                        variant: "secondary",
                        text: A.intl.string(A.t.YDiPq8),
                        onClick: function () {
                            (a?.(),
                                (0, c.openUserProfileModal)({
                                    ...E,
                                    userId: n,
                                    hideRestrictedProfile: g,
                                    sourceAnalyticsLocations: p,
                                }));
                        },
                        disabled: x,
                    }),
                }),
        ],
    });
});
t.d(n, {}, { A: h });

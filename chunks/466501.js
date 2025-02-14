i.d(t, { default: () => g });
var n = i(200651),
    r = i(192379),
    l = i(481060),
    o = i(651711),
    a = i(434404),
    s = i(202858),
    c = i(587431),
    d = i(400842),
    _ = i(271267),
    u = i(981631),
    h = i(388032),
    E = i(9710),
    b = i(653904);
function A() {
    return (0, n.jsxs)('div', {
        className: E.eligibilityHeader,
        children: [
            (0, n.jsx)(l.X6q, {
                className: E.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: h.intl.string(h.t['3s47iI'])
            }),
            (0, n.jsx)('img', {
                className: E.eligibilityHeaderImage,
                src: b,
                alt: ''
            }),
            (0, n.jsx)(l.olH, {
                className: E.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, l.Mr3)(_.Q);
                }
            })
        ]
    });
}
function M(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: h, guildId: b, onEligibilityBecameStale: A } = e,
        M = r.useMemo(
            () => ({
                onEligibilityBecameStale: A,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: s.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, l.Mr3)(_.Q), a.Z.open(b, u.pNK.SAFETY, void 0, u.KsC.SAFETY_PERMISSIONS);
                    }
                }
            }),
            [b, A]
        ),
        g = (0, o.Z)(t, M);
    return null != h
        ? (0, n.jsx)('div', {
              className: E.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: h.message })
          })
        : null == g || i
          ? (0, n.jsx)('div', {
                className: E.paddedContainer,
                children: (0, n.jsx)(l.$jN, {})
            })
          : (0, n.jsx)('div', {
                children: g.map((e, t) =>
                    (0, n.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                (0, n.jsx)(d.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler
                                }),
                                t < g.length - 1 ? (0, n.jsx)(l.$i$, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function g(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: r, refreshEligibility: o, guildId: a, transitionState: s } = e;
    return (0, n.jsxs)(l.Y0X, {
        className: E.eligibilityModal,
        size: l.CgR.MEDIUM,
        transitionState: s,
        children: [
            (0, n.jsx)(A, {}),
            (0, n.jsx)(l.hzk, {
                children: (0, n.jsx)(M, {
                    eligibility: t,
                    eligibilityLoading: i,
                    eligibilityError: r,
                    guildId: a,
                    onEligibilityBecameStale: o
                })
            })
        ]
    });
}

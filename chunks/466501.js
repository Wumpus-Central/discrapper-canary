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
    E = i(388032),
    h = i(790755),
    b = i(653904);
function A() {
    return (0, n.jsxs)('div', {
        className: h.eligibilityHeader,
        children: [
            (0, n.jsx)(l.X6q, {
                className: h.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: E.intl.string(E.t['3s47iI'])
            }),
            (0, n.jsx)('img', {
                className: h.eligibilityHeaderImage,
                src: b,
                alt: ''
            }),
            (0, n.jsx)(l.olH, {
                className: h.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, l.Mr3)(_.Q);
                }
            })
        ]
    });
}
function M(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: E, guildId: b, onEligibilityBecameStale: A } = e,
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
    return null != E
        ? (0, n.jsx)('div', {
              className: h.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: E.message })
          })
        : null == g || i
          ? (0, n.jsx)('div', {
                className: h.paddedContainer,
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
        className: h.eligibilityModal,
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

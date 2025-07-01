(t.d(i, { default: () => j }), t(953529));
var n = t(255367),
    r = t(73800),
    l = t(481060),
    c = t(651711),
    o = t(434404),
    a = t(202858),
    s = t(587431),
    d = t(400842),
    b = t(271267),
    u = t(981631),
    g = t(388032),
    y = t(280086),
    h = t(653904);
function p() {
    return (0, n.jsxs)('div', {
        className: y.eligibilityHeader,
        children: [
            (0, n.jsx)(l.X6q, {
                className: y.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: g.intl.string(g.t['3s47iI'])
            }),
            (0, n.jsx)('img', {
                className: y.eligibilityHeaderImage,
                src: h,
                alt: ''
            }),
            (0, n.jsx)(l.olH, {
                className: y.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, l.Mr3)(b.Q);
                }
            })
        ]
    });
}
function f(e) {
    let { eligibility: i, eligibilityLoading: t, eligibilityError: g, guildId: h, onEligibilityBecameStale: p } = e,
        f = r.useMemo(
            () => ({
                onEligibilityBecameStale: p,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: a.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        ((0, l.Mr3)(b.Q), o.Z.open(h, u.pNK.SAFETY, void 0, u.KsC.SAFETY_PERMISSIONS));
                    }
                }
            }),
            [h, p]
        ),
        j = (0, c.Z)(i, f);
    return null != g
        ? (0, n.jsx)('div', {
              className: y.paddedContainer,
              children: (0, n.jsx)(s.Z, { children: g.message })
          })
        : null == j || t
          ? (0, n.jsx)('div', {
                className: y.paddedContainer,
                children: (0, n.jsx)(l.$jN, {})
            })
          : (0, n.jsx)('div', {
                children: j.map((e, i) =>
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
                                i < j.length - 1 ? (0, n.jsx)(l.$i$, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function j(e) {
    let { eligibility: i, eligibilityLoading: t, eligibilityError: r, refreshEligibility: c, guildId: o, transitionState: a } = e;
    return (0, n.jsxs)(l.Y0X, {
        className: y.eligibilityModal,
        size: l.CgR.MEDIUM,
        transitionState: a,
        parentComponent: 'EligibilityChecklistModal',
        children: [
            (0, n.jsx)(p, {}),
            (0, n.jsx)(l.hzk, {
                children: (0, n.jsx)(f, {
                    eligibility: i,
                    eligibilityLoading: t,
                    eligibilityError: r,
                    guildId: o,
                    onEligibilityBecameStale: c
                })
            })
        ]
    });
}

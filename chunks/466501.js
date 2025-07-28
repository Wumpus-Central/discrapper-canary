(i.d(t, { default: () => j }), i(953529));
var r = i(255367),
    n = i(73800),
    l = i(481060),
    c = i(651711),
    a = i(434404),
    o = i(202858),
    s = i(587431),
    d = i(400842),
    b = i(271267),
    u = i(981631),
    g = i(388032),
    y = i(280086),
    p = i(653904);
function h() {
    return (0, r.jsxs)('div', {
        className: y.eligibilityHeader,
        children: [
            (0, r.jsx)(l.X6q, {
                className: y.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: g.intl.string(g.t['3s47iI'])
            }),
            (0, r.jsx)('img', {
                className: y.eligibilityHeaderImage,
                src: p,
                alt: ''
            }),
            (0, r.jsx)(l.olH, {
                className: y.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, l.Mr3)(b.Q);
                }
            })
        ]
    });
}
function f(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: g, guildId: p, onEligibilityBecameStale: h } = e,
        f = n.useMemo(
            () => ({
                onEligibilityBecameStale: h,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: o.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        ((0, l.Mr3)(b.Q), a.Z.open(p, u.pNK.SAFETY, void 0, u.KsC.SAFETY_PERMISSIONS));
                    }
                }
            }),
            [p, h]
        ),
        j = (0, c.Z)(t, f);
    return null != g
        ? (0, r.jsx)('div', {
              className: y.paddedContainer,
              children: (0, r.jsx)(s.Z, { children: g.message })
          })
        : null == j || i
          ? (0, r.jsx)('div', {
                className: y.paddedContainer,
                children: (0, r.jsx)(l.$jN, {})
            })
          : (0, r.jsx)('div', {
                children: j.map((e, t) =>
                    (0, r.jsxs)(
                        n.Fragment,
                        {
                            children: [
                                (0, r.jsx)(d.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler
                                }),
                                t < j.length - 1 ? (0, r.jsx)(l.$i$, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function j(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: n, refreshEligibility: c, guildId: a, transitionState: o } = e;
    return (0, r.jsxs)(l.Y0X, {
        className: y.eligibilityModal,
        size: l.CgR.MEDIUM,
        transitionState: o,
        parentComponent: 'EligibilityChecklistModal',
        children: [
            (0, r.jsx)(h, {}),
            (0, r.jsx)(l.hzk, {
                children: (0, r.jsx)(f, {
                    eligibility: t,
                    eligibilityLoading: i,
                    eligibilityError: n,
                    guildId: a,
                    onEligibilityBecameStale: c
                })
            })
        ]
    });
}

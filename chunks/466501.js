r.d(t, { default: () => h }), r(266796);
var n = r(200651),
    i = r(192379),
    o = r(481060),
    l = r(651711),
    c = r(434404),
    a = r(202858),
    s = r(587431),
    d = r(400842),
    u = r(271267),
    b = r(981631),
    y = r(388032),
    p = r(280086),
    _ = r(653904);
function f() {
    return (0, n.jsxs)('div', {
        className: p.eligibilityHeader,
        children: [
            (0, n.jsx)(o.X6q, {
                className: p.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: y.NW.string(y.t['3s47iI'])
            }),
            (0, n.jsx)('img', {
                className: p.eligibilityHeaderImage,
                src: _,
                alt: ''
            }),
            (0, n.jsx)(o.olH, {
                className: p.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, o.Mr3)(u.Q);
                }
            })
        ]
    });
}
function g(e) {
    let { eligibility: t, eligibilityLoading: r, eligibilityError: y, guildId: _, onEligibilityBecameStale: f } = e,
        g = i.useMemo(
            () => ({
                onEligibilityBecameStale: f,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: a.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, o.Mr3)(u.Q), c.Z.open(_, b.pNK.SAFETY, void 0, b.KsC.SAFETY_PERMISSIONS);
                    }
                }
            }),
            [_, f]
        ),
        h = (0, l.Z)(t, g);
    return null != y
        ? (0, n.jsx)('div', {
              className: p.paddedContainer,
              children: (0, n.jsx)(s.Z, { children: y.message })
          })
        : null == h || r
          ? (0, n.jsx)('div', {
                className: p.paddedContainer,
                children: (0, n.jsx)(o.$jN, {})
            })
          : (0, n.jsx)('div', {
                children: h.map((e, t) =>
                    (0, n.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, n.jsx)(d.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler
                                }),
                                t < h.length - 1 ? (0, n.jsx)(o.$i$, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function h(e) {
    let { eligibility: t, eligibilityLoading: r, eligibilityError: i, refreshEligibility: l, guildId: c, transitionState: a } = e;
    return (0, n.jsxs)(o.Y0X, {
        className: p.eligibilityModal,
        size: o.CgR.MEDIUM,
        transitionState: a,
        children: [
            (0, n.jsx)(f, {}),
            (0, n.jsx)(o.hzk, {
                children: (0, n.jsx)(g, {
                    eligibility: t,
                    eligibilityLoading: r,
                    eligibilityError: i,
                    guildId: c,
                    onEligibilityBecameStale: l
                })
            })
        ]
    });
}

i.d(t, { default: () => j }), i(953529);
var n = i(200651),
    r = i(192379),
    l = i(481060),
    c = i(651711),
    o = i(434404),
    a = i(202858),
    s = i(587431),
    d = i(400842),
    b = i(271267),
    u = i(981631),
    g = i(388032),
    y = i(280086),
    h = i(653904);
function f() {
    return (0, n.jsxs)('div', {
        className: y.eligibilityHeader,
        children: [
            (0, n.jsx)(l.X6q, {
                className: y.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: g.NW.string(g.t['3s47iI'])
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
function p(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: g, guildId: h, onEligibilityBecameStale: f } = e,
        p = r.useMemo(
            () => ({
                onEligibilityBecameStale: f,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: a.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, l.Mr3)(b.Q), o.Z.open(h, u.pNK.SAFETY, void 0, u.KsC.SAFETY_PERMISSIONS);
                    }
                }
            }),
            [h, f]
        ),
        j = (0, c.Z)(t, p);
    return null != g
        ? (0, n.jsx)('div', {
              className: y.paddedContainer,
              children: (0, n.jsx)(s.Z, { children: g.message })
          })
        : null == j || i
          ? (0, n.jsx)('div', {
                className: y.paddedContainer,
                children: (0, n.jsx)(l.$jN, {})
            })
          : (0, n.jsx)('div', {
                children: j.map((e, t) =>
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
                                t < j.length - 1 ? (0, n.jsx)(l.$i$, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function j(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: r, refreshEligibility: c, guildId: o, transitionState: a } = e;
    return (0, n.jsxs)(l.Y0X, {
        className: y.eligibilityModal,
        size: l.CgR.MEDIUM,
        transitionState: a,
        children: [
            (0, n.jsx)(f, {}),
            (0, n.jsx)(l.hzk, {
                children: (0, n.jsx)(p, {
                    eligibility: t,
                    eligibilityLoading: i,
                    eligibilityError: r,
                    guildId: o,
                    onEligibilityBecameStale: c
                })
            })
        ]
    });
}

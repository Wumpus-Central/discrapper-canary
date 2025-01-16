i.r(t),
    i.d(t, {
        default: function () {
            return g;
        }
    });
var n = i(200651),
    o = i(192379),
    r = i(481060),
    l = i(651711),
    a = i(434404),
    s = i(202858),
    c = i(587431),
    d = i(400842),
    u = i(271267),
    E = i(981631),
    _ = i(388032),
    h = i(790755),
    M = i(653904);
function b() {
    return (0, n.jsxs)('div', {
        className: h.eligibilityHeader,
        children: [
            (0, n.jsx)(r.Heading, {
                className: h.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: _.intl.string(_.t['3s47iI'])
            }),
            (0, n.jsx)('img', {
                className: h.eligibilityHeaderImage,
                src: M,
                alt: ''
            }),
            (0, n.jsx)(r.ModalCloseButton, {
                className: h.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, r.closeModal)(u.Q);
                }
            })
        ]
    });
}
function A(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: _, guildId: M, onEligibilityBecameStale: b } = e,
        A = o.useMemo(
            () => ({
                onEligibilityBecameStale: b,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: s.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, r.closeModal)(u.Q), a.Z.open(M, E.pNK.SAFETY, void 0, E.KsC.SAFETY_PERMISSIONS);
                    }
                }
            }),
            [M, b]
        ),
        g = (0, l.Z)(t, A);
    return null != _
        ? (0, n.jsx)('div', {
              className: h.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: _.message })
          })
        : null == g || i
          ? (0, n.jsx)('div', {
                className: h.paddedContainer,
                children: (0, n.jsx)(r.Spinner, {})
            })
          : (0, n.jsx)('div', {
                children: g.map((e, t) =>
                    (0, n.jsxs)(
                        o.Fragment,
                        {
                            children: [
                                (0, n.jsx)(d.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler
                                }),
                                t < g.length - 1 ? (0, n.jsx)(r.FormDivider, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function g(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: o, refreshEligibility: l, guildId: a, transitionState: s } = e;
    return (0, n.jsxs)(r.ModalRoot, {
        className: h.eligibilityModal,
        size: r.ModalSize.MEDIUM,
        transitionState: s,
        children: [
            (0, n.jsx)(b, {}),
            (0, n.jsx)(r.ModalContent, {
                children: (0, n.jsx)(A, {
                    eligibility: t,
                    eligibilityLoading: i,
                    eligibilityError: o,
                    guildId: a,
                    onEligibilityBecameStale: l
                })
            })
        ]
    });
}

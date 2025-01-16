n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    g = n(100527),
    h = n(906732),
    p = n(600164),
    x = n(210887),
    f = n(301766),
    _ = n(509545),
    E = n(74538),
    C = n(937615),
    T = n(388032),
    S = n(104489);
function b(e) {
    let { subscription: t, renewalMutations: n, transitionState: r, onClose: s, analyticsLocation: a } = e,
        l = (0, c.e7)([x.Z], () => x.Z.theme),
        { analyticsLocations: b } = (0, h.ZP)(g.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function I() {
        await (0, m.dP)(t, t.planId, b, a), s();
    }
    let N = _.Z.get(t.planId);
    o()(null != N, 'Missing subscriptionPlan');
    let v = (0, E.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        A = (0, C.og)((0, C.T4)(v.amount, v.currency), N.interval, N.intervalCount);
    return (0, i.jsxs)(u.ModalRoot, {
        transitionState: r,
        'aria-label': T.intl.string(T.t['E9kB4+']),
        children: [
            (0, i.jsxs)(u.ModalHeader, {
                justify: p.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: T.intl.string(T.t['E9kB4+'])
                    }),
                    (0, i.jsx)(u.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, i.jsx)(u.ModalContent, {
                className: S.modalBody,
                children: (0, f.Q0)(t.planId)
                    ? T.intl.format(T.t.GMp54O, {
                          downgradedPlan: E.ZP.getDisplayName(n.planId),
                          existingRate: A
                      })
                    : T.intl.format(T.t['vx/NZ2'], {
                          existingPlan: E.ZP.getDisplayName(t.planId),
                          downgradedPlan: E.ZP.getDisplayName(n.planId),
                          existingRate: A
                      })
            }),
            (0, i.jsxs)(u.ModalFooter, {
                children: [
                    (0, i.jsx)(u.Button, {
                        onClick: I,
                        children: T.intl.string(T.t.frE8KC)
                    }),
                    (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(l) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: s,
                        children: T.intl.string(T.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { subscription: t, renewalMutations: n, className: s, analyticsLocation: l } = e,
        [o, c] = r.useState(!1);
    return (0, i.jsxs)('div', {
        className: a()(S.root, s),
        children: [
            (0, i.jsx)(u.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: S.infoIcon
            }),
            (0, i.jsx)('div', {
                className: S.text,
                children: T.intl.format(T.t.ar1cPj, {
                    planName: t.hasExternalPlanChange ? (0, E.zL)(n) : E.ZP.getDisplayName(n.planId),
                    date: t.currentPeriodEnd
                })
            }),
            t.isPurchasedExternally
                ? null
                : (0, i.jsx)(u.Anchor, {
                      onClick: (e) => {
                          c(!0), e.preventDefault();
                      },
                      className: S.cancelLink,
                      children: T.intl.string(T.t['ETE/oK'])
                  }),
            o
                ? (0, i.jsx)(u.Modal, {
                      renderModal: (e) => {
                          let { transitionState: r } = e;
                          return (0, i.jsx)(b, {
                              subscription: t,
                              renewalMutations: n,
                              transitionState: r,
                              onClose: () => c(!1),
                              analyticsLocation: l
                          });
                      },
                      onCloseRequest: () => c(!1)
                  })
                : null
        ]
    });
}

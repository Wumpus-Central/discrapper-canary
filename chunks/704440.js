r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(773603);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(913527),
    d = r.n(c),
    f = r(235874),
    _ = r(481060),
    h = r(37234),
    p = r(100527),
    m = r(906732),
    g = r(626135),
    E = r(55935),
    v = r(63063),
    I = r(281494),
    T = r(474936),
    b = r(981631),
    y = r(388032),
    S = r(735633),
    A = r(352175),
    N = r(90351);
let C = async (e, n, r) => {
        r(!0),
            await (0, I.Eo)(e)
                .then(() => {
                    n(), (0, h.Ou)();
                })
                .finally(() => {
                    r(!1);
                });
    },
    R = (e) => {
        let { onClose: n, referralsRemaining: r, recipient: i, analyticsLocations: a } = e,
            [l, u] = o.useState(!1),
            c = r - 1;
        return (0, s.jsxs)('div', {
            className: S.confirmationContainer,
            children: [
                (0, s.jsxs)('div', {
                    className: S.confirmationBody,
                    children: [
                        (0, s.jsx)(_.ModalCloseButton, {
                            onClick: n,
                            className: S.closeButton
                        }),
                        (0, s.jsx)('img', {
                            alt: '',
                            src: A,
                            className: S.confirmationImage
                        }),
                        (0, s.jsx)(_.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: S.confirmationHeading,
                            children: y.intl.string(y.t.dF5azM)
                        }),
                        (0, s.jsx)(_.Text, {
                            className: S.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: c > 0 ? y.intl.formatToPlainString(y.t['J/tYnp'], { count: c }) : y.intl.string(y.t.vVnRxc)
                        }),
                        (0, s.jsx)('hr', { className: S.confirmationBodySeparator })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: S.confirmationButtonContainer,
                    children: [
                        (0, s.jsx)(_.Button, {
                            className: S.confirmationShareButton,
                            submitting: l,
                            onClick: () => {
                                C(i, n, u),
                                    g.default.track(b.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: a,
                                        step: T.fz.FLOW_COMPLETED,
                                        other_user_id: Number(i)
                                    });
                            },
                            children: y.intl.string(y.t['zxlx6+'])
                        }),
                        (0, s.jsx)('div', {
                            className: S.confirmationCancelButtonContainer,
                            children: (0, s.jsx)(_.Clickable, {
                                onClick: n,
                                children: (0, s.jsx)(_.Text, {
                                    variant: 'text-sm/medium',
                                    className: S.confirmationCancelCopy,
                                    children: y.intl.string(y.t['ETE/oK'])
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function O(e) {
    let { referralsRemaining: n, channel: r, onClose: i, isResending: a } = e,
        [l, c] = o.useState(!1),
        [f, h] = o.useState(!1),
        I = r.isDM() && void 0 !== r.recipients ? r.recipients[0] : null,
        { analyticsLocations: A } = (0, m.ZP)(p.Z.REFERRAL_TRIALS_POPOUT),
        O = new Date('2023-06-15T08:00:00-08:00');
    return null == I
        ? null
        : l
          ? (0, s.jsx)(R, {
                onClose: i,
                referralsRemaining: n,
                recipient: I,
                analyticsLocations: A
            })
          : (0, s.jsxs)('div', {
                className: S.generalContainer,
                children: [
                    (0, s.jsxs)('div', {
                        className: S.generalBodyContainer,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: N,
                                className: S.generalBodyImage
                            }),
                            (0, s.jsxs)('div', {
                                className: S.innerContent,
                                children: [
                                    (0, s.jsx)(_.ModalCloseButton, {
                                        onClick: i,
                                        className: S.closeButton
                                    }),
                                    (0, s.jsx)(_.Heading, {
                                        className: S.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: a ? y.intl.string(y.t.yCN5Qk) : y.intl.string(y.t.c1wxcX)
                                    }),
                                    (0, s.jsxs)(_.Text, {
                                        className: S.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, s.jsx)(_.Anchor, {
                                                className: u()(S.learnMore, { [S.learnMoreResendUnderlinedText]: a }),
                                                href: v.Z.getArticleURL(b.BhN.SHARE_NITRO_FAQ),
                                                children: a ? y.intl.string(y.t.yJfqPT) : y.intl.format(y.t['+Z4ey8'], { count: n })
                                            }),
                                            a
                                                ? (0, s.jsx)('div', {
                                                      className: S.shareNitroResendCopySuffix,
                                                      children: y.intl.string(y.t['b0B69/'])
                                                  })
                                                : (0, s.jsx)('div', { children: y.intl.format(y.t['58lPt7'], { date: (0, E.vc)(d()(O), 'LL') }) })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: S.generalButtonContainer,
                        children: (0, s.jsx)(_.Button, {
                            className: S.generalShareButton,
                            submitting: f,
                            onClick: () => {
                                a
                                    ? C(I, i, h)
                                    : (c(!0),
                                      g.default.track(b.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: A,
                                          step: T.fz.FLOW_STARTED,
                                          other_user_id: Number(I)
                                      }));
                            },
                            children: a ? y.intl.string(y.t.awsERE) : y.intl.string(y.t.Ago7Zm)
                        })
                    })
                ]
            });
}
function D(e) {
    let { shouldShowPopout: n, referralsRemaining: r, channel: i, onClose: a, isResending: o } = e;
    return n
        ? (0, s.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, s.jsx)(f.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, s.jsx)(O, {
                          ...e,
                          referralsRemaining: r,
                          channel: i,
                          onClose: a,
                          isResending: o
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, s.jsx)('div', { className: S.__invalid_popoutTarget })
              })
          })
        : null;
}

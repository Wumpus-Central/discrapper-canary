n.d(t, { Z: () => C }), n(773603), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(235874),
    c = n(481060),
    d = n(37234),
    f = n(100527),
    _ = n(906732),
    p = n(626135),
    h = n(55935),
    m = n(63063),
    g = n(281494),
    E = n(474936),
    v = n(981631),
    y = n(388032),
    I = n(735633),
    T = n(352175),
    b = n(90351);
let S = async (e, t, n) => {
        n(!0),
            await (0, g.Eo)(e)
                .then(() => {
                    t(), (0, d.Ou)();
                })
                .finally(() => {
                    n(!1);
                });
    },
    A = (e) => {
        let { onClose: t, referralsRemaining: n, recipient: a, analyticsLocations: s } = e,
            [o, l] = r.useState(!1),
            u = n - 1;
        return (0, i.jsxs)('div', {
            className: I.confirmationContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: I.confirmationBody,
                    children: [
                        (0, i.jsx)(c.olH, {
                            onClick: t,
                            className: I.closeButton
                        }),
                        (0, i.jsx)('img', {
                            alt: '',
                            src: T,
                            className: I.confirmationImage
                        }),
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: I.confirmationHeading,
                            children: y.intl.string(y.t.dF5azM)
                        }),
                        (0, i.jsx)(c.Text, {
                            className: I.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: u > 0 ? y.intl.formatToPlainString(y.t['J/tYnp'], { count: u }) : y.intl.string(y.t.vVnRxc)
                        }),
                        (0, i.jsx)('hr', { className: I.confirmationBodySeparator })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: I.confirmationButtonContainer,
                    children: [
                        (0, i.jsx)(c.zxk, {
                            className: I.confirmationShareButton,
                            submitting: o,
                            onClick: () => {
                                S(a, t, l),
                                    p.default.track(v.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: s,
                                        step: E.fz.FLOW_COMPLETED,
                                        other_user_id: Number(a)
                                    });
                            },
                            children: y.intl.string(y.t['zxlx6+'])
                        }),
                        (0, i.jsx)('div', {
                            className: I.confirmationCancelButtonContainer,
                            children: (0, i.jsx)(c.P3F, {
                                onClick: t,
                                children: (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    className: I.confirmationCancelCopy,
                                    children: y.intl.string(y.t['ETE/oK'])
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function N(e) {
    let { referralsRemaining: t, channel: n, onClose: a, isResending: o } = e,
        [u, d] = r.useState(!1),
        [g, T] = r.useState(!1),
        N = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null,
        { analyticsLocations: C } = (0, _.ZP)(f.Z.REFERRAL_TRIALS_POPOUT),
        R = new Date('2023-06-15T08:00:00-08:00');
    return null == N
        ? null
        : u
          ? (0, i.jsx)(A, {
                onClose: a,
                referralsRemaining: t,
                recipient: N,
                analyticsLocations: C
            })
          : (0, i.jsxs)('div', {
                className: I.generalContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: I.generalBodyContainer,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: b,
                                className: I.generalBodyImage
                            }),
                            (0, i.jsxs)('div', {
                                className: I.innerContent,
                                children: [
                                    (0, i.jsx)(c.olH, {
                                        onClick: a,
                                        className: I.closeButton
                                    }),
                                    (0, i.jsx)(c.X6q, {
                                        className: I.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: o ? y.intl.string(y.t.yCN5Qk) : y.intl.string(y.t.c1wxcX)
                                    }),
                                    (0, i.jsxs)(c.Text, {
                                        className: I.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, i.jsx)(c.eee, {
                                                className: s()(I.learnMore, { [I.learnMoreResendUnderlinedText]: o }),
                                                href: m.Z.getArticleURL(v.BhN.SHARE_NITRO_FAQ),
                                                children: o ? y.intl.string(y.t.yJfqPT) : y.intl.format(y.t['+Z4ey8'], { count: t })
                                            }),
                                            o
                                                ? (0, i.jsx)('div', {
                                                      className: I.shareNitroResendCopySuffix,
                                                      children: y.intl.string(y.t['b0B69/'])
                                                  })
                                                : (0, i.jsx)('div', { children: y.intl.format(y.t['58lPt7'], { date: (0, h.vc)(l()(R), 'LL') }) })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: I.generalButtonContainer,
                        children: (0, i.jsx)(c.zxk, {
                            className: I.generalShareButton,
                            submitting: g,
                            onClick: () => {
                                o
                                    ? S(N, a, T)
                                    : (d(!0),
                                      p.default.track(v.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: C,
                                          step: E.fz.FLOW_STARTED,
                                          other_user_id: Number(N)
                                      }));
                            },
                            children: o ? y.intl.string(y.t.awsERE) : y.intl.string(y.t.Ago7Zm)
                        })
                    })
                ]
            });
}
function C(e) {
    let { shouldShowPopout: t, referralsRemaining: n, channel: r, onClose: a, isResending: s } = e;
    return t
        ? (0, i.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, i.jsx)(u.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, i.jsx)(N, {
                          ...e,
                          referralsRemaining: n,
                          channel: r,
                          onClose: a,
                          isResending: s
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, i.jsx)('div', { className: I.__invalid_popoutTarget })
              })
          })
        : null;
}

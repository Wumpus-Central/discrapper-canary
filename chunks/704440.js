r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(773603);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(913527),
    d = r.n(c),
    f = r(235874),
    p = r(481060),
    h = r(37234),
    _ = r(100527),
    m = r(906732),
    g = r(626135),
    E = r(55935),
    v = r(63063),
    y = r(281494),
    b = r(474936),
    I = r(981631),
    T = r(388032),
    S = r(735633),
    A = r(352175),
    C = r(90351);
let N = async (e, n, r) => {
        r(!0),
            await (0, y.Eo)(e)
                .then(() => {
                    n(), (0, h.Ou)();
                })
                .finally(() => {
                    r(!1);
                });
    },
    R = (e) => {
        let { onClose: n, referralsRemaining: r, recipient: i, analyticsLocations: a } = e,
            [l, u] = s.useState(!1),
            c = r - 1;
        return (0, o.jsxs)('div', {
            className: S.confirmationContainer,
            children: [
                (0, o.jsxs)('div', {
                    className: S.confirmationBody,
                    children: [
                        (0, o.jsx)(p.ModalCloseButton, {
                            onClick: n,
                            className: S.closeButton
                        }),
                        (0, o.jsx)('img', {
                            alt: '',
                            src: A,
                            className: S.confirmationImage
                        }),
                        (0, o.jsx)(p.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: S.confirmationHeading,
                            children: T.intl.string(T.t.dF5azM)
                        }),
                        (0, o.jsx)(p.Text, {
                            className: S.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: c > 0 ? T.intl.formatToPlainString(T.t['J/tYnp'], { count: c }) : T.intl.string(T.t.vVnRxc)
                        }),
                        (0, o.jsx)('hr', { className: S.confirmationBodySeparator })
                    ]
                }),
                (0, o.jsxs)('div', {
                    className: S.confirmationButtonContainer,
                    children: [
                        (0, o.jsx)(p.Button, {
                            className: S.confirmationShareButton,
                            submitting: l,
                            onClick: () => {
                                N(i, n, u),
                                    g.default.track(I.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: a,
                                        step: b.fz.FLOW_COMPLETED,
                                        other_user_id: Number(i)
                                    });
                            },
                            children: T.intl.string(T.t['zxlx6+'])
                        }),
                        (0, o.jsx)('div', {
                            className: S.confirmationCancelButtonContainer,
                            children: (0, o.jsx)(p.Clickable, {
                                onClick: n,
                                children: (0, o.jsx)(p.Text, {
                                    variant: 'text-sm/medium',
                                    className: S.confirmationCancelCopy,
                                    children: T.intl.string(T.t['ETE/oK'])
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
        [l, c] = s.useState(!1),
        [f, h] = s.useState(!1),
        y = r.isDM() && void 0 !== r.recipients ? r.recipients[0] : null,
        { analyticsLocations: A } = (0, m.ZP)(_.Z.REFERRAL_TRIALS_POPOUT),
        O = new Date('2023-06-15T08:00:00-08:00');
    return null == y
        ? null
        : l
          ? (0, o.jsx)(R, {
                onClose: i,
                referralsRemaining: n,
                recipient: y,
                analyticsLocations: A
            })
          : (0, o.jsxs)('div', {
                className: S.generalContainer,
                children: [
                    (0, o.jsxs)('div', {
                        className: S.generalBodyContainer,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: C,
                                className: S.generalBodyImage
                            }),
                            (0, o.jsxs)('div', {
                                className: S.innerContent,
                                children: [
                                    (0, o.jsx)(p.ModalCloseButton, {
                                        onClick: i,
                                        className: S.closeButton
                                    }),
                                    (0, o.jsx)(p.Heading, {
                                        className: S.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: a ? T.intl.string(T.t.yCN5Qk) : T.intl.string(T.t.c1wxcX)
                                    }),
                                    (0, o.jsxs)(p.Text, {
                                        className: S.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, o.jsx)(p.Anchor, {
                                                className: u()(S.learnMore, { [S.learnMoreResendUnderlinedText]: a }),
                                                href: v.Z.getArticleURL(I.BhN.SHARE_NITRO_FAQ),
                                                children: a ? T.intl.string(T.t.yJfqPT) : T.intl.format(T.t['+Z4ey8'], { count: n })
                                            }),
                                            a
                                                ? (0, o.jsx)('div', {
                                                      className: S.shareNitroResendCopySuffix,
                                                      children: T.intl.string(T.t['b0B69/'])
                                                  })
                                                : (0, o.jsx)('div', { children: T.intl.format(T.t['58lPt7'], { date: (0, E.vc)(d()(O), 'LL') }) })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: S.generalButtonContainer,
                        children: (0, o.jsx)(p.Button, {
                            className: S.generalShareButton,
                            submitting: f,
                            onClick: () => {
                                a
                                    ? N(y, i, h)
                                    : (c(!0),
                                      g.default.track(I.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: A,
                                          step: b.fz.FLOW_STARTED,
                                          other_user_id: Number(y)
                                      }));
                            },
                            children: a ? T.intl.string(T.t.awsERE) : T.intl.string(T.t.Ago7Zm)
                        })
                    })
                ]
            });
}
function D(e) {
    let { shouldShowPopout: n, referralsRemaining: r, channel: i, onClose: a, isResending: s } = e;
    return n
        ? (0, o.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, o.jsx)(f.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, o.jsx)(O, {
                          ...e,
                          referralsRemaining: r,
                          channel: i,
                          onClose: a,
                          isResending: s
                      }),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, o.jsx)('div', { className: S.__invalid_popoutTarget })
              })
          })
        : null;
}

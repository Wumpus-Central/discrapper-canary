n.d(t, { Z: () => w }), n(773603), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(913527),
    l = n.n(s),
    c = n(235874),
    u = n(481060),
    d = n(37234),
    f = n(100527),
    p = n(906732),
    _ = n(626135),
    h = n(55935),
    m = n(63063),
    g = n(281494),
    E = n(474936),
    v = n(981631),
    b = n(388032),
    y = n(962740),
    O = n(352175),
    S = n(90351);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = async (e, t, n) => {
        n(!0),
            await (0, g.Eo)(e)
                .then(() => {
                    t(), (0, d.Ou)();
                })
                .finally(() => {
                    n(!1);
                });
    },
    R = (e) => {
        let { onClose: t, referralsRemaining: n, recipient: o, analyticsLocations: a } = e,
            [s, l] = i.useState(!1),
            c = n - 1;
        return (0, r.jsxs)('div', {
            className: y.confirmationContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: y.confirmationBody,
                    children: [
                        (0, r.jsx)(u.olH, {
                            onClick: t,
                            className: y.closeButton
                        }),
                        (0, r.jsx)('img', {
                            alt: '',
                            src: O,
                            className: y.confirmationImage
                        }),
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-xl/bold',
                            color: 'interactive-active',
                            className: y.confirmationHeading,
                            children: b.NW.string(b.t.dF5azM)
                        }),
                        (0, r.jsx)(u.Text, {
                            className: y.confirmationBodyCopy,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: c > 0 ? b.NW.formatToPlainString(b.t['J/tYnp'], { count: c }) : b.NW.string(b.t.vVnRxc)
                        }),
                        (0, r.jsx)('hr', { className: y.confirmationBodySeparator })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: y.confirmationButtonContainer,
                    children: [
                        (0, r.jsx)(u.zxk, {
                            className: y.confirmationShareButton,
                            submitting: s,
                            onClick: () => {
                                C(o, t, l),
                                    _.default.track(v.rMx.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: a,
                                        step: E.fz.FLOW_COMPLETED,
                                        other_user_id: Number(o)
                                    });
                            },
                            children: b.NW.string(b.t['zxlx6+'])
                        }),
                        (0, r.jsx)('div', {
                            className: y.confirmationCancelButtonContainer,
                            children: (0, r.jsx)(u.P3F, {
                                onClick: t,
                                children: (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/medium',
                                    className: y.confirmationCancelCopy,
                                    children: b.NW.string(b.t['ETE/oK'])
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
function P(e) {
    let { referralsRemaining: t, channel: n, onClose: o, isResending: s } = e,
        [c, d] = i.useState(!1),
        [g, O] = i.useState(!1),
        I = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null,
        { analyticsLocations: T } = (0, p.ZP)(f.Z.REFERRAL_TRIALS_POPOUT),
        N = new Date('2023-06-15T08:00:00-08:00');
    return null == I
        ? null
        : c
          ? (0, r.jsx)(R, {
                onClose: o,
                referralsRemaining: t,
                recipient: I,
                analyticsLocations: T
            })
          : (0, r.jsxs)('div', {
                className: y.generalContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.generalBodyContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: S,
                                className: y.generalBodyImage
                            }),
                            (0, r.jsxs)('div', {
                                className: y.innerContent,
                                children: [
                                    (0, r.jsx)(u.olH, {
                                        onClick: o,
                                        className: y.closeButton
                                    }),
                                    (0, r.jsx)(u.X6q, {
                                        className: y.generalHeading,
                                        variant: 'heading-xl/bold',
                                        children: s ? b.NW.string(b.t.yCN5Qk) : b.NW.string(b.t.c1wxcX)
                                    }),
                                    (0, r.jsxs)(u.Text, {
                                        className: y.generalBodyCopy,
                                        variant: 'text-md/normal',
                                        children: [
                                            (0, r.jsx)(u.eee, {
                                                className: a()(y.learnMore, { [y.learnMoreResendUnderlinedText]: s }),
                                                href: m.Z.getArticleURL(v.BhN.SHARE_NITRO_FAQ),
                                                children: s ? b.NW.string(b.t.yJfqPT) : b.NW.format(b.t['+Z4ey8'], { count: t })
                                            }),
                                            s
                                                ? (0, r.jsx)('div', {
                                                      className: y.shareNitroResendCopySuffix,
                                                      children: b.NW.string(b.t['b0B69/'])
                                                  })
                                                : (0, r.jsx)('div', { children: b.NW.format(b.t['58lPt7'], { date: (0, h.vc)(l()(N), 'LL') }) })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: y.generalButtonContainer,
                        children: (0, r.jsx)(u.zxk, {
                            className: y.generalShareButton,
                            submitting: g,
                            onClick: () => {
                                s
                                    ? C(I, o, O)
                                    : (d(!0),
                                      _.default.track(v.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: T,
                                          step: E.fz.FLOW_STARTED,
                                          other_user_id: Number(I)
                                      }));
                            },
                            children: s ? b.NW.string(b.t.awsERE) : b.NW.string(b.t.Ago7Zm)
                        })
                    })
                ]
            });
}
function w(e) {
    let { shouldShowPopout: t, referralsRemaining: n, channel: i, onClose: o, isResending: a } = e;
    return t
        ? (0, r.jsx)('div', {
              onMouseDown: (e) => e.stopPropagation(),
              children: (0, r.jsx)(c.y, {
                  shouldShow: !0,
                  position: 'top',
                  align: 'center',
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          P,
                          A(T({}, e), {
                              referralsRemaining: n,
                              channel: i,
                              onClose: o,
                              isResending: a
                          })
                      ),
                  onRequestClose: () => void 0,
                  closeOnScroll: !1,
                  ignoreModalClicks: !0,
                  children: () => (0, r.jsx)('div', { className: y.__invalid_popoutTarget })
              })
          })
        : null;
}

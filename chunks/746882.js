n.d(t, { default: () => v }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(481060),
    f = n(749210),
    h = n(168107),
    m = n(480916),
    x = n(600164),
    _ = n(313201),
    b = n(592125),
    E = n(944486),
    k = n(594174),
    g = n(626135),
    A = n(63063),
    N = n(771308),
    y = n(758119),
    z = n(622822),
    C = n(13430),
    j = n(723359),
    L = n(981631),
    R = n(388032),
    T = n(951408);
function v(e) {
    let { transitionState: t, source: l } = e,
        s = (0, d.e7)([k.default], () => k.default.getCurrentUser()),
        v = (0, d.e7)([E.Z, b.Z], () => b.Z.getChannel(E.Z.getChannelId())),
        [S, p] = r.useState(null),
        [M, G] = r.useState(null),
        [w, I] = r.useState(!1),
        [Z, Y] = r.useState(0),
        D = r.createRef(),
        F = r.createRef(),
        P = (0, _.Dt)(),
        U = (0, z.Kt)(),
        { verifyAgreementButtonText: B, verifyGateDescription: q } = (0, z.a1)(),
        K = null != S ? o()().diff(S, 'years') : null;
    function O() {
        if (l === j.L0.NSFW_SERVER_INVITE_EMBED) return void (0, y.qV)(l);
        let e = null == v ? void 0 : v.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, y.qV)(l);
    }
    async function V() {
        a()(null != S, 'Cannot submit null birthday.');
        try {
            return G(null), I(!0), await (0, N.Av)(S, l);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, y.C8)(l, t.body.date_of_birth);
            else {
                var e;
                (null == t || null == (e = t.body) ? void 0 : e.username) != null ? G(R.intl.string(R.t['TGg/2t'])) : G(null == t ? void 0 : t.body.message), I(!1);
            }
        }
    }
    async function X() {
        if ((a()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18)) return void Y(1);
        await V();
    }
    async function W(e) {
        e.preventDefault(), w || null == S || (await X());
    }
    async function Q() {
        null == (await V()) && Y(0);
    }
    r.useEffect(() => {
        null != s && null != s.nsfwAllowed && (0, y.qq)(l);
    }),
        r.useEffect(() => {
            g.default.track(L.rMx.AGE_GATE_ACTION, {
                source: l,
                action: j.Al.AGE_GATE_OPEN
            });
        }, [l]);
    let J = r.useCallback(
            (e) => {
                p(e);
            },
            [p]
        ),
        H = r.useCallback(() => {
            var e;
            null == (e = F.current) || e.focus();
        }, [F]),
        $ = r.useCallback(() => {
            h.Z.showAgeVerificationGetStartedModal(m.cU.NSFW_AGE_GATE);
        }, []);
    return U
        ? (0, i.jsxs)(u.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: u.CgR.SMALL,
              children: [
                  (0, i.jsx)(u.hzk, {
                      children: (0, i.jsxs)('div', {
                          className: T.container,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(559325),
                                  className: T.img
                              }),
                              (0, i.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: T.title,
                                  children: R.intl.string(R.t.ZmwvDQ)
                              }),
                              (0, i.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: q
                              })
                          ]
                      })
                  }),
                  (0, i.jsxs)(u.mzw, {
                      justify: x.Z.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(u.zxk, {
                              size: u.PhG.SMALL,
                              onClick: $,
                              children: B
                          }),
                          (0, i.jsx)(u.zxk, {
                              look: u.zxk.Looks.LINK,
                              size: u.zxk.Sizes.NONE,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: O,
                              children: R.intl.string(R.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === Z
          ? (function () {
                let e = l === j.L0.FAMILY_CENTER ? R.intl.string(R.t.M7mt7u) : R.intl.string(R.t.F8otRk),
                    r = (() => {
                        switch (l) {
                            case j.L0.FAMILY_CENTER:
                                return R.intl.string(R.t.mhUrKS);
                            case j.L0.DEEP_LINK_PROMPT:
                                return R.intl.format(R.t.iyhg2t, { helpURL: A.Z.getArticleURL(L.BhN.AGE_GATE) });
                            default:
                                return R.intl.format(R.t.n3QjDA, { helpURL: A.Z.getArticleURL(L.BhN.AGE_GATE) });
                        }
                    })();
                return (0, i.jsxs)(u.Y0X, {
                    transitionState: t,
                    size: u.CgR.SMALL,
                    'aria-labelledby': P,
                    children: [
                        (0, i.jsxs)(u.hzk, {
                            children: [
                                (0, i.jsxs)('div', {
                                    className: T.container,
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(559325),
                                            className: T.img
                                        }),
                                        (0, i.jsx)(u.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: T.title,
                                            id: P,
                                            children: e
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-sm/normal',
                                            children: r
                                        })
                                    ]
                                }),
                                (0, i.jsx)('form', {
                                    onSubmit: W,
                                    children: (0, i.jsx)(C.Z, {
                                        label: R.intl.string(R.t.rhBeKS),
                                        wrapperClassName: T.birthday,
                                        name: 'date_of_birth',
                                        onChange: J,
                                        onPopulated: H,
                                        error: M,
                                        value: S,
                                        ref: D,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(u.mzw, {
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)(u.zxk, {
                                    buttonRef: F,
                                    submitting: w,
                                    disabled: null == S,
                                    size: u.PhG.SMALL,
                                    onClick: X,
                                    children: R.intl.string(R.t.uBFuoq)
                                }),
                                (0, i.jsx)(u.zxk, {
                                    look: u.zxk.Looks.LINK,
                                    size: u.zxk.Sizes.NONE,
                                    color: u.zxk.Colors.PRIMARY,
                                    onClick: O,
                                    children: R.intl.string(R.t['1MrpWF'])
                                })
                            ]
                        })
                    ]
                });
            })()
          : (0, i.jsxs)(u.Y0X, {
                transitionState: u.Dvm.ENTERED,
                size: u.CgR.SMALL,
                'aria-labelledby': P,
                children: [
                    (0, i.jsx)(u.hzk, {
                        children: (0, i.jsxs)('div', {
                            className: T.confirmContainer,
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: T.confirmTitle,
                                    id: P,
                                    children: R.intl.format(R.t.wumolZ, { age: K })
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: R.intl.format(R.t.n3QjDA, { helpURL: A.Z.getArticleURL(L.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)(u.mzw, {
                        className: T.confirmFooter,
                        children: [
                            (0, i.jsx)(u.zxk, {
                                look: u.zxk.Looks.LINK,
                                size: u.zxk.Sizes.NONE,
                                color: u.zxk.Colors.PRIMARY,
                                onClick: () => Y(0),
                                children: R.intl.string(R.t.cfYCra)
                            }),
                            (0, i.jsx)(u.zxk, {
                                color: u.zxk.Colors.BRAND,
                                onClick: Q,
                                children: R.intl.string(R.t['6tahio'])
                            })
                        ]
                    })
                ]
            });
}

(n.d(t, { default: () => k }), n(388685));
var i = n(255367),
    r = n(73800),
    a = n(512722),
    l = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(755721),
    f = n(481060),
    m = n(749210),
    x = n(168107),
    h = n(480916),
    _ = n(600164),
    E = n(313201),
    g = n(592125),
    b = n(944486),
    N = n(594174),
    A = n(626135),
    p = n(63063),
    y = n(771308),
    C = n(758119),
    R = n(622822),
    j = n(13430),
    z = n(723359),
    L = n(981631),
    S = n(388032),
    T = n(951408);
function k(e) {
    let { transitionState: t, source: a } = e,
        s = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        k = (0, d.e7)([b.Z, g.Z], () => g.Z.getChannel(b.Z.getChannelId())),
        [v, G] = r.useState(null),
        [I, M] = r.useState(null),
        [w, F] = r.useState(!1),
        [Y, Z] = r.useState(0),
        U = r.useRef(null),
        D = r.useRef(null),
        P = (0, E.Dt)(),
        V = (0, R.Kt)() && a !== z.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: B, verifyGateDescription: q } = (0, R.a1)(a),
        W = a === z.L0.NSFW_SERVER || a === z.L0.NSFW_SERVER_INVITE || a === z.L0.NSFW_SERVER_INVITE_EMBED,
        K = null != v ? o()().diff(v, 'years') : null;
    function O() {
        if (a === z.L0.NSFW_SERVER_INVITE_EMBED) return void (0, C.qV)(a);
        let e = null == k ? void 0 : k.getGuildId();
        (m.Z.nsfwReturnToSafety(e), (0, C.qV)(a));
    }
    async function X() {
        l()(null != v, 'Cannot submit null birthday.');
        try {
            return (M(null), F(!0), await (0, y.Av)(v, a));
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, C.C8)(a, t.body.date_of_birth);
            else {
                var e;
                ((null == t || null == (e = t.body) ? void 0 : e.username) != null ? M(S.intl.string(S.t['TGg/2t'])) : M(null == t ? void 0 : t.body.message), F(!1));
            }
        }
    }
    async function Q() {
        if ((l()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18)) return void Z(1);
        await X();
    }
    async function J(e) {
        (e.preventDefault(), w || null == v || (await Q()));
    }
    async function H() {
        null == (await X()) && Z(0);
    }
    (r.useEffect(() => {
        null == s || null == s.nsfwAllowed || V || (0, C.qq)(a);
    }),
        r.useEffect(() => {
            A.default.track(L.rMx.AGE_GATE_ACTION, {
                source: a,
                action: z.Al.AGE_GATE_OPEN
            });
        }, [a]));
    let $ = r.useCallback(
            (e) => {
                G(e);
            },
            [G]
        ),
        ee = r.useCallback(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, [D]),
        et = r.useCallback(() => {
            x.Z.showAgeVerificationGetStartedModal(h.cU.NSFW_AGE_GATE);
        }, []);
    return V
        ? (0, i.jsxs)(f.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: f.CgR.SMALL,
              parentComponent: 'ExistingUserAgeGatePrompt',
              children: [
                  (0, i.jsx)(f.hzk, {
                      children: (0, i.jsxs)('div', {
                          className: T.container,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(559325),
                                  className: T.img
                              }),
                              (0, i.jsx)(f.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: T.title,
                                  children: W ? S.intl.string(S.t.xi46lp) : S.intl.string(S.t.ZmwvDQ)
                              }),
                              (0, i.jsx)(f.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: q
                              })
                          ]
                      })
                  }),
                  (0, i.jsxs)(f.mzw, {
                      justify: _.Z.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(f.zxk, {
                              variant: 'primary',
                              size: 'sm',
                              text: B,
                              onClick: et
                          }),
                          (0, i.jsx)(u.zx, {
                              look: u.zx.Looks.LINK,
                              size: u.zx.Sizes.NONE,
                              color: u.zx.Colors.PRIMARY,
                              onClick: O,
                              children: S.intl.string(S.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === Y
          ? (function () {
                let e = a === z.L0.FAMILY_CENTER ? S.intl.string(S.t.M7mt7u) : S.intl.string(S.t.F8otRk),
                    r = (() => {
                        switch (a) {
                            case z.L0.FAMILY_CENTER:
                                return S.intl.string(S.t.mhUrKS);
                            case z.L0.DEEP_LINK_PROMPT:
                                return S.intl.format(S.t.iyhg2t, { helpURL: p.Z.getArticleURL(L.BhN.AGE_GATE) });
                            default:
                                return S.intl.format(S.t.n3QjDA, { helpURL: p.Z.getArticleURL(L.BhN.AGE_GATE) });
                        }
                    })();
                return (0, i.jsxs)(f.Y0X, {
                    transitionState: t,
                    size: f.CgR.SMALL,
                    'aria-labelledby': P,
                    parentComponent: 'ExistingUserAgeGatePrompt',
                    children: [
                        (0, i.jsxs)(f.hzk, {
                            children: [
                                (0, i.jsxs)('div', {
                                    className: T.container,
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(559325),
                                            className: T.img
                                        }),
                                        (0, i.jsx)(f.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: T.title,
                                            id: P,
                                            children: e
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-sm/normal',
                                            children: r
                                        })
                                    ]
                                }),
                                (0, i.jsx)('form', {
                                    onSubmit: J,
                                    children: (0, i.jsx)(j.Z, {
                                        label: S.intl.string(S.t.rhBeKS),
                                        wrapperClassName: T.birthday,
                                        name: 'date_of_birth',
                                        onChange: $,
                                        onPopulated: ee,
                                        error: I,
                                        value: v,
                                        ref: U,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(f.mzw, {
                            justify: _.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)(f.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: S.intl.string(S.t.uBFuoq),
                                    buttonRef: D,
                                    loading: w,
                                    disabled: null == v,
                                    onClick: Q
                                }),
                                (0, i.jsx)(u.zx, {
                                    look: u.zx.Looks.LINK,
                                    size: u.zx.Sizes.NONE,
                                    color: u.zx.Colors.PRIMARY,
                                    onClick: O,
                                    children: S.intl.string(S.t['1MrpWF'])
                                })
                            ]
                        })
                    ]
                });
            })()
          : (0, i.jsxs)(f.Y0X, {
                transitionState: f.Dvm.ENTERED,
                size: f.CgR.SMALL,
                'aria-labelledby': P,
                parentComponent: 'ExistingUserAgeGatePrompt',
                children: [
                    (0, i.jsx)(f.hzk, {
                        children: (0, i.jsxs)('div', {
                            className: T.confirmContainer,
                            children: [
                                (0, i.jsx)(f.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: T.confirmTitle,
                                    id: P,
                                    children: S.intl.format(S.t.wumolZ, { age: K })
                                }),
                                (0, i.jsx)(f.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: S.intl.format(S.t.n3QjDA, { helpURL: p.Z.getArticleURL(L.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)(f.mzw, {
                        className: T.confirmFooter,
                        children: [
                            (0, i.jsx)(u.zx, {
                                look: u.zx.Looks.LINK,
                                size: u.zx.Sizes.NONE,
                                color: u.zx.Colors.PRIMARY,
                                onClick: () => Z(0),
                                children: S.intl.string(S.t.cfYCra)
                            }),
                            (0, i.jsx)(f.zxk, {
                                variant: 'primary',
                                text: S.intl.string(S.t['6tahio']),
                                onClick: H
                            })
                        ]
                    })
                ]
            });
}

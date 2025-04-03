n.d(t, { default: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(913527),
    o = n.n(l),
    c = n(990547),
    d = n(442837),
    u = n(481060),
    f = n(749210),
    h = n(168107),
    m = n(480916),
    x = n(600164),
    _ = n(313201),
    N = n(592125),
    b = n(944486),
    E = n(594174),
    k = n(626135),
    g = n(63063),
    A = n(771308),
    y = n(758119),
    z = n(622822),
    C = n(13430),
    j = n(723359),
    L = n(981631),
    R = n(388032),
    T = n(951408);
function v(e) {
    let { transitionState: t, source: a } = e,
        l = (0, d.e7)([E.default], () => E.default.getCurrentUser()),
        v = (0, d.e7)([b.Z, N.Z], () => N.Z.getChannel(b.Z.getChannelId())),
        [S, p] = i.useState(null),
        [M, G] = i.useState(null),
        [W, w] = i.useState(!1),
        [I, Z] = i.useState(0),
        Y = i.createRef(),
        D = i.createRef(),
        F = (0, _.Dt)(),
        P = (0, z.Kt)(),
        { verifyAgreementButtonText: U, verifyGateDescription: B } = (0, z.a1)(),
        q = null != S ? o()().diff(S, 'years') : null;
    function K() {
        if (a === j.L0.NSFW_SERVER_INVITE_EMBED) return void (0, y.qV)(a);
        let e = null == v ? void 0 : v.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, y.qV)(a);
    }
    async function O() {
        s()(null != S, 'Cannot submit null birthday.');
        try {
            return G(null), w(!0), await (0, A.Av)(S, a);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, y.C8)(a, t.body.date_of_birth);
            else {
                var e;
                (null == t || null == (e = t.body) ? void 0 : e.username) != null ? G(R.NW.string(R.t['TGg/2t'])) : G(null == t ? void 0 : t.body.message), w(!1);
            }
        }
    }
    async function V() {
        if ((s()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18)) return void Z(1);
        await O();
    }
    async function X(e) {
        e.preventDefault(), W || null == S || (await V());
    }
    async function Q() {
        null == (await O()) && Z(0);
    }
    i.useEffect(() => {
        null != l && null != l.nsfwAllowed && (0, y.qq)(a);
    }),
        i.useEffect(() => {
            k.default.track(L.rMx.AGE_GATE_ACTION, {
                source: a,
                action: j.Al.AGE_GATE_OPEN
            });
        }, [a]);
    let J = i.useCallback(
            (e) => {
                p(e);
            },
            [p]
        ),
        H = i.useCallback(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, [D]),
        $ = i.useCallback(() => {
            h.Z.showAgeVerificationGetStartedModal(m.cU.NSFW_AGE_GATE);
        }, []);
    return P
        ? (0, r.jsxs)(u.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: u.CgR.SMALL,
              children: [
                  (0, r.jsx)(u.hzk, {
                      children: (0, r.jsxs)('div', {
                          className: T.container,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: n(559325),
                                  className: T.img
                              }),
                              (0, r.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: T.title,
                                  children: R.NW.string(R.t.ZmwvDQ)
                              }),
                              (0, r.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: B
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)(u.mzw, {
                      justify: x.Z.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(u.zxk, {
                              size: u.PhG.SMALL,
                              onClick: $,
                              children: U
                          }),
                          (0, r.jsx)(u.zxk, {
                              look: u.zxk.Looks.LINK,
                              size: u.zxk.Sizes.NONE,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: K,
                              children: R.NW.string(R.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === I
          ? (function () {
                let e = a === j.L0.FAMILY_CENTER ? R.NW.string(R.t.M7mt7u) : R.NW.string(R.t.F8otRk),
                    i = (() => {
                        switch (a) {
                            case j.L0.FAMILY_CENTER:
                                return R.NW.string(R.t.mhUrKS);
                            case j.L0.DEEP_LINK_PROMPT:
                                return R.NW.format(R.t.iyhg2t, { helpURL: g.Z.getArticleURL(L.BhN.AGE_GATE) });
                            default:
                                return R.NW.format(R.t.n3QjDA, { helpURL: g.Z.getArticleURL(L.BhN.AGE_GATE) });
                        }
                    })();
                return (0, r.jsxs)(u.Y0X, {
                    transitionState: t,
                    size: u.CgR.SMALL,
                    'aria-labelledby': F,
                    children: [
                        (0, r.jsxs)(u.hzk, {
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.container,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: n(559325),
                                            className: T.img
                                        }),
                                        (0, r.jsx)(u.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: T.title,
                                            id: F,
                                            children: e
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-sm/normal',
                                            children: i
                                        })
                                    ]
                                }),
                                (0, r.jsx)('form', {
                                    onSubmit: X,
                                    children: (0, r.jsx)(C.Z, {
                                        label: R.NW.string(R.t.rhBeKS),
                                        wrapperClassName: T.birthday,
                                        name: 'date_of_birth',
                                        onChange: J,
                                        onPopulated: H,
                                        error: M,
                                        value: S,
                                        ref: Y,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(u.mzw, {
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)(u.zxk, {
                                    buttonRef: D,
                                    submitting: W,
                                    disabled: null == S,
                                    size: u.PhG.SMALL,
                                    onClick: V,
                                    children: R.NW.string(R.t.uBFuoq)
                                }),
                                (0, r.jsx)(u.zxk, {
                                    look: u.zxk.Looks.LINK,
                                    size: u.zxk.Sizes.NONE,
                                    color: u.zxk.Colors.PRIMARY,
                                    onClick: K,
                                    children: R.NW.string(R.t['1MrpWF'])
                                })
                            ]
                        })
                    ]
                });
            })()
          : (0, r.jsxs)(u.Y0X, {
                transitionState: u.Dvm.ENTERED,
                size: u.CgR.SMALL,
                'aria-labelledby': F,
                children: [
                    (0, r.jsx)(u.hzk, {
                        children: (0, r.jsxs)('div', {
                            className: T.confirmContainer,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: T.confirmTitle,
                                    id: F,
                                    children: R.NW.format(R.t.wumolZ, { age: q })
                                }),
                                (0, r.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: R.NW.format(R.t.n3QjDA, { helpURL: g.Z.getArticleURL(L.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)(u.mzw, {
                        className: T.confirmFooter,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                look: u.zxk.Looks.LINK,
                                size: u.zxk.Sizes.NONE,
                                color: u.zxk.Colors.PRIMARY,
                                onClick: () => Z(0),
                                children: R.NW.string(R.t.cfYCra)
                            }),
                            (0, r.jsx)(u.zxk, {
                                color: u.zxk.Colors.BRAND,
                                onClick: Q,
                                children: R.NW.string(R.t['6tahio'])
                            })
                        ]
                    })
                ]
            });
}

n.d(t, { default: () => S }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(990547),
    d = n(442837),
    u = n(481060),
    f = n(749210),
    m = n(168107),
    h = n(480916),
    x = n(600164),
    _ = n(313201),
    E = n(592125),
    g = n(944486),
    b = n(594174),
    N = n(626135),
    k = n(63063),
    A = n(771308),
    C = n(758119),
    R = n(622822),
    p = n(13430),
    y = n(723359),
    L = n(981631),
    z = n(388032),
    j = n(951408);
function S(e) {
    let { transitionState: t, source: l } = e,
        a = (0, d.e7)([b.default], () => b.default.getCurrentUser()),
        S = (0, d.e7)([g.Z, E.Z], () => E.Z.getChannel(g.Z.getChannelId())),
        [T, v] = r.useState(null),
        [G, M] = r.useState(null),
        [I, w] = r.useState(!1),
        [F, Y] = r.useState(0),
        Z = r.useRef(null),
        D = r.useRef(null),
        P = (0, _.Dt)(),
        U = (0, R.Kt)() && l !== y.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: B, verifyGateDescription: V } = (0, R.a1)(l),
        q = l === y.L0.NSFW_SERVER || l === y.L0.NSFW_SERVER_INVITE || l === y.L0.NSFW_SERVER_INVITE_EMBED,
        W = null != T ? o()().diff(T, 'years') : null;
    function K() {
        if (l === y.L0.NSFW_SERVER_INVITE_EMBED) return void (0, C.qV)(l);
        let e = null == S ? void 0 : S.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, C.qV)(l);
    }
    async function O() {
        s()(null != T, 'Cannot submit null birthday.');
        try {
            return M(null), w(!0), await (0, A.Av)(T, l);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, C.C8)(l, t.body.date_of_birth);
            else {
                var e;
                (null == t || null == (e = t.body) ? void 0 : e.username) != null ? M(z.intl.string(z.t['TGg/2t'])) : M(null == t ? void 0 : t.body.message), w(!1);
            }
        }
    }
    async function X() {
        if ((s()(null != W, "Cannot submit if we haven't been able to calculate age."), W < 18)) return void Y(1);
        await O();
    }
    async function Q(e) {
        e.preventDefault(), I || null == T || (await X());
    }
    async function J() {
        null == (await O()) && Y(0);
    }
    r.useEffect(() => {
        null == a || null == a.nsfwAllowed || U || (0, C.qq)(l);
    }),
        r.useEffect(() => {
            N.default.track(L.rMx.AGE_GATE_ACTION, {
                source: l,
                action: y.Al.AGE_GATE_OPEN
            });
        }, [l]);
    let H = r.useCallback(
            (e) => {
                v(e);
            },
            [v]
        ),
        $ = r.useCallback(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, [D]),
        ee = r.useCallback(() => {
            m.Z.showAgeVerificationGetStartedModal(h.cU.NSFW_AGE_GATE);
        }, []);
    return U
        ? (0, i.jsxs)(u.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: u.CgR.SMALL,
              parentComponent: 'ExistingUserAgeGatePrompt',
              children: [
                  (0, i.jsx)(u.hzk, {
                      children: (0, i.jsxs)('div', {
                          className: j.container,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(559325),
                                  className: j.img
                              }),
                              (0, i.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: j.title,
                                  children: q ? z.intl.string(z.t.xi46lp) : z.intl.string(z.t.ZmwvDQ)
                              }),
                              (0, i.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: V
                              })
                          ]
                      })
                  }),
                  (0, i.jsxs)(u.mzw, {
                      justify: x.Z.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(u.zxk, {
                              size: u.PhG.SMALL,
                              onClick: ee,
                              children: B
                          }),
                          (0, i.jsx)(u.zxk, {
                              look: u.zxk.Looks.LINK,
                              size: u.zxk.Sizes.NONE,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: K,
                              children: z.intl.string(z.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === F
          ? (function () {
                let e = l === y.L0.FAMILY_CENTER ? z.intl.string(z.t.M7mt7u) : z.intl.string(z.t.F8otRk),
                    r = (() => {
                        switch (l) {
                            case y.L0.FAMILY_CENTER:
                                return z.intl.string(z.t.mhUrKS);
                            case y.L0.DEEP_LINK_PROMPT:
                                return z.intl.format(z.t.iyhg2t, { helpURL: k.Z.getArticleURL(L.BhN.AGE_GATE) });
                            default:
                                return z.intl.format(z.t.n3QjDA, { helpURL: k.Z.getArticleURL(L.BhN.AGE_GATE) });
                        }
                    })();
                return (0, i.jsxs)(u.Y0X, {
                    transitionState: t,
                    size: u.CgR.SMALL,
                    'aria-labelledby': P,
                    parentComponent: 'ExistingUserAgeGatePrompt',
                    children: [
                        (0, i.jsxs)(u.hzk, {
                            children: [
                                (0, i.jsxs)('div', {
                                    className: j.container,
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(559325),
                                            className: j.img
                                        }),
                                        (0, i.jsx)(u.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: j.title,
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
                                    onSubmit: Q,
                                    children: (0, i.jsx)(p.Z, {
                                        label: z.intl.string(z.t.rhBeKS),
                                        wrapperClassName: j.birthday,
                                        name: 'date_of_birth',
                                        onChange: H,
                                        onPopulated: $,
                                        error: G,
                                        value: T,
                                        ref: Z,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(u.mzw, {
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)(u.zxk, {
                                    buttonRef: D,
                                    submitting: I,
                                    disabled: null == T,
                                    size: u.PhG.SMALL,
                                    onClick: X,
                                    children: z.intl.string(z.t.uBFuoq)
                                }),
                                (0, i.jsx)(u.zxk, {
                                    look: u.zxk.Looks.LINK,
                                    size: u.zxk.Sizes.NONE,
                                    color: u.zxk.Colors.PRIMARY,
                                    onClick: K,
                                    children: z.intl.string(z.t['1MrpWF'])
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
                parentComponent: 'ExistingUserAgeGatePrompt',
                children: [
                    (0, i.jsx)(u.hzk, {
                        children: (0, i.jsxs)('div', {
                            className: j.confirmContainer,
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: j.confirmTitle,
                                    id: P,
                                    children: z.intl.format(z.t.wumolZ, { age: W })
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: z.intl.format(z.t.n3QjDA, { helpURL: k.Z.getArticleURL(L.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)(u.mzw, {
                        className: j.confirmFooter,
                        children: [
                            (0, i.jsx)(u.zxk, {
                                look: u.zxk.Looks.LINK,
                                size: u.zxk.Sizes.NONE,
                                color: u.zxk.Colors.PRIMARY,
                                onClick: () => Y(0),
                                children: z.intl.string(z.t.cfYCra)
                            }),
                            (0, i.jsx)(u.zxk, {
                                color: u.zxk.Colors.BRAND,
                                onClick: J,
                                children: z.intl.string(z.t['6tahio'])
                            })
                        ]
                    })
                ]
            });
}

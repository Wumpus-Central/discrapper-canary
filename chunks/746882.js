n.d(t, { default: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
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
    E = n(944486),
    b = n(594174),
    g = n(626135),
    k = n(63063),
    A = n(771308),
    y = n(758119),
    j = n(622822),
    z = n(13430),
    C = n(723359),
    R = n(981631),
    L = n(388032),
    v = n(326610);
function S(e) {
    let { transitionState: t, source: s } = e,
        l = (0, d.e7)([b.default], () => b.default.getCurrentUser()),
        S = (0, d.e7)([E.Z, N.Z], () => N.Z.getChannel(E.Z.getChannelId())),
        [T, p] = i.useState(null),
        [W, M] = i.useState(null),
        [G, w] = i.useState(!1),
        [I, Z] = i.useState(0),
        Y = i.createRef(),
        D = i.createRef(),
        F = (0, _.Dt)(),
        P = (0, j.Kt)(),
        U = null != T ? o()().diff(T, 'years') : null;
    function B() {
        if (s === C.L0.NSFW_SERVER_INVITE_EMBED) {
            (0, y.qV)(s);
            return;
        }
        let e = null == S ? void 0 : S.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, y.qV)(s);
    }
    async function q() {
        a()(null != T, 'Cannot submit null birthday.');
        try {
            return M(null), w(!0), await (0, A.Av)(T, s);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, y.C8)(s, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? M(L.NW.string(L.t['TGg/2t'])) : M(null == t ? void 0 : t.body.message), w(!1);
            }
        }
    }
    async function K() {
        if ((a()(null != U, "Cannot submit if we haven't been able to calculate age."), U < 18)) {
            Z(1);
            return;
        }
        await q();
    }
    async function O(e) {
        e.preventDefault(), G || null == T || (await K());
    }
    async function V() {
        null == (await q()) && Z(0);
    }
    i.useEffect(() => {
        null != l && null != l.nsfwAllowed && (0, y.qq)(s);
    }),
        i.useEffect(() => {
            g.default.track(R.rMx.AGE_GATE_ACTION, {
                source: s,
                action: C.Al.AGE_GATE_OPEN
            });
        }, [s]);
    let X = i.useCallback(
            (e) => {
                p(e);
            },
            [p]
        ),
        Q = i.useCallback(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
        }, [D]),
        J = i.useCallback(() => {
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
                          className: v.container,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: n(462991),
                                  className: v.img
                              }),
                              (0, r.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: v.title,
                                  children: L.NW.string(L.t.ZmwvDQ)
                              }),
                              (0, r.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: L.NW.string(L.t['NjO/s7'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)(u.mzw, {
                      justify: x.Z.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(u.zxk, {
                              size: u.PhG.SMALL,
                              onClick: J,
                              children: L.NW.string(L.t.SFWVER)
                          }),
                          (0, r.jsx)(u.zxk, {
                              look: u.zxk.Looks.LINK,
                              size: u.zxk.Sizes.NONE,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: B,
                              children: L.NW.string(L.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === I
          ? (function () {
                let e = s === C.L0.FAMILY_CENTER ? L.NW.string(L.t.M7mt7u) : L.NW.string(L.t.F8otRk),
                    i = (() => {
                        switch (s) {
                            case C.L0.FAMILY_CENTER:
                                return L.NW.string(L.t.mhUrKS);
                            case C.L0.DEEP_LINK_PROMPT:
                                return L.NW.format(L.t.iyhg2t, { helpURL: k.Z.getArticleURL(R.BhN.AGE_GATE) });
                            default:
                                return L.NW.format(L.t.n3QjDA, { helpURL: k.Z.getArticleURL(R.BhN.AGE_GATE) });
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
                                    className: v.container,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: n(462991),
                                            className: v.img
                                        }),
                                        (0, r.jsx)(u.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: v.title,
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
                                    onSubmit: O,
                                    children: (0, r.jsx)(z.Z, {
                                        label: L.NW.string(L.t.rhBeKS),
                                        wrapperClassName: v.birthday,
                                        name: 'date_of_birth',
                                        onChange: X,
                                        onPopulated: Q,
                                        error: W,
                                        value: T,
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
                                    submitting: G,
                                    disabled: null == T,
                                    size: u.PhG.SMALL,
                                    onClick: K,
                                    children: L.NW.string(L.t.uBFuoq)
                                }),
                                (0, r.jsx)(u.zxk, {
                                    look: u.zxk.Looks.LINK,
                                    size: u.zxk.Sizes.NONE,
                                    color: u.zxk.Colors.PRIMARY,
                                    onClick: B,
                                    children: L.NW.string(L.t['1MrpWF'])
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
                            className: v.confirmContainer,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: v.confirmTitle,
                                    id: F,
                                    children: L.NW.format(L.t.wumolZ, { age: U })
                                }),
                                (0, r.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: L.NW.format(L.t.n3QjDA, { helpURL: k.Z.getArticleURL(R.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)(u.mzw, {
                        className: v.confirmFooter,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                look: u.zxk.Looks.LINK,
                                size: u.zxk.Sizes.NONE,
                                color: u.zxk.Colors.PRIMARY,
                                onClick: () => Z(0),
                                children: L.NW.string(L.t.cfYCra)
                            }),
                            (0, r.jsx)(u.zxk, {
                                color: u.zxk.Colors.BRAND,
                                onClick: V,
                                children: L.NW.string(L.t['6tahio'])
                            })
                        ]
                    })
                ]
            });
}

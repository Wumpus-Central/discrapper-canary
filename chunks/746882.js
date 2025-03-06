n.d(t, { default: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(749210),
    f = n(168107),
    h = n(480916),
    m = n(600164),
    x = n(313201),
    _ = n(592125),
    N = n(944486),
    b = n(594174),
    g = n(626135),
    E = n(63063),
    k = n(771308),
    A = n(758119),
    y = n(622822),
    j = n(13430),
    z = n(723359),
    C = n(981631),
    L = n(388032),
    R = n(326610);
function v(e) {
    let { transitionState: t, source: a } = e,
        s = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        v = (0, c.e7)([N.Z, _.Z], () => _.Z.getChannel(N.Z.getChannelId())),
        [S, T] = i.useState(null),
        [W, M] = i.useState(null),
        [p, G] = i.useState(!1),
        [w, I] = i.useState(0),
        Z = i.createRef(),
        D = i.createRef(),
        Y = (0, x.Dt)(),
        F = (0, y.Kt)(),
        P = null != S ? o()().diff(S, 'years') : null;
    function B() {
        if (a === z.L0.NSFW_SERVER_INVITE_EMBED) {
            (0, A.qV)(a);
            return;
        }
        let e = null == v ? void 0 : v.getGuildId();
        u.Z.nsfwReturnToSafety(e), (0, A.qV)(a);
    }
    async function U() {
        l()(null != S, 'Cannot submit null birthday.');
        try {
            return M(null), G(!0), await (0, k.Av)(S, a);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, A.C8)(a, t.body.date_of_birth);
            else {
                var e;
                (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? M(L.NW.string(L.t['TGg/2t'])) : M(null == t ? void 0 : t.body.message), G(!1);
            }
        }
    }
    async function q() {
        if ((l()(null != P, "Cannot submit if we haven't been able to calculate age."), P < 18)) {
            I(1);
            return;
        }
        await U();
    }
    async function K(e) {
        e.preventDefault(), p || null == S || (await q());
    }
    async function O() {
        null == (await U()) && I(0);
    }
    i.useEffect(() => {
        null != s && null != s.nsfwAllowed && (0, A.qq)(a);
    }),
        i.useEffect(() => {
            g.default.track(C.rMx.AGE_GATE_ACTION, {
                source: a,
                action: z.Al.AGE_GATE_OPEN
            });
        }, [a]);
    let V = i.useCallback(
            (e) => {
                T(e);
            },
            [T]
        ),
        X = i.useCallback(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
        }, [D]),
        Q = i.useCallback(() => {
            f.Z.showAgeVerificationGetStartedModal(h.cU.NSFW_AGE_GATE);
        }, []);
    return F
        ? (0, r.jsxs)(d.Y0X, {
              transitionState: t,
              size: d.CgR.SMALL,
              children: [
                  (0, r.jsx)(d.hzk, {
                      children: (0, r.jsxs)('div', {
                          className: R.container,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: n(462991),
                                  className: R.img
                              }),
                              (0, r.jsx)(d.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: R.title,
                                  children: L.NW.string(L.t.ZmwvDQ)
                              }),
                              (0, r.jsx)(d.Text, {
                                  color: 'header-secondary',
                                  variant: 'text-sm/normal',
                                  children: L.NW.string(L.t['NjO/s7'])
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)(d.mzw, {
                      justify: m.Z.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(d.zxk, {
                              size: d.PhG.SMALL,
                              onClick: Q,
                              children: L.NW.string(L.t.SFWVER)
                          }),
                          (0, r.jsx)(d.zxk, {
                              look: d.zxk.Looks.LINK,
                              size: d.zxk.Sizes.NONE,
                              color: d.zxk.Colors.PRIMARY,
                              onClick: B,
                              children: L.NW.string(L.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === w
          ? (function () {
                let e = a === z.L0.FAMILY_CENTER ? L.NW.string(L.t.M7mt7u) : L.NW.string(L.t.F8otRk),
                    i = (() => {
                        switch (a) {
                            case z.L0.FAMILY_CENTER:
                                return L.NW.string(L.t.mhUrKS);
                            case z.L0.DEEP_LINK_PROMPT:
                                return L.NW.format(L.t.iyhg2t, { helpURL: E.Z.getArticleURL(C.BhN.AGE_GATE) });
                            default:
                                return L.NW.format(L.t.n3QjDA, { helpURL: E.Z.getArticleURL(C.BhN.AGE_GATE) });
                        }
                    })();
                return (0, r.jsxs)(d.Y0X, {
                    transitionState: t,
                    size: d.CgR.SMALL,
                    'aria-labelledby': Y,
                    children: [
                        (0, r.jsxs)(d.hzk, {
                            children: [
                                (0, r.jsxs)('div', {
                                    className: R.container,
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: '',
                                            src: n(462991),
                                            className: R.img
                                        }),
                                        (0, r.jsx)(d.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: R.title,
                                            id: Y,
                                            children: e
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-sm/normal',
                                            children: i
                                        })
                                    ]
                                }),
                                (0, r.jsx)('form', {
                                    onSubmit: K,
                                    children: (0, r.jsx)(j.Z, {
                                        label: L.NW.string(L.t.rhBeKS),
                                        wrapperClassName: R.birthday,
                                        name: 'date_of_birth',
                                        onChange: V,
                                        onPopulated: X,
                                        error: W,
                                        value: S,
                                        ref: Z,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(d.mzw, {
                            justify: m.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)(d.zxk, {
                                    buttonRef: D,
                                    submitting: p,
                                    disabled: null == S,
                                    size: d.PhG.SMALL,
                                    onClick: q,
                                    children: L.NW.string(L.t.uBFuoq)
                                }),
                                (0, r.jsx)(d.zxk, {
                                    look: d.zxk.Looks.LINK,
                                    size: d.zxk.Sizes.NONE,
                                    color: d.zxk.Colors.PRIMARY,
                                    onClick: B,
                                    children: L.NW.string(L.t['1MrpWF'])
                                })
                            ]
                        })
                    ]
                });
            })()
          : (0, r.jsxs)(d.Y0X, {
                transitionState: d.Dvm.ENTERED,
                size: d.CgR.SMALL,
                'aria-labelledby': Y,
                children: [
                    (0, r.jsx)(d.hzk, {
                        children: (0, r.jsxs)('div', {
                            className: R.confirmContainer,
                            children: [
                                (0, r.jsx)(d.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: R.confirmTitle,
                                    id: Y,
                                    children: L.NW.format(L.t.wumolZ, { age: P })
                                }),
                                (0, r.jsx)(d.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: L.NW.format(L.t.n3QjDA, { helpURL: E.Z.getArticleURL(C.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)(d.mzw, {
                        className: R.confirmFooter,
                        children: [
                            (0, r.jsx)(d.zxk, {
                                look: d.zxk.Looks.LINK,
                                size: d.zxk.Sizes.NONE,
                                color: d.zxk.Colors.PRIMARY,
                                onClick: () => I(0),
                                children: L.NW.string(L.t.cfYCra)
                            }),
                            (0, r.jsx)(d.zxk, {
                                color: d.zxk.Colors.BRAND,
                                onClick: O,
                                children: L.NW.string(L.t['6tahio'])
                            })
                        ]
                    })
                ]
            });
}

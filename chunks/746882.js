n.d(t, { default: () => T }), n(388685);
var i = n(255367),
    r = n(73800),
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
    _ = n(600164),
    x = n(313201),
    E = n(592125),
    b = n(944486),
    N = n(594174),
    g = n(626135),
    k = n(63063),
    A = n(771308),
    R = n(758119),
    y = n(622822),
    C = n(13430),
    L = n(723359),
    z = n(981631),
    j = n(388032),
    S = n(951408);
function T(e) {
    let { transitionState: t, source: l } = e,
        s = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        T = (0, d.e7)([b.Z, E.Z], () => E.Z.getChannel(b.Z.getChannelId())),
        [p, v] = r.useState(null),
        [M, I] = r.useState(null),
        [G, w] = r.useState(!1),
        [F, Y] = r.useState(0),
        Z = r.createRef(),
        D = r.createRef(),
        B = (0, x.Dt)(),
        P = (0, y.Kt)() && l !== L.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: U, verifyGateDescription: V } = (0, y.a1)(l),
        q = l === L.L0.NSFW_SERVER || l === L.L0.NSFW_SERVER_INVITE || l === L.L0.NSFW_SERVER_INVITE_EMBED,
        W = null != p ? o()().diff(p, 'years') : null;
    function K() {
        if (l === L.L0.NSFW_SERVER_INVITE_EMBED) return void (0, R.qV)(l);
        let e = null == T ? void 0 : T.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, R.qV)(l);
    }
    async function O() {
        a()(null != p, 'Cannot submit null birthday.');
        try {
            return I(null), w(!0), await (0, A.Av)(p, l);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, R.C8)(l, t.body.date_of_birth);
            else {
                var e;
                (null == t || null == (e = t.body) ? void 0 : e.username) != null ? I(j.intl.string(j.t['TGg/2t'])) : I(null == t ? void 0 : t.body.message), w(!1);
            }
        }
    }
    async function X() {
        if ((a()(null != W, "Cannot submit if we haven't been able to calculate age."), W < 18)) return void Y(1);
        await O();
    }
    async function Q(e) {
        e.preventDefault(), G || null == p || (await X());
    }
    async function J() {
        null == (await O()) && Y(0);
    }
    r.useEffect(() => {
        null != s && null != s.nsfwAllowed && (0, R.qq)(l);
    }),
        r.useEffect(() => {
            g.default.track(z.rMx.AGE_GATE_ACTION, {
                source: l,
                action: L.Al.AGE_GATE_OPEN
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
            h.Z.showAgeVerificationGetStartedModal(m.cU.NSFW_AGE_GATE);
        }, []);
    return P
        ? (0, i.jsxs)(u.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: u.CgR.SMALL,
              children: [
                  (0, i.jsx)(u.hzk, {
                      children: (0, i.jsxs)('div', {
                          className: S.container,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(559325),
                                  className: S.img
                              }),
                              (0, i.jsx)(u.X6q, {
                                  variant: 'heading-xl/semibold',
                                  className: S.title,
                                  children: q ? j.intl.string(j.t.xi46lp) : j.intl.string(j.t.ZmwvDQ)
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
                      justify: _.Z.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(u.zxk, {
                              size: u.PhG.SMALL,
                              onClick: ee,
                              children: U
                          }),
                          (0, i.jsx)(u.zxk, {
                              look: u.zxk.Looks.LINK,
                              size: u.zxk.Sizes.NONE,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: K,
                              children: j.intl.string(j.t.f3Pet7)
                          })
                      ]
                  })
              ]
          })
        : 0 === F
          ? (function () {
                let e = l === L.L0.FAMILY_CENTER ? j.intl.string(j.t.M7mt7u) : j.intl.string(j.t.F8otRk),
                    r = (() => {
                        switch (l) {
                            case L.L0.FAMILY_CENTER:
                                return j.intl.string(j.t.mhUrKS);
                            case L.L0.DEEP_LINK_PROMPT:
                                return j.intl.format(j.t.iyhg2t, { helpURL: k.Z.getArticleURL(z.BhN.AGE_GATE) });
                            default:
                                return j.intl.format(j.t.n3QjDA, { helpURL: k.Z.getArticleURL(z.BhN.AGE_GATE) });
                        }
                    })();
                return (0, i.jsxs)(u.Y0X, {
                    transitionState: t,
                    size: u.CgR.SMALL,
                    'aria-labelledby': B,
                    children: [
                        (0, i.jsxs)(u.hzk, {
                            children: [
                                (0, i.jsxs)('div', {
                                    className: S.container,
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(559325),
                                            className: S.img
                                        }),
                                        (0, i.jsx)(u.X6q, {
                                            variant: 'heading-xl/semibold',
                                            className: S.title,
                                            id: B,
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
                                    children: (0, i.jsx)(C.Z, {
                                        label: j.intl.string(j.t.rhBeKS),
                                        wrapperClassName: S.birthday,
                                        name: 'date_of_birth',
                                        onChange: H,
                                        onPopulated: $,
                                        error: M,
                                        value: p,
                                        ref: Z,
                                        autoFocus: !0
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(u.mzw, {
                            justify: _.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)(u.zxk, {
                                    buttonRef: D,
                                    submitting: G,
                                    disabled: null == p,
                                    size: u.PhG.SMALL,
                                    onClick: X,
                                    children: j.intl.string(j.t.uBFuoq)
                                }),
                                (0, i.jsx)(u.zxk, {
                                    look: u.zxk.Looks.LINK,
                                    size: u.zxk.Sizes.NONE,
                                    color: u.zxk.Colors.PRIMARY,
                                    onClick: K,
                                    children: j.intl.string(j.t['1MrpWF'])
                                })
                            ]
                        })
                    ]
                });
            })()
          : (0, i.jsxs)(u.Y0X, {
                transitionState: u.Dvm.ENTERED,
                size: u.CgR.SMALL,
                'aria-labelledby': B,
                children: [
                    (0, i.jsx)(u.hzk, {
                        children: (0, i.jsxs)('div', {
                            className: S.confirmContainer,
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: S.confirmTitle,
                                    id: B,
                                    children: j.intl.format(j.t.wumolZ, { age: W })
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: j.intl.format(j.t.n3QjDA, { helpURL: k.Z.getArticleURL(z.BhN.AGE_GATE) })
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)(u.mzw, {
                        className: S.confirmFooter,
                        children: [
                            (0, i.jsx)(u.zxk, {
                                look: u.zxk.Looks.LINK,
                                size: u.zxk.Sizes.NONE,
                                color: u.zxk.Colors.PRIMARY,
                                onClick: () => Y(0),
                                children: j.intl.string(j.t.cfYCra)
                            }),
                            (0, i.jsx)(u.zxk, {
                                color: u.zxk.Colors.BRAND,
                                onClick: J,
                                children: j.intl.string(j.t['6tahio'])
                            })
                        ]
                    })
                ]
            });
}

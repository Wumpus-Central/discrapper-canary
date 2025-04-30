n.d(t, { Z: () => L }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(272573),
    o = n(442837),
    c = n(692547),
    u = n(215569),
    d = n(780384),
    m = n(481060),
    g = n(410030),
    p = n(367907),
    h = n(768762),
    f = n(626135),
    x = n(585483),
    b = n(999382),
    j = n(743475),
    _ = n(983135),
    v = n(8426),
    O = n(969632),
    C = n(570961),
    y = n(208665),
    N = n(359191),
    I = n(84658),
    E = n(142961),
    S = n(232764),
    T = n(729311),
    P = n(966301),
    w = n(976269),
    R = n(981631),
    Z = n(388032),
    D = n(179556);
function k(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L() {
    let e = (0, o.e7)([b.Z], () => b.Z.getGuild());
    return null == e ? null : (0, r.jsx)(M, { guild: e });
}
function M(e) {
    let { guild: t } = e,
        l = t.id,
        b = (0, o.e7)([N.Z], () => N.Z.getCurrentPage()),
        L = (0, E.Z)(l),
        {
            hasChanges: M,
            hasConfiguredAnythingForCurrentStep: G,
            hasErrors: U
        } = (0, o.cj)([N.Z], () => ({
            hasChanges: N.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: N.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: N.Z.hasErrors()
        })),
        B = (0, o.e7)([N.Z], () => {
            let e = (0, I.lg)(b);
            return null != e && !N.Z.isEducationUpsellDismissed(e);
        }),
        F = (0, g.ZP)(),
        z = i.useRef(null),
        [{ spring: H }, W] = (0, m.q_F)(() => ({ spring: 0 }), 'animate-always');
    i.useEffect(() => {
        function e() {
            W({
                spring: 1,
                config: a.config.gentle
            }),
                W({
                    spring: 0,
                    config: a.config.gentle,
                    delay: 1000
                });
        }
        return (
            x.S.subscribe(R.CkL.EMPHASIZE_NOTICE, e),
            () => {
                x.S.unsubscribe(R.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [W]);
    let V = (0, m.dQu)(c.Z.colors.BACKGROUND_FLOATING).hex(),
        Y = (0, m.dQu)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
        K = (0, d.wj)(F) ? V : Y,
        X = H.to({
            range: [0, 1],
            output: [(0, m.dQu)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, m.dQu)(c.Z.colors.TEXT_NORMAL).hex()]
        }),
        q = H.to({
            range: [0, 1],
            output: [K, (0, m.dQu)(c.Z.colors.STATUS_DANGER).hex()]
        });
    if (L) {
        if (b === I.PG.DEFAULT_CHANNELS) return (0, r.jsx)(T.j, {});
        else if (b === I.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(P.Zm, {});
        else if (b === I.PG.HOME_SETTINGS) return (0, r.jsx)(w.Z, {});
    }
    let Q = b === I.xh[I.xh.length - 1],
        J = async () => {
            let e = y.Z.advancedMode;
            if (M)
                try {
                    if (b === I.PG.DEFAULT_CHANNELS) await (0, j.DO)(t).then(() => (e ? (0, C.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (b === I.PG.CUSTOMIZATION_QUESTIONS) await (0, C.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (b === I.PG.HOME_SETTINGS) {
                        let e = O.Z.getSettings();
                        await (0, v.oo)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        $ = async () => {
            f.default.track(
                R.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                A(k({}, (0, p.hH)(l)), {
                    step: I.PG[b],
                    back: !1,
                    skip: !M
                })
            ),
                (0, _.Nb)((0, I.lg)(b)),
                (await J()) && (0, _.IG)(l, b);
        },
        ee = async () => {
            f.default.track(
                R.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                A(k({}, (0, p.hH)(l)), {
                    step: I.PG[b],
                    back: !0,
                    skip: !1
                })
            ),
                (await J()) && (0, _.Wy)(l, b);
        },
        et = null;
    B && (b === I.PG.SAFETY_CHECK ? (et = (0, r.jsx)(S.j7, {})) : b === I.PG.DEFAULT_CHANNELS ? (et = (0, r.jsx)(S.Io, {})) : b === I.PG.CUSTOMIZATION_QUESTIONS ? (et = (0, r.jsx)(S.cZ, {})) : b === I.PG.HOME_SETTINGS && (et = (0, r.jsx)(S.g6, {})));
    let en = (0, r.jsx)(m.zxk, {
            className: s()(D.button, { [D.hidden]: B }),
            color: m.zxk.Colors.PRIMARY,
            look: m.zxk.Looks.OUTLINED,
            size: m.zxk.Sizes.SMALL,
            onClick: ee,
            disabled: B || U,
            children: (0, r.jsxs)('span', {
                className: D.button,
                children: [
                    (0, r.jsx)(h.Z, {
                        className: D.arrow,
                        direction: h.Z.Directions.LEFT
                    }),
                    Z.intl.string(Z.t['13/7kZ'])
                ]
            })
        }),
        er = (0, r.jsx)(m.zxk, {
            className: D.button,
            color: G ? m.zxk.Colors.BRAND : m.zxk.Colors.PRIMARY,
            look: m.zxk.Looks.FILLED,
            size: m.zxk.Sizes.SMALL,
            onClick: $,
            disabled: B || U,
            children: (0, r.jsxs)(a.animated.span, {
                className: D.button,
                style: { color: X },
                children: [
                    G ? Z.intl.string(Z.t.PDTjLC) : Z.intl.string(Z.t['5WxrcX']),
                    (0, r.jsx)(h.Z, {
                        className: D.arrow,
                        direction: h.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, r.jsx)(u.W, {
        component: 'div',
        children: (0, r.jsx)(m.oXn, {
            className: D.noticeRegion,
            children: (0, r.jsx)(a.animated.div, {
                className: D.container,
                style: { backgroundColor: q },
                children: (0, r.jsxs)('div', {
                    className: D.flexContainer,
                    ref: z,
                    children: [
                        B
                            ? (0, r.jsxs)('div', {
                                  className: D.educationUpsellRoot,
                                  children: [
                                      (0, r.jsx)('img', {
                                          className: D.wumpus,
                                          src: n(33631),
                                          alt: 'wumpus'
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: D.educationUpsell,
                                          children: [et, (0, r.jsx)('div', { className: D.educationUpsellArrow })]
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(m.JcV, {
                            containerRef: z,
                            children: (0, r.jsxs)('div', {
                                className: D.actions,
                                children: [
                                    en,
                                    (0, r.jsxs)('div', {
                                        className: D.next,
                                        children: [
                                            U
                                                ? (0, r.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'status-warning',
                                                      children: Z.intl.string(Z.t.DhYsPD)
                                                  })
                                                : null,
                                            Q ? null : er
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}

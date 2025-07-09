(n.d(t, { Z: () => M }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(264738),
    o = n(442837),
    c = n(692547),
    d = n(215569),
    u = n(780384),
    m = n(755721),
    g = n(481060),
    p = n(410030),
    f = n(367907),
    h = n(768762),
    x = n(626135),
    b = n(585483),
    j = n(999382),
    _ = n(743475),
    v = n(983135),
    O = n(8426),
    C = n(969632),
    y = n(570961),
    N = n(208665),
    I = n(359191),
    E = n(84658),
    S = n(142961),
    T = n(232764),
    P = n(729311),
    w = n(966301),
    R = n(976269),
    Z = n(981631),
    D = n(388032),
    A = n(179556);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function k(e, t) {
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
function M() {
    let e = (0, o.e7)([j.Z], () => j.Z.getGuild());
    return null == e ? null : (0, r.jsx)(G, { guild: e });
}
function G(e) {
    let { guild: t } = e,
        l = t.id,
        j = (0, o.e7)([I.Z], () => I.Z.getCurrentPage()),
        M = (0, S.Z)(l),
        {
            hasChanges: G,
            hasConfiguredAnythingForCurrentStep: U,
            hasErrors: B
        } = (0, o.cj)([I.Z], () => ({
            hasChanges: I.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: I.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: I.Z.hasErrors()
        })),
        F = (0, o.e7)([I.Z], () => {
            let e = (0, E.lg)(j);
            return null != e && !I.Z.isEducationUpsellDismissed(e);
        }),
        z = (0, p.ZP)(),
        H = i.useRef(null),
        [{ spring: V }, W] = (0, g.q_F)(() => ({ spring: 0 }), 'animate-always');
    i.useEffect(() => {
        function e() {
            (W({
                spring: 1,
                config: a.config.gentle
            }),
                W({
                    spring: 0,
                    config: a.config.gentle,
                    delay: 1000
                }));
        }
        return (
            b.S.subscribe(Z.CkL.EMPHASIZE_NOTICE, e),
            () => {
                b.S.unsubscribe(Z.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [W]);
    let Y = (0, g.dQu)(c.Z.colors.BACKGROUND_SURFACE_HIGH).hex(),
        K = (0, g.dQu)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
        X = (0, u.wj)(z) ? Y : K,
        q = V.to({
            range: [0, 1],
            output: [(0, g.dQu)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, g.dQu)(c.Z.colors.TEXT_DEFAULT).hex()]
        }),
        Q = V.to({
            range: [0, 1],
            output: [X, (0, g.dQu)(c.Z.colors.STATUS_DANGER).hex()]
        });
    if (M) {
        if (j === E.PG.DEFAULT_CHANNELS) return (0, r.jsx)(P.j, {});
        else if (j === E.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(w.Zm, {});
        else if (j === E.PG.HOME_SETTINGS) return (0, r.jsx)(R.Z, {});
    }
    let J = j === E.xh[E.xh.length - 1],
        $ = async () => {
            let e = N.Z.advancedMode;
            if (G)
                try {
                    if (j === E.PG.DEFAULT_CHANNELS) await (0, _.DO)(t).then(() => (e ? (0, y.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (j === E.PG.CUSTOMIZATION_QUESTIONS) await (0, y.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (j === E.PG.HOME_SETTINGS) {
                        let e = C.Z.getSettings();
                        await (0, O.oo)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        ee = async () => {
            (x.default.track(
                Z.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                k(L({}, (0, f.hH)(l)), {
                    step: E.PG[j],
                    back: !1,
                    skip: !G
                })
            ),
                (0, v.Nb)((0, E.lg)(j)),
                (await $()) && (0, v.IG)(l, j));
        },
        et = async () => {
            (x.default.track(
                Z.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                k(L({}, (0, f.hH)(l)), {
                    step: E.PG[j],
                    back: !0,
                    skip: !1
                })
            ),
                (await $()) && (0, v.Wy)(l, j));
        },
        en = null;
    F && (j === E.PG.SAFETY_CHECK ? (en = (0, r.jsx)(T.j7, {})) : j === E.PG.DEFAULT_CHANNELS ? (en = (0, r.jsx)(T.Io, {})) : j === E.PG.CUSTOMIZATION_QUESTIONS ? (en = (0, r.jsx)(T.cZ, {})) : j === E.PG.HOME_SETTINGS && (en = (0, r.jsx)(T.g6, {})));
    let er = (0, r.jsx)(m.zx, {
            className: s()(A.button, { [A.hidden]: F }),
            color: m.zx.Colors.PRIMARY,
            look: m.zx.Looks.OUTLINED,
            size: m.zx.Sizes.SMALL,
            onClick: et,
            disabled: F || B,
            children: (0, r.jsxs)('span', {
                className: A.button,
                children: [
                    (0, r.jsx)(h.Z, {
                        className: A.arrow,
                        direction: h.Z.Directions.LEFT
                    }),
                    D.intl.string(D.t['13/7kZ'])
                ]
            })
        }),
        ei = (0, r.jsx)(m.zx, {
            className: A.button,
            color: U ? m.zx.Colors.BRAND : m.zx.Colors.PRIMARY,
            look: m.zx.Looks.FILLED,
            size: m.zx.Sizes.SMALL,
            onClick: ee,
            disabled: F || B,
            children: (0, r.jsxs)(a.animated.span, {
                className: A.button,
                style: { color: q },
                children: [
                    U ? D.intl.string(D.t.PDTjLC) : D.intl.string(D.t['5WxrcX']),
                    (0, r.jsx)(h.Z, {
                        className: A.arrow,
                        direction: h.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, r.jsx)(d.W, {
        component: 'div',
        children: (0, r.jsx)(g.oXn, {
            className: A.noticeRegion,
            children: (0, r.jsx)(a.animated.div, {
                className: A.container,
                style: { backgroundColor: Q },
                children: (0, r.jsxs)('div', {
                    className: A.flexContainer,
                    ref: H,
                    children: [
                        F
                            ? (0, r.jsxs)('div', {
                                  className: A.educationUpsellRoot,
                                  children: [
                                      (0, r.jsx)('img', {
                                          className: A.wumpus,
                                          src: n(33631),
                                          alt: 'wumpus'
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: A.educationUpsell,
                                          children: [en, (0, r.jsx)('div', { className: A.educationUpsellArrow })]
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(g.JcV, {
                            containerRef: H,
                            children: (0, r.jsxs)('div', {
                                className: A.actions,
                                children: [
                                    er,
                                    (0, r.jsxs)('div', {
                                        className: A.next,
                                        children: [
                                            B
                                                ? (0, r.jsx)(g.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'status-warning',
                                                      children: D.intl.string(D.t.DhYsPD)
                                                  })
                                                : null,
                                            J ? null : ei
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

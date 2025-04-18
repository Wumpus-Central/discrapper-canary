n.d(t, { Z: () => W }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(200100),
    o = n(442837),
    c = n(692547),
    d = n(215569),
    u = n(780384),
    m = n(481060),
    g = n(410030),
    p = n(367907),
    h = n(768762),
    f = n(626135),
    x = n(585483),
    b = n(999382),
    j = n(743475),
    N = n(983135),
    _ = n(8426),
    v = n(969632),
    O = n(570961),
    C = n(208665),
    y = n(359191),
    I = n(84658),
    E = n(142961),
    S = n(232764),
    T = n(729311),
    P = n(966301),
    w = n(976269),
    R = n(981631),
    Z = n(388032),
    D = n(482027);
function A(e) {
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
function W() {
    let e = (0, o.e7)([b.Z], () => b.Z.getGuild());
    return null == e ? null : (0, r.jsx)(L, { guild: e });
}
function L(e) {
    let { guild: t } = e,
        s = t.id,
        b = (0, o.e7)([y.Z], () => y.Z.getCurrentPage()),
        W = (0, E.Z)(s),
        {
            hasChanges: L,
            hasConfiguredAnythingForCurrentStep: M,
            hasErrors: G
        } = (0, o.cj)([y.Z], () => ({
            hasChanges: y.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: y.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: y.Z.hasErrors()
        })),
        U = (0, o.e7)([y.Z], () => {
            let e = (0, I.lg)(b);
            return null != e && !y.Z.isEducationUpsellDismissed(e);
        }),
        B = (0, g.ZP)(),
        F = i.useRef(null),
        [{ spring: z }, H] = (0, m.q_F)(() => ({ spring: 0 }), 'animate-always');
    i.useEffect(() => {
        function e() {
            H({
                spring: 1,
                config: a.config.gentle
            }),
                H({
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
    }, [H]);
    let V = (0, m.dQu)(c.Z.colors.BACKGROUND_FLOATING).hex(),
        Y = (0, m.dQu)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
        K = (0, u.wj)(B) ? V : Y,
        X = z.to({
            range: [0, 1],
            output: [(0, m.dQu)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, m.dQu)(c.Z.colors.TEXT_NORMAL).hex()]
        }),
        q = z.to({
            range: [0, 1],
            output: [K, (0, m.dQu)(c.Z.colors.STATUS_DANGER).hex()]
        });
    if (W) {
        if (b === I.PG.DEFAULT_CHANNELS) return (0, r.jsx)(T.j, {});
        else if (b === I.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(P.Zm, {});
        else if (b === I.PG.HOME_SETTINGS) return (0, r.jsx)(w.Z, {});
    }
    let J = b === I.xh[I.xh.length - 1],
        Q = async () => {
            let e = C.Z.advancedMode;
            if (L)
                try {
                    if (b === I.PG.DEFAULT_CHANNELS) await (0, j.DO)(t).then(() => (e ? (0, O.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (b === I.PG.CUSTOMIZATION_QUESTIONS) await (0, O.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (b === I.PG.HOME_SETTINGS) {
                        let e = v.Z.getSettings();
                        await (0, _.oo)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        $ = async () => {
            f.default.track(
                R.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                k(A({}, (0, p.hH)(s)), {
                    step: I.PG[b],
                    back: !1,
                    skip: !L
                })
            ),
                (0, N.Nb)((0, I.lg)(b)),
                (await Q()) && (0, N.IG)(s, b);
        },
        ee = async () => {
            f.default.track(
                R.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                k(A({}, (0, p.hH)(s)), {
                    step: I.PG[b],
                    back: !0,
                    skip: !1
                })
            ),
                (await Q()) && (0, N.Wy)(s, b);
        },
        et = null;
    U && (b === I.PG.SAFETY_CHECK ? (et = (0, r.jsx)(S.j7, {})) : b === I.PG.DEFAULT_CHANNELS ? (et = (0, r.jsx)(S.Io, {})) : b === I.PG.CUSTOMIZATION_QUESTIONS ? (et = (0, r.jsx)(S.cZ, {})) : b === I.PG.HOME_SETTINGS && (et = (0, r.jsx)(S.g6, {})));
    let en = (0, r.jsx)(m.zxk, {
            className: l()(D.button, { [D.hidden]: U }),
            color: m.zxk.Colors.PRIMARY,
            look: m.zxk.Looks.OUTLINED,
            size: m.zxk.Sizes.SMALL,
            onClick: ee,
            disabled: U || G,
            children: (0, r.jsxs)('span', {
                className: D.button,
                children: [
                    (0, r.jsx)(h.Z, {
                        className: D.arrow,
                        direction: h.Z.Directions.LEFT
                    }),
                    Z.NW.string(Z.t['13/7kZ'])
                ]
            })
        }),
        er = (0, r.jsx)(m.zxk, {
            className: D.button,
            color: M ? m.zxk.Colors.BRAND : m.zxk.Colors.PRIMARY,
            look: m.zxk.Looks.FILLED,
            size: m.zxk.Sizes.SMALL,
            onClick: $,
            disabled: U || G,
            children: (0, r.jsxs)(a.animated.span, {
                className: D.button,
                style: { color: X },
                children: [
                    M ? Z.NW.string(Z.t.PDTjLC) : Z.NW.string(Z.t['5WxrcX']),
                    (0, r.jsx)(h.Z, {
                        className: D.arrow,
                        direction: h.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, r.jsx)(d.W, {
        component: 'div',
        children: (0, r.jsx)(m.oXn, {
            className: D.noticeRegion,
            children: (0, r.jsx)(a.animated.div, {
                className: D.container,
                style: { backgroundColor: q },
                children: (0, r.jsxs)('div', {
                    className: D.flexContainer,
                    ref: F,
                    children: [
                        U
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
                            containerRef: F,
                            children: (0, r.jsxs)('div', {
                                className: D.actions,
                                children: [
                                    en,
                                    (0, r.jsxs)('div', {
                                        className: D.next,
                                        children: [
                                            G
                                                ? (0, r.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'status-warning',
                                                      children: Z.NW.string(Z.t.DhYsPD)
                                                  })
                                                : null,
                                            J ? null : er
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

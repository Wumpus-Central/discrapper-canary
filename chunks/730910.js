(n.d(t, { Z: () => D }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(104721),
    s = n(442837),
    a = n(692547),
    o = n(215569),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(367907),
    g = n(626135),
    p = n(585483),
    f = n(999382),
    h = n(743475),
    x = n(983135),
    b = n(8426),
    j = n(969632),
    _ = n(570961),
    v = n(208665),
    O = n(359191),
    C = n(84658),
    y = n(142961),
    N = n(232764),
    I = n(729311),
    E = n(966301),
    S = n(976269),
    T = n(981631),
    P = n(388032),
    w = n(179556);
function R(e) {
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
function Z(e, t) {
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
function D() {
    let e = (0, s.e7)([f.Z], () => f.Z.getGuild());
    return null == e ? null : (0, r.jsx)(A, { guild: e });
}
function A(e) {
    let { guild: t } = e,
        f = t.id,
        D = (0, s.e7)([O.Z], () => O.Z.getCurrentPage()),
        A = (0, y.Z)(f),
        {
            hasChanges: L,
            hasConfiguredAnythingForCurrentStep: k,
            hasErrors: M
        } = (0, s.cj)([O.Z], () => ({
            hasChanges: O.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: O.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: O.Z.hasErrors()
        })),
        G = (0, s.e7)([O.Z], () => {
            let e = (0, C.lg)(D);
            return null != e && !O.Z.isEducationUpsellDismissed(e);
        }),
        U = (0, u.ZP)(),
        B = i.useRef(null),
        [{ spring: F }, H] = (0, d.q_F)(() => ({ spring: 0 }), 'animate-always');
    i.useEffect(() => {
        function e() {
            (H({
                spring: 1,
                config: l.config.gentle
            }),
                H({
                    spring: 0,
                    config: l.config.gentle,
                    delay: 1000
                }));
        }
        return (
            p.S.subscribe(T.CkL.EMPHASIZE_NOTICE, e),
            () => {
                p.S.unsubscribe(T.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [H]);
    let z = (0, d.dQu)(a.Z.colors.BACKGROUND_SURFACE_HIGH).hex(),
        V = (0, d.dQu)(a.Z.unsafe_rawColors.PRIMARY_160).hex(),
        W = (0, c.wj)(U) ? z : V,
        Y = F.to({
            range: [0, 1],
            output: [W, (0, d.dQu)(a.Z.colors.STATUS_DANGER).hex()]
        });
    if (A) {
        if (D === C.PG.DEFAULT_CHANNELS) return (0, r.jsx)(I.j, {});
        else if (D === C.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(E.Zm, {});
        else if (D === C.PG.HOME_SETTINGS) return (0, r.jsx)(S.Z, {});
    }
    let K = D === C.xh[C.xh.length - 1],
        X = async () => {
            let e = v.Z.advancedMode;
            if (L)
                try {
                    if (D === C.PG.DEFAULT_CHANNELS) await (0, h.DO)(t).then(() => (e ? (0, _.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (D === C.PG.CUSTOMIZATION_QUESTIONS) await (0, _.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (D === C.PG.HOME_SETTINGS) {
                        let e = j.Z.getSettings();
                        await (0, b.oo)(t.id, e);
                    }
                } catch (e) {
                    return !1;
                }
            return !0;
        },
        q = async () => {
            (g.default.track(
                T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                Z(R({}, (0, m.hH)(f)), {
                    step: C.PG[D],
                    back: !1,
                    skip: !L
                })
            ),
                (0, x.Nb)((0, C.lg)(D)),
                (await X()) && (0, x.IG)(f, D));
        },
        Q = async () => {
            (g.default.track(
                T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                Z(R({}, (0, m.hH)(f)), {
                    step: C.PG[D],
                    back: !0,
                    skip: !1
                })
            ),
                (await X()) && (0, x.Wy)(f, D));
        },
        J = null;
    G && (D === C.PG.SAFETY_CHECK ? (J = (0, r.jsx)(N.j7, {})) : D === C.PG.DEFAULT_CHANNELS ? (J = (0, r.jsx)(N.Io, {})) : D === C.PG.CUSTOMIZATION_QUESTIONS ? (J = (0, r.jsx)(N.cZ, {})) : D === C.PG.HOME_SETTINGS && (J = (0, r.jsx)(N.g6, {})));
    let $ = (0, r.jsx)('div', {
            className: G ? w.hidden : void 0,
            children: (0, r.jsx)(d.zxk, {
                size: 'sm',
                variant: 'secondary',
                text: P.intl.string(P.t['13/7kZ']),
                icon: d.whL,
                iconPosition: 'start',
                onClick: Q,
                disabled: G || M
            })
        }),
        ee = (0, r.jsx)(d.zxk, {
            size: 'sm',
            variant: k ? 'primary' : 'secondary',
            text: k ? P.intl.string(P.t.PDTjLC) : P.intl.string(P.t['5WxrcX']),
            icon: d.ZSh,
            iconPosition: 'end',
            onClick: q,
            disabled: G || M
        });
    return (0, r.jsx)(o.W, {
        component: 'div',
        children: (0, r.jsx)(d.oXn, {
            className: w.noticeRegion,
            children: (0, r.jsx)(l.animated.div, {
                className: w.container,
                style: { backgroundColor: Y },
                children: (0, r.jsxs)('div', {
                    className: w.flexContainer,
                    ref: B,
                    children: [
                        G
                            ? (0, r.jsxs)('div', {
                                  className: w.educationUpsellRoot,
                                  children: [
                                      (0, r.jsx)('img', {
                                          className: w.wumpus,
                                          src: n(33631),
                                          alt: 'wumpus'
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: w.educationUpsell,
                                          children: [J, (0, r.jsx)('div', { className: w.educationUpsellArrow })]
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(d.JcV, {
                            containerRef: B,
                            children: (0, r.jsxs)('div', {
                                className: w.actions,
                                children: [
                                    $,
                                    (0, r.jsxs)('div', {
                                        className: w.next,
                                        children: [
                                            M
                                                ? (0, r.jsx)(d.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'status-warning',
                                                      children: P.intl.string(P.t.DhYsPD)
                                                  })
                                                : null,
                                            K ? null : ee
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

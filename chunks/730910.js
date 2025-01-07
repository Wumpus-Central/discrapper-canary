n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(666912),
    o = n(442837),
    c = n(692547),
    d = n(215569),
    u = n(780384),
    m = n(481060),
    h = n(410030),
    g = n(367907),
    x = n(768762),
    p = n(626135),
    f = n(585483),
    C = n(999382),
    v = n(743475),
    _ = n(983135),
    I = n(8426),
    N = n(969632),
    T = n(570961),
    j = n(208665),
    b = n(359191),
    S = n(84658),
    E = n(142961),
    R = n(232764),
    y = n(729311),
    A = n(850864),
    Z = n(966301),
    L = n(981631),
    D = n(388032),
    O = n(203035);
function P() {
    let e = (0, o.e7)([C.Z], () => C.Z.getGuild());
    return null == e ? null : (0, i.jsx)(k, { guild: e });
}
function k(e) {
    let { guild: t } = e,
        l = t.id,
        C = (0, o.e7)([b.Z], () => b.Z.getCurrentPage()),
        P = (0, E.Z)(l),
        {
            hasChanges: k,
            hasConfiguredAnythingForCurrentStep: M,
            hasErrors: w
        } = (0, o.cj)([b.Z], () => ({
            hasChanges: b.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: b.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: b.Z.hasErrors()
        })),
        B = (0, o.e7)([b.Z], () => {
            let e = (0, S.lg)(C);
            return null != e && !b.Z.isEducationUpsellDismissed(e);
        }),
        U = (0, h.ZP)(),
        G = r.useRef(null),
        [{ spring: F }, H] = (0, m.useSpring)(() => ({ spring: 0 }), 'animate-always');
    r.useEffect(() => {
        function e() {
            H({
                spring: 1,
                config: s.config.gentle
            }),
                H({
                    spring: 0,
                    config: s.config.gentle,
                    delay: 1000
                });
        }
        return (
            f.S.subscribe(L.CkL.EMPHASIZE_NOTICE, e),
            () => {
                f.S.unsubscribe(L.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [H]);
    let z = (0, m.useToken)(c.Z.colors.BACKGROUND_FLOATING).hex(),
        W = (0, m.useToken)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
        V = (0, u.wj)(U) ? z : W,
        Y = F.to({
            range: [0, 1],
            output: [(0, m.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, m.useToken)(c.Z.colors.TEXT_NORMAL).hex()]
        }),
        K = F.to({
            range: [0, 1],
            output: [V, (0, m.useToken)(c.Z.colors.STATUS_DANGER).hex()]
        });
    if (P) {
        if (C === S.PG.DEFAULT_CHANNELS) return (0, i.jsx)(y.j, {});
        if (C === S.PG.CUSTOMIZATION_QUESTIONS) return (0, i.jsx)(Z.Zm, {});
        else if (C === S.PG.HOME_SETTINGS) return (0, i.jsx)(A.T, {});
    }
    let q = C === S.xh[S.xh.length - 1],
        X = async () => {
            let e = j.Z.advancedMode;
            if (k)
                try {
                    if (C === S.PG.DEFAULT_CHANNELS) await (0, v.DO)(t).then(() => (e ? (0, T.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (C === S.PG.CUSTOMIZATION_QUESTIONS) await (0, T.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (C === S.PG.HOME_SETTINGS) {
                        let e = N.Z.getSettings();
                        await (0, I.oo)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        },
        Q = async () => {
            p.default.track(L.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, g.hH)(l),
                step: S.PG[C],
                back: !1,
                skip: !k
            }),
                (0, _.Nb)((0, S.lg)(C)),
                (await X()) && (0, _.IG)(l, C);
        },
        J = async () => {
            p.default.track(L.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, g.hH)(l),
                step: S.PG[C],
                back: !0,
                skip: !1
            }),
                (await X()) && (0, _.Wy)(l, C);
        },
        $ = null;
    B && (C === S.PG.SAFETY_CHECK ? ($ = (0, i.jsx)(R.j7, {})) : C === S.PG.DEFAULT_CHANNELS ? ($ = (0, i.jsx)(R.Io, {})) : C === S.PG.CUSTOMIZATION_QUESTIONS ? ($ = (0, i.jsx)(R.cZ, {})) : C === S.PG.HOME_SETTINGS && ($ = (0, i.jsx)(R.g6, {})));
    let ee = (0, i.jsx)(m.Button, {
            className: a()(O.button, { [O.hidden]: B }),
            color: m.Button.Colors.PRIMARY,
            look: m.Button.Looks.OUTLINED,
            size: m.Button.Sizes.SMALL,
            onClick: J,
            disabled: B || w,
            children: (0, i.jsxs)('span', {
                className: O.button,
                children: [
                    (0, i.jsx)(x.Z, {
                        className: O.arrow,
                        direction: x.Z.Directions.LEFT
                    }),
                    D.intl.string(D.t['13/7kZ'])
                ]
            })
        }),
        et = (0, i.jsx)(m.Button, {
            className: O.button,
            color: M ? m.Button.Colors.BRAND : m.Button.Colors.PRIMARY,
            look: m.Button.Looks.FILLED,
            size: m.Button.Sizes.SMALL,
            onClick: Q,
            disabled: B || w,
            children: (0, i.jsxs)(s.animated.span, {
                className: O.button,
                style: { color: Y },
                children: [
                    M ? D.intl.string(D.t.PDTjLC) : D.intl.string(D.t['5WxrcX']),
                    (0, i.jsx)(x.Z, {
                        className: O.arrow,
                        direction: x.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, i.jsx)(d.W, {
        component: 'div',
        children: (0, i.jsx)(m.SlideIn, {
            className: a()(O.noticeRegion),
            children: (0, i.jsx)(s.animated.div, {
                className: O.container,
                style: { backgroundColor: K },
                children: (0, i.jsxs)('div', {
                    className: O.flexContainer,
                    ref: G,
                    children: [
                        B
                            ? (0, i.jsxs)('div', {
                                  className: O.educationUpsellRoot,
                                  children: [
                                      (0, i.jsx)('img', {
                                          className: a()(O.wumpus),
                                          src: n(33631),
                                          alt: 'wumpus'
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: O.educationUpsell,
                                          children: [$, (0, i.jsx)('div', { className: O.educationUpsellArrow })]
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(m.FocusRingScope, {
                            containerRef: G,
                            children: (0, i.jsxs)('div', {
                                className: O.actions,
                                children: [
                                    ee,
                                    (0, i.jsxs)('div', {
                                        className: O.next,
                                        children: [
                                            w
                                                ? (0, i.jsx)(m.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'status-warning',
                                                      children: D.intl.string(D.t.DhYsPD)
                                                  })
                                                : null,
                                            q ? null : et
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

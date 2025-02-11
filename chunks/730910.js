n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(642128),
    o = n(442837),
    c = n(692547),
    d = n(215569),
    u = n(780384),
    m = n(481060),
    h = n(410030),
    g = n(367907),
    x = n(768762),
    p = n(626135),
    _ = n(585483),
    C = n(999382),
    f = n(743475),
    v = n(983135),
    N = n(8426),
    j = n(969632),
    I = n(570961),
    E = n(208665),
    b = n(359191),
    T = n(84658),
    S = n(142961),
    R = n(232764),
    Z = n(729311),
    y = n(966301),
    A = n(976269),
    L = n(981631),
    D = n(388032),
    k = n(299602);
function O() {
    let e = (0, o.e7)([C.Z], () => C.Z.getGuild());
    return null == e ? null : (0, i.jsx)(P, { guild: e });
}
function P(e) {
    let { guild: t } = e,
        l = t.id,
        C = (0, o.e7)([b.Z], () => b.Z.getCurrentPage()),
        O = (0, S.Z)(l),
        {
            hasChanges: P,
            hasConfiguredAnythingForCurrentStep: w,
            hasErrors: M
        } = (0, o.cj)([b.Z], () => ({
            hasChanges: b.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: b.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: b.Z.hasErrors()
        })),
        U = (0, o.e7)([b.Z], () => {
            let e = (0, T.lg)(C);
            return null != e && !b.Z.isEducationUpsellDismissed(e);
        }),
        G = (0, h.ZP)(),
        B = r.useRef(null),
        [{ spring: F }, z] = (0, m.q_F)(() => ({ spring: 0 }), 'animate-always');
    r.useEffect(() => {
        function e() {
            z({
                spring: 1,
                config: a.config.gentle
            }),
                z({
                    spring: 0,
                    config: a.config.gentle,
                    delay: 1000
                });
        }
        return (
            _.S.subscribe(L.CkL.EMPHASIZE_NOTICE, e),
            () => {
                _.S.unsubscribe(L.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [z]);
    let H = (0, m.dQu)(c.Z.colors.BACKGROUND_FLOATING).hex(),
        V = (0, m.dQu)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
        W = (0, u.wj)(G) ? H : V,
        Y = F.to({
            range: [0, 1],
            output: [(0, m.dQu)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, m.dQu)(c.Z.colors.TEXT_NORMAL).hex()]
        }),
        K = F.to({
            range: [0, 1],
            output: [W, (0, m.dQu)(c.Z.colors.STATUS_DANGER).hex()]
        });
    if (O) {
        if (C === T.PG.DEFAULT_CHANNELS) return (0, i.jsx)(Z.j, {});
        if (C === T.PG.CUSTOMIZATION_QUESTIONS) return (0, i.jsx)(y.Zm, {});
        if (C === T.PG.HOME_SETTINGS) return (0, i.jsx)(A.Z, {});
    }
    let q = C === T.xh[T.xh.length - 1],
        X = async () => {
            let e = E.Z.advancedMode;
            if (P)
                try {
                    if (C === T.PG.DEFAULT_CHANNELS) await (0, f.DO)(t).then(() => (e ? (0, I.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (C === T.PG.CUSTOMIZATION_QUESTIONS) await (0, I.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (C === T.PG.HOME_SETTINGS) {
                        let e = j.Z.getSettings();
                        await (0, N.oo)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        },
        Q = async () => {
            p.default.track(L.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, g.hH)(l),
                step: T.PG[C],
                back: !1,
                skip: !P
            }),
                (0, v.Nb)((0, T.lg)(C)),
                (await X()) && (0, v.IG)(l, C);
        },
        J = async () => {
            p.default.track(L.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, g.hH)(l),
                step: T.PG[C],
                back: !0,
                skip: !1
            }),
                (await X()) && (0, v.Wy)(l, C);
        },
        $ = null;
    U && (C === T.PG.SAFETY_CHECK ? ($ = (0, i.jsx)(R.j7, {})) : C === T.PG.DEFAULT_CHANNELS ? ($ = (0, i.jsx)(R.Io, {})) : C === T.PG.CUSTOMIZATION_QUESTIONS ? ($ = (0, i.jsx)(R.cZ, {})) : C === T.PG.HOME_SETTINGS && ($ = (0, i.jsx)(R.g6, {})));
    let ee = (0, i.jsx)(m.zxk, {
            className: s()(k.button, { [k.hidden]: U }),
            color: m.zxk.Colors.PRIMARY,
            look: m.zxk.Looks.OUTLINED,
            size: m.zxk.Sizes.SMALL,
            onClick: J,
            disabled: U || M,
            children: (0, i.jsxs)('span', {
                className: k.button,
                children: [
                    (0, i.jsx)(x.Z, {
                        className: k.arrow,
                        direction: x.Z.Directions.LEFT
                    }),
                    D.intl.string(D.t['13/7kZ'])
                ]
            })
        }),
        et = (0, i.jsx)(m.zxk, {
            className: k.button,
            color: w ? m.zxk.Colors.BRAND : m.zxk.Colors.PRIMARY,
            look: m.zxk.Looks.FILLED,
            size: m.zxk.Sizes.SMALL,
            onClick: Q,
            disabled: U || M,
            children: (0, i.jsxs)(a.animated.span, {
                className: k.button,
                style: { color: Y },
                children: [
                    w ? D.intl.string(D.t.PDTjLC) : D.intl.string(D.t['5WxrcX']),
                    (0, i.jsx)(x.Z, {
                        className: k.arrow,
                        direction: x.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, i.jsx)(d.W, {
        component: 'div',
        children: (0, i.jsx)(m.oXn, {
            className: s()(k.noticeRegion),
            children: (0, i.jsx)(a.animated.div, {
                className: k.container,
                style: { backgroundColor: K },
                children: (0, i.jsxs)('div', {
                    className: k.flexContainer,
                    ref: B,
                    children: [
                        U
                            ? (0, i.jsxs)('div', {
                                  className: k.educationUpsellRoot,
                                  children: [
                                      (0, i.jsx)('img', {
                                          className: s()(k.wumpus),
                                          src: n(33631),
                                          alt: 'wumpus'
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: k.educationUpsell,
                                          children: [$, (0, i.jsx)('div', { className: k.educationUpsellArrow })]
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(m.JcV, {
                            containerRef: B,
                            children: (0, i.jsxs)('div', {
                                className: k.actions,
                                children: [
                                    ee,
                                    (0, i.jsxs)('div', {
                                        className: k.next,
                                        children: [
                                            M
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

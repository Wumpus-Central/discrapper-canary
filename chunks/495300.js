n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(755721),
    d = n(481060),
    u = n(266454),
    m = n(768762),
    g = n(999382),
    p = n(743475),
    h = n(983135),
    f = n(570961),
    x = n(208665),
    b = n(359191),
    j = n(84658),
    v = n(142961),
    _ = n(729311),
    O = n(850864),
    y = n(729995),
    C = n(966301),
    N = n(707076),
    I = n(213956),
    E = n(388032),
    S = n(184344);
function T() {
    let e = (0, s.e7)([g.Z], () => g.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(P, { guildId: e });
}
function P(e) {
    let t,
        { guildId: n } = e,
        l = (0, s.e7)([b.Z], () => b.Z.getCurrentPage()),
        g = (0, s.e7)([b.Z], () => {
            let e = (0, j.lg)(l);
            return null != e && !b.Z.isEducationUpsellDismissed(e);
        }),
        x = (0, v.Z)(n),
        T = !x && g;
    switch (
        (i.useEffect(() => {
            (0, u.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case j.PG.LANDING:
            t = x
                ? (0, r.jsx)(y.Z, {
                      completed: !0,
                      guildId: n
                  })
                : (0, r.jsx)(N.Z, {});
            break;
        case j.PG.SAFETY_CHECK:
            t = (0, r.jsx)(I.Z, {});
            break;
        case j.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(_.Z, { saveOnClose: !x });
            break;
        case j.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(C.ZP, { saveOnClose: !x });
            break;
        case j.PG.HOME_SETTINGS:
            t = (0, r.jsx)(O.Z, { saveOnClose: !x });
            break;
        case j.PG.REVIEW:
            t = (0, r.jsx)(y.Z, {
                completed: x,
                guildId: n
            });
    }
    return (0, r.jsxs)('div', {
        className: a()(S.onboardingContainer, { [S.upsellOnTop]: T }),
        children: [
            !x &&
                l !== j.PG.LANDING &&
                (0, r.jsx)(w, {
                    setOnboardingStep: h.$K,
                    page: l,
                    homeSettingsEnabled: !0
                }),
            x &&
                l !== j.PG.LANDING &&
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(c.zx, {
                        innerClassName: S.backButton,
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.MIN,
                        onClick: () => {
                            ((0, f.NB)(), (0, p.BG)(), (0, h.$K)(j.PG.LANDING));
                        },
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: S.arrow,
                                direction: m.Z.Directions.LEFT
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: E.intl.string(E.t['13/7kZ'])
                            })
                        ]
                    })
                }),
            (0, r.jsx)('div', { children: t })
        ]
    });
}
function w(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: i } = e,
        l = (0, s.e7)([b.Z], () => b.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        c = (0, s.e7)([x.Z], () => x.Z.advancedMode);
    return (0, r.jsxs)('div', {
        className: S.progressContainer,
        children: [
            (0, r.jsxs)(d.P3F, {
                className: a()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(j.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)('div', { className: a()(S.progressBar, { [S.progressBarCurrent]: t === j.PG.SAFETY_CHECK }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === j.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: E.intl.format(E.t.Me5MmZ, { stepNumber: 1 })
                    })
                ]
            }),
            (0, r.jsxs)(d.P3F, {
                className: a()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(j.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)('div', { className: a()(S.progressBar, { [S.progressBarCurrent]: t === j.PG.DEFAULT_CHANNELS }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === j.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: c ? E.intl.formatToPlainString(E.t['8mGhOz'], { stepNumber: 2 }) : E.intl.formatToPlainString(E.t.vxpuTU, { stepNumber: 2 })
                    })
                ]
            }),
            (0, r.jsxs)(d.P3F, {
                className: a()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(j.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)('div', { className: a()(S.progressBar, { [S.progressBarCurrent]: t === j.PG.CUSTOMIZATION_QUESTIONS }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === j.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: c ? E.intl.formatToPlainString(E.t.vb6J5u, { stepNumber: 3 }) : E.intl.formatToPlainString(E.t.ZpdQqK, { stepNumber: 3 })
                    })
                ]
            }),
            i &&
                (0, r.jsxs)(d.P3F, {
                    className: a()(S.progressBarContainer, S.clickableProgressBar),
                    onClick: o(j.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)('div', { className: a()(S.progressBar, { [S.progressBarCurrent]: t === j.PG.HOME_SETTINGS }) }),
                        (0, r.jsx)(d.Text, {
                            color: t === j.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
                            variant: 'text-xs/medium',
                            children: E.intl.format(E.t.KVOukp, { stepNumber: 4 })
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: S.progressBarContainer,
                children: [
                    (0, r.jsx)('div', { className: a()(S.progressBar, { [S.progressBarCurrent]: t === j.PG.REVIEW }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === j.PG.REVIEW ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: E.intl.format(E.t.oVzkiI, { stepNumber: 3 + +!!i + 1 })
                    })
                ]
            })
        ]
    });
}

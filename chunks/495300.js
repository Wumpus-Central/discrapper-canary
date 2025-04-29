n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    u = n(605236),
    d = n(768762),
    m = n(999382),
    g = n(743475),
    p = n(983135),
    h = n(570961),
    f = n(208665),
    x = n(359191),
    b = n(84658),
    j = n(142961),
    _ = n(729311),
    v = n(850864),
    O = n(729995),
    C = n(966301),
    y = n(707076),
    N = n(213956),
    I = n(388032),
    E = n(184344);
function S() {
    let e = (0, a.e7)([m.Z], () => m.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(T, { guildId: e });
}
function T(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.e7)([x.Z], () => x.Z.getCurrentPage()),
        m = (0, a.e7)([x.Z], () => {
            let e = (0, b.lg)(l);
            return null != e && !x.Z.isEducationUpsellDismissed(e);
        }),
        f = (0, j.Z)(n),
        S = !f && m;
    switch (
        (i.useEffect(() => {
            (0, u.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case b.PG.LANDING:
            t = f
                ? (0, r.jsx)(O.Z, {
                      completed: !0,
                      guildId: n
                  })
                : (0, r.jsx)(y.Z, {});
            break;
        case b.PG.SAFETY_CHECK:
            t = (0, r.jsx)(N.Z, {});
            break;
        case b.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(_.Z, { saveOnClose: !f });
            break;
        case b.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(C.ZP, { saveOnClose: !f });
            break;
        case b.PG.HOME_SETTINGS:
            t = (0, r.jsx)(v.Z, { saveOnClose: !f });
            break;
        case b.PG.REVIEW:
            t = (0, r.jsx)(O.Z, {
                completed: f,
                guildId: n
            });
    }
    return (0, r.jsxs)('div', {
        className: s()(E.onboardingContainer, { [E.upsellOnTop]: S }),
        children: [
            !f &&
                l !== b.PG.LANDING &&
                (0, r.jsx)(P, {
                    setOnboardingStep: p.$K,
                    page: l,
                    homeSettingsEnabled: !0
                }),
            f &&
                l !== b.PG.LANDING &&
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(c.zxk, {
                        innerClassName: E.backButton,
                        look: c.zxk.Looks.BLANK,
                        size: c.zxk.Sizes.MIN,
                        onClick: () => {
                            (0, h.NB)(), (0, g.BG)(), (0, p.$K)(b.PG.LANDING);
                        },
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: E.arrow,
                                direction: d.Z.Directions.LEFT
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: I.intl.string(I.t['13/7kZ'])
                            })
                        ]
                    })
                }),
            (0, r.jsx)('div', { children: t })
        ]
    });
}
function P(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: i } = e,
        l = (0, a.e7)([x.Z], () => x.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        u = (0, a.e7)([f.Z], () => f.Z.advancedMode);
    return (0, r.jsxs)('div', {
        className: E.progressContainer,
        children: [
            (0, r.jsxs)(c.P3F, {
                className: s()(E.progressBarContainer, E.clickableProgressBar),
                onClick: o(b.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)('div', { className: s()(E.progressBar, { [E.progressBarCurrent]: t === b.PG.SAFETY_CHECK }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === b.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: I.intl.format(I.t.Me5MmZ, { stepNumber: 1 })
                    })
                ]
            }),
            (0, r.jsxs)(c.P3F, {
                className: s()(E.progressBarContainer, E.clickableProgressBar),
                onClick: o(b.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)('div', { className: s()(E.progressBar, { [E.progressBarCurrent]: t === b.PG.DEFAULT_CHANNELS }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === b.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: u ? I.intl.formatToPlainString(I.t['8mGhOz'], { stepNumber: 2 }) : I.intl.formatToPlainString(I.t.vxpuTU, { stepNumber: 2 })
                    })
                ]
            }),
            (0, r.jsxs)(c.P3F, {
                className: s()(E.progressBarContainer, E.clickableProgressBar),
                onClick: o(b.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)('div', { className: s()(E.progressBar, { [E.progressBarCurrent]: t === b.PG.CUSTOMIZATION_QUESTIONS }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === b.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: u ? I.intl.formatToPlainString(I.t.vb6J5u, { stepNumber: 3 }) : I.intl.formatToPlainString(I.t.ZpdQqK, { stepNumber: 3 })
                    })
                ]
            }),
            i &&
                (0, r.jsxs)(c.P3F, {
                    className: s()(E.progressBarContainer, E.clickableProgressBar),
                    onClick: o(b.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)('div', { className: s()(E.progressBar, { [E.progressBarCurrent]: t === b.PG.HOME_SETTINGS }) }),
                        (0, r.jsx)(c.Text, {
                            color: t === b.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
                            variant: 'text-xs/medium',
                            children: I.intl.format(I.t.KVOukp, { stepNumber: 4 })
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: E.progressBarContainer,
                children: [
                    (0, r.jsx)('div', { className: s()(E.progressBar, { [E.progressBarCurrent]: t === b.PG.REVIEW }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === b.PG.REVIEW ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: I.intl.format(I.t.oVzkiI, { stepNumber: 3 + +!!i + 1 })
                    })
                ]
            })
        ]
    });
}

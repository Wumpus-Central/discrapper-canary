n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(605236),
    u = n(768762),
    m = n(999382),
    g = n(743475),
    p = n(983135),
    h = n(570961),
    f = n(208665),
    b = n(359191),
    x = n(84658),
    j = n(142961),
    N = n(729311),
    _ = n(850864),
    v = n(729995),
    C = n(966301),
    O = n(707076),
    y = n(213956),
    I = n(388032),
    E = n(184344);
function S() {
    let e = (0, l.e7)([m.Z], () => m.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(T, { guildId: e });
}
function T(e) {
    let t,
        { guildId: n } = e,
        s = (0, l.e7)([b.Z], () => b.Z.getCurrentPage()),
        m = (0, l.e7)([b.Z], () => {
            let e = (0, x.lg)(s);
            return null != e && !b.Z.isEducationUpsellDismissed(e);
        }),
        f = (0, j.Z)(n),
        S = !f && m;
    switch (
        (i.useEffect(() => {
            (0, d.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        s)
    ) {
        case x.PG.LANDING:
            t = f
                ? (0, r.jsx)(v.Z, {
                      completed: !0,
                      guildId: n
                  })
                : (0, r.jsx)(O.Z, {});
            break;
        case x.PG.SAFETY_CHECK:
            t = (0, r.jsx)(y.Z, {});
            break;
        case x.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(N.Z, { saveOnClose: !f });
            break;
        case x.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(C.ZP, { saveOnClose: !f });
            break;
        case x.PG.HOME_SETTINGS:
            t = (0, r.jsx)(_.Z, { saveOnClose: !f });
            break;
        case x.PG.REVIEW:
            t = (0, r.jsx)(v.Z, {
                completed: f,
                guildId: n
            });
    }
    return (0, r.jsxs)('div', {
        className: a()(E.onboardingContainer, { [E.upsellOnTop]: S }),
        children: [
            !f &&
                s !== x.PG.LANDING &&
                (0, r.jsx)(P, {
                    setOnboardingStep: p.$K,
                    page: s,
                    homeSettingsEnabled: !0
                }),
            f &&
                s !== x.PG.LANDING &&
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(c.zxk, {
                        innerClassName: E.backButton,
                        look: c.zxk.Looks.BLANK,
                        size: c.zxk.Sizes.MIN,
                        onClick: () => {
                            (0, h.NB)(), (0, g.BG)(), (0, p.$K)(x.PG.LANDING);
                        },
                        children: [
                            (0, r.jsx)(u.Z, {
                                className: E.arrow,
                                direction: u.Z.Directions.LEFT
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: I.NW.string(I.t['13/7kZ'])
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
        s = (0, l.e7)([b.Z], () => b.Z.hasErrors()),
        o = (e) => {
            if (!s) return () => n(e);
        },
        d = (0, l.e7)([f.Z], () => f.Z.advancedMode);
    return (0, r.jsxs)('div', {
        className: E.progressContainer,
        children: [
            (0, r.jsxs)(c.P3F, {
                className: a()(E.progressBarContainer, E.clickableProgressBar),
                onClick: o(x.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)('div', { className: a()(E.progressBar, { [E.progressBarCurrent]: t === x.PG.SAFETY_CHECK }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === x.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: I.NW.format(I.t.Me5MmZ, { stepNumber: 1 })
                    })
                ]
            }),
            (0, r.jsxs)(c.P3F, {
                className: a()(E.progressBarContainer, E.clickableProgressBar),
                onClick: o(x.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)('div', { className: a()(E.progressBar, { [E.progressBarCurrent]: t === x.PG.DEFAULT_CHANNELS }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === x.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? I.NW.formatToPlainString(I.t['8mGhOz'], { stepNumber: 2 }) : I.NW.formatToPlainString(I.t.vxpuTU, { stepNumber: 2 })
                    })
                ]
            }),
            (0, r.jsxs)(c.P3F, {
                className: a()(E.progressBarContainer, E.clickableProgressBar),
                onClick: o(x.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)('div', { className: a()(E.progressBar, { [E.progressBarCurrent]: t === x.PG.CUSTOMIZATION_QUESTIONS }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === x.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? I.NW.formatToPlainString(I.t.vb6J5u, { stepNumber: 3 }) : I.NW.formatToPlainString(I.t.ZpdQqK, { stepNumber: 3 })
                    })
                ]
            }),
            i &&
                (0, r.jsxs)(c.P3F, {
                    className: a()(E.progressBarContainer, E.clickableProgressBar),
                    onClick: o(x.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)('div', { className: a()(E.progressBar, { [E.progressBarCurrent]: t === x.PG.HOME_SETTINGS }) }),
                        (0, r.jsx)(c.Text, {
                            color: t === x.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
                            variant: 'text-xs/medium',
                            children: I.NW.format(I.t.KVOukp, { stepNumber: 4 })
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: E.progressBarContainer,
                children: [
                    (0, r.jsx)('div', { className: a()(E.progressBar, { [E.progressBarCurrent]: t === x.PG.REVIEW }) }),
                    (0, r.jsx)(c.Text, {
                        color: t === x.PG.REVIEW ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: I.NW.format(I.t.oVzkiI, { stepNumber: 3 + +!!i + 1 })
                    })
                ]
            })
        ]
    });
}

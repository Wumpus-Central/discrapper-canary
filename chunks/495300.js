n.d(t, { Z: () => R });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(605236),
    u = n(768762),
    m = n(999382),
    h = n(743475),
    g = n(983135),
    x = n(570961),
    p = n(208665),
    _ = n(359191),
    C = n(84658),
    f = n(142961),
    v = n(729311),
    N = n(850864),
    j = n(729995),
    I = n(966301),
    E = n(707076),
    b = n(213956),
    T = n(388032),
    S = n(883450);
function R() {
    let e = (0, a.e7)([m.Z], () => m.Z.getGuildId());
    return null == e ? null : (0, i.jsx)(Z, { guildId: e });
}
function Z(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.e7)([_.Z], () => _.Z.getCurrentPage()),
        m = (0, a.e7)([_.Z], () => {
            let e = (0, C.lg)(l);
            return null != e && !_.Z.isEducationUpsellDismissed(e);
        }),
        p = (0, f.Z)(n),
        R = !p && m;
    switch (
        (r.useEffect(() => {
            (0, d.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case C.PG.LANDING:
            t = p
                ? (0, i.jsx)(j.Z, {
                      completed: !0,
                      guildId: n
                  })
                : (0, i.jsx)(E.Z, {});
            break;
        case C.PG.SAFETY_CHECK:
            t = (0, i.jsx)(b.Z, {});
            break;
        case C.PG.DEFAULT_CHANNELS:
            t = (0, i.jsx)(v.Z, { saveOnClose: !p });
            break;
        case C.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, i.jsx)(I.ZP, { saveOnClose: !p });
            break;
        case C.PG.HOME_SETTINGS:
            t = (0, i.jsx)(N.Z, { saveOnClose: !p });
            break;
        case C.PG.REVIEW:
            t = (0, i.jsx)(j.Z, {
                completed: p,
                guildId: n
            });
    }
    return (0, i.jsxs)('div', {
        className: s()(S.onboardingContainer, { [S.upsellOnTop]: R }),
        children: [
            !p &&
                l !== C.PG.LANDING &&
                (0, i.jsx)(y, {
                    setOnboardingStep: g.$K,
                    page: l,
                    homeSettingsEnabled: !0
                }),
            p &&
                l !== C.PG.LANDING &&
                (0, i.jsx)('div', {
                    children: (0, i.jsxs)(c.zxk, {
                        innerClassName: S.backButton,
                        look: c.zxk.Looks.BLANK,
                        size: c.zxk.Sizes.MIN,
                        onClick: () => {
                            (0, x.NB)(), (0, h.BG)(), (0, g.$K)(C.PG.LANDING);
                        },
                        children: [
                            (0, i.jsx)(u.Z, {
                                className: S.arrow,
                                direction: u.Z.Directions.LEFT
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: T.intl.string(T.t['13/7kZ'])
                            })
                        ]
                    })
                }),
            (0, i.jsx)('div', { children: t })
        ]
    });
}
function y(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: r } = e,
        l = (0, a.e7)([_.Z], () => _.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        d = (0, a.e7)([p.Z], () => p.Z.advancedMode);
    return (0, i.jsxs)('div', {
        className: S.progressContainer,
        children: [
            (0, i.jsxs)(c.P3F, {
                className: s()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(C.PG.SAFETY_CHECK),
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.SAFETY_CHECK }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: T.intl.format(T.t.Me5MmZ, { stepNumber: 1 })
                    })
                ]
            }),
            (0, i.jsxs)(c.P3F, {
                className: s()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(C.PG.DEFAULT_CHANNELS),
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.DEFAULT_CHANNELS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? T.intl.formatToPlainString(T.t['8mGhOz'], { stepNumber: 2 }) : T.intl.formatToPlainString(T.t.vxpuTU, { stepNumber: 2 })
                    })
                ]
            }),
            (0, i.jsxs)(c.P3F, {
                className: s()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(C.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.CUSTOMIZATION_QUESTIONS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? T.intl.formatToPlainString(T.t.vb6J5u, { stepNumber: 3 }) : T.intl.formatToPlainString(T.t.ZpdQqK, { stepNumber: 3 })
                    })
                ]
            }),
            r &&
                (0, i.jsxs)(c.P3F, {
                    className: s()(S.progressBarContainer, S.clickableProgressBar),
                    onClick: o(C.PG.HOME_SETTINGS),
                    children: [
                        (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.HOME_SETTINGS }) }),
                        (0, i.jsx)(c.Text, {
                            color: t === C.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
                            variant: 'text-xs/medium',
                            children: T.intl.format(T.t.KVOukp, { stepNumber: 4 })
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: S.progressBarContainer,
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.REVIEW }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.REVIEW ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: T.intl.format(T.t.oVzkiI, { stepNumber: 3 + (r ? 1 : 0) + 1 })
                    })
                ]
            })
        ]
    });
}

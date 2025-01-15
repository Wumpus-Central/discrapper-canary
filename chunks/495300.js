n.d(t, {
    Z: function () {
        return R;
    }
});
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
    f = n(359191),
    C = n(84658),
    v = n(142961),
    I = n(729311),
    N = n(850864),
    _ = n(729995),
    T = n(966301),
    j = n(707076),
    b = n(213956),
    E = n(388032),
    S = n(576360);
function R() {
    let e = (0, a.e7)([m.Z], () => m.Z.getGuildId());
    return null == e ? null : (0, i.jsx)(y, { guildId: e });
}
function y(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.e7)([f.Z], () => f.Z.getCurrentPage()),
        m = (0, a.e7)([f.Z], () => {
            let e = (0, C.lg)(l);
            return null != e && !f.Z.isEducationUpsellDismissed(e);
        }),
        p = (0, v.Z)(n),
        R = !p && m;
    switch (
        (r.useEffect(() => {
            (0, d.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case C.PG.LANDING:
            t = p
                ? (0, i.jsx)(_.Z, {
                      completed: !0,
                      guildId: n
                  })
                : (0, i.jsx)(j.Z, {});
            break;
        case C.PG.SAFETY_CHECK:
            t = (0, i.jsx)(b.Z, {});
            break;
        case C.PG.DEFAULT_CHANNELS:
            t = (0, i.jsx)(I.Z, { saveOnClose: !p });
            break;
        case C.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, i.jsx)(T.ZP, { saveOnClose: !p });
            break;
        case C.PG.HOME_SETTINGS:
            t = (0, i.jsx)(N.Z, { saveOnClose: !p });
            break;
        case C.PG.REVIEW:
            t = (0, i.jsx)(_.Z, {
                completed: p,
                guildId: n
            });
    }
    return (0, i.jsxs)('div', {
        className: s()(S.onboardingContainer, { [S.upsellOnTop]: R }),
        children: [
            !p &&
                l !== C.PG.LANDING &&
                (0, i.jsx)(A, {
                    setOnboardingStep: g.$K,
                    page: l,
                    homeSettingsEnabled: !0
                }),
            p &&
                l !== C.PG.LANDING &&
                (0, i.jsx)('div', {
                    children: (0, i.jsxs)(c.Button, {
                        innerClassName: S.backButton,
                        look: c.Button.Looks.BLANK,
                        size: c.Button.Sizes.MIN,
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
                                children: E.intl.string(E.t['13/7kZ'])
                            })
                        ]
                    })
                }),
            (0, i.jsx)('div', { children: t })
        ]
    });
}
function A(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: r } = e,
        l = (0, a.e7)([f.Z], () => f.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        d = (0, a.e7)([p.Z], () => p.Z.advancedMode);
    return (0, i.jsxs)('div', {
        className: S.progressContainer,
        children: [
            (0, i.jsxs)(c.Clickable, {
                className: s()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(C.PG.SAFETY_CHECK),
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.SAFETY_CHECK }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.SAFETY_CHECK ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: E.intl.format(E.t.Me5MmZ, { stepNumber: 1 })
                    })
                ]
            }),
            (0, i.jsxs)(c.Clickable, {
                className: s()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(C.PG.DEFAULT_CHANNELS),
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.DEFAULT_CHANNELS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.DEFAULT_CHANNELS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? E.intl.formatToPlainString(E.t['8mGhOz'], { stepNumber: 2 }) : E.intl.formatToPlainString(E.t.vxpuTU, { stepNumber: 2 })
                    })
                ]
            }),
            (0, i.jsxs)(c.Clickable, {
                className: s()(S.progressBarContainer, S.clickableProgressBar),
                onClick: o(C.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.CUSTOMIZATION_QUESTIONS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === C.PG.CUSTOMIZATION_QUESTIONS ? 'text-brand' : 'text-muted',
                        variant: 'text-xs/medium',
                        children: d ? E.intl.formatToPlainString(E.t.vb6J5u, { stepNumber: 3 }) : E.intl.formatToPlainString(E.t.ZpdQqK, { stepNumber: 3 })
                    })
                ]
            }),
            r &&
                (0, i.jsxs)(c.Clickable, {
                    className: s()(S.progressBarContainer, S.clickableProgressBar),
                    onClick: o(C.PG.HOME_SETTINGS),
                    children: [
                        (0, i.jsx)('div', { className: s()(S.progressBar, { [S.progressBarCurrent]: t === C.PG.HOME_SETTINGS }) }),
                        (0, i.jsx)(c.Text, {
                            color: t === C.PG.HOME_SETTINGS ? 'text-brand' : 'text-muted',
                            variant: 'text-xs/medium',
                            children: E.intl.format(E.t.KVOukp, { stepNumber: 4 })
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
                        children: E.intl.format(E.t.oVzkiI, { stepNumber: 3 + (r ? 1 : 0) + 1 })
                    })
                ]
            })
        ]
    });
}

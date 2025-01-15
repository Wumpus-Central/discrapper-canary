t.d(n, {
    i0: function () {
        return b;
    },
    yD: function () {
        return h;
    }
});
var o = t(200651);
t(192379);
var r = t(120356),
    c = t.n(r),
    i = t(481060),
    a = t(617136),
    s = t(915750),
    l = t(497505),
    d = t(918701),
    f = t(796111),
    u = t(667105),
    p = t(341907),
    _ = t(604162),
    C = t(46140),
    v = t(388032),
    g = t(993360);
function m(e) {
    let { quest: n, taskDetails: t } = e;
    return (0, o.jsx)(i.Button, {
        className: g.cta,
        color: i.Button.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, p.openVideoQuestModal)(n);
        },
        size: i.Button.Sizes.SMALL,
        children: (0, _.F9)(t)
    });
}
let B = (e) => {
        let { quest: n } = e,
            t = (0, s.aM)();
        return (0, o.jsx)(i.Button, {
            className: g.cta,
            size: i.Button.Sizes.SMALL,
            onClick: () =>
                (0, d.FE)(n, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: a.jZ.OPEN_GAME_LINK,
                    impressionId: t
                }),
            children: (0, d.pO)(n) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
        });
    },
    x = (e) => {
        var n;
        let { quest: t } = e,
            r = null === (n = (0, s.WD)()) || void 0 === n ? void 0 : n.getId();
        return (0, o.jsx)(i.Button, {
            fullWidth: !0,
            className: g.cta,
            onClick: () =>
                (0, d.gI)(
                    { quest: t },
                    {
                        content: l.jn.QUEST_BAR_V2,
                        ctaContent: a.jZ.CONNECT_CONSOLE,
                        impressionId: r
                    }
                ),
            size: i.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    b = (e) => {
        let { quest: n, useReducedMotion: t, isExpanded: r, className: a, ctaLabel: s, ...d } = e,
            f = (0, u.hf)({
                quest: n,
                location: l.jn.QUEST_BAR_V2
            });
        return (0, o.jsx)(i.ShinyButton, {
            fullWidth: !0,
            size: i.Button.Sizes.SMALL,
            onClick: f,
            pauseAnimation: t || !r,
            className: c()(g.cta, a),
            buttonShineClassName: g.shine,
            ...d,
            children: null != s ? s : v.intl.string(v.t.cfY4PD)
        });
    },
    S = (e) => {
        var n;
        let { quest: t, useReducedMotion: r, isExpanded: c, awaitingConsoleConnections: i, hasMadeProgress: a, isProgressing: s, activeScreen: u, taskDetails: p } = e,
            _ = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
            v = (0, f.P)({ location: C.dr.QUESTS_BAR }),
            g = (0, d.q8)(t);
        if (_)
            return (0, o.jsx)(b, {
                quest: t,
                useReducedMotion: r,
                isExpanded: c
            });
        if (g)
            return (0, o.jsx)(m, {
                quest: t,
                taskDetails: p
            });
        if (u === l.LI.CONSOLE && i && !v) return (0, o.jsx)(x, { quest: t });
        else if (u !== l.LI.SELECT && !a && !s) return (0, o.jsx)(B, { quest: t });
        return null;
    };
function h(e) {
    return (0, o.jsxs)('div', {
        className: g.ctaButtons,
        children: [
            e.showBackButton &&
                (0, o.jsx)(i.Button, {
                    className: g.backButton,
                    innerClassName: g.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, o.jsx)(i.ChevronSmallLeftIcon, { className: g.backIcon })
                }),
            (0, o.jsx)(S, { ...e })
        ]
    });
}

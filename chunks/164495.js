t.d(n, {
    i0: () => B,
    yD: () => k
});
var o = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    d = t(481060),
    i = t(617136),
    s = t(915750),
    l = t(497505),
    c = t(918701),
    f = t(796111),
    p = t(667105),
    _ = t(341907),
    u = t(604162),
    C = t(46140),
    v = t(388032),
    m = t(977174);
function g(e) {
    let { quest: n, taskDetails: t } = e;
    return (0, o.jsx)(d.zxk, {
        className: m.cta,
        color: d.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, _.openVideoQuestModal)(n);
        },
        size: d.zxk.Sizes.SMALL,
        children: (0, u.F9)(t)
    });
}
let x = (e) => {
        let { quest: n } = e,
            t = (0, s.aM)();
        return (0, o.jsx)(d.zxk, {
            className: m.cta,
            size: d.zxk.Sizes.SMALL,
            onClick: () =>
                (0, c.FE)(n, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: i.jZ.OPEN_GAME_LINK,
                    impressionId: t
                }),
            children: (0, c.pO)(n) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
        });
    },
    S = (e) => {
        var n;
        let { quest: t } = e,
            a = null === (n = (0, s.WD)()) || void 0 === n ? void 0 : n.getId();
        return (0, o.jsx)(d.zxk, {
            fullWidth: !0,
            className: m.cta,
            onClick: () =>
                (0, c.gI)(
                    { quest: t },
                    {
                        content: l.jn.QUEST_BAR_V2,
                        ctaContent: i.jZ.CONNECT_CONSOLE,
                        impressionId: a
                    }
                ),
            size: d.zxk.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    B = (e) => {
        let { quest: n, useReducedMotion: t, isExpanded: a, className: i, ctaLabel: s, ...c } = e,
            f = (0, p.hf)({
                quest: n,
                location: l.jn.QUEST_BAR_V2
            });
        return (0, o.jsx)(d.gtL, {
            fullWidth: !0,
            size: d.zxk.Sizes.SMALL,
            onClick: f,
            pauseAnimation: t || !a,
            className: r()(m.cta, i),
            buttonShineClassName: m.shine,
            ...c,
            children: null != s ? s : v.intl.string(v.t.cfY4PD)
        });
    },
    b = (e) => {
        var n;
        let { quest: t, useReducedMotion: a, isExpanded: r, awaitingConsoleConnections: d, hasMadeProgress: i, isProgressing: s, activeScreen: p, taskDetails: _ } = e,
            u = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
            v = (0, f.P)({ location: C.dr.QUESTS_BAR }),
            m = (0, c.q8)(t);
        return u
            ? (0, o.jsx)(B, {
                  quest: t,
                  useReducedMotion: a,
                  isExpanded: r
              })
            : m
              ? (0, o.jsx)(g, {
                    quest: t,
                    taskDetails: _
                })
              : p === l.LI.CONSOLE && d && !v
                ? (0, o.jsx)(S, { quest: t })
                : p === l.LI.SELECT || i || s
                  ? null
                  : (0, o.jsx)(x, { quest: t });
    };
function k(e) {
    return (0, o.jsxs)('div', {
        className: m.ctaButtons,
        children: [
            e.showBackButton &&
                (0, o.jsx)(d.zxk, {
                    className: m.backButton,
                    innerClassName: m.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, o.jsx)(d.V7D, { className: m.backIcon })
                }),
            (0, o.jsx)(b, { ...e })
        ]
    });
}

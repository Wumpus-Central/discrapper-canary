n.d(t, {
    i0: () => j,
    yD: () => T
});
var r = n(200651);
n(192379);
var o = n(120356),
    s = n.n(o),
    a = n(481060),
    i = n(617136),
    l = n(915750),
    c = n(497505),
    d = n(918701),
    u = n(796111),
    p = n(667105),
    m = n(341907),
    x = n(604162),
    h = n(46140),
    g = n(388032),
    f = n(698234);
function _(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(a.zxk, {
        className: f.cta,
        color: a.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, m.openVideoQuestModal)(t);
        },
        size: a.zxk.Sizes.SMALL,
        children: (0, x.F9)(n)
    });
}
let C = (e) => {
        let { quest: t } = e,
            n = (0, l.aM)();
        return (0, r.jsx)(a.zxk, {
            className: f.cta,
            size: a.zxk.Sizes.SMALL,
            onClick: () =>
                (0, d.FE)(t, {
                    content: c.jn.QUEST_BAR_V2,
                    ctaContent: i.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, d.pO)(t) ? g.intl.string(g.t.hvVgAQ) : g.intl.string(g.t.lwQdjI)
        });
    },
    v = (e) => {
        var t;
        let { quest: n } = e,
            o = null === (t = (0, l.WD)()) || void 0 === t ? void 0 : t.getId();
        return (0, r.jsx)(a.zxk, {
            fullWidth: !0,
            className: f.cta,
            onClick: () =>
                (0, d.gI)(
                    { quest: n },
                    {
                        content: c.jn.QUEST_BAR_V2,
                        ctaContent: i.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: a.zxk.Sizes.SMALL,
            children: g.intl.string(g.t.csptqa)
        });
    },
    j = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: i, ctaLabel: l, ...d } = e,
            u = (0, p.hf)({
                quest: t,
                location: c.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(a.gtL, {
            fullWidth: !0,
            size: a.zxk.Sizes.SMALL,
            onClick: u,
            pauseAnimation: n || !o,
            className: s()(f.cta, i),
            buttonShineClassName: f.shine,
            ...d,
            children: null != l ? l : g.intl.string(g.t.cfY4PD)
        });
    },
    b = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: p, taskDetails: m } = e,
            x = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            g = (0, u.P)({ location: h.dr.QUESTS_BAR }),
            f = (0, d.q8)(n);
        return x
            ? (0, r.jsx)(j, {
                  quest: n,
                  useReducedMotion: o,
                  isExpanded: s
              })
            : f
              ? (0, r.jsx)(_, {
                    quest: n,
                    taskDetails: m
                })
              : p === c.LI.CONSOLE && a && !g
                ? (0, r.jsx)(v, { quest: n })
                : p === c.LI.SELECT || i || l
                  ? null
                  : (0, r.jsx)(C, { quest: n });
    };
function T(e) {
    return (0, r.jsxs)('div', {
        className: f.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(a.zxk, {
                    className: f.backButton,
                    innerClassName: f.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(a.V7D, { className: f.backIcon })
                }),
            (0, r.jsx)(b, { ...e })
        ]
    });
}

n.d(t, {
    i0: () => b,
    yD: () => E
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
    p = n(880199),
    m = n(667105),
    x = n(341907),
    h = n(604162),
    g = n(46140),
    f = n(388032),
    _ = n(698234);
function C(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(a.zxk, {
        className: _.cta,
        color: a.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, x.openVideoQuestModal)(t);
        },
        size: a.zxk.Sizes.SMALL,
        children: (0, h.F9)(n)
    });
}
let v = (e) => {
        let { quest: t } = e,
            n = (0, l.aM)();
        return (0, r.jsx)(a.zxk, {
            className: _.cta,
            size: a.zxk.Sizes.SMALL,
            onClick: () =>
                (0, d.FE)(t, {
                    content: c.jn.QUEST_BAR_V2,
                    ctaContent: i.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, d.pO)(t) ? f.intl.string(f.t.hvVgAQ) : f.intl.string(f.t.lwQdjI)
        });
    },
    j = (e) => {
        var t;
        let { quest: n } = e,
            o = null === (t = (0, l.WD)()) || void 0 === t ? void 0 : t.getId();
        return (0, r.jsx)(a.zxk, {
            fullWidth: !0,
            className: _.cta,
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
            children: f.intl.string(f.t.csptqa)
        });
    },
    b = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: o, className: i, ctaLabel: l, ...d } = e,
            u = (0, m.hf)({
                quest: t,
                location: c.jn.QUEST_BAR_V2
            });
        return (0, r.jsx)(a.gtL, {
            fullWidth: !0,
            size: a.zxk.Sizes.SMALL,
            onClick: u,
            pauseAnimation: n || !o,
            className: s()(_.cta, i),
            buttonShineClassName: _.shine,
            ...d,
            children: null != l ? l : f.intl.string(f.t.cfY4PD)
        });
    },
    T = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: m, taskDetails: x } = e,
            h = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            f = (0, u.P)({ location: g.dr.QUESTS_BAR }),
            _ = (0, d.q8)(n),
            T = (0, d.xN)(n.config);
        if (h && T) {
            let e = (0, d.LM)(n.config);
            return (0, r.jsx)(b, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s,
                ctaLabel: (0, r.jsx)(p.Z, { orbQuantity: e })
            });
        }
        if (h)
            return (0, r.jsx)(b, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s
            });
        if (_)
            return (0, r.jsx)(C, {
                quest: n,
                taskDetails: x
            });
        if (m === c.LI.CONSOLE && a && !f) return (0, r.jsx)(j, { quest: n });
        if (m !== c.LI.SELECT && !i && !l) return (0, r.jsx)(v, { quest: n });
        return null;
    };
function E(e) {
    return (0, r.jsxs)('div', {
        className: _.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(a.zxk, {
                    className: _.backButton,
                    innerClassName: _.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(a.V7D, { className: _.backIcon })
                }),
            (0, r.jsx)(T, { ...e })
        ]
    });
}

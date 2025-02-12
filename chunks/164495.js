n.d(t, {
    i0: () => T,
    yD: () => N
});
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(617136),
    c = n(915750),
    d = n(497505),
    u = n(918701),
    p = n(796111),
    m = n(880199),
    x = n(667105),
    h = n(341907),
    g = n(604162),
    f = n(46140),
    _ = n(388032),
    C = n(698234);
function v(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.zxk, {
        className: C.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, h.openVideoQuestModal)(t);
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, g.F9)(n)
    });
}
let j = (e) => {
        let { quest: t } = e,
            n = (0, c.aM)();
        return (0, r.jsx)(i.zxk, {
            className: C.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, u.FE)(t, {
                    content: d.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, u.pO)(t) ? _.intl.string(_.t.hvVgAQ) : _.intl.string(_.t.lwQdjI)
        });
    },
    b = (e) => {
        var t;
        let { quest: n } = e,
            o = null === (t = (0, c.WD)()) || void 0 === t ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: C.cta,
            onClick: () =>
                (0, u.gI)(
                    { quest: n },
                    {
                        content: d.jn.QUEST_BAR_V2,
                        ctaContent: l.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: _.intl.string(_.t.csptqa)
        });
    },
    T = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: s, className: l, ctaLabel: c, onClick: u, ...p } = e,
            m = (0, x.hf)({
                quest: t,
                location: d.jn.QUEST_BAR_V2
            }),
            h = o.useCallback(
                (e) => {
                    null == u || u(e), m();
                },
                [u, m]
            );
        return (0, r.jsx)(i.gtL, {
            fullWidth: !0,
            size: i.zxk.Sizes.SMALL,
            onClick: h,
            pauseAnimation: n || !s,
            className: a()(C.cta, l),
            buttonShineClassName: C.shine,
            ...p,
            children: null != c ? c : _.intl.string(_.t.cfY4PD)
        });
    },
    E = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: c, taskDetails: x } = e,
            h = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            g = (0, p.P)({ location: f.dr.QUESTS_BAR }),
            _ = (0, u.q8)(n),
            C = (0, u.xN)(n.config);
        if (h && C) {
            let e = (0, u.LM)(n.config);
            return (0, r.jsx)(T, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s,
                ctaLabel: (0, r.jsx)(m.Z, { orbQuantity: e })
            });
        }
        if (h)
            return (0, r.jsx)(T, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s
            });
        if (_)
            return (0, r.jsx)(v, {
                quest: n,
                taskDetails: x
            });
        if (c === d.LI.CONSOLE && a && !g) return (0, r.jsx)(b, { quest: n });
        if (c !== d.LI.SELECT && !i && !l) return (0, r.jsx)(j, { quest: n });
        return null;
    };
function N(e) {
    return (0, r.jsxs)('div', {
        className: C.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: C.backButton,
                    innerClassName: C.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: C.backIcon })
                }),
            (0, r.jsx)(E, { ...e })
        ]
    });
}

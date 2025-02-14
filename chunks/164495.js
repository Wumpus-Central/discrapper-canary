n.d(t, {
    i0: () => T,
    yD: () => S
});
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
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
    v = n(388032),
    _ = n(822923);
function C(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, s.jsx)(i.zxk, {
        className: _.cta,
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
        return (0, s.jsx)(i.zxk, {
            className: _.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, u.FE)(t, {
                    content: d.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, u.pO)(t) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
        });
    },
    b = (e) => {
        var t;
        let { quest: n } = e,
            r = null === (t = (0, c.WD)()) || void 0 === t ? void 0 : t.getId();
        return (0, s.jsx)(i.zxk, {
            fullWidth: !0,
            className: _.cta,
            onClick: () =>
                (0, u.gI)(
                    { quest: n },
                    {
                        content: d.jn.QUEST_BAR_V2,
                        ctaContent: l.jZ.CONNECT_CONSOLE,
                        impressionId: r
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    T = (e) => {
        let { quest: t, useReducedMotion: n, isExpanded: a, className: l, ctaLabel: c, onClick: u, ...p } = e,
            m = (0, x.hf)({
                quest: t,
                location: d.jn.QUEST_BAR_V2
            }),
            h = r.useCallback(
                (e) => {
                    null == u || u(e), m();
                },
                [u, m]
            );
        return (0, s.jsx)(i.gtL, {
            fullWidth: !0,
            size: i.zxk.Sizes.SMALL,
            onClick: h,
            pauseAnimation: n || !a,
            className: o()(_.cta, l),
            buttonShineClassName: _.shine,
            ...p,
            children: null != c ? c : v.intl.string(v.t.cfY4PD)
        });
    },
    E = (e) => {
        var t;
        let { quest: n, useReducedMotion: r, isExpanded: a, awaitingConsoleConnections: o, hasMadeProgress: i, isProgressing: l, activeScreen: c, taskDetails: x } = e,
            h = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            g = (0, p.P)({ location: f.dr.QUESTS_BAR }),
            v = (0, u.q8)(n),
            _ = (0, u.xN)(n.config);
        if (h && _) {
            let e = (0, u.LM)(n.config);
            return (0, s.jsx)(T, {
                quest: n,
                useReducedMotion: r,
                isExpanded: a,
                ctaLabel: (0, s.jsx)(m.Z, { orbQuantity: e })
            });
        }
        if (h)
            return (0, s.jsx)(T, {
                quest: n,
                useReducedMotion: r,
                isExpanded: a
            });
        if (v)
            return (0, s.jsx)(C, {
                quest: n,
                taskDetails: x
            });
        if (c === d.LI.CONSOLE && o && !g) return (0, s.jsx)(b, { quest: n });
        if (c !== d.LI.SELECT && !i && !l) return (0, s.jsx)(j, { quest: n });
        return null;
    };
function S(e) {
    return (0, s.jsxs)('div', {
        className: _.ctaButtons,
        children: [
            e.showBackButton &&
                (0, s.jsx)(i.zxk, {
                    className: _.backButton,
                    innerClassName: _.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, s.jsx)(i.V7D, { className: _.backIcon })
                }),
            (0, s.jsx)(E, { ...e })
        ]
    });
}

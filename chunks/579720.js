n.d(t, { A: () => g });
var l = n(582128),
    r = n(690352),
    s = n(855986),
    a = n(287809),
    i = n(969935),
    o = n(73153);
let u = [];
function c(e, t, n) {
    return `${e}:${t}:${n}`;
}
class d extends s.Ay.PersistedStore {
    static displayName = "CollectiblesSequencedOfferRevealStore";
    static persistKey = "CollectiblesSequencedOfferRevealStore";
    initialize(e) {
        u = e?.revealedDayKeys ?? [];
    }
    getState() {
        return { revealedDayKeys: u };
    }
    isDayRevealed(e, t, n) {
        return u.includes(c(e, t, n));
    }
}
let m = new d(o.h, {
    COLLECTIBLES_SEQUENCED_OFFER_REVEAL: function (e) {
        let { userId: t, collectionId: n, position: l } = e,
            r = c(t, n, l);
        if (u.includes(r)) return !1;
        let s = `${t}:${n}:`;
        u = [...u.filter((e) => e.startsWith(s)), r];
    },
    LOGOUT: function () {
        u = [];
    },
});
var h = n(198329);
function g(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { collectionId: u, promotions: c, startsAt: d } = e,
        g = (0, s.bG)([a.default], () => a.default.getCurrentUser()?.id),
        E = (0, s.bG)([m], () => null != g && null != u && null != n && m.isDayRevealed(g, u, n)),
        p = l.useCallback(() => {
            null != u && null != n && (0, i.cb)(u, n);
        }, [u, n]);
    return l.useMemo(() => {
        let e = (0, h.d)({
            positions: c.map((e) => {
                let { position: t } = e;
                return t;
            }),
            openPosition: n,
        });
        return [...c]
            .sort((e, t) => e.position - t.position)
            .map((l) => {
                let { position: s, cardShape: a, assets: i } = l;
                return {
                    cardShape: a,
                    tileProps: {
                        day: s,
                        cardShape: o || a === r.G.LARGE_SQUARE ? a : r.G.SMALL_SQUARE,
                        isHintCentered: o && (a === r.G.TALL || a === r.G.WIDE),
                        state: (0, h.q9)({ position: s, openPosition: n, hintPosition: e, isOpenPositionRevealed: E }),
                        skuId: t?.[s - 1]?.skuId ?? null,
                        lockedAssetUrl: o ? (i.calendarLocked ?? i.locked) : i.locked,
                        hintAssetUrl: o ? (i.calendarHint ?? i.hint) : i.hint,
                        idleAnimationUrl: o ? (i.calendarIdleAnimation ?? i.idleAnimation) : i.idleAnimation,
                        revealAnimationUrl: o ? (i.calendarRevealAnimation ?? i.revealAnimation) : i.revealAnimation,
                        tilePosition: s - 1,
                        revealDate: (0, h.KH)(d, s),
                        onReveal: p,
                    },
                };
            });
    }, [c, t, n, E, p, o, d]);
}

n.d(t, { A: () => h });
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
var g = n(198329);
function h(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { collectionId: u, promotions: c, startsAt: d, endsAt: h } = e,
        p = (0, s.bG)([a.default], () => a.default.getCurrentUser()?.id),
        f = (0, s.bG)([m], () => null != p && null != u && null != n && m.isDayRevealed(p, u, n)),
        E = l.useCallback(() => {
            null != u && null != n && (0, i.cb)(u, n);
        }, [u, n]),
        x = new Date(),
        v = null != h && h <= x;
    return l.useMemo(() => {
        let e = (0, g.d)({
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
                        cardShape: a,
                        isHintCentered: o && (a === r.G.TALL || a === r.G.WIDE),
                        state: (0, g.q9)({
                            position: s,
                            openPosition: n,
                            hintPosition: e,
                            isOpenPositionRevealed: f,
                            hasCampaignEnded: v,
                        }),
                        skuId: t?.[s - 1]?.skuId ?? null,
                        lockedAssetUrl: o ? (i.calendarLocked ?? i.locked) : i.locked,
                        hintAssetUrl: i.hint,
                        tilePosition: s - 1,
                        revealDate: (0, g.KH)(d, s),
                        onReveal: E,
                    },
                };
            });
    }, [c, t, n, f, v, E, o, d]);
}

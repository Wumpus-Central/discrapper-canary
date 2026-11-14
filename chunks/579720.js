n.d(t, { A: () => g });
var l = n(582128),
    r = n(855986),
    s = n(287809),
    a = n(969935),
    i = n(73153);
let o = [];
function u(e, t, n) {
    return `${e}:${t}:${n}`;
}
class c extends r.Ay.PersistedStore {
    static displayName = "CollectiblesSequencedOfferRevealStore";
    static persistKey = "CollectiblesSequencedOfferRevealStore";
    initialize(e) {
        o = e?.revealedDayKeys ?? [];
    }
    getState() {
        return { revealedDayKeys: o };
    }
    isDayRevealed(e, t, n) {
        return o.includes(u(e, t, n));
    }
}
let d = new c(i.h, {
    COLLECTIBLES_SEQUENCED_OFFER_REVEAL: function (e) {
        let { userId: t, collectionId: n, position: l } = e,
            r = u(t, n, l);
        if (o.includes(r)) return !1;
        let s = `${t}:${n}:`;
        o = [...o.filter((e) => e.startsWith(s)), r];
    },
    LOGOUT: function () {
        o = [];
    },
});
var m = n(198329);
function g(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { collectionId: o, promotions: u, endsAt: c } = e,
        g = (0, r.bG)([s.default], () => s.default.getCurrentUser()?.id),
        h = (0, r.bG)([d], () => null != g && null != o && null != n && d.isDayRevealed(g, o, n)),
        p = l.useCallback(() => {
            null != o && null != n && (0, a.cb)(o, n);
        }, [o, n]),
        f = new Date(),
        E = null != c && c <= f;
    return l.useMemo(() => {
        let e = (0, m.d)({
            positions: u.map((e) => {
                let { position: t } = e;
                return t;
            }),
            openPosition: n,
        });
        return [...u]
            .sort((e, t) => e.position - t.position)
            .map((l) => {
                let { position: r, cardShape: s, assets: a } = l;
                return {
                    cardShape: s,
                    tileProps: {
                        day: r,
                        state: (0, m.q9)({
                            position: r,
                            openPosition: n,
                            hintPosition: e,
                            isOpenPositionRevealed: h,
                            hasCampaignEnded: E,
                        }),
                        skuId: t?.[r - 1]?.skuId ?? null,
                        lockedAssetUrl: i ? (a.calendarLocked ?? a.locked) : a.locked,
                        hintAssetUrl: a.hint,
                        tilePosition: r - 1,
                        onReveal: p,
                    },
                };
            });
    }, [u, t, n, h, E, p, i]);
}

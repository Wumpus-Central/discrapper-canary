t.d(s, { A: () => r });
var i = t(17928),
    n = t(228366);
let l = { gameUpsellsDismissal: {} },
    a = { ...l };
class o extends i.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        a = e ?? a;
    }
    getState() {
        return a;
    }
    getGameUpsellDismissal(e, s) {
        return a.gameUpsellsDismissal[s]?.[e] ?? null;
    }
    getAllGameUpsellDismissals(e) {
        return a.gameUpsellsDismissal[e] ?? null;
    }
}
let r = new o(n.h, {
    LOGOUT: function () {
        a = { ...l };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationIds: s, dismissedAt: t, dismissibleContent: i } = e;
        if (0 === s.length) return !1;
        let n = { ...a, gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [i]: { ...a.gameUpsellsDismissal[i] } } };
        for (let e of s) {
            let s = a.gameUpsellsDismissal[i]?.[e],
                l = null != s ? s.timesDismissed + 1 : 1;
            n.gameUpsellsDismissal[i][e] = { dismissedAt: t, timesDismissed: l };
        }
        a = n;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
        let { applicationId: s, dismissibleContent: t } = e,
            i = a.gameUpsellsDismissal[t];
        if (null == i || null == i[s]) return;
        let n = { ...i };
        delete n[s], (a = { gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [t]: n } });
    },
});

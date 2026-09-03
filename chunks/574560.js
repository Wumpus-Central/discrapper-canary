l.d(s, { A: () => m });
var t = l(17928),
    i = l(228366);
let a = { gameUpsellsDismissal: {} },
    n = { ...a };
class o extends t.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        n = e ?? n;
    }
    getState() {
        return n;
    }
    getGameUpsellDismissal(e, s) {
        return n.gameUpsellsDismissal[s]?.[e] ?? null;
    }
    getAllGameUpsellDismissals(e) {
        return n.gameUpsellsDismissal[e] ?? null;
    }
}
let m = new o(i.h, {
    LOGOUT: function () {
        n = { ...a };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationIds: s, dismissedAt: l, dismissibleContent: t } = e;
        if (0 === s.length) return !1;
        let i = { ...n, gameUpsellsDismissal: { ...n.gameUpsellsDismissal, [t]: { ...n.gameUpsellsDismissal[t] } } };
        for (let e of s) {
            let s = n.gameUpsellsDismissal[t]?.[e],
                a = null != s ? s.timesDismissed + 1 : 1;
            i.gameUpsellsDismissal[t][e] = { dismissedAt: l, timesDismissed: a };
        }
        n = i;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
        let { applicationId: s, dismissibleContent: l } = e,
            t = n.gameUpsellsDismissal[l];
        if (null == t || null == t[s]) return;
        let i = { ...t };
        delete i[s], (n = { gameUpsellsDismissal: { ...n.gameUpsellsDismissal, [l]: i } });
    },
});

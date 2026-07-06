t.d(s, { A: () => r });
var i = t(17928),
    l = t(228366);
let n = { gameUpsellsDismissal: {} },
    a = { ...n };
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
let r = new o(l.h, {
    LOGOUT: function () {
        a = { ...n };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationIds: s, dismissedAt: t, dismissibleContent: i } = e;
        if (0 === s.length) return !1;
        let l = { ...a, gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [i]: { ...a.gameUpsellsDismissal[i] } } };
        for (let e of s) {
            let s = a.gameUpsellsDismissal[i]?.[e],
                n = null != s ? s.timesDismissed + 1 : 1;
            l.gameUpsellsDismissal[i][e] = { dismissedAt: t, timesDismissed: n };
        }
        a = l;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
        let { applicationId: s, dismissibleContent: t } = e,
            i = a.gameUpsellsDismissal[t];
        if (null == i || null == i[s]) return;
        let l = { ...i };
        delete l[s], (a = { gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [t]: l } });
    },
});

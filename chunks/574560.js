var t = l(855986),
    i = l(73153);
let n = { gameUpsellsDismissal: {} },
    a = { ...n };
class o extends t.Ay.PersistedStore {
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
let r = new o(i.h, {
    LOGOUT: function () {
        a = { ...n };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationIds: s, dismissedAt: l, dismissibleContent: t } = e;
        if (0 === s.length) return !1;
        let i = { ...a, gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [t]: { ...a.gameUpsellsDismissal[t] } } };
        for (let e of s) {
            let s = a.gameUpsellsDismissal[t]?.[e],
                n = null != s ? s.timesDismissed + 1 : 1;
            i.gameUpsellsDismissal[t][e] = { dismissedAt: l, timesDismissed: n };
        }
        a = i;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
        let { applicationId: s, dismissibleContent: l } = e,
            t = a.gameUpsellsDismissal[l];
        if (null == t || null == t[s]) return;
        let i = { ...t };
        (delete i[s], (a = { gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [l]: i } }));
    },
});
l.d(s, {}, { A: r });

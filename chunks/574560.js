n.d(t, { A: () => o });
var i = n(311907),
    l = n(73153);
let s = { gameUpsellsDismissal: {} },
    a = { ...s };
class r extends i.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        a = e ?? a;
    }
    getState() {
        return a;
    }
    getGameUpsellDismissal(e, t) {
        return a.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let o = new r(l.h, {
    LOGOUT: function () {
        a = { ...s };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            l = a.gameUpsellsDismissal[i]?.[t],
            s = null != l ? l.timesDismissed + 1 : 1;
        a = {
            gameUpsellsDismissal: {
                ...a.gameUpsellsDismissal,
                [i]: { ...a.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: s } },
            },
        };
    },
});

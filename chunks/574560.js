"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153);
let l = { gameUpsellsDismissal: {} },
    a = { ...l };
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
let o = new r(s.h, {
    LOGOUT: function () {
        a = { ...l };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            s = a.gameUpsellsDismissal[i]?.[t],
            l = null != s ? s.timesDismissed + 1 : 1;
        a = {
            gameUpsellsDismissal: {
                ...a.gameUpsellsDismissal,
                [i]: { ...a.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: l } },
            },
        };
    },
});

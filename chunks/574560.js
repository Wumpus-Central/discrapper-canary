n.d(t, { A: () => o });
var l = n(17928),
    s = n(228366);
let i = { gameUpsellsDismissal: {} },
    a = { ...i };
class r extends l.Ay.PersistedStore {
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
    getAllGameUpsellDismissals(e) {
        return a.gameUpsellsDismissal[e] ?? null;
    }
}
let o = new r(s.h, {
    LOGOUT: function () {
        a = { ...i };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationIds: t, dismissedAt: n, dismissibleContent: l } = e;
        if (0 === t.length) return !1;
        let s = { ...a, gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [l]: { ...a.gameUpsellsDismissal[l] } } };
        for (let e of t) {
            let t = a.gameUpsellsDismissal[l]?.[e],
                i = null != t ? t.timesDismissed + 1 : 1;
            s.gameUpsellsDismissal[l][e] = { dismissedAt: n, timesDismissed: i };
        }
        a = s;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
        let { applicationId: t, dismissibleContent: n } = e,
            l = a.gameUpsellsDismissal[n];
        if (null == l || null == l[t]) return;
        let s = { ...l };
        delete s[t], (a = { gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [n]: s } });
    },
});

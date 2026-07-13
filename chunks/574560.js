n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366);
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
    getAllGameUpsellDismissals(e) {
        return a.gameUpsellsDismissal[e] ?? null;
    }
}
let o = new r(l.h, {
    LOGOUT: function () {
        a = { ...s };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationIds: t, dismissedAt: n, dismissibleContent: i } = e;
        if (0 === t.length) return !1;
        let l = { ...a, gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [i]: { ...a.gameUpsellsDismissal[i] } } };
        for (let e of t) {
            let t = a.gameUpsellsDismissal[i]?.[e],
                s = null != t ? t.timesDismissed + 1 : 1;
            l.gameUpsellsDismissal[i][e] = { dismissedAt: n, timesDismissed: s };
        }
        a = l;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
        let { applicationId: t, dismissibleContent: n } = e,
            i = a.gameUpsellsDismissal[n];
        if (null == i || null == i[t]) return;
        let l = { ...i };
        delete l[t], (a = { gameUpsellsDismissal: { ...a.gameUpsellsDismissal, [n]: l } });
    },
});

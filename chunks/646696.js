"use strict";
n.d(t, { A: () => S });
var r = n(439372),
    i = n(183636),
    a = n(809733),
    s = n(927813),
    o = n(723702),
    l = n(829219),
    u = n(859703),
    c = n(341915),
    d = n(245853),
    _ = n(51935),
    f = n(302654),
    h = n(677402),
    p = n(654487);
let g = s.A.Millis.DAY,
    E = 30 * s.A.Millis.MINUTE,
    A = 5 * s.A.Millis.SECOND,
    I = 5 * s.A.Millis.MINUTE,
    T = 12 * s.A.Millis.HOUR;
class y extends r.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    initialQuestHomeHeroFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    _fetch(e) {
        if (
            !(0, h.s)({ location: p.rE.QUESTS_MANAGER }) ||
            u.A.isFetchingCurrentQuests ||
            (0, a.I)() ||
            ((0, l.N1)(), (0, o.isMac)() && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = f.A.getConfig({ location: "QuestFetchManager" });
        t || (0, l.r8)(c.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        let e = (0, _.u)({ location: p.rE.QUESTS_MANAGER });
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > g && this._fetch("post_connect_recurring");
            }, E));
        let t = Math.floor(Math.random() * A);
        this.initialFetchTimerId = window.setTimeout(() => {
            !(Date.now() - t < u.A.lastFetchedCurrentQuests) &&
                (e || 0 === u.A.lastFetchedCurrentQuests) &&
                this._fetch("post_connect_initial");
        }, t);
        let { enabled: n } = d.sn.getConfig({ location: p.rE.QUESTS_MANAGER }),
            { enabled: r } = d.Iq.getConfig({ location: p.rE.QUESTS_MANAGER });
        if (n && r && (0, h.s)({ location: p.rE.QUESTS_MANAGER })) {
            let e = t + Math.floor(Math.random() * A);
            this.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
                try {
                    (0, l.Yf)();
                } catch (e) {}
            }, e);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + T > Date.now() ||
            u.A.lastFetchedCurrentQuests + T > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: r } = e;
        !("localization" in n.proto) ||
            !t ||
            r ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= I ||
            ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
    };
    handleLogout = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.lastFetchAttemptedAt = 0),
            (this.lastFetchedQuestForLocaleChangeAt = 0);
    };
    actions = {
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
        RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
        USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
        LOGOUT: this.handleLogout,
    };
}
let S = new y();

"use strict";
n.d(t, { A: () => T });
var r = n(439372),
    i = n(183636),
    s = n(927813),
    a = n(723702),
    o = n(829219),
    l = n(859703),
    u = n(341915),
    c = n(245853),
    d = n(51935),
    _ = n(302654),
    f = n(677402),
    p = n(654487);
let h = s.A.Millis.DAY,
    m = 30 * s.A.Millis.MINUTE,
    E = 5 * s.A.Millis.SECOND,
    g = 5 * s.A.Millis.MINUTE,
    A = 12 * s.A.Millis.HOUR;
class I extends r.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    initialQuestHomeHeroFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    _fetch(e) {
        if (
            !(0, f.s)({ location: p.rE.QUESTS_MANAGER }) ||
            l.A.isFetchingCurrentQuests ||
            ((0, o.N1)(), (0, a.isMac)() && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = _.A.getConfig({ location: "QuestFetchManager" });
        t || (0, o.r8)(u.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        let e = (0, d.u)({ location: p.rE.QUESTS_MANAGER });
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > h && this._fetch("post_connect_recurring");
            }, m));
        let t = Math.floor(Math.random() * E);
        this.initialFetchTimerId = window.setTimeout(() => {
            !(Date.now() - t < l.A.lastFetchedCurrentQuests) &&
                (e || 0 === l.A.lastFetchedCurrentQuests) &&
                this._fetch("post_connect_initial");
        }, t);
        let { enabled: n } = c.sn.getConfig({ location: p.rE.QUESTS_MANAGER }),
            { enabled: r } = c.Iq.getConfig({ location: p.rE.QUESTS_MANAGER });
        if (n && r && (0, f.s)({ location: p.rE.QUESTS_MANAGER })) {
            let e = t + Math.floor(Math.random() * E);
            this.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
                try {
                    (0, o.Yf)();
                } catch (e) {}
            }, e);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + A > Date.now() ||
            l.A.lastFetchedCurrentQuests + A > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: r } = e;
        !("localization" in n.proto) ||
            !t ||
            r ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= g ||
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
let T = new I();

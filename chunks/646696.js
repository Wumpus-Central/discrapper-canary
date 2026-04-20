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
    d = n(302654),
    _ = n(971276),
    f = n(654487);
let p = s.A.Millis.DAY,
    h = 30 * s.A.Millis.MINUTE,
    m = 5 * s.A.Millis.SECOND,
    E = 5 * s.A.Millis.MINUTE,
    g = 12 * s.A.Millis.HOUR,
    A = 5 * s.A.Millis.MINUTE;
class I extends r.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    initialQuestHomeHeroFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    _fetch(e) {
        if (!(0, _.s)() || l.A.isFetchingCurrentQuests || ((0, o.N1)(), (0, a.isMac)() && "focused" !== i.A.getState()))
            return;
        let { enableNewRequestBehavior: t } = d.A.getConfig({ location: "QuestFetchManager" });
        t || (0, o.r8)(u.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > p && this._fetch("post_connect_recurring");
            }, h));
        let e = Math.floor(Math.random() * m);
        this.initialFetchTimerId = window.setTimeout(() => {
            Date.now() - l.A.lastFetchedCurrentQuests <= A || this._fetch("post_connect_initial");
        }, e);
        let { enabled: t } = c.Iq.getConfig({ location: f.rE.QUESTS_MANAGER });
        if (t && (0, _.s)()) {
            let t = e + Math.floor(Math.random() * m);
            this.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
                try {
                    let { enabled: e } = c.rI.getConfig({ location: "QuestFetchManager" });
                    e ? (0, o.Am)() : (0, o.Yf)();
                } catch (e) {}
            }, t);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + g > Date.now() ||
            l.A.lastFetchedCurrentQuests + g > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: r } = e;
        !("localization" in n.proto) ||
            !t ||
            r ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E ||
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

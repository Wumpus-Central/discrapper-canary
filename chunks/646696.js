n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(439372),
    i = n(183636),
    a = n(927813),
    o = n(67486),
    s = n(723702),
    l = n(829219),
    c = n(859703),
    u = n(341915),
    d = n(51935),
    f = n(302654),
    p = n(677402),
    _ = n(654487);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = a.A.Millis.DAY,
    g = 30 * a.A.Millis.MINUTE,
    E = 5 * a.A.Millis.SECOND,
    y = 5 * a.A.Millis.MINUTE,
    b = 12 * a.A.Millis.HOUR;
class O extends r.A {
    _fetch(e) {
        if (
            !(0, p.s)({
                location: _.rE.QUESTS_MANAGER,
            }) ||
            c.A.isFetchingCurrentQuests ||
            (0, o.I)() ||
            ((0, l.N1)(), (0, s.isMac)() && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = f.A.getConfig({
            location: "QuestFetchManager",
        });
        t || (0, l.r8)(u.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    constructor(...e) {
        super(...e),
            h(this, "instantiatedAt", Date.now()),
            h(this, "initialFetchTimerId", null),
            h(this, "recurringFetchTimerId", null),
            h(this, "lastFetchAttemptedAt", 0),
            h(this, "lastFetchedQuestForLocaleChangeAt", 0),
            h(this, "handleQuestsFetchCurrentQuestsBegin", () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            h(this, "handlePostConnectionOpen", () => {
                let e = (0, d.u)({
                    location: _.rE.QUESTS_MANAGER,
                });
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > m && this._fetch("post_connect_recurring");
                    }, g));
                let t = Math.floor(Math.random() * E);
                this.initialFetchTimerId = window.setTimeout(() => {
                    !(Date.now() - t < c.A.lastFetchedCurrentQuests) &&
                        (e || 0 === c.A.lastFetchedCurrentQuests) &&
                        this._fetch("post_connect_initial");
                }, t);
            }),
            h(this, "handleRunningGamesChange", () => {
                this.instantiatedAt + b > Date.now() ||
                    c.A.lastFetchedCurrentQuests + b > Date.now() ||
                    this._fetch("running_games");
            }),
            h(this, "handleUserSettingsProtoUpdate", (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !("localization" in n.proto) ||
                    !t ||
                    r ||
                    Date.now() - this.lastFetchedQuestForLocaleChangeAt <= y ||
                    ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
            }),
            h(this, "handleLogout", () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.lastFetchAttemptedAt = 0),
                    (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            h(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout,
            });
    }
}
let v = new O();

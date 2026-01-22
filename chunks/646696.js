n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(439372),
    i = n(183636),
    a = n(927813),
    s = n(67486),
    o = n(829219),
    l = n(859703),
    c = n(341915),
    u = n(245853),
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
    b = 5 * a.A.Millis.MINUTE,
    y = 12 * a.A.Millis.HOUR;
class O extends r.A {
    _fetch(e) {
        if (
            !(0, p.s)({
                location: _.rE.QUESTS_MANAGER,
            }) ||
            l.A.isFetchingCurrentQuests ||
            (0, s.I)() ||
            ((0, o.N1)(),
            u.Bw.getConfig({
                location: _.rE.QUESTS_MANAGER,
            }).enabled && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = f.A.getConfig({
            location: "QuestFetchManager",
        });
        t || (0, o.r8)(c.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
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
                    !(Date.now() - t < l.A.lastFetchedCurrentQuests) &&
                        (e || 0 === l.A.lastFetchedCurrentQuests) &&
                        this._fetch("post_connect_initial");
                }, t);
            }),
            h(this, "handleRunningGamesChange", () => {
                this.instantiatedAt + y > Date.now() ||
                    l.A.lastFetchedCurrentQuests + y > Date.now() ||
                    this._fetch("running_games");
            }),
            h(this, "handleUserSettingsProtoUpdate", (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !("localization" in n.proto) ||
                    !t ||
                    r ||
                    Date.now() - this.lastFetchedQuestForLocaleChangeAt <= b ||
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
let A = new O();

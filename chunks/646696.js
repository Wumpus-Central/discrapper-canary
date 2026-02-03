n.d(t, {
    A: () => A,
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
    d = n(405670),
    f = n(51935),
    p = n(302654),
    _ = n(677402),
    h = n(654487);

function m(e, t, n) {
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
let g = a.A.Millis.DAY,
    E = 30 * a.A.Millis.MINUTE,
    y = 5 * a.A.Millis.SECOND,
    b = 5 * a.A.Millis.MINUTE,
    O = 12 * a.A.Millis.HOUR;
class v extends r.A {
    _fetch(e) {
        if (
            !(0, _.s)({
                location: h.rE.QUESTS_MANAGER,
            }) ||
            c.A.isFetchingCurrentQuests ||
            (0, o.I)() ||
            ((0, l.N1)(), (0, s.isMac)() && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = p.A.getConfig({
            location: "QuestFetchManager",
        });
        t || (0, l.r8)(u.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    constructor(...e) {
        super(...e),
            m(this, "instantiatedAt", Date.now()),
            m(this, "initialFetchTimerId", null),
            m(this, "recurringFetchTimerId", null),
            m(this, "lastFetchAttemptedAt", 0),
            m(this, "lastFetchedQuestForLocaleChangeAt", 0),
            m(this, "handleQuestsFetchCurrentQuestsBegin", () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            m(this, "handlePostConnectionOpen", () => {
                let e = (0, f.u)({
                    location: h.rE.QUESTS_MANAGER,
                });
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > g && this._fetch("post_connect_recurring");
                    }, E));
                let t = Math.floor(Math.random() * y);
                this.initialFetchTimerId = window.setTimeout(() => {
                    !(Date.now() - t < c.A.lastFetchedCurrentQuests) &&
                        (e || 0 === c.A.lastFetchedCurrentQuests) &&
                        this._fetch("post_connect_initial");
                }, t);
            }),
            m(this, "handleRunningGamesChange", () => {
                this.instantiatedAt + O > Date.now() ||
                    c.A.lastFetchedCurrentQuests + O > Date.now() ||
                    this._fetch("running_games");
            }),
            m(this, "handleUserSettingsProtoUpdate", (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                !("localization" in n.proto) ||
                    !t ||
                    r ||
                    Date.now() - this.lastFetchedQuestForLocaleChangeAt <= b ||
                    ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
            }),
            m(this, "handleLogout", () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.lastFetchAttemptedAt = 0),
                    (this.lastFetchedQuestForLocaleChangeAt = 0),
                    d.Kr.getState().clearAllVideoProgress();
            }),
            m(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout,
            });
    }
}
let A = new v();

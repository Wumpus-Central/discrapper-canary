i.d(t, { Fy: () => E, Vv: () => d, Xx: () => h, i4: () => c, oZ: () => s, ry: () => r });
var n = i(636537),
    l = i(228366),
    a = i(652215);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    l.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
}
async function E(e) {
    l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
    try {
        let t = await n.Bo.get({ url: a.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
        return l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
    } catch (e) {
        l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
    }
}
function s() {
    l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
}
function d() {
    l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
}
function h(e) {
    l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
}
async function c(e, t) {
    l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
    try {
        let i = await n.Bo.patch({
            url: a.Rsh.GUILD_WELCOME_SCREEN(e),
            body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: i.body });
    } catch (e) {
        l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
    }
}

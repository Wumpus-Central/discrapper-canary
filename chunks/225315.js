n.d(t, { Fy: () => s, Vv: () => E, Xx: () => o, i4: () => c, oZ: () => d, ry: () => r });
var i = n(636537),
    a = n(73153),
    l = n(652215);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    a.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
}
async function s(e) {
    a.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
    try {
        let t = await i.Bo.get({ url: l.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
        return (a.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body);
    } catch (e) {
        a.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
    }
}
function d() {
    a.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
}
function E() {
    a.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
}
function o(e) {
    a.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
}
async function c(e, t) {
    a.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
    try {
        let n = await i.Bo.patch({
            url: l.Rsh.GUILD_WELCOME_SCREEN(e),
            body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        a.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
    } catch (e) {
        a.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
    }
}

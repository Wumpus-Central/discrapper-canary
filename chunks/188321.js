n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    a = n(952818),
    s = n(57757),
    l = n(974477);
let o = { ...l.Y },
    d = !1,
    c = !1,
    u = !1;
class _ extends i.Ay.DeviceSettingsStore {
    static displayName = "GameModeStore";
    static persistKey = "GameModeStore";
    initialize(e) {
        ((o = {
            enabled: e?.enabled ?? l.Y.enabled,
            promptSuppressedGameIds: e?.promptSuppressedGameIds ?? l.Y.promptSuppressedGameIds,
        }),
            this.syncWith([a.Ay], () => {
                let e = a.Ay.getVisibleRunningGames().some((e) => !0 !== e.isLauncher);
                return e !== d && ((d = e), !0);
            }));
    }
    getUserAgnosticState() {
        return o;
    }
    get enabled() {
        return o.enabled;
    }
    get hasRunningGame() {
        return d;
    }
    get isThrottling() {
        return !!o.enabled && !!d && !!(0, s.v)({ location: "GameModeStore" }).enabled && !c && !u;
    }
    get isDiscordFocused() {
        return c;
    }
    get isDiscordHovered() {
        return u;
    }
    get suppressedPromptGameCount() {
        return o.promptSuppressedGameIds.length;
    }
    isPromptSuppressedForGame(e) {
        return o.promptSuppressedGameIds.includes(e);
    }
}
let E = new _(r.h, {
    GAME_MODE_SET_ENABLED: function (e) {
        return o.enabled !== e.enabled && ((o = { ...o, enabled: e.enabled }), !0);
    },
    GAME_MODE_SUPPRESS_PROMPT: function (e) {
        return (
            !o.promptSuppressedGameIds.includes(e.gameId) &&
            ((o = { ...o, promptSuppressedGameIds: [...o.promptSuppressedGameIds, e.gameId] }), !0)
        );
    },
    GAME_MODE_RESET_PROMPT_SUPPRESSION: function () {
        return 0 !== o.promptSuppressedGameIds.length && ((o = { ...o, promptSuppressedGameIds: [] }), !0);
    },
    GAME_MODE_DISCORD_FOCUS_CHANGE: function (e) {
        return c !== e.focused && ((c = e.focused), !0);
    },
    GAME_MODE_DISCORD_HOVER_CHANGE: function (e) {
        return u !== e.hovered && ((u = e.hovered), !0);
    },
});

n.d(t, { A: () => I });
var i = n(17928),
    r = n(73153),
    a = n(710195),
    s = n(952818),
    l = n(57757),
    o = n(974477);
let d = { ...o.Y },
    c = !1,
    u = !1,
    _ = !1;
function E() {
    let e = s.Ay.getVisibleRunningGames().some((e) => !0 !== e.isLauncher);
    return (
        e !== c && ((c = e) && ((d = { ...d, hasDetectedGame: !0 }), (0, l.v)({ location: "GameModeRunningGame" })), !0)
    );
}
function A() {
    return (c && (0, l.v)({ location: "GameModeExperimentAssignment" }), !1);
}
class h extends i.Ay.DeviceSettingsStore {
    static displayName = "GameModeStore";
    static persistKey = "GameModeStore";
    initialize(e) {
        return (
            (d = {
                enabled: e?.enabled ?? o.Y.enabled,
                promptSuppressedGameIds: e?.promptSuppressedGameIds ?? o.Y.promptSuppressedGameIds,
                hasDetectedGame: e?.hasDetectedGame ?? o.Y.hasDetectedGame,
            }),
            this.syncWith([s.Ay], E),
            this.syncWith([a.A], A),
            E()
        );
    }
    getUserAgnosticState() {
        return d;
    }
    get enabled() {
        return d.enabled;
    }
    get hasRunningGame() {
        return c;
    }
    get hasDetectedGame() {
        return d.hasDetectedGame;
    }
    get isActive() {
        return !!d.enabled && !!c && (0, l.v)({ location: "GameModeStore" }).enabled;
    }
    get isThrottling() {
        return this.isActive && !u && !_;
    }
    get isDiscordFocused() {
        return u;
    }
    get isDiscordHovered() {
        return _;
    }
    get suppressedPromptGameCount() {
        return d.promptSuppressedGameIds.length;
    }
    isPromptSuppressedForGame(e) {
        return d.promptSuppressedGameIds.includes(e);
    }
}
let I = new h(r.h, {
    GAME_MODE_SET_ENABLED: function (e) {
        return d.enabled !== e.enabled && ((d = { ...d, enabled: e.enabled }), !0);
    },
    GAME_MODE_SUPPRESS_PROMPT: function (e) {
        return (
            !d.promptSuppressedGameIds.includes(e.gameId) &&
            ((d = { ...d, promptSuppressedGameIds: [...d.promptSuppressedGameIds, e.gameId] }), !0)
        );
    },
    GAME_MODE_RESET_PROMPT_SUPPRESSION: function () {
        return 0 !== d.promptSuppressedGameIds.length && ((d = { ...d, promptSuppressedGameIds: [] }), !0);
    },
    GAME_MODE_DISCORD_FOCUS_CHANGE: function (e) {
        return u !== e.focused && ((u = e.focused), !0);
    },
    GAME_MODE_DISCORD_HOVER_CHANGE: function (e) {
        return _ !== e.hovered && ((_ = e.hovered), !0);
    },
});

n.d(t, { A: () => I });
var i = n(17928),
    r = n(73153),
    a = n(710195),
    s = n(952818),
    l = n(723702),
    o = n(57757),
    d = n(974477);
let c = { ...d.Y },
    u = !1,
    _ = !1,
    E = !1;
function A() {
    let e = s.Ay.getVisibleRunningGames().some((e) => !0 !== e.isLauncher);
    return (
        e !== u && ((u = e) && ((c = { ...c, hasDetectedGame: !0 }), (0, o.v)({ location: "GameModeRunningGame" })), !0)
    );
}
function h() {
    return (u && (0, o.v)({ location: "GameModeExperimentAssignment" }), !1);
}
class f extends i.Ay.DeviceSettingsStore {
    static displayName = "GameModeStore";
    static persistKey = "GameModeStore";
    static migrations = [
        (e) => {
            let t = { ...e };
            return (
                delete t.promptSuppressedGameIds,
                delete t.promptSuppressedGames,
                !1 === t.enabled && delete t.enabled,
                t
            );
        },
    ];
    initialize(e) {
        return (
            (c = { enabled: e?.enabled, hasDetectedGame: e?.hasDetectedGame ?? d.Y.hasDetectedGame }),
            this.syncWith([s.Ay], A),
            this.syncWith([a.A], h),
            A()
        );
    }
    getUserAgnosticState() {
        return c;
    }
    get enabled() {
        return c.enabled ?? this.isActive;
    }
    getStoredEnabledChoice() {
        return c.enabled;
    }
    isEnabledFor(e) {
        return c.enabled ?? e;
    }
    get hasRunningGame() {
        return u;
    }
    get runningGameId() {
        return s.Ay.getVisibleRunningGames().find((e) => !0 !== e.isLauncher)?.id ?? null;
    }
    get hasDetectedGame() {
        return c.hasDetectedGame;
    }
    get isActive() {
        return !1 !== c.enabled && !!u && !!l.isPlatformEmbedded && (0, o.v)({ location: "GameModeStore" }).enabled;
    }
    get isThrottling() {
        return this.isActive && !_ && !E;
    }
    get isDiscordFocused() {
        return _;
    }
    get isDiscordHovered() {
        return E;
    }
}
let I = new f(r.h, {
    GAME_MODE_SET_ENABLED: function (e) {
        return c.enabled !== e.enabled && ((c = { ...c, enabled: e.enabled }), !0);
    },
    GAME_MODE_DISCORD_FOCUS_CHANGE: function (e) {
        return _ !== e.focused && ((_ = e.focused), !0);
    },
    GAME_MODE_DISCORD_HOVER_CHANGE: function (e) {
        return E !== e.hovered && ((E = e.hovered), !0);
    },
});

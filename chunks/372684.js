"use strict";
n.d(t, { Gy: () => d, RC: () => u, _1: () => E, k9: () => c, nQ: () => A, rb: () => h, yz: () => _ });
var i,
    r,
    a,
    s,
    l,
    o,
    d =
        (((i = {}).MANUAL = "manual"),
        (i.DISTRIBUTED = "distributed"),
        (i.SHOUTING = "shouting"),
        (i.LAUGHTER = "laughter"),
        (i.GAME_EVENT = "game_event"),
        (i.SPEAKING = "speaking"),
        (i.SOUNDBOARD = "soundboard"),
        i),
    c =
        (((r = {}).UNKNOWN = "unknown"),
        (r.BELOW_MINIMUM = "below_minimum"),
        (r.MEETS_MINIMUM = "meets_minimum"),
        (r.MEETS_AUTO_ENABLE = "meets_auto_enable"),
        r),
    u =
        (((a = {}).MAX_CONCURRENT_SAVES = "max_concurrent_saves"),
        (a.NO_ELIGIBLE_SOURCE = "no_eligible_source"),
        (a.MODULE_NOT_LOADED = "module_not_loaded"),
        (a.BUFFER_WARMING_UP = "buffer_warming_up"),
        (a.BRIDGE_SHUTDOWN = "bridge_shutdown"),
        (a.RECORDING_NOT_READY = "recording_not_ready"),
        a),
    _ = (((s = {}).ORIGINAL = "original"), (s.PORTRAIT_9_16 = "9:16"), (s.LANDSCAPE_16_9 = "16:9"), s);
function E(e) {
    if (e?.bounds != null) return e.bounds;
    let t = (function (e) {
        switch (e) {
            case "9:16":
                return 9 / 16;
            case "16:9":
                return 16 / 9;
            default:
                return null;
        }
    })(e?.preset);
    return null != t ? { aspectRatio: t } : null;
}
var A = (((l = {}).CLIP = "clip"), (l.SCREENSHOT = "screenshot"), (l.VOICE_CLIP = "voice_clip"), l),
    h =
        (((o = {}).UNCLASSIFIED = "unclassified"),
        (o.KILL = "kill"),
        (o.MULTIKILL = "multikill"),
        (o.DEATH = "death"),
        (o.ASSIST = "assist"),
        (o.ITEM = "item"),
        (o.VICTORY = "victory"),
        (o.DEFEAT = "defeat"),
        (o.LEVEL_UP = "level_up"),
        (o.TREASURE = "treasure"),
        (o.OBJECTIVE_KILL = "objective_kill"),
        o);

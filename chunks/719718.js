n.d(t, { A: () => j, T: () => l });
var r,
    a = n(17928),
    s = n(73153),
    l =
        (((r = {})[(r.INIT = 0)] = "INIT"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let i = { isMuted: !1 },
    c = {},
    o = { ...i },
    u = null,
    d = null,
    m = null,
    h = 0,
    x = null,
    g = !1;
class f extends a.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    getState() {
        return o;
    }
    initialize(e) {
        null != e && (o = { ...o, ...e });
    }
    get isMuted() {
        return o.isMuted;
    }
    get stats() {
        return u;
    }
    get globalStats() {
        return d;
    }
    get character() {
        return m;
    }
    get fetchState() {
        return h;
    }
    get isSaving() {
        return g;
    }
    get selectedCharacterTraits() {
        return x ?? m ?? c;
    }
}
let j = new f(s.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        o.isMuted = !o.isMuted;
    },
    CHECKPOINT_FETCH_START: function () {
        h = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((u = e.stats), (d = e.globalStats), (m = e.character), (h = 2));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        h = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        g = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((m = e.character), (x = null), (g = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        g = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((m = null), (x = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        x = { ...(x ?? m ?? c), [e.trait]: e.optionId };
    },
    CHECKPOINT_RESET_EDITED_CHARACTER: function () {
        x = null;
    },
    LOGOUT: function () {
        ((o = { ...i }), (u = null), (d = null), (m = null), (h = 0), (x = null), (g = !1));
    },
});

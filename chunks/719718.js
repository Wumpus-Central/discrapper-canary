n.d(t, { A: () => p, T: () => d });
var r,
    a = n(127639),
    s = n(17928),
    l = n(73153),
    i = n(287809),
    c = n(474090),
    o = n(817379),
    d =
        (((r = {})[(r.INIT = 0)] = "INIT"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let u = { isMuted: !1, progress: null },
    m = {},
    h = { ...u },
    x = null,
    g = null,
    f = null,
    j = 0,
    v = null,
    A = !1;
class E extends s.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    static migrations = [(e) => ({ ...e, progress: null })];
    getState() {
        return h;
    }
    initialize(e) {
        (this.waitFor(i.default), null != e && (h = { ...h, ...e }));
    }
    get isMuted() {
        return h.isMuted;
    }
    get stats() {
        return x;
    }
    get globalStats() {
        return g;
    }
    get character() {
        return f;
    }
    get fetchState() {
        return j;
    }
    get isFetching() {
        return 1 === j;
    }
    get isSaving() {
        return A;
    }
    get progress() {
        return h.progress;
    }
    get selectedCharacterTraits() {
        return v ?? f ?? m;
    }
}
let p = new E(l.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        h.isMuted = !h.isMuted;
    },
    CHECKPOINT_FETCH_START: function () {
        j = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((x = e.stats),
            (g = e.globalStats),
            (f = e.character),
            (j = 2),
            null == f && null != h.progress
                ? ((v = (function (e) {
                      let t = (0, c.ki)(i.default.getCurrentUser()),
                          n = {};
                      for (let r of Object.values(a.V)) {
                          let a = e[r];
                          null == a || (0, o.tS)(r, a, { stats: x, hasNitro: t, savedCharacter: f }) || (n[r] = a);
                      }
                      return n;
                  })(h.progress.selectedCharacterTraits)),
                  (h.progress = { ...h.progress, selectedCharacterTraits: v }))
                : (v = null));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        j = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        A = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((f = e.character), (v = null), (A = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        A = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((f = null), (v = null), (h.progress = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        ((v = { ...(v ?? f ?? m), [e.trait]: e.optionId }),
            null != h.progress && (h.progress = { ...h.progress, selectedCharacterTraits: v }));
    },
    CHECKPOINT_SAVE_PROGRESS: function (e) {
        let { stage: t } = e,
            n = v ?? f ?? m,
            { progress: r } = h;
        if (r?.stage === t && r.selectedCharacterTraits === n) return !1;
        h.progress = { stage: t, selectedCharacterTraits: n };
    },
    LOGOUT: function () {
        ((h = { ...u }), (x = null), (g = null), (f = null), (j = 0), (v = null), (A = !1));
    },
});

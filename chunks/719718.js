var r,
    i = a(127639),
    s = a(855986),
    n = a(73153),
    c = a(287809),
    d = a(474090),
    l = a(817379),
    o =
        (((r = {})[(r.INIT = 0)] = "INIT"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let u = { volume: 1, isMuted: !1, progress: null },
    h = {},
    f = { ...u },
    b = null,
    _ = null,
    p = null,
    m = !1,
    x = 0,
    g = null,
    A = !1;
class v extends s.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    static migrations = [(e) => ({ ...e, progress: null }), (e) => ({ volume: 1, ...e })];
    getState() {
        return f;
    }
    initialize(e) {
        (this.waitFor(c.default), null != e && (f = { ...f, ...e }));
    }
    get volume() {
        return f.volume;
    }
    get isMuted() {
        return f.isMuted;
    }
    get stats() {
        return b;
    }
    get globalStats() {
        return _;
    }
    get character() {
        return p;
    }
    get compactAssets() {
        return m;
    }
    get fetchState() {
        return x;
    }
    get isFetching() {
        return 1 === x;
    }
    get isSaving() {
        return A;
    }
    get progress() {
        return f.progress;
    }
    get selectedCharacterTraits() {
        return g ?? p ?? h;
    }
}
let w = new v(n.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        f.isMuted = !f.isMuted;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        let { volume: t } = e;
        if (f.volume === t && !f.isMuted) return !1;
        ((f.volume = t), (f.isMuted = !1));
    },
    CHECKPOINT_FETCH_START: function () {
        x = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((b = e.stats),
            (_ = e.globalStats),
            (p = e.character),
            (m = e.compactAssets),
            (x = 2),
            null == p && null != f.progress
                ? ((g = (function (e) {
                      let t = (0, d.ki)(c.default.getCurrentUser()),
                          a = {};
                      for (let r of Object.values(i.V)) {
                          let i = e[r];
                          null == i || (0, l.tS)(r, i, { stats: b, hasNitro: t, savedCharacter: p }) || (a[r] = i);
                      }
                      return a;
                  })(f.progress.selectedCharacterTraits)),
                  (f.progress = { ...f.progress, selectedCharacterTraits: g }))
                : (g = null));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        x = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        A = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((p = e.character), (g = null), (A = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        A = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((p = null), (g = null), (f.progress = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        ((g = { ...(g ?? p ?? h), [e.trait]: e.optionId }),
            null != f.progress && (f.progress = { ...f.progress, selectedCharacterTraits: g }));
    },
    CHECKPOINT_SAVE_PROGRESS: function (e) {
        let { stage: t } = e,
            a = g ?? p ?? h,
            { progress: r } = f;
        if (r?.stage === t && r.selectedCharacterTraits === a) return !1;
        f.progress = { stage: t, selectedCharacterTraits: a };
    },
    LOGOUT: function () {
        ((f = { ...u }), (b = null), (_ = null), (p = null), (m = !1), (x = 0), (g = null), (A = !1));
    },
});
a.d(t, {}, { A: w, T: o });

a.d(t, { A: () => v, T: () => o });
var s,
    i = a(127639),
    r = a(17928),
    n = a(73153),
    c = a(287809),
    d = a(474090),
    l = a(817379),
    o =
        (((s = {})[(s.INIT = 0)] = "INIT"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.SUCCESS = 2)] = "SUCCESS"),
        (s[(s.ERROR = 3)] = "ERROR"),
        s);
let u = { isMuted: !1, progress: null },
    h = {},
    f = { ...u },
    _ = null,
    b = null,
    p = null,
    x = 0,
    m = null,
    g = !1;
class A extends r.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    static migrations = [(e) => ({ ...e, progress: null })];
    getState() {
        return f;
    }
    initialize(e) {
        (this.waitFor(c.default), null != e && (f = { ...f, ...e }));
    }
    get isMuted() {
        return f.isMuted;
    }
    get stats() {
        return _;
    }
    get globalStats() {
        return b;
    }
    get character() {
        return p;
    }
    get fetchState() {
        return x;
    }
    get isFetching() {
        return 1 === x;
    }
    get isSaving() {
        return g;
    }
    get progress() {
        return f.progress;
    }
    get selectedCharacterTraits() {
        return m ?? p ?? h;
    }
}
let v = new A(n.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        f.isMuted = !f.isMuted;
    },
    CHECKPOINT_FETCH_START: function () {
        x = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((_ = e.stats),
            (b = e.globalStats),
            (p = e.character),
            (x = 2),
            null == p && null != f.progress
                ? ((m = (function (e) {
                      let t = (0, d.ki)(c.default.getCurrentUser()),
                          a = {};
                      for (let s of Object.values(i.V)) {
                          let i = e[s];
                          null == i || (0, l.tS)(s, i, { stats: _, hasNitro: t, savedCharacter: p }) || (a[s] = i);
                      }
                      return a;
                  })(f.progress.selectedCharacterTraits)),
                  (f.progress = { ...f.progress, selectedCharacterTraits: m }))
                : (m = null));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        x = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        g = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((p = e.character), (m = null), (g = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        g = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((p = null), (m = null), (f.progress = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        ((m = { ...(m ?? p ?? h), [e.trait]: e.optionId }),
            null != f.progress && (f.progress = { ...f.progress, selectedCharacterTraits: m }));
    },
    CHECKPOINT_SAVE_PROGRESS: function (e) {
        let { stage: t } = e,
            a = m ?? p ?? h,
            { progress: s } = f;
        if (s?.stage === t && s.selectedCharacterTraits === a) return !1;
        f.progress = { stage: t, selectedCharacterTraits: a };
    },
    LOGOUT: function () {
        ((f = { ...u }), (_ = null), (b = null), (p = null), (x = 0), (m = null), (g = !1));
    },
});

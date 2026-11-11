var r,
    i = a(402102),
    s = a(127639),
    n = a(855986),
    c = a(73153),
    d = a(287809),
    l = a(474090),
    o = a(817379),
    u =
        (((r = {})[(r.INIT = 0)] = "INIT"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let h = { volume: 1, isMuted: !1, progress: null },
    f = {},
    b = { ...h },
    _ = null,
    p = null,
    m = null,
    x = !1,
    g = null,
    A = 0,
    v = null,
    w = !1;
class I extends n.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    static migrations = [(e) => ({ ...e, progress: null }), (e) => ({ volume: 1, ...e })];
    getState() {
        return b;
    }
    initialize(e) {
        (this.waitFor(d.default), null != e && (b = { ...b, ...e }));
    }
    get volume() {
        return b.volume;
    }
    get isMuted() {
        return b.isMuted;
    }
    get stats() {
        return _;
    }
    get globalStats() {
        return p;
    }
    get character() {
        return m;
    }
    get compactAssets() {
        return x;
    }
    get availability() {
        return g;
    }
    get isCharacterCreatorEnabled() {
        return g === i.u.FULL;
    }
    get fetchState() {
        return A;
    }
    get isFetching() {
        return 1 === A;
    }
    get isSaving() {
        return w;
    }
    get progress() {
        return b.progress;
    }
    get selectedCharacterTraits() {
        return v ?? m ?? f;
    }
}
let E = new I(c.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        b.isMuted = !b.isMuted;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        let { volume: t } = e;
        if (b.volume === t && !b.isMuted) return !1;
        ((b.volume = t), (b.isMuted = !1));
    },
    CHECKPOINT_FETCH_START: function () {
        A = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((_ = e.stats),
            (p = e.globalStats),
            (m = e.character),
            (x = e.compactAssets),
            (g = e.availability),
            (A = 2),
            g === i.u.FULL && null == m && null != b.progress
                ? ((v = (function (e) {
                      let t = (0, l.ki)(d.default.getCurrentUser()),
                          a = {};
                      for (let r of Object.values(s.V)) {
                          let i = e[r];
                          null == i || (0, o.tS)(r, i, { stats: _, hasNitro: t, savedCharacter: m }) || (a[r] = i);
                      }
                      return a;
                  })(b.progress.selectedCharacterTraits)),
                  (b.progress = { ...b.progress, selectedCharacterTraits: v }))
                : (v = null));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        A = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        w = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((m = e.character), (v = null), (w = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        w = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((m = null), (v = null), (b.progress = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        ((v = { ...(v ?? m ?? f), [e.trait]: e.optionId }),
            null != b.progress && (b.progress = { ...b.progress, selectedCharacterTraits: v }));
    },
    CHECKPOINT_SAVE_PROGRESS: function (e) {
        let { stage: t } = e,
            a = v ?? m ?? f,
            { progress: r } = b;
        if (r?.stage === t && r.selectedCharacterTraits === a) return !1;
        b.progress = { stage: t, selectedCharacterTraits: a };
    },
    LOGOUT: function () {
        ((b = { ...h }), (_ = null), (p = null), (m = null), (x = !1), (g = null), (A = 0), (v = null), (w = !1));
    },
});
a.d(t, {}, { A: E, T: u });

var r,
    i = a(402102),
    n = a(127639),
    s = a(855986),
    c = a(73153),
    d = a(287809),
    l = a(474090),
    o = a(817379),
    u = a(847011),
    h = a(201779),
    f =
        (((r = {})[(r.INIT = 0)] = "INIT"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.SUCCESS = 2)] = "SUCCESS"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
let b = { volume: 1, isMuted: !1, progress: null },
    p = {},
    _ = { ...b },
    m = null,
    x = null,
    g = null,
    A = !1,
    v = null,
    w = 0,
    I = null,
    E = !1;
class j extends s.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    static migrations = [
        (e) => ({ ...e, progress: null }),
        (e) => ({ volume: 1, ...e }),
        (e) => ({ ...e, progress: null != e.progress ? { ...e.progress, availability: i.u.FULL } : null }),
    ];
    getState() {
        return _;
    }
    initialize(e) {
        (this.waitFor(d.default), null != e && (_ = { ..._, ...e }));
    }
    get volume() {
        return _.volume;
    }
    get isMuted() {
        return _.isMuted;
    }
    get stats() {
        return m;
    }
    get globalStats() {
        return x;
    }
    get character() {
        return g;
    }
    get compactAssets() {
        return A;
    }
    get availability() {
        return v;
    }
    get isCharacterCreatorEnabled() {
        return v === i.u.FULL;
    }
    get fetchState() {
        return w;
    }
    get isFetching() {
        return 1 === w;
    }
    get isSaving() {
        return E;
    }
    get progress() {
        return _.progress;
    }
    get selectedCharacterTraits() {
        return I ?? g ?? p;
    }
}
let S = new j(c.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        _.isMuted = !_.isMuted;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        let { volume: t } = e;
        if (_.volume === t && !_.isMuted) return !1;
        ((_.volume = t), (_.isMuted = !1));
    },
    CHECKPOINT_FETCH_START: function () {
        w = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        var t, a;
        ((m = e.stats),
            (x = e.globalStats),
            (g = e.character),
            (A = e.compactAssets),
            (v = e.availability),
            (w = 2),
            (_.progress =
                ((t = _.progress), (a = v), null == t || a === i.u.UNAVAILABLE || t.availability === a ? t : null)),
            (I = null));
        let { progress: r } = _;
        v === i.u.FULL &&
            null == g &&
            null != r &&
            ((I = (function (e) {
                let t = (0, l.ki)(d.default.getCurrentUser()),
                    a = {};
                for (let r of Object.values(n.V)) {
                    let i = e[r];
                    null == i || (0, o.tS)(r, i, { stats: m, hasNitro: t, savedCharacter: g }) || (a[r] = i);
                }
                return a;
            })(r.selectedCharacterTraits)),
            (_.progress = { ...r, selectedCharacterTraits: I }));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        w = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        E = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((g = e.character), (I = null), (E = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        E = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((g = null), (I = null), (_.progress = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        ((I = { ...(I ?? g ?? p), [e.trait]: e.optionId }),
            null != _.progress && (_.progress = { ..._.progress, selectedCharacterTraits: I }));
    },
    CHECKPOINT_SAVE_PROGRESS: function (e) {
        let { stage: t } = e;
        if (null == v) return !1;
        let a = v === i.u.FULL;
        if (!(0, u.E1)({ stats: m, character: g, isCharacterCreatorEnabled: a })) return !1;
        let { progress: r } = _;
        if (r?.stage === h.s9.SUMMARY) return !1;
        let n = I ?? g ?? p;
        if (r?.stage === t && r.selectedCharacterTraits === n) return !1;
        _.progress = { stage: t, selectedCharacterTraits: n, availability: v };
    },
    LOGOUT: function () {
        ((_ = { ...b }), (m = null), (x = null), (g = null), (A = !1), (v = null), (w = 0), (I = null), (E = !1));
    },
});
a.d(t, {}, { A: S, T: f });

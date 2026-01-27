n.d(t, {
    $: () => u,
    A: () => x,
});
var r,
    l,
    a = n(311907),
    i = n(73153),
    s = n(532294);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
var u =
    (((r = {})[(r.INIT = 0)] = "INIT"),
    (r[(r.FETCHING = 1)] = "FETCHING"),
    (r[(r.SUCCESS = 2)] = "SUCCESS"),
    (r[(r.ERROR = 3)] = "ERROR"),
    r);
let d = {},
    m = 0,
    f = !1,
    p = {
        volume: 1,
        isMuted: !1,
        highestSlideSeen: s.P7.WELCOME,
        hasSeenRewatchPopover: !1,
    },
    h = c({}, p);

function b() {
    (d = {}), (m = 0), (f = !1);
}
class g extends (l = a.Ay.PersistedStore) {
    getState() {
        return h;
    }
    initialize(e) {
        b(), null != e && (h = c({}, h, e));
    }
    getCheckpointData() {
        return d;
    }
    getFetchState() {
        return m;
    }
    get volume() {
        return h.volume;
    }
    get isMuted() {
        return h.isMuted;
    }
    get highestSlideSeen() {
        return h.highestSlideSeen;
    }
    get hasSeenRewatchPopover() {
        return h.hasSeenRewatchPopover;
    }
    get hasOpenedCheckpointThisSession() {
        return f;
    }
}
o(g, "displayName", "CheckpointStore"), o(g, "persistKey", "CheckpointStore");
let x = new g(i.h, {
    CHECKPOINT_FETCH_START: function () {
        m = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        (d = e.data), (m = 2);
    },
    CHECKPOINT_FETCH_FAILED: function () {
        m = 3;
    },
    CHECKPOINT_SET_VOLUME: function (e) {
        h.volume = e.volume;
    },
    CHECKPOINT_TOGGLE_MUTE: function () {
        h.isMuted = !h.isMuted;
    },
    CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: function (e) {
        h.highestSlideSeen = e.slide;
    },
    CHECKPOINT_AFTER_CLOSED: function () {
        f = !0;
    },
    CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER: function () {
        h.hasSeenRewatchPopover = !0;
    },
    LOGOUT: function () {
        b(), (h = c({}, p));
    },
});

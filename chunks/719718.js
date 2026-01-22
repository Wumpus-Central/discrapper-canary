n.d(t, {
    $: () => c,
    A: () => T,
});
var r,
    i = n(311907),
    a = n(73153),
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

function l(e) {
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
var c = (function (e) {
    return (
        (e[(e.INIT = 0)] = "INIT"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.SUCCESS = 2)] = "SUCCESS"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
let u = {},
    d = 0,
    f = !1,
    p = {
        volume: 1,
        isMuted: !1,
        highestSlideSeen: s.P7.WELCOME,
        hasSeenRewatchPopover: !1,
    },
    _ = l({}, p);

function h() {
    (u = {}), (d = 0), (f = !1);
}

function m() {
    h(), (_ = l({}, p));
}

function g() {
    d = 1;
}

function E(e) {
    (u = e.data), (d = 2);
}

function b() {
    d = 3;
}

function y(e) {
    _.volume = e.volume;
}

function O() {
    _.isMuted = !_.isMuted;
}

function A(e) {
    _.highestSlideSeen = e.slide;
}

function v() {
    f = !0;
}

function S() {
    _.hasSeenRewatchPopover = !0;
}
class I extends (r = i.Ay.PersistedStore) {
    getState() {
        return _;
    }
    initialize(e) {
        h(), null != e && (_ = l({}, _, e));
    }
    getCheckpointData() {
        return u;
    }
    getFetchState() {
        return d;
    }
    get volume() {
        return _.volume;
    }
    get isMuted() {
        return _.isMuted;
    }
    get highestSlideSeen() {
        return _.highestSlideSeen;
    }
    get hasSeenRewatchPopover() {
        return _.hasSeenRewatchPopover;
    }
    get hasOpenedCheckpointThisSession() {
        return f;
    }
}
o(I, "displayName", "CheckpointStore"), o(I, "persistKey", "CheckpointStore");
let T = new I(a.h, {
    CHECKPOINT_FETCH_START: g,
    CHECKPOINT_FETCH_SUCCESS: E,
    CHECKPOINT_FETCH_FAILED: b,
    CHECKPOINT_SET_VOLUME: y,
    CHECKPOINT_TOGGLE_MUTE: O,
    CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: A,
    CHECKPOINT_AFTER_CLOSED: v,
    CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER: S,
    LOGOUT: m,
});

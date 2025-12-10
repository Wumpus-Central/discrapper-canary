n.d(t, {
    Z: () => C,
    p: () => c,
});
var r,
    i = n(442837),
    a = n(570140),
    o = n(612776);
function s(e, t, n) {
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
                s(e, t, n[t]);
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
        highestSlideSeen: o.yD.WELCOME,
        hasSeenRewatchPopover: !1,
    },
    _ = l({}, p);
function m() {
    (u = {}), (d = 0), (f = !1);
}
function h() {
    m(), (_ = l({}, p));
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
function v(e) {
    _.highestSlideSeen = e.slide;
}
function S() {
    f = !0;
}
function I() {
    _.hasSeenRewatchPopover = !0;
}
class T extends (r = i.ZP.PersistedStore) {
    getState() {
        return _;
    }
    initialize(e) {
        m(), null != e && (_ = l({}, _, e));
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
s(T, "displayName", "CheckpointStore"), s(T, "persistKey", "CheckpointStore");
let C = new T(a.Z, {
    CHECKPOINT_FETCH_START: g,
    CHECKPOINT_FETCH_SUCCESS: E,
    CHECKPOINT_FETCH_FAILED: b,
    CHECKPOINT_SET_VOLUME: y,
    CHECKPOINT_TOGGLE_MUTE: O,
    CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: v,
    CHECKPOINT_AFTER_CLOSED: S,
    CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER: I,
    LOGOUT: h,
});

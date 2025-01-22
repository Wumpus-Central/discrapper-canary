var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = { enabled: !1 },
    u = {},
    c = {},
    d = !1;
function f(e) {
    let { userId: n, channelId: r, emoji: i } = e;
    u[r] = {
        ...u[r],
        [n]: i
    };
}
function p(e) {
    let { userId: n, channelId: r } = e,
        i = u[r];
    if (null == i) return !1;
    delete i[n];
}
function h(e) {
    let { enabled: n } = e;
    d = n;
}
function _(e) {
    var n;
    let { completingEmoji: r, completingUserId: i, waitingUserId: a, channelId: o } = e,
        s = null !== (n = u[o]) && void 0 !== n ? n : {},
        l = s[a];
    if ((delete s[a], null == l)) return !1;
    c[o] = {
        ...c[o],
        [a]: [l, r],
        [i]: [r, l]
    };
}
function m(e) {
    var n;
    let { firstUserId: r, secondUserId: i, channelId: a } = e,
        o = null !== (n = c[a]) && void 0 !== n ? n : {};
    delete o[r], delete o[i];
}
class g extends (i = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        d = e.enabled;
    }
    getWaitingHighFive(e, n) {
        var r;
        return null === (r = u[e]) || void 0 === r ? void 0 : r[n];
    }
    getCompletedHighFive(e, n) {
        var r;
        return null === (r = c[e]) || void 0 === r ? void 0 : r[n];
    }
    getEnabled() {
        return d;
    }
    getUserAgnosticState() {
        return { enabled: d };
    }
}
s(g, 'persistKey', 'HighFiveStore'),
    (n.Z = new g(o.Z, {
        HIGH_FIVE_QUEUE: f,
        HIGH_FIVE_REMOVE: p,
        HIGH_FIVE_SET_ENABLED: h,
        HIGH_FIVE_COMPLETE: _,
        HIGH_FIVE_COMPLETE_CLEAR: m
    }));

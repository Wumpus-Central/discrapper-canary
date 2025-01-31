n.d(t, { Z: () => g });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = { enabled: !1 },
    l = {},
    u = {},
    c = !1;
function d(e) {
    let { userId: t, channelId: n, emoji: i } = e;
    l[n] = {
        ...l[n],
        [t]: i
    };
}
function f(e) {
    let { userId: t, channelId: n } = e,
        i = l[n];
    if (null == i) return !1;
    delete i[t];
}
function _(e) {
    let { enabled: t } = e;
    c = t;
}
function p(e) {
    var t;
    let { completingEmoji: n, completingUserId: i, waitingUserId: r, channelId: a } = e,
        s = null !== (t = l[a]) && void 0 !== t ? t : {},
        o = s[r];
    if ((delete s[r], null == o)) return !1;
    u[a] = {
        ...u[a],
        [r]: [o, n],
        [i]: [n, o]
    };
}
function h(e) {
    var t;
    let { firstUserId: n, secondUserId: i, channelId: r } = e,
        a = null !== (t = u[r]) && void 0 !== t ? t : {};
    delete a[n], delete a[i];
}
class m extends (i = r.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        c = e.enabled;
    }
    getWaitingHighFive(e, t) {
        var n;
        return null === (n = l[e]) || void 0 === n ? void 0 : n[t];
    }
    getCompletedHighFive(e, t) {
        var n;
        return null === (n = u[e]) || void 0 === n ? void 0 : n[t];
    }
    getEnabled() {
        return c;
    }
    getUserAgnosticState() {
        return { enabled: c };
    }
}
s(m, 'persistKey', 'HighFiveStore');
let g = new m(a.Z, {
    HIGH_FIVE_QUEUE: d,
    HIGH_FIVE_REMOVE: f,
    HIGH_FIVE_SET_ENABLED: _,
    HIGH_FIVE_COMPLETE: p,
    HIGH_FIVE_COMPLETE_CLEAR: h
});

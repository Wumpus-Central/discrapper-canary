let r, i, a;
(n.d(t, { Z: () => T }), n(388685));
var o,
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(981631);
function _(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
let p = 7,
    h = 28800000,
    m = g();
function g() {
    return {
        recentCustomStatuses: [],
        currentDefaultStatus: null
    };
}
function E() {
    m = g();
}
function b(e) {
    let { status: t, saveAsDefault: n } = e;
    ((r = t),
        (i = null),
        n &&
            (m.currentDefaultStatus = {
                status: t,
                customHangStatus: i,
                expiresAt: Date.now() + h
            }),
        (a = {
            type: d.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: r
        }));
}
function y(e) {
    let { status: t, emoji: n, saveAsDefault: o } = e;
    ((r = d.tNA.CUSTOM),
        (i = {
            status: t,
            emoji: n
        }));
    let s = [...m.recentCustomStatuses],
        c = s.findIndex((e) => e.status === t && l().isEqual(e.emoji, n));
    (-1 !== c ? s.splice(c, 1) : s.length === p && s.splice(p - 1, 1),
        (m.recentCustomStatuses = [i, ...s]),
        o &&
            (m.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                expiresAt: Date.now() + h
            }),
        (a = {
            type: d.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: r,
            details: t,
            emoji: n
        }));
}
function O(e) {
    let { saveAsDefault: t } = e;
    ((r = null),
        (i = null),
        t &&
            (m.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + h
            }),
        (a = null));
}
function v(e) {
    let { statuses: t } = e,
        n = [...m.recentCustomStatuses];
    (t.forEach((e) => {
        let { status: t, emoji: o } = e,
            s = n.findIndex((e) => e.status === t && l().isEqual(e.emoji, o));
        (-1 !== s && n.splice(s, 1), t === (null == i ? void 0 : i.status) && l().isEqual(o, null == i ? void 0 : i.emoji) && ((r = null), (i = null), (m.currentDefaultStatus = null), (a = null)));
    }),
        (m.recentCustomStatuses = n));
}
class I extends (o = c.ZP.PersistedStore) {
    initialize(e) {
        m = f({}, g(), null != e ? e : {});
    }
    getState() {
        return m;
    }
    getCurrentHangStatus() {
        return r;
    }
    getCustomHangStatus() {
        return i;
    }
    getRecentCustomStatuses() {
        return m.recentCustomStatuses;
    }
    getCurrentDefaultStatus() {
        return m.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
}
(_(I, 'displayName', 'HangStatusStore'), _(I, 'persistKey', 'HangStatusStore'));
let T = new I(u.Z, {
    LOGOUT: E,
    UPDATE_HANG_STATUS: b,
    UPDATE_HANG_STATUS_CUSTOM: y,
    DELETE_INVALID_HANG_STATUSES: v,
    CLEAR_HANG_STATUS: O
});

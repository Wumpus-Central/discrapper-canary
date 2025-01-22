let i, a, o;
var s,
    l = r(47120);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    p = r(981631);
function h(e, n, r) {
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
let _ = 7,
    m = 28800000,
    g = E();
function E() {
    return {
        recentCustomStatuses: [],
        currentDefaultStatus: null
    };
}
function v() {
    g = E();
}
function y(e) {
    let { status: n, saveAsDefault: r } = e;
    (i = n),
        (a = null),
        r &&
            (g.currentDefaultStatus = {
                status: n,
                customHangStatus: a,
                expiresAt: Date.now() + m
            }),
        (o = {
            type: p.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: i
        });
}
function b(e) {
    let { status: n, emoji: r, saveAsDefault: s } = e;
    (i = p.tNA.CUSTOM),
        (a = {
            status: n,
            emoji: r
        });
    let l = [...g.recentCustomStatuses],
        u = l.findIndex((e) => e.status === n && c().isEqual(e.emoji, r));
    -1 !== u ? l.splice(u, 1) : l.length === _ && l.splice(_ - 1, 1),
        (g.recentCustomStatuses = [a, ...l]),
        s &&
            (g.currentDefaultStatus = {
                status: i,
                customHangStatus: a,
                expiresAt: Date.now() + m
            }),
        (o = {
            type: p.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: i,
            details: n,
            emoji: r
        });
}
function I(e) {
    let { saveAsDefault: n } = e;
    (i = null),
        (a = null),
        n &&
            (g.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + m
            }),
        (o = null);
}
function T(e) {
    let { statuses: n } = e,
        r = [...g.recentCustomStatuses];
    n.forEach((e) => {
        let { status: n, emoji: s } = e,
            l = r.findIndex((e) => e.status === n && c().isEqual(e.emoji, s));
        -1 !== l && r.splice(l, 1), n === (null == a ? void 0 : a.status) && c().isEqual(s, null == a ? void 0 : a.emoji) && ((i = null), (a = null), (g.currentDefaultStatus = null), (o = null));
    }),
        (g.recentCustomStatuses = r);
}
class S extends (s = d.ZP.PersistedStore) {
    initialize(e) {
        g = {
            ...E(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return g;
    }
    getCurrentHangStatus() {
        return i;
    }
    getCustomHangStatus() {
        return a;
    }
    getRecentCustomStatuses() {
        return g.recentCustomStatuses;
    }
    getCurrentDefaultStatus() {
        return g.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == i ? null : o;
    }
}
h(S, 'displayName', 'HangStatusStore'),
    h(S, 'persistKey', 'HangStatusStore'),
    (n.Z = new S(f.Z, {
        LOGOUT: v,
        UPDATE_HANG_STATUS: y,
        UPDATE_HANG_STATUS_CUSTOM: b,
        DELETE_INVALID_HANG_STATUSES: T,
        CLEAR_HANG_STATUS: I
    }));

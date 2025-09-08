n.d(t, {
    Bn: () => v,
    Ei: () => C,
    F8: () => O,
    Fo: () => P,
    H4: () => R,
    J0: () => N,
    JO: () => F,
    ME: () => k,
    OA: () => x,
    Ow: () => V,
    UJ: () => w,
    XM: () => S,
    XY: () => D,
    ZF: () => A,
    bj: () => U,
    kk: () => j,
    mA: () => B,
    oK: () => L,
    po: () => T,
    qN: () => G,
    u9: () => M,
    wH: () => Z,
    wx: () => y,
    z2: () => I,
}),
    n(388685);
var r = n(442837),
    i = n(704215),
    a = n(570140),
    o = n(675478),
    s = n(581883),
    l = n(626135),
    c = n(709054),
    u = n(713284),
    d = n(261376),
    f = n(883904),
    _ = n(68985),
    p = n(211644),
    h = n(428967),
    m = n(57207),
    g = n(644916),
    E = n(921944),
    b = n(981631);
let y = 2592000000;
function O(e) {
    var t, n;
    let r = null == (t = s.Z.settings.userContent) ? void 0 : t.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, h.lg)(e) ? (0, g.t)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, h.I0)(e) ? c.default.fromTimestamp(Date.now() + y) : "0",
        numTimesDismissed: null != (n = null == r ? void 0 : r.numTimesDismissed) ? n : 0,
    };
}
function v(e, t, n) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function I(e, t) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function T(e, t, n) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function S(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function A(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function C(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function N(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function R(e, t) {
    var n, r;
    if ((0, m.Bh)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null,
        };
    let i =
            null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
                ? void 0
                : n.lastDismissedVersion,
        a = null != t ? t : (0, g.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i,
    };
}
function P(e, t) {
    var n, r;
    if ((0, m.Bh)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null,
        };
    let i =
            null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
                ? void 0
                : n.lastDismissedAtMs,
        a = null != i && "0" !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0,
        };
    let o = !0;
    if (null != t) {
        let e = a + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && a <= t.showAfterTimestamp);
        o = n < e || !r;
    }
    return {
        isDismissed: o,
        lastDismissedAtMs: a,
    };
}
function w(e, t, n) {
    var r, i, a, o;
    if ((0, m.Bh)(e)) return !0;
    let l =
            null == (i = s.Z.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e])
                ? void 0
                : r.lastDismissedObjectId,
        u =
            null == (o = s.Z.settings.userContent) || null == (a = o.recurringDismissibleContentStates[e])
                ? void 0
                : a.lastDismissedAtMs,
        d = null != u && "0" !== u ? (Number.isNaN(Number(u)) ? void 0 : Number(u)) : void 0,
        f = !1;
    if (null != n && null != d) {
        let e = d + n.cooldownDurationMs,
            t = Date.now(),
            r = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && d <= n.showAfterTimestamp);
        f = t < e || !r;
    }
    let _ = null != l && 1 !== c.default.compare(t, l);
    return f && _;
}
function D(e, t) {
    if ((0, m.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function x(e, t) {
    return (0, r.e7)([s.Z], () => D(e, t));
}
function L(e, t) {
    if ((0, m.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function j(e, t, n) {
    !((0, p.cI)(e) || _.Z.hasUserHitDCCap(e, null == t ? void 0 : t.guildId)) &&
        (n ||
            (a.Z.dispatch({
                type: "DCF_EVENT_LOGGED",
                eventType: u.D.DC_SHOW_REQUEST,
                dismissibleContent: e,
            }),
            (0, p.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [r, a] = (0, p.Aq)();
                    (0, f.cm)(e, null == t ? void 0 : t.guildId),
                        l.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.z[e],
                            content_count: r,
                            fatigable_content_count: a,
                            group_name: null == t ? void 0 : t.groupName,
                            bypass_fatigue: d.O.has(e),
                            guild_id: null == t ? void 0 : t.guildId,
                            version: null == t ? void 0 : t.version,
                        }),
                        null == t || null == (n = t.onShown) || n.call(t);
                },
            })));
}
function M(e, t) {
    ((0, p.cI)(e) || t.forceTrack) && H(e, t), (0, f.Vr)(e);
}
function k(e, t) {
    let n = !_.Z.hasUserHitDCCap();
    (0, p.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName,
        },
        n,
    );
}
async function U(e, t) {
    let n = (0, g.t)(e);
    await Z(e, n, t);
}
function G(e, t) {
    var n, r;
    let i = null == (n = s.Z.getGuildDismissedContentState(t)) ? void 0 : n[e];
    return (null != (r = null == i ? void 0 : i.numTimesDismissed) ? r : 0) + 1;
}
function B(e, t) {
    var n, r;
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let i = null == (n = s.Z.settings.userContent) ? void 0 : n.recurringDismissibleContentStates[e];
    return (null != (r = null == i ? void 0 : i.numTimesDismissed) ? r : 0) + 1;
}
async function Z(e, t, n) {
    let r = B(e, n);
    M(e, n), await v(e, t, r), k(e, n);
}
async function F(e, t, n) {
    let r = B(e, n);
    M(e, n), await T(e, t, r), k(e, n);
}
async function V(e, t) {
    let n = B(e, t);
    M(e, t), await I(e, n), k(e, t);
}
function H(e, t) {
    var n;
    let [r] = (0, p.Aq)(),
        a = _.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        s = null == a ? null : o.getTime() - a,
        c = (null == t ? void 0 : t.guildId) != null ? G(e, t.guildId) : B(e, null != t ? t : {});
    l.default.track(b.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : E.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: d.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version,
        num_times_dismissed: c,
    });
}

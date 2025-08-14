n.d(t, {
    Bn: () => v,
    Ei: () => N,
    F8: () => O,
    Fo: () => P,
    H4: () => R,
    J0: () => C,
    JO: () => B,
    ME: () => k,
    OA: () => L,
    Ow: () => Z,
    UJ: () => w,
    XM: () => S,
    XY: () => D,
    ZF: () => A,
    bj: () => U,
    kk: () => M,
    oK: () => x,
    po: () => T,
    u9: () => j,
    wH: () => G,
    wx: () => y,
    z2: () => I,
}),
    n(388685);
var r = n(442837),
    i = n(704215),
    o = n(570140),
    a = n(675478),
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
    return {
        lastDismissedVersion: (0, h.lg)(e) ? (0, g.t)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, h.I0)(e) ? c.default.fromTimestamp(Date.now() + y) : "0",
    };
}
function v(e, t) {
    return (0, a.Cd)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
    });
}
function I(e) {
    return (0, a.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
    });
}
function T(e, t) {
    return (0, a.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
    });
}
function S(e, t) {
    return (0, a.m9)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
    });
}
function A(e, t) {
    return (0, a.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
    });
}
function N(e, t) {
    return (0, a.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
    });
}
function C(e, t) {
    return (0, a.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
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
        o = null != t ? t : (0, g.t)(e);
    return {
        isDismissed: null != i && i >= o,
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
        o = null != i && "0" !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === o)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0,
        };
    let a = !0;
    if (null != t) {
        let e = o + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && o <= t.showAfterTimestamp);
        a = n < e || !r;
    }
    return {
        isDismissed: a,
        lastDismissedAtMs: o,
    };
}
function w(e, t, n) {
    var r, i, o, a;
    if ((0, m.Bh)(e)) return !0;
    let l =
            null == (i = s.Z.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e])
                ? void 0
                : r.lastDismissedObjectId,
        u =
            null == (a = s.Z.settings.userContent) || null == (o = a.recurringDismissibleContentStates[e])
                ? void 0
                : o.lastDismissedAtMs,
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
function L(e, t) {
    return (0, r.e7)([s.Z], () => D(e, t));
}
function x(e, t) {
    if ((0, m.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function M(e, t, n) {
    !((0, p.cI)(e) || _.Z.hasUserHitDCCap(e, null == t ? void 0 : t.guildId)) &&
        (n ||
            (o.Z.dispatch({
                type: "DCF_EVENT_LOGGED",
                eventType: u.D.DC_SHOW_REQUEST,
                dismissibleContent: e,
            }),
            (0, p.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [r, o] = (0, p.Aq)();
                    (0, f.cm)(e, null == t ? void 0 : t.guildId),
                        l.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.z[e],
                            content_count: r,
                            fatigable_content_count: o,
                            group_name: null == t ? void 0 : t.groupName,
                            bypass_fatigue: d.O.has(e),
                            guild_id: null == t ? void 0 : t.guildId,
                            version: null == t ? void 0 : t.version,
                        }),
                        null == t || null == (n = t.onShown) || n.call(t);
                },
            })));
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, p.cI)(e) || t.forceTrack) && F(e, t), (0, f.Vr)(e);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !_.Z.hasUserHitDCCap();
    (0, p.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName,
        },
        n,
    );
}
async function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, g.t)(e);
    await G(e, n, t);
}
async function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    j(e, n), await v(e, t), k(e, n);
}
async function B(e, t, n) {
    j(e, n), await T(e, t), k(e, n);
}
async function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    j(e, t), await I(e), k(e, t);
}
function F(e, t) {
    var n;
    let [r] = (0, p.Aq)(),
        o = _.Z.getRenderedAtTimestamp(e),
        a = new Date(),
        s = null == o ? null : a.getTime() - o;
    l.default.track(b.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : E.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: d.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version,
    });
}

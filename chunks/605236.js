n.d(t, {
    Bn: () => O,
    Ei: () => C,
    Fo: () => P,
    H4: () => N,
    J0: () => A,
    JO: () => B,
    ME: () => k,
    OA: () => D,
    Ow: () => V,
    UJ: () => R,
    XM: () => I,
    XY: () => w,
    ZF: () => T,
    bj: () => U,
    kk: () => j,
    mA: () => Z,
    oK: () => x,
    po: () => S,
    qN: () => G,
    u9: () => M,
    wH: () => F,
    wx: () => y,
    z2: () => v,
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
    d = n(96145),
    f = n(261376),
    p = n(883904),
    _ = n(68985),
    m = n(211644);
n(428967);
var h = n(57207),
    g = n(644916),
    E = n(921944),
    b = n(981631);
let y = 2592000000;
function O(e, t, n) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function v(e, t) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function S(e, t, n) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function I(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function T(e, t, n) {
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
function A(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function N(e, t) {
    var n, r;
    if ((0, h.Bh)(e))
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
    if ((0, h.Bh)(e))
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
function R(e, t, n) {
    var r, i, a, o;
    if ((0, h.Bh)(e)) return !0;
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
    let p = null != l && 1 !== c.default.compare(t, l);
    return f && p;
}
function w(e, t) {
    if ((0, h.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function D(e, t) {
    return (0, r.e7)([s.Z], () => w(e, t));
}
function x(e, t) {
    if ((0, h.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
let L = new Set([i.z.ACCOUNT_LINK_INVITE_FRIENDS, i.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER, i.z.ACCOUNT_LINK_PROMPT]);
function j(e, t, n, r) {
    if ((0, m.cI)(e) || _.Z.hasUserHitDCCap(e, null == t ? void 0 : t.guildId)) return;
    let o = d.Z.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == r && L.has(e);
    (!n || o) &&
        (a.Z.dispatch({
            type: "DCF_EVENT_LOGGED",
            eventType: u.D.DC_SHOW_REQUEST,
            dismissibleContent: e,
        }),
        (0, m.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, a] = (0, m.Aq)();
                (0, p.cm)(e, null == t ? void 0 : t.guildId),
                    l.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.z[e],
                        content_count: r,
                        fatigable_content_count: a,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: f.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version,
                    }),
                    null == t || null == (n = t.onShown) || n.call(t);
            },
        }));
}
function M(e, t) {
    ((0, m.cI)(e) || t.forceTrack) && H(e, t), (0, p.Vr)(e);
}
function k(e, t) {
    let n = !_.Z.hasUserHitDCCap();
    (0, m.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName,
        },
        n,
    );
}
async function U(e, t) {
    let n = (0, g.t)(e);
    await F(e, n, t);
}
function G(e, t) {
    var n, r;
    let i = null == (n = s.Z.getGuildDismissedContentState(t)) ? void 0 : n[e];
    return (null != (r = null == i ? void 0 : i.numTimesDismissed) ? r : 0) + 1;
}
function Z(e, t) {
    var n, r;
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let i = null == (n = s.Z.settings.userContent) ? void 0 : n.recurringDismissibleContentStates[e];
    return (null != (r = null == i ? void 0 : i.numTimesDismissed) ? r : 0) + 1;
}
async function F(e, t, n) {
    let r = Z(e, n);
    M(e, n), await O(e, t, r), k(e, n);
}
async function B(e, t, n) {
    let r = Z(e, n);
    M(e, n), await S(e, t, r), k(e, n);
}
async function V(e, t) {
    let n = Z(e, t);
    M(e, t), await v(e, n), k(e, t);
}
function H(e, t) {
    var n;
    let [r] = (0, m.Aq)(),
        a = _.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        s = null == a ? null : o.getTime() - a,
        c = (null == t ? void 0 : t.guildId) != null ? G(e, t.guildId) : Z(e, null != t ? t : {});
    l.default.track(b.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : E.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: f.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version,
        num_times_dismissed: c,
    });
}

"use strict";
n.d(t, {
    Y8: () => k,
    f8: () => D,
    US: () => v,
    UF: () => R,
    dx: () => N,
    zs: () => L,
    Sc: () => y,
    ZG: () => U,
    yz: () => w,
    Vf: () => b,
    yp: () => P,
    Lg: () => x,
    _O: () => M,
}),
    n(938796);
var i,
    r = n(284009),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(665260),
    d = n(17928),
    c = n(626584),
    u = n(945810),
    _ = n(320095),
    E = n(677413),
    A = n(287809),
    h = n(403362),
    I = n(474090),
    f = n(935208),
    p =
        (((i = {})[(i.SCHEDULED = 0)] = "SCHEDULED"),
        (i[(i.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (i[(i.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (i[(i.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (i[(i.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (i[(i.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        i),
    T = n(652215),
    m = n(202541),
    g = n(853297),
    S = n(375708);
let N = new c.A("Scheduled Messages");
class C {
    enabled = !1;
    limit = 0;
    constructor(e, t) {
        a()(null != t.limit, "Config is missing scheduled message limit"), (this.enabled = e), (this.limit = t.limit);
    }
}
let O = (0, u.mj)({
    name: "2026-08-scheduled-messages",
    kind: "user",
    defaultConfig: new C(!1, { limit: 0 }),
    variations: { 1: (e) => new C(!0, JSON.parse(e)), 2: (e) => new C(!0, JSON.parse(e)) },
});
function R(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, E.Ay)(t);
    return i ? [r, (0, o.UI)(n ?? 0, T.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function L(e) {
    let { content: t, flags: n } = e;
    return (0, o.Lt)(n ?? 0, T.pr7.SUPPRESS_NOTIFICATIONS) ? `${E.f5} ${t}` : t;
}
function y() {
    return O.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function D(e) {
    return O.getConfig({ location: e }).enabled;
}
function v() {
    let e = l()().startOf("hour").add(1, "hour");
    return e.isBefore(M()) ? e.add(1, "hour") : e;
}
function b(e, t) {
    return e.isBefore(M()) ? S.intl.string(S.t["w/fgvh"]) : e.isAfter(P(t)) ? S.intl.string(S.t.Nt0tz7) : null;
}
function M() {
    return l()().add(600, "seconds");
}
function P(e) {
    let t = l()().add(691200, "seconds");
    if (null == e) return t;
    let n = l()(f.default.extractTimestamp(e));
    return l().min(t, n.add(g.a, "seconds"));
}
function U(e) {
    let t = (0, I.ki)(A.default.getCurrentUser(), m.PremiumTypes.TIER_2);
    return G(O.getConfig({ location: e }), t);
}
function w(e) {
    return G(
        O.useConfig({ location: e }),
        (0, d.bG)([A.default], () => (0, I.ki)(A.default.getCurrentUser(), m.PremiumTypes.TIER_2)),
    );
}
function G(e, t) {
    return e.enabled
        ? t
            ? { limit: 25, isUpgradable: !1 }
            : { limit: e.limit, isUpgradable: !0 }
        : { limit: 0, isUpgradable: !1 };
}
function x(e) {
    var t;
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        createArgs: {
            channelId: (t = e.create_args).channel_id,
            content: t.content,
            type: t.type,
            flags: t.flags,
            messageReference: t.message_reference,
        },
        state: e.state,
        attachmentUploads: (e.attachment_uploads ?? []).map((e) => ({
            filename: e.filename,
            uploadedFilename: e.uploaded_filename,
            description: e.description,
            title: e.title,
        })),
        record: (0, _.rh)({ ...e.message_preview, timestamp: e.send_at_timestamp }),
    };
}
function k(e) {
    switch (e) {
        case p.SCHEDULED:
            return { isError: !1, stateMessage: S.intl.string(S.t.Fn6Odn) };
        case p.ERROR_CHANNEL_NOT_FOUND:
            return { isError: !0, stateMessage: S.intl.string(S.t.v5O2dK) };
        case p.ERROR_USER_NOT_FOUND:
            return { isError: !0, stateMessage: S.intl.string(S.t.j8uIfG) };
        case p.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
            return { isError: !0, stateMessage: S.intl.string(S.t["w6zHX/"]) };
        case p.ERROR_SEND_FAILED:
            return { isError: !0, stateMessage: S.intl.string(S.t.pflV7z) };
        case p.ERROR_SCHEDULED_MESSAGES_DISABLED:
            return { isError: !0, stateMessage: S.intl.string(S.t.j8uIfG) };
        default:
            (0, h.xb)(e);
    }
}

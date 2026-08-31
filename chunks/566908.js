"use strict";
n.d(t, {
    Lg: () => k,
    Sc: () => D,
    UF: () => R,
    US: () => b,
    Vf: () => M,
    Y8: () => F,
    ZG: () => w,
    _O: () => P,
    dx: () => N,
    f8: () => v,
    q8: () => y,
    yp: () => U,
    yz: () => G,
    zs: () => L,
}),
    n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(626584),
    c = n(945810),
    u = n(320095),
    _ = n(677413),
    E = n(287809),
    A = n(174459),
    h = n(403362),
    I = n(474090),
    f = n(935208),
    p = n(551640),
    T = n(652215),
    m = n(202541),
    g = n(853297),
    S = n(375708);
let N = new d.A("Scheduled Messages");
class C {
    enabled = !1;
    limit = 0;
    constructor(e, t) {
        r()(null != t.limit, "Config is missing scheduled message limit"), (this.enabled = e), (this.limit = t.limit);
    }
}
let O = (0, c.mj)({
    name: "2026-08-scheduled-messages",
    kind: "user",
    defaultConfig: new C(!1, { limit: 0 }),
    variations: { 1: (e) => new C(!0, JSON.parse(e)), 2: (e) => new C(!0, JSON.parse(e)) },
});
function R(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, _.Ay)(t);
    return i ? [r, (0, l.UI)(n ?? 0, T.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function L(e) {
    let { content: t, flags: n } = e;
    return (0, l.Lt)(n ?? 0, T.pr7.SUPPRESS_NOTIFICATIONS) ? `${_.f5} ${t}` : t;
}
function y(e) {
    let { entryPoint: t, isEditing: n, channelId: i } = e;
    A.default.track(T.HAw.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, { entry_point: t, is_editing: n, channel_id: i });
}
function D() {
    return O.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function v(e) {
    return O.getConfig({ location: e }).enabled;
}
function b() {
    let e = s()().startOf("hour").add(1, "hour");
    return e.isBefore(P()) ? e.add(1, "hour") : e;
}
function M(e, t) {
    return e.isBefore(P()) ? S.intl.string(S.t["w/fgvh"]) : e.isAfter(U(t)) ? S.intl.string(S.t.Nt0tz7) : null;
}
function P() {
    return s()().add(600, "seconds");
}
function U(e) {
    let t = s()().add(691200, "seconds");
    if (null == e) return t;
    let n = s()(f.default.extractTimestamp(e));
    return s().min(t, n.add(g.a, "seconds"));
}
function w(e) {
    let t = (0, I.ki)(E.default.getCurrentUser(), m.PremiumTypes.TIER_2);
    return x(O.getConfig({ location: e }), t);
}
function G(e) {
    return x(
        O.useConfig({ location: e }),
        (0, o.bG)([E.default], () => (0, I.ki)(E.default.getCurrentUser(), m.PremiumTypes.TIER_2)),
    );
}
function x(e, t) {
    return e.enabled
        ? t
            ? { limit: 25, isUpgradable: !1 }
            : { limit: e.limit, isUpgradable: !0 }
        : { limit: 0, isUpgradable: !1 };
}
function k(e) {
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
        record: (0, u.rh)({ ...e.message_preview, timestamp: e.send_at_timestamp }),
    };
}
function F(e) {
    switch (e) {
        case p.A.SCHEDULED:
            return { isError: !1, stateMessage: S.intl.string(S.t.Fn6Odn) };
        case p.A.ERROR_CHANNEL_NOT_FOUND:
            return { isError: !0, stateMessage: S.intl.string(S.t.v5O2dK) };
        case p.A.ERROR_USER_NOT_FOUND:
            return { isError: !0, stateMessage: S.intl.string(S.t.j8uIfG) };
        case p.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
            return { isError: !0, stateMessage: S.intl.string(S.t["w6zHX/"]) };
        case p.A.ERROR_SEND_FAILED:
            return { isError: !0, stateMessage: S.intl.string(S.t.pflV7z) };
        case p.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
            return { isError: !0, stateMessage: S.intl.string(S.t.j8uIfG) };
        default:
            (0, h.xb)(e);
    }
}

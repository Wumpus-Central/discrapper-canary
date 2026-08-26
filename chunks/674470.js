"use strict";
n.d(t, {
    US: () => y,
    f8: () => L,
    UF: () => C,
    dx: () => g,
    zs: () => O,
    Sc: () => R,
    ZG: () => D,
    yz: () => v,
    Lg: () => M,
    Y8: () => P,
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
    f =
        (((i = {})[(i.SCHEDULED = 0)] = "SCHEDULED"),
        (i[(i.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (i[(i.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (i[(i.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (i[(i.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (i[(i.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        i),
    p = n(652215),
    T = n(202541);
n(853297);
var m = n(375708);
let g = new c.A("Scheduled Messages");
class S {
    enabled = !1;
    limit = 0;
    constructor(e, t) {
        a()(null != t.limit, "Config is missing scheduled message limit"), (this.enabled = e), (this.limit = t.limit);
    }
}
let N = (0, u.mj)({
    name: "2026-08-scheduled-messages",
    kind: "user",
    defaultConfig: new S(!1, { limit: 0 }),
    variations: { 1: (e) => new S(!0, JSON.parse(e)), 2: (e) => new S(!0, JSON.parse(e)) },
});
function C(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, E.Ay)(t);
    return i ? [r, (0, o.UI)(n ?? 0, p.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function O(e) {
    let { content: t, flags: n } = e;
    return (0, o.Lt)(n ?? 0, p.pr7.SUPPRESS_NOTIFICATIONS) ? `${E.f5} ${t}` : t;
}
function R() {
    return N.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function L(e) {
    return N.getConfig({ location: e }).enabled;
}
function y() {
    let e = l()().add(600, "seconds"),
        t = l()().startOf("hour").add(1, "hour");
    return t.isBefore(e) ? t.add(1, "hour") : t;
}
function D(e) {
    let t = (0, I.ki)(A.default.getCurrentUser(), T.PremiumTypes.TIER_2);
    return b(N.getConfig({ location: e }), t);
}
function v(e) {
    return b(
        N.useConfig({ location: e }),
        (0, d.bG)([A.default], () => (0, I.ki)(A.default.getCurrentUser(), T.PremiumTypes.TIER_2)),
    );
}
function b(e, t) {
    return e.enabled
        ? t
            ? { limit: 25, isUpgradable: !1 }
            : { limit: e.limit, isUpgradable: !0 }
        : { limit: 0, isUpgradable: !1 };
}
function M(e) {
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
function P(e) {
    switch (e) {
        case f.SCHEDULED:
            return { isError: !1, stateMessage: m.intl.string(m.t.Fn6Odn) };
        case f.ERROR_CHANNEL_NOT_FOUND:
            return { isError: !0, stateMessage: m.intl.string(m.t.v5O2dK) };
        case f.ERROR_USER_NOT_FOUND:
            return { isError: !0, stateMessage: m.intl.string(m.t.j8uIfG) };
        case f.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
            return { isError: !0, stateMessage: m.intl.string(m.t["w6zHX/"]) };
        case f.ERROR_SEND_FAILED:
            return { isError: !0, stateMessage: m.intl.string(m.t.pflV7z) };
        case f.ERROR_SCHEDULED_MESSAGES_DISABLED:
            return { isError: !0, stateMessage: m.intl.string(m.t.j8uIfG) };
        default:
            (0, h.xb)(e);
    }
}

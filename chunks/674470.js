"use strict";
n.d(t, { US: () => R, f8: () => C, UF: () => g, dx: () => p, zs: () => S, Sc: () => N, Lg: () => O, Y8: () => L }),
    n(938796);
var i,
    r = n(284009),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(665260);
n(17928);
var d = n(626584),
    c = n(945810),
    u = n(677413),
    _ = n(383233),
    E = n(287809),
    A = n(403362);
n(474090);
var h =
        (((i = {})[(i.SCHEDULED = 0)] = "SCHEDULED"),
        (i[(i.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (i[(i.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (i[(i.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (i[(i.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (i[(i.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        i),
    I = n(652215);
n(202541), n(853297);
var f = n(375708);
let p = new d.A("Scheduled Messages");
class T {
    enabled = !1;
    limit = 0;
    constructor(e, t) {
        a()(null != t.limit, "Config is missing scheduled message limit"), (this.enabled = e), (this.limit = t.limit);
    }
}
let m = (0, c.mj)({
    name: "2026-08-scheduled-messages",
    kind: "user",
    defaultConfig: new T(!1, { limit: 0 }),
    variations: { 1: (e) => new T(!0, JSON.parse(e)), 2: (e) => new T(!0, JSON.parse(e)) },
});
function g(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, u.Ay)(t);
    return i ? [r, (0, o.UI)(n ?? 0, I.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function S(e) {
    let { content: t, flags: n } = e;
    return (0, o.Lt)(n ?? 0, I.pr7.SUPPRESS_NOTIFICATIONS) ? `${u.f5} ${t}` : t;
}
function N() {
    return m.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function C(e) {
    return m.getConfig({ location: e }).enabled;
}
function R() {
    let e = l()().add(600, "seconds"),
        t = l()().startOf("hour").add(1, "hour");
    return t.isBefore(e) ? t.add(1, "hour") : t;
}
function O(e) {
    var t;
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: {
            channelId: (t = e.scheduled_message).channel_id,
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
        record: new _.Ay({
            id: e.scheduled_message_id,
            content: e.scheduled_message.content,
            author: E.default.getUser(e.user_id),
            timestamp: l()(e.send_at_timestamp).toDate(),
            channel_id: e.scheduled_message.channel_id,
        }),
    };
}
function L(e) {
    switch (e) {
        case h.SCHEDULED:
            return { isError: !1, stateMessage: f.intl.string(f.t.Fn6Odn) };
        case h.ERROR_CHANNEL_NOT_FOUND:
            return { isError: !0, stateMessage: f.intl.string(f.t.v5O2dK) };
        case h.ERROR_USER_NOT_FOUND:
            return { isError: !0, stateMessage: f.intl.string(f.t.j8uIfG) };
        case h.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
            return { isError: !0, stateMessage: f.intl.string(f.t["w6zHX/"]) };
        case h.ERROR_SEND_FAILED:
            return { isError: !0, stateMessage: f.intl.string(f.t.pflV7z) };
        case h.ERROR_SCHEDULED_MESSAGES_DISABLED:
            return { isError: !0, stateMessage: f.intl.string(f.t.j8uIfG) };
        default:
            (0, A.xb)(e);
    }
}

"use strict";
n.d(t, { Lg: () => S, Sc: () => T, UF: () => f, US: () => g, dx: () => A, f8: () => m, zs: () => p }), n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(665260);
n(17928);
var o = n(626584),
    d = n(945810),
    c = n(677413),
    u = n(383233),
    _ = n(287809);
n(474090);
var E = n(652215);
n(202541), n(853297);
let A = new o.A("Scheduled Messages");
class h {
    enabled = !1;
    limit = 0;
    constructor(e, t) {
        r()(null != t.limit, "Config is missing scheduled message limit"), (this.enabled = e), (this.limit = t.limit);
    }
}
let I = (0, d.mj)({
    name: "2026-08-scheduled-messages",
    kind: "user",
    defaultConfig: new h(!1, { limit: 0 }),
    variations: { 1: (e) => new h(!0, JSON.parse(e)), 2: (e) => new h(!0, JSON.parse(e)) },
});
function f(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, c.Ay)(t);
    return i ? [r, (0, l.UI)(n ?? 0, E.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function p(e) {
    let { content: t, flags: n } = e;
    return (0, l.Lt)(n ?? 0, E.pr7.SUPPRESS_NOTIFICATIONS) ? `${c.f5} ${t}` : t;
}
function T() {
    return I.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function m(e) {
    return I.getConfig({ location: e }).enabled;
}
function g() {
    let e = s()().add(600, "seconds"),
        t = s()().startOf("hour").add(1, "hour");
    return t.isBefore(e) ? t.add(1, "hour") : t;
}
function S(e) {
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
        record: new u.Ay({
            id: e.scheduled_message_id,
            content: e.scheduled_message.content,
            author: _.default.getUser(e.user_id),
            timestamp: s()(e.send_at_timestamp).toDate(),
            channel_id: e.scheduled_message.channel_id,
        }),
    };
}

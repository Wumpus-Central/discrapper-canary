(n.d(t, {
    FF: () => P,
    Lg: () => V,
    Sc: () => v,
    UF: () => L,
    US: () => U,
    Vf: () => w,
    Y8: () => H,
    ZG: () => k,
    _O: () => G,
    dx: () => C,
    kJ: () => M,
    q8: () => D,
    vK: () => b,
    yp: () => x,
    yz: () => F,
    zs: () => y,
}),
    n(938796));
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
    E = n(576705),
    A = n(287809),
    h = n(174459),
    I = n(403362),
    f = n(474090),
    p = n(935208),
    T = n(551640),
    g = n(652215),
    m = n(202541),
    S = n(853297),
    N = n(375708);
let C = new d.A("Scheduled Messages");
class O {
    enabled = !1;
    limit = 0;
    constructor(e, t) {
        (r()(null != t.limit, "Config is missing scheduled message limit"), (this.enabled = e), (this.limit = t.limit));
    }
}
let R = (0, c.mj)({
    name: "2026-08-scheduled-messages",
    kind: "user",
    defaultConfig: new O(!1, { limit: 0 }),
    variations: { 1: (e) => new O(!0, JSON.parse(e)), 2: (e) => new O(!0, JSON.parse(e)) },
});
function L(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, _.Ay)(t);
    return i ? [r, (0, l.UI)(n ?? 0, g.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function y(e) {
    let { content: t, flags: n } = e;
    return (0, l.Lt)(n ?? 0, g.pr7.SUPPRESS_NOTIFICATIONS) ? `${_.f5} ${t}` : t;
}
function D(e) {
    let { entryPoint: t, isEditing: n, channelId: i } = e;
    h.default.track(g.HAw.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, { entry_point: t, is_editing: n, channel_id: i });
}
function v() {
    return R.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function b(e) {
    let t = v(),
        n = (0, o.bG)([E.A], () => null != e && (!!e.isPrivate() || E.A.can(g.xBc.SEND_MESSAGES, e)));
    return t && n;
}
function M(e, t) {
    return !!R.getConfig({ location: t }).enabled && (!!e.isPrivate() || E.A.can(g.xBc.SEND_MESSAGES, e));
}
function P() {
    let e = G(),
        t = s()().startOf("day").set("hours", 9),
        n = s()().startOf("day").set("hours", 13);
    return [
        t.isAfter(e)
            ? { label: N.intl.string(N.t["qINKo/"]), value: t }
            : { label: N.intl.string(N.t.tjIn9i), value: t.add(1, "day") },
        n.isAfter(e)
            ? { label: N.intl.string(N.t.qT6LjY), value: n }
            : { label: N.intl.string(N.t.EMRZyS), value: n.add(1, "day") },
        { label: N.intl.string(N.t["+P5MmK"]), value: s()().startOf("isoWeek").add(1, "week").set("hours", 9) },
    ];
}
function U() {
    let e = s()().startOf("hour").add(1, "hour");
    return e.isBefore(G()) ? e.add(1, "hour") : e;
}
function w(e, t) {
    return e.isBefore(G()) ? N.intl.string(N.t["w/fgvh"]) : e.isAfter(x(t)) ? N.intl.string(N.t.Nt0tz7) : null;
}
function G() {
    return s()().add(600, "seconds");
}
function x(e) {
    let t = s()().add(691200, "seconds");
    if (null == e) return t;
    let n = s()(p.default.extractTimestamp(e));
    return s().min(t, n.add(S.a, "seconds"));
}
function k(e) {
    let t = (0, f.ki)(A.default.getCurrentUser(), m.PremiumTypes.TIER_2);
    return B(R.getConfig({ location: e }), t);
}
function F(e) {
    return B(
        R.useConfig({ location: e }),
        (0, o.bG)([A.default], () => (0, f.ki)(A.default.getCurrentUser(), m.PremiumTypes.TIER_2)),
    );
}
function B(e, t) {
    return e.enabled
        ? t
            ? { limit: 25, isUpgradable: !1 }
            : { limit: e.limit, isUpgradable: !0 }
        : { limit: 0, isUpgradable: !1 };
}
function V(e) {
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
function H(e) {
    switch (e) {
        case T.A.SCHEDULED:
            return { isError: !1, stateMessage: N.intl.string(N.t.Fn6Odn) };
        case T.A.ERROR_CHANNEL_NOT_FOUND:
            return { isError: !0, stateMessage: N.intl.string(N.t.v5O2dK) };
        case T.A.ERROR_USER_NOT_FOUND:
            return { isError: !0, stateMessage: N.intl.string(N.t.j8uIfG) };
        case T.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
            return { isError: !0, stateMessage: N.intl.string(N.t["w6zHX/"]) };
        case T.A.ERROR_SEND_FAILED:
            return { isError: !0, stateMessage: N.intl.string(N.t.pflV7z) };
        case T.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
            return { isError: !0, stateMessage: N.intl.string(N.t.j8uIfG) };
        default:
            (0, I.xb)(e);
    }
}

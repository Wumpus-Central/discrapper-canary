n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(665260),
    o = n(855986),
    d = n(626584),
    c = n(945810),
    u = n(432005),
    _ = n(677413),
    E = n(576705),
    A = n(287809),
    h = n(129230),
    f = n(403362),
    I = n(474090),
    p = n(811091),
    m = n(551640),
    g = n(652215),
    T = n(682901),
    S = n(853297),
    N = n(792996);
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
function L() {
    return R.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
}
function y() {
    return s()().add(600, "seconds");
}
function D(e) {
    let t = s()().add(691200, "seconds");
    if (null == e) return t;
    let n = s()(p.default.extractTimestamp(e));
    return s().min(t, n.add(S.a, "seconds"));
}
function b(e, t) {
    return e.enabled
        ? t
            ? { limit: 25, isUpgradable: !1 }
            : { limit: e.limit, isUpgradable: !0 }
        : { limit: 0, isUpgradable: !1 };
}
n.d(
    t,
    {},
    {
        FF: function () {
            let e = y(),
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
        },
        Lg: function (e) {
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
        },
        Sc: L,
        UF: function (e) {
            let { content: t, flags: n } = e,
                [i, r] = (0, _.Ay)(t);
            return i ? [r, (0, l.UI)(n ?? 0, g.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
        },
        US: function () {
            let e = s()().startOf("hour").add(1, "hour");
            return e.isBefore(y()) ? e.add(1, "hour") : e;
        },
        Vf: function (e, t) {
            return e.isBefore(y()) ? N.intl.string(N.t["w/fgvh"]) : e.isAfter(D(t)) ? N.intl.string(N.t.Nt0tz7) : null;
        },
        Y8: function (e) {
            switch (e) {
                case m.A.SCHEDULED:
                    return { isError: !1, stateMessage: N.intl.string(N.t.Fn6Odn) };
                case m.A.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: N.intl.string(N.t.v5O2dK) };
                case m.A.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: N.intl.string(N.t.j8uIfG) };
                case m.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: N.intl.string(N.t["w6zHX/"]) };
                case m.A.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: N.intl.string(N.t.pflV7z) };
                case m.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: N.intl.string(N.t.j8uIfG) };
                default:
                    (0, f.xb)(e);
            }
        },
        ZG: function (e) {
            let t = (0, I.ki)(A.default.getCurrentUser(), T.PremiumTypes.TIER_2);
            return b(R.getConfig({ location: e }), t);
        },
        _O: y,
        dx: C,
        kJ: function (e, t) {
            return !!R.getConfig({ location: t }).enabled && (!!e.isPrivate() || E.A.can(g.xBc.SEND_MESSAGES, e));
        },
        q8: function (e) {
            let { entryPoint: t, isEditing: n, channelId: i } = e;
            h.default.track(g.HAw.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, {
                entry_point: t,
                is_editing: n,
                channel_id: i,
            });
        },
        vK: function (e) {
            let t = L(),
                n = (0, o.bG)([E.A], () => null != e && (!!e.isPrivate() || E.A.can(g.xBc.SEND_MESSAGES, e)));
            return t && n;
        },
        yp: D,
        yz: function (e) {
            return b(
                R.useConfig({ location: e }),
                (0, o.bG)([A.default], () => (0, I.ki)(A.default.getCurrentUser(), T.PremiumTypes.TIER_2)),
            );
        },
        zs: function (e) {
            let { content: t, flags: n } = e;
            return (0, l.Lt)(n ?? 0, g.pr7.SUPPRESS_NOTIFICATIONS) ? `${_.f5} ${t}` : t;
        },
    },
);

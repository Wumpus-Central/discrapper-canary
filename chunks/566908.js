n(938796);
var i = n(536637),
    r = n.n(i),
    a = n(665260),
    s = n(855986),
    l = n(626584),
    o = n(432005),
    d = n(677413),
    c = n(576705),
    u = n(287809),
    _ = n(129230),
    E = n(403362),
    A = n(474090),
    f = n(811091),
    h = n(551640),
    I = n(652215),
    p = n(682901),
    m = n(853297),
    g = n(792996);
let T = new l.A("Scheduled Messages");
function S() {
    return r()().add(600, "seconds");
}
function N(e) {
    let t = r()().add(691200, "seconds");
    if (null == e) return t;
    let n = r()(f.default.extractTimestamp(e));
    return r().min(t, n.add(m.a, "seconds"));
}
function C(e) {
    return e ? { limit: 25, isUpgradable: !1 } : { limit: 1, isUpgradable: !0 };
}
n.d(
    t,
    {},
    {
        FF: function () {
            let e = S(),
                t = r()().startOf("day").set("hours", 9),
                n = r()().startOf("day").set("hours", 13);
            return [
                t.isAfter(e)
                    ? { label: g.intl.string(g.t["qINKo/"]), value: t }
                    : { label: g.intl.string(g.t.tjIn9i), value: t.add(1, "day") },
                n.isAfter(e)
                    ? { label: g.intl.string(g.t.qT6LjY), value: n }
                    : { label: g.intl.string(g.t.EMRZyS), value: n.add(1, "day") },
                { label: g.intl.string(g.t["+P5MmK"]), value: r()().startOf("isoWeek").add(1, "week").set("hours", 9) },
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
                record: (0, o.rh)({ ...e.message_preview, timestamp: e.send_at_timestamp }),
            };
        },
        UF: function (e) {
            let { content: t, flags: n } = e,
                [i, r] = (0, d.Ay)(t);
            return i ? [r, (0, a.UI)(n ?? 0, I.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
        },
        US: function () {
            let e = r()().startOf("hour").add(1, "hour");
            return e.isBefore(S()) ? e.add(1, "hour") : e;
        },
        Vf: function (e, t) {
            return e.isBefore(S()) ? g.intl.string(g.t["w/fgvh"]) : e.isAfter(N(t)) ? g.intl.string(g.t.Nt0tz7) : null;
        },
        Y8: function (e) {
            switch (e) {
                case h.A.SCHEDULED:
                    return { isError: !1, stateMessage: g.intl.string(g.t.Fn6Odn) };
                case h.A.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: g.intl.string(g.t.v5O2dK) };
                case h.A.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: g.intl.string(g.t.j8uIfG) };
                case h.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: g.intl.string(g.t["w6zHX/"]) };
                case h.A.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: g.intl.string(g.t.pflV7z) };
                case h.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: g.intl.string(g.t.j8uIfG) };
                default:
                    (0, E.xb)(e);
            }
        },
        ZG: function () {
            return C((0, A.ki)(u.default.getCurrentUser(), p.PremiumTypes.TIER_2));
        },
        _O: S,
        dx: T,
        kJ: function (e) {
            return !!e.isPrivate() || c.A.can(I.xBc.SEND_MESSAGES, e);
        },
        q8: function (e) {
            let { entryPoint: t, isEditing: n, channelId: i } = e;
            _.default.track(I.HAw.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, {
                entry_point: t,
                is_editing: n,
                channel_id: i,
            });
        },
        vK: function (e) {
            return (0, s.bG)([c.A], () => null != e && (!!e.isPrivate() || c.A.can(I.xBc.SEND_MESSAGES, e)));
        },
        yp: N,
        yz: function () {
            return C((0, s.bG)([u.default], () => (0, A.ki)(u.default.getCurrentUser(), p.PremiumTypes.TIER_2)));
        },
        zs: function (e) {
            let { content: t, flags: n } = e;
            return (0, a.Lt)(n ?? 0, I.pr7.SUPPRESS_NOTIFICATIONS) ? `${d.f5} ${t}` : t;
        },
    },
);

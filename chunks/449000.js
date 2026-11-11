var i = n(855986),
    r = n(73153),
    a = n(927813),
    s = n(596720),
    l = n(3030);
let o = 7 * a.A.Millis.DAY,
    d = { readIdToTimestampMap: {} };
class c extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        d =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - o;
        for (let e of Object.keys(d.readIdToTimestampMap).filter((e) => d.readIdToTimestampMap[e] < t))
            delete d.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return d.readIdToTimestampMap[e];
    }
    getState() {
        return d;
    }
    getUserAgnosticState() {
        return d;
    }
}
let u = new c(r.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == d.readIdToTimestampMap[e.id] || n) && (d.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== s.Mm.MESSAGE ||
                null != d.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                (0, l.$)(e.data.channel_id, e.data.message_id) ||
                (d.readIdToTimestampMap[e.id] = 0);
    },
});
n.d(t, {}, { A: u });

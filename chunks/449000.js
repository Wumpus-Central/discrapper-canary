n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(927813),
    l = n(596720),
    s = n(859524);
let o = 7 * a.A.Millis.DAY,
    d = { readIdToTimestampMap: {} };
class u extends i.Ay.DeviceSettingsStore {
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
let c = new u(r.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == d.readIdToTimestampMap[e.id] || n) && (d.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== l.Mm.MESSAGE ||
                null != d.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                (0, s.$r)(e.data.channel_id, e.data.message_id) ||
                (d.readIdToTimestampMap[e.id] = 0);
    },
    CLEAR_ICYMI_READ_STATES: function () {
        d.readIdToTimestampMap = {};
    },
});

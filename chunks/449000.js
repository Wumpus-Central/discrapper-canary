"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(927813),
    a = n(596720),
    o = n(859524);
let l = 7 * s.A.Millis.DAY,
    u = { readIdToTimestampMap: {} };
class c extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        u =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - l;
        for (let e of Object.keys(u.readIdToTimestampMap).filter((e) => u.readIdToTimestampMap[e] < t))
            delete u.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return u.readIdToTimestampMap[e];
    }
    getState() {
        return u;
    }
    getUserAgnosticState() {
        return u;
    }
}
let d = new c(r.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == u.readIdToTimestampMap[e.id] || n) && (u.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== a.Mm.MESSAGE ||
                null != u.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                (0, o.$r)(e.data.channel_id, e.data.message_id) ||
                (u.readIdToTimestampMap[e.id] = 0);
    },
    CLEAR_ICYMI_READ_STATES: function () {
        u.readIdToTimestampMap = {};
    },
});

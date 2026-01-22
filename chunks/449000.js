n.d(t, { A: () => f }), n(896048);
var r,
    i = n(311907),
    l = n(73153),
    a = n(927813),
    s = n(596720),
    o = n(859524);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = 7 * a.A.Millis.DAY,
    d = { readIdToTimestampMap: {} };
class p extends (r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        d =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - u;
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
c(p, "displayName", "ICYMIUnreadStateStore"), c(p, "persistKey", "ICYMIUnreadStateStore");
let f = new p(l.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == d.readIdToTimestampMap[e.id] || n) && (d.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            if (e.type === s.Mm.MESSAGE) {
                var n;
                null != d.readIdToTimestampMap[e.id] ||
                    (null == (n = e.data.message_context) ? void 0 : n.external_content_application_id) != null ||
                    (0, o.$r)(e.data.channel_id, e.data.message_id) ||
                    (d.readIdToTimestampMap[e.id] = 0);
            }
    },
    CLEAR_ICYMI_READ_STATES: function () {
        d.readIdToTimestampMap = {};
    },
});

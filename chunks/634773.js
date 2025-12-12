n.d(t, { Z: () => f }), n(388685);
var r,
    i = n(442837),
    l = n(570140),
    a = n(70956),
    s = n(797394),
    o = n(613928);
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
let u = 7 * a.Z.Millis.DAY,
    d = { readIdToTimestampMap: {} };
class p extends (r = i.ZP.DeviceSettingsStore) {
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
let f = new p(l.Z, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == d.readIdToTimestampMap[e.id] || n) && (d.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            if (e.type === s.Ni.MESSAGE) {
                var n;
                null != d.readIdToTimestampMap[e.id] ||
                    (null == (n = e.data.message_context) ? void 0 : n.external_content_application_id) != null ||
                    (0, o.$U)(e.data.channel_id, e.data.message_id) ||
                    (d.readIdToTimestampMap[e.id] = 0);
            }
    },
    CLEAR_ICYMI_READ_STATES: function () {
        d.readIdToTimestampMap = {};
    },
});

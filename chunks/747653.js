var i = n(855986),
    r = n(73153);
let a = [],
    s = [];
class l extends i.Ay.Store {
    getRecords() {
        return a;
    }
    getUnlaunched() {
        return s;
    }
    getRecord(e) {
        let t = a.find((t) => t.launchId === e);
        return null != t ? t : (s.find((t) => t.launchId === e) ?? null);
    }
    getRecordsForFrame(e) {
        return a.filter((t) => t.frameId === e);
    }
}
let o = new l(r.h, {
    FRAME_LAUNCH_TIMING_CLOSED: function (e) {
        let { record: t } = e;
        null != t.launchStartedMs ? (a = [...a, t].slice(-20)) : (s = [...s, t].slice(-20));
    },
    LOGOUT: function () {
        if (0 === a.length && 0 === s.length) return !1;
        ((a = []), (s = []));
    },
});
n.d(t, {}, { A: o });

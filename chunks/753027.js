n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    l = n(626584),
    a = n(927813),
    s = n(723176);
let o = new l.A("FileSystemStore"),
    d = 10 * a.A.Millis.MINUTE;
class u extends i.Ay.Store {
    isLowDisk = !1;
    constructor() {
        super(r.h, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        }),
            this.refresh(),
            this.waitFor(s.A),
            setInterval(() => this.refresh(), d);
    }
    handlePostConnectionOpen() {
        return this.refresh(), !1;
    }
    handleAppStateUpdate(e) {
        return "active" !== e.state && this.refresh(), !1;
    }
    async refresh() {
        let e = await s.A.database()
            ?.fsInfo()
            ?.catch((e) => o.warn("couldn't get fs info", e));
        if (null != e) {
            let t =
                    e.fs.available < 0x10000000 ||
                    e.fs.available < 3 * e.database.used ||
                    e.fs.available < 2 * e.database.total,
                n =
                    e.fs.available > 0x30000000 &&
                    e.fs.available > 4 * e.database.used &&
                    e.fs.available > 4 * e.database.total,
                i = !!t || (!n && null);
            null != i && this.isLowDisk !== i && ((this.isLowDisk = i), this.emitChange());
        }
    }
}
let c = new u();

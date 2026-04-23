"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153),
    s = n(626584),
    a = n(927813),
    o = n(723176);
let l = new s.A("FileSystemStore"),
    u = 10 * a.A.Millis.MINUTE;
class c extends r.Ay.Store {
    isLowDisk = !1;
    constructor() {
        super(i.h, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        }),
            this.refresh(),
            this.waitFor(o.A),
            setInterval(() => this.refresh(), u);
    }
    handlePostConnectionOpen() {
        return this.refresh(), !1;
    }
    handleAppStateUpdate(e) {
        return "active" !== e.state && this.refresh(), !1;
    }
    async refresh() {
        let e = await o.A.database()
            ?.fsInfo()
            ?.catch((e) => l.warn("couldn't get fs info", e));
        if (null != e) {
            let t =
                    e.fs.available < 0x10000000 ||
                    e.fs.available < 3 * e.database.used ||
                    e.fs.available < 2 * e.database.total,
                n =
                    e.fs.available > 0x30000000 &&
                    e.fs.available > 4 * e.database.used &&
                    e.fs.available > 4 * e.database.total,
                r = !!t || (!n && null);
            null != r && this.isLowDisk !== r && ((this.isLowDisk = r), this.emitChange());
        }
    }
}
let d = new c();

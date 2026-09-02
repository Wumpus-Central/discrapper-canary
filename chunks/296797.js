"use strict";
n.d(t, { A: () => p });
var i = n(228366),
    r = n(780907),
    a = n(110782),
    s = n(439372),
    l = n(627363),
    o = n(569926),
    d = n(760751),
    c = n(189081),
    u = n(480595),
    _ = n(927813),
    E = n(403362),
    A = n(723702),
    h = n(953384),
    I = n(952818);
class f extends s.A {
    intervalId;
    nonGameIntervalId;
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        RUNNING_GAMES_CHANGE: (e) => {
            this.fetchRunningGameRecords(e), this.prefetchSdkApplications();
        },
        LOCAL_ACTIVITY_UPDATE: () =>
            i.h.wait(() => {
                this.prefetchSdkApplications();
            }),
    };
    fetchRunningGameRecords(e) {
        let t = e.games.map((e) => e.id ?? d.A.findGame(e)?.id).filter(E.Vq);
        0 !== t.length && o.I.fetchMany(...t.map((e) => [e]));
    }
    prefetchSdkApplications() {
        let e = new Set();
        for (let t of I.Ay.getRunningGames()) {
            let n = u.A.getApplicationIdForPID(t.pid);
            null != n && e.add(n);
        }
        if (0 === e.size) return;
        let t = [...e].map((e) => [e]);
        l.YY.fetchMany(...t);
    }
    handlePostConnectionOpen() {
        (0, A.isDesktop)() && !c.A.fetched && (0, a.Yq)(),
            r.Ay.getDetectableGames(),
            r.Ay.getDetectableBlocklist(),
            (this.intervalId = setInterval(
                () => {
                    r.Ay.getDetectableGames(), r.Ay.getDetectableBlocklist();
                },
                d.A.detectableGamesTtl + Math.random() * _.A.Millis.HOUR,
            )),
            r.Ay.getDetectableNonGames(),
            (this.nonGameIntervalId = setInterval(
                r.Ay.getDetectableNonGames,
                h.A.ttl + Math.random() * _.A.Millis.HOUR,
            ));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.nonGameIntervalId &&
                (clearInterval(this.nonGameIntervalId), (this.nonGameIntervalId = void 0));
    }
}
let p = new f();

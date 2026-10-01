n.d(t, { A: () => S });
var i = n(435558),
    r = n.n(i),
    a = n(73153),
    s = n(780907),
    l = n(110782),
    o = n(439372),
    d = n(627363),
    c = n(587895),
    u = n(569926),
    _ = n(760751),
    E = n(189081),
    A = n(927813),
    h = n(403362),
    I = n(723702),
    f = n(953384),
    p = n(952818),
    T = n(765741),
    g = n(863160);
class m extends o.A {
    intervalId;
    nonGameIntervalId;
    canonicalGameIdByPid = {};
    actions = {
        POST_CONNECTION_OPEN: () => {
            (this.handlePostConnectionOpen(),
                this.prefetchSdkApplications(),
                a.h.wait(() => this.updateSocialSdkGames()));
        },
        RUNNING_GAMES_CHANGE: (e) => {
            (this.fetchRunningGameRecords(e),
                this.prefetchSdkApplications(),
                a.h.wait(() => this.updateSocialSdkGames()));
        },
        LOCAL_ACTIVITY_UPDATE: () =>
            a.h.wait(() => {
                (this.prefetchSdkApplications(), this.updateSocialSdkGames());
            }),
        START_SESSION: () => a.h.wait(() => this.updateSocialSdkGames()),
        RPC_APP_DISCONNECTED: () => a.h.wait(() => this.updateSocialSdkGames()),
        APPLICATION_FETCH_SUCCESS: () => a.h.wait(() => this.updateSocialSdkGames()),
        APPLICATIONS_FETCH_SUCCESS: () => a.h.wait(() => this.updateSocialSdkGames()),
    };
    updateSocialSdkGames() {
        let e = {};
        for (let t of p.Ay.getRunningGames()) {
            let n = c.A.getApplication(T.A.getApplicationIdForPID(t.pid))?.getCanonicalGameId();
            null != n && (e[t.pid] = n);
        }
        r().isEqual(e, this.canonicalGameIdByPid) ||
            ((this.canonicalGameIdByPid = e),
            a.h.dispatch({ type: "SOCIAL_SDK_GAMES_UPDATE", canonicalGameIdByPid: e }));
    }
    fetchRunningGameRecords(e) {
        let t = e.games
            .flatMap((e) => (null != e.processGame ? [e, (0, g.Un)(e)] : [e]))
            .map((e) => e.id ?? _.A.findGame(e)?.id)
            .filter(h.Vq);
        0 !== t.length && u.I.fetchMany(...t.map((e) => [e]));
    }
    prefetchSdkApplications() {
        let e = new Set();
        for (let t of p.Ay.getRunningGames()) {
            let n = T.A.getApplicationIdForPID(t.pid);
            null != n && e.add(n);
        }
        if (0 === e.size) return;
        let t = [...e].map((e) => [e]);
        d.YY.fetchMany(...t);
    }
    handlePostConnectionOpen() {
        ((0, I.isDesktop)() && !E.A.fetched && (0, l.Yq)(),
            s.Ay.getDetectableGames(),
            s.Ay.getDetectableBlocklist(),
            (this.intervalId = setInterval(
                () => {
                    (s.Ay.getDetectableGames(), s.Ay.getDetectableBlocklist());
                },
                _.A.detectableGamesTtl + Math.random() * A.A.Millis.HOUR,
            )),
            s.Ay.getDetectableNonGames(),
            (this.nonGameIntervalId = setInterval(
                s.Ay.getDetectableNonGames,
                f.A.ttl + Math.random() * A.A.Millis.HOUR,
            )));
    }
    _terminate() {
        ((this.canonicalGameIdByPid = {}),
            null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.nonGameIntervalId &&
                (clearInterval(this.nonGameIntervalId), (this.nonGameIntervalId = void 0)));
    }
}
let S = new m();

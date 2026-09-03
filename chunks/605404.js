n.d(t, { Gl: () => d, ME: () => l, Xv: () => o });
var i = n(587895),
    r = n(760751),
    a = n(480595),
    s = n(973522);
function l(e) {
    let { gameId: t, gameName: n } = (0, s.wH)(e),
        l = { gameId: t, gameName: n, hasResolvedSdkIdentity: !1, usesSocialSdk: !1 },
        o = a.A.getApplicationIdForPID(e.pid),
        d = i.A.getApplication(o)?.getCanonicalGameId();
    if (null == d) return l;
    if (d === t) return { ...l, hasResolvedSdkIdentity: !0 };
    let c = r.A.getDetectableGame(d);
    return c?.name == null ? l : { gameId: d, gameName: c.name, hasResolvedSdkIdentity: !0, usesSocialSdk: !0 };
}
function o(e) {
    return null != e.gameId ? `id:${e.gameId}` : `name:${e.gameName ?? ""}`;
}
class d {
    pendingDetectedLaunchTimeouts = new Map();
    identityKeys = new Map();
    getIdentityKey(e) {
        return this.identityKeys.get(e);
    }
    clearIdentity(e) {
        this.identityKeys.delete(e);
    }
    schedule(e) {
        let { pid: t, identityKey: n, usesSocialSdk: i, callback: r, delayMs: a } = e,
            s = this.pendingDetectedLaunchTimeouts.get(t);
        i && null != s && (clearTimeout(s), this.pendingDetectedLaunchTimeouts.delete(t));
        let l = setTimeout(() => {
            this.pendingDetectedLaunchTimeouts.get(t) === l && this.pendingDetectedLaunchTimeouts.delete(t), r();
        }, a);
        i || this.pendingDetectedLaunchTimeouts.set(t, l), this.identityKeys.set(t, n);
    }
}

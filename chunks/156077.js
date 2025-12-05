n.d(t, {
    ZP: () => c,
    jL: () => u,
}),
    n(388685);
var r = n(442837),
    i = n(570140);
function a(e, t, n) {
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
let o = 10;
class s extends r.yh {
    isVideoStatsEnabled(e) {
        var t;
        return null != (t = this.videoStatsEnabled.get(e)) && t;
    }
    toggleVideoStats(e) {
        let t = this.isVideoStatsEnabled(e);
        this.setVideoStats(e, !t);
    }
    setVideoStats(e, t) {
        if (!t) {
            this.videoStatsEnabled.delete(e) && this.emitChange();
            return;
        }
        if (
            (this.videoStatsEnabled.has(e) && this.videoStatsEnabled.delete(e),
            this.videoStatsEnabled.set(e, t),
            this.videoStatsEnabled.size > o)
        ) {
            let e = this.videoStatsEnabled.size - o,
                t = this.videoStatsEnabled.keys();
            for (let n = 0; n < e; n++) {
                let e = t.next().value;
                null != e && this.videoStatsEnabled.delete(e);
            }
        }
        this.emitChange();
    }
    clearVideoStats(e) {
        this.videoStatsEnabled.delete(e) && this.emitChange();
    }
    constructor(...e) {
        super(...e), a(this, "videoStatsEnabled", new Map());
    }
}
let l = new s(i.Z, {}),
    c = l;
function u(e) {
    l.toggleVideoStats(e);
}

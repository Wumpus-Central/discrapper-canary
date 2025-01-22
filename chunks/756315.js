r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(379649),
    a = r(846519),
    o = r(361291),
    s = r(981631);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = 1000;
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : n;
}
class d {
    start() {
        let { resolution: e, fps: n } = o.Z.getState();
        (this._targetResolution = e), (this._targetFPS = n), this._statInterval.start(u, this._sampleStats), (this._lastLayoutChanged = (0, i.zO)());
    }
    stop() {
        this._statInterval.stop(), (this._streamEnd = (0, i.zO)()), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd) return;
        let n = (0, i.zO)();
        this._incrementLayout(this._lastLayout, (n - this._lastLayoutChanged) / 1000), this._layoutChanges++, (this._lastLayout = e), (this._lastLayoutChanged = n);
    }
    getLayout() {
        return this._lastLayout;
    }
    getStats() {
        let e = {
            num_layout_changes: this._layoutChanges,
            duration_layout_fullscreen: c(this._layoutBuckets[s.hVg.FULL_SCREEN]),
            duration_layout_theatre: c(this._layoutBuckets[s.hVg.THEATRE]),
            duration_layout_pip: c(this._layoutBuckets[s.hVg.PIP]),
            duration_layout_popout: c(this._layoutBuckets[s.hVg.POPOUT]),
            duration_layout_portrait: c(this._layoutBuckets[s.hVg.PORTRAIT]),
            duration_layout_landscape: c(this._layoutBuckets[s.hVg.LANDSCAPE]),
            duration_layout_minimized: c(this._layoutBuckets[s.hVg.MINIMIZED])
        };
        return this._isSender
            ? {
                  ...e,
                  target_fps: this._targetFPS,
                  target_resolution_height: this._targetResolution,
                  stream_settings_changed: this._streamSettingsChanged
              }
            : e;
    }
    constructor(e, n) {
        l(this, '_statInterval', void 0),
            l(this, '_isSender', void 0),
            l(this, '_streamEnd', void 0),
            l(this, '_targetResolution', 0),
            l(this, '_targetFPS', 0),
            l(this, '_streamSettingsChanged', !1),
            l(this, '_lastLayout', void 0),
            l(this, '_lastLayoutChanged', 0),
            l(this, '_layoutChanges', 0),
            l(this, '_layoutBuckets', void 0),
            l(this, '_incrementLayout', (e, n) => {
                null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), (this._layoutBuckets[e] += n);
            }),
            l(this, '_sampleStats', () => {
                let { resolution: e, fps: n } = o.Z.getState();
                this._streamSettingsChanged = e !== this._targetResolution || n !== this._targetFPS;
            }),
            (this._isSender = n),
            (this._statInterval = new a.Xp()),
            (this._lastLayout = e),
            (this._layoutBuckets = {});
    }
}

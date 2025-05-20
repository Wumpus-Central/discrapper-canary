n.d(t, { Z: () => _ });
var r = n(379649),
    i = n(846519),
    o = n(361291),
    a = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = 1000;
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class _ {
    start() {
        let { resolution: e, fps: t } = o.Z.getState();
        (this._targetResolution = e), (this._targetFPS = t), this._statInterval.start(d, this._sampleStats), (this._lastLayoutChanged = (0, r.zO)());
    }
    stop() {
        this._statInterval.stop(), (this._streamEnd = (0, r.zO)()), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd) return;
        let t = (0, r.zO)();
        this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1000), this._layoutChanges++, (this._lastLayout = e), (this._lastLayoutChanged = t);
    }
    getLayout() {
        return this._lastLayout;
    }
    getStats() {
        let e = {
            num_layout_changes: this._layoutChanges,
            duration_layout_fullscreen: f(this._layoutBuckets[a.hVg.FULL_SCREEN]),
            duration_layout_theatre: f(this._layoutBuckets[a.hVg.THEATRE]),
            duration_layout_pip: f(this._layoutBuckets[a.hVg.PIP]),
            duration_layout_popout: f(this._layoutBuckets[a.hVg.POPOUT]),
            duration_layout_portrait: f(this._layoutBuckets[a.hVg.PORTRAIT]),
            duration_layout_landscape: f(this._layoutBuckets[a.hVg.LANDSCAPE]),
            duration_layout_minimized: f(this._layoutBuckets[a.hVg.MINIMIZED])
        };
        return this._isSender
            ? u(l({}, e), {
                  target_fps: this._targetFPS,
                  target_resolution_height: this._targetResolution,
                  stream_settings_changed: this._streamSettingsChanged
              })
            : e;
    }
    constructor(e, t) {
        s(this, '_statInterval', void 0),
            s(this, '_isSender', void 0),
            s(this, '_streamEnd', void 0),
            s(this, '_targetResolution', 0),
            s(this, '_targetFPS', 0),
            s(this, '_streamSettingsChanged', !1),
            s(this, '_lastLayout', void 0),
            s(this, '_lastLayoutChanged', 0),
            s(this, '_layoutChanges', 0),
            s(this, '_layoutBuckets', void 0),
            s(this, '_incrementLayout', (e, t) => {
                null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), (this._layoutBuckets[e] += t);
            }),
            s(this, '_sampleStats', () => {
                let { resolution: e, fps: t } = o.Z.getState();
                this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS;
            }),
            (this._isSender = t),
            (this._statInterval = new i.Xp()),
            (this._lastLayout = e),
            (this._layoutBuckets = {});
    }
}

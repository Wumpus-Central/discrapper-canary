n.d(t, { A: () => f }), n(896048);
var r = n(73153),
    i = n(439372),
    a = n(927813),
    s = n(996744),
    o = n(971778),
    l = n(342887);
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
function u() {
    return (0, s.Lb)({
        location: "VoiceFiltersCatalogManager",
        autoTrackExposure: !1,
    });
}
class d extends i.A {
    _initialize() {}
    _terminate() {
        clearTimeout(this.rolloverTimeout), clearTimeout(this.refreshTimeout);
    }
    handleVoiceFilterCatalogUpdate(e) {
        let {} = e;
        this._scheduleNextRollover(), this._scheduleRefresh();
    }
    handlePostConnectionOpen() {
        u() && (0, l.st)();
    }
    _scheduleNextRollover() {
        clearTimeout(this.rolloverTimeout);
        let e = o.A.getLimitedTimeVoices();
        if (null == e) return;
        let t = new Date(e.current_set_end).getTime() - new Date().getTime(),
            n = new Date(e.next_set_end).getTime() - new Date().getTime();
        t > 0
            ? (this.rolloverTimeout = setTimeout(() => {
                  r.h.dispatch({ type: "VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES" }), this._scheduleNextRollover();
              }, t))
            : n > 0 &&
              (this.rolloverTimeout = setTimeout(() => {
                  r.h.dispatch({ type: "VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES" });
              }, n));
    }
    _scheduleRefresh() {
        clearTimeout(this.refreshTimeout),
            (this.refreshTimeout = setTimeout(() => {
                (0, l.st)();
            }, a.A.Millis.DAY));
    }
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                VOICE_FILTER_CATALOG_FETCH_SUCCESS: (e) => this.handleVoiceFilterCatalogUpdate(e),
                VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: (e) => this.handleVoiceFilterCatalogUpdate(e),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            }),
            c(this, "rolloverTimeout", null),
            c(this, "refreshTimeout", null);
    }
}
let f = new d();

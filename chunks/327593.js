"use strict";
n.d(t, { A: () => d });
var r = n(73153),
    i = n(439372),
    a = n(927813),
    s = n(996744),
    o = n(971778),
    l = n(342887);
function u() {
    return (0, s.Lb)({ location: "VoiceFiltersCatalogManager", autoTrackExposure: !1 });
}
class c extends i.A {
    actions = {
        VOICE_FILTER_CATALOG_FETCH_SUCCESS: (e) => this.handleVoiceFilterCatalogUpdate(e),
        VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: (e) => this.handleVoiceFilterCatalogUpdate(e),
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
    };
    rolloverTimeout = null;
    refreshTimeout = null;
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
}
let d = new c();

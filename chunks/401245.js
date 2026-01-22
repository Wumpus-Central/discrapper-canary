n.d(t, {
    A: () => S,
}),
    n(321073),
    n(896048);
var r = n(554146),
    i = n(439372),
    a = n(626584),
    s = n(826673),
    o = n(430452),
    l = n(954571),
    c = n(837921),
    u = n(656088),
    d = n(971778),
    f = n(342887),
    p = n(805026),
    _ = n(652215),
    h = n(49999);

function m(e, t, n) {
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

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = new a.A("VoiceFilterManager");

function O(e) {
    var t;
    let n = c.Ay.getVoiceFilters();
    return null != n.getModelIdsForVoiceId
        ? n.getModelIdsForVoiceId(e.id)
        : Object.values(null != (t = e.modelIds) ? t : {});
}
let A = null;
class v extends i.A {
    async handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e;
        if (__OVERLAY__) return;
        null != A && A.abort();
        let r = new AbortController();
        if (((A = r), null == t)) return void (0, f.DF)(null, n);
        let i = d.A.getVoiceFilter(t);
        if (null == i) return void y.error("requested Voice Filter is missing in VoiceFilterStore");
        let a = O(i);
        if (a.length > 0) {
            let e = d.A.getVoiceFilterModels(),
                t = [];
            for (let n of a) {
                var s;
                let r = null == (s = e[n]) ? void 0 : s.url;
                if (null == r) {
                    y.error("Missing model url for voice filter", i.id, n);
                    continue;
                }
                t.push({
                    voiceFilterId: i.id,
                    modelId: n,
                    url: r,
                    fileName: (0, p.L)(n),
                });
            }
            y.info("Waiting for dependencies for voice filter", i.id, t);
            let r = t.map((e) => (0, f.g8)(e, n));
            await Promise.all(r);
        }
        r.signal.aborted || (0, f.DF)(t, n);
    }
    handleVoiceFilterPrefetch(e) {
        if (__OVERLAY__) return;
        let t = d.A.getVoiceFilters(),
            n = d.A.getVoiceFilterModels(),
            r = new Set();
        for (let e of Object.values(t))
            for (let t of O(e))
                r.has(t) ||
                    (r.add(t),
                    (0, f.g8)(
                        {
                            voiceFilterId: e.id,
                            modelId: t,
                            url: n[t].url,
                            fileName: (0, p.L)(t),
                        },
                        {
                            reason: u.O.AUTO_PREFETCH,
                        },
                    ));
    }
    handleVoiceFilterDownloadFailed(e) {
        var t, n;
        let { modelId: r, voiceFilterId: i, error: a } = e,
            s = "USER_CANCELED_DOWNLOAD",
            c = null != a && s in a,
            u = (null != (t = null == a ? void 0 : a.message) ? t : String(a)).substring(0, 200);
        c && (u = s),
            l.default.track(_.HAw.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                canceled: c,
                active_voice_filter_id: null != (n = o.A.getActiveVoiceFilter()) ? n : null,
                success: !1,
                voice_filter_id: i,
                model_id: r,
                error_message: u,
            });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t, analyticsContext: n, activationDurationMs: i } = e,
            a = o.A.getPreviousVoiceFilter();
        if (null !== a && null === t) {
            let e = o.A.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(_.HAw.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: a,
                duration_voice_filter_applied: t,
            });
        }
        null !== t &&
            ((0, s.Dr)(r.M.VOICE_FILTER_IN_CALL_COACHMARK, {
                dismissAction: h.i.INDIRECT_ACTION,
            }),
            (0, s.Dr)(r.M.VOICE_FILTER_FIRST_USE_COACHMARK, {
                dismissAction: h.i.INDIRECT_ACTION,
            }),
            l.default.track(
                _.HAw.VOICE_FILTER_ENABLED,
                b(
                    g(
                        {
                            active_voice_filter_id: t,
                            previous_filter_id: a,
                        },
                        (0, u.A)(n),
                    ),
                    {
                        time_to_activate_native_ms: i,
                    },
                ),
            ));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        l.default.track(_.HAw.VOICE_FILTER_ACTIVATE_FAILED, {
            active_voice_filter_id: null != t ? t : null,
        });
    }
    handleVoiceFilterDownloadCanceled() {
        c.Ay.stopVoiceFilterDownloads();
    }
    constructor(...e) {
        super(...e),
            m(this, "actions", {
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
                VOICE_FILTER_PREFETCH: this.handleVoiceFilterPrefetch,
                VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
                VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed,
            });
    }
}
let S = new v();

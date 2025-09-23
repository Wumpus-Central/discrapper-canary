n.d(t, { Z: () => y }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(846027),
    o = n(872810),
    s = n(147913),
    l = n(569545),
    c = n(951429),
    u = n(199902),
    d = n(944486),
    f = n(998502),
    _ = n(45652);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 1000;
class b extends s.Z {
    async handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (_.d.getState().isEnabled)
            if (null != t) this.findAndWatchStream();
            else {
                let e = await f.ZP.getSetting("conferenceModeSettings", {});
                if ((null == e ? void 0 : e.mediaEngineSettings) != null) {
                    let t = Object.keys(e.mediaEngineSettings).reduce((t, n) => {
                        var r, i;
                        let a = n;
                        return (
                            (t[a] = this.getResetMediaEngineSettings(
                                null != (i = null == (r = e.mediaEngineSettings) ? void 0 : r[a]) ? i : {},
                            )),
                            t
                        );
                    }, {});
                    a.Z.resetMediaEngineSettings(t);
                }
            }
    }
    getResetMediaEngineSettings(e) {
        return i().pickBy(
            g(h({}, e), {
                inputVolume: null != e.inputVolume ? (0, c.A)(e.inputVolume) : void 0,
                outputVolume: null != e.outputVolume ? (0, c.A)(e.outputVolume) : void 0,
            }),
            (e) => null != e,
        );
    }
    findAndWatchStream() {
        let e = d.Z.getVoiceChannelId();
        if (null == e) return;
        let t = u.Z.getAllApplicationStreamsForChannel(e)[0];
        null != t && (0, o.rn)(t);
    }
    constructor(...e) {
        super(...e),
            p(this, "actions", {
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
            }),
            p(
                this,
                "handleVoiceStateUpdates",
                i().debounce((e) => {
                    let { voiceStates: t } = e;
                    _.d.getState().isEnabled &&
                        t.forEach((e) => {
                            let t = u.Z.getStreamForUser(e.userId, e.guildId),
                                n = u.Z.getActiveStreamForUser(e.userId, e.guildId);
                            null != t && null == n
                                ? (0, o.rn)(t)
                                : null == t && null != n && ((0, o.g)((0, l.V9)(n), !1, !0), this.findAndWatchStream());
                        });
                }, E),
            );
    }
}
let y = new b();

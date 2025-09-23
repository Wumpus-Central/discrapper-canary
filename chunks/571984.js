n.d(t, { Z: () => h }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(846027),
    o = n(147913),
    s = n(951429),
    l = n(998502),
    c = n(45652);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class p extends o.Z {
    async handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (c.d.getState().isEnabled && null == t) {
            let e = await l.ZP.getSetting("conferenceModeSettings", {});
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
            _(d({}, e), {
                inputVolume: null != e.inputVolume ? (0, s.A)(e.inputVolume) : void 0,
                outputVolume: null != e.outputVolume ? (0, s.A)(e.outputVolume) : void 0,
            }),
            (e) => null != e,
        );
    }
    constructor(...e) {
        super(...e), u(this, "actions", { VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e) });
    }
}
let h = new p();

let r, i;
n.d(t, { Z: () => I }), n(388685);
var a,
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(358221),
    d = n(569545),
    f = n(199902),
    _ = n(314897),
    p = n(131951),
    h = n(606304),
    m = n(354459);
function g(e, t, n) {
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
function E() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r) e = null;
    else {
        var n, a, o, l, c;
        e = u.Z.getSelectedParticipantId(r);
        let t = f.Z.getLastActiveStream(),
            g = null != e ? u.Z.getParticipant(r, e) : null;
        if ((((null == g ? void 0 : g.type) !== m.fO.ACTIVITY && ((null == g ? void 0 : g.type) !== m.fO.USER || (null == (n = g.voiceState) ? void 0 : n.selfVideo))) || (e = null), null != t && null == e && (e = null == (a = u.Z.getParticipant(r, (0, d.V9)(t))) ? void 0 : a.id), null == e)) {
            let t = _.default.getId(),
                n = s()(u.Z.getVideoParticipants(r)).filter((e) => e.type === m.fO.USER && e.user.id !== t && !p.Z.isLocalVideoDisabled(e.user.id)),
                a = n.map((e) => e.user.id),
                d = Date.now();
            null ==
                (e =
                    null ==
                    (o = n
                        .map((e) => [e.user.id, h.Z.getSpeakingDuration(e.user.id, d)])
                        .filter((e) => {
                            let [t, n] = e;
                            return 0 !== n;
                        })
                        .maxBy((e) => {
                            let [t, n] = e;
                            return -n;
                        }))
                        ? void 0
                        : o[0]) && (e = null != i && a.has(i) ? i : null == (c = n.first()) || null == (l = c.user) ? void 0 : l.id);
        }
    }
    i !== e && ((i = e), t && O.emitChange());
}
let b = s().debounce(E, 300);
function y() {
    return b(), !1;
}
class v extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, _.default, h.Z, f.Z, p.Z), this.syncWith([u.Z, f.Z], y);
    }
    getSpeaker(e) {
        return r !== e && ((r = e), E(!1)), null != i ? i : _.default.getId();
    }
}
g(v, 'displayName', 'VideoSpeakerStore');
let O = new v(c.Z, { AUDIO_SET_LOCAL_VIDEO_DISABLED: y }),
    I = O;

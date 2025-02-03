let i, r;
n.d(t, { Z: () => T }), n(47120);
var a,
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(358221),
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
    if (null == i) e = null;
    else {
        var n, a, s, l, u;
        e = c.Z.getSelectedParticipantId(i);
        let t = f.Z.getLastActiveStream(),
            g = null != e ? c.Z.getParticipant(i, e) : null;
        if ((((null == g ? void 0 : g.type) !== m.fO.ACTIVITY && ((null == g ? void 0 : g.type) !== m.fO.USER || (null === (n = g.voiceState) || void 0 === n ? void 0 : n.selfVideo))) || (e = null), null != t && null == e && (e = null === (a = c.Z.getParticipant(i, (0, d.V9)(t))) || void 0 === a ? void 0 : a.id), null == e)) {
            let t = _.default.getId(),
                n = o()(c.Z.getVideoParticipants(i)).filter((e) => e.type === m.fO.USER && e.user.id !== t && !p.Z.isLocalVideoDisabled(e.user.id)),
                a = n.map((e) => e.user.id),
                d = Date.now();
            null ==
                (e =
                    null ===
                        (s = n
                            .map((e) => [e.user.id, h.Z.getSpeakingDuration(e.user.id, d)])
                            .filter((e) => {
                                let [t, n] = e;
                                return 0 !== n;
                            })
                            .maxBy((e) => {
                                let [t, n] = e;
                                return -n;
                            })) || void 0 === s
                        ? void 0
                        : s[0]) && (e = null != r && a.has(r) ? r : null === (u = n.first()) || void 0 === u ? void 0 : null === (l = u.user) || void 0 === l ? void 0 : l.id);
        }
    }
    r !== e && ((r = e), t && b.emitChange());
}
let v = o().debounce(E, 300);
function y() {
    return v(), !1;
}
class I extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, _.default, h.Z, f.Z, p.Z), this.syncWith([c.Z, f.Z], y);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), E(!1)), null != r ? r : _.default.getId();
    }
}
g(I, 'displayName', 'VideoSpeakerStore');
let b = new I(u.Z, { AUDIO_SET_LOCAL_VIDEO_DISABLED: y }),
    T = b;

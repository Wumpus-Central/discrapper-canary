let i, a;
var o,
    s = r(47120);
var l = r(392711),
    u = r.n(l),
    c = r(442837),
    d = r(570140),
    f = r(358221),
    p = r(569545),
    h = r(199902),
    _ = r(314897),
    m = r(131951),
    g = r(606304),
    E = r(354459);
function v(e, n, r) {
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
function y() {
    let e,
        n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) e = null;
    else {
        var r, o, s, l, c;
        e = f.Z.getSelectedParticipantId(i);
        let n = h.Z.getLastActiveStream(),
            d = null != e ? f.Z.getParticipant(i, e) : null;
        if ((((null == d ? void 0 : d.type) === E.fO.ACTIVITY || ((null == d ? void 0 : d.type) === E.fO.USER && !(null === (r = d.voiceState) || void 0 === r ? void 0 : r.selfVideo))) && (e = null), null != n && null == e && (e = null === (o = f.Z.getParticipant(i, (0, p.V9)(n))) || void 0 === o ? void 0 : o.id), null == e)) {
            let n = _.default.getId(),
                r = u()(f.Z.getVideoParticipants(i)).filter((e) => e.type === E.fO.USER && e.user.id !== n && !m.Z.isLocalVideoDisabled(e.user.id)),
                o = r.map((e) => e.user.id),
                d = Date.now();
            null ==
                (e =
                    null ===
                        (s = r
                            .map((e) => [e.user.id, g.Z.getSpeakingDuration(e.user.id, d)])
                            .filter((e) => {
                                let [n, r] = e;
                                return 0 !== r;
                            })
                            .maxBy((e) => {
                                let [n, r] = e;
                                return -r;
                            })) || void 0 === s
                        ? void 0
                        : s[0]) && (e = null != a && o.has(a) ? a : null === (c = r.first()) || void 0 === c ? void 0 : null === (l = c.user) || void 0 === l ? void 0 : l.id);
        }
    }
    a !== e && ((a = e), n && S.emitChange());
}
let b = u().debounce(y, 300);
function I() {
    return b(), !1;
}
class T extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.default, g.Z, h.Z, m.Z), this.syncWith([f.Z, h.Z], I);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), y(!1)), null != a ? a : _.default.getId();
    }
}
v(T, 'displayName', 'VideoSpeakerStore');
let S = new T(d.Z, { AUDIO_SET_LOCAL_VIDEO_DISABLED: I });
n.Z = S;

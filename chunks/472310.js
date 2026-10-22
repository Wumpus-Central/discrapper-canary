n.d(t, { A: () => u });
var i = n(387755),
    r = n(452295),
    a = n(684013),
    s = n(730852),
    l = n(439372),
    o = n(773371),
    d = n(456797);
class c extends l.A {
    actions = __OVERLAY__
        ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: this.handleRelayClickZoneClicked }
        : { OVERLAY_CALL_PRIVATE_CHANNEL: this.handleCallPrivateChannel, OVERLAY_JOIN_GAME: this.handleJoinGame };
    handleRelayClickZoneClicked(e) {
        let { normalizedMouseX: t, normalizedMouseY: n } = e;
        setTimeout(() => {
            let e = Math.ceil(t * window.innerWidth),
                i = Math.ceil(n * window.innerHeight),
                r = (0, d._)("click", e, i);
            (0, d.K)(r, e, i);
        }, 50);
    }
    handleCallPrivateChannel(e) {
        let { channelId: t, ring: n } = e;
        (s.default.selectPrivateChannel(t), i.A.call(t, !1, !!n));
    }
    handleJoinGame(e) {
        let { userId: t, sessionId: n, applicationId: i, channelId: s, messageId: l } = e;
        r.A.join({ userId: t, sessionId: n, applicationId: i, channelId: s, messageId: l });
        let d = o.default.getLegacyFocusedPID();
        null != d && a.A.setInputLocked(!0, d);
    }
}
let u = new c();

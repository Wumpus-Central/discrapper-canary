n.d(t, { Z: () => h }), n(47120), n(653041);
var i = n(846519),
    l = n(570140),
    r = n(317770),
    a = n(220082),
    s = n(594174),
    o = n(125268),
    d = n(813900);
function c(e, t, n) {
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
class u extends r.Z {
    _initialize() {
        __OVERLAY__ || (l.Z.subscribe('SHARED_CANVAS_DRAW_LINE_POINT', this._handleDrawLinePoint), l.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleVoiceChannelEffectReceived));
    }
    _terminate() {
        __OVERLAY__ || (l.Z.unsubscribe('SHARED_CANVAS_DRAW_LINE_POINT', this._handleDrawLinePoint), l.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop());
    }
    _handleVoiceChannelEffectReceived(e) {
        var t;
        let { lineId: n, points: i, userId: l, streamerId: r, emojiHose: c } = e;
        if (null != r && l !== (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
            if (null != i && null != n) {
                let e = s.default.getUser(l);
                null != e && (0, a.vM)(e.getAvatarURL(null, d.Ks)), (0, o.cV)(n, l, r, i);
            } else null != c && ((c.lastUpdatedAt = Date.now()), (0, o.gr)(c, l, r));
        }
    }
    constructor(...e) {
        super(...e),
            c(this, 'linesToUpdate', {}),
            c(this, 'lineBatchTimer', new i.Xp()),
            c(this, '_handleDrawLinePoint', (e) => {
                let { channelId: t, lineId: n, streamerId: i, point: l } = e;
                null == this.linesToUpdate[n]
                    ? (this.linesToUpdate[n] = {
                          channelId: t,
                          streamerId: i,
                          points: [l]
                      })
                    : this.linesToUpdate[n].points.push(l),
                    null == this.lineBatchTimer._ref && this.lineBatchTimer.start(d.Fq, this.sendLineBatch);
            }),
            c(this, 'sendLineBatch', () => {
                for (let e in this.linesToUpdate) {
                    let { channelId: t, points: n, streamerId: i } = this.linesToUpdate[e];
                    (0, o.AX)(t, e, i, n);
                }
                (this.linesToUpdate = {}), this.lineBatchTimer.stop();
            });
    }
}
let h = new u();

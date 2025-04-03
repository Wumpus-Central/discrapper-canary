n.d(t, { Z: () => p }), n(47120), n(653041);
var r = n(846519),
    i = n(570140),
    l = n(317770),
    a = n(220082),
    o = n(594174),
    s = n(125268),
    c = n(813900);
function u(e, t, n) {
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
class d extends l.Z {
    _initialize() {
        __OVERLAY__ || (i.Z.subscribe('SHARED_CANVAS_DRAW_LINE_POINT', this._handleDrawLinePoint), i.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleVoiceChannelEffectReceived));
    }
    _terminate() {
        __OVERLAY__ || (i.Z.unsubscribe('SHARED_CANVAS_DRAW_LINE_POINT', this._handleDrawLinePoint), i.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop());
    }
    _handleVoiceChannelEffectReceived(e) {
        var t;
        let { lineId: n, points: r, userId: i, streamerId: l, emojiHose: u } = e;
        if (null != l && i !== (null == (t = o.default.getCurrentUser()) ? void 0 : t.id))
            if (null != r && null != n) {
                let e = o.default.getUser(i);
                null != e && (0, a.vM)(e.getAvatarURL(null, c.Ks)), (0, s.cV)(n, i, l, r);
            } else null != u && ((u.lastUpdatedAt = Date.now()), (0, s.gr)(u, i, l));
    }
    constructor(...e) {
        super(...e),
            u(this, 'linesToUpdate', {}),
            u(this, 'lineBatchTimer', new r.Xp()),
            u(this, '_handleDrawLinePoint', (e) => {
                let { channelId: t, lineId: n, streamerId: r, point: i } = e;
                null == this.linesToUpdate[n]
                    ? (this.linesToUpdate[n] = {
                          channelId: t,
                          streamerId: r,
                          points: [i]
                      })
                    : this.linesToUpdate[n].points.push(i),
                    null == this.lineBatchTimer._ref && this.lineBatchTimer.start(c.Fq, this.sendLineBatch);
            }),
            u(this, 'sendLineBatch', () => {
                for (let e in this.linesToUpdate) {
                    let { channelId: t, points: n, streamerId: r } = this.linesToUpdate[e];
                    (0, s.AX)(t, e, r, n);
                }
                (this.linesToUpdate = {}), this.lineBatchTimer.stop();
            });
    }
}
let p = new d();

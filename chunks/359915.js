n.d(t, { Z: () => d }), n(47120);
var i = n(442837),
    r = n(570140),
    a = n(147913),
    s = n(883429),
    o = n(314897),
    l = n(592125);
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
class c extends a.Z {
    handleChannelDelete(e) {
        let { channel: t } = e;
        if (null != t.guild_id) {
            let e = l.Z.getAllThreadsForParent(t.id);
            e.length > 0 &&
                i.ZP.Emitter.batched(() => {
                    for (let t of e)
                        r.Z.dispatch({
                            type: 'THREAD_DELETE',
                            channel: t
                        });
                });
        }
    }
    handleMessageCreate(e) {
        var t, n, i;
        let { channelId: r, message: a } = e,
            u = l.Z.getChannel(r);
        if ((null === (t = a.author) || void 0 === t ? void 0 : t.id) !== o.default.getId() || !(null == u ? void 0 : u.isActiveThread())) return;
        let c = new Date(null !== (i = null === (n = u.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== i ? i : 0).getTime();
        Date.now() - c < 5000 && s.Z.resort(u.parent_id);
    }
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            });
    }
}
let d = new c();

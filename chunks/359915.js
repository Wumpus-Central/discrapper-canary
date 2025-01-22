var i = r(47120);
var a = r(442837),
    o = r(570140),
    s = r(147913),
    l = r(883429),
    u = r(314897),
    c = r(592125);
function d(e, n, r) {
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
class f extends s.Z {
    handleChannelDelete(e) {
        let { channel: n } = e;
        if (null != n.guild_id) {
            let e = c.Z.getAllThreadsForParent(n.id);
            e.length > 0 &&
                a.ZP.Emitter.batched(() => {
                    for (let n of e)
                        o.Z.dispatch({
                            type: 'THREAD_DELETE',
                            channel: n
                        });
                });
        }
    }
    handleMessageCreate(e) {
        var n, r, i;
        let { channelId: a, message: o } = e,
            s = c.Z.getChannel(a);
        if ((null === (n = o.author) || void 0 === n ? void 0 : n.id) !== u.default.getId() || !(null == s ? void 0 : s.isActiveThread())) return;
        let d = new Date(null !== (i = null === (r = s.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp) && void 0 !== i ? i : 0).getTime();
        Date.now() - d < 5000 && l.Z.resort(s.parent_id);
    }
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            });
    }
}
n.Z = new f();

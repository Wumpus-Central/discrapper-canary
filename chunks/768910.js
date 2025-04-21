n.d(t, { Z: () => m }), n(388685), n(642613), n(583741);
var i = n(392711),
    r = n.n(i),
    s = n(710845),
    l = n(592125),
    a = n(306680),
    o = n(709054),
    c = n(287328);
function d(e, t, n) {
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
let u = new s.Z('ReadStates'),
    m = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await c.Z.readStates(e).getMany(),
                i = performance.now();
            return u.log('asynchronously loaded in '.concat(i - t, 'ms (readStates: ').concat(n.length, ')')), n;
        }
        resetInMemoryState() {
            this.readStateVersion = null;
        }
        handleConnectionOpen(e) {
            this.readStateVersion = e.readState.version;
        }
        handleReadStateAction(e) {
            null != this.readStateVersion && (null != e.version ? (this.readStateVersion = e.version) : u.log('Received null read states version', e));
        }
        handleWriteCaches(e, t) {
            let n = a.ZP.getAllReadStates(!1);
            if (t) {
                var i;
                if (null == this.readStateVersion) return;
                let t = '0',
                    s = '0',
                    a = Object.keys(l.Z.getMutablePrivateChannels()),
                    d = new Set(a);
                for (let e of ((s = null != (i = r()(a).sort(o.default.compare).reverse().value()[0]) ? i : '0'), n)) null != e._lastMessageId && (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, s) && (s = e._lastMessageId));
                c.Z.nonGuildVersionsTransaction(e).putAll([
                    {
                        id: 'highest_last_message_id',
                        versionString: t
                    },
                    {
                        id: 'private_channels_version',
                        versionString: s
                    },
                    {
                        id: 'read_state_version',
                        version: this.readStateVersion
                    }
                ]);
            }
            let s = c.Z.readStatesTransaction(e);
            s.delete(), n.forEach((e) => s.put(''.concat(e.type, '-').concat(e.channelId), e));
        }
        constructor() {
            d(this, 'readStateVersion', null),
                d(this, 'actions', {
                    CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                    CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
                    MESSAGE_ACK: (e) => this.handleReadStateAction(e),
                    BACKGROUND_SYNC_FINISHED: (e, t) => {
                        e.messagesOnly || this.handleWriteCaches(t, !1);
                    },
                    WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0)
                });
        }
    })();

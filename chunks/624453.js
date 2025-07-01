(n.d(t, {
    M: () => O,
    Z: () => M
}),
    n(388685),
    n(290780));
var i,
    l,
    r,
    s,
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(570140),
    u = n(247206),
    g = n(786761),
    h = n(706454),
    f = n(592125),
    m = n(271383),
    E = n(430824),
    p = n(375954),
    v = n(699516),
    N = n(594174),
    O = (((l = {}).LOADING = 'LOADING'), (l.LOADED_HAS_MORE = 'LOADED_HAS_MORE'), (l.LOADED_FINISHED = 'LOADING_FINISHED'), (l.FAILED = 'FAILED'), l);
let x = {};
function S(e) {
    let { channel: t } = e;
    delete x[t.id];
}
function D() {
    o().forEach(x, (e) => {
        (e.items.forEach((e) => {
            let { message: t } = e;
            (t.set('blocked', v.Z.isBlockedForMessage(t)), t.set('ignored', v.Z.isIgnoredForMessage(t)));
        }),
            (e.items = e.items.slice()));
    });
}
class j extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, E.Z, m.ZP, p.Z, N.default, h.default);
    }
    getPins(e) {
        return x[e];
    }
}
((s = 'ChannelPinsStore'),
    (r = 'displayName') in j
        ? Object.defineProperty(j, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[r] = s));
let M = new j(d.Z, {
    CONNECTION_OPEN: function () {
        x = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        var t, n;
        let { channelId: i, reset: l } = e;
        if (!l && null != x[i]) {
            x[i].state = 'LOADING';
            return;
        }
        let r = null != (n = null == (t = f.Z.getChannel(i)) ? void 0 : t.getGuildId()) ? n : void 0;
        x[i] = {
            id: i,
            items: [],
            state: 'LOADING',
            guildId: r
        };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            l = x[t];
        if (null == l) return !1;
        let r = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return {
                pinnedAt: new Date(Date.parse(t)),
                message: (0, g.e5)(n)
            };
        });
        ((l.items = [...l.items, ...r]), (l.state = i ? 'LOADED_HAS_MORE' : 'LOADING_FINISHED'));
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = x[t];
        if (null == n) return !1;
        n.state = 'FAILED';
    },
    CHANNEL_DELETE: S,
    THREAD_DELETE: S,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        x = o()(x)
            .filter((e) => e.guildId !== t.id)
            .keyBy('id')
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = x[n];
        if (
            null == i ||
            0 ===
                o().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        ((i.items = i.items.slice()), (x[n] = i));
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = x[n];
        if (null == i) return !1;
        i.items = i.items.filter((e) => {
            let { message: n } = e;
            return !t.includes(n.id);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            n = e.message.channel_id;
        if (null == n) return !1;
        let i = x[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let l = o().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === l) return;
            let { pinnedAt: r, message: s } = i.items[l],
                a = (0, g.wi)(s, e.message);
            if (a !== s) {
                let e = i.items.slice();
                ((e[l] = {
                    pinnedAt: r,
                    message: a
                }),
                    (x[n].items = e));
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = o().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            -1 === n
                ? i.items.unshift({
                      message: (0, g.e5)(e.message),
                      pinnedAt: new Date()
                  })
                : (i.items[n].message = (0, g.wi)(i.items[n].message, e.message));
            return;
        }
        let l = o().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        ((i.items = i.items.slice()), i.items.splice(l, 1));
    },
    RELATIONSHIP_ADD: D,
    RELATIONSHIP_REMOVE: D,
    RELATIONSHIP_UPDATE: D,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = x[n];
        if (null == i) return !1;
        let l = o().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        ((i.items = i.items.slice()), (i.items[l].message = (0, u.Cm)(i.items[l].message)));
    }
});

n.d(t, {
    M: () => y,
    Z: () => P
}),
    n(388685),
    n(290780);
var i,
    r,
    l,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(247206),
    f = n(786761),
    g = n(706454),
    m = n(592125),
    p = n(271383),
    b = n(430824),
    h = n(375954),
    O = n(699516),
    E = n(594174),
    y = (((r = {}).LOADING = 'LOADING'), (r.LOADED_HAS_MORE = 'LOADED_HAS_MORE'), (r.LOADED_FINISHED = 'LOADING_FINISHED'), (r.FAILED = 'FAILED'), r);
let v = {};
function S(e) {
    let { channel: t } = e;
    delete v[t.id];
}
function j() {
    s().forEach(v, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set('blocked', O.Z.isBlockedForMessage(t)), t.set('ignored', O.Z.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class _ extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, b.Z, p.ZP, h.Z, E.default, g.default);
    }
    getPins(e) {
        return v[e];
    }
}
(a = 'ChannelPinsStore'),
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = a);
let P = new _(u.Z, {
    CONNECTION_OPEN: function () {
        v = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        var t, n;
        let { channelId: i, reset: r } = e;
        if (!r && null != v[i]) {
            v[i].state = 'LOADING';
            return;
        }
        let l = null != (n = null == (t = m.Z.getChannel(i)) ? void 0 : t.getGuildId()) ? n : void 0;
        v[i] = {
            id: i,
            items: [],
            state: 'LOADING',
            guildId: l
        };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            r = v[t];
        if (null == r) return !1;
        let l = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return {
                pinnedAt: new Date(Date.parse(t)),
                message: (0, f.e5)(n)
            };
        });
        (r.items = [...r.items, ...l]), (r.state = i ? 'LOADED_HAS_MORE' : 'LOADING_FINISHED');
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = v[t];
        if (null == n) return !1;
        n.state = 'FAILED';
    },
    CHANNEL_DELETE: S,
    THREAD_DELETE: S,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        v = s()(v)
            .filter((e) => e.guildId !== t.id)
            .keyBy('id')
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = v[n];
        if (
            null == i ||
            0 ===
                s().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (v[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = v[n];
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
        let i = v[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let r = s().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === r) return;
            let { pinnedAt: l, message: a } = i.items[r],
                o = (0, f.wi)(a, e.message);
            if (o !== a) {
                let e = i.items.slice();
                (e[r] = {
                    pinnedAt: l,
                    message: o
                }),
                    (v[n].items = e);
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = s().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            -1 === n
                ? i.items.unshift({
                      message: (0, f.e5)(e.message),
                      pinnedAt: new Date()
                  })
                : (i.items[n].message = (0, f.wi)(i.items[n].message, e.message));
            return;
        }
        let r = s().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === r) return !1;
        (i.items = i.items.slice()), i.items.splice(r, 1);
    },
    RELATIONSHIP_ADD: j,
    RELATIONSHIP_REMOVE: j,
    RELATIONSHIP_UPDATE: j,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = v[n];
        if (null == i) return !1;
        let r = s().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === r) return !1;
        (i.items = i.items.slice()), (i.items[r].message = (0, d.Cm)(i.items[r].message));
    }
});

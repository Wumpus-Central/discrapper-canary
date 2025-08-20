n.d(t, {
    M: () => A,
    Z: () => v,
}),
    n(388685),
    n(290780);
var i,
    l,
    s,
    r = n(392711),
    a = n.n(r),
    o = n(442837),
    u = n(570140),
    c = n(247206),
    d = n(786761),
    E = n(706454),
    f = n(592125),
    m = n(271383),
    g = n(430824),
    _ = n(375954),
    S = n(699516),
    N = n(594174),
    A =
        (((l = {}).LOADING = "LOADING"),
        (l.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (l.LOADED_FINISHED = "LOADING_FINISHED"),
        (l.FAILED = "FAILED"),
        l);
let D = {};
function h(e) {
    let { channel: t } = e;
    delete D[t.id];
}
function p() {
    a().forEach(D, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", S.Z.isBlockedForMessage(t)), t.set("ignored", S.Z.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, g.Z, m.ZP, _.Z, N.default, E.default);
    }
    getPins(e) {
        return D[e];
    }
}
(s = "displayName") in I
    ? Object.defineProperty(I, s, {
          value: "ChannelPinsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (I[s] = "ChannelPinsStore");
let v = new I(u.Z, {
    CONNECTION_OPEN: function () {
        D = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        var t, n;
        let { channelId: i, reset: l } = e;
        if (!l && null != D[i]) {
            D[i].state = "LOADING";
            return;
        }
        let s = null != (n = null == (t = f.Z.getChannel(i)) ? void 0 : t.getGuildId()) ? n : void 0;
        D[i] = {
            id: i,
            items: [],
            state: "LOADING",
            guildId: s,
        };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            l = D[t];
        if (null == l) return !1;
        let s = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return {
                pinnedAt: new Date(Date.parse(t)),
                message: (0, d.e5)(n),
            };
        });
        (l.items = [...l.items, ...s]), (l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = D[t];
        if (null == n) return !1;
        n.state = "FAILED";
    },
    CHANNEL_DELETE: h,
    THREAD_DELETE: h,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        D = a()(D)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = D[n];
        if (
            null == i ||
            0 ===
                a().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (D[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = D[n];
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
        let i = D[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let l = a().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === l) return;
            let { pinnedAt: s, message: r } = i.items[l],
                o = (0, d.wi)(r, e.message);
            if (o !== r) {
                let e = i.items.slice();
                (e[l] = {
                    pinnedAt: s,
                    message: o,
                }),
                    (D[n].items = e);
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = a().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            -1 === n
                ? i.items.unshift({
                      message: (0, d.e5)(e.message),
                      pinnedAt: new Date(),
                  })
                : (i.items[n].message = (0, d.wi)(i.items[n].message, e.message));
            return;
        }
        let l = a().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), i.items.splice(l, 1);
    },
    RELATIONSHIP_ADD: p,
    RELATIONSHIP_REMOVE: p,
    RELATIONSHIP_UPDATE: p,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = D[n];
        if (null == i) return !1;
        let l = a().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), (i.items[l].message = (0, c.Cm)(i.items[l].message));
    },
});

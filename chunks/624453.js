n.d(t, { Z: () => S }), n(733860);
var r,
    i,
    l,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(570140),
    u = n(247206),
    d = n(786761),
    f = n(706454),
    g = n(592125),
    m = n(271383),
    b = n(430824),
    p = n(375954),
    h = n(699516),
    y = n(594174);
let N = {};
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = g.Z.getChannel(e),
        l = null != i ? i.getGuildId() : null;
    return {
        id: e,
        messages: t.map((e) => (0, d.e5)(e)),
        guildId: l,
        loaded: n,
        loading: r
    };
}
function E(e) {
    let { channel: t } = e;
    delete N[t.id];
}
function v() {
    o().forEach(N, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', h.Z.isBlockedForMessage(e)).set('ignored', h.Z.isIgnoredForMessage(e)));
    });
}
class j extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, b.Z, m.ZP, p.Z, y.default, f.default);
    }
    getPinnedMessages(e) {
        var t;
        return null != (t = N[e]) ? t : void 0;
    }
    loaded(e) {
        return null != N[e] && N[e].loaded;
    }
}
(l = 'ChannelPinsStore'),
    (i = 'displayName') in j
        ? Object.defineProperty(j, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[i] = l);
let S = new j(c.Z, {
    CONNECTION_OPEN: function () {
        N = {};
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        N = o()(N)
            .filter((e) => e.guildId !== t.id)
            .keyBy('id')
            .value();
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            n = e.message.channel_id;
        if (null == n) return !1;
        let r = N[n];
        if (null == r && !e.message.pinned) return !1;
        if (null == e.message.author) {
            if (null != r) {
                let i = o().findIndex(r.messages, (e) => e.id === t);
                if (i >= 0) {
                    let t = r.messages[i],
                        l = (0, d.wi)(t, e.message);
                    if (l !== t) {
                        let e = r.messages.slice();
                        (e[i] = l), (N[n].messages = e);
                    }
                }
            }
            return;
        }
        if (e.message.pinned) {
            if (null == r) {
                (r = O(n, [e.message], !1)), (N[n] = r);
                return;
            }
            r.messages = r.messages.slice();
            let i = o().findIndex(r.messages, (e) => e.id === t);
            -1 === i ? r.messages.unshift((0, d.e5)(e.message)) : (r.messages[i] = (0, d.wi)(r.messages[i], e.message)), (N[n] = r);
        } else {
            if (null == r) return;
            let e = o().findIndex(r.messages, (e) => e.id === t);
            if (-1 === e) return;
            (r.messages = r.messages.slice()), r.messages.splice(e, 1), (N[n] = r);
        }
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            r = N[n];
        if (null == r || 0 === o().remove(r.messages, (e) => e.id === t).length) return !1;
        (r.messages = r.messages.slice()), (N[n] = r);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            r = N[n];
        null != r && (r.messages = r.messages.filter((e) => -1 === t.indexOf(e.id)));
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t } = e;
        N[t] = O(t, [], !1, !0);
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e;
        N[t] = O(t, n, !0);
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e;
        delete N[t];
    },
    CHANNEL_DELETE: E,
    THREAD_DELETE: E,
    RELATIONSHIP_ADD: v,
    RELATIONSHIP_REMOVE: v,
    RELATIONSHIP_UPDATE: v,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            r = N[n];
        if (null == r) return;
        let i = o().findIndex(r.messages, (e) => e.id === t);
        -1 !== i && ((r.messages = r.messages.slice()), (r.messages[i] = (0, u.Cm)(r.messages[i])), (N[n] = r));
    }
});

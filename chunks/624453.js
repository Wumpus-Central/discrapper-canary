n.d(t, { Z: () => _ }), n(290780);
var i,
    r,
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
    p = n(430824),
    b = n(375954),
    h = n(699516),
    O = n(594174);
let E = {};
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = g.Z.getChannel(e),
        l = null != r ? r.getGuildId() : null;
    return {
        id: e,
        messages: t.map((e) => (0, d.e5)(e)),
        guildId: l,
        loaded: n,
        loading: i
    };
}
function v(e) {
    let { channel: t } = e;
    delete E[t.id];
}
function j() {
    o().forEach(E, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', h.Z.isBlockedForMessage(e)).set('ignored', h.Z.isIgnoredForMessage(e)));
    });
}
class S extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, p.Z, m.ZP, b.Z, O.default, f.default);
    }
    getPinnedMessages(e) {
        var t;
        return null != (t = E[e]) ? t : void 0;
    }
    loaded(e) {
        return null != E[e] && E[e].loaded;
    }
}
(l = 'ChannelPinsStore'),
    (r = 'displayName') in S
        ? Object.defineProperty(S, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (S[r] = l);
let _ = new S(c.Z, {
    CONNECTION_OPEN: function () {
        E = {};
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        E = o()(E)
            .filter((e) => e.guildId !== t.id)
            .keyBy('id')
            .value();
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            n = e.message.channel_id;
        if (null == n) return !1;
        let i = E[n];
        if (null == i && !e.message.pinned) return !1;
        if (null == e.message.author) {
            if (null != i) {
                let r = o().findIndex(i.messages, (e) => e.id === t);
                if (r >= 0) {
                    let t = i.messages[r],
                        l = (0, d.wi)(t, e.message);
                    if (l !== t) {
                        let e = i.messages.slice();
                        (e[r] = l), (E[n].messages = e);
                    }
                }
            }
            return;
        }
        if (e.message.pinned) {
            if (null == i) {
                (i = y(n, [e.message], !1)), (E[n] = i);
                return;
            }
            i.messages = i.messages.slice();
            let r = o().findIndex(i.messages, (e) => e.id === t);
            -1 === r ? i.messages.unshift((0, d.e5)(e.message)) : (i.messages[r] = (0, d.wi)(i.messages[r], e.message)), (E[n] = i);
        } else {
            if (null == i) return;
            let e = o().findIndex(i.messages, (e) => e.id === t);
            if (-1 === e) return;
            (i.messages = i.messages.slice()), i.messages.splice(e, 1), (E[n] = i);
        }
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = E[n];
        if (null == i || 0 === o().remove(i.messages, (e) => e.id === t).length) return !1;
        (i.messages = i.messages.slice()), (E[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = E[n];
        null != i && (i.messages = i.messages.filter((e) => -1 === t.indexOf(e.id)));
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t } = e;
        E[t] = y(t, [], !1, !0);
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e;
        E[t] = y(t, n, !0);
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e;
        delete E[t];
    },
    CHANNEL_DELETE: v,
    THREAD_DELETE: v,
    RELATIONSHIP_ADD: j,
    RELATIONSHIP_REMOVE: j,
    RELATIONSHIP_UPDATE: j,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = E[n];
        if (null == i) return;
        let r = o().findIndex(i.messages, (e) => e.id === t);
        -1 !== r && ((i.messages = i.messages.slice()), (i.messages[r] = (0, u.Cm)(i.messages[r])), (E[n] = i));
    }
});

n.d(t, { Z: () => j }), n(733860);
var i,
    l,
    a,
    s = n(392711),
    r = n.n(s),
    o = n(442837),
    d = n(570140),
    c = n(247206),
    u = n(786761),
    g = n(706454),
    f = n(592125),
    m = n(271383),
    h = n(430824),
    E = n(375954),
    v = n(699516),
    Z = n(594174);
let x = {};
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = f.Z.getChannel(e),
        a = null != l ? l.getGuildId() : null;
    return {
        id: e,
        messages: t.map((e) => (0, u.e5)(e)),
        guildId: a,
        loaded: n,
        loading: i
    };
}
function N(e) {
    let { channel: t } = e;
    delete x[t.id];
}
function S() {
    r().forEach(x, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', v.Z.isBlockedForMessage(e)).set('ignored', v.Z.isIgnoredForMessage(e)));
    });
}
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, h.Z, m.ZP, E.Z, Z.default, g.default);
    }
    getPinnedMessages(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t ? t : void 0;
    }
    loaded(e) {
        return null != x[e] && x[e].loaded;
    }
}
(a = 'ChannelPinsStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = a);
let j = new I(d.Z, {
    CONNECTION_OPEN: function () {
        x = {};
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        x = r()(x)
            .filter((e) => e.guildId !== t.id)
            .keyBy('id')
            .value();
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            n = e.message.channel_id;
        if (null == n) return !1;
        let i = x[n];
        if (null == i && !e.message.pinned) return !1;
        if (null == e.message.author) {
            if (null != i) {
                let l = r().findIndex(i.messages, (e) => e.id === t);
                if (l >= 0) {
                    let t = i.messages[l],
                        a = (0, u.wi)(t, e.message);
                    if (a !== t) {
                        let e = i.messages.slice();
                        (e[l] = a), (x[n].messages = e);
                    }
                }
            }
            return;
        }
        if (e.message.pinned) {
            if (null == i) {
                (i = p(n, [e.message], !1)), (x[n] = i);
                return;
            }
            i.messages = i.messages.slice();
            let l = r().findIndex(i.messages, (e) => e.id === t);
            -1 === l ? i.messages.unshift((0, u.e5)(e.message)) : (i.messages[l] = (0, u.wi)(i.messages[l], e.message)), (x[n] = i);
        } else {
            if (null == i) return;
            let e = r().findIndex(i.messages, (e) => e.id === t);
            if (-1 === e) return;
            (i.messages = i.messages.slice()), i.messages.splice(e, 1), (x[n] = i);
        }
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = x[n];
        if (null == i || 0 === r().remove(i.messages, (e) => e.id === t).length) return !1;
        (i.messages = i.messages.slice()), (x[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = x[n];
        null != i && (i.messages = i.messages.filter((e) => -1 === t.indexOf(e.id)));
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t } = e;
        x[t] = p(t, [], !1, !0);
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e;
        x[t] = p(t, n, !0);
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e;
        delete x[t];
    },
    CHANNEL_DELETE: N,
    THREAD_DELETE: N,
    RELATIONSHIP_ADD: S,
    RELATIONSHIP_REMOVE: S,
    RELATIONSHIP_UPDATE: S,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = x[n];
        if (null == i) return;
        let l = r().findIndex(i.messages, (e) => e.id === t);
        -1 !== l && ((i.messages = i.messages.slice()), (i.messages[l] = (0, c.Cm)(i.messages[l])), (x[n] = i));
    }
});

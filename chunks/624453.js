t(733860);
var i,
    l,
    r,
    a,
    o = t(392711),
    s = t.n(o),
    u = t(442837),
    d = t(570140),
    c = t(247206),
    g = t(786761),
    f = t(706454),
    m = t(592125),
    h = t(271383),
    E = t(430824),
    I = t(375954),
    v = t(699516),
    M = t(594174);
let p = {};
function Z(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.Z.getChannel(e),
        r = null != l ? l.getGuildId() : null;
    return {
        id: e,
        messages: n.map((e) => (0, g.e5)(e)),
        guildId: r,
        loaded: t,
        loading: i
    };
}
function x(e) {
    let { channel: n } = e;
    delete p[n.id];
}
function S() {
    s().forEach(p, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', v.Z.isBlockedForMessage(e)).set('ignored', v.Z.isIgnoredForMessage(e)));
    });
}
class T extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, E.Z, h.ZP, I.Z, M.default, f.default);
    }
    getPinnedMessages(e) {
        var n;
        return null !== (n = p[e]) && void 0 !== n ? n : void 0;
    }
    loaded(e) {
        return null != p[e] && p[e].loaded;
    }
}
(a = 'ChannelPinsStore'),
    (r = 'displayName') in (l = T)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (n.Z = new T(d.Z, {
        CONNECTION_OPEN: function () {
            p = {};
        },
        GUILD_DELETE: function (e) {
            let { guild: n } = e;
            p = s()(p)
                .filter((e) => e.guildId !== n.id)
                .keyBy('id')
                .value();
        },
        MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
                t = e.message.channel_id;
            if (null == t) return !1;
            let i = p[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
                if (null != i) {
                    let l = s().findIndex(i.messages, (e) => e.id === n);
                    if (l >= 0) {
                        let n = i.messages[l],
                            r = (0, g.wi)(n, e.message);
                        if (r !== n) {
                            let e = i.messages.slice();
                            (e[l] = r), (p[t].messages = e);
                        }
                    }
                }
                return;
            }
            if (e.message.pinned) {
                if (null == i) {
                    (i = Z(t, [e.message], !1)), (p[t] = i);
                    return;
                }
                i.messages = i.messages.slice();
                let l = s().findIndex(i.messages, (e) => e.id === n);
                -1 === l ? i.messages.unshift((0, g.e5)(e.message)) : (i.messages[l] = (0, g.wi)(i.messages[l], e.message)), (p[t] = i);
            } else {
                if (null == i) return;
                let e = s().findIndex(i.messages, (e) => e.id === n);
                if (-1 === e) return;
                (i.messages = i.messages.slice()), i.messages.splice(e, 1), (p[t] = i);
            }
        },
        MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
                i = p[t];
            if (null == i || 0 === s().remove(i.messages, (e) => e.id === n).length) return !1;
            (i.messages = i.messages.slice()), (p[t] = i);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
                i = p[t];
            if (null != i) i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
        },
        LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            p[n] = Z(n, [], !1, !0);
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            p[n] = Z(n, t, !0);
        },
        LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete p[n];
        },
        CHANNEL_DELETE: x,
        THREAD_DELETE: x,
        RELATIONSHIP_ADD: S,
        RELATIONSHIP_REMOVE: S,
        RELATIONSHIP_UPDATE: S,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
                i = p[t];
            if (null == i) return;
            let l = s().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== l) (i.messages = i.messages.slice()), (i.messages[l] = (0, c.Cm)(i.messages[l])), (p[t] = i);
        }
    }));

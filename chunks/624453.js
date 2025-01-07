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
    f = t(786761),
    g = t(706454),
    m = t(592125),
    h = t(271383),
    E = t(430824),
    v = t(375954),
    I = t(699516),
    p = t(594174);
let M = {};
function Z(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.Z.getChannel(e),
        r = null != l ? l.getGuildId() : null;
    return {
        id: e,
        messages: n.map((e) => (0, f.e5)(e)),
        guildId: r,
        loaded: t,
        loading: i
    };
}
function x(e) {
    let { channel: n } = e;
    delete M[n.id];
}
function S() {
    s().forEach(M, (e) => {
        e.messages = e.messages.map((e) => e.set('blocked', I.Z.isBlockedForMessage(e)).set('ignored', I.Z.isIgnoredForMessage(e)));
    });
}
class j extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, E.Z, h.ZP, v.Z, p.default, g.default);
    }
    getPinnedMessages(e) {
        var n;
        return null !== (n = M[e]) && void 0 !== n ? n : void 0;
    }
    loaded(e) {
        return null != M[e] && M[e].loaded;
    }
}
(a = 'ChannelPinsStore'),
    (r = 'displayName') in (l = j)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (n.Z = new j(d.Z, {
        CONNECTION_OPEN: function () {
            M = {};
        },
        GUILD_DELETE: function (e) {
            let { guild: n } = e;
            M = s()(M)
                .filter((e) => e.guildId !== n.id)
                .keyBy('id')
                .value();
        },
        MESSAGE_UPDATE: function (e) {
            let n = e.message.id,
                t = e.message.channel_id;
            if (null == t) return !1;
            let i = M[t];
            if (null == i && !e.message.pinned) return !1;
            if (null == e.message.author) {
                if (null != i) {
                    let l = s().findIndex(i.messages, (e) => e.id === n);
                    if (l >= 0) {
                        let n = i.messages[l],
                            r = (0, f.wi)(n, e.message);
                        if (r !== n) {
                            let e = i.messages.slice();
                            (e[l] = r), (M[t].messages = e);
                        }
                    }
                }
                return;
            }
            if (e.message.pinned) {
                if (null == i) {
                    (i = Z(t, [e.message], !1)), (M[t] = i);
                    return;
                }
                i.messages = i.messages.slice();
                let l = s().findIndex(i.messages, (e) => e.id === n);
                -1 === l ? i.messages.unshift((0, f.e5)(e.message)) : (i.messages[l] = (0, f.wi)(i.messages[l], e.message)), (M[t] = i);
            } else {
                if (null == i) return;
                let e = s().findIndex(i.messages, (e) => e.id === n);
                if (-1 === e) return;
                (i.messages = i.messages.slice()), i.messages.splice(e, 1), (M[t] = i);
            }
        },
        MESSAGE_DELETE: function (e) {
            let { id: n, channelId: t } = e,
                i = M[t];
            if (null == i || 0 === s().remove(i.messages, (e) => e.id === n).length) return !1;
            (i.messages = i.messages.slice()), (M[t] = i);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: n, channelId: t } = e,
                i = M[t];
            if (null != i) i.messages = i.messages.filter((e) => -1 === n.indexOf(e.id));
        },
        LOAD_PINNED_MESSAGES: function (e) {
            let { channelId: n } = e;
            M[n] = Z(n, [], !1, !0);
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { channelId: n, messages: t } = e;
            M[n] = Z(n, t, !0);
        },
        LOAD_PINNED_MESSAGES_FAILURE: function (e) {
            let { channelId: n } = e;
            delete M[n];
        },
        CHANNEL_DELETE: x,
        THREAD_DELETE: x,
        RELATIONSHIP_ADD: S,
        RELATIONSHIP_REMOVE: S,
        RELATIONSHIP_UPDATE: S,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: n, channelId: t } = e,
                i = M[t];
            if (null == i) return;
            let l = s().findIndex(i.messages, (e) => e.id === n);
            if (-1 !== l) (i.messages = i.messages.slice()), (i.messages[l] = (0, c.Cm)(i.messages[l])), (M[t] = i);
        }
    }));

n.d(t, {
    A: () => T,
}),
    n(321073),
    n(896048);
var r = n(735438),
    i = n(73153),
    a = n(378939),
    s = n(843472),
    o = n(334738),
    l = n(187508),
    c = n(976860),
    u = n(222823),
    d = n(661191),
    f = n(932883),
    p = n(320697),
    _ = n(849077),
    h = n(652215);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let y = 5,
    O = 1500;

function A(e) {
    return a.A.fetchRecentMentions({
        before: e,
        limit: h.Ue3,
        roles: l.Ay.roleFilter,
        everyone: l.Ay.everyoneFilter,
        feature: _.j5,
    });
}
let v = (0, r.throttle)(I, O);

function S(e) {
    let t = p.A.getChannelInfoMap(),
        n = [];
    for (let i of e) {
        var r;
        if ((null == (r = t[i]) ? void 0 : r.loadState) === _.Ve.LOADED) continue;
        let e = u.Ay.lastMessageId(i),
            a = null != e && d.default.age(e) > _.V$;
        if (n.length >= y || a) break;
        let o = s.A.fetchMessages({
            channelId: i,
            limit: _.EM,
            feature: _.j5,
        });
        !1 !== o && null != o && n.push(o);
    }
    return n;
}
async function I(e) {
    let { preload: t = !1 } = e,
        n = E(e, ["preload"]),
        r = Date.now(),
        a = p.A.getNotifyingChannelIds();
    if (null == a) return;
    let s = t ? [] : S(a),
        o = l.Ay.getMentions(),
        c = null != o && o.length > 0 ? o[o.length - 1].id : null,
        u = !1;
    if (((!l.Ay.hasMore && l.Ay.hasLoadedEver) || l.Ay.loading || (s.push(A(c)), (u = !0)), 0 === s.length))
        return void i.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !1,
        });
    try {
        var d;
        await Promise.all(s);
        let e = {
            timeToLoad: Date.now() - r,
            loadingTrigger: null != (d = n.loadingTrigger) ? d : _.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: s.length - !!u,
            mentionsFetched: u,
        };
        t && (0, f.P3)(e),
            i.h.dispatch({
                type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
                preload: t,
                analyticsPayload: e,
                hasMoreToLoad: !0,
            });
    } catch (e) {
        i.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE",
        });
    }
}
let T = {
    loadMoreInbox() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
            [t = {}] = [e],
            { preload: n = !1 } = t,
            r = E(t, ["preload"]);
        if (
            !p.A.canLoadMore({
                preload: n,
            })
        )
            return !1;
        i.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START",
            preload: n,
        }),
            v(
                g(
                    {
                        preload: n,
                    },
                    r,
                ),
            );
    },
    inboxItemClick: function (e) {
        let { message: t, channel: n, isUnread: r, isSidebar: a, viewId: l, track: u = !0 } = e;
        i.h.dispatch({
            type: "NOTIFICATIONS_INBOX_ITEM_CLICK",
            messageId: t.id,
            channelId: n.id,
            isUnread: r,
        }),
            u &&
                (0, f.Ml)({
                    interactionType: f.X8.CLICK,
                    message: t,
                    viewId: l,
                }),
            r &&
                o.ack(
                    t.channel_id,
                    {
                        section: h.JJy.INBOX,
                        object: h.ZSU.ACK_MESSAGE_VIEWED,
                        objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    void 0,
                    t.id,
                ),
            s.A.trackJump(n.id, t.id, _.XU);
        let d = a ? h.gNP : n.guild_id;
        (0, c.pX)(h.BVt.CHANNEL(d, n.id, t.id));
    },
};

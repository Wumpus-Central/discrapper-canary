n.d(t, {
    M: () => E,
    Z: () => D,
}),
    n(388685),
    n(290780);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(247206),
    c = n(786761),
    u = n(706454),
    d = n(592125),
    f = n(271383),
    _ = n(430824),
    p = n(375954),
    h = n(699516),
    m = n(594174);
function g(e, t, n) {
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
var E = (function (e) {
    return (
        (e.LOADING = "LOADING"),
        (e.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (e.LOADED_FINISHED = "LOADING_FINISHED"),
        (e.FAILED = "FAILED"),
        e
    );
})({});
let b = {};
function y() {
    b = {};
}
function O(e) {
    var t, n;
    let { channelId: r, reset: i } = e;
    if (!i && null != b[r]) {
        b[r].state = "LOADING";
        return;
    }
    let o = null != (n = null == (t = d.Z.getChannel(r)) ? void 0 : t.getGuildId()) ? n : void 0;
    b[r] = {
        id: r,
        items: [],
        state: "LOADING",
        guildId: o,
    };
}
function v(e) {
    let { channelId: t, pins: n, hasMore: r } = e,
        i = b[t];
    if (null == i) return !1;
    let o = n.map((e) => {
        let { pinned_at: t, message: n } = e;
        return {
            pinnedAt: new Date(Date.parse(t)),
            message: (0, c.e5)(n),
        };
    });
    (i.items = [...i.items, ...o]), (i.state = r ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
}
function I(e) {
    let { channelId: t } = e,
        n = b[t];
    if (null == n) return !1;
    n.state = "FAILED";
}
function T(e) {
    let { channel: t } = e;
    delete b[t.id];
}
function S(e) {
    let { guild: t } = e;
    b = o()(b)
        .filter((e) => e.guildId !== t.id)
        .keyBy("id")
        .value();
}
function A(e) {
    let { id: t, channelId: n } = e,
        r = b[n];
    if (
        null == r ||
        0 ===
            o().remove(r.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            }).length
    )
        return !1;
    (r.items = r.items.slice()), (b[n] = r);
}
function N(e) {
    let { ids: t, channelId: n } = e,
        r = b[n];
    if (null == r) return !1;
    r.items = r.items.filter((e) => {
        let { message: n } = e;
        return !t.includes(n.id);
    });
}
function C(e) {
    let t = e.message.id,
        n = e.message.channel_id;
    if (null == n) return !1;
    let r = b[n];
    if (null == r) return !1;
    if (null == e.message.author) {
        let i = o().findIndex(r.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === i) return;
        let { pinnedAt: a, message: s } = r.items[i],
            l = (0, c.wi)(s, e.message);
        if (l !== s) {
            let e = r.items.slice();
            (e[i] = {
                pinnedAt: a,
                message: l,
            }),
                (b[n].items = e);
        }
        return;
    }
    if (e.message.pinned) {
        r.items = r.items.slice();
        let n = o().findIndex(r.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        -1 === n
            ? r.items.unshift({
                  message: (0, c.e5)(e.message),
                  pinnedAt: new Date(),
              })
            : (r.items[n].message = (0, c.wi)(r.items[n].message, e.message));
        return;
    }
    let i = o().findIndex(r.items, (e) => {
        let { message: n } = e;
        return n.id === t;
    });
    if (-1 === i) return !1;
    (r.items = r.items.slice()), r.items.splice(i, 1);
}
function R() {
    o().forEach(b, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", h.Z.isBlockedForMessage(t)), t.set("ignored", h.Z.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
function P(e) {
    let { messageId: t, channelId: n } = e,
        r = b[n];
    if (null == r) return !1;
    let i = o().findIndex(r.items, (e) => {
        let { message: n } = e;
        return n.id === t;
    });
    if (-1 === i) return !1;
    (r.items = r.items.slice()), (r.items[i].message = (0, l.Cm)(r.items[i].message));
}
class w extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, _.Z, f.ZP, p.Z, m.default, u.default);
    }
    getPins(e) {
        return b[e];
    }
}
g(w, "displayName", "ChannelPinsStore");
let D = new w(s.Z, {
    CONNECTION_OPEN: y,
    LOAD_PINNED_MESSAGES: O,
    LOAD_PINNED_MESSAGES_SUCCESS: v,
    LOAD_PINNED_MESSAGES_FAILURE: I,
    CHANNEL_DELETE: T,
    THREAD_DELETE: T,
    GUILD_DELETE: S,
    MESSAGE_DELETE: A,
    MESSAGE_DELETE_BULK: N,
    MESSAGE_UPDATE: C,
    RELATIONSHIP_ADD: R,
    RELATIONSHIP_REMOVE: R,
    RELATIONSHIP_UPDATE: R,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: P,
});

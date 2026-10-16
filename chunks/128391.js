n.d(t, { A: () => s });
var i = n(358047),
    r = n(309010);
let a = 5 * n(927813).A.Millis.SECOND;
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: s } = n,
        l = new Set(),
        o = new Map(),
        d = new Map();
    function c(e) {
        let n = d.get(e);
        null != n && (clearTimeout(n), d.delete(e));
        let i = o.get(e);
        null == i || (o.delete(e), l.has(e) && (s?.(), i.forEach((e) => t(e))));
    }
    function u(e) {
        let { channelId: t } = e;
        null != t && (l.add(t), c(t));
    }
    function _(e) {
        let n,
            { message: u } = e,
            { id: _, channel_id: E } = u;
        if (null == _ || null == E || !l.has(E)) return;
        if (null != (n = r.Ay.getChannelId()) && (n === E || i.Ay.getCurrentSidebarChannelId(n) === E)) {
            (s?.(), t(u));
            return;
        }
        let A = o.get(E);
        (null == A && ((A = new Map()), o.set(E, A)),
            A.set(_, u),
            (function (e) {
                if (d.has(e)) return;
                let t = setTimeout(
                    () => {
                        (d.delete(e), c(e));
                    },
                    Math.floor(Math.random() * a),
                );
                d.set(e, t);
            })(E));
    }
    function E(e) {
        let { channelId: n, messages: i } = e;
        (l.add(n),
            s?.(),
            i.forEach((e) => {
                null != e.channel_id && l.has(e.channel_id) && t(e);
            }));
    }
    function A(e) {
        let { data: n } = e;
        (s?.(),
            n.forEach((e) => {
                let { messages: n } = e;
                n.forEach((e) => {
                    e.forEach((e) => t(e));
                });
            }));
    }
    e.actions = {
        ...e.actions,
        POST_CONNECTION_OPEN: function () {
            (l.clear(), d.forEach((e) => clearTimeout(e)), d.clear(), o.clear());
        },
        MESSAGE_CREATE: { callback: _, autoSubscribe: !1 },
        MESSAGE_UPDATE: _,
        LOAD_MESSAGES_SUCCESS: E,
        LOAD_MESSAGES_AROUND_SUCCESS: E,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: n } = e;
            (s?.(), n.forEach((e) => t(e)));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: n } = e;
            (s?.(),
                n.forEach((e) => {
                    let { message: n } = e;
                    return t(n);
                }));
        },
        SEARCH_MESSAGES_SUCCESS: A,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: A,
        CHANNEL_SELECT: { callback: u, autoSubscribe: !1 },
        SIDEBAR_VIEW_CHANNEL: { callback: u, autoSubscribe: !1 },
    };
}

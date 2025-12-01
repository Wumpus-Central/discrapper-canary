n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(570140),
    o = n(786761),
    s = n(247206);
function l(e, t, n) {
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
let c = {};
function u(e) {
    return "".concat(e.channel_id, ":").concat(e.id);
}
function d(e) {
    let { data: t } = e;
    (c = {}),
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    c[u(e)] = (0, o.e5)(e);
                });
            });
        });
}
function f(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = u(t),
        r = c[n];
    return (
        null != r &&
        ((c[n] = (0, o.wi)(r, {
            attachments: t.attachments,
            embeds: t.embeds,
        })),
        !0)
    );
}
function p(e) {
    let { messageId: t, channelId: n } = e,
        r = u({
            id: t,
            channel_id: n,
        }),
        i = c[r];
    null != i && (c[r] = (0, s.Cm)(i));
}
function _() {
    h();
}
function m() {
    h();
}
function h() {
    c = {};
}
class g extends (r = i.ZP.Store) {
    getMessage(e, t) {
        return c[
            u({
                id: e,
                channel_id: t,
            })
        ];
    }
}
l(g, "displayName", "SearchMessageStore");
let E = new g(a.Z, {
    SEARCH_MESSAGES_SUCCESS: d,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
    MESSAGE_UPDATE: f,
    LOGOUT: _,
    CONNECTION_OPEN: m,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: p,
});

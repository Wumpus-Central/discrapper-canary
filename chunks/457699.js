n.d(t, { A: () => E });
var r,
    i = n(311907),
    a = n(73153),
    s = n(141468),
    o = n(390248);
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
                    c[u(e)] = (0, s.rh)(e);
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
        ((c[n] = (0, s.IU)(r, {
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
    null != i && (c[r] = (0, o.Td)(i));
}
function _() {
    m();
}
function h() {
    m();
}
function m() {
    c = {};
}
class g extends (r = i.Ay.Store) {
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
let E = new g(a.h, {
    SEARCH_MESSAGES_SUCCESS: d,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
    MESSAGE_UPDATE: f,
    LOGOUT: _,
    CONNECTION_OPEN: h,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: p,
});

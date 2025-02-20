n.d(t, { Z: () => E });
var r,
    i = n(442837),
    o = n(570140),
    a = n(786761),
    s = n(247206);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = {};
function u(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function d(e) {
    return (
        null != e.messages &&
        ((c = e.messages.reduce(
            (e, t) => (
                t.forEach((t) => {
                    e[u(t)] = (0, a.e5)(t);
                }),
                e
            ),
            {}
        )),
        !0)
    );
}
function f(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = u(t),
        r = c[n];
    return (
        null != r &&
        ((c[n] = (0, a.wi)(r, {
            attachments: t.attachments,
            embeds: t.embeds
        })),
        !0)
    );
}
function p(e) {
    let { messageId: t, channelId: n } = e,
        r = u({
            id: t,
            channel_id: n
        }),
        i = c[r];
    null != i && (c[r] = (0, s.Cm)(i));
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
class g extends (r = i.ZP.Store) {
    getMessage(e, t) {
        return c[
            u({
                id: e,
                channel_id: t
            })
        ];
    }
}
l(g, 'displayName', 'SearchMessageStore');
let E = new g(o.Z, {
    SEARCH_FINISH: d,
    MOD_VIEW_SEARCH_FINISH: d,
    MESSAGE_UPDATE: f,
    LOGOUT: _,
    CONNECTION_OPEN: h,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: p
});

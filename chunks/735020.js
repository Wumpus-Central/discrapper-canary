n.d(t, { Z: () => E }), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(786761),
    o = n(247206);
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
let u = {};
function c(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function d(e) {
    return (
        null != e.messages &&
        ((u = e.messages.reduce(
            (e, t) => (
                t.forEach((t) => {
                    e[c(t)] = (0, s.e5)(t);
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
    let n = c(t),
        i = u[n];
    return (
        null != i &&
        ((u[n] = (0, s.wi)(i, {
            attachments: t.attachments,
            embeds: t.embeds
        })),
        !0)
    );
}
function _(e) {
    let { messageId: t, channelId: n } = e,
        i = c({
            id: t,
            channel_id: n
        }),
        r = u[i];
    null != r && (u[i] = (0, o.Cm)(r));
}
function p() {
    m();
}
function h() {
    m();
}
function m() {
    u = {};
}
class g extends (i = r.ZP.Store) {
    getMessage(e, t) {
        return u[
            c({
                id: e,
                channel_id: t
            })
        ];
    }
}
l(g, 'displayName', 'SearchMessageStore');
let E = new g(a.Z, {
    SEARCH_FINISH: d,
    MOD_VIEW_SEARCH_FINISH: d,
    MESSAGE_UPDATE: f,
    LOGOUT: p,
    CONNECTION_OPEN: h,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: _
});

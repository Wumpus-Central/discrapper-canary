n.d(t, { Z: () => v }), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(786761),
    o = n(651530),
    l = n(247206);
function u(e, t, n) {
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
function d(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function f(e) {
    return (
        !!(0, o.Kh)() &&
        null != e.messages &&
        ((c = e.messages.reduce(
            (e, t) => (
                t.forEach((t) => {
                    e[d(t)] = (0, s.e5)(t);
                }),
                e
            ),
            {}
        )),
        !0)
    );
}
function _(e) {
    let { message: t } = e;
    if (!(0, o.Kh)() || null == t.id || null == t.channel_id) return !1;
    let n = d(t),
        i = c[n];
    return (
        null != i &&
        ((c[n] = (0, s.wi)(i, {
            attachments: t.attachments,
            embeds: t.embeds
        })),
        !0)
    );
}
function p(e) {
    let { messageId: t, channelId: n } = e,
        i = d({
            id: t,
            channel_id: n
        }),
        r = c[i];
    null != r && (c[i] = (0, l.Cm)(r));
}
function h() {
    g();
}
function m() {
    g();
}
function g() {
    c = {};
}
class E extends (i = r.ZP.Store) {
    getMessage(e, t) {
        return c[
            d({
                id: e,
                channel_id: t
            })
        ];
    }
}
u(E, 'displayName', 'SearchMessageStore');
let v = new E(a.Z, {
    SEARCH_FINISH: f,
    MOD_VIEW_SEARCH_FINISH: f,
    MESSAGE_UPDATE: _,
    LOGOUT: h,
    CONNECTION_OPEN: m,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: p
});

var i,
    a = r(724458);
var o = r(442837),
    s = r(570140),
    l = r(786761),
    u = r(651530),
    c = r(247206);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = {};
function p(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function h(e) {
    return (
        !!(0, u.Kh)() &&
        null != e.messages &&
        ((f = e.messages.reduce(
            (e, n) => (
                n.forEach((n) => {
                    e[p(n)] = (0, l.e5)(n);
                }),
                e
            ),
            {}
        )),
        !0)
    );
}
function _(e) {
    let { message: n } = e;
    if (!(0, u.Kh)() || null == n.id || null == n.channel_id) return !1;
    let r = p(n),
        i = f[r];
    return (
        null != i &&
        ((f[r] = (0, l.wi)(i, {
            attachments: n.attachments,
            embeds: n.embeds
        })),
        !0)
    );
}
function m(e) {
    let { messageId: n, channelId: r } = e,
        i = p({
            id: n,
            channel_id: r
        }),
        a = f[i];
    null != a && (f[i] = (0, c.Cm)(a));
}
function g() {
    v();
}
function E() {
    v();
}
function v() {
    f = {};
}
class y extends (i = o.ZP.Store) {
    getMessage(e, n) {
        return f[
            p({
                id: e,
                channel_id: n
            })
        ];
    }
}
d(y, 'displayName', 'SearchMessageStore'),
    (n.Z = new y(s.Z, {
        SEARCH_FINISH: h,
        MOD_VIEW_SEARCH_FINISH: h,
        MESSAGE_UPDATE: _,
        LOGOUT: g,
        CONNECTION_OPEN: E,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: m
    }));

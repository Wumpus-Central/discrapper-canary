"use strict";
n.d(t, { Qo: () => _, V: () => p, W1: () => f, ml: () => g, vb: () => h });
var r = n(64700),
    a = n(311907),
    s = n(843472),
    i = n(803306),
    l = n(71393),
    o = n(320501),
    c = n(376708),
    d = n(272720),
    u = n(56595);
function _(e) {
    return (0, a.bG)([l.A], () => {
        if (null == e) return !1;
        let t = l.A.getGuild(e);
        return null != t && (0, u.A)(t) && null != (0, d.A)(t);
    });
}
function p(e) {
    return (0, c.uW)(e);
}
function f(e) {
    return (0, c.xJ)(e);
}
function g(e) {
    let { messageReference: t } = e,
        n = (0, a.bG)([o.A], () => (null != t ? o.A.getMessage(t.channel_id, t.message_id) : null));
    (0, r.useEffect)(() => {
        null == n &&
            null != t &&
            s.A.fetchMessages({ channelId: t.channel_id, jump: { messageId: t.message_id }, limit: 10 });
    }, [n, t]);
}
function h(e) {
    let t = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != t && (0, i.wz)(t);
}

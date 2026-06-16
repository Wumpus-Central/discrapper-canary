"use strict";
n.d(t, { Ay: () => S, I: () => p, _5: () => f, _g: () => E, pk: () => m }), n(321073);
var i = n(735438),
    r = n(308528),
    s = n(115718),
    a = n(280157),
    o = n(174768),
    l = n(734057),
    u = n(576705),
    c = n(287809),
    d = n(403362),
    _ = n(507696),
    h = n(652215);
function f(e) {
    let t = l.A.getChannel(e);
    return t?.type === h.rbe.DM ? { type: "user", id: t.recipients[0] } : { type: "channel", id: e };
}
function p(e) {
    return `${e.type}-${e.id}`;
}
function E(e) {
    if ("channel" === e.type) return e.id;
    let t = l.A.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function m(e) {
    let t = E(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await r.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function g(e) {
    if ("user" !== e.type) return (0, a.A)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t ? { type: s.rD.USER, record: t, score: 0 } : null;
    }
}
function A(e, t) {
    return e.type === s.rD.USER
        ? t || null != l.A.getDMChannelFromUserId(e.record.id)
        : e.type === s.rD.GROUP_DM ||
              (e.record.type !== h.rbe.GUILD_FORUM &&
                  e.record.type !== h.rbe.GUILD_MEDIA &&
                  u.A.can(h.xBc.VIEW_CHANNEL, e.record) &&
                  u.A.can(h.xBc.SEND_MESSAGES, e.record));
}
function I(e, t) {
    let n,
        i = new Set();
    if (null != t) for (let e of t) i.add(e);
    let r = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === s.rD.HEADER) n = t;
        else {
            let { id: e } = t.record;
            i.has(e) || (i.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
        }
    return r;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A;
    return e.filter((e) => (0, d.Vq)(e) && (e.type === s.rD.HEADER || ((0, _.N)(e) && n(e, t))));
}
function S(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: r,
        frequentChannels: s,
        targetDestination: l,
        selectedDestinations: u,
        pinnedDestinations: c,
        originDestination: d,
        channelFilter: _,
        includeMissingDMs: h,
    } = e;
    if (n) return I(T(t, h, _));
    let f = null != c && c.length > 0 ? c.map((e) => g(e)) : [],
        p = o.A.getChannelHistory(),
        E = p.length > 0 ? p.map((e) => (0, a.A)(e)) : [],
        m = s.length > 0 ? s.map((e) => (0, a.A)(e.id)) : [],
        A = T([...f, null != l ? g(l) : null, ...E, ...m], h, _),
        S = u?.find((e) => (0, i.isEqual)(e, d)) != null,
        y = null == d || S ? [] : [d.id];
    return null != r
        ? I(
              A.filter((e) => e.type === r),
              y,
          )
        : I(A, y).slice(0, 15);
}
n(375708);

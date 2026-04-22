"use strict";
n.d(t, { Ay: () => S, I: () => h, _5: () => E, _g: () => p, pk: () => m }), n(321073);
var r = n(735438),
    i = n(308528),
    s = n(629357),
    a = n(280157),
    o = n(174768),
    l = n(734057),
    u = n(576705),
    d = n(287809),
    c = n(403362),
    _ = n(507696),
    f = n(652215);
function E(e) {
    let t = l.A.getChannel(e);
    return t?.type === f.rbe.DM ? { type: "user", id: t.recipients[0] } : { type: "channel", id: e };
}
function h(e) {
    return `${e.type}-${e.id}`;
}
function p(e) {
    if ("channel" === e.type) return e.id;
    let t = l.A.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function m(e) {
    let t = p(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await i.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function g(e) {
    if ("user" !== e.type) return (0, a.A)(e.id);
    {
        let t = d.default.getUser(e.id);
        return null != t ? { type: s.rD.USER, record: t, score: 0 } : null;
    }
}
function A(e, t) {
    return e.type === s.rD.USER
        ? t || null != l.A.getDMChannelFromUserId(e.record.id)
        : e.type === s.rD.GROUP_DM ||
              (e.record.type !== f.rbe.GUILD_FORUM &&
                  e.record.type !== f.rbe.GUILD_MEDIA &&
                  u.A.can(f.xBc.VIEW_CHANNEL, e.record) &&
                  u.A.can(f.xBc.SEND_MESSAGES, e.record));
}
function I(e, t) {
    let n,
        r = new Set();
    if (null != t) for (let e of t) r.add(e);
    let i = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === s.rD.HEADER) n = t;
        else {
            let { id: e } = t.record;
            r.has(e) || (r.add(e), null != n && (i.push(n), (n = void 0)), i.push(t));
        }
    return i;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A;
    return e.filter((e) => (0, c.Vq)(e) && (e.type === s.rD.HEADER || ((0, _.N)(e) && n(e, t))));
}
function S(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: i,
        frequentChannels: s,
        targetDestination: l,
        selectedDestinations: u,
        pinnedDestinations: d,
        originDestination: c,
        channelFilter: _,
        includeMissingDMs: f,
    } = e;
    if (n) return I(T(t, f, _));
    let E = null != d && d.length > 0 ? d.map((e) => g(e)) : [],
        h = o.A.getChannelHistory(),
        p = h.length > 0 ? h.map((e) => (0, a.A)(e)) : [],
        m = s.length > 0 ? s.map((e) => (0, a.A)(e.id)) : [],
        A = T([...E, null != l ? g(l) : null, ...p, ...m], f, _),
        S = u?.find((e) => (0, r.isEqual)(e, c)) != null,
        y = null == c || S ? [] : [c.id];
    return null != i
        ? I(
              A.filter((e) => e.type === i),
              y,
          )
        : I(A, y).slice(0, 15);
}
n(985018);

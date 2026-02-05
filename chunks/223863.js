"use strict";
n.d(t, { Ay: () => v, I: () => m, _5: () => h, _g: () => g, pk: () => E }), n(321073);
var r = n(735438),
    i = n(308528),
    a = n(629357),
    s = n(280157),
    o = n(174768),
    l = n(734057),
    u = n(576705),
    c = n(287809),
    d = n(403362),
    _ = n(507696),
    f = n(652215);
n(985018);
let p = 15;
function h(e) {
    let t = l.A.getChannel(e);
    return t?.type === f.rbe.DM ? { type: "user", id: t.recipients[0] } : { type: "channel", id: e };
}
function m(e) {
    return `${e.type}-${e.id}`;
}
function g(e) {
    if ("channel" === e.type) return e.id;
    let t = l.A.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function E(e) {
    let t = g(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await i.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function A(e) {
    if ("user" !== e.type) return (0, s.A)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t ? { type: a.rD.USER, record: t, score: 0 } : null;
    }
}
function I(e) {
    return e.type === AutocompleterResultTypes.USER || PermissionStore.can(Permissions.VIEW_CHANNEL, e.record);
}
function T(e, t) {
    return e.type === a.rD.USER
        ? t || null != l.A.getDMChannelFromUserId(e.record.id)
        : e.type === a.rD.GROUP_DM ||
              (e.record.type !== f.rbe.GUILD_FORUM &&
                  e.record.type !== f.rbe.GUILD_MEDIA &&
                  u.A.can(f.xBc.VIEW_CHANNEL, e.record) &&
                  u.A.can(f.xBc.SEND_MESSAGES, e.record));
}
function y(e, t) {
    let n,
        r = new Set();
    if (null != t) for (let e of t) r.add(e);
    let i = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === a.rD.HEADER) n = t;
        else {
            let { id: e } = t.record;
            r.has(e) || (r.add(e), null != n && (i.push(n), (n = void 0)), i.push(t));
        }
    return i;
}
function S(e, t) {
    return e.filter((e) => (0, d.Vq)(e) && (e.type === a.rD.HEADER || ((0, _.N)(e) && T(e, t))));
}
function v(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: i,
        frequentChannels: a,
        targetDestination: l,
        selectedDestinations: u,
        pinnedDestinations: c,
        originDestination: d,
        includeMissingDMs: _,
    } = e;
    if (n) return y(S(t, _));
    let f = null != c && c.length > 0 ? c.map((e) => A(e)) : [],
        h = o.A.getChannelHistory(),
        m = h.length > 0 ? h.map((e) => (0, s.A)(e)) : [],
        g = a.length > 0 ? a.map((e) => (0, s.A)(e.id)) : [],
        E = S([...f, null != l ? A(l) : null, ...m, ...g], _),
        I = u?.find((e) => (0, r.isEqual)(e, d)) != null,
        T = null == d || I ? [] : [d.id];
    return null != i ? y(E.filter((e) => e.type === i)) : y(E, T).slice(0, p);
}

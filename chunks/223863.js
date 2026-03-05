"use strict";
n.d(t, { Ay: () => v, I: () => m, _5: () => h, _g: () => E, pk: () => g }), n(321073);
var r = n(735438),
    i = n(308528),
    s = n(629357),
    a = n(280157),
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
function E(e) {
    if ("channel" === e.type) return e.id;
    let t = l.A.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function g(e) {
    let t = E(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await i.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function A(e) {
    if ("user" !== e.type) return (0, a.A)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t ? { type: s.rD.USER, record: t, score: 0 } : null;
    }
}
function I(e) {
    return e.type === AutocompleterResultTypes.USER || PermissionStore.can(Permissions.VIEW_CHANNEL, e.record);
}
function T(e, t) {
    return e.type === s.rD.USER
        ? t || null != l.A.getDMChannelFromUserId(e.record.id)
        : e.type === s.rD.GROUP_DM ||
              (e.record.type !== f.rbe.GUILD_FORUM &&
                  e.record.type !== f.rbe.GUILD_MEDIA &&
                  u.A.can(f.xBc.VIEW_CHANNEL, e.record) &&
                  u.A.can(f.xBc.SEND_MESSAGES, e.record));
}
function S(e, t) {
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
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
    return e.filter((e) => (0, d.Vq)(e) && (e.type === s.rD.HEADER || ((0, _.N)(e) && n(e, t))));
}
function v(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: i,
        frequentChannels: s,
        targetDestination: l,
        selectedDestinations: u,
        pinnedDestinations: c,
        originDestination: d,
        channelFilter: _,
        includeMissingDMs: f,
    } = e;
    if (n) return S(y(t, f, _));
    let h = null != c && c.length > 0 ? c.map((e) => A(e)) : [],
        m = o.A.getChannelHistory(),
        E = m.length > 0 ? m.map((e) => (0, a.A)(e)) : [],
        g = s.length > 0 ? s.map((e) => (0, a.A)(e.id)) : [],
        I = y([...h, null != l ? A(l) : null, ...E, ...g], f, _),
        T = u?.find((e) => (0, r.isEqual)(e, d)) != null,
        v = null == d || T ? [] : [d.id];
    return null != i
        ? S(
              I.filter((e) => e.type === i),
              v,
          )
        : S(I, v).slice(0, p);
}

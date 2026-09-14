(r.d(t, { Ay: () => _, I: () => h, _5: () => y, _g: () => D, hY: () => A, pk: () => E }), r(321073));
var n = r(435558),
    u = r(308528),
    l = r(115718),
    i = r(280157),
    c = r(174768),
    s = r(734057),
    d = r(576705),
    o = r(287809),
    f = r(403362),
    a = r(507696),
    p = r(652215);
function y(e) {
    let t = s.A.getChannel(e);
    return t?.type === p.rbe.DM ? { type: "user", id: t.recipients[0] } : { type: "channel", id: e };
}
function A(e) {
    let { type: t, record: r } = e;
    return t === l.rD.USER ? { type: "user", id: r.id } : { type: "channel", id: r.id };
}
function h(e) {
    return `${e.type}-${e.id}`;
}
function D(e) {
    if ("channel" === e.type) return e.id;
    let t = s.A.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function E(e) {
    let t = D(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await u.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function g(e) {
    if ("user" !== e.type) return (0, i.A)(e.id);
    {
        let t = o.default.getUser(e.id);
        return null != t ? { type: l.rD.USER, record: t, score: 0 } : null;
    }
}
function C(e, t) {
    return e.type === l.rD.USER
        ? t || null != s.A.getDMChannelFromUserId(e.record.id)
        : e.type === l.rD.GROUP_DM ||
              (e.record.type !== p.rbe.GUILD_FORUM &&
                  e.record.type !== p.rbe.GUILD_MEDIA &&
                  d.A.can(p.xBc.VIEW_CHANNEL, e.record) &&
                  d.A.can(p.xBc.SEND_MESSAGES, e.record));
}
function R(e, t) {
    let r,
        n = new Set();
    if (null != t) for (let e of t) n.add(e);
    let u = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === l.rD.HEADER) r = t;
        else {
            let { id: e } = t.record;
            n.has(e) || (n.add(e), null != r && (u.push(r), (r = void 0)), u.push(t));
        }
    return u;
}
function U(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
    return e.filter((e) => (0, f.Vq)(e) && (e.type === l.rD.HEADER || ((0, a.N)(e) && r(e, t))));
}
function _(e) {
    let {
        results: t,
        hasQuery: r,
        queryMode: u,
        frequentChannels: l,
        targetDestination: s,
        selectedDestinations: d,
        pinnedDestinations: o,
        originDestination: f,
        channelFilter: a,
        includeMissingDMs: p,
    } = e;
    if (r) return R(U(t, p, a));
    let y = null != o && o.length > 0 ? o.map((e) => g(e)) : [],
        A = c.A.getChannelHistory(),
        h = A.length > 0 ? A.map((e) => (0, i.A)(e)) : [],
        D = l.length > 0 ? l.map((e) => (0, i.A)(e.id)) : [],
        E = U([...y, null != s ? g(s) : null, ...h, ...D], p, a),
        C = d?.find((e) => (0, n.isEqual)(e, f)) != null,
        _ = null == f || C ? [] : [f.id];
    return null != u
        ? R(
              E.filter((e) => e.type === u),
              _,
          )
        : R(E, _).slice(0, 15);
}
r(375708);

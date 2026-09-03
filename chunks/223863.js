n.d(t, { Ay: () => N, I: () => I, _5: () => A, _g: () => f, hY: () => h, pk: () => p }), n(321073);
var i = n(435558),
    r = n(308528),
    a = n(115718),
    s = n(280157),
    l = n(174768),
    o = n(734057),
    d = n(576705),
    c = n(287809),
    u = n(403362),
    _ = n(507696),
    E = n(652215);
function A(e) {
    let t = o.A.getChannel(e);
    return t?.type === E.rbe.DM ? { type: "user", id: t.recipients[0] } : { type: "channel", id: e };
}
function h(e) {
    let { type: t, record: n } = e;
    return t === a.rD.USER ? { type: "user", id: n.id } : { type: "channel", id: n.id };
}
function I(e) {
    return `${e.type}-${e.id}`;
}
function f(e) {
    if ("channel" === e.type) return e.id;
    let t = o.A.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function p(e) {
    let t = f(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await r.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function T(e) {
    if ("user" !== e.type) return (0, s.A)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t ? { type: a.rD.USER, record: t, score: 0 } : null;
    }
}
function m(e, t) {
    return e.type === a.rD.USER
        ? t || null != o.A.getDMChannelFromUserId(e.record.id)
        : e.type === a.rD.GROUP_DM ||
              (e.record.type !== E.rbe.GUILD_FORUM &&
                  e.record.type !== E.rbe.GUILD_MEDIA &&
                  d.A.can(E.xBc.VIEW_CHANNEL, e.record) &&
                  d.A.can(E.xBc.SEND_MESSAGES, e.record));
}
function g(e, t) {
    let n,
        i = new Set();
    if (null != t) for (let e of t) i.add(e);
    let r = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === a.rD.HEADER) n = t;
        else {
            let { id: e } = t.record;
            i.has(e) || (i.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
        }
    return r;
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
    return e.filter((e) => (0, u.Vq)(e) && (e.type === a.rD.HEADER || ((0, _.N)(e) && n(e, t))));
}
function N(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: r,
        frequentChannels: a,
        targetDestination: o,
        selectedDestinations: d,
        pinnedDestinations: c,
        originDestination: u,
        channelFilter: _,
        includeMissingDMs: E,
    } = e;
    if (n) return g(S(t, E, _));
    let A = null != c && c.length > 0 ? c.map((e) => T(e)) : [],
        h = l.A.getChannelHistory(),
        I = h.length > 0 ? h.map((e) => (0, s.A)(e)) : [],
        f = a.length > 0 ? a.map((e) => (0, s.A)(e.id)) : [],
        p = S([...A, null != o ? T(o) : null, ...I, ...f], E, _),
        m = d?.find((e) => (0, i.isEqual)(e, u)) != null,
        N = null == u || m ? [] : [u.id];
    return null != r
        ? g(
              p.filter((e) => e.type === r),
              N,
          )
        : g(p, N).slice(0, 15);
}
n(375708);

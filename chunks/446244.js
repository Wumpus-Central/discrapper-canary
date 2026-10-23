(t.d(r, { Ay: () => S, I: () => h, _5: () => y, _g: () => E, hY: () => D, pk: () => A }), t(321073));
var n = t(435558),
    l = t(308528),
    u = t(115718),
    i = t(280157),
    d = t(174768),
    c = t(734057),
    o = t(576705),
    p = t(287809),
    s = t(403362),
    a = t(507696),
    f = t(652215);
function y(e) {
    let r = c.A.getChannel(e);
    return r?.type === f.rbe.DM ? { type: "user", id: r.recipients[0] } : { type: "channel", id: e };
}
function D(e) {
    let { type: r, record: t } = e;
    return r === u.rD.USER ? { type: "user", id: t.id } : { type: "channel", id: t.id };
}
function h(e) {
    return `${e.type}-${e.id}`;
}
function E(e) {
    if ("channel" === e.type) return e.id;
    let r = c.A.getDMFromUserId(e.id);
    if (null != r) return r;
}
async function A(e) {
    let r = E(e);
    if (null != r) return r;
    if ("user" === e.type)
        try {
            return await l.A.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function U(e) {
    if ("user" !== e.type) return (0, i.A)(e.id);
    {
        let r = p.default.getUser(e.id);
        return null != r ? { type: u.rD.USER, record: r, score: 0 } : null;
    }
}
function _(e, r) {
    return e.type === u.rD.USER
        ? !e.record.isSystemUser() && (!!r || null != c.A.getDMChannelFromUserId(e.record.id))
        : e.type === u.rD.GROUP_DM ||
              (e.record.type !== f.rbe.GUILD_FORUM &&
                  e.record.type !== f.rbe.GUILD_MEDIA &&
                  o.A.can(f.xBc.VIEW_CHANNEL, e.record) &&
                  o.A.can(f.xBc.SEND_MESSAGES, e.record));
}
function g(e, r) {
    let t,
        n = new Set();
    if (null != r) for (let e of r) n.add(e);
    let l = [];
    for (let r of e)
        if (null == r) continue;
        else if (r.type === u.rD.HEADER) t = r;
        else {
            let { id: e } = r.record;
            n.has(e) || (n.add(e), null != t && (l.push(t), (t = void 0)), l.push(r));
        }
    return l;
}
function C(e, r) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
    return e.filter((e) => (0, s.Vq)(e) && (e.type === u.rD.HEADER || ((0, a.N)(e) && t(e, r))));
}
function S(e) {
    let {
        results: r,
        hasQuery: t,
        queryMode: l,
        frequentChannels: u,
        targetDestination: c,
        selectedDestinations: o,
        pinnedDestinations: p,
        originDestination: s,
        channelFilter: a,
        includeMissingDMs: f,
    } = e;
    if (t) return g(C(r, f, a));
    let y = null != p && p.length > 0 ? p.map((e) => U(e)) : [],
        D = d.A.getChannelHistory(),
        h = D.length > 0 ? D.map((e) => (0, i.A)(e)) : [],
        E = u.length > 0 ? u.map((e) => (0, i.A)(e.id)) : [],
        A = C([...y, null != c ? U(c) : null, ...h, ...E], f, a),
        _ = o?.find((e) => (0, n.isEqual)(e, s)) != null,
        S = null == s || _ ? [] : [s.id];
    return null != l
        ? g(
              A.filter((e) => e.type === l),
              S,
          )
        : g(A, S).slice(0, 15);
}
t(105292);

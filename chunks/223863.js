n.d(t, {
    Ay: () => S,
    I: () => m,
    _5: () => h,
    _g: () => g,
    pk: () => E,
}),
    n(896048),
    n(321073);
var r = n(735438),
    i = n(308528),
    a = n(629357),
    s = n(280157),
    o = n(174768),
    l = n(734057),
    c = n(576705),
    u = n(287809),
    d = n(403362),
    f = n(507696),
    p = n(652215);
n(985018);
let _ = 15;

function h(e) {
    let t = l.A.getChannel(e);
    return (null == t ? void 0 : t.type) === p.rbe.DM
        ? {
              type: "user",
              id: t.recipients[0],
          }
        : {
              type: "channel",
              id: e,
          };
}

function m(e) {
    return "".concat(e.type, "-").concat(e.id);
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

function b(e) {
    if ("user" !== e.type) return (0, s.A)(e.id);
    {
        let t = u.default.getUser(e.id);
        return null != t
            ? {
                  type: a.rD.USER,
                  record: t,
                  score: 0,
              }
            : null;
    }
}

function y(e) {
    return e.type === AutocompleterResultTypes.USER || PermissionStore.can(Permissions.VIEW_CHANNEL, e.record);
}

function O(e, t) {
    return e.type === a.rD.USER
        ? t || null != l.A.getDMChannelFromUserId(e.record.id)
        : e.type === a.rD.GROUP_DM ||
              (e.record.type !== p.rbe.GUILD_FORUM &&
                  e.record.type !== p.rbe.GUILD_MEDIA &&
                  c.A.can(p.xBc.VIEW_CHANNEL, e.record) &&
                  c.A.can(p.xBc.SEND_MESSAGES, e.record));
}

function A(e, t) {
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

function v(e, t) {
    return e.filter((e) => (0, d.Vq)(e) && (e.type === a.rD.HEADER || ((0, f.N)(e) && O(e, t))));
}

function S(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: i,
        frequentChannels: a,
        targetDestination: l,
        selectedDestinations: c,
        pinnedDestinations: u,
        originDestination: d,
        includeMissingDMs: f,
    } = e;
    if (n) return A(v(t, f));
    let p = null != u && u.length > 0 ? u.map((e) => b(e)) : [],
        h = o.A.getChannelHistory(),
        m = h.length > 0 ? h.map((e) => (0, s.A)(e)) : [],
        g = a.length > 0 ? a.map((e) => (0, s.A)(e.id)) : [],
        E = v([...p, null != l ? b(l) : null, ...m, ...g], f),
        y = (null == c ? void 0 : c.find((e) => (0, r.isEqual)(e, d))) != null,
        O = null == d || y ? [] : [d.id];
    return null != i ? A(E.filter((e) => e.type === i)) : A(E, O).slice(0, _);
}

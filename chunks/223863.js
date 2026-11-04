t(321073);
var n = t(435558),
    l = t(308528),
    u = t(662090),
    i = t(280157),
    d = t(174768),
    c = t(734057),
    s = t(576705),
    a = t(287809),
    o = t(403362),
    p = t(507696),
    f = t(652215);
t(792996);
let y = /^deleted_user_[0-9a-f]{12}$/;
function h(e) {
    if ("channel" === e.type) return e.id;
    let r = c.A.getDMFromUserId(e.id);
    if (null != r) return r;
}
function D(e) {
    if ("user" !== e.type) return (0, i.A)(e.id);
    {
        let r = a.default.getUser(e.id);
        return null != r ? { type: u.rD.USER, record: r, score: 0 } : null;
    }
}
function E(e, r) {
    if (e.type === u.rD.USER) {
        var t;
        return (
            !(
                e.record.isSystemUser() ||
                "456226577798135808" === (t = e.record).id ||
                (t.hasUniqueUsername() && y.test(t.username))
            ) &&
            (!!r || null != c.A.getDMChannelFromUserId(e.record.id))
        );
    }
    return (
        e.type === u.rD.GROUP_DM ||
        (e.record.type !== f.rbe.GUILD_FORUM &&
            e.record.type !== f.rbe.GUILD_MEDIA &&
            s.A.can(f.xBc.VIEW_CHANNEL, e.record) &&
            s.A.can(f.xBc.SEND_MESSAGES, e.record))
    );
}
function A(e, r) {
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
function U(e, r) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
    return e.filter((e) => (0, o.Vq)(e) && (e.type === u.rD.HEADER || ((0, p.N)(e) && t(e, r))));
}
t.d(
    r,
    {},
    {
        Ay: function (e) {
            let {
                results: r,
                hasQuery: t,
                queryMode: l,
                frequentChannels: u,
                targetDestination: c,
                selectedDestinations: s,
                pinnedDestinations: a,
                originDestination: o,
                channelFilter: p,
                includeMissingDMs: f,
            } = e;
            if (t) return A(U(r, f, p));
            let y = null != a && a.length > 0 ? a.map((e) => D(e)) : [],
                h = d.A.getChannelHistory(),
                E = h.length > 0 ? h.map((e) => (0, i.A)(e)) : [],
                _ = u.length > 0 ? u.map((e) => (0, i.A)(e.id)) : [],
                g = U([...y, null != c ? D(c) : null, ...E, ..._], f, p),
                C = s?.find((e) => (0, n.isEqual)(e, o)) != null,
                S = null == o || C ? [] : [o.id];
            return null != l
                ? A(
                      g.filter((e) => e.type === l),
                      S,
                  )
                : A(g, S).slice(0, 15);
        },
        I: function (e) {
            return `${e.type}-${e.id}`;
        },
        _5: function (e) {
            let r = c.A.getChannel(e);
            return r?.type === f.rbe.DM ? { type: "user", id: r.recipients[0] } : { type: "channel", id: e };
        },
        _g: h,
        hY: function (e) {
            let { type: r, record: t } = e;
            return r === u.rD.USER ? { type: "user", id: t.id } : { type: "channel", id: t.id };
        },
        pk: async function (e) {
            let r = h(e);
            if (null != r) return r;
            if ("user" === e.type)
                try {
                    return await l.A.getOrEnsurePrivateChannel(e.id);
                } catch (e) {
                    return;
                }
        },
    },
);

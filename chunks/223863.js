t(321073);
var n = t(435558),
    l = t(308528),
    u = t(662090),
    i = t(280157),
    d = t(174768),
    c = t(734057),
    o = t(576705),
    s = t(287809),
    a = t(403362),
    p = t(507696),
    f = t(652215);
t(792996);
let y = /^deleted_user_[0-9a-f]{12}$/;
function D(e) {
    if ("channel" === e.type) return e.id;
    let r = c.A.getDMFromUserId(e.id);
    if (null != r) return r;
}
function h(e) {
    if ("user" !== e.type) return (0, i.A)(e.id);
    {
        let r = s.default.getUser(e.id);
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
            e.record.type !== f.rbe.GUILD_DIRECTORY &&
            o.A.can(f.xBc.VIEW_CHANNEL, e.record) &&
            o.A.can(f.xBc.SEND_MESSAGES, e.record))
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
    return e.filter((e) => (0, a.Vq)(e) && (e.type === u.rD.HEADER || ((0, p.N)(e) && t(e, r))));
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
                selectedDestinations: o,
                pinnedDestinations: s,
                originDestination: a,
                channelFilter: p,
                includeMissingDMs: f,
            } = e;
            if (t) return A(U(r, f, p));
            let y = null != s && s.length > 0 ? s.map((e) => h(e)) : [],
                D = d.A.getChannelHistory(),
                E = D.length > 0 ? D.map((e) => (0, i.A)(e)) : [],
                _ = u.length > 0 ? u.map((e) => (0, i.A)(e.id)) : [],
                g = U([...y, null != c ? h(c) : null, ...E, ..._], f, p),
                C = o?.find((e) => (0, n.isEqual)(e, a)) != null,
                R = null == a || C ? [] : [a.id];
            return null != l
                ? A(
                      g.filter((e) => e.type === l),
                      R,
                  )
                : A(g, R).slice(0, 15);
        },
        I: function (e) {
            return `${e.type}-${e.id}`;
        },
        _5: function (e) {
            let r = c.A.getChannel(e);
            return r?.type === f.rbe.DM ? { type: "user", id: r.recipients[0] } : { type: "channel", id: e };
        },
        _g: D,
        hY: function (e) {
            let { type: r, record: t } = e;
            return r === u.rD.USER ? { type: "user", id: t.id } : { type: "channel", id: t.id };
        },
        pk: async function (e) {
            let r = D(e);
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

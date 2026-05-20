t.d(n, { A: () => E });
var i = t(627968);
t(64700);
var l = t(17928),
    r = t(477782),
    o = t(241541),
    a = t(192308),
    c = t(855687),
    d = t(576705),
    s = t(652215),
    u = t(375708);
function E(e) {
    let { source: n, guild: t, channel: i, stageInstance: r } = e,
        o = (0, l.bG)([d.A], () => (0, c.K)(d.A, t, i, r)),
        a = p(n, t, i),
        s = A(n, i);
    return o ? a : s;
}
function D(e, n) {
    return (null != n && [s.PE1.GUILD_HEADER, s.PE1.GUILD_CONTEXT_MENU].includes(n)) || null == e
        ? u.intl.string(u.t.Sd8Ixw)
        : e.type === s.rbe.GUILD_VOICE
          ? u.intl.string(u.t["EE+P0H"])
          : u.intl.string(u.t["0jeAXt"]);
}
let p = (e, n, l) => {
        if (null == n) return null;
        let c = D(l, e);
        return (0, i.jsx)(r.Dr, {
            id: "invite-people",
            label: c,
            color: "brand",
            icon: e === s.PE1.GUILD_HEADER ? o.D : void 0,
            leadingAccessory: e === s.PE1.GUILD_HEADER ? { type: "icon", icon: o.D } : void 0,
            action: () =>
                (0, a.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([
                        t.e("44710"),
                        t.e("67485"),
                        t.e("59957"),
                        t.e("28136"),
                        t.e("16084"),
                        t.e("97073"),
                        t.e("87317"),
                        t.e("22547"),
                    ]).then(t.bind(t, 1310));
                    return (t) => (0, i.jsx)(r, { ...t, guild: n, channel: l, source: e });
                }),
        });
    },
    A = (e, n) => {
        let l = D(n, e);
        return (0, i.jsx)(r.Dr, {
            id: "invite-people",
            label: l,
            color: "brand",
            icon: e === s.PE1.GUILD_HEADER ? o.D : void 0,
            leadingAccessory: e === s.PE1.GUILD_HEADER ? { type: "icon", icon: o.D } : void 0,
            action: () =>
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await t.e("62751").then(t.bind(t, 132610));
                    return (n) => (0, i.jsx)(e, { ...n });
                }),
        });
    };

i.d(e, { A: () => E });
var t = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    o = i(241541),
    a = i(192308),
    c = i(855687),
    d = i(576705),
    s = i(652215),
    u = i(375708);
function E(n) {
    var e;
    let u,
        { source: E, guild: p, channel: A, stageInstance: b } = n,
        _ = (0, l.bG)([d.A], () => (0, c.K)(d.A, p, A, b)),
        v = (function (n, e, l) {
            if (null == e) return null;
            let c = D(l, n);
            return (0, t.jsx)(r.Dr, {
                id: "invite-people",
                label: c,
                color: "brand",
                icon: n === s.PE1.GUILD_HEADER ? o.D : void 0,
                leadingAccessory: n === s.PE1.GUILD_HEADER ? { type: "icon", icon: o.D } : void 0,
                action: () =>
                    (0, a.openModalLazy)(async () => {
                        let { default: r } = await Promise.all([
                            i.e("7266"),
                            i.e("26903"),
                            i.e("59957"),
                            i.e("28136"),
                            i.e("16084"),
                            i.e("36624"),
                            i.e("22547"),
                        ]).then(i.bind(i, 1310));
                        return (i) => (0, t.jsx)(r, { ...i, guild: e, channel: l, source: n });
                    }),
            });
        })(E, p, A),
        y =
            ((u = D(A, (e = E))),
            (0, t.jsx)(r.Dr, {
                id: "invite-people",
                label: u,
                color: "brand",
                icon: e === s.PE1.GUILD_HEADER ? o.D : void 0,
                leadingAccessory: e === s.PE1.GUILD_HEADER ? { type: "icon", icon: o.D } : void 0,
                action: () =>
                    (0, a.openModalLazy)(async () => {
                        let { default: n } = await i.e("62751").then(i.bind(i, 132610));
                        return (e) => (0, t.jsx)(n, { ...e });
                    }),
            }));
    return _ ? v : y;
}
function D(n, e) {
    return (null != e && [s.PE1.GUILD_HEADER, s.PE1.GUILD_CONTEXT_MENU].includes(e)) || null == n
        ? u.intl.string(u.t.Sd8Ixw)
        : n.type === s.rbe.GUILD_VOICE
          ? u.intl.string(u.t["EE+P0H"])
          : u.intl.string(u.t["0jeAXt"]);
}

n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(477782),
    a = n(241541),
    s = n(192308),
    d = n(855687),
    u = n(576705),
    o = n(652215),
    c = n(985018);
function A(e) {
    let { source: t, guild: n, channel: i, stageInstance: r } = e,
        a = (0, l.bG)([u.A], () => (0, d.K)(u.A, n, i, r)),
        s = g(t, n, i),
        o = C(t, i);
    return a ? s : o;
}
function E(e, t) {
    return (null != t && [o.PE1.GUILD_HEADER, o.PE1.GUILD_CONTEXT_MENU].includes(t)) || null == e
        ? c.intl.string(c.t.Sd8Ixw)
        : e.type === o.rbe.GUILD_VOICE
          ? c.intl.string(c.t["EE+P0H"])
          : c.intl.string(c.t["0jeAXt"]);
}
let g = (e, t, l) => {
        if (null == t) return null;
        let d = E(l, e);
        return (0, i.jsx)(r.Dr, {
            id: "invite-people",
            label: d,
            color: "brand",
            icon: e === o.PE1.GUILD_HEADER ? a.D : void 0,
            leadingAccessory: e === o.PE1.GUILD_HEADER ? { type: "icon", icon: a.D } : void 0,
            action: () =>
                (0, s.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([n.e("28136"), n.e("43600"), n.e("85905")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(r, { ...n, guild: t, channel: l, source: e });
                }),
        });
    },
    C = (e, t) => {
        let l = E(t, e);
        return (0, i.jsx)(r.Dr, {
            id: "invite-people",
            label: l,
            color: "brand",
            icon: e === o.PE1.GUILD_HEADER ? a.D : void 0,
            leadingAccessory: e === o.PE1.GUILD_HEADER ? { type: "icon", icon: a.D } : void 0,
            action: () =>
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
        });
    };

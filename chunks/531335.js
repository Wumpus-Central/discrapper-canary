i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(855687),
    a = i(576705),
    d = i(652215),
    c = i(985018);
function o(e) {
    let { source: t, guild: i, channel: n, stageInstance: s } = e,
        d = (0, l.bG)([a.A], () => (0, r.K)(a.A, i, n, s)),
        c = A(t, i, n),
        o = g(t, n);
    return d ? c : o;
}
function u(e, t) {
    return (null != t && [d.PE1.GUILD_HEADER, d.PE1.GUILD_CONTEXT_MENU].includes(t)) || null == e
        ? c.intl.string(c.t.Sd8Ixw)
        : e.type === d.rbe.GUILD_VOICE
          ? c.intl.string(c.t["EE+P0H"])
          : c.intl.string(c.t["0jeAXt"]);
}
let A = (e, t, l) => {
        if (null == t) return null;
        let r = u(l, e);
        return (0, n.jsx)(s.Drp, {
            id: "invite-people",
            label: r,
            color: "brand",
            icon: e === d.PE1.GUILD_HEADER ? s.DpX : void 0,
            leadingAccessory: e === d.PE1.GUILD_HEADER ? { type: "icon", icon: s.DpX } : void 0,
            action: () =>
                (0, s.mMO)(async () => {
                    let { default: s } = await Promise.all([i.e("43600"), i.e("28136"), i.e("72469")]).then(
                        i.bind(i, 234355),
                    );
                    return (i) => (0, n.jsx)(s, { ...i, guild: t, channel: l, source: e });
                }),
        });
    },
    g = (e, t) => {
        let l = u(t, e);
        return (0, n.jsx)(s.Drp, {
            id: "invite-people",
            label: l,
            color: "brand",
            icon: e === d.PE1.GUILD_HEADER ? s.DpX : void 0,
            leadingAccessory: e === d.PE1.GUILD_HEADER ? { type: "icon", icon: s.DpX } : void 0,
            action: () =>
                (0, s.mMO)(async () => {
                    let { default: e } = await i.e("62751").then(i.bind(i, 132610));
                    return (t) => (0, n.jsx)(e, { ...t });
                }),
        });
    };

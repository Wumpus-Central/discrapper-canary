t.d(n, { g: () => N });
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(704215),
    d = t(481060),
    s = t(605236),
    o = t(434404),
    u = t(41776),
    c = t(703656),
    g = t(981631),
    h = t(388032),
    f = t(813881);
let N = (e) => {
    let { guild: n } = e,
        l = n.id,
        N = async () => {
            let e = u.Z.isLurking(l);
            await o.Z.leaveGuild(l),
                e
                    ? (0, c.uL)(g.Z5c.GUILD_DISCOVERY)
                    : (0, s.un)(r.z.GUILD_LEAVE_FEEDBACK) ||
                      (0, d.ZDy)(async () => {
                          let { default: e } = await t.e('74920').then(t.bind(t, 131102));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: l,
                                  guildName: n.name
                              });
                      });
        };
    return (0, i.jsx)(d.ConfirmModal, {
        className: a()(f.__invalid_confirmModal),
        bodyClassName: a()(f.__invalid_confirmModalBody),
        header: h.intl.formatToPlainString(h.t['1GX6Pz'], { name: n.name }),
        confirmText: n.hasFeature(g.oNc.HUB) ? h.intl.string(h.t.Dv8gFR) : h.intl.string(h.t.J2TBi4),
        cancelText: h.intl.string(h.t['ETE/oK']),
        onConfirm: N,
        ...e,
        children: (0, i.jsx)(d.Text, {
            variant: 'text-md/normal',
            children: n.hasFeature(g.oNc.HUB) ? h.intl.format(h.t.ZHTXVF, { name: n.name }) : h.intl.format(h.t.ZEXC0t, { name: n.name })
        })
    });
};

t.d(e, {
    g: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(704215),
    o = t(481060),
    d = t(605236),
    u = t(434404),
    c = t(41776),
    s = t(703656),
    g = t(981631),
    I = t(388032),
    f = t(385982);
let p = (n) => {
    let { guild: e } = n,
        l = e.id,
        p = async () => {
            let n = c.Z.isLurking(l);
            await u.Z.leaveGuild(l),
                n
                    ? (0, s.uL)(g.Z5c.GUILD_DISCOVERY)
                    : !(0, d.un)(r.z.GUILD_LEAVE_FEEDBACK) &&
                      (0, o.openModalLazy)(async () => {
                          let { default: n } = await t.e('74920').then(t.bind(t, 131102));
                          return (t) =>
                              (0, i.jsx)(n, {
                                  ...t,
                                  guildId: l,
                                  guildName: e.name
                              });
                      });
        };
    return (0, i.jsx)(o.ConfirmModal, {
        className: a()(f.__invalid_confirmModal),
        bodyClassName: a()(f.__invalid_confirmModalBody),
        header: I.intl.formatToPlainString(I.t['1GX6Pz'], { name: e.name }),
        confirmText: e.hasFeature(g.oNc.HUB) ? I.intl.string(I.t.Dv8gFR) : I.intl.string(I.t.J2TBi4),
        cancelText: I.intl.string(I.t['ETE/oK']),
        onConfirm: p,
        ...n,
        children: (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            children: e.hasFeature(g.oNc.HUB) ? I.intl.format(I.t.ZHTXVF, { name: e.name }) : I.intl.format(I.t.ZEXC0t, { name: e.name })
        })
    });
};

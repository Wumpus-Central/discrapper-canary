var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(367907),
    u = r(434404),
    c = r(138201),
    d = r(430824),
    f = r(981631),
    _ = r(388032);
let h = (e) => {
    let { guildId: n, reportId: r } = e,
        [i, h] = s.useState(!1),
        p = d.Z.getGuild(n),
        m = null != p;
    s.useEffect(() => {
        h(!m);
    }, [m]);
    let g = s.useCallback(() => {
        h(!0),
            l.ZP.trackWithMetadata(f.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: n,
                report_id: r
            }),
            u.Z.leaveGuild(n);
    }, [n, r]);
    if (null == p) return null;
    let E = () => {
        (0, o.openModal)((e) =>
            (0, a.jsx)(o.ConfirmModal, {
                header: _.intl.formatToPlainString(_.t['1GX6Pz'], { name: p.name }),
                confirmText: _.intl.string(_.t.J2TBi4),
                cancelText: _.intl.string(_.t['ETE/oK']),
                onConfirm: g,
                ...e,
                children: (0, a.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: _.intl.format(_.t.ZEXC0t, { name: p.name })
                })
            })
        );
    };
    return (0, a.jsx)(c.ZP, {
        title: _.intl.string(_.t.cU96io),
        description: _.intl.formatToPlainString(_.t['26mR6+'], { guildName: null == p ? void 0 : p.name }),
        buttonText: i ? _.intl.string(_.t['9Ak99v']) : _.intl.string(_.t.F3qExs),
        buttonDisabled: i,
        buttonColor: o.Button.Colors.RED,
        onButtonPress: E
    });
};
n.Z = h;

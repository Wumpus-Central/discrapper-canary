var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(481060),
    l = r(367907),
    u = r(434404),
    c = r(138201),
    d = r(430824),
    f = r(981631),
    p = r(388032);
let h = (e) => {
    let { guildId: n, reportId: r } = e,
        [i, h] = o.useState(!1),
        _ = d.Z.getGuild(n),
        m = null != _;
    o.useEffect(() => {
        h(!m);
    }, [m]);
    let g = o.useCallback(() => {
        h(!0),
            l.ZP.trackWithMetadata(f.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: n,
                report_id: r
            }),
            u.Z.leaveGuild(n);
    }, [n, r]);
    if (null == _) return null;
    let E = () => {
        (0, s.openModal)((e) =>
            (0, a.jsx)(s.ConfirmModal, {
                header: p.intl.formatToPlainString(p.t['1GX6Pz'], { name: _.name }),
                confirmText: p.intl.string(p.t.J2TBi4),
                cancelText: p.intl.string(p.t['ETE/oK']),
                onConfirm: g,
                ...e,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: p.intl.format(p.t.ZEXC0t, { name: _.name })
                })
            })
        );
    };
    return (0, a.jsx)(c.ZP, {
        title: p.intl.string(p.t.cU96io),
        description: p.intl.formatToPlainString(p.t['26mR6+'], { guildName: null == _ ? void 0 : _.name }),
        buttonText: i ? p.intl.string(p.t['9Ak99v']) : p.intl.string(p.t.F3qExs),
        buttonDisabled: i,
        buttonColor: s.Button.Colors.RED,
        onButtonPress: E
    });
};
n.Z = h;

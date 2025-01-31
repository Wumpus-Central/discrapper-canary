n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(367907),
    o = n(434404),
    l = n(138201),
    u = n(430824),
    c = n(981631),
    d = n(388032);
let f = (e) => {
    let { guildId: t, reportId: n } = e,
        [f, _] = r.useState(!1),
        p = u.Z.getGuild(t),
        h = null != p;
    r.useEffect(() => {
        _(!h);
    }, [h]);
    let m = r.useCallback(() => {
        _(!0),
            s.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            o.Z.leaveGuild(t);
    }, [t, n]);
    if (null == p) return null;
    let g = () => {
        (0, a.h7j)((e) =>
            (0, i.jsx)(a.ConfirmModal, {
                header: d.intl.formatToPlainString(d.t['1GX6Pz'], { name: p.name }),
                confirmText: d.intl.string(d.t.J2TBi4),
                cancelText: d.intl.string(d.t['ETE/oK']),
                onConfirm: m,
                ...e,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: d.intl.format(d.t.ZEXC0t, { name: p.name })
                })
            })
        );
    };
    return (0, i.jsx)(l.ZP, {
        title: d.intl.string(d.t.cU96io),
        description: d.intl.formatToPlainString(d.t['26mR6+'], { guildName: null == p ? void 0 : p.name }),
        buttonText: f ? d.intl.string(d.t['9Ak99v']) : d.intl.string(d.t.F3qExs),
        buttonDisabled: f,
        buttonColor: a.zxk.Colors.RED,
        onButtonPress: g
    });
};

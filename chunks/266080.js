n.d(t, { Z: () => m }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(367907),
    s = n(434404),
    o = n(138201),
    d = n(430824),
    c = n(981631),
    u = n(388032);
let m = (e) => {
    let { guildId: t, reportId: n } = e,
        [m, x] = i.useState(!1),
        _ = d.Z.getGuild(t),
        h = null != _;
    i.useEffect(() => {
        x(!h);
    }, [h]);
    let v = i.useCallback(() => {
        x(!0),
            a.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: t,
                report_id: n
            }),
            s.Z.leaveGuild(t);
    }, [t, n]);
    return null == _
        ? null
        : (0, l.jsx)(o.ZP, {
              title: u.intl.string(u.t.cU96io),
              description: u.intl.formatToPlainString(u.t['26mR6+'], { guildName: null == _ ? void 0 : _.name }),
              buttonText: m ? u.intl.string(u.t['9Ak99v']) : u.intl.string(u.t.F3qExs),
              buttonDisabled: m,
              buttonColor: r.zxk.Colors.RED,
              onButtonPress: () => {
                  (0, r.h7j)((e) =>
                      (0, l.jsx)(r.ConfirmModal, {
                          header: u.intl.formatToPlainString(u.t['1GX6Pz'], { name: _.name }),
                          confirmText: u.intl.string(u.t.J2TBi4),
                          cancelText: u.intl.string(u.t['ETE/oK']),
                          onConfirm: v,
                          ...e,
                          children: (0, l.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              children: u.intl.format(u.t.ZEXC0t, { name: _.name })
                          })
                      })
                  );
              }
          });
};

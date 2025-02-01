i.d(n, { default: () => c }), i(47120);
var o = i(200651),
    r = i(192379),
    e = i(481060),
    a = i(668781),
    l = i(787014),
    s = i(388032);
let c = function (t) {
    let { channelId: n, application: i, onClose: c, ...d } = t,
        [h, m] = r.useState(!1),
        u = async () => {
            try {
                m(!0), await l.ZP.removeLinkedLobby(n), c();
            } catch (t) {
                m(!1),
                    a.Z.show({
                        title: s.intl.string(s.t.vFzPFh),
                        body: s.intl.string(s.t['6D5WVl'])
                    });
            }
        };
    return (0, o.jsx)(e.ConfirmModal, {
        header: s.intl.string(s.t.JmUENj),
        confirmText: s.intl.string(s.t['cY+Ooa']),
        cancelText: s.intl.string(s.t['ETE/oK']),
        confirmButtonColor: e.zxk.Colors.BRAND,
        onConfirm: u,
        loading: h,
        onClose: c,
        ...d,
        children: (0, o.jsx)(e.Text, {
            variant: 'text-sm/normal',
            children: s.intl.format(s.t['6l2osr'], { applicationName: i.name })
        })
    });
};

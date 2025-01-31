t.d(n, { Z: () => o });
var i = t(200651);
t(192379);
var l = t(153867),
    a = t(468026),
    r = t(394059),
    d = t(388032);
function o(e) {
    let { type: n, onConfirm: t, ...o } = e,
        u = n === r.K.STREAM ? d.intl.string(d.t['/lFMWl']) : d.intl.string(d.t.xzxhZW),
        s = n === r.K.STREAM ? d.intl.string(d.t.xaOX7e) : d.intl.string(d.t.oU1p9P);
    return (0, i.jsx)(a.default, {
        confirmText: d.intl.string(d.t['cY+Ooa']),
        secondaryConfirmText: d.intl.string(d.t['JdIQ/f']),
        title: u,
        cancelText: d.intl.string(d.t['ETE/oK']),
        onConfirm: t,
        onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: s,
        ...o
    });
}

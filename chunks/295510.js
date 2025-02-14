t.d(n, { Z: () => u });
var i = t(200651);
t(192379);
var l = t(153867),
    a = t(468026),
    r = t(394059),
    o = t(388032);
function u(e) {
    let { type: n, onConfirm: t, ...u } = e,
        d = n === r.K.STREAM ? o.intl.string(o.t['/lFMWl']) : o.intl.string(o.t.xzxhZW),
        s = n === r.K.STREAM ? o.intl.string(o.t.xaOX7e) : o.intl.string(o.t.oU1p9P);
    return (0, i.jsx)(a.default, {
        confirmText: o.intl.string(o.t['cY+Ooa']),
        secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
        title: d,
        cancelText: o.intl.string(o.t['ETE/oK']),
        onConfirm: t,
        onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: s,
        ...u
    });
}

t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(153867),
    l = t(468026),
    a = t(394059),
    o = t(388032);
function d(n) {
    let { type: e, onConfirm: t, ...d } = n,
        u = e === a.K.STREAM ? o.intl.string(o.t['/lFMWl']) : o.intl.string(o.t.xzxhZW),
        s = e === a.K.STREAM ? o.intl.string(o.t.xaOX7e) : o.intl.string(o.t.oU1p9P);
    return (0, i.jsx)(l.default, {
        confirmText: o.intl.string(o.t['cY+Ooa']),
        secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
        title: u,
        cancelText: o.intl.string(o.t['ETE/oK']),
        onConfirm: t,
        onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: s,
        ...d
    });
}

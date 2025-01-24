e.d(t, {
    Z: function () {
        return o;
    }
});
var r = e(200651);
e(192379);
var i = e(153867),
    u = e(468026),
    l = e(394059),
    a = e(388032);
function o(n) {
    let { type: t, onConfirm: e, ...o } = n,
        d = t === l.K.STREAM ? a.intl.string(a.t['/lFMWl']) : a.intl.string(a.t.xzxhZW),
        c = t === l.K.STREAM ? a.intl.string(a.t.xaOX7e) : a.intl.string(a.t.oU1p9P);
    return (0, r.jsx)(u.default, {
        confirmText: a.intl.string(a.t['cY+Ooa']),
        secondaryConfirmText: a.intl.string(a.t['JdIQ/f']),
        title: d,
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: e,
        onConfirmSecondary: () => {
            i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), e();
        },
        body: c,
        ...o
    });
}

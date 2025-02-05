n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(153867),
    a = n(468026),
    s = n(394059),
    o = n(388032);
function l(e) {
    let { type: t, onConfirm: n, ...l } = e,
        u = () => {
            r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
        },
        c = t === s.K.STREAM ? o.intl.string(o.t['/lFMWl']) : o.intl.string(o.t.xzxhZW),
        d = t === s.K.STREAM ? o.intl.string(o.t.xaOX7e) : o.intl.string(o.t.oU1p9P);
    return (0, i.jsx)(a.default, {
        confirmText: o.intl.string(o.t['cY+Ooa']),
        secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
        title: c,
        cancelText: o.intl.string(o.t['ETE/oK']),
        onConfirm: n,
        onConfirmSecondary: u,
        body: d,
        ...l
    });
}

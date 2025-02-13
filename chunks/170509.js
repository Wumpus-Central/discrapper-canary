n.d(t, { default: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(933557),
    o = n(388032),
    a = n(549502);
function s(e) {
    let { channel: t, category: n, ...s } = e,
        c = (0, r.ZP)(t, !0),
        d = (0, r.ZP)(n);
    return (0, i.jsx)(l.ConfirmModal, {
        header: o.intl.string(o.t.YWMtRU),
        confirmText: o.intl.string(o.t.eW8Gy8),
        cancelText: o.intl.string(o.t.s4uM3d),
        confirmButtonColor: l.zxk.Colors.BRAND,
        ...s,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            className: a.message,
            selectable: !1,
            children: o.intl.format(o.t['iKW+jY'], {
                channelName: c,
                categoryName: d
            })
        })
    });
}

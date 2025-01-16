n.r(t),
    n.d(t, {
        default: function () {
            return s;
        }
    });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(933557),
    a = n(388032),
    o = n(84210);
function s(e) {
    let { channel: t, category: n, ...s } = e,
        c = (0, r.ZP)(t, !0),
        u = (0, r.ZP)(n);
    return (0, i.jsx)(l.ConfirmModal, {
        header: a.intl.string(a.t.YWMtRU),
        confirmText: a.intl.string(a.t.eW8Gy8),
        cancelText: a.intl.string(a.t.s4uM3d),
        confirmButtonColor: l.Button.Colors.BRAND,
        ...s,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/normal',
            className: o.message,
            selectable: !1,
            children: a.intl.format(a.t['iKW+jY'], {
                channelName: c,
                categoryName: u
            })
        })
    });
}

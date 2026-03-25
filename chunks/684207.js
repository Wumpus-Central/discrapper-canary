"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(939496),
    s = n(993401),
    a = n(996988);
function o(e) {
    let { distributor: t, onAction: n, onClose: o } = e,
        { themeType: l } = (0, i.E)(),
        { ctaConfig: u, skuId: c } = t,
        d = (e) => {
            e.stopPropagation(),
                n?.({ action: u.analyticsAction }),
                o?.(),
                window.open(u.getStoreUrl(c), "_blank", "noopener,noreferrer");
        };
    return (0, r.jsx)(s.FD, { icon: u.icon, text: u.getLabel(), fullWidth: l !== a.d.MODAL_V2, onClick: d });
}

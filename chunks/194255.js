n.d(t, { z: () => l });
var r = n(54381),
    i = n(473749),
    a = n(402453),
    o = n(777207),
    s = n(461111);
function l(e) {
    let { message: t } = e,
        { i18n: n } = i.useContext(a.KJ);
    return (0, r.jsx)("div", {
        className: s.emptyState,
        children: (0, r.jsx)(o.x, {
            variant: "text-md/medium",
            className: s.emptyStateText,
            children: null != t ? t : n.LISTBOX_EMPTY_STATE,
        }),
    });
}

n.d(t, { default: () => s });
var l = n(627968),
    i = n(861672),
    a = n(887092),
    r = n(652215),
    o = n(985018);
function s(e) {
    let { onClose: t, onSelect: n, application: s, channelId: c } = e,
        d = (0, a.A)(s, c, r.BRT.POPOUT);
    return (0, l.jsx)(i.W, {
        "data-menu-migrated": !0,
        navId: "activity-popout-overflow-popout",
        onClose: t,
        onSelect: n,
        "aria-label": o.intl.string(o.t.SS9Y6P),
        children: d,
    });
}

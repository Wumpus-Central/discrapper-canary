e.d(a, { default: () => c });
var n = e(54381);
e(473749);
var i = e(481060),
    r = e(239091),
    s = e(13245),
    l = e(145597),
    o = e(757744),
    u = e(388032);
function c(t) {
    let { onSelect: a, layoutId: e = l.OVERLAY_LAYOUT_ID, version: c } = t;
    return (0, n.jsx)(i.v2r, {
        navId: "overlay",
        onClose: r.Zy,
        "aria-label": u.intl.string(u.t.tPfVWi),
        onSelect: a,
        children: (0, n.jsx)(i.sNh, {
            id: "reset",
            label: u.intl.string(u.t["hW+EMu"]),
            action: (t) => {
                t.stopPropagation(), s.Z.resetDefaultLayout(e, null != c ? c : o.HN);
            },
        }),
    });
}

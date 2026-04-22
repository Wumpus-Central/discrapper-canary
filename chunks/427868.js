n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(607399),
    s = n(265872),
    r = n(460905),
    o = n(194085),
    c = n(985018);
function d(e) {
    let { channel: t, message: n, togglePopout: d, renderEmojiPicker: u, shouldShow: h } = e,
        m = l.useRef(null);
    return (0, i.jsx)(s.Y, {
        targetElementRef: m,
        animation: s.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return u(t, n, i, !1);
        },
        shouldShow: h,
        onRequestClose: d,
        position: a.Fr ? "top" : "left",
        align: a.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, i.jsx)(o.qv, { ref: m, label: c.intl.string(c.t.lfIHs4), icon: r.n, onClick: d }, "add-reaction"),
    });
}

n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(607399),
    s = n(397927),
    r = n(194085),
    o = n(985018);
function c(e) {
    let { channel: t, message: n, togglePopout: c, renderEmojiPicker: d, shouldShow: u } = e,
        h = l.useRef(null);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: h,
        animation: s.YNO.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return d(t, n, i, !1);
        },
        shouldShow: u,
        onRequestClose: c,
        position: a.Fr ? "top" : "left",
        align: a.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, i.jsx)(r.qv, { ref: h, label: o.intl.string(o.t.lfIHs4), icon: s.nm2, onClick: c }, "add-reaction"),
    });
}

n.d(t, { Q: () => _ });
var i = n(735438),
    s = n.n(i),
    l = n(592598),
    a = n(532624),
    r = n(242286),
    o = n(256415),
    d = n(954571),
    u = n(350535),
    c = n(652215),
    g = n(672396);
let m = A(null);
function _() {
    var e;
    let t = A(m);
    (e = m),
        s().isEqual(s().omit(t, "old_enabled"), s().omit(e, "old_enabled")) ||
            (d.default.track(c.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (m = t));
}
function A(e) {
    let t = o.default.getNotificationPositionMode(),
        n = t !== c.G6Q.DISABLED,
        i = a.Ay.getOverlayKeybind(),
        s = a.Ay.getOverlayChatKeybind();
    return {
        enabled: r.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: l.A.isNotificationDisabled(g.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, u.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, u.dI)(s.shortcut) : null,
        text_opacity_slider: o.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? r.default.enabled,
    };
}

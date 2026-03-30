n.d(t, { Q: () => g });
var i = n(735438),
    s = n.n(i),
    l = n(592598),
    a = n(532624),
    r = n(242286),
    o = n(256415),
    d = n(954571),
    c = n(350535),
    u = n(652215),
    m = n(672396);
let _ = x(null);
function g() {
    var e;
    let t = x(_);
    (e = _),
        s().isEqual(s().omit(t, "old_enabled"), s().omit(e, "old_enabled")) ||
            (d.default.track(u.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (_ = t));
}
function x(e) {
    let t = o.default.getNotificationPositionMode(),
        n = t !== u.G6Q.DISABLED,
        i = a.Ay.getOverlayKeybind(),
        s = a.Ay.getOverlayChatKeybind();
    return {
        enabled: r.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: l.A.isNotificationDisabled(m.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, c.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, c.dI)(s.shortcut) : null,
        text_opacity_slider: o.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? r.default.enabled,
    };
}

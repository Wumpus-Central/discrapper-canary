n.d(t, { q: () => c });
var r = n(64700),
    a = n(523875),
    l = n(270737),
    i = n(397927),
    u = n(267102),
    s = n(494783),
    o = n(652215);
function c(e) {
    let t = (0, u.Us)(),
        { activeVoice: n } = (0, s.f)(),
        c = null != n,
        d = e ? "unmute" : "mute",
        m = (0, l.V)(d),
        A = (0, a.L)(d),
        v = c ? m : A,
        _ = t === o.BRT.POPOUT ? (c ? (e ? i.Ts3 : i.A4$) : e ? i.z0P : i.cNw) : v.Component;
    return r.useMemo(() => ({ ...v, Component: _ }), [v, _]);
}

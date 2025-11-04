n.d(t, { Z: () => m });
var r = n(951288),
    a = n(647438),
    i = n(392711),
    l = n(793030),
    o = n(442837),
    c = n(906732),
    u = n(803647),
    s = n(76021),
    d = n(199902),
    _ = n(979651);
function m(e) {
    let { channelId: t, guildId: n } = e,
        m = (0, o.e7)([_.Z], () => !(0, i.isEmpty)(_.Z.getVoiceStatesForChannel(t)), [t]),
        f = (0, o.e7)([d.Z], () => {
            let e = d.Z.getCurrentUserActiveStream();
            return (null == e ? void 0 : e.channelId) === t ? e : null;
        }, [t]),
        { analyticsLocations: h } = (0, c.ZP)(),
        g = a.useCallback(() => {
            null != f ? (0, u.Z)(f) : (0, s.Z)(n, t, h);
        }, [n, t, h, f]);
    return m
        ? (0, r.jsx)(l.hU, {
              variant: "icon-only",
              onClick: g,
              "aria-label": null != f ? "Stop Sharing" : "Share Screen",
              icon: null != f ? l.g5r : l.hGI,
          })
        : null;
}

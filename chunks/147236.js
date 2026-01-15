n.d(e, { Z: () => f });
var l = n(54381),
    i = n(473749),
    r = n(442837),
    u = n(481060),
    o = n(796762),
    c = n(695346),
    a = n(572004),
    s = n(924301),
    d = n(405613),
    g = n(388032);
function f(t, e) {
    let n = c.Sb.useSetting(),
        { tidaWebformEnabled: f } = o.Z.useExperiment(
            { location: "useCopyEventImageLinkItem" },
            { autoTrackExposure: !1 },
        ),
        v = (0, r.e7)([s.ZP], () => s.ZP.getGuildScheduledEvent(t)),
        b = null != v ? (0, d.Z)(v) : null,
        E = "event-image" === e.getAttribute("data-type"),
        p = i.useCallback(() => {
            null != b && (0, a.JG)(b);
        }, [b]);
    return a.wS && n && f && null != b && E
        ? (0, l.jsx)(u.sNh, {
              id: "copy-event-image-link",
              label: g.intl.string(g.t["8xHmxo"]),
              action: p,
              icon: u.xPt,
          })
        : null;
}

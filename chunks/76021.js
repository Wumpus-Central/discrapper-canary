n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(872810),
    s = n(451467),
    o = n(174609),
    l = n(928518),
    u = n(592125),
    c = n(430824),
    d = n(131951),
    f = n(594174),
    _ = n(358085),
    p = n(981631),
    h = n(37113);
function m(e, t, m) {
    let g = l.Z.getWindowOpen(p.KJ3.CHANNEL_CALL_POPOUT) ? p.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, o.Z)(g), _.isPlatformEmbedded))
        (0, r.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('93382'), n.e('79477'), n.e('66770')]).then(n.bind(n, 60594));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    guildId: e,
                    analyticsLocation: m
                });
        });
    else {
        var E;
        let n = u.Z.getChannel(t),
            i = (0, s.Z)(h.tI.PRESET_CUSTOM, h.LY.RESOLUTION_1080, h.ws.FPS_30, f.default.getCurrentUser(), null === (E = c.Z.getGuild(e)) || void 0 === E ? void 0 : E.premiumTier, n)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        d.Z.getMediaEngine()
            .getDesktopSource(i, !0)
            .then((n) => {
                (0, a.WH)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                });
            });
    }
}

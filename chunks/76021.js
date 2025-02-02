n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(872810),
    s = n(451467),
    o = n(174609),
    l = n(928518),
    u = n(120522),
    c = n(933843),
    d = n(614011),
    f = n(592125),
    _ = n(430824),
    p = n(131951),
    h = n(594174),
    m = n(358085),
    g = n(981631),
    E = n(37113);
function v(e, t, v) {
    let y = l.Z.getWindowOpen(g.KJ3.CHANNEL_CALL_POPOUT) ? g.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, o.Z)(y), m.isPlatformEmbedded))
        (0, r.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('93382'), n.e('79477'), n.e('66770')]).then(n.bind(n, 60594));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    guildId: e,
                    analyticsLocation: v
                });
        }),
            (0, c.F4)() && ((0, u.z)(), (0, d.O)());
    else {
        var I;
        let n = f.Z.getChannel(t),
            i = (0, s.Z)(E.tI.PRESET_CUSTOM, E.LY.RESOLUTION_1080, E.ws.FPS_30, h.default.getCurrentUser(), null === (I = _.Z.getGuild(e)) || void 0 === I ? void 0 : I.premiumTier, n)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        p.Z.getMediaEngine()
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

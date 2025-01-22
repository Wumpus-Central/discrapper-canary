r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(872810),
    s = r(451467),
    l = r(174609),
    u = r(928518),
    c = r(120522),
    d = r(933843),
    f = r(614011),
    p = r(592125),
    h = r(430824),
    _ = r(131951),
    m = r(594174),
    g = r(358085),
    E = r(981631),
    v = r(37113);
function y(e, n, y) {
    let b = u.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT) ? E.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, l.Z)(b), g.isPlatformEmbedded))
        (0, a.openModalLazy)(async () => {
            let { default: n } = await Promise.all([r.e('93382'), r.e('79477'), r.e('82682')]).then(r.bind(r, 60594));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    guildId: e,
                    analyticsLocation: y
                });
        }),
            (0, d.F4)() && ((0, c.z)(), (0, f.O)());
    else {
        var I;
        let r = p.Z.getChannel(n),
            i = (0, s.Z)(v.tI.PRESET_CUSTOM, v.LY.RESOLUTION_1080, v.ws.FPS_30, m.default.getCurrentUser(), null === (I = h.Z.getGuild(e)) || void 0 === I ? void 0 : I.premiumTier, r)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        _.Z.getMediaEngine()
            .getDesktopSource(i, !0)
            .then((r) => {
                (0, o.WH)(e, n, {
                    pid: null,
                    sourceId: r,
                    sourceName: null
                });
            });
    }
}

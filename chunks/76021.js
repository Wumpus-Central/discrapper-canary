r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(872810),
    o = r(451467),
    l = r(174609),
    u = r(928518),
    c = r(120522),
    d = r(933843),
    f = r(614011),
    _ = r(592125),
    h = r(430824),
    p = r(131951),
    m = r(594174),
    g = r(358085),
    E = r(981631),
    v = r(37113);
function I(e, n, I) {
    let T = u.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT) ? E.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, l.Z)(T), g.isPlatformEmbedded))
        (0, a.openModalLazy)(async () => {
            let { default: n } = await Promise.all([r.e('93382'), r.e('79477'), r.e('26620')]).then(r.bind(r, 60594));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    guildId: e,
                    analyticsLocation: I
                });
        }),
            (0, d.F4)() && ((0, c.z)(), (0, f.O)());
    else {
        var b;
        let r = _.Z.getChannel(n),
            i = (0, o.Z)(v.tI.PRESET_CUSTOM, v.LY.RESOLUTION_1080, v.ws.FPS_30, m.default.getCurrentUser(), null === (b = h.Z.getGuild(e)) || void 0 === b ? void 0 : b.premiumTier, r)
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
            .then((r) => {
                (0, s.WH)(e, n, {
                    pid: null,
                    sourceId: r,
                    sourceName: null
                });
            });
    }
}

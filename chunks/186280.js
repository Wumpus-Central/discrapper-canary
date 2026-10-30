n.d(t, { $q: () => a, i3: () => c, nj: () => o });
var i = n(562708),
    s = n(139286),
    l = n(174459),
    r = n(652215);
function a(e) {
    l.default.track(r.HAw.DEFAULT_EMOJI_PACK_UPDATE, { pack_id: e, action: "add" });
}
function o(e) {
    l.default.track(r.HAw.DEFAULT_EMOJI_PACK_UPDATE, { pack_id: e, action: "remove" });
}
function c(e) {
    (0, s.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.DEFAULT_EMOJI_PACKS,
            properties: { is_premium_tier_2: e },
        },
        { trackOnInitialLoad: !0 },
    );
}

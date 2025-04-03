n.d(t, { Z: () => o });
var l = n(399606),
    i = n(430824),
    s = n(971130),
    r = n(956829),
    a = n(981631);
function o(e) {
    let { guildId: t } = e,
        n = r.h.useExperiment({
            guildId: null != t ? t : a.lds,
            location: '6798be_2'
        }),
        o = (0, l.e7)([i.Z], () => i.Z.getGuild(t));
    return (
        null != t &&
        (function (e) {
            var t;
            let { guild: n, experimentConfig: l } = e,
                { defaultInvitesToNeverExpire: i } =
                    null != l
                        ? l
                        : r.h.getCurrentConfig({
                              guildId: null != (t = null == n ? void 0 : n.id) ? t : a.lds,
                              location: '6798be_1'
                          });
            if ((null == n ? void 0 : n.hasFeature(a.oNc.HUB)) === !0 || ((null == n ? void 0 : n.hasFeature(a.oNc.COMMUNITY)) === !0 && i)) return s.ZP.INVITE_OPTIONS_FOREVER.value;
        })({
            guild: o,
            experimentConfig: n
        })
    );
}

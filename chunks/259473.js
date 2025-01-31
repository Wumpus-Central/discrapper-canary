n.d(t, { Z: () => o });
var l = n(399606),
    i = n(430824),
    s = n(971130),
    a = n(956829),
    r = n(981631);
function o(e) {
    let { guildId: t } = e,
        n = a.h.useExperiment({
            guildId: null != t ? t : r.lds,
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
                        : a.h.getCurrentConfig({
                              guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : r.lds,
                              location: '6798be_1'
                          });
            if ((null == n ? void 0 : n.hasFeature(r.oNc.HUB)) === !0 || ((null == n ? void 0 : n.hasFeature(r.oNc.COMMUNITY)) === !0 && i)) return s.ZP.INVITE_OPTIONS_FOREVER.value;
        })({
            guild: o,
            experimentConfig: n
        })
    );
}

n.d(t, {
    V5: () => c,
    ie: () => s
});
var i = n(680089),
    l = n(496675),
    r = n(540126),
    o = n(443063),
    a = n(981631);
function s(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === r.wZ) {
                    let t = e.getGuildActionSection().getRows();
                    return (1 === t.length && t[0] === o.z.GUILD_PREMIUM_PROGRESS_BAR) || e.getGuildActionSection().isEmpty();
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === r.wZ || (!!t && (n === r.p2 || (n !== r.wd && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1)))))),
        canHaveVoiceSummary: !(n === r.wZ || n === r.p2 || n === r.wd || n === e.recentsSectionNumber || n === e.voiceChannelsSectionNumber)
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: r, selectedVoiceChannelId: o } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: r, selectedVoiceChannelId: o } = e;
            return !0 !== i.Z.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      var t;
                      if (!l.Z.can(a.Plq.VIEW_CHANNEL, e)) return !1;
                      let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                      return e.id !== o && e.id !== r && i.length > 0;
                  });
        })({
            category: t,
            selectedChannelId: r,
            selectedVoiceChannelId: o,
            voiceStates: n
        }).length > 0
    );
}

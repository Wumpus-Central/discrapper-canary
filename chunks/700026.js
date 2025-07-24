n.d(t, {
    V5: () => c,
    ie: () => s
});
var r = n(680089),
    i = n(496675),
    l = n(540126),
    o = n(443063),
    a = n(981631);
function s(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === l.wZ) {
                    let t = e.getGuildActionSection().getRows();
                    return (1 === t.length && t[0] === o.z.GUILD_PREMIUM_PROGRESS_BAR) || e.getGuildActionSection().isEmpty();
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === l.wZ || (!!t && (n === l.p2 || (n !== l.wd && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1)))))),
        canHaveVoiceSummary: n !== l.wZ && n !== l.p2 && n !== l.wd && n !== e.recentsSectionNumber && n !== e.voiceChannelsSectionNumber
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: o } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: o } = e;
            return !0 !== r.Z.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      var t;
                      if (!i.Z.can(a.Plq.VIEW_CHANNEL, e)) return !1;
                      let r = null != (t = n[e.id]) ? t : [];
                      return e.id !== o && e.id !== l && r.length > 0;
                  });
        })({
            category: t,
            selectedChannelId: l,
            selectedVoiceChannelId: o,
            voiceStates: n
        }).length > 0
    );
}

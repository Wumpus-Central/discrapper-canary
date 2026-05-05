t.d(n, { l: () => o });
var i = t(46054),
    r = t(556300),
    s = t(881140);
let l = {
        ...i.A.guildEventRules.link,
        react: (0, s.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react,
    },
    a = {
        ...i.A.guildEventRules.channelMention,
        react: (0, r.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    o = i.A.reactParserFor({ ...i.A.guildEventRules, link: l, channelMention: a });

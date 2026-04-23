n.d(t, { l: () => d });
var l = n(46054),
    i = n(556300),
    r = n(881140);
let a = {
        ...l.A.guildEventRules.link,
        react: (0, r.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react,
    },
    s = {
        ...l.A.guildEventRules.channelMention,
        react: (0, i.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    d = l.A.reactParserFor({ ...l.A.guildEventRules, link: a, channelMention: s });

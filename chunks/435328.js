t.d(l, { l: () => c });
var n = t(46054),
    s = t(556300),
    i = t(49005);
let a = {
        ...n.A.guildEventRules.link,
        react: (0, i.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react,
    },
    r = {
        ...n.A.guildEventRules.channelMention,
        react: (0, s.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    c = n.A.reactParserFor({ ...n.A.guildEventRules, link: a, channelMention: r });

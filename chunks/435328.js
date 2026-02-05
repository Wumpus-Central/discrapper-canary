l.d(t, { l: () => c });
var n = l(46054),
    s = l(556300),
    i = l(49005);
let a = {
        ...n.A.guildEventRules.link,
        react: (0, i.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react,
    },
    r = {
        ...n.A.guildEventRules.channelMention,
        react: (0, s.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    c = n.A.reactParserFor({ ...n.A.guildEventRules, link: a, channelMention: r });

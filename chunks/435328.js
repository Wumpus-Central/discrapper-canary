n.d(t, { l: () => d, y: () => u });
var i = n(46054),
    r = n(556300),
    a = n(881140);
let l = i.A.guildEventRules,
    s = { ...l.link, react: (0, a.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react },
    o = {
        ...l.channelMention,
        react: (0, r.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    d = i.A.reactParserFor({ ...l, link: s, channelMention: o }),
    u = i.A.reactParserFor({ ...i.A.guildEventLocationRules, link: s, channelMention: o });

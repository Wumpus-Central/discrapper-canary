n.d(t, { l: () => d, y: () => u });
var i = n(46054),
    r = n(556300),
    a = n(881140);
let s = i.A.guildEventRules,
    l = { ...s.link, react: (0, a.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react },
    o = {
        ...s.channelMention,
        react: (0, r.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    d = i.A.reactParserFor({ ...s, link: l, channelMention: o }),
    u = i.A.reactParserFor({ ...i.A.guildEventLocationRules, link: l, channelMention: o });

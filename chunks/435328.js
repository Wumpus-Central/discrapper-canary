n.d(t, { l: () => o });
var i = n(46054),
    r = n(556300),
    a = n(881140);
let l = i.A.guildEventRules,
    s = { ...l.link, react: (0, a.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react },
    d = {
        ...l.channelMention,
        react: (0, r.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    o = i.A.reactParserFor({ ...l, link: s, channelMention: d });

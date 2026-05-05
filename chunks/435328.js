t.d(n, { l: () => d });
var i = t(46054),
    r = t(556300),
    s = t(881140);
let a = i.A.guildEventRules,
    l = { ...a.link, react: (0, s.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react },
    o = {
        ...a.channelMention,
        react: (0, r.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    d = i.A.reactParserFor({ ...a, link: l, channelMention: o });

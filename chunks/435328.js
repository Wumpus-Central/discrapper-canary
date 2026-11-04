var i = n(46054),
    r = n(556300),
    s = n(665911);
let a = i.A.guildEventRules,
    l = { ...a.link, react: (0, s.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }).react },
    o = {
        ...a.channelMention,
        react: (0, r.A)({ enableBuildOverrides: !1, shouldCloseDefaultModals: !0, shouldStopPropagation: !0 }).react,
    },
    u = i.A.reactParserFor({ ...a, link: l, channelMention: o }),
    d = i.A.reactParserFor({ ...i.A.guildEventLocationRules, link: l, channelMention: o });
n.d(t, {}, { l: u, y: d });

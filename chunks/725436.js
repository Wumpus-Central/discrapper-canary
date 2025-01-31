n.d(t, { m: () => u });
var l = n(454585),
    r = n(551452),
    i = n(532901);
let a = {
        ...l.Z.guildEventRules.link,
        react: (0, i.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0
        }).react
    },
    s = {
        ...l.Z.guildEventRules.channelMention,
        react: (0, r.Z)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0
        }).react
    },
    u = l.Z.reactParserFor({
        ...l.Z.guildEventRules,
        link: a,
        channelMention: s
    });

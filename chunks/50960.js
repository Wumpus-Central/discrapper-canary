i.d(e, { W: () => u });
var n = i(968011),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(985018);
let u = (0, l.zD)(r.X.CHAT_TEXT_BOX_MENTION_SUGGESTIONS, {
    useTitle: () => a.intl.string(a.t.uXQ2xT),
    useValue: s.ng.useSetting,
    setValue: s.ng.updateSetting,
    usePredicate: () => {
        let { enabled: t } = (0, n.us)("MentionSuggestionsSettings", { autoTrackExposure: !1 });
        return t;
    },
});

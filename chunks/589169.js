n.d(e, { T: () => a });
var i = n(657871),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(388032);
let a = (0, l.qs)(u.n.CHAT_TEXT_BOX_MENTION_SUGGESTIONS, {
    useTitle: () => r.intl.string(r.t.uXQ2xT),
    useValue: s.HV.useSetting,
    setValue: s.HV.updateSetting,
    usePredicate: () => {
        let { enabled: t } = (0, i.zM)("MentionSuggestionsSettings", { autoTrackExposure: !1 });
        return t;
    },
});

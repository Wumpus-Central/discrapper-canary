n.d(t, { n: () => c, A: () => u });
var i,
    r = n(554146);
let a = (0, n(945810).mj)({
    name: "2026-09-halloween-holiday",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = n(235079),
    l = n(375708);
let o = n.p + "122274207f3e636d.webm",
    d = n.p + "8ae88831d931e5a6.webm";
var c = (((i = {})[(i.THROW_EMOJI = 0)] = "THROW_EMOJI"), (i[(i.SNOW = 1)] = "SNOW"), i);
let u = {
    experiment: a,
    useIsExperimentEligible: () => a.useConfig({ location: "holiday_events_use_eligible" }).enabled,
    getIsExperimentEligible: () => a.getConfig({ location: "holiday_events_is_eligible" }).enabled,
    startTimeMs: 17913888e5,
    endTimeMs: 17936388e5,
    isDesktopOnly: !0,
    soundpack: s.i.HALLOWEEN,
    soundpackLabel: l.t["+LasFV"],
    appSpinnerSources: { webmDark: o, webmLight: d },
    getLoadingTips: () => [
        l.intl.string(l.t.ydMZ2o),
        l.intl.string(l.t["AL/SoZ"]),
        l.intl.string(l.t.w2pMut),
        l.intl.string(l.t.WB9eZl),
        l.intl.string(l.t["rE+3z3"]),
        l.intl.string(l.t.qvtjM4),
        l.intl.string(l.t.irDT8W),
        l.intl.string(l.t.TlJKIQ),
        l.intl.string(l.t["m+xpaC"]),
        l.intl.string(l.t.MElQEQ),
        l.intl.string(l.t.aRr1um),
        l.intl.string(l.t["7KOunu"]),
        l.intl.string(l.t["1XGw3F"]),
    ],
    coachmarkDismissibleContent: r.M.HOLIDAY_COACHMARK_HALLOWEEN_2026,
};

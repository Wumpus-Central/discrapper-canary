n.d(t, { m: () => c });
var r = n(442837),
    i = n(440051),
    o = n(695346),
    l = n(314897),
    s = n(709054),
    a = n(514577);
let c = () => {
    let { showNewHelpTooltip: e } = i.Y.useExperiment({ location: 'useCanSeeExpiringStatusCoachmark' }, { autoTrackExposure: !1 }),
        t = o.Cr.useSetting(),
        n = (0, a.a)((e) => e.isOpen),
        c = (0, r.e7)([l.default], () => l.default.getId());
    return !((null != c ? s.default.extractTimestamp(c) : 0) > new Date('2025-02-01').getTime()) && !n && e && null != t && '0' !== t;
};

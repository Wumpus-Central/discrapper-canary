i.d(e, {
    z: () => A,
});
var n = i(419954),
    l = i(780964),
    s = i(358776),
    r = i(782844),
    u = i(840065),
    a = i(355097),
    o = i(652215),
    T = i(985018);
let A = (0, n.v_)(l.X.DATA_USAGE_DISCLAIMER_SETTING, {
    useTitle: () => T.intl.string(T.t.D60Gfj),
    useSubtitle: () =>
        T.intl.format(T.t.R5N31P, {
            onClick: () => {
                let t = (0, s.WJ)("DataUsageDisclaimerSetting");
                (0, u.openUserSettings)(t ? l.X.ACCOUNT_REMOVAL_SETTING : l.X.ACCOUNT_PANEL, {
                    section: o.nc_.ACCOUNT,
                    subsection: r.D.SECURITY,
                    scrollPosition: t ? void 0 : a.Ew.AccountScrollPositions.DISABLE_ACCOUNT,
                });
            },
        }),
});

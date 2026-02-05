i.d(e, { z: () => T });
var n = i(419954),
    l = i(780964),
    s = i(358776),
    r = i(782844),
    a = i(840065),
    u = i(355097),
    o = i(652215),
    d = i(985018);
let T = (0, n.v_)(l.X.DATA_USAGE_DISCLAIMER_SETTING, {
    useTitle: () => d.intl.string(d.t.D60Gfj),
    useSubtitle: () =>
        d.intl.format(d.t.R5N31P, {
            onClick: () => {
                let t = (0, s.WJ)("DataUsageDisclaimerSetting");
                (0, a.openUserSettings)(t ? l.X.ACCOUNT_REMOVAL_SETTING : l.X.ACCOUNT_PANEL, {
                    section: o.nc_.ACCOUNT,
                    subsection: r.D.SECURITY,
                    scrollPosition: t ? void 0 : u.Ew.AccountScrollPositions.DISABLE_ACCOUNT,
                });
            },
        }),
});

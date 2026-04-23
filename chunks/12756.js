n.d(t, { C: () => u });
var i = n(311907),
    s = n(521933),
    l = n(419954),
    a = n(933297),
    r = n(287809),
    o = n(780964),
    d = n(985018);
let u = (0, l.Tf)(o.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
    usePredicate: () => {
        let e = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return null != e && !e.isClaimed();
    },
    useTitle: () => d.intl.string(d.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: a._1.TEXT, useText: () => d.intl.string(d.t.qxk9zo) }),
    useLabel: () => d.intl.string(d.t.BleMPB),
    onClick: () => s.A.openClaimAccountModal(),
});

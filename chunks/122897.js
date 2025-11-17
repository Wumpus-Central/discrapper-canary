n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(63063),
    s = n(78451),
    l = n(695346),
    c = n(580183),
    u = n(838436),
    d = n(726985),
    f = n(981631),
    _ = n(388032);
function p() {
    let e = (0, c.m)(),
        t = i.useMemo(() => (0, s.c7)(), []);
    return (0, r.jsxs)(u.U, {
        setting: d.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, r.jsx)(u.H, {
                header: _.intl.string(_.t.tiCXaH),
                description: _.intl.format(_.t.RvjRRI, { appealLink: o.Z.getArticleURL(f.BhN.SAFE_DIRECT_MESSAGING) }),
            }),
            (0, r.jsx)(a.Eep, {
                value: e,
                options: t,
                onChange: (e) => l.Xr.updateSetting(e),
            }),
        ],
    });
}

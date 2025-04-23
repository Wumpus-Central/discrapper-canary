n.d(t, { Z: () => u });
var r = n(512722),
    i = n.n(r),
    l = n(782568),
    s = n(434404),
    a = n(144507),
    o = n(981631),
    c = n(388032);
function u(e) {
    let t = (0, a.MO)(e);
    switch (t) {
        case a.d5.NEEDS_COMMUNITY:
            return {
                visibility: t,
                noticeText: c.intl.string(c.t['0Z2Qxs']),
                ctaLabel: c.intl.string(c.t.BOJpl5),
                ctaClickable: null != e,
                onCtaClicked() {
                    var t;
                    i()(null != e, 'Guild must be not null open COMMUNITY settings'), s.Z.open(null != (t = null == e ? void 0 : e.id) ? t : '', o.pNK.COMMUNITY);
                }
            };
        case a.d5.WAITLIST_ONLY:
            return {
                visibility: t,
                noticeText: c.intl.string(c.t['5vz88P']),
                ctaLabel: c.intl.string(c.t['6yjvmp']),
                ctaClickable: !0,
                onCtaClicked() {
                    (0, l.Z)('https://dis.gd/creators-waitlist');
                }
            };
        default:
            return;
    }
}

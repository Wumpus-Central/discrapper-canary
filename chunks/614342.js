n.d(t, { Z: () => d });
var r = n(512722),
    i = n.n(r),
    s = n(782568),
    l = n(434404),
    a = n(144507),
    o = n(981631),
    c = n(388032);
function d(e) {
    let t = (0, a.MO)(e);
    switch (t) {
        case a.d5.NEEDS_COMMUNITY:
            return {
                visibility: t,
                noticeText: c.NW.string(c.t['0Z2Qxs']),
                ctaLabel: c.NW.string(c.t.BOJpl5),
                ctaClickable: null != e,
                onCtaClicked() {
                    var t;
                    i()(null != e, 'Guild must be not null open COMMUNITY settings'), l.Z.open(null != (t = null == e ? void 0 : e.id) ? t : '', o.pNK.COMMUNITY);
                }
            };
        case a.d5.WAITLIST_ONLY:
            return {
                visibility: t,
                noticeText: c.NW.string(c.t['5vz88P']),
                ctaLabel: c.NW.string(c.t['6yjvmp']),
                ctaClickable: !0,
                onCtaClicked() {
                    (0, s.Z)('https://dis.gd/creators-waitlist');
                }
            };
        default:
            return;
    }
}

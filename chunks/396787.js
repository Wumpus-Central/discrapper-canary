n.d(t, { F5: () => h, XA: () => _, jv: () => m });
var a = n(477900);
n(582128);
var i = n(653922),
    l = n(192308),
    s = n(157559),
    o = n(308528),
    c = n(793574),
    r = n(576470),
    d = n(339984),
    u = n(375708);
function h(e, t) {
    return (0, l.openModalLazy)(async () => {
        let { default: i } = await Promise.all([
            n.e("773193"),
            n.e("731278"),
            n.e("22089"),
            n.e("863232"),
            n.e("229666"),
            n.e("480436"),
            n.e("93513"),
            n.e("647011"),
            n.e("779149"),
            n.e("90017"),
            n.e("199150"),
            n.e("760987"),
        ]).then(n.bind(n, 902550));
        return (n) =>
            (0, a.jsx)(i, {
                maxFileSizeBytes: 8388608,
                onComplete: e,
                uploadType: d.HL.AVATAR,
                showUpsellHeader: !1,
                modalTitle: u.intl.string(u.t["6yrpFR"]),
                analyticsLocation: c.A.GROUP_DM_ICON_EDITOR,
                analyticsLocations: t,
                allowRecentAvatarsSelection: !1,
                ...n,
            });
    });
}
function m(e, t) {
    h(
        (n) => {
            o.A.setIcon(e, n.imageUri, t).catch(_);
        },
        [t],
    );
}
function _(e) {
    if (e?.body?.retry_after != null) {
        let t = (0, i.A)(new Date(), e.body.retry_after);
        s.A.show({
            title: u.intl.string(u.t.Whhv4w),
            body: u.intl.format(u.t.VIJkAy, { duration: (0, a.jsx)(r.A, { showUnits: !0, deadline: t }) }),
        });
    }
}

"use strict";
n.d(t, { F5: () => _, XA: () => A, jv: () => E });
var i = n(627968);
n(64700);
var r = n(653922),
    a = n(192308),
    s = n(157559),
    l = n(308528),
    o = n(793574),
    d = n(576470),
    c = n(339984),
    u = n(375708);
function _(e, t) {
    return (0, a.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("79465"),
            n.e("21866"),
            n.e("50985"),
            n.e("63232"),
            n.e("29666"),
            n.e("80436"),
            n.e("93513"),
            n.e("47011"),
            n.e("79149"),
            n.e("90017"),
            n.e("99150"),
            n.e("60987"),
        ]).then(n.bind(n, 902550));
        return (n) =>
            (0, i.jsx)(r, {
                maxFileSizeBytes: 8388608,
                onComplete: e,
                uploadType: c.HL.AVATAR,
                showUpsellHeader: !1,
                modalTitle: u.intl.string(u.t["6yrpFR"]),
                analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
                analyticsLocations: t,
                allowRecentAvatarsSelection: !1,
                ...n,
            });
    });
}
function E(e, t) {
    _(
        (n) => {
            l.A.setIcon(e, n.imageUri, t).catch(A);
        },
        [t],
    );
}
function A(e) {
    if (e?.body?.retry_after != null) {
        let t = (0, r.A)(new Date(), e.body.retry_after);
        s.A.show({
            title: u.intl.string(u.t.Whhv4w),
            body: u.intl.format(u.t.VIJkAy, { duration: (0, i.jsx)(d.A, { showUnits: !0, deadline: t }) }),
        });
    }
}

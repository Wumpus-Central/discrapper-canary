n.d(i, { default: () => _ });
var e = n(627968);
n(64700);
var r = n(834730),
    a = n(732159),
    l = n(702841),
    s = n(157559),
    d = n(287809),
    o = n(954571),
    u = n(652215),
    m = n(985018);
function c(t) {
    let {
            header: i,
            children: n,
            sku_id: r,
            sku_name: c,
            guild_id: f,
            cancelLabel: _,
            confirmLabel: g,
            transitionState: k,
            onClose: T,
            ...h
        } = t,
        C = (0, l.bG)([d.default], () => d.default.getCurrentUser());
    return (0, e.jsx)(a.ConfirmModal, {
        title: i ?? m.intl.string(m.t["+78Pfm"]),
        cancelText: _ ?? m.intl.string(m.t["ETE/oC"]),
        confirmText: g ?? m.intl.string(m.t["+78Pfm"]),
        onConfirm: () => {
            o.default.track(u.HAw.TNS_SKU_REPORT_SUBMITTED, { sku_id: r, guild_id: f, user_id: C?.id }),
                s.A.show({ title: m.intl.string(m.t.sUvCKU), body: m.intl.format(m.t["7KJnk0"], { skuName: c }) });
        },
        transitionState: k,
        onClose: T,
        ...h,
        children: n,
    });
}
var f = n(975571);
function _(t) {
    let { listing: i, transitionState: n, onClose: a, ...l } = t;
    return (0, e.jsx)(c, {
        sku_id: i.id,
        sku_name: i.name,
        guild_id: i.guild_id,
        header: m.intl.formatToPlainString(m.t.avKMZo, { listingName: i.name }),
        transitionState: n,
        onClose: a,
        ...l,
        children: (0, e.jsx)(r.E, {
            variant: "text-md/normal",
            children: m.intl.format(m.t.jkvpmk, {
                listingName: i.name,
                monetizationTermsUrl: f.A.getArticleURL(u.MVz.CREATOR_TERMS),
                communityGuidelinesUrl: u.X7G.GUIDELINES,
            }),
        }),
    });
}

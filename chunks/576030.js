l.d(t, { GM: () => h, mW: () => A, uq: () => c });
var i = l(627968);
l(64700);
var r = l(158954),
    n = l(311907),
    a = l(397927),
    s = l(587895),
    u = l(721932),
    d = l(287809),
    o = l(360469);
function c(e) {
    let t = null != e.gifterUserId ? d.default.getUser(e.gifterUserId) : null;
    return null == t
        ? null
        : (0, i.jsx)(a.euF, { src: t.getAvatarURL(void 0, 48), size: a._3J.SIZE_48, "aria-label": t.username });
}
function h(e) {
    return (0, i.jsx)(I, { wishlistItem: e });
}
function A(e) {
    let { application: t } = e,
        l = null != t ? t.getIconURL(o.iu.SMALL) : void 0;
    return null != l
        ? (0, i.jsx)("img", { src: l, alt: t?.name })
        : (0, i.jsx)(r.U1X, { color: "currentColor", size: "xs" });
}
function I(e) {
    let { wishlistItem: t } = e,
        l = (0, n.bG)([s.A], () => ((0, u.$)(t) ? s.A.getApplication(t.sku.applicationId) : void 0));
    return (0, i.jsx)(A, { application: l });
}

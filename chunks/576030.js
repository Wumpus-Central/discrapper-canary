n.d(t, { GM: () => _, mW: () => m, uq: () => d });
var l = n(627968);
n(64700);
var s = n(158954),
    a = n(311907),
    i = n(397927),
    r = n(587895),
    o = n(721932),
    u = n(287809),
    c = n(360469);
function d(e) {
    let t = null != e.gifterUserId ? u.default.getUser(e.gifterUserId) : null;
    return null == t
        ? null
        : (0, l.jsx)(i.euF, { src: t.getAvatarURL(void 0, 48), size: i._3J.SIZE_48, "aria-label": t.username });
}
function _(e) {
    return (0, l.jsx)(p, { wishlistItem: e });
}
function m(e) {
    let { application: t } = e,
        n = null != t ? t.getIconURL(c.iu.SMALL) : void 0;
    return null != n
        ? (0, l.jsx)("img", { src: n, alt: t?.name })
        : (0, l.jsx)(s.U1X, { color: "currentColor", size: "xs" });
}
function p(e) {
    let { wishlistItem: t } = e,
        n = (0, a.bG)([r.A], () => ((0, o.$)(t) ? r.A.getApplication(t.sku.applicationId) : void 0));
    return (0, l.jsx)(m, { application: n });
}

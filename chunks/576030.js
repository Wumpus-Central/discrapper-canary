"use strict";
n.d(t, { GM: () => h, mW: () => p, uq: () => u });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    a = n(397927),
    r = n(587895),
    o = n(721932),
    d = n(287809),
    c = n(360469);
function u(e) {
    let t = null != e.gifterUserId ? d.default.getUser(e.gifterUserId) : null;
    return null == t
        ? null
        : (0, i.jsx)(a.euF, { src: t.getAvatarURL(void 0, 48), size: a._3J.SIZE_48, "aria-label": t.username });
}
function h(e) {
    return (0, i.jsx)(A, { wishlistItem: e });
}
function p(e) {
    let { application: t } = e,
        n = null != t ? t.getIconURL(c.iu.SMALL) : void 0;
    return null != n
        ? (0, i.jsx)("img", { src: n, alt: t?.name })
        : (0, i.jsx)(s.U1X, { color: "currentColor", size: "xs" });
}
function A(e) {
    let { wishlistItem: t } = e,
        n = (0, l.bG)([r.A], () => ((0, o.$)(t) ? r.A.getApplication(t.sku.applicationId) : void 0));
    return (0, i.jsx)(p, { application: n });
}

n.d(t, {
    GM: () => f,
    mW: () => p,
    uq: () => d,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(311907),
    o = n(397927),
    s = n(587895),
    l = n(721932),
    c = n(287809),
    u = n(360469);

function d(e) {
    let t = null != e.gifterUserId ? c.default.getUser(e.gifterUserId) : null;
    return null == t
        ? null
        : (0, r.jsx)(o.euF, {
              src: t.getAvatarURL(void 0, 48),
              size: o._3J.SIZE_48,
              "aria-label": t.username,
          });
}

function f(e) {
    return (0, r.jsx)(_, {
        wishlistItem: e,
    });
}

function p(e) {
    let { application: t } = e,
        n = null != t ? t.getIconURL(u.iu.SMALL) : void 0;
    return null != n
        ? (0, r.jsx)("img", {
              src: n,
              alt: null == t ? void 0 : t.name,
          })
        : (0, r.jsx)(i.U1X, {
              color: "currentColor",
              size: "xs",
          });
}

function _(e) {
    let { wishlistItem: t } = e,
        n = (0, a.bG)([s.A], () => ((0, l.$)(t) ? s.A.getApplication(t.sku.applicationId) : void 0));
    return (0, r.jsx)(p, {
        application: n,
    });
}

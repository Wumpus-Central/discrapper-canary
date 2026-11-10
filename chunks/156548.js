var i = n(582128),
    r = n(621466),
    a = n(976860),
    s = n(475815);
function l(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function o() {
    let e = document,
        t = e.fullscreenElement ?? e.webkitFullscreenElement ?? e.mozFullScreenElement ?? e.msFullscreenElement ?? null;
    return (0, r.vq)(t, HTMLElement) && t.hasAttribute("data-frame-id") ? t : null;
}
function d() {
    return o()?.getAttribute("data-frame-id") ?? null;
}
function c(e) {
    return null != e && d() === e;
}
let u = !1;
function _(e) {
    if (!c(e)) return;
    let t = l(e);
    null != t && (0, s.sP)(t);
}
function E(e) {
    return (0, s.a3)(document, e);
}
n.d(
    t,
    {},
    {
        BL: _,
        U8: function (e) {
            let t = l(e);
            null != t &&
                (0, s.Ub)(t) &&
                (c(e)
                    ? (0, s.sP)(t)
                    : ((function () {
                          if (u) return;
                          u = !0;
                          let e = (0, a.JK)(),
                              { pathname: t } = e.location;
                          e.listen((e) => {
                              let n = e.pathname !== t;
                              t = e.pathname;
                              let i = d();
                              n && null != i && _(i);
                          });
                      })(),
                      (0, s.tl)(t)));
        },
        YQ: function () {
            return i.useSyncExternalStore(E, o);
        },
        cR: function (e) {
            return i.useSyncExternalStore(E, () => c(e));
        },
        fl: l,
    },
);

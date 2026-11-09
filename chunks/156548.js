var i = n(582128),
    r = n(621466),
    a = n(475815);
function s(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function l() {
    let e = document,
        t = e.fullscreenElement ?? e.webkitFullscreenElement ?? e.mozFullScreenElement ?? e.msFullscreenElement ?? null;
    return (0, r.vq)(t, HTMLElement) && t.hasAttribute("data-frame-id") ? t : null;
}
function o(e) {
    return null != e && (l()?.getAttribute("data-frame-id") ?? null) === e;
}
function d(e) {
    return (0, a.a3)(document, e);
}
n.d(
    t,
    {},
    {
        BL: function (e) {
            if (!o(e)) return;
            let t = s(e);
            null != t && (0, a.sP)(t);
        },
        U8: function (e) {
            let t = s(e);
            null != t && (0, a.Ub)(t) && (o(e) ? (0, a.sP)(t) : (0, a.tl)(t));
        },
        YQ: function () {
            return i.useSyncExternalStore(d, l);
        },
        cR: function (e) {
            return i.useSyncExternalStore(d, () => o(e));
        },
        fl: s,
    },
);

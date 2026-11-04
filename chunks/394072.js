(n(323874), n(14289), n(35956));
var i = n(723702);
n(206885);
let r = !1;
function a() {
    return r;
}
n.d(
    t,
    {},
    {
        LK: function () {
            return a();
        },
        SE: a,
        tO: function () {
            if (__OVERLAY__) return;
            let e = new URLSearchParams(window.location.search).get("overlay_v3");
            ("1" !== e && "windowed" !== e) || (i.isPlatformEmbedded && (r = !0));
        },
    },
);

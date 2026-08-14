"use strict";
n.d(t, { A: () => g });
var i = n(228366),
    r = n(439372),
    a = n(477900);
n(582128);
var s = n(834730),
    l = n(691540),
    o = n(857250),
    d = n(97483),
    c = n(625075),
    u = n(375708),
    _ = n(479827);
function E() {
    return (0, a.jsx)("div", {
        className: _.o,
        role: "status",
        children: (0, a.jsxs)(s.E, {
            variant: "text-sm/normal",
            className: _.Q,
            children: [u.intl.string(u.t.UoW002), " ", u.intl.format(u.t.BPDKoA, { helpdeskArticle: c.B })],
        }),
    });
}
var A = n(17928);
let h = { hasShownBanner: !1 };
class I extends A.Ay.PersistedStore {
    static displayName = "VideoGuardBannerStore";
    static persistKey = "VideoGuardBanner";
    initialize(e) {
        null != e && (h = e);
    }
    hasShownBanner() {
        return h.hasShownBanner;
    }
    getState() {
        return h;
    }
}
let f = new I(i.h, {
    VIDEO_GUARD_BANNER_SHOWN: function () {
        h = { ...h, hasShownBanner: !0 };
    },
});
var p = n(652215),
    T = n(731854);
class m extends r.A {
    actions = { RTC_CONNECTION_STATE: (e) => this.handleConnectionState(e) };
    handleConnectionState = (e) => {
        e.state !== p.S7L.RTC_CONNECTED ||
            e.context !== T.x.DEFAULT ||
            f.hasShownBanner() ||
            c.k.getConfig({ location: "VideoGuardBannerManager" }).videoEnabled ||
            ((0, l.P0)((0, o.o)("", d.Ck.CUSTOM, { position: d.xJ.TOP, component: (0, a.jsx)(E, {}), duration: 6e3 })),
            i.h.dispatch({ type: "VIDEO_GUARD_BANNER_SHOWN" }));
    };
}
let g = new m();

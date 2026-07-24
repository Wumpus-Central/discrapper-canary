"use strict";
n.d(t, { $n: () => E, Dc: () => A, KC: () => h });
var i = n(627968),
    r = n(64700),
    a = n(353640),
    s = n(935399),
    l = n(406810),
    o = n(606096),
    d = n(459192),
    c = n(661531),
    u = n(765178);
let _ = (0, a.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1 }));
function E(e) {
    let { anchorRef: t } = e,
        n = _((e) => e.toast),
        a = _((e) => e.isVisible);
    r.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => _.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => _.setState({ isVisible: !1 }), 3e3);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [n]),
        (0, s.l0)(() => _.setState({ toast: null, isVisible: !1, isPulsing: !1 }));
    let u = n?.icon === "clock" ? l.O : o.c;
    return (0, i.jsx)(d.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: a,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(u, { size: "sm", color: c.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: n?.message ?? "",
        ariaHidden: !0,
        children: null,
    });
}
function A(e) {
    _.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), u.O.announce(e.message, "polite");
}
function h() {
    return _((e) => e.isPulsing);
}

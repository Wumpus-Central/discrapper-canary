"use strict";
n.d(t, { $n: () => p, Dc: () => T, KC: () => m, Vc: () => g });
var i = n(627968),
    r = n(64700),
    a = n(353640),
    s = n(935399),
    l = n(17928),
    o = n(506774),
    d = n(406810),
    c = n(606096),
    u = n(459192),
    _ = n(661531),
    E = n(765178),
    A = n(85109),
    h = n(375708);
let I = "InboxLastOpenedAt",
    f = (0, a.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: o.w.get(I, 0) ?? 0 }));
function p(e) {
    let { anchorRef: t } = e,
        n = f((e) => e.toast),
        a = f((e) => e.isVisible),
        o = f((e) => e.inboxLastOpenedAt),
        E = (0, l.bG)([A.A], () => A.A.getOverdueMessageReminderCount()),
        I = (0, l.bG)([A.A], () => A.A.getMostRecentOverdueDueAt()),
        p = E > 0 && I > o;
    r.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => f.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => f.setState({ isVisible: !1 }), 3e3);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [n]),
        (0, s.l0)(() => f.setState({ toast: null, isVisible: !1, isPulsing: !1 }));
    let T = null != n && (a || !p) ? n : null,
        m = null != T ? T.message : h.intl.formatToPlainString(h.t.yBmFPA, { count: E }),
        g = null != T ? ("clock" === T.icon ? d.O : c.c) : d.O;
    return (0, i.jsx)(u.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: (null != n && a) || p,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(g, { size: "sm", color: _.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: m,
        ariaHidden: !0,
        children: null,
    });
}
function T(e) {
    f.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), E.O.announce(e.message, "polite");
}
function m() {
    return f((e) => e.isPulsing);
}
function g() {
    o.w.set(I, Date.now()), f.setState({ inboxLastOpenedAt: Date.now() });
}

"use strict";
n.d(t, { $n: () => T, Dc: () => m, KC: () => g, Vc: () => S });
var i = n(477900),
    r = n(582128),
    a = n(196765),
    s = n(935399),
    l = n(17928),
    o = n(506774),
    d = n(97483),
    c = n(406810),
    u = n(606096),
    _ = n(459192),
    E = n(661531),
    A = n(765178),
    h = n(85109),
    I = n(375708);
let f = "InboxLastOpenedAt",
    p = (0, a.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: o.w.get(f, 0) ?? 0 }));
function T(e) {
    let { anchorRef: t } = e,
        n = p((e) => e.toast),
        a = p((e) => e.isVisible),
        o = p((e) => e.inboxLastOpenedAt),
        A = (0, l.bG)([h.A], () => h.A.getOverdueMessageReminderCount()),
        f = (0, l.bG)([h.A], () => h.A.getMostRecentOverdueDueAt()),
        T = A > 0 && f > o;
    r.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => p.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => p.setState({ isVisible: !1 }), 5e3);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [n]),
        (0, s.l0)(() => p.setState({ toast: null, isVisible: !1, isPulsing: !1 }));
    let m = null != n && (a || !T) ? n : null,
        g = null != m ? m.message : I.intl.formatToPlainString(I.t.yBmFPA, { count: A }),
        S = null != m ? (m.icon === d.Ck.CLOCK ? c.O : u.c) : c.O;
    return (0, i.jsx)(_.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: (null != n && a) || T,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(S, { size: "sm", color: null != m ? E.A.colors.STATUS_POSITIVE : E.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: g,
        ariaHidden: !0,
        children: null,
    });
}
function m(e) {
    p.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), A.O.announce(e.message, "polite");
}
function g() {
    return p((e) => e.isPulsing);
}
function S() {
    o.w.set(f, Date.now()), p.setState({ inboxLastOpenedAt: Date.now() });
}

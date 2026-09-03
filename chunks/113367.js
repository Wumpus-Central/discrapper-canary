n.d(t, { $n: () => m, Dc: () => g, KC: () => S, Vc: () => N });
var i = n(477900),
    r = n(582128),
    a = n(196765),
    s = n(935399),
    l = n(17928),
    o = n(506774),
    d = n(97483),
    c = n(406810),
    u = n(606096),
    _ = n(683063),
    E = n(661531),
    A = n(765178),
    h = n(85109),
    I = n(650583),
    f = n(375708);
let p = "InboxLastOpenedAt",
    T = (0, a.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: o.w.get(p, 0) ?? 0 }));
function m(e) {
    let { anchorRef: t } = e,
        n = T((e) => e.toast),
        a = T((e) => e.isVisible),
        o = T((e) => e.inboxLastOpenedAt),
        A = (0, l.bG)([h.A], () => h.A.getOverdueMessageReminderCount()),
        p = (0, l.bG)([h.A], () => h.A.getMostRecentOverdueDueAt()),
        m = A > 0 && p > o;
    r.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => T.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => T.setState({ isVisible: !1 }), 5e3);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [n]),
        (0, s.l0)(() => T.setState({ toast: null, isVisible: !1, isPulsing: !1 })),
        r.useEffect(() => {
            if (m)
                return (
                    document.addEventListener("keydown", e),
                    () => {
                        document.removeEventListener("keydown", e);
                    }
                );
            function e(e) {
                e.key === I.dh.ESCAPE && N();
            }
        }, [m]);
    let g = null != n && (a || !m) ? n : null,
        S = null != g ? g.message : f.intl.formatToPlainString(f.t.yBmFPA, { count: A }),
        C = null != g ? (g.icon === d.Ck.CLOCK ? c.ClockIcon : u.BookmarkIcon) : c.ClockIcon;
    return (0, i.jsx)(_.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: (null != n && a) || m,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(C, { size: "sm", color: null != g ? E.A.colors.STATUS_POSITIVE : E.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: S,
        ariaHidden: !0,
        children: null,
    });
}
function g(e) {
    T.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), A.O.announce(e.message, "polite");
}
function S() {
    return T((e) => e.isPulsing);
}
function N() {
    o.w.set(p, Date.now()), T.setState({ inboxLastOpenedAt: Date.now() });
}

n.d(t, { $n: () => T, Dc: () => m, KC: () => g, Vc: () => S });
var i = n(477900),
    r = n(582128),
    a = n(196765),
    s = n(935399),
    l = n(17928),
    o = n(506774),
    d = n(406810),
    c = n(606096),
    u = n(683063),
    _ = n(661531),
    E = n(765178),
    A = n(85109),
    h = n(650583),
    f = n(660183);
let I = "InboxLastOpenedAt",
    p = (0, a.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: o.w.get(I, 0) ?? 0 }));
function T(e) {
    let { anchorRef: t } = e,
        n = p((e) => e.toast),
        a = p((e) => e.isVisible),
        o = p((e) => e.inboxLastOpenedAt),
        E = (0, l.bG)([A.A], () => A.A.getOverdueMessageReminderCount()),
        I = (0, l.bG)([A.A], () => A.A.getMostRecentOverdueDueAt()),
        T = E > 0 && I > o;
    (r.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => p.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => p.setState({ isVisible: !1 }), 5e3);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [n]),
        (0, s.l0)(() => p.setState({ toast: null, isVisible: !1, isPulsing: !1 })),
        r.useEffect(() => {
            if (T)
                return (
                    document.addEventListener("keydown", e),
                    () => {
                        document.removeEventListener("keydown", e);
                    }
                );
            function e(e) {
                e.key === h.dh.ESCAPE && S();
            }
        }, [T]));
    let m = null != n && (a || !T) ? n : null,
        g = null != m ? m.message : f.intl.formatToPlainString(f.t.yBmFPA, { count: E }),
        N = null != m ? ("clock" === m.icon ? d.ClockIcon : c.BookmarkIcon) : d.ClockIcon;
    return (0, i.jsx)(u.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: (null != n && a) || T,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(N, { size: "sm", color: null != m ? _.A.colors.STATUS_POSITIVE : _.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: g,
        ariaHidden: !0,
        children: null,
    });
}
function m(e) {
    (p.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), E.O.announce(e.message, "polite"));
}
function g() {
    return p((e) => e.isPulsing);
}
function S() {
    (o.w.set(I, Date.now()), p.setState({ inboxLastOpenedAt: Date.now() }));
}

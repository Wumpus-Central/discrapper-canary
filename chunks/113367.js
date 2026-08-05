n.d(t, { $n: () => S, Dc: () => O, KC: () => C, Vc: () => D });
var i = n(477900),
    l = n(582128),
    r = n(196765),
    s = n(935399),
    a = n(17928),
    E = n(506774);
if (21552 == n.j) var o = n(97483);
if (21552 == n.j) var c = n(406810);
if (21552 == n.j) var u = n(606096);
if (21552 == n.j) var _ = n(459192);
if (21552 == n.j) var A = n(661531);
var T = n(765178),
    d = n(85109),
    I = n(375708);
let N = "InboxLastOpenedAt",
    R = (0, r.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: E.w.get(N, 0) ?? 0 }));
function S(e) {
    let { anchorRef: t } = e,
        n = R((e) => e.toast),
        r = R((e) => e.isVisible),
        E = R((e) => e.inboxLastOpenedAt),
        T = (0, a.bG)([d.A], () => d.A.getOverdueMessageReminderCount()),
        N = (0, a.bG)([d.A], () => d.A.getMostRecentOverdueDueAt()),
        S = T > 0 && N > E;
    l.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => R.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => R.setState({ isVisible: !1 }), 3e3);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [n]),
        (0, s.l0)(() => R.setState({ toast: null, isVisible: !1, isPulsing: !1 }));
    let O = null != n && (r || !S) ? n : null,
        C = null != O ? O.message : I.intl.formatToPlainString(I.t.yBmFPA, { count: T }),
        D = null != O ? (O.icon === o.Ck.CLOCK ? c.O : u.c) : c.O;
    return (0, i.jsx)(_.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: (null != n && r) || S,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(D, { size: "sm", color: A.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: C,
        ariaHidden: !0,
        children: null,
    });
}
function O(e) {
    R.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), T.O.announce(e.message, "polite");
}
function C() {
    return R((e) => e.isPulsing);
}
function D() {
    E.w.set(N, Date.now()), R.setState({ inboxLastOpenedAt: Date.now() });
}

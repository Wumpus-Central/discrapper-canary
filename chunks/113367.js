n.d(t, { $n: () => R, Dc: () => S, KC: () => O, Vc: () => C });
var i = n(477900),
    l = n(582128),
    r = n(196765),
    s = n(935399),
    a = n(17928),
    E = n(506774);
if (21552 == n.j) var o = n(406810);
if (21552 == n.j) var c = n(606096);
if (21552 == n.j) var u = n(459192);
if (21552 == n.j) var _ = n(661531);
var A = n(765178),
    T = n(85109),
    d = n(375708);
let I = "InboxLastOpenedAt",
    N = (0, r.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: E.w.get(I, 0) ?? 0 }));
function R(e) {
    let { anchorRef: t } = e,
        n = N((e) => e.toast),
        r = N((e) => e.isVisible),
        E = N((e) => e.inboxLastOpenedAt),
        A = (0, a.bG)([T.A], () => T.A.getOverdueMessageReminderCount()),
        I = (0, a.bG)([T.A], () => T.A.getMostRecentOverdueDueAt()),
        R = A > 0 && I > E;
    l.useEffect(() => {
        if (null == n) return;
        let e = setTimeout(() => N.setState({ isPulsing: !1 }), 600),
            t = setTimeout(() => N.setState({ isVisible: !1 }), 3e3);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [n]),
        (0, s.l0)(() => N.setState({ toast: null, isVisible: !1, isPulsing: !1 }));
    let S = null != n && (r || !R) ? n : null,
        O = null != S ? S.message : d.intl.formatToPlainString(d.t.yBmFPA, { count: A }),
        C = null != S ? ("clock" === S.icon ? o.O : c.c) : o.O;
    return (0, i.jsx)(u.u, {
        anchorRef: t,
        asContainer: !0,
        forceOpen: (null != n && r) || R,
        hideOnClick: !1,
        position: "bottom",
        align: "right",
        caretConfig: { align: "end" },
        asset: (0, i.jsx)(C, { size: "sm", color: _.A.colors.TEXT_STRONG }),
        assetSize: 20,
        body: O,
        ariaHidden: !0,
        children: null,
    });
}
function S(e) {
    N.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), A.O.announce(e.message, "polite");
}
function O() {
    return N((e) => e.isPulsing);
}
function C() {
    E.w.set(I, Date.now()), N.setState({ inboxLastOpenedAt: Date.now() });
}

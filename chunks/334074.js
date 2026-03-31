n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(932001),
    a = n(355898),
    r = n(574560),
    o = n(652215);
function c(e) {
    let {
            application: t,
            disabled: n = !1,
            dismissibleContent: c,
            dismissibleContentGroupName: d,
            bypassAutoDismiss: u = !1,
        } = e,
        h = (0, l.bG)([r.A], () => (null != t ? r.A.getGameUpsellDismissal(t.id, c) : null)),
        [A, _] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        let e = null != h ? h.dismissedAt + Math.min(864e5 * Math.pow(2, h.timesDismissed - 1), 24192e5) : 0,
            t = 0,
            n = () => {
                _(Date.now() >= e);
                let i = Math.min(e - Date.now(), o.mnr);
                i > 0 && (t = setTimeout(n, i));
            };
        return n(), () => clearTimeout(t);
    }, [h]);
    let m = !n && null != t && A,
        [g, p] = (0, s.Wl)(m ? c : null, { cooldownDurationMs: 864e5 }, d, u);
    return {
        shouldShow: g === c,
        markAsDismissed: (e) => {
            null != t && ((0, a.M)(t.id, c), p(e));
        },
    };
}

"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    s = n(311907),
    l = n(932001),
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
        h = (0, s.bG)([r.A], () => (null != t ? r.A.getGameUpsellDismissal(t.id, c) : null)),
        [A, m] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        let e = null != h ? h.dismissedAt + Math.min(864e5 * Math.pow(2, h.timesDismissed - 1), 24192e5) : 0,
            t = 0,
            n = () => {
                m(Date.now() >= e);
                let i = Math.min(e - Date.now(), o.mnr);
                i > 0 && (t = setTimeout(n, i));
            };
        return n(), () => clearTimeout(t);
    }, [h]);
    let _ = !n && null != t && A,
        [p, g] = (0, l.Wl)(_ ? c : null, { cooldownDurationMs: 864e5 }, d, u);
    return {
        shouldShow: p === c,
        markAsDismissed: (e) => {
            null != t && ((0, a.M)(t.id, c), g(e));
        },
    };
}

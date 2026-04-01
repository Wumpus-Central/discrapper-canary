n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(877624),
    a = n(554146),
    r = n(397927),
    o = n(367727),
    d = n(549996),
    c = n(498470),
    u = n(652215),
    h = n(49999),
    A = n(258527);
function _() {
    let e = (0, d.c)(s.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        _ = l.useCallback(() => {
            null != n && (0, o.qr)(a.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: h.i.USER_DISMISS });
        }, [n]);
    if (null == t) return null;
    let m = (0, c.h)({ buttonAction: t.ctaAction, onClose: _ });
    return (0, i.jsxs)(r.$Td, {
        color: r.Hv$.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(r.PMB, { noticeType: u.kqX.PREMIUM_MARKETING_NAGBAR, onClick: _ }),
            (0, i.jsx)(r.tvc, { size: "md", color: "currentColor", className: A.P }),
            t.body,
            "" !== t.ctaLabel &&
                (0, i.jsx)(r.Z_L, { noticeType: u.kqX.PREMIUM_MARKETING_NAGBAR, onClick: m, children: t.ctaLabel }),
        ],
    });
}

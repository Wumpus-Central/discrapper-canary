n.d(t, { A: () => c });
var r = n(64700),
    a = n(17928),
    i = n(451988);
function o(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
var l = n(287809),
    s = n(354670),
    d = n(927578),
    u = n(788868);
function c(e, t) {
    let n = (0, a.bG)([s.A], () => s.A.getUserDiscountOffer(e)),
        [c, _] = r.useState(o(n)),
        p = (0, a.bG)([l.default], () => (0, d.TW)(l.default.getCurrentUser())),
        C = e === u.q || e === u.EG;
    return (
        r.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new i.Ep(),
                t = () => {
                    let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    e?.start(r, () => {
                        !c && o(n) ? _(!0) : t();
                    });
                };
            return t(), () => e.stop();
        }, [c, n]),
        !c && (!p || t || C) ? n : null
    );
}

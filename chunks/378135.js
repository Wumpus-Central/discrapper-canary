n.d(t, {
    P: () => c,
    k: () => u,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(287809),
    o = n(816733),
    l = n(927578);

function c(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}

function u(e) {
    let t = (0, i.bG)([o.A], () => o.A.getUserTrialOffer(e)),
        [n, u] = r.useState(c(t)),
        d =
            !(0, i.bG)([s.default], () => (0, l.TW)(s.default.getCurrentUser())) ||
            o.A.canFractionalPremiumUserUseOffer();
    return (
        r.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new a.Ep(),
                    r = () => {
                        let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e ||
                            e.start(i, () => {
                                !n && c(t) ? u(!0) : r();
                            });
                    };
                return r(), () => e.stop();
            }
        }, [n, t]),
        !n && d ? t : null
    );
}

n.d(t, { A: () => u }), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(181658),
    s = n(260509),
    a = n(71393),
    c = n(287809),
    o = n(493540),
    d = n(469993);
function u(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e)),
        [u, f] = r.useState(),
        [g, b] = r.useState(!1),
        m = (0, d.ME)(n);
    return {
        canSubmitAcceptance: (0, i.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return null != n && (0, s.bM)(n, e);
        }, [n]),
        error: u,
        loading: g,
        submitAcceptTermsRequest: r.useCallback(async () => {
            if (null != e && (m || null != t)) {
                b(!0), f(void 0);
                try {
                    null != t ? await o.DP(e, t) : await o.Bo(e);
                } catch (e) {
                    f(new l.A(e));
                } finally {
                    b(!1);
                }
            }
        }, [e, t, m]),
    };
}

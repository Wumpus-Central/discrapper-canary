n.d(t, { A: () => u });
var i = n(64700),
    l = n(311907),
    s = n(181658),
    r = n(260509),
    a = n(71393),
    o = n(287809),
    d = n(493540),
    c = n(469993);
function u(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getGuild(e)),
        [u, m] = i.useState(),
        [g, h] = i.useState(!1),
        x = (0, c.ME)(n);
    return {
        canSubmitAcceptance: (0, l.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return null != n && (0, r.bM)(n, e);
        }, [n]),
        error: u,
        loading: g,
        submitAcceptTermsRequest: i.useCallback(async () => {
            if (null != e && (x || null != t)) {
                h(!0), m(void 0);
                try {
                    null != t ? await d.DP(e, t) : await d.Bo(e);
                } catch (e) {
                    m(new s.A(e));
                } finally {
                    h(!1);
                }
            }
        }, [e, t, x]),
    };
}

n.d(e, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(286379),
    l = n(481060),
    r = n(493773),
    c = n(797614),
    o = n(626135),
    d = n(103879),
    u = n(451284),
    m = n(802429),
    x = n(846488),
    h = n(181211),
    g = n(811085),
    v = n(967254),
    j = n(981631),
    N = n(388032),
    f = n(974710);
function p() {
    let t = (0, h.Z)(),
        e = (0, x.e)(),
        n = (0, u.P)(),
        p = (0, m.i)();
    (0, r.Z)(() => {
        d.yq();
    });
    let S = a.useRef(n);
    return (a.useEffect(() => {
        S.current = n;
    }),
    a.useEffect(() => {
        e && (o.default.track(j.rMx.SAFETY_HUB_VIEWED, { account_standing: S.current.state }), c.Z.increment({ name: s.V.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, i.jsx)('div', { children: (0, i.jsx)(l.Spinner, {}) })
        : null != p
          ? (0, i.jsxs)(l.Notice, {
                color: l.NoticeColors.DANGER,
                className: f.nagbar,
                children: [
                    N.intl.string(N.t.TDRvqq),
                    (0, i.jsx)(l.NoticeButton, {
                        onClick: () => d.yq(),
                        children: N.intl.string(N.t.R1AN4O)
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: f.container,
                children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(v.N, {})]
            });
}

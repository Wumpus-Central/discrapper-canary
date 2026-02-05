a.d(t, { A: () => u });
var c = a(627968),
    d = a(64700),
    n = a(503698),
    s = a.n(n),
    A = a(311907),
    o = a(287809),
    i = a(927578),
    r = a(202639),
    f = a(688796),
    p = a(652215),
    b = a(339984),
    l = a(985018),
    L = a(719154);
function u(e) {
    let { uploadType: t, analyticsSource: a, className: n, ...u } = e,
        R = d.useCallback(() => {
            (0, f.G)({ uploadType: t, analyticsSource: a });
        }, [t, a]),
        E = (0, A.bG)([o.default], () => o.default.getCurrentUser()),
        _ = i.Ay.canUseAnimatedAvatar(E),
        N = d.useMemo(() => {
            switch (t) {
                case b.HL.AVATAR:
                    return l.intl.format(l.t["pvw/HH"], { onClick: R });
                case b.HL.BANNER:
                    return l.intl.format(l.t.aCrz1e, { onClick: R });
                default:
                    return "";
            }
        }, [t, R]);
    return (t !== b.HL.AVATAR && t !== b.HL.BANNER) || (t === b.HL.AVATAR && _)
        ? null
        : (0, c.jsx)(r.d, {
              text: N,
              button: l.intl.string(l.t.BmJkbd),
              buttonAnalyticsObject: { section: p.JJy.USER_PROFILE },
              className: s()(L.k, n),
              ...u,
          });
}

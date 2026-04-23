a.d(t, { A: () => x });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(311907),
    c = a(287809),
    o = a(927578),
    u = a(202639),
    d = a(688796),
    A = a(652215),
    h = a(339984),
    f = a(985018),
    g = a(967831);
function x(e) {
    let { uploadType: t, className: a, ...r } = e,
        x = l.useCallback(() => {
            (0, d.G)({ uploadType: t });
        }, [t]),
        m = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        p = o.Ay.canUseAnimatedAvatar(m),
        C = l.useMemo(() => {
            switch (t) {
                case h.HL.AVATAR:
                    return f.intl.format(f.t["pvw/HH"], { onClick: x });
                case h.HL.BANNER:
                    return f.intl.format(f.t.aCrz1e, { onClick: x });
                default:
                    return "";
            }
        }, [t, x]);
    return (t !== h.HL.AVATAR && t !== h.HL.BANNER) || (t === h.HL.AVATAR && p)
        ? null
        : (0, n.jsx)(u.d, {
              text: C,
              button: f.intl.string(f.t.BmJkbd),
              buttonAnalyticsObject: { section: A.JJy.USER_PROFILE },
              className: s()(g.k, a),
              ...r,
          });
}

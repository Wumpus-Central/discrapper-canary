a.d(t, { A: () => m });
var n = a(627968),
    s = a(64700),
    r = a(503698),
    l = a.n(r),
    i = a(311907),
    c = a(287809),
    u = a(927578),
    o = a(202639),
    d = a(688796),
    A = a(652215),
    h = a(339984),
    f = a(985018),
    g = a(326060);
function m(e) {
    let { uploadType: t, className: a, ...r } = e,
        m = s.useCallback(() => {
            (0, d.G)({ uploadType: t });
        }, [t]),
        x = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        C = u.Ay.canUseAnimatedAvatar(x),
        p = s.useMemo(() => {
            switch (t) {
                case h.HL.AVATAR:
                    return f.intl.format(f.t["pvw/HH"], { onClick: m });
                case h.HL.BANNER:
                    return f.intl.format(f.t.aCrz1e, { onClick: m });
                default:
                    return "";
            }
        }, [t, m]);
    return (t !== h.HL.AVATAR && t !== h.HL.BANNER) || (t === h.HL.AVATAR && C)
        ? null
        : (0, n.jsx)(o.d, {
              text: p,
              button: f.intl.string(f.t.BmJkbd),
              buttonAnalyticsObject: { section: A.JJy.USER_PROFILE },
              className: l()(g.k, a),
              ...r,
          });
}

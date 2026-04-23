a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    s = a(503698),
    r = a.n(s),
    i = a(17928),
    c = a(287809),
    o = a(927578),
    u = a(959249),
    d = a(688796),
    A = a(652215),
    h = a(339984),
    f = a(985018),
    g = a(967831);
function m(e) {
    let { uploadType: t, className: a, ...s } = e,
        m = l.useCallback(() => {
            (0, d.G)({ uploadType: t });
        }, [t]),
        x = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        p = o.Ay.canUseAnimatedAvatar(x),
        C = l.useMemo(() => {
            switch (t) {
                case h.HL.AVATAR:
                    return f.intl.format(f.t["pvw/HH"], { onClick: m });
                case h.HL.BANNER:
                    return f.intl.format(f.t.aCrz1e, { onClick: m });
                default:
                    return "";
            }
        }, [t, m]);
    return (t !== h.HL.AVATAR && t !== h.HL.BANNER) || (t === h.HL.AVATAR && p)
        ? null
        : (0, n.jsx)(u.d, {
              text: C,
              button: f.intl.string(f.t.BmJkbd),
              buttonAnalyticsObject: { section: A.JJy.USER_PROFILE },
              className: r()(g.k, a),
              ...s,
          });
}

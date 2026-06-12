n.d(e, { A: () => C });
var a = n(627968),
    r = n(64700),
    s = n(503698),
    u = n.n(s),
    c = n(17928),
    i = n(287809),
    A = n(428262),
    l = n(202639),
    d = n(688796),
    o = n(652215),
    k = n(339984),
    b = n(375708),
    p = n(967831);
function C(t) {
    let { uploadType: e, className: n, ...s } = t,
        C = r.useCallback(() => {
            (0, d.G)({ uploadType: e });
        }, [e]),
        H = (0, c.bG)([i.default], () => i.default.getCurrentUser()),
        R = A.Ay.canUseAnimatedAvatar(H),
        f = r.useMemo(() => {
            switch (e) {
                case k.HL.AVATAR:
                    return b.intl.format(b.t["pvw/HH"], { onClick: C });
                case k.HL.BANNER:
                    return b.intl.format(b.t.aCrz1e, { onClick: C });
                default:
                    return "";
            }
        }, [e, C]);
    return (e !== k.HL.AVATAR && e !== k.HL.BANNER) || (e === k.HL.AVATAR && R)
        ? null
        : (0, a.jsx)(l.d, {
              text: f,
              button: b.intl.string(b.t.BmJkbd),
              buttonAnalyticsObject: { section: o.JJy.USER_PROFILE },
              className: u()(p.k, n),
              ...s,
          });
}

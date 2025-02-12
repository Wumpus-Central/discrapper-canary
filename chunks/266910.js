n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    a = n(692547),
    s = n(481060),
    o = n(220082),
    l = n(420596),
    u = n(880563),
    c = n(687158),
    d = n(484459),
    f = n(695346),
    _ = n(981631),
    p = n(666593);
let h = function (e) {
    let { style: t, src: n, backgroundSrc: h, userId: m, pulseSpeakingIndicator: g = !1, speaking: E = !1, ...v } = e,
        y = null != h ? h : n,
        I = (0, o.ZP)(y, a.Z.unsafe_rawColors.PRIMARY_800.css),
        T = (0, l.c)(!0, 'VideoBackground-web').enabled,
        b = (0, c.ZP)(null != m ? m : _.lds),
        S =
            null == b
                ? void 0
                : b.getBannerURL({
                      size: 1024,
                      canAnimate: f.QK.getSetting()
                  });
    if (
        (r.useEffect(() => {
            null != m && T && (0, d.Z)(m, void 0, { dispatchWait: !0 });
        }, [T, m]),
        null == n)
    )
        return null;
    let A = (0, i.jsx)(s.qEK, {
            className: p.avatarWrapper,
            src: n,
            ...v
        }),
        N = {
            ...t,
            backgroundColor: I
        };
    return (
        null != S && E && T && ((N.backgroundImage = 'url('.concat(S, ')')), (N.backgroundSize = 'cover')),
        (0, i.jsx)('div', {
            style: N,
            className: p.background,
            children: g
                ? (0, i.jsx)(u.Z, {
                      shouldAnimate: E,
                      children: A
                  })
                : A
        })
    );
};

var i = r(200651),
    a = r(192379),
    o = r(692547),
    s = r(481060),
    l = r(220082),
    u = r(420596),
    c = r(880563),
    d = r(687158),
    f = r(484459),
    p = r(695346),
    h = r(981631),
    _ = r(972753);
function m(e) {
    let { style: n, src: r, backgroundSrc: m, userId: g, pulseSpeakingIndicator: E = !1, speaking: v = !1, ...y } = e,
        b = null != m ? m : r,
        I = (0, l.ZP)(b, o.Z.unsafe_rawColors.PRIMARY_800.css),
        T = (0, u.c)(!0, 'VideoBackground-web').enabled,
        S = (0, d.ZP)(null != g ? g : h.lds),
        A =
            null == S
                ? void 0
                : S.getBannerURL({
                      size: 1024,
                      canAnimate: p.QK.getSetting()
                  });
    if (
        (a.useEffect(() => {
            null != g && T && (0, f.Z)(g, void 0, { dispatchWait: !0 });
        }, [T, g]),
        null == r)
    )
        return null;
    let C = (0, i.jsx)(s.Avatar, {
            className: _.avatarWrapper,
            src: r,
            ...y
        }),
        N = {
            ...n,
            backgroundColor: I
        };
    return (
        null != A && v && T && ((N.backgroundImage = 'url('.concat(A, ')')), (N.backgroundSize = 'cover')),
        (0, i.jsx)('div', {
            style: N,
            className: _.background,
            children: E
                ? (0, i.jsx)(c.Z, {
                      shouldAnimate: v,
                      children: C
                  })
                : C
        })
    );
}
n.Z = m;

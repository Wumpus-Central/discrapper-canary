var i = r(200651),
    a = r(192379),
    s = r(692547),
    o = r(481060),
    l = r(220082),
    u = r(420596),
    c = r(880563),
    d = r(687158),
    f = r(484459),
    _ = r(695346),
    h = r(981631),
    p = r(972753);
function m(e) {
    let { style: n, src: r, backgroundSrc: m, userId: g, pulseSpeakingIndicator: E = !1, speaking: v = !1, ...I } = e,
        T = null != m ? m : r,
        b = (0, l.ZP)(T, s.Z.unsafe_rawColors.PRIMARY_800.css),
        y = (0, u.c)(!0, 'VideoBackground-web').enabled,
        S = (0, d.ZP)(null != g ? g : h.lds),
        A =
            null == S
                ? void 0
                : S.getBannerURL({
                      size: 1024,
                      canAnimate: _.QK.getSetting()
                  });
    if (
        (a.useEffect(() => {
            null != g && y && (0, f.Z)(g, void 0, { dispatchWait: !0 });
        }, [y, g]),
        null == r)
    )
        return null;
    let N = (0, i.jsx)(o.Avatar, {
            className: p.avatarWrapper,
            src: r,
            ...I
        }),
        C = {
            ...n,
            backgroundColor: b
        };
    return (
        null != A && v && y && ((C.backgroundImage = 'url('.concat(A, ')')), (C.backgroundSize = 'cover')),
        (0, i.jsx)('div', {
            style: C,
            className: p.background,
            children: E
                ? (0, i.jsx)(c.Z, {
                      shouldAnimate: v,
                      children: N
                  })
                : N
        })
    );
}
n.Z = m;

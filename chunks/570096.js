(n.d(t, { N: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(755721),
    s = n(481060),
    c = n(782568),
    u = n(243778),
    d = n(970731),
    p = n(594174),
    h = n(63063),
    f = n(69589),
    m = n(981631),
    g = n(921944),
    b = n(388032),
    _ = n(201838);
let y = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsxs)('div', {
            className: _.assetContainer,
            children: [
                (0, r.jsx)(f.Z, {
                    user: t,
                    rank: 1,
                    avatarSize: s.EFr.SIZE_56
                }),
                (0, r.jsx)(s.P3F, {
                    className: _.closeIcon,
                    onClick: () => {
                        n(g.L.USER_DISMISS);
                    },
                    children: (0, r.jsx)(s.Dio, {
                        color: 'currentColor',
                        size: 'sm'
                    })
                })
            ]
        });
    },
    C = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsx)(d.ZP, {
            asset: (0, r.jsx)(y, {
                user: t,
                markAsDismissed: n
            }),
            header: b.intl.string(b.t.wAtFS0),
            content: b.intl.string(b.t.qIZICA),
            buttonCTA: b.intl.string(b.t.hvVgAQ),
            onClick: () => {
                ((0, c.Z)(h.Z.getArticleURL(m.BhN.GUILD_LEADERBOARD)), n(g.L.USER_DISMISS));
            },
            markAsDismissed: n,
            caretPosition: d.DF.RIGHT_TOP,
            buttonProps: {
                color: o.zx.Colors.WHITE,
                look: o.zx.Looks.LINK,
                size: o.zx.Sizes.MIN
            }
        });
    };
function x(e) {
    let { children: t } = e,
        n = [a.z.LEADERBOARD_NUX_COACHMARK],
        [o, c] = (0, u.US)(n, void 0),
        d = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        h = i.useRef(null);
    return o !== a.z.LEADERBOARD_NUX_COACHMARK || null == d
        ? t
        : (0, r.jsx)(s.yRy, {
              targetElementRef: h,
              renderPopout: () =>
                  C({
                      user: d,
                      markAsDismissed: c
                  }),
              position: 'left',
              animation: s.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () =>
                  (0, r.jsx)('div', {
                      ref: h,
                      children: t
                  })
          });
}

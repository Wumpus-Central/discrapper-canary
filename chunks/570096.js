(n.d(t, { N: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    s = n(755721),
    o = n(481060),
    c = n(782568),
    u = n(243778),
    d = n(970731),
    h = n(594174),
    p = n(63063),
    f = n(69589),
    g = n(981631),
    m = n(921944),
    b = n(388032),
    y = n(201838);
let x = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsxs)('div', {
            className: y.assetContainer,
            children: [
                (0, r.jsx)(f.Z, {
                    user: t,
                    rank: 1,
                    avatarSize: o.EFr.SIZE_56
                }),
                (0, r.jsx)(o.P3F, {
                    className: y.closeIcon,
                    onClick: () => {
                        n(m.L.USER_DISMISS);
                    },
                    children: (0, r.jsx)(o.Dio, {
                        color: 'currentColor',
                        size: 'sm'
                    })
                })
            ]
        });
    },
    j = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsx)(d.ZP, {
            asset: (0, r.jsx)(x, {
                user: t,
                markAsDismissed: n
            }),
            header: b.intl.string(b.t.wAtFS0),
            content: b.intl.string(b.t.qIZICA),
            buttonCTA: b.intl.string(b.t.hvVgAQ),
            onClick: () => {
                ((0, c.Z)(p.Z.getArticleURL(g.BhN.GUILD_LEADERBOARD)), n(m.L.USER_DISMISS));
            },
            markAsDismissed: n,
            caretPosition: d.DF.RIGHT_TOP,
            buttonProps: {
                color: s.zx.Colors.WHITE,
                look: s.zx.Looks.LINK,
                size: s.zx.Sizes.MIN
            }
        });
    };
function _(e) {
    let { children: t } = e,
        n = [a.z.LEADERBOARD_NUX_COACHMARK],
        [s, c] = (0, u.US)(n, void 0),
        d = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        p = i.useRef(null);
    return s !== a.z.LEADERBOARD_NUX_COACHMARK || null == d
        ? t
        : (0, r.jsx)(o.yRy, {
              targetElementRef: p,
              renderPopout: () =>
                  j({
                      user: d,
                      markAsDismissed: c
                  }),
              position: 'left',
              animation: o.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () =>
                  (0, r.jsx)('div', {
                      ref: p,
                      children: t
                  })
          });
}

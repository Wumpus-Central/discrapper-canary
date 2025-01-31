n.d(t, { N: () => x }), n(47120);
var i = n(200651),
    l = n(442837),
    a = n(704215),
    r = n(481060),
    s = n(782568),
    o = n(243778),
    c = n(970731),
    d = n(594174),
    u = n(63063),
    h = n(69589),
    p = n(981631),
    m = n(921944),
    f = n(388032),
    g = n(725640);
let _ = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, i.jsxs)('div', {
            className: g.assetContainer,
            children: [
                (0, i.jsx)(h.Z, {
                    user: t,
                    rank: 1,
                    avatarSize: r.EFr.SIZE_56
                }),
                (0, i.jsx)(r.P3F, {
                    className: g.closeIcon,
                    onClick: () => {
                        n(m.L.USER_DISMISS);
                    },
                    children: (0, i.jsx)(r.Dio, {
                        color: 'currentColor',
                        size: 'sm'
                    })
                })
            ]
        });
    },
    C = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, i.jsx)(c.ZP, {
            asset: (0, i.jsx)(_, {
                user: t,
                markAsDismissed: n
            }),
            header: f.intl.string(f.t.wAtFS0),
            content: f.intl.string(f.t.qIZICA),
            buttonCTA: f.intl.string(f.t.hvVgAQ),
            onClick: () => {
                (0, s.Z)(u.Z.getArticleURL(p.BhN.GUILD_LEADERBOARD)), n(m.L.USER_DISMISS);
            },
            markAsDismissed: n,
            caretPosition: c.DF.RIGHT_TOP,
            buttonProps: {
                color: r.zxk.Colors.WHITE,
                look: r.zxk.Looks.LINK,
                size: r.zxk.Sizes.MIN
            }
        });
    };
function x(e) {
    let { children: t } = e,
        n = [a.z.LEADERBOARD_NUX_COACHMARK],
        [s, c] = (0, o.US)(n, void 0),
        u = (0, l.e7)([d.default], () => d.default.getCurrentUser());
    return s !== a.z.LEADERBOARD_NUX_COACHMARK || null == u
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsx)(r.yRy, {
              renderPopout: () =>
                  C({
                      user: u,
                      markAsDismissed: c
                  }),
              position: 'left',
              animation: r.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => t
          });
}

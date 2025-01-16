n.d(t, {
    N: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(442837),
    r = n(704215),
    a = n(481060),
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
let C = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, i.jsxs)('div', {
            className: g.assetContainer,
            children: [
                (0, i.jsx)(h.Z, {
                    user: t,
                    rank: 1,
                    avatarSize: a.AvatarSizes.SIZE_56
                }),
                (0, i.jsx)(a.Clickable, {
                    className: g.closeIcon,
                    onClick: () => {
                        n(m.L.USER_DISMISS);
                    },
                    children: (0, i.jsx)(a.XSmallIcon, {
                        color: 'currentColor',
                        size: 'sm'
                    })
                })
            ]
        });
    },
    x = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, i.jsx)(c.ZP, {
            asset: (0, i.jsx)(C, {
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
                color: a.Button.Colors.WHITE,
                look: a.Button.Looks.LINK,
                size: a.Button.Sizes.MIN
            }
        });
    };
function v(e) {
    let { children: t } = e,
        n = [r.z.LEADERBOARD_NUX_COACHMARK],
        [s, c] = (0, o.US)(n, void 0),
        u = (0, l.e7)([d.default], () => d.default.getCurrentUser());
    return s !== r.z.LEADERBOARD_NUX_COACHMARK || null == u
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsx)(a.Popout, {
              renderPopout: () =>
                  x({
                      user: u,
                      markAsDismissed: c
                  }),
              position: 'left',
              animation: a.Popout.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => t
          });
}

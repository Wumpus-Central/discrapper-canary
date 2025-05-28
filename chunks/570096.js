n.d(t, { N: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(782568),
    c = n(243778),
    u = n(970731),
    d = n(594174),
    p = n(63063),
    h = n(69589),
    f = n(981631),
    m = n(921944),
    g = n(388032),
    b = n(201838);
let _ = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsxs)('div', {
            className: b.assetContainer,
            children: [
                (0, r.jsx)(h.Z, {
                    user: t,
                    rank: 1,
                    avatarSize: o.EFr.SIZE_56
                }),
                (0, r.jsx)(o.P3F, {
                    className: b.closeIcon,
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
    x = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsx)(u.ZP, {
            asset: (0, r.jsx)(_, {
                user: t,
                markAsDismissed: n
            }),
            header: g.intl.string(g.t.wAtFS0),
            content: g.intl.string(g.t.qIZICA),
            buttonCTA: g.intl.string(g.t.hvVgAQ),
            onClick: () => {
                (0, s.Z)(p.Z.getArticleURL(f.BhN.GUILD_LEADERBOARD)), n(m.L.USER_DISMISS);
            },
            markAsDismissed: n,
            caretPosition: u.DF.RIGHT_TOP,
            buttonProps: {
                color: o.zxk.Colors.WHITE,
                look: o.zxk.Looks.LINK,
                size: o.zxk.Sizes.MIN
            }
        });
    };
function y(e) {
    let { children: t } = e,
        n = [a.z.LEADERBOARD_NUX_COACHMARK],
        [s, u] = (0, c.US)(n, void 0),
        p = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        h = i.useRef(null);
    return s !== a.z.LEADERBOARD_NUX_COACHMARK || null == p
        ? t
        : (0, r.jsx)(o.yRy, {
              targetElementRef: h,
              renderPopout: () =>
                  x({
                      user: p,
                      markAsDismissed: u
                  }),
              position: 'left',
              animation: o.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () =>
                  (0, r.jsx)('div', {
                      ref: h,
                      children: t
                  })
          });
}

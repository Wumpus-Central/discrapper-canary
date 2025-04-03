n.d(t, { N: () => C }), n(47120);
var r = n(200651),
    i = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(782568),
    s = n(243778),
    c = n(970731),
    u = n(594174),
    d = n(63063),
    p = n(69589),
    h = n(981631),
    f = n(921944),
    m = n(388032),
    g = n(201838);
let b = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsxs)('div', {
            className: g.assetContainer,
            children: [
                (0, r.jsx)(p.Z, {
                    user: t,
                    rank: 1,
                    avatarSize: o.EFr.SIZE_56
                }),
                (0, r.jsx)(o.P3F, {
                    className: g.closeIcon,
                    onClick: () => {
                        n(f.L.USER_DISMISS);
                    },
                    children: (0, r.jsx)(o.Dio, {
                        color: 'currentColor',
                        size: 'sm'
                    })
                })
            ]
        });
    },
    _ = (e) => {
        let { user: t, markAsDismissed: n } = e;
        return (0, r.jsx)(c.ZP, {
            asset: (0, r.jsx)(b, {
                user: t,
                markAsDismissed: n
            }),
            header: m.NW.string(m.t.wAtFS0),
            content: m.NW.string(m.t.qIZICA),
            buttonCTA: m.NW.string(m.t.hvVgAQ),
            onClick: () => {
                (0, a.Z)(d.Z.getArticleURL(h.BhN.GUILD_LEADERBOARD)), n(f.L.USER_DISMISS);
            },
            markAsDismissed: n,
            caretPosition: c.DF.RIGHT_TOP,
            buttonProps: {
                color: o.zxk.Colors.WHITE,
                look: o.zxk.Looks.LINK,
                size: o.zxk.Sizes.MIN
            }
        });
    };
function C(e) {
    let { children: t } = e,
        n = [l.z.LEADERBOARD_NUX_COACHMARK],
        [a, c] = (0, s.US)(n, void 0),
        d = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return a !== l.z.LEADERBOARD_NUX_COACHMARK || null == d
        ? t
        : (0, r.jsx)(o.yRy, {
              renderPopout: () =>
                  _({
                      user: d,
                      markAsDismissed: c
                  }),
              position: 'left',
              animation: o.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => t
          });
}

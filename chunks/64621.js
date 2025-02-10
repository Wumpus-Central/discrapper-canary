n.d(t, { Z: () => C }), n(627341), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(278074),
    s = n(442837),
    o = n(704215),
    l = n(481060),
    u = n(980591),
    c = n(381586),
    d = n(243778),
    f = n(970731),
    _ = n(158776),
    p = n(594174),
    h = n(9161),
    m = n(456644),
    g = n(652853),
    E = n(228168),
    v = n(981631),
    y = n(388032),
    I = n(33742),
    T = n(425637),
    b = n(685741);
let S = 200,
    A = 32,
    N = 30;
function C(e) {
    let { sourceType: t, children: n, user: C } = e,
        { profileType: R } = (0, g.z)(),
        { recentActivityTabEnabled: O } = (0, h.O)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: D, allProfileReactReplyEnabled: L } = (0, m.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        x = (0, s.e7)([p.default], () => {
            var e;
            return (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === C.id;
        }),
        w = (0, s.e7)([_.Z], () =>
            _.Z.findActivity(C.id, (e) => {
                let { type: t } = e;
                return t === v.IIU.CUSTOM_STATUS;
            })
        ),
        P =
            !x &&
            R === E.y0.BITE_SIZE &&
            (0, a.EQ)(t)
                .with(E.n_.AVATAR, () => L && null == w)
                .with(E.n_.STATUS, () => L)
                .with(E.n_.ACTIVITY, () => !L && (O || D))
                .exhaustive(),
        [M, k] = r.useState(!1);
    (0, u.Z)(() => k(!0), P ? S : null);
    let {
            asset: U,
            assetClassName: G,
            className: B,
            content: Z,
            header: F,
            spacing: V,
            dismissibleContentType: j
        } = L
            ? {
                  asset: b,
                  assetClassName: I.profileImage,
                  className: I.profileCoachmark,
                  content: y.intl.string(y.t.HEGlIC),
                  header: y.intl.string(y.t['R/RaKy']),
                  spacing: N,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: T,
                  assetClassName: void 0,
                  className: I.activityCoachmark,
                  content: y.intl.string(y.t.LQ32TU),
                  header: y.intl.string(y.t.XDBiPT),
                  spacing: A,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        H = (0, c.N)(o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        Y = M && !H ? [j] : [],
        [W, K] = (0, d.US)(Y);
    return (0, i.jsx)(l.yRy, {
        align: 'center',
        position: t === E.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != W,
        spacing: V,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: r } = e;
            return (0, i.jsx)(l.VqE, {
                ref: r,
                children: (0, i.jsx)(f.ZP, {
                    className: B,
                    asset: (0, i.jsx)('img', {
                        alt: '',
                        src: U,
                        className: G
                    }),
                    buttonCTA: y.intl.string(y.t['+IrDzM']),
                    buttonLayout: f._F.STACKED,
                    buttonProps: {
                        color: l.Ttl.BRAND_INVERTED,
                        size: l.zxk.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
                    content: (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: Z
                    }),
                    header: F,
                    headerClassName: I.tooltipHeader,
                    markAsDismissed: K,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}

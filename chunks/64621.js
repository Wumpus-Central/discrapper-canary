n.d(t, { Z: () => N }), n(627341), n(47120);
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
    h = n(456644),
    m = n(652853),
    g = n(228168),
    E = n(981631),
    v = n(388032),
    y = n(46510),
    I = n(425637),
    T = n(685741);
let b = 200,
    S = 32,
    A = 30;
function N(e) {
    let { sourceType: t, children: n, user: N } = e,
        { profileType: C } = (0, m.z)(),
        { recentActivityEnabled: R, allProfileReactReplyEnabled: O } = (0, h.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        D = (0, s.e7)([p.default], () => {
            var e;
            return (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === N.id;
        }),
        L = (0, s.e7)([_.Z], () =>
            _.Z.findActivity(N.id, (e) => {
                let { type: t } = e;
                return t === E.IIU.CUSTOM_STATUS;
            })
        ),
        x =
            !D &&
            C === g.y0.BITE_SIZE &&
            (0, a.EQ)(t)
                .with(g.n_.AVATAR, () => O && null == L)
                .with(g.n_.STATUS, () => O)
                .with(g.n_.ACTIVITY, () => !O && R)
                .exhaustive(),
        [P, w] = r.useState(!1);
    (0, u.Z)(() => w(!0), x ? b : null);
    let {
            asset: M,
            assetClassName: k,
            className: U,
            content: G,
            header: B,
            spacing: Z,
            dismissibleContentType: F
        } = O
            ? {
                  asset: T,
                  assetClassName: y.profileImage,
                  className: y.profileCoachmark,
                  content: v.intl.string(v.t.HEGlIC),
                  header: v.intl.string(v.t['R/RaKy']),
                  spacing: A,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: I,
                  assetClassName: void 0,
                  className: y.activityCoachmark,
                  content: v.intl.string(v.t.LQ32TU),
                  header: v.intl.string(v.t.XDBiPT),
                  spacing: S,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        V = (0, c.N)(o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        j = P && !V ? [F] : [],
        [H, Y] = (0, d.US)(j);
    return (0, i.jsx)(l.yRy, {
        align: 'center',
        position: t === g.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != H,
        spacing: Z,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: r } = e;
            return (0, i.jsx)(l.VqE, {
                ref: r,
                children: (0, i.jsx)(f.ZP, {
                    className: U,
                    asset: (0, i.jsx)('img', {
                        alt: '',
                        src: M,
                        className: k
                    }),
                    buttonCTA: v.intl.string(v.t['+IrDzM']),
                    buttonLayout: f._F.STACKED,
                    buttonProps: {
                        color: l.Ttl.BRAND_INVERTED,
                        size: l.zxk.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
                    content: (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: G
                    }),
                    header: B,
                    headerClassName: y.tooltipHeader,
                    markAsDismissed: Y,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}

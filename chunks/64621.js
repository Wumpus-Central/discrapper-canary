n.d(t, { Z: () => N }), n(627341), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(278074),
    a = n(442837),
    s = n(704215),
    l = n(481060),
    c = n(980591),
    u = n(381586),
    d = n(243778),
    f = n(970731),
    p = n(158776),
    _ = n(594174),
    h = n(456644),
    m = n(652853),
    g = n(228168),
    E = n(981631),
    v = n(388032),
    b = n(103428),
    y = n(425637),
    O = n(685741);
let S = 200,
    I = 32,
    T = 30;
function N(e) {
    let { sourceType: t, children: n, user: N } = e,
        { profileType: A } = (0, m.z)(),
        { recentActivityEnabled: C, allProfileReactReplyEnabled: R } = (0, h.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        P = (0, a.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === N.id;
        }),
        w = (0, a.e7)([p.Z], () =>
            p.Z.findActivity(N.id, (e) => {
                let { type: t } = e;
                return t === E.IIU.CUSTOM_STATUS;
            })
        ),
        D =
            !P &&
            A === g.y0.BITE_SIZE &&
            (0, o.EQ)(t)
                .with(g.n_.AVATAR, () => R && null == w)
                .with(g.n_.STATUS, () => R)
                .with(g.n_.ACTIVITY, () => !R && C)
                .exhaustive(),
        [x, L] = i.useState(!1);
    (0, c.Z)(() => L(!0), D ? S : null);
    let {
            asset: M,
            assetClassName: k,
            className: j,
            content: U,
            header: G,
            spacing: B,
            dismissibleContentType: Z
        } = R
            ? {
                  asset: O,
                  assetClassName: b.profileImage,
                  className: b.profileCoachmark,
                  content: v.NW.string(v.t.HEGlIC),
                  header: v.NW.string(v.t['R/RaKy']),
                  spacing: T,
                  dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: y,
                  assetClassName: void 0,
                  className: b.activityCoachmark,
                  content: v.NW.string(v.t.LQ32TU),
                  header: v.NW.string(v.t.XDBiPT),
                  spacing: I,
                  dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        F = (0, u.N)(s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        V = x && !F ? [Z] : [],
        [H, W] = (0, d.US)(V);
    return (0, r.jsx)(l.yRy, {
        align: 'center',
        position: t === g.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != H,
        spacing: B,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(l.VqE, {
                ref: i,
                children: (0, r.jsx)(f.ZP, {
                    className: j,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: M,
                        className: k
                    }),
                    buttonCTA: v.NW.string(v.t['+IrDzM']),
                    buttonLayout: f._F.STACKED,
                    buttonProps: {
                        color: l.Ttl.BRAND_INVERTED,
                        size: l.zxk.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: U
                    }),
                    header: G,
                    headerClassName: b.tooltipHeader,
                    markAsDismissed: W,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}

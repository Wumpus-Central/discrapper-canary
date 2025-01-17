r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(627341);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(278074),
    u = r(442837),
    c = r(704215),
    d = r(481060),
    f = r(980591),
    _ = r(381586),
    h = r(243778),
    p = r(970731),
    m = r(158776),
    g = r(594174),
    E = r(9161),
    v = r(456644),
    I = r(652853),
    T = r(228168),
    b = r(981631),
    y = r(388032),
    S = r(493248),
    A = r(425637),
    N = r(685741);
let C = 200,
    R = 32,
    O = 30;
function D(e) {
    let { sourceType: n, children: r, user: i } = e,
        { profileType: a } = (0, I.z)(),
        { recentActivityTabEnabled: D } = (0, E.O)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: L, allProfileReactReplyEnabled: x } = (0, v.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        w = (0, u.e7)([g.default], () => {
            var e;
            return (null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id;
        }),
        P = (0, u.e7)([m.Z], () =>
            m.Z.findActivity(i.id, (e) => {
                let { type: n } = e;
                return n === b.IIU.CUSTOM_STATUS;
            })
        ),
        M =
            !w &&
            a === T.y0.BITE_SIZE &&
            (0, l.EQ)(n)
                .with(T.n_.AVATAR, () => x && null == P)
                .with(T.n_.STATUS, () => x)
                .with(T.n_.ACTIVITY, () => !x && (D || L))
                .exhaustive(),
        [k, U] = o.useState(!1);
    (0, f.Z)(() => U(!0), M ? C : null);
    let {
            asset: B,
            assetClassName: G,
            className: Z,
            content: F,
            header: V,
            spacing: j,
            dismissibleContentType: H
        } = x
            ? {
                  asset: N,
                  assetClassName: S.profileImage,
                  className: S.profileCoachmark,
                  content: y.intl.string(y.t.HEGlIC),
                  header: y.intl.string(y.t['R/RaKy']),
                  spacing: O,
                  dismissibleContentType: c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: A,
                  assetClassName: void 0,
                  className: S.activityCoachmark,
                  content: y.intl.string(y.t.LQ32TU),
                  header: y.intl.string(y.t.XDBiPT),
                  spacing: R,
                  dismissibleContentType: c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        Y = (0, _.N)(c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        W = k && !Y ? [H] : [],
        [K, z] = (0, h.US)(W);
    return (0, s.jsx)(d.Popout, {
        align: 'center',
        position: n === T.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != K,
        spacing: j,
        renderPopout: (e) => {
            let { position: n, closePopout: r, setPopoutRef: i } = e;
            return (0, s.jsx)(d.Dialog, {
                ref: i,
                children: (0, s.jsx)(p.ZP, {
                    className: Z,
                    asset: (0, s.jsx)('img', {
                        alt: '',
                        src: B,
                        className: G
                    }),
                    buttonCTA: y.intl.string(y.t['+IrDzM']),
                    buttonLayout: p._F.STACKED,
                    buttonProps: {
                        color: d.ButtonColors.BRAND_INVERTED,
                        size: d.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === n ? p.DF.LEFT_CENTER : p.DF.RIGHT_CENTER,
                    content: (0, s.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: F
                    }),
                    header: V,
                    headerClassName: S.tooltipHeader,
                    markAsDismissed: z,
                    onClick: r
                })
            });
        },
        children: () => r
    });
}

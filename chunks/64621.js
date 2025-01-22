r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(627341);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(278074),
    u = r(442837),
    c = r(704215),
    d = r(481060),
    f = r(980591),
    p = r(381586),
    h = r(243778),
    _ = r(970731),
    m = r(158776),
    g = r(594174),
    E = r(9161),
    v = r(456644),
    y = r(652853),
    b = r(228168),
    I = r(981631),
    T = r(388032),
    S = r(493248),
    A = r(425637),
    C = r(685741);
let N = 200,
    R = 32,
    O = 30;
function D(e) {
    let { sourceType: n, children: r, user: i } = e,
        { profileType: a } = (0, y.z)(),
        { recentActivityTabEnabled: D } = (0, E.O)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: x, allProfileReactReplyEnabled: L } = (0, v.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        w = (0, u.e7)([g.default], () => {
            var e;
            return (null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id;
        }),
        P = (0, u.e7)([m.Z], () =>
            m.Z.findActivity(i.id, (e) => {
                let { type: n } = e;
                return n === I.IIU.CUSTOM_STATUS;
            })
        ),
        M =
            !w &&
            a === b.y0.BITE_SIZE &&
            (0, l.EQ)(n)
                .with(b.n_.AVATAR, () => L && null == P)
                .with(b.n_.STATUS, () => L)
                .with(b.n_.ACTIVITY, () => !L && (D || x))
                .exhaustive(),
        [k, U] = s.useState(!1);
    (0, f.Z)(() => U(!0), M ? N : null);
    let {
            asset: B,
            assetClassName: G,
            className: Z,
            content: F,
            header: V,
            spacing: j,
            dismissibleContentType: H
        } = L
            ? {
                  asset: C,
                  assetClassName: S.profileImage,
                  className: S.profileCoachmark,
                  content: T.intl.string(T.t.HEGlIC),
                  header: T.intl.string(T.t['R/RaKy']),
                  spacing: O,
                  dismissibleContentType: c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: A,
                  assetClassName: void 0,
                  className: S.activityCoachmark,
                  content: T.intl.string(T.t.LQ32TU),
                  header: T.intl.string(T.t.XDBiPT),
                  spacing: R,
                  dismissibleContentType: c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        Y = (0, p.N)(c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        W = k && !Y ? [H] : [],
        [K, z] = (0, h.US)(W);
    return (0, o.jsx)(d.Popout, {
        align: 'center',
        position: n === b.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != K,
        spacing: j,
        renderPopout: (e) => {
            let { position: n, closePopout: r, setPopoutRef: i } = e;
            return (0, o.jsx)(d.Dialog, {
                ref: i,
                children: (0, o.jsx)(_.ZP, {
                    className: Z,
                    asset: (0, o.jsx)('img', {
                        alt: '',
                        src: B,
                        className: G
                    }),
                    buttonCTA: T.intl.string(T.t['+IrDzM']),
                    buttonLayout: _._F.STACKED,
                    buttonProps: {
                        color: d.ButtonColors.BRAND_INVERTED,
                        size: d.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === n ? _.DF.LEFT_CENTER : _.DF.RIGHT_CENTER,
                    content: (0, o.jsx)(d.Text, {
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

r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(704215),
    u = r(481060),
    c = r(980591),
    d = r(381586),
    f = r(243778),
    _ = r(970731),
    h = r(594174),
    p = r(9161),
    m = r(490231),
    g = r(456644),
    E = r(652853),
    v = r(228168),
    I = r(388032),
    T = r(493248),
    b = r(425637),
    y = r(685741);
let S = 200,
    A = 32,
    N = 30;
function C(e) {
    return e
        ? {
              asset: y,
              assetClassName: T.profileImage,
              className: T.profileCoachmark,
              content: I.intl.string(I.t.HEGlIC),
              header: I.intl.string(I.t['R/RaKy']),
              spacing: N,
              dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
          }
        : {
              asset: b,
              assetClassName: void 0,
              className: T.activityCoachmark,
              content: I.intl.string(I.t.LQ32TU),
              header: I.intl.string(I.t.XDBiPT),
              spacing: A,
              dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
          };
}
function R(e) {
    let { sourceType: n, children: r, user: i } = e,
        { profileType: b } = (0, E.z)(),
        { fadeInAndOutEnabled: y } = (0, m.o)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityTabEnabled: A } = (0, p.O)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: N, allProfileReactReplyEnabled: R } = (0, g.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        O = (0, o.e7)([h.default], () => {
            var e;
            return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id;
        }),
        D = (n === v.n_.AVATAR || n === v.n_.STATUS) && (y || R),
        L = n === v.n_.ACTIVITY && (y || A || N),
        x = !O && b === v.y0.BITE_SIZE && (D || L),
        [w, P] = s.useState(!1);
    (0, c.Z)(() => P(!0), x ? S : null);
    let { asset: M, assetClassName: k, className: U, content: B, header: G, spacing: F, dismissibleContentType: Z } = C(D),
        V = (0, d.N)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        j = w && !V ? [Z] : [],
        [H, Y] = (0, f.US)(j);
    return (0, a.jsx)(u.Popout, {
        align: 'center',
        position: n === v.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != H,
        spacing: F,
        renderPopout: (e) => {
            let { position: n, closePopout: r, setPopoutRef: i } = e;
            return (0, a.jsx)(u.Dialog, {
                ref: i,
                children: (0, a.jsx)(_.ZP, {
                    className: U,
                    asset: (0, a.jsx)('img', {
                        alt: '',
                        src: M,
                        className: k
                    }),
                    buttonCTA: I.intl.string(I.t['+IrDzM']),
                    buttonLayout: _._F.STACKED,
                    buttonProps: {
                        color: u.ButtonColors.BRAND_INVERTED,
                        size: u.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === n ? _.DF.LEFT_CENTER : _.DF.RIGHT_CENTER,
                    content: (0, a.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: B
                    }),
                    header: G,
                    headerClassName: T.tooltipHeader,
                    markAsDismissed: Y,
                    onClick: r
                })
            });
        },
        children: () => r
    });
}

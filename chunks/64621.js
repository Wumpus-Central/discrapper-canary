r.d(n, {
    Z: function () {
        return C;
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
    m = r(456644),
    g = r(652853),
    E = r(228168),
    v = r(388032),
    I = r(493248),
    T = r(425637),
    b = r(685741);
let y = 200,
    S = 32,
    A = 30;
function N(e) {
    return e
        ? {
              asset: b,
              assetClassName: I.profileImage,
              className: I.profileCoachmark,
              content: v.intl.string(v.t.HEGlIC),
              header: v.intl.string(v.t['R/RaKy']),
              spacing: A,
              dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
          }
        : {
              asset: T,
              assetClassName: void 0,
              className: I.activityCoachmark,
              content: v.intl.string(v.t.LQ32TU),
              header: v.intl.string(v.t.XDBiPT),
              spacing: S,
              dismissibleContentType: l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
          };
}
function C(e) {
    let { sourceType: n, children: r, user: i } = e,
        { profileType: T } = (0, g.z)(),
        { recentActivityTabEnabled: b } = (0, p.O)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        { recentActivityEnabled: S, allProfileReactReplyEnabled: A } = (0, m.i)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        C = (0, o.e7)([h.default], () => {
            var e;
            return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id;
        }),
        R = (n === E.n_.AVATAR || n === E.n_.STATUS) && A,
        O = n === E.n_.ACTIVITY && (b || S),
        D = !C && T === E.y0.BITE_SIZE && (R || O),
        [L, x] = s.useState(!1);
    (0, c.Z)(() => x(!0), D ? y : null);
    let { asset: w, assetClassName: P, className: M, content: k, header: U, spacing: B, dismissibleContentType: G } = N(R),
        F = (0, d.N)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        Z = L && !F ? [G] : [],
        [V, j] = (0, f.US)(Z);
    return (0, a.jsx)(u.Popout, {
        align: 'center',
        position: n === E.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != V,
        spacing: B,
        renderPopout: (e) => {
            let { position: n, closePopout: r, setPopoutRef: i } = e;
            return (0, a.jsx)(u.Dialog, {
                ref: i,
                children: (0, a.jsx)(_.ZP, {
                    className: M,
                    asset: (0, a.jsx)('img', {
                        alt: '',
                        src: w,
                        className: P
                    }),
                    buttonCTA: v.intl.string(v.t['+IrDzM']),
                    buttonLayout: _._F.STACKED,
                    buttonProps: {
                        color: u.ButtonColors.BRAND_INVERTED,
                        size: u.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === n ? _.DF.LEFT_CENTER : _.DF.RIGHT_CENTER,
                    content: (0, a.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: k
                    }),
                    header: U,
                    headerClassName: I.tooltipHeader,
                    markAsDismissed: j,
                    onClick: r
                })
            });
        },
        children: () => r
    });
}

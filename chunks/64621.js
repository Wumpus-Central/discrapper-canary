n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    l = n(980591),
    c = n(381586),
    u = n(243778),
    d = n(970731),
    f = n(158776),
    _ = n(594174),
    p = n(81570),
    h = n(652853),
    m = n(228168),
    g = n(981631),
    E = n(388032),
    b = n(185467),
    y = n(425637),
    v = n(685741);
let O = 200,
    I = 32,
    S = 30;
function T(e) {
    let { sourceType: t, children: n, user: T } = e,
        { profileType: N } = (0, h.z)(),
        A = (0, p.T)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        C = (0, o.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.id) === T.id;
        }),
        R = (0, o.e7)([f.Z], () =>
            f.Z.findActivity(T.id, (e) => {
                let { type: t } = e;
                return t === g.IIU.CUSTOM_STATUS;
            })
        ),
        P = () => !C && N === m.y0.BITE_SIZE && (t === m.n_.AVATAR ? A && null == R : t === m.n_.STATUS ? A : t === m.n_.ACTIVITY && !A),
        [w, D] = i.useState(!1);
    (0, l.Z)(() => D(!0), P() ? O : null);
    let {
            asset: L,
            assetClassName: x,
            className: M,
            content: k,
            header: j,
            spacing: U,
            dismissibleContentType: G
        } = A
            ? {
                  asset: v,
                  assetClassName: b.profileImage,
                  className: b.profileCoachmark,
                  content: E.NW.string(E.t.HEGlIC),
                  header: E.NW.string(E.t['R/RaKy']),
                  spacing: S,
                  dismissibleContentType: a.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: y,
                  assetClassName: void 0,
                  className: b.activityCoachmark,
                  content: E.NW.string(E.t.LQ32TU),
                  header: E.NW.string(E.t.XDBiPT),
                  spacing: I,
                  dismissibleContentType: a.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        B = (0, c.N)(a.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        F = w && !B ? [G] : [],
        [V, Z] = (0, u.US)(F);
    return (0, r.jsx)(s.yRy, {
        align: 'center',
        position: t === m.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != V,
        spacing: U,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(s.VqE, {
                ref: (e) => {
                    null == i || i(e);
                },
                children: (0, r.jsx)(d.ZP, {
                    className: M,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: L,
                        className: x
                    }),
                    buttonCTA: E.NW.string(E.t['+IrDzM']),
                    buttonLayout: d._F.STACKED,
                    buttonProps: {
                        color: s.Ttl.BRAND_INVERTED,
                        size: s.zxk.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: k
                    }),
                    header: j,
                    headerClassName: b.tooltipHeader,
                    markAsDismissed: Z,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}

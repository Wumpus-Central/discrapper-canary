(n.d(t, { Z: () => A }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(704215),
    s = n(755721),
    l = n(481060),
    c = n(980591),
    u = n(266454),
    d = n(243778),
    f = n(970731),
    _ = n(158776),
    p = n(594174),
    h = n(81570),
    m = n(652853),
    g = n(228168),
    E = n(981631),
    b = n(388032),
    y = n(185467),
    O = n(425637),
    v = n(685741);
let I = 200,
    T = 32,
    S = 30;
function A(e) {
    let { sourceType: t, children: n, user: A, targetElementRef: N } = e,
        { themeType: C } = (0, m.z)(),
        R = (0, h.T)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        P = (0, a.e7)([p.default], () => {
            var e;
            return (null == (e = p.default.getCurrentUser()) ? void 0 : e.id) === A.id;
        }),
        w = (0, a.e7)([_.Z], () =>
            _.Z.findActivity(A.id, (e) => {
                let { type: t } = e;
                return t === E.IIU.CUSTOM_STATUS;
            })
        ),
        D = () => !P && C === g.lY.POPOUT && (t === g.n_.AVATAR ? R && null == w : t === g.n_.STATUS ? R : t === g.n_.ACTIVITY && !R),
        [L, x] = i.useState(!1);
    (0, c.Z)(() => x(!0), D() ? I : null);
    let {
            asset: k,
            assetClassName: M,
            className: j,
            content: U,
            header: G,
            spacing: B,
            dismissibleContentType: V
        } = R
            ? {
                  asset: v,
                  assetClassName: y.profileImage,
                  className: y.profileCoachmark,
                  content: b.intl.string(b.t.HEGlIC),
                  header: b.intl.string(b.t['R/RaKy']),
                  spacing: S,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: O,
                  assetClassName: void 0,
                  className: y.activityCoachmark,
                  content: b.intl.string(b.t.LQ32TU),
                  header: b.intl.string(b.t.XDBiPT),
                  spacing: T,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        F = (0, u.Nj)(o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        Z = L && !F ? [V] : [],
        [H, Y] = (0, d.US)(Z);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: N,
        align: 'center',
        position: t === g.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != H,
        spacing: B,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(l.VqE, {
                ref: (e) => {
                    null == i || i(e);
                },
                children: (0, r.jsx)(f.ZP, {
                    className: j,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: k,
                        className: M
                    }),
                    buttonCTA: b.intl.string(b.t['+IrDzM']),
                    buttonLayout: f._F.STACKED,
                    buttonProps: {
                        color: s.Tt.BRAND_INVERTED,
                        size: s.zx.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: U
                    }),
                    header: G,
                    headerClassName: y.tooltipHeader,
                    markAsDismissed: Y,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}

n.d(t, { Z: () => T }), n(388685);
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
    O = n(685741);
let v = 200,
    I = 32,
    S = 30;
function T(e) {
    let { sourceType: t, children: n, user: T, targetElementRef: A } = e,
        { themeType: N } = (0, h.z)(),
        C = (0, p.T)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        R = (0, o.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.id) === T.id;
        }),
        P = (0, o.e7)([f.Z], () =>
            f.Z.findActivity(T.id, (e) => {
                let { type: t } = e;
                return t === g.IIU.CUSTOM_STATUS;
            })
        ),
        w = () => !R && N === m.lY.POPOUT && (t === m.n_.AVATAR ? C && null == P : t === m.n_.STATUS ? C : t === m.n_.ACTIVITY && !C),
        [D, L] = i.useState(!1);
    (0, l.Z)(() => L(!0), w() ? v : null);
    let {
            asset: x,
            assetClassName: M,
            className: k,
            content: j,
            header: U,
            spacing: G,
            dismissibleContentType: B
        } = C
            ? {
                  asset: O,
                  assetClassName: b.profileImage,
                  className: b.profileCoachmark,
                  content: E.intl.string(E.t.HEGlIC),
                  header: E.intl.string(E.t['R/RaKy']),
                  spacing: S,
                  dismissibleContentType: a.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
              }
            : {
                  asset: y,
                  assetClassName: void 0,
                  className: b.activityCoachmark,
                  content: E.intl.string(E.t.LQ32TU),
                  header: E.intl.string(E.t.XDBiPT),
                  spacing: I,
                  dismissibleContentType: a.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
              },
        V = (0, c.N)(a.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        F = D && !V ? [B] : [],
        [Z, H] = (0, u.US)(F);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: A,
        align: 'center',
        position: t === m.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != Z,
        spacing: G,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(s.VqE, {
                ref: (e) => {
                    null == i || i(e);
                },
                children: (0, r.jsx)(d.ZP, {
                    className: k,
                    asset: (0, r.jsx)('img', {
                        alt: '',
                        src: x,
                        className: M
                    }),
                    buttonCTA: E.intl.string(E.t['+IrDzM']),
                    buttonLayout: d._F.STACKED,
                    buttonProps: {
                        color: s.Ttl.BRAND_INVERTED,
                        size: s.zxk.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: j
                    }),
                    header: U,
                    headerClassName: b.tooltipHeader,
                    markAsDismissed: H,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}

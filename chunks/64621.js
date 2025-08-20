n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
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
    b = n(671955),
    y = n(388032),
    O = n(705738),
    v = n(425637),
    I = n(685741);
let T = 200,
    S = 32,
    A = 30;
function C(e) {
    let { sourceType: t, children: n, user: C, targetElementRef: N } = e,
        { themeType: R } = (0, m.z)(),
        P = (0, h.T)({ location: "UserProfilePopoutInteractionCoachmark" }),
        w = (0, a.e7)([p.default], () => {
            var e;
            return (null == (e = p.default.getCurrentUser()) ? void 0 : e.id) === C.id;
        }),
        D = (0, a.e7)([_.Z], () =>
            _.Z.findActivity(C.id, (e) => {
                let { type: t } = e;
                return t === E.IIU.CUSTOM_STATUS;
            }),
        ),
        x = () =>
            !w &&
            R === b.l.POPOUT &&
            (t === g.n_.AVATAR ? P && null == D : t === g.n_.STATUS ? P : t === g.n_.ACTIVITY && !P),
        [L, j] = i.useState(!1);
    (0, c.Z)(() => j(!0), x() ? T : null);
    let {
            asset: M,
            assetClassName: k,
            className: U,
            content: G,
            header: B,
            spacing: Z,
            dismissibleContentType: V,
        } = P
            ? {
                  asset: I,
                  assetClassName: O.profileImage,
                  className: O.profileCoachmark,
                  content: y.intl.string(y.t.HEGlIC),
                  header: y.intl.string(y.t["R/RaKy"]),
                  spacing: A,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL,
              }
            : {
                  asset: v,
                  assetClassName: void 0,
                  className: O.activityCoachmark,
                  content: y.intl.string(y.t.LQ32TU),
                  header: y.intl.string(y.t.XDBiPT),
                  spacing: S,
                  dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY,
              },
        F = (0, u.Nj)(o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK),
        H = L && !F ? [V] : [],
        [Y, W] = (0, d.US)(H);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: N,
        align: "center",
        position: t === g.n_.AVATAR ? "left" : "right",
        shouldShow: null != Y,
        spacing: Z,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: i } = e;
            return (0, r.jsx)(l.VqE, {
                ref: (e) => {
                    null == i || i(e);
                },
                children: (0, r.jsx)(f.ZP, {
                    className: U,
                    asset: (0, r.jsx)("img", {
                        alt: "",
                        src: M,
                        className: k,
                    }),
                    buttonCTA: y.intl.string(y.t["+IrDzM"]),
                    buttonLayout: f._F.STACKED,
                    buttonProps: {
                        color: s.Tt.BRAND_INVERTED,
                        size: s.zx.Sizes.SMALL,
                    },
                    caretPosition: "right" === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
                    content: (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: G,
                    }),
                    header: B,
                    headerClassName: O.tooltipHeader,
                    markAsDismissed: W,
                    onClick: n,
                }),
            });
        },
        children: () => n,
    });
}

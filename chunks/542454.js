t.d(n, { A: () => x });
var l = t(627968),
    i = t(64700),
    r = t(33851),
    a = t.n(r),
    s = t(311907),
    o = t(827734),
    d = t(602853),
    u = t(654107),
    c = t(101058),
    g = t(84540),
    A = t(836602),
    m = t(950191),
    f = t(101928),
    p = t(548612);
function x(e) {
    let { user: n, guildId: t, disabled: r = !1 } = e,
        x = (0, m.Ay)(n.id, t),
        { pendingThemeColors: h, pendingAvatar: v } = (0, s.cf)([A.A], () => {
            let e = A.A.getPendingChanges(t ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        j = (0, c.V7)({ userId: n.id, image: v }),
        { primaryColor: I, secondaryColor: b } = (0, f.A)({
            user: n,
            displayProfile: x,
            pendingThemeColors: h,
            pendingAvatarSrc: j ?? void 0,
            isPreview: !0,
        }),
        C = (0, d.r)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        N = null != j ? j : n.getAvatarURL(t ?? void 0, 80),
        y = (0, u.rh)(N, C, !1),
        E = i.useCallback(
            (e) => {
                let n = a()(e, x?.themeColors);
                (0, g.p)({ guildId: t ?? void 0, themeColors: n ? void 0 : e });
            },
            [x?.themeColors, t],
        );
    return null == I || null == b
        ? null
        : (0, l.jsx)(p.A, {
              primaryColor: I,
              secondaryColor: b,
              onSelectPrimaryColor: (e) => {
                  e !== I && E([e, b]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== b && E([I, e]);
              },
              suggestedColors: y,
              disabled: r,
          });
}

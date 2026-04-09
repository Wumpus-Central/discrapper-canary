n.d(l, { A: () => f });
var t = n(627968),
    i = n(64700),
    s = n(33851),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(397927),
    c = n(654107),
    u = n(101058),
    m = n(84540),
    x = n(836602),
    p = n(950191),
    A = n(101928),
    g = n(548612);
function f(e) {
    let { user: l, guildId: n, disabled: s = !1 } = e,
        f = (0, p.Ay)(l.id, n),
        { pendingThemeColors: h, pendingAvatar: j } = (0, r.cf)([x.A], () => {
            let e = x.A.getPendingChanges(n ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        v = (0, u.V7)({ userId: l.id, image: j }),
        { primaryColor: I, secondaryColor: N } = (0, A.A)({
            user: l,
            displayProfile: f,
            pendingThemeColors: h,
            pendingAvatarSrc: v ?? void 0,
            isPreview: !0,
        }),
        y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        C = null != v ? v : l.getAvatarURL(n ?? void 0, 80),
        E = (0, c.rh)(C, y, !1),
        T = i.useCallback(
            (e) => {
                let l = a()(e, f?.themeColors);
                (0, m.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [f?.themeColors, n],
        );
    return null == I || null == N
        ? null
        : (0, t.jsx)(g.A, {
              primaryColor: I,
              secondaryColor: N,
              onSelectPrimaryColor: (e) => {
                  e !== I && T([e, N]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== N && T([I, e]);
              },
              suggestedColors: E,
              disabled: s,
          });
}

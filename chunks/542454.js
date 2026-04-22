l.d(n, { A: () => x });
var t = l(627968),
    i = l(64700),
    r = l(33851),
    s = l.n(r),
    a = l(311907),
    o = l(827734),
    d = l(602853),
    c = l(654107),
    u = l(101058),
    g = l(84540),
    A = l(836602),
    m = l(950191),
    f = l(101928),
    p = l(548612);
function x(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        x = (0, m.Ay)(n.id, l),
        { pendingThemeColors: h, pendingAvatar: v } = (0, a.cf)([A.A], () => {
            let e = A.A.getPendingChanges(l ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        j = (0, u.V7)({ userId: n.id, image: v }),
        { primaryColor: I, secondaryColor: b } = (0, f.A)({
            user: n,
            displayProfile: x,
            pendingThemeColors: h,
            pendingAvatarSrc: j ?? void 0,
            isPreview: !0,
        }),
        C = (0, d.r)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        N = null != j ? j : n.getAvatarURL(l ?? void 0, 80),
        y = (0, c.rh)(N, C, !1),
        E = i.useCallback(
            (e) => {
                let n = s()(e, x?.themeColors);
                (0, g.p)({ guildId: l ?? void 0, themeColors: n ? void 0 : e });
            },
            [x?.themeColors, l],
        );
    return null == I || null == b
        ? null
        : (0, t.jsx)(p.A, {
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

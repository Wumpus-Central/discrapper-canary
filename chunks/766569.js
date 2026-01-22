n.d(t, {
    A: () => V,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(974544),
    d = n(793574),
    f = n(58149),
    p = n(688810),
    _ = n(550111),
    h = n(919395),
    m = n(884546),
    g = n(287070),
    E = n(101058),
    b = n(622543),
    y = n(696451),
    O = n(351906),
    A = n(287809),
    v = n(975571),
    S = n(927578),
    I = n(159001),
    T = n(833336),
    C = n(65767),
    N = n(281052),
    R = n(687021),
    w = n(652215),
    P = n(985018),
    D = n(764121);

function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}

function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = U(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function G(e) {
    (0, l.mMO)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) =>
            (0, r.jsx)(
                t,
                L(
                    {
                        source: M(L({}, e), {
                            page: w.liQ.GUILD_MEMBER_PROFILE_SETTINGS,
                        }),
                    },
                    n,
                ),
            );
    });
}

function V(e) {
    var t, n;
    let { selectedGuild: a } = e,
        { analyticsLocations: x } = (0, p.Ay)(d.A.USER_SETTINGS_GUILD_PROFILE),
        j = (0, o.bG)([A.default], () => {
            let e = A.default.getCurrentUser();
            return s()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        U = (0, o.bG)([y.Ay], () => (null != a ? y.Ay.getMember(a.id, j.id) : null)),
        V = (0, o.bG)([b.A], () => !b.A.isFetchingProfile(j.id, null == a ? void 0 : a.id)),
        F = (0, o.bG)([O.A], () => O.A.hidePersonalInformation),
        B = (0, o.cf)([T.A], () =>
            M(L({}, T.A.getAllPending()), {
                source: T.A.getSource(),
            }),
        ),
        { source: H, pendingAvatar: Y, pendingNameplate: W } = B,
        K = k(B, ["source", "pendingAvatar", "pendingNameplate"]),
        z = (0, E.V7)({
            userId: j.id,
            image: Y,
        }),
        q = (0, h.lw)({
            pendingValue: W,
            userValue: null == j || null == (t = j.collectibles) ? void 0 : t.nameplate,
            guildValue: null == U || null == (n = U.collectibles) ? void 0 : n.nameplate,
            guildId: null == a ? void 0 : a.id,
        }),
        { pendingDisplayNameStyles: X } = (0, h.B0)(j, null == a ? void 0 : a.id);
    return (i.useEffect(() => () => c.h.wait(I.IM), []),
    i.useEffect(() => {
        null != H &&
            f.Ay.trackWithMetadata(w.HAw.SETTINGS_PANE_VIEWED, {
                settings_type: "guild",
                destination_pane: w.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                source: H,
            });
    }, [H]),
    F)
        ? (0, r.jsx)(u.A, {})
        : V
          ? (0, r.jsxs)(p.f5, {
                value: x,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.format(P.t["/PTB2E"], {
                            helpCenterLink: v.A.getArticleURL(w.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != a
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(R.A, {
                                      guildId: a.id,
                                      onChange: (e) => {
                                          null != e && (0, I.JJ)(e);
                                      },
                                  }),
                                  (0, r.jsx)(m.A, {
                                      profilePreviewTitle: (0, r.jsx)(l.Heading, {
                                          variant: "heading-md/medium",
                                          className: D.Y,
                                          children: P.intl.formatToPlainString(P.t.Tc0slG, {
                                              guildName: null == a ? void 0 : a.name,
                                          }),
                                      }),
                                      profilePreview: (0, r.jsx)(
                                          g.A,
                                          M(L({}, K), {
                                              pendingAvatar: z,
                                              pendingDisplayNameStyles: X,
                                              user: j,
                                              guild: a,
                                              canUsePremiumCustomization: S.Ay.canUsePremiumProfileCustomization(j),
                                              onUpsellClick: G,
                                          }),
                                      ),
                                      nameplatePreview: (0, r.jsx)(
                                          _.A,
                                          M(L({}, K), {
                                              pendingDisplayNameStyles: X,
                                              user: j,
                                              guildId: null == a ? void 0 : a.id,
                                              nameplate: q,
                                              className: null == q ? D.t : void 0,
                                              isHighlighted: !0,
                                          }),
                                      ),
                                      children: (0, r.jsx)(N.A, {}),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(C.A, {}),
                ],
            })
          : (0, r.jsx)(l.y$y, {});
}

t.d(l, { A: () => Z, M: () => K }), t(938796);
var n = t(477900),
    i = t(582128),
    s = t(503698),
    r = t.n(s),
    a = t(821418),
    u = t(665260),
    c = t(17928),
    o = t(778712),
    m = t(834730),
    d = t(331322),
    g = t(854378),
    x = t(47167),
    h = t(573435),
    j = t(769015),
    p = t(714991),
    f = t(625903),
    _ = t(95477),
    v = t(539895),
    A = t(844330),
    E = t(885386),
    N = t(750994),
    S = t(174459),
    y = t(960736),
    T = t(652215),
    C = t(375708),
    I = t(319514);
function b() {
    return (0, n.jsx)("div", { className: I.m });
}
function k(e) {
    let { label: l, children: t } = e;
    return (0, n.jsxs)(d.B, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: l }), t],
    });
}
function F(e) {
    let { label: l, checked: t, onChange: i } = e;
    return (0, n.jsxs)(d.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, n.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: l }),
            (0, n.jsx)(N.Ay, { value: t, onChange: i, title: "" }),
        ],
    });
}
function P() {
    let e = E.tz.useSetting(),
        {
            nickname: l,
            dmsAllowed: t,
            showActivity: s,
            setNickname: r,
            setDmsAllowed: a,
            setShowActivity: u,
            guildId: c,
            inviteCode: o,
        } = (0, y.lD)(),
        m = v.A.getProps().invite?.is_nickname_changeable,
        d = i.useCallback(() => {
            S.default.track(T.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: c, invite_code: o });
        }, [c, o]);
    return (0, n.jsxs)(A.A, {
        icon: (0, n.jsx)(f.SettingsIcon, { size: "refresh_sm" }),
        title: C.intl.string(C.t["A5wHQ/"]),
        subtitle: C.intl.string(C.t.UKCSEd),
        onOpen: d,
        maxHeight: m ? 220 : 130,
        children: [
            m &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(k, {
                            label: C.intl.string(C.t.me1lRk),
                            children: (0, n.jsx)(_.k, {
                                placeholder: C.intl.string(C.t["09Q8yp"]),
                                maxLength: T.d0r,
                                value: l,
                                onChange: r,
                            }),
                        }),
                        (0, n.jsx)(b, {}),
                    ],
                }),
            (0, n.jsx)(F, { label: C.intl.string(C.t["/2ed37"]), checked: t, onChange: a }),
            (0, n.jsx)(b, {}),
            e && (0, n.jsx)(F, { label: C.intl.string(C.t.bN4m1G), checked: s, onChange: u }),
        ],
    });
}
var z = t(897288),
    D = t(395671),
    L = t(95701),
    R = t(889227),
    w = t(287809),
    M = t(149790),
    U = t(427262),
    $ = t(330936),
    B = t(172799),
    G = t(833303);
function K() {
    return (0, n.jsxs)(i.Fragment, {
        children: [
            (0, n.jsx)(g.eu, { src: null, size: o._3.DEPRECATED_SIZE_100, className: G.my }),
            (0, n.jsx)(g.tK, { children: C.intl.string(C.t["3rE1P8"]) }),
            (0, n.jsx)(g.hE, { className: G.RG, children: C.intl.string(C.t.ZTNur7) }),
        ],
    });
}
function O(e) {
    let { guild: l, user: t, application: i, compact: s } = e;
    return null != i
        ? (0, n.jsx)(j.A, { className: G.Z2, game: i, size: G.q6 })
        : null != t
          ? (0, n.jsx)(g.eu, {
                src: null != t ? t.getAvatarURL(void 0, 80) : null,
                size: o._3.SIZE_80,
                className: s ? void 0 : G.my,
            })
          : null != l
            ? (0, n.jsx)(h.Ay, {
                  mask: h.Ay.Masks.SQUIRCLE,
                  width: 64,
                  height: 64,
                  className: G.$f,
                  children: (0, n.jsx)(g.$v, { guild: l, size: g.$v.Sizes.LARGER, animate: !0 }),
              })
            : null;
}
function Q(e) {
    let { showInviteSettings: l = !1, currentUser: t } = e;
    return l && null != t ? (0, n.jsx)(P, {}) : (0, n.jsx)(g.xt, { user: t });
}
let Z = function (e) {
    let l,
        t,
        i,
        {
            invite: s,
            disableUser: h = !1,
            error: j,
            flatActivityCount: f = !1,
            isRegister: _ = !1,
            inUnclaimedFlow: v = !1,
            showInvitedByHeader: A = !0,
            className: E,
        } = e,
        { currentUser: N } = (0, c.cf)([w.default], () => ({ currentUser: w.default.getCurrentUser() })),
        S = null != s && null != s.channel ? (0, L.OY)(s.channel) : null,
        y = (0, x.Ay)(S);
    if (null == s) return null;
    let I = null != s.guild ? (M.fh(s.guild) ? s.guild : M.DY(s.guild)) : null,
        b = null != s.target_application ? new D.Ay(s.target_application) : null,
        k = h || null == s.inviter ? null : new R.A(s.inviter),
        F =
            !(
                (null != s.approximate_member_count && s.approximate_member_count > 100) ||
                (null != I && I.features.has(T.GuildFeatures.COMMUNITY))
            ) && null != k,
        P = null,
        K = (0, u.Lt)(s.flags ?? 0, a.Q.IS_GUEST_INVITE),
        Z = !1;
    if (null != I)
        A &&
            ((P =
                null == k
                    ? C.intl.string(C.t["3rE1P8"])
                    : C.intl.formatToPlainString(C.t["5u47va"], { username: U.Ay.getFormattedName(k) })),
            s.target_type === B.yV.STREAM &&
                null != s.target_user &&
                (P = C.intl.formatToPlainString(C.t.x2L32Q, { username: U.Ay.getFormattedName(s.target_user) })),
            s.target_type === B.yV.EMBEDDED_APPLICATION &&
                null != s.target_application &&
                (P =
                    null != k
                        ? C.intl.formatToPlainString(C.t.UW1Cav, { username: U.Ay.getFormattedName(k) })
                        : C.intl.string(C.t.ENSuN3))),
            F && null == b && (l = (0, n.jsx)(g.$v, { className: G.Kk, guild: I, size: g.$v.Sizes.SMALL })),
            (t = I.name),
            null != b &&
                ((t = b.name),
                (i = (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(g.tK, { className: G.R9, children: C.intl.string(C.t["3gg9fF"]) }),
                        (0, n.jsxs)("div", {
                            className: G.bo,
                            children: [
                                (0, n.jsx)(g.$v, { guild: I, size: g.$v.Sizes.SMALL }),
                                (0, n.jsx)(m.E, {
                                    tag: "span",
                                    variant: "text-lg/normal",
                                    color: "text-strong",
                                    className: G.Al,
                                    children: I.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != S) {
        if (null == k) throw Error("no inviter in group DM invite");
        let e = U.Ay.getFormattedName(k);
        null != y && "" !== y
            ? ((P = C.intl.formatToPlainString(C.t["5u47va"], { username: e })),
              (t = y),
              null != S.icon && (l = (0, n.jsx)(g.F4, { channel: S, size: o._3.SIZE_32 })))
            : ((P = C.intl.string(C.t.OsdY8B)), (t = e));
    } else if (null != k) {
        let e = U.Ay.getFormattedName(k, !0);
        (t = C.intl.formatToPlainString(C.t["4aF92R"], { username: e })),
            (Z = !0),
            (i =
                null != j
                    ? null
                    : (0, n.jsx)(g.tK, {
                          className: G.b$,
                          children: _
                              ? C.intl.format(C.t["6r4JiR"], { username: e })
                              : C.intl.format(C.t.Quj7HX, { username: e }),
                      }));
    }
    return (0, n.jsxs)(d.B, {
        direction: "vertical",
        gap: 8,
        className: r()(G.kL, E),
        justify: "center",
        align: "center",
        children: [
            (0, n.jsx)(O, { application: b, guild: I, user: F ? k : null, compact: Z }),
            null != j
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(g.tK, { children: C.intl.string(C.t.mDFGFj) }),
                          (0, n.jsx)(g.hE, { children: j }),
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != P ? (0, n.jsx)(g.tK, { children: P }) : null,
                          (0, n.jsxs)(g.hE, {
                              className: G.DD,
                              children: [
                                  null != I
                                      ? (0, n.jsx)(p.A, { guild: I, className: G.n2, tooltipPosition: "left" })
                                      : null,
                                  l,
                                  t,
                              ],
                          }),
                      ],
                  }),
            i,
            (0, n.jsxs)(d.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, n.jsx)(d.B, {
                        direction: "vertical",
                        gap: 4,
                        children:
                            null != b || Z || s?.guild?.id === $.TA
                                ? null
                                : (0, n.jsx)(g.R1, {
                                      online: s.approximate_presence_count,
                                      total: s.approximate_member_count,
                                      flat: f,
                                  }),
                    }),
                    (0, n.jsx)(z.A, { guild: I, roles: s.roles, className: G.Ei }),
                    null == I ? null : (0, n.jsx)(Q, { currentUser: N, showInviteSettings: !v && !K }),
                ],
            }),
        ],
    });
};

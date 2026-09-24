(l.d(n, { A: () => H, M: () => K }), l(938796));
var e = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    s = l(821418),
    u = l(665260),
    o = l(17928),
    c = l(778712),
    m = l(834730),
    d = l(331322),
    g = l(854378),
    x = l(47167),
    h = l(573435),
    j = l(769015),
    f = l(714991),
    p = l(625903),
    v = l(95477),
    _ = l(539895),
    A = l(844330),
    N = l(885386),
    E = l(750994),
    S = l(174459),
    y = l(960736),
    T = l(652215),
    b = l(375708),
    C = l(88861);
function I() {
    return (0, e.jsx)("div", { className: C.m });
}
function P(t) {
    let { label: n, children: l } = t;
    return (0, e.jsxs)(d.B, {
        direction: "vertical",
        gap: 4,
        children: [(0, e.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: n }), l],
    });
}
function k(t) {
    let { label: n, checked: l, onChange: i } = t;
    return (0, e.jsxs)(d.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, e.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: n }),
            (0, e.jsx)(E.Ay, { value: l, onChange: i, title: "" }),
        ],
    });
}
function D() {
    let t = N.tz.useSetting(),
        {
            nickname: n,
            dmsAllowed: l,
            showActivity: r,
            setNickname: a,
            setDmsAllowed: s,
            setShowActivity: u,
            guildId: o,
            inviteCode: c,
        } = (0, y.lD)(),
        m = _.A.getProps().invite?.is_nickname_changeable,
        d = i.useCallback(() => {
            S.default.track(T.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: o, invite_code: c });
        }, [o, c]);
    return (0, e.jsxs)(A.A, {
        icon: (0, e.jsx)(p.SettingsIcon, { size: "refresh_sm" }),
        title: b.intl.string(b.t["A5wHQ/"]),
        subtitle: b.intl.string(b.t.UKCSEd),
        onOpen: d,
        maxHeight: m ? 220 : 130,
        children: [
            m &&
                (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(P, {
                            label: b.intl.string(b.t.me1lRk),
                            children: (0, e.jsx)(v.k, {
                                placeholder: b.intl.string(b.t["09Q8yp"]),
                                maxLength: T.d0r,
                                value: n,
                                onChange: a,
                            }),
                        }),
                        (0, e.jsx)(I, {}),
                    ],
                }),
            (0, e.jsx)(k, { label: b.intl.string(b.t["/2ed37"]), checked: l, onChange: s }),
            (0, e.jsx)(I, {}),
            t && (0, e.jsx)(k, { label: b.intl.string(b.t.bN4m1G), checked: r, onChange: u }),
        ],
    });
}
var M = l(897288),
    F = l(395671),
    w = l(95701),
    z = l(889227),
    L = l(287809),
    R = l(149790),
    U = l(427262),
    $ = l(330936),
    B = l(172799),
    G = l(884182);
function K() {
    return (0, e.jsxs)(i.Fragment, {
        children: [
            (0, e.jsx)(g.eu, { src: null, size: c._3.DEPRECATED_SIZE_100, className: G.my }),
            (0, e.jsx)(g.tK, { children: b.intl.string(b.t["3rE1P8"]) }),
            (0, e.jsx)(g.hE, { className: G.RG, children: b.intl.string(b.t.ZTNur7) }),
        ],
    });
}
function O(t) {
    let { guild: n, user: l, application: i, compact: r } = t;
    return null != i
        ? (0, e.jsx)(j.A, { className: G.Z2, game: i, size: G.q6 })
        : null != l
          ? (0, e.jsx)(g.eu, {
                src: null != l ? l.getAvatarURL(void 0, 80) : null,
                size: c._3.SIZE_80,
                className: r ? void 0 : G.my,
            })
          : null != n
            ? (0, e.jsx)(h.Ay, {
                  mask: h.Ay.Masks.SQUIRCLE,
                  width: 64,
                  height: 64,
                  className: G.$f,
                  children: (0, e.jsx)(g.$v, { guild: n, size: g.$v.Sizes.LARGER, animate: !0 }),
              })
            : null;
}
function Q(t) {
    let { showInviteSettings: n = !1, currentUser: l } = t;
    return n && null != l ? (0, e.jsx)(D, {}) : (0, e.jsx)(g.xt, { user: l });
}
let H = function (t) {
    let n,
        l,
        i,
        {
            invite: r,
            disableUser: h = !1,
            error: j,
            flatActivityCount: p = !1,
            isRegister: v = !1,
            inUnclaimedFlow: _ = !1,
            showInvitedByHeader: A = !0,
            className: N,
        } = t,
        { currentUser: E } = (0, o.cf)([L.default], () => ({ currentUser: L.default.getCurrentUser() })),
        S = null != r && null != r.channel ? (0, w.OY)(r.channel) : null,
        y = (0, x.Ay)(S);
    if (null == r) return null;
    let C = null != r.guild ? (R.fh(r.guild) ? r.guild : R.DY(r.guild)) : null,
        I = null != r.target_application ? new F.Ay(r.target_application) : null,
        P = h || null == r.inviter ? null : new z.A(r.inviter),
        k =
            !(
                (null != r.approximate_member_count && r.approximate_member_count > 100) ||
                (null != C && C.features.has(T.GuildFeatures.COMMUNITY))
            ) && null != P,
        D = null,
        K = (0, u.Lt)(r.flags ?? 0, s.Q.IS_GUEST_INVITE),
        H = !1;
    if (null != C)
        (A &&
            ((D =
                null == P
                    ? b.intl.string(b.t["3rE1P8"])
                    : b.intl.formatToPlainString(b.t["5u47va"], { username: U.Ay.getFormattedName(P) })),
            r.target_type === B.yV.STREAM &&
                null != r.target_user &&
                (D = b.intl.formatToPlainString(b.t.x2L32Q, { username: U.Ay.getFormattedName(r.target_user) })),
            r.target_type === B.yV.EMBEDDED_APPLICATION &&
                null != r.target_application &&
                (D =
                    null != P
                        ? b.intl.formatToPlainString(b.t.UW1Cav, { username: U.Ay.getFormattedName(P) })
                        : b.intl.string(b.t.ENSuN3))),
            k && null == I && (n = (0, e.jsx)(g.$v, { className: G.Kk, guild: C, size: g.$v.Sizes.SMALL })),
            (l = C.name),
            null != I &&
                ((l = I.name),
                (i = (0, e.jsxs)("div", {
                    children: [
                        (0, e.jsx)(g.tK, { className: G.R9, children: b.intl.string(b.t["3gg9fF"]) }),
                        (0, e.jsxs)("div", {
                            className: G.bo,
                            children: [
                                (0, e.jsx)(g.$v, { guild: C, size: g.$v.Sizes.SMALL }),
                                (0, e.jsx)(m.E, {
                                    tag: "span",
                                    variant: "text-lg/normal",
                                    color: "text-strong",
                                    className: G.Al,
                                    children: C.name,
                                }),
                            ],
                        }),
                    ],
                }))));
    else if (null != S) {
        if (null == P) throw Error("no inviter in group DM invite");
        let t = U.Ay.getFormattedName(P);
        null != y && "" !== y
            ? ((D = b.intl.formatToPlainString(b.t["5u47va"], { username: t })),
              (l = y),
              null != S.icon && (n = (0, e.jsx)(g.F4, { channel: S, size: c._3.SIZE_32 })))
            : ((D = b.intl.string(b.t.OsdY8B)), (l = t));
    } else if (null != P) {
        let t = U.Ay.getFormattedName(P, !0);
        ((l = b.intl.formatToPlainString(b.t["4aF92R"], { username: t })),
            (H = !0),
            (i =
                null != j
                    ? null
                    : (0, e.jsx)(g.tK, {
                          className: G.b$,
                          children: v
                              ? b.intl.format(b.t["6r4JiR"], { username: t })
                              : b.intl.format(b.t.Quj7HX, { username: t }),
                      })));
    }
    return (0, e.jsxs)(d.B, {
        direction: "vertical",
        gap: 8,
        className: a()(G.kL, N),
        justify: "center",
        align: "center",
        children: [
            (0, e.jsx)(O, { application: I, guild: C, user: k ? P : null, compact: H }),
            null != j
                ? (0, e.jsxs)(e.Fragment, {
                      children: [
                          (0, e.jsx)(g.tK, { children: b.intl.string(b.t.mDFGFj) }),
                          (0, e.jsx)(g.hE, { children: j }),
                      ],
                  })
                : (0, e.jsxs)(e.Fragment, {
                      children: [
                          null != D ? (0, e.jsx)(g.tK, { children: D }) : null,
                          (0, e.jsxs)(g.hE, {
                              className: G.DD,
                              children: [
                                  null != C
                                      ? (0, e.jsx)(f.A, { guild: C, className: G.n2, tooltipPosition: "left" })
                                      : null,
                                  n,
                                  l,
                              ],
                          }),
                      ],
                  }),
            i,
            (0, e.jsxs)(d.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, e.jsx)(d.B, {
                        direction: "vertical",
                        gap: 4,
                        children:
                            null != I || H || r?.guild?.id === $.TA
                                ? null
                                : (0, e.jsx)(g.R1, {
                                      online: r.approximate_presence_count,
                                      total: r.approximate_member_count,
                                      flat: p,
                                  }),
                    }),
                    (0, e.jsx)(M.A, { guild: C, roles: r.roles, className: G.Ei }),
                    null == C ? null : (0, e.jsx)(Q, { currentUser: E, showInviteSettings: !_ && !K }),
                ],
            }),
        ],
    });
};

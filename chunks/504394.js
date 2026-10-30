(l.d(n, { A: () => H, M: () => K }), l(938796));
var e = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    s = l(821418),
    u = l(294630),
    o = l(665260),
    c = l(17928),
    m = l(778712),
    d = l(834730),
    g = l(331322),
    x = l(854378),
    h = l(47167),
    j = l(573435),
    f = l(769015),
    p = l(714991),
    v = l(625903),
    _ = l(95477),
    A = l(539895),
    N = l(844330),
    E = l(253932),
    S = l(750994),
    y = l(174459),
    T = l(960736),
    b = l(652215),
    C = l(105292),
    I = l(88861);
function P() {
    return (0, e.jsx)("div", { className: I.m });
}
function k(t) {
    let { label: n, children: l } = t;
    return (0, e.jsxs)(g.B, {
        direction: "vertical",
        gap: 4,
        children: [(0, e.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: n }), l],
    });
}
function D(t) {
    let { label: n, checked: l, onChange: i } = t;
    return (0, e.jsxs)(g.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, e.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: n }),
            (0, e.jsx)(S.Ay, { value: l, onChange: i, title: "" }),
        ],
    });
}
function M() {
    let t = E.tz.useSetting(),
        {
            nickname: n,
            dmsAllowed: l,
            showActivity: r,
            setNickname: a,
            setDmsAllowed: s,
            setShowActivity: u,
            guildId: o,
            inviteCode: c,
        } = (0, T.lD)(),
        m = A.A.getProps().invite?.is_nickname_changeable,
        d = i.useCallback(() => {
            y.default.track(b.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: o, invite_code: c });
        }, [o, c]);
    return (0, e.jsxs)(N.A, {
        icon: (0, e.jsx)(v.SettingsIcon, { size: "refresh_sm" }),
        title: C.intl.string(C.t["A5wHQ/"]),
        subtitle: C.intl.string(C.t.UKCSEd),
        onOpen: d,
        maxHeight: m ? 220 : 130,
        children: [
            m &&
                (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(k, {
                            label: C.intl.string(C.t.me1lRk),
                            children: (0, e.jsx)(_.k, {
                                placeholder: C.intl.string(C.t["09Q8yp"]),
                                maxLength: b.d0r,
                                value: n,
                                onChange: a,
                            }),
                        }),
                        (0, e.jsx)(P, {}),
                    ],
                }),
            (0, e.jsx)(D, { label: C.intl.string(C.t["/2ed37"]), checked: l, onChange: s }),
            (0, e.jsx)(P, {}),
            t && (0, e.jsx)(D, { label: C.intl.string(C.t.bN4m1G), checked: r, onChange: u }),
        ],
    });
}
var F = l(897288),
    w = l(395671),
    z = l(95701),
    L = l(889227),
    R = l(287809),
    U = l(149790),
    $ = l(427262),
    B = l(330936),
    G = l(884182);
function K() {
    return (0, e.jsxs)(i.Fragment, {
        children: [
            (0, e.jsx)(x.eu, { src: null, size: m._3.DEPRECATED_SIZE_100, className: G.my }),
            (0, e.jsx)(x.tK, { children: C.intl.string(C.t["3rE1P8"]) }),
            (0, e.jsx)(x.hE, { className: G.RG, children: C.intl.string(C.t.ZTNur7) }),
        ],
    });
}
function O(t) {
    let { guild: n, user: l, application: i, compact: r } = t;
    return null != i
        ? (0, e.jsx)(f.A, { className: G.Z2, game: i, size: G.q6 })
        : null != l
          ? (0, e.jsx)(x.eu, {
                src: null != l ? l.getAvatarURL(void 0, 80) : null,
                size: m._3.SIZE_80,
                className: r ? void 0 : G.my,
            })
          : null != n
            ? (0, e.jsx)(j.Ay, {
                  mask: j.Ay.Masks.SQUIRCLE,
                  width: 64,
                  height: 64,
                  className: G.$f,
                  children: (0, e.jsx)(x.$v, { guild: n, size: x.$v.Sizes.LARGER, animate: !0 }),
              })
            : null;
}
function Q(t) {
    let { showInviteSettings: n = !1, currentUser: l } = t;
    return n && null != l ? (0, e.jsx)(M, {}) : (0, e.jsx)(x.xt, { user: l });
}
let H = function (t) {
    let n,
        l,
        i,
        {
            invite: r,
            disableUser: j = !1,
            error: f,
            flatActivityCount: v = !1,
            isRegister: _ = !1,
            inUnclaimedFlow: A = !1,
            showInvitedByHeader: N = !0,
            className: E,
        } = t,
        { currentUser: S } = (0, c.cf)([R.default], () => ({ currentUser: R.default.getCurrentUser() })),
        y = null != r && null != r.channel ? (0, z.OY)(r.channel) : null,
        T = (0, h.Ay)(y);
    if (null == r) return null;
    let I = null != r.guild ? (U.fh(r.guild) ? r.guild : U.DY(r.guild)) : null,
        P = null != r.target_application ? new w.Ay(r.target_application) : null,
        k = j || null == r.inviter ? null : new L.A(r.inviter),
        D =
            !(
                (null != r.approximate_member_count && r.approximate_member_count > 100) ||
                (null != I && I.features.has(b.GuildFeatures.COMMUNITY))
            ) && null != k,
        M = null,
        K = (0, o.Lt)(r.flags ?? 0, s.Q.IS_GUEST_INVITE),
        H = !1;
    if (null != I)
        (N &&
            ((M =
                null == k
                    ? C.intl.string(C.t["3rE1P8"])
                    : C.intl.formatToPlainString(C.t["5u47va"], { username: $.Ay.getFormattedName(k) })),
            r.target_type === u.y.STREAM &&
                null != r.target_user &&
                (M = C.intl.formatToPlainString(C.t.x2L32Q, { username: $.Ay.getFormattedName(r.target_user) })),
            r.target_type === u.y.EMBEDDED_APPLICATION &&
                null != r.target_application &&
                (M =
                    null != k
                        ? C.intl.formatToPlainString(C.t.UW1Cav, { username: $.Ay.getFormattedName(k) })
                        : C.intl.string(C.t.ENSuN3))),
            D && null == P && (n = (0, e.jsx)(x.$v, { className: G.Kk, guild: I, size: x.$v.Sizes.SMALL })),
            (l = I.name),
            null != P &&
                ((l = P.name),
                (i = (0, e.jsxs)("div", {
                    children: [
                        (0, e.jsx)(x.tK, { className: G.R9, children: C.intl.string(C.t["3gg9fF"]) }),
                        (0, e.jsxs)("div", {
                            className: G.bo,
                            children: [
                                (0, e.jsx)(x.$v, { guild: I, size: x.$v.Sizes.SMALL }),
                                (0, e.jsx)(d.E, {
                                    tag: "span",
                                    variant: "text-lg/normal",
                                    color: "text-strong",
                                    className: G.Al,
                                    children: I.name,
                                }),
                            ],
                        }),
                    ],
                }))));
    else if (null != y) {
        if (null == k) throw Error("no inviter in group DM invite");
        let t = $.Ay.getFormattedName(k);
        null != T && "" !== T
            ? ((M = C.intl.formatToPlainString(C.t["5u47va"], { username: t })),
              (l = T),
              null != y.icon && (n = (0, e.jsx)(x.F4, { channel: y, size: m._3.SIZE_32 })))
            : ((M = C.intl.string(C.t.OsdY8B)), (l = t));
    } else if (null != k) {
        let t = $.Ay.getFormattedName(k, !0);
        ((l = C.intl.formatToPlainString(C.t["4aF92R"], { username: t })),
            (H = !0),
            (i =
                null != f
                    ? null
                    : (0, e.jsx)(x.tK, {
                          className: G.b$,
                          children: _
                              ? C.intl.format(C.t["6r4JiR"], { username: t })
                              : C.intl.format(C.t.Quj7HX, { username: t }),
                      })));
    }
    return (0, e.jsxs)(g.B, {
        direction: "vertical",
        gap: 8,
        className: a()(G.kL, E),
        justify: "center",
        align: "center",
        children: [
            (0, e.jsx)(O, { application: P, guild: I, user: D ? k : null, compact: H }),
            null != f
                ? (0, e.jsxs)(e.Fragment, {
                      children: [
                          (0, e.jsx)(x.tK, { children: C.intl.string(C.t.mDFGFj) }),
                          (0, e.jsx)(x.hE, { children: f }),
                      ],
                  })
                : (0, e.jsxs)(e.Fragment, {
                      children: [
                          null != M ? (0, e.jsx)(x.tK, { children: M }) : null,
                          (0, e.jsxs)(x.hE, {
                              className: G.DD,
                              children: [
                                  null != I
                                      ? (0, e.jsx)(p.A, { guild: I, className: G.n2, tooltipPosition: "left" })
                                      : null,
                                  n,
                                  l,
                              ],
                          }),
                      ],
                  }),
            i,
            (0, e.jsxs)(g.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, e.jsx)(g.B, {
                        direction: "vertical",
                        gap: 4,
                        children:
                            null != P || H || r?.guild?.id === B.TA
                                ? null
                                : (0, e.jsx)(x.R1, {
                                      online: r.approximate_presence_count,
                                      total: r.approximate_member_count,
                                      flat: v,
                                  }),
                    }),
                    (0, e.jsx)(F.A, { guild: I, roles: r.roles, className: G.Ei }),
                    null == I ? null : (0, e.jsx)(Q, { currentUser: S, showInviteSettings: !A && !K }),
                ],
            }),
        ],
    });
};

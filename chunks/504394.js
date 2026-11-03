(e.d(l, { A: () => H, M: () => K }), e(938796));
var t = e(477900),
    i = e(582128),
    r = e(503698),
    a = e.n(r),
    s = e(821418),
    u = e(294630),
    o = e(665260),
    c = e(17928),
    d = e(778712),
    m = e(834730),
    g = e(331322),
    x = e(854378),
    h = e(47167),
    j = e(573435),
    f = e(769015),
    p = e(714991),
    v = e(625903),
    _ = e(95477),
    A = e(539895),
    N = e(844330),
    E = e(253932),
    S = e(750994),
    y = e(174459),
    b = e(960736),
    T = e(652215),
    C = e(105292),
    I = e(88861);
function P() {
    return (0, t.jsx)("div", { className: I.m });
}
function k(n) {
    let { label: l, children: e } = n;
    return (0, t.jsxs)(g.B, {
        direction: "vertical",
        gap: 4,
        children: [(0, t.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: l }), e],
    });
}
function D(n) {
    let { label: l, checked: e, onChange: i } = n;
    return (0, t.jsxs)(g.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, t.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: l }),
            (0, t.jsx)(S.Ay, { value: e, onChange: i, title: "" }),
        ],
    });
}
function M() {
    let n = E.tz.useSetting(),
        {
            nickname: l,
            dmsAllowed: e,
            showActivity: r,
            setNickname: a,
            setDmsAllowed: s,
            setShowActivity: u,
            guildId: o,
            inviteCode: c,
        } = (0, b.lD)(),
        d = A.A.getProps().invite?.is_nickname_changeable,
        m = i.useCallback(() => {
            y.default.track(T.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: o, invite_code: c });
        }, [o, c]);
    return (0, t.jsxs)(N.A, {
        icon: (0, t.jsx)(v.SettingsIcon, { size: "refresh_sm" }),
        title: C.intl.string(C.t["A5wHQ/"]),
        subtitle: C.intl.string(C.t.UKCSEd),
        onOpen: m,
        maxHeight: d ? 220 : 130,
        children: [
            d &&
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(k, {
                            label: C.intl.string(C.t.me1lRk),
                            children: (0, t.jsx)(_.k, {
                                placeholder: C.intl.string(C.t["09Q8yp"]),
                                maxLength: T.d0r,
                                value: l,
                                onChange: a,
                            }),
                        }),
                        (0, t.jsx)(P, {}),
                    ],
                }),
            (0, t.jsx)(D, { label: C.intl.string(C.t["/2ed37"]), checked: e, onChange: s }),
            (0, t.jsx)(P, {}),
            n && (0, t.jsx)(D, { label: C.intl.string(C.t.bN4m1G), checked: r, onChange: u }),
        ],
    });
}
var F = e(897288),
    w = e(395671),
    z = e(95701),
    L = e(889227),
    R = e(287809),
    U = e(149790),
    $ = e(427262),
    B = e(330936),
    G = e(884182);
function K() {
    return (0, t.jsxs)(i.Fragment, {
        children: [
            (0, t.jsx)(x.eu, { src: null, size: d._3.DEPRECATED_SIZE_100, className: G.my }),
            (0, t.jsx)(x.tK, { children: C.intl.string(C.t["3rE1P8"]) }),
            (0, t.jsx)(x.hE, { className: G.RG, children: C.intl.string(C.t.ZTNur7) }),
        ],
    });
}
function O(n) {
    let { guild: l, user: e, application: i, compact: r } = n;
    return null != i
        ? (0, t.jsx)(f.A, { className: G.Z2, game: i, size: G.q6 })
        : null != e
          ? (0, t.jsx)(x.eu, {
                src: null != e ? e.getAvatarURL(void 0, 80) : null,
                size: d._3.SIZE_80,
                className: r ? void 0 : G.my,
            })
          : null != l
            ? (0, t.jsx)(j.Ay, {
                  mask: j.Ay.Masks.SQUIRCLE,
                  width: 64,
                  height: 64,
                  className: G.$f,
                  children: (0, t.jsx)(x.$v, { guild: l, size: x.$v.Sizes.LARGER, animate: !0 }),
              })
            : null;
}
function Q(n) {
    let { showInviteSettings: l = !1, currentUser: e } = n;
    return l && null != e ? (0, t.jsx)(M, {}) : (0, t.jsx)(x.xt, { user: e });
}
let H = function (n) {
    let l,
        e,
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
        } = n,
        { currentUser: S } = (0, c.cf)([R.default], () => ({ currentUser: R.default.getCurrentUser() })),
        y = null != r && null != r.channel ? (0, z.OY)(r.channel) : null,
        b = (0, h.Ay)(y);
    if (null == r) return null;
    let I = null != r.guild ? (U.fh(r.guild) ? r.guild : U.DY(r.guild)) : null,
        P = null != r.target_application ? new w.Ay(r.target_application) : null,
        k = j || null == r.inviter ? null : new L.A(r.inviter),
        D =
            !(
                (null != r.approximate_member_count && r.approximate_member_count > 100) ||
                (null != I && I.features.has(T.GuildFeatures.COMMUNITY))
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
            D && null == P && (l = (0, t.jsx)(x.$v, { className: G.Kk, guild: I, size: x.$v.Sizes.SMALL })),
            (e = I.name),
            null != P &&
                ((e = P.name),
                (i = (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(x.tK, { className: G.R9, children: C.intl.string(C.t["3gg9fF"]) }),
                        (0, t.jsxs)("div", {
                            className: G.bo,
                            children: [
                                (0, t.jsx)(x.$v, { guild: I, size: x.$v.Sizes.SMALL }),
                                (0, t.jsx)(m.E, {
                                    tag: "span",
                                    variant: "body-lg/normal",
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
        let n = $.Ay.getFormattedName(k);
        null != b && "" !== b
            ? ((M = C.intl.formatToPlainString(C.t["5u47va"], { username: n })),
              (e = b),
              null != y.icon && (l = (0, t.jsx)(x.F4, { channel: y, size: d._3.SIZE_32 })))
            : ((M = C.intl.string(C.t.OsdY8B)), (e = n));
    } else if (null != k) {
        let n = $.Ay.getFormattedName(k, !0);
        ((e = C.intl.formatToPlainString(C.t["4aF92R"], { username: n })),
            (H = !0),
            (i =
                null != f
                    ? null
                    : (0, t.jsx)(x.tK, {
                          className: G.b$,
                          children: _
                              ? C.intl.format(C.t["6r4JiR"], { username: n })
                              : C.intl.format(C.t.Quj7HX, { username: n }),
                      })));
    }
    return (0, t.jsxs)(g.B, {
        direction: "vertical",
        gap: 8,
        className: a()(G.kL, E),
        justify: "center",
        align: "center",
        children: [
            (0, t.jsx)(O, { application: P, guild: I, user: D ? k : null, compact: H }),
            null != f
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(x.tK, { children: C.intl.string(C.t.mDFGFj) }),
                          (0, t.jsx)(x.hE, { children: f }),
                      ],
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [
                          null != M ? (0, t.jsx)(x.tK, { children: M }) : null,
                          (0, t.jsxs)(x.hE, {
                              className: G.DD,
                              children: [
                                  null != I
                                      ? (0, t.jsx)(p.A, { guild: I, className: G.n2, tooltipPosition: "left" })
                                      : null,
                                  l,
                                  e,
                              ],
                          }),
                      ],
                  }),
            i,
            (0, t.jsxs)(g.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, t.jsx)(g.B, {
                        direction: "vertical",
                        gap: 4,
                        children:
                            null != P || H || r?.guild?.id === B.TA
                                ? null
                                : (0, t.jsx)(x.R1, {
                                      online: r.approximate_presence_count,
                                      total: r.approximate_member_count,
                                      flat: v,
                                  }),
                    }),
                    (0, t.jsx)(F.A, { guild: I, roles: r.roles, className: G.Ei }),
                    null == I ? null : (0, t.jsx)(Q, { currentUser: S, showInviteSettings: !A && !K }),
                ],
            }),
        ],
    });
};

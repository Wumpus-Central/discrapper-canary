l.d(t, { A: () => Q, M: () => V }), l(938796);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(821418),
    u = l(665260),
    c = l(17928),
    d = l(778712),
    o = l(834730),
    m = l(331322),
    g = l(854378),
    h = l(47167),
    x = l(573435),
    j = l(137177),
    A = l(714991),
    E = l(625903),
    _ = l(292666),
    p = l(539895),
    N = l(844330),
    v = l(253932),
    f = l(650832),
    S = l(954571),
    C = l(960736),
    I = l(652215),
    y = l(985018),
    L = l(353442);
let T = () => (0, n.jsx)("div", { className: L.m });
function R(e) {
    let { label: t, children: l } = e;
    return (0, n.jsxs)(m.B, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: t }), l],
    });
}
function O(e) {
    let { label: t, checked: l, onChange: i } = e;
    return (0, n.jsxs)(m.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: t }),
            (0, n.jsx)(f.Ay, { value: l, onChange: i, title: "" }),
        ],
    });
}
let b = () => {
    let e = v.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: l,
            showActivity: a,
            setNickname: s,
            setDmsAllowed: r,
            setShowActivity: u,
            guildId: c,
            inviteCode: d,
        } = (0, C.lD)(),
        o = p.A.getProps().invite?.is_nickname_changeable,
        m = i.useCallback(() => {
            S.default.track(I.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: c, invite_code: d });
        }, [c, d]);
    return (0, n.jsxs)(N.A, {
        icon: (0, n.jsx)(E.Z, { size: "refresh_sm" }),
        title: y.intl.string(y.t["A5wHQ/"]),
        subtitle: y.intl.string(y.t.UKCSEd),
        onOpen: m,
        maxHeight: o ? 220 : 130,
        children: [
            o &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(R, {
                            label: y.intl.string(y.t.me1lRk),
                            children: (0, n.jsx)(_.k, {
                                placeholder: y.intl.string(y.t["09Q8yp"]),
                                maxLength: I.d0r,
                                value: t,
                                onChange: s,
                            }),
                        }),
                        (0, n.jsx)(T, {}),
                    ],
                }),
            (0, n.jsx)(O, { label: y.intl.string(y.t["/2ed37"]), checked: l, onChange: r }),
            (0, n.jsx)(T, {}),
            e && (0, n.jsx)(O, { label: y.intl.string(y.t.bN4m1G), checked: a, onChange: u }),
        ],
    });
};
var F = l(897288),
    M = l(395671),
    P = l(95701),
    D = l(889227),
    k = l(287809),
    U = l(860689),
    z = l(427262),
    G = l(330936),
    H = l(172799),
    w = l(493263);
let V = () =>
        (0, n.jsxs)(i.Fragment, {
            children: [
                (0, n.jsx)(g.eu, { src: null, size: d._3.DEPRECATED_SIZE_100, className: w.my }),
                (0, n.jsx)(g.tK, { children: y.intl.string(y.t["3rE1P8"]) }),
                (0, n.jsx)(g.hE, { className: w.RG, children: y.intl.string(y.t.ZTNur7) }),
            ],
        }),
    Y = (e) => {
        let { guild: t, user: l, application: i, compact: a } = e;
        return null != i
            ? (0, n.jsx)(j.A, { className: w.Z2, game: i, size: w.q6 })
            : null != l
              ? (0, n.jsx)(g.eu, {
                    src: null != l ? l.getAvatarURL(void 0, 80) : null,
                    size: d._3.SIZE_80,
                    className: a ? void 0 : w.my,
                })
              : null != t
                ? (0, n.jsx)(x.Ay, {
                      mask: x.Ay.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: w.$f,
                      children: (0, n.jsx)(g.$v, { guild: t, size: g.$v.Sizes.LARGER, animate: !0 }),
                  })
                : null;
    },
    Q = (e) => {
        let t,
            l,
            i,
            {
                invite: a,
                disableUser: x = !1,
                error: j,
                flatActivityCount: E = !1,
                isRegister: _ = !1,
                inUnclaimedFlow: p = !1,
                showInvitedByHeader: N = !0,
                className: v,
            } = e,
            { currentUser: f } = (0, c.cf)([k.default], () => ({ currentUser: k.default.getCurrentUser() })),
            S = null != a && null != a.channel ? (0, P.OY)(a.channel) : null,
            C = (0, h.Ay)(S);
        if (null == a) return null;
        let L = null != a.guild ? (U.fh(a.guild) ? a.guild : U.DY(a.guild)) : null,
            T = null != a.target_application ? new M.Ay(a.target_application) : null,
            R = x || null == a.inviter ? null : new D.A(a.inviter),
            O =
                !(
                    (null != a.approximate_member_count && a.approximate_member_count > 100) ||
                    (null != L && L.features.has(I.GuildFeatures.COMMUNITY))
                ) && null != R,
            V = null,
            Q = (0, u.Lt)(a.flags ?? 0, r.Q.IS_GUEST_INVITE),
            B = !1;
        if (null != L)
            N &&
                ((V =
                    null == R
                        ? y.intl.string(y.t["3rE1P8"])
                        : y.intl.formatToPlainString(y.t["5u47va"], { username: z.Ay.getFormattedName(R) })),
                a.target_type === H.yV.STREAM &&
                    null != a.target_user &&
                    (V = y.intl.formatToPlainString(y.t.x2L32Q, { username: z.Ay.getFormattedName(a.target_user) })),
                a.target_type === H.yV.EMBEDDED_APPLICATION &&
                    null != a.target_application &&
                    (V =
                        null != R
                            ? y.intl.formatToPlainString(y.t.UW1Cav, { username: z.Ay.getFormattedName(R) })
                            : y.intl.string(y.t.ENSuN3))),
                O && null == T && (t = (0, n.jsx)(g.$v, { className: w.Kk, guild: L, size: g.$v.Sizes.SMALL })),
                (l = L.name),
                null != T &&
                    ((l = T.name),
                    (i = (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(g.tK, { className: w.R9, children: y.intl.string(y.t["3gg9fF"]) }),
                            (0, n.jsxs)("div", {
                                className: w.bo,
                                children: [
                                    (0, n.jsx)(g.$v, { guild: L, size: g.$v.Sizes.SMALL }),
                                    (0, n.jsx)(o.E, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: w.Al,
                                        children: L.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != S) {
            if (null == R) throw Error("no inviter in group DM invite");
            let e = z.Ay.getFormattedName(R);
            null != C && "" !== C
                ? ((V = y.intl.formatToPlainString(y.t["5u47va"], { username: e })),
                  (l = C),
                  null != S.icon && (t = (0, n.jsx)(g.F4, { channel: S, size: d._3.SIZE_32 })))
                : ((V = y.intl.string(y.t.OsdY8B)), (l = e));
        } else if (null != R) {
            let e = z.Ay.getFormattedName(R, !0);
            (l = y.intl.formatToPlainString(y.t["4aF92R"], { username: e })),
                (B = !0),
                (i =
                    null != j
                        ? null
                        : (0, n.jsx)(g.tK, {
                              className: w.b$,
                              children: _
                                  ? y.intl.format(y.t["6r4JiR"], { username: e })
                                  : y.intl.format(y.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, n.jsxs)(m.B, {
            direction: "vertical",
            gap: 8,
            className: s()(w.kL, v),
            justify: "center",
            align: "center",
            children: [
                (0, n.jsx)(Y, { application: T, guild: L, user: O ? R : null, compact: B }),
                null != j
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(g.tK, { children: y.intl.string(y.t.mDFGFj) }),
                              (0, n.jsx)(g.hE, { children: j }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              null != V ? (0, n.jsx)(g.tK, { children: V }) : null,
                              (0, n.jsxs)(g.hE, {
                                  className: w.DD,
                                  children: [
                                      null != L
                                          ? (0, n.jsx)(A.A, { guild: L, className: w.n2, tooltipPosition: "left" })
                                          : null,
                                      t,
                                      l,
                                  ],
                              }),
                          ],
                      }),
                i,
                (0, n.jsxs)(m.B, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, n.jsx)(m.B, {
                            direction: "vertical",
                            gap: 4,
                            children:
                                null != T || B || a?.guild?.id === G.TA
                                    ? null
                                    : (0, n.jsx)(g.R1, {
                                          online: a.approximate_presence_count,
                                          total: a.approximate_member_count,
                                          flat: E,
                                      }),
                        }),
                        (0, n.jsx)(F.A, { guild: L, roles: a.roles, className: w.Ei }),
                        p || Q || null == f ? (0, n.jsx)(g.xt, { user: f }) : (0, n.jsx)(b, {}),
                    ],
                }),
            ],
        });
    };

n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(136722),
    d = n(311907),
    u = n(342952),
    h = n(97808),
    m = n(778712),
    A = n(834730),
    g = n(821609),
    p = n(177953),
    _ = n(22231),
    f = n(725570),
    E = n(435183),
    C = n(155718),
    x = n(47167),
    S = n(685374),
    I = n(569989),
    N = n(997509),
    v = n(46054),
    T = n(34457),
    y = n(317525),
    b = n(71393),
    j = n(576705),
    R = n(287809),
    M = n(488926),
    L = n(427262),
    D = n(314307),
    P = n(234567),
    O = n(652215),
    w = n(985018),
    U = n(516757),
    k = n(992595);
function G(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1),
        r = (0, x.Ay)(t, !0),
        G = t.guild_id,
        F = (0, d.bG)([y.A], () => (null != G ? y.A.getSortedRoles(G) : void 0)),
        H = (0, d.bG)([R.default, b.A], () => R.default.getUser(b.A.getGuild(G)?.ownerId)),
        B = l.useMemo(() => (null != F ? F.filter((e) => !(0, T.Oy)(e)) : []), [F]),
        V = l.useMemo(
            () =>
                o()(B)
                    .filter((e) => {
                        if (null == G) return !1;
                        let n = M.aH({ forceRoles: { [e.id]: e }, context: t });
                        return c.X8(n, c.kg(O.xBc.ADMINISTRATOR, O.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, G, B],
        ),
        z = (0, d.yK)([R.default], () => {
            let e = {};
            for (let n of (null != H && (e[H.id] = H), Object.values(t.permissionOverwrites))) {
                if (n.type !== C.r2.MEMBER || null != e[n.id]) continue;
                let t = R.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return o()(e)
                .filter((e) => {
                    let n = M.$3({ permission: O.xBc.ADMINISTRATOR, user: e, context: t }),
                        i = t.permissionOverwrites[e.id] ?? M.x3,
                        l = c.zy(i.allow, O.xBc.VIEW_CHANNEL);
                    return n || l;
                })
                .value();
        }, [t, H]),
        K = j.A.can(O.xBc.MANAGE_CHANNELS, t) || j.A.can(O.xBc.MANAGE_ROLES, t),
        W = l.useCallback(() => a(!1), []);
    return (0, i.jsxs)(D.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)(D.WK, { locked: !0, channelType: t.type }),
            (0, i.jsx)(D.cr, { children: w.intl.format(w.t.I3R7Vn, { channelName: r }) }),
            (0, i.jsx)(D.j1, {
                className: k.PT,
                children: w.intl.format(w.t.QuwqjG, {
                    channelName: r,
                    topicHook: () => v.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            K
                ? (0, i.jsxs)("div", {
                      className: U.$x,
                      children: [
                          (0, i.jsx)(g.$, {
                              size: "sm",
                              variant: "secondary",
                              text: w.intl.string(w.t.dMJ3Y6),
                              onClick: () => a(!0),
                              icon: p.n,
                          }),
                          (0, i.jsx)(g.$, {
                              size: "sm",
                              variant: "secondary",
                              text: w.intl.string(w.t["3gUsJb"]),
                              onClick: function () {
                                  E.Ay.open(t.id);
                              },
                              icon: _.R,
                          }),
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: U.ol,
                children: [
                    (function () {
                        if (1 !== z.length || V.length > 0)
                            return (0, i.jsx)(u.A, { guildId: t.guild_id, className: U.HD, maxUsers: 5, users: z });
                        let e = z[0],
                            n = L.Ay.getName(e);
                        return (0, i.jsxs)("div", {
                            className: U.HD,
                            children: [
                                (0, i.jsx)(h.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: m._3.SIZE_24,
                                }),
                                (0, i.jsx)(A.E, {
                                    tag: "span",
                                    className: U.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, i.jsx)(A.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: w.intl.string(w.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    V.map((e, n) => {
                        let l = e.colorString ?? O.TpD,
                            a = e.tags?.guild_connections !== void 0;
                        return K
                            ? (0, i.jsx)(
                                  P.A,
                                  {
                                      className: s()(U.JC, { [U.HV]: n === V.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !K,
                                      verified: a,
                                      onClick: () => {
                                          N.A.open(t.guild_id, O.BEX.MEMBERS), N.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(
                                  I.A,
                                  {
                                      className: s()(U.JC, { [U.HV]: n === V.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: a,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, i.jsx)(f.aF, {
                      renderModal: (e) =>
                          (0, i.jsx)(S.default, { ...e, onClose: () => (W(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => a(!1),
                  })
                : null,
        ],
    });
}

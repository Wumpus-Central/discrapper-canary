n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(136722),
    d = n(311907),
    u = n(342952),
    h = n(397927),
    m = n(435183),
    A = n(155718),
    p = n(47167),
    g = n(685374),
    f = n(569989),
    _ = n(997509),
    E = n(46054),
    x = n(34457),
    C = n(317525),
    S = n(71393),
    I = n(576705),
    T = n(287809),
    v = n(488926),
    N = n(427262),
    y = n(314307),
    b = n(234567),
    j = n(652215),
    R = n(985018),
    M = n(650373),
    D = n(782691);
function O(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        r = (0, p.Ay)(t, !0),
        O = t.guild_id,
        L = (0, d.bG)([C.A], () => (null != O ? C.A.getSortedRoles(O) : void 0)),
        P = (0, d.bG)([T.default, S.A], () => T.default.getUser(S.A.getGuild(O)?.ownerId)),
        w = l.useMemo(() => (null != L ? L.filter((e) => !(0, x.Oy)(e)) : []), [L]),
        k = l.useMemo(
            () =>
                o()(w)
                    .filter((e) => {
                        if (null == O) return !1;
                        let n = v.aH({ forceRoles: { [e.id]: e }, context: t });
                        return c.X8(n, c.kg(j.xBc.ADMINISTRATOR, j.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, O, w],
        ),
        U = (0, d.yK)([T.default], () => {
            let e = {};
            for (let n of (null != P && (e[P.id] = P), Object.values(t.permissionOverwrites))) {
                if (n.type !== A.r2.MEMBER || null != e[n.id]) continue;
                let t = T.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return o()(e)
                .filter((e) => {
                    let n = v.$3({ permission: j.xBc.ADMINISTRATOR, user: e, context: t }),
                        i = t.permissionOverwrites[e.id] ?? v.x3,
                        l = c.zy(i.allow, j.xBc.VIEW_CHANNEL);
                    return n || l;
                })
                .value();
        }, [t, P]),
        G = I.A.can(j.xBc.MANAGE_CHANNELS, t) || I.A.can(j.xBc.MANAGE_ROLES, t),
        F = l.useCallback(() => s(!1), []);
    return (0, i.jsxs)(y.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)(y.WK, { locked: !0, channelType: t.type }),
            (0, i.jsx)(y.cr, { children: R.intl.format(R.t.I3R7Vn, { channelName: r }) }),
            (0, i.jsx)(y.j1, {
                className: D.PT,
                children: R.intl.format(R.t.QuwqjG, {
                    channelName: r,
                    topicHook: () => E.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            G
                ? (0, i.jsxs)("div", {
                      className: M.$x,
                      children: [
                          (0, i.jsx)(h.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: R.intl.string(R.t.dMJ3Y6),
                              onClick: () => s(!0),
                              icon: h.nFg,
                          }),
                          (0, i.jsx)(h.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: R.intl.string(R.t["3gUsJb"]),
                              onClick: function () {
                                  m.Ay.open(t.id);
                              },
                              icon: h.R2l,
                          }),
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: M.ol,
                children: [
                    (function () {
                        if (1 !== U.length || k.length > 0)
                            return (0, i.jsx)(u.A, { guildId: t.guild_id, className: M.HD, maxUsers: 5, users: U });
                        let e = U[0],
                            n = N.Ay.getName(e);
                        return (0, i.jsxs)("div", {
                            className: M.HD,
                            children: [
                                (0, i.jsx)(h.euF, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: h._3J.SIZE_24,
                                }),
                                (0, i.jsx)(h.Text, {
                                    tag: "span",
                                    className: M.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, i.jsx)(h.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: R.intl.string(R.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    k.map((e, n) => {
                        let l = e.colorString ?? j.TpD,
                            s = e.tags?.guild_connections !== void 0;
                        return G
                            ? (0, i.jsx)(
                                  b.A,
                                  {
                                      className: a()(M.JC, { [M.HV]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !G,
                                      verified: s,
                                      onClick: () => {
                                          _.A.open(t.guild_id, j.BEX.MEMBERS), _.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(
                                  f.A,
                                  {
                                      className: a()(M.JC, { [M.HV]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: s,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, i.jsx)(h.aFV, {
                      renderModal: (e) =>
                          (0, i.jsx)(g.default, { ...e, onClose: () => (F(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => s(!1),
                  })
                : null,
        ],
    });
}

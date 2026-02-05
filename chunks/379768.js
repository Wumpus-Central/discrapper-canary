n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
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
    C = n(34457),
    x = n(317525),
    S = n(71393),
    T = n(576705),
    I = n(287809),
    N = n(488926),
    v = n(427262),
    y = n(314307),
    b = n(234567),
    R = n(652215),
    j = n(985018),
    M = n(391514),
    D = n(206314);
function O(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1),
        r = (0, p.Ay)(t, !0),
        O = t.guild_id,
        L = (0, d.bG)([x.A], () => (null != O ? x.A.getSortedRoles(O) : void 0)),
        P = (0, d.bG)([I.default, S.A], () => I.default.getUser(S.A.getGuild(O)?.ownerId)),
        w = l.useMemo(() => (null != L ? L.filter((e) => !(0, C.Oy)(e)) : []), [L]),
        k = l.useMemo(
            () =>
                o()(w)
                    .filter((e) => {
                        if (null == O) return !1;
                        let n = N.aH({ forceRoles: { [e.id]: e }, context: t });
                        return c.X8(n, c.kg(R.xBc.ADMINISTRATOR, R.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, O, w],
        ),
        U = (0, d.yK)([I.default], () => {
            let e = {};
            for (let n of (null != P && (e[P.id] = P), Object.values(t.permissionOverwrites))) {
                if (n.type !== A.r2.MEMBER || null != e[n.id]) continue;
                let t = I.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return o()(e)
                .filter((e) => {
                    let n = N.$3({ permission: R.xBc.ADMINISTRATOR, user: e, context: t }),
                        i = t.permissionOverwrites[e.id] ?? N.x3,
                        l = c.zy(i.allow, R.xBc.VIEW_CHANNEL);
                    return n || l;
                })
                .value();
        }, [t, P]),
        G = T.A.can(R.xBc.MANAGE_CHANNELS, t) || T.A.can(R.xBc.MANAGE_ROLES, t),
        F = l.useCallback(() => a(!1), []);
    return (0, i.jsxs)(y.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)(y.WK, { locked: !0, channelType: t.type }),
            (0, i.jsx)(y.cr, { children: j.intl.format(j.t.I3R7Vn, { channelName: r }) }),
            (0, i.jsx)(y.j1, {
                className: D.PT,
                children: j.intl.format(j.t.QuwqjG, {
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
                              text: j.intl.string(j.t.dMJ3Y6),
                              onClick: () => a(!0),
                              icon: h.nFg,
                          }),
                          (0, i.jsx)(h.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: j.intl.string(j.t["3gUsJb"]),
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
                            n = v.Ay.getName(e);
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
                                    children: j.intl.string(j.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    k.map((e, n) => {
                        let l = e.colorString ?? R.TpD,
                            a = e.tags?.guild_connections !== void 0;
                        return G
                            ? (0, i.jsx)(
                                  b.A,
                                  {
                                      className: s()(M.JC, { [M.HV]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !G,
                                      verified: a,
                                      onClick: () => {
                                          _.A.open(t.guild_id, R.BEX.MEMBERS), _.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(
                                  f.A,
                                  {
                                      className: s()(M.JC, { [M.HV]: n === k.length - 1 }),
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
                ? (0, i.jsx)(h.aFV, {
                      renderModal: (e) =>
                          (0, i.jsx)(g.default, { ...e, onClose: () => (F(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => a(!1),
                  })
                : null,
        ],
    });
}

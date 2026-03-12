n.d(t, { default: () => y });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    d = n(358367),
    u = n(793574),
    s = n(605691),
    o = n(848977),
    c = n(995102),
    A = n(50268),
    E = n(73028),
    f = n(961350),
    g = n(914853),
    h = n(708653),
    v = n(297460),
    I = n(652215),
    N = n(985018);
let y = (0, d.A)(
    (0, a.A)(
        function (e) {
            let { channel: t, selected: a, onSelect: d, widgetType: I } = e,
                y = t.isOwner(f.default.getId()),
                M = (0, v.A)({ kind: "CHANNEL", channel: t, guildId: t.getGuildId?.() ?? null }, I),
                S = (0, o.A)(t),
                _ = (0, c.A)(t),
                { toggleFavoriteItem: b } = (0, h.Ay)(g.x.MESSAGES, t, I),
                x = (0, s.A)(t, a),
                p = (0, A.A)({ id: t.id, label: N.intl.string(N.t.gFHI3k) }),
                D = y
                    ? (0, r.jsx)(i.Drp, {
                          id: "instant-invites",
                          label: N.intl.string(N.t.ngRFjZ),
                          action: () =>
                              (0, i.mMO)(async () => {
                                  let { default: e } = await n.e("48574").then(n.bind(n, 830541));
                                  return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
                              }),
                      })
                    : null;
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(i.W1t, {
                      navId: "overlay-gdm-context",
                      "aria-label": N.intl.string(N.t.Xm41aV),
                      onClose: l.Z_,
                      onSelect: d,
                      children: [
                          (0, r.jsxs)(i.rXV, { children: [S, M, b] }),
                          (0, r.jsxs)(i.rXV, {
                              children: [
                                  D,
                                  (0, r.jsx)(i.Drp, {
                                      id: "edit-gdm",
                                      label: N.intl.string(N.t["5Q9+/L"]),
                                      action: () => (0, E.U)(t.id, u.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.rXV, { children: _ }),
                          (0, r.jsx)(i.rXV, { children: x }),
                          (0, r.jsx)(i.rXV, { children: p }),
                      ],
                  });
        },
        { object: I.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.GROUP_DM_MENU],
);

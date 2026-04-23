n.d(t, { default: () => S });
var r = n(627968);
n(64700);
var i = n(477782),
    l = n(192308),
    a = n(550079),
    d = n(442433),
    u = n(847767),
    s = n(358367),
    o = n(793574),
    c = n(605691),
    A = n(848977),
    E = n(995102),
    f = n(50268),
    g = n(73028),
    v = n(495544),
    h = n(914853),
    I = n(708653),
    N = n(297460),
    y = n(652215),
    M = n(985018);
let S = (0, s.A)(
    (0, u.A)(
        function (e) {
            let { channel: t, selected: u, onSelect: s, widgetType: y } = e,
                S = t.isOwner(v.default.getId()),
                _ = (0, N.A)({ kind: "CHANNEL", channel: t, guildId: t.getGuildId?.() ?? null }, y),
                b = (0, A.A)(t),
                x = (0, E.A)(t),
                { toggleFavoriteItem: D } = (0, I.Ay)(h.x.MESSAGES, t, y),
                C = (0, c.A)(t, u),
                O = (0, f.A)({ id: t.id, label: M.intl.string(M.t.gFHI3k) }),
                j = S
                    ? (0, r.jsx)(i.Dr, {
                          id: "instant-invites",
                          label: M.intl.string(M.t.ngRFjZ),
                          action: () =>
                              (0, l.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("40333"), n.e("32305")]).then(
                                      n.bind(n, 409352),
                                  );
                                  return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
                              }),
                      })
                    : null;
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(a.W, {
                      navId: "overlay-gdm-context",
                      "aria-label": M.intl.string(M.t.Xm41aV),
                      onClose: d.Z_,
                      onSelect: s,
                      children: [
                          (0, r.jsxs)(i.rX, { children: [b, _, D] }),
                          (0, r.jsxs)(i.rX, {
                              children: [
                                  j,
                                  (0, r.jsx)(i.Dr, {
                                      id: "edit-gdm",
                                      label: M.intl.string(M.t["5Q9+/L"]),
                                      action: () => (0, g.U)(t.id, o.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.rX, { children: x }),
                          (0, r.jsx)(i.rX, { children: C }),
                          (0, r.jsx)(i.rX, { children: O }),
                      ],
                  });
        },
        { object: y.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.GROUP_DM_MENU],
);

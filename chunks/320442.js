n.d(t, {
    default: () => h,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    u = n(358367),
    o = n(793574),
    c = n(605691),
    d = n(848977),
    s = n(995102),
    f = n(50268),
    A = n(73028),
    b = n(961350),
    y = n(914853),
    g = n(708653),
    v = n(297460),
    E = n(652215),
    O = n(985018);
let h = (0, u.A)(
    (0, a.A)(
        function (e) {
            var t, a;
            let { channel: u, selected: E, onSelect: h, widgetType: p } = e,
                j = u.isOwner(b.default.getId()),
                S = (0, v.A)(
                    {
                        kind: "CHANNEL",
                        channel: u,
                        guildId: null != (t = null == (a = u.getGuildId) ? void 0 : a.call(u)) ? t : null,
                    },
                    p,
                ),
                I = (0, d.A)(u),
                N = (0, s.Ay)(u),
                { toggleFavoriteItem: m } = (0, g.Ay)(y.x.MESSAGES, u, p),
                _ = (0, c.A)(u, E),
                D = (0, f.A)({
                    id: u.id,
                    label: O.intl.string(O.t.gFHI3k),
                }),
                M = j
                    ? (0, r.jsx)(i.Drp, {
                          id: "instant-invites",
                          label: O.intl.string(O.t.ngRFjZ),
                          action: () =>
                              (0, i.mMO)(async () => {
                                  let { default: e } = await n.e("48574").then(n.bind(n, 830541));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          }),
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          (r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0,
                                                                    })
                                                                  : (e[t] = r);
                                                      });
                                              }
                                              return e;
                                          })(
                                              {
                                                  channelId: u.id,
                                              },
                                              t,
                                          ),
                                      );
                              }),
                      })
                    : null;
            return null == u || u.isManaged()
                ? null
                : (0, r.jsxs)(i.W1t, {
                      navId: "overlay-gdm-context",
                      "aria-label": O.intl.string(O.t.Xm41aV),
                      onClose: l.Z_,
                      onSelect: h,
                      children: [
                          (0, r.jsxs)(i.rXV, {
                              children: [I, S, m],
                          }),
                          (0, r.jsxs)(i.rXV, {
                              children: [
                                  M,
                                  (0, r.jsx)(i.Drp, {
                                      id: "edit-gdm",
                                      label: O.intl.string(O.t["5Q9+/L"]),
                                      action: () => (0, A.U)(u.id, o.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.rXV, {
                              children: N,
                          }),
                          (0, r.jsx)(i.rXV, {
                              children: _,
                          }),
                          (0, r.jsx)(i.rXV, {
                              children: D,
                          }),
                      ],
                  });
        },
        {
            object: E.ZSU.CONTEXT_MENU,
        },
    ),
    [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.GROUP_DM_MENU],
);

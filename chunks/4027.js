n.d(t, {
    default: () => A,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    o = n(358367),
    c = n(468389),
    s = n(793574),
    u = n(50268),
    d = n(133238),
    b = n(795144),
    f = n(73028),
    O = n(961350),
    p = n(605691),
    y = n(848977),
    g = n(995102),
    h = n(652215),
    j = n(985018);
let A = (0, o.A)(
    (0, a.A)(
        function (e) {
            let { channel: t, selected: a, onSelect: o } = e,
                h = t.isOwner(O.default.getId()),
                A = (0, y.A)(t),
                m = (0, g.Ay)(t),
                v = (0, p.A)(t, a),
                P = (0, u.A)({
                    id: t.id,
                    label: j.intl.string(j.t.gFHI3k),
                }),
                w = (0, c.A)(t),
                _ = (0, d.m)(t),
                D = (0, d.y)(t),
                x = (0, b.A)(t),
                E = h
                    ? (0, r.jsx)(i.Drp, {
                          id: "instant-invites",
                          label: j.intl.string(j.t.ngRFjZ),
                          action: () =>
                              (0, i.mMO)(async () => {
                                  let { default: e } = await n.e("48574").then(n.bind(n, 830541));
                                  return (n) =>
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
                                                  channelId: t.id,
                                              },
                                              n,
                                          ),
                                      );
                              }),
                      })
                    : null;
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(i.W1t, {
                      "data-menu-mixed": !0,
                      navId: "gdm-context",
                      "aria-label": j.intl.string(j.t.Xm41aV),
                      onClose: l.Z_,
                      onSelect: o,
                      children: [
                          (0, r.jsxs)(i.rXV, {
                              children: [A, _, x],
                          }),
                          (0, r.jsxs)(i.rXV, {
                              children: [
                                  E,
                                  (0, r.jsx)(i.Drp, {
                                      id: "edit-gdm",
                                      label: j.intl.string(j.t["5Q9+/L"]),
                                      action: () => (0, f.U)(t.id, s.A.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.rXV, {
                              children: w,
                          }),
                          (0, r.jsx)(i.rXV, {
                              children: m,
                          }),
                          (0, r.jsxs)(i.rXV, {
                              children: [D, v],
                          }),
                          (0, r.jsx)(i.rXV, {
                              children: P,
                          }),
                      ],
                  });
        },
        {
            object: h.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.CONTEXT_MENU, s.A.GROUP_DM_MENU],
);

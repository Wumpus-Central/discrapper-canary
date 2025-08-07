n.r(t), n.d(t, { default: () => m });
var i = n(255367);
n(73800);
var r = n(481060),
    a = n(239091),
    l = n(883385),
    o = n(108843),
    d = n(947440),
    u = n(100527),
    c = n(658138),
    s = n(299206),
    f = n(895563),
    v = n(489618),
    b = n(769409),
    h = n(122074),
    p = n(314897),
    O = n(858687),
    g = n(461535),
    _ = n(776568),
    y = n(981631),
    C = n(388032);
let m = (0, o.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: o } = e,
                m = t.isOwner(p.default.getId()),
                E = (0, g.Z)(t),
                Z = (0, _.ZP)(t),
                j = (0, h.Uf)(y.aIL, t.id, "top"),
                { rearrangeContextMenu: A } = v.Z.useExperiment({ location: u.Z.GROUP_DM_CONTEXT_MENU }),
                N = (0, O.Z)(t, l),
                R = (0, s.Z)({
                    id: t.id,
                    label: C.intl.string(C.t.gFHI3t),
                }),
                U = (0, d.Z)(t),
                I = (0, f.l)(t),
                S = (0, c.D)(t),
                T = m
                    ? (0, i.jsx)(r.sNh, {
                          id: "instant-invites",
                          label: C.intl.string(C.t.ngRFjY),
                          action: () =>
                              (0, r.ZDy)(async () => {
                                  let { default: e } = await n.e("97573").then(n.bind(n, 892382));
                                  return (n) =>
                                      (0, i.jsx)(
                                          e,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      i = Object.keys(n);
                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                      (i = i.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          }),
                                                      )),
                                                      i.forEach(function (t) {
                                                          var i;
                                                          (i = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: i,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0,
                                                                    })
                                                                  : (e[t] = i);
                                                      });
                                              }
                                              return e;
                                          })({ channelId: t.id }, n),
                                      );
                              }),
                      })
                    : null;
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(r.v2r, {
                      navId: "gdm-context",
                      "aria-label": C.intl.string(C.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsxs)(r.kSQ, {
                              children: [E, j, I],
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  !A && T,
                                  (0, i.jsx)(r.sNh, {
                                      id: "edit-gdm",
                                      label: C.intl.string(C.t["5Q9+/P"]),
                                      action: () => (0, b.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: A ? C.intl.string(C.t.pPwcQU) : void 0,
                                  }),
                                  S,
                                  A && T,
                              ],
                          }),
                          (0, i.jsx)(r.kSQ, { children: U }),
                          (0, i.jsx)(r.kSQ, { children: !A && Z }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [A && Z, N],
                          }),
                          (0, i.jsx)(r.kSQ, { children: R }),
                      ],
                  });
        },
        { object: y.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU],
);

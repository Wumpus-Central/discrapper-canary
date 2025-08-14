n.r(t), n.d(t, { default: () => E });
var i = n(255367);
n(73800);
var r = n(481060),
    a = n(239091),
    o = n(883385),
    l = n(108843),
    c = n(947440),
    s = n(100527),
    u = n(658138),
    d = n(299206),
    f = n(895563),
    p = n(489618),
    b = n(769409),
    g = n(122074),
    _ = n(314897),
    v = n(858687),
    O = n(461535),
    C = n(776568),
    h = n(981631),
    A = n(388032);
let E = (0, l.Z)(
    (0, o.Z)(
        function (e) {
            let { channel: t, selected: o, onSelect: l } = e,
                E = t.isOwner(_.default.getId()),
                y = (0, O.Z)(t),
                m = (0, C.ZP)(t),
                N = (0, g.Uf)(h.aIL, t.id, "top"),
                { rearrangeContextMenu: T } = p.Z.useExperiment({ location: s.Z.GROUP_DM_CONTEXT_MENU }),
                I = (0, v.Z)(t, o),
                R = (0, d.Z)({
                    id: t.id,
                    label: A.intl.string(A.t.gFHI3t),
                }),
                Z = (0, c.Z)(t),
                S = (0, f.l)(t),
                U = (0, f.P)(t),
                P = (0, u.D)(t),
                j = E
                    ? (0, i.jsx)(r.sNh, {
                          id: "instant-invites",
                          label: A.intl.string(A.t.ngRFjY),
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
                      "aria-label": A.intl.string(A.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: l,
                      children: [
                          (0, i.jsxs)(r.kSQ, {
                              children: [y, N, S],
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  !T && j,
                                  (0, i.jsx)(r.sNh, {
                                      id: "edit-gdm",
                                      label: A.intl.string(A.t["5Q9+/P"]),
                                      action: () => (0, b.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: T ? A.intl.string(A.t.pPwcQU) : void 0,
                                  }),
                                  P,
                                  T && j,
                              ],
                          }),
                          (0, i.jsx)(r.kSQ, { children: Z }),
                          (0, i.jsx)(r.kSQ, { children: !T && m }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [T && m, U, I],
                          }),
                          (0, i.jsx)(r.kSQ, { children: R }),
                      ],
                  });
        },
        { object: h.qAy.CONTEXT_MENU },
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_MENU],
);

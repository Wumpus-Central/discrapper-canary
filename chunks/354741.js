n.r(t), n.d(t, { default: () => C });
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(239091),
    a = n(883385),
    l = n(108843),
    c = n(947440),
    s = n(100527),
    u = n(658138),
    f = n(299206),
    d = n(895563),
    b = n(489618),
    p = n(769409),
    g = n(122074),
    O = n(314897),
    y = n(858687),
    _ = n(461535),
    m = n(776568),
    N = n(981631),
    h = n(388032);
let C = (0, l.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: l } = e,
                C = t.isOwner(O.default.getId()),
                v = (0, _.Z)(t),
                T = (0, m.ZP)(t),
                A = (0, g.Uf)(N.aIL, t.id, "top"),
                { rearrangeContextMenu: I } = b.Z.useExperiment({ location: s.Z.GROUP_DM_CONTEXT_MENU }),
                S = (0, y.Z)(t, a),
                j = (0, f.Z)({
                    id: t.id,
                    label: h.intl.string(h.t.gFHI3t),
                }),
                E = (0, c.Z)(t),
                x = (0, d.l)(t),
                P = (0, d.P)(t),
                w = (0, u.D)(t),
                Z = C
                    ? (0, i.jsx)(r.sNh, {
                          id: "instant-invites",
                          label: h.intl.string(h.t.ngRFjY),
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
                      "aria-label": h.intl.string(h.t.Xm41aW),
                      onClose: o.Zy,
                      onSelect: l,
                      children: [
                          (0, i.jsxs)(r.kSQ, {
                              children: [v, A, x],
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  !I && Z,
                                  (0, i.jsx)(r.sNh, {
                                      id: "edit-gdm",
                                      label: h.intl.string(h.t["5Q9+/P"]),
                                      action: () => (0, p.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: I ? h.intl.string(h.t.pPwcQU) : void 0,
                                  }),
                                  w,
                                  I && Z,
                              ],
                          }),
                          (0, i.jsx)(r.kSQ, { children: E }),
                          (0, i.jsx)(r.kSQ, { children: !I && T }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [I && T, P, S],
                          }),
                          (0, i.jsx)(r.kSQ, { children: j }),
                      ],
                  });
        },
        { object: N.qAy.CONTEXT_MENU },
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_MENU],
);

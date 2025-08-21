n.r(t), n.d(t, { default: () => x });
var r = n(951288);
n(647438);
var l = n(481060),
    a = n(239091),
    i = n(883385),
    o = n(108843),
    c = n(947440),
    u = n(100527),
    s = n(658138),
    d = n(299206),
    b = n(895563),
    f = n(489618),
    p = n(769409),
    O = n(122074),
    y = n(314897),
    g = n(858687),
    h = n(461535),
    j = n(776568),
    v = n(981631),
    m = n(388032);
let x = (0, o.Z)(
    (0, i.Z)(
        function (e) {
            let { channel: t, selected: i, onSelect: o } = e,
                x = t.isOwner(y.default.getId()),
                _ = (0, h.Z)(t),
                P = (0, j.ZP)(t),
                w = (0, O.Uf)(v.aIL, t.id, "top"),
                { rearrangeContextMenu: S } = f.Z.useExperiment({ location: u.Z.GROUP_DM_CONTEXT_MENU }),
                Z = (0, g.Z)(t, i),
                C = (0, d.Z)({
                    id: t.id,
                    label: m.intl.string(m.t.gFHI3t),
                }),
                k = (0, c.Z)(t),
                E = (0, b.l)(t),
                N = (0, b.P)(t),
                T = (0, s.D)(t),
                M = x
                    ? (0, r.jsx)(l.sNh, {
                          id: "instant-invites",
                          label: m.intl.string(m.t.ngRFjY),
                          action: () =>
                              (0, l.ZDy)(async () => {
                                  let { default: e } = await n.e("97573").then(n.bind(n, 892382));
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
                                          })({ channelId: t.id }, n),
                                      );
                              }),
                      })
                    : null;
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(l.v2r, {
                      navId: "gdm-context",
                      "aria-label": m.intl.string(m.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: o,
                      children: [
                          (0, r.jsxs)(l.kSQ, {
                              children: [_, w, E],
                          }),
                          (0, r.jsxs)(l.kSQ, {
                              children: [
                                  !S && M,
                                  (0, r.jsx)(l.sNh, {
                                      id: "edit-gdm",
                                      label: m.intl.string(m.t["5Q9+/P"]),
                                      action: () => (0, p.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: S ? m.intl.string(m.t.pPwcQU) : void 0,
                                  }),
                                  T,
                                  S && M,
                              ],
                          }),
                          (0, r.jsx)(l.kSQ, { children: k }),
                          (0, r.jsx)(l.kSQ, { children: !S && P }),
                          (0, r.jsxs)(l.kSQ, {
                              children: [S && P, N, Z],
                          }),
                          (0, r.jsx)(l.kSQ, { children: C }),
                      ],
                  });
        },
        { object: v.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU],
);

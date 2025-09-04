n.r(t), n.d(t, { default: () => _ });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(239091),
    a = n(883385),
    o = n(108843),
    c = n(947440),
    u = n(100527),
    s = n(299206),
    d = n(895563),
    f = n(489618),
    O = n(769409),
    b = n(122074),
    h = n(314897),
    j = n(858687),
    y = n(461535),
    g = n(776568),
    p = n(981631),
    m = n(388032);
let _ = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: o } = e,
                _ = t.isOwner(h.default.getId()),
                v = (0, y.Z)(t),
                N = (0, g.ZP)(t),
                S = (0, b.Uf)(p.aIL, t.id, "top"),
                { rearrangeContextMenu: x } = f.Z.useExperiment({ location: u.Z.GROUP_DM_CONTEXT_MENU }),
                C = (0, j.Z)(t, a),
                P = (0, s.Z)({
                    id: t.id,
                    label: m.intl.string(m.t.gFHI3t),
                }),
                E = (0, c.Z)(t),
                T = (0, d.l)(t),
                I = (0, d.P)(t),
                U = _
                    ? (0, r.jsx)(i.sNh, {
                          id: "instant-invites",
                          label: m.intl.string(m.t.ngRFjY),
                          action: () =>
                              (0, i.ZDy)(async () => {
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
                : (0, r.jsxs)(i.v2r, {
                      navId: "gdm-context",
                      "aria-label": m.intl.string(m.t.Xm41aW),
                      onClose: l.Zy,
                      onSelect: o,
                      children: [
                          (0, r.jsxs)(i.kSQ, {
                              children: [v, S, T],
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  !x && U,
                                  (0, r.jsx)(i.sNh, {
                                      id: "edit-gdm",
                                      label: m.intl.string(m.t["5Q9+/P"]),
                                      action: () => (0, O.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: x ? m.intl.string(m.t.pPwcQU) : void 0,
                                  }),
                                  x && U,
                              ],
                          }),
                          (0, r.jsx)(i.kSQ, { children: E }),
                          (0, r.jsx)(i.kSQ, { children: !x && N }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [x && N, I, C],
                          }),
                          (0, r.jsx)(i.kSQ, { children: P }),
                      ],
                  });
        },
        { object: p.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU],
);

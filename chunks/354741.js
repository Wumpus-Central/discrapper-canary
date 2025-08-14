n.r(t), n.d(t, { default: () => v });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(239091),
    l = n(883385),
    o = n(108843),
    d = n(947440),
    c = n(100527),
    s = n(658138),
    u = n(299206),
    b = n(895563),
    f = n(489618),
    h = n(769409),
    p = n(122074),
    g = n(314897),
    j = n(858687),
    O = n(461535),
    y = n(776568),
    _ = n(981631),
    m = n(388032);
let v = (0, o.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: o } = e,
                v = t.isOwner(g.default.getId()),
                x = (0, O.Z)(t),
                P = (0, y.ZP)(t),
                Z = (0, p.Uf)(_.aIL, t.id, "top"),
                { rearrangeContextMenu: C } = f.Z.useExperiment({ location: c.Z.GROUP_DM_CONTEXT_MENU }),
                w = (0, j.Z)(t, l),
                S = (0, u.Z)({
                    id: t.id,
                    label: m.intl.string(m.t.gFHI3t),
                }),
                k = (0, d.Z)(t),
                E = (0, b.l)(t),
                N = (0, b.P)(t),
                M = (0, s.D)(t),
                T = v
                    ? (0, r.jsx)(i.sNh, {
                          id: "instant-invites",
                          label: m.intl.string(m.t.ngRFjY),
                          action: () =>
                              (0, i.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e("12830"), n.e("97573")]).then(
                                      n.bind(n, 892382),
                                  );
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
                      onClose: a.Zy,
                      onSelect: o,
                      children: [
                          (0, r.jsxs)(i.kSQ, {
                              children: [x, Z, E],
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  !C && T,
                                  (0, r.jsx)(i.sNh, {
                                      id: "edit-gdm",
                                      label: m.intl.string(m.t["5Q9+/P"]),
                                      action: () => (0, h.B)(t.id, c.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: C ? m.intl.string(m.t.pPwcQU) : void 0,
                                  }),
                                  M,
                                  C && T,
                              ],
                          }),
                          (0, r.jsx)(i.kSQ, { children: k }),
                          (0, r.jsx)(i.kSQ, { children: !C && P }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [C && P, N, w],
                          }),
                          (0, r.jsx)(i.kSQ, { children: S }),
                      ],
                  });
        },
        { object: _.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.GROUP_DM_MENU],
);

n.r(t), n.d(t, { default: () => y });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(239091),
    a = n(883385),
    o = n(108843),
    d = n(947440),
    c = n(100527),
    u = n(299206),
    s = n(895563),
    f = n(489618),
    h = n(769409),
    v = n(314897),
    O = n(858687),
    b = n(461535),
    g = n(776568),
    p = n(981631),
    _ = n(388032);
let y = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: o } = e,
                p = t.isOwner(v.default.getId()),
                y = (0, b.Z)(t),
                E = (0, g.ZP)(t),
                { rearrangeContextMenu: C } = f.Z.useExperiment({ location: c.Z.GROUP_DM_CONTEXT_MENU }),
                m = (0, O.Z)(t, a),
                Z = (0, u.Z)({
                    id: t.id,
                    label: _.intl.string(_.t.gFHI3t),
                }),
                j = (0, d.Z)(t),
                A = (0, s.l)(t),
                N = (0, s.P)(t),
                P = p
                    ? (0, i.jsx)(r.sNh, {
                          id: "instant-invites",
                          label: _.intl.string(_.t.ngRFjY),
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
                      "aria-label": _.intl.string(_.t.Xm41aW),
                      onClose: l.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsxs)(r.kSQ, {
                              children: [y, A],
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  !C && P,
                                  (0, i.jsx)(r.sNh, {
                                      id: "edit-gdm",
                                      label: _.intl.string(_.t["5Q9+/P"]),
                                      action: () => (0, h.B)(t.id, c.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: C ? _.intl.string(_.t.pPwcQU) : void 0,
                                  }),
                                  C && P,
                              ],
                          }),
                          (0, i.jsx)(r.kSQ, { children: j }),
                          (0, i.jsx)(r.kSQ, { children: !C && E }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [C && E, N, m],
                          }),
                          (0, i.jsx)(r.kSQ, { children: Z }),
                      ],
                  });
        },
        { object: p.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.GROUP_DM_MENU],
);

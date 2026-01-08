n.r(t), n.d(t, { default: () => P });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(239091),
    a = n(883385),
    o = n(108843),
    c = n(947440),
    s = n(100527),
    u = n(299206),
    d = n(895563),
    f = n(212205),
    b = n(769409),
    O = n(314897),
    h = n(858687),
    y = n(461535),
    g = n(776568),
    p = n(981631),
    j = n(388032);
let P = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: o } = e,
                p = t.isOwner(O.default.getId()),
                P = (0, y.Z)(t),
                v = (0, g.ZP)(t),
                m = (0, h.Z)(t, a),
                Z = (0, u.Z)({
                    id: t.id,
                    label: j.intl.string(j.t.gFHI3k),
                }),
                w = (0, c.Z)(t),
                _ = (0, d.l)(t),
                S = (0, d.P)(t),
                E = (0, f.Z)(t),
                k = p
                    ? (0, r.jsx)(i.sNh, {
                          id: "instant-invites",
                          label: j.intl.string(j.t.ngRFjZ),
                          action: () =>
                              (0, i.ZDy)(async () => {
                                  let { default: e } = await n.e("72071").then(n.bind(n, 472945));
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
                      "aria-label": j.intl.string(j.t.Xm41aV),
                      onClose: l.Zy,
                      onSelect: o,
                      children: [
                          (0, r.jsxs)(i.kSQ, {
                              children: [P, _, E],
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  k,
                                  (0, r.jsx)(i.sNh, {
                                      id: "edit-gdm",
                                      label: j.intl.string(j.t["5Q9+/L"]),
                                      action: () => (0, b.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.kSQ, { children: w }),
                          (0, r.jsx)(i.kSQ, { children: v }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [S, m],
                          }),
                          (0, r.jsx)(i.kSQ, { children: Z }),
                      ],
                  });
        },
        { object: p.qAy.CONTEXT_MENU },
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_MENU],
);

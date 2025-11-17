n.r(t), n.d(t, { default: () => v });
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
    b = n(489618),
    O = n(769409),
    h = n(314897),
    p = n(858687),
    y = n(461535),
    g = n(776568),
    j = n(981631),
    P = n(388032);
let v = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: o } = e,
                j = t.isOwner(h.default.getId()),
                v = (0, y.Z)(t),
                m = (0, g.ZP)(t),
                { rearrangeContextMenu: Z } = b.Z.useExperiment({ location: s.Z.GROUP_DM_CONTEXT_MENU }),
                w = (0, p.Z)(t, a),
                _ = (0, u.Z)({
                    id: t.id,
                    label: P.intl.string(P.t.gFHI3k),
                }),
                E = (0, c.Z)(t),
                S = (0, d.l)(t),
                x = (0, d.P)(t),
                k = (0, f.Z)(t),
                C = j
                    ? (0, r.jsx)(i.sNh, {
                          id: "instant-invites",
                          label: P.intl.string(P.t.ngRFjZ),
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
                      "aria-label": P.intl.string(P.t.Xm41aV),
                      onClose: l.Zy,
                      onSelect: o,
                      children: [
                          (0, r.jsxs)(i.kSQ, {
                              children: [v, S, k],
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  !Z && C,
                                  (0, r.jsx)(i.sNh, {
                                      id: "edit-gdm",
                                      label: P.intl.string(P.t["5Q9+/L"]),
                                      action: () => (0, O.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU),
                                      subtext: Z ? P.intl.string(P.t.pPwcQa) : void 0,
                                  }),
                                  Z && C,
                              ],
                          }),
                          (0, r.jsx)(i.kSQ, { children: E }),
                          (0, r.jsx)(i.kSQ, { children: !Z && m }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [Z && m, x, w],
                          }),
                          (0, r.jsx)(i.kSQ, { children: _ }),
                      ],
                  });
        },
        { object: j.qAy.CONTEXT_MENU },
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_MENU],
);

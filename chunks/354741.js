n.r(t), n.d(t, { default: () => E });
var i = n(255367);
n(73800);
var r = n(481060),
    a = n(239091),
    l = n(883385),
    o = n(108843),
    c = n(947440),
    d = n(100527),
    s = n(658138),
    u = n(299206),
    f = n(895563),
    p = n(212205),
    b = n(62420),
    v = n(769409),
    _ = n(122074),
    O = n(314897),
    g = n(858687),
    h = n(461535),
    A = n(776568),
    y = n(981631),
    C = n(388032);
let E = (0, o.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: o } = e,
                E = t.isOwner(O.default.getId()),
                N = (0, h.Z)(t),
                m = (0, A.ZP)(t),
                T = (0, _.Uf)(y.aIL, t.id, "top"),
                I = (0, g.Z)(t, l),
                S = (0, u.Z)({
                    id: t.id,
                    label: C.intl.string(C.t.gFHI3t),
                }),
                Z = (0, c.Z)(t),
                R = (0, f.l)(t),
                U = (0, f.P)(t),
                j = (0, p.Z)(t),
                P = (0, b.Z)(t),
                x = (0, s.D)(t);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(r.v2r, {
                      navId: "gdm-context",
                      "aria-label": C.intl.string(C.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsx)(r.kSQ, { children: N }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [R, j, P],
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  E
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
                                                                            Object.getOwnPropertySymbols(n).filter(
                                                                                function (e) {
                                                                                    return Object.getOwnPropertyDescriptor(
                                                                                        n,
                                                                                        e,
                                                                                    ).enumerable;
                                                                                },
                                                                            ),
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
                                      : null,
                                  (0, i.jsx)(r.sNh, {
                                      id: "edit-gdm",
                                      label: C.intl.string(C.t["5Q9+/P"]),
                                      action: () => (0, v.B)(t.id, d.Z.GROUP_DM_CONTEXT_MENU),
                                  }),
                                  x,
                              ],
                          }),
                          (0, i.jsx)(r.kSQ, { children: Z }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [m, T],
                          }),
                          (0, i.jsx)(r.kSQ, { children: I }),
                          (0, i.jsx)(r.kSQ, { children: U }),
                          (0, i.jsx)(r.kSQ, { children: S }),
                      ],
                  });
        },
        { object: y.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU],
);

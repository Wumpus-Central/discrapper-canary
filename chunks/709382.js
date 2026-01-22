n.d(t, {
    A: () => g,
    i: () => m,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(607470),
    o = n(572808),
    l = n(860923),
    c = n(149505),
    u = n(577632),
    d = n(451772),
    f = n(822768),
    p = n(185014);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = {
        width: 2180,
        height: 1536,
    },
    g = (e) => {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: i,
                channel: _,
                idle: m,
                showAmbientEffects: g = !0,
                enableAnimations: E = !0,
                skipNewUserEducation: b = !1,
                onSeatClick: y,
                disableInteractions: O = !1,
            } = e,
            A = (0, l.A)();
        return null == A
            ? null
            : (0, r.jsxs)("div", {
                  className: p.cA,
                  children: [
                      (0, r.jsx)("img", {
                          className: p.Tp,
                          src: A.backgrounds.sky.static,
                          alt: "",
                          draggable: !1,
                      }),
                      g && (0, r.jsx)(f.A, {}),
                      (0, r.jsx)("img", {
                          className: p.Tp,
                          src: A.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      g && (0, r.jsx)(c.A, {}),
                      (0, r.jsx)("img", {
                          className: p.Tp,
                          src: A.backgrounds.river.static,
                          alt: "",
                          draggable: !1,
                      }),
                      g &&
                          (0, r.jsx)(s.A, {
                              className: p.Ki,
                              style: { transform: "translate(779px, 1009px)" },
                              src: A.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, r.jsx)("img", {
                          className: p.Tp,
                          src: A.backgrounds.camp.static,
                          alt: "",
                          draggable: !1,
                      }),
                      o.dG.map((e) => {
                          var n;
                          return (0, r.jsx)(
                              d.A,
                              h(
                                  {
                                      occupant: null == (n = t[e.id - 1]) ? void 0 : n.claimedBy,
                                      onClick: y,
                                      skipNewUserEducation: b,
                                  },
                                  e,
                              ),
                              e.id,
                          );
                      }),
                      n.map((e) =>
                          (0, r.jsx)(
                              u.A,
                              {
                                  seats: t,
                                  participant: e,
                                  participants: i,
                                  channel: _,
                                  idle: m,
                                  enableAnimations: E,
                              },
                              e.userId,
                          ),
                      ),
                      g &&
                          (0, r.jsxs)("div", {
                              className: a()(p.cA, p.ey),
                              children: [
                                  (0, r.jsx)(s.A, {
                                      className: p.Ki,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: A.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(s.A, {
                                      className: p.Ki,
                                      src: A.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(s.A, {
                                      className: p.Ki,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: A.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      O && (0, r.jsx)("div", { className: p.ps }),
                  ],
              });
    };

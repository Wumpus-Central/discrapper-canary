n.d(t, {
    U: () => h,
    Z: () => g,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(70097),
    s = n(390551),
    l = n(195045),
    c = n(292914),
    u = n(368835),
    d = n(911397),
    f = n(882354),
    p = n(263731);
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
function m(e) {
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
let h = {
        width: 2180,
        height: 1536,
    },
    g = (e) => {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: i,
                channel: _,
                idle: h,
                showAmbientEffects: g = !0,
                enableAnimations: E = !0,
                skipNewUserEducation: b = !1,
                onSeatClick: y,
                disableInteractions: O = !1,
            } = e,
            v = (0, l.Z)();
        return null == v
            ? null
            : (0, r.jsxs)("div", {
                  className: p.environment,
                  children: [
                      (0, r.jsx)("img", {
                          className: p.background,
                          src: v.backgrounds.sky.static,
                          alt: "",
                          draggable: !1,
                      }),
                      g && (0, r.jsx)(f.Z, {}),
                      (0, r.jsx)("img", {
                          className: p.background,
                          src: v.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      g && (0, r.jsx)(c.Z, {}),
                      (0, r.jsx)("img", {
                          className: p.background,
                          src: v.backgrounds.river.static,
                          alt: "",
                          draggable: !1,
                      }),
                      g &&
                          (0, r.jsx)(o.Z, {
                              className: p.video,
                              style: { transform: "translate(779px, 1009px)" },
                              src: v.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, r.jsx)("img", {
                          className: p.background,
                          src: v.backgrounds.camp.static,
                          alt: "",
                          draggable: !1,
                      }),
                      s.Is.map((e) => {
                          var n;
                          return (0, r.jsx)(
                              d.Z,
                              m(
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
                              u.Z,
                              {
                                  seats: t,
                                  participant: e,
                                  participants: i,
                                  channel: _,
                                  idle: h,
                                  enableAnimations: E,
                              },
                              e.userId,
                          ),
                      ),
                      g &&
                          (0, r.jsxs)("div", {
                              className: a()(p.environment, p.noInteract),
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      className: p.video,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: v.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(o.Z, {
                                      className: p.video,
                                      src: v.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(o.Z, {
                                      className: p.video,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: v.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      O && (0, r.jsx)("div", { className: p.interactionOverlay }),
                  ],
              });
    };

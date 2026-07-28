"use strict";
n.d(t, { A: () => h, i: () => A });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(607470),
    l = n(572808),
    o = n(860923),
    d = n(149505),
    c = n(577632),
    u = n(451772),
    _ = n(822768),
    E = n(749719);
let A = { width: 2180, height: 1536 },
    h = function (e) {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: r,
                channel: A,
                idle: h,
                showAmbientEffects: I = !0,
                enableAnimations: f = !0,
                skipNewUserEducation: p = !1,
                onSeatClick: T,
                disableInteractions: m = !1,
            } = e,
            g = (0, o.A)();
        return null == g
            ? null
            : (0, i.jsxs)("div", {
                  className: E.cA,
                  children: [
                      (0, i.jsx)("img", { className: E.Tp, src: g.backgrounds.sky.static, alt: "", draggable: !1 }),
                      I && (0, i.jsx)(_.A, {}),
                      (0, i.jsx)("img", {
                          className: E.Tp,
                          src: g.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      I && (0, i.jsx)(d.A, {}),
                      (0, i.jsx)("img", { className: E.Tp, src: g.backgrounds.river.static, alt: "", draggable: !1 }),
                      I &&
                          (0, i.jsx)(s.A, {
                              className: E.Ki,
                              style: { transform: "translate(779px, 1009px)" },
                              src: g.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, i.jsx)("img", { className: E.Tp, src: g.backgrounds.camp.static, alt: "", draggable: !1 }),
                      l.dG.map((e) =>
                          (0, i.jsx)(
                              u.A,
                              { occupant: t[e.id - 1]?.claimedBy, onClick: T, skipNewUserEducation: p, ...e },
                              e.id,
                          ),
                      ),
                      n.map((e) =>
                          (0, i.jsx)(
                              c.A,
                              { seats: t, participant: e, participants: r, channel: A, idle: h, enableAnimations: f },
                              e.userId,
                          ),
                      ),
                      I &&
                          (0, i.jsxs)("div", {
                              className: a()(E.cA, E.ey),
                              children: [
                                  (0, i.jsx)(s.A, {
                                      className: E.Ki,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: g.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, i.jsx)(s.A, {
                                      className: E.Ki,
                                      src: g.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, i.jsx)(s.A, {
                                      className: E.Ki,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: g.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      m && (0, i.jsx)("div", { className: E.ps }),
                  ],
              });
    };

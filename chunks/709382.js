"use strict";
n.d(t, { A: () => p, i: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(607470),
    o = n(572808),
    l = n(860923),
    u = n(149505),
    c = n(577632),
    d = n(451772),
    _ = n(822768),
    h = n(683807);
let f = { width: 2180, height: 1536 },
    p = (e) => {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: r,
                channel: f,
                idle: p,
                showAmbientEffects: E = !0,
                enableAnimations: m = !0,
                skipNewUserEducation: g = !1,
                onSeatClick: A,
                disableInteractions: I = !1,
            } = e,
            T = (0, l.A)();
        return null == T
            ? null
            : (0, i.jsxs)("div", {
                  className: h.cA,
                  children: [
                      (0, i.jsx)("img", { className: h.Tp, src: T.backgrounds.sky.static, alt: "", draggable: !1 }),
                      E && (0, i.jsx)(_.A, {}),
                      (0, i.jsx)("img", {
                          className: h.Tp,
                          src: T.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      E && (0, i.jsx)(u.A, {}),
                      (0, i.jsx)("img", { className: h.Tp, src: T.backgrounds.river.static, alt: "", draggable: !1 }),
                      E &&
                          (0, i.jsx)(a.A, {
                              className: h.Ki,
                              style: { transform: "translate(779px, 1009px)" },
                              src: T.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, i.jsx)("img", { className: h.Tp, src: T.backgrounds.camp.static, alt: "", draggable: !1 }),
                      o.dG.map((e) =>
                          (0, i.jsx)(
                              d.A,
                              { occupant: t[e.id - 1]?.claimedBy, onClick: A, skipNewUserEducation: g, ...e },
                              e.id,
                          ),
                      ),
                      n.map((e) =>
                          (0, i.jsx)(
                              c.A,
                              { seats: t, participant: e, participants: r, channel: f, idle: p, enableAnimations: m },
                              e.userId,
                          ),
                      ),
                      E &&
                          (0, i.jsxs)("div", {
                              className: s()(h.cA, h.ey),
                              children: [
                                  (0, i.jsx)(a.A, {
                                      className: h.Ki,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: T.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, i.jsx)(a.A, {
                                      className: h.Ki,
                                      src: T.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, i.jsx)(a.A, {
                                      className: h.Ki,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: T.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      I && (0, i.jsx)("div", { className: h.ps }),
                  ],
              });
    };

"use strict";
n.d(t, { A: () => h, i: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(607470),
    o = n(572808),
    l = n(860923),
    u = n(149505),
    c = n(577632),
    d = n(451772),
    _ = n(822768),
    f = n(683807);
let p = { width: 2180, height: 1536 },
    h = (e) => {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: i,
                channel: p,
                idle: h,
                showAmbientEffects: E = !0,
                enableAnimations: m = !0,
                skipNewUserEducation: g = !1,
                onSeatClick: A,
                disableInteractions: I = !1,
            } = e,
            T = (0, l.A)();
        return null == T
            ? null
            : (0, r.jsxs)("div", {
                  className: f.cA,
                  children: [
                      (0, r.jsx)("img", { className: f.Tp, src: T.backgrounds.sky.static, alt: "", draggable: !1 }),
                      E && (0, r.jsx)(_.A, {}),
                      (0, r.jsx)("img", {
                          className: f.Tp,
                          src: T.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      E && (0, r.jsx)(u.A, {}),
                      (0, r.jsx)("img", { className: f.Tp, src: T.backgrounds.river.static, alt: "", draggable: !1 }),
                      E &&
                          (0, r.jsx)(a.A, {
                              className: f.Ki,
                              style: { transform: "translate(779px, 1009px)" },
                              src: T.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, r.jsx)("img", { className: f.Tp, src: T.backgrounds.camp.static, alt: "", draggable: !1 }),
                      o.dG.map((e) =>
                          (0, r.jsx)(
                              d.A,
                              { occupant: t[e.id - 1]?.claimedBy, onClick: A, skipNewUserEducation: g, ...e },
                              e.id,
                          ),
                      ),
                      n.map((e) =>
                          (0, r.jsx)(
                              c.A,
                              { seats: t, participant: e, participants: i, channel: p, idle: h, enableAnimations: m },
                              e.userId,
                          ),
                      ),
                      E &&
                          (0, r.jsxs)("div", {
                              className: s()(f.cA, f.ey),
                              children: [
                                  (0, r.jsx)(a.A, {
                                      className: f.Ki,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: T.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(a.A, {
                                      className: f.Ki,
                                      src: T.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(a.A, {
                                      className: f.Ki,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: T.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      I && (0, r.jsx)("div", { className: f.ps }),
                  ],
              });
    };

o.d(_, { Ay: () => U, gi: () => M, k0: () => e });
var R = o(477900),
    E = o(582128),
    I = o(132500),
    r = o(661531);
let M = Object.freeze({
        PREMIUM_TIER_0: (0, I.A)(),
        PREMIUM_TIER_1: (0, I.A)(),
        PREMIUM_TIER_2: (0, I.A)(),
        PREMIUM_GUILD: (0, I.A)(),
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, I.A)(),
    }),
    e = {
        PREMIUM_TIER_0: `url(#${M.PREMIUM_TIER_0})`,
        PREMIUM_TIER_1: `url(#${M.PREMIUM_TIER_1})`,
        PREMIUM_TIER_2: `url(#${M.PREMIUM_TIER_2})`,
        PREMIUM_GUILD: `url(#${M.PREMIUM_GUILD})`,
        PREMIUM_GUILD_BADGE_V2_BACKGROUND: `url(#${M.PREMIUM_GUILD_BADGE_V2_BACKGROUND})`,
    },
    t =
        588245 != o.j
            ? E.memo(
                  function () {
                      return (0, R.jsxs)("svg", {
                          viewBox: "0 0 1 1",
                          style: {
                              position: "absolute",
                              pointerEvents: "none",
                              top: -1,
                              left: -1,
                              width: 1,
                              height: 1,
                          },
                          "aria-hidden": !0,
                          children: [
                              (0, R.jsxs)("linearGradient", {
                                  id: M.PREMIUM_TIER_0,
                                  children: [
                                      (0, R.jsx)("stop", {
                                          offset: ".1762",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css,
                                      }),
                                      (0, R.jsx)("stop", {
                                          offset: "0.5351",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css,
                                      }),
                                      (0, R.jsx)("stop", {
                                          offset: "1",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css,
                                      }),
                                  ],
                              }),
                              (0, R.jsxs)("linearGradient", {
                                  id: M.PREMIUM_TIER_1,
                                  children: [
                                      (0, R.jsx)("stop", { stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css }),
                                      (0, R.jsx)("stop", {
                                          offset: "1",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
                                      }),
                                  ],
                              }),
                              (0, R.jsxs)("linearGradient", {
                                  id: M.PREMIUM_TIER_2,
                                  children: [
                                      (0, R.jsx)("stop", {
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css,
                                      }),
                                      (0, R.jsx)("stop", {
                                          offset: "0.502368",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                                      }),
                                      (0, R.jsx)("stop", {
                                          offset: "1",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css,
                                      }),
                                  ],
                              }),
                              (0, R.jsxs)("linearGradient", {
                                  id: M.PREMIUM_GUILD,
                                  children: [
                                      (0, R.jsx)("stop", { stopColor: r.A.unsafe_rawColors.GUILD_BOOSTING_BLUE.css }),
                                      (0, R.jsx)("stop", {
                                          offset: "1",
                                          stopColor: r.A.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css,
                                      }),
                                  ],
                              }),
                              (0, R.jsxs)("linearGradient", {
                                  id: M.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                                  gradientTransform: "rotate(45)",
                                  children: [
                                      (0, R.jsx)("stop", {
                                          offset: "0",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css,
                                      }),
                                      (0, R.jsx)("stop", {
                                          offset: "1",
                                          stopColor: r.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                                      }),
                                  ],
                              }),
                          ],
                      });
                  },
                  () => !0,
              )
            : null,
    U = 588245 != o.j ? t : null;

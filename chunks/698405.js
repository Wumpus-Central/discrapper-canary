var i,
    l = n(477900),
    o = n(582128),
    a = n(855986),
    r = n(862482),
    s = n(305866),
    c = n(534514),
    u = n(834730),
    d = n(821609),
    m = n(778858),
    f = n(915089),
    g = n(403362),
    h = n(857071),
    p = n(652215),
    A = n(792996),
    N = n(521790),
    E = (((i = {})[(i.CHAT = 0)] = "CHAT"), (i[(i.REACTIONS = 1)] = "REACTIONS"), i);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { type: t, guild: i, closePopout: E, ctaRef: j } = e,
                I = (0, f.GV)(),
                [T, R] = o.useState(!1),
                b = (0, a.bG)([h.A], () => h.A.isLurking(i.id), [i.id]);
            o.useEffect(() => {
                T && !b && E();
            }, [T, b, E]);
            let x = null,
                v = A.intl.string(A.t.d7b1p6);
            switch (t) {
                case 0:
                    x = A.intl.string(A.t.Xiwf1Q);
                    break;
                case 1:
                    x = A.intl.string(A.t.GXvlU9);
                    break;
                default:
                    return (0, g.xb)(t);
            }
            return null == x
                ? null
                : (0, l.jsxs)(s.l, {
                      className: N.kL,
                      "aria-labelledby": I,
                      children: [
                          (0, l.jsx)("img", { alt: "", className: N.Sl, src: n(303528) }),
                          (0, l.jsxs)("div", {
                              className: N.Qs,
                              children: [
                                  (0, l.jsx)(c.D, { variant: "heading-sm/semibold", id: I, children: x }),
                                  (0, l.jsx)(u.E, { color: "text-default", variant: "body-sm/normal", children: v }),
                                  (0, l.jsxs)("div", {
                                      className: N.UD,
                                      children: [
                                          (0, l.jsx)(d.$, {
                                              variant: "primary",
                                              text: A.intl.string(A.t["9VLmlZ"]),
                                              buttonRef: j,
                                              onClick: async function () {
                                                  R(!0);
                                                  try {
                                                      (await m.A.joinGuild(i.id, { source: p.Q4z.CHAT_INPUT_BLOCKER }),
                                                          E());
                                                  } catch {
                                                      R(!1);
                                                  }
                                              },
                                              loading: T,
                                          }),
                                          (0, l.jsx)(r.$n, {
                                              onClick: E,
                                              look: r.$n.Looks.BLANK,
                                              className: N.ZT,
                                              children: A.intl.string(A.t["2m+Sqk"]),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        w: E,
    },
);

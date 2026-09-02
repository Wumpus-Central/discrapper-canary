i.d(a, { default: () => f });
var e = i(477900),
    r = i(772707),
    s = i(834730),
    n = i(821609),
    l = i(43594),
    c = i(523084),
    d = i(976860),
    o = i(349085),
    p = i(527664),
    u = i(652215),
    m = i(746080),
    h = i(394107),
    x = i(375708),
    g = i(490924),
    v = i(823980);
function f(t) {
    let { gameServerGame: a, guildId: i, status: f, ...k } = t,
        S = (0, o.A)(a.gameId, "cover"),
        j = (0, l.D)("GameServerSuccessModal"),
        V = x.intl.string("created" === f ? h.default["4lLdBM"] : h.default.VPDgHa),
        C = x.intl.formatToPlainString(h.default.yL6BiH, { provider: (0, p.A)(a.provider) });
    function A() {
        (0, d.pX)(u.BVt.CHANNEL(i, m.VV.GAME_SERVERS)), k.onClose();
    }
    return "control" !== j
        ? (0, e.jsx)(r.k, {
              ...k,
              graphic: { type: "image", src: S ?? "", aspectRatio: "16/9" },
              title: V,
              actions: [{ variant: "primary", text: x.intl.string(h.default.VkItSr), onClick: A }],
              children: (0, e.jsx)(s.E, { variant: "text-md/normal", children: C }),
          })
        : (0, e.jsx)(c.A, {
              title: V,
              description: C,
              image: (0, e.jsx)("div", {
                  className: g.Z,
                  children: (0, e.jsx)("img", { className: g.S, alt: "", src: S ?? "" }),
              }),
              button: (0, e.jsx)("div", {
                  "data-button-hoisted-classname-wrapper": !0,
                  className: v.x6,
                  children: (0, e.jsx)(n.$, { variant: "primary", text: x.intl.string(h.default.VkItSr), onClick: A }),
              }),
              ...k,
          });
}

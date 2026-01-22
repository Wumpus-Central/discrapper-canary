n.d(t, {
    HW: () => L,
    K8: () => H,
    UB: () => G,
    YX: () => B,
    bo: () => U,
    jz: () => V,
    lw: () => k,
    mn: () => F,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(512750),
    s = n(311907),
    o = n(116833),
    c = n(342494),
    u = n(793574),
    d = n(509536),
    f = n(976860),
    p = n(71393),
    h = n(379229),
    b = n(990208),
    g = n(864310),
    m = n(363487),
    A = n(828162),
    y = n(490557),
    O = n(220628),
    j = n(867060),
    v = n(800007),
    x = n(568065),
    E = n(652215),
    _ = n(746080),
    C = n(49999),
    S = n(294726),
    I = n(333354),
    N = n(985018),
    T = n(7946),
    P = n(390175),
    w = n(346213),
    R = n(108432),
    D = n(581665),
    M = n(20874);

function L(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: a } = e;
    return (0, r.jsx)(K, {
        asset: (0, r.jsx)(y.b, {
            className: i()(T.Sl, T.SV),
        }),
        title: N.intl.formatToPlainString(I.default["Zg/m9K"], {
            perkName: n.title,
        }),
        body: N.intl.formatToPlainString(I.default["1EGXSK"], {
            perkName: n.title,
        }),
        actions: [
            {
                text: N.intl.string(N.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}

function G(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        i = (0, m.A)(t);
    return (0, r.jsx)(c.HZ, {
        targetElementRef: l,
        assetUrl: R.A,
        title: N.intl.string(I.default.QpQBPQ),
        body: N.intl.string(I.default["6hn0xF"]),
        action: {
            text: N.intl.string(N.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: i ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: i ? "top" : "center",
        caretConfig: i
            ? {
                  align: "start",
              }
            : {
                  align: "center",
              },
        onRequestClose: () => (null == n ? void 0 : n(C.i.USER_DISMISS)),
    });
}

function k(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: a } = e,
        o = (0, s.bG)([p.A], () => {
            var e;
            return null == (e = p.A.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c, isLoading: d, error: f } = (0, O.A)(t, n[0]),
        h = (0, b.A)(n[0], !0);
    if (((0, j.A)(f), 0 === n.length)) return;
    let g =
            n.length >= 3
                ? N.intl.formatToPlainString(I.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? N.intl.formatToPlainString(I.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : N.intl.formatToPlainString(I.default.ZF8NT6, {
                        perk: n[0].title,
                    }),
        m = 1 === n.length;
    return (0, r.jsx)(K, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(y.b, {
                      className: i()(T.Sl, T.SV),
                  })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: h,
                      className: T.Sl,
                  }),
        title: N.intl.formatToPlainString(I.default.LmpChE, {
            guildName: o,
        }),
        body: g,
        actions: [
            {
                text: m ? N.intl.string(I.default.gSxlHf) : N.intl.string(N.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? c() : (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}

function U(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: i } = e,
        s = n.find((e) => e.skuId === a.FB);
    if (null != s)
        return (0, r.jsx)(K, {
            targetElementRef: l,
            title: N.intl.string(I.default.Ygpx4Q),
            body: N.intl.string(I.default.mmNkUA),
            size: "video",
            asset: M.A,
            actions: [
                {
                    text: N.intl.string(N.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, s.skuId);
                    },
                },
            ],
            markAsDismissed: i,
        });
    let o = n.find((e) => x.aH.has(e.skuId));
    return null != o
        ? (0, r.jsx)(K, {
              targetElementRef: l,
              title: N.intl.string(I.default["kA2c+n"]),
              body: N.intl.string(I.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: D.A,
                  className: T.Sl,
              }),
              actions: [
                  {
                      text: N.intl.string(N.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                      },
                  },
              ],
              markAsDismissed: i,
          })
        : null;
}

function V(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: a } = e,
        { available: s } = (0, g.A)(t);
    return (0, r.jsx)(K, {
        targetElementRef: a,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.A,
            className: i()(T.Sl, T.RV),
        }),
        title: N.intl.string(n === h.o.GAME_SERVER_HOSTING_AVAILABLE ? S.default.wXLChx : S.default["8z8RpY"]),
        body:
            n === h.o.GAME_SERVER_HOSTING_AVAILABLE
                ? N.intl.string(S.default.lZ6m7Q)
                : N.intl.format(S.default["IQ1E+d"], {
                      boostCount: s,
                  }),
        actions: [
            {
                text: N.intl.string(N.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}

function F(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e;
    return (0, r.jsx)(K, {
        targetElementRef: l,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.A,
            className: i()(T.Sl, T.RV),
        }),
        title: N.intl.string(S.default["eX64+z"]),
        body: N.intl.string(S.default.NpgfEB),
        actions: [
            {
                text: N.intl.string(N.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(C.i.TAKE_ACTION), (0, f.pX)(E.BVt.CHANNEL(t, _.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}

function H(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e;
    return (0, r.jsx)(K, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: {
            align: "center",
        },
        asset: (0, r.jsx)("img", {
            alt: "",
            src: P.A,
            className: i()(T.Sl, T.RV),
        }),
        title: N.intl.string(S.default.t3LNW1),
        body: N.intl.string(S.default["9qPJJd"]),
        actions: [
            {
                text: N.intl.string(S.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(C.i.TAKE_ACTION),
                        (0, d.K)({
                            guildId: t,
                            location: {
                                section: E.JJy.GUILD_HEADER,
                                object: E.ZSU.BUTTON_CTA,
                            },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}

function B(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        a = (0, m.A)(t);
    return (0, r.jsx)(K, {
        targetElementRef: l,
        position: a ? "right" : "bottom",
        align: a ? "top" : "center",
        alignmentStrategy: "edge",
        caretConfig: a
            ? {
                  align: "start",
              }
            : {
                  align: "center",
              },
        asset: (0, r.jsx)("img", {
            alt: "",
            src: w.A,
            className: i()(T.Sl, T.RV),
        }),
        title: N.intl.string(S.default["wy+j5s"]),
        body: N.intl.string(S.default.uHvxkb),
        actions: [
            {
                text: N.intl.string(S.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(C.i.TAKE_ACTION),
                        a
                            ? (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, v.W5)
                            : (0, d.K)({
                                  guildId: t,
                                  location: {
                                      section: E.JJy.GUILD_HEADER,
                                      object: E.ZSU.BUTTON_CTA,
                                  },
                                  scrollToPowerupCards: !0,
                              });
                },
            },
        ],
        markAsDismissed: n,
    });
}

function K(e) {
    var t, n;
    let {
            caretConfig: l = {
                align: "start",
            },
            position: i = "right",
            align: a = "top",
            alignmentStrategy: s = "edge",
            markAsDismissed: u,
            size: d = "lg",
            asset: f,
        } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["caretConfig", "position", "align", "alignmentStrategy", "markAsDismissed", "size", "asset"]);
    return (0, r.jsx)(
        c.AM,
        ((t = (function (e) {
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
        })({}, p)),
        (n = n =
            {
                graphic: {
                    type: "dynamic",
                    component: o.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
                    props: {
                        asset: f,
                    },
                },
                size: d,
                shouldShow: !0,
                position: i,
                caretConfig: l,
                alignmentStrategy: s,
                align: a,
                onRequestClose: () => (null == u ? void 0 : u(C.i.USER_DISMISS)),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}

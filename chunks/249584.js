n.d(t, {
    HW: () => D,
    K8: () => B,
    UB: () => M,
    bo: () => k,
    jz: () => G,
    lw: () => L,
    mn: () => U,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(512750),
    a = n(311907),
    o = n(116833),
    c = n(342494),
    u = n(793574),
    d = n(509536),
    p = n(976860),
    h = n(71393),
    f = n(379229),
    g = n(990208),
    m = n(864310),
    b = n(363487),
    A = n(828162),
    y = n(490557),
    _ = n(220628),
    O = n(867060),
    j = n(568065),
    v = n(652215),
    x = n(746080),
    E = n(49999),
    C = n(294726),
    S = n(333354),
    I = n(985018),
    N = n(7946),
    T = n(390175),
    P = n(108432),
    w = n(581665),
    R = n(20874);

function D(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, r.jsx)(V, {
        asset: (0, r.jsx)(y.b, {
            className: i()(N.Sl, N.SV),
        }),
        title: I.intl.formatToPlainString(S.default["Zg/m9K"], {
            perkName: n.title,
        }),
        body: I.intl.formatToPlainString(S.default["1EGXSK"], {
            perkName: n.title,
        }),
        actions: [
            {
                text: I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}

function M(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        i = (0, b.A)(t);
    return (0, r.jsx)(c.HZ, {
        targetElementRef: l,
        assetUrl: P.A,
        title: I.intl.string(S.default.QpQBPQ),
        body: I.intl.string(S.default["6hn0xF"]),
        action: {
            text: I.intl.string(I.t.RzWDqY),
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
        onRequestClose: () => (null == n ? void 0 : n(E.i.USER_DISMISS)),
    });
}

function L(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        o = (0, a.bG)([h.A], () => {
            var e;
            return null == (e = h.A.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c, isLoading: d, error: p } = (0, _.A)(t, n[0]),
        f = (0, g.A)(n[0], !0);
    if (((0, O.A)(p), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? I.intl.formatToPlainString(S.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? I.intl.formatToPlainString(S.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : I.intl.formatToPlainString(S.default.ZF8NT6, {
                        perk: n[0].title,
                    }),
        b = 1 === n.length;
    return (0, r.jsx)(V, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(y.b, {
                      className: i()(N.Sl, N.SV),
                  })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: f,
                      className: N.Sl,
                  }),
        title: I.intl.formatToPlainString(S.default.LmpChE, {
            guildName: o,
        }),
        body: m,
        actions: [
            {
                text: b ? I.intl.string(S.default.gSxlHf) : I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), b ? c() : (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: d,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}

function k(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: i } = e,
        a = n.find((e) => e.skuId === s.FB);
    if (null != a)
        return (0, r.jsx)(V, {
            targetElementRef: l,
            title: I.intl.string(S.default.Ygpx4Q),
            body: I.intl.string(S.default.mmNkUA),
            size: "video",
            asset: R.A,
            actions: [
                {
                    text: I.intl.string(I.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: i,
        });
    let o = n.find((e) => j.aH.has(e.skuId));
    return null != o
        ? (0, r.jsx)(V, {
              targetElementRef: l,
              title: I.intl.string(S.default["kA2c+n"]),
              body: I.intl.string(S.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: w.A,
                  className: N.Sl,
              }),
              actions: [
                  {
                      text: I.intl.string(I.t.RzWDqY),
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

function G(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, m.A)(t);
    return (0, r.jsx)(V, {
        targetElementRef: s,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: T.A,
            className: i()(N.Sl, N.RV),
        }),
        title: I.intl.string(n === f.o.GAME_SERVER_HOSTING_AVAILABLE ? C.default.wXLChx : C.default["8z8RpY"]),
        body:
            n === f.o.GAME_SERVER_HOSTING_AVAILABLE
                ? I.intl.string(C.default.lZ6m7Q)
                : I.intl.format(C.default["IQ1E+d"], {
                      boostCount: a,
                  }),
        actions: [
            {
                text: I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, A.A)(t, u.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}

function U(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e;
    return (0, r.jsx)(V, {
        targetElementRef: l,
        asset: (0, r.jsx)("img", {
            alt: "",
            src: T.A,
            className: i()(N.Sl, N.RV),
        }),
        title: I.intl.string(C.default["eX64+z"]),
        body: I.intl.string(C.default.NpgfEB),
        actions: [
            {
                text: I.intl.string(I.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(E.i.TAKE_ACTION), (0, p.pX)(v.BVt.CHANNEL(t, x.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}

function B(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e;
    return (0, r.jsx)(V, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: {
            align: "center",
        },
        asset: (0, r.jsx)("img", {
            alt: "",
            src: T.A,
            className: i()(N.Sl, N.RV),
        }),
        title: I.intl.string(C.default.t3LNW1),
        body: I.intl.string(C.default["9qPJJd"]),
        actions: [
            {
                text: I.intl.string(C.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(E.i.TAKE_ACTION),
                        (0, d.K)({
                            guildId: t,
                            location: {
                                section: v.JJy.GUILD_HEADER,
                                object: v.ZSU.BUTTON_CTA,
                            },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}

function V(e) {
    var t, n;
    let {
            caretConfig: l = {
                align: "start",
            },
            position: i = "right",
            align: s = "top",
            alignmentStrategy: a = "edge",
            markAsDismissed: u,
            size: d = "lg",
            asset: p,
        } = e,
        h = (function (e, t) {
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
        })({}, h)),
        (n = n =
            {
                graphic: {
                    type: "dynamic",
                    component: o.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
                    props: {
                        asset: p,
                    },
                },
                size: d,
                shouldShow: !0,
                position: i,
                caretConfig: l,
                alignmentStrategy: a,
                align: s,
                onRequestClose: () => (null == u ? void 0 : u(E.i.USER_DISMISS)),
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

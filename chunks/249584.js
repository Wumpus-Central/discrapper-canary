n.d(t, {
    HW: () => L,
    K8: () => F,
    UB: () => k,
    bo: () => U,
    jz: () => B,
    lw: () => G,
    mn: () => V,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(512750),
    a = n(158954),
    o = n(311907),
    c = n(116833),
    u = n(342494),
    d = n(775602),
    p = n(793574),
    h = n(509536),
    f = n(976860),
    g = n(71393),
    m = n(204017),
    b = n(379229),
    A = n(990208),
    y = n(864310),
    _ = n(363487),
    O = n(828162),
    j = n(490557),
    v = n(220628),
    x = n(867060),
    E = n(568065),
    C = n(652215),
    S = n(746080),
    I = n(49999),
    N = n(294726),
    T = n(333354),
    P = n(985018),
    w = n(7946),
    R = n(108432),
    D = n(581665),
    M = n(20874);

function L(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, r.jsx)(H, {
        asset: (0, r.jsx)(j.b, {
            className: i()(w.Sl, w.SV),
        }),
        title: P.intl.formatToPlainString(T.default["Zg/m9K"], {
            perkName: n.title,
        }),
        body: P.intl.formatToPlainString(T.default["1EGXSK"], {
            perkName: n.title,
        }),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, O.A)(t, p.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}

function k(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        i = (0, _.A)(t);
    return (0, r.jsx)(u.HZ, {
        targetElementRef: l,
        assetUrl: R.A,
        title: P.intl.string(T.default.QpQBPQ),
        body: P.intl.string(T.default["6hn0xF"]),
        action: {
            text: P.intl.string(P.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, O.A)(t, p.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
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
        onRequestClose: () => (null == n ? void 0 : n(I.i.USER_DISMISS)),
    });
}

function G(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = (0, o.bG)([g.A], () => {
            var e;
            return null == (e = g.A.getGuild(t)) ? void 0 : e.name;
        }),
        { onActivate: c, isLoading: u, error: d } = (0, v.A)(t, n[0]),
        h = (0, A.A)(n[0], !0);
    if (((0, x.A)(d), 0 === n.length)) return;
    let f =
            n.length >= 3
                ? P.intl.formatToPlainString(T.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? P.intl.formatToPlainString(T.default.wcQOqC, {
                        perks: "".concat(n[0].title, " & ").concat(n[1].title),
                    })
                  : P.intl.formatToPlainString(T.default.ZF8NT6, {
                        perk: n[0].title,
                    }),
        m = 1 === n.length;
    return (0, r.jsx)(H, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, r.jsx)(j.b, {
                      className: i()(w.Sl, w.SV),
                  })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: h,
                      className: w.Sl,
                  }),
        title: P.intl.formatToPlainString(T.default.LmpChE, {
            guildName: a,
        }),
        body: f,
        actions: [
            {
                text: m ? P.intl.string(T.default.gSxlHf) : P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? c() : (0, O.A)(t, p.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: u,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}

function U(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: i } = e,
        a = n.find((e) => e.skuId === s.FB);
    if (null != a)
        return (0, r.jsx)(H, {
            targetElementRef: l,
            title: P.intl.string(T.default.Ygpx4Q),
            body: P.intl.string(T.default.mmNkUA),
            size: "video",
            asset: M.A,
            actions: [
                {
                    text: P.intl.string(P.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, O.A)(t, p.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: i,
        });
    let o = n.find((e) => E.aH.has(e.skuId));
    return null != o
        ? (0, r.jsx)(H, {
              targetElementRef: l,
              title: P.intl.string(T.default["kA2c+n"]),
              body: P.intl.string(T.default.TUilLj),
              asset: (0, r.jsx)("img", {
                  alt: "",
                  src: D.A,
                  className: w.Sl,
              }),
              actions: [
                  {
                      text: P.intl.string(P.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, O.A)(t, p.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                      },
                  },
              ],
              markAsDismissed: i,
          })
        : null;
}

function B(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: i } = e,
        { available: s } = (0, y.A)(t),
        { gameName: c, gameName2: u } = (0, m.A)(),
        h = (0, o.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(H, {
        size: "video",
        targetElementRef: i,
        asset: (0, r.jsx)(a.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: h ? "SM_Main_Int" : "SM_Auto",
        }),
        title: P.intl.string(n === b.o.GAME_SERVER_HOSTING_AVAILABLE ? N.default.wXLChx : N.default["8z8RpY"]),
        body:
            n === b.o.GAME_SERVER_HOSTING_AVAILABLE
                ? P.intl.formatToPlainString(N.default.sj2nIF, {
                      gameName: c,
                      gameName2: u,
                  })
                : P.intl.format(N.default["IQ1E+d"], {
                      boostCount: s,
                  }),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, O.A)(t, p.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}

function V(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        i = (0, o.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(H, {
        size: "video",
        targetElementRef: l,
        asset: (0, r.jsx)(a.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: i ? "SM_Main_Int" : "SM_Auto",
        }),
        title: P.intl.string(N.default["eX64+z"]),
        body: P.intl.string(N.default.NpgfEB),
        actions: [
            {
                text: P.intl.string(P.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(I.i.TAKE_ACTION), (0, f.pX)(C.BVt.CHANNEL(t, S.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}

function F(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: i, gameName2: s } = (0, m.A)(),
        c = (0, o.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(H, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: {
            align: "center",
        },
        asset: (0, r.jsx)(a.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: w.Sl,
            stateMachine: c ? "SM_Main_Int" : "SM_Auto",
        }),
        title: P.intl.string(N.default.t3LNW1),
        body: P.intl.formatToPlainString(N.default.V9qFAU, {
            gameName: i,
            gameName2: s,
        }),
        actions: [
            {
                text: P.intl.string(N.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(I.i.TAKE_ACTION),
                        (0, h.K)({
                            guildId: t,
                            location: {
                                section: C.JJy.GUILD_HEADER,
                                object: C.ZSU.BUTTON_CTA,
                            },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}

function H(e) {
    var t, n;
    let {
            caretConfig: l = {
                align: "start",
            },
            position: i = "right",
            align: s = "top",
            alignmentStrategy: a = "edge",
            markAsDismissed: o,
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
        u.AM,
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
                    component: c.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
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
                onRequestClose: () => (null == o ? void 0 : o(I.i.USER_DISMISS)),
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

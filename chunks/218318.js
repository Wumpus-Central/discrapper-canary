a.d(t, {
    default: () => U,
}),
    a(896048);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(110259),
    c = a(311907),
    o = a(397927),
    d = a(765671),
    u = a(235986),
    f = a(915089),
    b = a(362311),
    _ = a(230801),
    m = a(424912),
    p = a(468820),
    E = a(287809),
    N = a(954571),
    h = a(426620),
    x = a(603738),
    A = a(701077),
    T = a(758384),
    y = a(239763),
    j = a(771016),
    O = a(994277),
    g = a(652215),
    v = a(570465),
    D = a(819638),
    I = a(985018),
    C = a(147732);

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}

function U(e) {
    let t = (0, f.GV)(),
        { onSlideChange: a } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, a = Reflect.ownKeys(e); l < a.length; l++)
                    (n = a[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (a = i[n]),
                            !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
                    (n = a[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["onSlideChange"]),
        { onClose: U } = i,
        [L, k] = l.useState(!1),
        w = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        R = null != w && null == w.nsfwAllowed,
        [M, P] = l.useState(R ? O.i.AGE_GATE : O.i.CHOOSE_TEMPLATE),
        [W, H] = l.useState(null);
    l.useEffect(() => {
        a(L ? O.i.COMPLETE : M);
    }, [a, M, L]);
    let [V, F] = l.useState(null),
        [q, J] = l.useState(null),
        [Y, z] = l.useState(!1),
        B = (0, c.bG)([h.A], () => h.A.getType() === j.zY.INVITE_UNCLAIMED),
        Z = l.useCallback(
            (e) => {
                J(e),
                    P(O.i.CREATION_INTENT),
                    N.default.track(g.HAw.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code,
                    });
            },
            [J, P],
        ),
        { content: K, footer: Q } = (0, _.u)({
            hasFooter: !1,
            onBack: () => {
                J(null), P(O.i.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                z(e === D.IR.COMMUNITY), P(O.i.CUSTOMIZE_GUILD);
            },
        }),
        { content: $, footer: X } = (0, m.D)({
            guildTemplate: q,
            titleClassName: C.RH,
            hasFooter: !1,
            onGuildCreated: (e) => {
                F(e), (null == q ? void 0 : q.id) === v.v.CREATE ? P(O.i.CHANNEL_PROMPT) : k(!0);
            },
            onBack: () => {
                P(O.i.CREATION_INTENT);
            },
            isSlideReady: W === O.i.CUSTOMIZE_GUILD,
            isCommunity: Y,
        }),
        { content: ee, footer: et } = (0, b.m)({
            createdGuildId: V,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                k(!0);
            },
            isSlideReady: W === O.i.CHANNEL_PROMPT,
        }),
        { content: ea, footer: en } = (0, T.A)({
            onBack: () => P(O.i.CHOOSE_TEMPLATE),
            onComplete: () => {
                U();
            },
            onConnect: U,
            isSlideReady: W === O.i.JOIN_GUILD,
        }),
        el = null;
    switch (M) {
        case O.i.CUSTOMIZE_GUILD:
            el = X;
            break;
        case O.i.CHANNEL_PROMPT:
            el = et;
            break;
        case O.i.JOIN_GUILD:
            el = en;
            break;
        case O.i.CREATION_INTENT:
            el = Q;
    }
    let { ref: ei, width: es } = (0, d.Ay)();
    if (L)
        return (0, n.jsx)(
            o.EOs,
            S(G({}, i), {
                "data-migration-pending": !0,
                size: o.rIJ.MEDIUM,
                className: s()(C.yl, C.so),
                "aria-labelledby": t,
                parentComponent: "NUFModal",
                children: (0, n.jsx)(A.A, {
                    onComplete: U,
                }),
            }),
        );
    let er = {
        impression_group: r.ImpressionGroups.GUILD_ADD_NUF,
    };
    return (0, n.jsxs)(
        o.EOs,
        S(G({}, i), {
            "data-migration-pending": !0,
            size: o.rIJ.MEDIUM,
            className: C.yl,
            "aria-labelledby": t,
            parentComponent: "NUFModal",
            children: [
                (0, n.jsx)("div", {
                    className: C.pz,
                    children: (0, n.jsx)(y.A, {
                        step: M,
                    }),
                }),
                (0, n.jsx)(o.NPJ, {
                    theme: g.NJ8.LIGHT,
                    children: (e) =>
                        (0, n.jsxs)("div", {
                            className: s()(C.Qs, e),
                            ref: ei,
                            children: [
                                (0, n.jsx)("div", {
                                    className: C.WT,
                                    children: (0, n.jsxs)(o.tN_, {
                                        activeSlide: M,
                                        onSlideReady: (e) => H(e),
                                        centered: !1,
                                        width: es,
                                        children: [
                                            (0, n.jsx)(o.q7S, {
                                                id: O.i.AGE_GATE,
                                                children: (0, n.jsx)("div", {
                                                    className: C.kL,
                                                    children: (0, n.jsx)(x.A, {
                                                        onComplete: () => {
                                                            B ? U() : P(O.i.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: U,
                                                    }),
                                                }),
                                            }),
                                            (0, n.jsx)(o.q7S, {
                                                id: O.i.CHOOSE_TEMPLATE,
                                                impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: er,
                                                children: (0, n.jsx)("div", {
                                                    className: s()(C.kL, C.yT),
                                                    children: (0, n.jsx)(p.A, {
                                                        className: C.kT,
                                                        onChooseTemplate: Z,
                                                        isNewUser: !0,
                                                    }),
                                                }),
                                            }),
                                            (0, n.jsx)(o.q7S, {
                                                id: O.i.CREATION_INTENT,
                                                impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: er,
                                                children: (0, n.jsx)("div", {
                                                    className: s()(C.kL, C.tn),
                                                    children: K,
                                                }),
                                            }),
                                            (0, n.jsx)(o.q7S, {
                                                id: O.i.CUSTOMIZE_GUILD,
                                                impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: er,
                                                children: (0, n.jsx)("div", {
                                                    className: s()(C.kL, C.tn),
                                                    children: $,
                                                }),
                                            }),
                                            (0, n.jsx)(o.q7S, {
                                                id: O.i.CHANNEL_PROMPT,
                                                impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: er,
                                                children: (0, n.jsx)("div", {
                                                    className: s()(C.kL, C.tn),
                                                    children: ee,
                                                }),
                                            }),
                                            (0, n.jsx)(o.q7S, {
                                                id: O.i.JOIN_GUILD,
                                                impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: er,
                                                children: (0, n.jsx)("div", {
                                                    className: s()(C.kL, C.tn),
                                                    children: ea,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                M !== O.i.AGE_GATE
                                    ? (0, n.jsx)(o.s_y, {
                                          "data-migration-pending": !0,
                                          onClick: U,
                                          className: C.b,
                                      })
                                    : null,
                                M === O.i.CHOOSE_TEMPLATE
                                    ? (0, n.jsx)(o.jlY, {
                                          "data-migration-pending": !0,
                                          justify: u.A.Justify.BETWEEN,
                                          className: s()(C.qr, C.fj),
                                          children: (0, n.jsx)(o.MzZ, {
                                              className: C.D3,
                                              onClick: () => {
                                                  P(O.i.JOIN_GUILD);
                                              },
                                              children: (0, n.jsxs)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  className: C.D3,
                                                  children: [
                                                      I.intl.string(I.t["N+Mi/U"]),
                                                      " ",
                                                      I.intl.string(I.t.yRjK4p),
                                                  ],
                                              }),
                                          }),
                                      })
                                    : null,
                                null != el
                                    ? (0, n.jsx)(o.jlY, {
                                          "data-migration-pending": !0,
                                          justify: u.A.Justify.BETWEEN,
                                          className: C.qr,
                                          children: el,
                                      })
                                    : null,
                            ],
                        }),
                }),
            ],
        }),
    );
}

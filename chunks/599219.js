n.d(t, { default: () => S }), n(388685);
var r = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    i = n(990547),
    l = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(600164),
    f = n(313201),
    _ = n(215292),
    p = n(382086),
    b = n(996453),
    m = n(446706),
    h = n(594174),
    x = n(626135),
    N = n(179645),
    y = n(436046),
    v = n(963209),
    j = n(436457),
    E = n(877758),
    C = n(701476),
    T = n(785997),
    g = n(981631),
    O = n(834891),
    I = n(675999),
    A = n(388032),
    Z = n(995554);
function w(e) {
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
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let t = (0, f.Dt)(),
        { onSlideChange: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["onSlideChange"]),
        { onClose: S } = a,
        [L, P] = o.useState(!1),
        D = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        G = null != D && null == D.nsfwAllowed,
        [M, k] = o.useState(G ? T.F.AGE_GATE : T.F.CHOOSE_TEMPLATE),
        [B, U] = o.useState(null);
    o.useEffect(() => {
        n(L ? T.F.COMPLETE : M);
    }, [n, M, L]);
    let [R, z] = o.useState(null),
        [H, W] = o.useState(null),
        [J, Y] = o.useState(!1),
        V = (0, l.e7)([N.Z], () => N.Z.getType() === C.M5.INVITE_UNCLAIMED),
        q = o.useCallback(
            (e) => {
                W(e),
                    k(T.F.CREATION_INTENT),
                    x.default.track(g.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code,
                    });
            },
            [W, k],
        ),
        { content: X, footer: K } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
                W(null), k(T.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                Y(e === I.lr.COMMUNITY), k(T.F.CUSTOMIZE_GUILD);
            },
        }),
        { content: $, footer: Q } = (0, b.G)({
            guildTemplate: H,
            titleClassName: Z.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                z(e), (null == H ? void 0 : H.id) === O.l.CREATE ? k(T.F.CHANNEL_PROMPT) : P(!0);
            },
            onBack: () => {
                k(T.F.CREATION_INTENT);
            },
            isSlideReady: B === T.F.CUSTOMIZE_GUILD,
            isCommunity: J,
        }),
        { content: ee, footer: et } = (0, _.F)({
            createdGuildId: R,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                P(!0);
            },
            isSlideReady: B === T.F.CHANNEL_PROMPT,
        }),
        { content: en, footer: er } = (0, j.Z)({
            onBack: () => k(T.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                S();
            },
            onConnect: S,
            isSlideReady: B === T.F.JOIN_GUILD,
        }),
        eo = null;
    switch (M) {
        case T.F.CUSTOMIZE_GUILD:
            eo = Q;
            break;
        case T.F.CHANNEL_PROMPT:
            eo = et;
            break;
        case T.F.JOIN_GUILD:
            eo = er;
            break;
        case T.F.CREATION_INTENT:
            eo = K;
    }
    let { ref: ea, width: es } = (0, u.ZP)();
    if (L)
        return (0, r.jsx)(
            c.Y0X,
            F(w({}, a), {
                size: c.CgR.MEDIUM,
                className: s()(Z.modal, Z.completed),
                "aria-labelledby": t,
                parentComponent: "NUFModal",
                children: (0, r.jsx)(v.Z, { onComplete: S }),
            }),
        );
    let ei = { impression_group: i.ImpressionGroups.GUILD_ADD_NUF };
    return (0, r.jsxs)(
        c.Y0X,
        F(w({}, a), {
            size: c.CgR.MEDIUM,
            className: Z.modal,
            "aria-labelledby": t,
            parentComponent: "NUFModal",
            children: [
                (0, r.jsx)("div", {
                    className: Z.sidebar,
                    children: (0, r.jsx)(E.Z, { step: M }),
                }),
                (0, r.jsx)(c.f6W, {
                    theme: g.BRd.LIGHT,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: s()(Z.content, e),
                            ref: ea,
                            children: [
                                (0, r.jsx)("div", {
                                    className: Z.slidesContainer,
                                    children: (0, r.jsxs)(c.MyZ, {
                                        activeSlide: M,
                                        onSlideReady: (e) => U(e),
                                        centered: !1,
                                        width: es,
                                        children: [
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.AGE_GATE,
                                                children: (0, r.jsx)("div", {
                                                    className: Z.container,
                                                    children: (0, r.jsx)(y.Z, {
                                                        onComplete: () => {
                                                            V ? S() : k(T.F.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: S,
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CHOOSE_TEMPLATE,
                                                impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: ei,
                                                children: (0, r.jsx)("div", {
                                                    className: s()(Z.container, Z.shortFooter),
                                                    children: (0, r.jsx)(m.Z, {
                                                        className: Z.templates,
                                                        onChooseTemplate: q,
                                                        isNewUser: !0,
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CREATION_INTENT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: ei,
                                                children: (0, r.jsx)("div", {
                                                    className: s()(Z.container, Z.standardFooter),
                                                    children: X,
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CUSTOMIZE_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: ei,
                                                children: (0, r.jsx)("div", {
                                                    className: s()(Z.container, Z.standardFooter),
                                                    children: $,
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CHANNEL_PROMPT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: ei,
                                                children: (0, r.jsx)("div", {
                                                    className: s()(Z.container, Z.standardFooter),
                                                    children: ee,
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.JOIN_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: ei,
                                                children: (0, r.jsx)("div", {
                                                    className: s()(Z.container, Z.standardFooter),
                                                    children: en,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                M !== T.F.AGE_GATE
                                    ? (0, r.jsx)(c.olH, {
                                          onClick: S,
                                          className: Z.closeButton,
                                      })
                                    : null,
                                M === T.F.CHOOSE_TEMPLATE
                                    ? (0, r.jsx)(c.mzw, {
                                          justify: d.Z.Justify.BETWEEN,
                                          className: s()(Z.footer, Z.join),
                                          children: (0, r.jsx)(c.eee, {
                                              className: Z.joinCTA,
                                              onClick: () => {
                                                  k(T.F.JOIN_GUILD);
                                              },
                                              children: (0, r.jsxs)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  className: Z.joinCTA,
                                                  children: [
                                                      A.intl.string(A.t["N+Mi/f"]),
                                                      " ",
                                                      A.intl.string(A.t.yRjK4u),
                                                  ],
                                              }),
                                          }),
                                      })
                                    : null,
                                null != eo
                                    ? (0, r.jsx)(c.mzw, {
                                          justify: d.Z.Justify.BETWEEN,
                                          className: Z.footer,
                                          children: eo,
                                      })
                                    : null,
                            ],
                        }),
                }),
            ],
        }),
    );
}

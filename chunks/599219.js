n.d(t, { default: () => S }), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(600164),
    f = n(313201),
    _ = n(215292),
    p = n(382086),
    m = n(996453),
    b = n(446706),
    h = n(594174),
    N = n(626135),
    x = n(179645),
    y = n(436046),
    j = n(963209),
    E = n(436457),
    v = n(877758),
    C = n(701476),
    T = n(785997),
    O = n(981631),
    I = n(834891),
    g = n(675999),
    A = n(388032),
    Z = n(751629);
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
        V = (0, l.e7)([x.Z], () => x.Z.getType() === C.M5.INVITE_UNCLAIMED),
        q = o.useCallback(
            (e) => {
                W(e),
                    k(T.F.CREATION_INTENT),
                    N.default.track(O.rMx.GUILD_TEMPLATE_SELECTED, {
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
                Y(e === g.lr.COMMUNITY), k(T.F.CUSTOMIZE_GUILD);
            },
        }),
        { content: $, footer: Q } = (0, m.G)({
            guildTemplate: H,
            titleClassName: Z.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                z(e), (null == H ? void 0 : H.id) === I.l.CREATE ? k(T.F.CHANNEL_PROMPT) : P(!0);
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
        { content: en, footer: er } = (0, E.Z)({
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
    let { ref: ea, width: ei } = (0, u.ZP)();
    if (L)
        return (0, r.jsx)(
            c.Y0X,
            F(w({}, a), {
                size: c.CgR.MEDIUM,
                className: i()(Z.modal, Z.completed),
                "aria-labelledby": t,
                parentComponent: "NUFModal",
                children: (0, r.jsx)(j.Z, { onComplete: S }),
            }),
        );
    let es = { impression_group: s.ImpressionGroups.GUILD_ADD_NUF };
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
                    children: (0, r.jsx)(v.Z, { step: M }),
                }),
                (0, r.jsx)(c.f6W, {
                    theme: O.BRd.LIGHT,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: i()(Z.content, e),
                            ref: ea,
                            children: [
                                (0, r.jsx)("div", {
                                    className: Z.slidesContainer,
                                    children: (0, r.jsxs)(c.MyZ, {
                                        activeSlide: M,
                                        onSlideReady: (e) => U(e),
                                        centered: !1,
                                        width: ei,
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
                                                impressionName: s.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: es,
                                                children: (0, r.jsx)("div", {
                                                    className: i()(Z.container, Z.shortFooter),
                                                    children: (0, r.jsx)(b.Z, {
                                                        className: Z.templates,
                                                        onChooseTemplate: q,
                                                        isNewUser: !0,
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CREATION_INTENT,
                                                impressionName: s.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: es,
                                                children: (0, r.jsx)("div", {
                                                    className: i()(Z.container, Z.standardFooter),
                                                    children: X,
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CUSTOMIZE_GUILD,
                                                impressionName: s.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: es,
                                                children: (0, r.jsx)("div", {
                                                    className: i()(Z.container, Z.standardFooter),
                                                    children: $,
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.CHANNEL_PROMPT,
                                                impressionName: s.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: es,
                                                children: (0, r.jsx)("div", {
                                                    className: i()(Z.container, Z.standardFooter),
                                                    children: ee,
                                                }),
                                            }),
                                            (0, r.jsx)(c.Mi4, {
                                                id: T.F.JOIN_GUILD,
                                                impressionName: s.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: es,
                                                children: (0, r.jsx)("div", {
                                                    className: i()(Z.container, Z.standardFooter),
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
                                          className: i()(Z.footer, Z.join),
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

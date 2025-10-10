n.d(t, { default: () => S }), n(388685);
var a = n(951288),
    o = n(647438),
    s = n(120356),
    r = n.n(s),
    l = n(990547),
    i = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(600164),
    _ = n(313201),
    p = n(215292),
    f = n(382086),
    m = n(996453),
    h = n(446706),
    b = n(594174),
    E = n(626135),
    N = n(179645),
    x = n(436046),
    T = n(963209),
    A = n(436457),
    C = n(877758),
    j = n(701476),
    O = n(785997),
    y = n(981631),
    v = n(834891),
    I = n(675999),
    g = n(388032),
    G = n(751629);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let t = (0, _.Dt)(),
        { onSlideChange: n } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        o = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (a = 0; a < s.length; a++)
                    (n = s[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["onSlideChange"]),
        { onClose: S } = s,
        [L, w] = o.useState(!1),
        k = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
        M = null != k && null == k.nsfwAllowed,
        [P, U] = o.useState(M ? O.F.AGE_GATE : O.F.CHOOSE_TEMPLATE),
        [R, Z] = o.useState(null);
    o.useEffect(() => {
        n(L ? O.F.COMPLETE : P);
    }, [n, P, L]);
    let [B, z] = o.useState(null),
        [W, H] = o.useState(null),
        [Y, V] = o.useState(!1),
        q = (0, i.e7)([N.Z], () => N.Z.getType() === j.M5.INVITE_UNCLAIMED),
        J = o.useCallback(
            (e) => {
                H(e),
                    U(O.F.CREATION_INTENT),
                    E.default.track(y.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code,
                    });
            },
            [H, U],
        ),
        { content: X, footer: K } = (0, f.v)({
            hasFooter: !1,
            onBack: () => {
                H(null), U(O.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                V(e === I.lr.COMMUNITY), U(O.F.CUSTOMIZE_GUILD);
            },
        }),
        { content: Q, footer: $ } = (0, m.G)({
            guildTemplate: W,
            titleClassName: G.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                z(e), (null == W ? void 0 : W.id) === v.l.CREATE ? U(O.F.CHANNEL_PROMPT) : w(!0);
            },
            onBack: () => {
                U(O.F.CREATION_INTENT);
            },
            isSlideReady: R === O.F.CUSTOMIZE_GUILD,
            isCommunity: Y,
        }),
        { content: ee, footer: et } = (0, p.F)({
            createdGuildId: B,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                w(!0);
            },
            isSlideReady: R === O.F.CHANNEL_PROMPT,
        }),
        { content: en, footer: ea } = (0, A.Z)({
            onBack: () => U(O.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                S();
            },
            onConnect: S,
            isSlideReady: R === O.F.JOIN_GUILD,
        }),
        eo = null;
    switch (P) {
        case O.F.CUSTOMIZE_GUILD:
            eo = $;
            break;
        case O.F.CHANNEL_PROMPT:
            eo = et;
            break;
        case O.F.JOIN_GUILD:
            eo = ea;
            break;
        case O.F.CREATION_INTENT:
            eo = K;
    }
    let { ref: es, width: er } = (0, u.ZP)();
    if (L)
        return (0, a.jsx)(
            c.Y0X,
            D(F({}, s), {
                size: c.CgR.MEDIUM,
                className: r()(G.modal, G.completed),
                "aria-labelledby": t,
                parentComponent: "NUFModal",
                children: (0, a.jsx)(T.Z, { onComplete: S }),
            }),
        );
    let el = { impression_group: l.ImpressionGroups.GUILD_ADD_NUF };
    return (0, a.jsxs)(
        c.Y0X,
        D(F({}, s), {
            size: c.CgR.MEDIUM,
            className: G.modal,
            "aria-labelledby": t,
            parentComponent: "NUFModal",
            children: [
                (0, a.jsx)("div", {
                    className: G.sidebar,
                    children: (0, a.jsx)(C.Z, { step: P }),
                }),
                (0, a.jsx)(c.f6W, {
                    theme: y.BRd.LIGHT,
                    children: (e) =>
                        (0, a.jsxs)("div", {
                            className: r()(G.content, e),
                            ref: es,
                            children: [
                                (0, a.jsx)("div", {
                                    className: G.slidesContainer,
                                    children: (0, a.jsxs)(c.MyZ, {
                                        activeSlide: P,
                                        onSlideReady: (e) => Z(e),
                                        centered: !1,
                                        width: er,
                                        children: [
                                            (0, a.jsx)(c.Mi4, {
                                                id: O.F.AGE_GATE,
                                                children: (0, a.jsx)("div", {
                                                    className: G.container,
                                                    children: (0, a.jsx)(x.Z, {
                                                        onComplete: () => {
                                                            q ? S() : U(O.F.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: S,
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: O.F.CHOOSE_TEMPLATE,
                                                impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: el,
                                                children: (0, a.jsx)("div", {
                                                    className: r()(G.container, G.shortFooter),
                                                    children: (0, a.jsx)(h.Z, {
                                                        className: G.templates,
                                                        onChooseTemplate: J,
                                                        isNewUser: !0,
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: O.F.CREATION_INTENT,
                                                impressionName: l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: el,
                                                children: (0, a.jsx)("div", {
                                                    className: r()(G.container, G.standardFooter),
                                                    children: X,
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: O.F.CUSTOMIZE_GUILD,
                                                impressionName: l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: el,
                                                children: (0, a.jsx)("div", {
                                                    className: r()(G.container, G.standardFooter),
                                                    children: Q,
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: O.F.CHANNEL_PROMPT,
                                                impressionName: l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: el,
                                                children: (0, a.jsx)("div", {
                                                    className: r()(G.container, G.standardFooter),
                                                    children: ee,
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: O.F.JOIN_GUILD,
                                                impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: el,
                                                children: (0, a.jsx)("div", {
                                                    className: r()(G.container, G.standardFooter),
                                                    children: en,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                P !== O.F.AGE_GATE
                                    ? (0, a.jsx)(c.olH, {
                                          onClick: S,
                                          className: G.closeButton,
                                      })
                                    : null,
                                P === O.F.CHOOSE_TEMPLATE
                                    ? (0, a.jsx)(c.mzw, {
                                          justify: d.Z.Justify.BETWEEN,
                                          className: r()(G.footer, G.join),
                                          children: (0, a.jsx)(c.eee, {
                                              className: G.joinCTA,
                                              onClick: () => {
                                                  U(O.F.JOIN_GUILD);
                                              },
                                              children: (0, a.jsxs)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  className: G.joinCTA,
                                                  children: [
                                                      g.intl.string(g.t["N+Mi/f"]),
                                                      " ",
                                                      g.intl.string(g.t.yRjK4u),
                                                  ],
                                              }),
                                          }),
                                      })
                                    : null,
                                null != eo
                                    ? (0, a.jsx)(c.mzw, {
                                          justify: d.Z.Justify.BETWEEN,
                                          className: G.footer,
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

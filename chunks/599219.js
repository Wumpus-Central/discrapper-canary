n.d(t, { default: () => S }), n(388685);
var a = n(54381),
    o = n(473749),
    i = n(120356),
    s = n.n(i),
    r = n(990547),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(600164),
    f = n(313201),
    p = n(215292),
    b = n(382086),
    m = n(996453),
    _ = n(446706),
    h = n(594174),
    E = n(626135),
    N = n(179645),
    x = n(436046),
    A = n(963209),
    T = n(436457),
    C = n(877758),
    g = n(701476),
    j = n(785997),
    O = n(981631),
    y = n(834891),
    v = n(675999),
    I = n(388032),
    G = n(22742);
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
    let t = (0, f.Dt)(),
        { onSlideChange: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        o = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["onSlideChange"]),
        { onClose: S } = i,
        [L, w] = o.useState(!1),
        M = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        k = null != M && null == M.nsfwAllowed,
        [P, U] = o.useState(k ? j.F.AGE_GATE : j.F.CHOOSE_TEMPLATE),
        [R, B] = o.useState(null);
    o.useEffect(() => {
        n(L ? j.F.COMPLETE : P);
    }, [n, P, L]);
    let [Z, H] = o.useState(null),
        [W, z] = o.useState(null),
        [Y, V] = o.useState(!1),
        J = (0, l.e7)([N.Z], () => N.Z.getType() === g.M5.INVITE_UNCLAIMED),
        K = o.useCallback(
            (e) => {
                z(e),
                    U(j.F.CREATION_INTENT),
                    E.default.track(O.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code,
                    });
            },
            [z, U],
        ),
        { content: q, footer: X } = (0, b.v)({
            hasFooter: !1,
            onBack: () => {
                z(null), U(j.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                V(e === v.lr.COMMUNITY), U(j.F.CUSTOMIZE_GUILD);
            },
        }),
        { content: Q, footer: $ } = (0, m.G)({
            guildTemplate: W,
            titleClassName: G.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                H(e), (null == W ? void 0 : W.id) === y.l.CREATE ? U(j.F.CHANNEL_PROMPT) : w(!0);
            },
            onBack: () => {
                U(j.F.CREATION_INTENT);
            },
            isSlideReady: R === j.F.CUSTOMIZE_GUILD,
            isCommunity: Y,
        }),
        { content: ee, footer: et } = (0, p.F)({
            createdGuildId: Z,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                w(!0);
            },
            isSlideReady: R === j.F.CHANNEL_PROMPT,
        }),
        { content: en, footer: ea } = (0, T.Z)({
            onBack: () => U(j.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                S();
            },
            onConnect: S,
            isSlideReady: R === j.F.JOIN_GUILD,
        }),
        eo = null;
    switch (P) {
        case j.F.CUSTOMIZE_GUILD:
            eo = $;
            break;
        case j.F.CHANNEL_PROMPT:
            eo = et;
            break;
        case j.F.JOIN_GUILD:
            eo = ea;
            break;
        case j.F.CREATION_INTENT:
            eo = X;
    }
    let { ref: ei, width: es } = (0, d.ZP)();
    if (L)
        return (0, a.jsx)(
            c.Y0X,
            D(F({}, i), {
                "data-migration-pending": !0,
                size: c.CgR.MEDIUM,
                className: s()(G.modal, G.completed),
                "aria-labelledby": t,
                parentComponent: "NUFModal",
                children: (0, a.jsx)(A.Z, { onComplete: S }),
            }),
        );
    let er = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
    return (0, a.jsxs)(
        c.Y0X,
        D(F({}, i), {
            "data-migration-pending": !0,
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
                    theme: O.BRd.LIGHT,
                    children: (e) =>
                        (0, a.jsxs)("div", {
                            className: s()(G.content, e),
                            ref: ei,
                            children: [
                                (0, a.jsx)("div", {
                                    className: G.slidesContainer,
                                    children: (0, a.jsxs)(c.MyZ, {
                                        activeSlide: P,
                                        onSlideReady: (e) => B(e),
                                        centered: !1,
                                        width: es,
                                        children: [
                                            (0, a.jsx)(c.Mi4, {
                                                id: j.F.AGE_GATE,
                                                children: (0, a.jsx)("div", {
                                                    className: G.container,
                                                    children: (0, a.jsx)(x.Z, {
                                                        onComplete: () => {
                                                            J ? S() : U(j.F.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: S,
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: j.F.CHOOSE_TEMPLATE,
                                                impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: er,
                                                children: (0, a.jsx)("div", {
                                                    className: s()(G.container, G.shortFooter),
                                                    children: (0, a.jsx)(_.Z, {
                                                        className: G.templates,
                                                        onChooseTemplate: K,
                                                        isNewUser: !0,
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: j.F.CREATION_INTENT,
                                                impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: er,
                                                children: (0, a.jsx)("div", {
                                                    className: s()(G.container, G.standardFooter),
                                                    children: q,
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: j.F.CUSTOMIZE_GUILD,
                                                impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: er,
                                                children: (0, a.jsx)("div", {
                                                    className: s()(G.container, G.standardFooter),
                                                    children: Q,
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: j.F.CHANNEL_PROMPT,
                                                impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: er,
                                                children: (0, a.jsx)("div", {
                                                    className: s()(G.container, G.standardFooter),
                                                    children: ee,
                                                }),
                                            }),
                                            (0, a.jsx)(c.Mi4, {
                                                id: j.F.JOIN_GUILD,
                                                impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: er,
                                                children: (0, a.jsx)("div", {
                                                    className: s()(G.container, G.standardFooter),
                                                    children: en,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                P !== j.F.AGE_GATE
                                    ? (0, a.jsx)(c.olH, {
                                          "data-migration-pending": !0,
                                          onClick: S,
                                          className: G.closeButton,
                                      })
                                    : null,
                                P === j.F.CHOOSE_TEMPLATE
                                    ? (0, a.jsx)(c.mzw, {
                                          "data-migration-pending": !0,
                                          justify: u.Z.Justify.BETWEEN,
                                          className: s()(G.footer, G.join),
                                          children: (0, a.jsx)(c.Anchor, {
                                              className: G.joinCTA,
                                              onClick: () => {
                                                  U(j.F.JOIN_GUILD);
                                              },
                                              children: (0, a.jsxs)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  className: G.joinCTA,
                                                  children: [
                                                      I.intl.string(I.t["N+Mi/U"]),
                                                      " ",
                                                      I.intl.string(I.t.yRjK4p),
                                                  ],
                                              }),
                                          }),
                                      })
                                    : null,
                                null != eo
                                    ? (0, a.jsx)(c.mzw, {
                                          "data-migration-pending": !0,
                                          justify: u.Z.Justify.BETWEEN,
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

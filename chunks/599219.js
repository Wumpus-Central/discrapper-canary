n.d(t, { default: () => k }), n(388685);
var s = n(255367),
    o = n(73800),
    a = n(120356),
    r = n.n(a),
    i = n(990547),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    _ = n(600164),
    u = n(313201),
    p = n(215292),
    f = n(382086),
    m = n(996453),
    b = n(446706),
    h = n(594174),
    x = n(626135),
    N = n(179645),
    E = n(436046),
    C = n(963209),
    j = n(436457),
    T = n(877758),
    I = n(701476),
    g = n(785997),
    v = n(981631),
    O = n(834891),
    A = n(675999),
    F = n(388032),
    y = n(299982);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let t = (0, u.Dt)(),
        { onSlideChange: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                s,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        s,
                        o = {},
                        a = Object.keys(e);
                    for (s = 0; s < a.length; s++) (n = a[s]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (s = 0; s < a.length; s++) (n = a[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['onSlideChange']),
        { onClose: k } = a,
        [D, P] = o.useState(!1),
        w = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        G = null != w && null == w.nsfwAllowed,
        [M, Z] = o.useState(G ? g.F.AGE_GATE : g.F.CHOOSE_TEMPLATE),
        [B, U] = o.useState(null);
    o.useEffect(() => {
        n(D ? g.F.COMPLETE : M);
    }, [n, M, D]);
    let [R, z] = o.useState(null),
        [H, W] = o.useState(null),
        [J, Y] = o.useState(!1),
        V = (0, l.e7)([N.Z], () => N.Z.getType() === I.M5.INVITE_UNCLAIMED),
        K = o.useCallback(
            (e) => {
                W(e),
                    Z(g.F.CREATION_INTENT),
                    x.default.track(v.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [W, Z]
        ),
        { content: q, footer: X } = (0, f.v)({
            hasFooter: !1,
            onBack: () => {
                W(null), Z(g.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                Y(e === A.lr.COMMUNITY), Z(g.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: Q, footer: $ } = (0, m.G)({
            guildTemplate: H,
            titleClassName: y.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                z(e), (null == H ? void 0 : H.id) === O.l.CREATE ? Z(g.F.CHANNEL_PROMPT) : P(!0);
            },
            onBack: () => {
                Z(g.F.CREATION_INTENT);
            },
            isSlideReady: B === g.F.CUSTOMIZE_GUILD,
            isCommunity: J
        }),
        { content: ee, footer: et } = (0, p.F)({
            createdGuildId: R,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                P(!0);
            },
            isSlideReady: B === g.F.CHANNEL_PROMPT
        }),
        { content: en, footer: es } = (0, j.Z)({
            onBack: () => Z(g.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                k();
            },
            onConnect: k,
            isSlideReady: B === g.F.JOIN_GUILD
        }),
        eo = null;
    switch (M) {
        case g.F.CUSTOMIZE_GUILD:
            eo = $;
            break;
        case g.F.CHANNEL_PROMPT:
            eo = et;
            break;
        case g.F.JOIN_GUILD:
            eo = es;
            break;
        case g.F.CREATION_INTENT:
            eo = X;
    }
    let { ref: ea, width: er } = (0, d.ZP)();
    if (D)
        return (0, s.jsx)(
            c.Y0X,
            S(L({}, a), {
                size: c.CgR.MEDIUM,
                className: r()(y.modal, y.completed),
                'aria-labelledby': t,
                parentComponent: 'NUFModal',
                children: (0, s.jsx)(C.Z, { onComplete: k })
            })
        );
    let ei = { impression_group: i.ImpressionGroups.GUILD_ADD_NUF };
    return (0, s.jsxs)(
        c.Y0X,
        S(L({}, a), {
            size: c.CgR.MEDIUM,
            className: y.modal,
            'aria-labelledby': t,
            parentComponent: 'NUFModal',
            children: [
                (0, s.jsx)('div', {
                    className: y.sidebar,
                    children: (0, s.jsx)(T.Z, { step: M })
                }),
                (0, s.jsx)(c.f6W, {
                    theme: v.BRd.LIGHT,
                    children: (e) =>
                        (0, s.jsxs)('div', {
                            className: r()(y.content, e),
                            ref: ea,
                            children: [
                                (0, s.jsx)('div', {
                                    className: y.slidesContainer,
                                    children: (0, s.jsxs)(c.MyZ, {
                                        activeSlide: M,
                                        onSlideReady: (e) => U(e),
                                        centered: !1,
                                        width: er,
                                        children: [
                                            (0, s.jsx)(c.Mi4, {
                                                id: g.F.AGE_GATE,
                                                children: (0, s.jsx)('div', {
                                                    className: y.container,
                                                    children: (0, s.jsx)(E.Z, {
                                                        onComplete: () => {
                                                            V ? k() : Z(g.F.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: k
                                                    })
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: g.F.CHOOSE_TEMPLATE,
                                                impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(y.container, y.shortFooter),
                                                    children: (0, s.jsx)(b.Z, {
                                                        className: y.templates,
                                                        onChooseTemplate: K,
                                                        isNewUser: !0
                                                    })
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: g.F.CREATION_INTENT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: q
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: g.F.CUSTOMIZE_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: Q
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: g.F.CHANNEL_PROMPT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: ee
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: g.F.JOIN_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: en
                                                })
                                            })
                                        ]
                                    })
                                }),
                                M !== g.F.AGE_GATE
                                    ? (0, s.jsx)(c.olH, {
                                          onClick: k,
                                          className: y.closeButton
                                      })
                                    : null,
                                M === g.F.CHOOSE_TEMPLATE
                                    ? (0, s.jsx)(c.mzw, {
                                          justify: _.Z.Justify.BETWEEN,
                                          className: r()(y.footer, y.join),
                                          children: (0, s.jsx)(c.eee, {
                                              className: y.joinCTA,
                                              onClick: () => {
                                                  Z(g.F.JOIN_GUILD);
                                              },
                                              children: (0, s.jsxs)(c.Text, {
                                                  variant: 'text-sm/medium',
                                                  className: y.joinCTA,
                                                  children: [F.intl.string(F.t['N+Mi/f']), ' ', F.intl.string(F.t.yRjK4u)]
                                              })
                                          })
                                      })
                                    : null,
                                null != eo
                                    ? (0, s.jsx)(c.mzw, {
                                          justify: _.Z.Justify.BETWEEN,
                                          className: y.footer,
                                          children: eo
                                      })
                                    : null
                            ]
                        })
                })
            ]
        })
    );
}

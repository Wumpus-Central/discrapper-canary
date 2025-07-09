(n.d(t, { default: () => S }), n(388685));
var s = n(255367),
    a = n(73800),
    o = n(120356),
    r = n.n(o),
    i = n(990547),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(600164),
    _ = n(313201),
    p = n(215292),
    f = n(382086),
    m = n(996453),
    b = n(446706),
    h = n(594174),
    x = n(626135),
    N = n(179645),
    C = n(436046),
    E = n(963209),
    j = n(436457),
    T = n(877758),
    v = n(701476),
    I = n(785997),
    g = n(981631),
    O = n(834891),
    A = n(675999),
    y = n(388032),
    F = n(299982);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                ((s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s));
            }));
    }
    return e;
}
function w(e, t) {
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
function S(e) {
    let t = (0, _.Dt)(),
        { onSlideChange: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                s,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        s,
                        a = {},
                        o = Object.keys(e);
                    for (s = 0; s < o.length; s++) ((n = o[s]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (s = 0; s < o.length; s++) ((n = o[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        })(e, ['onSlideChange']),
        { onClose: S } = o,
        [P, D] = a.useState(!1),
        G = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        M = null != G && null == G.nsfwAllowed,
        [k, B] = a.useState(M ? I.F.AGE_GATE : I.F.CHOOSE_TEMPLATE),
        [U, Z] = a.useState(null);
    a.useEffect(() => {
        n(P ? I.F.COMPLETE : k);
    }, [n, k, P]);
    let [R, z] = a.useState(null),
        [H, W] = a.useState(null),
        [J, Y] = a.useState(!1),
        V = (0, l.e7)([N.Z], () => N.Z.getType() === v.M5.INVITE_UNCLAIMED),
        q = a.useCallback(
            (e) => {
                (W(e),
                    B(I.F.CREATION_INTENT),
                    x.default.track(g.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    }));
            },
            [W, B]
        ),
        { content: X, footer: K } = (0, f.v)({
            hasFooter: !1,
            onBack: () => {
                (W(null), B(I.F.CHOOSE_TEMPLATE));
            },
            onCreationIntentChosen: (e) => {
                (Y(e === A.lr.COMMUNITY), B(I.F.CUSTOMIZE_GUILD));
            }
        }),
        { content: Q, footer: $ } = (0, m.G)({
            guildTemplate: H,
            titleClassName: F.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                (z(e), (null == H ? void 0 : H.id) === O.l.CREATE ? B(I.F.CHANNEL_PROMPT) : D(!0));
            },
            onBack: () => {
                B(I.F.CREATION_INTENT);
            },
            isSlideReady: U === I.F.CUSTOMIZE_GUILD,
            isCommunity: J
        }),
        { content: ee, footer: et } = (0, p.F)({
            createdGuildId: R,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                D(!0);
            },
            isSlideReady: U === I.F.CHANNEL_PROMPT
        }),
        { content: en, footer: es } = (0, j.Z)({
            onBack: () => B(I.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                S();
            },
            onConnect: S,
            isSlideReady: U === I.F.JOIN_GUILD
        }),
        ea = null;
    switch (k) {
        case I.F.CUSTOMIZE_GUILD:
            ea = $;
            break;
        case I.F.CHANNEL_PROMPT:
            ea = et;
            break;
        case I.F.JOIN_GUILD:
            ea = es;
            break;
        case I.F.CREATION_INTENT:
            ea = K;
    }
    let { ref: eo, width: er } = (0, d.ZP)();
    if (P)
        return (0, s.jsx)(
            c.Y0X,
            w(L({}, o), {
                size: c.CgR.MEDIUM,
                className: r()(F.modal, F.completed),
                'aria-labelledby': t,
                parentComponent: 'NUFModal',
                children: (0, s.jsx)(E.Z, { onComplete: S })
            })
        );
    let ei = { impression_group: i.ImpressionGroups.GUILD_ADD_NUF };
    return (0, s.jsxs)(
        c.Y0X,
        w(L({}, o), {
            size: c.CgR.MEDIUM,
            className: F.modal,
            'aria-labelledby': t,
            parentComponent: 'NUFModal',
            children: [
                (0, s.jsx)('div', {
                    className: F.sidebar,
                    children: (0, s.jsx)(T.Z, { step: k })
                }),
                (0, s.jsx)(c.f6W, {
                    theme: g.BRd.LIGHT,
                    children: (e) =>
                        (0, s.jsxs)('div', {
                            className: r()(F.content, e),
                            ref: eo,
                            children: [
                                (0, s.jsx)('div', {
                                    className: F.slidesContainer,
                                    children: (0, s.jsxs)(c.MyZ, {
                                        activeSlide: k,
                                        onSlideReady: (e) => Z(e),
                                        centered: !1,
                                        width: er,
                                        children: [
                                            (0, s.jsx)(c.Mi4, {
                                                id: I.F.AGE_GATE,
                                                children: (0, s.jsx)('div', {
                                                    className: F.container,
                                                    children: (0, s.jsx)(C.Z, {
                                                        onComplete: () => {
                                                            V ? S() : B(I.F.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: S
                                                    })
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: I.F.CHOOSE_TEMPLATE,
                                                impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(F.container, F.shortFooter),
                                                    children: (0, s.jsx)(b.Z, {
                                                        className: F.templates,
                                                        onChooseTemplate: q,
                                                        isNewUser: !0
                                                    })
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: I.F.CREATION_INTENT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(F.container, F.standardFooter),
                                                    children: X
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: I.F.CUSTOMIZE_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(F.container, F.standardFooter),
                                                    children: Q
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: I.F.CHANNEL_PROMPT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(F.container, F.standardFooter),
                                                    children: ee
                                                })
                                            }),
                                            (0, s.jsx)(c.Mi4, {
                                                id: I.F.JOIN_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: ei,
                                                children: (0, s.jsx)('div', {
                                                    className: r()(F.container, F.standardFooter),
                                                    children: en
                                                })
                                            })
                                        ]
                                    })
                                }),
                                k !== I.F.AGE_GATE
                                    ? (0, s.jsx)(c.olH, {
                                          onClick: S,
                                          className: F.closeButton
                                      })
                                    : null,
                                k === I.F.CHOOSE_TEMPLATE
                                    ? (0, s.jsx)(c.mzw, {
                                          justify: u.Z.Justify.BETWEEN,
                                          className: r()(F.footer, F.join),
                                          children: (0, s.jsx)(c.eee, {
                                              className: F.joinCTA,
                                              onClick: () => {
                                                  B(I.F.JOIN_GUILD);
                                              },
                                              children: (0, s.jsxs)(c.Text, {
                                                  variant: 'text-sm/medium',
                                                  className: F.joinCTA,
                                                  children: [y.intl.string(y.t['N+Mi/f']), ' ', y.intl.string(y.t.yRjK4u)]
                                              })
                                          })
                                      })
                                    : null,
                                null != ea
                                    ? (0, s.jsx)(c.mzw, {
                                          justify: u.Z.Justify.BETWEEN,
                                          className: F.footer,
                                          children: ea
                                      })
                                    : null
                            ]
                        })
                })
            ]
        })
    );
}

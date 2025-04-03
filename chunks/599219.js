s.d(t, { default: () => k }), s(47120);
var n = s(200651),
    o = s(192379),
    a = s(120356),
    r = s.n(a),
    i = s(990547),
    l = s(442837),
    c = s(481060),
    d = s(393238),
    _ = s(600164),
    u = s(313201),
    p = s(215292),
    f = s(382086),
    m = s(996453),
    b = s(446706),
    N = s(594174),
    h = s(626135),
    x = s(179645),
    E = s(436046),
    C = s(963209),
    j = s(436457),
    T = s(877758),
    I = s(701476),
    g = s(785997),
    v = s(981631),
    O = s(834891),
    A = s(675999),
    F = s(388032),
    y = s(299982);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
function k(e) {
    let t = (0, u.Dt)(),
        { onSlideChange: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var s,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var s,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (s = a[n]), t.indexOf(s) >= 0 || (o[s] = e[s]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (s = a[n]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s]);
            }
            return o;
        })(e, ['onSlideChange']),
        { onClose: k } = a,
        [D, P] = o.useState(!1),
        w = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        G = null != w && null == w.nsfwAllowed,
        [Z, M] = o.useState(G ? g.F.AGE_GATE : g.F.CHOOSE_TEMPLATE),
        [B, R] = o.useState(null);
    o.useEffect(() => {
        s(D ? g.F.COMPLETE : Z);
    }, [s, Z, D]);
    let [U, W] = o.useState(null),
        [z, H] = o.useState(null),
        [J, Y] = o.useState(!1),
        V = (0, l.e7)([x.Z], () => x.Z.getType() === I.M5.INVITE_UNCLAIMED),
        K = o.useCallback(
            (e) => {
                H(e),
                    M(g.F.CREATION_INTENT),
                    h.default.track(v.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [H, M]
        ),
        { content: q, footer: X } = (0, f.v)({
            hasFooter: !1,
            onBack: () => {
                H(null), M(g.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                Y(e === A.lr.COMMUNITY), M(g.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: Q, footer: $ } = (0, m.G)({
            guildTemplate: z,
            titleClassName: y.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                W(e), (null == z ? void 0 : z.id) === O.l.CREATE ? M(g.F.CHANNEL_PROMPT) : P(!0);
            },
            onBack: () => {
                M(g.F.CREATION_INTENT);
            },
            isSlideReady: B === g.F.CUSTOMIZE_GUILD,
            isCommunity: J
        }),
        { content: ee, footer: et } = (0, p.F)({
            createdGuildId: U,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                P(!0);
            },
            isSlideReady: B === g.F.CHANNEL_PROMPT
        }),
        { content: es, footer: en } = (0, j.Z)({
            onBack: () => M(g.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                k();
            },
            onConnect: k,
            isSlideReady: B === g.F.JOIN_GUILD
        }),
        eo = null;
    switch (Z) {
        case g.F.CUSTOMIZE_GUILD:
            eo = $;
            break;
        case g.F.CHANNEL_PROMPT:
            eo = et;
            break;
        case g.F.JOIN_GUILD:
            eo = en;
            break;
        case g.F.CREATION_INTENT:
            eo = X;
    }
    let { ref: ea, width: er } = (0, d.Z)();
    if (D)
        return (0, n.jsx)(
            c.Y0X,
            S(L({}, a), {
                size: c.CgR.MEDIUM,
                className: r()(y.modal, y.completed),
                'aria-labelledby': t,
                children: (0, n.jsx)(C.Z, { onComplete: k })
            })
        );
    let ei = { impression_group: i.ImpressionGroups.GUILD_ADD_NUF };
    return (0, n.jsxs)(
        c.Y0X,
        S(L({}, a), {
            size: c.CgR.MEDIUM,
            className: y.modal,
            'aria-labelledby': t,
            children: [
                (0, n.jsx)('div', {
                    className: y.sidebar,
                    children: (0, n.jsx)(T.Z, { step: Z })
                }),
                (0, n.jsx)(c.f6W, {
                    theme: v.BRd.LIGHT,
                    children: (e) =>
                        (0, n.jsxs)('div', {
                            className: r()(y.content, e),
                            ref: ea,
                            children: [
                                (0, n.jsx)('div', {
                                    className: y.slidesContainer,
                                    children: (0, n.jsxs)(c.MyZ, {
                                        activeSlide: Z,
                                        onSlideReady: (e) => R(e),
                                        centered: !1,
                                        width: er,
                                        children: [
                                            (0, n.jsx)(c.Mi4, {
                                                id: g.F.AGE_GATE,
                                                children: (0, n.jsx)('div', {
                                                    className: y.container,
                                                    children: (0, n.jsx)(E.Z, {
                                                        onComplete: () => {
                                                            V ? k() : M(g.F.CHOOSE_TEMPLATE);
                                                        },
                                                        onClose: k
                                                    })
                                                })
                                            }),
                                            (0, n.jsx)(c.Mi4, {
                                                id: g.F.CHOOSE_TEMPLATE,
                                                impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
                                                impressionProperties: ei,
                                                children: (0, n.jsx)('div', {
                                                    className: r()(y.container, y.shortFooter),
                                                    children: (0, n.jsx)(b.Z, {
                                                        className: y.templates,
                                                        onChooseTemplate: K,
                                                        isNewUser: !0
                                                    })
                                                })
                                            }),
                                            (0, n.jsx)(c.Mi4, {
                                                id: g.F.CREATION_INTENT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                                impressionProperties: ei,
                                                children: (0, n.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: q
                                                })
                                            }),
                                            (0, n.jsx)(c.Mi4, {
                                                id: g.F.CUSTOMIZE_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                                impressionProperties: ei,
                                                children: (0, n.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: Q
                                                })
                                            }),
                                            (0, n.jsx)(c.Mi4, {
                                                id: g.F.CHANNEL_PROMPT,
                                                impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                                impressionProperties: ei,
                                                children: (0, n.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: ee
                                                })
                                            }),
                                            (0, n.jsx)(c.Mi4, {
                                                id: g.F.JOIN_GUILD,
                                                impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
                                                impressionProperties: ei,
                                                children: (0, n.jsx)('div', {
                                                    className: r()(y.container, y.standardFooter),
                                                    children: es
                                                })
                                            })
                                        ]
                                    })
                                }),
                                Z !== g.F.AGE_GATE
                                    ? (0, n.jsx)(c.olH, {
                                          onClick: k,
                                          className: y.closeButton
                                      })
                                    : null,
                                Z === g.F.CHOOSE_TEMPLATE
                                    ? (0, n.jsx)(c.mzw, {
                                          justify: _.Z.Justify.BETWEEN,
                                          className: r()(y.footer, y.join),
                                          children: (0, n.jsx)(c.eee, {
                                              className: y.joinCTA,
                                              onClick: () => {
                                                  M(g.F.JOIN_GUILD);
                                              },
                                              children: (0, n.jsxs)(c.Text, {
                                                  variant: 'text-sm/medium',
                                                  className: y.joinCTA,
                                                  children: [F.NW.string(F.t['N+Mi/f']), ' ', F.NW.string(F.t.yRjK4u)]
                                              })
                                          })
                                      })
                                    : null,
                                null != eo
                                    ? (0, n.jsx)(c.mzw, {
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

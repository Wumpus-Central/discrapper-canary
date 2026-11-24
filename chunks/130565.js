let n, i;
l.d(t, { openCreateGuildModal: () => ee, updateCreateGuildModal: () => et });
var s = l(477900),
    a = l(582128),
    o = l(192308),
    r = l(894778),
    d = l(129230),
    c = l(503698),
    u = l.n(c),
    m = l(284009),
    I = l.n(m),
    p = l(613412),
    S = l(935462),
    C = l(602853),
    N = l(646514),
    E = l(430690),
    D = l(475743),
    _ = l(362311),
    L = l(632656),
    T = l(424912),
    h = l(209322),
    x = l(939249),
    A = l(534514),
    G = l(834730),
    f = l(95477),
    j = l(825484),
    U = l(821609),
    O = l(123292),
    g = l(574332),
    v = l(627784),
    y = l(167189),
    k = l(780788),
    b = l(235986),
    M = l(976860),
    R = l(4274),
    w = l(652215),
    P = l(792996),
    J = l(479043),
    $ = l(906471),
    q = l(168482);
let V = "hTKzmak",
    B =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (i = ""),
        null == n && ((n = location.host), (i = w.BVt.INVITE(""))),
        `${location.protocol}//${n}${i}/`),
    H = [V, `${B}${V}`, `${B}wumpus-friends`];
function Z(e) {
    let { onClick: t } = e;
    return (0, s.jsxs)(x.D, {
        className: J.qd,
        onClick: function () {
            (t(), (0, M.pX)(w.BVt.GUILD_DISCOVERY));
        },
        children: [
            (0, s.jsx)("img", { width: 40, height: 40, className: J.aL, alt: "", src: q }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(A.D, {
                        className: J.qg,
                        variant: "heading-sm/semibold",
                        children: P.intl.string(P.t.DwDxDU),
                    }),
                    (0, s.jsx)(G.E, {
                        className: J.qg,
                        variant: "body-xs/normal",
                        children: P.intl.string(P.t["5RL4CD"]),
                    }),
                ],
            }),
            (0, s.jsx)("img", { className: J.y8, alt: "", src: $ }),
        ],
    });
}
function F(e) {
    let { onBack: t, onCreate: l, onClose: n, isSlideReady: i } = e,
        [o, r] = a.useState(""),
        [d, c] = a.useState(!1),
        u = a.useRef(!1),
        [m, I] = a.useState(null),
        p = a.useMemo(
            () =>
                null != l
                    ? (function (e) {
                          let t = e.trim();
                          if ("" === t) return null;
                          let l = t.includes("/") ? t : `${B}${t}`,
                              n = (0, k.br)(l);
                          return n?.type !== y.I.INVITE || (n.url !== l && n.url !== `http://${l}`) ? null : n.code;
                      })(o)
                    : null,
            [o, l],
        ),
        C = a.useRef(null);
    async function N(e) {
        if ((e.preventDefault(), u.current || (null != l && null == p))) return;
        let t = o.trim();
        if ("" === t) return void I(P.intl.string(P.t.IRq5ah));
        (I(null), (u.current = !0), c(!0));
        let i = t.split("/"),
            s = p ?? i[i.length - 1];
        try {
            let e = null;
            try {
                let { invite: l } = await g.Ay.resolveInvite(s, "Join Guild", { inputValue: t });
                e = l;
            } catch (e) {
                throw new v.Wl(e);
            }
            if (e?.channel == null) throw P.intl.string(P.t["GEYI+Z"]);
            let l = g.Ay.getInviteContext("Join Guild", e);
            await g.Ay.acceptInvite({
                inviteKey: e.code,
                context: l,
                callback: (e) => {
                    (n(), g.Ay.transitionToInvite(e));
                },
            });
        } catch (e) {
            "string" == typeof e
                ? I(e)
                : e instanceof v.Wl || e instanceof v.LG
                  ? I((0, R.s)(e.code))
                  : I(P.intl.string(P.t.dDZRdy));
        } finally {
            ((u.current = !1), c(!1));
        }
    }
    return (
        a.useEffect(() => {
            i && C.current?.focus();
        }, [i]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(S.rQ, {
                    "data-migration-pending": !0,
                    className: J.wx,
                    direction: b.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, s.jsx)(A.D, {
                            className: J.DD,
                            variant: "heading-xl/semibold",
                            children: P.intl.string(null != l ? P.t["5hrFyt"] : P.t.riOUtB),
                        }),
                        (0, s.jsx)(G.E, {
                            color: "text-default",
                            variant: "body-sm/normal",
                            children: P.intl.string(null != l ? P.t["/60ZFP"] : P.t["7jub2t"]),
                        }),
                        (0, s.jsx)(S.s_, { "data-migration-pending": !0, className: J.b, onClick: n }),
                    ],
                }),
                (0, s.jsxs)(S.$m, {
                    "data-migration-pending": !0,
                    className: null != l ? J.uN : J.__invalid_content,
                    scrollbarGutter: null == l && void 0,
                    children: [
                        (0, s.jsxs)("form", {
                            onSubmit: N,
                            className: J.$j,
                            children: [
                                (0, s.jsx)(f.k, {
                                    label: null != l ? void 0 : P.intl.string(P.t.qreV25),
                                    "aria-label": null != l ? P.intl.string(P.t.qreV25) : void 0,
                                    required: null == l,
                                    error: m,
                                    value: o,
                                    onChange: r,
                                    placeholder: `${B}${V}`,
                                    inputRef: C,
                                    autoFocus: null != l,
                                    helperText: null != l ? P.intl.format(P.t.kOiiUl, { inviteCode: V }) : void 0,
                                }),
                                null != l
                                    ? (0, s.jsxs)(j.e, {
                                          className: J.IR,
                                          direction: "horizontal-reverse",
                                          fullWidth: !0,
                                          wrap: !1,
                                          children: [
                                              (0, s.jsx)(U.$, {
                                                  variant: "primary",
                                                  type: "submit",
                                                  text: P.intl.string(P.t.s1kEub),
                                                  disabled: null == p,
                                                  loading: d,
                                              }),
                                              (0, s.jsx)(U.$, {
                                                  variant: "secondary",
                                                  text: P.intl.string(P.t.c846NN),
                                                  onClick: function () {
                                                      (n(), (0, M.pX)(w.BVt.GUILD_DISCOVERY));
                                                  },
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        null == l
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(G.E, {
                                          variant: "body-sm/medium",
                                          color: "text-subtle",
                                          children: P.intl.string(P.t.Bnq46H),
                                      }),
                                      (0, s.jsx)("div", {
                                          className: J.eU,
                                          children: H.map((e) =>
                                              (0, s.jsx)(x.D, { className: J.Bb, onClick: () => r(e), children: e }, e),
                                          ),
                                      }),
                                      (0, s.jsx)(Z, { onClick: n }),
                                  ],
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, s.jsx)(S.jl, {
                          "data-migration-pending": !0,
                          className: J.cQ,
                          children: (0, s.jsx)(G.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              children: P.intl.format(P.t["9BRB6M"], {
                                  createServerHook: (e, t) =>
                                      (0, s.jsx)(
                                          O.Q,
                                          { variant: "primary", text: e, textVariant: "body-sm/normal", onClick: l },
                                          t,
                                      ),
                              }),
                          }),
                      })
                    : (0, s.jsxs)(S.jl, {
                          "data-migration-pending": !0,
                          className: J.qr,
                          children: [
                              (0, s.jsx)(U.$, {
                                  variant: "primary",
                                  text: P.intl.string(P.t["Ts/9Ac"]),
                                  loading: d,
                                  onClick: N,
                              }),
                              (0, s.jsx)(O.Q, {
                                  size: "sm",
                                  variant: "primary",
                                  textVariant: "body-sm/medium",
                                  text: P.intl.string(P.t["13/7kX"]),
                                  onClick: t,
                              }),
                          ],
                      }),
            ],
        })
    );
}
var W = l(819638),
    z = l(899579);
function Q(e) {
    let {
            transitionState: t,
            initialSlide: l = W.oS.GUILD_TEMPLATES,
            onSuccess: n,
            onClose: i,
            onSlideChange: o,
            hasJoinButton: r,
            joinFirst: c = !1,
        } = e,
        [m, x] = a.useState(l),
        A = (0, D.Ay)(m),
        [G, f] = a.useState(null),
        [j, U] = a.useState(null),
        [O, g] = a.useState(null),
        [v, y] = a.useState(!1);
    (a.useEffect(() => {
        x(l);
    }, [x, l]),
        a.useEffect(() => {
            m !== A && o(m, A);
        }, [o, m, A]));
    let k = a.useCallback((e) => {
            (x(W.oS.CREATION_INTENT),
                U(e),
                d.default.track(w.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code }));
        }, []),
        b = a.useCallback((e) => {
            (y(e === W.IR.COMMUNITY), x(W.oS.CUSTOMIZE_GUILD));
        }, []),
        M = a.useCallback(() => x(W.oS.JOIN_GUILD), [x]),
        R = a.useCallback(() => {
            m === W.oS.CUSTOMIZE_GUILD ? x(W.oS.CREATION_INTENT) : (x(W.oS.GUILD_TEMPLATES), U(null));
        }, [m]),
        P = a.useCallback(
            (e) => {
                (g(e), n(e));
            },
            [n, g],
        ),
        J = a.useCallback(() => {
            (I()(null != O, "handleSuccess called before onGuildCreated"), n(O));
        }, [n, O]),
        $ = { impression_group: p.ImpressionGroups.GUILD_ADD_FLOW },
        q = (0, C.r)(N.A.modules.modal.WIDTH_SMALL),
        V = (0, s.jsx)(
            E.q,
            {
                id: W.oS.JOIN_GUILD,
                impressionName: p.ImpressionNames.GUILD_ADD_JOIN,
                impressionProperties: $,
                children: (0, s.jsx)(F, {
                    onBack: c ? void 0 : R,
                    onCreate: c ? R : void 0,
                    onClose: i,
                    isSlideReady: G === W.oS.JOIN_GUILD,
                }),
            },
            W.oS.JOIN_GUILD,
        ),
        B = [
            (0, s.jsx)(
                E.q,
                {
                    id: W.oS.GUILD_TEMPLATES,
                    impressionName: p.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: $,
                    children: (0, s.jsx)(h.A, {
                        isNewUser: !1,
                        onJoin: r ? M : void 0,
                        onChooseTemplate: k,
                        onClose: i,
                        isSlideReady: c ? G === W.oS.GUILD_TEMPLATES : void 0,
                    }),
                },
                W.oS.GUILD_TEMPLATES,
            ),
            (0, s.jsx)(
                E.q,
                {
                    id: W.oS.CREATION_INTENT,
                    impressionName: p.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: $,
                    children: (0, s.jsx)(L.A, { onClose: i, onBack: R, onCreationIntentChosen: b }),
                },
                W.oS.CREATION_INTENT,
            ),
            (0, s.jsx)(
                E.q,
                {
                    id: W.oS.CUSTOMIZE_GUILD,
                    impressionName: p.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: $,
                    children: (0, s.jsx)(T.A, {
                        guildTemplate: j,
                        onGuildCreated: P,
                        onClose: i,
                        onBack: R,
                        isSlideReady: G === W.oS.CUSTOMIZE_GUILD,
                        isCommunity: v,
                    }),
                },
                W.oS.CUSTOMIZE_GUILD,
            ),
            (0, s.jsx)(
                E.q,
                {
                    id: W.oS.CHANNEL_PROMPT,
                    impressionName: p.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: $,
                    children: (0, s.jsx)(_.A, {
                        createdGuildId: O,
                        onClose: i,
                        onChannelPromptCompleted: J,
                        isSlideReady: G === W.oS.CHANNEL_PROMPT,
                    }),
                },
                W.oS.CHANNEL_PROMPT,
            ),
        ];
    return (0, s.jsx)(S.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        fullscreenOnMobile: !1,
        className: u()(z.yl, { [z._v]: c }),
        parentComponent: "CreateGuildModal",
        children: (0, s.jsx)(E.t, {
            activeSlide: m,
            slideWrapperClassName: u()(z.p_, { [z.RO]: c }),
            width: c ? void 0 : q,
            contentDisplay: "flex",
            onSlideReady: (e) => f(e),
            children: c ? [V, ...B] : [...B, V],
        }),
    });
}
var Y = l(315290);
let K = new Map();
function X(e, t, l, n) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return (0, s.jsx)(Q, {
        onSuccess: (t) => {
            (r.A.flowStep(Y.do.CREATE_GUILD, Y.jC.SUCCESS), e.onClose(), n?.(t));
        },
        onSlideChange: (e, t) => {
            let n = i && e === W.oS.JOIN_GUILD && null == t;
            !(function (e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                switch (e) {
                    case W.oS.GUILD_TEMPLATES:
                        (r.A.flowStepOrStart(Y.do.CREATE_GUILD, Y.jC.GUILD_TEMPLATES),
                            d.default.track(w.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t }));
                        break;
                    case W.oS.CUSTOMIZE_GUILD:
                        (r.A.flowStep(Y.do.CREATE_GUILD, Y.jC.GUILD_CREATE),
                            d.default.track(w.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t }));
                        break;
                    case W.oS.CREATION_INTENT:
                        d.default.track(w.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case W.oS.JOIN_GUILD:
                        (l
                            ? r.A.flowStepOrStart(Y.do.CREATE_GUILD, Y.jC.JOIN_GUILD)
                            : r.A.flowStep(Y.do.CREATE_GUILD, Y.jC.JOIN_GUILD),
                            d.default.track(w.HAw.OPEN_MODAL, { type: "Join Guild", location: t }));
                }
            })(e, n && "Guild List" === l ? "Guild List - Join First" : l, n);
        },
        initialSlide: t ?? (i ? W.oS.JOIN_GUILD : void 0),
        joinFirst: i,
        hasJoinButton: !0,
        ...e,
    });
}
function ee(e) {
    let { initialSlide: t, location: l, onSuccess: n, joinFirst: i } = e,
        s = (0, o.lx)();
    (0, o.kB)(W.fc, s) ||
        (K.set(s, { location: l, onSuccess: n, joinFirst: i }),
        (0, o.qf)(
            (e) => X(e, t, l, n, i),
            {
                modalKey: W.fc,
                onCloseCallback: () => {
                    K.delete(s);
                },
            },
            s,
        ));
}
function et(e) {
    let { slide: t, location: l } = e,
        n = (0, o.lx)(),
        i = K.get(n);
    null != i &&
        (0, o.zb)(
            W.fc,
            (e) => X(e, t, l ?? i.location, i.onSuccess, i.joinFirst),
            void 0,
            () => {
                K.delete(n);
            },
            n,
        );
}

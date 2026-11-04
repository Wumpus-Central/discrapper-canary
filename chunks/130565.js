let n, l;
i.d(t, { openCreateGuildModal: () => K, updateCreateGuildModal: () => X });
var s = i(477900),
    a = i(582128),
    o = i(192308),
    r = i(894778),
    d = i(129230),
    c = i(503698),
    u = i.n(c),
    m = i(284009),
    I = i.n(m),
    C = i(613412),
    p = i(935462),
    S = i(602853),
    E = i(646514),
    N = i(430690),
    D = i(475743),
    _ = i(362311),
    L = i(632656),
    T = i(424912),
    h = i(209322),
    x = i(939249),
    A = i(534514),
    G = i(834730),
    f = i(95477),
    j = i(821609),
    U = i(123292),
    O = i(574332),
    g = i(627784),
    v = i(235986),
    y = i(976860),
    k = i(4274),
    R = i(652215),
    b = i(792996),
    M = i(479043),
    w = i(906471),
    P = i(168482);
let J = "hTKzmak",
    q = "wumpus-friends",
    B =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == n && ((n = location.host), (l = R.BVt.INVITE(""))),
        `${location.protocol}//${n}${l}/`),
    H = [J, `${B}${J}`, `${B}${q}`];
function $(e) {
    let { onClick: t } = e;
    return (0, s.jsxs)(x.D, {
        className: M.qd,
        onClick: function () {
            (t(), (0, y.pX)(R.BVt.GUILD_DISCOVERY));
        },
        children: [
            (0, s.jsx)("img", { width: 40, height: 40, className: M.aL, alt: "", src: P }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(A.D, {
                        className: M.qg,
                        variant: "heading-sm/semibold",
                        children: b.intl.string(b.t.DwDxDU),
                    }),
                    (0, s.jsx)(G.E, {
                        className: M.qg,
                        variant: "body-xs/normal",
                        children: b.intl.string(b.t["5RL4CD"]),
                    }),
                ],
            }),
            (0, s.jsx)("img", { className: M.y8, alt: "", src: w }),
        ],
    });
}
function V(e) {
    let { onBack: t, onCreate: i, onClose: n, isSlideReady: l } = e,
        [o, r] = a.useState(""),
        [d, c] = a.useState(!1),
        u = a.useRef(!1),
        [m, I] = a.useState(null),
        C = a.useRef(null);
    async function S(e) {
        if ((e.preventDefault(), u.current)) return;
        let t = o.trim();
        if ("" === t) return void I(b.intl.string(b.t.IRq5ah));
        (I(null), (u.current = !0), c(!0));
        let i = t.split("/"),
            l = i[i.length - 1];
        try {
            let e = null;
            try {
                let { invite: i } = await O.Ay.resolveInvite(l, "Join Guild", { inputValue: t });
                e = i;
            } catch (e) {
                throw new g.Wl(e);
            }
            if (e?.channel == null) throw b.intl.string(b.t["GEYI+Z"]);
            let i = O.Ay.getInviteContext("Join Guild", e);
            await O.Ay.acceptInvite({
                inviteKey: e.code,
                context: i,
                callback: (e) => {
                    (n(), O.Ay.transitionToInvite(e));
                },
            });
        } catch (e) {
            "string" == typeof e
                ? I(e)
                : e instanceof g.Wl || e instanceof g.LG
                  ? I((0, k.s)(e.code))
                  : I(b.intl.string(b.t.dDZRdy));
        } finally {
            ((u.current = !1), c(!1));
        }
    }
    return (
        a.useEffect(() => {
            l && C.current?.focus();
        }, [l]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(p.rQ, {
                    "data-migration-pending": !0,
                    className: M.wx,
                    direction: v.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, s.jsx)(A.D, {
                            className: M.DD,
                            variant: "heading-xl/semibold",
                            children: b.intl.string(b.t.riOUtB),
                        }),
                        (0, s.jsx)(G.E, {
                            color: "text-default",
                            variant: "body-sm/normal",
                            children: b.intl.string(b.t["7jub2t"]),
                        }),
                        (0, s.jsx)(p.s_, { "data-migration-pending": !0, className: M.b, onClick: n }),
                    ],
                }),
                (0, s.jsxs)(p.$m, {
                    "data-migration-pending": !0,
                    className: null != i ? M.uN : M.__invalid_content,
                    scrollbarGutter: null == i && void 0,
                    children: [
                        (0, s.jsx)("form", {
                            onSubmit: S,
                            className: M.$j,
                            children: (0, s.jsx)(f.k, {
                                label: b.intl.string(b.t.qreV25),
                                required: !0,
                                error: m,
                                value: o,
                                onChange: r,
                                placeholder: `${B}${J}`,
                                inputRef: C,
                                autoFocus: null != i,
                                helperText:
                                    null != i ? b.intl.format(b.t.kOiiUl, { inviteCode: J, vanityCode: q }) : void 0,
                            }),
                        }),
                        null != i
                            ? (0, s.jsxs)("div", {
                                  className: M.IR,
                                  children: [
                                      (0, s.jsx)(j.$, {
                                          variant: "secondary",
                                          fullWidth: !0,
                                          text: b.intl.string(b.t.EHWhyt),
                                          onClick: function () {
                                              (n(), (0, y.pX)(R.BVt.GUILD_DISCOVERY));
                                          },
                                      }),
                                      (0, s.jsx)(j.$, {
                                          variant: "primary",
                                          fullWidth: !0,
                                          text: b.intl.string(b.t["Ts/9Ac"]),
                                          loading: d,
                                          onClick: S,
                                      }),
                                  ],
                              })
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(G.E, {
                                          variant: "body-sm/medium",
                                          color: "text-subtle",
                                          children: b.intl.string(b.t.Bnq46H),
                                      }),
                                      (0, s.jsx)("div", {
                                          className: M.eU,
                                          children: H.map((e) =>
                                              (0, s.jsx)(x.D, { className: M.Bb, onClick: () => r(e), children: e }, e),
                                          ),
                                      }),
                                      (0, s.jsx)($, { onClick: n }),
                                  ],
                              }),
                    ],
                }),
                null != i
                    ? (0, s.jsx)(p.jl, {
                          "data-migration-pending": !0,
                          className: M.cQ,
                          children: (0, s.jsx)(G.E, {
                              variant: "body-sm/medium",
                              color: "text-default",
                              children: b.intl.format(b.t["9BRB6M"], {
                                  createServerHook: (e, t) =>
                                      (0, s.jsx)(
                                          U.Q,
                                          { variant: "primary", text: e, textVariant: "body-sm/medium", onClick: i },
                                          t,
                                      ),
                              }),
                          }),
                      })
                    : (0, s.jsxs)(p.jl, {
                          "data-migration-pending": !0,
                          className: M.qr,
                          children: [
                              (0, s.jsx)(j.$, {
                                  variant: "primary",
                                  text: b.intl.string(b.t["Ts/9Ac"]),
                                  loading: d,
                                  onClick: S,
                              }),
                              (0, s.jsx)(U.Q, {
                                  size: "sm",
                                  variant: "primary",
                                  textVariant: "body-sm/medium",
                                  text: b.intl.string(b.t["13/7kX"]),
                                  onClick: t,
                              }),
                          ],
                      }),
            ],
        })
    );
}
var Z = i(819638),
    W = i(899579);
function F(e) {
    let {
            transitionState: t,
            initialSlide: i = Z.oS.GUILD_TEMPLATES,
            onSuccess: n,
            onClose: l,
            onSlideChange: o,
            hasJoinButton: r,
            joinFirst: c = !1,
        } = e,
        [m, x] = a.useState(i),
        A = (0, D.Ay)(m),
        [G, f] = a.useState(null),
        [j, U] = a.useState(null),
        [O, g] = a.useState(null),
        [v, y] = a.useState(!1);
    (a.useEffect(() => {
        x(i);
    }, [x, i]),
        a.useEffect(() => {
            m !== A && o(m, A);
        }, [o, m, A]));
    let k = a.useCallback((e) => {
            (x(Z.oS.CREATION_INTENT),
                U(e),
                d.default.track(R.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code }));
        }, []),
        b = a.useCallback((e) => {
            (y(e === Z.IR.COMMUNITY), x(Z.oS.CUSTOMIZE_GUILD));
        }, []),
        M = a.useCallback(() => x(Z.oS.JOIN_GUILD), [x]),
        w = a.useCallback(() => {
            m === Z.oS.CUSTOMIZE_GUILD ? x(Z.oS.CREATION_INTENT) : (x(Z.oS.GUILD_TEMPLATES), U(null));
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
        q = { impression_group: C.ImpressionGroups.GUILD_ADD_FLOW },
        B = (0, S.r)(E.A.modules.modal.WIDTH_SMALL),
        H = (0, s.jsx)(
            N.q,
            {
                id: Z.oS.JOIN_GUILD,
                impressionName: C.ImpressionNames.GUILD_ADD_JOIN,
                impressionProperties: q,
                children: (0, s.jsx)(V, {
                    onBack: c ? void 0 : w,
                    onCreate: c ? w : void 0,
                    onClose: l,
                    isSlideReady: G === Z.oS.JOIN_GUILD,
                }),
            },
            Z.oS.JOIN_GUILD,
        ),
        $ = [
            (0, s.jsx)(
                N.q,
                {
                    id: Z.oS.GUILD_TEMPLATES,
                    impressionName: C.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: q,
                    children: (0, s.jsx)(h.A, {
                        isNewUser: !1,
                        onJoin: r ? M : void 0,
                        onChooseTemplate: k,
                        onClose: l,
                        isSlideReady: c ? G === Z.oS.GUILD_TEMPLATES : void 0,
                    }),
                },
                Z.oS.GUILD_TEMPLATES,
            ),
            (0, s.jsx)(
                N.q,
                {
                    id: Z.oS.CREATION_INTENT,
                    impressionName: C.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: q,
                    children: (0, s.jsx)(L.A, { onClose: l, onBack: w, onCreationIntentChosen: b }),
                },
                Z.oS.CREATION_INTENT,
            ),
            (0, s.jsx)(
                N.q,
                {
                    id: Z.oS.CUSTOMIZE_GUILD,
                    impressionName: C.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: q,
                    children: (0, s.jsx)(T.A, {
                        guildTemplate: j,
                        onGuildCreated: P,
                        onClose: l,
                        onBack: w,
                        isSlideReady: G === Z.oS.CUSTOMIZE_GUILD,
                        isCommunity: v,
                    }),
                },
                Z.oS.CUSTOMIZE_GUILD,
            ),
            (0, s.jsx)(
                N.q,
                {
                    id: Z.oS.CHANNEL_PROMPT,
                    impressionName: C.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: q,
                    children: (0, s.jsx)(_.A, {
                        createdGuildId: O,
                        onClose: l,
                        onChannelPromptCompleted: J,
                        isSlideReady: G === Z.oS.CHANNEL_PROMPT,
                    }),
                },
                Z.oS.CHANNEL_PROMPT,
            ),
        ];
    return (0, s.jsx)(p.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        fullscreenOnMobile: !1,
        className: u()(W.yl, { [W._v]: c }),
        parentComponent: "CreateGuildModal",
        children: (0, s.jsx)(N.t, {
            activeSlide: m,
            slideWrapperClassName: u()(W.p_, { [W.RO]: c }),
            width: c ? void 0 : B,
            contentDisplay: "flex",
            onSlideReady: (e) => f(e),
            children: c ? [H, ...$] : [...$, H],
        }),
    });
}
var Q = i(315290);
let Y = new Map();
function z(e, t, i, n) {
    let l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return (0, s.jsx)(F, {
        onSuccess: (t) => {
            (r.A.flowStep(Q.do.CREATE_GUILD, Q.jC.SUCCESS), e.onClose(), n?.(t));
        },
        onSlideChange: (e, t) => {
            let n = l && e === Z.oS.JOIN_GUILD && null == t;
            !(function (e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                switch (e) {
                    case Z.oS.GUILD_TEMPLATES:
                        (r.A.flowStepOrStart(Q.do.CREATE_GUILD, Q.jC.GUILD_TEMPLATES),
                            d.default.track(R.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t }));
                        break;
                    case Z.oS.CUSTOMIZE_GUILD:
                        (r.A.flowStep(Q.do.CREATE_GUILD, Q.jC.GUILD_CREATE),
                            d.default.track(R.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t }));
                        break;
                    case Z.oS.CREATION_INTENT:
                        d.default.track(R.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case Z.oS.JOIN_GUILD:
                        (i
                            ? r.A.flowStepOrStart(Q.do.CREATE_GUILD, Q.jC.JOIN_GUILD)
                            : r.A.flowStep(Q.do.CREATE_GUILD, Q.jC.JOIN_GUILD),
                            d.default.track(R.HAw.OPEN_MODAL, { type: "Join Guild", location: t }));
                }
            })(e, n && "Guild List" === i ? "Guild List - Join First" : i, n);
        },
        initialSlide: t ?? (l ? Z.oS.JOIN_GUILD : void 0),
        joinFirst: l,
        hasJoinButton: !0,
        ...e,
    });
}
function K(e) {
    let { initialSlide: t, location: i, onSuccess: n, joinFirst: l } = e,
        s = (0, o.lx)();
    (0, o.kB)(Z.fc, s) ||
        (Y.set(s, { location: i, onSuccess: n, joinFirst: l }),
        (0, o.qf)(
            (e) => z(e, t, i, n, l),
            {
                modalKey: Z.fc,
                onCloseCallback: () => {
                    Y.delete(s);
                },
            },
            s,
        ));
}
function X(e) {
    let { slide: t, location: i } = e,
        n = (0, o.lx)(),
        l = Y.get(n);
    null != l &&
        (0, o.zb)(
            Z.fc,
            (e) => z(e, t, i ?? l.location, l.onSuccess, l.joinFirst),
            void 0,
            () => {
                Y.delete(n);
            },
            n,
        );
}

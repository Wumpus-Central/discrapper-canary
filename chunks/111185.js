let t, n;
i.d(s, { default: () => ea });
var l = i(627968),
    a = i(64700),
    r = i(503698),
    o = i.n(r),
    c = i(562708),
    d = i(17928),
    m = i(935462),
    u = i(43990),
    N = i(430690),
    E = i(349288),
    h = i(834730),
    x = i(765671),
    p = i(235986),
    _ = i(915089),
    T = i(362311),
    j = i(243460),
    I = i(424912),
    C = i(360475),
    A = i(287809),
    f = i(174459),
    g = i(426620),
    L = i(284009),
    v = i.n(L),
    D = i(661531),
    U = i(862482),
    O = i(111159),
    G = i(534514),
    S = i(86182),
    b = i(955437),
    k = i(201505),
    y = i(975571),
    M = i(652215),
    R = i(204925),
    w = i(375708),
    P = i(678623);
function W(e) {
    let { onComplete: s, onClose: i } = e,
        [t, n] = a.useState(null),
        [r, o] = a.useState(null),
        [c, m] = a.useState(!1),
        u = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        N = a.useRef(null);
    async function E(e) {
        e.preventDefault(), v()(null != t, "Cannot submit null birthday."), m(!0);
        try {
            await b.n7(t, R.w_.NEW_USER_FLOW), s();
        } catch (e) {
            null != e.body && null != e.body.date_of_birth
                ? (b.Xv(R.w_.NEW_USER_FLOW), b.$2(R.w_.NEW_USER_FLOW), i())
                : e?.body?.username != null
                  ? o(w.intl.string(w.t["TGg/2k"]))
                  : o(e?.body.message);
        }
        m(!1);
    }
    a.useEffect(() => {
        null != u && null != u.nsfwAllowed && s();
    }, [u, s]);
    let x = a.useCallback(
            (e) => {
                n(e);
            },
            [n],
        ),
        p = a.useCallback(() => {
            N.current?.focus();
        }, [N]);
    return null == u
        ? null
        : (0, l.jsxs)("form", {
              className: P.Qs,
              onSubmit: E,
              children: [
                  (0, l.jsx)(O.p, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: P.wm,
                      color: D.A.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, l.jsx)(G.D, {
                      className: P.DD,
                      variant: "heading-xl/semibold",
                      children: w.intl.string(w.t.n7i7sv),
                  }),
                  (0, l.jsx)(h.E, {
                      color: "text-default",
                      className: P.h_,
                      variant: "text-md/normal",
                      children: w.intl.format(w.t.fa8kW1, { helpURL: y.A.getArticleURL(M.MVz.AGE_GATE) }),
                  }),
                  (0, l.jsx)(S.w, {
                      theme: M.NJ8.LIGHT,
                      children: (0, l.jsx)(k.A, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: P.kz,
                          label: w.intl.string(w.t.rhBeKe),
                          name: "birthday",
                          onChange: x,
                          onPopulated: p,
                          error: r,
                          value: t,
                      }),
                  }),
                  (0, l.jsx)("div", {
                      className: P.qr,
                      children: (0, l.jsx)("div", {
                          className: P._o,
                          children: (0, l.jsx)(U.$n, {
                              "data-migration-pending": !0,
                              buttonRef: N,
                              type: "submit",
                              size: U.$n.Sizes.LARGE,
                              submitting: c,
                              disabled: null == t,
                              fullWidth: !0,
                              children: w.intl.string(w.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
var H = i(939249),
    F = i(821609),
    J = i(259244);
function $(e) {
    let { onComplete: s } = e;
    return (0, l.jsxs)(H.D, {
        className: J.kL,
        onClick: s,
        children: [
            (0, l.jsx)(G.D, {
                variant: "heading-xl/bold",
                color: "always-white",
                className: J.DD,
                children: w.intl.string(w.t.Deps41),
            }),
            (0, l.jsx)(G.D, {
                variant: "heading-lg/bold",
                color: "always-white",
                className: o()(J.DD, J.VA),
                children: w.intl.string(w.t.xv5g7B),
            }),
            (0, l.jsx)(F.$, { variant: "overlay-primary", text: w.intl.string(w.t["6X9YKG"]), onClick: s }),
        ],
    });
}
var q = i(292666),
    z = i(376728),
    B = i(913122),
    V = i(780964),
    Z = i(766075),
    K = i(4274),
    Q = i(75668);
let X =
    ((t = window.GLOBAL_ENV.INVITE_HOST),
    (n = ""),
    null == t && ((t = location.host), (n = M.BVt.INVITE(""))),
    `${location.protocol}//${t}${n}/`);
var Y = i(994277),
    ee = i(444670);
function es(e) {
    let { step: s } = e,
        i = s === Y.i.AGE_GATE,
        t = s === Y.i.CHOOSE_TEMPLATE || s === Y.i.CREATION_INTENT,
        n = s === Y.i.CUSTOMIZE_GUILD,
        a = s === Y.i.CHANNEL_PROMPT || s === Y.i.JOIN_GUILD,
        r = n || a,
        c = t || r;
    return (0, l.jsxs)("div", {
        className: ee.pz,
        children: [
            (0, l.jsx)("div", { className: o()(ee.Qo, { [ee.WU]: i }) }),
            (0, l.jsx)("div", { className: o()(ee.NF, { [ee.WU]: c }) }),
            (0, l.jsx)("div", { className: o()(ee.MW, { [ee.WU]: r }) }),
            (0, l.jsx)("div", { className: o()(ee._e, { [ee.WU]: c }) }),
            (0, l.jsx)("div", { className: o()(ee.ss, { [ee.WU]: c }) }),
            (0, l.jsx)("div", { className: o()(ee.mJ, { [ee.WU]: t }) }),
            (0, l.jsx)("div", { className: o()(ee.Gx, { [ee.WU]: t }) }),
            (0, l.jsx)("div", { className: o()(ee.p, { [ee.WU]: r }) }),
            (0, l.jsx)("div", { className: o()(ee.hV, { [ee.WU]: n }) }),
            (0, l.jsx)("div", { className: o()(ee.s3, { [ee.WU]: a }) }),
            (0, l.jsx)("div", { className: o()(ee.mq, { [ee.WU]: c }) }),
        ],
    });
}
var ei = i(771016),
    et = i(570465),
    en = i(819638),
    el = i(841565);
function ea(e) {
    let s = (0, _.GV)(),
        { onSlideChange: i, ...t } = e,
        { onClose: n } = t,
        [r, L] = a.useState(!1),
        v = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        D = null != v && null == v.nsfwAllowed,
        [O, S] = a.useState(D ? Y.i.AGE_GATE : Y.i.CHOOSE_TEMPLATE),
        [b, k] = a.useState(null);
    a.useEffect(() => {
        i(r ? Y.i.COMPLETE : O);
    }, [i, O, r]);
    let [y, R] = a.useState(null),
        [P, H] = a.useState(null),
        [J, ee] = a.useState(!1),
        ea = (0, d.bG)([g.A], () => g.A.getType() === ei.zY.INVITE_UNCLAIMED),
        er = a.useCallback(
            (e) => {
                H(e),
                    S(Y.i.CREATION_INTENT),
                    f.default.track(M.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.label, template_code: e.code });
            },
            [H, S],
        ),
        { content: eo, footer: ec } = (0, j.u)({
            hasFooter: !1,
            onBack: () => {
                H(null), S(Y.i.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                ee(e === en.IR.COMMUNITY), S(Y.i.CUSTOMIZE_GUILD);
            },
        }),
        { content: ed, footer: em } = (0, I.D)({
            guildTemplate: P,
            titleClassName: el.RH,
            hasFooter: !1,
            onGuildCreated: (e) => {
                R(e), P?.id === et.v.CREATE ? S(Y.i.CHANNEL_PROMPT) : L(!0);
            },
            onBack: () => {
                S(Y.i.CREATION_INTENT);
            },
            isSlideReady: b === Y.i.CUSTOMIZE_GUILD,
            isCommunity: J,
        }),
        { content: eu, footer: eN } = (0, T.m)({
            createdGuildId: y,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                L(!0);
            },
            isSlideReady: b === Y.i.CHANNEL_PROMPT,
        }),
        { content: eE, footer: eh } = (function (e) {
            let { onBack: s, onComplete: i, onConnect: t, isSlideReady: n } = e,
                [r, o] = a.useState(""),
                [c, d] = a.useState(!1),
                [u, N] = a.useState(null),
                E = a.useRef(null);
            a.useEffect(() => {
                n && E.current?.focus();
            }, [n]);
            let x = a.useCallback(
                (e) => {
                    e.preventDefault();
                    let s = r.trim();
                    if ("" === s) return void N(w.intl.string(w.t.IRq5ah));
                    N(null), d(!0);
                    let t = s.split("/"),
                        n = t[t.length - 1];
                    z.Ay.resolveInvite(n, "Join Guild", { inputValue: s }).then(
                        (e) => {
                            let { invite: s } = e;
                            if ((d(!1), null == s)) return void N(w.intl.string(w.t["GEYI+Z"]));
                            if (null != s.channel) {
                                let e = z.Ay.getInviteContext("Join Guild", s);
                                z.Ay.acceptInvite({
                                    inviteKey: s.code,
                                    context: e,
                                    callback: (e) => {
                                        i(), z.Ay.transitionToInvite(e);
                                    },
                                }).catch((e) => {
                                    e instanceof B.Wl || e instanceof B.LG
                                        ? N((0, K.s)(e.code))
                                        : N(w.intl.string(w.t.dDZRdy));
                                });
                            }
                        },
                        (e) => {
                            d(!1);
                            let s = new B.Wl(e);
                            N((0, K.s)(s.code));
                        },
                    );
                },
                [r, d, N, i],
            );
            return {
                content: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(m.rQ, {
                            "data-migration-pending": !0,
                            className: Q.wx,
                            direction: p.A.Direction.VERTICAL,
                            separator: !1,
                            children: [
                                (0, l.jsx)(G.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    className: Q.DD,
                                    children: w.intl.string(w.t.riOUtB),
                                }),
                                (0, l.jsx)(h.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: w.intl.string(w.t["7jub2t"]),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(m.$m, {
                            "data-migration-pending": !0,
                            children: [
                                (0, l.jsx)("form", {
                                    onSubmit: x,
                                    className: Q.$j,
                                    children: (0, l.jsx)(q.k, {
                                        label: w.intl.string(w.t.qreV25),
                                        error: u,
                                        value: r,
                                        onChange: o,
                                        inputRef: E,
                                    }),
                                }),
                                (0, l.jsx)(h.E, {
                                    color: "text-default",
                                    variant: "text-xs/normal",
                                    children: w.intl.format(w.t.lHTZl2, { examples: `${X}wumpus-friends, hTKzmak` }),
                                }),
                                (0, l.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Q.LR,
                                    children: w.intl.format(w.t["8F/who"], {
                                        onClick: function () {
                                            t(), (0, Z.openUserSettings)(V.X.CONNECTIONS_PANEL);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                footer: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(F.$, {
                            variant: "primary",
                            text: w.intl.string(w.t.VJlc0S),
                            onClick: x,
                            disabled: 0 === r.length,
                            loading: c,
                        }),
                        (0, l.jsx)(U.$n, {
                            "data-migration-pending": !0,
                            className: Q.__invalid_skipButton,
                            look: U.$n.Looks.BLANK,
                            size: U.$n.Sizes.MIN,
                            onClick: s,
                            children: w.intl.string(w.t["13/7kX"]),
                        }),
                    ],
                }),
            };
        })({
            onBack: () => S(Y.i.CHOOSE_TEMPLATE),
            onComplete: () => {
                n();
            },
            onConnect: n,
            isSlideReady: b === Y.i.JOIN_GUILD,
        }),
        ex = null;
    switch (O) {
        case Y.i.CUSTOMIZE_GUILD:
            ex = em;
            break;
        case Y.i.CHANNEL_PROMPT:
            ex = eN;
            break;
        case Y.i.JOIN_GUILD:
            ex = eh;
            break;
        case Y.i.CREATION_INTENT:
            ex = ec;
    }
    let { ref: ep, width: e_ } = (0, x.Ay)();
    if (r)
        return (0, l.jsx)(m.EO, {
            ...t,
            "data-migration-pending": !0,
            size: m.rI.MEDIUM,
            className: o()(el.yl, el.so),
            "aria-labelledby": s,
            parentComponent: "NUFModal",
            children: (0, l.jsx)($, { onComplete: n }),
        });
    let eT = { impression_group: c.ImpressionGroups.GUILD_ADD_NUF };
    return (0, l.jsxs)(m.EO, {
        ...t,
        "data-migration-pending": !0,
        size: m.rI.MEDIUM,
        className: el.yl,
        "aria-labelledby": s,
        parentComponent: "NUFModal",
        children: [
            (0, l.jsx)("div", { className: el.pz, children: (0, l.jsx)(es, { step: O }) }),
            (0, l.jsx)(u.N, {
                theme: M.NJ8.LIGHT,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: o()(el.Qs, e),
                        ref: ep,
                        children: [
                            (0, l.jsx)("div", {
                                className: el.WT,
                                children: (0, l.jsxs)(N.t, {
                                    activeSlide: O,
                                    onSlideReady: (e) => k(e),
                                    centered: !1,
                                    width: e_,
                                    children: [
                                        (0, l.jsx)(N.q, {
                                            id: Y.i.AGE_GATE,
                                            children: (0, l.jsx)("div", {
                                                className: el.kL,
                                                children: (0, l.jsx)(W, {
                                                    onComplete: () => {
                                                        ea ? n() : S(Y.i.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: n,
                                                }),
                                            }),
                                        }),
                                        (0, l.jsx)(N.q, {
                                            id: Y.i.CHOOSE_TEMPLATE,
                                            impressionName: c.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: eT,
                                            children: (0, l.jsx)("div", {
                                                className: o()(el.kL, el.yT),
                                                children: (0, l.jsx)(C.A, {
                                                    className: el.kT,
                                                    onChooseTemplate: er,
                                                    isNewUser: !0,
                                                }),
                                            }),
                                        }),
                                        (0, l.jsx)(N.q, {
                                            id: Y.i.CREATION_INTENT,
                                            impressionName: c.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: eT,
                                            children: (0, l.jsx)("div", { className: o()(el.kL, el.tn), children: eo }),
                                        }),
                                        (0, l.jsx)(N.q, {
                                            id: Y.i.CUSTOMIZE_GUILD,
                                            impressionName: c.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: eT,
                                            children: (0, l.jsx)("div", { className: o()(el.kL, el.tn), children: ed }),
                                        }),
                                        (0, l.jsx)(N.q, {
                                            id: Y.i.CHANNEL_PROMPT,
                                            impressionName: c.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: eT,
                                            children: (0, l.jsx)("div", { className: o()(el.kL, el.tn), children: eu }),
                                        }),
                                        (0, l.jsx)(N.q, {
                                            id: Y.i.JOIN_GUILD,
                                            impressionName: c.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: eT,
                                            children: (0, l.jsx)("div", { className: o()(el.kL, el.tn), children: eE }),
                                        }),
                                    ],
                                }),
                            }),
                            O !== Y.i.AGE_GATE
                                ? (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: n, className: el.b })
                                : null,
                            O === Y.i.CHOOSE_TEMPLATE
                                ? (0, l.jsx)(m.jl, {
                                      "data-migration-pending": !0,
                                      justify: p.A.Justify.BETWEEN,
                                      className: o()(el.qr, el.fj),
                                      children: (0, l.jsx)(E.Anchor, {
                                          className: el.D3,
                                          onClick: () => {
                                              S(Y.i.JOIN_GUILD);
                                          },
                                          children: (0, l.jsxs)(h.E, {
                                              variant: "text-sm/medium",
                                              className: el.D3,
                                              children: [w.intl.string(w.t["N+Mi/U"]), " ", w.intl.string(w.t.yRjK4p)],
                                          }),
                                      }),
                                  })
                                : null,
                            null != ex
                                ? (0, l.jsx)(m.jl, {
                                      "data-migration-pending": !0,
                                      justify: p.A.Justify.BETWEEN,
                                      className: el.qr,
                                      children: ex,
                                  })
                                : null,
                        ],
                    }),
            }),
        ],
    });
}

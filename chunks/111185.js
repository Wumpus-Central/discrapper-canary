let n, s;
a.d(t, { default: () => el });
var i = a(627968),
    l = a(64700),
    r = a(503698),
    o = a.n(r),
    c = a(110259),
    _ = a(17928),
    d = a(935462),
    u = a(43990),
    m = a(430690),
    p = a(349288),
    f = a(834730),
    E = a(765671),
    h = a(235986),
    N = a(915089),
    A = a(362311),
    b = a(243460),
    x = a(424912),
    T = a(360475),
    D = a(287809),
    j = a(954571),
    C = a(426620),
    I = a(284009),
    g = a.n(I),
    y = a(661531),
    G = a(862482),
    v = a(111159),
    L = a(534514),
    U = a(86182),
    k = a(955437),
    O = a(201505),
    S = a(975571),
    R = a(652215),
    M = a(204925),
    w = a(985018),
    W = a(530335);
function P(e) {
    let { onComplete: t, onClose: a } = e,
        [n, s] = l.useState(null),
        [r, o] = l.useState(null),
        [c, d] = l.useState(!1),
        u = (0, _.bG)([D.default], () => D.default.getCurrentUser()),
        m = l.useRef(null);
    async function p(e) {
        e.preventDefault(), g()(null != n, "Cannot submit null birthday."), d(!0);
        try {
            await k.n7(n, M.w_.NEW_USER_FLOW), t();
        } catch (e) {
            null != e.body && null != e.body.date_of_birth
                ? (k.Xv(M.w_.NEW_USER_FLOW), k.$2(M.w_.NEW_USER_FLOW), a())
                : e?.body?.username != null
                  ? o(w.intl.string(w.t["TGg/2k"]))
                  : o(e?.body.message);
        }
        d(!1);
    }
    l.useEffect(() => {
        null != u && null != u.nsfwAllowed && t();
    }, [u, t]);
    let E = l.useCallback(
            (e) => {
                s(e);
            },
            [s],
        ),
        h = l.useCallback(() => {
            m.current?.focus();
        }, [m]);
    return null == u
        ? null
        : (0, i.jsxs)("form", {
              className: W.Qs,
              onSubmit: p,
              children: [
                  (0, i.jsx)(v.p, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: W.wm,
                      color: y.A.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, i.jsx)(L.D, {
                      className: W.DD,
                      variant: "heading-xl/semibold",
                      children: w.intl.string(w.t.n7i7sv),
                  }),
                  (0, i.jsx)(f.E, {
                      color: "text-default",
                      className: W.h_,
                      variant: "text-md/normal",
                      children: w.intl.format(w.t.fa8kW1, { helpURL: S.A.getArticleURL(R.MVz.AGE_GATE) }),
                  }),
                  (0, i.jsx)(U.w, {
                      theme: R.NJ8.LIGHT,
                      children: (0, i.jsx)(O.A, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: W.kz,
                          label: w.intl.string(w.t.rhBeKe),
                          name: "birthday",
                          onChange: E,
                          onPopulated: h,
                          error: r,
                          value: n,
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: W.qr,
                      children: (0, i.jsx)("div", {
                          className: W._o,
                          children: (0, i.jsx)(G.$n, {
                              "data-migration-pending": !0,
                              buttonRef: m,
                              type: "submit",
                              size: G.$n.Sizes.LARGE,
                              submitting: c,
                              disabled: null == n,
                              fullWidth: !0,
                              children: w.intl.string(w.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
var B = a(939249),
    F = a(821609),
    V = a(153260);
function $(e) {
    let { onComplete: t } = e;
    return (0, i.jsxs)(B.D, {
        className: V.kL,
        onClick: t,
        children: [
            (0, i.jsx)(L.D, {
                variant: "heading-xl/bold",
                color: "always-white",
                className: V.DD,
                children: w.intl.string(w.t.Deps41),
            }),
            (0, i.jsx)(L.D, {
                variant: "heading-lg/bold",
                color: "always-white",
                className: o()(V.DD, V.VA),
                children: w.intl.string(w.t.xv5g7B),
            }),
            (0, i.jsx)(F.$, { variant: "overlay-primary", text: w.intl.string(w.t["6X9YKG"]), onClick: t }),
        ],
    });
}
var H = a(292666),
    q = a(376728),
    z = a(845584),
    Y = a(780964),
    J = a(858897),
    Z = a(4274),
    K = a(488020);
let Q =
    ((n = window.GLOBAL_ENV.INVITE_HOST),
    (s = ""),
    null == n && ((n = location.host), (s = R.BVt.INVITE(""))),
    `${location.protocol}//${n}${s}/`);
var X = a(994277),
    ee = a(147646);
function et(e) {
    let { step: t } = e,
        a = t === X.i.AGE_GATE,
        n = t === X.i.CHOOSE_TEMPLATE || t === X.i.CREATION_INTENT,
        s = t === X.i.CUSTOMIZE_GUILD,
        l = t === X.i.CHANNEL_PROMPT || t === X.i.JOIN_GUILD,
        r = s || l,
        c = n || r;
    return (0, i.jsxs)("div", {
        className: ee.pz,
        children: [
            (0, i.jsx)("div", { className: o()(ee.Qo, { [ee.WU]: a }) }),
            (0, i.jsx)("div", { className: o()(ee.NF, { [ee.WU]: c }) }),
            (0, i.jsx)("div", { className: o()(ee.MW, { [ee.WU]: r }) }),
            (0, i.jsx)("div", { className: o()(ee._e, { [ee.WU]: c }) }),
            (0, i.jsx)("div", { className: o()(ee.ss, { [ee.WU]: c }) }),
            (0, i.jsx)("div", { className: o()(ee.mJ, { [ee.WU]: n }) }),
            (0, i.jsx)("div", { className: o()(ee.Gx, { [ee.WU]: n }) }),
            (0, i.jsx)("div", { className: o()(ee.p, { [ee.WU]: r }) }),
            (0, i.jsx)("div", { className: o()(ee.hV, { [ee.WU]: s }) }),
            (0, i.jsx)("div", { className: o()(ee.s3, { [ee.WU]: l }) }),
            (0, i.jsx)("div", { className: o()(ee.mq, { [ee.WU]: c }) }),
        ],
    });
}
var ea = a(771016),
    en = a(570465),
    es = a(819638),
    ei = a(735581);
function el(e) {
    let t = (0, N.GV)(),
        { onSlideChange: a, ...n } = e,
        { onClose: s } = n,
        [r, I] = l.useState(!1),
        g = (0, _.bG)([D.default], () => D.default.getCurrentUser()),
        y = null != g && null == g.nsfwAllowed,
        [v, U] = l.useState(y ? X.i.AGE_GATE : X.i.CHOOSE_TEMPLATE),
        [k, O] = l.useState(null);
    l.useEffect(() => {
        a(r ? X.i.COMPLETE : v);
    }, [a, v, r]);
    let [S, M] = l.useState(null),
        [W, B] = l.useState(null),
        [V, ee] = l.useState(!1),
        el = (0, _.bG)([C.A], () => C.A.getType() === ea.zY.INVITE_UNCLAIMED),
        er = l.useCallback(
            (e) => {
                B(e),
                    U(X.i.CREATION_INTENT),
                    j.default.track(R.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.label, template_code: e.code });
            },
            [B, U],
        ),
        { content: eo, footer: ec } = (0, b.u)({
            hasFooter: !1,
            onBack: () => {
                B(null), U(X.i.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                ee(e === es.IR.COMMUNITY), U(X.i.CUSTOMIZE_GUILD);
            },
        }),
        { content: e_, footer: ed } = (0, x.D)({
            guildTemplate: W,
            titleClassName: ei.RH,
            hasFooter: !1,
            onGuildCreated: (e) => {
                M(e), W?.id === en.v.CREATE ? U(X.i.CHANNEL_PROMPT) : I(!0);
            },
            onBack: () => {
                U(X.i.CREATION_INTENT);
            },
            isSlideReady: k === X.i.CUSTOMIZE_GUILD,
            isCommunity: V,
        }),
        { content: eu, footer: em } = (0, A.m)({
            createdGuildId: S,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                I(!0);
            },
            isSlideReady: k === X.i.CHANNEL_PROMPT,
        }),
        { content: ep, footer: ef } = (function (e) {
            let { onBack: t, onComplete: a, onConnect: n, isSlideReady: s } = e,
                [r, o] = l.useState(""),
                [c, _] = l.useState(!1),
                [u, m] = l.useState(null),
                p = l.useRef(null);
            l.useEffect(() => {
                s && p.current?.focus();
            }, [s]);
            let E = l.useCallback(
                (e) => {
                    e.preventDefault();
                    let t = r.trim();
                    if ("" === t) return void m(w.intl.string(w.t.IRq5ah));
                    m(null), _(!0);
                    let n = t.split("/"),
                        s = n[n.length - 1];
                    q.Ay.resolveInvite(s, "Join Guild", { inputValue: t }).then(
                        (e) => {
                            let { invite: t } = e;
                            if ((_(!1), null == t)) return void m(w.intl.string(w.t["GEYI+Z"]));
                            if (null != t.channel) {
                                let e = q.Ay.getInviteContext("Join Guild", t);
                                q.Ay.acceptInvite({
                                    inviteKey: t.code,
                                    context: e,
                                    callback: (e) => {
                                        a(), q.Ay.transitionToInvite(e);
                                    },
                                }).catch((e) => {
                                    e instanceof z.Wl || e instanceof z.LG
                                        ? m((0, Z.s)(e.code))
                                        : m(w.intl.string(w.t.dDZRdy));
                                });
                            }
                        },
                        (e) => {
                            _(!1);
                            let t = new z.Wl(e);
                            m((0, Z.s)(t.code));
                        },
                    );
                },
                [r, _, m, a],
            );
            return {
                content: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(d.rQ, {
                            "data-migration-pending": !0,
                            className: K.wx,
                            direction: h.A.Direction.VERTICAL,
                            separator: !1,
                            children: [
                                (0, i.jsx)(L.D, {
                                    variant: "heading-xl/bold",
                                    color: "text-strong",
                                    className: K.DD,
                                    children: w.intl.string(w.t.riOUtB),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: w.intl.string(w.t["7jub2t"]),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(d.$m, {
                            "data-migration-pending": !0,
                            children: [
                                (0, i.jsx)("form", {
                                    onSubmit: E,
                                    className: K.$j,
                                    children: (0, i.jsx)(H.k, {
                                        label: w.intl.string(w.t.qreV25),
                                        error: u,
                                        value: r,
                                        onChange: o,
                                        inputRef: p,
                                    }),
                                }),
                                (0, i.jsx)(f.E, {
                                    color: "text-default",
                                    variant: "text-xs/normal",
                                    children: w.intl.format(w.t.lHTZl2, { examples: `${Q}wumpus-friends, hTKzmak` }),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: K.LR,
                                    children: w.intl.format(w.t["8F/who"], {
                                        onClick: () => {
                                            n(), (0, J.openUserSettings)(Y.X.CONNECTIONS_PANEL);
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                footer: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(F.$, {
                            variant: "primary",
                            text: w.intl.string(w.t.VJlc0S),
                            onClick: E,
                            disabled: 0 === r.length,
                            loading: c,
                        }),
                        (0, i.jsx)(G.$n, {
                            "data-migration-pending": !0,
                            className: K.__invalid_skipButton,
                            look: G.$n.Looks.BLANK,
                            size: G.$n.Sizes.MIN,
                            onClick: t,
                            children: w.intl.string(w.t["13/7kX"]),
                        }),
                    ],
                }),
            };
        })({
            onBack: () => U(X.i.CHOOSE_TEMPLATE),
            onComplete: () => {
                s();
            },
            onConnect: s,
            isSlideReady: k === X.i.JOIN_GUILD,
        }),
        eE = null;
    switch (v) {
        case X.i.CUSTOMIZE_GUILD:
            eE = ed;
            break;
        case X.i.CHANNEL_PROMPT:
            eE = em;
            break;
        case X.i.JOIN_GUILD:
            eE = ef;
            break;
        case X.i.CREATION_INTENT:
            eE = ec;
    }
    let { ref: eh, width: eN } = (0, E.Ay)();
    if (r)
        return (0, i.jsx)(d.EO, {
            ...n,
            "data-migration-pending": !0,
            size: d.rI.MEDIUM,
            className: o()(ei.yl, ei.so),
            "aria-labelledby": t,
            parentComponent: "NUFModal",
            children: (0, i.jsx)($, { onComplete: s }),
        });
    let eA = { impression_group: c.ImpressionGroups.GUILD_ADD_NUF };
    return (0, i.jsxs)(d.EO, {
        ...n,
        "data-migration-pending": !0,
        size: d.rI.MEDIUM,
        className: ei.yl,
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: [
            (0, i.jsx)("div", { className: ei.pz, children: (0, i.jsx)(et, { step: v }) }),
            (0, i.jsx)(u.N, {
                theme: R.NJ8.LIGHT,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: o()(ei.Qs, e),
                        ref: eh,
                        children: [
                            (0, i.jsx)("div", {
                                className: ei.WT,
                                children: (0, i.jsxs)(m.t, {
                                    activeSlide: v,
                                    onSlideReady: (e) => O(e),
                                    centered: !1,
                                    width: eN,
                                    children: [
                                        (0, i.jsx)(m.q, {
                                            id: X.i.AGE_GATE,
                                            children: (0, i.jsx)("div", {
                                                className: ei.kL,
                                                children: (0, i.jsx)(P, {
                                                    onComplete: () => {
                                                        el ? s() : U(X.i.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: s,
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(m.q, {
                                            id: X.i.CHOOSE_TEMPLATE,
                                            impressionName: c.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: eA,
                                            children: (0, i.jsx)("div", {
                                                className: o()(ei.kL, ei.yT),
                                                children: (0, i.jsx)(T.A, {
                                                    className: ei.kT,
                                                    onChooseTemplate: er,
                                                    isNewUser: !0,
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(m.q, {
                                            id: X.i.CREATION_INTENT,
                                            impressionName: c.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: eA,
                                            children: (0, i.jsx)("div", { className: o()(ei.kL, ei.tn), children: eo }),
                                        }),
                                        (0, i.jsx)(m.q, {
                                            id: X.i.CUSTOMIZE_GUILD,
                                            impressionName: c.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: eA,
                                            children: (0, i.jsx)("div", { className: o()(ei.kL, ei.tn), children: e_ }),
                                        }),
                                        (0, i.jsx)(m.q, {
                                            id: X.i.CHANNEL_PROMPT,
                                            impressionName: c.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: eA,
                                            children: (0, i.jsx)("div", { className: o()(ei.kL, ei.tn), children: eu }),
                                        }),
                                        (0, i.jsx)(m.q, {
                                            id: X.i.JOIN_GUILD,
                                            impressionName: c.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: eA,
                                            children: (0, i.jsx)("div", { className: o()(ei.kL, ei.tn), children: ep }),
                                        }),
                                    ],
                                }),
                            }),
                            v !== X.i.AGE_GATE
                                ? (0, i.jsx)(d.s_, { "data-migration-pending": !0, onClick: s, className: ei.b })
                                : null,
                            v === X.i.CHOOSE_TEMPLATE
                                ? (0, i.jsx)(d.jl, {
                                      "data-migration-pending": !0,
                                      justify: h.A.Justify.BETWEEN,
                                      className: o()(ei.qr, ei.fj),
                                      children: (0, i.jsx)(p.Anchor, {
                                          className: ei.D3,
                                          onClick: () => {
                                              U(X.i.JOIN_GUILD);
                                          },
                                          children: (0, i.jsxs)(f.E, {
                                              variant: "text-sm/medium",
                                              className: ei.D3,
                                              children: [w.intl.string(w.t["N+Mi/U"]), " ", w.intl.string(w.t.yRjK4p)],
                                          }),
                                      }),
                                  })
                                : null,
                            null != eE
                                ? (0, i.jsx)(d.jl, {
                                      "data-migration-pending": !0,
                                      justify: h.A.Justify.BETWEEN,
                                      className: ei.qr,
                                      children: eE,
                                  })
                                : null,
                        ],
                    }),
            }),
        ],
    });
}

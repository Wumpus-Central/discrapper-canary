n.d(t, { Ay: () => la, fD: () => ll });
var l,
    a,
    r,
    s = n(627968),
    i = n(64700),
    o = n(503698),
    c = n.n(o),
    d = n(140735),
    u = n(155718),
    m = n(383233),
    p = n(298236),
    h = n(953756),
    C = n(735438),
    E = n(862482),
    A = n(550079),
    x = n(477782),
    N = n(34188),
    I = n(811893),
    f = n(863610),
    _ = n(442433),
    g = n(565645);
n(938796);
var v = n(17928),
    T = n(636537),
    S = n(192308),
    j = n(228366),
    O = n(163437),
    R = n(97352),
    y = n(67480),
    b = n(328968),
    P = n(927578),
    L = n(580630),
    D = n(963179),
    U = n(168393),
    k = n(652215),
    w = n(985018);
let M = (0, v.UT)([y.A, R.A, b.A], {
    getQueryId: k.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = y.A.get(e),
            n = R.A.getForSKU(e) ?? [],
            l = b.A.getForSKU(e),
            a = y.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === k.Puh.SUBSCRIPTION && null == a)
            ? null
            : { parentSku: a, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: k.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await T.Bo.get(t);
        j.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                j.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    j.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                });
    },
});
var H = n(957565),
    F = n(76843),
    K = n(489414),
    B = n(808199);
function G(e) {
    let { url: t, onSelect: n } = e;
    return H.p5 && null != t
        ? (0, s.jsx)(A.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: _.Z_,
              "aria-label": w.intl.string(w.t.tvTXy8),
              onSelect: n,
              children: (0, s.jsx)(x.rX, {
                  children: (0, s.jsx)(x.Dr, {
                      id: "copy",
                      label: w.intl.string(w.t.uHhnfa),
                      action: () => (0, H.C)(t),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let t,
        { label: n, style: l, disabled: a, emoji: r, url: o, skuId: d } = e,
        { executeStateUpdate: m, visualState: h, isDisabled: A } = (0, p.At)(e),
        x = (function (e) {
            let { data: t } = M(e),
                n = t?.parentSku,
                l = t?.sku,
                a = t?.storeListing,
                r = t?.subscriptionPlans,
                o = i.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(U.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, O.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                c = i.useCallback(() => {
                    if (null == l) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(D.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != a && (null == l || l.type !== k.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: w.intl.string(w.t.CHa0vN) };
                if (l.type === k.Puh.SUBSCRIPTION) {
                    if (null == r || 0 === r.length) return { disabled: !0, label: w.intl.string(w.t.CHa0vN) };
                    let e = r[0],
                        t = (0, P.y8)(e.id);
                    return {
                        disabled: !1,
                        label: w.intl.formatToPlainString(w.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, L.$g)(t.amount, t.currency),
                        }),
                        onClick: o,
                    };
                }
                return null == l.price
                    ? { disabled: !0, label: w.intl.string(w.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: w.intl.formatToPlainString(w.t["c6Q+B3"], {
                              skuName: l.name,
                              price: (0, L.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: c,
                      };
            }
        })(d),
        v = null != d && l === u.in.PREMIUM,
        T = v && x?.disabled,
        j = v ? x?.label : n,
        R = null != r,
        y = null != j && j.length > 0,
        b = l === u.in.LINK && null != o && o.length > 0,
        H = h === K.BB.LOADING || (v && null == x);
    return (
        (t = b
            ? () => {
                  (0, F.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : v
              ? null != x && !1 === x.disabled
                  ? x.onClick
                  : C.noop
              : () => m()),
        (0, s.jsxs)(E.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case u.in.PRIMARY:
                    case u.in.PREMIUM:
                        return E.$n.Colors.BRAND;
                    case u.in.SUCCESS:
                        return E.$n.Colors.GREEN;
                    case u.in.DESTRUCTIVE:
                        return E.$n.Colors.RED;
                    default:
                        return E.$n.Colors.PRIMARY;
                }
            })(l),
            size: E.$n.Sizes.SMALL,
            disabled: a || h === K.BB.DISABLED || A || T,
            onClick: t,
            onContextMenu: (e) => {
                b && (0, _.jA)(e, (e) => (0, s.jsx)(G, { ...e, url: o }));
            },
            role: b ? "link" : "button",
            children: [
                (0, s.jsxs)("div", {
                    className: c()(B.Qs, { [B.R]: H, [B.M2]: v }),
                    "aria-hidden": H,
                    children: [
                        v
                            ? (0, s.jsx)("div", {
                                  className: B.sV,
                                  children: (0, s.jsx)(N.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        R
                            ? (0, s.jsx)(g.A, {
                                  className: c()({ [B.MR]: y }),
                                  src: r.src,
                                  emojiId: r.id,
                                  emojiName: r.name,
                                  animated: r.animated,
                              })
                            : null,
                        y ? (0, s.jsx)("div", { className: B.Pf, children: j }) : null,
                        b ? (0, s.jsx)(I.t, { size: "xs", color: "currentColor", className: B.LE }) : null,
                    ],
                }),
                H
                    ? (0, s.jsx)("div", { className: B.Lq, children: (0, s.jsx)(f.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var z = n(678708),
    Y = n(713654),
    X = n(734057),
    W = n(71393),
    Z = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    q = n(47167),
    $ = n(696451),
    J = n(317525),
    Q = n(994500),
    ee = n(287809),
    et = n(768038),
    en = n(403362),
    el = n(562153);
function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = W.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case Z.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? $.Ay.getNick(l.id, t.id) : void 0;
                    return { type: K.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case Z.ROLE: {
                    if (null == l) return null;
                    let t = J.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: K.iw.ROLE, value: t.id, label: t.name };
                }
                case Z.CHANNEL: {
                    if (null == l) return null;
                    let t = X.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: K.iw.CHANNEL, value: t.id, label: (0, q.m1)(t, ee.default, Q.A) };
                }
            }
        })
        .filter(en.Vq);
}
n(138321);
var er = n(284009),
    es = n.n(er),
    ei = n(444550),
    eo = n(594808),
    ec = n(814890),
    ed = n(738343),
    eu = n(40816);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, s.jsx)("div", { className: ed.zc, style: { height: n, width: n }, children: t });
}
var ep = (((a = {})[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), a);
function eh(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: a, defaultValues: r } = e,
        { type: o, customId: d, maxValues: m, disabled: h } = t,
        C = (0, ec.c7)(t),
        [E, A] = i.useState(!1),
        [x, N] = i.useState(!1),
        [I, f] = i.useState(new Map(r?.map((e) => [e.value, e]))),
        [_, g] = i.useState(new Set(I.keys())),
        v = i.useRef((r ?? []).map((e) => e.value)),
        T = i.useRef(o),
        S = i.useRef(d),
        [j, O] = i.useState(0);
    i.useEffect(() => {
        let e = (r ?? []).map((e) => e.value);
        if (
            e.every((e) => v.current.includes(e)) &&
            v.current.every((t) => e.includes(t)) &&
            o === T.current &&
            d === S.current
        )
            return;
        (v.current = e), (T.current = o), (S.current = d);
        let t = new Map(r?.map((e) => [e.value, e]));
        f(t), g(new Set(t.keys())), O((e) => e + 1);
    }, [r, o, d]);
    let R = (0, p.jc)();
    es()(null != R, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: y,
            executeStateUpdate: b,
            visualState: P,
            isDisabled: L,
            error: D,
        } = R.useComponentState(t, I.size > 0 ? { type: o, selectedOptions: Array.from(I.values()) } : void 0),
        U = null != R.modal,
        k = P === K.BB.LOADING;
    i.useEffect(() => {
        if (
            y?.type === u.I5.USER_SELECT ||
            y?.type === u.I5.ROLE_SELECT ||
            y?.type === u.I5.MENTIONABLE_SELECT ||
            y?.type === u.I5.CHANNEL_SELECT
        ) {
            let e = new Map(y.selectedOptions.map((e) => [e.value, e]));
            f(e), g(new Set(e.keys()));
        }
    }, [y]);
    let w = i.useCallback(() => {
        b({ type: o, selectedOptions: Array.from(I.values()) }) && g(new Set(I.keys()));
    }, [b, o, I]);
    i.useEffect(() => {
        E || x || (I.size === _.size && Array.from(I.keys()).every((e) => _.has(e))) || w();
    }, [E, x, _, I, w]);
    let M = 0 === I.size || E,
        H = {
            isProcessing: k,
            isDisabled: h || P === K.BB.DISABLED || L,
            wrapperClassName: c()(ed.Lt, { [ed.zE]: U }),
            options: (e) =>
                new Promise((t) => {
                    t(n(e));
                }),
            placeholder: M ? C : void 0,
            onClose: () => A(!1),
            onOpen: () => A(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: (e, t) => {
                let { inPill: n } = t,
                    a = n ? 16 : 24,
                    r = l(e, a);
                return null != r ? (0, s.jsx)(em, { icon: r, iconSize: a }) : null;
            },
            renderOptionLabel: a,
        };
    return (0, s.jsxs)(i.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: ed.kL,
                children:
                    m > 1
                        ? (0, s.jsx)(
                              ei.p,
                              {
                                  value: Array.from(I.values()),
                                  onChange: (e) => {
                                      E || N(!0), f(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: c()({ [ed.R]: !M }),
                                  closeOnSelect: !1,
                                  ...H,
                                  "data-migration-pending": !0,
                              },
                              j,
                          )
                        : (0, s.jsx)(
                              ei.p,
                              {
                                  value: [...I.values()][0],
                                  onChange: (e) => f(null != e ? new Map([[e.value, e]]) : new Map()),
                                  clearable: !0,
                                  ...H,
                                  "data-migration-pending": !0,
                              },
                              j,
                          ),
            }),
            null == D || U ? null : (0, s.jsx)(eo.S0, { ...(0, eo.PS)(D), className: eu.z3 }),
        ],
    });
}
var eC = n(167483);
function eE(e) {
    let { channelTypes: t } = e,
        n = (0, p.jc)(),
        l = n?.channelId,
        a = X.A.getChannel(l),
        r = W.A.getGuild(a?.getGuildId()),
        o = i.useMemo(() => ea(e.defaultValues, r?.id, t), [e.defaultValues, r, t]);
    return (0, s.jsx)(eh, {
        selectActionComponent: e,
        queryOptions: (e) => {
            let n;
            return null == (n = X.A.getChannel(l))
                ? []
                : et.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: n,
                      channelTypes: t,
                      limit: 15,
                  }).channels.map((e) => ({ type: K.iw.CHANNEL, value: e.id, label: (0, q.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: (e, t) => {
            let n = X.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === k.rbe.GUILD_CATEGORY ? z.s : (0, Y.gU)(n);
            return null != l ? (0, s.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: (e) => (0, s.jsx)("span", { className: eC.Pf, children: e.label }),
        defaultValues: o,
    });
}
var eA = n(150934);
function ex(e) {
    let { type: t, default: n } = e,
        l = (0, p.jc)();
    es()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: a, executeStateUpdate: r } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = i.useMemo(() => a?.type === t && a.value, [a, t]),
        c = l.getParents(e)?.[0],
        d = c?.type === u.I5.LABEL ? c : void 0;
    return (
        es()(null != d, "CheckboxActionComponent must be a child of a Label component"),
        (0, s.jsx)(eA.S, {
            label: d.label,
            description: d.description,
            checked: o,
            onChange: (e) => {
                r({ type: t, value: e });
            },
        })
    );
}
var eN = n(167417);
function eI(e) {
    let { type: t, options: n, required: l, maxValues: a } = e,
        r = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: c } = (0, p.At)(e, r.length > 0 ? { type: t, values: r } : void 0),
        d = i.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, s.jsx)(eN.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: d.length >= a && !d.includes(e.value),
        })),
        selectedValues: d,
        onChange: (e) => {
            c({ type: t, values: e });
        },
        required: l,
    });
}
var ef = n(81369),
    e_ = n(661531),
    eg = n(834730),
    ev = n(628284),
    eT = n(241326),
    eS = n(608299),
    ej = n(780777),
    eO = n(23658),
    eR = n(565150),
    ey = n(851023),
    eb = n(215497),
    eP = n(914905),
    eL = n(101555),
    eD = n(31717),
    eU = n(255438),
    ek = n(453771),
    ew = n(518960),
    eM = n(382287),
    eH = n(522602),
    eF = n(179906);
function eK(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: a, guildId: r } = e,
        i = (0, ek.o2)(r),
        o = (0, eU.Xq)(i / eU.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, s.jsxs)("div", {
        className: eF.pp,
        children: [
            (0, s.jsxs)("div", {
                className: c()(eF.e8, { [eF.R]: t }),
                children: [
                    (0, s.jsx)(ef.H, { color: e_.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, s.jsx)(eg.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: w.intl.format(w.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: a,
                        }),
                    }),
                    (0, s.jsx)(eg.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                            l > 1
                                ? l === a
                                    ? w.intl.format(w.t.SAr31z, { minValues: l, maxSize: o })
                                    : w.intl.format(w.t["ZG+3Ck"], { minValues: l, maxValues: a, maxSize: o })
                                : w.intl.format(w.t.tyxwW1, { maxValues: a, maxSize: o }),
                    }),
                ],
            }),
            t &&
                (0, s.jsxs)("div", {
                    className: c()(eF.e8, eF.r$),
                    children: [
                        (0, s.jsx)(ef.H, { color: e_.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, s.jsx)(eg.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: w.intl.string(w.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eB() {
    return (0, s.jsxs)("div", {
        className: c()(eF.pp, eF.e8),
        children: [
            (0, s.jsx)(ev.y, { color: e_.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, s.jsx)(eg.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: w.intl.string(w.t["0PhgpK"]),
            }),
            (0, s.jsx)(eg.E, { variant: "text-xs/normal", color: "text-muted", children: w.intl.string(w.t.HYg2Hn) }),
        ],
    });
}
function eG(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            className: c()(eF.NJ, { [eF.j1]: l }),
            children: [
                (0, s.jsx)(eP.J, { upload: t, size: l ? eb.L.XSMALL : eb.L.XXSMALL }),
                (0, s.jsx)(eg.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eF.iW,
                    children: t.filename ?? w.intl.string(w.t.ZMirp0),
                }),
                (0, s.jsx)(eL.Ay, {
                    className: eF.BX,
                    children: (0, s.jsx)(ey.A, {
                        className: eF.XI,
                        tooltip: w.intl.string(w.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, s.jsx)(eT.u, { size: "xs", color: "currentColor", className: eF.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eV(e) {
    let { minValues: t, maxValues: n } = e,
        l = i.useRef(null),
        a = i.useRef(null),
        [r, o] = i.useState(!1),
        d = (0, p.jc)();
    es()(null != d, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = d.channelId;
    es()(null != m, "FileUploadActionComponent must be used inside a channel");
    let h = d.modal?.customId;
    es()(null != h, "FileUploadActionComponent requires modalCustomId from context");
    let {
            uploadIds: C,
            setUploadIds: E,
            currentUploads: A,
            error: x,
        } = (function (e) {
            let t = (0, p.jc)();
            es()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            es()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: a, error: r } = t.useComponentState(e),
                s = i.useMemo(() => (l?.type === u.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = eH.A.getUploads(n, eD.C.InteractionModal),
                c = i.useMemo(() => s.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [s, o]),
                d = i.useCallback((e) => a({ type: u.I5.FILE_UPLOAD, uploadIds: e }), [a]);
            return (
                i.useEffect(() => {
                    s.length > c.length && d(s.filter((e) => c.some((t) => t.id === e)));
                }, [s, c, d]),
                { uploadIds: s, setUploadIds: d, currentUploads: c, error: r }
            );
        })(e),
        N = (0, v.bG)([X.A], () => X.A.getBasicChannel(m));
    es()(null != N, "FileUploadActionComponent requires a valid channel");
    let I = i.useCallback((e) => {
            e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0);
        }, []),
        f = i.useCallback((e) => {
            a.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        _ = i.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (C.length + e.length > n)
                    return (0, eO.openUploadError)({
                        title: w.intl.string(w.t.wOr6hB),
                        help: w.intl.formatToPlainString(w.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eM.fJ)(e, N.guild_id)) return (0, ew.V)(N, e);
                let l = e.map((e) => {
                    let n = (0, ec.so)(h),
                        l = { id: n, file: e, platform: eR.xz.WEB, origin: t };
                    return (
                        eS.A.setFile({
                            channelId: m,
                            id: n,
                            file: l,
                            draftType: eD.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                E(C.concat(l));
            },
            [C, n, N, E, h, m],
        ),
        g = i.useCallback(
            (e) => {
                e.preventDefault(), o(!1), _(Array.from(e.dataTransfer?.files ?? []), "drag_drop");
            },
            [_],
        ),
        T = (e) => {
            eS.A.remove(m, e, eD.C.InteractionModal), E(C.filter((t) => t !== e));
        };
    return (i.useEffect(() => {
        let e = a.current;
        return (
            e?.addEventListener("dragover", I),
            e?.addEventListener("dragleave", f),
            e?.addEventListener("drop", g),
            () => {
                e?.removeEventListener("dragover", I),
                    e?.removeEventListener("dragleave", f),
                    e?.removeEventListener("drop", g);
            }
        );
    }, [I, f, g]),
    1 === n && 1 === A.length)
        ? (0, s.jsx)(eG, { upload: A[0], handleRemoveFile: T, singleFileInput: !0 })
        : (0, s.jsxs)("div", {
              ref: a,
              className: c()(eF.kL, { [eF.Ke]: r, [eF.z3]: null != x }),
              children: [
                  C.length >= n
                      ? (0, s.jsx)(eB, {})
                      : (0, s.jsx)(eK, {
                            dropping: r,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            guildId: N.guild_id,
                        }),
                  A.length > 0 &&
                      (0, s.jsx)("div", {
                          className: eF.aq,
                          children: A.map((e) => (0, s.jsx)(eG, { upload: e, handleRemoveFile: T }, e.id)),
                      }),
                  (0, s.jsx)(ej.A, {
                      ref: l,
                      onChange: (e) => {
                          _(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = "");
                      },
                      multiple: n > 1,
                      tabIndex: -1,
                      className: eF.Fg,
                  }),
              ],
          });
}
var ez = n(97808),
    eY = n(778712),
    eX = n(179866),
    eW = n(950305),
    eZ = n(297413),
    eq = n(376304),
    e$ = n(201275),
    eJ = n(386784),
    eQ = n(657048),
    e0 = n(290863);
function e1(e) {
    let t = (0, p.jc)(),
        n = t?.channelId,
        l = X.A.getChannel(n),
        a = W.A.getGuild(l?.getGuildId()),
        r = (0, eJ.A)(a?.id, 1e3),
        o = i.useMemo(() => ea(e.defaultValues, a?.id), [e.defaultValues, a]);
    return (0, s.jsx)(eh, {
        selectActionComponent: e,
        queryOptions: (t) =>
            (function (e, t, n) {
                let l = X.A.getChannel(n);
                if (null == l) return [];
                let a = e === u.I5.USER_SELECT || e === u.I5.MENTIONABLE_SELECT,
                    r = e === u.I5.ROLE_SELECT || e === u.I5.MENTIONABLE_SELECT,
                    { users: s, roles: i } = et.Ay.queryMentionResults({
                        query: t,
                        channel: l,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: a,
                        canMentionRoles: r,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15,
                    });
                return [
                    ...s.map((e) => {
                        let t = el.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: K.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...i.map((e) => ({ type: K.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n),
        renderIcon: (e, t) => {
            let n = t === ep.PILL_ICON_SIZE;
            if (e?.type === K.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, s.jsx)(ez.eu, {
                    size: n ? eY._3.SIZE_16 : eY._3.SIZE_24,
                    src: l.getAvatarURL(a?.id, t),
                    status: n ? null : e0.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === K.iw.ROLE) {
                let n = null != a ? J.A.getRole(a.id, e.value) : void 0;
                if (null == n || null == a) return;
                let l = (0, eq.fm)(a, n) ? (0, e$.ox)(n, t) : null;
                return null != l
                    ? (0, s.jsx)(eQ.A, { ...l })
                    : (0, s.jsx)(eX.i, { size: "custom", color: n.colorString ?? k.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === K.iw.USER) {
                let n = ee.default.getUser(e.value);
                null != n &&
                    (t = (0, s.jsx)(eZ.A, {
                        className: eC.Tc,
                        usernameClass: eC.Xh,
                        discriminatorClass: eC.D2,
                        botClass: eC.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === K.iw.ROLE) {
                let n = null != a ? J.A.getRole(a.id, e.value) : void 0,
                    l = null == n ? null : r?.[n.id];
                null != l &&
                    (t = (0, s.jsxs)("div", {
                        className: eC.Ly,
                        children: [
                            (0, s.jsx)(eW.n, { size: "sm", color: "currentColor", className: eC.jh }),
                            (0, s.jsx)("span", { className: eC.NT, children: l }),
                        ],
                    }));
            }
            return (0, s.jsxs)("span", {
                className: eC.Pf,
                children: [(0, s.jsx)("span", { className: eC.QK, children: e.label }), t],
            });
        },
        defaultValues: o,
    });
}
var e5 = n(144228),
    e2 = n(821609),
    e4 = n(69889);
function e9(e) {
    let { type: t, options: n, required: l } = e,
        a = i.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: r, executeStateUpdate: o } = (0, p.At)(e, null != a ? { type: t, value: a } : void 0),
        d = i.useMemo(() => (r?.type === t ? r.value : null), [r, t]),
        u = null != d,
        m = i.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]),
        h = (e) => {
            o({ type: t, value: e });
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e5.z, { options: m, value: d ?? "", onChange: h, required: l }),
            !l &&
                (0, s.jsx)("div", {
                    className: c()(e4.H, { [e4.d]: !u }),
                    "aria-hidden": !u,
                    children: (0, s.jsx)(e2.$, {
                        text: w.intl.string(w.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => h(null),
                    }),
                }),
        ],
    });
}
var e8 = n(843282);
function e3(e) {
    let { emoji: t, label: n, description: l, isDisabled: a, isOffset: r } = e,
        i = c()(eu._A, { [eu.r9]: a, [eu.cY]: null == t && r });
    return (0, s.jsxs)("div", {
        className: eu.uK,
        children: [
            null != t
                ? (0, s.jsx)(g.A, { className: eu.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, s.jsxs)("div", {
                className: i,
                children: [
                    (0, s.jsx)("strong", { className: eu.Pf, children: n }),
                    null != l ? (0, s.jsx)("span", { className: eu.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function e6(e) {
    let { emoji: t, label: n } = e;
    return (0, s.jsx)("div", {
        className: eu.uK,
        children: (0, s.jsxs)("div", {
            className: c()(eu.Uq, eu.u9),
            children: [
                null != t
                    ? (0, s.jsx)(g.A, {
                          className: eu.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, s.jsx)("span", { className: eu.oX, children: n }),
            ],
        }),
    });
}
function e7(e) {
    let { options: t } = e;
    return (0, s.jsx)("div", {
        className: eu.uK,
        children: (0, s.jsx)("div", {
            className: eu.Uq,
            children: t.map((e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: eu.mK,
                        children: [
                            null != e.emoji
                                ? (0, s.jsx)(g.A, {
                                      className: eu.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, s.jsx)("span", { className: eu.Tc, children: e.label }, e.value),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function te(e) {
    let { type: t, options: n, id: l, maxValues: a, disabled: r } = e,
        o = (0, ec.c7)(e),
        d = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, p.jc)();
    es()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: h,
            executeStateUpdate: C,
            visualState: E,
            isDisabled: A,
            error: x,
        } = m.useComponentState(e, d.length > 0 ? { type: t, values: d } : void 0),
        N = null != m.modal,
        I = a > 1,
        f = E === K.BB.LOADING,
        [_, g] = i.useState(!1),
        [v, T] = i.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, j] = i.useState(v),
        O = i.useMemo(() => n.some((e) => null != e.emoji), [n]);
    i.useEffect(() => {
        if (h?.type === u.I5.STRING_SELECT) {
            let e = new Set(h.values);
            T(e), j(e);
        } else {
            let e = new Set(d);
            T(e), j(e);
        }
    }, [l, d, h]);
    let R = i.useCallback(() => {
        S !== v && C({ type: u.I5.STRING_SELECT, values: Array.from(v) }) && j(v);
    }, [v, S, j, C]);
    i.useEffect(() => {
        _ || (v.size === S.size && Array.from(S).every((e) => v.has(e))) || R();
    }, [_, v, S, R]);
    let y = (0, ec.Lr)(e, N ? "modal" : "message"),
        b = e8.lS;
    I ? (b = e8.M8) : y && (b = e8.$l);
    let P = (0, e8.Ev)({ value: v, onChange: (e) => T(e), onSelectInteraction: b });
    return (0, s.jsxs)(i.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: eu.kL,
                children: (0, s.jsx)(e8.Pw, {
                    isProcessing: f,
                    isDisabled: r || E === K.BB.DISABLED || A,
                    className: c()(eu.Lt, { [eu.zE]: N }),
                    options: n.map((e) => ({ ...e, disabled: I && !v.has(e.value) && v.size === a })),
                    placeholder: o,
                    onClose: () => g(!1),
                    onOpen: () => g(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !I,
                    optionClassName: eu.MT,
                    renderOptionLabel: (e) =>
                        (0, s.jsx)(e3, { ...e, isDisabled: I && !v.has(e.value) && v.size === a, isOffset: O }),
                    renderOptionValue: (e) => (I ? (0, s.jsx)(e7, { options: e }) : (0, s.jsx)(e6, { ...e[0] })),
                    ...P,
                    "data-migration-pending": !0,
                }),
            }),
            null == x || N ? null : (0, s.jsx)(eo.S0, { ...(0, eo.PS)(x), className: eu.z3 }),
        ],
    });
}
var tt = n(292666),
    tn = n(260598),
    tl = n(321471),
    ta = n(969508),
    tr = n(597526);
function ts(e) {
    let t,
        { type: n, style: l, label: a, placeholder: r, minLength: o, maxLength: c, required: d, value: m } = e,
        [h, C] = i.useState(m ?? ""),
        { state: E, executeStateUpdate: A, error: x } = (0, p.At)(e, null != m ? { type: n, value: m } : void 0),
        N = (0, ta.FG)(e.id);
    i.useEffect(() => {
        E?.type === n && C(E.value);
    }, [n, E]);
    let I = {
        value: h,
        placeholder: r,
        minLength: o,
        maxLength: c,
        required: d,
        onChange: (e) => {
            C(e), A({ type: n, value: e });
        },
        autoFocus: N,
    };
    switch (l) {
        case u.qz.SMALL:
            t = (0, s.jsx)(tt.k, { ...I });
            break;
        case u.qz.PARAGRAPH:
            t = (0, s.jsx)(tn.f, { autosize: !0, ...I });
    }
    return null != a ? (0, s.jsx)(tl.e, { title: a, required: d, className: tr.k, error: x, children: t }) : t;
}
n(321073);
var ti = n(534890),
    to = n(831544),
    tc = n(460905),
    td = n(109112),
    tu = n(664121),
    tm = n(534514),
    tp = n(602853),
    th = n(222713),
    tC = n(783465),
    tE = n(7584),
    tA = n(548118),
    tx = n(486020),
    tN = n(582068),
    tI = n(789369);
function tf(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: a = 0,
            numEmojisSent: r = 0,
            topEmoji: o,
            topGame: c,
            topGuild: d,
            powerLevel: u,
            powerLevelPercentile: m,
        } = t,
        p = new Intl.NumberFormat(w.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        h = new Intl.NumberFormat(w.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(r),
        C = (0, tC.oO)(a),
        E = (0, tC.OW)(n),
        A = th.f[n],
        x = (0, tp.r)(A.primaryColor).hex(),
        N = (0, tp.r)(A.secondaryColor).hex({ opacity: 0.2 }),
        I = (0, v.bG)([W.A], () => W.A.getGuild(d?.guildId)),
        f = new Intl.NumberFormat(w.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        _ = (0, tC._V)(m ?? 0),
        T = (0, i.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return e.push("/assets/db1951f89e12e0e3.svg"), e;
        }, []);
    return (0, s.jsxs)("div", {
        className: tI.kL,
        style: { backgroundColor: x },
        children: [
            (0, s.jsxs)("div", {
                className: tI.Nr,
                children: [
                    (0, s.jsx)("img", { src: E, alt: "", className: tI.LY, style: { backgroundColor: x } }),
                    (0, s.jsxs)("div", {
                        className: tI.M1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: tI.dJ,
                                children: [
                                    (0, s.jsx)(ti.o, { color: e_.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eg.E, { variant: "text-sm/medium", className: tI.KA, children: p }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: tI.dJ,
                                children: [
                                    (0, s.jsx)(to.c, { color: e_.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eg.E, { variant: "text-sm/medium", className: tI.KA, children: C }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: tI.dJ,
                                children: [
                                    (0, s.jsx)(tc.n, { color: e_.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eg.E, { variant: "text-sm/medium", className: tI.KA, children: h }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: tI.dJ,
                                children:
                                    null == o
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(td._, { color: e_.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/medium",
                                                      className: tI.KA,
                                                      children: w.intl.string(tN.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(g.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: tI.iY,
                                                  }),
                                                  (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/medium",
                                                      className: tI.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? tE.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: tI.dJ,
                                children:
                                    null == c
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(td._, { color: e_.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/medium",
                                                      className: tI.KA,
                                                      children: w.intl.string(tN.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("img", {
                                                      src: tx.Ay.getApplicationIconURL({
                                                          id: c.applicationId,
                                                          icon: c.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: tI.iY,
                                                  }),
                                                  (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/medium",
                                                      className: tI.KA,
                                                      children: c.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: tI.dJ,
                                children:
                                    null == d
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(td._, { color: e_.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/medium",
                                                      className: tI.KA,
                                                      children: w.intl.string(tN.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  null != I
                                                      ? (0, s.jsx)(tA.Ay, {
                                                            guild: I,
                                                            size: tA.Ay.Sizes.SMOL,
                                                            className: tI.iY,
                                                        })
                                                      : (0, s.jsx)(tu.R, { color: e_.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/medium",
                                                      className: tI.KA,
                                                      children: d.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: tI.qr,
                style: { backgroundColor: N },
                children: (0, s.jsx)(tm.D, {
                    variant: "display-sm",
                    className: tI.DD,
                    children: w.intl.string(tN.default["CdU/PF"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: tI.hC,
                style: { backgroundColor: x },
                children: [
                    (0, s.jsx)("div", {
                        className: tI.TO,
                        children: T.map((e, t) =>
                            (0, s.jsx)(
                                "img",
                                { className: tI.mG, src: e, width: 4, alt: "", style: { opacity: t >= _ ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, s.jsxs)("div", {
                        className: tI.JA,
                        children: [
                            (0, s.jsx)(eg.E, { variant: "text-xs/normal", className: tI.KA, children: "LVL" }),
                            (0, s.jsx)(eg.E, { variant: "text-xs/bold", className: tI.KA, children: f.format(u ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var t_ = n(564771),
    tg = n(338717),
    tv = n(96782),
    tT = n(302031),
    tS = n(343408);
function tj(e) {
    let { file: t, name: n, size: l, spoiler: a } = e,
        r = i.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [o, d] = i.useState(a),
        [u, m] = i.useState(a);
    a !== o && (d(a), m(a));
    let p = i.useMemo(
            () => () => (0, s.jsx)(tv.zB, { mimeType: r, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
            [t, r],
        ),
        h = (e) =>
            (0, s.jsx)(t_.A, {
                className: c()({ [tS.V]: e }),
                url: t.url,
                fileName: n ?? w.intl.string(w.t.GnuJ5u),
                fileSize: l ?? 0,
                renderAdjacentContent: p,
            });
    return (0, s.jsx)("div", {
        className: tS.O,
        children: a
            ? (0, s.jsx)(tT.Ay, {
                  type: tT.Ay.Types.ATTACHMENT,
                  reason: tg.Oc.SPOILER,
                  obscured: u,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => h(e),
              })
            : h(!1),
    });
}
var tO = n(665260),
    tR = n(731068),
    ty = n(154872),
    tb = n(269849),
    tP = n(294520),
    tL = n(448381),
    tD = n(144165),
    tU = n(990078),
    tk = n(891694),
    tw = n(552437);
function tM(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === u.TD.LOADED_NOT_FOUND)
        return (0, s.jsx)(tU.m, {
            text: w.intl.string(w.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, s.jsx)("div", {
                className: c()(e.className, tw.FN, { [tw.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, s.jsx)(tk.A, { ref: t, className: tw.i4 }),
            }),
        });
    let l = n.loadingState === u.TD.LOADING ? k.Rv1.LOADING : k.Rv1.ERROR;
    return (0, s.jsx)(tD._, {
        className: c()(e.className, { [tw.gS]: e.hiddenSpoilers }),
        readyState: l,
        src: "",
        width: e.placeholderWidth,
        height: e.placeholderHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1,
    });
}
var tH = n(998218),
    tF = n(34337);
function tK(e) {
    let t = e.item.originalItem.media;
    return (0, s.jsx)(tM, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tB(e) {
    let t = e.item.originalItem.media;
    return (0, tF.LL)({
        ...e,
        alt: e.item.originalItem.description,
        src: t.proxyUrl,
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholderVersion,
        contentType: t.contentType,
        originalContentType: t.originalContentType,
        sourceMetadata: { message: e.message },
        analyticsSource: "renderImageComponentForGalleryItem",
        srcIsAnimated: e.item.srcIsAnimated,
    });
}
function tG(e) {
    let t = e.item.originalItem.media,
        n = tH.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, tF.$o)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tV = n(564107),
    tz = n(394839),
    tY = n(644447);
function tX(e) {
    let { message: t } = (0, p.jc)(),
        n = (0, v.bG)([X.A], () => X.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: a,
            gifAutoPlay: r,
            getGifFavButton: i,
            getOnMediaItemContextMenu: o,
        } = (0, tV.X)();
    if (null == t || null == n) return null;
    let c = e.items.map((e) => (0, ty.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: d, srcToHandlePreloadImage: u } =
            c.length > 1
                ? (0, tb.o)(c, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: a }, "Media Mosaic")
                : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} };
    function m(e, n) {
        let l = e.originalItem;
        return (0, tP.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let h = e.items.map((e, n) => {
        let l = e.media,
            a = o?.(l),
            s = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, tL.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, tO.Lt)(l.flags, tR.e5.IS_ANIMATED),
                },
                onContextMenu: a,
                autoPlayGif: r,
                getObscureReason: m,
                renderImageComponent: tB,
                renderVideoComponent: tG,
                renderVisualPlaceholderComponent: tK,
                renderAudioComponent: k.tEg,
                renderPlaintextFilePreview: k.tEg,
                renderGenericFileComponent: k.tEg,
                renderMosaicItemFooter: k.tEg,
                gifFavoriteButton: i(l),
                onPlay: (e, t, n) => {},
                canRemoveItem: !1,
                onRemoveItem: k.tEg,
            },
            c = (0, tY.E)({ proxyURL: l.proxyUrl, url: l.url });
        return c in d && ((s.onClick = d[c]), (s.handlePreloadImage = u[c])), s;
    });
    return (0, s.jsx)("div", { children: (0, s.jsx)(tz.A, { items: h, isInAppComponentsV2: !0 }) });
}
var tW = n(371068),
    tZ = n(170226),
    tq = n(838541),
    t$ = n(493934);
function tJ(e) {
    let { media: t, spoiler: n, description: l } = e,
        a = (0, tL.wz)(t),
        r = (0, tO.Lt)(t.flags, tR.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tV.X)(),
        [d, u] = i.useState(n),
        [m, p] = i.useState(n);
    n !== d && (u(n), p(n));
    let h = (e) =>
        "IMAGE" !== a
            ? (0, s.jsx)(tM, {
                  className: t$.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, s.jsx)(tF.LL, {
                  containerClassName: c()(t$.Dg, { [t$.rP]: e }),
                  imageClassName: t$._8,
                  src: t.proxyUrl,
                  alt: l,
                  original: t.url,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  width: t.width ?? 0,
                  height: t.height ?? 0,
                  hiddenSpoilers: e,
                  maxWidth: 170,
                  maxHeight: 170,
                  minWidth: 85,
                  minHeight: 85,
                  autoPlay: o && !e,
                  mediaLayoutType: tq.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: r,
              });
    return n
        ? (0, s.jsx)(tT.Ay, {
              type: tT.Ay.Types.ATTACHMENT,
              reason: tg.Oc.SPOILER,
              obscured: m,
              onToggleObscurity: () => p((e) => !e),
              children: (e) => h(e),
          })
        : h(!1);
}
var tQ = n(901252);
function t0() {
    return (0, s.jsx)("div", {
        className: tQ.k,
        children: (0, s.jsx)(eg.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: w.intl.string(w.t.zksHZO),
        }),
    });
}
var t1 = n(681154);
class t5 extends i.PureComponent {
    state = { error: null };
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, t) {
        console.error("ErrorBoundary caught an error", e, t);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
}
var t2 = n(211401),
    t4 = n(500049),
    t9 = n(429913),
    t8 = n(355622),
    t3 = n(583846),
    t6 = n(360469),
    t7 = n(52133),
    ne = n(803306),
    nt = n(860071),
    nn = n(808380),
    nl = n(409626),
    na = n(692969),
    nr = n(424994),
    ns = (((r = {})[(r.EMBED = 1)] = "EMBED"), r);
let ni = { [nn.Y.XBOX]: nr.a4.XBOX, [nn.Y.PLAYSTATION]: nr.a4.PLAYSTATION },
    no = { [ns.EMBED]: nl.Ob.Embed };
function nc(e) {
    let t,
        n,
        { entry: l, location: a, baseEntryData: r } = e,
        s = (0, t9.h)(l.extra.application_id),
        i = s?.getIconURL(t6.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = ni[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === t1.ContentInventoryEntryType.PLAYED_GAME && (0, t3.JM)(l) && !(0, t3.I5)(l)
            ? w.t.vPg1JT
            : w.t.rPqqts;
    let c = no[a],
        d = {
            onClick: (0, na.A)({
                location: c,
                applicationId: l.extra.application_id,
                source: c,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: w.intl.formatToPlainString(w.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...r,
        thumbnailUrl: i,
        title: o,
        titleClickable: d,
        thumbnailClickable: d,
        userDescription: n,
        providerIconProps: t,
    };
}
var nd = n(205327),
    nu = n(261020),
    nm = n(272984),
    np = n(970928);
let nh = i.createContext(void 0);
function nC(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = i.useRef([]);
                return (
                    i.useEffect(() => {
                        (0, t7.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, ne.wz)(e) : nt.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case t1.ContentInventoryEntryType.TOP_ARTIST:
            return (0, s.jsx)(nx, { entry: t, ...l });
        case t1.ContentInventoryEntryType.TOP_GAME:
            return (0, s.jsx)(nN, { entry: t, ...l });
        case t1.ContentInventoryEntryType.PLAYED_GAME:
            return (0, s.jsx)(nI, { entry: t, ...l });
        case t1.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, s.jsx)(nf, { entry: t, ...l });
        case t1.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, s.jsx)(n_, { entry: t, ...l });
        case t1.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, s.jsx)(nA, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function nE(e) {
    let { errorFallback: t, ...n } = e;
    return (0, s.jsx)(t5, { fallback: t, children: (0, s.jsx)(nC, { ...n }) });
}
function nA(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let { entry: t } = e,
                n = (0, t9.h)(t.extra.application_id),
                l = n?.getIconURL(t6.iu.LARGE),
                a = t.extra.activity_name,
                r = (0, t3.Hd)(t) ? w.t.vPg1JT : w.t.rPqqts,
                s = {
                    onClick: () => {
                        t2.R(t4.s4.TEXT, t8.oU.NORMAL, { applicationId: t.extra.application_id });
                    },
                    ariaDescription: w.intl.formatToPlainString(w.t.NTHttN, { title: a }),
                };
            return { thumbnailUrl: l, title: a, titleClickable: s, thumbnailClickable: s, userDescription: r };
        })({ entry: t, ...l });
    return (0, s.jsx)(nh.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nx(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                { provider: a, image_url: r } = n.extra.media,
                s = n.extra.artist.name,
                i = {
                    onClick: () => (0, nu.n)(nm.M0.ALBUM, n.extra.media.external_parent_id),
                    ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: n.extra.media.parent_title }),
                },
                o = {
                    onClick: () => (0, nu.n)(nm.M0.ARTIST, n.extra.artist.external_id),
                    ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: s }),
                };
            return (
                a === nd.X.SPOTIFY && (t = { type: nr.a4.SPOTIFY }),
                {
                    ...l,
                    title: s,
                    thumbnailUrl: r,
                    titleClickable: o,
                    subtitleClickable: i,
                    thumbnailClickable: i,
                    userDescription: w.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...l });
    return (0, s.jsx)(nh.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nN(e) {
    let { entry: t, children: n, ...l } = e,
        a = nc({ entry: t, ...l });
    return (0, s.jsx)(nh.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nI(e) {
    let { entry: t, children: n, ...l } = e,
        a = nc({ entry: t, ...l });
    return (0, s.jsx)(nh.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nf(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                a = (0, t9.h)(n.extra.application_id),
                r = a?.getIconURL(128),
                s = (0, np.uD)(n.extra.application_id, n.extra.media_assets_large_image, [t6.iu.LARGE, t6.iu.LARGE]),
                o = n.extra.media_title,
                c = n.extra.media_subtitle,
                d = (0, t3.Hd)(n) ? w.t["LH+Z3y"] : w.t.YuKgml,
                u = { type: nr.a4.CRUNCHYROLL },
                m = i.useMemo(() => {
                    if (null == n.extra.url) return;
                    let e = tH.A.safeParseWithQuery(n.extra.url);
                    if (null != e && null != e.protocol && null != e.hostname) return e;
                }, [n.extra.url]);
            return (
                null != m &&
                    (t = {
                        href: tH.A.format(m),
                        ariaDescription: w.intl.formatToPlainString(w.t.aFFQ3g, { title: o }),
                    }),
                {
                    ...l,
                    thumbnailUrl: s ?? r,
                    title: o,
                    titleClickable: t,
                    thumbnailClickable: t,
                    subtitle: c,
                    userDescription: d,
                    providerIconProps: u,
                }
            );
        })({ entry: t, ...l });
    return (0, s.jsx)(nh.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function n_(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                a = n.extra.entries[0].media,
                r = a.artists[0],
                { title: s, provider: i, image_url: o } = a,
                c = r.name,
                d = {
                    onClick: () => (0, nu.n)(nm.M0.TRACK, a.external_id),
                    ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: s }),
                },
                u = {
                    onClick: () => (0, nu.n)(nm.M0.ARTIST, r.external_id),
                    ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: c }),
                };
            return (
                i === nd.X.SPOTIFY && (t = { type: nr.a4.SPOTIFY }),
                {
                    ...l,
                    title: s,
                    subtitle: c,
                    thumbnailUrl: o,
                    titleClickable: d,
                    subtitleClickable: u,
                    thumbnailClickable: d,
                    userDescription: w.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...l });
    return (0, s.jsx)(nh.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
var ng = n(349288),
    nv = n(531142),
    nT = n(939249),
    nS = n(43990),
    nj = n(696986),
    nO = n(342952),
    nR = n(576757),
    ny = n(291594),
    nb = n(22869),
    nP = n(959),
    nL = n(811597);
function nD(e) {
    let { entry: t, channel: n, className: l } = e,
        a = i.useRef(null),
        r = i.useRef(null),
        {
            displayParticipants: o,
            participant1: d,
            participant2: u,
            numOtherParticipants: m,
            orderedParticipants: p,
        } = (0, nR.A)(t),
        h = [d, u];
    return (0, s.jsxs)("div", {
        className: c()(nL.kL, l),
        children: [
            o.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(nP.A, {
                              targetElementRef: a,
                              participants: p,
                              channel: n,
                              children: (e) =>
                                  (0, s.jsx)(nT.D, {
                                      innerRef: a,
                                      className: nL.vk,
                                      ...e,
                                      children: (0, s.jsx)(nO.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eY._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, s.jsx)(nj.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, s.jsx)(tm.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: c()(nL.IY, nL.Io),
                scaleFontToUserSetting: !0,
                children: w.intl.format(w.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, h[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, h[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, s.jsx)(nb.A, { text: e, user: h[0], channel: n }, t),
                    name1Hook: (e, t) => (0, s.jsx)(nb.A, { text: e, user: h[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, s.jsx)(
                            nP.A,
                            {
                                targetElementRef: r,
                                participants: p,
                                channel: n,
                                children: (t) =>
                                    (0, s.jsx)(ny.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, s.jsx)(eg.E, {
                                            ref: r,
                                            variant: "text-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e,
                                        }),
                                    }),
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var nU = n(263577),
    nk = n(347306),
    nw = n(790381),
    nM = n(266080),
    nH = n(121090),
    nF = n(18282);
let nK = { [nr.a4.SPOTIFY]: nH.A, [nr.a4.CRUNCHYROLL]: nk.k, [nr.a4.XBOX]: nM.A, [nr.a4.PLAYSTATION]: nw.A },
    nB = {
        [nr.a4.SPOTIFY]: () => w.intl.string(w.t["0ZB/XE"]),
        [nr.a4.CRUNCHYROLL]: () => w.intl.string(w.t.jdJYXw),
        [nr.a4.XBOX]: () => w.intl.string(w.t.Nfvo72),
        [nr.a4.PLAYSTATION]: () => w.intl.string(w.t.fFl4jo),
    };
function nG(e) {
    let { type: t, "aria-label": n, ...l } = e,
        a = nK[t];
    if (null == a) return null;
    let r = n ?? nB[t]?.();
    return (0, s.jsx)(nF.A, { Icon: a, ...l, "aria-label": r });
}
var nV = n(140651),
    nz = n(506326),
    nY = n(915089),
    nX = n(818348),
    nW = n(672743),
    nZ = n(392419);
function nq(e) {
    let { className: t, clickableClassName: n, clickable: l, children: a } = e,
        r = (0, nY.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: i } = l;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.A, { id: r, children: e }),
                (0, s.jsx)(ng.Anchor, { className: c()(t, n), href: i, "aria-describedby": r, children: a }),
            ],
        });
    }
    let { onClick: i, ariaDescription: o } = l ?? {};
    return (0, s.jsxs)(nv.g.Provider, {
        value: null == i,
        children: [
            null != i && null != o && (0, s.jsx)(d.A, { id: r, children: o }),
            (0, s.jsx)(nT.D, {
                onClick: i,
                "aria-describedby": null == i ? void 0 : r,
                className: c()(t, null != i && n),
                children: a,
            }),
        ],
    });
}
function n$(e) {
    let { clickable: t, ...n } = e;
    return (0, s.jsx)(nq, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: nZ.v });
}
function nJ(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: a,
            thumbnailUrl: r,
            titleClickable: i,
            subtitleClickable: o,
            thumbnailClickable: d,
            providerIconProps: u,
            style: m = {},
        } = e,
        p = (0, nY.GV)(),
        { primaryColor: h, secondaryColor: C } = (0, nV.A)(r);
    return (
        null != r && (m.background = `linear-gradient(45deg, ${h}, ${C})`),
        (0, s.jsx)(nS.N, {
            theme: nX.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, s.jsxs)("figure", {
                    "aria-roledescription": w.intl.string(w.t.zFfUhF),
                    "aria-labelledby": p,
                    className: c()(nW.kL, e),
                    style: m,
                    children: [
                        (0, s.jsx)(nq, {
                            className: nW.iT,
                            clickableClassName: nW.vk,
                            clickable: d,
                            children: (0, s.jsx)(nU.V, { src: r, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, s.jsxs)("div", {
                            className: nW.op,
                            children: [
                                (0, s.jsx)(nD, { channel: n, entry: t, className: nW.VV }),
                                (0, s.jsx)(nj.h, { size: 2 }),
                                (0, s.jsx)(n$, {
                                    clickable: i,
                                    className: nW.sd,
                                    children: (0, s.jsx)(tm.D, {
                                        id: p,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: c()(nW.ek, nW.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != a
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(nj.h, { size: 2 }),
                                              (0, s.jsx)(n$, {
                                                  clickable: o,
                                                  className: nW.sd,
                                                  children: (0, s.jsx)(eg.E, {
                                                      variant: "text-sm/normal",
                                                      className: c()(nW.c1, nW.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: a,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)(nz.iT, { className: nW.jp, entry: t, location: nz.N5.EMBED }),
                            ],
                        }),
                        (0, s.jsx)("div", { className: nW.Y, children: null != u ? (0, s.jsx)(nG, { ...u }) : null }),
                    ],
                }),
        })
    );
}
function nQ(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: a } =
            ((t = i.useContext(nh)),
            es()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, s.jsx)(nJ, { ...a, entry: n, channel: l });
}
function n0(e) {
    let t = (0, p.jc)();
    es()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, v.bG)([X.A], () => X.A.getChannel(n));
    return (
        es()(null != l, "channel must be defined"),
        (0, s.jsx)(nE, {
            location: ns.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, s.jsx)(nQ, { ...e, channel: l }),
        })
    );
}
var n1 = n(749131);
function n5(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, p.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, s.jsxs)("div", {
              className: n1.kL,
              children: [
                  (0, s.jsx)("div", { className: n1.Y_, children: n(t) }),
                  null != l ? (0, s.jsx)(eo.Ay, { className: n1.z3, message: l, component: e }) : null,
              ],
          });
}
var n2 = n(647901),
    n4 = n(404228);
function n9(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: a } = e,
        [r, o] = i.useState(l),
        [d, u] = i.useState(l);
    l !== r && (o(l), u(l));
    let m = (e) =>
        (0, s.jsx)(h.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, s.jsx)("div", {
                    ref: l,
                    className: c()(n4.kL, { [n4.dK]: e, [n4._7]: null != n }),
                    style: { "--__accent-color": n },
                    children: (0, s.jsx)(n2.x, { size: "reduced", children: a(t) }),
                }),
        });
    return null == t || 0 === t.length
        ? null
        : l
          ? (0, s.jsx)(tT.Ay, {
                type: tT.Ay.Types.ATTACHMENT,
                reason: tg.Oc.SPOILER,
                obscured: d,
                onToggleObscurity: () => u((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var n8 = n(244367),
    n3 = n(704475);
function n6(e) {
    let { label: t, description: n, component: l, renderComponent: a } = e,
        r = (0, p.bO)(l);
    return l.type === u.I5.CHECKBOX
        ? a(l, "label-child")
        : (0, s.jsxs)(tl.e, {
              title: t,
              required: l.required,
              error: r,
              children: [
                  null != n && (0, s.jsx)(n8.a, { type: n8.t.DESCRIPTION, className: n3.h, children: n }),
                  a(l, "label-child"),
              ],
          });
}
var n7 = n(746544);
function le(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: a } = (0, p.jc)(),
        [r, i] = (0, h.zn)(),
        o = (0, h.Hq)(i),
        d = n.type === u.I5.BUTTON;
    return (0, s.jsxs)("div", {
        className: n7.uW,
        ref: r,
        children: [
            (0, s.jsxs)("div", {
                className: n7.Y_,
                children: [
                    (0, s.jsx)("div", { className: c()(n7.zt, { [n7.uf]: d }), children: l(t) }),
                    (0, s.jsx)("div", {
                        className: c()(n7.LP, { [n7.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case u.I5.BUTTON:
                                    return (0, s.jsx)(V, { ...e });
                                case u.I5.THUMBNAIL:
                                    return (0, s.jsx)(tJ, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != a ? (0, s.jsx)(eo.Ay, { message: a, component: e }) : null,
        ],
    });
}
var lt = n(532294),
    ln = n(143517);
function ll(e) {
    return e.map((e, t) =>
        (0, s.jsxs)(s.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case u.I5.ACTION_ROW:
                            return (0, s.jsx)(n5, { ...t, renderComponents: ll }, n);
                        case u.I5.BUTTON:
                            return (0, s.jsx)(V, { ...t }, n);
                        case u.I5.STRING_SELECT:
                            return (0, s.jsx)(te, { ...t }, n);
                        case u.I5.CHANNEL_SELECT:
                            return (0, s.jsx)(eE, { ...t }, n);
                        case u.I5.USER_SELECT:
                        case u.I5.ROLE_SELECT:
                        case u.I5.MENTIONABLE_SELECT:
                            return (0, s.jsx)(e1, { ...t }, n);
                        case u.I5.TEXT_INPUT:
                            return (0, s.jsx)(ts, { ...t }, n);
                        case u.I5.SECTION:
                            return (0, s.jsx)(le, { ...t, renderComponents: ll }, n);
                        case u.I5.TEXT_DISPLAY:
                            return (0, s.jsx)(tZ.A, { ...t }, n);
                        case u.I5.MEDIA_GALLERY:
                            return (0, s.jsx)(tX, { ...t }, n);
                        case u.I5.THUMBNAIL:
                            return (0, s.jsx)(tJ, { ...t }, n);
                        case u.I5.FILE:
                            return (0, s.jsx)(tj, { ...t }, n);
                        case u.I5.SEPARATOR:
                            return (0, s.jsx)(tW.A, { ...t }, n);
                        case u.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, s.jsx)(n0, { ...t }, n);
                        case u.I5.CONTAINER:
                            return (0, s.jsx)(n9, { ...t, renderComponents: ll }, n);
                        case u.I5.LABEL:
                            return (0, s.jsx)(n6, { ...t, renderComponent: e }, n);
                        case u.I5.FILE_UPLOAD:
                            return (0, s.jsx)(eV, { ...t }, n);
                        case u.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === lt.w.V2025) return (0, s.jsx)(tf, { ...t }, n);
                            return (0, s.jsx)(t0, {}, n);
                        case u.I5.RADIO_GROUP:
                            return (0, s.jsx)(e9, { ...t }, n);
                        case u.I5.CHECKBOX_GROUP:
                            return (0, s.jsx)(eI, { ...t }, n);
                        case u.I5.CHECKBOX:
                            return (0, s.jsx)(ex, { ...t }, n);
                        default:
                            return (0, s.jsx)(t0, {}, n);
                    }
                })(e, t.toString()),
                (0, s.jsx)(d.A, { children: "," }),
            ],
        }),
    );
}
function la(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [a, r] = (0, h.zn)();
    return 0 === l.length
        ? null
        : (0, s.jsx)(p.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, s.jsx)(h.O7.Root, {
                  containerInnerWidth: r,
                  children: (0, s.jsx)("div", {
                      style: { width: "100%" },
                      ref: a,
                      children: (0, s.jsx)(h.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, s.jsx)("div", {
                                  ref: e,
                                  className: c()([ln.k, { [ln.z]: (0, m._c)(t) }]),
                                  children: ll(l),
                              }),
                      }),
                  }),
              }),
          });
}

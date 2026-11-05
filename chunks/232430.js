n.d(t, { Ay: () => lI, fD: () => lA });
var l,
    r,
    a,
    i = n(477900),
    s = n(582128),
    o = n(503698),
    u = n.n(o),
    c = n(140735),
    d = n(155718),
    m = n(383233),
    h = n(911408),
    p = n(953756),
    x = n(435558),
    f = n(862482),
    g = n(165862),
    j = n(477782),
    C = n(34188),
    v = n(811893),
    N = n(863610),
    A = n(442433),
    I = n(565645);
n(938796);
var y = n(855986),
    E = n(620632),
    S = n(192308),
    T = n(73153),
    b = n(163437),
    L = n(97352),
    O = n(67480),
    R = n(328968),
    _ = n(879610),
    k = n(580630),
    P = n(963179),
    M = n(168393),
    w = n(652215),
    U = n(792996);
let D = (0, y.UT)([O.A, L.A, R.A], {
    getQueryId: w.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = O.A.get(e),
            n = L.A.getForSKU(e) ?? [],
            l = R.A.getForSKU(e),
            r = O.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === w.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: w.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await E.Bo.get(t);
        (T.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                T.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    T.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                }));
    },
});
var F = n(957565),
    z = n(889558),
    B = n(489414),
    H = n(684946);
function G(e) {
    let { url: t, onSelect: n } = e;
    return F.p5 && null != t
        ? (0, i.jsx)(g.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: A.Z_,
              "aria-label": U.intl.string(U.t.tvTXy8),
              onSelect: n,
              children: (0, i.jsx)(j.rX, {
                  children: (0, i.jsx)(j.Dr, {
                      id: "copy",
                      label: U.intl.string(U.t.uHhnfa),
                      action: () => (0, F.C)(t),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let t,
        { label: n, style: l, disabled: r, emoji: a, url: o, skuId: c } = e,
        { executeStateUpdate: m, visualState: p, isDisabled: g } = (0, h.At)(e),
        j = (function (e) {
            let { data: t } = D(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.qf)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(M.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, b.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                u = s.useCallback(() => {
                    if (null == l) return null;
                    (0, S.qf)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(P.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != r && (null == l || l.type !== w.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: U.intl.string(U.t.CHa0vN) };
                if (l.type === w.Puh.SUBSCRIPTION) {
                    if (null == a || 0 === a.length) return { disabled: !0, label: U.intl.string(U.t.CHa0vN) };
                    let e = a[0],
                        t = (0, _.y8)(e.id);
                    return {
                        disabled: !1,
                        label: U.intl.formatToPlainString(U.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, k.$g)(t.amount, t.currency),
                        }),
                        onClick: o,
                    };
                }
                return null == l.price
                    ? { disabled: !0, label: U.intl.string(U.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: U.intl.formatToPlainString(U.t["c6Q+B3"], {
                              skuName: l.name,
                              price: (0, k.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: u,
                      };
            }
        })(c),
        y = null != c && l === d.in.PREMIUM,
        E = y && j?.disabled,
        T = y ? j?.label : n,
        L = null != a,
        O = null != T && T.length > 0,
        R = l === d.in.LINK && null != o && o.length > 0,
        F = p === B.BB.LOADING || (y && null == j);
    return (
        (t = R
            ? () => {
                  (0, z.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : y
              ? null != j && !1 === j.disabled
                  ? j.onClick
                  : x.noop
              : () => m()),
        (0, i.jsxs)(f.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case d.in.PRIMARY:
                    case d.in.PREMIUM:
                        return f.$n.Colors.BRAND;
                    case d.in.SUCCESS:
                        return f.$n.Colors.GREEN;
                    case d.in.DESTRUCTIVE:
                        return f.$n.Colors.RED;
                    default:
                        return f.$n.Colors.PRIMARY;
                }
            })(l),
            size: f.$n.Sizes.SMALL,
            disabled: r || p === B.BB.DISABLED || g || E,
            onClick: t,
            onContextMenu: (e) => {
                R && (0, A.jA)(e, (e) => (0, i.jsx)(G, { ...e, url: o }));
            },
            role: R ? "link" : "button",
            children: [
                (0, i.jsxs)("div", {
                    className: u()(H.Qs, { [H.R]: F, [H.M2]: y }),
                    "aria-hidden": F,
                    children: [
                        y
                            ? (0, i.jsx)("div", {
                                  className: H.sV,
                                  children: (0, i.jsx)(C.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        L
                            ? (0, i.jsx)(I.A, {
                                  className: u()({ [H.MR]: O }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        O ? (0, i.jsx)("div", { className: H.Pf, children: T }) : null,
                        R ? (0, i.jsx)(v.t, { size: "xs", color: "currentColor", className: H.LE }) : null,
                    ],
                }),
                F
                    ? (0, i.jsx)("div", { className: H.Lq, children: (0, i.jsx)(N.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var Y = n(678708),
    K = n(713654),
    W = n(734057),
    X = n(71393),
    q = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    Z = n(47167),
    $ = n(696451),
    J = n(317525),
    Q = n(994500),
    ee = n(287809),
    et = n(997625),
    en = n(403362),
    el = n(562153);
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = X.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case q.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? $.Ay.getNick(l.id, t.id) : void 0;
                    return { type: B.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case q.ROLE: {
                    if (null == l) return null;
                    let t = J.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: B.iw.ROLE, value: t.id, label: t.name };
                }
                case q.CHANNEL: {
                    if (null == l) return null;
                    let t = W.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: B.iw.CHANNEL, value: t.id, label: (0, Z.m1)(t, ee.default, Q.A) };
                }
            }
        })
        .filter(en.Vq);
}
n(935548);
var ea = n(284009),
    ei = n.n(ea),
    es = n(444550),
    eo = n(594808),
    eu = n(257249),
    ec = n(483334),
    ed = n(219025);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, i.jsx)("div", { className: ec.zc, style: { height: n, width: n }, children: t });
}
var eh = (((r = {})[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), r);
function ep(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: r, defaultValues: a } = e,
        { type: o, customId: c, maxValues: m, disabled: p } = t,
        x = (0, eu.c7)(t),
        [f, g] = s.useState(!1),
        [j, C] = s.useState(!1),
        [v, N] = s.useState(new Map(a?.map((e) => [e.value, e]))),
        [A, I] = s.useState(new Set(v.keys())),
        y = s.useRef((a ?? []).map((e) => e.value)),
        E = s.useRef(o),
        S = s.useRef(c),
        [T, b] = s.useState(0);
    s.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => y.current.includes(e)) &&
            y.current.every((t) => e.includes(t)) &&
            o === E.current &&
            c === S.current
        )
            return;
        ((y.current = e), (E.current = o), (S.current = c));
        let t = new Map(a?.map((e) => [e.value, e]));
        (N(t), I(new Set(t.keys())), b((e) => e + 1));
    }, [a, o, c]);
    let L = (0, h.jc)();
    ei()(null != L, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: O,
            executeStateUpdate: R,
            visualState: _,
            isDisabled: k,
            error: P,
        } = L.useComponentState(t, v.size > 0 ? { type: o, selectedOptions: Array.from(v.values()) } : void 0),
        M = null != L.modal,
        w = _ === B.BB.LOADING;
    s.useEffect(() => {
        if (
            O?.type === d.I5.USER_SELECT ||
            O?.type === d.I5.ROLE_SELECT ||
            O?.type === d.I5.MENTIONABLE_SELECT ||
            O?.type === d.I5.CHANNEL_SELECT
        ) {
            let e = new Map(O.selectedOptions.map((e) => [e.value, e]));
            (N(e), I(new Set(e.keys())));
        }
    }, [O]);
    let U = s.useCallback(() => {
        R({ type: o, selectedOptions: Array.from(v.values()) }) && I(new Set(v.keys()));
    }, [R, o, v]);
    s.useEffect(() => {
        f || j || (v.size === A.size && Array.from(v.keys()).every((e) => A.has(e))) || U();
    }, [f, j, A, v, U]);
    let D = 0 === v.size || f,
        F = {
            isProcessing: w,
            isDisabled: p || _ === B.BB.DISABLED || k,
            wrapperClassName: u()(ec.Lt, { [ec.zE]: M }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            filter: !1,
            placeholder: D ? x : void 0,
            onClose: () => g(!1),
            onOpen: () => g(!0),
            onBlur: () => C(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, t) {
                let { inPill: n } = t,
                    r = n ? 16 : 24,
                    a = l(e, r);
                return null != a ? (0, i.jsx)(em, { icon: a, iconSize: r }) : null;
            },
            renderOptionLabel: r,
        };
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ec.kL,
                children:
                    m > 1
                        ? (0, i.jsx)(
                              es.p,
                              {
                                  value: Array.from(v.values()),
                                  onChange: function (e) {
                                      (f || C(!0), N(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({ [ec.R]: !D }),
                                  closeOnSelect: !1,
                                  ...F,
                                  "data-migration-pending": !0,
                              },
                              T,
                          )
                        : (0, i.jsx)(
                              es.p,
                              {
                                  value: [...v.values()][0],
                                  onChange: function (e) {
                                      return N(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...F,
                                  "data-migration-pending": !0,
                              },
                              T,
                          ),
            }),
            null == P || M ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(P), className: ed.z3 }),
        ],
    });
}
var ex = n(726088);
function ef(e) {
    let { channelTypes: t } = e,
        n = (0, h.jc)(),
        l = n?.channelId,
        r = W.A.getChannel(l),
        a = X.A.getGuild(r?.getGuildId()),
        o = s.useMemo(() => er(e.defaultValues, a?.id, t), [e.defaultValues, a, t]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (e) {
            let n;
            return null == (n = W.A.getChannel(l))
                ? []
                : et.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: n,
                      channelTypes: t,
                      limit: 15,
                  }).channels.map((e) => ({ type: B.iw.CHANNEL, value: e.id, label: (0, Z.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, t) {
            let n = W.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === w.rbe.GUILD_CATEGORY ? Y.FolderIcon : (0, K.gU)(n);
            return null != l ? (0, i.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, i.jsx)("span", { className: ex.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var eg = n(150934);
function ej(e) {
    let { type: t, default: n } = e,
        l = (0, h.jc)();
    ei()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = s.useMemo(() => r?.type === t && r.value, [r, t]),
        u = l.getParents(e)?.[0],
        c = u?.type === d.I5.LABEL ? u : void 0;
    return (
        ei()(null != c, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(eg.S, {
            label: c.label,
            description: c.description,
            checked: o,
            onChange: function (e) {
                a({ type: t, value: e });
            },
        })
    );
}
var eC = n(167417);
function ev(e) {
    let { type: t, options: n, required: l, maxValues: r } = e,
        a = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: u } = (0, h.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        c = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(eC.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: c.length >= r && !c.includes(e.value),
        })),
        selectedValues: c,
        onChange: function (e) {
            u({ type: t, values: e });
        },
        required: l,
    });
}
var eN = n(81369),
    eA = n(646514),
    eI = n(834730),
    ey = n(628284),
    eE = n(241326),
    eS = n(608299),
    eT = n(307955),
    eb = n(16407),
    eL = n(851023),
    eO = n(198554),
    eR = n(914905),
    e_ = n(101555),
    ek = n(424170),
    eP = n(409481),
    eM = n(274652),
    ew = n(31717),
    eU = n(255438),
    eD = n(453771),
    eF = n(518960),
    ez = n(382287),
    eB = n(522602),
    eH = n(283655);
function eG(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: s } = e,
        o = (0, eP.C)((0, eD.o2)(s)),
        c = (0, eU.Xq)(o / 1024, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: eH.pp,
        children: [
            (0, i.jsxs)("div", {
                className: u()(eH.e8, { [eH.R]: t }),
                children: [
                    (0, i.jsx)(eN.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eI.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        children: U.intl.format(U.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: (0, eu.fw)(l, r, a, c),
                    }),
                ],
            }),
            t &&
                (0, i.jsxs)("div", {
                    className: u()(eH.e8, eH.r$),
                    children: [
                        (0, i.jsx)(eN.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, i.jsx)(eI.E, {
                            variant: "body-md/normal",
                            color: "text-strong",
                            children: U.intl.string(U.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eV() {
    return (0, i.jsxs)("div", {
        className: u()(eH.pp, eH.e8),
        children: [
            (0, i.jsx)(ey.y, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, i.jsx)(eI.E, {
                variant: "body-md/normal",
                color: "text-strong",
                children: U.intl.string(U.t["0PhgpK"]),
            }),
            (0, i.jsx)(eI.E, { variant: "body-xs/normal", color: "text-muted", children: U.intl.string(U.t.HYg2Hn) }),
        ],
    });
}
function eY(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: u()(eH.NJ, { [eH.j1]: l }),
            children: [
                (0, i.jsx)(eR.J, { upload: t, size: l ? eO.L.XSMALL : eO.L.XXSMALL }),
                (0, i.jsx)(eI.E, {
                    variant: `body-${l ? "md" : "xs"}/medium`,
                    className: eH.iW,
                    children: t.filename ?? U.intl.string(U.t.ZMirp0),
                }),
                (0, i.jsx)(e_.Ay, {
                    className: eH.BX,
                    children: (0, i.jsx)(eL.A, {
                        className: eH.XI,
                        tooltip: U.intl.string(U.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, i.jsx)(eE.TrashIcon, { size: "xs", color: "currentColor", className: eH.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eK(e) {
    let { minValues: t, maxValues: n } = e,
        l = s.useRef(null),
        r = s.useRef(null),
        [a, o] = s.useState(!1),
        c = (0, h.jc)();
    ei()(null != c, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = c.channelId;
    ei()(null != m, "FileUploadActionComponent must be used inside a channel");
    let p = c.modal?.customId;
    ei()(null != p, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: x,
            typesFormattedString: f,
            validateFilenames: g,
            showInvalidFileTypeAlert: j,
        } = (0, ek.M1)(e.fileTypes),
        {
            uploadIds: C,
            setUploadIds: v,
            currentUploads: N,
            error: A,
        } = (function (e) {
            let t = (0, h.jc)();
            ei()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            ei()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = t.useComponentState(e),
                i = s.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = eB.A.getUploads(n, ew.C.InteractionModal),
                u = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                c = s.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                s.useEffect(() => {
                    i.length > u.length && c(i.filter((e) => u.some((t) => t.id === e)));
                }, [i, u, c]),
                { uploadIds: i, setUploadIds: c, currentUploads: u, error: a }
            );
        })(e),
        I = (0, y.bG)([W.A], () => W.A.getBasicChannel(m));
    ei()(null != I, "FileUploadActionComponent requires a valid channel");
    let E = s.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0));
        }, []),
        S = s.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        T = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (C.length + e.length > n)
                    return (0, eb.openUploadError)({
                        title: U.intl.string(U.t.wOr6hB),
                        help: U.intl.formatToPlainString(U.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, ez.fJ)({ files: e, guildId: I.guild_id, canDeferSizeChecks: !1 })) return (0, eF.V)(I, e);
                if (!g(e.map((e) => e.name))) return j();
                let l = e.map((e) => {
                    let n = (0, eu.so)(p),
                        l = { id: n, file: e, platform: eM.x.WEB, origin: t };
                    return (
                        eS.A.setFile({
                            channelId: m,
                            id: n,
                            file: l,
                            draftType: ew.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                v(C.concat(l));
            },
            [C, n, I, v, p, m, g, j],
        ),
        b = s.useCallback(
            (e) => {
                (e.preventDefault(), o(!1), T(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [T],
        );
    function L(e) {
        null == m || (eS.A.remove(m, e, ew.C.InteractionModal), v(C.filter((t) => t !== e)));
    }
    return (s.useEffect(() => {
        let e = r.current;
        return (
            e?.addEventListener("dragover", E),
            e?.addEventListener("dragleave", S),
            e?.addEventListener("drop", b),
            () => {
                (e?.removeEventListener("dragover", E),
                    e?.removeEventListener("dragleave", S),
                    e?.removeEventListener("drop", b));
            }
        );
    }, [E, S, b]),
    1 === n && 1 === N.length)
        ? (0, i.jsx)(eY, { upload: N[0], handleRemoveFile: L, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: r,
              className: u()(eH.kL, { [eH.Ke]: a, [eH.z3]: null != A }),
              children: [
                  C.length >= n
                      ? (0, i.jsx)(eV, {})
                      : (0, i.jsx)(eG, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: f,
                            guildId: I.guild_id,
                        }),
                  N.length > 0 &&
                      (0, i.jsx)("div", {
                          className: eH.aq,
                          children: N.map((e) => (0, i.jsx)(eY, { upload: e, handleRemoveFile: L }, e.id)),
                      }),
                  (0, i.jsx)(eT.A, {
                      ref: l,
                      onChange: function (e) {
                          (T(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
                      },
                      multiple: n > 1,
                      filters: x.length > 0 ? [{ name: "", extensions: x }] : void 0,
                      tabIndex: -1,
                      className: eH.Fg,
                  }),
              ],
          });
}
var eW = n(97808),
    eX = n(778712),
    eq = n(957485),
    eZ = n(950305),
    e$ = n(297413),
    eJ = n(376304),
    eQ = n(386784),
    e0 = n(69282),
    e1 = n(657048),
    e5 = n(290863);
function e8(e) {
    let t = (0, h.jc)(),
        n = t?.channelId,
        l = W.A.getChannel(n),
        r = X.A.getGuild(l?.getGuildId()),
        a = (0, eQ.A)(r?.id, 1e3),
        o = s.useMemo(() => er(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = W.A.getChannel(n);
                if (null == l) return [];
                let r = e === d.I5.USER_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    a = e === d.I5.ROLE_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    { users: i, roles: s } = et.Ay.queryMentionResults({
                        query: t,
                        channel: l,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: r,
                        canMentionRoles: a,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15,
                    }),
                    o = i.map((e) => {
                        let t = el.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: B.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    u = s.map((e) => ({ type: B.iw.ROLE, value: e.id, label: e.name }));
                return [...o, ...u];
            })(e.type, t, n);
        },
        renderIcon: function (e, t) {
            let n = t === eh.PILL_ICON_SIZE;
            if (e?.type === B.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, i.jsx)(eW.eu, {
                    size: n ? eX._3.SIZE_16 : eX._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, t),
                    status: n ? null : e5.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === B.iw.ROLE) {
                let n = null != r ? J.A.getRole(r.id, e.value) : void 0;
                if (null == n || null == r) return;
                let l = (0, eJ.fm)(r, n) ? (0, e0.ox)(n, t) : null;
                return null != l
                    ? (0, i.jsx)(e1.A, { ...l })
                    : (0, i.jsx)(eq.i, { size: "custom", color: n.colorString ?? w.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: function (e) {
            let t = null;
            if (e.type === B.iw.USER) {
                let n = ee.default.getUser(e.value);
                null != n &&
                    (t = (0, i.jsx)(e$.A, {
                        className: ex.Tc,
                        usernameClass: ex.Xh,
                        discriminatorClass: ex.D2,
                        botClass: ex.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === B.iw.ROLE) {
                let n = null != r ? J.A.getRole(r.id, e.value) : void 0,
                    l = null == n ? null : a?.[n.id];
                null != l &&
                    (t = (0, i.jsxs)("div", {
                        className: ex.Ly,
                        children: [
                            (0, i.jsx)(eZ.UserIcon, { size: "sm", color: "currentColor", className: ex.jh }),
                            (0, i.jsx)("span", { className: ex.NT, children: l }),
                        ],
                    }));
            }
            return (0, i.jsxs)("span", {
                className: ex.Pf,
                children: [(0, i.jsx)("span", { className: ex.QK, children: e.label }), t],
            });
        },
        defaultValues: o,
    });
}
var e2 = n(771871),
    e4 = n(821609),
    e3 = n(897132);
function e7(e) {
    let { type: t, options: n, required: l } = e,
        r = s.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: a, executeStateUpdate: o } = (0, h.At)(e, null != r ? { type: t, value: r } : void 0),
        c = s.useMemo(() => (a?.type === t ? a.value : null), [a, t]),
        d = null != c,
        m = s.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function p(e) {
        o({ type: t, value: e });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e2.z, { options: m, value: c ?? "", onChange: p, required: l }),
            !l &&
                (0, i.jsx)("div", {
                    className: u()(e3.H, { [e3.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e4.$, {
                        text: U.intl.string(U.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => p(null),
                    }),
                }),
        ],
    });
}
var e6 = n(843282);
function e9(e) {
    let { emoji: t, label: n, description: l, isDisabled: r, isOffset: a } = e,
        s = u()(ed._A, { [ed.r9]: r, [ed.cY]: null == t && a });
    return (0, i.jsxs)("div", {
        className: ed.uK,
        children: [
            null != t
                ? (0, i.jsx)(I.A, { className: ed.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, i.jsxs)("div", {
                className: s,
                children: [
                    (0, i.jsx)("strong", { className: ed.Pf, children: n }),
                    null != l ? (0, i.jsx)("span", { className: ed.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function te(e) {
    let { emoji: t, label: n } = e;
    return (0, i.jsx)("div", {
        className: ed.uK,
        children: (0, i.jsxs)("div", {
            className: u()(ed.Uq, ed.u9),
            children: [
                null != t
                    ? (0, i.jsx)(I.A, {
                          className: ed.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, i.jsx)("span", { className: ed.oX, children: n }),
            ],
        }),
    });
}
function tt(e) {
    let { options: t } = e;
    return (0, i.jsx)("div", {
        className: ed.uK,
        children: (0, i.jsx)("div", {
            className: ed.Uq,
            children: t.map((e, t) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: ed.mK,
                        children: [
                            null != e.emoji
                                ? (0, i.jsx)(I.A, {
                                      className: ed.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, i.jsx)("span", { className: ed.Tc, children: e.label }, e.value),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function tn(e) {
    let { type: t, options: n, id: l, maxValues: r, disabled: a } = e,
        o = (0, eu.c7)(e),
        c = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, h.jc)();
    ei()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: p,
            executeStateUpdate: x,
            visualState: f,
            isDisabled: g,
            error: j,
        } = m.useComponentState(e, c.length > 0 ? { type: t, values: c } : void 0),
        C = null != m.modal,
        v = r > 1,
        N = f === B.BB.LOADING,
        [A, I] = s.useState(!1),
        [y, E] = s.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, T] = s.useState(y),
        b = s.useMemo(() => n.some((e) => null != e.emoji), [n]);
    s.useEffect(() => {
        if (p?.type === d.I5.STRING_SELECT) {
            let e = new Set(p.values);
            (E(e), T(e));
        } else {
            let e = new Set(c);
            (E(e), T(e));
        }
    }, [l, c, p]);
    let L = s.useCallback(() => {
        S !== y && x({ type: d.I5.STRING_SELECT, values: Array.from(y) }) && T(y);
    }, [y, S, T, x]);
    s.useEffect(() => {
        A || (y.size === S.size && Array.from(S).every((e) => y.has(e))) || L();
    }, [A, y, S, L]);
    let O = (0, eu.Lr)(e, C ? "modal" : "message"),
        R = e6.lS;
    v ? (R = e6.M8) : O && (R = e6.$l);
    let _ = (0, e6.Ev)({ value: y, onChange: (e) => E(e), onSelectInteraction: R });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e6.Pw, {
                    isProcessing: N,
                    isDisabled: a || f === B.BB.DISABLED || g,
                    className: u()(ed.Lt, { [ed.zE]: C }),
                    options: n.map((e) => ({ ...e, disabled: v && !y.has(e.value) && y.size === r })),
                    placeholder: o,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !v,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e9, { ...e, isDisabled: v && !y.has(e.value) && y.size === r, isOffset: b }),
                    renderOptionValue: (e) => (v ? (0, i.jsx)(tt, { options: e }) : (0, i.jsx)(te, { ...e[0] })),
                    ..._,
                    "data-migration-pending": !0,
                }),
            }),
            null == j || C ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(j), className: ed.z3 }),
        ],
    });
}
var tl = n(95477),
    tr = n(103557),
    ta = n(321471),
    ti = n(969508),
    ts = n(565469);
function to(e) {
    let t,
        { type: n, style: l, label: r, placeholder: a, minLength: o, maxLength: u, required: c, value: m } = e,
        [p, x] = s.useState(m ?? ""),
        { state: f, executeStateUpdate: g, error: j } = (0, h.At)(e, null != m ? { type: n, value: m } : void 0),
        C = (0, ti.FG)(e.id);
    s.useEffect(() => {
        f?.type === n && x(f.value);
    }, [n, f]);
    let v = {
        value: p,
        placeholder: a,
        minLength: o,
        maxLength: u,
        required: c,
        onChange: function (e) {
            (x(e), g({ type: n, value: e }));
        },
        autoFocus: C,
    };
    switch (l) {
        case d.qz.SMALL:
            t = (0, i.jsx)(tl.k, { ...v });
            break;
        case d.qz.PARAGRAPH:
            t = (0, i.jsx)(tr.f, { autosize: !0, ...v });
    }
    return null != r ? (0, i.jsx)(ta.e, { title: r, required: c, className: ts.k, error: j, children: t }) : t;
}
var tu = n(905394),
    tc = n(338717),
    td = n(96782),
    tm = n(302031),
    th = n(561323);
function tp(e) {
    let { file: t, name: n, size: l, spoiler: r } = e,
        a = s.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [o, c] = s.useState(r),
        [d, m] = s.useState(r);
    r !== o && (c(r), m(r));
    let h = s.useMemo(
        () => () => (0, i.jsx)(td.zB, { mimeType: a, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, a],
    );
    function p(e) {
        return (0, i.jsx)(tu.A, {
            className: u()({ [th.V]: e }),
            url: t.url,
            fileName: n ?? U.intl.string(U.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: h,
        });
    }
    return (0, i.jsx)("div", {
        className: th.O,
        children: r
            ? (0, i.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: tc.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1),
    });
}
var tx = n(665260),
    tf = n(731068),
    tg = n(541041),
    tj = n(492230),
    tC = n(294520),
    tv = n(949244),
    tN = n(866665),
    tA = n(251843),
    tI = n(891694),
    ty = n(853784);
function tE(e) {
    let t = s.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tN.m, {
            text: U.intl.string(U.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, i.jsx)("div", {
                className: u()(e.className, ty.FN, { [ty.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(tI.A, { ref: t, className: ty.i4 }),
            }),
        });
    let l = n.loadingState === d.TD.LOADING ? w.Rv1.LOADING : w.Rv1.ERROR;
    return (0, i.jsx)(tA._, {
        className: u()(e.className, { [ty.gS]: e.hiddenSpoilers }),
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
var tS = n(998218),
    tT = n(383055);
function tb(e) {
    let t = e.item.originalItem.media;
    return (0, i.jsx)(tE, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tL(e) {
    let t = e.item.originalItem.media;
    return (0, tT.LL)({
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
function tO(e) {
    let t = e.item.originalItem.media,
        n = tS.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, tT.$o)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tR = n(564107),
    t_ = n(394839),
    tk = n(644447);
function tP(e) {
    let { message: t } = (0, h.jc)(),
        n = (0, y.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, tR.X)();
    if (null == t || null == n) return null;
    let u = e.items.map((e) => (0, tg.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: c,
            srcToHandlePreloadImage: d,
            srcToSeekOverride: m,
        } = u.length > 1
            ? (0, tj.o)(u, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function p(e, n) {
        let l = e.originalItem;
        return (0, tC.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let x = e.items.map((e, n) => {
        let l = e.media,
            r = o?.(l),
            i = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, tv.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, tx.Lt)(l.flags, tf.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: p,
                renderImageComponent: tL,
                renderVideoComponent: tO,
                renderVisualPlaceholderComponent: tb,
                renderAudioComponent: w.tEg,
                renderPlaintextFilePreview: w.tEg,
                renderGenericFileComponent: w.tEg,
                gifFavoriteButton: s(l),
                onPlay: function (e, t, n) {},
                canRemoveItem: !1,
                canEditItem: !1,
                onRemoveItem: w.tEg,
                onEditItem: w.tEg,
            },
            u = (0, tk.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (u in c && ((i.onClick = c[u]), (i.handlePreloadImage = d[u]), (i.onSeekRequest = m[u])), i);
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(t_.A, { items: x, isInAppComponentsV2: !0 }) });
}
var tM = n(210716);
function tw(e) {
    let { divider: t, spacing: n } = e;
    return (0, i.jsx)("div", { className: u()({ [tM.f]: n === d.C8.LARGE, [tM.y]: t }) });
}
var tU = n(46054),
    tD = n(354777),
    tF = n(204255);
let tz = {
        SIZE: { default: void 0, reduced: tF.k2 },
        COLOR: { default: void 0, muted: tF.JF },
        WEIGHT: { default: void 0, reduced: tF.Xj },
    },
    tB = s.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tH() {
    return s.useContext(tB);
}
function tG(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = tH(),
        o = s.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = u()(tz.SIZE[e.size], tz.COLOR[e.color], tz.WEIGHT[e.weight]);
            return ("" !== t && (e.className = u()(tF.zr, t)), e);
        }, [n, l, r, a]);
    return (0, i.jsx)(tB.Provider, { value: o, children: t });
}
let tV = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var tY = n(738262),
    tK = n(165648);
function tW(e) {
    let t,
        { content: n, className: l } = e,
        r =
            ((t = (0, h.jc)()),
            (0, s.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, tD.ko)(t.message, tV)
                              : (0, tD.Le)({ channelId: t.channelId, renderOptions: tV })),
                      tU.A.parse(n, !0, e));
            }, [n, t])),
        a = tH();
    return (0, i.jsx)("div", { className: u()(l, tK.PT, tY.T, a.className), children: r });
}
var tX = n(838541),
    tq = n(292151);
function tZ(e) {
    let { media: t, spoiler: n, description: l } = e,
        r = (0, tv.wz)(t),
        a = (0, tx.Lt)(t.flags, tf.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tR.X)(),
        [c, d] = s.useState(n),
        [m, h] = s.useState(n);
    function p(e) {
        return "IMAGE" !== r
            ? (0, i.jsx)(tE, {
                  className: tq.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, i.jsx)(tT.LL, {
                  containerClassName: u()(tq.Dg, { [tq.rP]: e }),
                  imageClassName: tq._8,
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
                  mediaLayoutType: tX.d.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: a,
              });
    }
    return (
        n !== c && (d(n), h(n)),
        n
            ? (0, i.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: tc.Oc.SPOILER,
                  obscured: m,
                  onToggleObscurity: () => h((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1)
    );
}
var t$ = n(868281);
function tJ() {
    return (0, i.jsx)("div", {
        className: t$.k,
        children: (0, i.jsx)(eI.E, {
            variant: "body-sm/medium",
            color: "text-subtle",
            children: U.intl.string(U.t.zksHZO),
        }),
    });
}
var tQ = n(142617),
    t0 = n(925433),
    t1 = n(617390);
n(321073);
var t5 = n(602853),
    t8 = n(534890),
    t2 = n(831544),
    t4 = n(460905),
    t3 = n(109112),
    t7 = n(664121),
    t6 = n(534514),
    t9 = n(252307),
    ne = n(989238),
    nt = n(7584),
    nn = n(682163),
    nl = n(486020),
    nr = n(350363),
    na = n(239895);
function ni(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: r = 0,
            numEmojisSent: a = 0,
            topEmoji: o,
            topGame: u,
            topGuild: c,
            powerLevel: d,
            powerLevelPercentile: m,
        } = t,
        h = new Intl.NumberFormat(U.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        p = new Intl.NumberFormat(U.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(a),
        x = (0, ne.oO)(r),
        f = (0, ne.OW)(n),
        g = t9.f[n],
        j = (0, t5.r)(g.primaryColor).hex(),
        C = (0, t5.r)(g.secondaryColor).hex({ opacity: 0.2 }),
        v = (0, y.bG)([X.A], () => X.A.getGuild(c?.guildId)),
        N = new Intl.NumberFormat(U.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        A = (0, ne._V)(m ?? 0),
        E = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, i.jsxs)("div", {
        className: na.kL,
        style: { backgroundColor: j },
        children: [
            (0, i.jsxs)("div", {
                className: na.Nr,
                children: [
                    (0, i.jsx)("img", { src: f, alt: "", className: na.LY, style: { backgroundColor: j } }),
                    (0, i.jsxs)("div", {
                        className: na.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: na.dJ,
                                children: [
                                    (0, i.jsx)(t8.ChatIcon, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "body-sm/medium", className: na.KA, children: h }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: na.dJ,
                                children: [
                                    (0, i.jsx)(t2.MicrophoneIcon, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "body-sm/medium", className: na.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: na.dJ,
                                children: [
                                    (0, i.jsx)(t4.n, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "body-sm/medium", className: na.KA, children: p }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: na.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t3._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/medium",
                                                      className: na.KA,
                                                      children: U.intl.string(nr.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(I.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: na.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/medium",
                                                      className: na.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? nt.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: na.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t3._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/medium",
                                                      className: na.KA,
                                                      children: U.intl.string(nr.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: nl.Ay.getApplicationIconURL({
                                                          id: u.applicationId,
                                                          icon: u.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: na.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/medium",
                                                      className: na.KA,
                                                      children: u.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: na.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t3._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/medium",
                                                      className: na.KA,
                                                      children: U.intl.string(nr.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != v
                                                      ? (0, i.jsx)(nn.Ay, {
                                                            guild: v,
                                                            size: nn.Ay.Sizes.SMOL,
                                                            className: na.iY,
                                                        })
                                                      : (0, i.jsx)(t7.R, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/medium",
                                                      className: na.KA,
                                                      children: c.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: na.qr,
                style: { backgroundColor: C },
                children: (0, i.jsx)(t6.D, {
                    variant: "display-sm",
                    className: na.DD,
                    children: U.intl.string(nr.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: na.hC,
                style: { backgroundColor: j },
                children: [
                    (0, i.jsx)("div", {
                        className: na.TO,
                        children: E.map((e, t) =>
                            (0, i.jsx)(
                                "img",
                                { className: na.mG, src: e, width: 4, alt: "", style: { opacity: t >= A ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: na.JA,
                        children: [
                            (0, i.jsx)(eI.E, { variant: "body-xs/normal", className: na.KA, children: "LVL" }),
                            (0, i.jsx)(eI.E, {
                                variant: "body-xs/semibold",
                                className: na.KA,
                                children: N.format(d ?? 0),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ns = n(878358),
    no = n(532294);
function nu(e) {
    let { checkpointData: t } = e,
        n = (0, h.jc)()?.message,
        l =
            null != n
                ? () =>
                      (function (e) {
                          let { message: t, authorId: n } = e;
                          (0, tQ.w)("onTapCheckpointCard") &&
                              ((0, t1.Jt)(n, W.A.getChannel(t.channel_id)), (0, t0.D)("message_component"));
                      })({ message: n, authorId: n.author.id })
                : void 0;
    switch (t.version) {
        case no.wk.V2025:
            return (0, i.jsx)(ni, { checkpointData: t });
        case no.wk.V2026:
            return (0, i.jsx)(ns.A, { checkpointData: t, onFooterClick: l });
        default:
            return (0, i.jsx)(tJ, {});
    }
}
var nc = n(681154);
class nd extends s.PureComponent {
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
var nm = n(211401),
    nh = n(500049),
    np = n(429913),
    nx = n(355622),
    nf = n(583846),
    ng = n(487887),
    nj = n(52133),
    nC = n(803306),
    nv = n(949744),
    nN = n(808380),
    nA = n(409626),
    nI = n(692969),
    ny = n(424994),
    nE = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let nS = { [nN.Y.XBOX]: ny.a4.XBOX, [nN.Y.PLAYSTATION]: ny.a4.PLAYSTATION },
    nT = { [nE.EMBED]: nA.GameProfileSources.Embed };
function nb(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, np.h)(l.extra.application_id),
        s = i?.getIconURL(ng.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = nS[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === nc.ContentInventoryEntryType.PLAYED_GAME && (0, nf.JM)(l) && !(0, nf.I5)(l)
            ? U.t.vPg1JT
            : U.t.rPqqts;
    let u = nT[r],
        c = {
            onClick: (0, nI.A)({
                location: u,
                applicationId: l.extra.application_id,
                source: u,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: U.intl.formatToPlainString(U.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...a,
        thumbnailUrl: s,
        title: o,
        titleClickable: c,
        thumbnailClickable: c,
        userDescription: n,
        providerIconProps: t,
    };
}
var nL = n(205327),
    nO = n(261020),
    nR = n(272984),
    n_ = n(913659);
let nk = s.createContext(void 0);
function nP(e, t) {
    return s.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function nM(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, nj.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nC.wz)(e) : nv.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case nc.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nD, { entry: t, ...l });
        case nc.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nF, { entry: t, ...l });
        case nc.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(nz, { entry: t, ...l });
        case nc.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nB, { entry: t, ...l });
        case nc.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nH, { entry: t, ...l });
        case nc.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(nU, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function nw(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(nd, { fallback: t, children: (0, i.jsx)(nM, { ...n }) });
}
function nU(e) {
    let { entry: t, children: n, ...l } = e,
        r = nP(
            (function (e) {
                let { entry: t } = e,
                    n = (0, np.h)(t.extra.application_id),
                    l = n?.getIconURL(ng.iu.LARGE),
                    r = t.extra.activity_name,
                    a = (0, nf.Hd)(t) ? U.t.vPg1JT : U.t.rPqqts,
                    i = {
                        onClick: function () {
                            nm.R(nh.s4.TEXT, nx.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: U.intl.formatToPlainString(U.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nk.Provider, { value: r, children: n });
}
function nD(e) {
    let { entry: t, children: n, ...l } = e,
        r = nP(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: r, image_url: a } = n.extra.media,
                    i = n.extra.artist.name,
                    s = {
                        onClick: () => (0, nO.n)(nR.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, nO.n)(nR.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: i }),
                    };
                return (
                    r === nL.X.SPOTIFY && (t = { type: ny.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        thumbnailUrl: a,
                        titleClickable: o,
                        subtitleClickable: s,
                        thumbnailClickable: s,
                        userDescription: U.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nk.Provider, { value: r, children: n });
}
function nF(e) {
    let { entry: t, children: n, ...l } = e,
        r = nP(nb({ entry: t, ...l }), l.location);
    return (0, i.jsx)(nk.Provider, { value: r, children: n });
}
function nz(e) {
    let { entry: t, children: n, ...l } = e,
        r = nP(nb({ entry: t, ...l }), l.location);
    return (0, i.jsx)(nk.Provider, { value: r, children: n });
}
function nB(e) {
    let { entry: t, children: n, ...l } = e,
        r = nP(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = (0, np.h)(n.extra.application_id),
                    a = r?.getIconURL(128),
                    i = (0, n_.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        ng.iu.LARGE,
                        ng.iu.LARGE,
                    ]),
                    o = n.extra.media_title,
                    u = n.extra.media_subtitle,
                    c = (0, nf.Hd)(n) ? U.t["LH+Z3y"] : U.t.YuKgml,
                    d = { type: ny.a4.CRUNCHYROLL },
                    m = s.useMemo(() => {
                        if (null == n.extra.url) return;
                        let e = tS.A.safeParseWithQuery(n.extra.url);
                        if (null != e && null != e.protocol && null != e.hostname) return e;
                    }, [n.extra.url]);
                return (
                    null != m &&
                        (t = {
                            href: tS.A.format(m),
                            ariaDescription: U.intl.formatToPlainString(U.t.aFFQ3g, { title: o }),
                        }),
                    {
                        ...l,
                        thumbnailUrl: i ?? a,
                        title: o,
                        titleClickable: t,
                        thumbnailClickable: t,
                        subtitle: u,
                        userDescription: c,
                        providerIconProps: d,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nk.Provider, { value: r, children: n });
}
function nH(e) {
    let { entry: t, children: n, ...l } = e,
        r = nP(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = n.extra.entries[0].media,
                    a = r.artists[0],
                    { title: i, provider: s, image_url: o } = r,
                    u = a.name,
                    c = {
                        onClick: () => (0, nO.n)(nR.M0.TRACK, r.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: i }),
                    },
                    d = {
                        onClick: () => (0, nO.n)(nR.M0.ARTIST, a.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: u }),
                    };
                return (
                    s === nL.X.SPOTIFY && (t = { type: ny.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        subtitle: u,
                        thumbnailUrl: o,
                        titleClickable: c,
                        subtitleClickable: d,
                        thumbnailClickable: c,
                        userDescription: U.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nk.Provider, { value: r, children: n });
}
var nG = n(28863),
    nV = n(531142),
    nY = n(939249),
    nK = n(43990),
    nW = n(696986),
    nX = n(342952),
    nq = n(576757),
    nZ = n(291594),
    n$ = n(22869),
    nJ = n(959),
    nQ = n(968544);
function n0(e) {
    let { entry: t, channel: n, className: l } = e,
        r = s.useRef(null),
        a = s.useRef(null),
        {
            displayParticipants: o,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, nq.A)(t),
        p = [c, d];
    return (0, i.jsxs)("div", {
        className: u()(nQ.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(nJ.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, i.jsx)(nY.D, {
                                      innerRef: r,
                                      className: nQ.vk,
                                      ...e,
                                      children: (0, i.jsx)(nX.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eX._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(nW.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(t6.D, {
                variant: "body-sm/semibold",
                color: "text-subtle",
                className: u()(nQ.IY, nQ.Io),
                scaleFontToUserSetting: !0,
                children: U.intl.format(U.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, p[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, p[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(n$.A, { text: e, user: p[0], channel: n }, t),
                    name1Hook: (e, t) => (0, i.jsx)(n$.A, { text: e, user: p[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            nJ.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, i.jsx)(nZ.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, i.jsx)(eI.E, {
                                            ref: a,
                                            variant: "body-sm/semibold",
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
var n1 = n(263577),
    n5 = n(347306),
    n8 = n(790381),
    n2 = n(266080),
    n4 = n(121090),
    n3 = n(18282);
let n7 = { [ny.a4.SPOTIFY]: n4.A, [ny.a4.CRUNCHYROLL]: n5.k, [ny.a4.XBOX]: n2.A, [ny.a4.PLAYSTATION]: n8.A },
    n6 = {
        [ny.a4.SPOTIFY]: () => U.intl.string(U.t["0ZB/XE"]),
        [ny.a4.CRUNCHYROLL]: () => U.intl.string(U.t.jdJYXw),
        [ny.a4.XBOX]: () => U.intl.string(U.t.Nfvo72),
        [ny.a4.PLAYSTATION]: () => U.intl.string(U.t.fFl4jo),
    };
function n9(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = n7[t];
    if (null == r) return null;
    let a = n ?? n6[t]?.();
    return (0, i.jsx)(n3.A, { Icon: r, ...l, "aria-label": a });
}
var le = n(823545),
    lt = n(506326),
    ln = n(915089),
    ll = n(818348),
    lr = n(167848),
    la = n(154342);
function li(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, ln.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.A, { id: a, children: e }),
                (0, i.jsx)(nG.Anchor, { className: u()(t, n), href: s, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(nV.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(c.A, { id: a, children: o }),
            (0, i.jsx)(nY.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : a,
                className: u()(t, null != s && n),
                children: r,
            }),
        ],
    });
}
function ls(e) {
    let { clickable: t, ...n } = e;
    return (0, i.jsx)(li, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: la.v });
}
function lo(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: r,
            thumbnailUrl: a,
            titleClickable: s,
            subtitleClickable: o,
            thumbnailClickable: c,
            providerIconProps: d,
            style: m = {},
        } = e,
        h = (0, ln.GV)(),
        { primaryColor: p, secondaryColor: x } = (0, le.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${p}, ${x})`),
        (0, i.jsx)(nK.N, {
            theme: ll.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": U.intl.string(U.t.zFfUhF),
                    "aria-labelledby": h,
                    className: u()(lr.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(li, {
                            className: lr.iT,
                            clickableClassName: lr.vk,
                            clickable: c,
                            children: (0, i.jsx)(n1.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: lr.op,
                            children: [
                                (0, i.jsx)(n0, { channel: n, entry: t, className: lr.VV }),
                                (0, i.jsx)(nW.h, { size: 2 }),
                                (0, i.jsx)(ls, {
                                    clickable: s,
                                    className: lr.sd,
                                    children: (0, i.jsx)(t6.D, {
                                        id: h,
                                        variant: "heading-sm/medium",
                                        lineClamp: 1,
                                        className: u()(lr.ek, lr.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(nW.h, { size: 2 }),
                                              (0, i.jsx)(ls, {
                                                  clickable: o,
                                                  className: lr.sd,
                                                  children: (0, i.jsx)(eI.E, {
                                                      variant: "body-sm/normal",
                                                      className: u()(lr.c1, lr.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(lt.iT, { className: lr.jp, entry: t, location: lt.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: lr.Y, children: null != d ? (0, i.jsx)(n9, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lu(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = s.useContext(nk)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(lo, { ...r, entry: n, channel: l });
}
function lc(e) {
    let t = (0, h.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, y.bG)([W.A], () => W.A.getChannel(n));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(nw, {
            location: nE.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(lu, { ...e, channel: l }),
        })
    );
}
var ld = n(689592);
function lm(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, h.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: ld.kL,
              children: [
                  (0, i.jsx)("div", { className: ld.Y_, children: n(t) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: ld.z3, message: l, component: e }) : null,
              ],
          });
}
var lh = n(317097),
    lp = n(796951);
function lx(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, o] = s.useState(l),
        [c, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: u()(lp.kL, { [lp.dK]: e, [lp._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, lh.$k)(n, !0) : void 0 },
                    children: (0, i.jsx)(tG, { size: "reduced", children: r(t) }),
                }),
        });
    }
    return (l !== a && (o(l), d(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, i.jsx)(tm.Ay, {
                type: tm.Ay.Types.ATTACHMENT,
                reason: tc.Oc.SPOILER,
                obscured: c,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var lf = n(244367),
    lg = n(405388);
function lj(e) {
    let { label: t, description: n, component: l, renderComponent: r } = e,
        a = (0, h.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, i.jsxs)(ta.e, {
              title: t,
              required: l.required,
              error: a,
              children: [
                  null != n && (0, i.jsx)(lf.a, { type: lf.t.DESCRIPTION, className: lg.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var lC = n(572891);
function lv(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, s] = (0, p.zn)(),
        o = (0, p.Hq)(s),
        c = n.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: lC.uW,
        ref: a,
        children: [
            (0, i.jsxs)("div", {
                className: lC.Y_,
                children: [
                    (0, i.jsx)("div", { className: u()(lC.zt, { [lC.uf]: c }), children: l(t) }),
                    (0, i.jsx)("div", {
                        className: u()(lC.LP, { [lC.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, i.jsx)(V, { ...e });
                                case d.I5.THUMBNAIL:
                                    return (0, i.jsx)(tZ, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != r ? (0, i.jsx)(eo.Ay, { message: r, component: e }) : null,
        ],
    });
}
var lN = n(359886);
function lA(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(lm, { ...t, renderComponents: lA }, n);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(V, { ...t }, n);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(tn, { ...t }, n);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(ef, { ...t }, n);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e8, { ...t }, n);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(to, { ...t }, n);
                        case d.I5.SECTION:
                            return (0, i.jsx)(lv, { ...t, renderComponents: lA }, n);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(tW, { ...t }, n);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(tP, { ...t }, n);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(tZ, { ...t }, n);
                        case d.I5.FILE:
                            return (0, i.jsx)(tp, { ...t }, n);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(tw, { ...t }, n);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(lc, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(lx, { ...t, renderComponents: lA }, n);
                        case d.I5.LABEL:
                            return (0, i.jsx)(lj, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eK, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            return (0, i.jsx)(nu, { ...t }, n);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e7, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(ev, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(ej, { ...t }, n);
                        default:
                            return (0, i.jsx)(tJ, {}, n);
                    }
                })(e, t.toString()),
                (0, i.jsx)(c.A, { children: "," }),
            ],
        }),
    );
}
function lI(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [r, a] = (0, p.zn)();
    return 0 === l.length
        ? null
        : (0, i.jsx)(h.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, i.jsx)(p.O7.Root, {
                  containerInnerWidth: a,
                  children: (0, i.jsx)("div", {
                      style: { width: "100%" },
                      ref: r,
                      children: (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: e,
                                  className: u()([lN.k, { [lN.z]: (0, m._c)(t) }]),
                                  children: lA(l),
                              }),
                      }),
                  }),
              }),
          });
}

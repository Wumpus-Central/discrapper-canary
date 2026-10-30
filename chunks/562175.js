n.d(t, { Ay: () => lE, fD: () => lI });
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
    h = n(298236),
    p = n(953756),
    x = n(435558),
    f = n(862482),
    g = n(980707),
    C = n(477782),
    j = n(34188),
    v = n(811893),
    N = n(863610),
    A = n(442433),
    I = n(788026);
n(938796);
var E = n(17928),
    y = n(636537),
    S = n(192308),
    T = n(73153),
    L = n(163437),
    b = n(97352),
    O = n(67480),
    R = n(328968),
    _ = n(24482),
    k = n(580630),
    P = n(963179),
    M = n(168393),
    w = n(652215),
    U = n(105292);
let D = (0, E.UT)([O.A, b.A, R.A], {
    getQueryId: w.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = O.A.get(e),
            n = b.A.getForSKU(e) ?? [],
            l = R.A.getForSKU(e),
            r = O.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === w.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: w.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await y.Bo.get(t);
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
    z = n(123917),
    H = n(489414),
    B = n(684946);
function G(e) {
    let { url: t, onSelect: n } = e;
    return F.p5 && null != t
        ? (0, i.jsx)(g.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: A.Z_,
              "aria-label": U.intl.string(U.t.tvTXy8),
              onSelect: n,
              children: (0, i.jsx)(C.rX, {
                  children: (0, i.jsx)(C.Dr, {
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
        C = (function (e) {
            let { data: t } = D(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(M.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, L.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                u = s.useCallback(() => {
                    if (null == l) return null;
                    (0, S.openModal)((e) => {
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
        E = null != c && l === d.in.PREMIUM,
        y = E && C?.disabled,
        T = E ? C?.label : n,
        b = null != a,
        O = null != T && T.length > 0,
        R = l === d.in.LINK && null != o && o.length > 0,
        F = p === H.BB.LOADING || (E && null == C);
    return (
        (t = R
            ? () => {
                  (0, z.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : E
              ? null != C && !1 === C.disabled
                  ? C.onClick
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
            disabled: r || p === H.BB.DISABLED || g || y,
            onClick: t,
            onContextMenu: (e) => {
                R && (0, A.jA)(e, (e) => (0, i.jsx)(G, { ...e, url: o }));
            },
            role: R ? "link" : "button",
            children: [
                (0, i.jsxs)("div", {
                    className: u()(B.Qs, { [B.R]: F, [B.M2]: E }),
                    "aria-hidden": F,
                    children: [
                        E
                            ? (0, i.jsx)("div", {
                                  className: B.sV,
                                  children: (0, i.jsx)(j.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        b
                            ? (0, i.jsx)(I.A, {
                                  className: u()({ [B.MR]: O }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        O ? (0, i.jsx)("div", { className: B.Pf, children: T }) : null,
                        R ? (0, i.jsx)(v.t, { size: "xs", color: "currentColor", className: B.LE }) : null,
                    ],
                }),
                F
                    ? (0, i.jsx)("div", { className: B.Lq, children: (0, i.jsx)(N.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var K = n(678708),
    Y = n(713654),
    W = n(734057),
    X = n(71393),
    q = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    Z = n(47167),
    $ = n(696451),
    J = n(317525),
    Q = n(994500),
    ee = n(287809),
    et = n(768038),
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
                    return { type: H.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case q.ROLE: {
                    if (null == l) return null;
                    let t = J.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: H.iw.ROLE, value: t.id, label: t.name };
                }
                case q.CHANNEL: {
                    if (null == l) return null;
                    let t = W.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: H.iw.CHANNEL, value: t.id, label: (0, Z.m1)(t, ee.default, Q.A) };
                }
            }
        })
        .filter(en.Vq);
}
n(138321);
var ea = n(284009),
    ei = n.n(ea),
    es = n(444550),
    eo = n(594808),
    eu = n(437517),
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
        [C, j] = s.useState(!1),
        [v, N] = s.useState(new Map(a?.map((e) => [e.value, e]))),
        [A, I] = s.useState(new Set(v.keys())),
        E = s.useRef((a ?? []).map((e) => e.value)),
        y = s.useRef(o),
        S = s.useRef(c),
        [T, L] = s.useState(0);
    s.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => E.current.includes(e)) &&
            E.current.every((t) => e.includes(t)) &&
            o === y.current &&
            c === S.current
        )
            return;
        ((E.current = e), (y.current = o), (S.current = c));
        let t = new Map(a?.map((e) => [e.value, e]));
        (N(t), I(new Set(t.keys())), L((e) => e + 1));
    }, [a, o, c]);
    let b = (0, h.jc)();
    ei()(null != b, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: O,
            executeStateUpdate: R,
            visualState: _,
            isDisabled: k,
            error: P,
        } = b.useComponentState(t, v.size > 0 ? { type: o, selectedOptions: Array.from(v.values()) } : void 0),
        M = null != b.modal,
        w = _ === H.BB.LOADING;
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
        f || C || (v.size === A.size && Array.from(v.keys()).every((e) => A.has(e))) || U();
    }, [f, C, A, v, U]);
    let D = 0 === v.size || f,
        F = {
            isProcessing: w,
            isDisabled: p || _ === H.BB.DISABLED || k,
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
            onBlur: () => j(!1),
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
                                      (f || j(!0), N(new Map(e.map((e) => [e.value, e]))));
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
                  }).channels.map((e) => ({ type: H.iw.CHANNEL, value: e.id, label: (0, Z.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, t) {
            let n = W.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === w.rbe.GUILD_CATEGORY ? K.FolderIcon : (0, Y.gU)(n);
            return null != l ? (0, i.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, i.jsx)("span", { className: ex.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var eg = n(150934);
function eC(e) {
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
var ej = n(167417);
function ev(e) {
    let { type: t, options: n, required: l, maxValues: r } = e,
        a = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: u } = (0, h.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        c = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(ej.$, {
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
    eA = n(661531),
    eI = n(834730),
    eE = n(628284),
    ey = n(241326),
    eS = n(608299),
    eT = n(780777),
    eL = n(894101),
    eb = n(851023),
    eO = n(215497),
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
    eH = n(522602),
    eB = n(283655);
function eG(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: s } = e,
        o = (0, eP.C)((0, eD.o2)(s)),
        c = (0, eU.Xq)(o / eU.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: eB.pp,
        children: [
            (0, i.jsxs)("div", {
                className: u()(eB.e8, { [eB.R]: t }),
                children: [
                    (0, i.jsx)(eN.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: U.intl.format(U.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, eu.fw)(l, r, a, c),
                    }),
                ],
            }),
            t &&
                (0, i.jsxs)("div", {
                    className: u()(eB.e8, eB.r$),
                    children: [
                        (0, i.jsx)(eN.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, i.jsx)(eI.E, {
                            variant: "text-md/normal",
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
        className: u()(eB.pp, eB.e8),
        children: [
            (0, i.jsx)(eE.y, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, i.jsx)(eI.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: U.intl.string(U.t["0PhgpK"]),
            }),
            (0, i.jsx)(eI.E, { variant: "text-xs/normal", color: "text-muted", children: U.intl.string(U.t.HYg2Hn) }),
        ],
    });
}
function eK(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: u()(eB.NJ, { [eB.j1]: l }),
            children: [
                (0, i.jsx)(eR.J, { upload: t, size: l ? eO.L.XSMALL : eO.L.XXSMALL }),
                (0, i.jsx)(eI.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eB.iW,
                    children: t.filename ?? U.intl.string(U.t.ZMirp0),
                }),
                (0, i.jsx)(e_.Ay, {
                    className: eB.BX,
                    children: (0, i.jsx)(eb.A, {
                        className: eB.XI,
                        tooltip: U.intl.string(U.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, i.jsx)(ey.TrashIcon, { size: "xs", color: "currentColor", className: eB.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eY(e) {
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
            showInvalidFileTypeAlert: C,
        } = (0, ek.M1)(e.fileTypes),
        {
            uploadIds: j,
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
                o = eH.A.getUploads(n, ew.C.InteractionModal),
                u = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                c = s.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                s.useEffect(() => {
                    i.length > u.length && c(i.filter((e) => u.some((t) => t.id === e)));
                }, [i, u, c]),
                { uploadIds: i, setUploadIds: c, currentUploads: u, error: a }
            );
        })(e),
        I = (0, E.bG)([W.A], () => W.A.getBasicChannel(m));
    ei()(null != I, "FileUploadActionComponent requires a valid channel");
    let y = s.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0));
        }, []),
        S = s.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        T = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (j.length + e.length > n)
                    return (0, eL.openUploadError)({
                        title: U.intl.string(U.t.wOr6hB),
                        help: U.intl.formatToPlainString(U.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, ez.fJ)({ files: e, guildId: I.guild_id, canDeferSizeChecks: !1 })) return (0, eF.V)(I, e);
                if (!g(e.map((e) => e.name))) return C();
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
                v(j.concat(l));
            },
            [j, n, I, v, p, m, g, C],
        ),
        L = s.useCallback(
            (e) => {
                (e.preventDefault(), o(!1), T(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [T],
        );
    function b(e) {
        null == m || (eS.A.remove(m, e, ew.C.InteractionModal), v(j.filter((t) => t !== e)));
    }
    return (s.useEffect(() => {
        let e = r.current;
        return (
            e?.addEventListener("dragover", y),
            e?.addEventListener("dragleave", S),
            e?.addEventListener("drop", L),
            () => {
                (e?.removeEventListener("dragover", y),
                    e?.removeEventListener("dragleave", S),
                    e?.removeEventListener("drop", L));
            }
        );
    }, [y, S, L]),
    1 === n && 1 === N.length)
        ? (0, i.jsx)(eK, { upload: N[0], handleRemoveFile: b, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: r,
              className: u()(eB.kL, { [eB.Ke]: a, [eB.z3]: null != A }),
              children: [
                  j.length >= n
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
                          className: eB.aq,
                          children: N.map((e) => (0, i.jsx)(eK, { upload: e, handleRemoveFile: b }, e.id)),
                      }),
                  (0, i.jsx)(eT.A, {
                      ref: l,
                      onChange: function (e) {
                          (T(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
                      },
                      multiple: n > 1,
                      filters: x.length > 0 ? [{ name: "", extensions: x }] : void 0,
                      tabIndex: -1,
                      className: eB.Fg,
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
                    });
                return [
                    ...i.map((e) => {
                        let t = el.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: H.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: H.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: function (e, t) {
            let n = t === eh.PILL_ICON_SIZE;
            if (e?.type === H.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, i.jsx)(eW.eu, {
                    size: n ? eX._3.SIZE_16 : eX._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, t),
                    status: n ? null : e5.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === H.iw.ROLE) {
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
            if (e.type === H.iw.USER) {
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
            } else if (e.type === H.iw.ROLE) {
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
var e2 = n(144228),
    e3 = n(821609),
    e7 = n(897132);
function e4(e) {
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
                    className: u()(e7.H, { [e7.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e3.$, {
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
            error: C,
        } = m.useComponentState(e, c.length > 0 ? { type: t, values: c } : void 0),
        j = null != m.modal,
        v = r > 1,
        N = f === H.BB.LOADING,
        [A, I] = s.useState(!1),
        [E, y] = s.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, T] = s.useState(E),
        L = s.useMemo(() => n.some((e) => null != e.emoji), [n]);
    s.useEffect(() => {
        if (p?.type === d.I5.STRING_SELECT) {
            let e = new Set(p.values);
            (y(e), T(e));
        } else {
            let e = new Set(c);
            (y(e), T(e));
        }
    }, [l, c, p]);
    let b = s.useCallback(() => {
        S !== E && x({ type: d.I5.STRING_SELECT, values: Array.from(E) }) && T(E);
    }, [E, S, T, x]);
    s.useEffect(() => {
        A || (E.size === S.size && Array.from(S).every((e) => E.has(e))) || b();
    }, [A, E, S, b]);
    let O = (0, eu.Lr)(e, j ? "modal" : "message"),
        R = e6.lS;
    v ? (R = e6.M8) : O && (R = e6.$l);
    let _ = (0, e6.Ev)({ value: E, onChange: (e) => y(e), onSelectInteraction: R });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e6.Pw, {
                    isProcessing: N,
                    isDisabled: a || f === H.BB.DISABLED || g,
                    className: u()(ed.Lt, { [ed.zE]: j }),
                    options: n.map((e) => ({ ...e, disabled: v && !E.has(e.value) && E.size === r })),
                    placeholder: o,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !v,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e9, { ...e, isDisabled: v && !E.has(e.value) && E.size === r, isOffset: L }),
                    renderOptionValue: (e) => (v ? (0, i.jsx)(tt, { options: e }) : (0, i.jsx)(te, { ...e[0] })),
                    ..._,
                    "data-migration-pending": !0,
                }),
            }),
            null == C || j ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(C), className: ed.z3 }),
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
        { state: f, executeStateUpdate: g, error: C } = (0, h.At)(e, null != m ? { type: n, value: m } : void 0),
        j = (0, ti.FG)(e.id);
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
        autoFocus: j,
    };
    switch (l) {
        case d.qz.SMALL:
            t = (0, i.jsx)(tl.k, { ...v });
            break;
        case d.qz.PARAGRAPH:
            t = (0, i.jsx)(tr.f, { autosize: !0, ...v });
    }
    return null != r ? (0, i.jsx)(ta.e, { title: r, required: c, className: ts.k, error: C, children: t }) : t;
}
var tu = n(564771),
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
    tg = n(591818),
    tC = n(492230),
    tj = n(294520),
    tv = n(127038),
    tN = n(866665),
    tA = n(144165),
    tI = n(891694),
    tE = n(853784);
function ty(e) {
    let t = s.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tN.m, {
            text: U.intl.string(U.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, i.jsx)("div", {
                className: u()(e.className, tE.FN, { [tE.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(tI.A, { ref: t, className: tE.i4 }),
            }),
        });
    let l = n.loadingState === d.TD.LOADING ? w.Rv1.LOADING : w.Rv1.ERROR;
    return (0, i.jsx)(tA._, {
        className: u()(e.className, { [tE.gS]: e.hiddenSpoilers }),
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
    tT = n(44788);
function tL(e) {
    let t = e.item.originalItem.media;
    return (0, i.jsx)(ty, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tb(e) {
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
        n = (0, E.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
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
            ? (0, tC.o)(u, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function p(e, n) {
        let l = e.originalItem;
        return (0, tj.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
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
                renderImageComponent: tb,
                renderVideoComponent: tO,
                renderVisualPlaceholderComponent: tL,
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
    tD = n(521981),
    tF = n(204255);
let tz = {
        SIZE: { default: void 0, reduced: tF.k2 },
        COLOR: { default: void 0, muted: tF.JF },
        WEIGHT: { default: void 0, reduced: tF.Xj },
    },
    tH = s.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tB() {
    return s.useContext(tH);
}
function tG(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = tB(),
        o = s.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = u()(tz.SIZE[e.size], tz.COLOR[e.color], tz.WEIGHT[e.weight]);
            return ("" !== t && (e.className = u()(tF.zr, t)), e);
        }, [n, l, r, a]);
    return (0, i.jsx)(tH.Provider, { value: o, children: t });
}
let tV = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var tK = n(738262),
    tY = n(165648);
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
        a = tB();
    return (0, i.jsx)("div", { className: u()(l, tY.PT, tK.T, a.className), children: r });
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
            ? (0, i.jsx)(ty, {
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
                  mediaLayoutType: tX.dG.MOSAIC,
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
            variant: "text-sm/medium",
            color: "text-subtle",
            children: U.intl.string(U.t.zksHZO),
        }),
    });
}
var tQ = n(666860),
    t0 = n(174459),
    t1 = n(142617),
    t5 = n(658580);
n(321073);
var t8 = n(602853),
    t2 = n(534890),
    t3 = n(831544),
    t7 = n(460905),
    t4 = n(109112),
    t6 = n(664121),
    t9 = n(297264),
    ne = n(606348),
    nt = n(957806),
    nn = n(7584),
    nl = n(548118),
    nr = n(486020),
    na = n(465199),
    ni = n(239895);
function ns(e) {
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
        x = (0, nt.oO)(r),
        f = (0, nt.OW)(n),
        g = ne.f[n],
        C = (0, t8.r)(g.primaryColor).hex(),
        j = (0, t8.r)(g.secondaryColor).hex({ opacity: 0.2 }),
        v = (0, E.bG)([X.A], () => X.A.getGuild(c?.guildId)),
        N = new Intl.NumberFormat(U.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        A = (0, nt._V)(m ?? 0),
        y = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, i.jsxs)("div", {
        className: ni.kL,
        style: { backgroundColor: C },
        children: [
            (0, i.jsxs)("div", {
                className: ni.Nr,
                children: [
                    (0, i.jsx)("img", { src: f, alt: "", className: ni.LY, style: { backgroundColor: C } }),
                    (0, i.jsxs)("div", {
                        className: ni.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ni.dJ,
                                children: [
                                    (0, i.jsx)(t2.ChatIcon, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: ni.KA, children: h }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: ni.dJ,
                                children: [
                                    (0, i.jsx)(t3.MicrophoneIcon, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: ni.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: ni.dJ,
                                children: [
                                    (0, i.jsx)(t7.n, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: ni.KA, children: p }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: ni.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t4._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: ni.KA,
                                                      children: U.intl.string(na.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(I.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: ni.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: ni.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? nn.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: ni.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t4._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: ni.KA,
                                                      children: U.intl.string(na.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: nr.Ay.getApplicationIconURL({
                                                          id: u.applicationId,
                                                          icon: u.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: ni.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: ni.KA,
                                                      children: u.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: ni.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t4._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: ni.KA,
                                                      children: U.intl.string(na.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != v
                                                      ? (0, i.jsx)(nl.Ay, {
                                                            guild: v,
                                                            size: nl.Ay.Sizes.SMOL,
                                                            className: ni.iY,
                                                        })
                                                      : (0, i.jsx)(t6.R, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: ni.KA,
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
                className: ni.qr,
                style: { backgroundColor: j },
                children: (0, i.jsx)(t9.D, {
                    variant: "display-sm",
                    className: ni.DD,
                    children: U.intl.string(na.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ni.hC,
                style: { backgroundColor: C },
                children: [
                    (0, i.jsx)("div", {
                        className: ni.TO,
                        children: y.map((e, t) =>
                            (0, i.jsx)(
                                "img",
                                { className: ni.mG, src: e, width: 4, alt: "", style: { opacity: t >= A ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: ni.JA,
                        children: [
                            (0, i.jsx)(eI.E, { variant: "text-xs/normal", className: ni.KA, children: "LVL" }),
                            (0, i.jsx)(eI.E, { variant: "text-xs/bold", className: ni.KA, children: N.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var no = n(878358),
    nu = n(309913);
function nc(e) {
    let { checkpointData: t } = e,
        n = (0, h.jc)()?.message,
        l =
            null != n
                ? () =>
                      (function (e) {
                          let { message: t, authorId: n } = e;
                          if (!(0, t1.w)("onTapCheckpointCard")) return;
                          let l = W.A.getChannel(t.channel_id);
                          (t0.default.track(w.HAw.CHECKPOINT_CARD_CLICKED, {
                              other_user_id: n,
                              ...(0, tQ.dI)(l),
                              ...(0, tQ.H$)(l?.guild_id),
                          }),
                              (0, t5.D)("message_component"));
                      })({ message: n, authorId: n.author.id })
                : void 0;
    switch (t.version) {
        case nu.wk.V2025:
            return (0, i.jsx)(ns, { checkpointData: t });
        case nu.wk.V2026:
            return (0, i.jsx)(no.A, { checkpointData: t, onFooterClick: l });
        default:
            return (0, i.jsx)(tJ, {});
    }
}
var nd = n(681154);
class nm extends s.PureComponent {
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
var nh = n(211401),
    np = n(500049),
    nx = n(429913),
    nf = n(355622),
    ng = n(583846),
    nC = n(818023),
    nj = n(52133),
    nv = n(803306),
    nN = n(860071),
    nA = n(808380),
    nI = n(409626),
    nE = n(692969),
    ny = n(424994),
    nS = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let nT = { [nA.Y.XBOX]: ny.a4.XBOX, [nA.Y.PLAYSTATION]: ny.a4.PLAYSTATION },
    nL = { [nS.EMBED]: nI.GameProfileSources.Embed };
function nb(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, nx.h)(l.extra.application_id),
        s = i?.getIconURL(nC.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = nT[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === nd.ContentInventoryEntryType.PLAYED_GAME && (0, ng.JM)(l) && !(0, ng.I5)(l)
            ? U.t.vPg1JT
            : U.t.rPqqts;
    let u = nL[r],
        c = {
            onClick: (0, nE.A)({
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
var nO = n(205327),
    nR = n(261020),
    n_ = n(272984),
    nk = n(970928);
let nP = s.createContext(void 0);
function nM(e, t) {
    return s.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function nw(e) {
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
                                    null == n.guild_id ? (0, nv.wz)(e) : nN.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case nd.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nF, { entry: t, ...l });
        case nd.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nz, { entry: t, ...l });
        case nd.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(nH, { entry: t, ...l });
        case nd.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nB, { entry: t, ...l });
        case nd.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nG, { entry: t, ...l });
        case nd.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(nD, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function nU(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(nm, { fallback: t, children: (0, i.jsx)(nw, { ...n }) });
}
function nD(e) {
    let { entry: t, children: n, ...l } = e,
        r = nM(
            (function (e) {
                let { entry: t } = e,
                    n = (0, nx.h)(t.extra.application_id),
                    l = n?.getIconURL(nC.iu.LARGE),
                    r = t.extra.activity_name,
                    a = (0, ng.Hd)(t) ? U.t.vPg1JT : U.t.rPqqts,
                    i = {
                        onClick: function () {
                            nh.R(np.s4.TEXT, nf.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: U.intl.formatToPlainString(U.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nP.Provider, { value: r, children: n });
}
function nF(e) {
    let { entry: t, children: n, ...l } = e,
        r = nM(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: r, image_url: a } = n.extra.media,
                    i = n.extra.artist.name,
                    s = {
                        onClick: () => (0, nR.n)(n_.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, nR.n)(n_.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: i }),
                    };
                return (
                    r === nO.X.SPOTIFY && (t = { type: ny.a4.SPOTIFY }),
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
    return (0, i.jsx)(nP.Provider, { value: r, children: n });
}
function nz(e) {
    let { entry: t, children: n, ...l } = e,
        r = nM(nb({ entry: t, ...l }), l.location);
    return (0, i.jsx)(nP.Provider, { value: r, children: n });
}
function nH(e) {
    let { entry: t, children: n, ...l } = e,
        r = nM(nb({ entry: t, ...l }), l.location);
    return (0, i.jsx)(nP.Provider, { value: r, children: n });
}
function nB(e) {
    let { entry: t, children: n, ...l } = e,
        r = nM(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = (0, nx.h)(n.extra.application_id),
                    a = r?.getIconURL(128),
                    i = (0, nk.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        nC.iu.LARGE,
                        nC.iu.LARGE,
                    ]),
                    o = n.extra.media_title,
                    u = n.extra.media_subtitle,
                    c = (0, ng.Hd)(n) ? U.t["LH+Z3y"] : U.t.YuKgml,
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
    return (0, i.jsx)(nP.Provider, { value: r, children: n });
}
function nG(e) {
    let { entry: t, children: n, ...l } = e,
        r = nM(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = n.extra.entries[0].media,
                    a = r.artists[0],
                    { title: i, provider: s, image_url: o } = r,
                    u = a.name,
                    c = {
                        onClick: () => (0, nR.n)(n_.M0.TRACK, r.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: i }),
                    },
                    d = {
                        onClick: () => (0, nR.n)(n_.M0.ARTIST, a.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: u }),
                    };
                return (
                    s === nO.X.SPOTIFY && (t = { type: ny.a4.SPOTIFY }),
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
    return (0, i.jsx)(nP.Provider, { value: r, children: n });
}
var nV = n(28863),
    nK = n(531142),
    nY = n(939249),
    nW = n(43990),
    nX = n(696986),
    nq = n(342952),
    nZ = n(576757),
    n$ = n(291594),
    nJ = n(22869),
    nQ = n(959),
    n0 = n(968544);
function n1(e) {
    let { entry: t, channel: n, className: l } = e,
        r = s.useRef(null),
        a = s.useRef(null),
        {
            displayParticipants: o,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, nZ.A)(t),
        p = [c, d];
    return (0, i.jsxs)("div", {
        className: u()(n0.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(nQ.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, i.jsx)(nY.D, {
                                      innerRef: r,
                                      className: n0.vk,
                                      ...e,
                                      children: (0, i.jsx)(nq.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eX._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(nX.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(t9.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: u()(n0.IY, n0.Io),
                scaleFontToUserSetting: !0,
                children: U.intl.format(U.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, p[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, p[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(nJ.A, { text: e, user: p[0], channel: n }, t),
                    name1Hook: (e, t) => (0, i.jsx)(nJ.A, { text: e, user: p[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            nQ.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, i.jsx)(n$.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, i.jsx)(eI.E, {
                                            ref: a,
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
var n5 = n(263577),
    n8 = n(347306),
    n2 = n(790381),
    n3 = n(266080),
    n7 = n(121090),
    n4 = n(18282);
let n6 = { [ny.a4.SPOTIFY]: n7.A, [ny.a4.CRUNCHYROLL]: n8.k, [ny.a4.XBOX]: n3.A, [ny.a4.PLAYSTATION]: n2.A },
    n9 = {
        [ny.a4.SPOTIFY]: () => U.intl.string(U.t["0ZB/XE"]),
        [ny.a4.CRUNCHYROLL]: () => U.intl.string(U.t.jdJYXw),
        [ny.a4.XBOX]: () => U.intl.string(U.t.Nfvo72),
        [ny.a4.PLAYSTATION]: () => U.intl.string(U.t.fFl4jo),
    };
function le(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = n6[t];
    if (null == r) return null;
    let a = n ?? n9[t]?.();
    return (0, i.jsx)(n4.A, { Icon: r, ...l, "aria-label": a });
}
var lt = n(140651),
    ln = n(506326),
    ll = n(915089),
    lr = n(818348),
    la = n(167848),
    li = n(154342);
function ls(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, ll.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.A, { id: a, children: e }),
                (0, i.jsx)(nV.Anchor, { className: u()(t, n), href: s, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(nK.g.Provider, {
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
function lo(e) {
    let { clickable: t, ...n } = e;
    return (0, i.jsx)(ls, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: li.v });
}
function lu(e) {
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
        h = (0, ll.GV)(),
        { primaryColor: p, secondaryColor: x } = (0, lt.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${p}, ${x})`),
        (0, i.jsx)(nW.N, {
            theme: lr.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": U.intl.string(U.t.zFfUhF),
                    "aria-labelledby": h,
                    className: u()(la.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(ls, {
                            className: la.iT,
                            clickableClassName: la.vk,
                            clickable: c,
                            children: (0, i.jsx)(n5.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: la.op,
                            children: [
                                (0, i.jsx)(n1, { channel: n, entry: t, className: la.VV }),
                                (0, i.jsx)(nX.h, { size: 2 }),
                                (0, i.jsx)(lo, {
                                    clickable: s,
                                    className: la.sd,
                                    children: (0, i.jsx)(t9.D, {
                                        id: h,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: u()(la.ek, la.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(nX.h, { size: 2 }),
                                              (0, i.jsx)(lo, {
                                                  clickable: o,
                                                  className: la.sd,
                                                  children: (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/normal",
                                                      className: u()(la.c1, la.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(ln.iT, { className: la.jp, entry: t, location: ln.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: la.Y, children: null != d ? (0, i.jsx)(le, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lc(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = s.useContext(nP)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(lu, { ...r, entry: n, channel: l });
}
function ld(e) {
    let t = (0, h.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, E.bG)([W.A], () => W.A.getChannel(n));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(nU, {
            location: nS.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(lc, { ...e, channel: l }),
        })
    );
}
var lm = n(689592);
function lh(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, h.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: lm.kL,
              children: [
                  (0, i.jsx)("div", { className: lm.Y_, children: n(t) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: lm.z3, message: l, component: e }) : null,
              ],
          });
}
var lp = n(317097),
    lx = n(796951);
function lf(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, o] = s.useState(l),
        [c, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: u()(lx.kL, { [lx.dK]: e, [lx._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, lp.$k)(n, !0) : void 0 },
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
var lg = n(244367),
    lC = n(405388);
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
                  null != n && (0, i.jsx)(lg.a, { type: lg.t.DESCRIPTION, className: lC.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var lv = n(572891);
function lN(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, s] = (0, p.zn)(),
        o = (0, p.Hq)(s),
        c = n.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: lv.uW,
        ref: a,
        children: [
            (0, i.jsxs)("div", {
                className: lv.Y_,
                children: [
                    (0, i.jsx)("div", { className: u()(lv.zt, { [lv.uf]: c }), children: l(t) }),
                    (0, i.jsx)("div", {
                        className: u()(lv.LP, { [lv.HQ]: o }),
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
var lA = n(359886);
function lI(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(lh, { ...t, renderComponents: lI }, n);
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
                            return (0, i.jsx)(lN, { ...t, renderComponents: lI }, n);
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
                            return (0, i.jsx)(ld, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(lf, { ...t, renderComponents: lI }, n);
                        case d.I5.LABEL:
                            return (0, i.jsx)(lj, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eY, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            return (0, i.jsx)(nc, { ...t }, n);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e4, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(ev, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(eC, { ...t }, n);
                        default:
                            return (0, i.jsx)(tJ, {}, n);
                    }
                })(e, t.toString()),
                (0, i.jsx)(c.A, { children: "," }),
            ],
        }),
    );
}
function lE(e) {
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
                                  className: u()([lA.k, { [lA.z]: (0, m._c)(t) }]),
                                  children: lI(l),
                              }),
                      }),
                  }),
              }),
          });
}

n.d(t, { Ay: () => lY, fD: () => lV });
var l,
    r,
    a,
    i = n(477900),
    s = n(582128),
    o = n(503698),
    c = n.n(o),
    u = n(140735),
    d = n(155718),
    m = n(383233),
    h = n(298236),
    p = n(953756),
    x = n(435558),
    g = n(862482),
    C = n(980707),
    f = n(477782),
    j = n(34188),
    v = n(811893),
    A = n(863610),
    N = n(442433),
    I = n(565645);
n(938796);
var y = n(17928),
    E = n(636537),
    b = n(192308),
    S = n(73153),
    T = n(163437),
    L = n(97352),
    R = n(67480),
    k = n(328968),
    O = n(158045),
    _ = n(580630),
    M = n(963179),
    P = n(168393),
    B = n(652215),
    w = n(105292);
let D = (0, y.UT)([R.A, L.A, k.A], {
    getQueryId: B.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = R.A.get(e),
            n = L.A.getForSKU(e) ?? [],
            l = k.A.getForSKU(e),
            r = R.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === B.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: B.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await E.Bo.get(t);
        (S.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                S.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    S.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                }));
    },
});
var U = n(957565),
    F = n(123917),
    z = n(489414),
    G = n(684946);
function H(e) {
    let { url: t, onSelect: n } = e;
    return U.p5 && null != t
        ? (0, i.jsx)(C.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: N.Z_,
              "aria-label": w.intl.string(w.t.tvTXy8),
              onSelect: n,
              children: (0, i.jsx)(f.rX, {
                  children: (0, i.jsx)(f.Dr, {
                      id: "copy",
                      label: w.intl.string(w.t.uHhnfa),
                      action: () => (0, U.C)(t),
                  }),
              }),
          })
        : null;
}
function K(e) {
    let t,
        { label: n, style: l, disabled: r, emoji: a, url: o, skuId: u } = e,
        { executeStateUpdate: m, visualState: p, isDisabled: C } = (0, h.At)(e),
        f = (function (e) {
            let { data: t } = D(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(P.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, T.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                c = s.useCallback(() => {
                    if (null == l) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(M.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != r && (null == l || l.type !== B.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: w.intl.string(w.t.CHa0vN) };
                if (l.type === B.Puh.SUBSCRIPTION) {
                    if (null == a || 0 === a.length) return { disabled: !0, label: w.intl.string(w.t.CHa0vN) };
                    let e = a[0],
                        t = (0, O.y8)(e.id);
                    return {
                        disabled: !1,
                        label: w.intl.formatToPlainString(w.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, _.$g)(t.amount, t.currency),
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
                              price: (0, _.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: c,
                      };
            }
        })(u),
        y = null != u && l === d.in.PREMIUM,
        E = y && f?.disabled,
        S = y ? f?.label : n,
        L = null != a,
        R = null != S && S.length > 0,
        k = l === d.in.LINK && null != o && o.length > 0,
        U = p === z.BB.LOADING || (y && null == f);
    return (
        (t = k
            ? () => {
                  (0, F.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : y
              ? null != f && !1 === f.disabled
                  ? f.onClick
                  : x.noop
              : () => m()),
        (0, i.jsxs)(g.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case d.in.PRIMARY:
                    case d.in.PREMIUM:
                        return g.$n.Colors.BRAND;
                    case d.in.SUCCESS:
                        return g.$n.Colors.GREEN;
                    case d.in.DESTRUCTIVE:
                        return g.$n.Colors.RED;
                    default:
                        return g.$n.Colors.PRIMARY;
                }
            })(l),
            size: g.$n.Sizes.SMALL,
            disabled: r || p === z.BB.DISABLED || C || E,
            onClick: t,
            onContextMenu: (e) => {
                k && (0, N.jA)(e, (e) => (0, i.jsx)(H, { ...e, url: o }));
            },
            role: k ? "link" : "button",
            children: [
                (0, i.jsxs)("div", {
                    className: c()(G.Qs, { [G.R]: U, [G.M2]: y }),
                    "aria-hidden": U,
                    children: [
                        y
                            ? (0, i.jsx)("div", {
                                  className: G.sV,
                                  children: (0, i.jsx)(j.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        L
                            ? (0, i.jsx)(I.A, {
                                  className: c()({ [G.MR]: R }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        R ? (0, i.jsx)("div", { className: G.Pf, children: S }) : null,
                        k ? (0, i.jsx)(v.t, { size: "xs", color: "currentColor", className: G.LE }) : null,
                    ],
                }),
                U
                    ? (0, i.jsx)("div", { className: G.Lq, children: (0, i.jsx)(A.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var V = n(678708),
    Y = n(713654),
    X = n(734057),
    W = n(71393),
    q = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    Z = n(47167),
    J = n(696451),
    $ = n(317525),
    Q = n(994500),
    ee = n(287809),
    et = n(802842),
    en = n(403362),
    el = n(562153);
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = W.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case q.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? J.Ay.getNick(l.id, t.id) : void 0;
                    return { type: z.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case q.ROLE: {
                    if (null == l) return null;
                    let t = $.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: z.iw.ROLE, value: t.id, label: t.name };
                }
                case q.CHANNEL: {
                    if (null == l) return null;
                    let t = X.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: z.iw.CHANNEL, value: t.id, label: (0, Z.m1)(t, ee.default, Q.A) };
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
    ec = n(437517),
    eu = n(483334),
    ed = n(219025);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, i.jsx)("div", { className: eu.zc, style: { height: n, width: n }, children: t });
}
var eh = (((r = {})[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), r);
function ep(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: r, defaultValues: a } = e,
        { type: o, customId: u, maxValues: m, disabled: p } = t,
        x = (0, ec.c7)(t),
        [g, C] = s.useState(!1),
        [f, j] = s.useState(!1),
        [v, A] = s.useState(new Map(a?.map((e) => [e.value, e]))),
        [N, I] = s.useState(new Set(v.keys())),
        y = s.useRef((a ?? []).map((e) => e.value)),
        E = s.useRef(o),
        b = s.useRef(u),
        [S, T] = s.useState(0);
    s.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => y.current.includes(e)) &&
            y.current.every((t) => e.includes(t)) &&
            o === E.current &&
            u === b.current
        )
            return;
        ((y.current = e), (E.current = o), (b.current = u));
        let t = new Map(a?.map((e) => [e.value, e]));
        (A(t), I(new Set(t.keys())), T((e) => e + 1));
    }, [a, o, u]);
    let L = (0, h.jc)();
    ei()(null != L, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: R,
            executeStateUpdate: k,
            visualState: O,
            isDisabled: _,
            error: M,
        } = L.useComponentState(t, v.size > 0 ? { type: o, selectedOptions: Array.from(v.values()) } : void 0),
        P = null != L.modal,
        B = O === z.BB.LOADING;
    s.useEffect(() => {
        if (
            R?.type === d.I5.USER_SELECT ||
            R?.type === d.I5.ROLE_SELECT ||
            R?.type === d.I5.MENTIONABLE_SELECT ||
            R?.type === d.I5.CHANNEL_SELECT
        ) {
            let e = new Map(R.selectedOptions.map((e) => [e.value, e]));
            (A(e), I(new Set(e.keys())));
        }
    }, [R]);
    let w = s.useCallback(() => {
        k({ type: o, selectedOptions: Array.from(v.values()) }) && I(new Set(v.keys()));
    }, [k, o, v]);
    s.useEffect(() => {
        g || f || (v.size === N.size && Array.from(v.keys()).every((e) => N.has(e))) || w();
    }, [g, f, N, v, w]);
    let D = 0 === v.size || g,
        U = {
            isProcessing: B,
            isDisabled: p || O === z.BB.DISABLED || _,
            wrapperClassName: c()(eu.Lt, { [eu.zE]: P }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            filter: !1,
            placeholder: D ? x : void 0,
            onClose: () => C(!1),
            onOpen: () => C(!0),
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
                className: eu.kL,
                children:
                    m > 1
                        ? (0, i.jsx)(
                              es.p,
                              {
                                  value: Array.from(v.values()),
                                  onChange: function (e) {
                                      (g || j(!0), A(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: c()({ [eu.R]: !D }),
                                  closeOnSelect: !1,
                                  ...U,
                                  "data-migration-pending": !0,
                              },
                              S,
                          )
                        : (0, i.jsx)(
                              es.p,
                              {
                                  value: [...v.values()][0],
                                  onChange: function (e) {
                                      return A(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...U,
                                  "data-migration-pending": !0,
                              },
                              S,
                          ),
            }),
            null == M || P ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(M), className: ed.z3 }),
        ],
    });
}
var ex = n(726088);
function eg(e) {
    let { channelTypes: t } = e,
        n = (0, h.jc)(),
        l = n?.channelId,
        r = X.A.getChannel(l),
        a = W.A.getGuild(r?.getGuildId()),
        o = s.useMemo(() => er(e.defaultValues, a?.id, t), [e.defaultValues, a, t]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (e) {
            let n;
            return null == (n = X.A.getChannel(l))
                ? []
                : et.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: n,
                      channelTypes: t,
                      limit: 15,
                  }).channels.map((e) => ({ type: z.iw.CHANNEL, value: e.id, label: (0, Z.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, t) {
            let n = X.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === B.rbe.GUILD_CATEGORY ? V.FolderIcon : (0, Y.gU)(n);
            return null != l ? (0, i.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, i.jsx)("span", { className: ex.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var eC = n(150934);
function ef(e) {
    let { type: t, default: n } = e,
        l = (0, h.jc)();
    ei()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = s.useMemo(() => r?.type === t && r.value, [r, t]),
        c = l.getParents(e)?.[0],
        u = c?.type === d.I5.LABEL ? c : void 0;
    return (
        ei()(null != u, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(eC.S, {
            label: u.label,
            description: u.description,
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
        { state: o, executeStateUpdate: c } = (0, h.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        u = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(ej.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: u.length >= r && !u.includes(e.value),
        })),
        selectedValues: u,
        onChange: function (e) {
            c({ type: t, values: e });
        },
        required: l,
    });
}
var eA = n(81369),
    eN = n(661531),
    eI = n(834730),
    ey = n(628284),
    eE = n(241326),
    eb = n(608299),
    eS = n(780777),
    eT = n(494921),
    eL = n(851023),
    eR = n(215497),
    ek = n(914905),
    eO = n(101555),
    e_ = n(424170),
    eM = n(409481),
    eP = n(274652),
    eB = n(31717),
    ew = n(255438),
    eD = n(453771),
    eU = n(518960),
    eF = n(382287),
    ez = n(522602),
    eG = n(283655);
function eH(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: s } = e,
        o = (0, eM.C)((0, eD.o2)(s)),
        u = (0, ew.Xq)(o / ew.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: eG.pp,
        children: [
            (0, i.jsxs)("div", {
                className: c()(eG.e8, { [eG.R]: t }),
                children: [
                    (0, i.jsx)(eA.H, { color: eN.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: w.intl.format(w.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, ec.fw)(l, r, a, u),
                    }),
                ],
            }),
            t &&
                (0, i.jsxs)("div", {
                    className: c()(eG.e8, eG.r$),
                    children: [
                        (0, i.jsx)(eA.H, { color: eN.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, i.jsx)(eI.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: w.intl.string(w.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eK() {
    return (0, i.jsxs)("div", {
        className: c()(eG.pp, eG.e8),
        children: [
            (0, i.jsx)(ey.y, { color: eN.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, i.jsx)(eI.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: w.intl.string(w.t["0PhgpK"]),
            }),
            (0, i.jsx)(eI.E, { variant: "text-xs/normal", color: "text-muted", children: w.intl.string(w.t.HYg2Hn) }),
        ],
    });
}
function eV(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: c()(eG.NJ, { [eG.j1]: l }),
            children: [
                (0, i.jsx)(ek.J, { upload: t, size: l ? eR.L.XSMALL : eR.L.XXSMALL }),
                (0, i.jsx)(eI.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eG.iW,
                    children: t.filename ?? w.intl.string(w.t.ZMirp0),
                }),
                (0, i.jsx)(eO.Ay, {
                    className: eG.BX,
                    children: (0, i.jsx)(eL.A, {
                        className: eG.XI,
                        tooltip: w.intl.string(w.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, i.jsx)(eE.TrashIcon, { size: "xs", color: "currentColor", className: eG.gE }),
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
        u = (0, h.jc)();
    ei()(null != u, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = u.channelId;
    ei()(null != m, "FileUploadActionComponent must be used inside a channel");
    let p = u.modal?.customId;
    ei()(null != p, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: x,
            typesFormattedString: g,
            validateFilenames: C,
            showInvalidFileTypeAlert: f,
        } = (0, e_.M1)(e.fileTypes),
        {
            uploadIds: j,
            setUploadIds: v,
            currentUploads: A,
            error: N,
        } = (function (e) {
            let t = (0, h.jc)();
            ei()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            ei()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = t.useComponentState(e),
                i = s.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = ez.A.getUploads(n, eB.C.InteractionModal),
                c = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                u = s.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                s.useEffect(() => {
                    i.length > c.length && u(i.filter((e) => c.some((t) => t.id === e)));
                }, [i, c, u]),
                { uploadIds: i, setUploadIds: u, currentUploads: c, error: a }
            );
        })(e),
        I = (0, y.bG)([X.A], () => X.A.getBasicChannel(m));
    ei()(null != I, "FileUploadActionComponent requires a valid channel");
    let E = s.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0));
        }, []),
        b = s.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        S = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (j.length + e.length > n)
                    return (0, eT.openUploadError)({
                        title: w.intl.string(w.t.wOr6hB),
                        help: w.intl.formatToPlainString(w.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eF.fJ)({ files: e, guildId: I.guild_id, canDeferSizeChecks: !1 })) return (0, eU.V)(I, e);
                if (!C(e.map((e) => e.name))) return f();
                let l = e.map((e) => {
                    let n = (0, ec.so)(p),
                        l = { id: n, file: e, platform: eP.x.WEB, origin: t };
                    return (
                        eb.A.setFile({
                            channelId: m,
                            id: n,
                            file: l,
                            draftType: eB.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                v(j.concat(l));
            },
            [j, n, I, v, p, m, C, f],
        ),
        T = s.useCallback(
            (e) => {
                (e.preventDefault(), o(!1), S(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [S],
        );
    function L(e) {
        null == m || (eb.A.remove(m, e, eB.C.InteractionModal), v(j.filter((t) => t !== e)));
    }
    return (s.useEffect(() => {
        let e = r.current;
        return (
            e?.addEventListener("dragover", E),
            e?.addEventListener("dragleave", b),
            e?.addEventListener("drop", T),
            () => {
                (e?.removeEventListener("dragover", E),
                    e?.removeEventListener("dragleave", b),
                    e?.removeEventListener("drop", T));
            }
        );
    }, [E, b, T]),
    1 === n && 1 === A.length)
        ? (0, i.jsx)(eV, { upload: A[0], handleRemoveFile: L, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: r,
              className: c()(eG.kL, { [eG.Ke]: a, [eG.z3]: null != N }),
              children: [
                  j.length >= n
                      ? (0, i.jsx)(eK, {})
                      : (0, i.jsx)(eH, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: g,
                            guildId: I.guild_id,
                        }),
                  A.length > 0 &&
                      (0, i.jsx)("div", {
                          className: eG.aq,
                          children: A.map((e) => (0, i.jsx)(eV, { upload: e, handleRemoveFile: L }, e.id)),
                      }),
                  (0, i.jsx)(eS.A, {
                      ref: l,
                      onChange: function (e) {
                          (S(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
                      },
                      multiple: n > 1,
                      filters: x.length > 0 ? [{ name: "", extensions: x }] : void 0,
                      tabIndex: -1,
                      className: eG.Fg,
                  }),
              ],
          });
}
var eX = n(97808),
    eW = n(778712),
    eq = n(957485),
    eZ = n(950305),
    eJ = n(297413),
    e$ = n(376304),
    eQ = n(386784),
    e0 = n(69282),
    e1 = n(657048),
    e5 = n(290863);
function e2(e) {
    let t = (0, h.jc)(),
        n = t?.channelId,
        l = X.A.getChannel(n),
        r = W.A.getGuild(l?.getGuildId()),
        a = (0, eQ.A)(r?.id, 1e3),
        o = s.useMemo(() => er(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = X.A.getChannel(n);
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
                        return { type: z.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: z.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: function (e, t) {
            let n = t === eh.PILL_ICON_SIZE;
            if (e?.type === z.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, i.jsx)(eX.eu, {
                    size: n ? eW._3.SIZE_16 : eW._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, t),
                    status: n ? null : e5.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === z.iw.ROLE) {
                let n = null != r ? $.A.getRole(r.id, e.value) : void 0;
                if (null == n || null == r) return;
                let l = (0, e$.fm)(r, n) ? (0, e0.ox)(n, t) : null;
                return null != l
                    ? (0, i.jsx)(e1.A, { ...l })
                    : (0, i.jsx)(eq.i, { size: "custom", color: n.colorString ?? B.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: function (e) {
            let t = null;
            if (e.type === z.iw.USER) {
                let n = ee.default.getUser(e.value);
                null != n &&
                    (t = (0, i.jsx)(eJ.A, {
                        className: ex.Tc,
                        usernameClass: ex.Xh,
                        discriminatorClass: ex.D2,
                        botClass: ex.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === z.iw.ROLE) {
                let n = null != r ? $.A.getRole(r.id, e.value) : void 0,
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
var e8 = n(144228),
    e4 = n(821609),
    e3 = n(897132);
function e7(e) {
    let { type: t, options: n, required: l } = e,
        r = s.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: a, executeStateUpdate: o } = (0, h.At)(e, null != r ? { type: t, value: r } : void 0),
        u = s.useMemo(() => (a?.type === t ? a.value : null), [a, t]),
        d = null != u,
        m = s.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function p(e) {
        o({ type: t, value: e });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e8.z, { options: m, value: u ?? "", onChange: p, required: l }),
            !l &&
                (0, i.jsx)("div", {
                    className: c()(e3.H, { [e3.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e4.$, {
                        text: w.intl.string(w.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => p(null),
                    }),
                }),
        ],
    });
}
var e9 = n(843282);
function e6(e) {
    let { emoji: t, label: n, description: l, isDisabled: r, isOffset: a } = e,
        s = c()(ed._A, { [ed.r9]: r, [ed.cY]: null == t && a });
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
            className: c()(ed.Uq, ed.u9),
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
        o = (0, ec.c7)(e),
        u = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, h.jc)();
    ei()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: p,
            executeStateUpdate: x,
            visualState: g,
            isDisabled: C,
            error: f,
        } = m.useComponentState(e, u.length > 0 ? { type: t, values: u } : void 0),
        j = null != m.modal,
        v = r > 1,
        A = g === z.BB.LOADING,
        [N, I] = s.useState(!1),
        [y, E] = s.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [b, S] = s.useState(y),
        T = s.useMemo(() => n.some((e) => null != e.emoji), [n]);
    s.useEffect(() => {
        if (p?.type === d.I5.STRING_SELECT) {
            let e = new Set(p.values);
            (E(e), S(e));
        } else {
            let e = new Set(u);
            (E(e), S(e));
        }
    }, [l, u, p]);
    let L = s.useCallback(() => {
        b !== y && x({ type: d.I5.STRING_SELECT, values: Array.from(y) }) && S(y);
    }, [y, b, S, x]);
    s.useEffect(() => {
        N || (y.size === b.size && Array.from(b).every((e) => y.has(e))) || L();
    }, [N, y, b, L]);
    let R = (0, ec.Lr)(e, j ? "modal" : "message"),
        k = e9.lS;
    v ? (k = e9.M8) : R && (k = e9.$l);
    let O = (0, e9.Ev)({ value: y, onChange: (e) => E(e), onSelectInteraction: k });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e9.Pw, {
                    isProcessing: A,
                    isDisabled: a || g === z.BB.DISABLED || C,
                    className: c()(ed.Lt, { [ed.zE]: j }),
                    options: n.map((e) => ({ ...e, disabled: v && !y.has(e.value) && y.size === r })),
                    placeholder: o,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !v,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e6, { ...e, isDisabled: v && !y.has(e.value) && y.size === r, isOffset: T }),
                    renderOptionValue: (e) => (v ? (0, i.jsx)(tt, { options: e }) : (0, i.jsx)(te, { ...e[0] })),
                    ...O,
                    "data-migration-pending": !0,
                }),
            }),
            null == f || j ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(f), className: ed.z3 }),
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
        { type: n, style: l, label: r, placeholder: a, minLength: o, maxLength: c, required: u, value: m } = e,
        [p, x] = s.useState(m ?? ""),
        { state: g, executeStateUpdate: C, error: f } = (0, h.At)(e, null != m ? { type: n, value: m } : void 0),
        j = (0, ti.FG)(e.id);
    s.useEffect(() => {
        g?.type === n && x(g.value);
    }, [n, g]);
    let v = {
        value: p,
        placeholder: a,
        minLength: o,
        maxLength: c,
        required: u,
        onChange: function (e) {
            (x(e), C({ type: n, value: e }));
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
    return null != r ? (0, i.jsx)(ta.e, { title: r, required: u, className: ts.k, error: f, children: t }) : t;
}
var tc = n(564771),
    tu = n(338717),
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
        [o, u] = s.useState(r),
        [d, m] = s.useState(r);
    r !== o && (u(r), m(r));
    let h = s.useMemo(
        () => () => (0, i.jsx)(td.zB, { mimeType: a, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, a],
    );
    function p(e) {
        return (0, i.jsx)(tc.A, {
            className: c()({ [th.V]: e }),
            url: t.url,
            fileName: n ?? w.intl.string(w.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: h,
        });
    }
    return (0, i.jsx)("div", {
        className: th.O,
        children: r
            ? (0, i.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: tu.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1),
    });
}
var tx = n(665260),
    tg = n(731068),
    tC = n(591818),
    tf = n(492230),
    tj = n(294520),
    tv = n(127038),
    tA = n(866665),
    tN = n(144165),
    tI = n(891694),
    ty = n(853784);
function tE(e) {
    let t = s.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tA.m, {
            text: w.intl.string(w.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, i.jsx)("div", {
                className: c()(e.className, ty.FN, { [ty.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(tI.A, { ref: t, className: ty.i4 }),
            }),
        });
    let l = n.loadingState === d.TD.LOADING ? B.Rv1.LOADING : B.Rv1.ERROR;
    return (0, i.jsx)(tN._, {
        className: c()(e.className, { [ty.gS]: e.hiddenSpoilers }),
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
var tb = n(998218),
    tS = n(44788);
function tT(e) {
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
    return (0, tS.LL)({
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
function tR(e) {
    let t = e.item.originalItem.media,
        n = tb.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, tS.$o)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tk = n(564107),
    tO = n(394839),
    t_ = n(644447);
function tM(e) {
    let { message: t } = (0, h.jc)(),
        n = (0, y.bG)([X.A], () => X.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, tk.X)();
    if (null == t || null == n) return null;
    let c = e.items.map((e) => (0, tC.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: u,
            srcToHandlePreloadImage: d,
            srcToSeekOverride: m,
        } = c.length > 1
            ? (0, tf.o)(c, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
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
                    srcIsAnimated: (0, tx.Lt)(l.flags, tg.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: p,
                renderImageComponent: tL,
                renderVideoComponent: tR,
                renderVisualPlaceholderComponent: tT,
                renderAudioComponent: B.tEg,
                renderPlaintextFilePreview: B.tEg,
                renderGenericFileComponent: B.tEg,
                gifFavoriteButton: s(l),
                onPlay: function (e, t, n) {},
                canRemoveItem: !1,
                canEditItem: !1,
                onRemoveItem: B.tEg,
                onEditItem: B.tEg,
            },
            c = (0, t_.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (c in u && ((i.onClick = u[c]), (i.handlePreloadImage = d[c]), (i.onSeekRequest = m[c])), i);
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(tO.A, { items: x, isInAppComponentsV2: !0 }) });
}
var tP = n(210716);
function tB(e) {
    let { divider: t, spacing: n } = e;
    return (0, i.jsx)("div", { className: c()({ [tP.f]: n === d.C8.LARGE, [tP.y]: t }) });
}
var tw = n(46054),
    tD = n(521981),
    tU = n(204255);
let tF = {
        SIZE: { default: void 0, reduced: tU.k2 },
        COLOR: { default: void 0, muted: tU.JF },
        WEIGHT: { default: void 0, reduced: tU.Xj },
    },
    tz = s.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tG() {
    return s.useContext(tz);
}
function tH(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = tG(),
        o = s.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = c()(tF.SIZE[e.size], tF.COLOR[e.color], tF.WEIGHT[e.weight]);
            return ("" !== t && (e.className = c()(tU.zr, t)), e);
        }, [n, l, r, a]);
    return (0, i.jsx)(tz.Provider, { value: o, children: t });
}
let tK = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var tV = n(738262),
    tY = n(165648);
function tX(e) {
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
                              ? (0, tD.ko)(t.message, tK)
                              : (0, tD.Le)({ channelId: t.channelId, renderOptions: tK })),
                      tw.A.parse(n, !0, e));
            }, [n, t])),
        a = tG();
    return (0, i.jsx)("div", { className: c()(l, tY.PT, tV.T, a.className), children: r });
}
var tW = n(838541),
    tq = n(292151);
function tZ(e) {
    let { media: t, spoiler: n, description: l } = e,
        r = (0, tv.wz)(t),
        a = (0, tx.Lt)(t.flags, tg.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tk.X)(),
        [u, d] = s.useState(n),
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
            : (0, i.jsx)(tS.LL, {
                  containerClassName: c()(tq.Dg, { [tq.rP]: e }),
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
                  mediaLayoutType: tW.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: a,
              });
    }
    return (
        n !== u && (d(n), h(n)),
        n
            ? (0, i.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: tu.Oc.SPOILER,
                  obscured: m,
                  onToggleObscurity: () => h((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1)
    );
}
var tJ = n(868281);
function t$() {
    return (0, i.jsx)("div", {
        className: tJ.k,
        children: (0, i.jsx)(eI.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: w.intl.string(w.t.zksHZO),
        }),
    });
}
n(321073);
var tQ = n(602853),
    t0 = n(534890),
    t1 = n(831544),
    t5 = n(460905),
    t2 = n(109112),
    t8 = n(664121),
    t4 = n(297264),
    t3 = n(606348),
    t7 = n(957806),
    t9 = n(7584),
    t6 = n(548118),
    ne = n(486020),
    nt = n(922704),
    nn = n(239895);
function nl(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: r = 0,
            numEmojisSent: a = 0,
            topEmoji: o,
            topGame: c,
            topGuild: u,
            powerLevel: d,
            powerLevelPercentile: m,
        } = t,
        h = new Intl.NumberFormat(w.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        p = new Intl.NumberFormat(w.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(a),
        x = (0, t7.oO)(r),
        g = (0, t7.OW)(n),
        C = t3.f[n],
        f = (0, tQ.r)(C.primaryColor).hex(),
        j = (0, tQ.r)(C.secondaryColor).hex({ opacity: 0.2 }),
        v = (0, y.bG)([W.A], () => W.A.getGuild(u?.guildId)),
        A = new Intl.NumberFormat(w.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        N = (0, t7._V)(m ?? 0),
        E = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, i.jsxs)("div", {
        className: nn.kL,
        style: { backgroundColor: f },
        children: [
            (0, i.jsxs)("div", {
                className: nn.Nr,
                children: [
                    (0, i.jsx)("img", { src: g, alt: "", className: nn.LY, style: { backgroundColor: f } }),
                    (0, i.jsxs)("div", {
                        className: nn.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, i.jsx)(t0.ChatIcon, { color: eN.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: nn.KA, children: h }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, i.jsx)(t1.MicrophoneIcon, { color: eN.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: nn.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, i.jsx)(t5.n, { color: eN.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: nn.KA, children: p }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t2._, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: w.intl.string(nt.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(I.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: nn.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? t9.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t2._, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: w.intl.string(nt.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: ne.Ay.getApplicationIconURL({
                                                          id: c.applicationId,
                                                          icon: c.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: nn.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: c.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t2._, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: w.intl.string(nt.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != v
                                                      ? (0, i.jsx)(t6.Ay, {
                                                            guild: v,
                                                            size: t6.Ay.Sizes.SMOL,
                                                            className: nn.iY,
                                                        })
                                                      : (0, i.jsx)(t8.R, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: u.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nn.qr,
                style: { backgroundColor: j },
                children: (0, i.jsx)(t4.D, {
                    variant: "display-sm",
                    className: nn.DD,
                    children: w.intl.string(nt.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: nn.hC,
                style: { backgroundColor: f },
                children: [
                    (0, i.jsx)("div", {
                        className: nn.TO,
                        children: E.map((e, t) =>
                            (0, i.jsx)(
                                "img",
                                { className: nn.mG, src: e, width: 4, alt: "", style: { opacity: t >= N ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: nn.JA,
                        children: [
                            (0, i.jsx)(eI.E, { variant: "text-xs/normal", className: nn.KA, children: "LVL" }),
                            (0, i.jsx)(eI.E, { variant: "text-xs/bold", className: nn.KA, children: A.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nr = n(687966),
    na = n(554830),
    ni = n(111159),
    ns = n(706121);
let no = {
        primaryBackgroundColor: "#7D53DE",
        secondaryBackgroundColor: "#BCB1D5",
        tertiaryBackgroundColor: "#CFC3EB",
        shadowColor: "#411D96",
        backgroundGradientStartColor: "#2F156B",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/4a63c3de5c45c6c85993095b513e2df12c4a7ee1b89da6ee59143f183b88858d.png",
    },
    nc = {
        primaryBackgroundColor: "#34E2F1",
        secondaryBackgroundColor: "#94CCD1",
        tertiaryBackgroundColor: "#A5E3E9",
        shadowColor: "#0C9BA7",
        backgroundGradientStartColor: "#12606D",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/9e1079ca931d60e62a94fed7ce7f6aae2809869172f8b4539c5912f51d3bc3b0.png",
    },
    nu = {
        primaryBackgroundColor: "#FF4CD2",
        secondaryBackgroundColor: "#D5A9D6",
        tertiaryBackgroundColor: "#E9BBE9",
        shadowColor: "#B20086",
        backgroundGradientStartColor: "#80005F",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/03f782ff288303bdb4a2c89c5232dc148176a4ef92a91c0a27946828a23f8c74.png",
    },
    nd = {
        primaryBackgroundColor: "#35ED7E",
        secondaryBackgroundColor: "#B2C5B1",
        tertiaryBackgroundColor: "#B5DCB3",
        shadowColor: "#0FA44A",
        backgroundGradientStartColor: "#0A7535",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/703d350a9435cde8cc76f3e3222a3c6987e9b0ba400ce0a44e98955c334bcb25.png",
    },
    nm = {
        primaryBackgroundColor: "#EF3054",
        secondaryBackgroundColor: "#E5A1AE",
        tertiaryBackgroundColor: "#F6AFBC",
        shadowColor: "#A60D2A",
        backgroundGradientStartColor: "#76091E",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/a0900e98dda9e22cd12fb02b24fabbc42f4dcff0fe8f1452c52130d284d2746a.png",
    },
    nh = {
        primaryBackgroundColor: "#FFE047",
        secondaryBackgroundColor: "#E6CBA8",
        tertiaryBackgroundColor: "#FFE0B8",
        shadowColor: "#B29400",
        backgroundGradientStartColor: "#806A00",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/829db76fbce7913d7aebb80510f98d619143a642bbd7d48ced871be5aab0cb29.png",
    },
    np = {
        [ns.R.GALACTIC]: no,
        [ns.R.IRIDESCENT]: no,
        [ns.R.CHROME]: no,
        [ns.R.ICY]: nc,
        [ns.R.LIQUID]: nc,
        [ns.R.GLACIER]: nc,
        [ns.R.MIDNIGHT]: nu,
        [ns.R.PURPLE]: nu,
        [ns.R.COBALT]: nu,
        [ns.R.FOREST]: nd,
        [ns.R.X_RAY]: nd,
        [ns.R.CRIMSON]: nm,
        [ns.R.RED]: nm,
        [ns.R.BUTTER]: nh,
        [ns.R.ORANGE]: nh,
    };
var nx = n(142617),
    ng = n(819648),
    nC = n(835517),
    nf = n(711408),
    nj = n(881245);
function nv(e) {
    let { character: t, size: n, className: l } = e,
        r = s.useMemo(() => (0, ng.vF)(t, Math.round(n * (0, nC.A)())), [t, n]),
        a = s.useMemo(() => (0, nf.O)(t), [t]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": a,
        className: c()(nj.G, l),
        children: r.map((e) => (0, i.jsx)("img", { src: e, alt: "", draggable: !1, className: nj.q }, e)),
    });
}
var nA = n(309913),
    nN = n(763166),
    nI = n(241802);
let ny = [
    "/assets/cee2b812c0cc2a9c.svg",
    ...Array(nA.w0 - 2).fill("/assets/03323a9f08bfe4db.svg"),
    "/assets/c2b958e9d50d3db3.svg",
];
function nE(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { src: t, alt: "", className: nI.Gl });
}
function nb() {
    return (0, i.jsx)(t2._, { color: eN.A.colors.BLACK, size: "xs" });
}
function nS(e) {
    let { stats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.A, {
                children: w.intl.formatToPlainString(nN.default["/nxqc2"], { powerLevel: t.powerLevel }),
            }),
            (0, i.jsxs)("div", {
                className: nI.TO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(eI.E, {
                        variant: "experimental/mono-md/normal",
                        color: "text-overlay-dark",
                        className: nI.JA,
                        children: "LVL",
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "experimental/mono-md/bold",
                        color: "text-overlay-dark",
                        className: c()(nI.JA, nI.g5),
                        children: t.powerLevel,
                    }),
                    (0, i.jsx)("div", {
                        className: nI.bF,
                        children: ny.map((e, n) =>
                            (0, i.jsx)(
                                "img",
                                { src: e, alt: "", className: c()(nI.G, { [nI.H8]: n >= t.powerLevelUnits }) },
                                n,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
function nT(e) {
    let { icon: t, stat: n } = e;
    return (0, i.jsxs)("li", {
        className: nI.N8,
        children: [
            t,
            (0, i.jsx)(eI.E, {
                variant: "text-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: n.text,
            }),
            (0, i.jsx)(u.A, { children: n.accessibilityLabel }),
        ],
    });
}
function nL(e) {
    let { stats: t } = e,
        { topGuild: n, topEmoji: l, topGame: r } = t,
        a = s.useMemo(
            () => (null != n ? ne.Ay.getGuildIconURL({ id: n.guildId, icon: n.guildIcon, size: 16 }) : void 0),
            [n],
        ),
        o = s.useMemo(
            () =>
                r?.applicationImageId != null
                    ? ne.Ay.getApplicationIconURL({ id: r.applicationId, icon: r.applicationImageId, size: 16 })
                    : void 0,
            [r],
        ),
        c = s.useMemo(() => (null != a ? (0, i.jsx)(nE, { src: a }) : (0, i.jsx)(nb, {})), [a]);
    return (0, i.jsxs)("ul", {
        className: nI.M1,
        children: [
            (0, i.jsx)(nT, {
                icon: (0, i.jsx)(t1.MicrophoneIcon, { color: eN.A.colors.BLACK, size: "xs" }),
                stat: t.voice,
            }),
            (0, i.jsx)(nT, {
                icon: (0, i.jsx)(t0.ChatIcon, { color: eN.A.colors.BLACK, size: "xs" }),
                stat: t.messages,
            }),
            (0, i.jsx)(nT, {
                icon: (0, i.jsx)(t8.R, { color: eN.A.colors.BLACK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, i.jsx)(nT, { icon: c, stat: t.topGuildName }),
            (0, i.jsx)(nT, { icon: (0, i.jsx)(t5.n, { color: eN.A.colors.BLACK, size: "xs" }), stat: t.reactions }),
            (0, i.jsx)(nT, {
                icon:
                    null != l
                        ? (0, i.jsx)(I.A, { emojiId: l.emojiId, emojiName: l.emojiName, alt: "", className: nI.Gl })
                        : (0, i.jsx)(nb, {}),
                stat: t.topEmojiName,
            }),
            (0, i.jsx)(nT, {
                icon: (0, i.jsx)(nr.GameControllerIcon, { color: eN.A.colors.BLACK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            (0, i.jsx)(nT, { icon: null != o ? (0, i.jsx)(nE, { src: o }) : (0, i.jsx)(nb, {}), stat: t.topGameName }),
        ],
    });
}
function nR() {
    return (0, i.jsxs)("div", {
        className: nI.qr,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(eI.E, {
                variant: "experimental/display-xs",
                color: "text-overlay-dark",
                className: nI.K8,
                children: w.intl.string(nt.default["CdU/PF"]),
            }),
            (0, i.jsx)("div", {
                className: nI.wC,
                "aria-hidden": !0,
                children: (0, i.jsx)(na.K, { color: eN.A.colors.BLACK, size: "xxs" }),
            }),
        ],
    });
}
function nk(e) {
    let { checkpointData: t } = e,
        { character: n, stats: l } = t,
        r = null != n && null != l,
        a = (0, nx.FX)("Checkpoint2026CardDisplayComponent"),
        o = s.useMemo(() => {
            let e = (null != n ? np[n.base] : void 0) ?? nc;
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                "--custom-checkpoint-card-logo-size": "44px",
                "--custom-checkpoint-card-footer-height": "28px",
                "--custom-checkpoint-card-wordmark-width": "44px",
            };
        }, [n]),
        d = s.useMemo(() => (null != l ? (0, ng.R8)(l) : null), [l]);
    return (0, i.jsxs)("div", {
        className: c()(nI.Nr, { [nI.Q9]: r }),
        style: o,
        children: [
            (0, i.jsx)(u.A, { children: w.intl.string(nN.default.Og2R9d) }),
            (0, i.jsx)("div", {
                className: nI.wm,
                children: (0, i.jsx)(ni.p, { color: eN.A.colors.BLACK, size: "custom", width: 30, height: 30 }),
            }),
            (0, i.jsx)("div", { className: c()(nI.Ss, null != n ? nI.xG : nI.yz) }),
            null != n && null != d ? (0, i.jsx)(nS, { stats: d }) : null,
            null != n
                ? (0, i.jsx)("div", {
                      className: nI.AM,
                      children: (0, i.jsx)(nv, { character: n, size: 224, className: nI.GG }),
                  })
                : null,
            null != d ? (0, i.jsx)(nL, { stats: d }) : null,
            a ? (0, i.jsx)(nR, {}) : null,
        ],
    });
}
function nO(e) {
    let { checkpointData: t } = e;
    switch (t.version) {
        case nA.wk.V2025:
            return (0, i.jsx)(nl, { checkpointData: t });
        case nA.wk.V2026:
            return (0, i.jsx)(nk, { checkpointData: t });
        default:
            return (0, i.jsx)(t$, {});
    }
}
var n_ = n(681154);
class nM extends s.PureComponent {
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
var nP = n(211401),
    nB = n(500049),
    nw = n(429913),
    nD = n(355622),
    nU = n(583846),
    nF = n(818023),
    nz = n(52133),
    nG = n(803306),
    nH = n(860071),
    nK = n(808380),
    nV = n(409626),
    nY = n(692969),
    nX = n(424994),
    nW = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let nq = { [nK.Y.XBOX]: nX.a4.XBOX, [nK.Y.PLAYSTATION]: nX.a4.PLAYSTATION },
    nZ = { [nW.EMBED]: nV.GameProfileSources.Embed };
function nJ(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, nw.h)(l.extra.application_id),
        s = i?.getIconURL(nF.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = nq[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === n_.ContentInventoryEntryType.PLAYED_GAME && (0, nU.JM)(l) && !(0, nU.I5)(l)
            ? w.t.vPg1JT
            : w.t.rPqqts;
    let c = nZ[r],
        u = {
            onClick: (0, nY.A)({
                location: c,
                applicationId: l.extra.application_id,
                source: c,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: w.intl.formatToPlainString(w.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...a,
        thumbnailUrl: s,
        title: o,
        titleClickable: u,
        thumbnailClickable: u,
        userDescription: n,
        providerIconProps: t,
    };
}
var n$ = n(205327),
    nQ = n(261020),
    n0 = n(272984),
    n1 = n(970928);
let n5 = s.createContext(void 0);
function n2(e, t) {
    return s.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function n8(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, nz.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nG.wz)(e) : nH.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case n_.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(n7, { entry: t, ...l });
        case n_.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(n9, { entry: t, ...l });
        case n_.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(n6, { entry: t, ...l });
        case n_.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(le, { entry: t, ...l });
        case n_.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(lt, { entry: t, ...l });
        case n_.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(n3, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function n4(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(nM, { fallback: t, children: (0, i.jsx)(n8, { ...n }) });
}
function n3(e) {
    let { entry: t, children: n, ...l } = e,
        r = n2(
            (function (e) {
                let { entry: t } = e,
                    n = (0, nw.h)(t.extra.application_id),
                    l = n?.getIconURL(nF.iu.LARGE),
                    r = t.extra.activity_name,
                    a = (0, nU.Hd)(t) ? w.t.vPg1JT : w.t.rPqqts,
                    i = {
                        onClick: function () {
                            nP.R(nB.s4.TEXT, nD.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: w.intl.formatToPlainString(w.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(n5.Provider, { value: r, children: n });
}
function n7(e) {
    let { entry: t, children: n, ...l } = e,
        r = n2(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: r, image_url: a } = n.extra.media,
                    i = n.extra.artist.name,
                    s = {
                        onClick: () => (0, nQ.n)(n0.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, nQ.n)(n0.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: i }),
                    };
                return (
                    r === n$.X.SPOTIFY && (t = { type: nX.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        thumbnailUrl: a,
                        titleClickable: o,
                        subtitleClickable: s,
                        thumbnailClickable: s,
                        userDescription: w.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(n5.Provider, { value: r, children: n });
}
function n9(e) {
    let { entry: t, children: n, ...l } = e,
        r = n2(nJ({ entry: t, ...l }), l.location);
    return (0, i.jsx)(n5.Provider, { value: r, children: n });
}
function n6(e) {
    let { entry: t, children: n, ...l } = e,
        r = n2(nJ({ entry: t, ...l }), l.location);
    return (0, i.jsx)(n5.Provider, { value: r, children: n });
}
function le(e) {
    let { entry: t, children: n, ...l } = e,
        r = n2(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = (0, nw.h)(n.extra.application_id),
                    a = r?.getIconURL(128),
                    i = (0, n1.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        nF.iu.LARGE,
                        nF.iu.LARGE,
                    ]),
                    o = n.extra.media_title,
                    c = n.extra.media_subtitle,
                    u = (0, nU.Hd)(n) ? w.t["LH+Z3y"] : w.t.YuKgml,
                    d = { type: nX.a4.CRUNCHYROLL },
                    m = s.useMemo(() => {
                        if (null == n.extra.url) return;
                        let e = tb.A.safeParseWithQuery(n.extra.url);
                        if (null != e && null != e.protocol && null != e.hostname) return e;
                    }, [n.extra.url]);
                return (
                    null != m &&
                        (t = {
                            href: tb.A.format(m),
                            ariaDescription: w.intl.formatToPlainString(w.t.aFFQ3g, { title: o }),
                        }),
                    {
                        ...l,
                        thumbnailUrl: i ?? a,
                        title: o,
                        titleClickable: t,
                        thumbnailClickable: t,
                        subtitle: c,
                        userDescription: u,
                        providerIconProps: d,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(n5.Provider, { value: r, children: n });
}
function lt(e) {
    let { entry: t, children: n, ...l } = e,
        r = n2(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = n.extra.entries[0].media,
                    a = r.artists[0],
                    { title: i, provider: s, image_url: o } = r,
                    c = a.name,
                    u = {
                        onClick: () => (0, nQ.n)(n0.M0.TRACK, r.external_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: i }),
                    },
                    d = {
                        onClick: () => (0, nQ.n)(n0.M0.ARTIST, a.external_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: c }),
                    };
                return (
                    s === n$.X.SPOTIFY && (t = { type: nX.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        subtitle: c,
                        thumbnailUrl: o,
                        titleClickable: u,
                        subtitleClickable: d,
                        thumbnailClickable: u,
                        userDescription: w.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(n5.Provider, { value: r, children: n });
}
var ln = n(28863),
    ll = n(531142),
    lr = n(939249),
    la = n(43990),
    li = n(696986),
    ls = n(342952),
    lo = n(576757),
    lc = n(291594),
    lu = n(22869),
    ld = n(959),
    lm = n(968544);
function lh(e) {
    let { entry: t, channel: n, className: l } = e,
        r = s.useRef(null),
        a = s.useRef(null),
        {
            displayParticipants: o,
            participant1: u,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, lo.A)(t),
        p = [u, d];
    return (0, i.jsxs)("div", {
        className: c()(lm.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ld.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, i.jsx)(lr.D, {
                                      innerRef: r,
                                      className: lm.vk,
                                      ...e,
                                      children: (0, i.jsx)(ls.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eW._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(li.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(t4.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: c()(lm.IY, lm.Io),
                scaleFontToUserSetting: !0,
                children: w.intl.format(w.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, p[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, p[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(lu.A, { text: e, user: p[0], channel: n }, t),
                    name1Hook: (e, t) => (0, i.jsx)(lu.A, { text: e, user: p[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            ld.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, i.jsx)(lc.A, {
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
var lp = n(263577),
    lx = n(347306),
    lg = n(790381),
    lC = n(266080),
    lf = n(121090),
    lj = n(18282);
let lv = { [nX.a4.SPOTIFY]: lf.A, [nX.a4.CRUNCHYROLL]: lx.k, [nX.a4.XBOX]: lC.A, [nX.a4.PLAYSTATION]: lg.A },
    lA = {
        [nX.a4.SPOTIFY]: () => w.intl.string(w.t["0ZB/XE"]),
        [nX.a4.CRUNCHYROLL]: () => w.intl.string(w.t.jdJYXw),
        [nX.a4.XBOX]: () => w.intl.string(w.t.Nfvo72),
        [nX.a4.PLAYSTATION]: () => w.intl.string(w.t.fFl4jo),
    };
function lN(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = lv[t];
    if (null == r) return null;
    let a = n ?? lA[t]?.();
    return (0, i.jsx)(lj.A, { Icon: r, ...l, "aria-label": a });
}
var lI = n(140651),
    ly = n(506326),
    lE = n(915089),
    lb = n(818348),
    lS = n(167848),
    lT = n(154342);
function lL(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, lE.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.A, { id: a, children: e }),
                (0, i.jsx)(ln.Anchor, { className: c()(t, n), href: s, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(ll.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(u.A, { id: a, children: o }),
            (0, i.jsx)(lr.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : a,
                className: c()(t, null != s && n),
                children: r,
            }),
        ],
    });
}
function lR(e) {
    let { clickable: t, ...n } = e;
    return (0, i.jsx)(lL, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: lT.v });
}
function lk(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: r,
            thumbnailUrl: a,
            titleClickable: s,
            subtitleClickable: o,
            thumbnailClickable: u,
            providerIconProps: d,
            style: m = {},
        } = e,
        h = (0, lE.GV)(),
        { primaryColor: p, secondaryColor: x } = (0, lI.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${p}, ${x})`),
        (0, i.jsx)(la.N, {
            theme: lb.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": w.intl.string(w.t.zFfUhF),
                    "aria-labelledby": h,
                    className: c()(lS.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(lL, {
                            className: lS.iT,
                            clickableClassName: lS.vk,
                            clickable: u,
                            children: (0, i.jsx)(lp.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: lS.op,
                            children: [
                                (0, i.jsx)(lh, { channel: n, entry: t, className: lS.VV }),
                                (0, i.jsx)(li.h, { size: 2 }),
                                (0, i.jsx)(lR, {
                                    clickable: s,
                                    className: lS.sd,
                                    children: (0, i.jsx)(t4.D, {
                                        id: h,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: c()(lS.ek, lS.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(li.h, { size: 2 }),
                                              (0, i.jsx)(lR, {
                                                  clickable: o,
                                                  className: lS.sd,
                                                  children: (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/normal",
                                                      className: c()(lS.c1, lS.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(ly.iT, { className: lS.jp, entry: t, location: ly.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: lS.Y, children: null != d ? (0, i.jsx)(lN, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lO(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = s.useContext(n5)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(lk, { ...r, entry: n, channel: l });
}
function l_(e) {
    let t = (0, h.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, y.bG)([X.A], () => X.A.getChannel(n));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(n4, {
            location: nW.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(lO, { ...e, channel: l }),
        })
    );
}
var lM = n(689592);
function lP(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, h.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: lM.kL,
              children: [
                  (0, i.jsx)("div", { className: lM.Y_, children: n(t) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: lM.z3, message: l, component: e }) : null,
              ],
          });
}
var lB = n(317097),
    lw = n(796951);
function lD(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, o] = s.useState(l),
        [u, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: c()(lw.kL, { [lw.dK]: e, [lw._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, lB.$k)(n, !0) : void 0 },
                    children: (0, i.jsx)(tH, { size: "reduced", children: r(t) }),
                }),
        });
    }
    return (l !== a && (o(l), d(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, i.jsx)(tm.Ay, {
                type: tm.Ay.Types.ATTACHMENT,
                reason: tu.Oc.SPOILER,
                obscured: u,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var lU = n(244367),
    lF = n(405388);
function lz(e) {
    let { label: t, description: n, component: l, renderComponent: r } = e,
        a = (0, h.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, i.jsxs)(ta.e, {
              title: t,
              required: l.required,
              error: a,
              children: [
                  null != n && (0, i.jsx)(lU.a, { type: lU.t.DESCRIPTION, className: lF.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var lG = n(572891);
function lH(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, s] = (0, p.zn)(),
        o = (0, p.Hq)(s),
        u = n.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: lG.uW,
        ref: a,
        children: [
            (0, i.jsxs)("div", {
                className: lG.Y_,
                children: [
                    (0, i.jsx)("div", { className: c()(lG.zt, { [lG.uf]: u }), children: l(t) }),
                    (0, i.jsx)("div", {
                        className: c()(lG.LP, { [lG.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, i.jsx)(K, { ...e });
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
var lK = n(359886);
function lV(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(lP, { ...t, renderComponents: lV }, n);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(K, { ...t }, n);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(tn, { ...t }, n);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(eg, { ...t }, n);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e2, { ...t }, n);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(to, { ...t }, n);
                        case d.I5.SECTION:
                            return (0, i.jsx)(lH, { ...t, renderComponents: lV }, n);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(tX, { ...t }, n);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(tM, { ...t }, n);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(tZ, { ...t }, n);
                        case d.I5.FILE:
                            return (0, i.jsx)(tp, { ...t }, n);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(tB, { ...t }, n);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(l_, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(lD, { ...t, renderComponents: lV }, n);
                        case d.I5.LABEL:
                            return (0, i.jsx)(lz, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eY, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            return (0, i.jsx)(nO, { ...t }, n);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e7, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(ev, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(ef, { ...t }, n);
                        default:
                            return (0, i.jsx)(t$, {}, n);
                    }
                })(e, t.toString()),
                (0, i.jsx)(u.A, { children: "," }),
            ],
        }),
    );
}
function lY(e) {
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
                                  className: c()([lK.k, { [lK.z]: (0, m._c)(t) }]),
                                  children: lV(l),
                              }),
                      }),
                  }),
              }),
          });
}

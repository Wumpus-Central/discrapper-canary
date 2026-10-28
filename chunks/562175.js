n.d(t, { Ay: () => lS, fD: () => lN });
var l,
    r,
    a,
    s = n(477900),
    i = n(582128),
    c = n(503698),
    o = n.n(c),
    u = n(140735),
    d = n(155718),
    m = n(383233),
    h = n(298236),
    x = n(953756),
    g = n(435558),
    f = n(862482),
    j = n(980707),
    p = n(477782),
    v = n(34188),
    A = n(811893),
    C = n(863610),
    E = n(442433),
    N = n(565645);
n(938796);
var S = n(17928),
    I = n(636537),
    b = n(192308),
    y = n(73153),
    T = n(163437),
    R = n(97352),
    _ = n(67480),
    O = n(328968),
    M = n(24482),
    L = n(580630),
    P = n(963179),
    k = n(168393),
    w = n(652215),
    D = n(105292);
let U = (0, S.UT)([_.A, R.A, O.A], {
    getQueryId: w.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = _.A.get(e),
            n = R.A.getForSKU(e) ?? [],
            l = O.A.getForSKU(e),
            r = _.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === w.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: w.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await I.Bo.get(t);
        (y.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                y.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    y.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                }));
    },
});
var G = n(957565),
    F = n(123917),
    H = n(489414),
    z = n(684946);
function K(e) {
    let { url: t, onSelect: n } = e;
    return G.p5 && null != t
        ? (0, s.jsx)(j.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: E.Z_,
              "aria-label": D.intl.string(D.t.tvTXy8),
              onSelect: n,
              children: (0, s.jsx)(p.rX, {
                  children: (0, s.jsx)(p.Dr, {
                      id: "copy",
                      label: D.intl.string(D.t.uHhnfa),
                      action: () => (0, G.C)(t),
                  }),
              }),
          })
        : null;
}
function B(e) {
    let t,
        { label: n, style: l, disabled: r, emoji: a, url: c, skuId: u } = e,
        { executeStateUpdate: m, visualState: x, isDisabled: j } = (0, h.At)(e),
        p = (function (e) {
            let { data: t } = U(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                c = i.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(k.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, T.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                o = i.useCallback(() => {
                    if (null == l) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(P.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != r && (null == l || l.type !== w.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                if (l.type === w.Puh.SUBSCRIPTION) {
                    if (null == a || 0 === a.length) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                    let e = a[0],
                        t = (0, M.y8)(e.id);
                    return {
                        disabled: !1,
                        label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, L.$g)(t.amount, t.currency),
                        }),
                        onClick: c,
                    };
                }
                return null == l.price
                    ? { disabled: !0, label: D.intl.string(D.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                              skuName: l.name,
                              price: (0, L.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: o,
                      };
            }
        })(u),
        S = null != u && l === d.in.PREMIUM,
        I = S && p?.disabled,
        y = S ? p?.label : n,
        R = null != a,
        _ = null != y && y.length > 0,
        O = l === d.in.LINK && null != c && c.length > 0,
        G = x === H.BB.LOADING || (S && null == p);
    return (
        (t = O
            ? () => {
                  (0, F.h)({ href: c ?? "", shouldConfirm: !0 });
              }
            : S
              ? null != p && !1 === p.disabled
                  ? p.onClick
                  : g.noop
              : () => m()),
        (0, s.jsxs)(f.$n, {
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
            disabled: r || x === H.BB.DISABLED || j || I,
            onClick: t,
            onContextMenu: (e) => {
                O && (0, E.jA)(e, (e) => (0, s.jsx)(K, { ...e, url: c }));
            },
            role: O ? "link" : "button",
            children: [
                (0, s.jsxs)("div", {
                    className: o()(z.Qs, { [z.R]: G, [z.M2]: S }),
                    "aria-hidden": G,
                    children: [
                        S
                            ? (0, s.jsx)("div", {
                                  className: z.sV,
                                  children: (0, s.jsx)(v.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        R
                            ? (0, s.jsx)(N.A, {
                                  className: o()({ [z.MR]: _ }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        _ ? (0, s.jsx)("div", { className: z.Pf, children: y }) : null,
                        O ? (0, s.jsx)(A.t, { size: "xs", color: "currentColor", className: z.LE }) : null,
                    ],
                }),
                G
                    ? (0, s.jsx)("div", { className: z.Lq, children: (0, s.jsx)(C.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var V = n(678708),
    Y = n(713654),
    W = n(734057),
    q = n(71393),
    X = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    J = n(47167),
    Q = n(696451),
    Z = n(317525),
    $ = n(994500),
    ee = n(287809),
    et = n(768038),
    en = n(403362),
    el = n(562153);
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = q.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case X.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? Q.Ay.getNick(l.id, t.id) : void 0;
                    return { type: H.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case X.ROLE: {
                    if (null == l) return null;
                    let t = Z.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: H.iw.ROLE, value: t.id, label: t.name };
                }
                case X.CHANNEL: {
                    if (null == l) return null;
                    let t = W.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: H.iw.CHANNEL, value: t.id, label: (0, J.m1)(t, ee.default, $.A) };
                }
            }
        })
        .filter(en.Vq);
}
n(138321);
var ea = n(284009),
    es = n.n(ea),
    ei = n(444550),
    ec = n(594808),
    eo = n(437517),
    eu = n(483334),
    ed = n(219025);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, s.jsx)("div", { className: eu.zc, style: { height: n, width: n }, children: t });
}
var eh = (((r = {})[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), r);
function ex(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: r, defaultValues: a } = e,
        { type: c, customId: u, maxValues: m, disabled: x } = t,
        g = (0, eo.c7)(t),
        [f, j] = i.useState(!1),
        [p, v] = i.useState(!1),
        [A, C] = i.useState(new Map(a?.map((e) => [e.value, e]))),
        [E, N] = i.useState(new Set(A.keys())),
        S = i.useRef((a ?? []).map((e) => e.value)),
        I = i.useRef(c),
        b = i.useRef(u),
        [y, T] = i.useState(0);
    i.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => S.current.includes(e)) &&
            S.current.every((t) => e.includes(t)) &&
            c === I.current &&
            u === b.current
        )
            return;
        ((S.current = e), (I.current = c), (b.current = u));
        let t = new Map(a?.map((e) => [e.value, e]));
        (C(t), N(new Set(t.keys())), T((e) => e + 1));
    }, [a, c, u]);
    let R = (0, h.jc)();
    es()(null != R, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: _,
            executeStateUpdate: O,
            visualState: M,
            isDisabled: L,
            error: P,
        } = R.useComponentState(t, A.size > 0 ? { type: c, selectedOptions: Array.from(A.values()) } : void 0),
        k = null != R.modal,
        w = M === H.BB.LOADING;
    i.useEffect(() => {
        if (
            _?.type === d.I5.USER_SELECT ||
            _?.type === d.I5.ROLE_SELECT ||
            _?.type === d.I5.MENTIONABLE_SELECT ||
            _?.type === d.I5.CHANNEL_SELECT
        ) {
            let e = new Map(_.selectedOptions.map((e) => [e.value, e]));
            (C(e), N(new Set(e.keys())));
        }
    }, [_]);
    let D = i.useCallback(() => {
        O({ type: c, selectedOptions: Array.from(A.values()) }) && N(new Set(A.keys()));
    }, [O, c, A]);
    i.useEffect(() => {
        f || p || (A.size === E.size && Array.from(A.keys()).every((e) => E.has(e))) || D();
    }, [f, p, E, A, D]);
    let U = 0 === A.size || f,
        G = {
            isProcessing: w,
            isDisabled: x || M === H.BB.DISABLED || L,
            wrapperClassName: o()(eu.Lt, { [eu.zE]: k }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            filter: !1,
            placeholder: U ? g : void 0,
            onClose: () => j(!1),
            onOpen: () => j(!0),
            onBlur: () => v(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, t) {
                let { inPill: n } = t,
                    r = n ? 16 : 24,
                    a = l(e, r);
                return null != a ? (0, s.jsx)(em, { icon: a, iconSize: r }) : null;
            },
            renderOptionLabel: r,
        };
    return (0, s.jsxs)(i.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: eu.kL,
                children:
                    m > 1
                        ? (0, s.jsx)(
                              ei.p,
                              {
                                  value: Array.from(A.values()),
                                  onChange: function (e) {
                                      (f || v(!0), C(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: o()({ [eu.R]: !U }),
                                  closeOnSelect: !1,
                                  ...G,
                                  "data-migration-pending": !0,
                              },
                              y,
                          )
                        : (0, s.jsx)(
                              ei.p,
                              {
                                  value: [...A.values()][0],
                                  onChange: function (e) {
                                      return C(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...G,
                                  "data-migration-pending": !0,
                              },
                              y,
                          ),
            }),
            null == P || k ? null : (0, s.jsx)(ec.S0, { ...(0, ec.PS)(P), className: ed.z3 }),
        ],
    });
}
var eg = n(726088);
function ef(e) {
    let { channelTypes: t } = e,
        n = (0, h.jc)(),
        l = n?.channelId,
        r = W.A.getChannel(l),
        a = q.A.getGuild(r?.getGuildId()),
        c = i.useMemo(() => er(e.defaultValues, a?.id, t), [e.defaultValues, a, t]);
    return (0, s.jsx)(ex, {
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
                  }).channels.map((e) => ({ type: H.iw.CHANNEL, value: e.id, label: (0, J.m1)(e, ee.default, $.A) }));
        },
        renderIcon: function (e, t) {
            let n = W.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === w.rbe.GUILD_CATEGORY ? V.FolderIcon : (0, Y.gU)(n);
            return null != l ? (0, s.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, s.jsx)("span", { className: eg.Pf, children: e.label });
        },
        defaultValues: c,
    });
}
var ej = n(150934);
function ep(e) {
    let { type: t, default: n } = e,
        l = (0, h.jc)();
    es()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        c = i.useMemo(() => r?.type === t && r.value, [r, t]),
        o = l.getParents(e)?.[0],
        u = o?.type === d.I5.LABEL ? o : void 0;
    return (
        es()(null != u, "CheckboxActionComponent must be a child of a Label component"),
        (0, s.jsx)(ej.S, {
            label: u.label,
            description: u.description,
            checked: c,
            onChange: function (e) {
                a({ type: t, value: e });
            },
        })
    );
}
var ev = n(167417);
function eA(e) {
    let { type: t, options: n, required: l, maxValues: r } = e,
        a = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: c, executeStateUpdate: o } = (0, h.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        u = i.useMemo(() => (c?.type === t ? c.values : []), [c, t]);
    return (0, s.jsx)(ev.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: u.length >= r && !u.includes(e.value),
        })),
        selectedValues: u,
        onChange: function (e) {
            o({ type: t, values: e });
        },
        required: l,
    });
}
var eC = n(81369),
    eE = n(661531),
    eN = n(834730),
    eS = n(628284),
    eI = n(241326),
    eb = n(608299),
    ey = n(780777),
    eT = n(494921),
    eR = n(851023),
    e_ = n(215497),
    eO = n(914905),
    eM = n(101555),
    eL = n(424170),
    eP = n(409481),
    ek = n(274652),
    ew = n(31717),
    eD = n(255438),
    eU = n(453771),
    eG = n(518960),
    eF = n(382287),
    eH = n(522602),
    ez = n(283655);
function eK(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: i } = e,
        c = (0, eP.C)((0, eU.o2)(i)),
        u = (0, eD.Xq)(c / eD.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, s.jsxs)("div", {
        className: ez.pp,
        children: [
            (0, s.jsxs)("div", {
                className: o()(ez.e8, { [ez.R]: t }),
                children: [
                    (0, s.jsx)(eC.H, { color: eE.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, s.jsx)(eN.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: D.intl.format(D.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, s.jsx)(eN.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, eo.fw)(l, r, a, u),
                    }),
                ],
            }),
            t &&
                (0, s.jsxs)("div", {
                    className: o()(ez.e8, ez.r$),
                    children: [
                        (0, s.jsx)(eC.H, { color: eE.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, s.jsx)(eN.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: D.intl.string(D.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eB() {
    return (0, s.jsxs)("div", {
        className: o()(ez.pp, ez.e8),
        children: [
            (0, s.jsx)(eS.y, { color: eE.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, s.jsx)(eN.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: D.intl.string(D.t["0PhgpK"]),
            }),
            (0, s.jsx)(eN.E, { variant: "text-xs/normal", color: "text-muted", children: D.intl.string(D.t.HYg2Hn) }),
        ],
    });
}
function eV(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            className: o()(ez.NJ, { [ez.j1]: l }),
            children: [
                (0, s.jsx)(eO.J, { upload: t, size: l ? e_.L.XSMALL : e_.L.XXSMALL }),
                (0, s.jsx)(eN.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: ez.iW,
                    children: t.filename ?? D.intl.string(D.t.ZMirp0),
                }),
                (0, s.jsx)(eM.Ay, {
                    className: ez.BX,
                    children: (0, s.jsx)(eR.A, {
                        className: ez.XI,
                        tooltip: D.intl.string(D.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, s.jsx)(eI.TrashIcon, { size: "xs", color: "currentColor", className: ez.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eY(e) {
    let { minValues: t, maxValues: n } = e,
        l = i.useRef(null),
        r = i.useRef(null),
        [a, c] = i.useState(!1),
        u = (0, h.jc)();
    es()(null != u, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = u.channelId;
    es()(null != m, "FileUploadActionComponent must be used inside a channel");
    let x = u.modal?.customId;
    es()(null != x, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: g,
            typesFormattedString: f,
            validateFilenames: j,
            showInvalidFileTypeAlert: p,
        } = (0, eL.M1)(e.fileTypes),
        {
            uploadIds: v,
            setUploadIds: A,
            currentUploads: C,
            error: E,
        } = (function (e) {
            let t = (0, h.jc)();
            es()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            es()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = t.useComponentState(e),
                s = i.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                c = eH.A.getUploads(n, ew.C.InteractionModal),
                o = i.useMemo(() => s.map((e) => c.find((t) => t.id === e)).filter((e) => null != e), [s, c]),
                u = i.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                i.useEffect(() => {
                    s.length > o.length && u(s.filter((e) => o.some((t) => t.id === e)));
                }, [s, o, u]),
                { uploadIds: s, setUploadIds: u, currentUploads: o, error: a }
            );
        })(e),
        N = (0, S.bG)([W.A], () => W.A.getBasicChannel(m));
    es()(null != N, "FileUploadActionComponent requires a valid channel");
    let I = i.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && c(!0));
        }, []),
        b = i.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || c(!1);
        }, []),
        y = i.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (v.length + e.length > n)
                    return (0, eT.openUploadError)({
                        title: D.intl.string(D.t.wOr6hB),
                        help: D.intl.formatToPlainString(D.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eF.fJ)({ files: e, guildId: N.guild_id, canDeferSizeChecks: !1 })) return (0, eG.V)(N, e);
                if (!j(e.map((e) => e.name))) return p();
                let l = e.map((e) => {
                    let n = (0, eo.so)(x),
                        l = { id: n, file: e, platform: ek.x.WEB, origin: t };
                    return (
                        eb.A.setFile({
                            channelId: m,
                            id: n,
                            file: l,
                            draftType: ew.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                A(v.concat(l));
            },
            [v, n, N, A, x, m, j, p],
        ),
        T = i.useCallback(
            (e) => {
                (e.preventDefault(), c(!1), y(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [y],
        );
    function R(e) {
        null == m || (eb.A.remove(m, e, ew.C.InteractionModal), A(v.filter((t) => t !== e)));
    }
    return (i.useEffect(() => {
        let e = r.current;
        return (
            e?.addEventListener("dragover", I),
            e?.addEventListener("dragleave", b),
            e?.addEventListener("drop", T),
            () => {
                (e?.removeEventListener("dragover", I),
                    e?.removeEventListener("dragleave", b),
                    e?.removeEventListener("drop", T));
            }
        );
    }, [I, b, T]),
    1 === n && 1 === C.length)
        ? (0, s.jsx)(eV, { upload: C[0], handleRemoveFile: R, singleFileInput: !0 })
        : (0, s.jsxs)("div", {
              ref: r,
              className: o()(ez.kL, { [ez.Ke]: a, [ez.z3]: null != E }),
              children: [
                  v.length >= n
                      ? (0, s.jsx)(eB, {})
                      : (0, s.jsx)(eK, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: f,
                            guildId: N.guild_id,
                        }),
                  C.length > 0 &&
                      (0, s.jsx)("div", {
                          className: ez.aq,
                          children: C.map((e) => (0, s.jsx)(eV, { upload: e, handleRemoveFile: R }, e.id)),
                      }),
                  (0, s.jsx)(ey.A, {
                      ref: l,
                      onChange: function (e) {
                          (y(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
                      },
                      multiple: n > 1,
                      filters: g.length > 0 ? [{ name: "", extensions: g }] : void 0,
                      tabIndex: -1,
                      className: ez.Fg,
                  }),
              ],
          });
}
var eW = n(97808),
    eq = n(778712),
    eX = n(957485),
    eJ = n(950305),
    eQ = n(297413),
    eZ = n(376304),
    e$ = n(386784),
    e0 = n(69282),
    e1 = n(657048),
    e5 = n(290863);
function e2(e) {
    let t = (0, h.jc)(),
        n = t?.channelId,
        l = W.A.getChannel(n),
        r = q.A.getGuild(l?.getGuildId()),
        a = (0, e$.A)(r?.id, 1e3),
        c = i.useMemo(() => er(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, s.jsx)(ex, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = W.A.getChannel(n);
                if (null == l) return [];
                let r = e === d.I5.USER_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    a = e === d.I5.ROLE_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    { users: s, roles: i } = et.Ay.queryMentionResults({
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
                    ...s.map((e) => {
                        let t = el.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: H.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...i.map((e) => ({ type: H.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: function (e, t) {
            let n = t === eh.PILL_ICON_SIZE;
            if (e?.type === H.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, s.jsx)(eW.eu, {
                    size: n ? eq._3.SIZE_16 : eq._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, t),
                    status: n ? null : e5.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === H.iw.ROLE) {
                let n = null != r ? Z.A.getRole(r.id, e.value) : void 0;
                if (null == n || null == r) return;
                let l = (0, eZ.fm)(r, n) ? (0, e0.ox)(n, t) : null;
                return null != l
                    ? (0, s.jsx)(e1.A, { ...l })
                    : (0, s.jsx)(eX.i, { size: "custom", color: n.colorString ?? w.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: function (e) {
            let t = null;
            if (e.type === H.iw.USER) {
                let n = ee.default.getUser(e.value);
                null != n &&
                    (t = (0, s.jsx)(eQ.A, {
                        className: eg.Tc,
                        usernameClass: eg.Xh,
                        discriminatorClass: eg.D2,
                        botClass: eg.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === H.iw.ROLE) {
                let n = null != r ? Z.A.getRole(r.id, e.value) : void 0,
                    l = null == n ? null : a?.[n.id];
                null != l &&
                    (t = (0, s.jsxs)("div", {
                        className: eg.Ly,
                        children: [
                            (0, s.jsx)(eJ.UserIcon, { size: "sm", color: "currentColor", className: eg.jh }),
                            (0, s.jsx)("span", { className: eg.NT, children: l }),
                        ],
                    }));
            }
            return (0, s.jsxs)("span", {
                className: eg.Pf,
                children: [(0, s.jsx)("span", { className: eg.QK, children: e.label }), t],
            });
        },
        defaultValues: c,
    });
}
var e3 = n(144228),
    e4 = n(821609),
    e8 = n(897132);
function e7(e) {
    let { type: t, options: n, required: l } = e,
        r = i.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: a, executeStateUpdate: c } = (0, h.At)(e, null != r ? { type: t, value: r } : void 0),
        u = i.useMemo(() => (a?.type === t ? a.value : null), [a, t]),
        d = null != u,
        m = i.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function x(e) {
        c({ type: t, value: e });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e3.z, { options: m, value: u ?? "", onChange: x, required: l }),
            !l &&
                (0, s.jsx)("div", {
                    className: o()(e8.H, { [e8.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, s.jsx)(e4.$, {
                        text: D.intl.string(D.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => x(null),
                    }),
                }),
        ],
    });
}
var e6 = n(843282);
function e9(e) {
    let { emoji: t, label: n, description: l, isDisabled: r, isOffset: a } = e,
        i = o()(ed._A, { [ed.r9]: r, [ed.cY]: null == t && a });
    return (0, s.jsxs)("div", {
        className: ed.uK,
        children: [
            null != t
                ? (0, s.jsx)(N.A, { className: ed.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, s.jsxs)("div", {
                className: i,
                children: [
                    (0, s.jsx)("strong", { className: ed.Pf, children: n }),
                    null != l ? (0, s.jsx)("span", { className: ed.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function te(e) {
    let { emoji: t, label: n } = e;
    return (0, s.jsx)("div", {
        className: ed.uK,
        children: (0, s.jsxs)("div", {
            className: o()(ed.Uq, ed.u9),
            children: [
                null != t
                    ? (0, s.jsx)(N.A, {
                          className: ed.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, s.jsx)("span", { className: ed.oX, children: n }),
            ],
        }),
    });
}
function tt(e) {
    let { options: t } = e;
    return (0, s.jsx)("div", {
        className: ed.uK,
        children: (0, s.jsx)("div", {
            className: ed.Uq,
            children: t.map((e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: ed.mK,
                        children: [
                            null != e.emoji
                                ? (0, s.jsx)(N.A, {
                                      className: ed.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, s.jsx)("span", { className: ed.Tc, children: e.label }, e.value),
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
        c = (0, eo.c7)(e),
        u = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, h.jc)();
    es()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: x,
            executeStateUpdate: g,
            visualState: f,
            isDisabled: j,
            error: p,
        } = m.useComponentState(e, u.length > 0 ? { type: t, values: u } : void 0),
        v = null != m.modal,
        A = r > 1,
        C = f === H.BB.LOADING,
        [E, N] = i.useState(!1),
        [S, I] = i.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [b, y] = i.useState(S),
        T = i.useMemo(() => n.some((e) => null != e.emoji), [n]);
    i.useEffect(() => {
        if (x?.type === d.I5.STRING_SELECT) {
            let e = new Set(x.values);
            (I(e), y(e));
        } else {
            let e = new Set(u);
            (I(e), y(e));
        }
    }, [l, u, x]);
    let R = i.useCallback(() => {
        b !== S && g({ type: d.I5.STRING_SELECT, values: Array.from(S) }) && y(S);
    }, [S, b, y, g]);
    i.useEffect(() => {
        E || (S.size === b.size && Array.from(b).every((e) => S.has(e))) || R();
    }, [E, S, b, R]);
    let _ = (0, eo.Lr)(e, v ? "modal" : "message"),
        O = e6.lS;
    A ? (O = e6.M8) : _ && (O = e6.$l);
    let M = (0, e6.Ev)({ value: S, onChange: (e) => I(e), onSelectInteraction: O });
    return (0, s.jsxs)(i.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: ed.kL,
                children: (0, s.jsx)(e6.Pw, {
                    isProcessing: C,
                    isDisabled: a || f === H.BB.DISABLED || j,
                    className: o()(ed.Lt, { [ed.zE]: v }),
                    options: n.map((e) => ({ ...e, disabled: A && !S.has(e.value) && S.size === r })),
                    placeholder: c,
                    onClose: () => N(!1),
                    onOpen: () => N(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !A,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, s.jsx)(e9, { ...e, isDisabled: A && !S.has(e.value) && S.size === r, isOffset: T }),
                    renderOptionValue: (e) => (A ? (0, s.jsx)(tt, { options: e }) : (0, s.jsx)(te, { ...e[0] })),
                    ...M,
                    "data-migration-pending": !0,
                }),
            }),
            null == p || v ? null : (0, s.jsx)(ec.S0, { ...(0, ec.PS)(p), className: ed.z3 }),
        ],
    });
}
var tl = n(95477),
    tr = n(103557),
    ta = n(321471),
    ts = n(969508),
    ti = n(565469);
function tc(e) {
    let t,
        { type: n, style: l, label: r, placeholder: a, minLength: c, maxLength: o, required: u, value: m } = e,
        [x, g] = i.useState(m ?? ""),
        { state: f, executeStateUpdate: j, error: p } = (0, h.At)(e, null != m ? { type: n, value: m } : void 0),
        v = (0, ts.FG)(e.id);
    i.useEffect(() => {
        f?.type === n && g(f.value);
    }, [n, f]);
    let A = {
        value: x,
        placeholder: a,
        minLength: c,
        maxLength: o,
        required: u,
        onChange: function (e) {
            (g(e), j({ type: n, value: e }));
        },
        autoFocus: v,
    };
    switch (l) {
        case d.qz.SMALL:
            t = (0, s.jsx)(tl.k, { ...A });
            break;
        case d.qz.PARAGRAPH:
            t = (0, s.jsx)(tr.f, { autosize: !0, ...A });
    }
    return null != r ? (0, s.jsx)(ta.e, { title: r, required: u, className: ti.k, error: p, children: t }) : t;
}
var to = n(564771),
    tu = n(338717),
    td = n(96782),
    tm = n(302031),
    th = n(561323);
function tx(e) {
    let { file: t, name: n, size: l, spoiler: r } = e,
        a = i.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [c, u] = i.useState(r),
        [d, m] = i.useState(r);
    r !== c && (u(r), m(r));
    let h = i.useMemo(
        () => () => (0, s.jsx)(td.zB, { mimeType: a, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, a],
    );
    function x(e) {
        return (0, s.jsx)(to.A, {
            className: o()({ [th.V]: e }),
            url: t.url,
            fileName: n ?? D.intl.string(D.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: h,
        });
    }
    return (0, s.jsx)("div", {
        className: th.O,
        children: r
            ? (0, s.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: tu.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => x(e),
              })
            : x(!1),
    });
}
var tg = n(665260),
    tf = n(731068),
    tj = n(591818),
    tp = n(492230),
    tv = n(294520),
    tA = n(127038),
    tC = n(866665),
    tE = n(144165),
    tN = n(891694),
    tS = n(853784);
function tI(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, s.jsx)(tC.m, {
            text: D.intl.string(D.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, s.jsx)("div", {
                className: o()(e.className, tS.FN, { [tS.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, s.jsx)(tN.A, { ref: t, className: tS.i4 }),
            }),
        });
    let l = n.loadingState === d.TD.LOADING ? w.Rv1.LOADING : w.Rv1.ERROR;
    return (0, s.jsx)(tE._, {
        className: o()(e.className, { [tS.gS]: e.hiddenSpoilers }),
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
    ty = n(44788);
function tT(e) {
    let t = e.item.originalItem.media;
    return (0, s.jsx)(tI, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tR(e) {
    let t = e.item.originalItem.media;
    return (0, ty.LL)({
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
function t_(e) {
    let t = e.item.originalItem.media,
        n = tb.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, ty.$o)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tO = n(564107),
    tM = n(394839),
    tL = n(644447);
function tP(e) {
    let { message: t } = (0, h.jc)(),
        n = (0, S.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: i,
            getOnMediaItemContextMenu: c,
        } = (0, tO.X)();
    if (null == t || null == n) return null;
    let o = e.items.map((e) => (0, tj.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: u,
            srcToHandlePreloadImage: d,
            srcToSeekOverride: m,
        } = o.length > 1
            ? (0, tp.o)(o, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function x(e, n) {
        let l = e.originalItem;
        return (0, tv.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let g = e.items.map((e, n) => {
        let l = e.media,
            r = c?.(l),
            s = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, tA.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, tg.Lt)(l.flags, tf.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: x,
                renderImageComponent: tR,
                renderVideoComponent: t_,
                renderVisualPlaceholderComponent: tT,
                renderAudioComponent: w.tEg,
                renderPlaintextFilePreview: w.tEg,
                renderGenericFileComponent: w.tEg,
                gifFavoriteButton: i(l),
                onPlay: function (e, t, n) {},
                canRemoveItem: !1,
                canEditItem: !1,
                onRemoveItem: w.tEg,
                onEditItem: w.tEg,
            },
            o = (0, tL.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (o in u && ((s.onClick = u[o]), (s.handlePreloadImage = d[o]), (s.onSeekRequest = m[o])), s);
    });
    return (0, s.jsx)("div", { children: (0, s.jsx)(tM.A, { items: g, isInAppComponentsV2: !0 }) });
}
var tk = n(210716);
function tw(e) {
    let { divider: t, spacing: n } = e;
    return (0, s.jsx)("div", { className: o()({ [tk.f]: n === d.C8.LARGE, [tk.y]: t }) });
}
var tD = n(46054),
    tU = n(521981),
    tG = n(204255);
let tF = {
        SIZE: { default: void 0, reduced: tG.k2 },
        COLOR: { default: void 0, muted: tG.JF },
        WEIGHT: { default: void 0, reduced: tG.Xj },
    },
    tH = i.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tz() {
    return i.useContext(tH);
}
function tK(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = tz(),
        c = i.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = o()(tF.SIZE[e.size], tF.COLOR[e.color], tF.WEIGHT[e.weight]);
            return ("" !== t && (e.className = o()(tG.zr, t)), e);
        }, [n, l, r, a]);
    return (0, s.jsx)(tH.Provider, { value: c, children: t });
}
let tB = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var tV = n(738262),
    tY = n(165648);
function tW(e) {
    let t,
        { content: n, className: l } = e,
        r =
            ((t = (0, h.jc)()),
            (0, i.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, tU.ko)(t.message, tB)
                              : (0, tU.Le)({ channelId: t.channelId, renderOptions: tB })),
                      tD.A.parse(n, !0, e));
            }, [n, t])),
        a = tz();
    return (0, s.jsx)("div", { className: o()(l, tY.PT, tV.T, a.className), children: r });
}
var tq = n(838541),
    tX = n(292151);
function tJ(e) {
    let { media: t, spoiler: n, description: l } = e,
        r = (0, tA.wz)(t),
        a = (0, tg.Lt)(t.flags, tf.e5.IS_ANIMATED),
        { gifAutoPlay: c } = (0, tO.X)(),
        [u, d] = i.useState(n),
        [m, h] = i.useState(n);
    function x(e) {
        return "IMAGE" !== r
            ? (0, s.jsx)(tI, {
                  className: tX.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, s.jsx)(ty.LL, {
                  containerClassName: o()(tX.Dg, { [tX.rP]: e }),
                  imageClassName: tX._8,
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
                  autoPlay: c && !e,
                  mediaLayoutType: tq.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: a,
              });
    }
    return (
        n !== u && (d(n), h(n)),
        n
            ? (0, s.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: tu.Oc.SPOILER,
                  obscured: m,
                  onToggleObscurity: () => h((e) => !e),
                  children: (e) => x(e),
              })
            : x(!1)
    );
}
var tQ = n(868281);
function tZ() {
    return (0, s.jsx)("div", {
        className: tQ.k,
        children: (0, s.jsx)(eN.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: D.intl.string(D.t.zksHZO),
        }),
    });
}
var t$ = n(666860),
    t0 = n(174459),
    t1 = n(142617),
    t5 = n(237865);
n(321073);
var t2 = n(602853),
    t3 = n(534890),
    t4 = n(831544),
    t8 = n(460905),
    t7 = n(109112),
    t6 = n(664121),
    t9 = n(297264),
    ne = n(606348),
    nt = n(957806),
    nn = n(7584),
    nl = n(548118),
    nr = n(486020),
    na = n(922704),
    ns = n(239895);
function ni(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: r = 0,
            numEmojisSent: a = 0,
            topEmoji: c,
            topGame: o,
            topGuild: u,
            powerLevel: d,
            powerLevelPercentile: m,
        } = t,
        h = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        x = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(a),
        g = (0, nt.oO)(r),
        f = (0, nt.OW)(n),
        j = ne.f[n],
        p = (0, t2.r)(j.primaryColor).hex(),
        v = (0, t2.r)(j.secondaryColor).hex({ opacity: 0.2 }),
        A = (0, S.bG)([q.A], () => q.A.getGuild(u?.guildId)),
        C = new Intl.NumberFormat(D.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        E = (0, nt._V)(m ?? 0),
        I = (0, i.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, s.jsxs)("div", {
        className: ns.kL,
        style: { backgroundColor: p },
        children: [
            (0, s.jsxs)("div", {
                className: ns.Nr,
                children: [
                    (0, s.jsx)("img", { src: f, alt: "", className: ns.LY, style: { backgroundColor: p } }),
                    (0, s.jsxs)("div", {
                        className: ns.M1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: ns.dJ,
                                children: [
                                    (0, s.jsx)(t3.ChatIcon, { color: eE.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eN.E, { variant: "text-sm/medium", className: ns.KA, children: h }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: ns.dJ,
                                children: [
                                    (0, s.jsx)(t4.MicrophoneIcon, { color: eE.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eN.E, { variant: "text-sm/medium", className: ns.KA, children: g }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: ns.dJ,
                                children: [
                                    (0, s.jsx)(t8.n, { color: eE.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eN.E, { variant: "text-sm/medium", className: ns.KA, children: x }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: ns.dJ,
                                children:
                                    null == c
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t7._, { color: eE.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: ns.KA,
                                                      children: D.intl.string(na.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(N.A, {
                                                      emojiId: c.emojiId,
                                                      emojiName: c.emojiName,
                                                      className: ns.iY,
                                                  }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: ns.KA,
                                                      children:
                                                          null == c.emojiId
                                                              ? nn.Ay.convertSurrogateToName(c.emojiName)
                                                              : `:${c.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: ns.dJ,
                                children:
                                    null == o
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t7._, { color: eE.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: ns.KA,
                                                      children: D.intl.string(na.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("img", {
                                                      src: nr.Ay.getApplicationIconURL({
                                                          id: o.applicationId,
                                                          icon: o.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: ns.iY,
                                                  }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: ns.KA,
                                                      children: o.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: ns.dJ,
                                children:
                                    null == u
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t7._, { color: eE.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: ns.KA,
                                                      children: D.intl.string(na.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  null != A
                                                      ? (0, s.jsx)(nl.Ay, {
                                                            guild: A,
                                                            size: nl.Ay.Sizes.SMOL,
                                                            className: ns.iY,
                                                        })
                                                      : (0, s.jsx)(t6.R, { color: eE.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: ns.KA,
                                                      children: u.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: ns.qr,
                style: { backgroundColor: v },
                children: (0, s.jsx)(t9.D, {
                    variant: "display-sm",
                    className: ns.DD,
                    children: D.intl.string(na.default["CdU/PF"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: ns.hC,
                style: { backgroundColor: p },
                children: [
                    (0, s.jsx)("div", {
                        className: ns.TO,
                        children: I.map((e, t) =>
                            (0, s.jsx)(
                                "img",
                                { className: ns.mG, src: e, width: 4, alt: "", style: { opacity: t >= E ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, s.jsxs)("div", {
                        className: ns.JA,
                        children: [
                            (0, s.jsx)(eN.E, { variant: "text-xs/normal", className: ns.KA, children: "LVL" }),
                            (0, s.jsx)(eN.E, { variant: "text-xs/bold", className: ns.KA, children: C.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nc = n(878358),
    no = n(309913);
function nu(e) {
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
                              ...(0, t$.dI)(l),
                              ...(0, t$.H$)(l?.guild_id),
                          }),
                              (0, t5.D)("message_component"));
                      })({ message: n, authorId: n.author.id })
                : void 0;
    switch (t.version) {
        case no.wk.V2025:
            return (0, s.jsx)(ni, { checkpointData: t });
        case no.wk.V2026:
            return (0, s.jsx)(nc.A, { checkpointData: t, onFooterClick: l });
        default:
            return (0, s.jsx)(tZ, {});
    }
}
var nd = n(681154);
class nm extends i.PureComponent {
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
    nx = n(500049),
    ng = n(429913),
    nf = n(355622),
    nj = n(583846),
    np = n(818023),
    nv = n(52133),
    nA = n(803306),
    nC = n(860071),
    nE = n(808380),
    nN = n(409626),
    nS = n(692969),
    nI = n(424994),
    nb = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let ny = { [nE.Y.XBOX]: nI.a4.XBOX, [nE.Y.PLAYSTATION]: nI.a4.PLAYSTATION },
    nT = { [nb.EMBED]: nN.GameProfileSources.Embed };
function nR(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        s = (0, ng.h)(l.extra.application_id),
        i = s?.getIconURL(np.iu.LARGE),
        c = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = ny[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === nd.ContentInventoryEntryType.PLAYED_GAME && (0, nj.JM)(l) && !(0, nj.I5)(l)
            ? D.t.vPg1JT
            : D.t.rPqqts;
    let o = nT[r],
        u = {
            onClick: (0, nS.A)({
                location: o,
                applicationId: l.extra.application_id,
                source: o,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: D.intl.formatToPlainString(D.t["9sZWVp"], { gameName: c }),
        };
    return {
        ...a,
        thumbnailUrl: i,
        title: c,
        titleClickable: u,
        thumbnailClickable: u,
        userDescription: n,
        providerIconProps: t,
    };
}
var n_ = n(205327),
    nO = n(261020),
    nM = n(272984),
    nL = n(970928);
let nP = i.createContext(void 0);
function nk(e, t) {
    return i.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function nw(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = i.useRef([]);
                return (
                    i.useEffect(() => {
                        (0, nv.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nA.wz)(e) : nC.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case nd.ContentInventoryEntryType.TOP_ARTIST:
            return (0, s.jsx)(nG, { entry: t, ...l });
        case nd.ContentInventoryEntryType.TOP_GAME:
            return (0, s.jsx)(nF, { entry: t, ...l });
        case nd.ContentInventoryEntryType.PLAYED_GAME:
            return (0, s.jsx)(nH, { entry: t, ...l });
        case nd.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, s.jsx)(nz, { entry: t, ...l });
        case nd.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, s.jsx)(nK, { entry: t, ...l });
        case nd.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, s.jsx)(nU, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function nD(e) {
    let { errorFallback: t, ...n } = e;
    return (0, s.jsx)(nm, { fallback: t, children: (0, s.jsx)(nw, { ...n }) });
}
function nU(e) {
    let { entry: t, children: n, ...l } = e,
        r = nk(
            (function (e) {
                let { entry: t } = e,
                    n = (0, ng.h)(t.extra.application_id),
                    l = n?.getIconURL(np.iu.LARGE),
                    r = t.extra.activity_name,
                    a = (0, nj.Hd)(t) ? D.t.vPg1JT : D.t.rPqqts,
                    s = {
                        onClick: function () {
                            nh.R(nx.s4.TEXT, nf.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: D.intl.formatToPlainString(D.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: s, thumbnailClickable: s, userDescription: a };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nP.Provider, { value: r, children: n });
}
function nG(e) {
    let { entry: t, children: n, ...l } = e,
        r = nk(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: r, image_url: a } = n.extra.media,
                    s = n.extra.artist.name,
                    i = {
                        onClick: () => (0, nO.n)(nM.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    c = {
                        onClick: () => (0, nO.n)(nM.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: s }),
                    };
                return (
                    r === n_.X.SPOTIFY && (t = { type: nI.a4.SPOTIFY }),
                    {
                        ...l,
                        title: s,
                        thumbnailUrl: a,
                        titleClickable: c,
                        subtitleClickable: i,
                        thumbnailClickable: i,
                        userDescription: D.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nP.Provider, { value: r, children: n });
}
function nF(e) {
    let { entry: t, children: n, ...l } = e,
        r = nk(nR({ entry: t, ...l }), l.location);
    return (0, s.jsx)(nP.Provider, { value: r, children: n });
}
function nH(e) {
    let { entry: t, children: n, ...l } = e,
        r = nk(nR({ entry: t, ...l }), l.location);
    return (0, s.jsx)(nP.Provider, { value: r, children: n });
}
function nz(e) {
    let { entry: t, children: n, ...l } = e,
        r = nk(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = (0, ng.h)(n.extra.application_id),
                    a = r?.getIconURL(128),
                    s = (0, nL.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        np.iu.LARGE,
                        np.iu.LARGE,
                    ]),
                    c = n.extra.media_title,
                    o = n.extra.media_subtitle,
                    u = (0, nj.Hd)(n) ? D.t["LH+Z3y"] : D.t.YuKgml,
                    d = { type: nI.a4.CRUNCHYROLL },
                    m = i.useMemo(() => {
                        if (null == n.extra.url) return;
                        let e = tb.A.safeParseWithQuery(n.extra.url);
                        if (null != e && null != e.protocol && null != e.hostname) return e;
                    }, [n.extra.url]);
                return (
                    null != m &&
                        (t = {
                            href: tb.A.format(m),
                            ariaDescription: D.intl.formatToPlainString(D.t.aFFQ3g, { title: c }),
                        }),
                    {
                        ...l,
                        thumbnailUrl: s ?? a,
                        title: c,
                        titleClickable: t,
                        thumbnailClickable: t,
                        subtitle: o,
                        userDescription: u,
                        providerIconProps: d,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nP.Provider, { value: r, children: n });
}
function nK(e) {
    let { entry: t, children: n, ...l } = e,
        r = nk(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = n.extra.entries[0].media,
                    a = r.artists[0],
                    { title: s, provider: i, image_url: c } = r,
                    o = a.name,
                    u = {
                        onClick: () => (0, nO.n)(nM.M0.TRACK, r.external_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: s }),
                    },
                    d = {
                        onClick: () => (0, nO.n)(nM.M0.ARTIST, a.external_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: o }),
                    };
                return (
                    i === n_.X.SPOTIFY && (t = { type: nI.a4.SPOTIFY }),
                    {
                        ...l,
                        title: s,
                        subtitle: o,
                        thumbnailUrl: c,
                        titleClickable: u,
                        subtitleClickable: d,
                        thumbnailClickable: u,
                        userDescription: D.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nP.Provider, { value: r, children: n });
}
var nB = n(28863),
    nV = n(531142),
    nY = n(939249),
    nW = n(43990),
    nq = n(696986),
    nX = n(342952),
    nJ = n(576757),
    nQ = n(291594),
    nZ = n(22869),
    n$ = n(959),
    n0 = n(968544);
function n1(e) {
    let { entry: t, channel: n, className: l } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        {
            displayParticipants: c,
            participant1: u,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, nJ.A)(t),
        x = [u, d];
    return (0, s.jsxs)("div", {
        className: o()(n0.kL, l),
        children: [
            c.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(n$.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, s.jsx)(nY.D, {
                                      innerRef: r,
                                      className: n0.vk,
                                      ...e,
                                      children: (0, s.jsx)(nX.A, {
                                          maxUsers: 3,
                                          users: c,
                                          size: eq._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, s.jsx)(nq.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, s.jsx)(t9.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: o()(n0.IY, n0.Io),
                scaleFontToUserSetting: !0,
                children: D.intl.format(D.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, x[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, x[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, s.jsx)(nZ.A, { text: e, user: x[0], channel: n }, t),
                    name1Hook: (e, t) => (0, s.jsx)(nZ.A, { text: e, user: x[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, s.jsx)(
                            n$.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, s.jsx)(nQ.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, s.jsx)(eN.E, {
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
    n2 = n(347306),
    n3 = n(790381),
    n4 = n(266080),
    n8 = n(121090),
    n7 = n(18282);
let n6 = { [nI.a4.SPOTIFY]: n8.A, [nI.a4.CRUNCHYROLL]: n2.k, [nI.a4.XBOX]: n4.A, [nI.a4.PLAYSTATION]: n3.A },
    n9 = {
        [nI.a4.SPOTIFY]: () => D.intl.string(D.t["0ZB/XE"]),
        [nI.a4.CRUNCHYROLL]: () => D.intl.string(D.t.jdJYXw),
        [nI.a4.XBOX]: () => D.intl.string(D.t.Nfvo72),
        [nI.a4.PLAYSTATION]: () => D.intl.string(D.t.fFl4jo),
    };
function le(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = n6[t];
    if (null == r) return null;
    let a = n ?? n9[t]?.();
    return (0, s.jsx)(n7.A, { Icon: r, ...l, "aria-label": a });
}
var lt = n(140651),
    ln = n(506326),
    ll = n(915089),
    lr = n(818348),
    la = n(167848),
    ls = n(154342);
function li(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, ll.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: i } = l;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(u.A, { id: a, children: e }),
                (0, s.jsx)(nB.Anchor, { className: o()(t, n), href: i, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: i, ariaDescription: c } = l ?? {};
    return (0, s.jsxs)(nV.g.Provider, {
        value: null == i,
        children: [
            null != i && null != c && (0, s.jsx)(u.A, { id: a, children: c }),
            (0, s.jsx)(nY.D, {
                onClick: i,
                "aria-describedby": null == i ? void 0 : a,
                className: o()(t, null != i && n),
                children: r,
            }),
        ],
    });
}
function lc(e) {
    let { clickable: t, ...n } = e;
    return (0, s.jsx)(li, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: ls.v });
}
function lo(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: r,
            thumbnailUrl: a,
            titleClickable: i,
            subtitleClickable: c,
            thumbnailClickable: u,
            providerIconProps: d,
            style: m = {},
        } = e,
        h = (0, ll.GV)(),
        { primaryColor: x, secondaryColor: g } = (0, lt.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${x}, ${g})`),
        (0, s.jsx)(nW.N, {
            theme: lr.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, s.jsxs)("figure", {
                    "aria-roledescription": D.intl.string(D.t.zFfUhF),
                    "aria-labelledby": h,
                    className: o()(la.kL, e),
                    style: m,
                    children: [
                        (0, s.jsx)(li, {
                            className: la.iT,
                            clickableClassName: la.vk,
                            clickable: u,
                            children: (0, s.jsx)(n5.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, s.jsxs)("div", {
                            className: la.op,
                            children: [
                                (0, s.jsx)(n1, { channel: n, entry: t, className: la.VV }),
                                (0, s.jsx)(nq.h, { size: 2 }),
                                (0, s.jsx)(lc, {
                                    clickable: i,
                                    className: la.sd,
                                    children: (0, s.jsx)(t9.D, {
                                        id: h,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: o()(la.ek, la.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(nq.h, { size: 2 }),
                                              (0, s.jsx)(lc, {
                                                  clickable: c,
                                                  className: la.sd,
                                                  children: (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/normal",
                                                      className: o()(la.c1, la.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)(ln.iT, { className: la.jp, entry: t, location: ln.N5.EMBED }),
                            ],
                        }),
                        (0, s.jsx)("div", { className: la.Y, children: null != d ? (0, s.jsx)(le, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lu(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = i.useContext(nP)),
            es()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, s.jsx)(lo, { ...r, entry: n, channel: l });
}
function ld(e) {
    let t = (0, h.jc)();
    es()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, S.bG)([W.A], () => W.A.getChannel(n));
    return (
        es()(null != l, "channel must be defined"),
        (0, s.jsx)(nD, {
            location: nb.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, s.jsx)(lu, { ...e, channel: l }),
        })
    );
}
var lm = n(689592);
function lh(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, h.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, s.jsxs)("div", {
              className: lm.kL,
              children: [
                  (0, s.jsx)("div", { className: lm.Y_, children: n(t) }),
                  null != l ? (0, s.jsx)(ec.Ay, { className: lm.z3, message: l, component: e }) : null,
              ],
          });
}
var lx = n(317097),
    lg = n(796951);
function lf(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, c] = i.useState(l),
        [u, d] = i.useState(l);
    function m(e) {
        return (0, s.jsx)(x.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, s.jsx)("div", {
                    ref: l,
                    className: o()(lg.kL, { [lg.dK]: e, [lg._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, lx.$k)(n, !0) : void 0 },
                    children: (0, s.jsx)(tK, { size: "reduced", children: r(t) }),
                }),
        });
    }
    return (l !== a && (c(l), d(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, s.jsx)(tm.Ay, {
                type: tm.Ay.Types.ATTACHMENT,
                reason: tu.Oc.SPOILER,
                obscured: u,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var lj = n(244367),
    lp = n(405388);
function lv(e) {
    let { label: t, description: n, component: l, renderComponent: r } = e,
        a = (0, h.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, s.jsxs)(ta.e, {
              title: t,
              required: l.required,
              error: a,
              children: [
                  null != n && (0, s.jsx)(lj.a, { type: lj.t.DESCRIPTION, className: lp.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var lA = n(572891);
function lC(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, i] = (0, x.zn)(),
        c = (0, x.Hq)(i),
        u = n.type === d.I5.BUTTON;
    return (0, s.jsxs)("div", {
        className: lA.uW,
        ref: a,
        children: [
            (0, s.jsxs)("div", {
                className: lA.Y_,
                children: [
                    (0, s.jsx)("div", { className: o()(lA.zt, { [lA.uf]: u }), children: l(t) }),
                    (0, s.jsx)("div", {
                        className: o()(lA.LP, { [lA.HQ]: c }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, s.jsx)(B, { ...e });
                                case d.I5.THUMBNAIL:
                                    return (0, s.jsx)(tJ, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != r ? (0, s.jsx)(ec.Ay, { message: r, component: e }) : null,
        ],
    });
}
var lE = n(359886);
function lN(e) {
    return e.map((e, t) =>
        (0, s.jsxs)(s.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, s.jsx)(lh, { ...t, renderComponents: lN }, n);
                        case d.I5.BUTTON:
                            return (0, s.jsx)(B, { ...t }, n);
                        case d.I5.STRING_SELECT:
                            return (0, s.jsx)(tn, { ...t }, n);
                        case d.I5.CHANNEL_SELECT:
                            return (0, s.jsx)(ef, { ...t }, n);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, s.jsx)(e2, { ...t }, n);
                        case d.I5.TEXT_INPUT:
                            return (0, s.jsx)(tc, { ...t }, n);
                        case d.I5.SECTION:
                            return (0, s.jsx)(lC, { ...t, renderComponents: lN }, n);
                        case d.I5.TEXT_DISPLAY:
                            return (0, s.jsx)(tW, { ...t }, n);
                        case d.I5.MEDIA_GALLERY:
                            return (0, s.jsx)(tP, { ...t }, n);
                        case d.I5.THUMBNAIL:
                            return (0, s.jsx)(tJ, { ...t }, n);
                        case d.I5.FILE:
                            return (0, s.jsx)(tx, { ...t }, n);
                        case d.I5.SEPARATOR:
                            return (0, s.jsx)(tw, { ...t }, n);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, s.jsx)(ld, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, s.jsx)(lf, { ...t, renderComponents: lN }, n);
                        case d.I5.LABEL:
                            return (0, s.jsx)(lv, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, s.jsx)(eY, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            return (0, s.jsx)(nu, { ...t }, n);
                        case d.I5.RADIO_GROUP:
                            return (0, s.jsx)(e7, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, s.jsx)(eA, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, s.jsx)(ep, { ...t }, n);
                        default:
                            return (0, s.jsx)(tZ, {}, n);
                    }
                })(e, t.toString()),
                (0, s.jsx)(u.A, { children: "," }),
            ],
        }),
    );
}
function lS(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [r, a] = (0, x.zn)();
    return 0 === l.length
        ? null
        : (0, s.jsx)(h.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, s.jsx)(x.O7.Root, {
                  containerInnerWidth: a,
                  children: (0, s.jsx)("div", {
                      style: { width: "100%" },
                      ref: r,
                      children: (0, s.jsx)(x.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, s.jsx)("div", {
                                  ref: e,
                                  className: o()([lE.k, { [lE.z]: (0, m._c)(t) }]),
                                  children: lN(l),
                              }),
                      }),
                  }),
              }),
          });
}

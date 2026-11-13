t.d(n, { Ay: () => lS, fD: () => lE });
var l,
    r,
    a,
    i = t(477900),
    s = t(582128),
    o = t(503698),
    u = t.n(o),
    c = t(140735),
    d = t(155718),
    m = t(383233),
    h = t(911408),
    p = t(953756),
    x = t(435558),
    f = t(862482),
    g = t(165862),
    C = t(477782),
    j = t(34188),
    v = t(811893),
    N = t(863610),
    I = t(442433),
    A = t(565645);
t(938796);
var y = t(855986),
    E = t(620632),
    S = t(192308),
    b = t(73153),
    T = t(163437),
    L = t(97352),
    O = t(67480),
    R = t(328968),
    _ = t(448645),
    k = t(580630),
    P = t(963179),
    M = t(168393),
    U = t(652215),
    w = t(792996);
let D = (0, y.UT)([O.A, L.A, R.A], {
    getQueryId: U.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let n = O.A.get(e),
            t = L.A.getForSKU(e) ?? [],
            l = R.A.getForSKU(e),
            r = O.A.getParentSKU(e);
        return null == n || null == l || (null != n && n.type === U.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: n, storeListing: l, subscriptionPlans: t };
    },
    load: async (e) => {
        if (null == e) return;
        let n = { url: U.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: t } = await E.Bo.get(n);
        (b.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: t.store_listings }),
            null != t.subscription_plans &&
                b.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: t.subscription_plans,
                }),
            null != t.skus &&
                t.skus.forEach((e) => {
                    b.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                }));
    },
});
var F = t(957565),
    z = t(889558),
    B = t(489414),
    H = t(684946);
function G(e) {
    let { url: n, onSelect: t } = e;
    return F.p5 && null != n
        ? (0, i.jsx)(g.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: I.Z_,
              "aria-label": w.intl.string(w.t.tvTXy8),
              onSelect: t,
              children: (0, i.jsx)(C.rX, {
                  children: (0, i.jsx)(C.Dr, {
                      id: "copy",
                      label: w.intl.string(w.t.uHhnfa),
                      action: () => (0, F.C)(n),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let n,
        { label: t, style: l, disabled: r, emoji: a, url: o, skuId: c } = e,
        { executeStateUpdate: m, visualState: p, isDisabled: g } = (0, h.At)(e),
        C = (function (e) {
            let { data: n } = D(e),
                t = n?.parentSku,
                l = n?.sku,
                r = n?.storeListing,
                a = n?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.qf)((e) => {
                        let { onClose: n, transitionState: t } = e;
                        return (0, i.jsx)(M.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, T.bg)(l.flags) ? "user" : "guild",
                            onClose: n,
                            skuId: l.id,
                            transitionState: t,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                u = s.useCallback(() => {
                    if (null == l) return null;
                    (0, S.qf)((e) => {
                        let { onClose: n, transitionState: t } = e;
                        return (0, i.jsx)(P.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: n,
                            transitionState: t,
                        });
                    });
                }, [l]);
            if (null != l && null != r && (null == l || l.type !== U.Puh.SUBSCRIPTION || null != t)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: w.intl.string(w.t.CHa0vN) };
                if (l.type === U.Puh.SUBSCRIPTION) {
                    if (null == a || 0 === a.length) return { disabled: !0, label: w.intl.string(w.t.CHa0vN) };
                    let e = a[0],
                        n = (0, _.y8)(e.id);
                    return {
                        disabled: !1,
                        label: w.intl.formatToPlainString(w.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, k.$g)(n.amount, n.currency),
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
                              price: (0, k.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: u,
                      };
            }
        })(c),
        y = null != c && l === d.in.PREMIUM,
        E = y && C?.disabled,
        b = y ? C?.label : t,
        L = null != a,
        O = null != b && b.length > 0,
        R = l === d.in.LINK && null != o && o.length > 0,
        F = p === B.BB.LOADING || (y && null == C);
    return (
        (n = R
            ? () => {
                  (0, z.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : y
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
            disabled: r || p === B.BB.DISABLED || g || E,
            onClick: n,
            onContextMenu: (e) => {
                R && (0, I.jA)(e, (e) => (0, i.jsx)(G, { ...e, url: o }));
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
                                  children: (0, i.jsx)(j.ShopIcon, { size: "xs", color: "white" }),
                              })
                            : null,
                        L
                            ? (0, i.jsx)(A.A, {
                                  className: u()({ [H.MR]: O }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        O ? (0, i.jsx)("div", { className: H.Pf, children: b }) : null,
                        R
                            ? (0, i.jsx)(v.WindowLaunchIcon, { size: "xs", color: "currentColor", className: H.LE })
                            : null,
                    ],
                }),
                F
                    ? (0, i.jsx)("div", { className: H.Lq, children: (0, i.jsx)(N.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var Y = t(678708),
    K = t(713654),
    W = t(734057),
    X = t(71393),
    q = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    Z = t(47167),
    $ = t(696451),
    J = t(317525),
    Q = t(994500),
    ee = t(287809),
    en = t(997625),
    et = t(403362),
    el = t(562153);
function er(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = X.A.getGuild(n);
    return e
        .map((e) => {
            switch (e.type) {
                case q.USER: {
                    let n = ee.default.getUser(e.id);
                    if (null == n) return null;
                    let t = null != l ? $.Ay.getNick(l.id, n.id) : void 0;
                    return { type: B.iw.USER, value: n.id, label: t ?? n.globalName ?? n.username };
                }
                case q.ROLE: {
                    if (null == l) return null;
                    let n = J.A.getRole(l.id, e.id);
                    if (null == n) return null;
                    return { type: B.iw.ROLE, value: n.id, label: n.name };
                }
                case q.CHANNEL: {
                    if (null == l) return null;
                    let n = W.A.getChannel(e.id);
                    if (null == n || n.guild_id !== l.id || (t.length > 0 && !t.includes(n.type))) return null;
                    return { type: B.iw.CHANNEL, value: n.id, label: (0, Z.m1)(n, ee.default, Q.A) };
                }
            }
        })
        .filter(et.Vq);
}
t(935548);
var ea = t(284009),
    ei = t.n(ea),
    es = t(444550),
    eo = t(594808),
    eu = t(257249),
    ec = t(483334),
    ed = t(219025);
function em(e) {
    let { icon: n, iconSize: t } = e;
    return (0, i.jsx)("div", { className: ec.zc, style: { height: t, width: t }, children: n });
}
var eh = (((r = {})[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), r);
function ep(e) {
    let {
            selectActionComponent: n,
            queryOptions: t,
            renderIcon: l,
            renderOptionLabel: r,
            defaultValues: a,
            onClose: o,
        } = e,
        { type: c, customId: m, maxValues: p, disabled: x } = n,
        f = (0, eu.c7)(n),
        [g, C] = s.useState(!1),
        [j, v] = s.useState(!1),
        [N, I] = s.useState(new Map(a?.map((e) => [e.value, e]))),
        [A, y] = s.useState(new Set(N.keys())),
        E = s.useRef((a ?? []).map((e) => e.value)),
        S = s.useRef(c),
        b = s.useRef(m),
        [T, L] = s.useState(0);
    s.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => E.current.includes(e)) &&
            E.current.every((n) => e.includes(n)) &&
            c === S.current &&
            m === b.current
        )
            return;
        ((E.current = e), (S.current = c), (b.current = m));
        let n = new Map(a?.map((e) => [e.value, e]));
        (I(n), y(new Set(n.keys())), L((e) => e + 1));
    }, [a, c, m]);
    let O = (0, h.jc)();
    ei()(null != O, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: R,
            executeStateUpdate: _,
            visualState: k,
            isDisabled: P,
            error: M,
        } = O.useComponentState(n, N.size > 0 ? { type: c, selectedOptions: Array.from(N.values()) } : void 0),
        U = null != O.modal,
        w = k === B.BB.LOADING;
    s.useEffect(() => {
        if (
            R?.type === d.I5.USER_SELECT ||
            R?.type === d.I5.ROLE_SELECT ||
            R?.type === d.I5.MENTIONABLE_SELECT ||
            R?.type === d.I5.CHANNEL_SELECT
        ) {
            let e = new Map(R.selectedOptions.map((e) => [e.value, e]));
            (I(e), y(new Set(e.keys())));
        }
    }, [R]);
    let D = s.useCallback(() => {
        _({ type: c, selectedOptions: Array.from(N.values()) }) && y(new Set(N.keys()));
    }, [_, c, N]);
    s.useEffect(() => {
        g || j || (N.size === A.size && Array.from(N.keys()).every((e) => A.has(e))) || D();
    }, [g, j, A, N, D]);
    let F = 0 === N.size || g,
        z = {
            isProcessing: w,
            isDisabled: x || k === B.BB.DISABLED || P,
            wrapperClassName: u()(ec.Lt, { [ec.zE]: U }),
            options: function (e) {
                return new Promise((n) => {
                    n(t(e));
                });
            },
            filter: !1,
            placeholder: F ? f : void 0,
            onClose: () => {
                (C(!1), o?.());
            },
            onOpen: () => C(!0),
            onBlur: () => v(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, n) {
                let { inPill: t } = n,
                    r = t ? 16 : 24,
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
                    p > 1
                        ? (0, i.jsx)(
                              es.p,
                              {
                                  value: Array.from(N.values()),
                                  onChange: function (e) {
                                      (g || v(!0), I(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({ [ec.R]: !F }),
                                  closeOnSelect: !1,
                                  ...z,
                                  "data-migration-pending": !0,
                              },
                              T,
                          )
                        : (0, i.jsx)(
                              es.p,
                              {
                                  value: [...N.values()][0],
                                  onChange: function (e) {
                                      return I(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...z,
                                  "data-migration-pending": !0,
                              },
                              T,
                          ),
            }),
            null == M || U ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(M), className: ed.z3 }),
        ],
    });
}
var ex = t(726088);
function ef(e) {
    let { channelTypes: n } = e,
        t = (0, h.jc)(),
        l = t?.channelId,
        r = W.A.getChannel(l),
        a = X.A.getGuild(r?.getGuildId()),
        o = s.useMemo(() => er(e.defaultValues, a?.id, n), [e.defaultValues, a, n]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (e) {
            let t;
            return null == (t = W.A.getChannel(l))
                ? []
                : en.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: t,
                      channelTypes: n,
                      limit: 15,
                  }).channels.map((e) => ({ type: B.iw.CHANNEL, value: e.id, label: (0, Z.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, n) {
            let t = W.A.getChannel(e?.value);
            if (null == t) return null;
            let l = t.type === U.rbe.GUILD_CATEGORY ? Y.FolderIcon : (0, K.gU)(t);
            return null != l ? (0, i.jsx)(l, { size: "custom", color: "currentColor", width: n, height: n }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, i.jsx)("span", { className: ex.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var eg = t(150934);
function eC(e) {
    let { type: n, default: t } = e,
        l = (0, h.jc)();
    ei()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != t ? { type: n, value: t } : void 0),
        o = s.useMemo(() => r?.type === n && r.value, [r, n]),
        u = l.getParents(e)?.[0],
        c = u?.type === d.I5.LABEL ? u : void 0;
    return (
        ei()(null != c, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(eg.S, {
            label: c.label,
            description: c.description,
            checked: o,
            onChange: function (e) {
                a({ type: n, value: e });
            },
        })
    );
}
var ej = t(167417);
function ev(e) {
    let { type: n, options: t, required: l, maxValues: r } = e,
        a = s.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        { state: o, executeStateUpdate: u } = (0, h.At)(e, a.length > 0 ? { type: n, values: a } : void 0),
        c = s.useMemo(() => (o?.type === n ? o.values : []), [o, n]);
    return (0, i.jsx)(ej.$, {
        options: t.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: c.length >= r && !c.includes(e.value),
        })),
        selectedValues: c,
        onChange: function (e) {
            u({ type: n, values: e });
        },
        required: l,
    });
}
var eN = t(81369),
    eI = t(646514),
    eA = t(834730),
    ey = t(628284),
    eE = t(241326),
    eS = t(608299),
    eb = t(307955),
    eT = t(23658),
    eL = t(851023),
    eO = t(198554),
    eR = t(914905),
    e_ = t(101555),
    ek = t(424170),
    eP = t(409481),
    eM = t(274652),
    eU = t(31717),
    ew = t(255438),
    eD = t(453771),
    eF = t(518960),
    ez = t(382287),
    eB = t(522602),
    eH = t(283655);
function eG(e) {
    let { dropping: n, fileInputRef: t, minValues: l, maxValues: r, types: a, guildId: s } = e,
        o = (0, eP.C)((0, eD.o2)(s)),
        c = (0, ew.Xq)(o / 1024, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: eH.pp,
        children: [
            (0, i.jsxs)("div", {
                className: u()(eH.e8, { [eH.R]: n }),
                children: [
                    (0, i.jsx)(eN.FileUpIcon, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eA.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        children: w.intl.format(w.t.y68I8P, {
                            onClick: () => t.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, i.jsx)(eA.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: (0, eu.fw)(l, r, a, c),
                    }),
                ],
            }),
            n &&
                (0, i.jsxs)("div", {
                    className: u()(eH.e8, eH.r$),
                    children: [
                        (0, i.jsx)(eN.FileUpIcon, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, i.jsx)(eA.E, {
                            variant: "body-md/normal",
                            color: "text-strong",
                            children: w.intl.string(w.t["8OJlsH"]),
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
            (0, i.jsx)(ey.CircleCheckIcon, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, i.jsx)(eA.E, {
                variant: "body-md/normal",
                color: "text-strong",
                children: w.intl.string(w.t["0PhgpK"]),
            }),
            (0, i.jsx)(eA.E, { variant: "body-xs/normal", color: "text-muted", children: w.intl.string(w.t.HYg2Hn) }),
        ],
    });
}
function eY(e) {
    let { upload: n, handleRemoveFile: t, singleFileInput: l } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: u()(eH.NJ, { [eH.j1]: l }),
            children: [
                (0, i.jsx)(eR.J, { upload: n, size: l ? eO.L.XSMALL : eO.L.XXSMALL }),
                (0, i.jsx)(eA.E, {
                    variant: `body-${l ? "md" : "xs"}/medium`,
                    className: eH.iW,
                    children: n.filename ?? w.intl.string(w.t.ZMirp0),
                }),
                (0, i.jsx)(e_.Ay, {
                    className: eH.BX,
                    children: (0, i.jsx)(eL.A, {
                        className: eH.XI,
                        tooltip: w.intl.string(w.t.N86XcP),
                        onClick: () => t(n.id),
                        dangerous: !0,
                        children: (0, i.jsx)(eE.TrashIcon, { size: "xs", color: "currentColor", className: eH.gE }),
                    }),
                }),
            ],
        },
        n.id,
    );
}
function eK(e) {
    let { minValues: n, maxValues: t } = e,
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
            error: I,
        } = (function (e) {
            let n = (0, h.jc)();
            ei()(null != n, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let t = n.channelId;
            ei()(null != t, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = n.useComponentState(e),
                i = s.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = eB.A.getUploads(t, eU.C.InteractionModal),
                u = s.useMemo(() => i.map((e) => o.find((n) => n.id === e)).filter((e) => null != e), [i, o]),
                c = s.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                s.useEffect(() => {
                    i.length > u.length && c(i.filter((e) => u.some((n) => n.id === e)));
                }, [i, u, c]),
                { uploadIds: i, setUploadIds: c, currentUploads: u, error: a }
            );
        })(e),
        A = (0, y.bG)([W.A], () => W.A.getBasicChannel(m));
    ei()(null != A, "FileUploadActionComponent requires a valid channel");
    let E = s.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0));
        }, []),
        S = s.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        b = s.useCallback(
            (e, n) => {
                if (0 === e.length) return;
                if (j.length + e.length > t)
                    return (0, eT.openUploadError)({
                        title: w.intl.string(w.t.wOr6hB),
                        help: w.intl.formatToPlainString(w.t.dy6viJ, { maxValues: t }),
                    });
                if ((0, ez.fJ)({ files: e, guildId: A.guild_id, canDeferSizeChecks: !1 })) return (0, eF.V)(A, e);
                if (!g(e.map((e) => e.name))) return C();
                let l = e.map((e) => {
                    let t = (0, eu.so)(p),
                        l = { id: t, file: e, platform: eM.x.WEB, origin: n };
                    return (
                        eS.A.setFile({
                            channelId: m,
                            id: t,
                            file: l,
                            draftType: eU.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        t
                    );
                });
                v(j.concat(l));
            },
            [j, t, A, v, p, m, g, C],
        ),
        T = s.useCallback(
            (e) => {
                (e.preventDefault(), o(!1), b(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [b],
        );
    function L(e) {
        null == m || (eS.A.remove(m, e, eU.C.InteractionModal), v(j.filter((n) => n !== e)));
    }
    return (s.useEffect(() => {
        let e = r.current;
        return (
            e?.addEventListener("dragover", E),
            e?.addEventListener("dragleave", S),
            e?.addEventListener("drop", T),
            () => {
                (e?.removeEventListener("dragover", E),
                    e?.removeEventListener("dragleave", S),
                    e?.removeEventListener("drop", T));
            }
        );
    }, [E, S, T]),
    1 === t && 1 === N.length)
        ? (0, i.jsx)(eY, { upload: N[0], handleRemoveFile: L, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: r,
              className: u()(eH.kL, { [eH.Ke]: a, [eH.z3]: null != I }),
              children: [
                  j.length >= t
                      ? (0, i.jsx)(eV, {})
                      : (0, i.jsx)(eG, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: n,
                            maxValues: t,
                            types: f,
                            guildId: A.guild_id,
                        }),
                  N.length > 0 &&
                      (0, i.jsx)("div", {
                          className: eH.aq,
                          children: N.map((e) => (0, i.jsx)(eY, { upload: e, handleRemoveFile: L }, e.id)),
                      }),
                  (0, i.jsx)(eb.A, {
                      ref: l,
                      onChange: function (e) {
                          (b(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
                      },
                      multiple: t > 1,
                      filters: x.length > 0 ? [{ name: "", extensions: x }] : void 0,
                      tabIndex: -1,
                      className: eH.Fg,
                  }),
              ],
          });
}
var eW = t(97808),
    eX = t(778712),
    eq = t(957485),
    eZ = t(950305),
    e$ = t(297413),
    eJ = t(376304),
    eQ = t(462446);
let e0 = 0;
function e1() {
    let e = null,
        n = (n) => {
            let t = `${e0}:${n}`;
            return t !== e && ((e = t), !0);
        };
    return (
        (n.reset = () => {
            e = null;
        }),
        n
    );
}
b.h.subscribe("CONNECTION_OPEN", () => {
    e0 += 1;
});
var e5 = t(386784),
    e8 = t(69282),
    e2 = t(657048),
    e4 = t(290863);
function e3(e) {
    let n = (0, h.jc)(),
        t = n?.channelId,
        l = W.A.getChannel(t),
        r = X.A.getGuild(l?.getGuildId()),
        a = (0, e5.A)(r?.id, 1e3),
        o = (0, eQ.A)(r?.id);
    (0, y.bG)([$.Ay], () => $.Ay.getMemberVersion());
    let u = (function () {
            let [e] = s.useState(e1);
            return e;
        })(),
        c = s.useMemo(() => er(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (n) {
            let l = (function (e, n, t) {
                let { request: l = !0 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = W.A.getChannel(t);
                if (null == r) return [];
                let a = e === d.I5.USER_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    i = e === d.I5.ROLE_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    { users: s, roles: o } = en.Ay.queryMentionResults({
                        query: n,
                        channel: r,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: a,
                        canMentionRoles: i,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        request: l,
                        limit: 15,
                    }),
                    u = s.map((e) => {
                        let n = el.Ay.getNickname(r.getGuildId(), t, e.user);
                        return { type: B.iw.USER, value: e.user.id, label: n ?? e.user.globalName ?? e.user.username };
                    }),
                    c = o.map((e) => ({ type: B.iw.ROLE, value: e.id, label: e.name }));
                return [...u, ...c];
            })(e.type, n, t, { request: u(n) });
            return (o(l.flatMap((e) => (e.type === B.iw.USER ? [e.value] : []))), l);
        },
        renderIcon: function (e, n) {
            let t = n === eh.PILL_ICON_SIZE;
            if (e?.type === B.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, i.jsx)(eW.eu, {
                    size: t ? eX._3.SIZE_16 : eX._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, n),
                    status: t ? null : e4.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === B.iw.ROLE) {
                let t = null != r ? J.A.getRole(r.id, e.value) : void 0;
                if (null == t || null == r) return;
                let l = (0, eJ.fm)(r, t) ? (0, e8.ox)(t, n) : null;
                return null != l
                    ? (0, i.jsx)(e2.A, { ...l })
                    : (0, i.jsx)(eq.ShieldUserIcon, {
                          size: "custom",
                          color: t.colorString ?? U.TpD,
                          height: n,
                          width: n,
                      });
            }
        },
        renderOptionLabel: function (e) {
            let n = null;
            if (e.type === B.iw.USER) {
                let t = ee.default.getUser(e.value);
                null != t &&
                    (n = (0, i.jsx)(e$.A, {
                        className: ex.Tc,
                        usernameClass: ex.Xh,
                        discriminatorClass: ex.D2,
                        botClass: ex.Od,
                        user: t,
                        forceUsername: !0,
                    }));
            } else if (e.type === B.iw.ROLE) {
                let t = null != r ? J.A.getRole(r.id, e.value) : void 0,
                    l = null == t ? null : a?.[t.id];
                null != l &&
                    (n = (0, i.jsxs)("div", {
                        className: ex.Ly,
                        children: [
                            (0, i.jsx)(eZ.UserIcon, { size: "sm", color: "currentColor", className: ex.jh }),
                            (0, i.jsx)("span", { className: ex.NT, children: l }),
                        ],
                    }));
            }
            return (0, i.jsxs)("span", {
                className: ex.Pf,
                children: [(0, i.jsx)("span", { className: ex.QK, children: e.label }), n],
            });
        },
        defaultValues: c,
        onClose: function () {
            (u.reset(), o.cancel());
        },
    });
}
var e7 = t(771871),
    e6 = t(821609),
    e9 = t(897132);
function ne(e) {
    let { type: n, options: t, required: l } = e,
        r = s.useMemo(() => t.find((e) => e.default)?.value, [t]),
        { state: a, executeStateUpdate: o } = (0, h.At)(e, null != r ? { type: n, value: r } : void 0),
        c = s.useMemo(() => (a?.type === n ? a.value : null), [a, n]),
        d = null != c,
        m = s.useMemo(() => t.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [t]);
    function p(e) {
        o({ type: n, value: e });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e7.z, { options: m, value: c ?? "", onChange: p, required: l }),
            !l &&
                (0, i.jsx)("div", {
                    className: u()(e9.H, { [e9.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e6.$, {
                        text: w.intl.string(w.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => p(null),
                    }),
                }),
        ],
    });
}
var nn = t(843282);
function nt(e) {
    let { emoji: n, label: t, description: l, isDisabled: r, isOffset: a } = e,
        s = u()(ed._A, { [ed.r9]: r, [ed.cY]: null == n && a });
    return (0, i.jsxs)("div", {
        className: ed.uK,
        children: [
            null != n
                ? (0, i.jsx)(A.A, { className: ed.Zg, emojiId: n.id, emojiName: n.name, animated: n.animated })
                : null,
            (0, i.jsxs)("div", {
                className: s,
                children: [
                    (0, i.jsx)("strong", { className: ed.Pf, children: t }),
                    null != l ? (0, i.jsx)("span", { className: ed.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function nl(e) {
    let { emoji: n, label: t } = e;
    return (0, i.jsx)("div", {
        className: ed.uK,
        children: (0, i.jsxs)("div", {
            className: u()(ed.Uq, ed.u9),
            children: [
                null != n
                    ? (0, i.jsx)(A.A, {
                          className: ed.Zg,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated,
                      })
                    : null,
                (0, i.jsx)("span", { className: ed.oX, children: t }),
            ],
        }),
    });
}
function nr(e) {
    let { options: n } = e;
    return (0, i.jsx)("div", {
        className: ed.uK,
        children: (0, i.jsx)("div", {
            className: ed.Uq,
            children: n.map((e, n) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: ed.mK,
                        children: [
                            null != e.emoji
                                ? (0, i.jsx)(A.A, {
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
                    n,
                ),
            ),
        }),
    });
}
function na(e) {
    let { type: n, options: t, id: l, maxValues: r, disabled: a } = e,
        o = (0, eu.c7)(e),
        c = s.useMemo(() => t.filter((e) => e.default).map((e) => e.value), [t]),
        m = (0, h.jc)();
    ei()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: p,
            executeStateUpdate: x,
            visualState: f,
            isDisabled: g,
            error: C,
        } = m.useComponentState(e, c.length > 0 ? { type: n, values: c } : void 0),
        j = null != m.modal,
        v = r > 1,
        N = f === B.BB.LOADING,
        [I, A] = s.useState(!1),
        [y, E] = s.useState(() => new Set(t.filter((e) => e.default).map((e) => e.value))),
        [S, b] = s.useState(y),
        T = s.useMemo(() => t.some((e) => null != e.emoji), [t]);
    s.useEffect(() => {
        if (p?.type === d.I5.STRING_SELECT) {
            let e = new Set(p.values);
            (E(e), b(e));
        } else {
            let e = new Set(c);
            (E(e), b(e));
        }
    }, [l, c, p]);
    let L = s.useCallback(() => {
        S !== y && x({ type: d.I5.STRING_SELECT, values: Array.from(y) }) && b(y);
    }, [y, S, b, x]);
    s.useEffect(() => {
        I || (y.size === S.size && Array.from(S).every((e) => y.has(e))) || L();
    }, [I, y, S, L]);
    let O = (0, eu.Lr)(e, j ? "modal" : "message"),
        R = nn.lS;
    v ? (R = nn.M8) : O && (R = nn.$l);
    let _ = (0, nn.Ev)({ value: y, onChange: (e) => E(e), onSelectInteraction: R });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(nn.Pw, {
                    isProcessing: N,
                    isDisabled: a || f === B.BB.DISABLED || g,
                    className: u()(ed.Lt, { [ed.zE]: j }),
                    options: t.map((e) => ({ ...e, disabled: v && !y.has(e.value) && y.size === r })),
                    placeholder: o,
                    onClose: () => A(!1),
                    onOpen: () => A(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !v,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(nt, { ...e, isDisabled: v && !y.has(e.value) && y.size === r, isOffset: T }),
                    renderOptionValue: (e) => (v ? (0, i.jsx)(nr, { options: e }) : (0, i.jsx)(nl, { ...e[0] })),
                    ..._,
                    "data-migration-pending": !0,
                }),
            }),
            null == C || j ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(C), className: ed.z3 }),
        ],
    });
}
var ni = t(95477),
    ns = t(103557),
    no = t(321471),
    nu = t(969508),
    nc = t(565469);
function nd(e) {
    let n,
        { type: t, style: l, label: r, placeholder: a, minLength: o, maxLength: u, required: c, value: m } = e,
        [p, x] = s.useState(m ?? ""),
        { state: f, executeStateUpdate: g, error: C } = (0, h.At)(e, null != m ? { type: t, value: m } : void 0),
        j = (0, nu.FG)(e.id);
    s.useEffect(() => {
        f?.type === t && x(f.value);
    }, [t, f]);
    let v = {
        value: p,
        placeholder: a,
        minLength: o,
        maxLength: u,
        required: c,
        onChange: function (e) {
            (x(e), g({ type: t, value: e }));
        },
        autoFocus: j,
    };
    switch (l) {
        case d.qz.SMALL:
            n = (0, i.jsx)(ni.k, { ...v });
            break;
        case d.qz.PARAGRAPH:
            n = (0, i.jsx)(ns.f, { autosize: !0, ...v });
    }
    return null != r ? (0, i.jsx)(no.e, { title: r, required: c, className: nc.k, error: C, children: n }) : n;
}
var nm = t(905394),
    nh = t(338717),
    np = t(96782),
    nx = t(302031),
    nf = t(561323);
function ng(e) {
    let { file: n, name: t, size: l, spoiler: r } = e,
        a = s.useMemo(
            () =>
                null != n.contentType && -1 !== n.contentType.indexOf("/")
                    ? n.contentType.split("/")
                    : ["unknown", "unknown"],
            [n.contentType],
        ),
        [o, c] = s.useState(r),
        [d, m] = s.useState(r);
    r !== o && (c(r), m(r));
    let h = s.useMemo(
        () => () => (0, i.jsx)(np.zB, { mimeType: a, downloadURL: n.url, showDownload: !0, isVisualMediaType: !1 }),
        [n, a],
    );
    function p(e) {
        return (0, i.jsx)(nm.A, {
            className: u()({ [nf.V]: e }),
            url: n.url,
            fileName: t ?? w.intl.string(w.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: h,
        });
    }
    return (0, i.jsx)("div", {
        className: nf.O,
        children: r
            ? (0, i.jsx)(nx.Ay, {
                  type: nx.Ay.Types.ATTACHMENT,
                  reason: nh.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1),
    });
}
var nC = t(665260),
    nj = t(731068),
    nv = t(541041),
    nN = t(492230),
    nI = t(294520),
    nA = t(448381),
    ny = t(866665),
    nE = t(251843),
    nS = t(891694),
    nb = t(853784);
function nT(e) {
    let n = s.useRef(null),
        t = e.media;
    if (t.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(ny.m, {
            text: w.intl.string(w.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: n,
            children: (0, i.jsx)("div", {
                className: u()(e.className, nb.FN, { [nb.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(nS.A, { ref: n, className: nb.i4 }),
            }),
        });
    let l = t.loadingState === d.TD.LOADING ? U.Rv1.LOADING : U.Rv1.ERROR;
    return (0, i.jsx)(nE._, {
        className: u()(e.className, { [nb.gS]: e.hiddenSpoilers }),
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
var nL = t(998218),
    nO = t(383055);
function nR(e) {
    let n = e.item.originalItem.media;
    return (0, i.jsx)(nT, {
        media: n,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function n_(e) {
    let n = e.item.originalItem.media;
    return (0, nO.LL)({
        ...e,
        alt: e.item.originalItem.description,
        src: n.proxyUrl,
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        contentType: n.contentType,
        originalContentType: n.originalContentType,
        sourceMetadata: { message: e.message },
        analyticsSource: "renderImageComponentForGalleryItem",
        srcIsAnimated: e.item.srcIsAnimated,
    });
}
function nk(e) {
    let n = e.item.originalItem.media,
        t = nL.A.toURLSafe(n.proxyUrl);
    return null == t
        ? null
        : (t.searchParams.append("format", "webp"),
          (0, nO.$o)({
              ...e,
              poster: t.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var nP = t(564107),
    nM = t(408274),
    nU = t(644447);
function nw(e) {
    let { message: n } = (0, h.jc)(),
        t = (0, y.bG)([W.A], () => W.A.getChannel(n?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, nP.X)();
    if (null == n || null == t) return null;
    let u = e.items.map((e) => (0, nv.FX)(e.media, n)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: c,
            srcToHandlePreloadImage: d,
            srcToSeekOverride: m,
        } = u.length > 1
            ? (0, nN.o)(u, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function p(e, t) {
        let l = e.originalItem;
        return (0, nI.tt)(l.media, t, l.spoiler, n?.author.bot ?? !1);
    }
    let x = e.items.map((e, t) => {
        let l = e.media,
            r = o?.(l),
            i = {
                message: n,
                item: {
                    uniqueId: `${l.proxyUrl}--${t}`,
                    originalItem: e,
                    type: (0, nA.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, nC.Lt)(l.flags, nj.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: p,
                renderImageComponent: n_,
                renderVideoComponent: nk,
                renderVisualPlaceholderComponent: nR,
                renderAudioComponent: U.tEg,
                renderPlaintextFilePreview: U.tEg,
                renderGenericFileComponent: U.tEg,
                gifFavoriteButton: s(l),
                onPlay: function (e, n, t) {},
                canRemoveItem: !1,
                canEditItem: !1,
                onRemoveItem: U.tEg,
                onEditItem: U.tEg,
            },
            u = (0, nU.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (u in c && ((i.onClick = c[u]), (i.handlePreloadImage = d[u]), (i.onSeekRequest = m[u])), i);
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(nM.A, { items: x, isInAppComponentsV2: !0 }) });
}
var nD = t(210716);
function nF(e) {
    let { divider: n, spacing: t } = e;
    return (0, i.jsx)("div", { className: u()({ [nD.f]: t === d.C8.LARGE, [nD.y]: n }) });
}
var nz = t(46054),
    nB = t(354777),
    nH = t(204255);
let nG = {
        SIZE: { default: void 0, reduced: nH.k2 },
        COLOR: { default: void 0, muted: nH.JF },
        WEIGHT: { default: void 0, reduced: nH.Xj },
    },
    nV = s.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function nY() {
    return s.useContext(nV);
}
function nK(e) {
    let { children: n, size: t, color: l, weight: r } = e,
        a = nY(),
        o = s.useMemo(() => {
            let e = { className: void 0, size: t ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                n = u()(nG.SIZE[e.size], nG.COLOR[e.color], nG.WEIGHT[e.weight]);
            return ("" !== n && (e.className = u()(nH.zr, n)), e);
        }, [t, l, r, a]);
    return (0, i.jsx)(nV.Provider, { value: o, children: n });
}
let nW = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var nX = t(738262),
    nq = t(165648);
function nZ(e) {
    let n,
        { content: t, className: l } = e,
        r =
            ((n = (0, h.jc)()),
            (0, s.useMemo)(() => {
                let e;
                return null === n
                    ? null
                    : ((e =
                          null != n.message
                              ? (0, nB.ko)(n.message, nW)
                              : (0, nB.Le)({ channelId: n.channelId, renderOptions: nW })),
                      nz.A.parse(t, !0, e));
            }, [t, n])),
        a = nY();
    return (0, i.jsx)("div", { className: u()(l, nq.PT, nX.T, a.className), children: r });
}
var n$ = t(838541),
    nJ = t(292151);
function nQ(e) {
    let { media: n, spoiler: t, description: l } = e,
        r = (0, nA.wz)(n),
        a = (0, nC.Lt)(n.flags, nj.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, nP.X)(),
        [c, d] = s.useState(t),
        [m, h] = s.useState(t);
    function p(e) {
        return "IMAGE" !== r
            ? (0, i.jsx)(nT, {
                  className: nJ.Dg,
                  media: n,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, i.jsx)(nO.LL, {
                  containerClassName: u()(nJ.Dg, { [nJ.rP]: e }),
                  imageClassName: nJ._8,
                  src: n.proxyUrl,
                  alt: l,
                  original: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholderVersion,
                  width: n.width ?? 0,
                  height: n.height ?? 0,
                  hiddenSpoilers: e,
                  maxWidth: 170,
                  maxHeight: 170,
                  minWidth: 85,
                  minHeight: 85,
                  autoPlay: o && !e,
                  mediaLayoutType: n$.d.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: a,
              });
    }
    return (
        t !== c && (d(t), h(t)),
        t
            ? (0, i.jsx)(nx.Ay, {
                  type: nx.Ay.Types.ATTACHMENT,
                  reason: nh.Oc.SPOILER,
                  obscured: m,
                  onToggleObscurity: () => h((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1)
    );
}
var n0 = t(868281);
function n1() {
    return (0, i.jsx)("div", {
        className: n0.k,
        children: (0, i.jsx)(eA.E, {
            variant: "body-sm/medium",
            color: "text-subtle",
            children: w.intl.string(w.t.zksHZO),
        }),
    });
}
var n5 = t(142617),
    n8 = t(887044),
    n2 = t(617390);
t(321073);
var n4 = t(602853),
    n3 = t(534890),
    n7 = t(831544),
    n6 = t(460905),
    n9 = t(109112),
    te = t(664121),
    tn = t(534514),
    tt = t(252307),
    tl = t(989238),
    tr = t(7584),
    ta = t(682163),
    ti = t(486020),
    ts = t(350363),
    to = t(239895);
function tu(e) {
    let { checkpointData: n } = e,
        {
            cardId: t,
            numMessagesSent: l = 0,
            totalVoiceMinutes: r = 0,
            numEmojisSent: a = 0,
            topEmoji: o,
            topGame: u,
            topGuild: c,
            powerLevel: d,
            powerLevelPercentile: m,
        } = n,
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
        x = (0, tl.oO)(r),
        f = (0, tl.OW)(t),
        g = tt.f[t],
        C = (0, n4.r)(g.primaryColor).hex(),
        j = (0, n4.r)(g.secondaryColor).hex({ opacity: 0.2 }),
        v = (0, y.bG)([X.A], () => X.A.getGuild(c?.guildId)),
        N = new Intl.NumberFormat(w.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        I = (0, tl._V)(m ?? 0),
        E = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let n = 0; n < 8; n++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, i.jsxs)("div", {
        className: to.kL,
        style: { backgroundColor: C },
        children: [
            (0, i.jsxs)("div", {
                className: to.Nr,
                children: [
                    (0, i.jsx)("img", { src: f, alt: "", className: to.LY, style: { backgroundColor: C } }),
                    (0, i.jsxs)("div", {
                        className: to.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: to.dJ,
                                children: [
                                    (0, i.jsx)(n3.ChatIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eA.E, { variant: "body-sm/medium", className: to.KA, children: h }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: to.dJ,
                                children: [
                                    (0, i.jsx)(n7.MicrophoneIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eA.E, { variant: "body-sm/medium", className: to.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: to.dJ,
                                children: [
                                    (0, i.jsx)(n6.ReactionIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eA.E, { variant: "body-sm/medium", className: to.KA, children: p }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: to.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(n9.UnknownGameIcon, {
                                                      color: eI.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/medium",
                                                      className: to.KA,
                                                      children: w.intl.string(ts.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(A.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: to.iY,
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/medium",
                                                      className: to.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? tr.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: to.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(n9.UnknownGameIcon, {
                                                      color: eI.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/medium",
                                                      className: to.KA,
                                                      children: w.intl.string(ts.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: ti.Ay.getApplicationIconURL({
                                                          id: u.applicationId,
                                                          icon: u.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: to.iY,
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/medium",
                                                      className: to.KA,
                                                      children: u.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: to.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(n9.UnknownGameIcon, {
                                                      color: eI.A.colors.BLACK,
                                                      size: "xs",
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/medium",
                                                      className: to.KA,
                                                      children: w.intl.string(ts.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != v
                                                      ? (0, i.jsx)(ta.Ay, {
                                                            guild: v,
                                                            size: ta.Ay.Sizes.SMOL,
                                                            className: to.iY,
                                                        })
                                                      : (0, i.jsx)(te.ServerIcon, {
                                                            color: eI.A.colors.BLACK,
                                                            size: "xs",
                                                        }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/medium",
                                                      className: to.KA,
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
                className: to.qr,
                style: { backgroundColor: j },
                children: (0, i.jsx)(tn.D, {
                    variant: "display-sm",
                    className: to.DD,
                    children: w.intl.string(ts.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: to.hC,
                style: { backgroundColor: C },
                children: [
                    (0, i.jsx)("div", {
                        className: to.TO,
                        children: E.map((e, n) =>
                            (0, i.jsx)(
                                "img",
                                { className: to.mG, src: e, width: 4, alt: "", style: { opacity: n >= I ? 0.3 : 1 } },
                                n,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: to.JA,
                        children: [
                            (0, i.jsx)(eA.E, { variant: "body-xs/normal", className: to.KA, children: "LVL" }),
                            (0, i.jsx)(eA.E, {
                                variant: "body-xs/semibold",
                                className: to.KA,
                                children: N.format(d ?? 0),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tc = t(878358),
    td = t(532294);
function tm(e) {
    let { checkpointData: n } = e,
        t = (0, h.jc)()?.message,
        l = (0, n5.Hd)("CheckpointCardDisplayComponent"),
        r =
            null != t
                ? () =>
                      (function (e) {
                          let { message: n, authorId: t } = e;
                          (0, n5.w)("onTapCheckpointCard") &&
                              ((0, n2.Jt)(t, W.A.getChannel(n.channel_id)), (0, n8.D)("message_component"));
                      })({ message: t, authorId: t.author.id })
                : void 0;
    switch (n.version) {
        case td.wk.V2025:
            return (0, i.jsx)(tu, { checkpointData: n });
        case td.wk.V2026:
            if (!l) return (0, i.jsx)(n1, {});
            return (0, i.jsx)(tc.A, { checkpointData: n, onFooterClick: r });
        default:
            return (0, i.jsx)(n1, {});
    }
}
var th = t(681154);
class tp extends s.PureComponent {
    state = { error: null };
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, n) {
        console.error("ErrorBoundary caught an error", e, n);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
}
var tx = t(211401),
    tf = t(500049),
    tg = t(429913),
    tC = t(355622),
    tj = t(583846),
    tv = t(487887),
    tN = t(52133),
    tI = t(803306),
    tA = t(949744),
    ty = t(808380),
    tE = t(409626),
    tS = t(692969),
    tb = t(424994),
    tT = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let tL = { [ty.Y.XBOX]: tb.a4.XBOX, [ty.Y.PLAYSTATION]: tb.a4.PLAYSTATION },
    tO = { [tT.EMBED]: tE.GameProfileSources.Embed };
function tR(e) {
    let n,
        t,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, tg.h)(l.extra.application_id),
        s = i?.getIconURL(tv.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = tL[l.extra.platform];
        null != e && (n = { type: e });
    }
    t =
        l.content_type === th.ContentInventoryEntryType.PLAYED_GAME && (0, tj.JM)(l) && !(0, tj.I5)(l)
            ? w.t.vPg1JT
            : w.t.rPqqts;
    let u = tO[r],
        c = {
            onClick: (0, tS.A)({
                location: u,
                applicationId: l.extra.application_id,
                source: u,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: w.intl.formatToPlainString(w.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...a,
        thumbnailUrl: s,
        title: o,
        titleClickable: c,
        thumbnailClickable: c,
        userDescription: t,
        providerIconProps: n,
    };
}
var t_ = t(205327),
    tk = t(261020),
    tP = t(272984),
    tM = t(913659);
let tU = s.createContext(void 0);
function tw(e, n) {
    return s.useMemo(() => ({ parsedEntry: e, location: n }), [e, n]);
}
function tD(e) {
    let { entry: n, ...t } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: n, channel: t } = e,
                    l = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, tN.v)(l.current, n.participants) ||
                            ((l.current = n.participants),
                            n.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == t.guild_id ? (0, tI.wz)(e) : tA.A.requestMember(t.guild_id, e);
                                }));
                    }, [n, t.guild_id]),
                    {}
                );
            })({ entry: n, channel: t.channel }),
            ...t,
        };
    switch (n.content_type) {
        case th.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(tB, { entry: n, ...l });
        case th.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(tH, { entry: n, ...l });
        case th.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(tG, { entry: n, ...l });
        case th.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(tV, { entry: n, ...l });
        case th.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(tY, { entry: n, ...l });
        case th.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(tz, { entry: n, ...l });
        default:
            throw Error(`Unsupported content type: ${n.content_type}`);
    }
}
function tF(e) {
    let { errorFallback: n, ...t } = e;
    return (0, i.jsx)(tp, { fallback: n, children: (0, i.jsx)(tD, { ...t }) });
}
function tz(e) {
    let { entry: n, children: t, ...l } = e,
        r = tw(
            (function (e) {
                let { entry: n } = e,
                    t = (0, tg.h)(n.extra.application_id),
                    l = t?.getIconURL(tv.iu.LARGE),
                    r = n.extra.activity_name,
                    a = (0, tj.Hd)(n) ? w.t.vPg1JT : w.t.rPqqts,
                    i = {
                        onClick: function () {
                            tx.R(tf.s4.TEXT, tC.oU.NORMAL, { applicationId: n.extra.application_id });
                        },
                        ariaDescription: w.intl.formatToPlainString(w.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
            })({ entry: n, ...l }),
            l.location,
        );
    return (0, i.jsx)(tU.Provider, { value: r, children: t });
}
function tB(e) {
    let { entry: n, children: t, ...l } = e,
        r = tw(
            (function (e) {
                let n,
                    { entry: t, baseEntryData: l } = e,
                    { provider: r, image_url: a } = t.extra.media,
                    i = t.extra.artist.name,
                    s = {
                        onClick: () => (0, tk.n)(tP.M0.ALBUM, t.extra.media.external_parent_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, {
                            itemName: t.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, tk.n)(tP.M0.ARTIST, t.extra.artist.external_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: i }),
                    };
                return (
                    r === t_.X.SPOTIFY && (n = { type: tb.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        thumbnailUrl: a,
                        titleClickable: o,
                        subtitleClickable: s,
                        thumbnailClickable: s,
                        userDescription: w.t.CcVI1T,
                        providerIconProps: n,
                    }
                );
            })({ entry: n, ...l }),
            l.location,
        );
    return (0, i.jsx)(tU.Provider, { value: r, children: t });
}
function tH(e) {
    let { entry: n, children: t, ...l } = e,
        r = tw(tR({ entry: n, ...l }), l.location);
    return (0, i.jsx)(tU.Provider, { value: r, children: t });
}
function tG(e) {
    let { entry: n, children: t, ...l } = e,
        r = tw(tR({ entry: n, ...l }), l.location);
    return (0, i.jsx)(tU.Provider, { value: r, children: t });
}
function tV(e) {
    let { entry: n, children: t, ...l } = e,
        r = tw(
            (function (e) {
                let n,
                    { entry: t, baseEntryData: l } = e,
                    r = (0, tg.h)(t.extra.application_id),
                    a = r?.getIconURL(128),
                    i = (0, tM.uD)(t.extra.application_id, t.extra.media_assets_large_image, [
                        tv.iu.LARGE,
                        tv.iu.LARGE,
                    ]),
                    o = t.extra.media_title,
                    u = t.extra.media_subtitle,
                    c = (0, tj.Hd)(t) ? w.t["LH+Z3y"] : w.t.YuKgml,
                    d = { type: tb.a4.CRUNCHYROLL },
                    m = s.useMemo(() => {
                        if (null == t.extra.url) return;
                        let e = nL.A.safeParseWithQuery(t.extra.url);
                        if (null != e && null != e.protocol && null != e.hostname) return e;
                    }, [t.extra.url]);
                return (
                    null != m &&
                        (n = {
                            href: nL.A.format(m),
                            ariaDescription: w.intl.formatToPlainString(w.t.aFFQ3g, { title: o }),
                        }),
                    {
                        ...l,
                        thumbnailUrl: i ?? a,
                        title: o,
                        titleClickable: n,
                        thumbnailClickable: n,
                        subtitle: u,
                        userDescription: c,
                        providerIconProps: d,
                    }
                );
            })({ entry: n, ...l }),
            l.location,
        );
    return (0, i.jsx)(tU.Provider, { value: r, children: t });
}
function tY(e) {
    let { entry: n, children: t, ...l } = e,
        r = tw(
            (function (e) {
                let n,
                    { entry: t, baseEntryData: l } = e,
                    r = t.extra.entries[0].media,
                    a = r.artists[0],
                    { title: i, provider: s, image_url: o } = r,
                    u = a.name,
                    c = {
                        onClick: () => (0, tk.n)(tP.M0.TRACK, r.external_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: i }),
                    },
                    d = {
                        onClick: () => (0, tk.n)(tP.M0.ARTIST, a.external_id),
                        ariaDescription: w.intl.formatToPlainString(w.t.xTsar2, { itemName: u }),
                    };
                return (
                    s === t_.X.SPOTIFY && (n = { type: tb.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        subtitle: u,
                        thumbnailUrl: o,
                        titleClickable: c,
                        subtitleClickable: d,
                        thumbnailClickable: c,
                        userDescription: w.t.CcVI1T,
                        providerIconProps: n,
                    }
                );
            })({ entry: n, ...l }),
            l.location,
        );
    return (0, i.jsx)(tU.Provider, { value: r, children: t });
}
var tK = t(28863),
    tW = t(531142),
    tX = t(939249),
    tq = t(43990),
    tZ = t(696986),
    t$ = t(342952),
    tJ = t(576757),
    tQ = t(291594),
    t0 = t(22869),
    t1 = t(959),
    t5 = t(968544);
function t8(e) {
    let { entry: n, channel: t, className: l } = e,
        r = s.useRef(null),
        a = s.useRef(null),
        {
            displayParticipants: o,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, tJ.A)(n),
        p = [c, d];
    return (0, i.jsxs)("div", {
        className: u()(t5.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(t1.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: t,
                              children: (e) =>
                                  (0, i.jsx)(tX.D, {
                                      innerRef: r,
                                      className: t5.vk,
                                      ...e,
                                      children: (0, i.jsx)(t$.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eX._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(tZ.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(tn.D, {
                variant: "body-sm/semibold",
                color: "text-subtle",
                className: u()(t5.IY, t5.Io),
                scaleFontToUserSetting: !0,
                children: w.intl.format(w.t.rH95Gu, {
                    user0: el.Ay.getName(t.guild_id, t.id, p[0]),
                    user1: el.Ay.getName(t.guild_id, t.id, p[1]),
                    countOthers: m,
                    name0Hook: (e, n) => (0, i.jsx)(t0.A, { text: e, user: p[0], channel: t }, n),
                    name1Hook: (e, n) => (0, i.jsx)(t0.A, { text: e, user: p[1], channel: t }, n),
                    countOthersHook: (e, n) =>
                        (0, i.jsx)(
                            t1.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: t,
                                children: (n) =>
                                    (0, i.jsx)(tQ.A, {
                                        ...n,
                                        tag: "span",
                                        children: (0, i.jsx)(eA.E, {
                                            ref: a,
                                            variant: "body-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e,
                                        }),
                                    }),
                            },
                            n,
                        ),
                }),
            }),
        ],
    });
}
var t2 = t(263577),
    t4 = t(347306),
    t3 = t(790381),
    t7 = t(266080),
    t6 = t(121090),
    t9 = t(18282);
let le = {
        [tb.a4.SPOTIFY]: t6.A,
        [tb.a4.CRUNCHYROLL]: t4.CrunchyrollNeutralIcon,
        [tb.a4.XBOX]: t7.A,
        [tb.a4.PLAYSTATION]: t3.A,
    },
    ln = {
        [tb.a4.SPOTIFY]: () => w.intl.string(w.t["0ZB/XE"]),
        [tb.a4.CRUNCHYROLL]: () => w.intl.string(w.t.jdJYXw),
        [tb.a4.XBOX]: () => w.intl.string(w.t.Nfvo72),
        [tb.a4.PLAYSTATION]: () => w.intl.string(w.t.fFl4jo),
    };
function lt(e) {
    let { type: n, "aria-label": t, ...l } = e,
        r = le[n];
    if (null == r) return null;
    let a = t ?? ln[n]?.();
    return (0, i.jsx)(t9.A, { Icon: r, ...l, "aria-label": a });
}
var ll = t(823545),
    lr = t(506326),
    la = t(915089),
    li = t(818348),
    ls = t(167848),
    lo = t(154342);
function lu(e) {
    let { className: n, clickableClassName: t, clickable: l, children: r } = e,
        a = (0, la.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.A, { id: a, children: e }),
                (0, i.jsx)(tK.Anchor, { className: u()(n, t), href: s, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(tW.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(c.A, { id: a, children: o }),
            (0, i.jsx)(tX.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : a,
                className: u()(n, null != s && t),
                children: r,
            }),
        ],
    });
}
function lc(e) {
    let { clickable: n, ...t } = e;
    return (0, i.jsx)(lu, { ...t, clickable: { ...n, ariaDescription: "" }, clickableClassName: lo.v });
}
function ld(e) {
    let {
            entry: n,
            channel: t,
            title: l,
            subtitle: r,
            thumbnailUrl: a,
            titleClickable: s,
            subtitleClickable: o,
            thumbnailClickable: c,
            providerIconProps: d,
            style: m = {},
        } = e,
        h = (0, la.GV)(),
        { primaryColor: p, secondaryColor: x } = (0, ll.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${p}, ${x})`),
        (0, i.jsx)(tq.N, {
            theme: li.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": w.intl.string(w.t.zFfUhF),
                    "aria-labelledby": h,
                    className: u()(ls.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(lu, {
                            className: ls.iT,
                            clickableClassName: ls.vk,
                            clickable: c,
                            children: (0, i.jsx)(t2.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ls.op,
                            children: [
                                (0, i.jsx)(t8, { channel: t, entry: n, className: ls.VV }),
                                (0, i.jsx)(tZ.h, { size: 2 }),
                                (0, i.jsx)(lc, {
                                    clickable: s,
                                    className: ls.sd,
                                    children: (0, i.jsx)(tn.D, {
                                        id: h,
                                        variant: "heading-sm/medium",
                                        lineClamp: 1,
                                        className: u()(ls.ek, ls.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(tZ.h, { size: 2 }),
                                              (0, i.jsx)(lc, {
                                                  clickable: o,
                                                  className: ls.sd,
                                                  children: (0, i.jsx)(eA.E, {
                                                      variant: "body-sm/normal",
                                                      className: u()(ls.c1, ls.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(lr.iT, { className: ls.jp, entry: n, location: lr.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: ls.Y, children: null != d ? (0, i.jsx)(lt, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lm(e) {
    let n,
        { contentInventoryEntry: t, channel: l } = e,
        { parsedEntry: r } =
            ((n = s.useContext(tU)),
            ei()(null != n, "useEntryDataContext must be used within a EntryDataContextProvider"),
            n);
    return (0, i.jsx)(ld, { ...r, entry: t, channel: l });
}
function lh(e) {
    let n = (0, h.jc)();
    ei()(
        null != n,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: t } = n,
        l = (0, y.bG)([W.A], () => W.A.getChannel(t));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(tF, {
            location: tT.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(lm, { ...e, channel: l }),
        })
    );
}
var lp = t(689592);
function lx(e) {
    let { components: n, renderComponents: t } = e,
        { message: l } = (0, h.jc)();
    return null == n || 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: lp.kL,
              children: [
                  (0, i.jsx)("div", { className: lp.Y_, children: t(n) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: lp.z3, message: l, component: e }) : null,
              ],
          });
}
var lf = t(317097),
    lg = t(796951);
function lC(e) {
    let { components: n, accentColor: t, spoiler: l, renderComponents: r } = e,
        [a, o] = s.useState(l),
        [c, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: u()(lg.kL, { [lg.dK]: e, [lg._7]: null != t }),
                    style: { "--__accent-color": null != t ? (0, lf.$k)(t, !0) : void 0 },
                    children: (0, i.jsx)(nK, { size: "reduced", children: r(n) }),
                }),
        });
    }
    return (l !== a && (o(l), d(l)), null == n || 0 === n.length)
        ? null
        : l
          ? (0, i.jsx)(nx.Ay, {
                type: nx.Ay.Types.ATTACHMENT,
                reason: nh.Oc.SPOILER,
                obscured: c,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var lj = t(244367),
    lv = t(405388);
function lN(e) {
    let { label: n, description: t, component: l, renderComponent: r } = e,
        a = (0, h.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, i.jsxs)(no.e, {
              title: n,
              required: l.required,
              error: a,
              children: [
                  null != t && (0, i.jsx)(lj.a, { type: lj.t.DESCRIPTION, className: lv.h, children: t }),
                  r(l, "label-child"),
              ],
          });
}
var lI = t(572891);
function lA(e) {
    let { components: n, accessory: t, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, s] = (0, p.zn)(),
        o = (0, p.Hq)(s),
        c = t.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: lI.uW,
        ref: a,
        children: [
            (0, i.jsxs)("div", {
                className: lI.Y_,
                children: [
                    (0, i.jsx)("div", { className: u()(lI.zt, { [lI.uf]: c }), children: l(n) }),
                    (0, i.jsx)("div", {
                        className: u()(lI.LP, { [lI.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, i.jsx)(V, { ...e });
                                case d.I5.THUMBNAIL:
                                    return (0, i.jsx)(nQ, { ...e });
                            }
                        })(t),
                    }),
                ],
            }),
            null != r ? (0, i.jsx)(eo.Ay, { message: r, component: e }) : null,
        ],
    });
}
var ly = t(359886);
function lE(e) {
    return e.map((e, n) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(n, t) {
                    switch (n.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(lx, { ...n, renderComponents: lE }, t);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(V, { ...n }, t);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(na, { ...n }, t);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(ef, { ...n }, t);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e3, { ...n }, t);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(nd, { ...n }, t);
                        case d.I5.SECTION:
                            return (0, i.jsx)(lA, { ...n, renderComponents: lE }, t);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(nZ, { ...n }, t);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(nw, { ...n }, t);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(nQ, { ...n }, t);
                        case d.I5.FILE:
                            return (0, i.jsx)(ng, { ...n }, t);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(nF, { ...n }, t);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(lh, { ...n }, t);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(lC, { ...n, renderComponents: lE }, t);
                        case d.I5.LABEL:
                            return (0, i.jsx)(lN, { ...n, renderComponent: e }, t);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eK, { ...n }, t);
                        case d.I5.CHECKPOINT_CARD:
                            return (0, i.jsx)(tm, { ...n }, t);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(ne, { ...n }, t);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(ev, { ...n }, t);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(eC, { ...n }, t);
                        default:
                            return (0, i.jsx)(n1, {}, t);
                    }
                })(e, n.toString()),
                (0, i.jsx)(c.A, { children: "," }),
            ],
        }),
    );
}
function lS(e) {
    let { message: n, shouldDisableInteractiveComponents: t } = e,
        { components: l } = n,
        [r, a] = (0, p.zn)();
    return 0 === l.length
        ? null
        : (0, i.jsx)(h.f5, {
              message: n,
              shouldDisableInteractiveComponents: t,
              children: (0, i.jsx)(p.O7.Root, {
                  containerInnerWidth: a,
                  children: (0, i.jsx)("div", {
                      style: { width: "100%" },
                      ref: r,
                      children: (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: e,
                                  className: u()([ly.k, { [ly.z]: (0, m._c)(n) }]),
                                  children: lE(l),
                              }),
                      }),
                  }),
              }),
          });
}

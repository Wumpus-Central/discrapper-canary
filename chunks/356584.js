n.d(t, { Ay: () => lv, fD: () => lj });
var l,
    a,
    r,
    s = n(477900),
    i = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(140735),
    u = n(155718),
    m = n(383233),
    p = n(298236),
    h = n(953756),
    x = n(435558),
    f = n(862482),
    g = n(980707),
    C = n(477782),
    j = n(34188),
    v = n(811893),
    A = n(863610),
    I = n(442433),
    N = n(565645);
n(938796);
var y = n(17928),
    E = n(636537),
    b = n(192308),
    S = n(73153),
    L = n(163437),
    T = n(97352),
    R = n(67480),
    O = n(328968),
    k = n(158045),
    _ = n(580630),
    M = n(963179),
    P = n(168393),
    w = n(652215),
    D = n(105292);
let B = (0, y.UT)([R.A, T.A, O.A], {
    getQueryId: w.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = R.A.get(e),
            n = T.A.getForSKU(e) ?? [],
            l = O.A.getForSKU(e),
            a = R.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === w.Puh.SUBSCRIPTION && null == a)
            ? null
            : { parentSku: a, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: w.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
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
        ? (0, s.jsx)(g.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: I.Z_,
              "aria-label": D.intl.string(D.t.tvTXy8),
              onSelect: n,
              children: (0, s.jsx)(C.rX, {
                  children: (0, s.jsx)(C.Dr, {
                      id: "copy",
                      label: D.intl.string(D.t.uHhnfa),
                      action: () => (0, U.C)(t),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let t,
        { label: n, style: l, disabled: a, emoji: r, url: o, skuId: d } = e,
        { executeStateUpdate: m, visualState: h, isDisabled: g } = (0, p.At)(e),
        C = (function (e) {
            let { data: t } = B(e),
                n = t?.parentSku,
                l = t?.sku,
                a = t?.storeListing,
                r = t?.subscriptionPlans,
                o = i.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(P.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, L.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                c = i.useCallback(() => {
                    if (null == l) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(M.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != a && (null == l || l.type !== w.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                if (l.type === w.Puh.SUBSCRIPTION) {
                    if (null == r || 0 === r.length) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                    let e = r[0],
                        t = (0, k.y8)(e.id);
                    return {
                        disabled: !1,
                        label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, _.$g)(t.amount, t.currency),
                        }),
                        onClick: o,
                    };
                }
                return null == l.price
                    ? { disabled: !0, label: D.intl.string(D.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                              skuName: l.name,
                              price: (0, _.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: c,
                      };
            }
        })(d),
        y = null != d && l === u.in.PREMIUM,
        E = y && C?.disabled,
        S = y ? C?.label : n,
        T = null != r,
        R = null != S && S.length > 0,
        O = l === u.in.LINK && null != o && o.length > 0,
        U = h === z.BB.LOADING || (y && null == C);
    return (
        (t = O
            ? () => {
                  (0, F.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : y
              ? null != C && !1 === C.disabled
                  ? C.onClick
                  : x.noop
              : () => m()),
        (0, s.jsxs)(f.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case u.in.PRIMARY:
                    case u.in.PREMIUM:
                        return f.$n.Colors.BRAND;
                    case u.in.SUCCESS:
                        return f.$n.Colors.GREEN;
                    case u.in.DESTRUCTIVE:
                        return f.$n.Colors.RED;
                    default:
                        return f.$n.Colors.PRIMARY;
                }
            })(l),
            size: f.$n.Sizes.SMALL,
            disabled: a || h === z.BB.DISABLED || g || E,
            onClick: t,
            onContextMenu: (e) => {
                O && (0, I.jA)(e, (e) => (0, s.jsx)(H, { ...e, url: o }));
            },
            role: O ? "link" : "button",
            children: [
                (0, s.jsxs)("div", {
                    className: c()(G.Qs, { [G.R]: U, [G.M2]: y }),
                    "aria-hidden": U,
                    children: [
                        y
                            ? (0, s.jsx)("div", {
                                  className: G.sV,
                                  children: (0, s.jsx)(j.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        T
                            ? (0, s.jsx)(N.A, {
                                  className: c()({ [G.MR]: R }),
                                  src: r.src,
                                  emojiId: r.id,
                                  emojiName: r.name,
                                  animated: r.animated,
                              })
                            : null,
                        R ? (0, s.jsx)("div", { className: G.Pf, children: S }) : null,
                        O ? (0, s.jsx)(v.t, { size: "xs", color: "currentColor", className: G.LE }) : null,
                    ],
                }),
                U
                    ? (0, s.jsx)("div", { className: G.Lq, children: (0, s.jsx)(A.n, { dotRadius: 3.5, themed: !0 }) })
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
    et = n(802842),
    en = n(403362),
    el = n(562153);
function ea(e, t) {
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
                    return { type: z.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case q.ROLE: {
                    if (null == l) return null;
                    let t = J.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: z.iw.ROLE, value: t.id, label: t.name };
                }
                case q.CHANNEL: {
                    if (null == l) return null;
                    let t = W.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: z.iw.CHANNEL, value: t.id, label: (0, Z.m1)(t, ee.default, Q.A) };
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
    ec = n(437517),
    ed = n(483334),
    eu = n(219025);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, s.jsx)("div", { className: ed.zc, style: { height: n, width: n }, children: t });
}
var ep = (((a = {})[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), a);
function eh(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: a, defaultValues: r } = e,
        { type: o, customId: d, maxValues: m, disabled: h } = t,
        x = (0, ec.c7)(t),
        [f, g] = i.useState(!1),
        [C, j] = i.useState(!1),
        [v, A] = i.useState(new Map(r?.map((e) => [e.value, e]))),
        [I, N] = i.useState(new Set(v.keys())),
        y = i.useRef((r ?? []).map((e) => e.value)),
        E = i.useRef(o),
        b = i.useRef(d),
        [S, L] = i.useState(0);
    i.useEffect(() => {
        let e = (r ?? []).map((e) => e.value);
        if (
            e.every((e) => y.current.includes(e)) &&
            y.current.every((t) => e.includes(t)) &&
            o === E.current &&
            d === b.current
        )
            return;
        ((y.current = e), (E.current = o), (b.current = d));
        let t = new Map(r?.map((e) => [e.value, e]));
        (A(t), N(new Set(t.keys())), L((e) => e + 1));
    }, [r, o, d]);
    let T = (0, p.jc)();
    es()(null != T, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: R,
            executeStateUpdate: O,
            visualState: k,
            isDisabled: _,
            error: M,
        } = T.useComponentState(t, v.size > 0 ? { type: o, selectedOptions: Array.from(v.values()) } : void 0),
        P = null != T.modal,
        w = k === z.BB.LOADING;
    i.useEffect(() => {
        if (
            R?.type === u.I5.USER_SELECT ||
            R?.type === u.I5.ROLE_SELECT ||
            R?.type === u.I5.MENTIONABLE_SELECT ||
            R?.type === u.I5.CHANNEL_SELECT
        ) {
            let e = new Map(R.selectedOptions.map((e) => [e.value, e]));
            (A(e), N(new Set(e.keys())));
        }
    }, [R]);
    let D = i.useCallback(() => {
        O({ type: o, selectedOptions: Array.from(v.values()) }) && N(new Set(v.keys()));
    }, [O, o, v]);
    i.useEffect(() => {
        f || C || (v.size === I.size && Array.from(v.keys()).every((e) => I.has(e))) || D();
    }, [f, C, I, v, D]);
    let B = 0 === v.size || f,
        U = {
            isProcessing: w,
            isDisabled: h || k === z.BB.DISABLED || _,
            wrapperClassName: c()(ed.Lt, { [ed.zE]: P }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            filter: !1,
            placeholder: B ? x : void 0,
            onClose: () => g(!1),
            onOpen: () => g(!0),
            onBlur: () => j(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, t) {
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
                                  value: Array.from(v.values()),
                                  onChange: function (e) {
                                      (f || j(!0), A(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: c()({ [ed.R]: !B }),
                                  closeOnSelect: !1,
                                  ...U,
                                  "data-migration-pending": !0,
                              },
                              S,
                          )
                        : (0, s.jsx)(
                              ei.p,
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
            null == M || P ? null : (0, s.jsx)(eo.S0, { ...(0, eo.PS)(M), className: eu.z3 }),
        ],
    });
}
var ex = n(726088);
function ef(e) {
    let { channelTypes: t } = e,
        n = (0, p.jc)(),
        l = n?.channelId,
        a = W.A.getChannel(l),
        r = X.A.getGuild(a?.getGuildId()),
        o = i.useMemo(() => ea(e.defaultValues, r?.id, t), [e.defaultValues, r, t]);
    return (0, s.jsx)(eh, {
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
                  }).channels.map((e) => ({ type: z.iw.CHANNEL, value: e.id, label: (0, Z.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, t) {
            let n = W.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === w.rbe.GUILD_CATEGORY ? K.FolderIcon : (0, Y.gU)(n);
            return null != l ? (0, s.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, s.jsx)("span", { className: ex.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var eg = n(150934);
function eC(e) {
    let { type: t, default: n } = e,
        l = (0, p.jc)();
    es()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: a, executeStateUpdate: r } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = i.useMemo(() => a?.type === t && a.value, [a, t]),
        c = l.getParents(e)?.[0],
        d = c?.type === u.I5.LABEL ? c : void 0;
    return (
        es()(null != d, "CheckboxActionComponent must be a child of a Label component"),
        (0, s.jsx)(eg.S, {
            label: d.label,
            description: d.description,
            checked: o,
            onChange: function (e) {
                r({ type: t, value: e });
            },
        })
    );
}
var ej = n(167417);
function ev(e) {
    let { type: t, options: n, required: l, maxValues: a } = e,
        r = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: c } = (0, p.At)(e, r.length > 0 ? { type: t, values: r } : void 0),
        d = i.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, s.jsx)(ej.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: d.length >= a && !d.includes(e.value),
        })),
        selectedValues: d,
        onChange: function (e) {
            c({ type: t, values: e });
        },
        required: l,
    });
}
var eA = n(81369),
    eI = n(661531),
    eN = n(834730),
    ey = n(628284),
    eE = n(241326),
    eb = n(608299),
    eS = n(780777),
    eL = n(494921),
    eT = n(851023),
    eR = n(215497),
    eO = n(914905),
    ek = n(101555),
    e_ = n(424170),
    eM = n(409481),
    eP = n(274652),
    ew = n(31717),
    eD = n(255438),
    eB = n(453771),
    eU = n(518960),
    eF = n(382287),
    ez = n(522602),
    eG = n(283655);
function eH(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: a, types: r, guildId: i } = e,
        o = (0, eM.C)((0, eB.o2)(i)),
        d = (0, eD.Xq)(o / eD.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, s.jsxs)("div", {
        className: eG.pp,
        children: [
            (0, s.jsxs)("div", {
                className: c()(eG.e8, { [eG.R]: t }),
                children: [
                    (0, s.jsx)(eA.H, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, s.jsx)(eN.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: D.intl.format(D.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: a,
                        }),
                    }),
                    (0, s.jsx)(eN.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, ec.fw)(l, a, r, d),
                    }),
                ],
            }),
            t &&
                (0, s.jsxs)("div", {
                    className: c()(eG.e8, eG.r$),
                    children: [
                        (0, s.jsx)(eA.H, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
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
function eV() {
    return (0, s.jsxs)("div", {
        className: c()(eG.pp, eG.e8),
        children: [
            (0, s.jsx)(ey.y, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, s.jsx)(eN.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: D.intl.string(D.t["0PhgpK"]),
            }),
            (0, s.jsx)(eN.E, { variant: "text-xs/normal", color: "text-muted", children: D.intl.string(D.t.HYg2Hn) }),
        ],
    });
}
function eK(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            className: c()(eG.NJ, { [eG.j1]: l }),
            children: [
                (0, s.jsx)(eO.J, { upload: t, size: l ? eR.L.XSMALL : eR.L.XXSMALL }),
                (0, s.jsx)(eN.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eG.iW,
                    children: t.filename ?? D.intl.string(D.t.ZMirp0),
                }),
                (0, s.jsx)(ek.Ay, {
                    className: eG.BX,
                    children: (0, s.jsx)(eT.A, {
                        className: eG.XI,
                        tooltip: D.intl.string(D.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, s.jsx)(eE.TrashIcon, { size: "xs", color: "currentColor", className: eG.gE }),
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
        a = i.useRef(null),
        [r, o] = i.useState(!1),
        d = (0, p.jc)();
    es()(null != d, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = d.channelId;
    es()(null != m, "FileUploadActionComponent must be used inside a channel");
    let h = d.modal?.customId;
    es()(null != h, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: x,
            typesFormattedString: f,
            validateFilenames: g,
            showInvalidFileTypeAlert: C,
        } = (0, e_.M1)(e.fileTypes),
        {
            uploadIds: j,
            setUploadIds: v,
            currentUploads: A,
            error: I,
        } = (function (e) {
            let t = (0, p.jc)();
            es()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            es()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: a, error: r } = t.useComponentState(e),
                s = i.useMemo(() => (l?.type === u.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = ez.A.getUploads(n, ew.C.InteractionModal),
                c = i.useMemo(() => s.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [s, o]),
                d = i.useCallback((e) => a({ type: u.I5.FILE_UPLOAD, uploadIds: e }), [a]);
            return (
                i.useEffect(() => {
                    s.length > c.length && d(s.filter((e) => c.some((t) => t.id === e)));
                }, [s, c, d]),
                { uploadIds: s, setUploadIds: d, currentUploads: c, error: r }
            );
        })(e),
        N = (0, y.bG)([W.A], () => W.A.getBasicChannel(m));
    es()(null != N, "FileUploadActionComponent requires a valid channel");
    let E = i.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0));
        }, []),
        b = i.useCallback((e) => {
            a.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        S = i.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (j.length + e.length > n)
                    return (0, eL.openUploadError)({
                        title: D.intl.string(D.t.wOr6hB),
                        help: D.intl.formatToPlainString(D.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eF.fJ)({ files: e, guildId: N.guild_id, canDeferSizeChecks: !1 })) return (0, eU.V)(N, e);
                if (!g(e.map((e) => e.name))) return C();
                let l = e.map((e) => {
                    let n = (0, ec.so)(h),
                        l = { id: n, file: e, platform: eP.x.WEB, origin: t };
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
                v(j.concat(l));
            },
            [j, n, N, v, h, m, g, C],
        ),
        L = i.useCallback(
            (e) => {
                (e.preventDefault(), o(!1), S(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [S],
        );
    function T(e) {
        null == m || (eb.A.remove(m, e, ew.C.InteractionModal), v(j.filter((t) => t !== e)));
    }
    return (i.useEffect(() => {
        let e = a.current;
        return (
            e?.addEventListener("dragover", E),
            e?.addEventListener("dragleave", b),
            e?.addEventListener("drop", L),
            () => {
                (e?.removeEventListener("dragover", E),
                    e?.removeEventListener("dragleave", b),
                    e?.removeEventListener("drop", L));
            }
        );
    }, [E, b, L]),
    1 === n && 1 === A.length)
        ? (0, s.jsx)(eK, { upload: A[0], handleRemoveFile: T, singleFileInput: !0 })
        : (0, s.jsxs)("div", {
              ref: a,
              className: c()(eG.kL, { [eG.Ke]: r, [eG.z3]: null != I }),
              children: [
                  j.length >= n
                      ? (0, s.jsx)(eV, {})
                      : (0, s.jsx)(eH, {
                            dropping: r,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: f,
                            guildId: N.guild_id,
                        }),
                  A.length > 0 &&
                      (0, s.jsx)("div", {
                          className: eG.aq,
                          children: A.map((e) => (0, s.jsx)(eK, { upload: e, handleRemoveFile: T }, e.id)),
                      }),
                  (0, s.jsx)(eS.A, {
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
    let t = (0, p.jc)(),
        n = t?.channelId,
        l = W.A.getChannel(n),
        a = X.A.getGuild(l?.getGuildId()),
        r = (0, eQ.A)(a?.id, 1e3),
        o = i.useMemo(() => ea(e.defaultValues, a?.id), [e.defaultValues, a]);
    return (0, s.jsx)(eh, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = W.A.getChannel(n);
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
                        return { type: z.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...i.map((e) => ({ type: z.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: function (e, t) {
            let n = t === ep.PILL_ICON_SIZE;
            if (e?.type === z.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, s.jsx)(eW.eu, {
                    size: n ? eX._3.SIZE_16 : eX._3.SIZE_24,
                    src: l.getAvatarURL(a?.id, t),
                    status: n ? null : e5.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === z.iw.ROLE) {
                let n = null != a ? J.A.getRole(a.id, e.value) : void 0;
                if (null == n || null == a) return;
                let l = (0, eJ.fm)(a, n) ? (0, e0.ox)(n, t) : null;
                return null != l
                    ? (0, s.jsx)(e1.A, { ...l })
                    : (0, s.jsx)(eq.i, { size: "custom", color: n.colorString ?? w.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: function (e) {
            let t = null;
            if (e.type === z.iw.USER) {
                let n = ee.default.getUser(e.value);
                null != n &&
                    (t = (0, s.jsx)(e$.A, {
                        className: ex.Tc,
                        usernameClass: ex.Xh,
                        discriminatorClass: ex.D2,
                        botClass: ex.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === z.iw.ROLE) {
                let n = null != a ? J.A.getRole(a.id, e.value) : void 0,
                    l = null == n ? null : r?.[n.id];
                null != l &&
                    (t = (0, s.jsxs)("div", {
                        className: ex.Ly,
                        children: [
                            (0, s.jsx)(eZ.UserIcon, { size: "sm", color: "currentColor", className: ex.jh }),
                            (0, s.jsx)("span", { className: ex.NT, children: l }),
                        ],
                    }));
            }
            return (0, s.jsxs)("span", {
                className: ex.Pf,
                children: [(0, s.jsx)("span", { className: ex.QK, children: e.label }), t],
            });
        },
        defaultValues: o,
    });
}
var e2 = n(144228),
    e4 = n(821609),
    e3 = n(897132);
function e7(e) {
    let { type: t, options: n, required: l } = e,
        a = i.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: r, executeStateUpdate: o } = (0, p.At)(e, null != a ? { type: t, value: a } : void 0),
        d = i.useMemo(() => (r?.type === t ? r.value : null), [r, t]),
        u = null != d,
        m = i.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function h(e) {
        o({ type: t, value: e });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e2.z, { options: m, value: d ?? "", onChange: h, required: l }),
            !l &&
                (0, s.jsx)("div", {
                    className: c()(e3.H, { [e3.d]: !u }),
                    "aria-hidden": !u,
                    children: (0, s.jsx)(e4.$, {
                        text: D.intl.string(D.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => h(null),
                    }),
                }),
        ],
    });
}
var e9 = n(843282);
function e6(e) {
    let { emoji: t, label: n, description: l, isDisabled: a, isOffset: r } = e,
        i = c()(eu._A, { [eu.r9]: a, [eu.cY]: null == t && r });
    return (0, s.jsxs)("div", {
        className: eu.uK,
        children: [
            null != t
                ? (0, s.jsx)(N.A, { className: eu.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
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
function te(e) {
    let { emoji: t, label: n } = e;
    return (0, s.jsx)("div", {
        className: eu.uK,
        children: (0, s.jsxs)("div", {
            className: c()(eu.Uq, eu.u9),
            children: [
                null != t
                    ? (0, s.jsx)(N.A, {
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
function tt(e) {
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
                                ? (0, s.jsx)(N.A, {
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
function tn(e) {
    let { type: t, options: n, id: l, maxValues: a, disabled: r } = e,
        o = (0, ec.c7)(e),
        d = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, p.jc)();
    es()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: h,
            executeStateUpdate: x,
            visualState: f,
            isDisabled: g,
            error: C,
        } = m.useComponentState(e, d.length > 0 ? { type: t, values: d } : void 0),
        j = null != m.modal,
        v = a > 1,
        A = f === z.BB.LOADING,
        [I, N] = i.useState(!1),
        [y, E] = i.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [b, S] = i.useState(y),
        L = i.useMemo(() => n.some((e) => null != e.emoji), [n]);
    i.useEffect(() => {
        if (h?.type === u.I5.STRING_SELECT) {
            let e = new Set(h.values);
            (E(e), S(e));
        } else {
            let e = new Set(d);
            (E(e), S(e));
        }
    }, [l, d, h]);
    let T = i.useCallback(() => {
        b !== y && x({ type: u.I5.STRING_SELECT, values: Array.from(y) }) && S(y);
    }, [y, b, S, x]);
    i.useEffect(() => {
        I || (y.size === b.size && Array.from(b).every((e) => y.has(e))) || T();
    }, [I, y, b, T]);
    let R = (0, ec.Lr)(e, j ? "modal" : "message"),
        O = e9.lS;
    v ? (O = e9.M8) : R && (O = e9.$l);
    let k = (0, e9.Ev)({ value: y, onChange: (e) => E(e), onSelectInteraction: O });
    return (0, s.jsxs)(i.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: eu.kL,
                children: (0, s.jsx)(e9.Pw, {
                    isProcessing: A,
                    isDisabled: r || f === z.BB.DISABLED || g,
                    className: c()(eu.Lt, { [eu.zE]: j }),
                    options: n.map((e) => ({ ...e, disabled: v && !y.has(e.value) && y.size === a })),
                    placeholder: o,
                    onClose: () => N(!1),
                    onOpen: () => N(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !v,
                    optionClassName: eu.MT,
                    renderOptionLabel: (e) =>
                        (0, s.jsx)(e6, { ...e, isDisabled: v && !y.has(e.value) && y.size === a, isOffset: L }),
                    renderOptionValue: (e) => (v ? (0, s.jsx)(tt, { options: e }) : (0, s.jsx)(te, { ...e[0] })),
                    ...k,
                    "data-migration-pending": !0,
                }),
            }),
            null == C || j ? null : (0, s.jsx)(eo.S0, { ...(0, eo.PS)(C), className: eu.z3 }),
        ],
    });
}
var tl = n(95477),
    ta = n(103557),
    tr = n(321471),
    ts = n(969508),
    ti = n(565469);
function to(e) {
    let t,
        { type: n, style: l, label: a, placeholder: r, minLength: o, maxLength: c, required: d, value: m } = e,
        [h, x] = i.useState(m ?? ""),
        { state: f, executeStateUpdate: g, error: C } = (0, p.At)(e, null != m ? { type: n, value: m } : void 0),
        j = (0, ts.FG)(e.id);
    i.useEffect(() => {
        f?.type === n && x(f.value);
    }, [n, f]);
    let v = {
        value: h,
        placeholder: r,
        minLength: o,
        maxLength: c,
        required: d,
        onChange: function (e) {
            (x(e), g({ type: n, value: e }));
        },
        autoFocus: j,
    };
    switch (l) {
        case u.qz.SMALL:
            t = (0, s.jsx)(tl.k, { ...v });
            break;
        case u.qz.PARAGRAPH:
            t = (0, s.jsx)(ta.f, { autosize: !0, ...v });
    }
    return null != a ? (0, s.jsx)(tr.e, { title: a, required: d, className: ti.k, error: C, children: t }) : t;
}
var tc = n(564771),
    td = n(338717),
    tu = n(96782),
    tm = n(302031),
    tp = n(561323);
function th(e) {
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
        () => () => (0, s.jsx)(tu.zB, { mimeType: r, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, r],
    );
    function h(e) {
        return (0, s.jsx)(tc.A, {
            className: c()({ [tp.V]: e }),
            url: t.url,
            fileName: n ?? D.intl.string(D.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: p,
        });
    }
    return (0, s.jsx)("div", {
        className: tp.O,
        children: a
            ? (0, s.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: td.Oc.SPOILER,
                  obscured: u,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => h(e),
              })
            : h(!1),
    });
}
var tx = n(665260),
    tf = n(731068),
    tg = n(591818),
    tC = n(492230),
    tj = n(294520),
    tv = n(127038),
    tA = n(866665),
    tI = n(144165),
    tN = n(891694),
    ty = n(853784);
function tE(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === u.TD.LOADED_NOT_FOUND)
        return (0, s.jsx)(tA.m, {
            text: D.intl.string(D.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, s.jsx)("div", {
                className: c()(e.className, ty.FN, { [ty.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, s.jsx)(tN.A, { ref: t, className: ty.i4 }),
            }),
        });
    let l = n.loadingState === u.TD.LOADING ? w.Rv1.LOADING : w.Rv1.ERROR;
    return (0, s.jsx)(tI._, {
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
function tL(e) {
    let t = e.item.originalItem.media;
    return (0, s.jsx)(tE, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tT(e) {
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
var tO = n(564107),
    tk = n(394839),
    t_ = n(644447);
function tM(e) {
    let { message: t } = (0, p.jc)(),
        n = (0, y.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: a,
            gifAutoPlay: r,
            getGifFavButton: i,
            getOnMediaItemContextMenu: o,
        } = (0, tO.X)();
    if (null == t || null == n) return null;
    let c = e.items.map((e) => (0, tg.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: d,
            srcToHandlePreloadImage: u,
            srcToSeekOverride: m,
        } = c.length > 1
            ? (0, tC.o)(c, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: a }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function h(e, n) {
        let l = e.originalItem;
        return (0, tj.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let x = e.items.map((e, n) => {
        let l = e.media,
            a = o?.(l),
            s = {
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
                onContextMenu: a,
                autoPlayGif: r,
                getObscureReason: h,
                renderImageComponent: tT,
                renderVideoComponent: tR,
                renderVisualPlaceholderComponent: tL,
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
            c = (0, t_.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (c in d && ((s.onClick = d[c]), (s.handlePreloadImage = u[c]), (s.onSeekRequest = m[c])), s);
    });
    return (0, s.jsx)("div", { children: (0, s.jsx)(tk.A, { items: x, isInAppComponentsV2: !0 }) });
}
var tP = n(210716);
function tw(e) {
    let { divider: t, spacing: n } = e;
    return (0, s.jsx)("div", { className: c()({ [tP.f]: n === u.C8.LARGE, [tP.y]: t }) });
}
var tD = n(46054),
    tB = n(521981),
    tU = n(204255);
let tF = {
        SIZE: { default: void 0, reduced: tU.k2 },
        COLOR: { default: void 0, muted: tU.JF },
        WEIGHT: { default: void 0, reduced: tU.Xj },
    },
    tz = i.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tG() {
    return i.useContext(tz);
}
function tH(e) {
    let { children: t, size: n, color: l, weight: a } = e,
        r = tG(),
        o = i.useMemo(() => {
            let e = { className: void 0, size: n ?? r.size, color: l ?? r.color, weight: a ?? r.weight },
                t = c()(tF.SIZE[e.size], tF.COLOR[e.color], tF.WEIGHT[e.weight]);
            return ("" !== t && (e.className = c()(tU.zr, t)), e);
        }, [n, l, a, r]);
    return (0, s.jsx)(tz.Provider, { value: o, children: t });
}
let tV = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var tK = n(738262),
    tY = n(165648);
function tW(e) {
    let t,
        { content: n, className: l } = e,
        a =
            ((t = (0, p.jc)()),
            (0, i.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, tB.ko)(t.message, tV)
                              : (0, tB.Le)({ channelId: t.channelId, renderOptions: tV })),
                      tD.A.parse(n, !0, e));
            }, [n, t])),
        r = tG();
    return (0, s.jsx)("div", { className: c()(l, tY.PT, tK.T, r.className), children: a });
}
var tX = n(838541),
    tq = n(292151);
function tZ(e) {
    let { media: t, spoiler: n, description: l } = e,
        a = (0, tv.wz)(t),
        r = (0, tx.Lt)(t.flags, tf.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tO.X)(),
        [d, u] = i.useState(n),
        [m, p] = i.useState(n);
    function h(e) {
        return "IMAGE" !== a
            ? (0, s.jsx)(tE, {
                  className: tq.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, s.jsx)(tS.LL, {
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
                  mediaLayoutType: tX.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: r,
              });
    }
    return (
        n !== d && (u(n), p(n)),
        n
            ? (0, s.jsx)(tm.Ay, {
                  type: tm.Ay.Types.ATTACHMENT,
                  reason: td.Oc.SPOILER,
                  obscured: m,
                  onToggleObscurity: () => p((e) => !e),
                  children: (e) => h(e),
              })
            : h(!1)
    );
}
var t$ = n(868281);
function tJ() {
    return (0, s.jsx)("div", {
        className: t$.k,
        children: (0, s.jsx)(eN.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: D.intl.string(D.t.zksHZO),
        }),
    });
}
n(321073);
var tQ = n(602853),
    t0 = n(534890),
    t1 = n(831544),
    t5 = n(460905),
    t8 = n(109112),
    t2 = n(664121),
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
            totalVoiceMinutes: a = 0,
            numEmojisSent: r = 0,
            topEmoji: o,
            topGame: c,
            topGuild: d,
            powerLevel: u,
            powerLevelPercentile: m,
        } = t,
        p = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        h = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(r),
        x = (0, t7.oO)(a),
        f = (0, t7.OW)(n),
        g = t3.f[n],
        C = (0, tQ.r)(g.primaryColor).hex(),
        j = (0, tQ.r)(g.secondaryColor).hex({ opacity: 0.2 }),
        v = (0, y.bG)([X.A], () => X.A.getGuild(d?.guildId)),
        A = new Intl.NumberFormat(D.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        I = (0, t7._V)(m ?? 0),
        E = (0, i.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, s.jsxs)("div", {
        className: nn.kL,
        style: { backgroundColor: C },
        children: [
            (0, s.jsxs)("div", {
                className: nn.Nr,
                children: [
                    (0, s.jsx)("img", { src: f, alt: "", className: nn.LY, style: { backgroundColor: C } }),
                    (0, s.jsxs)("div", {
                        className: nn.M1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, s.jsx)(t0.ChatIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eN.E, { variant: "text-sm/medium", className: nn.KA, children: p }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, s.jsx)(t1.MicrophoneIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eN.E, { variant: "text-sm/medium", className: nn.KA, children: x }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, s.jsx)(t5.n, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eN.E, { variant: "text-sm/medium", className: nn.KA, children: h }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == o
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t8._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: D.intl.string(nt.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(N.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: nn.iY,
                                                  }),
                                                  (0, s.jsx)(eN.E, {
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
                            (0, s.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == c
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t8._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: D.intl.string(nt.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("img", {
                                                      src: ne.Ay.getApplicationIconURL({
                                                          id: c.applicationId,
                                                          icon: c.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: nn.iY,
                                                  }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: c.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == d
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t8._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: D.intl.string(nt.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  null != v
                                                      ? (0, s.jsx)(t6.Ay, {
                                                            guild: v,
                                                            size: t6.Ay.Sizes.SMOL,
                                                            className: nn.iY,
                                                        })
                                                      : (0, s.jsx)(t2.R, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
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
                className: nn.qr,
                style: { backgroundColor: j },
                children: (0, s.jsx)(t4.D, {
                    variant: "display-sm",
                    className: nn.DD,
                    children: D.intl.string(nt.default["CdU/PF"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: nn.hC,
                style: { backgroundColor: C },
                children: [
                    (0, s.jsx)("div", {
                        className: nn.TO,
                        children: E.map((e, t) =>
                            (0, s.jsx)(
                                "img",
                                { className: nn.mG, src: e, width: 4, alt: "", style: { opacity: t >= I ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, s.jsxs)("div", {
                        className: nn.JA,
                        children: [
                            (0, s.jsx)(eN.E, { variant: "text-xs/normal", className: nn.KA, children: "LVL" }),
                            (0, s.jsx)(eN.E, { variant: "text-xs/bold", className: nn.KA, children: A.format(u ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var na = n(878358),
    nr = n(309913);
function ns(e) {
    let { checkpointData: t } = e;
    switch (t.version) {
        case nr.wk.V2025:
            return (0, s.jsx)(nl, { checkpointData: t });
        case nr.wk.V2026:
            return (0, s.jsx)(na.A, { checkpointData: t });
        default:
            return (0, s.jsx)(tJ, {});
    }
}
var ni = n(681154);
class no extends i.PureComponent {
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
var nc = n(211401),
    nd = n(500049),
    nu = n(429913),
    nm = n(355622),
    np = n(583846),
    nh = n(818023),
    nx = n(52133),
    nf = n(803306),
    ng = n(860071),
    nC = n(808380),
    nj = n(409626),
    nv = n(692969),
    nA = n(424994),
    nI = (((r = {})[(r.EMBED = 1)] = "EMBED"), r);
let nN = { [nC.Y.XBOX]: nA.a4.XBOX, [nC.Y.PLAYSTATION]: nA.a4.PLAYSTATION },
    ny = { [nI.EMBED]: nj.GameProfileSources.Embed };
function nE(e) {
    let t,
        n,
        { entry: l, location: a, baseEntryData: r } = e,
        s = (0, nu.h)(l.extra.application_id),
        i = s?.getIconURL(nh.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = nN[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === ni.ContentInventoryEntryType.PLAYED_GAME && (0, np.JM)(l) && !(0, np.I5)(l)
            ? D.t.vPg1JT
            : D.t.rPqqts;
    let c = ny[a],
        d = {
            onClick: (0, nv.A)({
                location: c,
                applicationId: l.extra.application_id,
                source: c,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: D.intl.formatToPlainString(D.t["9sZWVp"], { gameName: o }),
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
var nb = n(205327),
    nS = n(261020),
    nL = n(272984),
    nT = n(970928);
let nR = i.createContext(void 0);
function nO(e, t) {
    return i.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function nk(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = i.useRef([]);
                return (
                    i.useEffect(() => {
                        (0, nx.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nf.wz)(e) : ng.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case ni.ContentInventoryEntryType.TOP_ARTIST:
            return (0, s.jsx)(nP, { entry: t, ...l });
        case ni.ContentInventoryEntryType.TOP_GAME:
            return (0, s.jsx)(nw, { entry: t, ...l });
        case ni.ContentInventoryEntryType.PLAYED_GAME:
            return (0, s.jsx)(nD, { entry: t, ...l });
        case ni.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, s.jsx)(nB, { entry: t, ...l });
        case ni.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, s.jsx)(nU, { entry: t, ...l });
        case ni.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, s.jsx)(nM, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function n_(e) {
    let { errorFallback: t, ...n } = e;
    return (0, s.jsx)(no, { fallback: t, children: (0, s.jsx)(nk, { ...n }) });
}
function nM(e) {
    let { entry: t, children: n, ...l } = e,
        a = nO(
            (function (e) {
                let { entry: t } = e,
                    n = (0, nu.h)(t.extra.application_id),
                    l = n?.getIconURL(nh.iu.LARGE),
                    a = t.extra.activity_name,
                    r = (0, np.Hd)(t) ? D.t.vPg1JT : D.t.rPqqts,
                    s = {
                        onClick: function () {
                            nc.R(nd.s4.TEXT, nm.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: D.intl.formatToPlainString(D.t.NTHttN, { title: a }),
                    };
                return { thumbnailUrl: l, title: a, titleClickable: s, thumbnailClickable: s, userDescription: r };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nR.Provider, { value: a, children: n });
}
function nP(e) {
    let { entry: t, children: n, ...l } = e,
        a = nO(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: a, image_url: r } = n.extra.media,
                    s = n.extra.artist.name,
                    i = {
                        onClick: () => (0, nS.n)(nL.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, nS.n)(nL.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: s }),
                    };
                return (
                    a === nb.X.SPOTIFY && (t = { type: nA.a4.SPOTIFY }),
                    {
                        ...l,
                        title: s,
                        thumbnailUrl: r,
                        titleClickable: o,
                        subtitleClickable: i,
                        thumbnailClickable: i,
                        userDescription: D.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nR.Provider, { value: a, children: n });
}
function nw(e) {
    let { entry: t, children: n, ...l } = e,
        a = nO(nE({ entry: t, ...l }), l.location);
    return (0, s.jsx)(nR.Provider, { value: a, children: n });
}
function nD(e) {
    let { entry: t, children: n, ...l } = e,
        a = nO(nE({ entry: t, ...l }), l.location);
    return (0, s.jsx)(nR.Provider, { value: a, children: n });
}
function nB(e) {
    let { entry: t, children: n, ...l } = e,
        a = nO(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    a = (0, nu.h)(n.extra.application_id),
                    r = a?.getIconURL(128),
                    s = (0, nT.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        nh.iu.LARGE,
                        nh.iu.LARGE,
                    ]),
                    o = n.extra.media_title,
                    c = n.extra.media_subtitle,
                    d = (0, np.Hd)(n) ? D.t["LH+Z3y"] : D.t.YuKgml,
                    u = { type: nA.a4.CRUNCHYROLL },
                    m = i.useMemo(() => {
                        if (null == n.extra.url) return;
                        let e = tb.A.safeParseWithQuery(n.extra.url);
                        if (null != e && null != e.protocol && null != e.hostname) return e;
                    }, [n.extra.url]);
                return (
                    null != m &&
                        (t = {
                            href: tb.A.format(m),
                            ariaDescription: D.intl.formatToPlainString(D.t.aFFQ3g, { title: o }),
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
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nR.Provider, { value: a, children: n });
}
function nU(e) {
    let { entry: t, children: n, ...l } = e,
        a = nO(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    a = n.extra.entries[0].media,
                    r = a.artists[0],
                    { title: s, provider: i, image_url: o } = a,
                    c = r.name,
                    d = {
                        onClick: () => (0, nS.n)(nL.M0.TRACK, a.external_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: s }),
                    },
                    u = {
                        onClick: () => (0, nS.n)(nL.M0.ARTIST, r.external_id),
                        ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: c }),
                    };
                return (
                    i === nb.X.SPOTIFY && (t = { type: nA.a4.SPOTIFY }),
                    {
                        ...l,
                        title: s,
                        subtitle: c,
                        thumbnailUrl: o,
                        titleClickable: d,
                        subtitleClickable: u,
                        thumbnailClickable: d,
                        userDescription: D.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(nR.Provider, { value: a, children: n });
}
var nF = n(28863),
    nz = n(531142),
    nG = n(939249),
    nH = n(43990),
    nV = n(696986),
    nK = n(342952),
    nY = n(576757),
    nW = n(291594),
    nX = n(22869),
    nq = n(959),
    nZ = n(968544);
function n$(e) {
    let { entry: t, channel: n, className: l } = e,
        a = i.useRef(null),
        r = i.useRef(null),
        {
            displayParticipants: o,
            participant1: d,
            participant2: u,
            numOtherParticipants: m,
            orderedParticipants: p,
        } = (0, nY.A)(t),
        h = [d, u];
    return (0, s.jsxs)("div", {
        className: c()(nZ.kL, l),
        children: [
            o.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(nq.A, {
                              targetElementRef: a,
                              participants: p,
                              channel: n,
                              children: (e) =>
                                  (0, s.jsx)(nG.D, {
                                      innerRef: a,
                                      className: nZ.vk,
                                      ...e,
                                      children: (0, s.jsx)(nK.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eX._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, s.jsx)(nV.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, s.jsx)(t4.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: c()(nZ.IY, nZ.Io),
                scaleFontToUserSetting: !0,
                children: D.intl.format(D.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, h[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, h[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, s.jsx)(nX.A, { text: e, user: h[0], channel: n }, t),
                    name1Hook: (e, t) => (0, s.jsx)(nX.A, { text: e, user: h[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, s.jsx)(
                            nq.A,
                            {
                                targetElementRef: r,
                                participants: p,
                                channel: n,
                                children: (t) =>
                                    (0, s.jsx)(nW.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, s.jsx)(eN.E, {
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
var nJ = n(263577),
    nQ = n(347306),
    n0 = n(790381),
    n1 = n(266080),
    n5 = n(121090),
    n8 = n(18282);
let n2 = { [nA.a4.SPOTIFY]: n5.A, [nA.a4.CRUNCHYROLL]: nQ.k, [nA.a4.XBOX]: n1.A, [nA.a4.PLAYSTATION]: n0.A },
    n4 = {
        [nA.a4.SPOTIFY]: () => D.intl.string(D.t["0ZB/XE"]),
        [nA.a4.CRUNCHYROLL]: () => D.intl.string(D.t.jdJYXw),
        [nA.a4.XBOX]: () => D.intl.string(D.t.Nfvo72),
        [nA.a4.PLAYSTATION]: () => D.intl.string(D.t.fFl4jo),
    };
function n3(e) {
    let { type: t, "aria-label": n, ...l } = e,
        a = n2[t];
    if (null == a) return null;
    let r = n ?? n4[t]?.();
    return (0, s.jsx)(n8.A, { Icon: a, ...l, "aria-label": r });
}
var n7 = n(140651),
    n9 = n(506326),
    n6 = n(915089),
    le = n(818348),
    lt = n(167848),
    ln = n(154342);
function ll(e) {
    let { className: t, clickableClassName: n, clickable: l, children: a } = e,
        r = (0, n6.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: i } = l;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.A, { id: r, children: e }),
                (0, s.jsx)(nF.Anchor, { className: c()(t, n), href: i, "aria-describedby": r, children: a }),
            ],
        });
    }
    let { onClick: i, ariaDescription: o } = l ?? {};
    return (0, s.jsxs)(nz.g.Provider, {
        value: null == i,
        children: [
            null != i && null != o && (0, s.jsx)(d.A, { id: r, children: o }),
            (0, s.jsx)(nG.D, {
                onClick: i,
                "aria-describedby": null == i ? void 0 : r,
                className: c()(t, null != i && n),
                children: a,
            }),
        ],
    });
}
function la(e) {
    let { clickable: t, ...n } = e;
    return (0, s.jsx)(ll, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: ln.v });
}
function lr(e) {
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
        p = (0, n6.GV)(),
        { primaryColor: h, secondaryColor: x } = (0, n7.A)(r);
    return (
        null != r && (m.background = `linear-gradient(45deg, ${h}, ${x})`),
        (0, s.jsx)(nH.N, {
            theme: le.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, s.jsxs)("figure", {
                    "aria-roledescription": D.intl.string(D.t.zFfUhF),
                    "aria-labelledby": p,
                    className: c()(lt.kL, e),
                    style: m,
                    children: [
                        (0, s.jsx)(ll, {
                            className: lt.iT,
                            clickableClassName: lt.vk,
                            clickable: d,
                            children: (0, s.jsx)(nJ.V, { src: r, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, s.jsxs)("div", {
                            className: lt.op,
                            children: [
                                (0, s.jsx)(n$, { channel: n, entry: t, className: lt.VV }),
                                (0, s.jsx)(nV.h, { size: 2 }),
                                (0, s.jsx)(la, {
                                    clickable: i,
                                    className: lt.sd,
                                    children: (0, s.jsx)(t4.D, {
                                        id: p,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: c()(lt.ek, lt.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != a
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(nV.h, { size: 2 }),
                                              (0, s.jsx)(la, {
                                                  clickable: o,
                                                  className: lt.sd,
                                                  children: (0, s.jsx)(eN.E, {
                                                      variant: "text-sm/normal",
                                                      className: c()(lt.c1, lt.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: a,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)(n9.iT, { className: lt.jp, entry: t, location: n9.N5.EMBED }),
                            ],
                        }),
                        (0, s.jsx)("div", { className: lt.Y, children: null != u ? (0, s.jsx)(n3, { ...u }) : null }),
                    ],
                }),
        })
    );
}
function ls(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: a } =
            ((t = i.useContext(nR)),
            es()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, s.jsx)(lr, { ...a, entry: n, channel: l });
}
function li(e) {
    let t = (0, p.jc)();
    es()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, y.bG)([W.A], () => W.A.getChannel(n));
    return (
        es()(null != l, "channel must be defined"),
        (0, s.jsx)(n_, {
            location: nI.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, s.jsx)(ls, { ...e, channel: l }),
        })
    );
}
var lo = n(689592);
function lc(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, p.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, s.jsxs)("div", {
              className: lo.kL,
              children: [
                  (0, s.jsx)("div", { className: lo.Y_, children: n(t) }),
                  null != l ? (0, s.jsx)(eo.Ay, { className: lo.z3, message: l, component: e }) : null,
              ],
          });
}
var ld = n(317097),
    lu = n(796951);
function lm(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: a } = e,
        [r, o] = i.useState(l),
        [d, u] = i.useState(l);
    function m(e) {
        return (0, s.jsx)(h.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, s.jsx)("div", {
                    ref: l,
                    className: c()(lu.kL, { [lu.dK]: e, [lu._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, ld.$k)(n, !0) : void 0 },
                    children: (0, s.jsx)(tH, { size: "reduced", children: a(t) }),
                }),
        });
    }
    return (l !== r && (o(l), u(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, s.jsx)(tm.Ay, {
                type: tm.Ay.Types.ATTACHMENT,
                reason: td.Oc.SPOILER,
                obscured: d,
                onToggleObscurity: () => u((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var lp = n(244367),
    lh = n(405388);
function lx(e) {
    let { label: t, description: n, component: l, renderComponent: a } = e,
        r = (0, p.bO)(l);
    return l.type === u.I5.CHECKBOX
        ? a(l, "label-child")
        : (0, s.jsxs)(tr.e, {
              title: t,
              required: l.required,
              error: r,
              children: [
                  null != n && (0, s.jsx)(lp.a, { type: lp.t.DESCRIPTION, className: lh.h, children: n }),
                  a(l, "label-child"),
              ],
          });
}
var lf = n(572891);
function lg(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: a } = (0, p.jc)(),
        [r, i] = (0, h.zn)(),
        o = (0, h.Hq)(i),
        d = n.type === u.I5.BUTTON;
    return (0, s.jsxs)("div", {
        className: lf.uW,
        ref: r,
        children: [
            (0, s.jsxs)("div", {
                className: lf.Y_,
                children: [
                    (0, s.jsx)("div", { className: c()(lf.zt, { [lf.uf]: d }), children: l(t) }),
                    (0, s.jsx)("div", {
                        className: c()(lf.LP, { [lf.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case u.I5.BUTTON:
                                    return (0, s.jsx)(V, { ...e });
                                case u.I5.THUMBNAIL:
                                    return (0, s.jsx)(tZ, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != a ? (0, s.jsx)(eo.Ay, { message: a, component: e }) : null,
        ],
    });
}
var lC = n(359886);
function lj(e) {
    return e.map((e, t) =>
        (0, s.jsxs)(s.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case u.I5.ACTION_ROW:
                            return (0, s.jsx)(lc, { ...t, renderComponents: lj }, n);
                        case u.I5.BUTTON:
                            return (0, s.jsx)(V, { ...t }, n);
                        case u.I5.STRING_SELECT:
                            return (0, s.jsx)(tn, { ...t }, n);
                        case u.I5.CHANNEL_SELECT:
                            return (0, s.jsx)(ef, { ...t }, n);
                        case u.I5.USER_SELECT:
                        case u.I5.ROLE_SELECT:
                        case u.I5.MENTIONABLE_SELECT:
                            return (0, s.jsx)(e8, { ...t }, n);
                        case u.I5.TEXT_INPUT:
                            return (0, s.jsx)(to, { ...t }, n);
                        case u.I5.SECTION:
                            return (0, s.jsx)(lg, { ...t, renderComponents: lj }, n);
                        case u.I5.TEXT_DISPLAY:
                            return (0, s.jsx)(tW, { ...t }, n);
                        case u.I5.MEDIA_GALLERY:
                            return (0, s.jsx)(tM, { ...t }, n);
                        case u.I5.THUMBNAIL:
                            return (0, s.jsx)(tZ, { ...t }, n);
                        case u.I5.FILE:
                            return (0, s.jsx)(th, { ...t }, n);
                        case u.I5.SEPARATOR:
                            return (0, s.jsx)(tw, { ...t }, n);
                        case u.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, s.jsx)(li, { ...t }, n);
                        case u.I5.CONTAINER:
                            return (0, s.jsx)(lm, { ...t, renderComponents: lj }, n);
                        case u.I5.LABEL:
                            return (0, s.jsx)(lx, { ...t, renderComponent: e }, n);
                        case u.I5.FILE_UPLOAD:
                            return (0, s.jsx)(eY, { ...t }, n);
                        case u.I5.CHECKPOINT_CARD:
                            return (0, s.jsx)(ns, { ...t }, n);
                        case u.I5.RADIO_GROUP:
                            return (0, s.jsx)(e7, { ...t }, n);
                        case u.I5.CHECKBOX_GROUP:
                            return (0, s.jsx)(ev, { ...t }, n);
                        case u.I5.CHECKBOX:
                            return (0, s.jsx)(eC, { ...t }, n);
                        default:
                            return (0, s.jsx)(tJ, {}, n);
                    }
                })(e, t.toString()),
                (0, s.jsx)(d.A, { children: "," }),
            ],
        }),
    );
}
function lv(e) {
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
                                  className: c()([lC.k, { [lC.z]: (0, m._c)(t) }]),
                                  children: lj(l),
                              }),
                      }),
                  }),
              }),
          });
}

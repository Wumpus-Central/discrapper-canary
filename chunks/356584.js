n.d(t, { Ay: () => lC, fD: () => lv });
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
    x = n(953756),
    p = n(435558),
    j = n(862482),
    f = n(980707),
    g = n(477782),
    v = n(34188),
    C = n(811893),
    A = n(863610),
    N = n(442433),
    I = n(565645);
n(938796);
var y = n(17928),
    E = n(636537),
    S = n(192308),
    L = n(73153),
    T = n(163437),
    b = n(97352),
    R = n(67480),
    O = n(328968),
    _ = n(927578),
    k = n(580630),
    M = n(963179),
    P = n(168393),
    w = n(652215),
    U = n(105292);
let D = (0, y.UT)([R.A, b.A, O.A], {
    getQueryId: w.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = R.A.get(e),
            n = b.A.getForSKU(e) ?? [],
            l = O.A.getForSKU(e),
            r = R.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === w.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: w.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await E.Bo.get(t);
        (L.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                L.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    L.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                }));
    },
});
var z = n(957565),
    F = n(123917),
    B = n(489414),
    G = n(684946);
function H(e) {
    let { url: t, onSelect: n } = e;
    return z.p5 && null != t
        ? (0, i.jsx)(f.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: N.Z_,
              "aria-label": U.intl.string(U.t.tvTXy8),
              onSelect: n,
              children: (0, i.jsx)(g.rX, {
                  children: (0, i.jsx)(g.Dr, {
                      id: "copy",
                      label: U.intl.string(U.t.uHhnfa),
                      action: () => (0, z.C)(t),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let t,
        { label: n, style: l, disabled: r, emoji: a, url: o, skuId: u } = e,
        { executeStateUpdate: m, visualState: x, isDisabled: f } = (0, h.At)(e),
        g = (function (e) {
            let { data: t } = D(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.openModal)((e) => {
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
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(M.ItemDetailsModal, {
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
                          onClick: c,
                      };
            }
        })(u),
        y = null != u && l === d.in.PREMIUM,
        E = y && g?.disabled,
        L = y ? g?.label : n,
        b = null != a,
        R = null != L && L.length > 0,
        O = l === d.in.LINK && null != o && o.length > 0,
        z = x === B.BB.LOADING || (y && null == g);
    return (
        (t = O
            ? () => {
                  (0, F.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : y
              ? null != g && !1 === g.disabled
                  ? g.onClick
                  : p.noop
              : () => m()),
        (0, i.jsxs)(j.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case d.in.PRIMARY:
                    case d.in.PREMIUM:
                        return j.$n.Colors.BRAND;
                    case d.in.SUCCESS:
                        return j.$n.Colors.GREEN;
                    case d.in.DESTRUCTIVE:
                        return j.$n.Colors.RED;
                    default:
                        return j.$n.Colors.PRIMARY;
                }
            })(l),
            size: j.$n.Sizes.SMALL,
            disabled: r || x === B.BB.DISABLED || f || E,
            onClick: t,
            onContextMenu: (e) => {
                O && (0, N.jA)(e, (e) => (0, i.jsx)(H, { ...e, url: o }));
            },
            role: O ? "link" : "button",
            children: [
                (0, i.jsxs)("div", {
                    className: c()(G.Qs, { [G.R]: z, [G.M2]: y }),
                    "aria-hidden": z,
                    children: [
                        y
                            ? (0, i.jsx)("div", {
                                  className: G.sV,
                                  children: (0, i.jsx)(v.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        b
                            ? (0, i.jsx)(I.A, {
                                  className: c()({ [G.MR]: R }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        R ? (0, i.jsx)("div", { className: G.Pf, children: L }) : null,
                        O ? (0, i.jsx)(C.t, { size: "xs", color: "currentColor", className: G.LE }) : null,
                    ],
                }),
                z
                    ? (0, i.jsx)("div", { className: G.Lq, children: (0, i.jsx)(A.n, { dotRadius: 3.5, themed: !0 }) })
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
function ex(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: r, defaultValues: a } = e,
        { type: o, customId: u, maxValues: m, disabled: x } = t,
        p = (0, ec.c7)(t),
        [j, f] = s.useState(!1),
        [g, v] = s.useState(!1),
        [C, A] = s.useState(new Map(a?.map((e) => [e.value, e]))),
        [N, I] = s.useState(new Set(C.keys())),
        y = s.useRef((a ?? []).map((e) => e.value)),
        E = s.useRef(o),
        S = s.useRef(u),
        [L, T] = s.useState(0);
    s.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => y.current.includes(e)) &&
            y.current.every((t) => e.includes(t)) &&
            o === E.current &&
            u === S.current
        )
            return;
        ((y.current = e), (E.current = o), (S.current = u));
        let t = new Map(a?.map((e) => [e.value, e]));
        (A(t), I(new Set(t.keys())), T((e) => e + 1));
    }, [a, o, u]);
    let b = (0, h.jc)();
    ei()(null != b, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: R,
            executeStateUpdate: O,
            visualState: _,
            isDisabled: k,
            error: M,
        } = b.useComponentState(t, C.size > 0 ? { type: o, selectedOptions: Array.from(C.values()) } : void 0),
        P = null != b.modal,
        w = _ === B.BB.LOADING;
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
    let U = s.useCallback(() => {
        O({ type: o, selectedOptions: Array.from(C.values()) }) && I(new Set(C.keys()));
    }, [O, o, C]);
    s.useEffect(() => {
        j || g || (C.size === N.size && Array.from(C.keys()).every((e) => N.has(e))) || U();
    }, [j, g, N, C, U]);
    let D = 0 === C.size || j,
        z = {
            isProcessing: w,
            isDisabled: x || _ === B.BB.DISABLED || k,
            wrapperClassName: c()(eu.Lt, { [eu.zE]: P }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            filter: !1,
            placeholder: D ? p : void 0,
            onClose: () => f(!1),
            onOpen: () => f(!0),
            onBlur: () => v(!1),
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
                                  value: Array.from(C.values()),
                                  onChange: function (e) {
                                      (j || v(!0), A(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: c()({ [eu.R]: !D }),
                                  closeOnSelect: !1,
                                  ...z,
                                  "data-migration-pending": !0,
                              },
                              L,
                          )
                        : (0, i.jsx)(
                              es.p,
                              {
                                  value: [...C.values()][0],
                                  onChange: function (e) {
                                      return A(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...z,
                                  "data-migration-pending": !0,
                              },
                              L,
                          ),
            }),
            null == M || P ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(M), className: ed.z3 }),
        ],
    });
}
var ep = n(726088);
function ej(e) {
    let { channelTypes: t } = e,
        n = (0, h.jc)(),
        l = n?.channelId,
        r = W.A.getChannel(l),
        a = X.A.getGuild(r?.getGuildId()),
        o = s.useMemo(() => er(e.defaultValues, a?.id, t), [e.defaultValues, a, t]);
    return (0, i.jsx)(ex, {
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
            let l = n.type === w.rbe.GUILD_CATEGORY ? K.FolderIcon : (0, Y.gU)(n);
            return null != l ? (0, i.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, i.jsx)("span", { className: ep.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var ef = n(150934);
function eg(e) {
    let { type: t, default: n } = e,
        l = (0, h.jc)();
    ei()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = s.useMemo(() => r?.type === t && r.value, [r, t]),
        c = l.getParents(e)?.[0],
        u = c?.type === d.I5.LABEL ? c : void 0;
    return (
        ei()(null != u, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(ef.S, {
            label: u.label,
            description: u.description,
            checked: o,
            onChange: function (e) {
                a({ type: t, value: e });
            },
        })
    );
}
var ev = n(167417);
function eC(e) {
    let { type: t, options: n, required: l, maxValues: r } = e,
        a = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: c } = (0, h.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        u = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(ev.$, {
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
    eS = n(608299),
    eL = n(780777),
    eT = n(494921),
    eb = n(851023),
    eR = n(215497),
    eO = n(914905),
    e_ = n(101555),
    ek = n(424170),
    eM = n(409481),
    eP = n(274652),
    ew = n(31717),
    eU = n(255438),
    eD = n(453771),
    ez = n(518960),
    eF = n(382287),
    eB = n(522602),
    eG = n(283655);
function eH(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: s } = e,
        o = (0, eM.C)((0, eD.o2)(s)),
        u = (0, eU.Xq)(o / eU.XF, { useKibibytes: !0, useSpace: !0 });
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
                        children: U.intl.format(U.t.y68I8P, {
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
                            children: U.intl.string(U.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eV() {
    return (0, i.jsxs)("div", {
        className: c()(eG.pp, eG.e8),
        children: [
            (0, i.jsx)(ey.y, { color: eN.A.colors.ICON_STRONG, size: "refresh_sm" }),
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
            className: c()(eG.NJ, { [eG.j1]: l }),
            children: [
                (0, i.jsx)(eO.J, { upload: t, size: l ? eR.L.XSMALL : eR.L.XXSMALL }),
                (0, i.jsx)(eI.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eG.iW,
                    children: t.filename ?? U.intl.string(U.t.ZMirp0),
                }),
                (0, i.jsx)(e_.Ay, {
                    className: eG.BX,
                    children: (0, i.jsx)(eb.A, {
                        className: eG.XI,
                        tooltip: U.intl.string(U.t.N86XcP),
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
    let x = u.modal?.customId;
    ei()(null != x, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: p,
            typesFormattedString: j,
            validateFilenames: f,
            showInvalidFileTypeAlert: g,
        } = (0, ek.M1)(e.fileTypes),
        {
            uploadIds: v,
            setUploadIds: C,
            currentUploads: A,
            error: N,
        } = (function (e) {
            let t = (0, h.jc)();
            ei()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            ei()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = t.useComponentState(e),
                i = s.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = eB.A.getUploads(n, ew.C.InteractionModal),
                c = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                u = s.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                s.useEffect(() => {
                    i.length > c.length && u(i.filter((e) => c.some((t) => t.id === e)));
                }, [i, c, u]),
                { uploadIds: i, setUploadIds: u, currentUploads: c, error: a }
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
        L = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (v.length + e.length > n)
                    return (0, eT.openUploadError)({
                        title: U.intl.string(U.t.wOr6hB),
                        help: U.intl.formatToPlainString(U.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eF.fJ)({ files: e, guildId: I.guild_id, canDeferSizeChecks: !1 })) return (0, ez.V)(I, e);
                if (!f(e.map((e) => e.name))) return g();
                let l = e.map((e) => {
                    let n = (0, ec.so)(x),
                        l = { id: n, file: e, platform: eP.x.WEB, origin: t };
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
                C(v.concat(l));
            },
            [v, n, I, C, x, m, f, g],
        ),
        T = s.useCallback(
            (e) => {
                (e.preventDefault(), o(!1), L(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [L],
        );
    function b(e) {
        null == m || (eS.A.remove(m, e, ew.C.InteractionModal), C(v.filter((t) => t !== e)));
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
    1 === n && 1 === A.length)
        ? (0, i.jsx)(eK, { upload: A[0], handleRemoveFile: b, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: r,
              className: c()(eG.kL, { [eG.Ke]: a, [eG.z3]: null != N }),
              children: [
                  v.length >= n
                      ? (0, i.jsx)(eV, {})
                      : (0, i.jsx)(eH, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: j,
                            guildId: I.guild_id,
                        }),
                  A.length > 0 &&
                      (0, i.jsx)("div", {
                          className: eG.aq,
                          children: A.map((e) => (0, i.jsx)(eK, { upload: e, handleRemoveFile: b }, e.id)),
                      }),
                  (0, i.jsx)(eL.A, {
                      ref: l,
                      onChange: function (e) {
                          (L(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
                      },
                      multiple: n > 1,
                      filters: p.length > 0 ? [{ name: "", extensions: p }] : void 0,
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
    let t = (0, h.jc)(),
        n = t?.channelId,
        l = W.A.getChannel(n),
        r = X.A.getGuild(l?.getGuildId()),
        a = (0, eQ.A)(r?.id, 1e3),
        o = s.useMemo(() => er(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, i.jsx)(ex, {
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
                        return { type: B.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: B.iw.ROLE, value: e.id, label: e.name })),
                ];
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
                        className: ep.Tc,
                        usernameClass: ep.Xh,
                        discriminatorClass: ep.D2,
                        botClass: ep.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === B.iw.ROLE) {
                let n = null != r ? J.A.getRole(r.id, e.value) : void 0,
                    l = null == n ? null : a?.[n.id];
                null != l &&
                    (t = (0, i.jsxs)("div", {
                        className: ep.Ly,
                        children: [
                            (0, i.jsx)(eZ.UserIcon, { size: "sm", color: "currentColor", className: ep.jh }),
                            (0, i.jsx)("span", { className: ep.NT, children: l }),
                        ],
                    }));
            }
            return (0, i.jsxs)("span", {
                className: ep.Pf,
                children: [(0, i.jsx)("span", { className: ep.QK, children: e.label }), t],
            });
        },
        defaultValues: o,
    });
}
var e2 = n(144228),
    e3 = n(821609),
    e4 = n(897132);
function e7(e) {
    let { type: t, options: n, required: l } = e,
        r = s.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: a, executeStateUpdate: o } = (0, h.At)(e, null != r ? { type: t, value: r } : void 0),
        u = s.useMemo(() => (a?.type === t ? a.value : null), [a, t]),
        d = null != u,
        m = s.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function x(e) {
        o({ type: t, value: e });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e2.z, { options: m, value: u ?? "", onChange: x, required: l }),
            !l &&
                (0, i.jsx)("div", {
                    className: c()(e4.H, { [e4.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e3.$, {
                        text: U.intl.string(U.t["5uAtZN"]),
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
            state: x,
            executeStateUpdate: p,
            visualState: j,
            isDisabled: f,
            error: g,
        } = m.useComponentState(e, u.length > 0 ? { type: t, values: u } : void 0),
        v = null != m.modal,
        C = r > 1,
        A = j === B.BB.LOADING,
        [N, I] = s.useState(!1),
        [y, E] = s.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, L] = s.useState(y),
        T = s.useMemo(() => n.some((e) => null != e.emoji), [n]);
    s.useEffect(() => {
        if (x?.type === d.I5.STRING_SELECT) {
            let e = new Set(x.values);
            (E(e), L(e));
        } else {
            let e = new Set(u);
            (E(e), L(e));
        }
    }, [l, u, x]);
    let b = s.useCallback(() => {
        S !== y && p({ type: d.I5.STRING_SELECT, values: Array.from(y) }) && L(y);
    }, [y, S, L, p]);
    s.useEffect(() => {
        N || (y.size === S.size && Array.from(S).every((e) => y.has(e))) || b();
    }, [N, y, S, b]);
    let R = (0, ec.Lr)(e, v ? "modal" : "message"),
        O = e6.lS;
    C ? (O = e6.M8) : R && (O = e6.$l);
    let _ = (0, e6.Ev)({ value: y, onChange: (e) => E(e), onSelectInteraction: O });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e6.Pw, {
                    isProcessing: A,
                    isDisabled: a || j === B.BB.DISABLED || f,
                    className: c()(ed.Lt, { [ed.zE]: v }),
                    options: n.map((e) => ({ ...e, disabled: C && !y.has(e.value) && y.size === r })),
                    placeholder: o,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !C,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e9, { ...e, isDisabled: C && !y.has(e.value) && y.size === r, isOffset: T }),
                    renderOptionValue: (e) => (C ? (0, i.jsx)(tt, { options: e }) : (0, i.jsx)(te, { ...e[0] })),
                    ..._,
                    "data-migration-pending": !0,
                }),
            }),
            null == g || v ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(g), className: ed.z3 }),
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
        [x, p] = s.useState(m ?? ""),
        { state: j, executeStateUpdate: f, error: g } = (0, h.At)(e, null != m ? { type: n, value: m } : void 0),
        v = (0, ti.FG)(e.id);
    s.useEffect(() => {
        j?.type === n && p(j.value);
    }, [n, j]);
    let C = {
        value: x,
        placeholder: a,
        minLength: o,
        maxLength: c,
        required: u,
        onChange: function (e) {
            (p(e), f({ type: n, value: e }));
        },
        autoFocus: v,
    };
    switch (l) {
        case d.qz.SMALL:
            t = (0, i.jsx)(tl.k, { ...C });
            break;
        case d.qz.PARAGRAPH:
            t = (0, i.jsx)(tr.f, { autosize: !0, ...C });
    }
    return null != r ? (0, i.jsx)(ta.e, { title: r, required: u, className: ts.k, error: g, children: t }) : t;
}
var tc = n(564771),
    tu = n(338717),
    td = n(96782),
    tm = n(302031),
    th = n(561323);
function tx(e) {
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
    function x(e) {
        return (0, i.jsx)(tc.A, {
            className: c()({ [th.V]: e }),
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
                  reason: tu.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => x(e),
              })
            : x(!1),
    });
}
var tp = n(665260),
    tj = n(731068),
    tf = n(591818),
    tg = n(492230),
    tv = n(294520),
    tC = n(127038),
    tA = n(866665),
    tN = n(144165),
    tI = n(891694),
    ty = n(853784);
function tE(e) {
    let t = s.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tA.m, {
            text: U.intl.string(U.t.UvDfMz),
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
    let l = n.loadingState === d.TD.LOADING ? w.Rv1.LOADING : w.Rv1.ERROR;
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
var tS = n(998218),
    tL = n(44788);
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
function tb(e) {
    let t = e.item.originalItem.media;
    return (0, tL.LL)({
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
        n = tS.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, tL.$o)({
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
    t_ = n(394839),
    tk = n(644447);
function tM(e) {
    let { message: t } = (0, h.jc)(),
        n = (0, y.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, tO.X)();
    if (null == t || null == n) return null;
    let c = e.items.map((e) => (0, tf.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: u,
            srcToHandlePreloadImage: d,
            srcToSeekOverride: m,
        } = c.length > 1
            ? (0, tg.o)(c, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function x(e, n) {
        let l = e.originalItem;
        return (0, tv.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let p = e.items.map((e, n) => {
        let l = e.media,
            r = o?.(l),
            i = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, tC.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, tp.Lt)(l.flags, tj.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: x,
                renderImageComponent: tb,
                renderVideoComponent: tR,
                renderVisualPlaceholderComponent: tT,
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
            c = (0, tk.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (c in u && ((i.onClick = u[c]), (i.handlePreloadImage = d[c]), (i.onSeekRequest = m[c])), i);
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(t_.A, { items: p, isInAppComponentsV2: !0 }) });
}
var tP = n(210716);
function tw(e) {
    let { divider: t, spacing: n } = e;
    return (0, i.jsx)("div", { className: c()({ [tP.f]: n === d.C8.LARGE, [tP.y]: t }) });
}
var tU = n(46054),
    tD = n(521981),
    tz = n(204255);
let tF = {
        SIZE: { default: void 0, reduced: tz.k2 },
        COLOR: { default: void 0, muted: tz.JF },
        WEIGHT: { default: void 0, reduced: tz.Xj },
    },
    tB = s.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tG() {
    return s.useContext(tB);
}
function tH(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = tG(),
        o = s.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = c()(tF.SIZE[e.size], tF.COLOR[e.color], tF.WEIGHT[e.weight]);
            return ("" !== t && (e.className = c()(tz.zr, t)), e);
        }, [n, l, r, a]);
    return (0, i.jsx)(tB.Provider, { value: o, children: t });
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
        a = tG();
    return (0, i.jsx)("div", { className: c()(l, tY.PT, tK.T, a.className), children: r });
}
var tX = n(838541),
    tq = n(292151);
function tZ(e) {
    let { media: t, spoiler: n, description: l } = e,
        r = (0, tC.wz)(t),
        a = (0, tp.Lt)(t.flags, tj.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tO.X)(),
        [u, d] = s.useState(n),
        [m, h] = s.useState(n);
    function x(e) {
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
            : (0, i.jsx)(tL.LL, {
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
                  children: (e) => x(e),
              })
            : x(!1)
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
n(321073);
var tQ = n(602853),
    t0 = n(534890),
    t1 = n(831544),
    t5 = n(460905),
    t8 = n(109112),
    t2 = n(664121),
    t3 = n(297264),
    t4 = n(606348),
    t7 = n(957806),
    t6 = n(7584),
    t9 = n(548118),
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
        h = new Intl.NumberFormat(U.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        x = new Intl.NumberFormat(U.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(a),
        p = (0, t7.oO)(r),
        j = (0, t7.OW)(n),
        f = t4.f[n],
        g = (0, tQ.r)(f.primaryColor).hex(),
        v = (0, tQ.r)(f.secondaryColor).hex({ opacity: 0.2 }),
        C = (0, y.bG)([X.A], () => X.A.getGuild(u?.guildId)),
        A = new Intl.NumberFormat(U.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        N = (0, t7._V)(m ?? 0),
        E = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, i.jsxs)("div", {
        className: nn.kL,
        style: { backgroundColor: g },
        children: [
            (0, i.jsxs)("div", {
                className: nn.Nr,
                children: [
                    (0, i.jsx)("img", { src: j, alt: "", className: nn.LY, style: { backgroundColor: g } }),
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
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: nn.KA, children: p }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: nn.dJ,
                                children: [
                                    (0, i.jsx)(t5.n, { color: eN.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: nn.KA, children: x }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: nn.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(t8._, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: U.intl.string(nt.default["fn+gnp"]),
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
                                                              ? t6.Ay.convertSurrogateToName(o.emojiName)
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
                                                  (0, i.jsx)(t8._, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: U.intl.string(nt.default["26V/4h"]),
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
                                                  (0, i.jsx)(t8._, { color: eN.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: nn.KA,
                                                      children: U.intl.string(nt.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != C
                                                      ? (0, i.jsx)(t9.Ay, {
                                                            guild: C,
                                                            size: t9.Ay.Sizes.SMOL,
                                                            className: nn.iY,
                                                        })
                                                      : (0, i.jsx)(t2.R, { color: eN.A.colors.BLACK, size: "xs" }),
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
                style: { backgroundColor: v },
                children: (0, i.jsx)(t3.D, {
                    variant: "display-sm",
                    className: nn.DD,
                    children: U.intl.string(nt.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: nn.hC,
                style: { backgroundColor: g },
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
var nr = n(878358),
    na = n(309913);
function ni(e) {
    let { checkpointData: t } = e;
    switch (t.version) {
        case na.wk.V2025:
            return (0, i.jsx)(nl, { checkpointData: t });
        case na.wk.V2026:
            return (0, i.jsx)(nr.A, { checkpointData: t });
        default:
            return (0, i.jsx)(tJ, {});
    }
}
var ns = n(681154);
class no extends s.PureComponent {
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
    nu = n(500049),
    nd = n(429913),
    nm = n(355622),
    nh = n(583846),
    nx = n(818023),
    np = n(52133),
    nj = n(803306),
    nf = n(860071),
    ng = n(808380),
    nv = n(409626),
    nC = n(692969),
    nA = n(424994),
    nN = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let nI = { [ng.Y.XBOX]: nA.a4.XBOX, [ng.Y.PLAYSTATION]: nA.a4.PLAYSTATION },
    ny = { [nN.EMBED]: nv.GameProfileSources.Embed };
function nE(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, nd.h)(l.extra.application_id),
        s = i?.getIconURL(nx.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = nI[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === ns.ContentInventoryEntryType.PLAYED_GAME && (0, nh.JM)(l) && !(0, nh.I5)(l)
            ? U.t.vPg1JT
            : U.t.rPqqts;
    let c = ny[r],
        u = {
            onClick: (0, nC.A)({
                location: c,
                applicationId: l.extra.application_id,
                source: c,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: U.intl.formatToPlainString(U.t["9sZWVp"], { gameName: o }),
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
var nS = n(205327),
    nL = n(261020),
    nT = n(272984),
    nb = n(970928);
let nR = s.createContext(void 0);
function nO(e, t) {
    return s.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function n_(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, np.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nj.wz)(e) : nf.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case ns.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nP, { entry: t, ...l });
        case ns.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nw, { entry: t, ...l });
        case ns.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(nU, { entry: t, ...l });
        case ns.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nD, { entry: t, ...l });
        case ns.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nz, { entry: t, ...l });
        case ns.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(nM, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function nk(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(no, { fallback: t, children: (0, i.jsx)(n_, { ...n }) });
}
function nM(e) {
    let { entry: t, children: n, ...l } = e,
        r = nO(
            (function (e) {
                let { entry: t } = e,
                    n = (0, nd.h)(t.extra.application_id),
                    l = n?.getIconURL(nx.iu.LARGE),
                    r = t.extra.activity_name,
                    a = (0, nh.Hd)(t) ? U.t.vPg1JT : U.t.rPqqts,
                    i = {
                        onClick: function () {
                            nc.R(nu.s4.TEXT, nm.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: U.intl.formatToPlainString(U.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nR.Provider, { value: r, children: n });
}
function nP(e) {
    let { entry: t, children: n, ...l } = e,
        r = nO(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: r, image_url: a } = n.extra.media,
                    i = n.extra.artist.name,
                    s = {
                        onClick: () => (0, nL.n)(nT.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, nL.n)(nT.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: i }),
                    };
                return (
                    r === nS.X.SPOTIFY && (t = { type: nA.a4.SPOTIFY }),
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
    return (0, i.jsx)(nR.Provider, { value: r, children: n });
}
function nw(e) {
    let { entry: t, children: n, ...l } = e,
        r = nO(nE({ entry: t, ...l }), l.location);
    return (0, i.jsx)(nR.Provider, { value: r, children: n });
}
function nU(e) {
    let { entry: t, children: n, ...l } = e,
        r = nO(nE({ entry: t, ...l }), l.location);
    return (0, i.jsx)(nR.Provider, { value: r, children: n });
}
function nD(e) {
    let { entry: t, children: n, ...l } = e,
        r = nO(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = (0, nd.h)(n.extra.application_id),
                    a = r?.getIconURL(128),
                    i = (0, nb.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        nx.iu.LARGE,
                        nx.iu.LARGE,
                    ]),
                    o = n.extra.media_title,
                    c = n.extra.media_subtitle,
                    u = (0, nh.Hd)(n) ? U.t["LH+Z3y"] : U.t.YuKgml,
                    d = { type: nA.a4.CRUNCHYROLL },
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
                        subtitle: c,
                        userDescription: u,
                        providerIconProps: d,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nR.Provider, { value: r, children: n });
}
function nz(e) {
    let { entry: t, children: n, ...l } = e,
        r = nO(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = n.extra.entries[0].media,
                    a = r.artists[0],
                    { title: i, provider: s, image_url: o } = r,
                    c = a.name,
                    u = {
                        onClick: () => (0, nL.n)(nT.M0.TRACK, r.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: i }),
                    },
                    d = {
                        onClick: () => (0, nL.n)(nT.M0.ARTIST, a.external_id),
                        ariaDescription: U.intl.formatToPlainString(U.t.xTsar2, { itemName: c }),
                    };
                return (
                    s === nS.X.SPOTIFY && (t = { type: nA.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        subtitle: c,
                        thumbnailUrl: o,
                        titleClickable: u,
                        subtitleClickable: d,
                        thumbnailClickable: u,
                        userDescription: U.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, i.jsx)(nR.Provider, { value: r, children: n });
}
var nF = n(28863),
    nB = n(531142),
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
        r = s.useRef(null),
        a = s.useRef(null),
        {
            displayParticipants: o,
            participant1: u,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, nY.A)(t),
        x = [u, d];
    return (0, i.jsxs)("div", {
        className: c()(nZ.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(nq.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, i.jsx)(nG.D, {
                                      innerRef: r,
                                      className: nZ.vk,
                                      ...e,
                                      children: (0, i.jsx)(nK.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eX._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(nV.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(t3.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: c()(nZ.IY, nZ.Io),
                scaleFontToUserSetting: !0,
                children: U.intl.format(U.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, x[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, x[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(nX.A, { text: e, user: x[0], channel: n }, t),
                    name1Hook: (e, t) => (0, i.jsx)(nX.A, { text: e, user: x[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            nq.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, i.jsx)(nW.A, {
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
var nJ = n(263577),
    nQ = n(347306),
    n0 = n(790381),
    n1 = n(266080),
    n5 = n(121090),
    n8 = n(18282);
let n2 = { [nA.a4.SPOTIFY]: n5.A, [nA.a4.CRUNCHYROLL]: nQ.k, [nA.a4.XBOX]: n1.A, [nA.a4.PLAYSTATION]: n0.A },
    n3 = {
        [nA.a4.SPOTIFY]: () => U.intl.string(U.t["0ZB/XE"]),
        [nA.a4.CRUNCHYROLL]: () => U.intl.string(U.t.jdJYXw),
        [nA.a4.XBOX]: () => U.intl.string(U.t.Nfvo72),
        [nA.a4.PLAYSTATION]: () => U.intl.string(U.t.fFl4jo),
    };
function n4(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = n2[t];
    if (null == r) return null;
    let a = n ?? n3[t]?.();
    return (0, i.jsx)(n8.A, { Icon: r, ...l, "aria-label": a });
}
var n7 = n(140651),
    n6 = n(506326),
    n9 = n(915089),
    le = n(818348),
    lt = n(167848),
    ln = n(154342);
function ll(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, n9.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.A, { id: a, children: e }),
                (0, i.jsx)(nF.Anchor, { className: c()(t, n), href: s, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(nB.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(u.A, { id: a, children: o }),
            (0, i.jsx)(nG.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : a,
                className: c()(t, null != s && n),
                children: r,
            }),
        ],
    });
}
function lr(e) {
    let { clickable: t, ...n } = e;
    return (0, i.jsx)(ll, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: ln.v });
}
function la(e) {
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
        h = (0, n9.GV)(),
        { primaryColor: x, secondaryColor: p } = (0, n7.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${x}, ${p})`),
        (0, i.jsx)(nH.N, {
            theme: le.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": U.intl.string(U.t.zFfUhF),
                    "aria-labelledby": h,
                    className: c()(lt.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(ll, {
                            className: lt.iT,
                            clickableClassName: lt.vk,
                            clickable: u,
                            children: (0, i.jsx)(nJ.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: lt.op,
                            children: [
                                (0, i.jsx)(n$, { channel: n, entry: t, className: lt.VV }),
                                (0, i.jsx)(nV.h, { size: 2 }),
                                (0, i.jsx)(lr, {
                                    clickable: s,
                                    className: lt.sd,
                                    children: (0, i.jsx)(t3.D, {
                                        id: h,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: c()(lt.ek, lt.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(nV.h, { size: 2 }),
                                              (0, i.jsx)(lr, {
                                                  clickable: o,
                                                  className: lt.sd,
                                                  children: (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/normal",
                                                      className: c()(lt.c1, lt.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(n6.iT, { className: lt.jp, entry: t, location: n6.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: lt.Y, children: null != d ? (0, i.jsx)(n4, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function li(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = s.useContext(nR)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(la, { ...r, entry: n, channel: l });
}
function ls(e) {
    let t = (0, h.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, y.bG)([W.A], () => W.A.getChannel(n));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(nk, {
            location: nN.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(li, { ...e, channel: l }),
        })
    );
}
var lo = n(689592);
function lc(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, h.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: lo.kL,
              children: [
                  (0, i.jsx)("div", { className: lo.Y_, children: n(t) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: lo.z3, message: l, component: e }) : null,
              ],
          });
}
var lu = n(317097),
    ld = n(796951);
function lm(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, o] = s.useState(l),
        [u, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(x.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: c()(ld.kL, { [ld.dK]: e, [ld._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, lu.$k)(n, !0) : void 0 },
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
var lh = n(244367),
    lx = n(405388);
function lp(e) {
    let { label: t, description: n, component: l, renderComponent: r } = e,
        a = (0, h.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, i.jsxs)(ta.e, {
              title: t,
              required: l.required,
              error: a,
              children: [
                  null != n && (0, i.jsx)(lh.a, { type: lh.t.DESCRIPTION, className: lx.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var lj = n(572891);
function lf(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, s] = (0, x.zn)(),
        o = (0, x.Hq)(s),
        u = n.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: lj.uW,
        ref: a,
        children: [
            (0, i.jsxs)("div", {
                className: lj.Y_,
                children: [
                    (0, i.jsx)("div", { className: c()(lj.zt, { [lj.uf]: u }), children: l(t) }),
                    (0, i.jsx)("div", {
                        className: c()(lj.LP, { [lj.HQ]: o }),
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
var lg = n(359886);
function lv(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(lc, { ...t, renderComponents: lv }, n);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(V, { ...t }, n);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(tn, { ...t }, n);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(ej, { ...t }, n);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e8, { ...t }, n);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(to, { ...t }, n);
                        case d.I5.SECTION:
                            return (0, i.jsx)(lf, { ...t, renderComponents: lv }, n);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(tW, { ...t }, n);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(tM, { ...t }, n);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(tZ, { ...t }, n);
                        case d.I5.FILE:
                            return (0, i.jsx)(tx, { ...t }, n);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(tw, { ...t }, n);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(ls, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(lm, { ...t, renderComponents: lv }, n);
                        case d.I5.LABEL:
                            return (0, i.jsx)(lp, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eY, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            return (0, i.jsx)(ni, { ...t }, n);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e7, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(eC, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(eg, { ...t }, n);
                        default:
                            return (0, i.jsx)(tJ, {}, n);
                    }
                })(e, t.toString()),
                (0, i.jsx)(u.A, { children: "," }),
            ],
        }),
    );
}
function lC(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [r, a] = (0, x.zn)();
    return 0 === l.length
        ? null
        : (0, i.jsx)(h.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, i.jsx)(x.O7.Root, {
                  containerInnerWidth: a,
                  children: (0, i.jsx)("div", {
                      style: { width: "100%" },
                      ref: r,
                      children: (0, i.jsx)(x.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: e,
                                  className: c()([lg.k, { [lg.z]: (0, m._c)(t) }]),
                                  children: lv(l),
                              }),
                      }),
                  }),
              }),
          });
}

n.d(t, { Ay: () => l7, fD: () => l3 });
var l,
    r,
    a,
    i,
    s = n(477900),
    o = n(582128),
    c = n(503698),
    u = n.n(c),
    d = n(140735),
    m = n(155718),
    h = n(383233),
    p = n(298236),
    x = n(953756),
    g = n(435558),
    C = n(862482),
    f = n(980707),
    j = n(477782),
    v = n(34188),
    A = n(811893),
    N = n(863610),
    I = n(442433),
    E = n(565645);
n(938796);
var y = n(17928),
    S = n(636537),
    b = n(192308),
    T = n(73153),
    L = n(163437),
    R = n(97352),
    O = n(67480),
    k = n(328968),
    _ = n(158045),
    M = n(580630),
    P = n(963179),
    D = n(168393),
    w = n(652215),
    B = n(105292);
let U = (0, y.UT)([O.A, R.A, k.A], {
    getQueryId: w.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = O.A.get(e),
            n = R.A.getForSKU(e) ?? [],
            l = k.A.getForSKU(e),
            r = O.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === w.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: w.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await S.Bo.get(t);
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
    G = n(489414),
    H = n(684946);
function V(e) {
    let { url: t, onSelect: n } = e;
    return F.p5 && null != t
        ? (0, s.jsx)(f.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: I.Z_,
              "aria-label": B.intl.string(B.t.tvTXy8),
              onSelect: n,
              children: (0, s.jsx)(j.rX, {
                  children: (0, s.jsx)(j.Dr, {
                      id: "copy",
                      label: B.intl.string(B.t.uHhnfa),
                      action: () => (0, F.C)(t),
                  }),
              }),
          })
        : null;
}
function Y(e) {
    let t,
        { label: n, style: l, disabled: r, emoji: a, url: i, skuId: c } = e,
        { executeStateUpdate: d, visualState: h, isDisabled: x } = (0, p.At)(e),
        f = (function (e) {
            let { data: t } = U(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                i = o.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, b.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, s.jsx)(D.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, L.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                c = o.useCallback(() => {
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
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: B.intl.string(B.t.CHa0vN) };
                if (l.type === w.Puh.SUBSCRIPTION) {
                    if (null == a || 0 === a.length) return { disabled: !0, label: B.intl.string(B.t.CHa0vN) };
                    let e = a[0],
                        t = (0, _.y8)(e.id);
                    return {
                        disabled: !1,
                        label: B.intl.formatToPlainString(B.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, M.$g)(t.amount, t.currency),
                        }),
                        onClick: i,
                    };
                }
                return null == l.price
                    ? { disabled: !0, label: B.intl.string(B.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: B.intl.formatToPlainString(B.t["c6Q+B3"], {
                              skuName: l.name,
                              price: (0, M.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: c,
                      };
            }
        })(c),
        j = null != c && l === m.in.PREMIUM,
        y = j && f?.disabled,
        S = j ? f?.label : n,
        T = null != a,
        R = null != S && S.length > 0,
        O = l === m.in.LINK && null != i && i.length > 0,
        k = h === G.BB.LOADING || (j && null == f);
    return (
        (t = O
            ? () => {
                  (0, z.h)({ href: i ?? "", shouldConfirm: !0 });
              }
            : j
              ? null != f && !1 === f.disabled
                  ? f.onClick
                  : g.noop
              : () => d()),
        (0, s.jsxs)(C.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case m.in.PRIMARY:
                    case m.in.PREMIUM:
                        return C.$n.Colors.BRAND;
                    case m.in.SUCCESS:
                        return C.$n.Colors.GREEN;
                    case m.in.DESTRUCTIVE:
                        return C.$n.Colors.RED;
                    default:
                        return C.$n.Colors.PRIMARY;
                }
            })(l),
            size: C.$n.Sizes.SMALL,
            disabled: r || h === G.BB.DISABLED || x || y,
            onClick: t,
            onContextMenu: (e) => {
                O && (0, I.jA)(e, (e) => (0, s.jsx)(V, { ...e, url: i }));
            },
            role: O ? "link" : "button",
            children: [
                (0, s.jsxs)("div", {
                    className: u()(H.Qs, { [H.R]: k, [H.M2]: j }),
                    "aria-hidden": k,
                    children: [
                        j
                            ? (0, s.jsx)("div", {
                                  className: H.sV,
                                  children: (0, s.jsx)(v.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        T
                            ? (0, s.jsx)(E.A, {
                                  className: u()({ [H.MR]: R }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        R ? (0, s.jsx)("div", { className: H.Pf, children: S }) : null,
                        O ? (0, s.jsx)(A.t, { size: "xs", color: "currentColor", className: H.LE }) : null,
                    ],
                }),
                k
                    ? (0, s.jsx)("div", { className: H.Lq, children: (0, s.jsx)(N.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var K = n(678708),
    X = n(713654),
    W = n(734057),
    q = n(71393),
    Z = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    $ = n(47167),
    J = n(696451),
    Q = n(317525),
    ee = n(994500),
    et = n(287809),
    en = n(802842),
    el = n(403362),
    er = n(562153);
function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = q.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case Z.USER: {
                    let t = et.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? J.Ay.getNick(l.id, t.id) : void 0;
                    return { type: G.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case Z.ROLE: {
                    if (null == l) return null;
                    let t = Q.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: G.iw.ROLE, value: t.id, label: t.name };
                }
                case Z.CHANNEL: {
                    if (null == l) return null;
                    let t = W.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: G.iw.CHANNEL, value: t.id, label: (0, $.m1)(t, et.default, ee.A) };
                }
            }
        })
        .filter(el.Vq);
}
n(138321);
var ei = n(284009),
    es = n.n(ei),
    eo = n(444550),
    ec = n(594808),
    eu = n(437517),
    ed = n(483334),
    em = n(219025);
function eh(e) {
    let { icon: t, iconSize: n } = e;
    return (0, s.jsx)("div", { className: ed.zc, style: { height: n, width: n }, children: t });
}
var ep = (((r = {})[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), r);
function ex(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: r, defaultValues: a } = e,
        { type: i, customId: c, maxValues: d, disabled: h } = t,
        x = (0, eu.c7)(t),
        [g, C] = o.useState(!1),
        [f, j] = o.useState(!1),
        [v, A] = o.useState(new Map(a?.map((e) => [e.value, e]))),
        [N, I] = o.useState(new Set(v.keys())),
        E = o.useRef((a ?? []).map((e) => e.value)),
        y = o.useRef(i),
        S = o.useRef(c),
        [b, T] = o.useState(0);
    o.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => E.current.includes(e)) &&
            E.current.every((t) => e.includes(t)) &&
            i === y.current &&
            c === S.current
        )
            return;
        ((E.current = e), (y.current = i), (S.current = c));
        let t = new Map(a?.map((e) => [e.value, e]));
        (A(t), I(new Set(t.keys())), T((e) => e + 1));
    }, [a, i, c]);
    let L = (0, p.jc)();
    es()(null != L, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: R,
            executeStateUpdate: O,
            visualState: k,
            isDisabled: _,
            error: M,
        } = L.useComponentState(t, v.size > 0 ? { type: i, selectedOptions: Array.from(v.values()) } : void 0),
        P = null != L.modal,
        D = k === G.BB.LOADING;
    o.useEffect(() => {
        if (
            R?.type === m.I5.USER_SELECT ||
            R?.type === m.I5.ROLE_SELECT ||
            R?.type === m.I5.MENTIONABLE_SELECT ||
            R?.type === m.I5.CHANNEL_SELECT
        ) {
            let e = new Map(R.selectedOptions.map((e) => [e.value, e]));
            (A(e), I(new Set(e.keys())));
        }
    }, [R]);
    let w = o.useCallback(() => {
        O({ type: i, selectedOptions: Array.from(v.values()) }) && I(new Set(v.keys()));
    }, [O, i, v]);
    o.useEffect(() => {
        g || f || (v.size === N.size && Array.from(v.keys()).every((e) => N.has(e))) || w();
    }, [g, f, N, v, w]);
    let B = 0 === v.size || g,
        U = {
            isProcessing: D,
            isDisabled: h || k === G.BB.DISABLED || _,
            wrapperClassName: u()(ed.Lt, { [ed.zE]: P }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            filter: !1,
            placeholder: B ? x : void 0,
            onClose: () => C(!1),
            onOpen: () => C(!0),
            onBlur: () => j(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, t) {
                let { inPill: n } = t,
                    r = n ? 16 : 24,
                    a = l(e, r);
                return null != a ? (0, s.jsx)(eh, { icon: a, iconSize: r }) : null;
            },
            renderOptionLabel: r,
        };
    return (0, s.jsxs)(o.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: ed.kL,
                children:
                    d > 1
                        ? (0, s.jsx)(
                              eo.p,
                              {
                                  value: Array.from(v.values()),
                                  onChange: function (e) {
                                      (g || j(!0), A(new Map(e.map((e) => [e.value, e]))));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({ [ed.R]: !B }),
                                  closeOnSelect: !1,
                                  ...U,
                                  "data-migration-pending": !0,
                              },
                              b,
                          )
                        : (0, s.jsx)(
                              eo.p,
                              {
                                  value: [...v.values()][0],
                                  onChange: function (e) {
                                      return A(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...U,
                                  "data-migration-pending": !0,
                              },
                              b,
                          ),
            }),
            null == M || P ? null : (0, s.jsx)(ec.S0, { ...(0, ec.PS)(M), className: em.z3 }),
        ],
    });
}
var eg = n(726088);
function eC(e) {
    let { channelTypes: t } = e,
        n = (0, p.jc)(),
        l = n?.channelId,
        r = W.A.getChannel(l),
        a = q.A.getGuild(r?.getGuildId()),
        i = o.useMemo(() => ea(e.defaultValues, a?.id, t), [e.defaultValues, a, t]);
    return (0, s.jsx)(ex, {
        selectActionComponent: e,
        queryOptions: function (e) {
            let n;
            return null == (n = W.A.getChannel(l))
                ? []
                : en.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: n,
                      channelTypes: t,
                      limit: 15,
                  }).channels.map((e) => ({ type: G.iw.CHANNEL, value: e.id, label: (0, $.m1)(e, et.default, ee.A) }));
        },
        renderIcon: function (e, t) {
            let n = W.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === w.rbe.GUILD_CATEGORY ? K.FolderIcon : (0, X.gU)(n);
            return null != l ? (0, s.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, s.jsx)("span", { className: eg.Pf, children: e.label });
        },
        defaultValues: i,
    });
}
var ef = n(150934);
function ej(e) {
    let { type: t, default: n } = e,
        l = (0, p.jc)();
    es()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        i = o.useMemo(() => r?.type === t && r.value, [r, t]),
        c = l.getParents(e)?.[0],
        u = c?.type === m.I5.LABEL ? c : void 0;
    return (
        es()(null != u, "CheckboxActionComponent must be a child of a Label component"),
        (0, s.jsx)(ef.S, {
            label: u.label,
            description: u.description,
            checked: i,
            onChange: function (e) {
                a({ type: t, value: e });
            },
        })
    );
}
var ev = n(167417);
function eA(e) {
    let { type: t, options: n, required: l, maxValues: r } = e,
        a = o.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: i, executeStateUpdate: c } = (0, p.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        u = o.useMemo(() => (i?.type === t ? i.values : []), [i, t]);
    return (0, s.jsx)(ev.$, {
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
var eN = n(81369),
    eI = n(661531),
    eE = n(834730),
    ey = n(628284),
    eS = n(241326),
    eb = n(608299),
    eT = n(780777),
    eL = n(494921),
    eR = n(851023),
    eO = n(215497),
    ek = n(914905),
    e_ = n(101555),
    eM = n(424170),
    eP = n(409481),
    eD = n(274652),
    ew = n(31717),
    eB = n(255438),
    eU = n(453771),
    eF = n(518960),
    ez = n(382287),
    eG = n(522602),
    eH = n(283655);
function eV(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: i } = e,
        o = (0, eP.C)((0, eU.o2)(i)),
        c = (0, eB.Xq)(o / eB.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, s.jsxs)("div", {
        className: eH.pp,
        children: [
            (0, s.jsxs)("div", {
                className: u()(eH.e8, { [eH.R]: t }),
                children: [
                    (0, s.jsx)(eN.H, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, s.jsx)(eE.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: B.intl.format(B.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, s.jsx)(eE.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, eu.fw)(l, r, a, c),
                    }),
                ],
            }),
            t &&
                (0, s.jsxs)("div", {
                    className: u()(eH.e8, eH.r$),
                    children: [
                        (0, s.jsx)(eN.H, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, s.jsx)(eE.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: B.intl.string(B.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eY() {
    return (0, s.jsxs)("div", {
        className: u()(eH.pp, eH.e8),
        children: [
            (0, s.jsx)(ey.y, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, s.jsx)(eE.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: B.intl.string(B.t["0PhgpK"]),
            }),
            (0, s.jsx)(eE.E, { variant: "text-xs/normal", color: "text-muted", children: B.intl.string(B.t.HYg2Hn) }),
        ],
    });
}
function eK(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            className: u()(eH.NJ, { [eH.j1]: l }),
            children: [
                (0, s.jsx)(ek.J, { upload: t, size: l ? eO.L.XSMALL : eO.L.XXSMALL }),
                (0, s.jsx)(eE.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eH.iW,
                    children: t.filename ?? B.intl.string(B.t.ZMirp0),
                }),
                (0, s.jsx)(e_.Ay, {
                    className: eH.BX,
                    children: (0, s.jsx)(eR.A, {
                        className: eH.XI,
                        tooltip: B.intl.string(B.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, s.jsx)(eS.TrashIcon, { size: "xs", color: "currentColor", className: eH.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eX(e) {
    let { minValues: t, maxValues: n } = e,
        l = o.useRef(null),
        r = o.useRef(null),
        [a, i] = o.useState(!1),
        c = (0, p.jc)();
    es()(null != c, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let d = c.channelId;
    es()(null != d, "FileUploadActionComponent must be used inside a channel");
    let h = c.modal?.customId;
    es()(null != h, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: x,
            typesFormattedString: g,
            validateFilenames: C,
            showInvalidFileTypeAlert: f,
        } = (0, eM.M1)(e.fileTypes),
        {
            uploadIds: j,
            setUploadIds: v,
            currentUploads: A,
            error: N,
        } = (function (e) {
            let t = (0, p.jc)();
            es()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            es()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = t.useComponentState(e),
                i = o.useMemo(() => (l?.type === m.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                s = eG.A.getUploads(n, ew.C.InteractionModal),
                c = o.useMemo(() => i.map((e) => s.find((t) => t.id === e)).filter((e) => null != e), [i, s]),
                u = o.useCallback((e) => r({ type: m.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                o.useEffect(() => {
                    i.length > c.length && u(i.filter((e) => c.some((t) => t.id === e)));
                }, [i, c, u]),
                { uploadIds: i, setUploadIds: u, currentUploads: c, error: a }
            );
        })(e),
        I = (0, y.bG)([W.A], () => W.A.getBasicChannel(d));
    es()(null != I, "FileUploadActionComponent requires a valid channel");
    let E = o.useCallback((e) => {
            (e.preventDefault(), e.dataTransfer?.types.includes("Files") && i(!0));
        }, []),
        S = o.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || i(!1);
        }, []),
        b = o.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (j.length + e.length > n)
                    return (0, eL.openUploadError)({
                        title: B.intl.string(B.t.wOr6hB),
                        help: B.intl.formatToPlainString(B.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, ez.fJ)({ files: e, guildId: I.guild_id, canDeferSizeChecks: !1 })) return (0, eF.V)(I, e);
                if (!C(e.map((e) => e.name))) return f();
                let l = e.map((e) => {
                    let n = (0, eu.so)(h),
                        l = { id: n, file: e, platform: eD.x.WEB, origin: t };
                    return (
                        eb.A.setFile({
                            channelId: d,
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
            [j, n, I, v, h, d, C, f],
        ),
        T = o.useCallback(
            (e) => {
                (e.preventDefault(), i(!1), b(Array.from(e.dataTransfer?.files ?? []), "drag_drop"));
            },
            [b],
        );
    function L(e) {
        null == d || (eb.A.remove(d, e, ew.C.InteractionModal), v(j.filter((t) => t !== e)));
    }
    return (o.useEffect(() => {
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
        ? (0, s.jsx)(eK, { upload: A[0], handleRemoveFile: L, singleFileInput: !0 })
        : (0, s.jsxs)("div", {
              ref: r,
              className: u()(eH.kL, { [eH.Ke]: a, [eH.z3]: null != N }),
              children: [
                  j.length >= n
                      ? (0, s.jsx)(eY, {})
                      : (0, s.jsx)(eV, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: g,
                            guildId: I.guild_id,
                        }),
                  A.length > 0 &&
                      (0, s.jsx)("div", {
                          className: eH.aq,
                          children: A.map((e) => (0, s.jsx)(eK, { upload: e, handleRemoveFile: L }, e.id)),
                      }),
                  (0, s.jsx)(eT.A, {
                      ref: l,
                      onChange: function (e) {
                          (b(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = ""));
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
    eq = n(778712),
    eZ = n(957485),
    e$ = n(950305),
    eJ = n(297413),
    eQ = n(376304),
    e0 = n(386784),
    e1 = n(69282),
    e5 = n(657048),
    e2 = n(290863);
function e8(e) {
    let t = (0, p.jc)(),
        n = t?.channelId,
        l = W.A.getChannel(n),
        r = q.A.getGuild(l?.getGuildId()),
        a = (0, e0.A)(r?.id, 1e3),
        i = o.useMemo(() => ea(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, s.jsx)(ex, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = W.A.getChannel(n);
                if (null == l) return [];
                let r = e === m.I5.USER_SELECT || e === m.I5.MENTIONABLE_SELECT,
                    a = e === m.I5.ROLE_SELECT || e === m.I5.MENTIONABLE_SELECT,
                    { users: i, roles: s } = en.Ay.queryMentionResults({
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
                        let t = er.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: G.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: G.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: function (e, t) {
            let n = t === ep.PILL_ICON_SIZE;
            if (e?.type === G.iw.USER) {
                let l = et.default.getUser(e.value);
                if (null == l) return;
                return (0, s.jsx)(eW.eu, {
                    size: n ? eq._3.SIZE_16 : eq._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, t),
                    status: n ? null : e2.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === G.iw.ROLE) {
                let n = null != r ? Q.A.getRole(r.id, e.value) : void 0;
                if (null == n || null == r) return;
                let l = (0, eQ.fm)(r, n) ? (0, e1.ox)(n, t) : null;
                return null != l
                    ? (0, s.jsx)(e5.A, { ...l })
                    : (0, s.jsx)(eZ.i, { size: "custom", color: n.colorString ?? w.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: function (e) {
            let t = null;
            if (e.type === G.iw.USER) {
                let n = et.default.getUser(e.value);
                null != n &&
                    (t = (0, s.jsx)(eJ.A, {
                        className: eg.Tc,
                        usernameClass: eg.Xh,
                        discriminatorClass: eg.D2,
                        botClass: eg.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === G.iw.ROLE) {
                let n = null != r ? Q.A.getRole(r.id, e.value) : void 0,
                    l = null == n ? null : a?.[n.id];
                null != l &&
                    (t = (0, s.jsxs)("div", {
                        className: eg.Ly,
                        children: [
                            (0, s.jsx)(e$.UserIcon, { size: "sm", color: "currentColor", className: eg.jh }),
                            (0, s.jsx)("span", { className: eg.NT, children: l }),
                        ],
                    }));
            }
            return (0, s.jsxs)("span", {
                className: eg.Pf,
                children: [(0, s.jsx)("span", { className: eg.QK, children: e.label }), t],
            });
        },
        defaultValues: i,
    });
}
var e4 = n(144228),
    e3 = n(821609),
    e7 = n(897132);
function e9(e) {
    let { type: t, options: n, required: l } = e,
        r = o.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: a, executeStateUpdate: i } = (0, p.At)(e, null != r ? { type: t, value: r } : void 0),
        c = o.useMemo(() => (a?.type === t ? a.value : null), [a, t]),
        d = null != c,
        m = o.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function h(e) {
        i({ type: t, value: e });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e4.z, { options: m, value: c ?? "", onChange: h, required: l }),
            !l &&
                (0, s.jsx)("div", {
                    className: u()(e7.H, { [e7.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, s.jsx)(e3.$, {
                        text: B.intl.string(B.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => h(null),
                    }),
                }),
        ],
    });
}
var e6 = n(843282);
function te(e) {
    let { emoji: t, label: n, description: l, isDisabled: r, isOffset: a } = e,
        i = u()(em._A, { [em.r9]: r, [em.cY]: null == t && a });
    return (0, s.jsxs)("div", {
        className: em.uK,
        children: [
            null != t
                ? (0, s.jsx)(E.A, { className: em.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, s.jsxs)("div", {
                className: i,
                children: [
                    (0, s.jsx)("strong", { className: em.Pf, children: n }),
                    null != l ? (0, s.jsx)("span", { className: em.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function tt(e) {
    let { emoji: t, label: n } = e;
    return (0, s.jsx)("div", {
        className: em.uK,
        children: (0, s.jsxs)("div", {
            className: u()(em.Uq, em.u9),
            children: [
                null != t
                    ? (0, s.jsx)(E.A, {
                          className: em.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, s.jsx)("span", { className: em.oX, children: n }),
            ],
        }),
    });
}
function tn(e) {
    let { options: t } = e;
    return (0, s.jsx)("div", {
        className: em.uK,
        children: (0, s.jsx)("div", {
            className: em.Uq,
            children: t.map((e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: em.mK,
                        children: [
                            null != e.emoji
                                ? (0, s.jsx)(E.A, {
                                      className: em.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, s.jsx)("span", { className: em.Tc, children: e.label }, e.value),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function tl(e) {
    let { type: t, options: n, id: l, maxValues: r, disabled: a } = e,
        i = (0, eu.c7)(e),
        c = o.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        d = (0, p.jc)();
    es()(null != d, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: h,
            executeStateUpdate: x,
            visualState: g,
            isDisabled: C,
            error: f,
        } = d.useComponentState(e, c.length > 0 ? { type: t, values: c } : void 0),
        j = null != d.modal,
        v = r > 1,
        A = g === G.BB.LOADING,
        [N, I] = o.useState(!1),
        [E, y] = o.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, b] = o.useState(E),
        T = o.useMemo(() => n.some((e) => null != e.emoji), [n]);
    o.useEffect(() => {
        if (h?.type === m.I5.STRING_SELECT) {
            let e = new Set(h.values);
            (y(e), b(e));
        } else {
            let e = new Set(c);
            (y(e), b(e));
        }
    }, [l, c, h]);
    let L = o.useCallback(() => {
        S !== E && x({ type: m.I5.STRING_SELECT, values: Array.from(E) }) && b(E);
    }, [E, S, b, x]);
    o.useEffect(() => {
        N || (E.size === S.size && Array.from(S).every((e) => E.has(e))) || L();
    }, [N, E, S, L]);
    let R = (0, eu.Lr)(e, j ? "modal" : "message"),
        O = e6.lS;
    v ? (O = e6.M8) : R && (O = e6.$l);
    let k = (0, e6.Ev)({ value: E, onChange: (e) => y(e), onSelectInteraction: O });
    return (0, s.jsxs)(o.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: em.kL,
                children: (0, s.jsx)(e6.Pw, {
                    isProcessing: A,
                    isDisabled: a || g === G.BB.DISABLED || C,
                    className: u()(em.Lt, { [em.zE]: j }),
                    options: n.map((e) => ({ ...e, disabled: v && !E.has(e.value) && E.size === r })),
                    placeholder: i,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !v,
                    optionClassName: em.MT,
                    renderOptionLabel: (e) =>
                        (0, s.jsx)(te, { ...e, isDisabled: v && !E.has(e.value) && E.size === r, isOffset: T }),
                    renderOptionValue: (e) => (v ? (0, s.jsx)(tn, { options: e }) : (0, s.jsx)(tt, { ...e[0] })),
                    ...k,
                    "data-migration-pending": !0,
                }),
            }),
            null == f || j ? null : (0, s.jsx)(ec.S0, { ...(0, ec.PS)(f), className: em.z3 }),
        ],
    });
}
var tr = n(95477),
    ta = n(103557),
    ti = n(321471),
    ts = n(969508),
    to = n(565469);
function tc(e) {
    let t,
        { type: n, style: l, label: r, placeholder: a, minLength: i, maxLength: c, required: u, value: d } = e,
        [h, x] = o.useState(d ?? ""),
        { state: g, executeStateUpdate: C, error: f } = (0, p.At)(e, null != d ? { type: n, value: d } : void 0),
        j = (0, ts.FG)(e.id);
    o.useEffect(() => {
        g?.type === n && x(g.value);
    }, [n, g]);
    let v = {
        value: h,
        placeholder: a,
        minLength: i,
        maxLength: c,
        required: u,
        onChange: function (e) {
            (x(e), C({ type: n, value: e }));
        },
        autoFocus: j,
    };
    switch (l) {
        case m.qz.SMALL:
            t = (0, s.jsx)(tr.k, { ...v });
            break;
        case m.qz.PARAGRAPH:
            t = (0, s.jsx)(ta.f, { autosize: !0, ...v });
    }
    return null != r ? (0, s.jsx)(ti.e, { title: r, required: u, className: to.k, error: f, children: t }) : t;
}
var tu = n(564771),
    td = n(338717),
    tm = n(96782),
    th = n(302031),
    tp = n(561323);
function tx(e) {
    let { file: t, name: n, size: l, spoiler: r } = e,
        a = o.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [i, c] = o.useState(r),
        [d, m] = o.useState(r);
    r !== i && (c(r), m(r));
    let h = o.useMemo(
        () => () => (0, s.jsx)(tm.zB, { mimeType: a, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, a],
    );
    function p(e) {
        return (0, s.jsx)(tu.A, {
            className: u()({ [tp.V]: e }),
            url: t.url,
            fileName: n ?? B.intl.string(B.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: h,
        });
    }
    return (0, s.jsx)("div", {
        className: tp.O,
        children: r
            ? (0, s.jsx)(th.Ay, {
                  type: th.Ay.Types.ATTACHMENT,
                  reason: td.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1),
    });
}
var tg = n(665260),
    tC = n(731068),
    tf = n(591818),
    tj = n(492230),
    tv = n(294520),
    tA = n(127038),
    tN = n(866665),
    tI = n(144165),
    tE = n(891694),
    ty = n(853784);
function tS(e) {
    let t = o.useRef(null),
        n = e.media;
    if (n.loadingState === m.TD.LOADED_NOT_FOUND)
        return (0, s.jsx)(tN.m, {
            text: B.intl.string(B.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, s.jsx)("div", {
                className: u()(e.className, ty.FN, { [ty.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, s.jsx)(tE.A, { ref: t, className: ty.i4 }),
            }),
        });
    let l = n.loadingState === m.TD.LOADING ? w.Rv1.LOADING : w.Rv1.ERROR;
    return (0, s.jsx)(tI._, {
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
var tb = n(998218),
    tT = n(44788);
function tL(e) {
    let t = e.item.originalItem.media;
    return (0, s.jsx)(tS, {
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
        n = tb.A.toURLSafe(t.proxyUrl);
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
var tk = n(564107),
    t_ = n(394839),
    tM = n(644447);
function tP(e) {
    let { message: t } = (0, p.jc)(),
        n = (0, y.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: i,
            getOnMediaItemContextMenu: o,
        } = (0, tk.X)();
    if (null == t || null == n) return null;
    let c = e.items.map((e) => (0, tf.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        {
            srcToOnClickOverride: u,
            srcToHandlePreloadImage: d,
            srcToSeekOverride: m,
        } = c.length > 1
            ? (0, tj.o)(c, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
            : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} };
    function h(e, n) {
        let l = e.originalItem;
        return (0, tv.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let x = e.items.map((e, n) => {
        let l = e.media,
            r = o?.(l),
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
                    srcIsAnimated: (0, tg.Lt)(l.flags, tC.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: h,
                renderImageComponent: tR,
                renderVideoComponent: tO,
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
            c = (0, tM.E)({ proxyURL: l.proxyUrl, url: l.url });
        return (c in u && ((s.onClick = u[c]), (s.handlePreloadImage = d[c]), (s.onSeekRequest = m[c])), s);
    });
    return (0, s.jsx)("div", { children: (0, s.jsx)(t_.A, { items: x, isInAppComponentsV2: !0 }) });
}
var tD = n(210716);
function tw(e) {
    let { divider: t, spacing: n } = e;
    return (0, s.jsx)("div", { className: u()({ [tD.f]: n === m.C8.LARGE, [tD.y]: t }) });
}
var tB = n(46054),
    tU = n(521981),
    tF = n(204255);
let tz = {
        SIZE: { default: void 0, reduced: tF.k2 },
        COLOR: { default: void 0, muted: tF.JF },
        WEIGHT: { default: void 0, reduced: tF.Xj },
    },
    tG = o.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function tH() {
    return o.useContext(tG);
}
function tV(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = tH(),
        i = o.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = u()(tz.SIZE[e.size], tz.COLOR[e.color], tz.WEIGHT[e.weight]);
            return ("" !== t && (e.className = u()(tF.zr, t)), e);
        }, [n, l, r, a]);
    return (0, s.jsx)(tG.Provider, { value: i, children: t });
}
let tY = { allowList: !0, allowHeading: !0, allowLinks: !0, allowGameMentions: !0, previewLinkTarget: !0 };
var tK = n(738262),
    tX = n(165648);
function tW(e) {
    let t,
        { content: n, className: l } = e,
        r =
            ((t = (0, p.jc)()),
            (0, o.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, tU.ko)(t.message, tY)
                              : (0, tU.Le)({ channelId: t.channelId, renderOptions: tY })),
                      tB.A.parse(n, !0, e));
            }, [n, t])),
        a = tH();
    return (0, s.jsx)("div", { className: u()(l, tX.PT, tK.T, a.className), children: r });
}
var tq = n(838541),
    tZ = n(292151);
function t$(e) {
    let { media: t, spoiler: n, description: l } = e,
        r = (0, tA.wz)(t),
        a = (0, tg.Lt)(t.flags, tC.e5.IS_ANIMATED),
        { gifAutoPlay: i } = (0, tk.X)(),
        [c, d] = o.useState(n),
        [m, h] = o.useState(n);
    function p(e) {
        return "IMAGE" !== r
            ? (0, s.jsx)(tS, {
                  className: tZ.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, s.jsx)(tT.LL, {
                  containerClassName: u()(tZ.Dg, { [tZ.rP]: e }),
                  imageClassName: tZ._8,
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
                  autoPlay: i && !e,
                  mediaLayoutType: tq.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: a,
              });
    }
    return (
        n !== c && (d(n), h(n)),
        n
            ? (0, s.jsx)(th.Ay, {
                  type: th.Ay.Types.ATTACHMENT,
                  reason: td.Oc.SPOILER,
                  obscured: m,
                  onToggleObscurity: () => h((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1)
    );
}
var tJ = n(868281);
function tQ() {
    return (0, s.jsx)("div", {
        className: tJ.k,
        children: (0, s.jsx)(eE.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: B.intl.string(B.t.zksHZO),
        }),
    });
}
n(321073);
var t0 = n(602853),
    t1 = n(534890),
    t5 = n(831544),
    t2 = n(460905),
    t8 = n(109112),
    t4 = n(664121),
    t3 = n(297264),
    t7 = n(606348),
    t9 = n(957806),
    t6 = n(7584),
    ne = n(548118),
    nt = n(486020),
    nn = n(922704),
    nl = n(239895);
function nr(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: r = 0,
            numEmojisSent: a = 0,
            topEmoji: i,
            topGame: c,
            topGuild: u,
            powerLevel: d,
            powerLevelPercentile: m,
        } = t,
        h = new Intl.NumberFormat(B.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        p = new Intl.NumberFormat(B.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(a),
        x = (0, t9.oO)(r),
        g = (0, t9.OW)(n),
        C = t7.f[n],
        f = (0, t0.r)(C.primaryColor).hex(),
        j = (0, t0.r)(C.secondaryColor).hex({ opacity: 0.2 }),
        v = (0, y.bG)([q.A], () => q.A.getGuild(u?.guildId)),
        A = new Intl.NumberFormat(B.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        N = (0, t9._V)(m ?? 0),
        I = (0, o.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return (e.push("/assets/db1951f89e12e0e3.svg"), e);
        }, []);
    return (0, s.jsxs)("div", {
        className: nl.kL,
        style: { backgroundColor: f },
        children: [
            (0, s.jsxs)("div", {
                className: nl.Nr,
                children: [
                    (0, s.jsx)("img", { src: g, alt: "", className: nl.LY, style: { backgroundColor: f } }),
                    (0, s.jsxs)("div", {
                        className: nl.M1,
                        children: [
                            (0, s.jsxs)("div", {
                                className: nl.dJ,
                                children: [
                                    (0, s.jsx)(t1.ChatIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eE.E, { variant: "text-sm/medium", className: nl.KA, children: h }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: nl.dJ,
                                children: [
                                    (0, s.jsx)(t5.MicrophoneIcon, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eE.E, { variant: "text-sm/medium", className: nl.KA, children: x }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: nl.dJ,
                                children: [
                                    (0, s.jsx)(t2.n, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, s.jsx)(eE.E, { variant: "text-sm/medium", className: nl.KA, children: p }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nl.dJ,
                                children:
                                    null == i
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t8._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/medium",
                                                      className: nl.KA,
                                                      children: B.intl.string(nn.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(E.A, {
                                                      emojiId: i.emojiId,
                                                      emojiName: i.emojiName,
                                                      className: nl.iY,
                                                  }),
                                                  (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/medium",
                                                      className: nl.KA,
                                                      children:
                                                          null == i.emojiId
                                                              ? t6.Ay.convertSurrogateToName(i.emojiName)
                                                              : `:${i.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: nl.dJ,
                                children:
                                    null == c
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t8._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/medium",
                                                      className: nl.KA,
                                                      children: B.intl.string(nn.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("img", {
                                                      src: nt.Ay.getApplicationIconURL({
                                                          id: c.applicationId,
                                                          icon: c.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: nl.iY,
                                                  }),
                                                  (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/medium",
                                                      className: nl.KA,
                                                      children: c.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, s.jsx)("div", {
                                className: nl.dJ,
                                children:
                                    null == u
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(t8._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/medium",
                                                      className: nl.KA,
                                                      children: B.intl.string(nn.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  null != v
                                                      ? (0, s.jsx)(ne.Ay, {
                                                            guild: v,
                                                            size: ne.Ay.Sizes.SMOL,
                                                            className: nl.iY,
                                                        })
                                                      : (0, s.jsx)(t4.R, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/medium",
                                                      className: nl.KA,
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
                className: nl.qr,
                style: { backgroundColor: j },
                children: (0, s.jsx)(t3.D, {
                    variant: "display-sm",
                    className: nl.DD,
                    children: B.intl.string(nn.default["CdU/PF"]),
                }),
            }),
            (0, s.jsxs)("div", {
                className: nl.hC,
                style: { backgroundColor: f },
                children: [
                    (0, s.jsx)("div", {
                        className: nl.TO,
                        children: I.map((e, t) =>
                            (0, s.jsx)(
                                "img",
                                { className: nl.mG, src: e, width: 4, alt: "", style: { opacity: t >= N ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, s.jsxs)("div", {
                        className: nl.JA,
                        children: [
                            (0, s.jsx)(eE.E, { variant: "text-xs/normal", className: nl.KA, children: "LVL" }),
                            (0, s.jsx)(eE.E, { variant: "text-xs/bold", className: nl.KA, children: A.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var na = n(687966),
    ni = n(554830),
    ns = n(142617),
    no = n(819648),
    nc = n(835517),
    nu = n(711408),
    nd = n(881245);
function nm(e) {
    let { character: t, size: n, className: l } = e,
        r = o.useMemo(() => (0, no.vF)(t, Math.round(n * (0, nc.A)())), [t, n]),
        a = o.useMemo(() => (0, nu.O)(t), [t]);
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": a,
        className: u()(nd.G, l),
        children: r.map((e) => (0, s.jsx)("img", { src: e, alt: "", draggable: !1, className: nd.q }, e)),
    });
}
let nh = o.createContext(null);
function np() {
    let e = o.useContext(nh);
    return (es()(null != e, "useCheckpointCardContext must be used within a CheckpointCardContainer"), e);
}
var nx = (((a = {}).SM = "sm"), (a.LG = "lg"), a),
    ng = n(955671);
let nC = { [nx.SM]: 224, [nx.LG]: 448 };
function nf(e) {
    let { character: t } = e,
        { size: n } = np();
    return (0, s.jsx)("div", {
        className: u()(ng.characterColumn, ng[n]),
        children: (0, s.jsx)(nm, { character: t, size: nC[n], className: ng.character }),
    });
}
var nj = n(706121);
let nv = {
        primaryBackgroundColor: "#7D53DE",
        secondaryBackgroundColor: "#BCB1D5",
        tertiaryBackgroundColor: "#CFC3EB",
        shadowColor: "#411D96",
        backgroundGradientStartColor: "#2F156B",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/4a63c3de5c45c6c85993095b513e2df12c4a7ee1b89da6ee59143f183b88858d.png",
    },
    nA = {
        primaryBackgroundColor: "#34E2F1",
        secondaryBackgroundColor: "#94CCD1",
        tertiaryBackgroundColor: "#A5E3E9",
        shadowColor: "#0C9BA7",
        backgroundGradientStartColor: "#12606D",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/9e1079ca931d60e62a94fed7ce7f6aae2809869172f8b4539c5912f51d3bc3b0.png",
    },
    nN = {
        primaryBackgroundColor: "#FF4CD2",
        secondaryBackgroundColor: "#D5A9D6",
        tertiaryBackgroundColor: "#E9BBE9",
        shadowColor: "#B20086",
        backgroundGradientStartColor: "#80005F",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/03f782ff288303bdb4a2c89c5232dc148176a4ef92a91c0a27946828a23f8c74.png",
    },
    nI = {
        primaryBackgroundColor: "#35ED7E",
        secondaryBackgroundColor: "#B2C5B1",
        tertiaryBackgroundColor: "#B5DCB3",
        shadowColor: "#0FA44A",
        backgroundGradientStartColor: "#0A7535",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/703d350a9435cde8cc76f3e3222a3c6987e9b0ba400ce0a44e98955c334bcb25.png",
    },
    nE = {
        primaryBackgroundColor: "#EF3054",
        secondaryBackgroundColor: "#E5A1AE",
        tertiaryBackgroundColor: "#F6AFBC",
        shadowColor: "#A60D2A",
        backgroundGradientStartColor: "#76091E",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/a0900e98dda9e22cd12fb02b24fabbc42f4dcff0fe8f1452c52130d284d2746a.png",
    },
    ny = {
        primaryBackgroundColor: "#FFE047",
        secondaryBackgroundColor: "#E6CBA8",
        tertiaryBackgroundColor: "#FFE0B8",
        shadowColor: "#B29400",
        backgroundGradientStartColor: "#806A00",
        recapCardBackgroundImage:
            "https://cdn.discordapp.com/assets/content/829db76fbce7913d7aebb80510f98d619143a642bbd7d48ced871be5aab0cb29.png",
    },
    nS = {
        [nj.R.GALACTIC]: nv,
        [nj.R.IRIDESCENT]: nv,
        [nj.R.CHROME]: nv,
        [nj.R.ICY]: nA,
        [nj.R.LIQUID]: nA,
        [nj.R.GLACIER]: nA,
        [nj.R.MIDNIGHT]: nN,
        [nj.R.PURPLE]: nN,
        [nj.R.COBALT]: nN,
        [nj.R.FOREST]: nI,
        [nj.R.X_RAY]: nI,
        [nj.R.CRIMSON]: nE,
        [nj.R.RED]: nE,
        [nj.R.BUTTER]: ny,
        [nj.R.ORANGE]: ny,
    };
var nb = n(610771);
function nT(e) {
    let { character: t, size: n, className: l, style: r, children: a } = e,
        i = o.useMemo(() => {
            let e = (null != t ? nS[t.base] : void 0) ?? nA;
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...r,
            };
        }, [t, r]),
        c = o.useMemo(() => ({ size: n }), [n]);
    return (0, s.jsx)(nh.Provider, {
        value: c,
        children: (0, s.jsx)("div", { className: u()(nb.container, nb[n], l), style: i, children: a }),
    });
}
var nL = n(111159),
    nR = n(479017);
function nO() {
    let { size: e } = np();
    return (0, s.jsx)("div", {
        className: u()(nR.logo, nR[e]),
        children: (0, s.jsx)(nL.p, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "custom", className: nR.icon }),
    });
}
var nk = n(309913),
    n_ = n(763166),
    nM = n(247060);
let nP = [
    "/assets/cee2b812c0cc2a9c.svg",
    ...Array(nk.w0 - 2).fill("/assets/03323a9f08bfe4db.svg"),
    "/assets/c2b958e9d50d3db3.svg",
];
function nD(e) {
    let { powerLevel: t, powerLevelUnits: n } = e,
        { size: l } = np();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(d.A, { children: B.intl.formatToPlainString(n_.default["/nxqc2"], { powerLevel: t }) }),
            (0, s.jsxs)("div", {
                className: u()(nM.powerBar, nM[l]),
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(eE.E, {
                        variant: "experimental/mono-md/normal",
                        color: "text-overlay-dark",
                        className: nM.text,
                        children: "LVL",
                    }),
                    (0, s.jsx)(eE.E, {
                        variant: "experimental/mono-md/bold",
                        color: "text-overlay-dark",
                        className: u()(nM.text, nM.level),
                        children: t,
                    }),
                    (0, s.jsx)("div", {
                        className: nM.units,
                        children: nP.map((e, t) =>
                            (0, s.jsx)(
                                "img",
                                { src: e, alt: "", className: u()(nM.unit, { [nM.unitUnfilled]: t >= n }) },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
var nw = n(214847);
function nB(e) {
    let { variant: t, className: n } = e,
        { size: l } = np();
    return (0, s.jsx)("div", { className: u()(nw.wordmark, nw[l], "full" === t ? nw.full : nw.short, n) });
}
var nU = n(241802);
let nF = {
    "--custom-checkpoint-card-logo-size": "44px",
    "--custom-checkpoint-card-footer-height": "28px",
    "--custom-checkpoint-card-wordmark-width": "44px",
};
function nz(e) {
    let { src: t } = e;
    return (0, s.jsx)("img", { src: t, alt: "", className: nU.Gl });
}
function nG() {
    return (0, s.jsx)(t8._, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xs" });
}
function nH(e) {
    let { icon: t, stat: n } = e;
    return (0, s.jsxs)("li", {
        className: nU.N8,
        children: [
            t,
            (0, s.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-overlay-dark",
                lineClamp: 1,
                "aria-hidden": !0,
                children: n.text,
            }),
            (0, s.jsx)(d.A, { children: n.accessibilityLabel }),
        ],
    });
}
function nV(e) {
    let { stats: t } = e,
        { topGuild: n, topEmoji: l, topGame: r } = t,
        a = o.useMemo(
            () => (null != n ? nt.Ay.getGuildIconURL({ id: n.guildId, icon: n.guildIcon, size: 16 }) : void 0),
            [n],
        ),
        i = o.useMemo(
            () =>
                r?.applicationImageId != null
                    ? nt.Ay.getApplicationIconURL({ id: r.applicationId, icon: r.applicationImageId, size: 16 })
                    : void 0,
            [r],
        ),
        c = o.useMemo(() => (null != a ? (0, s.jsx)(nz, { src: a }) : (0, s.jsx)(nG, {})), [a]);
    return (0, s.jsxs)("ul", {
        className: nU.M1,
        children: [
            (0, s.jsx)(nH, {
                icon: (0, s.jsx)(t5.MicrophoneIcon, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.voice,
            }),
            (0, s.jsx)(nH, {
                icon: (0, s.jsx)(t1.ChatIcon, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.messages,
            }),
            (0, s.jsx)(nH, {
                icon: (0, s.jsx)(t4.R, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.topGuildDaysInteracted,
            }),
            (0, s.jsx)(nH, { icon: c, stat: t.topGuildName }),
            (0, s.jsx)(nH, {
                icon: (0, s.jsx)(t2.n, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.reactions,
            }),
            (0, s.jsx)(nH, {
                icon:
                    null != l
                        ? (0, s.jsx)(E.A, { emojiId: l.emojiId, emojiName: l.emojiName, alt: "", className: nU.Gl })
                        : (0, s.jsx)(nG, {}),
                stat: t.topEmojiName,
            }),
            (0, s.jsx)(nH, {
                icon: (0, s.jsx)(na.GameControllerIcon, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xs" }),
                stat: t.daysPlayed,
            }),
            (0, s.jsx)(nH, { icon: null != i ? (0, s.jsx)(nz, { src: i }) : (0, s.jsx)(nG, {}), stat: t.topGameName }),
        ],
    });
}
function nY() {
    return (0, s.jsxs)("div", {
        className: nU.qr,
        "aria-hidden": !0,
        children: [
            (0, s.jsx)(eE.E, {
                variant: "experimental/display-xs",
                color: "text-overlay-dark",
                className: nU.K8,
                children: B.intl.string(nn.default["CdU/PF"]),
            }),
            (0, s.jsx)("div", {
                className: nU.wC,
                "aria-hidden": !0,
                children: (0, s.jsx)(ni.K, { color: eI.A.colors.ICON_OVERLAY_DARK, size: "xxs" }),
            }),
        ],
    });
}
function nK(e) {
    let { checkpointData: t } = e,
        { character: n, stats: l } = t,
        r = null != n && null != l,
        a = (0, ns.FX)("Checkpoint2026CardDisplayComponent"),
        i = o.useMemo(() => (null != l ? (0, no.R8)(l) : null), [l]);
    return (0, s.jsxs)(nT, {
        character: n,
        size: nx.SM,
        className: u()(nU.Nr, { [nU.Q9]: r }),
        style: nF,
        children: [
            (0, s.jsx)(d.A, { children: B.intl.string(n_.default.Og2R9d) }),
            (0, s.jsx)(nO, {}),
            (0, s.jsx)(nB, { variant: null != n ? "full" : "short", className: nU.Ss }),
            null != n && null != i
                ? (0, s.jsx)(nD, { powerLevel: i.powerLevel, powerLevelUnits: i.powerLevelUnits })
                : null,
            null != n ? (0, s.jsx)(nf, { character: n }) : null,
            null != i ? (0, s.jsx)(nV, { stats: i }) : null,
            a ? (0, s.jsx)(nY, {}) : null,
        ],
    });
}
function nX(e) {
    let { checkpointData: t } = e;
    switch (t.version) {
        case nk.wk.V2025:
            return (0, s.jsx)(nr, { checkpointData: t });
        case nk.wk.V2026:
            return (0, s.jsx)(nK, { checkpointData: t });
        default:
            return (0, s.jsx)(tQ, {});
    }
}
var nW = n(681154);
class nq extends o.PureComponent {
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
var nZ = n(211401),
    n$ = n(500049),
    nJ = n(429913),
    nQ = n(355622),
    n0 = n(583846),
    n1 = n(818023),
    n5 = n(52133),
    n2 = n(803306),
    n8 = n(860071),
    n4 = n(808380),
    n3 = n(409626),
    n7 = n(692969),
    n9 = n(424994),
    n6 = (((i = {})[(i.EMBED = 1)] = "EMBED"), i);
let le = { [n4.Y.XBOX]: n9.a4.XBOX, [n4.Y.PLAYSTATION]: n9.a4.PLAYSTATION },
    lt = { [n6.EMBED]: n3.GameProfileSources.Embed };
function ln(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, nJ.h)(l.extra.application_id),
        s = i?.getIconURL(n1.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = le[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === nW.ContentInventoryEntryType.PLAYED_GAME && (0, n0.JM)(l) && !(0, n0.I5)(l)
            ? B.t.vPg1JT
            : B.t.rPqqts;
    let c = lt[r],
        u = {
            onClick: (0, n7.A)({
                location: c,
                applicationId: l.extra.application_id,
                source: c,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: B.intl.formatToPlainString(B.t["9sZWVp"], { gameName: o }),
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
var ll = n(205327),
    lr = n(261020),
    la = n(272984),
    li = n(970928);
let ls = o.createContext(void 0);
function lo(e, t) {
    return o.useMemo(() => ({ parsedEntry: e, location: t }), [e, t]);
}
function lc(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = o.useRef([]);
                return (
                    o.useEffect(() => {
                        (0, n5.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == et.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, n2.wz)(e) : n8.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case nW.ContentInventoryEntryType.TOP_ARTIST:
            return (0, s.jsx)(lm, { entry: t, ...l });
        case nW.ContentInventoryEntryType.TOP_GAME:
            return (0, s.jsx)(lh, { entry: t, ...l });
        case nW.ContentInventoryEntryType.PLAYED_GAME:
            return (0, s.jsx)(lp, { entry: t, ...l });
        case nW.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, s.jsx)(lx, { entry: t, ...l });
        case nW.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, s.jsx)(lg, { entry: t, ...l });
        case nW.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, s.jsx)(ld, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function lu(e) {
    let { errorFallback: t, ...n } = e;
    return (0, s.jsx)(nq, { fallback: t, children: (0, s.jsx)(lc, { ...n }) });
}
function ld(e) {
    let { entry: t, children: n, ...l } = e,
        r = lo(
            (function (e) {
                let { entry: t } = e,
                    n = (0, nJ.h)(t.extra.application_id),
                    l = n?.getIconURL(n1.iu.LARGE),
                    r = t.extra.activity_name,
                    a = (0, n0.Hd)(t) ? B.t.vPg1JT : B.t.rPqqts,
                    i = {
                        onClick: function () {
                            nZ.R(n$.s4.TEXT, nQ.oU.NORMAL, { applicationId: t.extra.application_id });
                        },
                        ariaDescription: B.intl.formatToPlainString(B.t.NTHttN, { title: r }),
                    };
                return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(ls.Provider, { value: r, children: n });
}
function lm(e) {
    let { entry: t, children: n, ...l } = e,
        r = lo(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    { provider: r, image_url: a } = n.extra.media,
                    i = n.extra.artist.name,
                    s = {
                        onClick: () => (0, lr.n)(la.M0.ALBUM, n.extra.media.external_parent_id),
                        ariaDescription: B.intl.formatToPlainString(B.t.xTsar2, {
                            itemName: n.extra.media.parent_title,
                        }),
                    },
                    o = {
                        onClick: () => (0, lr.n)(la.M0.ARTIST, n.extra.artist.external_id),
                        ariaDescription: B.intl.formatToPlainString(B.t.xTsar2, { itemName: i }),
                    };
                return (
                    r === ll.X.SPOTIFY && (t = { type: n9.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        thumbnailUrl: a,
                        titleClickable: o,
                        subtitleClickable: s,
                        thumbnailClickable: s,
                        userDescription: B.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(ls.Provider, { value: r, children: n });
}
function lh(e) {
    let { entry: t, children: n, ...l } = e,
        r = lo(ln({ entry: t, ...l }), l.location);
    return (0, s.jsx)(ls.Provider, { value: r, children: n });
}
function lp(e) {
    let { entry: t, children: n, ...l } = e,
        r = lo(ln({ entry: t, ...l }), l.location);
    return (0, s.jsx)(ls.Provider, { value: r, children: n });
}
function lx(e) {
    let { entry: t, children: n, ...l } = e,
        r = lo(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = (0, nJ.h)(n.extra.application_id),
                    a = r?.getIconURL(128),
                    i = (0, li.uD)(n.extra.application_id, n.extra.media_assets_large_image, [
                        n1.iu.LARGE,
                        n1.iu.LARGE,
                    ]),
                    s = n.extra.media_title,
                    c = n.extra.media_subtitle,
                    u = (0, n0.Hd)(n) ? B.t["LH+Z3y"] : B.t.YuKgml,
                    d = { type: n9.a4.CRUNCHYROLL },
                    m = o.useMemo(() => {
                        if (null == n.extra.url) return;
                        let e = tb.A.safeParseWithQuery(n.extra.url);
                        if (null != e && null != e.protocol && null != e.hostname) return e;
                    }, [n.extra.url]);
                return (
                    null != m &&
                        (t = {
                            href: tb.A.format(m),
                            ariaDescription: B.intl.formatToPlainString(B.t.aFFQ3g, { title: s }),
                        }),
                    {
                        ...l,
                        thumbnailUrl: i ?? a,
                        title: s,
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
    return (0, s.jsx)(ls.Provider, { value: r, children: n });
}
function lg(e) {
    let { entry: t, children: n, ...l } = e,
        r = lo(
            (function (e) {
                let t,
                    { entry: n, baseEntryData: l } = e,
                    r = n.extra.entries[0].media,
                    a = r.artists[0],
                    { title: i, provider: s, image_url: o } = r,
                    c = a.name,
                    u = {
                        onClick: () => (0, lr.n)(la.M0.TRACK, r.external_id),
                        ariaDescription: B.intl.formatToPlainString(B.t.xTsar2, { itemName: i }),
                    },
                    d = {
                        onClick: () => (0, lr.n)(la.M0.ARTIST, a.external_id),
                        ariaDescription: B.intl.formatToPlainString(B.t.xTsar2, { itemName: c }),
                    };
                return (
                    s === ll.X.SPOTIFY && (t = { type: n9.a4.SPOTIFY }),
                    {
                        ...l,
                        title: i,
                        subtitle: c,
                        thumbnailUrl: o,
                        titleClickable: u,
                        subtitleClickable: d,
                        thumbnailClickable: u,
                        userDescription: B.t.CcVI1T,
                        providerIconProps: t,
                    }
                );
            })({ entry: t, ...l }),
            l.location,
        );
    return (0, s.jsx)(ls.Provider, { value: r, children: n });
}
var lC = n(28863),
    lf = n(531142),
    lj = n(939249),
    lv = n(43990),
    lA = n(696986),
    lN = n(342952),
    lI = n(576757),
    lE = n(291594),
    ly = n(22869),
    lS = n(959),
    lb = n(968544);
function lT(e) {
    let { entry: t, channel: n, className: l } = e,
        r = o.useRef(null),
        a = o.useRef(null),
        {
            displayParticipants: i,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, lI.A)(t),
        p = [c, d];
    return (0, s.jsxs)("div", {
        className: u()(lb.kL, l),
        children: [
            i.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(lS.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, s.jsx)(lj.D, {
                                      innerRef: r,
                                      className: lb.vk,
                                      ...e,
                                      children: (0, s.jsx)(lN.A, {
                                          maxUsers: 3,
                                          users: i,
                                          size: eq._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, s.jsx)(lA.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, s.jsx)(t3.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: u()(lb.IY, lb.Io),
                scaleFontToUserSetting: !0,
                children: B.intl.format(B.t.rH95Gu, {
                    user0: er.Ay.getName(n.guild_id, n.id, p[0]),
                    user1: er.Ay.getName(n.guild_id, n.id, p[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, s.jsx)(ly.A, { text: e, user: p[0], channel: n }, t),
                    name1Hook: (e, t) => (0, s.jsx)(ly.A, { text: e, user: p[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, s.jsx)(
                            lS.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, s.jsx)(lE.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, s.jsx)(eE.E, {
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
var lL = n(263577),
    lR = n(347306),
    lO = n(790381),
    lk = n(266080),
    l_ = n(121090),
    lM = n(18282);
let lP = { [n9.a4.SPOTIFY]: l_.A, [n9.a4.CRUNCHYROLL]: lR.k, [n9.a4.XBOX]: lk.A, [n9.a4.PLAYSTATION]: lO.A },
    lD = {
        [n9.a4.SPOTIFY]: () => B.intl.string(B.t["0ZB/XE"]),
        [n9.a4.CRUNCHYROLL]: () => B.intl.string(B.t.jdJYXw),
        [n9.a4.XBOX]: () => B.intl.string(B.t.Nfvo72),
        [n9.a4.PLAYSTATION]: () => B.intl.string(B.t.fFl4jo),
    };
function lw(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = lP[t];
    if (null == r) return null;
    let a = n ?? lD[t]?.();
    return (0, s.jsx)(lM.A, { Icon: r, ...l, "aria-label": a });
}
var lB = n(140651),
    lU = n(506326),
    lF = n(915089),
    lz = n(818348),
    lG = n(167848),
    lH = n(154342);
function lV(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, lF.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: i } = l;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.A, { id: a, children: e }),
                (0, s.jsx)(lC.Anchor, { className: u()(t, n), href: i, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: i, ariaDescription: o } = l ?? {};
    return (0, s.jsxs)(lf.g.Provider, {
        value: null == i,
        children: [
            null != i && null != o && (0, s.jsx)(d.A, { id: a, children: o }),
            (0, s.jsx)(lj.D, {
                onClick: i,
                "aria-describedby": null == i ? void 0 : a,
                className: u()(t, null != i && n),
                children: r,
            }),
        ],
    });
}
function lY(e) {
    let { clickable: t, ...n } = e;
    return (0, s.jsx)(lV, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: lH.v });
}
function lK(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: r,
            thumbnailUrl: a,
            titleClickable: i,
            subtitleClickable: o,
            thumbnailClickable: c,
            providerIconProps: d,
            style: m = {},
        } = e,
        h = (0, lF.GV)(),
        { primaryColor: p, secondaryColor: x } = (0, lB.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${p}, ${x})`),
        (0, s.jsx)(lv.N, {
            theme: lz.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, s.jsxs)("figure", {
                    "aria-roledescription": B.intl.string(B.t.zFfUhF),
                    "aria-labelledby": h,
                    className: u()(lG.kL, e),
                    style: m,
                    children: [
                        (0, s.jsx)(lV, {
                            className: lG.iT,
                            clickableClassName: lG.vk,
                            clickable: c,
                            children: (0, s.jsx)(lL.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, s.jsxs)("div", {
                            className: lG.op,
                            children: [
                                (0, s.jsx)(lT, { channel: n, entry: t, className: lG.VV }),
                                (0, s.jsx)(lA.h, { size: 2 }),
                                (0, s.jsx)(lY, {
                                    clickable: i,
                                    className: lG.sd,
                                    children: (0, s.jsx)(t3.D, {
                                        id: h,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: u()(lG.ek, lG.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(lA.h, { size: 2 }),
                                              (0, s.jsx)(lY, {
                                                  clickable: o,
                                                  className: lG.sd,
                                                  children: (0, s.jsx)(eE.E, {
                                                      variant: "text-sm/normal",
                                                      className: u()(lG.c1, lG.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)(lU.iT, { className: lG.jp, entry: t, location: lU.N5.EMBED }),
                            ],
                        }),
                        (0, s.jsx)("div", { className: lG.Y, children: null != d ? (0, s.jsx)(lw, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lX(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = o.useContext(ls)),
            es()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, s.jsx)(lK, { ...r, entry: n, channel: l });
}
function lW(e) {
    let t = (0, p.jc)();
    es()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, y.bG)([W.A], () => W.A.getChannel(n));
    return (
        es()(null != l, "channel must be defined"),
        (0, s.jsx)(lu, {
            location: n6.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, s.jsx)(lX, { ...e, channel: l }),
        })
    );
}
var lq = n(689592);
function lZ(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, p.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, s.jsxs)("div", {
              className: lq.kL,
              children: [
                  (0, s.jsx)("div", { className: lq.Y_, children: n(t) }),
                  null != l ? (0, s.jsx)(ec.Ay, { className: lq.z3, message: l, component: e }) : null,
              ],
          });
}
var l$ = n(317097),
    lJ = n(796951);
function lQ(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, i] = o.useState(l),
        [c, d] = o.useState(l);
    function m(e) {
        return (0, s.jsx)(x.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, s.jsx)("div", {
                    ref: l,
                    className: u()(lJ.kL, { [lJ.dK]: e, [lJ._7]: null != n }),
                    style: { "--__accent-color": null != n ? (0, l$.$k)(n, !0) : void 0 },
                    children: (0, s.jsx)(tV, { size: "reduced", children: r(t) }),
                }),
        });
    }
    return (l !== a && (i(l), d(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, s.jsx)(th.Ay, {
                type: th.Ay.Types.ATTACHMENT,
                reason: td.Oc.SPOILER,
                obscured: c,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var l0 = n(244367),
    l1 = n(405388);
function l5(e) {
    let { label: t, description: n, component: l, renderComponent: r } = e,
        a = (0, p.bO)(l);
    return l.type === m.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, s.jsxs)(ti.e, {
              title: t,
              required: l.required,
              error: a,
              children: [
                  null != n && (0, s.jsx)(l0.a, { type: l0.t.DESCRIPTION, className: l1.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var l2 = n(572891);
function l8(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, p.jc)(),
        [a, i] = (0, x.zn)(),
        o = (0, x.Hq)(i),
        c = n.type === m.I5.BUTTON;
    return (0, s.jsxs)("div", {
        className: l2.uW,
        ref: a,
        children: [
            (0, s.jsxs)("div", {
                className: l2.Y_,
                children: [
                    (0, s.jsx)("div", { className: u()(l2.zt, { [l2.uf]: c }), children: l(t) }),
                    (0, s.jsx)("div", {
                        className: u()(l2.LP, { [l2.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case m.I5.BUTTON:
                                    return (0, s.jsx)(Y, { ...e });
                                case m.I5.THUMBNAIL:
                                    return (0, s.jsx)(t$, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != r ? (0, s.jsx)(ec.Ay, { message: r, component: e }) : null,
        ],
    });
}
var l4 = n(359886);
function l3(e) {
    return e.map((e, t) =>
        (0, s.jsxs)(s.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case m.I5.ACTION_ROW:
                            return (0, s.jsx)(lZ, { ...t, renderComponents: l3 }, n);
                        case m.I5.BUTTON:
                            return (0, s.jsx)(Y, { ...t }, n);
                        case m.I5.STRING_SELECT:
                            return (0, s.jsx)(tl, { ...t }, n);
                        case m.I5.CHANNEL_SELECT:
                            return (0, s.jsx)(eC, { ...t }, n);
                        case m.I5.USER_SELECT:
                        case m.I5.ROLE_SELECT:
                        case m.I5.MENTIONABLE_SELECT:
                            return (0, s.jsx)(e8, { ...t }, n);
                        case m.I5.TEXT_INPUT:
                            return (0, s.jsx)(tc, { ...t }, n);
                        case m.I5.SECTION:
                            return (0, s.jsx)(l8, { ...t, renderComponents: l3 }, n);
                        case m.I5.TEXT_DISPLAY:
                            return (0, s.jsx)(tW, { ...t }, n);
                        case m.I5.MEDIA_GALLERY:
                            return (0, s.jsx)(tP, { ...t }, n);
                        case m.I5.THUMBNAIL:
                            return (0, s.jsx)(t$, { ...t }, n);
                        case m.I5.FILE:
                            return (0, s.jsx)(tx, { ...t }, n);
                        case m.I5.SEPARATOR:
                            return (0, s.jsx)(tw, { ...t }, n);
                        case m.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, s.jsx)(lW, { ...t }, n);
                        case m.I5.CONTAINER:
                            return (0, s.jsx)(lQ, { ...t, renderComponents: l3 }, n);
                        case m.I5.LABEL:
                            return (0, s.jsx)(l5, { ...t, renderComponent: e }, n);
                        case m.I5.FILE_UPLOAD:
                            return (0, s.jsx)(eX, { ...t }, n);
                        case m.I5.CHECKPOINT_CARD:
                            return (0, s.jsx)(nX, { ...t }, n);
                        case m.I5.RADIO_GROUP:
                            return (0, s.jsx)(e9, { ...t }, n);
                        case m.I5.CHECKBOX_GROUP:
                            return (0, s.jsx)(eA, { ...t }, n);
                        case m.I5.CHECKBOX:
                            return (0, s.jsx)(ej, { ...t }, n);
                        default:
                            return (0, s.jsx)(tQ, {}, n);
                    }
                })(e, t.toString()),
                (0, s.jsx)(d.A, { children: "," }),
            ],
        }),
    );
}
function l7(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [r, a] = (0, x.zn)();
    return 0 === l.length
        ? null
        : (0, s.jsx)(p.f5, {
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
                                  className: u()([l4.k, { [l4.z]: (0, h._c)(t) }]),
                                  children: l3(l),
                              }),
                      }),
                  }),
              }),
          });
}

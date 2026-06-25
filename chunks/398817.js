n.d(t, { Ay: () => lr, fD: () => la });
var l,
    a,
    r,
    i = n(627968),
    s = n(64700),
    o = n(503698),
    u = n.n(o),
    c = n(140735),
    d = n(155718),
    m = n(383233),
    p = n(298236),
    h = n(953756),
    x = n(735438),
    f = n(862482),
    g = n(980707),
    j = n(477782),
    v = n(34188),
    N = n(811893),
    C = n(863610),
    A = n(442433),
    I = n(565645);
n(938796);
var E = n(17928),
    y = n(636537),
    S = n(192308),
    T = n(228366),
    b = n(163437),
    L = n(97352),
    O = n(67480),
    _ = n(328968),
    R = n(428262),
    P = n(580630),
    k = n(963179),
    U = n(168393),
    M = n(652215),
    D = n(375708);
let w = (0, E.UT)([O.A, L.A, _.A], {
    getQueryId: M.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = O.A.get(e),
            n = L.A.getForSKU(e) ?? [],
            l = _.A.getForSKU(e),
            a = O.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === M.Puh.SUBSCRIPTION && null == a)
            ? null
            : { parentSku: a, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: M.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await y.Bo.get(t);
        T.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                T.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    T.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                });
    },
});
var F = n(957565),
    z = n(123917),
    B = n(489414),
    H = n(35335);
function G(e) {
    let { url: t, onSelect: n } = e;
    return F.p5 && null != t
        ? (0, i.jsx)(g.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: A.Z_,
              "aria-label": D.intl.string(D.t.tvTXy8),
              onSelect: n,
              children: (0, i.jsx)(j.rX, {
                  children: (0, i.jsx)(j.Dr, {
                      id: "copy",
                      label: D.intl.string(D.t.uHhnfa),
                      action: () => (0, F.C)(t),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let t,
        { label: n, style: l, disabled: a, emoji: r, url: o, skuId: c } = e,
        { executeStateUpdate: m, visualState: h, isDisabled: g } = (0, p.At)(e),
        j = (function (e) {
            let { data: t } = w(e),
                n = t?.parentSku,
                l = t?.sku,
                a = t?.storeListing,
                r = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(U.SubscriptionDetailsModal, {
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
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(k.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != a && (null == l || l.type !== M.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                if (l.type === M.Puh.SUBSCRIPTION) {
                    if (null == r || 0 === r.length) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                    let e = r[0],
                        t = (0, R.y8)(e.id);
                    return {
                        disabled: !1,
                        label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, P.$g)(t.amount, t.currency),
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
                              price: (0, P.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: u,
                      };
            }
        })(c),
        E = null != c && l === d.in.PREMIUM,
        y = E && j?.disabled,
        T = E ? j?.label : n,
        L = null != r,
        O = null != T && T.length > 0,
        _ = l === d.in.LINK && null != o && o.length > 0,
        F = h === B.BB.LOADING || (E && null == j);
    return (
        (t = _
            ? () => {
                  (0, z.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : E
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
            disabled: a || h === B.BB.DISABLED || g || y,
            onClick: t,
            onContextMenu: (e) => {
                _ && (0, A.jA)(e, (e) => (0, i.jsx)(G, { ...e, url: o }));
            },
            role: _ ? "link" : "button",
            children: [
                (0, i.jsxs)("div", {
                    className: u()(H.Qs, { [H.R]: F, [H.M2]: E }),
                    "aria-hidden": F,
                    children: [
                        E
                            ? (0, i.jsx)("div", {
                                  className: H.sV,
                                  children: (0, i.jsx)(v.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        L
                            ? (0, i.jsx)(I.A, {
                                  className: u()({ [H.MR]: O }),
                                  src: r.src,
                                  emojiId: r.id,
                                  emojiName: r.name,
                                  animated: r.animated,
                              })
                            : null,
                        O ? (0, i.jsx)("div", { className: H.Pf, children: T }) : null,
                        _ ? (0, i.jsx)(N.t, { size: "xs", color: "currentColor", className: H.LE }) : null,
                    ],
                }),
                F
                    ? (0, i.jsx)("div", { className: H.Lq, children: (0, i.jsx)(C.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var K = n(678708),
    Y = n(713654),
    X = n(734057),
    q = n(71393),
    W = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    $ = n(47167),
    J = n(696451),
    Z = n(317525),
    Q = n(994500),
    ee = n(287809),
    et = n(768038),
    en = n(403362),
    el = n(562153);
function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = q.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case W.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? J.Ay.getNick(l.id, t.id) : void 0;
                    return { type: B.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case W.ROLE: {
                    if (null == l) return null;
                    let t = Z.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: B.iw.ROLE, value: t.id, label: t.name };
                }
                case W.CHANNEL: {
                    if (null == l) return null;
                    let t = X.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: B.iw.CHANNEL, value: t.id, label: (0, $.m1)(t, ee.default, Q.A) };
                }
            }
        })
        .filter(en.Vq);
}
n(138321);
var er = n(284009),
    ei = n.n(er),
    es = n(444550),
    eo = n(594808),
    eu = n(814890),
    ec = n(568167),
    ed = n(252592);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, i.jsx)("div", { className: ec.zc, style: { height: n, width: n }, children: t });
}
var ep = (((a = {})[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), a);
function eh(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: a, defaultValues: r } = e,
        { type: o, customId: c, maxValues: m, disabled: h } = t,
        x = (0, eu.c7)(t),
        [f, g] = s.useState(!1),
        [j, v] = s.useState(!1),
        [N, C] = s.useState(new Map(r?.map((e) => [e.value, e]))),
        [A, I] = s.useState(new Set(N.keys())),
        E = s.useRef((r ?? []).map((e) => e.value)),
        y = s.useRef(o),
        S = s.useRef(c),
        [T, b] = s.useState(0);
    s.useEffect(() => {
        let e = (r ?? []).map((e) => e.value);
        if (
            e.every((e) => E.current.includes(e)) &&
            E.current.every((t) => e.includes(t)) &&
            o === y.current &&
            c === S.current
        )
            return;
        (E.current = e), (y.current = o), (S.current = c);
        let t = new Map(r?.map((e) => [e.value, e]));
        C(t), I(new Set(t.keys())), b((e) => e + 1);
    }, [r, o, c]);
    let L = (0, p.jc)();
    ei()(null != L, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: O,
            executeStateUpdate: _,
            visualState: R,
            isDisabled: P,
            error: k,
        } = L.useComponentState(t, N.size > 0 ? { type: o, selectedOptions: Array.from(N.values()) } : void 0),
        U = null != L.modal,
        M = R === B.BB.LOADING;
    s.useEffect(() => {
        if (
            O?.type === d.I5.USER_SELECT ||
            O?.type === d.I5.ROLE_SELECT ||
            O?.type === d.I5.MENTIONABLE_SELECT ||
            O?.type === d.I5.CHANNEL_SELECT
        ) {
            let e = new Map(O.selectedOptions.map((e) => [e.value, e]));
            C(e), I(new Set(e.keys()));
        }
    }, [O]);
    let D = s.useCallback(() => {
        _({ type: o, selectedOptions: Array.from(N.values()) }) && I(new Set(N.keys()));
    }, [_, o, N]);
    s.useEffect(() => {
        f || j || (N.size === A.size && Array.from(N.keys()).every((e) => A.has(e))) || D();
    }, [f, j, A, N, D]);
    let w = 0 === N.size || f,
        F = {
            isProcessing: M,
            isDisabled: h || R === B.BB.DISABLED || P,
            wrapperClassName: u()(ec.Lt, { [ec.zE]: U }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            placeholder: w ? x : void 0,
            onClose: () => g(!1),
            onOpen: () => g(!0),
            onBlur: () => v(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, t) {
                let { inPill: n } = t,
                    a = n ? 16 : 24,
                    r = l(e, a);
                return null != r ? (0, i.jsx)(em, { icon: r, iconSize: a }) : null;
            },
            renderOptionLabel: a,
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
                                  value: Array.from(N.values()),
                                  onChange: function (e) {
                                      f || v(!0), C(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({ [ec.R]: !w }),
                                  closeOnSelect: !1,
                                  ...F,
                                  "data-migration-pending": !0,
                              },
                              T,
                          )
                        : (0, i.jsx)(
                              es.p,
                              {
                                  value: [...N.values()][0],
                                  onChange: function (e) {
                                      return C(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...F,
                                  "data-migration-pending": !0,
                              },
                              T,
                          ),
            }),
            null == k || U ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(k), className: ed.z3 }),
        ],
    });
}
var ex = n(813627);
function ef(e) {
    let { channelTypes: t } = e,
        n = (0, p.jc)(),
        l = n?.channelId,
        a = X.A.getChannel(l),
        r = q.A.getGuild(a?.getGuildId()),
        o = s.useMemo(() => ea(e.defaultValues, r?.id, t), [e.defaultValues, r, t]);
    return (0, i.jsx)(eh, {
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
                  }).channels.map((e) => ({ type: B.iw.CHANNEL, value: e.id, label: (0, $.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, t) {
            let n = X.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === M.rbe.GUILD_CATEGORY ? K.s : (0, Y.gU)(n);
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
        l = (0, p.jc)();
    ei()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: a, executeStateUpdate: r } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = s.useMemo(() => a?.type === t && a.value, [a, t]),
        u = l.getParents(e)?.[0],
        c = u?.type === d.I5.LABEL ? u : void 0;
    return (
        ei()(null != c, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(eg.S, {
            label: c.label,
            description: c.description,
            checked: o,
            onChange: function (e) {
                r({ type: t, value: e });
            },
        })
    );
}
var ev = n(167417);
function eN(e) {
    let { type: t, options: n, required: l, maxValues: a } = e,
        r = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: u } = (0, p.At)(e, r.length > 0 ? { type: t, values: r } : void 0),
        c = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(ev.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: c.length >= a && !c.includes(e.value),
        })),
        selectedValues: c,
        onChange: function (e) {
            u({ type: t, values: e });
        },
        required: l,
    });
}
var eC = n(81369),
    eA = n(661531),
    eI = n(834730),
    eE = n(628284),
    ey = n(241326),
    eS = n(608299),
    eT = n(780777),
    eb = n(494921),
    eL = n(565150),
    eO = n(851023),
    e_ = n(215497),
    eR = n(914905),
    eP = n(101555),
    ek = n(424170),
    eU = n(31717),
    eM = n(255438),
    eD = n(453771),
    ew = n(518960),
    eF = n(382287),
    ez = n(522602),
    eB = n(769666);
function eH(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: a, types: r, guildId: s } = e,
        o = (0, eD.o2)(s),
        c = (0, eM.Xq)(o / eM.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: eB.pp,
        children: [
            (0, i.jsxs)("div", {
                className: u()(eB.e8, { [eB.R]: t }),
                children: [
                    (0, i.jsx)(eC.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: D.intl.format(D.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: a,
                        }),
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, eu.fw)(l, a, r, c),
                    }),
                ],
            }),
            t &&
                (0, i.jsxs)("div", {
                    className: u()(eB.e8, eB.r$),
                    children: [
                        (0, i.jsx)(eC.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, i.jsx)(eI.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: D.intl.string(D.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eG() {
    return (0, i.jsxs)("div", {
        className: u()(eB.pp, eB.e8),
        children: [
            (0, i.jsx)(eE.y, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, i.jsx)(eI.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: D.intl.string(D.t["0PhgpK"]),
            }),
            (0, i.jsx)(eI.E, { variant: "text-xs/normal", color: "text-muted", children: D.intl.string(D.t.HYg2Hn) }),
        ],
    });
}
function eV(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: u()(eB.NJ, { [eB.j1]: l }),
            children: [
                (0, i.jsx)(eR.J, { upload: t, size: l ? e_.L.XSMALL : e_.L.XXSMALL }),
                (0, i.jsx)(eI.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eB.iW,
                    children: t.filename ?? D.intl.string(D.t.ZMirp0),
                }),
                (0, i.jsx)(eP.Ay, {
                    className: eB.BX,
                    children: (0, i.jsx)(eO.A, {
                        className: eB.XI,
                        tooltip: D.intl.string(D.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, i.jsx)(ey.u, { size: "xs", color: "currentColor", className: eB.gE }),
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
        a = s.useRef(null),
        [r, o] = s.useState(!1),
        c = (0, p.jc)();
    ei()(null != c, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = c.channelId;
    ei()(null != m, "FileUploadActionComponent must be used inside a channel");
    let h = c.modal?.customId;
    ei()(null != h, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: x,
            typesFormattedString: f,
            validateFilenames: g,
            showInvalidFileTypeAlert: j,
        } = (0, ek.M1)(e.fileTypes),
        {
            uploadIds: v,
            setUploadIds: N,
            currentUploads: C,
            error: A,
        } = (function (e) {
            let t = (0, p.jc)();
            ei()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            ei()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: a, error: r } = t.useComponentState(e),
                i = s.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = ez.A.getUploads(n, eU.C.InteractionModal),
                u = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                c = s.useCallback((e) => a({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [a]);
            return (
                s.useEffect(() => {
                    i.length > u.length && c(i.filter((e) => u.some((t) => t.id === e)));
                }, [i, u, c]),
                { uploadIds: i, setUploadIds: c, currentUploads: u, error: r }
            );
        })(e),
        I = (0, E.bG)([X.A], () => X.A.getBasicChannel(m));
    ei()(null != I, "FileUploadActionComponent requires a valid channel");
    let y = s.useCallback((e) => {
            e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0);
        }, []),
        S = s.useCallback((e) => {
            a.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        T = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (v.length + e.length > n)
                    return (0, eb.openUploadError)({
                        title: D.intl.string(D.t.wOr6hB),
                        help: D.intl.formatToPlainString(D.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eF.fJ)(e, I.guild_id)) return (0, ew.V)(I, e);
                if (!g(e.map((e) => e.name))) return j();
                let l = e.map((e) => {
                    let n = (0, eu.so)(h),
                        l = { id: n, file: e, platform: eL.xz.WEB, origin: t };
                    return (
                        eS.A.setFile({
                            channelId: m,
                            id: n,
                            file: l,
                            draftType: eU.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                N(v.concat(l));
            },
            [v, n, I, N, h, m, g, j],
        ),
        b = s.useCallback(
            (e) => {
                e.preventDefault(), o(!1), T(Array.from(e.dataTransfer?.files ?? []), "drag_drop");
            },
            [T],
        ),
        L = (e) => {
            eS.A.remove(m, e, eU.C.InteractionModal), N(v.filter((t) => t !== e));
        };
    return (s.useEffect(() => {
        let e = a.current;
        return (
            e?.addEventListener("dragover", y),
            e?.addEventListener("dragleave", S),
            e?.addEventListener("drop", b),
            () => {
                e?.removeEventListener("dragover", y),
                    e?.removeEventListener("dragleave", S),
                    e?.removeEventListener("drop", b);
            }
        );
    }, [y, S, b]),
    1 === n && 1 === C.length)
        ? (0, i.jsx)(eV, { upload: C[0], handleRemoveFile: L, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: a,
              className: u()(eB.kL, { [eB.Ke]: r, [eB.z3]: null != A }),
              children: [
                  v.length >= n
                      ? (0, i.jsx)(eG, {})
                      : (0, i.jsx)(eH, {
                            dropping: r,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: f,
                            guildId: I.guild_id,
                        }),
                  C.length > 0 &&
                      (0, i.jsx)("div", {
                          className: eB.aq,
                          children: C.map((e) => (0, i.jsx)(eV, { upload: e, handleRemoveFile: L }, e.id)),
                      }),
                  (0, i.jsx)(eT.A, {
                      ref: l,
                      onChange: function (e) {
                          T(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = "");
                      },
                      multiple: n > 1,
                      filters: x.length > 0 ? [{ name: "", extensions: x }] : void 0,
                      tabIndex: -1,
                      className: eB.Fg,
                  }),
              ],
          });
}
var eY = n(97808),
    eX = n(778712),
    eq = n(957485),
    eW = n(950305),
    e$ = n(297413),
    eJ = n(376304),
    eZ = n(201275),
    eQ = n(386784),
    e0 = n(657048),
    e1 = n(290863);
function e5(e) {
    let t = (0, p.jc)(),
        n = t?.channelId,
        l = X.A.getChannel(n),
        a = q.A.getGuild(l?.getGuildId()),
        r = (0, eQ.A)(a?.id, 1e3),
        o = s.useMemo(() => ea(e.defaultValues, a?.id), [e.defaultValues, a]);
    return (0, i.jsx)(eh, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = X.A.getChannel(n);
                if (null == l) return [];
                let a = e === d.I5.USER_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    r = e === d.I5.ROLE_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    { users: i, roles: s } = et.Ay.queryMentionResults({
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
                    ...i.map((e) => {
                        let t = el.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: B.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: B.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: (e, t) => {
            let n = t === ep.PILL_ICON_SIZE;
            if (e?.type === B.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, i.jsx)(eY.eu, {
                    size: n ? eX._3.SIZE_16 : eX._3.SIZE_24,
                    src: l.getAvatarURL(a?.id, t),
                    status: n ? null : e1.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === B.iw.ROLE) {
                let n = null != a ? Z.A.getRole(a.id, e.value) : void 0;
                if (null == n || null == a) return;
                let l = (0, eJ.fm)(a, n) ? (0, eZ.ox)(n, t) : null;
                return null != l
                    ? (0, i.jsx)(e0.A, { ...l })
                    : (0, i.jsx)(eq.i, { size: "custom", color: n.colorString ?? M.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: (e) => {
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
                let n = null != a ? Z.A.getRole(a.id, e.value) : void 0,
                    l = null == n ? null : r?.[n.id];
                null != l &&
                    (t = (0, i.jsxs)("div", {
                        className: ex.Ly,
                        children: [
                            (0, i.jsx)(eW.n, { size: "sm", color: "currentColor", className: ex.jh }),
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
var e2 = n(773812),
    e3 = n(821609),
    e8 = n(659649);
function e4(e) {
    let { type: t, options: n, required: l } = e,
        a = s.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: r, executeStateUpdate: o } = (0, p.At)(e, null != a ? { type: t, value: a } : void 0),
        c = s.useMemo(() => (r?.type === t ? r.value : null), [r, t]),
        d = null != c,
        m = s.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function h(e) {
        o({ type: t, value: e });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e2.z, { options: m, value: c ?? "", onChange: h, required: l }),
            !l &&
                (0, i.jsx)("div", {
                    className: u()(e8.H, { [e8.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e3.$, {
                        text: D.intl.string(D.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => h(null),
                    }),
                }),
        ],
    });
}
var e6 = n(843282);
function e7(e) {
    let { emoji: t, label: n, description: l, isDisabled: a, isOffset: r } = e,
        s = u()(ed._A, { [ed.r9]: a, [ed.cY]: null == t && r });
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
function e9(e) {
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
function te(e) {
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
function tt(e) {
    let { type: t, options: n, id: l, maxValues: a, disabled: r } = e,
        o = (0, eu.c7)(e),
        c = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, p.jc)();
    ei()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: h,
            executeStateUpdate: x,
            visualState: f,
            isDisabled: g,
            error: j,
        } = m.useComponentState(e, c.length > 0 ? { type: t, values: c } : void 0),
        v = null != m.modal,
        N = a > 1,
        C = f === B.BB.LOADING,
        [A, I] = s.useState(!1),
        [E, y] = s.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, T] = s.useState(E),
        b = s.useMemo(() => n.some((e) => null != e.emoji), [n]);
    s.useEffect(() => {
        if (h?.type === d.I5.STRING_SELECT) {
            let e = new Set(h.values);
            y(e), T(e);
        } else {
            let e = new Set(c);
            y(e), T(e);
        }
    }, [l, c, h]);
    let L = s.useCallback(() => {
        S !== E && x({ type: d.I5.STRING_SELECT, values: Array.from(E) }) && T(E);
    }, [E, S, T, x]);
    s.useEffect(() => {
        A || (E.size === S.size && Array.from(S).every((e) => E.has(e))) || L();
    }, [A, E, S, L]);
    let O = (0, eu.Lr)(e, v ? "modal" : "message"),
        _ = e6.lS;
    N ? (_ = e6.M8) : O && (_ = e6.$l);
    let R = (0, e6.Ev)({ value: E, onChange: (e) => y(e), onSelectInteraction: _ });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e6.Pw, {
                    isProcessing: C,
                    isDisabled: r || f === B.BB.DISABLED || g,
                    className: u()(ed.Lt, { [ed.zE]: v }),
                    options: n.map((e) => ({ ...e, disabled: N && !E.has(e.value) && E.size === a })),
                    placeholder: o,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !N,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e7, { ...e, isDisabled: N && !E.has(e.value) && E.size === a, isOffset: b }),
                    renderOptionValue: (e) => (N ? (0, i.jsx)(te, { options: e }) : (0, i.jsx)(e9, { ...e[0] })),
                    ...R,
                    "data-migration-pending": !0,
                }),
            }),
            null == j || v ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(j), className: ed.z3 }),
        ],
    });
}
var tn = n(292666),
    tl = n(260598),
    ta = n(321471),
    tr = n(969508),
    ti = n(892310);
function ts(e) {
    let t,
        { type: n, style: l, label: a, placeholder: r, minLength: o, maxLength: u, required: c, value: m } = e,
        [h, x] = s.useState(m ?? ""),
        { state: f, executeStateUpdate: g, error: j } = (0, p.At)(e, null != m ? { type: n, value: m } : void 0),
        v = (0, tr.FG)(e.id);
    s.useEffect(() => {
        f?.type === n && x(f.value);
    }, [n, f]);
    let N = {
        value: h,
        placeholder: r,
        minLength: o,
        maxLength: u,
        required: c,
        onChange: function (e) {
            x(e), g({ type: n, value: e });
        },
        autoFocus: v,
    };
    switch (l) {
        case d.qz.SMALL:
            t = (0, i.jsx)(tn.k, { ...N });
            break;
        case d.qz.PARAGRAPH:
            t = (0, i.jsx)(tl.f, { autosize: !0, ...N });
    }
    return null != a ? (0, i.jsx)(ta.e, { title: a, required: c, className: ti.k, error: j, children: t }) : t;
}
n(321073);
var to = n(534890),
    tu = n(831544),
    tc = n(460905),
    td = n(109112),
    tm = n(664121),
    tp = n(534514),
    th = n(602853),
    tx = n(222713),
    tf = n(783465),
    tg = n(7584),
    tj = n(548118),
    tv = n(486020),
    tN = n(873063),
    tC = n(260473);
function tA(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: a = 0,
            numEmojisSent: r = 0,
            topEmoji: o,
            topGame: u,
            topGuild: c,
            powerLevel: d,
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
        x = (0, tf.oO)(a),
        f = (0, tf.OW)(n),
        g = tx.f[n],
        j = (0, th.r)(g.primaryColor).hex(),
        v = (0, th.r)(g.secondaryColor).hex({ opacity: 0.2 }),
        N = (0, E.bG)([q.A], () => q.A.getGuild(c?.guildId)),
        C = new Intl.NumberFormat(D.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        A = (0, tf._V)(m ?? 0),
        y = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return e.push("/assets/db1951f89e12e0e3.svg"), e;
        }, []);
    return (0, i.jsxs)("div", {
        className: tC.kL,
        style: { backgroundColor: j },
        children: [
            (0, i.jsxs)("div", {
                className: tC.Nr,
                children: [
                    (0, i.jsx)("img", { src: f, alt: "", className: tC.LY, style: { backgroundColor: j } }),
                    (0, i.jsxs)("div", {
                        className: tC.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tC.dJ,
                                children: [
                                    (0, i.jsx)(to.o, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: tC.KA, children: p }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tC.dJ,
                                children: [
                                    (0, i.jsx)(tu.c, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: tC.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tC.dJ,
                                children: [
                                    (0, i.jsx)(tc.n, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: tC.KA, children: h }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: tC.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(td._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tC.KA,
                                                      children: D.intl.string(tN.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(I.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: tC.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tC.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? tg.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: tC.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(td._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tC.KA,
                                                      children: D.intl.string(tN.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: tv.Ay.getApplicationIconURL({
                                                          id: u.applicationId,
                                                          icon: u.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: tC.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tC.KA,
                                                      children: u.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: tC.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(td._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tC.KA,
                                                      children: D.intl.string(tN.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != N
                                                      ? (0, i.jsx)(tj.Ay, {
                                                            guild: N,
                                                            size: tj.Ay.Sizes.SMOL,
                                                            className: tC.iY,
                                                        })
                                                      : (0, i.jsx)(tm.R, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tC.KA,
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
                className: tC.qr,
                style: { backgroundColor: v },
                children: (0, i.jsx)(tp.D, {
                    variant: "display-sm",
                    className: tC.DD,
                    children: D.intl.string(tN.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tC.hC,
                style: { backgroundColor: j },
                children: [
                    (0, i.jsx)("div", {
                        className: tC.TO,
                        children: y.map((e, t) =>
                            (0, i.jsx)(
                                "img",
                                { className: tC.mG, src: e, width: 4, alt: "", style: { opacity: t >= A ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: tC.JA,
                        children: [
                            (0, i.jsx)(eI.E, { variant: "text-xs/normal", className: tC.KA, children: "LVL" }),
                            (0, i.jsx)(eI.E, { variant: "text-xs/bold", className: tC.KA, children: C.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tI = n(564771),
    tE = n(338717),
    ty = n(96782),
    tS = n(302031),
    tT = n(778288);
function tb(e) {
    let { file: t, name: n, size: l, spoiler: a } = e,
        r = s.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [o, c] = s.useState(a),
        [d, m] = s.useState(a);
    a !== o && (c(a), m(a));
    let p = s.useMemo(
        () => () => (0, i.jsx)(ty.zB, { mimeType: r, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, r],
    );
    function h(e) {
        return (0, i.jsx)(tI.A, {
            className: u()({ [tT.V]: e }),
            url: t.url,
            fileName: n ?? D.intl.string(D.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: p,
        });
    }
    return (0, i.jsx)("div", {
        className: tT.O,
        children: a
            ? (0, i.jsx)(tS.Ay, {
                  type: tS.Ay.Types.ATTACHMENT,
                  reason: tE.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => h(e),
              })
            : h(!1),
    });
}
var tL = n(665260),
    tO = n(731068),
    t_ = n(154872),
    tR = n(492230),
    tP = n(294520),
    tk = n(448381),
    tU = n(144165),
    tM = n(990078),
    tD = n(891694),
    tw = n(779573);
function tF(e) {
    let t = s.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tM.m, {
            text: D.intl.string(D.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, i.jsx)("div", {
                className: u()(e.className, tw.FN, { [tw.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(tD.A, { ref: t, className: tw.i4 }),
            }),
        });
    let l = n.loadingState === d.TD.LOADING ? M.Rv1.LOADING : M.Rv1.ERROR;
    return (0, i.jsx)(tU._, {
        className: u()(e.className, { [tw.gS]: e.hiddenSpoilers }),
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
var tz = n(998218),
    tB = n(34337);
function tH(e) {
    let t = e.item.originalItem.media;
    return (0, i.jsx)(tF, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tG(e) {
    let t = e.item.originalItem.media;
    return (0, tB.LL)({
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
function tV(e) {
    let t = e.item.originalItem.media,
        n = tz.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, tB.$o)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tK = n(564107),
    tY = n(394839),
    tX = n(644447);
function tq(e) {
    let { message: t } = (0, p.jc)(),
        n = (0, E.bG)([X.A], () => X.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: a,
            gifAutoPlay: r,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, tK.X)();
    if (null == t || null == n) return null;
    let u = e.items.map((e) => (0, t_.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: c, srcToHandlePreloadImage: d } =
            u.length > 1
                ? (0, tR.o)(u, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: a }, "Media Mosaic")
                : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} };
    function m(e, n) {
        let l = e.originalItem;
        return (0, tP.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let h = e.items.map((e, n) => {
        let l = e.media,
            a = o?.(l),
            i = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, tk.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, tL.Lt)(l.flags, tO.e5.IS_ANIMATED),
                },
                onContextMenu: a,
                autoPlayGif: r,
                getObscureReason: m,
                renderImageComponent: tG,
                renderVideoComponent: tV,
                renderVisualPlaceholderComponent: tH,
                renderAudioComponent: M.tEg,
                renderPlaintextFilePreview: M.tEg,
                renderGenericFileComponent: M.tEg,
                gifFavoriteButton: s(l),
                onPlay: function (e, t, n) {},
                canRemoveItem: !1,
                onRemoveItem: M.tEg,
            },
            u = (0, tX.E)({ proxyURL: l.proxyUrl, url: l.url });
        return u in c && ((i.onClick = c[u]), (i.handlePreloadImage = d[u])), i;
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(tY.A, { items: h, isInAppComponentsV2: !0 }) });
}
var tW = n(371068),
    t$ = n(170226),
    tJ = n(838541),
    tZ = n(567342);
function tQ(e) {
    let { media: t, spoiler: n, description: l } = e,
        a = (0, tk.wz)(t),
        r = (0, tL.Lt)(t.flags, tO.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tK.X)(),
        [c, d] = s.useState(n),
        [m, p] = s.useState(n);
    n !== c && (d(n), p(n));
    let h = (e) =>
        "IMAGE" !== a
            ? (0, i.jsx)(tF, {
                  className: tZ.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, i.jsx)(tB.LL, {
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
                  autoPlay: o && !e,
                  mediaLayoutType: tJ.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: r,
              });
    return n
        ? (0, i.jsx)(tS.Ay, {
              type: tS.Ay.Types.ATTACHMENT,
              reason: tE.Oc.SPOILER,
              obscured: m,
              onToggleObscurity: () => p((e) => !e),
              children: (e) => h(e),
          })
        : h(!1);
}
var t0 = n(810116);
function t1() {
    return (0, i.jsx)("div", {
        className: t0.k,
        children: (0, i.jsx)(eI.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: D.intl.string(D.t.zksHZO),
        }),
    });
}
var t5 = n(681154);
class t2 extends s.PureComponent {
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
var t3 = n(211401),
    t8 = n(500049),
    t4 = n(429913),
    t6 = n(355622),
    t7 = n(751765),
    t9 = n(360469),
    ne = n(52133),
    nt = n(803306),
    nn = n(860071),
    nl = n(808380),
    na = n(409626),
    nr = n(692969),
    ni = n(424994),
    ns = (((r = {})[(r.EMBED = 1)] = "EMBED"), r);
let no = { [nl.Y.XBOX]: ni.a4.XBOX, [nl.Y.PLAYSTATION]: ni.a4.PLAYSTATION },
    nu = { [ns.EMBED]: na.Ob.Embed };
function nc(e) {
    let t,
        n,
        { entry: l, location: a, baseEntryData: r } = e,
        i = (0, t4.h)(l.extra.application_id),
        s = i?.getIconURL(t9.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = no[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === t5.ContentInventoryEntryType.PLAYED_GAME && (0, t7.JM)(l) && !(0, t7.I5)(l)
            ? D.t.vPg1JT
            : D.t.rPqqts;
    let u = nu[a],
        c = {
            onClick: (0, nr.A)({
                location: u,
                applicationId: l.extra.application_id,
                source: u,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: D.intl.formatToPlainString(D.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...r,
        thumbnailUrl: s,
        title: o,
        titleClickable: c,
        thumbnailClickable: c,
        userDescription: n,
        providerIconProps: t,
    };
}
var nd = n(205327),
    nm = n(261020),
    np = n(272984),
    nh = n(970928);
let nx = s.createContext(void 0);
function nf(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, ne.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nt.wz)(e) : nn.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case t5.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nv, { entry: t, ...l });
        case t5.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nN, { entry: t, ...l });
        case t5.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(nC, { entry: t, ...l });
        case t5.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nA, { entry: t, ...l });
        case t5.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nI, { entry: t, ...l });
        case t5.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(nj, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function ng(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(t2, { fallback: t, children: (0, i.jsx)(nf, { ...n }) });
}
function nj(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let { entry: t } = e,
                n = (0, t4.h)(t.extra.application_id),
                l = n?.getIconURL(t9.iu.LARGE),
                a = t.extra.activity_name,
                r = (0, t7.Hd)(t) ? D.t.vPg1JT : D.t.rPqqts,
                i = {
                    onClick: function () {
                        t3.R(t8.s4.TEXT, t6.oU.NORMAL, { applicationId: t.extra.application_id });
                    },
                    ariaDescription: D.intl.formatToPlainString(D.t.NTHttN, { title: a }),
                };
            return { thumbnailUrl: l, title: a, titleClickable: i, thumbnailClickable: i, userDescription: r };
        })({ entry: t, ...l });
    return (0, i.jsx)(nx.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nv(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                { provider: a, image_url: r } = n.extra.media,
                i = n.extra.artist.name,
                s = {
                    onClick: () => (0, nm.n)(np.M0.ALBUM, n.extra.media.external_parent_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: n.extra.media.parent_title }),
                },
                o = {
                    onClick: () => (0, nm.n)(np.M0.ARTIST, n.extra.artist.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: i }),
                };
            return (
                a === nd.X.SPOTIFY && (t = { type: ni.a4.SPOTIFY }),
                {
                    ...l,
                    title: i,
                    thumbnailUrl: r,
                    titleClickable: o,
                    subtitleClickable: s,
                    thumbnailClickable: s,
                    userDescription: D.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...l });
    return (0, i.jsx)(nx.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nN(e) {
    let { entry: t, children: n, ...l } = e,
        a = nc({ entry: t, ...l });
    return (0, i.jsx)(nx.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nC(e) {
    let { entry: t, children: n, ...l } = e,
        a = nc({ entry: t, ...l });
    return (0, i.jsx)(nx.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nA(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                a = (0, t4.h)(n.extra.application_id),
                r = a?.getIconURL(128),
                i = (0, nh.uD)(n.extra.application_id, n.extra.media_assets_large_image, [t9.iu.LARGE, t9.iu.LARGE]),
                o = n.extra.media_title,
                u = n.extra.media_subtitle,
                c = (0, t7.Hd)(n) ? D.t["LH+Z3y"] : D.t.YuKgml,
                d = { type: ni.a4.CRUNCHYROLL },
                m = s.useMemo(() => {
                    if (null == n.extra.url) return;
                    let e = tz.A.safeParseWithQuery(n.extra.url);
                    if (null != e && null != e.protocol && null != e.hostname) return e;
                }, [n.extra.url]);
            return (
                null != m &&
                    (t = {
                        href: tz.A.format(m),
                        ariaDescription: D.intl.formatToPlainString(D.t.aFFQ3g, { title: o }),
                    }),
                {
                    ...l,
                    thumbnailUrl: i ?? r,
                    title: o,
                    titleClickable: t,
                    thumbnailClickable: t,
                    subtitle: u,
                    userDescription: c,
                    providerIconProps: d,
                }
            );
        })({ entry: t, ...l });
    return (0, i.jsx)(nx.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
function nI(e) {
    let { entry: t, children: n, ...l } = e,
        a = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                a = n.extra.entries[0].media,
                r = a.artists[0],
                { title: i, provider: s, image_url: o } = a,
                u = r.name,
                c = {
                    onClick: () => (0, nm.n)(np.M0.TRACK, a.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: i }),
                },
                d = {
                    onClick: () => (0, nm.n)(np.M0.ARTIST, r.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: u }),
                };
            return (
                s === nd.X.SPOTIFY && (t = { type: ni.a4.SPOTIFY }),
                {
                    ...l,
                    title: i,
                    subtitle: u,
                    thumbnailUrl: o,
                    titleClickable: c,
                    subtitleClickable: d,
                    thumbnailClickable: c,
                    userDescription: D.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...l });
    return (0, i.jsx)(nx.Provider, { value: { parsedEntry: a, ...l }, children: n });
}
var nE = n(349288),
    ny = n(531142),
    nS = n(939249),
    nT = n(43990),
    nb = n(696986),
    nL = n(342952),
    nO = n(576757),
    n_ = n(291594),
    nR = n(22869),
    nP = n(959),
    nk = n(917517);
function nU(e) {
    let { entry: t, channel: n, className: l } = e,
        a = s.useRef(null),
        r = s.useRef(null),
        {
            displayParticipants: o,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: p,
        } = (0, nO.A)(t),
        h = [c, d];
    return (0, i.jsxs)("div", {
        className: u()(nk.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(nP.A, {
                              targetElementRef: a,
                              participants: p,
                              channel: n,
                              children: (e) =>
                                  (0, i.jsx)(nS.D, {
                                      innerRef: a,
                                      className: nk.vk,
                                      ...e,
                                      children: (0, i.jsx)(nL.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eX._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(nb.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(tp.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: u()(nk.IY, nk.Io),
                scaleFontToUserSetting: !0,
                children: D.intl.format(D.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, h[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, h[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(nR.A, { text: e, user: h[0], channel: n }, t),
                    name1Hook: (e, t) => (0, i.jsx)(nR.A, { text: e, user: h[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            nP.A,
                            {
                                targetElementRef: r,
                                participants: p,
                                channel: n,
                                children: (t) =>
                                    (0, i.jsx)(n_.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, i.jsx)(eI.E, {
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
var nM = n(263577),
    nD = n(347306),
    nw = n(790381),
    nF = n(266080),
    nz = n(121090),
    nB = n(18282);
let nH = { [ni.a4.SPOTIFY]: nz.A, [ni.a4.CRUNCHYROLL]: nD.k, [ni.a4.XBOX]: nF.A, [ni.a4.PLAYSTATION]: nw.A },
    nG = {
        [ni.a4.SPOTIFY]: () => D.intl.string(D.t["0ZB/XE"]),
        [ni.a4.CRUNCHYROLL]: () => D.intl.string(D.t.jdJYXw),
        [ni.a4.XBOX]: () => D.intl.string(D.t.Nfvo72),
        [ni.a4.PLAYSTATION]: () => D.intl.string(D.t.fFl4jo),
    };
function nV(e) {
    let { type: t, "aria-label": n, ...l } = e,
        a = nH[t];
    if (null == a) return null;
    let r = n ?? nG[t]?.();
    return (0, i.jsx)(nB.A, { Icon: a, ...l, "aria-label": r });
}
var nK = n(140651),
    nY = n(506326),
    nX = n(915089),
    nq = n(818348),
    nW = n(577959),
    n$ = n(794723);
function nJ(e) {
    let { className: t, clickableClassName: n, clickable: l, children: a } = e,
        r = (0, nX.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.A, { id: r, children: e }),
                (0, i.jsx)(nE.Anchor, { className: u()(t, n), href: s, "aria-describedby": r, children: a }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(ny.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(c.A, { id: r, children: o }),
            (0, i.jsx)(nS.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : r,
                className: u()(t, null != s && n),
                children: a,
            }),
        ],
    });
}
function nZ(e) {
    let { clickable: t, ...n } = e;
    return (0, i.jsx)(nJ, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: n$.v });
}
function nQ(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: a,
            thumbnailUrl: r,
            titleClickable: s,
            subtitleClickable: o,
            thumbnailClickable: c,
            providerIconProps: d,
            style: m = {},
        } = e,
        p = (0, nX.GV)(),
        { primaryColor: h, secondaryColor: x } = (0, nK.A)(r);
    return (
        null != r && (m.background = `linear-gradient(45deg, ${h}, ${x})`),
        (0, i.jsx)(nT.N, {
            theme: nq.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": D.intl.string(D.t.zFfUhF),
                    "aria-labelledby": p,
                    className: u()(nW.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(nJ, {
                            className: nW.iT,
                            clickableClassName: nW.vk,
                            clickable: c,
                            children: (0, i.jsx)(nM.V, { src: r, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: nW.op,
                            children: [
                                (0, i.jsx)(nU, { channel: n, entry: t, className: nW.VV }),
                                (0, i.jsx)(nb.h, { size: 2 }),
                                (0, i.jsx)(nZ, {
                                    clickable: s,
                                    className: nW.sd,
                                    children: (0, i.jsx)(tp.D, {
                                        id: p,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: u()(nW.ek, nW.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != a
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(nb.h, { size: 2 }),
                                              (0, i.jsx)(nZ, {
                                                  clickable: o,
                                                  className: nW.sd,
                                                  children: (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/normal",
                                                      className: u()(nW.c1, nW.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: a,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(nY.iT, { className: nW.jp, entry: t, location: nY.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: nW.Y, children: null != d ? (0, i.jsx)(nV, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function n0(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: a } =
            ((t = s.useContext(nx)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(nQ, { ...a, entry: n, channel: l });
}
function n1(e) {
    let t = (0, p.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, E.bG)([X.A], () => X.A.getChannel(n));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(ng, {
            location: ns.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(n0, { ...e, channel: l }),
        })
    );
}
var n5 = n(43915);
function n2(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, p.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: n5.kL,
              children: [
                  (0, i.jsx)("div", { className: n5.Y_, children: n(t) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: n5.z3, message: l, component: e }) : null,
              ],
          });
}
var n3 = n(647901),
    n8 = n(699012);
function n4(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: a } = e,
        [r, o] = s.useState(l),
        [c, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(h.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: u()(n8.kL, { [n8.dK]: e, [n8._7]: null != n }),
                    style: { "--__accent-color": n },
                    children: (0, i.jsx)(n3.x, { size: "reduced", children: a(t) }),
                }),
        });
    }
    return (l !== r && (o(l), d(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, i.jsx)(tS.Ay, {
                type: tS.Ay.Types.ATTACHMENT,
                reason: tE.Oc.SPOILER,
                obscured: c,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var n6 = n(244367),
    n7 = n(139355);
function n9(e) {
    let { label: t, description: n, component: l, renderComponent: a } = e,
        r = (0, p.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? a(l, "label-child")
        : (0, i.jsxs)(ta.e, {
              title: t,
              required: l.required,
              error: r,
              children: [
                  null != n && (0, i.jsx)(n6.a, { type: n6.t.DESCRIPTION, className: n7.h, children: n }),
                  a(l, "label-child"),
              ],
          });
}
var le = n(146480);
function lt(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: a } = (0, p.jc)(),
        [r, s] = (0, h.zn)(),
        o = (0, h.Hq)(s),
        c = n.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: le.uW,
        ref: r,
        children: [
            (0, i.jsxs)("div", {
                className: le.Y_,
                children: [
                    (0, i.jsx)("div", { className: u()(le.zt, { [le.uf]: c }), children: l(t) }),
                    (0, i.jsx)("div", {
                        className: u()(le.LP, { [le.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, i.jsx)(V, { ...e });
                                case d.I5.THUMBNAIL:
                                    return (0, i.jsx)(tQ, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != a ? (0, i.jsx)(eo.Ay, { message: a, component: e }) : null,
        ],
    });
}
var ln = n(532294),
    ll = n(62045);
function la(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(n2, { ...t, renderComponents: la }, n);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(V, { ...t }, n);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(tt, { ...t }, n);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(ef, { ...t }, n);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e5, { ...t }, n);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(ts, { ...t }, n);
                        case d.I5.SECTION:
                            return (0, i.jsx)(lt, { ...t, renderComponents: la }, n);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(t$.A, { ...t }, n);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(tq, { ...t }, n);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(tQ, { ...t }, n);
                        case d.I5.FILE:
                            return (0, i.jsx)(tb, { ...t }, n);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(tW.A, { ...t }, n);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(n1, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(n4, { ...t, renderComponents: la }, n);
                        case d.I5.LABEL:
                            return (0, i.jsx)(n9, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eK, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === ln.w.V2025) return (0, i.jsx)(tA, { ...t }, n);
                            return (0, i.jsx)(t1, {}, n);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e4, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(eN, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(ej, { ...t }, n);
                        default:
                            return (0, i.jsx)(t1, {}, n);
                    }
                })(e, t.toString()),
                (0, i.jsx)(c.A, { children: "," }),
            ],
        }),
    );
}
function lr(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [a, r] = (0, h.zn)();
    return 0 === l.length
        ? null
        : (0, i.jsx)(p.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, i.jsx)(h.O7.Root, {
                  containerInnerWidth: r,
                  children: (0, i.jsx)("div", {
                      style: { width: "100%" },
                      ref: a,
                      children: (0, i.jsx)(h.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: e,
                                  className: u()([ll.k, { [ll.z]: (0, m._c)(t) }]),
                                  children: la(l),
                              }),
                      }),
                  }),
              }),
          });
}

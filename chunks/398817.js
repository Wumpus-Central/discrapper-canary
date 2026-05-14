l.d(t, { Ay: () => na, fD: () => nn });
var n,
    a,
    r,
    i = l(627968),
    s = l(64700),
    o = l(503698),
    u = l.n(o),
    c = l(140735),
    d = l(155718),
    m = l(383233),
    p = l(298236),
    h = l(953756),
    x = l(735438),
    g = l(862482),
    j = l(980707),
    f = l(477782),
    v = l(34188),
    N = l(811893),
    C = l(863610),
    A = l(442433),
    I = l(565645);
l(938796);
var E = l(17928),
    y = l(636537),
    S = l(192308),
    T = l(228366),
    b = l(163437),
    L = l(97352),
    O = l(67480),
    _ = l(328968),
    R = l(927578),
    P = l(580630),
    k = l(963179),
    U = l(168393),
    M = l(652215),
    D = l(375708);
let w = (0, E.UT)([O.A, L.A, _.A], {
    getQueryId: M.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = O.A.get(e),
            l = L.A.getForSKU(e) ?? [],
            n = _.A.getForSKU(e),
            a = O.A.getParentSKU(e);
        return null == t || null == n || (null != t && t.type === M.Puh.SUBSCRIPTION && null == a)
            ? null
            : { parentSku: a, sku: t, storeListing: n, subscriptionPlans: l };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: M.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: l } = await y.Bo.get(t);
        T.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: l.store_listings }),
            null != l.subscription_plans &&
                T.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: l.subscription_plans,
                }),
            null != l.skus &&
                l.skus.forEach((e) => {
                    T.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                });
    },
});
var F = l(957565),
    z = l(123917),
    B = l(489414),
    H = l(808199);
function G(e) {
    let { url: t, onSelect: l } = e;
    return F.p5 && null != t
        ? (0, i.jsx)(j.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: A.Z_,
              "aria-label": D.intl.string(D.t.tvTXy8),
              onSelect: l,
              children: (0, i.jsx)(f.rX, {
                  children: (0, i.jsx)(f.Dr, {
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
        { label: l, style: n, disabled: a, emoji: r, url: o, skuId: c } = e,
        { executeStateUpdate: m, visualState: h, isDisabled: j } = (0, p.At)(e),
        f = (function (e) {
            let { data: t } = w(e),
                l = t?.parentSku,
                n = t?.sku,
                a = t?.storeListing,
                r = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (n?.applicationId == null || n?.id == null || n?.flags == null) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: l } = e;
                        return (0, i.jsx)(U.SubscriptionDetailsModal, {
                            appId: n.applicationId,
                            subscriptionType: (0, b.bg)(n.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: n.id,
                            transitionState: l,
                            guildId: null,
                        });
                    });
                }, [n?.applicationId, n?.id, n?.flags]),
                u = s.useCallback(() => {
                    if (null == n) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: l } = e;
                        return (0, i.jsx)(k.ItemDetailsModal, {
                            appId: n.applicationId,
                            skuId: n.id,
                            onClose: t,
                            transitionState: l,
                        });
                    });
                }, [n]);
            if (null != n && null != a && (null == n || n.type !== M.Puh.SUBSCRIPTION || null != l)) {
                if (null == e || (null != n && !n.available)) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                if (n.type === M.Puh.SUBSCRIPTION) {
                    if (null == r || 0 === r.length) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                    let e = r[0],
                        t = (0, R.y8)(e.id);
                    return {
                        disabled: !1,
                        label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                            skuName: n.name,
                            price: (0, P.$g)(t.amount, t.currency),
                        }),
                        onClick: o,
                    };
                }
                return null == n.price
                    ? { disabled: !0, label: D.intl.string(D.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                              skuName: n.name,
                              price: (0, P.$g)(n.price.amount, n.price.currency),
                          }),
                          onClick: u,
                      };
            }
        })(c),
        E = null != c && n === d.in.PREMIUM,
        y = E && f?.disabled,
        T = E ? f?.label : l,
        L = null != r,
        O = null != T && T.length > 0,
        _ = n === d.in.LINK && null != o && o.length > 0,
        F = h === B.BB.LOADING || (E && null == f);
    return (
        (t = _
            ? () => {
                  (0, z.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : E
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
            })(n),
            size: g.$n.Sizes.SMALL,
            disabled: a || h === B.BB.DISABLED || j || y,
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
var K = l(678708),
    Y = l(713654),
    X = l(734057),
    q = l(71393),
    W = (((n = {}).USER = "user"), (n.ROLE = "role"), (n.CHANNEL = "channel"), n),
    $ = l(47167),
    J = l(696451),
    Z = l(317525),
    Q = l(994500),
    ee = l(287809),
    et = l(768038),
    el = l(403362),
    en = l(562153);
function ea(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let n = q.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case W.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let l = null != n ? J.Ay.getNick(n.id, t.id) : void 0;
                    return { type: B.iw.USER, value: t.id, label: l ?? t.globalName ?? t.username };
                }
                case W.ROLE: {
                    if (null == n) return null;
                    let t = Z.A.getRole(n.id, e.id);
                    if (null == t) return null;
                    return { type: B.iw.ROLE, value: t.id, label: t.name };
                }
                case W.CHANNEL: {
                    if (null == n) return null;
                    let t = X.A.getChannel(e.id);
                    if (null == t || t.guild_id !== n.id || (l.length > 0 && !l.includes(t.type))) return null;
                    return { type: B.iw.CHANNEL, value: t.id, label: (0, $.m1)(t, ee.default, Q.A) };
                }
            }
        })
        .filter(el.Vq);
}
l(138321);
var er = l(284009),
    ei = l.n(er),
    es = l(444550),
    eo = l(594808),
    eu = l(814890),
    ec = l(738343),
    ed = l(40816);
function em(e) {
    let { icon: t, iconSize: l } = e;
    return (0, i.jsx)("div", { className: ec.zc, style: { height: l, width: l }, children: t });
}
var ep = (((a = {})[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), a);
function eh(e) {
    let { selectActionComponent: t, queryOptions: l, renderIcon: n, renderOptionLabel: a, defaultValues: r } = e,
        { type: o, customId: c, maxValues: m, disabled: h } = t,
        x = (0, eu.c7)(t),
        [g, j] = s.useState(!1),
        [f, v] = s.useState(!1),
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
        g || f || (N.size === A.size && Array.from(N.keys()).every((e) => A.has(e))) || D();
    }, [g, f, A, N, D]);
    let w = 0 === N.size || g,
        F = {
            isProcessing: M,
            isDisabled: h || R === B.BB.DISABLED || P,
            wrapperClassName: u()(ec.Lt, { [ec.zE]: U }),
            options: (e) =>
                new Promise((t) => {
                    t(l(e));
                }),
            placeholder: w ? x : void 0,
            onClose: () => j(!1),
            onOpen: () => j(!0),
            onBlur: () => v(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: (e, t) => {
                let { inPill: l } = t,
                    a = l ? 16 : 24,
                    r = n(e, a);
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
                                  onChange: (e) => {
                                      g || v(!0), C(new Map(e.map((e) => [e.value, e])));
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
                                  onChange: (e) => C(null != e ? new Map([[e.value, e]]) : new Map()),
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
var ex = l(167483);
function eg(e) {
    let { channelTypes: t } = e,
        l = (0, p.jc)(),
        n = l?.channelId,
        a = X.A.getChannel(n),
        r = q.A.getGuild(a?.getGuildId()),
        o = s.useMemo(() => ea(e.defaultValues, r?.id, t), [e.defaultValues, r, t]);
    return (0, i.jsx)(eh, {
        selectActionComponent: e,
        queryOptions: (e) => {
            let l;
            return null == (l = X.A.getChannel(n))
                ? []
                : et.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: l,
                      channelTypes: t,
                      limit: 15,
                  }).channels.map((e) => ({ type: B.iw.CHANNEL, value: e.id, label: (0, $.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: (e, t) => {
            let l = X.A.getChannel(e?.value);
            if (null == l) return null;
            let n = l.type === M.rbe.GUILD_CATEGORY ? K.s : (0, Y.gU)(l);
            return null != n ? (0, i.jsx)(n, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: (e) => (0, i.jsx)("span", { className: ex.Pf, children: e.label }),
        defaultValues: o,
    });
}
var ej = l(150934);
function ef(e) {
    let { type: t, default: l } = e,
        n = (0, p.jc)();
    ei()(null != n, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: a, executeStateUpdate: r } = n.useComponentState(e, null != l ? { type: t, value: l } : void 0),
        o = s.useMemo(() => a?.type === t && a.value, [a, t]),
        u = n.getParents(e)?.[0],
        c = u?.type === d.I5.LABEL ? u : void 0;
    return (
        ei()(null != c, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(ej.S, {
            label: c.label,
            description: c.description,
            checked: o,
            onChange: (e) => {
                r({ type: t, value: e });
            },
        })
    );
}
var ev = l(167417);
function eN(e) {
    let { type: t, options: l, required: n, maxValues: a } = e,
        r = s.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        { state: o, executeStateUpdate: u } = (0, p.At)(e, r.length > 0 ? { type: t, values: r } : void 0),
        c = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(ev.$, {
        options: l.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: c.length >= a && !c.includes(e.value),
        })),
        selectedValues: c,
        onChange: (e) => {
            u({ type: t, values: e });
        },
        required: n,
    });
}
var eC = l(81369),
    eA = l(661531),
    eI = l(834730),
    eE = l(628284),
    ey = l(241326),
    eS = l(608299),
    eT = l(780777),
    eb = l(494921),
    eL = l(565150),
    eO = l(851023),
    e_ = l(215497),
    eR = l(914905),
    eP = l(101555),
    ek = l(31717),
    eU = l(255438),
    eM = l(453771),
    eD = l(518960),
    ew = l(382287),
    eF = l(522602),
    ez = l(179906);
function eB(e) {
    let { dropping: t, fileInputRef: l, minValues: n, maxValues: a, guildId: r } = e,
        s = (0, eM.o2)(r),
        o = (0, eU.Xq)(s / eU.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: ez.pp,
        children: [
            (0, i.jsxs)("div", {
                className: u()(ez.e8, { [ez.R]: t }),
                children: [
                    (0, i.jsx)(eC.H, { color: eA.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: D.intl.format(D.t.y68I8P, {
                            onClick: () => l.current?.activateUploadDialogue(),
                            maxValues: a,
                        }),
                    }),
                    (0, i.jsx)(eI.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                            n > 1
                                ? n === a
                                    ? D.intl.format(D.t.SAr31z, { minValues: n, maxSize: o })
                                    : D.intl.format(D.t["ZG+3Ck"], { minValues: n, maxValues: a, maxSize: o })
                                : D.intl.format(D.t.tyxwW1, { maxValues: a, maxSize: o }),
                    }),
                ],
            }),
            t &&
                (0, i.jsxs)("div", {
                    className: u()(ez.e8, ez.r$),
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
function eH() {
    return (0, i.jsxs)("div", {
        className: u()(ez.pp, ez.e8),
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
function eG(e) {
    let { upload: t, handleRemoveFile: l, singleFileInput: n } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: u()(ez.NJ, { [ez.j1]: n }),
            children: [
                (0, i.jsx)(eR.J, { upload: t, size: n ? e_.L.XSMALL : e_.L.XXSMALL }),
                (0, i.jsx)(eI.E, {
                    variant: `text-${n ? "md" : "xs"}/medium`,
                    className: ez.iW,
                    children: t.filename ?? D.intl.string(D.t.ZMirp0),
                }),
                (0, i.jsx)(eP.Ay, {
                    className: ez.BX,
                    children: (0, i.jsx)(eO.A, {
                        className: ez.XI,
                        tooltip: D.intl.string(D.t.N86XcP),
                        onClick: () => l(t.id),
                        dangerous: !0,
                        children: (0, i.jsx)(ey.u, { size: "xs", color: "currentColor", className: ez.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eV(e) {
    let { minValues: t, maxValues: l } = e,
        n = s.useRef(null),
        a = s.useRef(null),
        [r, o] = s.useState(!1),
        c = (0, p.jc)();
    ei()(null != c, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = c.channelId;
    ei()(null != m, "FileUploadActionComponent must be used inside a channel");
    let h = c.modal?.customId;
    ei()(null != h, "FileUploadActionComponent requires modalCustomId from context");
    let {
            uploadIds: x,
            setUploadIds: g,
            currentUploads: j,
            error: f,
        } = (function (e) {
            let t = (0, p.jc)();
            ei()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let l = t.channelId;
            ei()(null != l, "useFileUploadComponentState must be used inside a channel");
            let { state: n, executeStateUpdate: a, error: r } = t.useComponentState(e),
                i = s.useMemo(() => (n?.type === d.I5.FILE_UPLOAD ? n.uploadIds : []), [n]),
                o = eF.A.getUploads(l, ek.C.InteractionModal),
                u = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                c = s.useCallback((e) => a({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [a]);
            return (
                s.useEffect(() => {
                    i.length > u.length && c(i.filter((e) => u.some((t) => t.id === e)));
                }, [i, u, c]),
                { uploadIds: i, setUploadIds: c, currentUploads: u, error: r }
            );
        })(e),
        v = (0, E.bG)([X.A], () => X.A.getBasicChannel(m));
    ei()(null != v, "FileUploadActionComponent requires a valid channel");
    let N = s.useCallback((e) => {
            e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0);
        }, []),
        C = s.useCallback((e) => {
            a.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        A = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (x.length + e.length > l)
                    return (0, eb.openUploadError)({
                        title: D.intl.string(D.t.wOr6hB),
                        help: D.intl.formatToPlainString(D.t.dy6viJ, { maxValues: l }),
                    });
                if ((0, ew.fJ)(e, v.guild_id)) return (0, eD.V)(v, e);
                let n = e.map((e) => {
                    let l = (0, eu.so)(h),
                        n = { id: l, file: e, platform: eL.xz.WEB, origin: t };
                    return (
                        eS.A.setFile({
                            channelId: m,
                            id: l,
                            file: n,
                            draftType: ek.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        l
                    );
                });
                g(x.concat(n));
            },
            [x, l, v, g, h, m],
        ),
        I = s.useCallback(
            (e) => {
                e.preventDefault(), o(!1), A(Array.from(e.dataTransfer?.files ?? []), "drag_drop");
            },
            [A],
        ),
        y = (e) => {
            eS.A.remove(m, e, ek.C.InteractionModal), g(x.filter((t) => t !== e));
        };
    return (s.useEffect(() => {
        let e = a.current;
        return (
            e?.addEventListener("dragover", N),
            e?.addEventListener("dragleave", C),
            e?.addEventListener("drop", I),
            () => {
                e?.removeEventListener("dragover", N),
                    e?.removeEventListener("dragleave", C),
                    e?.removeEventListener("drop", I);
            }
        );
    }, [N, C, I]),
    1 === l && 1 === j.length)
        ? (0, i.jsx)(eG, { upload: j[0], handleRemoveFile: y, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: a,
              className: u()(ez.kL, { [ez.Ke]: r, [ez.z3]: null != f }),
              children: [
                  x.length >= l
                      ? (0, i.jsx)(eH, {})
                      : (0, i.jsx)(eB, {
                            dropping: r,
                            fileInputRef: n,
                            minValues: t,
                            maxValues: l,
                            guildId: v.guild_id,
                        }),
                  j.length > 0 &&
                      (0, i.jsx)("div", {
                          className: ez.aq,
                          children: j.map((e) => (0, i.jsx)(eG, { upload: e, handleRemoveFile: y }, e.id)),
                      }),
                  (0, i.jsx)(eT.A, {
                      ref: n,
                      onChange: (e) => {
                          A(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = "");
                      },
                      multiple: l > 1,
                      tabIndex: -1,
                      className: ez.Fg,
                  }),
              ],
          });
}
var eK = l(97808),
    eY = l(778712),
    eX = l(957485),
    eq = l(950305),
    eW = l(297413),
    e$ = l(376304),
    eJ = l(201275),
    eZ = l(386784),
    eQ = l(657048),
    e0 = l(290863);
function e1(e) {
    let t = (0, p.jc)(),
        l = t?.channelId,
        n = X.A.getChannel(l),
        a = q.A.getGuild(n?.getGuildId()),
        r = (0, eZ.A)(a?.id, 1e3),
        o = s.useMemo(() => ea(e.defaultValues, a?.id), [e.defaultValues, a]);
    return (0, i.jsx)(eh, {
        selectActionComponent: e,
        queryOptions: (t) =>
            (function (e, t, l) {
                let n = X.A.getChannel(l);
                if (null == n) return [];
                let a = e === d.I5.USER_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    r = e === d.I5.ROLE_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    { users: i, roles: s } = et.Ay.queryMentionResults({
                        query: t,
                        channel: n,
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
                        let t = en.Ay.getNickname(n.getGuildId(), l, e.user);
                        return { type: B.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: B.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, l),
        renderIcon: (e, t) => {
            let l = t === ep.PILL_ICON_SIZE;
            if (e?.type === B.iw.USER) {
                let n = ee.default.getUser(e.value);
                if (null == n) return;
                return (0, i.jsx)(eK.eu, {
                    size: l ? eY._3.SIZE_16 : eY._3.SIZE_24,
                    src: n.getAvatarURL(a?.id, t),
                    status: l ? null : e0.A.getStatus(n.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === B.iw.ROLE) {
                let l = null != a ? Z.A.getRole(a.id, e.value) : void 0;
                if (null == l || null == a) return;
                let n = (0, e$.fm)(a, l) ? (0, eJ.ox)(l, t) : null;
                return null != n
                    ? (0, i.jsx)(eQ.A, { ...n })
                    : (0, i.jsx)(eX.i, { size: "custom", color: l.colorString ?? M.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === B.iw.USER) {
                let l = ee.default.getUser(e.value);
                null != l &&
                    (t = (0, i.jsx)(eW.A, {
                        className: ex.Tc,
                        usernameClass: ex.Xh,
                        discriminatorClass: ex.D2,
                        botClass: ex.Od,
                        user: l,
                        forceUsername: !0,
                    }));
            } else if (e.type === B.iw.ROLE) {
                let l = null != a ? Z.A.getRole(a.id, e.value) : void 0,
                    n = null == l ? null : r?.[l.id];
                null != n &&
                    (t = (0, i.jsxs)("div", {
                        className: ex.Ly,
                        children: [
                            (0, i.jsx)(eq.n, { size: "sm", color: "currentColor", className: ex.jh }),
                            (0, i.jsx)("span", { className: ex.NT, children: n }),
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
var e5 = l(773812),
    e4 = l(821609),
    e8 = l(69889);
function e3(e) {
    let { type: t, options: l, required: n } = e,
        a = s.useMemo(() => l.find((e) => e.default)?.value, [l]),
        { state: r, executeStateUpdate: o } = (0, p.At)(e, null != a ? { type: t, value: a } : void 0),
        c = s.useMemo(() => (r?.type === t ? r.value : null), [r, t]),
        d = null != c,
        m = s.useMemo(() => l.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [l]),
        h = (e) => {
            o({ type: t, value: e });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e5.z, { options: m, value: c ?? "", onChange: h, required: n }),
            !n &&
                (0, i.jsx)("div", {
                    className: u()(e8.H, { [e8.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e4.$, {
                        text: D.intl.string(D.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => h(null),
                    }),
                }),
        ],
    });
}
var e2 = l(843282);
function e7(e) {
    let { emoji: t, label: l, description: n, isDisabled: a, isOffset: r } = e,
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
                    (0, i.jsx)("strong", { className: ed.Pf, children: l }),
                    null != n ? (0, i.jsx)("span", { className: ed.h_, children: n }) : null,
                ],
            }),
        ],
    });
}
function e6(e) {
    let { emoji: t, label: l } = e;
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
                (0, i.jsx)("span", { className: ed.oX, children: l }),
            ],
        }),
    });
}
function e9(e) {
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
function te(e) {
    let { type: t, options: l, id: n, maxValues: a, disabled: r } = e,
        o = (0, eu.c7)(e),
        c = s.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        m = (0, p.jc)();
    ei()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: h,
            executeStateUpdate: x,
            visualState: g,
            isDisabled: j,
            error: f,
        } = m.useComponentState(e, c.length > 0 ? { type: t, values: c } : void 0),
        v = null != m.modal,
        N = a > 1,
        C = g === B.BB.LOADING,
        [A, I] = s.useState(!1),
        [E, y] = s.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [S, T] = s.useState(E),
        b = s.useMemo(() => l.some((e) => null != e.emoji), [l]);
    s.useEffect(() => {
        if (h?.type === d.I5.STRING_SELECT) {
            let e = new Set(h.values);
            y(e), T(e);
        } else {
            let e = new Set(c);
            y(e), T(e);
        }
    }, [n, c, h]);
    let L = s.useCallback(() => {
        S !== E && x({ type: d.I5.STRING_SELECT, values: Array.from(E) }) && T(E);
    }, [E, S, T, x]);
    s.useEffect(() => {
        A || (E.size === S.size && Array.from(S).every((e) => E.has(e))) || L();
    }, [A, E, S, L]);
    let O = (0, eu.Lr)(e, v ? "modal" : "message"),
        _ = e2.lS;
    N ? (_ = e2.M8) : O && (_ = e2.$l);
    let R = (0, e2.Ev)({ value: E, onChange: (e) => y(e), onSelectInteraction: _ });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e2.Pw, {
                    isProcessing: C,
                    isDisabled: r || g === B.BB.DISABLED || j,
                    className: u()(ed.Lt, { [ed.zE]: v }),
                    options: l.map((e) => ({ ...e, disabled: N && !E.has(e.value) && E.size === a })),
                    placeholder: o,
                    onClose: () => I(!1),
                    onOpen: () => I(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !N,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e7, { ...e, isDisabled: N && !E.has(e.value) && E.size === a, isOffset: b }),
                    renderOptionValue: (e) => (N ? (0, i.jsx)(e9, { options: e }) : (0, i.jsx)(e6, { ...e[0] })),
                    ...R,
                    "data-migration-pending": !0,
                }),
            }),
            null == f || v ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(f), className: ed.z3 }),
        ],
    });
}
var tt = l(292666),
    tl = l(260598),
    tn = l(321471),
    ta = l(969508),
    tr = l(597526);
function ti(e) {
    let t,
        { type: l, style: n, label: a, placeholder: r, minLength: o, maxLength: u, required: c, value: m } = e,
        [h, x] = s.useState(m ?? ""),
        { state: g, executeStateUpdate: j, error: f } = (0, p.At)(e, null != m ? { type: l, value: m } : void 0),
        v = (0, ta.FG)(e.id);
    s.useEffect(() => {
        g?.type === l && x(g.value);
    }, [l, g]);
    let N = {
        value: h,
        placeholder: r,
        minLength: o,
        maxLength: u,
        required: c,
        onChange: (e) => {
            x(e), j({ type: l, value: e });
        },
        autoFocus: v,
    };
    switch (n) {
        case d.qz.SMALL:
            t = (0, i.jsx)(tt.k, { ...N });
            break;
        case d.qz.PARAGRAPH:
            t = (0, i.jsx)(tl.f, { autosize: !0, ...N });
    }
    return null != a ? (0, i.jsx)(tn.e, { title: a, required: c, className: tr.k, error: f, children: t }) : t;
}
l(321073);
var ts = l(534890),
    to = l(831544),
    tu = l(460905),
    tc = l(109112),
    td = l(664121),
    tm = l(534514),
    tp = l(602853),
    th = l(222713),
    tx = l(783465),
    tg = l(7584),
    tj = l(548118),
    tf = l(486020),
    tv = l(582068),
    tN = l(789369);
function tC(e) {
    let { checkpointData: t } = e,
        {
            cardId: l,
            numMessagesSent: n = 0,
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
        }).format(n),
        h = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(r),
        x = (0, tx.oO)(a),
        g = (0, tx.OW)(l),
        j = th.f[l],
        f = (0, tp.r)(j.primaryColor).hex(),
        v = (0, tp.r)(j.secondaryColor).hex({ opacity: 0.2 }),
        N = (0, E.bG)([q.A], () => q.A.getGuild(c?.guildId)),
        C = new Intl.NumberFormat(D.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        A = (0, tx._V)(m ?? 0),
        y = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return e.push("/assets/db1951f89e12e0e3.svg"), e;
        }, []);
    return (0, i.jsxs)("div", {
        className: tN.kL,
        style: { backgroundColor: f },
        children: [
            (0, i.jsxs)("div", {
                className: tN.Nr,
                children: [
                    (0, i.jsx)("img", { src: g, alt: "", className: tN.LY, style: { backgroundColor: f } }),
                    (0, i.jsxs)("div", {
                        className: tN.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tN.dJ,
                                children: [
                                    (0, i.jsx)(ts.o, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: tN.KA, children: p }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tN.dJ,
                                children: [
                                    (0, i.jsx)(to.c, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: tN.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tN.dJ,
                                children: [
                                    (0, i.jsx)(tu.n, { color: eA.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eI.E, { variant: "text-sm/medium", className: tN.KA, children: h }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: tN.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tc._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: D.intl.string(tv.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(I.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: tN.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? tg.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: tN.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tc._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: D.intl.string(tv.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: tf.Ay.getApplicationIconURL({
                                                          id: u.applicationId,
                                                          icon: u.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: tN.iY,
                                                  }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: u.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: tN.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tc._, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: D.intl.string(tv.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != N
                                                      ? (0, i.jsx)(tj.Ay, {
                                                            guild: N,
                                                            size: tj.Ay.Sizes.SMOL,
                                                            className: tN.iY,
                                                        })
                                                      : (0, i.jsx)(td.R, { color: eA.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
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
                className: tN.qr,
                style: { backgroundColor: v },
                children: (0, i.jsx)(tm.D, {
                    variant: "display-sm",
                    className: tN.DD,
                    children: D.intl.string(tv.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tN.hC,
                style: { backgroundColor: f },
                children: [
                    (0, i.jsx)("div", {
                        className: tN.TO,
                        children: y.map((e, t) =>
                            (0, i.jsx)(
                                "img",
                                { className: tN.mG, src: e, width: 4, alt: "", style: { opacity: t >= A ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: tN.JA,
                        children: [
                            (0, i.jsx)(eI.E, { variant: "text-xs/normal", className: tN.KA, children: "LVL" }),
                            (0, i.jsx)(eI.E, { variant: "text-xs/bold", className: tN.KA, children: C.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tA = l(564771),
    tI = l(338717),
    tE = l(96782),
    ty = l(302031),
    tS = l(343408);
function tT(e) {
    let { file: t, name: l, size: n, spoiler: a } = e,
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
            () => () => (0, i.jsx)(tE.zB, { mimeType: r, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
            [t, r],
        ),
        h = (e) =>
            (0, i.jsx)(tA.A, {
                className: u()({ [tS.V]: e }),
                url: t.url,
                fileName: l ?? D.intl.string(D.t.GnuJ5u),
                fileSize: n ?? 0,
                renderAdjacentContent: p,
            });
    return (0, i.jsx)("div", {
        className: tS.O,
        children: a
            ? (0, i.jsx)(ty.Ay, {
                  type: ty.Ay.Types.ATTACHMENT,
                  reason: tI.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => h(e),
              })
            : h(!1),
    });
}
var tb = l(665260),
    tL = l(731068),
    tO = l(154872),
    t_ = l(492230),
    tR = l(294520),
    tP = l(448381),
    tk = l(144165),
    tU = l(990078),
    tM = l(891694),
    tD = l(552437);
function tw(e) {
    let t = s.useRef(null),
        l = e.media;
    if (l.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tU.m, {
            text: D.intl.string(D.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, i.jsx)("div", {
                className: u()(e.className, tD.FN, { [tD.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(tM.A, { ref: t, className: tD.i4 }),
            }),
        });
    let n = l.loadingState === d.TD.LOADING ? M.Rv1.LOADING : M.Rv1.ERROR;
    return (0, i.jsx)(tk._, {
        className: u()(e.className, { [tD.gS]: e.hiddenSpoilers }),
        readyState: n,
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
var tF = l(998218),
    tz = l(34337);
function tB(e) {
    let t = e.item.originalItem.media;
    return (0, i.jsx)(tw, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tH(e) {
    let t = e.item.originalItem.media;
    return (0, tz.LL)({
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
        l = tF.A.toURLSafe(t.proxyUrl);
    return null == l
        ? null
        : (l.searchParams.append("format", "webp"),
          (0, tz.$o)({
              ...e,
              poster: l.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tV = l(564107),
    tK = l(394839),
    tY = l(644447);
function tX(e) {
    let { message: t } = (0, p.jc)(),
        l = (0, E.bG)([X.A], () => X.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: n,
            enabledContentHarmTypeFlags: a,
            gifAutoPlay: r,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, tV.X)();
    if (null == t || null == l) return null;
    let u = e.items.map((e) => (0, tO.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: c, srcToHandlePreloadImage: d } =
            u.length > 1
                ? (0, t_.o)(u, { shouldHideMediaOptions: n, enabledContentHarmTypeFlags: a }, "Media Mosaic")
                : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} };
    function m(e, l) {
        let n = e.originalItem;
        return (0, tR.tt)(n.media, l, n.spoiler, t?.author.bot ?? !1);
    }
    let h = e.items.map((e, l) => {
        let n = e.media,
            a = o?.(n),
            i = {
                message: t,
                item: {
                    uniqueId: `${n.proxyUrl}--${l}`,
                    originalItem: e,
                    type: (0, tP.wz)(n),
                    downloadUrl: n.url,
                    height: n.height,
                    width: n.width,
                    spoiler: e.spoiler,
                    contentType: n.contentType,
                    srcIsAnimated: (0, tb.Lt)(n.flags, tL.e5.IS_ANIMATED),
                },
                onContextMenu: a,
                autoPlayGif: r,
                getObscureReason: m,
                renderImageComponent: tH,
                renderVideoComponent: tG,
                renderVisualPlaceholderComponent: tB,
                renderAudioComponent: M.tEg,
                renderPlaintextFilePreview: M.tEg,
                renderGenericFileComponent: M.tEg,
                gifFavoriteButton: s(n),
                onPlay: (e, t, l) => {},
                canRemoveItem: !1,
                onRemoveItem: M.tEg,
            },
            u = (0, tY.E)({ proxyURL: n.proxyUrl, url: n.url });
        return u in c && ((i.onClick = c[u]), (i.handlePreloadImage = d[u])), i;
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(tK.A, { items: h, isInAppComponentsV2: !0 }) });
}
var tq = l(371068),
    tW = l(170226),
    t$ = l(838541),
    tJ = l(493934);
function tZ(e) {
    let { media: t, spoiler: l, description: n } = e,
        a = (0, tP.wz)(t),
        r = (0, tb.Lt)(t.flags, tL.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tV.X)(),
        [c, d] = s.useState(l),
        [m, p] = s.useState(l);
    l !== c && (d(l), p(l));
    let h = (e) =>
        "IMAGE" !== a
            ? (0, i.jsx)(tw, {
                  className: tJ.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, i.jsx)(tz.LL, {
                  containerClassName: u()(tJ.Dg, { [tJ.rP]: e }),
                  imageClassName: tJ._8,
                  src: t.proxyUrl,
                  alt: n,
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
                  mediaLayoutType: t$.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: r,
              });
    return l
        ? (0, i.jsx)(ty.Ay, {
              type: ty.Ay.Types.ATTACHMENT,
              reason: tI.Oc.SPOILER,
              obscured: m,
              onToggleObscurity: () => p((e) => !e),
              children: (e) => h(e),
          })
        : h(!1);
}
var tQ = l(901252);
function t0() {
    return (0, i.jsx)("div", {
        className: tQ.k,
        children: (0, i.jsx)(eI.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: D.intl.string(D.t.zksHZO),
        }),
    });
}
var t1 = l(681154);
class t5 extends s.PureComponent {
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
var t4 = l(211401),
    t8 = l(500049),
    t3 = l(429913),
    t2 = l(355622),
    t7 = l(832384),
    t6 = l(360469),
    t9 = l(52133),
    le = l(803306),
    lt = l(860071),
    ll = l(808380),
    ln = l(409626),
    la = l(692969),
    lr = l(424994),
    li = (((r = {})[(r.EMBED = 1)] = "EMBED"), r);
let ls = { [ll.Y.XBOX]: lr.a4.XBOX, [ll.Y.PLAYSTATION]: lr.a4.PLAYSTATION },
    lo = { [li.EMBED]: ln.Ob.Embed };
function lu(e) {
    let t,
        l,
        { entry: n, location: a, baseEntryData: r } = e,
        i = (0, t3.h)(n.extra.application_id),
        s = i?.getIconURL(t6.iu.LARGE),
        o = n.extra.game_name;
    if (null != n.extra.platform) {
        let e = ls[n.extra.platform];
        null != e && (t = { type: e });
    }
    l =
        n.content_type === t1.ContentInventoryEntryType.PLAYED_GAME && (0, t7.JM)(n) && !(0, t7.I5)(n)
            ? D.t.vPg1JT
            : D.t.rPqqts;
    let u = lo[a],
        c = {
            onClick: (0, la.A)({
                location: u,
                applicationId: n.extra.application_id,
                source: u,
                trackEntryPointImpression: !0,
                sourceUserId: n.author_id,
            }),
            ariaDescription: D.intl.formatToPlainString(D.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...r,
        thumbnailUrl: s,
        title: o,
        titleClickable: c,
        thumbnailClickable: c,
        userDescription: l,
        providerIconProps: t,
    };
}
var lc = l(205327),
    ld = l(261020),
    lm = l(272984),
    lp = l(970928);
let lh = s.createContext(void 0);
function lx(e) {
    let { entry: t, ...l } = e,
        n = {
            baseEntryData: (function (e) {
                let { entry: t, channel: l } = e,
                    n = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, t9.v)(n.current, t.participants) ||
                            ((n.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == l.guild_id ? (0, le.wz)(e) : lt.A.requestMember(l.guild_id, e);
                                }));
                    }, [t, l.guild_id]),
                    {}
                );
            })({ entry: t, channel: l.channel }),
            ...l,
        };
    switch (t.content_type) {
        case t1.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(lf, { entry: t, ...n });
        case t1.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(lv, { entry: t, ...n });
        case t1.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(lN, { entry: t, ...n });
        case t1.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(lC, { entry: t, ...n });
        case t1.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(lA, { entry: t, ...n });
        case t1.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(lj, { entry: t, ...n });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function lg(e) {
    let { errorFallback: t, ...l } = e;
    return (0, i.jsx)(t5, { fallback: t, children: (0, i.jsx)(lx, { ...l }) });
}
function lj(e) {
    let { entry: t, children: l, ...n } = e,
        a = (function (e) {
            let { entry: t } = e,
                l = (0, t3.h)(t.extra.application_id),
                n = l?.getIconURL(t6.iu.LARGE),
                a = t.extra.activity_name,
                r = (0, t7.Hd)(t) ? D.t.vPg1JT : D.t.rPqqts,
                i = {
                    onClick: () => {
                        t4.R(t8.s4.TEXT, t2.oU.NORMAL, { applicationId: t.extra.application_id });
                    },
                    ariaDescription: D.intl.formatToPlainString(D.t.NTHttN, { title: a }),
                };
            return { thumbnailUrl: n, title: a, titleClickable: i, thumbnailClickable: i, userDescription: r };
        })({ entry: t, ...n });
    return (0, i.jsx)(lh.Provider, { value: { parsedEntry: a, ...n }, children: l });
}
function lf(e) {
    let { entry: t, children: l, ...n } = e,
        a = (function (e) {
            let t,
                { entry: l, baseEntryData: n } = e,
                { provider: a, image_url: r } = l.extra.media,
                i = l.extra.artist.name,
                s = {
                    onClick: () => (0, ld.n)(lm.M0.ALBUM, l.extra.media.external_parent_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: l.extra.media.parent_title }),
                },
                o = {
                    onClick: () => (0, ld.n)(lm.M0.ARTIST, l.extra.artist.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: i }),
                };
            return (
                a === lc.X.SPOTIFY && (t = { type: lr.a4.SPOTIFY }),
                {
                    ...n,
                    title: i,
                    thumbnailUrl: r,
                    titleClickable: o,
                    subtitleClickable: s,
                    thumbnailClickable: s,
                    userDescription: D.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...n });
    return (0, i.jsx)(lh.Provider, { value: { parsedEntry: a, ...n }, children: l });
}
function lv(e) {
    let { entry: t, children: l, ...n } = e,
        a = lu({ entry: t, ...n });
    return (0, i.jsx)(lh.Provider, { value: { parsedEntry: a, ...n }, children: l });
}
function lN(e) {
    let { entry: t, children: l, ...n } = e,
        a = lu({ entry: t, ...n });
    return (0, i.jsx)(lh.Provider, { value: { parsedEntry: a, ...n }, children: l });
}
function lC(e) {
    let { entry: t, children: l, ...n } = e,
        a = (function (e) {
            let t,
                { entry: l, baseEntryData: n } = e,
                a = (0, t3.h)(l.extra.application_id),
                r = a?.getIconURL(128),
                i = (0, lp.uD)(l.extra.application_id, l.extra.media_assets_large_image, [t6.iu.LARGE, t6.iu.LARGE]),
                o = l.extra.media_title,
                u = l.extra.media_subtitle,
                c = (0, t7.Hd)(l) ? D.t["LH+Z3y"] : D.t.YuKgml,
                d = { type: lr.a4.CRUNCHYROLL },
                m = s.useMemo(() => {
                    if (null == l.extra.url) return;
                    let e = tF.A.safeParseWithQuery(l.extra.url);
                    if (null != e && null != e.protocol && null != e.hostname) return e;
                }, [l.extra.url]);
            return (
                null != m &&
                    (t = {
                        href: tF.A.format(m),
                        ariaDescription: D.intl.formatToPlainString(D.t.aFFQ3g, { title: o }),
                    }),
                {
                    ...n,
                    thumbnailUrl: i ?? r,
                    title: o,
                    titleClickable: t,
                    thumbnailClickable: t,
                    subtitle: u,
                    userDescription: c,
                    providerIconProps: d,
                }
            );
        })({ entry: t, ...n });
    return (0, i.jsx)(lh.Provider, { value: { parsedEntry: a, ...n }, children: l });
}
function lA(e) {
    let { entry: t, children: l, ...n } = e,
        a = (function (e) {
            let t,
                { entry: l, baseEntryData: n } = e,
                a = l.extra.entries[0].media,
                r = a.artists[0],
                { title: i, provider: s, image_url: o } = a,
                u = r.name,
                c = {
                    onClick: () => (0, ld.n)(lm.M0.TRACK, a.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: i }),
                },
                d = {
                    onClick: () => (0, ld.n)(lm.M0.ARTIST, r.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: u }),
                };
            return (
                s === lc.X.SPOTIFY && (t = { type: lr.a4.SPOTIFY }),
                {
                    ...n,
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
        })({ entry: t, ...n });
    return (0, i.jsx)(lh.Provider, { value: { parsedEntry: a, ...n }, children: l });
}
var lI = l(349288),
    lE = l(531142),
    ly = l(939249),
    lS = l(43990),
    lT = l(696986),
    lb = l(342952),
    lL = l(576757),
    lO = l(291594),
    l_ = l(22869),
    lR = l(959),
    lP = l(811597);
function lk(e) {
    let { entry: t, channel: l, className: n } = e,
        a = s.useRef(null),
        r = s.useRef(null),
        {
            displayParticipants: o,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: p,
        } = (0, lL.A)(t),
        h = [c, d];
    return (0, i.jsxs)("div", {
        className: u()(lP.kL, n),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(lR.A, {
                              targetElementRef: a,
                              participants: p,
                              channel: l,
                              children: (e) =>
                                  (0, i.jsx)(ly.D, {
                                      innerRef: a,
                                      className: lP.vk,
                                      ...e,
                                      children: (0, i.jsx)(lb.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eY._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(lT.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(tm.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: u()(lP.IY, lP.Io),
                scaleFontToUserSetting: !0,
                children: D.intl.format(D.t.rH95Gu, {
                    user0: en.Ay.getName(l.guild_id, l.id, h[0]),
                    user1: en.Ay.getName(l.guild_id, l.id, h[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(l_.A, { text: e, user: h[0], channel: l }, t),
                    name1Hook: (e, t) => (0, i.jsx)(l_.A, { text: e, user: h[1], channel: l }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            lR.A,
                            {
                                targetElementRef: r,
                                participants: p,
                                channel: l,
                                children: (t) =>
                                    (0, i.jsx)(lO.A, {
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
var lU = l(263577),
    lM = l(347306),
    lD = l(790381),
    lw = l(266080),
    lF = l(121090),
    lz = l(18282);
let lB = { [lr.a4.SPOTIFY]: lF.A, [lr.a4.CRUNCHYROLL]: lM.k, [lr.a4.XBOX]: lw.A, [lr.a4.PLAYSTATION]: lD.A },
    lH = {
        [lr.a4.SPOTIFY]: () => D.intl.string(D.t["0ZB/XE"]),
        [lr.a4.CRUNCHYROLL]: () => D.intl.string(D.t.jdJYXw),
        [lr.a4.XBOX]: () => D.intl.string(D.t.Nfvo72),
        [lr.a4.PLAYSTATION]: () => D.intl.string(D.t.fFl4jo),
    };
function lG(e) {
    let { type: t, "aria-label": l, ...n } = e,
        a = lB[t];
    if (null == a) return null;
    let r = l ?? lH[t]?.();
    return (0, i.jsx)(lz.A, { Icon: a, ...n, "aria-label": r });
}
var lV = l(140651),
    lK = l(506326),
    lY = l(915089),
    lX = l(818348),
    lq = l(672743),
    lW = l(392419);
function l$(e) {
    let { className: t, clickableClassName: l, clickable: n, children: a } = e,
        r = (0, lY.GV)();
    if (null != n && "href" in n) {
        let { ariaDescription: e, href: s } = n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.A, { id: r, children: e }),
                (0, i.jsx)(lI.Anchor, { className: u()(t, l), href: s, "aria-describedby": r, children: a }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = n ?? {};
    return (0, i.jsxs)(lE.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(c.A, { id: r, children: o }),
            (0, i.jsx)(ly.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : r,
                className: u()(t, null != s && l),
                children: a,
            }),
        ],
    });
}
function lJ(e) {
    let { clickable: t, ...l } = e;
    return (0, i.jsx)(l$, { ...l, clickable: { ...t, ariaDescription: "" }, clickableClassName: lW.v });
}
function lZ(e) {
    let {
            entry: t,
            channel: l,
            title: n,
            subtitle: a,
            thumbnailUrl: r,
            titleClickable: s,
            subtitleClickable: o,
            thumbnailClickable: c,
            providerIconProps: d,
            style: m = {},
        } = e,
        p = (0, lY.GV)(),
        { primaryColor: h, secondaryColor: x } = (0, lV.A)(r);
    return (
        null != r && (m.background = `linear-gradient(45deg, ${h}, ${x})`),
        (0, i.jsx)(lS.N, {
            theme: lX.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": D.intl.string(D.t.zFfUhF),
                    "aria-labelledby": p,
                    className: u()(lq.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(l$, {
                            className: lq.iT,
                            clickableClassName: lq.vk,
                            clickable: c,
                            children: (0, i.jsx)(lU.V, { src: r, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: lq.op,
                            children: [
                                (0, i.jsx)(lk, { channel: l, entry: t, className: lq.VV }),
                                (0, i.jsx)(lT.h, { size: 2 }),
                                (0, i.jsx)(lJ, {
                                    clickable: s,
                                    className: lq.sd,
                                    children: (0, i.jsx)(tm.D, {
                                        id: p,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: u()(lq.ek, lq.IY),
                                        scaleFontToUserSetting: !0,
                                        children: n,
                                    }),
                                }),
                                null != a
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(lT.h, { size: 2 }),
                                              (0, i.jsx)(lJ, {
                                                  clickable: o,
                                                  className: lq.sd,
                                                  children: (0, i.jsx)(eI.E, {
                                                      variant: "text-sm/normal",
                                                      className: u()(lq.c1, lq.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: a,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(lK.iT, { className: lq.jp, entry: t, location: lK.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: lq.Y, children: null != d ? (0, i.jsx)(lG, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lQ(e) {
    let t,
        { contentInventoryEntry: l, channel: n } = e,
        { parsedEntry: a } =
            ((t = s.useContext(lh)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(lZ, { ...a, entry: l, channel: n });
}
function l0(e) {
    let t = (0, p.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: l } = t,
        n = (0, E.bG)([X.A], () => X.A.getChannel(l));
    return (
        ei()(null != n, "channel must be defined"),
        (0, i.jsx)(lg, {
            location: li.EMBED,
            entry: e.contentInventoryEntry,
            channel: n,
            errorFallback: null,
            children: (0, i.jsx)(lQ, { ...e, channel: n }),
        })
    );
}
var l1 = l(749131);
function l5(e) {
    let { components: t, renderComponents: l } = e,
        { message: n } = (0, p.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: l1.kL,
              children: [
                  (0, i.jsx)("div", { className: l1.Y_, children: l(t) }),
                  null != n ? (0, i.jsx)(eo.Ay, { className: l1.z3, message: n, component: e }) : null,
              ],
          });
}
var l4 = l(647901),
    l8 = l(404228);
function l3(e) {
    let { components: t, accentColor: l, spoiler: n, renderComponents: a } = e,
        [r, o] = s.useState(n),
        [c, d] = s.useState(n);
    n !== r && (o(n), d(n));
    let m = (e) =>
        (0, i.jsx)(h.O7.AutoMeasuredNestedContainer, {
            children: (n) =>
                (0, i.jsx)("div", {
                    ref: n,
                    className: u()(l8.kL, { [l8.dK]: e, [l8._7]: null != l }),
                    style: { "--__accent-color": l },
                    children: (0, i.jsx)(l4.x, { size: "reduced", children: a(t) }),
                }),
        });
    return null == t || 0 === t.length
        ? null
        : n
          ? (0, i.jsx)(ty.Ay, {
                type: ty.Ay.Types.ATTACHMENT,
                reason: tI.Oc.SPOILER,
                obscured: c,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var l2 = l(244367),
    l7 = l(704475);
function l6(e) {
    let { label: t, description: l, component: n, renderComponent: a } = e,
        r = (0, p.bO)(n);
    return n.type === d.I5.CHECKBOX
        ? a(n, "label-child")
        : (0, i.jsxs)(tn.e, {
              title: t,
              required: n.required,
              error: r,
              children: [
                  null != l && (0, i.jsx)(l2.a, { type: l2.t.DESCRIPTION, className: l7.h, children: l }),
                  a(n, "label-child"),
              ],
          });
}
var l9 = l(746544);
function ne(e) {
    let { components: t, accessory: l, renderComponents: n } = e,
        { message: a } = (0, p.jc)(),
        [r, s] = (0, h.zn)(),
        o = (0, h.Hq)(s),
        c = l.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: l9.uW,
        ref: r,
        children: [
            (0, i.jsxs)("div", {
                className: l9.Y_,
                children: [
                    (0, i.jsx)("div", { className: u()(l9.zt, { [l9.uf]: c }), children: n(t) }),
                    (0, i.jsx)("div", {
                        className: u()(l9.LP, { [l9.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, i.jsx)(V, { ...e });
                                case d.I5.THUMBNAIL:
                                    return (0, i.jsx)(tZ, { ...e });
                            }
                        })(l),
                    }),
                ],
            }),
            null != a ? (0, i.jsx)(eo.Ay, { message: a, component: e }) : null,
        ],
    });
}
var nt = l(532294),
    nl = l(143517);
function nn(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, l) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(l5, { ...t, renderComponents: nn }, l);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(V, { ...t }, l);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(te, { ...t }, l);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(eg, { ...t }, l);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e1, { ...t }, l);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(ti, { ...t }, l);
                        case d.I5.SECTION:
                            return (0, i.jsx)(ne, { ...t, renderComponents: nn }, l);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(tW.A, { ...t }, l);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(tX, { ...t }, l);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(tZ, { ...t }, l);
                        case d.I5.FILE:
                            return (0, i.jsx)(tT, { ...t }, l);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(tq.A, { ...t }, l);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(l0, { ...t }, l);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(l3, { ...t, renderComponents: nn }, l);
                        case d.I5.LABEL:
                            return (0, i.jsx)(l6, { ...t, renderComponent: e }, l);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eV, { ...t }, l);
                        case d.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === nt.w.V2025) return (0, i.jsx)(tC, { ...t }, l);
                            return (0, i.jsx)(t0, {}, l);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e3, { ...t }, l);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(eN, { ...t }, l);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(ef, { ...t }, l);
                        default:
                            return (0, i.jsx)(t0, {}, l);
                    }
                })(e, t.toString()),
                (0, i.jsx)(c.A, { children: "," }),
            ],
        }),
    );
}
function na(e) {
    let { message: t, shouldDisableInteractiveComponents: l } = e,
        { components: n } = t,
        [a, r] = (0, h.zn)();
    return 0 === n.length
        ? null
        : (0, i.jsx)(p.f5, {
              message: t,
              shouldDisableInteractiveComponents: l,
              children: (0, i.jsx)(h.O7.Root, {
                  containerInnerWidth: r,
                  children: (0, i.jsx)("div", {
                      style: { width: "100%" },
                      ref: a,
                      children: (0, i.jsx)(h.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: e,
                                  className: u()([nl.k, { [nl.z]: (0, m._c)(t) }]),
                                  children: nn(n),
                              }),
                      }),
                  }),
              }),
          });
}

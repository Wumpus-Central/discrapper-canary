(n.r(t), n.d(t, { default: () => tp }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(613412),
    a = n(855986),
    s = n(554146),
    u = n(834730),
    d = n(289873),
    c = n(866665),
    o = n(408278),
    g = n(625903),
    f = n(332837),
    h = n(516521),
    m = n(139286),
    E = n(826673),
    p = n(250527),
    A = n(727419),
    C = n(742589),
    I = n(533993),
    _ = n(645619),
    S = n(71393),
    x = n(473953),
    v = n(620632),
    y = n(73153),
    b = n(652215);
async function D(e) {
    y.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await v.Bo.get({ url: b.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        y.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        y.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var G = n(960960),
    j = n(202762),
    w = n(88592),
    R = n(158390),
    T = n(927813);
let L = T.A.Millis.SECOND,
    P = 10 * T.A.Millis.SECOND,
    N = { status: "idle" },
    U = { status: "loading" },
    k = { status: "error" },
    M = {};
function W(e, t) {
    let n = e.entriesByWidgetId.get(t);
    return (null == n && ((n = { state: N, attempts: 0 }), e.entriesByWidgetId.set(t, n)), n);
}
function B(e, t, n, l) {
    let i = n.filter((t) => e.entriesByWidgetId.get(t)?.state.status !== "success");
    if (0 === i.length) {
        e.backoff?.pending !== !0 && e.backoff?.succeed();
        return;
    }
    let r = [];
    (i.forEach((t) => {
        let n = W(e, t);
        l && n.attempts < 3 ? r.push(t) : (n.state = k);
    }),
        0 !== r.length &&
            ((e.backoff ??= new R.A(L, P, !0)),
            e.backoff.pending ||
                e.backoff.fail(() => y.h.dispatch({ type: "GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED", guildId: t }))));
}
class H extends a.Ay.Store {
    static displayName = "GuildSpaceHydrationStore";
    getHydration(e, t) {
        return M[e]?.entriesByWidgetId.get(t)?.state ?? N;
    }
    hasRequestInFlight(e) {
        return M[e]?.activeRequestId != null;
    }
    getWidgetIdsToHydrate(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = M[e];
        return null == l
            ? [...t]
            : null != l.activeRequestId
              ? []
              : n
                ? [...t]
                : t.filter((e) => "idle" === (l.entriesByWidgetId.get(e)?.state ?? N).status);
    }
}
let O = new H(y.h, {
    GUILD_SPACE_HYDRATE_START: function (e) {
        let t,
            { guildId: n, requestId: l, widgetIds: i } = e,
            r = (null == (t = M[n]) && ((t = { entriesByWidgetId: new Map() }), (M[n] = t)), t);
        ((r.activeRequestId = l),
            (r.activeWidgetIds = i),
            i.forEach((e) => {
                let t = W(r, e);
                "success" !== t.state.status && ((t.state = U), (t.attempts += 1));
            }));
    },
    GUILD_SPACE_HYDRATE_SUCCESS: function (e) {
        let { guildId: t, requestId: n, widgets: l } = e,
            i = M[t];
        if (i?.activeRequestId !== n) return !1;
        let r = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds);
        let a = new Map(
                l.map((e) => {
                    let { id: t, data: n } = e;
                    return [t, n];
                }),
            ),
            s = [];
        (r.forEach((e) => {
            let t = a.get(e);
            if (null != t) {
                let n = W(i, e);
                ((n.state = { status: "success", data: t }), (n.attempts = 0));
            } else s.push(e);
        }),
            B(i, t, s, !0));
    },
    GUILD_SPACE_HYDRATE_FAILURE: function (e) {
        let { guildId: t, requestId: n, retryable: l } = e,
            i = M[t];
        if (i?.activeRequestId !== n) return !1;
        let r = i.activeWidgetIds ?? [];
        (delete i.activeRequestId, delete i.activeWidgetIds, B(i, t, r, l));
    },
    GUILD_SPACE_HYDRATE_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            n = M[t];
        if (null == n) return !1;
        n.backoff?.cancel();
        let l = new Set(n.activeWidgetIds ?? []),
            i = [...n.entriesByWidgetId]
                .filter((e) => {
                    let [t, n] = e;
                    return "loading" === n.state.status && !l.has(t);
                })
                .map((e) => {
                    let [, t] = e;
                    return t;
                });
        if (0 === i.length) return !1;
        i.forEach((e) => {
            e.state = N;
        });
    },
    GUILD_SPACE_HYDRATE_RESET_ERRORS: function (e) {
        let { guildId: t, widgetIds: n } = e,
            l = M[t];
        if (null == l) return !1;
        let i = n.filter((e) => l.entriesByWidgetId.get(e)?.state.status === "error");
        if (0 === i.length) return !1;
        i.forEach((e) => l.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, space: n } = e,
            l = M[t];
        if (null == l) return !1;
        let i = new Set(
                n.widgets.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ),
            r = [...l.entriesByWidgetId.keys()].filter((e) => !i.has(e));
        if (0 === r.length) return !1;
        r.forEach((e) => l.entriesByWidgetId.delete(e));
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e,
            n = M[t];
        if (null == n || (0 === n.entriesByWidgetId.size && null == n.activeRequestId)) return !1;
        (n.entriesByWidgetId.clear(), delete n.activeRequestId, delete n.activeWidgetIds);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n) return !1;
        (M[t]?.backoff?.cancel(), delete M[t]);
    },
    LOGOUT: function () {
        (Object.values(M).forEach((e) => e?.backoff?.cancel()), (M = {}));
    },
});
var F = n(513446);
let q = 0;
async function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && y.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = O.getWidgetIdsToHydrate(e, t, n);
    if (0 === l.length) return;
    let i = q++;
    y.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: i, widgetIds: l });
    try {
        let { body: t } = await v.Bo.get({
            url: b.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        y.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: i, widgets: t.widgets });
    } catch (t) {
        y.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: i, retryable: (0, F.a)(t) });
    }
}
var K = n(716357),
    $ = n(593673),
    V = n(49303),
    Y = n(313627),
    X = n(344351),
    J = n(795816),
    Q = n(933958),
    Z = n(44167),
    ee = n(872188),
    et = n(628274),
    en = n(36525),
    el = n(192308),
    ei = n(871682),
    er = n(331322),
    ea = n(821609),
    es = n(499373),
    eu = n(189213),
    ed = n(939249),
    ec = n(245604),
    eo = n(104510),
    eg = n(646514),
    ef = n(775602),
    eh = n(855823),
    em = n(135294),
    eE = n(792996),
    ep = n(517228);
function eA(e) {
    let { widget: t, onClick: n } = e,
        i = (0, a.bG)([ef.Ay], () => ef.Ay.useReducedMotion),
        { catalog_image_static_url: r, catalog_image_animated_url: s } = t.assets,
        d = (i ? null : s) ?? r,
        c = t.boost_price;
    return (0, l.jsxs)(ed.D, {
        className: ep.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: ep.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: ep.YI, src: d, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: ep.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: ep.Ti, children: (0, l.jsx)("div", { className: ep.dK }) }),
                            (0, l.jsxs)(er.B, {
                                className: ep.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ec.CirclePlusIcon, {}),
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: eE.intl.string(em.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(er.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(u.E, { variant: "body-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(er.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(eo.BoostGemIcon, {
                                      size: "sm",
                                      color: eg.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eE.intl.format(em.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(u.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: eE.intl.string(em.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eC(e) {
    let { guildId: t, insertionTarget: n, onAddWidget: r, ...s } = e,
        u = (0, a.yK)(
            [G.A, w.A],
            () => {
                let e = w.A.getDraft(t)?.widgets ?? [],
                    n = G.A.getWidgets(t) ?? [];
                return (0, eh.aU)(n, e);
            },
            [t],
        );
    return (
        i.useEffect(() => {
            D(t);
        }, [t]),
        (0, l.jsx)(eu.a, {
            title: eE.intl.string(em.default.L8Xfoo),
            subtitle: eE.intl.string(em.default["N8nJ+T"]),
            actions: [],
            ...s,
            children: (0, l.jsx)("div", {
                className: ep.Vg,
                children: u.map((e) =>
                    (0, l.jsx)(
                        eA,
                        {
                            widget: e,
                            onClick: () => {
                                (r(e, n), s.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function eI(e, t, n) {
    let i = (i) => (0, l.jsx)(eC, { guildId: e, insertionTarget: n, onAddWidget: t, ...i });
    (0, el.mM)(() => Promise.resolve(i), { modalKey: "guild-space-add-widget" });
}
let e_ = i.createContext(null);
function eS(e) {
    let { children: t } = e,
        n = i.useRef(null),
        r = i.useCallback((e, t) => {
            n.current?.(e, t);
        }, []),
        a = i.useCallback(
            (e) => (
                (n.current = e),
                () => {
                    n.current === e && (n.current = null);
                }
            ),
            [],
        ),
        s = i.useMemo(() => ({ addWidget: r, registerAddWidgetHandler: a }), [r, a]);
    return (0, l.jsx)(e_.Provider, { value: s, children: t });
}
function ex() {
    let e = i.useContext(e_);
    if (null == e) throw Error("GuildSpaceEditorAddWidgetProvider is required");
    return e;
}
var ev = n(992303);
function ey(e) {
    let { guildId: t, isEditing: r, isPublished: s, isRemovalPending: d } = e,
        { addWidget: o } = ex(),
        {
            saveStatus: g,
            panelCount: f,
            saveErrorMessage: h,
            hasChanges: m,
        } = (0, a.cf)(
            [w.A],
            () => ({
                saveStatus: w.A.getSaveStatus(t),
                panelCount: w.A.getDraft(t)?.widgets.length ?? 0,
                saveErrorMessage: w.A.getSaveErrorMessage(t),
                hasChanges: w.A.hasChanges(t),
            }),
            [t],
        ),
        E = "saving" === g,
        p = E || d,
        A = p || !m,
        C = h ?? eE.intl.string(em.default.HmFYc5),
        I = i.useCallback(() => {
            if (!A) {
                if (!s)
                    return void (0, el.mM)(async () => {
                        let { default: e } = await n.e(642138).then(n.bind(n, 921633));
                        return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                    });
                (0, j.Fj)(t);
            }
        }, [t, s, A]),
        _ = i.useCallback(() => {
            (0, j.iX)(t);
        }, [t]);
    return (0, l.jsx)(et.F, {
        component: "div",
        children:
            r &&
            (0, l.jsx)(ei.F, {
                className: ev.K,
                children: (0, l.jsx)(en.A, {
                    submitting: E,
                    disabled: A,
                    onSave: I,
                    onReset: p ? void 0 : _,
                    message: (0, l.jsxs)(er.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(ea.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: es.PlusMediumIcon,
                                text: eE.intl.string(em.default.L8Xfoo),
                                disabled: p,
                                onClick: () => eI(t, o),
                            }),
                            "error" === g
                                ? (0, l.jsx)(c.m, {
                                      text: C,
                                      children: (0, l.jsx)(u.E, {
                                          variant: "body-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: C,
                                      }),
                                  })
                                : (0, l.jsx)(u.E, {
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      children: eE.intl.format(em.default.hpAg80, { panelCount: f }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eb = n(503698),
    eD = n.n(eb),
    eG = n(425763),
    ej = n(754674),
    ew = n(294918);
function eR(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: ew.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eT = n(675816);
let eL = "GUILD_SPACE_WIDGET",
    eP = "GUILD_SPACE_WIDGETS",
    eN = `${eL}_${eP}`;
var eU = n(204581),
    ek = n(333007);
let eM = "canvas, iframe, video";
function eW(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: r } = e,
        { isDragging: a, item: s } = (0, eT.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eN,
            item: e.getItem(),
        })),
        u = (0, eU.u)(),
        d = i.useRef(null),
        c = i.useRef(null);
    return (i.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e) return;
        let n = u.getMonitor();
        function l() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (l(), n.subscribeToOffsetChange(l));
    }, [u, a, t]),
    i.useLayoutEffect(() => {
        let e = c.current,
            n = d.current,
            l = a ? s?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let i = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let r = l.querySelectorAll(eM);
        return (
            i.querySelectorAll(eM).forEach((e, t) => {
                let n = document.createElement("div"),
                    l = r.item(t),
                    i = l?.getBoundingClientRect(),
                    a = l?.parentElement?.getBoundingClientRect();
                ((n.className = e.className),
                    n.setAttribute("aria-hidden", "true"),
                    null != i &&
                        ((n.style.width = null != a && 0.5 > Math.abs(i.width - a.width) ? "100%" : `${i.width}px`),
                        (n.style.height = null != a && 0.5 > Math.abs(i.height - a.height) ? "100%" : `${i.height}px`)),
                    e.replaceWith(n));
            }),
            i.classList.remove(ew.cB, ew.Ni),
            i.removeAttribute("data-dnd-name"),
            i.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            i.setAttribute("aria-hidden", "true"),
            (i.inert = !0),
            e.replaceChildren(i),
            () => e.replaceChildren()
        );
    }, [a, t, s]),
    i.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e || null == n) return;
        let l = r(n);
        if (null == l) return;
        function i() {
            e.style.width = `${l.clientWidth}px`;
        }
        i();
        let s = new ResizeObserver(i);
        return (s.observe(l), () => s.disconnect());
    }, [r, a, t, n]),
    !a || t || null == s)
        ? null
        : (0, ek.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: ew.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: ew.w4 }),
              }),
              document.body,
          );
}
var eB = n(840508);
function eH(e) {
    let { column: t, children: n, isPointerDragging: r, registerColumnElement: a, onDragHover: s } = e,
        u = i.useRef(null),
        [, d] = (0, eB.H)({
            accept: eN,
            canDrop: () => r,
            hover: (e, n) => {
                if (!r) return;
                let l = n.getClientOffset();
                null != l && s(e.id, t, l);
            },
        }),
        c = i.useCallback(
            (e) => {
                ((u.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        i.useLayoutEffect(
            () => (
                d(u),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", { ref: c, className: ew.fi, children: n })
    );
}
function eO(e) {
    let { column: t, dndName: n, onDropAtEnd: r } = e,
        a = i.useRef(null),
        [{ isOver: s }, u] = (0, eB.H)({
            accept: eN,
            drop: (e) => r(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        i.useLayoutEffect(
            () => (
                u(a),
                () => {
                    u(null);
                }
            ),
            [u],
        ),
        (0, l.jsx)("div", { ref: a, className: eD()(ew.wr, { [ew.SX]: s }), "data-dnd-name": n })
    );
}
var eF = n(451395);
function eq(e, t) {
    let n = (0, a.bG)([G.A], () => G.A.getWidget(e, t.type), [e, t.type]),
        l = n?.powerup_sku_id ?? null,
        i = (0, a.bG)([_.A], () => null != l && _.A.getStateForGuild(e)?.unlockedPowerups[l] != null, [e, l]);
    return t.locked && !i ? { boostPrice: n?.boost_price ?? null, powerupSkuId: l } : void 0;
}
var ez = n(904109);
function eK(e) {
    let {
            guildId: t,
            widget: n,
            column: r,
            positionNumber: s,
            columnWidgetCount: u,
            flatIndex: d,
            leftColumnCount: c,
            isKeyboardMode: o,
            onReorder: g,
            onDrop: f,
            onDragEnd: h,
            registerSlotElement: m,
            isSaving: E,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: C,
            isSettling: I,
            onMotionEnd: _,
            isEntrancePreparing: S,
            isEntering: x,
            onEntranceAnimationEnd: v,
            isRemoving: y,
            isRemovalPending: b,
            onRemovalAnimationEnd: D,
        } = e,
        G = i.useRef(null),
        j = i.useRef(null),
        w = (0, a.bG)([O], () => (n.requires_hydration ? O.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        R = eq(t, n),
        { isDragging: T, dragSourcePosition: L } = (0, eF.gY)({
            dragRef: G,
            dropRef: j,
            index: d,
            listType: eP,
            itemType: eL,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => j.current },
            onDrop: (e) => f(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !E && !b,
        }),
        P = null == L ? null : L < c ? 0 : 1,
        N = null != P && P !== r,
        U = o && null != L && (N || L > d),
        k = o && null != L && !N && L < d,
        M = i.useCallback(
            (e) => {
                ((j.current = e), m(n.id, e));
            },
            [m, n.id],
        );
    return (0, l.jsxs)("div", {
        ref: M,
        className: eD()(ew.NI, { [ew.cB]: T, [ew.Ni]: I, [ew.fJ]: S, [ew.Hu]: x, [ew.kC]: y, [ew.ne]: U, [ew.O3]: k }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (y ? D(n.id) : I ? _(n.id) : x && v(n.id));
        },
        "data-dnd-name": p(r, s, u),
        children: [
            x &&
                (0, l.jsx)("div", {
                    className: ew.q2,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: ew.te }),
                }),
            (0, l.jsx)(ez.P, {
                guildId: t,
                widget: n,
                guildSpaceMode: "edit",
                hydration: w,
                lock: R,
                dragHandleRef: G,
                disabled: E,
                onRemove: () => A(n.id),
                onCommitConfig: C,
            }),
        ],
    });
}
function e$(e, t, n, l) {
    let i = t.current?.getScrollerNode();
    if (null == i) return void l();
    let r = e.getBoundingClientRect(),
        a = i.getBoundingClientRect(),
        s = Math.max(
            0,
            Math.min(r.top - a.top + i.scrollTop - (i.clientHeight - r.height) / 2, i.scrollHeight - i.clientHeight),
        );
    if (n || 1 > Math.abs(i.scrollTop - s)) {
        ((i.scrollTop = s), l());
        return;
    }
    (i.addEventListener("scrollend", l, { once: !0 }), i.scrollTo({ top: s, behavior: "smooth" }));
}
var eV = n(220744);
function eY(e) {
    let { column: t, disabled: n, onInsert: i } = e,
        r = eE.intl.formatToPlainString(1 === t ? em.default.U0SqHk : em.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(er.B, {
        className: ew.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(u.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: eE.intl.string(em.default["/OtM0k"]),
            }),
            (0, l.jsx)(ea.$, {
                variant: "secondary",
                size: "sm",
                icon: es.PlusMediumIcon,
                text: eE.intl.string(em.default.L8Xfoo),
                "aria-label": r,
                disabled: n,
                onClick: () => i(t, 0),
            }),
        ],
    });
}
var eX = n(663341);
function eJ(e) {
    let { column: t, index: n, placement: i, onInsert: r } = e,
        a = eE.intl.formatToPlainString(1 === t ? em.default["h9P9H+"] : em.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)(ed.D, {
        className: eD()(ew.kZ, { [ew.j2]: "before" === i, [ew.AO]: "after" === i }),
        onClick: () => r(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: ew.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: ew.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eX.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function eQ(e, t, n) {
    return eE.intl.formatToPlainString(1 === e ? em.default.O9RvHQ : em.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eZ(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: r, scrollerRef: s } = e,
        u = i.useMemo(() => (0, ej.Rl)(n), [n]),
        d = i.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eV.m[t];
                    }),
                ),
            [u],
        ),
        c = i.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, eT.V)((e) =>
            e.isDragging() && e.getItemType() === eN
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        g = o.isDragging,
        f = o.isDragging ? o.widgetId : null,
        h = (0, eG.VU)(),
        m = (0, a.bG)([ef.Ay], () => ef.Ay.useReducedMotion),
        E = (0, a.bG)([w.A], () => "saving" === w.A.getSaveStatus(t), [t]),
        p = g && !h,
        [A, C] = i.useState(null),
        I = A?.type === "removing" ? A.widgetId : null,
        _ = null != I;
    i.useLayoutEffect(() => {
        m && A?.type === "settling" && C(null);
    }, [m, A]);
    let S = i.useCallback(
            (e, n, l) => {
                ((0, j.j0)(t, e, n, l), m || C({ type: "settling", widgetId: e }));
            },
            [t, m],
        ),
        {
            effectiveDestination: x,
            draggedLocation: v,
            getColumnElement: y,
            getSlotElement: b,
            gridDropSurfaceRef: D,
            handleColumnHover: G,
            handleDragEnd: R,
            canAcceptPointerDrop: T,
            placeholderHeight: L,
            registerColumnElement: P,
            registerSlotElement: N,
            snapshotSlotRects: U,
        } = (function (e) {
            let t,
                n,
                l,
                r,
                {
                    columns: a,
                    draftColumns: s,
                    draggedWidgetId: u,
                    isPointerDragging: d,
                    isKeyboardMode: c,
                    isSaving: o,
                    reduceMotion: g,
                    onMoveWidget: f,
                } = e,
                [h, m] = i.useState(null),
                E = i.useRef(null),
                p = i.useRef(null),
                A = i.useRef(null),
                C = i.useRef(null),
                I = i.useRef([null, null]),
                _ = i.useRef(new Map()),
                [S, x] = i.useState(null),
                { stopAutoScroll: v, updatePointerY: y } =
                    ((t = i.useRef(null)),
                    (n = i.useRef(null)),
                    (l = i.useCallback(() => {
                        (null != t.current && cancelAnimationFrame(t.current), (t.current = null), (n.current = null));
                    }, [])),
                    (r = i.useCallback(
                        (e) => {
                            ((n.current = e),
                                null == t.current &&
                                    (t.current = requestAnimationFrame(function e() {
                                        t.current = null;
                                        let l = n.current;
                                        if (null == l) return;
                                        let i = (function () {
                                                let e = C.current?.parentElement;
                                                for (; null != e;) {
                                                    let t = window.getComputedStyle(e).overflowY;
                                                    if ("auto" === t || "scroll" === t) return e;
                                                    e = e.parentElement;
                                                }
                                                return null;
                                            })(),
                                            r = i?.getBoundingClientRect(),
                                            a = r?.top ?? 0,
                                            s = r?.bottom ?? window.innerHeight,
                                            u = l - a < 96 ? -1 : +(s - l < 96);
                                        if (0 === u) return;
                                        let d = Math.ceil(24 * (1 - (u < 0 ? l - a : s - l) / 96));
                                        (null != i ? i.scrollBy({ top: u * d }) : window.scrollBy({ top: u * d }),
                                            (t.current = requestAnimationFrame(e)));
                                    })));
                        },
                        [C],
                    )),
                    i.useEffect(() => l, [l]),
                    { stopAutoScroll: l, updatePointerY: r }),
                { clearSlotMotion: b, snapshotSlotRects: D } = (function (e) {
                    let { columns: t, pendingDestination: n, reduceMotion: l, slotElementsRef: r } = e,
                        a = i.useRef(new Map()),
                        s = i.useRef(new Map()),
                        u = i.useCallback(() => {
                            (s.current.forEach((e) => e.cancel()), s.current.clear());
                        }, []),
                        d = i.useCallback(() => {
                            (a.current.clear(), u());
                        }, [u]),
                        c = i.useCallback(
                            (e) => {
                                l ||
                                    (a.current.clear(),
                                    r.current.forEach((t, n) => {
                                        n !== e && a.current.set(n, t.getBoundingClientRect());
                                    }));
                            },
                            [l, r],
                        );
                    return (
                        i.useLayoutEffect(() => {
                            if (l) {
                                (a.current.clear(), u());
                                return;
                            }
                            let e = a.current;
                            0 !== e.size &&
                                (r.current.forEach((t, n) => {
                                    (s.current.get(n)?.cancel(), s.current.delete(n));
                                    let l = e.get(n);
                                    if (null == l) return;
                                    let i = t.getBoundingClientRect(),
                                        r = l.left - i.left,
                                        a = l.top - i.top;
                                    if (1 > Math.abs(r) && 1 > Math.abs(a)) return;
                                    let u = t.animate(
                                        [{ transform: `translate(${r}px, ${a}px)` }, { transform: "translate(0, 0)" }],
                                        { duration: 140, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                                    );
                                    function d() {
                                        s.current.get(n) === u && s.current.delete(n);
                                    }
                                    (s.current.set(n, u), (u.onfinish = d), (u.oncancel = d));
                                }),
                                e.clear());
                        }, [u, t, n, l, r]),
                        i.useEffect(() => u, [u]),
                        { clearSlotMotion: d, snapshotSlotRects: c }
                    );
                })({ columns: a, pendingDestination: h, reduceMotion: g, slotElementsRef: _ }),
                G = (() => {
                    if (null == u) return null;
                    for (let [e, t] of a.entries()) {
                        let n = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === u;
                        });
                        if (-1 !== n) return { column: e, index: n };
                    }
                    return null;
                })(),
                j = d && h?.widgetId === u && (null == G || h.column !== G.column || h.index !== G.index) ? h : null,
                w = i.useCallback((e, t) => {
                    I.current[e] = t;
                }, []),
                R = i.useCallback((e) => I.current[e] ?? null, []),
                T = i.useCallback((e, t) => {
                    null == t ? _.current.delete(e) : _.current.set(e, t);
                }, []),
                L = i.useCallback((e) => _.current.get(e) ?? null, []),
                P = i.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = I.current[0]?.getBoundingClientRect(),
                        i = I.current[1]?.getBoundingClientRect();
                    if (null == l || null == i || !(l.right <= i.left)) return !0;
                    let r = (l.right + i.left) / 2;
                    return 1 === t ? n > r + 32 : n < r - 32;
                }, []),
                N = i.useCallback(() => {
                    A.current = null;
                    let e = p.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (D(e.widgetId), (E.current = e), m(e));
                }, [D]),
                U = i.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        y(l.y);
                        let i = E.current?.column ?? G?.column;
                        if (null == i || !P(i, t, l.x)) return;
                        let r =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((p.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, r)) }),
                            null == A.current && (A.current = requestAnimationFrame(N)));
                    },
                    [N, a, P, G?.column, o, y],
                ),
                k = i.useCallback(
                    (e, t, n) => {
                        let l =
                                a[t]?.filter((t) => {
                                    let { id: n } = t;
                                    return n !== e;
                                }) ?? [],
                            i = l.findIndex((e) => {
                                let { id: t } = e,
                                    l = _.current.get(t)?.getBoundingClientRect();
                                return null != l && n.y < l.top + l.height / 2;
                            });
                        U(e, t, -1 === i ? l.length : i, n);
                    },
                    [a, U],
                ),
                M = i.useCallback(
                    (e, t) => {
                        let n = 0,
                            l = 1 / 0;
                        (I.current.forEach((e, i) => {
                            if (null == e) return;
                            let r = e.getBoundingClientRect(),
                                a = t.x < r.left ? r.left - t.x : Math.max(0, t.x - r.right),
                                s = t.y < r.top ? r.top - t.y : Math.max(0, t.y - r.bottom),
                                u = a * a + s * s;
                            u < l && ((n = i), (l = u));
                        }),
                            k(e, n, t));
                    },
                    [k],
                ),
                [, W] = (0, eB.H)({
                    accept: eN,
                    canDrop: () => d,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!d || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && M(e.id, n);
                    },
                });
            i.useLayoutEffect(
                () => (
                    W(C),
                    () => {
                        W(null);
                    }
                ),
                [W],
            );
            let B = i.useCallback((e) => {
                    let t = p.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                H = i.useCallback((e, t) => (0, ej.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                O = i.useCallback(() => {
                    (null != A.current && cancelAnimationFrame(A.current),
                        (A.current = null),
                        (p.current = null),
                        (E.current = null),
                        m(null),
                        x(null),
                        b(),
                        v());
                }, [b, v]),
                F = i.useCallback(() => d, [d]),
                q = i.useCallback(
                    (e, t) => {
                        let n = B(e);
                        (t &&
                            !c &&
                            null != n &&
                            (null == G || n.column !== G.column || n.index !== G.index) &&
                            f(e, n.column, H(e, n)),
                            O());
                    },
                    [O, G, B, H, c, f],
                );
            return (
                i.useLayoutEffect(() => {
                    if (!d || null == u) return;
                    let e = _.current.get(u);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== S && x(t);
                }, [u, d, S]),
                i.useEffect(
                    () => () => {
                        null != A.current && cancelAnimationFrame(A.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: j,
                    draggedLocation: G,
                    getColumnElement: R,
                    getSlotElement: L,
                    gridDropSurfaceRef: C,
                    handleColumnHover: k,
                    handleDragEnd: q,
                    canAcceptPointerDrop: F,
                    placeholderHeight: S,
                    registerColumnElement: w,
                    registerSlotElement: T,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: d,
            draftColumns: u,
            draggedWidgetId: f,
            isPointerDragging: p,
            isKeyboardMode: h,
            isSaving: E,
            reduceMotion: m,
            onMoveWidget: S,
        }),
        {
            clearWidgetEntrance: k,
            handleAddWidget: M,
            isEntrancePreparing: W,
            isEntering: B,
        } = (function (e) {
            let {
                    guildId: t,
                    widgets: n,
                    isSaving: l,
                    isDraggingWidget: r,
                    isRemovalPending: a,
                    reduceMotion: s,
                    scrollerRef: u,
                    snapshotSlotRects: d,
                    getSlotElement: c,
                } = e,
                { registerAddWidgetHandler: o } = ex(),
                [g, f] = i.useState(() => new Map()),
                h = i.useRef(null),
                [m, E] = i.useState(0),
                p = i.useCallback((e) => {
                    f((t) => {
                        if (!t.has(e)) return t;
                        let n = new Map(t);
                        return (n.delete(e), n);
                    });
                }, []),
                A = i.useCallback(
                    (e, n) => {
                        l ||
                            r ||
                            a ||
                            ((h.current = null),
                            d(),
                            (h.current = (0, j.lr)(t, e.type, e.name, e.locked, n)),
                            E((e) => e + 1));
                    },
                    [t, r, a, l, d],
                );
            return (
                i.useLayoutEffect(() => o(A), [A, o]),
                i.useLayoutEffect(() => {
                    let e = h.current;
                    if (null == e) return;
                    let t = n.find((t) => {
                            let { id: n } = t;
                            return n === e;
                        }),
                        l = null == t ? null : c(t.id);
                    if (null == t || null == l) {
                        h.current = null;
                        return;
                    }
                    ((h.current = null), s)
                        ? e$(l, u, !0, () => void 0)
                        : (f((e) => new Map(e).set(t.id, "preparing")),
                          e$(l, u, !1, () => {
                              l.isConnected &&
                                  f((e) => ("preparing" !== e.get(t.id) ? e : new Map(e).set(t.id, "playing")));
                          }));
                }, [c, m, s, u, n]),
                {
                    clearWidgetEntrance: p,
                    handleAddWidget: A,
                    isEntrancePreparing: (e) => "preparing" === g.get(e),
                    isEntering: (e) => "playing" === g.get(e),
                }
            );
        })({
            guildId: t,
            widgets: n,
            isSaving: E,
            isDraggingWidget: g,
            isRemovalPending: _,
            reduceMotion: m,
            scrollerRef: s,
            snapshotSlotRects: U,
            getSlotElement: b,
        }),
        H = i.useCallback((e) => {
            C((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        O = i.useCallback(
            (e) => {
                (C(null == e ? null : { type: "removing", widgetId: e }), r(null != e));
            },
            [r],
        ),
        F = i.useCallback(
            (e) => {
                I === e && (U(e), (0, j.GP)(t, e), O(null));
            },
            [t, I, O, U],
        ),
        q = i.useCallback(
            (e) => {
                if (!E && !_) {
                    if ((k(e), m)) {
                        (U(e), (0, j.GP)(t, e));
                        return;
                    }
                    O(e);
                }
            },
            [k, t, _, E, m, O, U],
        );
    (i.useLayoutEffect(() => {
        m && null != I && F(I);
    }, [F, m, I]),
        i.useEffect(() => () => r(!1), [r]));
    let z = i.useCallback(
            (e, n) => {
                let l = c[e],
                    i = c[n];
                null != l && null != i && (0, j.j0)(t, l.id, i.position.column, i.position.order);
            },
            [t, c],
        ),
        K = i.useCallback(
            (e, n) => {
                (0, j.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        $ = i.useCallback(
            (e, n) => {
                let l = (0, ej.O6)(u[e] ?? [], d[e] ?? [], n);
                eI(t, M, { column: e, index: l });
            },
            [d, u, t, M],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: D,
                className: ew.Z7,
                children: (0, l.jsx)("div", {
                    className: eD()(ew.Vg, { [ew.nl]: p }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            eH,
                            {
                                column: n,
                                isPointerDragging: p,
                                registerColumnElement: P,
                                onDragHover: G,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !g)
                                            return (0, l.jsx)(eY, { column: n, disabled: E || _, onInsert: $ });
                                        let i =
                                            p && null != f
                                                ? e.filter((e) => {
                                                      let { id: t } = e;
                                                      return t !== f;
                                                  })
                                                : e;
                                        return (function (e, t, n) {
                                            let l = e.map((e) => ({ type: "widget", widget: e }));
                                            if (n?.column !== t) return l;
                                            let i = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === n.widgetId;
                                                }),
                                                r = -1 !== i && n.index > i ? n.index + 1 : n.index;
                                            return (l.splice(Math.min(r, l.length), 0, { type: "placeholder" }), l);
                                        })(e, n, x).map((r) => {
                                            if ("placeholder" === r.type)
                                                return (0, l.jsx)(eR, { height: L }, "drag-placeholder");
                                            let { widget: a } = r,
                                                s = i.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                u =
                                                    -1 === s
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : s,
                                                o = c.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                f = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                m = !g && !E && !_;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: ew.O4,
                                                    children: [
                                                        m &&
                                                            (0, l.jsx)(eJ, {
                                                                column: n,
                                                                index: f,
                                                                placement: "before",
                                                                onInsert: $,
                                                            }),
                                                        (0, l.jsx)(eK, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: u + 1,
                                                            columnWidgetCount: i.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: h,
                                                            isSaving: E,
                                                            getDropLabel: eQ,
                                                            onReorder: z,
                                                            onDrop: T,
                                                            onDragEnd: R,
                                                            registerSlotElement: N,
                                                            isSettling:
                                                                A?.type === "settling" && A.widgetId === a.id && !h,
                                                            onMotionEnd: H,
                                                            isEntrancePreparing: W(a.id),
                                                            isEntering: B(a.id),
                                                            onEntranceAnimationEnd: k,
                                                            isRemoving: I === a.id,
                                                            isRemovalPending: _,
                                                            onRemovalAnimationEnd: F,
                                                            onRemove: q,
                                                            onCommitConfig: (e) => (0, j.Vk)(t, a.id, e),
                                                        }),
                                                        m &&
                                                            f === e.length - 1 &&
                                                            (0, l.jsx)(eJ, {
                                                                column: n,
                                                                index: e.length,
                                                                placement: "after",
                                                                onInsert: $,
                                                            }),
                                                    ],
                                                },
                                                a.id,
                                            );
                                        });
                                    })(e, n),
                                    h &&
                                        g &&
                                        !E &&
                                        (0, l.jsx)(eO, {
                                            column: n,
                                            dndName: eE.intl.string(1 === n ? em.default.fWef0G : em.default.KcdDyT),
                                            onDropAtEnd: K,
                                        }),
                                    p && (0, l.jsx)("div", { className: ew.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(eW, { isKeyboardMode: h, targetColumn: x?.column ?? v?.column ?? null, getColumnElement: y }),
        ],
    });
}
var e0 = n(115560),
    e1 = n(721995);
function e2(e) {
    let { canEdit: t, guildId: n, widget: i, loadId: r, column: s, order: u } = e,
        d = (0, a.bG)([O], () => (i.requires_hydration ? O.getHydration(n, i.id) : void 0), [
            n,
            i.id,
            i.requires_hydration,
        ]),
        c = eq(n, i);
    return t || null == c
        ? (0, l.jsx)(ez.P, {
              guildId: n,
              widget: i,
              guildSpaceMode: "view",
              hydration: d,
              lock: c,
              loadId: r,
              column: s,
              order: u,
          })
        : null;
}
function e3(e) {
    let { canEdit: t, guildId: n, widgets: r } = e,
        a = i.useMemo(() => (0, ej.Rl)(r), [r]),
        [s] = i.useState(() => (0, e0.A)());
    return (0, l.jsx)("div", {
        className: e1.V,
        children: a.map((e, i) =>
            (0, l.jsx)(
                "div",
                {
                    className: e1.f,
                    children: e.map((e, r) =>
                        (0, l.jsx)(e2, { canEdit: t, guildId: n, widget: e, loadId: s, column: i, order: r }, e.id),
                    ),
                },
                i,
            ),
        ),
    });
}
var e6 = n(191023),
    e9 = n(241326),
    e5 = n(534514),
    e7 = n(22231),
    e8 = n(654107),
    e4 = n(682163),
    te = n(837011),
    tt = n(649640),
    tn = n(2553),
    tl = n(405810),
    ti = n(498642),
    tr = n(486020),
    ta = n(488428),
    ts = n(776231),
    tu = n(986898);
function td(e) {
    let { guildId: t, header: n, canEdit: r, isEditing: s, isSaving: d } = e,
        g = (0, a.bG)([S.A], () => S.A.getGuild(t), [t]),
        f = (0, a.bG)([ti.A], () => ti.A.getOnlineCount(t), [t]),
        h = (0, a.bG)([ti.A], () => ti.A.getMemberCount(t), [t]),
        m = n.custom_banner,
        E = (0, a.bG)([te.A], () => te.A.getProfile(t), [t]),
        p = (0, tt.b2)().hex(),
        A = null == g ? null : tr.Ay.getGuildIconURL({ id: g.id, icon: g.icon, size: 64 }),
        C = (0, e8.Ay)(A, p),
        I = (0, tt.n6)(E?.brandColorPrimary ?? C),
        _ = i.useMemo(
            () =>
                null == g
                    ? null
                    : "string" == typeof m
                      ? m
                      : void 0 === m && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = tr.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: i } = window.GLOBAL_ENV,
                                  r = b.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${r}` : location.protocol + i + r,
                                  s = { size: (0, ts.kr)(1200 * (0, ts.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${ta.As(s)}`));
                          })(g.id, n.custom_banner_hash)
                        : tr.Ay.getGuildBannerURL({ id: g.id, banner: g.banner }),
            [g, m, n.custom_banner_hash],
        ),
        x = "string" == typeof m || (void 0 === m && null != n.custom_banner_hash);
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: tu.wx,
              children: [
                  null != _
                      ? (0, l.jsx)("img", { className: tu.vK, src: _, alt: "" })
                      : (0, l.jsx)("div", { className: tu.vK, style: { background: I }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: tu.f5, "aria-hidden": !0 }),
                  s
                      ? (0, l.jsxs)("div", {
                            className: tu.j0,
                            children: [
                                (0, l.jsx)(tl.A, {
                                    variant: "overlay-secondary",
                                    icon: e6.ImageIcon,
                                    size: "sm",
                                    text: eE.intl.string(em.default["EN+0gW"]),
                                    onChange: (e) => (0, j.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, tn.A)(0xa00000),
                                    disabled: d,
                                }),
                                x
                                    ? (0, l.jsx)(c.m, {
                                          text: eE.intl.string(em.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(o.K, {
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              icon: e9.TrashIcon,
                                              "aria-label": eE.intl.string(em.default["CunK+J"]),
                                              onClick: () => (0, j.pC)(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: tu.D_,
                      children: [
                          (0, l.jsx)(e4.Ay, {
                              className: tu.Kk,
                              guild: g,
                              size: e4.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: tu.pq,
                              children: [
                                  (0, l.jsx)(e5.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: g.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: tu.M1,
                                      children: [
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: tu.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: tu.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: eE.intl.format(em.default.G08ClG, { count: f }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != h
                                              ? (0, l.jsxs)("div", {
                                                    className: tu.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: tu.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: eE.intl.format(em.default["rp7bx+"], {
                                                                count: h,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: tu.dJ,
                                              children: [
                                                  (0, l.jsx)(eo.BoostGemIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(u.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "currentColor",
                                                      children: eE.intl.format(em.default.DwFqrb, {
                                                          count: g.premiumSubscriberCount,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  r &&
                      !s &&
                      (0, l.jsx)(ea.$, {
                          icon: e7.PencilIcon,
                          text: eE.intl.string(em.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, j.Wd)(t),
                      }),
              ],
          });
}
var tc = n(942857),
    to = n(263775),
    tg = n(967198),
    tf = n(725041),
    th = n(49999),
    tm = n(412728),
    tE = n(312152);
function tp(e) {
    let t,
        { guildId: v } = e,
        y = i.useRef(null),
        R = i.useRef(null),
        [T, L] = i.useState(!1),
        [P, N, U] = (0, a.yK)([K.A], () => [K.A.getSpace(v), K.A.getFetchStatus(v), K.A.isInBackoff(v)], [v]),
        k = (0, a.bG)([G.A], () => G.A.getFetchStatus(v), [v]),
        M = (0, a.bG)([S.A], () => S.A.getGuild(v), [v]),
        W = (0, Y.mN)(M),
        B = i.useRef(!0);
    (i.useEffect(
        () => (
            (B.current = !0),
            () => {
                B.current = !1;
            }
        ),
        [],
    ),
        i.useEffect(() => {
            let e = y.current !== v;
            ((y.current = v),
                !(async function () {
                    let t = [];
                    (("idle" === N || e) && t.push((0, x.u)(v, { shouldRefetch: e })),
                        W && "idle" === k && t.push(D(v)),
                        await Promise.all(t),
                        e &&
                            B.current &&
                            y.current === v &&
                            W &&
                            "success" === K.A.getFetchStatus(v) &&
                            K.A.isSpaceMissing(v) &&
                            (0, j.Wd)(v));
                })());
        }, [W, k, N, v]),
        i.useEffect(() => {
            (0, p.L4)(v, !1, { respectBackoff: !0 });
        }, [v]),
        i.useEffect(() => {
            (0, E.Dr)(s.M.GUILD_SPACE_CHANNEL_ROW_HIGHLIGHT, { dismissAction: th.i.TAKE_ACTION });
        }, []),
        (t = (0, Z.n)()),
        i.useEffect(
            () => () => {
                if (null == t) return;
                let e = Q.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === X.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, J._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let H = null != P;
    (0, m.A)(
        { type: tm.z.PAGE, name: r.ImpressionNames.SERVER_HUB, properties: { guild_id: v } },
        { disableTrack: !H },
        [H],
    );
    let F = M?.guildSpaceSettings?.publish_status === $.B.PUBLISHED,
        q = i.useCallback(() => (0, x.W)(v, { publish_status: $.B.PUBLISHED }), [v]),
        [et, en] = (0, a.yK)([w.A], () => [w.A.getDraft(v), w.A.getSaveStatus(v)], [v]),
        ei = W && null != et;
    !(function (e, t) {
        let r = (0, el.Ry)(tf.J),
            u = (0, a.bG)([tg.A], () => tg.A.getGuildId()),
            d = (0, tc.A)(),
            [c, o] = (0, to.kn)(t && u === e && !d ? [s.M.GUILD_SPACE_NUX_MODAL] : [], {
                groupName: th.m.GUILD_SPACE_NUX,
                bypassAutoDismiss: !0,
            }),
            g = i.useRef(!1),
            f = c === s.M.GUILD_SPACE_NUX_MODAL;
        (i.useEffect(() => {
            g.current = !1;
        }, [e, u]),
            i.useEffect(() => {
                !f ||
                    r ||
                    g.current ||
                    ((g.current = !0),
                    (0, el.mM)(
                        async () => {
                            let t = await Promise.resolve().then(n.bind(n, 725041));
                            return (n) =>
                                (0, l.jsx)(t.default, {
                                    guildId: e,
                                    markAsDismissed: o,
                                    transitionState: n.transitionState,
                                    onClose: n.onClose,
                                });
                        },
                        { modalKey: tf.J },
                    ).catch(() => {
                        g.current = !1;
                    }));
            }, [e, r, o, f]));
    })(v, W && null != P);
    let er = ei ? et.widgets : P?.widgets,
        ea = i.useMemo(() => er?.some((e) => e.locked) ?? !1, [er]);
    i.useEffect(() => {
        W && ea && ((0, I.AK)(v), (0, I.Xd)(v));
    }, [W, v, ea]);
    let es = (0, a.bG)(
        [_.A, G.A],
        () =>
            P?.widgets.some((e) => {
                let t = G.A.getWidget(v, e.type)?.powerup_sku_id;
                return e.locked && null != t && _.A.getStateForGuild(v)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [v, P],
    );
    (i.useEffect(() => {
        es && (0, x.u)(v, { shouldRefetch: !0 });
    }, [v, es]),
        i.useEffect(() => {
            W || null == et || "saving" === en || (0, j.iX)(v, V.pb.PERMISSION_LOST);
        }, [W, et, en, v]));
    let eu = i.useMemo(
            () =>
                (er ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [er],
        ),
        ed = (0, a.yK)([O], () => O.getWidgetIdsToHydrate(v, eu), [v, eu]),
        ec = i.useRef(null);
    i.useEffect(() => {
        if (ec.current !== v && null != P) {
            ((ec.current = v), z(v, eu, !0));
            return;
        }
        z(v, ed);
    }, [v, P, eu, ed]);
    let eo = i.useCallback(() => {
        A.A.open(v, b.BEX.ENGAGEMENT, void 0, b.nd0.ENGAGEMENT_GUILD_SPACE);
    }, [v]);
    return null == P || null == er
        ? (0, l.jsx)("div", {
              className: tE.MY,
              children: (0, l.jsx)("div", {
                  className: tE.F,
                  children:
                      "error" !== N || U
                          ? (0, l.jsx)(d.y, {
                                type: d.y.Type.SPINNING_CIRCLE,
                                "aria-label": eE.intl.string(eE.t.ZTNur7),
                            })
                          : (0, l.jsx)(u.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: eE.intl.string(eE.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)(eS, {
              children: (0, l.jsxs)("div", {
                  className: tE.MY,
                  children: [
                      (0, l.jsxs)(C.A, {
                          toolbar:
                              W &&
                              (0, l.jsx)(c.m, {
                                  text: eE.intl.string(eE.t.OBskVU),
                                  children: (0, l.jsx)(o.K, {
                                      type: "button",
                                      variant: "icon-only",
                                      icon: g.SettingsIcon,
                                      "aria-label": eE.intl.string(eE.t["3D5yo/"]),
                                      size: "md",
                                      onClick: eo,
                                  }),
                              }),
                          children: [
                              (0, l.jsx)(C.A.Icon, { icon: f.HomeIcon, "aria-hidden": !0 }),
                              (0, l.jsx)(C.A.Title, { children: eE.intl.string(eE.t["04IVMq"]) }),
                          ],
                      }),
                      (0, l.jsx)(h.Ch, {
                          ref: R,
                          className: tE.XG,
                          children: (0, l.jsxs)("div", {
                              className: tE.Qs,
                              children: [
                                  W && !F ? (0, l.jsx)(ee.A, { onPublish: q }) : null,
                                  (0, l.jsx)(td, {
                                      guildId: v,
                                      header: ei ? et.header : P.header,
                                      isEditing: ei,
                                      canEdit: W,
                                      isSaving: "saving" === en,
                                  }),
                                  ei
                                      ? (0, l.jsx)(
                                            eZ,
                                            { guildId: v, widgets: er, onRemovalPendingChange: L, scrollerRef: R },
                                            v,
                                        )
                                      : (0, l.jsx)(e3, { canEdit: W, guildId: v, widgets: er }),
                              ],
                          }),
                      }),
                      (0, l.jsx)(ey, { guildId: v, isEditing: ei, isPublished: F, isRemovalPending: T }),
                  ],
              }),
          });
}

(l.r(t), l.d(t, { default: () => e6 }));
var n = l(477900),
    r = l(582128),
    i = l(503698),
    a = l.n(i),
    u = l(17928),
    s = l(834730),
    d = l(289873),
    c = l(689175),
    o = l(250527),
    f = l(868652),
    g = l(645619),
    h = l(71393),
    m = l(562708),
    E = l(636537),
    _ = l(228366),
    p = l(499785),
    A = l(716357);
function x(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var I = l(652215);
let C = 0;
async function v(e) {
    let t = C++;
    _.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: l } = await p.A.get({
            url: I.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: m.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: l });
    } catch (l) {
        _.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: x(l) });
    }
}
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = A.A.getFetchStatus(e),
        n = t && "error" === l && !A.A.isInBackoff(e);
    ("idle" === l || n) && (await v(e));
}
async function S(e) {
    await v(e);
}
async function D(e, t) {
    let { body: l } = await E.Bo.patch({ url: I.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return l;
}
async function b(e) {
    _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: I.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var T = l(960960),
    G = l(754674);
let j = {};
function w(e) {
    let t = j[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class L extends u.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return j[e]?.draft;
    }
    isEditing(e) {
        return null != j[e];
    }
    getSaveStatus(e) {
        return j[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return j[e]?.saveErrorMessage;
    }
}
let R = new L(_.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: l } = e;
        j[t] = { draft: { header: l.header, widgets: (0, G.W$)(l.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: l } = e,
            n = w(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, widgets: (0, G.QD)(n.draft.widgets, l) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: l, targetColumn: n, targetIndex: r } = e,
            i = w(t);
        if (null == i) return !1;
        let a = (0, G.Gm)(i.draft.widgets, l, n, r);
        if (null == a) return !1;
        i.draft = { ...i.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: l } = e,
            n = w(t);
        if (null == n) return !1;
        let r = n.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== l;
        });
        if (r.length === n.draft.widgets.length) return !1;
        n.draft = { ...n.draft, widgets: (0, G.W$)(r) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: l, config: n } = e,
            r = w(t);
        if (null == r) return !1;
        let i = r.draft.widgets.map((e) => (e.id === l ? { ...e, config: n } : e));
        r.draft = { ...r.draft, widgets: i };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: l } = e,
            n = w(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, header: { ...n.draft.header, custom_banner: l } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: l } = e,
            n = j[t];
        if (null == n) return !1;
        ((n.saveStatus = "saving"), (n.activeSaveRequestId = l), delete n.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: l, errorMessage: n } = e,
            r = j[t];
        if (r?.activeSaveRequestId !== l) return !1;
        (delete r.activeSaveRequestId, (r.saveStatus = "error"), (r.saveErrorMessage = n));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == j[t]) return !1;
        delete j[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == j[t]) return !1;
        delete j[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: l },
        } = e;
        if (l || null == j[t]) return !1;
        delete j[t];
    },
    LOGOUT: function () {
        j = {};
    },
});
var N = l(913122),
    U = l(593673);
let P = "draft:",
    k = 0,
    M = 0;
function F(e) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function B(e, t, l, n) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: l, targetIndex: n });
}
function O(e, t) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function H(e) {
    let t = R.getDraft(e);
    if (null == t || "saving" === R.getSaveStatus(e)) return;
    let l = {};
    void 0 !== t.header.custom_banner && (l.custom_banner = t.header.custom_banner);
    let n = {
            header: l,
            widgets: t.widgets.map((e) => {
                let { id: t, type: l, position: n, config: r } = e,
                    i = {
                        type: l,
                        position: n,
                        config: (function (e) {
                            if (e.type === U.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return (void 0 !== e.image && (t.image = e.image), t);
                            }
                            return e;
                        })(r),
                    };
                return (t.startsWith(P) || (i.id = t), i);
            }),
        },
        r = M++;
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: r });
    try {
        let { body: t } = await E.Bo.put({ url: I.Rsh.GUILD_SPACE(e), body: n, rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (i) {
        let l = (function (e, t) {
                if (e instanceof E.oh)
                    for (let [l, n] of Object.entries(
                        new N.LG({ status: e.status, body: e.body }).getAllFieldErrors(),
                    )) {
                        let [e, r] = l.split(".");
                        if ("widgets" !== e) continue;
                        let i = Number(r),
                            a = Number.isInteger(i) ? t[i] : void 0,
                            u = n[0]?.message;
                        if (null != a && null != u) return { type: a.type, message: u };
                    }
            })(i, t.widgets),
            n = l?.message;
        if (null != l) {
            let t = T.A.getWidget(e, l.type)?.name;
            null != t && (n = `${t}: ${l.message}`);
        }
        _.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: r, errorMessage: n });
    }
}
var W = l(363957);
let K = 0;
async function q(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l && _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let n = W.A.getWidgetIdsToHydrate(e, t);
    if (0 === n.length) return;
    let r = K++;
    _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: n });
    try {
        let { body: t } = await E.Bo.get({
            url: I.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: n },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: x(t) });
    }
}
var $ = l(470452),
    V = l(344351),
    z = l(795816),
    Y = l(933958),
    X = l(44167),
    J = l(872188),
    Q = l(868285),
    Z = l(36525),
    ee = l(871682),
    et = l(331322),
    el = l(821609),
    en = l(499373),
    er = l(866665),
    ei = l(189213),
    ea = l(939249),
    eu = l(104510),
    es = l(661531),
    ed = l(245604),
    ec = l(192308),
    eo = l(775602),
    ef = l(104129),
    eg = l(375708),
    eh = l(517228);
function em(e) {
    let { widget: t, onClick: l } = e,
        r = (0, u.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: a } = t.assets,
        d = (r ? null : a) ?? i,
        c = t.boost_price;
    return (0, n.jsxs)(ea.D, {
        className: eh.HL,
        onClick: l,
        children: [
            (0, n.jsxs)("div", {
                className: eh.b3,
                children: [
                    null != d && (0, n.jsx)("img", { className: eh.YI, src: d, alt: "" }),
                    t.locked &&
                        (0, n.jsx)("div", {
                            className: eh.AA,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(eu._, {
                                size: "sm",
                                color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, n.jsxs)("div", {
                        className: eh.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, n.jsx)("div", { className: eh.Ti, children: (0, n.jsx)("div", { className: eh.dK }) }),
                            (0, n.jsxs)(et.B, {
                                className: eh.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, n.jsx)(ed.U, {}),
                                    (0, n.jsx)(s.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: eg.intl.string(ef.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(et.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(s.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, n.jsxs)(et.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, n.jsx)(eu._, { size: "sm", color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, n.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eg.intl.format(ef.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: eg.intl.string(ef.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let { guildId: t, ...l } = e,
        i = (0, u.yK)(
            [T.A, R],
            () => {
                let e = R.getDraft(t)?.widgets ?? [];
                var l = T.A.getWidgets(t) ?? [];
                let n = new Map();
                for (let t of e) n.set(t.type, (n.get(t.type) ?? 0) + 1);
                return l.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            b(t);
        }, [t]),
        (0, n.jsx)(ei.Modal, {
            title: eg.intl.string(ef.default.L8Xfoo),
            subtitle: eg.intl.string(ef.default["N8nJ+T"]),
            actions: [],
            ...l,
            children: (0, n.jsx)("div", {
                className: eh.Vg,
                children: i.map((e) =>
                    (0, n.jsx)(
                        em,
                        {
                            widget: e,
                            onClick: () => {
                                var n, r, i;
                                ((n = e.type),
                                    (r = e.name),
                                    (i = e.locked),
                                    _.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, l) {
                                            let n = {
                                                id: `${P}${k++}`,
                                                position: { column: G.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: l,
                                            };
                                            switch (e) {
                                                case U.a.IMAGE_TEXT:
                                                    return {
                                                        ...n,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case U.a.LEADERBOARD:
                                                case U.a.WHITEBOARD:
                                                case U.a.POPULAR_MUSIC:
                                                case U.a.LIVE_ACTIVITY:
                                                    return { ...n, type: e, config: { type: e } };
                                            }
                                        })(n, r, i),
                                    }),
                                    l.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
var e_ = l(992303);
function ep(e) {
    let { guildId: t, isEditing: l } = e,
        i = (0, u.bG)([R], () => R.getSaveStatus(t), [t]),
        a = (0, u.bG)([R], () => R.getDraft(t)?.widgets.length ?? 0, [t]),
        d = (0, u.bG)([R], () => R.getSaveErrorMessage(t), [t]),
        c = "saving" === i,
        o = d ?? eg.intl.string(ef.default.HmFYc5),
        f = r.useCallback(() => {
            H(t);
        }, [t]),
        g = r.useCallback(() => {
            F(t);
        }, [t]);
    return (0, n.jsx)(Q.F, {
        component: "div",
        children:
            l &&
            (0, n.jsx)(ee.F, {
                className: e_.K,
                children: (0, n.jsx)(Z.A, {
                    submitting: c,
                    disabled: c,
                    onSave: f,
                    onReset: c ? void 0 : g,
                    message: (0, n.jsxs)(et.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, n.jsx)(el.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: en.T,
                                text: eg.intl.string(ef.default.L8Xfoo),
                                disabled: c,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, n.jsx)(eE, { guildId: t, ...e })),
                                        void (0, ec.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === i
                                ? (0, n.jsx)(er.m, {
                                      text: o,
                                      children: (0, n.jsx)(s.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: o,
                                      }),
                                  })
                                : (0, n.jsx)(s.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: eg.intl.format(ef.default.hpAg80, { panelCount: a }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eA = l(425763),
    ex = l(294918);
function eI(e) {
    let { height: t } = e;
    return (0, n.jsx)("div", { className: ex.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eC = l(686246);
let ev = "GUILD_SPACE_WIDGET",
    ey = "GUILD_SPACE_WIDGETS",
    eS = `${ev}_${ey}`;
var eD = l(225995),
    eb = l(333007);
let eT = "canvas, iframe, video";
function eG(e) {
    let { isKeyboardMode: t } = e,
        { isDragging: l, item: i } = (0, eC.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eS,
            item: e.getItem(),
        })),
        a = (0, eD.u)(),
        u = r.useRef(null),
        s = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = u.current;
        if (!l || t || null == e) return;
        let n = a.getMonitor();
        function r() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (r(), n.subscribeToOffsetChange(r));
    }, [a, l, t]),
    r.useLayoutEffect(() => {
        let e = s.current,
            n = u.current,
            r = l ? i?.itemPreviewProps?.getSourceElement?.() : null;
        if (!l || t || null == e || null == n || null == r) return;
        let a = r.cloneNode(!0);
        n.style.width = `${r.getBoundingClientRect().width}px`;
        let d = r.querySelectorAll(eT);
        return (
            a.querySelectorAll(eT).forEach((e, t) => {
                let l = document.createElement("div"),
                    n = d.item(t),
                    r = n?.getBoundingClientRect(),
                    i = n?.parentElement?.getBoundingClientRect();
                ((l.className = e.className),
                    l.setAttribute("aria-hidden", "true"),
                    null != r &&
                        ((l.style.width = null != i && 0.5 > Math.abs(r.width - i.width) ? "100%" : `${r.width}px`),
                        (l.style.height = null != i && 0.5 > Math.abs(r.height - i.height) ? "100%" : `${r.height}px`)),
                    e.replaceWith(l));
            }),
            a.classList.remove(ex.cB),
            a.removeAttribute("data-dnd-name"),
            a.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            a.setAttribute("aria-hidden", "true"),
            (a.inert = !0),
            e.replaceChildren(a),
            () => e.replaceChildren()
        );
    }, [l, t, i]),
    !l || t || null == i)
        ? null
        : (0, eb.createPortal)(
              (0, n.jsx)("div", {
                  ref: u,
                  className: ex.dk,
                  "aria-hidden": !0,
                  children: (0, n.jsx)("div", { ref: s, className: ex.w4 }),
              }),
              document.body,
          );
}
var ej = l(651300);
function ew(e) {
    let { column: t, children: l, isPointerDragging: i, onElement: a, onDragHover: u } = e,
        s = r.useRef(null),
        [, d] = (0, ej.H)({
            accept: eS,
            canDrop: () => i,
            hover: (e, l) => {
                if (!i) return;
                let n = l.getClientOffset();
                null != n && u(e.id, t, n);
            },
        }),
        c = r.useCallback(
            (e) => {
                ((s.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        r.useLayoutEffect(
            () => (
                d(s),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, n.jsx)("div", { ref: c, className: ex.fi, children: l })
    );
}
function eL(e) {
    let { column: t, dndName: l, onDropAtEnd: i } = e,
        u = r.useRef(null),
        [{ isOver: s }, d] = (0, ej.H)({
            accept: eS,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        r.useLayoutEffect(
            () => (
                d(u),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, n.jsx)("div", { ref: u, className: a()(ex.wr, { [ex.SX]: s }), "data-dnd-name": l })
    );
}
var eR = l(451395),
    eN = l(42499),
    eU = l(539888);
function eP(e) {
    let {
            guildId: t,
            widget: l,
            column: i,
            positionNumber: s,
            columnWidgetCount: d,
            flatIndex: c,
            leftColumnCount: o,
            isKeyboardMode: f,
            onReorder: g,
            onDrop: h,
            onDragEnd: m,
            onSlotElement: E,
            isSaving: _,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: x,
        } = e,
        I = r.useRef(null),
        C = r.useRef(null),
        v = (0, u.bG)([W.A], () => (l.requires_hydration ? W.A.getHydration(t, l.id) : void 0), [
            t,
            l.id,
            l.requires_hydration,
        ]),
        y = (0, eN.K)(t, l),
        { isDragging: S, dragSourcePosition: D } = (0, eR.gY)({
            dragRef: I,
            dropRef: C,
            index: c,
            listType: ey,
            itemType: ev,
            itemId: l.id,
            itemPreviewProps: { getSourceElement: () => C.current },
            onDrop: (e) => h(e.id),
            onReorder: g,
            onEnd: (e, t) => m(e.id, t.didDrop()),
            canDrag: !_,
        }),
        b = null == D ? null : D < o ? G.FT : G.yM,
        T = null != b && b !== i,
        j = f && null != D && (T || D > c),
        w = f && null != D && !T && D < c,
        L = r.useCallback(
            (e) => {
                ((C.current = e), E(l.id, e));
            },
            [E, l.id],
        );
    return (0, n.jsx)("div", {
        ref: L,
        className: a()(ex.NI, { [ex.cB]: S, [ex.ne]: j, [ex.O3]: w }),
        "data-dnd-name": p(i, s, d),
        children: (0, n.jsx)(eU.P, {
            guildId: t,
            widget: l,
            guildSpaceMode: "edit",
            hydration: v,
            lock: y,
            dragHandleRef: I,
            disabled: _,
            onRemove: () => A(l.id),
            onCommitConfig: x,
        }),
    });
}
var ek = l(590632);
function eM(e, t, l) {
    return eg.intl.formatToPlainString(e === G.yM ? ef.default.O9RvHQ : ef.default["+cSvS8"], {
        positionNumber: t,
        positionCount: l,
    });
}
function eF(e) {
    let { guildId: t, widgets: l } = e,
        i = r.useMemo(() => (0, G.Rl)(l), [l]),
        s = r.useMemo(
            () =>
                i.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ek.m[t];
                    }),
                ),
            [i],
        ),
        d = r.useMemo(() => [...s[G.FT], ...s[G.yM]], [s]),
        c = (0, eC.V)((e) =>
            e.isDragging() && e.getItemType() === eS
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        o = c.isDragging,
        f = c.isDragging ? c.widgetId : null,
        g = (0, eA.VU)(),
        h = (0, u.bG)([R], () => "saving" === R.getSaveStatus(t), [t]),
        m = o && !g,
        {
            effectiveDestination: E,
            gridDropSurfaceRef: p,
            handleColumnHover: A,
            handleDragEnd: x,
            handleDrop: I,
            placeholderHeight: C,
            registerColumnElement: v,
            registerSlotElement: y,
        } = (function (e) {
            let t,
                l,
                n,
                i,
                {
                    columns: a,
                    draftColumns: u,
                    draggedWidgetId: s,
                    isPointerDragging: d,
                    isKeyboardMode: c,
                    isSaving: o,
                    onMoveWidget: f,
                } = e,
                [g, h] = r.useState(null),
                m = r.useRef(null),
                E = r.useRef(null),
                _ = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef([null, null]),
                x = r.useRef(new Map()),
                [I, C] = r.useState(null),
                { stopAutoScroll: v, updatePointerY: y } =
                    ((t = r.useRef(null)),
                    (l = r.useRef(null)),
                    (n = r.useCallback(() => {
                        (null != t.current && cancelAnimationFrame(t.current), (t.current = null), (l.current = null));
                    }, [])),
                    (i = r.useCallback(
                        (e) => {
                            ((l.current = e),
                                null == t.current &&
                                    (t.current = requestAnimationFrame(function e() {
                                        t.current = null;
                                        let n = l.current;
                                        if (null == n) return;
                                        let r = (function () {
                                                let e = p.current?.parentElement;
                                                for (; null != e;) {
                                                    let t = window.getComputedStyle(e).overflowY;
                                                    if ("auto" === t || "scroll" === t) return e;
                                                    e = e.parentElement;
                                                }
                                                return null;
                                            })(),
                                            i = r?.getBoundingClientRect(),
                                            a = i?.top ?? 0,
                                            u = i?.bottom ?? window.innerHeight,
                                            s = n - a < 96 ? -1 : +(u - n < 96);
                                        if (0 === s) return;
                                        let d = Math.ceil(24 * (1 - (s < 0 ? n - a : u - n) / 96));
                                        (null != r ? r.scrollBy({ top: s * d }) : window.scrollBy({ top: s * d }),
                                            (t.current = requestAnimationFrame(e)));
                                    })));
                        },
                        [p],
                    )),
                    r.useEffect(() => n, [n]),
                    { stopAutoScroll: n, updatePointerY: i }),
                S = (() => {
                    if (null == s) return null;
                    for (let [e, t] of a.entries()) {
                        let l = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === s;
                        });
                        if (-1 !== l) return { column: e, index: l };
                    }
                    return null;
                })(),
                D = d && g?.widgetId === s && (null == S || g.column !== S.column || g.index !== S.index) ? g : null,
                b = r.useCallback((e, t) => {
                    A.current[e] = t;
                }, []),
                T = r.useCallback((e, t) => {
                    null == t ? x.current.delete(e) : x.current.set(e, t);
                }, []),
                j = r.useCallback((e, t, l) => {
                    if (e === t) return !0;
                    let n = A.current[G.FT]?.getBoundingClientRect(),
                        r = A.current[G.yM]?.getBoundingClientRect();
                    if (null == n || null == r || !(n.right <= r.left)) return !0;
                    let i = (n.right + r.left) / 2;
                    return t === G.yM ? l > i + 32 : l < i - 32;
                }, []),
                w = r.useCallback(() => {
                    _.current = null;
                    let e = E.current;
                    if (null == e) return;
                    let t = m.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        ((m.current = e), h(e));
                }, []),
                L = r.useCallback(
                    (e, t, l, n) => {
                        if (o) return;
                        y(n.y);
                        let r = m.current?.column ?? S?.column;
                        if (null == r || !j(r, t, n.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: l } = t;
                                return l !== e;
                            }).length ?? 0;
                        ((E.current = { widgetId: e, column: t, index: Math.max(0, Math.min(l, i)) }),
                            null == _.current && (_.current = requestAnimationFrame(w)));
                    },
                    [w, a, j, S?.column, o, y],
                ),
                R = r.useCallback(
                    (e, t, l) => {
                        let n =
                                a[t]?.filter((t) => {
                                    let { id: l } = t;
                                    return l !== e;
                                }) ?? [],
                            r = n.findIndex((e) => {
                                let { id: t } = e,
                                    n = x.current.get(t)?.getBoundingClientRect();
                                return null != n && l.y < n.top + n.height / 2;
                            });
                        L(e, t, -1 === r ? n.length : r, l);
                    },
                    [a, L],
                ),
                N = r.useCallback(
                    (e, t) => {
                        let l = G.FT,
                            n = 1 / 0;
                        (A.current.forEach((e, r) => {
                            if (null == e) return;
                            let i = e.getBoundingClientRect(),
                                a = t.x < i.left ? i.left - t.x : Math.max(0, t.x - i.right),
                                u = t.y < i.top ? i.top - t.y : Math.max(0, t.y - i.bottom),
                                s = a * a + u * u;
                            s < n && ((l = r), (n = s));
                        }),
                            R(e, l, t));
                    },
                    [R],
                ),
                [, U] = (0, ej.H)({
                    accept: eS,
                    canDrop: () => d,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!d || !t.isOver({ shallow: !0 })) return;
                        let l = t.getClientOffset();
                        null != l && N(e.id, l);
                    },
                });
            r.useLayoutEffect(
                () => (
                    U(p),
                    () => {
                        U(null);
                    }
                ),
                [U],
            );
            let P = r.useCallback((e) => {
                    let t = E.current;
                    if (t?.widgetId === e) return t;
                    let l = m.current;
                    return l?.widgetId === e ? l : null;
                }, []),
                k = r.useCallback(
                    (e, t) => {
                        let l =
                                u[t.column]?.filter((t) => {
                                    let { id: l } = t;
                                    return l !== e;
                                }) ?? [],
                            n = (a[t.column]?.filter((t) => {
                                let { id: l } = t;
                                return l !== e;
                            }) ?? [])[t.index];
                        if (null == n) return l.length;
                        let r = l.findIndex((e) => {
                            let { id: t } = e;
                            return t === n.id;
                        });
                        return -1 === r ? l.length : r;
                    },
                    [a, u],
                ),
                M = r.useCallback(() => {
                    (null != _.current && cancelAnimationFrame(_.current),
                        (_.current = null),
                        (E.current = null),
                        (m.current = null),
                        h(null),
                        C(null),
                        v());
                }, [v]),
                F = r.useCallback(() => d, [d]),
                B = r.useCallback(
                    (e, t) => {
                        let l = P(e);
                        (t &&
                            !c &&
                            null != l &&
                            (null == S || l.column !== S.column || l.index !== S.index) &&
                            f(e, l.column, k(e, l)),
                            M());
                    },
                    [M, S, P, k, c, f],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!d || null == s) return;
                    let e = x.current.get(s);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== I && C(t);
                }, [s, d, I]),
                r.useEffect(
                    () => () => {
                        null != _.current && cancelAnimationFrame(_.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: D,
                    gridDropSurfaceRef: p,
                    handleColumnHover: R,
                    handleDragEnd: B,
                    handleDrop: F,
                    placeholderHeight: I,
                    registerColumnElement: b,
                    registerSlotElement: T,
                }
            );
        })({
            columns: s,
            draftColumns: i,
            draggedWidgetId: f,
            isPointerDragging: m,
            isKeyboardMode: g,
            isSaving: h,
            onMoveWidget: r.useCallback(
                (e, l, n) => {
                    B(t, e, l, n);
                },
                [t],
            ),
        }),
        S = r.useCallback(
            (e, l) => {
                let n = d[e],
                    r = d[l];
                null != n && null != r && B(t, n.id, r.position.column, r.position.order);
            },
            [t, d],
        ),
        D = r.useCallback(
            (e, l) => {
                B(t, e, l, i[l]?.length ?? 0);
            },
            [i, t],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: p,
                className: ex.Z7,
                children: (0, n.jsx)("div", {
                    className: a()(ex.Vg, { [ex.nl]: m }),
                    children: s.map((e, l) => {
                        let r;
                        return (0, n.jsxs)(
                            ew,
                            {
                                column: l,
                                isPointerDragging: m,
                                onElement: v,
                                onDragHover: A,
                                children: [
                                    ((r =
                                        m && null != f
                                            ? e.filter((e) => {
                                                  let { id: t } = e;
                                                  return t !== f;
                                              })
                                            : e),
                                    (function (e, t, l) {
                                        let n = e.map((e) => ({ type: "widget", widget: e }));
                                        if (l?.column !== t) return n;
                                        let r = e.findIndex((e) => {
                                                let { id: t } = e;
                                                return t === l.widgetId;
                                            }),
                                            i = -1 !== r && l.index > r ? l.index + 1 : l.index;
                                        return (n.splice(Math.min(i, n.length), 0, { type: "placeholder" }), n);
                                    })(e, l, E).map((i) => {
                                        if ("placeholder" === i.type)
                                            return (0, n.jsx)(eI, { height: C }, "drag-placeholder");
                                        let { widget: a } = i,
                                            u = r.findIndex((e) => {
                                                let { id: t } = e;
                                                return t === a.id;
                                            }),
                                            c =
                                                -1 === u
                                                    ? e.findIndex((e) => {
                                                          let { id: t } = e;
                                                          return t === a.id;
                                                      })
                                                    : u,
                                            o = d.findIndex((e) => {
                                                let { id: t } = e;
                                                return t === a.id;
                                            });
                                        return (0, n.jsx)(
                                            eP,
                                            {
                                                guildId: t,
                                                widget: a,
                                                column: l,
                                                positionNumber: c + 1,
                                                columnWidgetCount: r.length,
                                                flatIndex: o,
                                                leftColumnCount: s[G.FT].length,
                                                isKeyboardMode: g,
                                                isSaving: h,
                                                getDropLabel: eM,
                                                onReorder: S,
                                                onDrop: I,
                                                onDragEnd: x,
                                                onSlotElement: y,
                                                onRemove: (e) => {
                                                    _.h.dispatch({
                                                        type: "GUILD_SPACE_EDIT_REMOVE_WIDGET",
                                                        guildId: t,
                                                        widgetId: e,
                                                    });
                                                },
                                                onCommitConfig: (e) => {
                                                    var l;
                                                    return (
                                                        (l = a.id),
                                                        void _.h.dispatch({
                                                            type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                                                            guildId: t,
                                                            widgetId: l,
                                                            config: e,
                                                        })
                                                    );
                                                },
                                            },
                                            a.id,
                                        );
                                    })),
                                    g &&
                                        o &&
                                        !h &&
                                        (0, n.jsx)(eL, {
                                            column: l,
                                            dndName: eg.intl.string(l === G.yM ? ef.default.fWef0G : ef.default.KcdDyT),
                                            onDropAtEnd: D,
                                        }),
                                    m && (0, n.jsx)("div", { className: ex.XP, "aria-hidden": !0 }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            }),
            (0, n.jsx)(eG, { isKeyboardMode: g }),
        ],
    });
}
var eB = l(529609),
    eO = l(408278),
    eH = l(241326),
    eW = l(297264),
    eK = l(22231),
    eq = l(654107),
    e$ = l(548118),
    eV = l(837011),
    ez = l(649640),
    eY = l(2553),
    eX = l(405810),
    eJ = l(498642),
    eQ = l(486020),
    eZ = l(488428),
    e0 = l(776231),
    e1 = l(986898);
function e2(e) {
    let { guildId: t, header: l, canEdit: i, isEditing: a, isSaving: d } = e,
        c = (0, u.bG)([h.A], () => h.A.getGuild(t), [t]),
        o = (0, u.bG)([eJ.A], () => eJ.A.getOnlineCount(t), [t]),
        f = (0, u.bG)([eJ.A], () => eJ.A.getMemberCount(t), [t]),
        g = l.custom_banner,
        m = (0, u.bG)([eV.A], () => eV.A.getProfile(t), [t]),
        E = (0, ez.b2)().hex(),
        p = null == c ? null : eQ.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        x = (0, eq.Ay)(p, E),
        C = (0, ez.n6)(m?.brandColorPrimary ?? x),
        v = r.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != l.custom_banner_hash
                        ? (function (e, t) {
                              let l = eQ.QB ? "webp" : "jpg",
                                  { CDN_HOST: n, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = I.Rsh.GUILD_SPACE_BANNER(e, t, l),
                                  a = null != n ? `https://${n}${i}` : location.protocol + r + i,
                                  u = { size: (0, e0.kr)(1200 * (0, e0.mZ)()) };
                              return ("jpg" === l && (u.quality = "lossless"), (a += `?${eZ.stringify(u)}`));
                          })(c.id, l.custom_banner_hash)
                        : eQ.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, l.custom_banner_hash],
        ),
        y = "string" == typeof g || (void 0 === g && null != l.custom_banner_hash);
    return null == c
        ? null
        : (0, n.jsxs)("div", {
              className: e1.wx,
              children: [
                  null != v
                      ? (0, n.jsx)("img", { className: e1.vK, src: v, alt: "" })
                      : (0, n.jsx)("div", { className: e1.vK, style: { background: C }, "aria-hidden": !0 }),
                  (0, n.jsx)("div", { className: e1.f5, "aria-hidden": !0 }),
                  a
                      ? (0, n.jsxs)("div", {
                            className: e1.j0,
                            children: [
                                (0, n.jsx)(eX.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: eg.intl.string(ef.default["EN+0gW"]),
                                    onChange: (e) => O(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eY.A)(0xa00000),
                                    disabled: d,
                                }),
                                y
                                    ? (0, n.jsx)(er.m, {
                                          text: eg.intl.string(ef.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(eO.K, {
                                              variant: "critical-secondary",
                                              icon: eH.TrashIcon,
                                              "aria-label": eg.intl.string(ef.default["CunK+J"]),
                                              onClick: () => O(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: e1.D_,
                      children: [
                          (0, n.jsx)(e$.Ay, {
                              className: e1.Kk,
                              guild: c,
                              size: e$.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, n.jsxs)("div", {
                              className: e1.pq,
                              children: [
                                  (0, n.jsx)(eW.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: e1.M1,
                                      children: [
                                          null != o
                                              ? (0, n.jsxs)("div", {
                                                    className: e1.dJ,
                                                    children: [
                                                        (0, n.jsx)("span", { className: e1.RS, "aria-hidden": !0 }),
                                                        (0, n.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(ef.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, n.jsxs)("div", {
                                                    className: e1.dJ,
                                                    children: [
                                                        (0, n.jsx)("span", { className: e1.kq, "aria-hidden": !0 }),
                                                        (0, n.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(ef.default["rp7bx+"], {
                                                                count: f,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, n.jsxs)("div", {
                                              className: e1.dJ,
                                              children: [
                                                  (0, n.jsx)(eu._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, n.jsx)(s.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eg.intl.format(ef.default.DwFqrb, {
                                                          count: c.premiumSubscriberCount,
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
                  i &&
                      !a &&
                      (0, n.jsx)(el.$, {
                          icon: eK.PencilIcon,
                          text: eg.intl.string(ef.default.KcOpCm),
                          size: "sm",
                          onClick: () => {
                              let e;
                              null != (e = A.A.getSpace(t)) &&
                                  _.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var e8 = l(312152);
function e6(e) {
    let t,
        { guildId: l } = e,
        i = r.useRef(null),
        [m, E, _] = (0, u.yK)([A.A], () => [A.A.getSpace(l), A.A.getFetchStatus(l), A.A.isInBackoff(l)], [l]);
    (r.useEffect(() => {
        let e = i.current !== l;
        ((i.current = l), y(l, e));
    }, [E, l]),
        r.useEffect(() => {
            (0, o.L4)(l, !1, { respectBackoff: !0 });
        }, [l]),
        (t = (0, X.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = Y.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === V.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, z._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let p = (0, u.bG)([h.A], () => h.A.getGuild(l), [l]),
        x = (0, $.mN)(p),
        I = (0, u.bG)([T.A], () => T.A.getFetchStatus(l), [l]);
    r.useEffect(() => {
        x && "idle" === I && b(l);
    }, [x, I, l]);
    let C = p?.guildSpaceSettings?.publish_status !== U.B.PUBLISHED,
        v = r.useCallback(() => D(l, { publish_status: U.B.PUBLISHED }), [l]),
        [G, j] = (0, u.yK)([R], () => [R.getDraft(l), R.getSaveStatus(l)], [l]),
        w = x && null != G,
        L = w ? G.widgets : m?.widgets,
        N = r.useMemo(() => L?.some((e) => e.locked) ?? !1, [L]);
    r.useEffect(() => {
        x && N && ((0, f.AK)(l), (0, f.Xd)(l));
    }, [x, l, N]);
    let P = (0, u.bG)(
        [g.A, T.A],
        () =>
            m?.widgets.some((e) => {
                let t = T.A.getWidget(l, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(l)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [l, m],
    );
    (r.useEffect(() => {
        P && S(l);
    }, [l, P]),
        r.useEffect(() => {
            x || null == G || "saving" === j || F(l);
        }, [x, G, j, l]));
    let k = r.useMemo(
            () =>
                (L ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [L],
        ),
        M = (0, u.yK)([W.A], () => W.A.getWidgetIdsToHydrate(l, k), [l, k]),
        B = r.useRef(null);
    return (r.useEffect(() => {
        if (B.current !== l && null != m) {
            ((B.current = l), q(l, k, !0));
            return;
        }
        q(l, M);
    }, [l, m, k, M]),
    null == m || null == L)
        ? (0, n.jsx)("div", {
              className: e8.MY,
              children: (0, n.jsx)("div", {
                  className: e8.F,
                  children:
                      "error" !== E || _
                          ? (0, n.jsx)(d.y, {
                                type: d.y.Type.SPINNING_CIRCLE,
                                "aria-label": eg.intl.string(eg.t.ZTNur7),
                            })
                          : (0, n.jsx)(s.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: eg.intl.string(eg.t.F8FvUy),
                            }),
              }),
          })
        : (0, n.jsxs)("div", {
              className: e8.MY,
              children: [
                  (0, n.jsx)(c.Gt, {
                      className: e8.XG,
                      children: (0, n.jsxs)("div", {
                          className: a()(e8.Qs, { [e8.Dy]: w }),
                          children: [
                              x && C ? (0, n.jsx)(J.A, { onPublish: v }) : null,
                              (0, n.jsx)(e2, {
                                  guildId: l,
                                  header: w ? G.header : m.header,
                                  isEditing: w,
                                  canEdit: x,
                                  isSaving: "saving" === j,
                              }),
                              w
                                  ? (0, n.jsx)(eF, { guildId: l, widgets: L })
                                  : (0, n.jsx)(eB.A, { canEdit: x, guildId: l, widgets: L }),
                          ],
                      }),
                  }),
                  (0, n.jsx)(ep, { guildId: l, isEditing: w }),
              ],
          });
}

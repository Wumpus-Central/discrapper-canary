(n.r(t), n.d(t, { default: () => e6 }));
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(17928),
    s = n(834730),
    c = n(289873),
    d = n(689175),
    o = n(250527),
    f = n(868652),
    g = n(645619),
    m = n(71393),
    h = n(562708),
    E = n(636537),
    _ = n(228366),
    p = n(499785),
    A = n(716357);
function C(e) {
    return !(e instanceof E.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var x = n(652215);
let I = 0;
async function y(e) {
    let t = I++;
    _.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: n } = await p.A.get({
            url: x.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: h.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: n });
    } catch (n) {
        _.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: C(n) });
    }
}
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = A.A.getFetchStatus(e),
        l = t && "error" === n && !A.A.isInBackoff(e);
    ("idle" === n || l) && (await y(e));
}
async function S(e) {
    await y(e);
}
async function D(e, t) {
    let { body: n } = await E.Bo.patch({ url: x.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return n;
}
async function b(e) {
    _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: x.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var T = n(960960),
    G = n(754674);
let w = {};
function j(e) {
    let t = w[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class L extends u.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return w[e]?.draft;
    }
    isEditing(e) {
        return null != w[e];
    }
    getSaveStatus(e) {
        return w[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return w[e]?.saveErrorMessage;
    }
}
let R = new L(_.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: n } = e;
        w[t] = { draft: { header: n.header, widgets: (0, G.W$)(n.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: n } = e,
            l = j(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, G.QD)(l.draft.widgets, n) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n, targetColumn: l, targetIndex: r } = e,
            i = j(t);
        if (null == i) return !1;
        let a = (0, G.Gm)(i.draft.widgets, n, l, r);
        if (null == a) return !1;
        i.draft = { ...i.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n } = e,
            l = j(t);
        if (null == l) return !1;
        let r = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== n;
        });
        if (r.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, G.W$)(r) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: n, config: l } = e,
            r = j(t);
        if (null == r) return !1;
        let i = r.draft.widgets.map((e) => (e.id === n ? { ...e, config: l } : e));
        r.draft = { ...r.draft, widgets: i };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: n } = e,
            l = j(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: n } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: n } = e,
            l = w[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = n), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: n, errorMessage: l } = e,
            r = w[t];
        if (r?.activeSaveRequestId !== n) return !1;
        (delete r.activeSaveRequestId, (r.saveStatus = "error"), (r.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == w[t]) return !1;
        delete w[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == w[t]) return !1;
        delete w[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n || null == w[t]) return !1;
        delete w[t];
    },
    LOGOUT: function () {
        w = {};
    },
});
var N = n(913122),
    U = n(593673);
let P = "draft:",
    k = 0,
    M = 0;
function F(e) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function B(e, t, n, l) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: n, targetIndex: l });
}
function O(e, t) {
    _.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function H(e) {
    let t = R.getDraft(e);
    if (null == t || "saving" === R.getSaveStatus(e)) return;
    let n = {};
    void 0 !== t.header.custom_banner && (n.custom_banner = t.header.custom_banner);
    let l = {
            header: n,
            widgets: t.widgets.map((e) => {
                let { id: t, type: n, position: l, config: r } = e,
                    i = {
                        type: n,
                        position: l,
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
        let { body: t } = await E.Bo.put({ url: x.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (i) {
        let n = (function (e, t) {
                if (e instanceof E.oh)
                    for (let [n, l] of Object.entries(
                        new N.LG({ status: e.status, body: e.body }).getAllFieldErrors(),
                    )) {
                        let [e, r] = n.split(".");
                        if ("widgets" !== e) continue;
                        let i = Number(r),
                            a = Number.isInteger(i) ? t[i] : void 0,
                            u = l[0]?.message;
                        if (null != a && null != u) return { type: a.type, message: u };
                    }
            })(i, t.widgets),
            l = n?.message;
        if (null != n) {
            let t = T.A.getWidget(e, n.type)?.name;
            null != t && (l = `${t}: ${n.message}`);
        }
        _.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: r, errorMessage: l });
    }
}
var W = n(363957);
let K = 0;
async function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = W.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = K++;
    _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await E.Bo.get({
            url: x.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: C(t) });
    }
}
var q = n(470452),
    z = n(344351),
    V = n(795816),
    Y = n(933958),
    X = n(44167),
    J = n(872188),
    Q = n(868285),
    Z = n(36525),
    ee = n(871682),
    et = n(331322),
    en = n(821609),
    el = n(499373),
    er = n(866665),
    ei = n(189213),
    ea = n(939249),
    eu = n(104510),
    es = n(661531),
    ec = n(245604),
    ed = n(192308),
    eo = n(775602),
    ef = n(61567),
    eg = n(375708),
    em = n(517228);
function eh(e) {
    let { widget: t, onClick: n } = e,
        r = (0, u.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: a } = t.assets,
        c = (r ? null : a) ?? i,
        d = t.boost_price;
    return (0, l.jsxs)(ea.D, {
        className: em.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: em.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: em.YI, src: c, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: em.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(eu._, {
                                size: "sm",
                                color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: em.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: em.Ti, children: (0, l.jsx)("div", { className: em.dK }) }),
                            (0, l.jsxs)(et.B, {
                                className: em.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ec.U, {}),
                                    (0, l.jsx)(s.E, {
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
            (0, l.jsxs)(et.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != d && d > 0
                        ? (0, l.jsxs)(et.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(eu._, { size: "sm", color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eg.intl.format(ef.default["8wD0Un"], { boostPrice: d }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(s.E, {
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
    let { guildId: t, ...n } = e,
        i = (0, u.yK)(
            [T.A, R],
            () => {
                let e = R.getDraft(t)?.widgets ?? [];
                var n = T.A.getWidgets(t) ?? [];
                let l = new Map();
                for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
                return n.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            b(t);
        }, [t]),
        (0, l.jsx)(ei.Modal, {
            title: eg.intl.string(ef.default.L8Xfoo),
            subtitle: eg.intl.string(ef.default["N8nJ+T"]),
            actions: [],
            ...n,
            children: (0, l.jsx)("div", {
                className: em.Vg,
                children: i.map((e) =>
                    (0, l.jsx)(
                        eh,
                        {
                            widget: e,
                            onClick: () => {
                                var l, r, i;
                                ((l = e.type),
                                    (r = e.name),
                                    (i = e.locked),
                                    _.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, n) {
                                            let l = {
                                                id: `${P}${k++}`,
                                                position: { column: G.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: n,
                                            };
                                            switch (e) {
                                                case U.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case U.a.LEADERBOARD:
                                                case U.a.WHITEBOARD:
                                                case U.a.POPULAR_MUSIC:
                                                case U.a.LIVE_ACTIVITY:
                                                    return { ...l, type: e, config: { type: e } };
                                            }
                                        })(l, r, i),
                                    }),
                                    n.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
var e_ = n(992303);
function ep(e) {
    let { guildId: t, isEditing: n } = e,
        i = (0, u.bG)([R], () => R.getSaveStatus(t), [t]),
        a = (0, u.bG)([R], () => R.getDraft(t)?.widgets.length ?? 0, [t]),
        c = (0, u.bG)([R], () => R.getSaveErrorMessage(t), [t]),
        d = "saving" === i,
        o = c ?? eg.intl.string(ef.default.HmFYc5),
        f = r.useCallback(() => {
            H(t);
        }, [t]),
        g = r.useCallback(() => {
            F(t);
        }, [t]);
    return (0, l.jsx)(Q.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(ee.F, {
                className: e_.K,
                children: (0, l.jsx)(Z.A, {
                    submitting: d,
                    disabled: d,
                    onSave: f,
                    onReset: d ? void 0 : g,
                    message: (0, l.jsxs)(et.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(en.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: el.T,
                                text: eg.intl.string(ef.default.L8Xfoo),
                                disabled: d,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(eE, { guildId: t, ...e })),
                                        void (0, ed.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === i
                                ? (0, l.jsx)(er.m, {
                                      text: o,
                                      children: (0, l.jsx)(s.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: o,
                                      }),
                                  })
                                : (0, l.jsx)(s.E, {
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
var eA = n(425763),
    eC = n(294918);
function ex(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: eC.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eI = n(686246);
let ey = "GUILD_SPACE_WIDGET",
    ev = "GUILD_SPACE_WIDGETS",
    eS = `${ey}_${ev}`;
var eD = n(225995),
    eb = n(333007);
let eT = "canvas, iframe, video";
function eG(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: u } = (0, eI.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eS,
            item: e.getItem(),
        })),
        s = (0, eD.u)(),
        c = r.useRef(null),
        d = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = c.current;
        if (!a || t || null == e) return;
        let n = s.getMonitor();
        function l() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (l(), n.subscribeToOffsetChange(l));
    }, [s, a, t]),
    r.useLayoutEffect(() => {
        let e = d.current,
            n = c.current,
            l = a ? u?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let r = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let i = l.querySelectorAll(eT);
        return (
            r.querySelectorAll(eT).forEach((e, t) => {
                let n = document.createElement("div"),
                    l = i.item(t),
                    r = l?.getBoundingClientRect(),
                    a = l?.parentElement?.getBoundingClientRect();
                ((n.className = e.className),
                    n.setAttribute("aria-hidden", "true"),
                    null != r &&
                        ((n.style.width = null != a && 0.5 > Math.abs(r.width - a.width) ? "100%" : `${r.width}px`),
                        (n.style.height = null != a && 0.5 > Math.abs(r.height - a.height) ? "100%" : `${r.height}px`)),
                    e.replaceWith(n));
            }),
            r.classList.remove(eC.cB, eC.Ni),
            r.removeAttribute("data-dnd-name"),
            r.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            r.setAttribute("aria-hidden", "true"),
            (r.inert = !0),
            e.replaceChildren(r),
            () => e.replaceChildren()
        );
    }, [a, t, u]),
    r.useLayoutEffect(() => {
        let e = c.current;
        if (!a || t || null == e || null == n) return;
        let l = i(n);
        if (null == l) return;
        function r() {
            e.style.width = `${l.clientWidth}px`;
        }
        r();
        let u = new ResizeObserver(r);
        return (u.observe(l), () => u.disconnect());
    }, [i, a, t, n]),
    !a || t || null == u)
        ? null
        : (0, eb.createPortal)(
              (0, l.jsx)("div", {
                  ref: c,
                  className: eC.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: d, className: eC.w4 }),
              }),
              document.body,
          );
}
var ew = n(651300);
function ej(e) {
    let { column: t, children: n, isPointerDragging: i, onElement: a, onDragHover: u } = e,
        s = r.useRef(null),
        [, c] = (0, ew.H)({
            accept: eS,
            canDrop: () => i,
            hover: (e, n) => {
                if (!i) return;
                let l = n.getClientOffset();
                null != l && u(e.id, t, l);
            },
        }),
        d = r.useCallback(
            (e) => {
                ((s.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        r.useLayoutEffect(
            () => (
                c(s),
                () => {
                    c(null);
                }
            ),
            [c],
        ),
        (0, l.jsx)("div", { ref: d, className: eC.fi, children: n })
    );
}
function eL(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        u = r.useRef(null),
        [{ isOver: s }, c] = (0, ew.H)({
            accept: eS,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        r.useLayoutEffect(
            () => (
                c(u),
                () => {
                    c(null);
                }
            ),
            [c],
        ),
        (0, l.jsx)("div", { ref: u, className: a()(eC.wr, { [eC.SX]: s }), "data-dnd-name": n })
    );
}
var eR = n(451395),
    eN = n(42499),
    eU = n(539888);
function eP(e) {
    let {
            guildId: t,
            widget: n,
            column: i,
            positionNumber: s,
            columnWidgetCount: c,
            flatIndex: d,
            leftColumnCount: o,
            isKeyboardMode: f,
            onReorder: g,
            onDrop: m,
            onDragEnd: h,
            onSlotElement: E,
            isSaving: _,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: C,
            isSettling: x,
            onMotionEnd: I,
        } = e,
        y = r.useRef(null),
        v = r.useRef(null),
        S = (0, u.bG)([W.A], () => (n.requires_hydration ? W.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        D = (0, eN.K)(t, n),
        { isDragging: b, dragSourcePosition: T } = (0, eR.gY)({
            dragRef: y,
            dropRef: v,
            index: d,
            listType: ev,
            itemType: ey,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => v.current },
            onDrop: (e) => m(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !_,
        }),
        w = null == T ? null : T < o ? G.FT : G.yM,
        j = null != w && w !== i,
        L = f && null != T && (j || T > d),
        R = f && null != T && !j && T < d,
        N = r.useCallback(
            (e) => {
                ((v.current = e), E(n.id, e));
            },
            [E, n.id],
        );
    return (0, l.jsx)("div", {
        ref: N,
        className: a()(eC.NI, { [eC.cB]: b, [eC.Ni]: x, [eC.ne]: L, [eC.O3]: R }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && x && I(n.id);
        },
        "data-dnd-name": p(i, s, c),
        children: (0, l.jsx)(eU.P, {
            guildId: t,
            widget: n,
            guildSpaceMode: "edit",
            hydration: S,
            lock: D,
            dragHandleRef: y,
            disabled: _,
            onRemove: () => A(n.id),
            onCommitConfig: C,
        }),
    });
}
var ek = n(590632);
function eM(e, t, n) {
    return eg.intl.formatToPlainString(e === G.yM ? ef.default.O9RvHQ : ef.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eF(e) {
    let { guildId: t, widgets: n } = e,
        i = r.useMemo(() => (0, G.Rl)(n), [n]),
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
        c = r.useMemo(() => [...s[G.FT], ...s[G.yM]], [s]),
        d = (0, eI.V)((e) =>
            e.isDragging() && e.getItemType() === eS
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        o = d.isDragging,
        f = d.isDragging ? d.widgetId : null,
        g = (0, eA.VU)(),
        m = (0, u.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        h = (0, u.bG)([R], () => "saving" === R.getSaveStatus(t), [t]),
        E = o && !g,
        [p, A] = r.useState(null);
    r.useEffect(() => {
        m && A(null);
    }, [m]);
    let C = r.useCallback(
            (e, n, l) => {
                (B(t, e, n, l), m || A(e));
            },
            [t, m],
        ),
        {
            effectiveDestination: x,
            draggedLocation: I,
            getColumnElement: y,
            gridDropSurfaceRef: v,
            handleColumnHover: S,
            handleDragEnd: D,
            handleDrop: b,
            placeholderHeight: T,
            registerColumnElement: w,
            registerSlotElement: j,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    columns: a,
                    draftColumns: u,
                    draggedWidgetId: s,
                    isPointerDragging: c,
                    isKeyboardMode: d,
                    isSaving: o,
                    reduceMotion: f,
                    onMoveWidget: g,
                } = e,
                [m, h] = r.useState(null),
                E = r.useRef(null),
                _ = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef(null),
                C = r.useRef([null, null]),
                x = r.useRef(new Map()),
                [I, y] = r.useState(null),
                { stopAutoScroll: v, updatePointerY: S } =
                    ((t = r.useRef(null)),
                    (n = r.useRef(null)),
                    (l = r.useCallback(() => {
                        (null != t.current && cancelAnimationFrame(t.current), (t.current = null), (n.current = null));
                    }, [])),
                    (i = r.useCallback(
                        (e) => {
                            ((n.current = e),
                                null == t.current &&
                                    (t.current = requestAnimationFrame(function e() {
                                        t.current = null;
                                        let l = n.current;
                                        if (null == l) return;
                                        let r = (function () {
                                                let e = A.current?.parentElement;
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
                                            s = l - a < 96 ? -1 : +(u - l < 96);
                                        if (0 === s) return;
                                        let c = Math.ceil(24 * (1 - (s < 0 ? l - a : u - l) / 96));
                                        (null != r ? r.scrollBy({ top: s * c }) : window.scrollBy({ top: s * c }),
                                            (t.current = requestAnimationFrame(e)));
                                    })));
                        },
                        [A],
                    )),
                    r.useEffect(() => l, [l]),
                    { stopAutoScroll: l, updatePointerY: i }),
                { clearSlotMotion: D, snapshotSlotRects: b } = (function (e) {
                    let {
                            columns: t,
                            isPointerDragging: n,
                            pendingDestination: l,
                            reduceMotion: i,
                            slotElementsRef: a,
                        } = e,
                        u = r.useRef(new Map()),
                        s = r.useRef(new Map()),
                        c = r.useCallback(() => {
                            (s.current.forEach((e) => e.cancel()), s.current.clear());
                        }, []),
                        d = r.useCallback(() => {
                            u.current.clear();
                        }, []),
                        o = r.useCallback(
                            (e) => {
                                n &&
                                    !i &&
                                    (u.current.clear(),
                                    a.current.forEach((t, n) => {
                                        n !== e && u.current.set(n, t.getBoundingClientRect());
                                    }));
                            },
                            [n, i, a],
                        );
                    return (
                        r.useLayoutEffect(() => {
                            if (!n || i) {
                                (u.current.clear(), c());
                                return;
                            }
                            let e = u.current;
                            0 !== e.size &&
                                (a.current.forEach((t, n) => {
                                    (s.current.get(n)?.cancel(), s.current.delete(n));
                                    let l = e.get(n);
                                    if (null == l) return;
                                    let r = t.getBoundingClientRect(),
                                        i = l.left - r.left,
                                        a = l.top - r.top;
                                    if (1 > Math.abs(i) && 1 > Math.abs(a)) return;
                                    let u = t.animate(
                                        [{ transform: `translate(${i}px, ${a}px)` }, { transform: "translate(0, 0)" }],
                                        { duration: 140, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                                    );
                                    function c() {
                                        s.current.get(n) === u && s.current.delete(n);
                                    }
                                    (s.current.set(n, u), (u.onfinish = c), (u.oncancel = c));
                                }),
                                e.clear());
                        }, [c, t, n, l, i, a]),
                        r.useEffect(() => c, [c]),
                        { clearSlotMotion: d, snapshotSlotRects: o }
                    );
                })({ columns: a, isPointerDragging: c, pendingDestination: m, reduceMotion: f, slotElementsRef: x }),
                T = (() => {
                    if (null == s) return null;
                    for (let [e, t] of a.entries()) {
                        let n = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === s;
                        });
                        if (-1 !== n) return { column: e, index: n };
                    }
                    return null;
                })(),
                w = c && m?.widgetId === s && (null == T || m.column !== T.column || m.index !== T.index) ? m : null,
                j = r.useCallback((e, t) => {
                    C.current[e] = t;
                }, []),
                L = r.useCallback((e) => C.current[e] ?? null, []),
                R = r.useCallback((e, t) => {
                    null == t ? x.current.delete(e) : x.current.set(e, t);
                }, []),
                N = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = C.current[G.FT]?.getBoundingClientRect(),
                        r = C.current[G.yM]?.getBoundingClientRect();
                    if (null == l || null == r || !(l.right <= r.left)) return !0;
                    let i = (l.right + r.left) / 2;
                    return t === G.yM ? n > i + 32 : n < i - 32;
                }, []),
                U = r.useCallback(() => {
                    p.current = null;
                    let e = _.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (b(e.widgetId), (E.current = e), h(e));
                }, [b]),
                P = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        S(l.y);
                        let r = E.current?.column ?? T?.column;
                        if (null == r || !N(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((_.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == p.current && (p.current = requestAnimationFrame(U)));
                    },
                    [U, a, N, T?.column, o, S],
                ),
                k = r.useCallback(
                    (e, t, n) => {
                        let l =
                                a[t]?.filter((t) => {
                                    let { id: n } = t;
                                    return n !== e;
                                }) ?? [],
                            r = l.findIndex((e) => {
                                let { id: t } = e,
                                    l = x.current.get(t)?.getBoundingClientRect();
                                return null != l && n.y < l.top + l.height / 2;
                            });
                        P(e, t, -1 === r ? l.length : r, n);
                    },
                    [a, P],
                ),
                M = r.useCallback(
                    (e, t) => {
                        let n = G.FT,
                            l = 1 / 0;
                        (C.current.forEach((e, r) => {
                            if (null == e) return;
                            let i = e.getBoundingClientRect(),
                                a = t.x < i.left ? i.left - t.x : Math.max(0, t.x - i.right),
                                u = t.y < i.top ? i.top - t.y : Math.max(0, t.y - i.bottom),
                                s = a * a + u * u;
                            s < l && ((n = r), (l = s));
                        }),
                            k(e, n, t));
                    },
                    [k],
                ),
                [, F] = (0, ew.H)({
                    accept: eS,
                    canDrop: () => c,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!c || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && M(e.id, n);
                    },
                });
            r.useLayoutEffect(
                () => (
                    F(A),
                    () => {
                        F(null);
                    }
                ),
                [F],
            );
            let B = r.useCallback((e) => {
                    let t = _.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                O = r.useCallback(
                    (e, t) => {
                        let n =
                                u[t.column]?.filter((t) => {
                                    let { id: n } = t;
                                    return n !== e;
                                }) ?? [],
                            l = (a[t.column]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }) ?? [])[t.index];
                        if (null == l) return n.length;
                        let r = n.findIndex((e) => {
                            let { id: t } = e;
                            return t === l.id;
                        });
                        return -1 === r ? n.length : r;
                    },
                    [a, u],
                ),
                H = r.useCallback(() => {
                    (null != p.current && cancelAnimationFrame(p.current),
                        (p.current = null),
                        (_.current = null),
                        (E.current = null),
                        h(null),
                        y(null),
                        D(),
                        v());
                }, [D, v]),
                W = r.useCallback(() => c, [c]),
                K = r.useCallback(
                    (e, t) => {
                        let n = B(e);
                        (t &&
                            !d &&
                            null != n &&
                            (null == T || n.column !== T.column || n.index !== T.index) &&
                            g(e, n.column, O(e, n)),
                            H());
                    },
                    [H, T, B, O, d, g],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!c || null == s) return;
                    let e = x.current.get(s);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== I && y(t);
                }, [s, c, I]),
                r.useEffect(
                    () => () => {
                        null != p.current && cancelAnimationFrame(p.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: w,
                    draggedLocation: T,
                    getColumnElement: L,
                    gridDropSurfaceRef: A,
                    handleColumnHover: k,
                    handleDragEnd: K,
                    handleDrop: W,
                    placeholderHeight: I,
                    registerColumnElement: j,
                    registerSlotElement: R,
                }
            );
        })({
            columns: s,
            draftColumns: i,
            draggedWidgetId: f,
            isPointerDragging: E,
            isKeyboardMode: g,
            isSaving: h,
            reduceMotion: m,
            onMoveWidget: C,
        }),
        L = r.useCallback((e) => {
            A((t) => (t === e ? null : t));
        }, []),
        N = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && B(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        U = r.useCallback(
            (e, n) => {
                B(t, e, n, i[n]?.length ?? 0);
            },
            [i, t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: v,
                className: eC.Z7,
                children: (0, l.jsx)("div", {
                    className: a()(eC.Vg, { [eC.nl]: E }),
                    children: s.map((e, n) => {
                        let r;
                        return (0, l.jsxs)(
                            ej,
                            {
                                column: n,
                                isPointerDragging: E,
                                onElement: w,
                                onDragHover: S,
                                children: [
                                    ((r =
                                        E && null != f
                                            ? e.filter((e) => {
                                                  let { id: t } = e;
                                                  return t !== f;
                                              })
                                            : e),
                                    (function (e, t, n) {
                                        let l = e.map((e) => ({ type: "widget", widget: e }));
                                        if (n?.column !== t) return l;
                                        let r = e.findIndex((e) => {
                                                let { id: t } = e;
                                                return t === n.widgetId;
                                            }),
                                            i = -1 !== r && n.index > r ? n.index + 1 : n.index;
                                        return (l.splice(Math.min(i, l.length), 0, { type: "placeholder" }), l);
                                    })(e, n, x).map((i) => {
                                        if ("placeholder" === i.type)
                                            return (0, l.jsx)(ex, { height: T }, "drag-placeholder");
                                        let { widget: a } = i,
                                            u = r.findIndex((e) => {
                                                let { id: t } = e;
                                                return t === a.id;
                                            }),
                                            d =
                                                -1 === u
                                                    ? e.findIndex((e) => {
                                                          let { id: t } = e;
                                                          return t === a.id;
                                                      })
                                                    : u,
                                            o = c.findIndex((e) => {
                                                let { id: t } = e;
                                                return t === a.id;
                                            });
                                        return (0, l.jsx)(
                                            eP,
                                            {
                                                guildId: t,
                                                widget: a,
                                                column: n,
                                                positionNumber: d + 1,
                                                columnWidgetCount: r.length,
                                                flatIndex: o,
                                                leftColumnCount: s[G.FT].length,
                                                isKeyboardMode: g,
                                                isSaving: h,
                                                getDropLabel: eM,
                                                onReorder: N,
                                                onDrop: b,
                                                onDragEnd: D,
                                                onSlotElement: j,
                                                isSettling: p === a.id && !g && !m,
                                                onMotionEnd: L,
                                                onRemove: (e) => {
                                                    _.h.dispatch({
                                                        type: "GUILD_SPACE_EDIT_REMOVE_WIDGET",
                                                        guildId: t,
                                                        widgetId: e,
                                                    });
                                                },
                                                onCommitConfig: (e) => {
                                                    var n;
                                                    return (
                                                        (n = a.id),
                                                        void _.h.dispatch({
                                                            type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                                                            guildId: t,
                                                            widgetId: n,
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
                                        (0, l.jsx)(eL, {
                                            column: n,
                                            dndName: eg.intl.string(n === G.yM ? ef.default.fWef0G : ef.default.KcdDyT),
                                            onDropAtEnd: U,
                                        }),
                                    E && (0, l.jsx)("div", { className: eC.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(eG, { isKeyboardMode: g, targetColumn: x?.column ?? I?.column ?? null, getColumnElement: y }),
        ],
    });
}
var eB = n(529609),
    eO = n(408278),
    eH = n(241326),
    eW = n(297264),
    eK = n(22231),
    e$ = n(654107),
    eq = n(548118),
    ez = n(837011),
    eV = n(649640),
    eY = n(2553),
    eX = n(405810),
    eJ = n(498642),
    eQ = n(486020),
    eZ = n(488428),
    e0 = n(776231),
    e1 = n(986898);
function e2(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: a, isSaving: c } = e,
        d = (0, u.bG)([m.A], () => m.A.getGuild(t), [t]),
        o = (0, u.bG)([eJ.A], () => eJ.A.getOnlineCount(t), [t]),
        f = (0, u.bG)([eJ.A], () => eJ.A.getMemberCount(t), [t]),
        g = n.custom_banner,
        h = (0, u.bG)([ez.A], () => ez.A.getProfile(t), [t]),
        E = (0, eV.b2)().hex(),
        p = null == d ? null : eQ.Ay.getGuildIconURL({ id: d.id, icon: d.icon, size: 64 }),
        C = (0, e$.Ay)(p, E),
        I = (0, eV.n6)(h?.brandColorPrimary ?? C),
        y = r.useMemo(
            () =>
                null == d
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eQ.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = x.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  u = { size: (0, e0.kr)(1200 * (0, e0.mZ)()) };
                              return ("jpg" === n && (u.quality = "lossless"), (a += `?${eZ.stringify(u)}`));
                          })(d.id, n.custom_banner_hash)
                        : eQ.Ay.getGuildBannerURL({ id: d.id, banner: d.banner }),
            [d, g, n.custom_banner_hash],
        ),
        v = "string" == typeof g || (void 0 === g && null != n.custom_banner_hash);
    return null == d
        ? null
        : (0, l.jsxs)("div", {
              className: e1.wx,
              children: [
                  null != y
                      ? (0, l.jsx)("img", { className: e1.vK, src: y, alt: "" })
                      : (0, l.jsx)("div", { className: e1.vK, style: { background: I }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e1.f5, "aria-hidden": !0 }),
                  a
                      ? (0, l.jsxs)("div", {
                            className: e1.j0,
                            children: [
                                (0, l.jsx)(eX.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: eg.intl.string(ef.default["EN+0gW"]),
                                    onChange: (e) => O(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eY.A)(0xa00000),
                                    disabled: c,
                                }),
                                v
                                    ? (0, l.jsx)(er.m, {
                                          text: eg.intl.string(ef.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eO.K, {
                                              variant: "critical-secondary",
                                              icon: eH.TrashIcon,
                                              "aria-label": eg.intl.string(ef.default["CunK+J"]),
                                              onClick: () => O(t, null),
                                              disabled: c,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e1.D_,
                      children: [
                          (0, l.jsx)(eq.Ay, {
                              className: e1.Kk,
                              guild: d,
                              size: eq.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e1.pq,
                              children: [
                                  (0, l.jsx)(eW.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: d.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e1.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: e1.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e1.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(ef.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: e1.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e1.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(ef.default["rp7bx+"], {
                                                                count: f,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e1.dJ,
                                              children: [
                                                  (0, l.jsx)(eu._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(s.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eg.intl.format(ef.default.DwFqrb, {
                                                          count: d.premiumSubscriberCount,
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
                      (0, l.jsx)(en.$, {
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
var e8 = n(312152);
function e6(e) {
    let t,
        { guildId: n } = e,
        i = r.useRef(null),
        [h, E, _] = (0, u.yK)([A.A], () => [A.A.getSpace(n), A.A.getFetchStatus(n), A.A.isInBackoff(n)], [n]);
    (r.useEffect(() => {
        let e = i.current !== n;
        ((i.current = n), v(n, e));
    }, [E, n]),
        r.useEffect(() => {
            (0, o.L4)(n, !1, { respectBackoff: !0 });
        }, [n]),
        (t = (0, X.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = Y.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === z.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, V._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let p = (0, u.bG)([m.A], () => m.A.getGuild(n), [n]),
        C = (0, q.mN)(p),
        x = (0, u.bG)([T.A], () => T.A.getFetchStatus(n), [n]);
    r.useEffect(() => {
        C && "idle" === x && b(n);
    }, [C, x, n]);
    let I = p?.guildSpaceSettings?.publish_status !== U.B.PUBLISHED,
        y = r.useCallback(() => D(n, { publish_status: U.B.PUBLISHED }), [n]),
        [G, w] = (0, u.yK)([R], () => [R.getDraft(n), R.getSaveStatus(n)], [n]),
        j = C && null != G,
        L = j ? G.widgets : h?.widgets,
        N = r.useMemo(() => L?.some((e) => e.locked) ?? !1, [L]);
    r.useEffect(() => {
        C && N && ((0, f.AK)(n), (0, f.Xd)(n));
    }, [C, n, N]);
    let P = (0, u.bG)(
        [g.A, T.A],
        () =>
            h?.widgets.some((e) => {
                let t = T.A.getWidget(n, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(n)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [n, h],
    );
    (r.useEffect(() => {
        P && S(n);
    }, [n, P]),
        r.useEffect(() => {
            C || null == G || "saving" === w || F(n);
        }, [C, G, w, n]));
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
        M = (0, u.yK)([W.A], () => W.A.getWidgetIdsToHydrate(n, k), [n, k]),
        B = r.useRef(null);
    return (r.useEffect(() => {
        if (B.current !== n && null != h) {
            ((B.current = n), $(n, k, !0));
            return;
        }
        $(n, M);
    }, [n, h, k, M]),
    null == h || null == L)
        ? (0, l.jsx)("div", {
              className: e8.MY,
              children: (0, l.jsx)("div", {
                  className: e8.F,
                  children:
                      "error" !== E || _
                          ? (0, l.jsx)(c.y, {
                                type: c.y.Type.SPINNING_CIRCLE,
                                "aria-label": eg.intl.string(eg.t.ZTNur7),
                            })
                          : (0, l.jsx)(s.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: eg.intl.string(eg.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: e8.MY,
              children: [
                  (0, l.jsx)(d.Gt, {
                      className: e8.XG,
                      children: (0, l.jsxs)("div", {
                          className: a()(e8.Qs, { [e8.Dy]: j }),
                          children: [
                              C && I ? (0, l.jsx)(J.A, { onPublish: y }) : null,
                              (0, l.jsx)(e2, {
                                  guildId: n,
                                  header: j ? G.header : h.header,
                                  isEditing: j,
                                  canEdit: C,
                                  isSaving: "saving" === w,
                              }),
                              j
                                  ? (0, l.jsx)(eF, { guildId: n, widgets: L })
                                  : (0, l.jsx)(eB.A, { canEdit: C, guildId: n, widgets: L }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(ep, { guildId: n, isEditing: j }),
              ],
          });
}

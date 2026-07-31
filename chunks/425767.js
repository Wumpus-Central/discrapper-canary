r.r(e), r.d(e, { default: () => Q });
var i = r(477900),
    a = r(582128),
    n = r(17928),
    l = r(834730),
    s = r(289873),
    c = r(689175),
    u = r(71393),
    d = r(562708),
    E = r(228366),
    f = r(499785),
    o = r(158390),
    _ = r(927813);
let S = _.A.Millis.SECOND,
    h = _.A.Millis.MINUTE,
    A = {};
class I extends n.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(t) {
        return A[t]?.space;
    }
    getFetchStatus(t) {
        return A[t]?.fetchStatus ?? "idle";
    }
    isInBackoff(t) {
        return A[t]?.backoff?.pending === !0;
    }
}
let g = new I(E.h, {
    GUILD_SPACE_FETCH_START: function (t) {
        let e,
            { guildId: r, requestId: i } = t,
            a = (null == (e = A[r]) && ((e = { fetchStatus: "idle" }), (A[r] = e)), e);
        (a.fetchStatus = "loading"), (a.activeFetchRequestId = i);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (t) {
        let { guildId: e, requestId: r, space: i } = t,
            a = A[e];
        if (a?.activeFetchRequestId !== r) return !1;
        delete a.activeFetchRequestId, (a.space = i), (a.fetchStatus = "success"), a.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (t) {
        let { guildId: e, requestId: r, retryable: i } = t,
            a = A[e];
        if (a?.activeFetchRequestId !== r) return !1;
        delete a.activeFetchRequestId,
            (a.fetchStatus = "error"),
            i &&
                (null == a.backoff && (a.backoff = new o.A(S, h, !0)),
                a.backoff.pending ||
                    a.backoff.fail(() => E.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: e })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (t) {
        let { guildId: e } = t,
            r = A[e];
        if (r?.fetchStatus !== "error") return !1;
        r.backoff?.cancel(), (r.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (t) {
        let { guildId: e, space: r } = t,
            i = A[e];
        if (null == i) return !1;
        delete i.activeFetchRequestId, (i.space = r), (i.fetchStatus = "success"), i.backoff?.succeed();
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: r },
        } = t;
        if (r) return !1;
        A[e]?.backoff?.cancel(), delete A[e];
    },
    LOGOUT: function () {
        Object.values(A).forEach((t) => t?.backoff?.cancel()), (A = {});
    },
});
var C = r(562465);
function D(t) {
    return !(t instanceof C.oh) || t.status < 400 || t.status >= 500 || 429 === t.status;
}
var T = r(652215);
let p = 0;
async function v(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = g.getFetchStatus(t),
        i = e && "error" === r && !g.isInBackoff(t);
    if ("idle" !== r && !i) return;
    let a = p++;
    E.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: a });
    try {
        let { body: e } = await f.A.get({
            url: T.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: d.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: a, space: e });
    } catch (e) {
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: a, retryable: D(e) });
    }
}
var G = r(626584),
    U = r(754674);
let L = {};
function y(t) {
    let e = L[t];
    return e?.saveStatus === "saving" ? void 0 : e;
}
class R extends n.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(t) {
        return L[t]?.draft;
    }
    isEditing(t) {
        return null != L[t];
    }
    getSaveStatus(t) {
        return L[t]?.saveStatus ?? "idle";
    }
}
let P = new R(E.h, {
        GUILD_SPACE_EDIT_START: function (t) {
            let { guildId: e, space: r } = t;
            L[e] = { draft: { header: r.header, widgets: (0, U.W$)(r.widgets) }, saveStatus: "idle" };
        },
        GUILD_SPACE_EDIT_MOVE_WIDGET: function (t) {
            let { guildId: e, widgetId: r, targetColumn: i, targetIndex: a } = t,
                n = y(e);
            if (null == n) return !1;
            let l = (0, U.Gm)(n.draft.widgets, r, i, a);
            if (null == l) return !1;
            n.draft = { ...n.draft, widgets: l };
        },
        GUILD_SPACE_EDIT_REMOVE_WIDGET: function (t) {
            let { guildId: e, widgetId: r } = t,
                i = y(e);
            if (null == i) return !1;
            let a = i.draft.widgets.filter((t) => {
                let { id: e } = t;
                return e !== r;
            });
            if (a.length === i.draft.widgets.length) return !1;
            i.draft = { ...i.draft, widgets: (0, U.W$)(a) };
        },
        GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (t) {
            let { guildId: e, widgetId: r, config: i } = t,
                a = y(e);
            if (null == a) return !1;
            let n = a.draft.widgets.map((t) => (t.id === r ? { ...t, config: i } : t));
            a.draft = { ...a.draft, widgets: n };
        },
        GUILD_SPACE_EDIT_SAVE_START: function (t) {
            let { guildId: e, requestId: r } = t,
                i = L[e];
            if (null == i) return !1;
            (i.saveStatus = "saving"), (i.activeSaveRequestId = r);
        },
        GUILD_SPACE_EDIT_SAVE_FAILURE: function (t) {
            let { guildId: e, requestId: r } = t,
                i = L[e];
            if (i?.activeSaveRequestId !== r) return !1;
            delete i.activeSaveRequestId, (i.saveStatus = "error");
        },
        GUILD_SPACE_EDIT_CANCEL: function (t) {
            let { guildId: e } = t;
            if (null == L[e]) return !1;
            delete L[e];
        },
        GUILD_SPACE_UPDATE_SUCCESS: function (t) {
            let { guildId: e } = t;
            if (null == L[e]) return !1;
            delete L[e];
        },
        GUILD_DELETE: function (t) {
            let {
                guild: { id: e, unavailable: r },
            } = t;
            if (r || null == L[e]) return !1;
            delete L[e];
        },
        LOGOUT: function () {
            L = {};
        },
    }),
    x = new G.A("GuildSpaceEditorActionCreators"),
    F = 0;
function m(t) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: t });
}
async function j(t) {
    let e = P.getDraft(t);
    if (null == e || "saving" === P.getSaveStatus(t)) return;
    let r = {
            header: e.header,
            widgets: e.widgets.map((t) => {
                let { id: e, type: r, position: i, config: a } = t;
                return { id: e, type: r, position: i, config: a };
            }),
        },
        i = F++;
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: t, requestId: i });
    try {
        let { body: e } = await C.Bo.put({ url: T.Rsh.GUILD_SPACE(t), body: r, rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: t, space: e });
    } catch (e) {
        x.error("Failed to save guild space", { guildId: t, error: e }),
            E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: t, requestId: i });
    }
}
var w = r(363957);
let b = 0;
async function k(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r && E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: t, widgetIds: e });
    let i = w.A.getWidgetIdsToHydrate(t, e);
    if (0 === i.length) return;
    let a = b++;
    E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: t, requestId: a, widgetIds: i });
    try {
        let { body: e } = await C.Bo.get({
            url: T.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(t),
            query: { widget_ids: i },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: t, requestId: a, widgets: e.widgets });
    } catch (e) {
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: t, requestId: a, retryable: D(e) });
    }
}
var N = r(470452),
    H = r(331322),
    O = r(821609),
    B = r(825484),
    W = r(375708);
function q(t) {
    let { guildId: e, isEditing: r } = t,
        a = (0, n.bG)([P], () => P.getSaveStatus(e), [e]);
    if (!r)
        return (0, i.jsx)(H.B, {
            direction: "horizontal",
            justify: "end",
            children: (0, i.jsx)(O.$, {
                variant: "secondary",
                text: W.intl.string(W.t.lXCMda),
                onClick: () => {
                    let t;
                    null != (t = g.getSpace(e)) &&
                        E.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: t });
                },
            }),
        });
    let s = "saving" === a;
    return (0, i.jsxs)(H.B, {
        direction: "horizontal",
        justify: "end",
        align: "center",
        gap: 12,
        children: [
            "error" === a &&
                (0, i.jsx)(l.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    role: "alert",
                    children: W.intl.string(W.t.HmFYc5),
                }),
            (0, i.jsxs)(B.e, {
                children: [
                    (0, i.jsx)(O.$, {
                        variant: "secondary",
                        text: W.intl.string(W.t["ETE/oC"]),
                        disabled: s,
                        onClick: () => m(e),
                    }),
                    (0, i.jsx)(O.$, {
                        variant: "primary",
                        text: W.intl.string(W.t["R3BPH+"]),
                        loading: s,
                        onClick: () => void j(e),
                    }),
                ],
            }),
        ],
    });
}
var M = r(529609),
    Y = r(297264),
    K = r(548118),
    V = r(486020),
    X = r(555063);
function $(t) {
    let { guildId: e, header: r } = t,
        l = (0, n.bG)([u.A], () => u.A.getGuild(e), [e]),
        s = r.custom_banner_hash ?? l?.banner,
        c = a.useMemo(() => (null == l ? null : V.Ay.getGuildBannerURL({ id: l.id, banner: s })), [l, s]);
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: X.wx,
              children: [
                  null != c ? (0, i.jsx)("img", { className: X.vK, src: c, alt: "" }) : null,
                  (0, i.jsxs)("div", {
                      className: X.D_,
                      children: [
                          (0, i.jsx)(K.Ay, {
                              className: X.Kk,
                              guild: l,
                              size: K.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsx)(Y.D, { variant: "heading-xxl/bold", color: "text-strong", children: l.name }),
                      ],
                  }),
              ],
          });
}
var z = r(278093);
function Q(t) {
    let { guildId: e } = t,
        r = a.useRef(null),
        [d, E, f] = (0, n.yK)([g], () => [g.getSpace(e), g.getFetchStatus(e), g.isInBackoff(e)], [e]);
    a.useEffect(() => {
        let t = r.current !== e;
        (r.current = e), v(e, t);
    }, [E, e]);
    let o = (0, n.bG)([u.A], () => u.A.getGuild(e), [e]),
        _ = (0, N.mN)(o),
        [S, h] = (0, n.yK)([P], () => [P.getDraft(e), P.getSaveStatus(e)], [e]),
        A = _ && null != S,
        I = A ? S.widgets : d?.widgets;
    a.useEffect(() => {
        _ || null == S || "saving" === h || m(e);
    }, [_, S, h, e]);
    let C = a.useMemo(
            () =>
                (I ?? [])
                    .filter((t) => {
                        let { requires_hydration: e } = t;
                        return e;
                    })
                    .map((t) => {
                        let { id: e } = t;
                        return e;
                    }),
            [I],
        ),
        D = (0, n.yK)([w.A], () => w.A.getWidgetIdsToHydrate(e, C), [e, C]),
        T = a.useRef(null);
    return (a.useEffect(() => {
        if (T.current !== e && null != d) {
            (T.current = e), k(e, C, !0);
            return;
        }
        k(e, D);
    }, [e, d, C, D]),
    null == d || null == I)
        ? (0, i.jsx)("div", {
              className: z.MY,
              children: (0, i.jsx)("div", {
                  className: z.F,
                  children:
                      "error" !== E || f
                          ? (0, i.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE, "aria-label": W.intl.string(W.t.ZTNur7) })
                          : (0, i.jsx)(l.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: W.intl.string(W.t.F8FvUy),
                            }),
              }),
          })
        : (0, i.jsx)("div", {
              className: z.MY,
              children: (0, i.jsx)(c.Gt, {
                  className: z.XG,
                  children: (0, i.jsxs)("div", {
                      className: z.Qs,
                      children: [
                          (0, i.jsx)($, { guildId: e, header: A ? S.header : d.header }),
                          _ && (0, i.jsx)(q, { guildId: e, isEditing: A }),
                          (0, i.jsx)(M.A, { guildId: e, widgets: I }),
                      ],
                  }),
              }),
          });
}

var l = n(115560),
    r = n(620632),
    i = n(73153),
    a = n(960960),
    s = n(88592),
    u = n(716357),
    d = n(49303),
    c = n(855823),
    o = n(652215);
let g = 0;
function f(e, t) {
    return s.A.getDraft(e)?.widgets.find((e) => {
        let { id: n } = e;
        return n === t;
    });
}
n.d(
    t,
    {},
    {
        Fj: async function (e) {
            let t = s.A.getDraft(e);
            if (null == t || "saving" === s.A.getSaveStatus(e)) return !1;
            let n = {};
            void 0 !== t.header.custom_banner && (n.custom_banner = t.header.custom_banner);
            let l = {
                    header: n,
                    widgets: t.widgets.map((e) => {
                        let { id: t, type: n, position: l, config: r } = e,
                            i = { type: n, position: l, config: (0, c.y0)(r) };
                        return ((0, c.Ny)(t) || (i.id = t), i);
                    }),
                },
                u = s.A.getEditSessionId(e),
                f = s.A.getInitialDraft(e)?.widgets ?? [],
                h = new Set(
                    t.widgets.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                ),
                m = g++;
            i.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: m });
            try {
                let { body: n } = await r.Bo.put({ url: o.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
                return (
                    i.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: n }),
                    null != u &&
                        (0, d.nn)(e, u, {
                            widgetCount: t.widgets.length,
                            addedWidgetCount: t.widgets.filter((e) => {
                                let { id: t } = e;
                                return (0, c.Ny)(t);
                            }).length,
                            deletedWidgetCount: f.filter((e) => {
                                let { id: t } = e;
                                return !h.has(t);
                            }).length,
                            bannerChanged: void 0 !== t.header.custom_banner,
                        }),
                    !0
                );
            } catch (r) {
                let n = (0, c.GE)(r, t.widgets),
                    l = n?.message;
                if (null != n) {
                    let t = a.A.getWidget(e, n.type)?.name;
                    null != t && (l = `${t}: ${n.message}`);
                }
                return (
                    i.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: m, errorMessage: l }),
                    !1
                );
            }
        },
        GP: function (e, t) {
            let n = f(e, t);
            i.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: e, widgetId: t });
            let l = s.A.getEditSessionId(e),
                r = s.A.getDraft(e);
            null != l &&
                null != r &&
                null != n &&
                null == f(e, t) &&
                (0, d.jM)(e, l, { widget: n, widgetCount: r.widgets.length });
        },
        Vk: function (e, t, n) {
            i.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG", guildId: e, widgetId: t, config: n });
        },
        Wd: function (e) {
            let t,
                n = u.A.getSpace(e);
            if (null == n || s.A.isEditing(e)) return;
            if (u.A.isSpaceMissing(e)) {
                let n = a.A.getWidgets(e);
                if (null == n && "error" !== a.A.getFetchStatus(e)) return;
                t = (0, c.Ac)(n ?? []);
            }
            let r = (0, l.A)();
            i.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: n, seedWidgets: t, editSessionId: r });
            let o = s.A.getDraft(e);
            null != o && (0, d.Fh)(e, r, { widgetCount: o.widgets.length, isNewHub: null != t });
        },
        iX: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.pb.USER,
                n = s.A.getEditSessionId(e),
                l = s.A.getDraft(e),
                r = s.A.hasChanges(e);
            (i.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e }),
                null != n && null != l && (0, d.P7)(e, n, { reason: t, hadChanges: r, widgetCount: l.widgets.length }));
        },
        j0: function (e, t, n, l) {
            let r = f(e, t)?.position;
            i.h.dispatch({
                type: "GUILD_SPACE_EDIT_MOVE_WIDGET",
                guildId: e,
                widgetId: t,
                targetColumn: n,
                targetIndex: l,
            });
            let a = s.A.getEditSessionId(e),
                u = f(e, t);
            if (null == a || null == r || null == u) return;
            let c = u.position;
            (r.column !== c.column || r.order !== c.order) && (0, d.Js)(e, a, { widget: u, from: r, to: c });
        },
        lr: function (e, t, n, l, r) {
            let a = (0, c.ox)(t, n, l);
            i.h.dispatch({ type: "GUILD_SPACE_EDIT_ADD_WIDGET", guildId: e, widget: a, insertionTarget: r });
            let u = s.A.getEditSessionId(e),
                o = f(e, a.id),
                g = s.A.getDraft(e)?.widgets.length ?? 0;
            return (null != u && null != o && (0, d.qg)(e, u, { widget: o, widgetCount: g }), a.id);
        },
        pC: function (e, t) {
            i.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
        },
    },
);

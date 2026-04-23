n.d(t, { A: () => p });
var i = n(64700),
    r = n(417597),
    a = n(562465),
    l = n(73153),
    s = n(58149),
    o = n(71393),
    d = n(576705),
    u = n(954571),
    c = n(927813),
    A = n(381616),
    h = n(652215);
let _ = +c.A.Millis.DAY,
    E = new Map(),
    p = {
        useShouldShowChannelNotice(e) {
            let t = (0, r.bG)([o.A, d.A], () => {
                let t = o.A.getGuild(e);
                return null != t && d.A.can(h.xBc.ADMINISTRATOR, t);
            });
            i.useEffect(() => {
                let n, i;
                t &&
                    ((n = Date.now()),
                    n < (i = E.get(e) ?? 0) + _ ||
                        (E.set(e, n),
                        a.Bo.post({ url: h.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(e), rejectWithError: !0 }).then(
                            (t) => {
                                l.h.dispatch({
                                    type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                                    guildId: e,
                                    integrationIdsWithAppCommands: t.body?.integration_ids_with_app_commands ?? [],
                                });
                            },
                            () => {
                                E.set(e, i);
                            },
                        )));
            }, [e, t]);
            let n = (0, r.bG)([A.A], () => A.A.shouldShowChannelNotice(e));
            return t && n;
        },
        dismissNotice(e) {
            l.h.dispatch({ type: "COMMANDS_MIGRATION_NOTICE_DISMISSED", guildId: e });
        },
        dismissOverviewTooltip(e, t) {
            l.h.dispatch({ type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED", guildId: e, integrationId: t.id }),
                u.default.track(h.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, s.H$)(e),
                    application_id: t.application?.id,
                    location: "overview",
                });
        },
        dismissToggleTooltip(e, t) {
            void 0 !== t &&
                (l.h.dispatch({ type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED", integrationId: t.id }),
                u.default.track(h.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, s.H$)(e),
                    application_id: t.application?.id,
                    location: "toggle",
                }));
        },
    };

r.d(t, { A: () => p });
var i = r(64700),
    a = r(417597),
    s = r(562465),
    n = r(73153),
    o = r(58149),
    l = r(71393),
    c = r(576705),
    _ = r(954571),
    d = r(927813),
    E = r(381616),
    h = r(652215);
let I = +d.A.Millis.DAY,
    A = new Map(),
    p = {
        useShouldShowChannelNotice(e) {
            let t = (0, a.bG)([l.A, c.A], () => {
                let t = l.A.getGuild(e);
                return null != t && c.A.can(h.xBc.ADMINISTRATOR, t);
            });
            i.useEffect(() => {
                let r, i;
                t &&
                    ((r = Date.now()),
                    r < (i = A.get(e) ?? 0) + I ||
                        (A.set(e, r),
                        s.Bo.post({ url: h.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(e), rejectWithError: !0 }).then(
                            (t) => {
                                n.h.dispatch({
                                    type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                                    guildId: e,
                                    integrationIdsWithAppCommands: t.body?.integration_ids_with_app_commands ?? [],
                                });
                            },
                            () => {
                                A.set(e, i);
                            },
                        )));
            }, [e, t]);
            let r = (0, a.bG)([E.A], () => E.A.shouldShowChannelNotice(e));
            return t && r;
        },
        dismissNotice(e) {
            n.h.dispatch({ type: "COMMANDS_MIGRATION_NOTICE_DISMISSED", guildId: e });
        },
        dismissOverviewTooltip(e, t) {
            n.h.dispatch({ type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED", guildId: e, integrationId: t.id }),
                _.default.track(h.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, o.H$)(e),
                    application_id: t.application?.id,
                    location: "overview",
                });
        },
        dismissToggleTooltip(e, t) {
            void 0 !== t &&
                (n.h.dispatch({ type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED", integrationId: t.id }),
                _.default.track(h.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, o.H$)(e),
                    application_id: t.application?.id,
                    location: "toggle",
                }));
        },
    };

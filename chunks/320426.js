i.d(e, { A: () => A });
var o = i(64700),
    s = i(702841),
    n = i(636537),
    a = i(228366),
    I = i(58149),
    S = i(71393),
    d = i(576705),
    l = i(954571),
    M = i(927813),
    _ = i(381616),
    O = i(652215);
let r = +M.A.Millis.DAY,
    c = new Map(),
    A = {
        useShouldShowChannelNotice(t) {
            let e = (0, s.bG)([S.A, d.A], () => {
                let e = S.A.getGuild(t);
                return null != e && d.A.can(O.xBc.ADMINISTRATOR, e);
            });
            o.useEffect(() => {
                let i, o;
                e &&
                    ((i = Date.now()),
                    i < (o = c.get(t) ?? 0) + r ||
                        (c.set(t, i),
                        n.Bo.post({ url: O.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(t), rejectWithError: !0 }).then(
                            (e) => {
                                a.h.dispatch({
                                    type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                                    guildId: t,
                                    integrationIdsWithAppCommands: e.body?.integration_ids_with_app_commands ?? [],
                                });
                            },
                            () => {
                                c.set(t, o);
                            },
                        )));
            }, [t, e]);
            let i = (0, s.bG)([_.A], () => _.A.shouldShowChannelNotice(t));
            return e && i;
        },
        dismissNotice(t) {
            a.h.dispatch({ type: "COMMANDS_MIGRATION_NOTICE_DISMISSED", guildId: t });
        },
        dismissOverviewTooltip(t, e) {
            a.h.dispatch({ type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED", guildId: t, integrationId: e.id }),
                l.default.track(O.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, I.H$)(t),
                    application_id: e.application?.id,
                    location: "overview",
                });
        },
        dismissToggleTooltip(t, e) {
            void 0 !== e &&
                (a.h.dispatch({ type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED", integrationId: e.id }),
                l.default.track(O.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, I.H$)(t),
                    application_id: e.application?.id,
                    location: "toggle",
                }));
        },
    };

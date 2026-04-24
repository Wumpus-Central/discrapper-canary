"use strict";
l.d(t, { A: () => x });
var n = l(64700),
    i = l(702841),
    s = l(636537),
    a = l(228366),
    r = l(58149),
    o = l(71393),
    d = l(576705),
    c = l(954571),
    u = l(927813),
    h = l(381616),
    g = l(652215);
let m = +u.A.Millis.DAY,
    p = new Map(),
    x = {
        useShouldShowChannelNotice(e) {
            let t = (0, i.bG)([o.A, d.A], () => {
                let t = o.A.getGuild(e);
                return null != t && d.A.can(g.xBc.ADMINISTRATOR, t);
            });
            n.useEffect(() => {
                let l, n;
                t &&
                    ((l = Date.now()),
                    l < (n = p.get(e) ?? 0) + m ||
                        (p.set(e, l),
                        s.Bo.post({ url: g.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(e), rejectWithError: !0 }).then(
                            (t) => {
                                a.h.dispatch({
                                    type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                                    guildId: e,
                                    integrationIdsWithAppCommands: t.body?.integration_ids_with_app_commands ?? [],
                                });
                            },
                            () => {
                                p.set(e, n);
                            },
                        )));
            }, [e, t]);
            let l = (0, i.bG)([h.A], () => h.A.shouldShowChannelNotice(e));
            return t && l;
        },
        dismissNotice(e) {
            a.h.dispatch({ type: "COMMANDS_MIGRATION_NOTICE_DISMISSED", guildId: e });
        },
        dismissOverviewTooltip(e, t) {
            a.h.dispatch({ type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED", guildId: e, integrationId: t.id }),
                c.default.track(g.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, r.H$)(e),
                    application_id: t.application?.id,
                    location: "overview",
                });
        },
        dismissToggleTooltip(e, t) {
            void 0 !== t &&
                (a.h.dispatch({ type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED", integrationId: t.id }),
                c.default.track(g.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, r.H$)(e),
                    application_id: t.application?.id,
                    location: "toggle",
                }));
        },
    };

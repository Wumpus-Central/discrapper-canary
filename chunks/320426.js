r.d(t, {
    A: () => A,
}),
    r(896048);
var i = r(64700),
    n = r(417597),
    a = r(562465),
    o = r(73153),
    s = r(58149),
    l = r(71393),
    c = r(576705),
    d = r(954571),
    u = r(927813),
    _ = r(381616),
    p = r(652215);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, i);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let O = +u.A.Millis.DAY,
    I = new Map(),
    A = {
        useShouldShowChannelNotice(e) {
            let t = (0, n.bG)([l.A, c.A], () => {
                let t = l.A.getGuild(e);
                return null != t && c.A.can(p.xBc.ADMINISTRATOR, t);
            });
            i.useEffect(() => {
                var r;
                let i, n;
                t &&
                    ((i = Date.now()),
                    i < (n = null != (r = I.get(e)) ? r : 0) + O ||
                        (I.set(e, i),
                        a.Bo.post({
                            url: p.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(e),
                            rejectWithError: !0,
                        }).then(
                            (t) => {
                                var r, i;
                                o.h.dispatch({
                                    type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                                    guildId: e,
                                    integrationIdsWithAppCommands:
                                        null !=
                                        (r = null == (i = t.body) ? void 0 : i.integration_ids_with_app_commands)
                                            ? r
                                            : [],
                                });
                            },
                            () => {
                                I.set(e, n);
                            },
                        )));
            }, [e, t]);
            let r = (0, n.bG)([_.A], () => _.A.shouldShowChannelNotice(e));
            return t && r;
        },
        dismissNotice(e) {
            o.h.dispatch({
                type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
                guildId: e,
            });
        },
        dismissOverviewTooltip(e, t) {
            var r;
            o.h.dispatch({
                type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
                guildId: e,
                integrationId: t.id,
            }),
                d.default.track(
                    p.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED,
                    h(E({}, (0, s.H$)(e)), {
                        application_id: null == (r = t.application) ? void 0 : r.id,
                        location: "overview",
                    }),
                );
        },
        dismissToggleTooltip(e, t) {
            var r;
            void 0 !== t &&
                (o.h.dispatch({
                    type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
                    integrationId: t.id,
                }),
                d.default.track(
                    p.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED,
                    h(E({}, (0, s.H$)(e)), {
                        application_id: null == (r = t.application) ? void 0 : r.id,
                        location: "toggle",
                    }),
                ));
        },
    };

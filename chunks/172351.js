n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(911969),
    o = n(367907),
    s = n(10718),
    l = n(69626),
    c = n(626135),
    u = n(785717),
    d = n(678738),
    f = n(981631),
    _ = n(388032),
    p = n(63046);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    let { applicationId: t, commandIds: n, guildId: h, channel: g, onClick: E } = e,
        { trackUserProfileAction: b } = (0, u.KZ)(),
        y = i.useMemo(
            () => ({
                channel: g,
                type: "channel",
            }),
            [g],
        ),
        { commands: O } = s.Qm(y, t, n),
        v = i.useMemo(
            () =>
                null == O
                    ? void 0
                    : O.filter((e) => {
                          let { nsfw: t, options: n } = e;
                          return (
                              !0 !== t &&
                              (null == n
                                  ? void 0
                                  : n.find((e) => {
                                        let { type: t } = e;
                                        return t === a.jw.SUB_COMMAND || t === a.jw.SUB_COMMAND_GROUP;
                                    })) == null
                          );
                      }),
            [O],
        );
    if (null == v || 0 === v.length) return null;
    let I = (e) => {
        null == E || E(),
            b({ action: "PRESS_APP_COMMAND" }),
            c.default.track(
                f.rMx.POPULAR_APPLICATION_COMMAND_CLICKED,
                m(
                    {
                        application_id: t,
                        command_id: e,
                        guild_id: h,
                    },
                    (0, o.JS)(g.id),
                ),
            );
    };
    return (0, r.jsx)(d.Z, {
        heading: _.intl.string(_.t["0hKkS+"]),
        children: (0, r.jsx)("ul", {
            className: p.list,
            children: v.map((e) =>
                (0, r.jsx)(
                    "li",
                    {
                        children: (0, r.jsx)(l.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: I,
                            guildId: h,
                            channelId: g.id,
                            applicationId: e.applicationId,
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
}

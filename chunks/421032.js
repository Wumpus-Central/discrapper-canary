t.d(n, { Z: () => v });
var r = t(951288);
t(647438);
var i = t(120356),
    a = t.n(i),
    l = t(442837),
    o = t(481060),
    c = t(239091),
    s = t(592125),
    d = t(430824),
    u = t(924301),
    _ = t(894017),
    p = t(954313),
    b = t(390966),
    h = t(765305),
    m = t(388032),
    g = t(709380);
function f(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function v(e) {
    let { recurrenceId: n, originalScheduledStartTime: i, guildEventId: v, onClick: x, isActive: C } = e,
        j = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(v)),
        I = (0, _.Z)(n, null == j ? void 0 : j.id),
        k = (0, l.e7)([d.Z], () => d.Z.getGuild(null == j ? void 0 : j.guild_id)),
        w = (0, l.e7)([s.Z], () => s.Z.getChannel(null == j ? void 0 : j.channel_id));
    if (null == j) return null;
    let { is_canceled: y = !1 } = null != I ? I : {},
        P =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? new Date(null == I ? void 0 : I.scheduled_start_time)
                : i,
        N = (0, p.DK)(j),
        S = y ? h.p1.CANCELED : h.p1.SCHEDULED;
    N === n && (S = j.status);
    let O =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? (0, p.lh)(I, P, new Date(null == j ? void 0 : j.scheduled_start_time))
                : null,
        E = (e) => {
            e.stopPropagation(),
                null != k &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e("34261"), t.e("27434")]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                f(
                                    {
                                        guildEventId: j.id,
                                        recurrenceId: n,
                                        channel: w,
                                        guild: k,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, r.jsxs)(o.kL8, {
        className: a()(g.container, {
            [g.canceled]: y,
            [g.clickable]: null != x,
            [g.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), y || null == x || x(n);
        },
        onContextMenu: E,
        "aria-label": "",
        children: [
            (0, r.jsx)(b.z, {
                startTime: P.toISOString(),
                status: null != O ? O : S,
                eventType: j.entity_type,
                guildEventId: j.id,
                recurrenceId: n,
                className: g.timeStatus,
            }),
            y &&
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: g.canceledStatus,
                    children: m.intl.string(m.t.fyBVRk),
                }),
            (0, r.jsx)(o.ua7, {
                text: m.intl.string(m.t.UKOtz8),
                position: "top",
                "aria-label": m.intl.string(m.t.bt75u7),
                children: (e) => {
                    var n, t;
                    return (0, r.jsx)(
                        o.P3F,
                        ((n = f({}, e)),
                        (t = t =
                            {
                                onClick: E,
                                className: g.iconButton,
                                children: (0, r.jsx)(o.xhG, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: g.icon,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                  }
                                  return t;
                              })(Object(t)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                              }),
                        n),
                    );
                },
            }),
        ],
    });
}

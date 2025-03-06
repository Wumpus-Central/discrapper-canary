n.d(t, {
    I6: () => y,
    J7: () => I,
    JM: () => O,
    Jw: () => h,
    WL: () => E,
    ak: () => p,
    d$: () => m,
    eE: () => S,
    ic: () => g,
    pX: () => b,
    sq: () => _,
    uu: () => N,
    wk: () => T,
    zd: () => v
});
var r = n(367907),
    i = n(427679),
    o = n(23750),
    a = n(598077),
    s = n(82554),
    l = n(185625),
    c = n(443599),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    A(s.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId
    }),
        (0, c.m)(
            {
                name: s.b.GUILD_DIRECTORY_ENTRY,
                record: e
            },
            {},
            { onSubmit: t }
        );
}
function p(e, t, n) {
    A(s.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: s.b.MESSAGE,
                record: e
            },
            {},
            { onSubmit: n }
        );
}
function h(e, t, n) {
    A(s.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: s.b.MESSAGE,
                record: e
            },
            { variant: 'staff' },
            { onSubmit: n }
        );
}
function g(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    null != n &&
        (A(s.b.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }),
        (0, c.m)(
            {
                name: s.b.STAGE_CHANNEL,
                record: n
            },
            {},
            { onSubmit: t }
        ));
}
function m(e, t) {
    var n;
    A(s.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
    }),
        (0, c.m)(
            {
                name: s.b.GUILD_SCHEDULED_EVENT,
                record: e
            },
            {},
            { onSubmit: t }
        );
}
function E(e, t) {
    A(s.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: s.b.FIRST_DM,
                record: e
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1
            }
        );
}
async function v(e, t) {
    try {
        await (0, l.ox)(
            {
                name: s.b.FIRST_DM,
                record: e
            },
            { variant: '_first_dm_ham_v1' }
        ),
            null == t || t();
    } catch (e) {}
}
function b(e, t, n, r) {
    A(s.b.USER, { reported_user_id: e.id }),
        (0, c.m)(
            {
                name: s.b.USER,
                record: e,
                contextualGuildId: t
            },
            {},
            {
                onSubmit: n,
                appContext: r
            }
        );
}
function y(e, t, n, r) {
    A(s.b.USER, { reported_user_id: e.id }),
        (0, c.m)(
            {
                name: s.b.USER,
                record: e,
                contextualGuildId: t
            },
            { variant: 'staff' },
            {
                onSubmit: n,
                isEligibleForFeedback: !1,
                appContext: r
            }
        );
}
function O(e, t) {
    let n = new a.Z({});
    A(s.BM.USER, { reported_user_id: n.id }),
        (0, c.m)(
            {
                name: s.BM.USER,
                record: n
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1,
                isAuthenticated: !1,
                emailToken: e
            }
        );
}
function S(e, t) {
    let n = new o.ZP({});
    A(s.BM.MESSAGE, {
        message_id: void 0,
        channel_id: void 0
    }),
        (0, c.m)(
            {
                name: s.BM.MESSAGE,
                record: n
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1,
                isAuthenticated: !1,
                emailToken: e
            }
        );
}
async function I(e, t, n) {
    try {
        await (0, l.ox)(
            {
                name: s.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_headless_v1' }
        ),
            null == t || t();
    } catch (e) {
        null == n || n();
    }
}
function T(e, t) {
    A(s.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: s.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_v1' },
            { onSubmit: t }
        );
}
function N(e) {
    let { application: t, entrypoint: n, contextualGuildId: i, contextualChannelId: o, onSubmit: a, appContext: l } = e;
    r.ZP.trackWithMetadata(u.rMx.REPORT_APPLICATION_CLICKED, {
        application_id: t.id,
        location: n
    }),
        A(s.b.APPLICATION, {
            application_id: t.id,
            guild_id: i,
            channel_id: o
        }),
        (0, c.m)(
            {
                name: s.b.APPLICATION,
                record: t,
                contextualGuildId: i,
                contextualChannelId: o,
                entrypoint: n
            },
            {},
            {
                onSubmit: a,
                appContext: l
            }
        );
}
function A(e, t) {
    r.ZP.trackWithMetadata(u.rMx.IAR_MODAL_OPEN, f({ report_type: e }, t));
}

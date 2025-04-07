n.d(t, {
    DG: () => g,
    FO: () => T,
    I6: () => I,
    J7: () => A,
    JM: () => S,
    Jw: () => m,
    WL: () => y,
    ak: () => h,
    d$: () => b,
    eE: () => N,
    ic: () => E,
    pX: () => O,
    sq: () => p,
    uu: () => R,
    wk: () => C,
    zd: () => v
});
var r = n(367907),
    i = n(427679),
    o = n(601964),
    a = n(23750),
    s = n(598077),
    l = n(82554),
    c = n(185625),
    u = n(443599),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    P(l.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId
    }),
        (0, u.m)(
            {
                name: l.b.GUILD_DIRECTORY_ENTRY,
                record: e
            },
            {},
            { onSubmit: t }
        );
}
function h(e, t, n) {
    P(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            {},
            { onSubmit: n }
        );
}
function m(e, t, n) {
    P(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'staff' },
            { onSubmit: n }
        );
}
function g(e, t, n) {
    P(l.b.GUILD, { guild_id: e.id }),
        (0, u.m)(
            {
                name: l.b.GUILD,
                record: e
            },
            { variant: 'staff' },
            { onSubmit: n }
        );
}
function E(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    null != n &&
        (P(l.b.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }),
        (0, u.m)(
            {
                name: l.b.STAGE_CHANNEL,
                record: n
            },
            {},
            { onSubmit: t }
        ));
}
function b(e, t) {
    var n;
    P(l.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null != (n = e.channel_id) ? n : void 0
    }),
        (0, u.m)(
            {
                name: l.b.GUILD_SCHEDULED_EVENT,
                record: e
            },
            {},
            { onSubmit: t }
        );
}
function y(e, t) {
    P(l.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: l.b.FIRST_DM,
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
        await (0, c.ox)(
            {
                name: l.b.FIRST_DM,
                record: e
            },
            { variant: '_first_dm_ham_v1' }
        ),
            null == t || t();
    } catch (e) {}
}
function O(e, t, n, r) {
    P(l.b.USER, { reported_user_id: e.id }),
        (0, u.m)(
            {
                name: l.b.USER,
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
function I(e, t, n, r) {
    P(l.b.USER, { reported_user_id: e.id }),
        (0, u.m)(
            {
                name: l.b.USER,
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
function S(e, t) {
    let n = new s.Z({});
    P(l.BM.USER, { reported_user_id: n.id }),
        (0, u.m)(
            {
                name: l.BM.USER,
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
function T(e, t) {
    let n = new o.ZP({});
    P(l.BM.GUILD, { guild_id: n.id }),
        (0, u.m)(
            {
                name: l.BM.GUILD,
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
function N(e, t) {
    let n = new a.ZP({});
    P(l.BM.MESSAGE, {
        message_id: void 0,
        channel_id: void 0
    }),
        (0, u.m)(
            {
                name: l.BM.MESSAGE,
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
async function A(e, t, n) {
    try {
        await (0, c.ox)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_headless_v1' }
        ),
            null == t || t();
    } catch (e) {
        null == n || n();
    }
}
function C(e, t) {
    P(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_v1' },
            { onSubmit: t }
        );
}
function R(e) {
    let { application: t, entrypoint: n, contextualGuildId: i, contextualChannelId: o, onSubmit: a, appContext: s } = e;
    r.ZP.trackWithMetadata(d.rMx.REPORT_APPLICATION_CLICKED, {
        application_id: t.id,
        location: n
    }),
        P(l.b.APPLICATION, {
            application_id: t.id,
            guild_id: i,
            channel_id: o
        }),
        (0, u.m)(
            {
                name: l.b.APPLICATION,
                record: t,
                contextualGuildId: i,
                contextualChannelId: o,
                entrypoint: n
            },
            {},
            {
                onSubmit: a,
                appContext: s
            }
        );
}
function P(e, t) {
    r.ZP.trackWithMetadata(d.rMx.IAR_MODAL_OPEN, _({ report_type: e }, t));
}

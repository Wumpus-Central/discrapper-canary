n.d(t, {
    DG: () => g,
    FO: () => T,
    G1: () => P,
    I6: () => S,
    J7: () => C,
    JM: () => I,
    Jw: () => h,
    WL: () => y,
    ak: () => m,
    d$: () => b,
    eE: () => A,
    ic: () => E,
    pX: () => v,
    sq: () => _,
    tV: () => w,
    uu: () => R,
    wk: () => N,
    zd: () => O,
});
var r = n(367907),
    i = n(427679),
    a = n(23750),
    o = n(598077),
    s = n(411198),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    D(l.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId,
    }),
        (0, u.m)(
            {
                name: l.b.GUILD_DIRECTORY_ENTRY,
                record: e,
            },
            {},
            { onSubmit: t },
        );
}
function m(e, t, n) {
    D(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id,
    }),
        (0, u.m)(
            {
                name: l.b.MESSAGE,
                record: e,
            },
            {},
            { onSubmit: n },
        );
}
function h(e, t, n) {
    D(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id,
    }),
        (0, u.m)(
            {
                name: l.b.MESSAGE,
                record: e,
            },
            { variant: "staff" },
            { onSubmit: n },
        );
}
function g(e, t, n) {
    D(l.b.GUILD, { guild_id: e.id }),
        (0, u.m)(
            {
                name: l.b.GUILD,
                record: e,
            },
            { variant: "staff" },
            { onSubmit: n },
        );
}
function E(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    null != n &&
        (D(l.b.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id,
        }),
        (0, u.m)(
            {
                name: l.b.STAGE_CHANNEL,
                record: n,
            },
            {},
            { onSubmit: t },
        ));
}
function b(e, t) {
    var n;
    D(l.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null != (n = e.channel_id) ? n : void 0,
    }),
        (0, u.m)(
            {
                name: l.b.GUILD_SCHEDULED_EVENT,
                record: e,
            },
            {},
            { onSubmit: t },
        );
}
function y(e, t) {
    D(l.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id,
    }),
        (0, u.m)(
            {
                name: l.b.FIRST_DM,
                record: e,
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1,
            },
        );
}
async function O(e, t) {
    try {
        await (0, c.ox)(
            {
                name: l.b.FIRST_DM,
                record: e,
            },
            { variant: "_first_dm_ham_v1" },
        ),
            null == t || t();
    } catch (e) {}
}
function v(e, t, n, r) {
    D(l.b.USER, { reported_user_id: e.id }),
        (0, u.m)(
            {
                name: l.b.USER,
                record: e,
                contextualGuildId: t,
            },
            {},
            {
                onSubmit: n,
                appContext: r,
            },
        );
}
function S(e, t, n, r) {
    D(l.b.USER, { reported_user_id: e.id }),
        (0, u.m)(
            {
                name: l.b.USER,
                record: e,
                contextualGuildId: t,
            },
            { variant: "staff" },
            {
                onSubmit: n,
                isEligibleForFeedback: !1,
                appContext: r,
            },
        );
}
function I(e, t) {
    let n = new o.Z({});
    D(l.BM.USER, { reported_user_id: n.id }),
        (0, u.m)(
            {
                name: l.BM.USER,
                record: n,
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1,
                isAuthenticated: !1,
                emailToken: e,
            },
        );
}
function T(e, t) {
    let n = (0, s.dangerouslyConstructGuildRecordFromUntypedObject)({});
    D(l.BM.GUILD, { guild_id: n.id }),
        (0, u.m)(
            {
                name: l.BM.GUILD,
                record: n,
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1,
                isAuthenticated: !1,
                emailToken: e,
            },
        );
}
function A(e, t) {
    let n = new a.ZP({});
    D(l.BM.MESSAGE, {
        message_id: void 0,
        channel_id: void 0,
    }),
        (0, u.m)(
            {
                name: l.BM.MESSAGE,
                record: n,
            },
            {},
            {
                onSubmit: t,
                isEligibleForFeedback: !1,
                isAuthenticated: !1,
                emailToken: e,
            },
        );
}
async function C(e, t, n) {
    try {
        await (0, c.ox)(
            {
                name: l.b.MESSAGE,
                record: e,
            },
            { variant: "safety_alerts_headless_v1" },
        ),
            null == t || t();
    } catch (e) {
        null == n || n();
    }
}
function N(e, t) {
    D(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id,
    }),
        (0, u.m)(
            {
                name: l.b.MESSAGE,
                record: e,
            },
            { variant: "safety_alerts_v1" },
            { onSubmit: t },
        );
}
function P(e, t, n, r) {
    var i;
    (0, u.m)(
        {
            name: l.b.WIDGET,
            widget_id: null != (i = t.id) ? i : "",
            user_id: e,
            widget: t,
        },
        {},
        {
            onSubmit: n,
            appContext: r,
        },
    );
}
function R(e) {
    let { application: t, entrypoint: n, contextualGuildId: i, contextualChannelId: a, onSubmit: o, appContext: s } = e;
    r.ZP.trackWithMetadata(d.rMx.REPORT_APPLICATION_CLICKED, {
        application_id: t.id,
        location: n,
    }),
        D(l.b.APPLICATION, {
            application_id: t.id,
            guild_id: i,
            channel_id: a,
        }),
        (0, u.m)(
            {
                name: l.b.APPLICATION,
                record: t,
                contextualGuildId: i,
                contextualChannelId: a,
                entrypoint: n,
            },
            {},
            {
                onSubmit: o,
                appContext: s,
            },
        );
}
function w(e, t) {
    (0, u.m)(
        {
            name: l.xw.MESSAGE,
            record: e,
        },
        {},
        {
            onSubmit: t,
            isEligibleForFeedback: !1,
        },
    );
}
function D(e, t) {
    r.ZP.trackWithMetadata(d.rMx.IAR_MODAL_OPEN, p({ report_type: e }, t));
}

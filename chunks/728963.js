n.d(t, { A: () => P }), n(446912), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(155718),
    u = n(688810),
    d = n(740075),
    f = n(706727),
    p = n(332173),
    _ = n(657331),
    h = n(734057),
    m = n(317525),
    g = n(71393),
    E = n(287809),
    b = n(763754);
n(827669);
var y = n(985018),
    O = n(998815);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = {
        tag: "span",
        variant: "text-md/normal",
        color: "text-default",
    },
    C = { className: s()("mention", O.lE) };
function N(e) {
    return (0, r.jsx)(
        l.Text,
        I(v({}, T), {
            color: "text-strong",
            children: e,
        }),
    );
}
function R(e) {
    var t, n, a, s, o, u, d;
    let f,
        {
            option: g,
            channel: O,
            guild: A,
            messageId: S,
            parentOptionKey: w,
            commandOptionSpec: P,
            sourceAnalyticsLocations: D,
        } = e,
        x = null != w ? w + " " + g.name : g.name;
    if (g.type === c.n4.SUB_COMMAND || g.type === c.n4.SUB_COMMAND_GROUP) {
        let e = [
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            " ",
                            (0, r.jsx)(
                                l.Text,
                                I(v({}, T), {
                                    children: null != (n = null == P ? void 0 : P.name_localized) ? n : g.name,
                                }),
                            ),
                        ],
                    },
                    x,
                ),
            ],
            t = Object.fromEntries(
                null == (o = null != (a = null == P ? void 0 : P.options) ? a : [])
                    ? void 0
                    : o.map((e) => [e.name, e]),
            );
        for (let n of null != (s = g.options) ? s : [])
            e = e.concat(
                R({
                    option: n,
                    channel: O,
                    guild: A,
                    messageId: S,
                    parentOptionKey: x,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: D,
                }),
            );
        return e;
    }
    let L = g.value;
    if (null != g.value)
        switch (g.type) {
            case c.n4.USER: {
                let e = g.value.toString(),
                    t = E.default.getUser(e);
                if (null != t) {
                    let e = (0, b.FT)(t, O);
                    f = (0, r.jsxs)(
                        p.A,
                        I(v({}, C), {
                            onClick: () =>
                                (0, _.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: O.guild_id,
                                    channelId: O.id,
                                    messageId: S,
                                    sourceAnalyticsLocations: D,
                                }),
                            children: ["@", e.nick],
                        }),
                    );
                }
                break;
            }
            case c.n4.CHANNEL: {
                let e = g.value.toString(),
                    t = h.A.getChannel(e);
                null != t &&
                    (f = (0, r.jsxs)(
                        p.A,
                        I(v({}, C), {
                            children: ["#", t.name],
                        }),
                    ));
                break;
            }
            case c.n4.ROLE: {
                let e = g.value.toString(),
                    t = null != A ? m.A.getRole(A.id, e) : void 0;
                null != t &&
                    (f = (0, r.jsxs)(
                        p.A,
                        I(v({}, C), {
                            children: ["@", t.name],
                        }),
                    ));
                break;
            }
            case c.n4.MENTIONABLE: {
                let e = g.value.toString(),
                    t = null != A ? m.A.getRole(A.id, e) : void 0;
                if (null != t)
                    f = (0, r.jsxs)(p.A, {
                        children: ["@", t.name],
                    });
                else {
                    let t = E.default.getUser(e);
                    if (null != t) {
                        let e = (0, b.FT)(t, O);
                        f = (0, r.jsxs)(
                            p.A,
                            I(v({}, C), {
                                onClick: () =>
                                    (0, _.openUserProfileModal)({
                                        userId: t.id,
                                        guildId: O.guild_id,
                                        sourceAnalyticsLocations: D,
                                    }),
                                children: ["@", e.nick],
                            }),
                        );
                    }
                }
                break;
            }
            case c.n4.ATTACHMENT:
                f = N(y.intl.string(y.t.nONJVc));
                break;
            default: {
                let e = null == P || null == (u = P.choices) ? void 0 : u.find((e) => e.value === g.value);
                null != e && (L = null != (d = e.name_localized) ? d : e.name);
            }
        }
    return (
        null == f && (f = N(null == L ? void 0 : L.toString())),
        [
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsxs)(
                            l.Text,
                            I(v({}, T), {
                                children: [" ", null != (t = null == P ? void 0 : P.name_localized) ? t : g.name, ": "],
                            }),
                        ),
                        f,
                    ],
                },
                x,
            ),
        ]
    );
}
function w(e) {
    var t, n, a, s, p, _;
    let h,
        { channel: m, messageId: E, interactionData: b } = e,
        { analyticsLocations: y } = (0, u.Ay)(),
        { onCopy: A, copyRef: S } = (0, d.A)(m, null == b || null == (t = b.application_command) ? void 0 : t.id),
        C = (0, o.bG)([g.A], () => g.A.getGuild(m.guild_id), [m.guild_id]);
    if (
        (i.useEffect(() => {
            (null == b || (b.type === c.kc.CHAT && void 0 === b.application_command)) && f.S7(m.id, E);
        }, [m.id, E, b]),
        null == b)
    )
        h = (0, r.jsx)(l.y$y, {
            type: l.y$y.Type.SPINNING_CIRCLE,
            className: O.u1,
        });
    else {
        let e = [],
            t = Object.fromEntries(
                (null != (n = null == (p = b.application_command) ? void 0 : p.options) ? n : []).map((e) => [
                    e.name,
                    e,
                ]),
            );
        for (let n of null != (a = b.options) ? a : [])
            e = e.concat(
                R({
                    option: n,
                    channel: m,
                    guild: C,
                    messageId: E,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: y,
                }),
            );
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    l.Text,
                    I(v({}, T), {
                        children: [
                            "/",
                            null != (s = null == (_ = b.application_command) ? void 0 : _.name_localized) ? s : b.name,
                        ],
                    }),
                ),
                e,
            ],
        });
    }
    let N = (e) => {
        var t, n, r;
        let i = null != (t = null == (r = window) || null == (n = r.getSelection()) ? void 0 : n.toString()) ? t : "";
        i.startsWith("/") && i.endsWith("\n") && A(e, b);
    };
    return (0, r.jsxs)("div", {
        className: O.kL,
        onCopy: N,
        children: [
            (0, r.jsx)("div", {
                className: O.YL,
                ref: S,
                children: h,
            }),
            (0, r.jsx)("div", { className: O.xQ }),
        ],
    });
}
let P = i.memo(w);

n.d(t, { Z: () => D }), n(467055), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    f = n(603721),
    _ = n(124072),
    p = n(892001),
    h = n(592125),
    m = n(485386),
    g = n(430824),
    E = n(594174),
    b = n(739566),
    y = n(761652),
    O = n(388032),
    v = n(912861);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
let N = {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
    },
    C = { className: a()("mention", v.mention) };
function R(e) {
    return (0, r.jsx)(
        l.Text,
        A(T({}, N), {
            color: "header-primary",
            children: e,
        }),
    );
}
function P(e) {
    var t, n, o, a, s, u, d;
    let f,
        {
            option: g,
            channel: v,
            guild: I,
            messageId: S,
            parentOptionKey: w,
            commandOptionSpec: D,
            sourceAnalyticsLocations: L,
        } = e,
        x = null != w ? w + " " + g.name : g.name;
    if (g.type === c.jw.SUB_COMMAND || g.type === c.jw.SUB_COMMAND_GROUP) {
        let e = [
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            " ",
                            (0, r.jsx)(
                                l.Text,
                                A(T({}, N), {
                                    children: null != (n = null == D ? void 0 : D.name_localized) ? n : g.name,
                                }),
                            ),
                        ],
                    },
                    x,
                ),
            ],
            s = Object.fromEntries(
                null == (t = null != (o = null == D ? void 0 : D.options) ? o : [])
                    ? void 0
                    : t.map((e) => [e.name, e]),
            );
        for (let t of null != (a = g.options) ? a : [])
            e = e.concat(
                P({
                    option: t,
                    channel: v,
                    guild: I,
                    messageId: S,
                    parentOptionKey: x,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: L,
                }),
            );
        return e;
    }
    let M = g.value;
    if (null != g.value)
        switch (g.type) {
            case c.jw.USER: {
                let e = g.value.toString(),
                    t = E.default.getUser(e);
                if (null != t) {
                    let e = (0, b.ij)(t, v);
                    f = (0, r.jsxs)(
                        _.Z,
                        A(T({}, C), {
                            onClick: () =>
                                (0, p.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: v.guild_id,
                                    channelId: v.id,
                                    messageId: S,
                                    sourceAnalyticsLocations: L,
                                }),
                            children: [y.ME, e.nick],
                        }),
                    );
                }
                break;
            }
            case c.jw.CHANNEL: {
                let e = g.value.toString(),
                    t = h.Z.getChannel(e);
                null != t &&
                    (f = (0, r.jsxs)(
                        _.Z,
                        A(T({}, C), {
                            children: [y.zy, t.name],
                        }),
                    ));
                break;
            }
            case c.jw.ROLE: {
                let e = g.value.toString(),
                    t = null != I ? m.Z.getRole(I.id, e) : void 0;
                null != t &&
                    (f = (0, r.jsxs)(
                        _.Z,
                        A(T({}, C), {
                            children: [y.ME, t.name],
                        }),
                    ));
                break;
            }
            case c.jw.MENTIONABLE: {
                let e = g.value.toString(),
                    t = null != I ? m.Z.getRole(I.id, e) : void 0;
                if (null != t)
                    f = (0, r.jsxs)(_.Z, {
                        children: [y.ME, t.name],
                    });
                else {
                    let t = E.default.getUser(e);
                    if (null != t) {
                        let e = (0, b.ij)(t, v);
                        f = (0, r.jsxs)(
                            _.Z,
                            A(T({}, C), {
                                onClick: () =>
                                    (0, p.openUserProfileModal)({
                                        userId: t.id,
                                        guildId: v.guild_id,
                                        sourceAnalyticsLocations: L,
                                    }),
                                children: [y.ME, e.nick],
                            }),
                        );
                    }
                }
                break;
            }
            case c.jw.ATTACHMENT:
                f = R(O.intl.string(O.t.nONJVV));
                break;
            default: {
                let e = null == D || null == (s = D.choices) ? void 0 : s.find((e) => e.value === g.value);
                null != e && (M = null != (u = e.name_localized) ? u : e.name);
            }
        }
    return (
        null == f && (f = R(null == M ? void 0 : M.toString())),
        [
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsxs)(
                            l.Text,
                            A(T({}, N), {
                                children: [" ", null != (d = null == D ? void 0 : D.name_localized) ? d : g.name, ": "],
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
    var t, n, o, a, _, p;
    let h,
        { channel: m, messageId: E, interactionData: b } = e,
        { analyticsLocations: y } = (0, u.ZP)(),
        { onCopy: O, copyRef: I } = (0, d.Z)(m, null == b || null == (t = b.application_command) ? void 0 : t.id),
        S = (0, s.e7)([g.Z], () => g.Z.getGuild(m.guild_id), [m.guild_id]);
    if (
        (i.useEffect(() => {
            (null == b || (b.type === c.yU.CHAT && void 0 === b.application_command)) && f.OG(m.id, E);
        }, [m.id, E, b]),
        null == b)
    )
        h = (0, r.jsx)(l.$jN, {
            type: l.$jN.Type.SPINNING_CIRCLE,
            className: v.spinner,
        });
    else {
        let e = [],
            t = Object.fromEntries(
                (null != (a = null == (n = b.application_command) ? void 0 : n.options) ? a : []).map((e) => [
                    e.name,
                    e,
                ]),
            );
        for (let n of null != (_ = b.options) ? _ : [])
            e = e.concat(
                P({
                    option: n,
                    channel: m,
                    guild: S,
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
                    A(T({}, N), {
                        children: [
                            "/",
                            null != (p = null == (o = b.application_command) ? void 0 : o.name_localized) ? p : b.name,
                        ],
                    }),
                ),
                e,
            ],
        });
    }
    let C = (e) => {
        var t, n, r;
        let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? void 0 : t.toString()) ? r : "";
        i.startsWith("/") && i.endsWith("\n") && O(e, b);
    };
    return (0, r.jsxs)("div", {
        className: v.container,
        onCopy: C,
        children: [
            (0, r.jsx)("div", {
                className: v.tooltip,
                ref: I,
                children: h,
            }),
            (0, r.jsx)("div", { className: v.tooltipPointer }),
        ],
    });
}
let D = i.memo(w);

n.d(t, { Z: () => D }), n(467055), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    f = n(603721),
    p = n(124072),
    _ = n(892001),
    m = n(592125),
    h = n(485386),
    g = n(430824),
    E = n(594174),
    b = n(739566),
    y = n(761652),
    O = n(388032),
    v = n(466002);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
        tag: "span",
        variant: "text-md/normal",
        color: "text-default",
    },
    N = { className: o()("mention", v.mention) };
function P(e) {
    return (0, r.jsx)(
        l.Text,
        A(I({}, C), {
            color: "header-primary",
            children: e,
        }),
    );
}
function R(e) {
    var t, n, a, o, s, u, d;
    let f,
        {
            option: g,
            channel: v,
            guild: S,
            messageId: T,
            parentOptionKey: w,
            commandOptionSpec: D,
            sourceAnalyticsLocations: x,
        } = e,
        L = null != w ? w + " " + g.name : g.name;
    if (g.type === c.jw.SUB_COMMAND || g.type === c.jw.SUB_COMMAND_GROUP) {
        let e = [
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            " ",
                            (0, r.jsx)(
                                l.Text,
                                A(I({}, C), {
                                    children: null != (n = null == D ? void 0 : D.name_localized) ? n : g.name,
                                }),
                            ),
                        ],
                    },
                    L,
                ),
            ],
            s = Object.fromEntries(
                null == (t = null != (a = null == D ? void 0 : D.options) ? a : [])
                    ? void 0
                    : t.map((e) => [e.name, e]),
            );
        for (let t of null != (o = g.options) ? o : [])
            e = e.concat(
                R({
                    option: t,
                    channel: v,
                    guild: S,
                    messageId: T,
                    parentOptionKey: L,
                    commandOptionSpec: s[t.name],
                    sourceAnalyticsLocations: x,
                }),
            );
        return e;
    }
    let j = g.value;
    if (null != g.value)
        switch (g.type) {
            case c.jw.USER: {
                let e = g.value.toString(),
                    t = E.default.getUser(e);
                if (null != t) {
                    let e = (0, b.ij)(t, v);
                    f = (0, r.jsxs)(
                        p.Z,
                        A(I({}, N), {
                            onClick: () =>
                                (0, _.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: v.guild_id,
                                    channelId: v.id,
                                    messageId: T,
                                    sourceAnalyticsLocations: x,
                                }),
                            children: [y.ME, e.nick],
                        }),
                    );
                }
                break;
            }
            case c.jw.CHANNEL: {
                let e = g.value.toString(),
                    t = m.Z.getChannel(e);
                null != t &&
                    (f = (0, r.jsxs)(
                        p.Z,
                        A(I({}, N), {
                            children: [y.zy, t.name],
                        }),
                    ));
                break;
            }
            case c.jw.ROLE: {
                let e = g.value.toString(),
                    t = null != S ? h.Z.getRole(S.id, e) : void 0;
                null != t &&
                    (f = (0, r.jsxs)(
                        p.Z,
                        A(I({}, N), {
                            children: [y.ME, t.name],
                        }),
                    ));
                break;
            }
            case c.jw.MENTIONABLE: {
                let e = g.value.toString(),
                    t = null != S ? h.Z.getRole(S.id, e) : void 0;
                if (null != t)
                    f = (0, r.jsxs)(p.Z, {
                        children: [y.ME, t.name],
                    });
                else {
                    let t = E.default.getUser(e);
                    if (null != t) {
                        let e = (0, b.ij)(t, v);
                        f = (0, r.jsxs)(
                            p.Z,
                            A(I({}, N), {
                                onClick: () =>
                                    (0, _.openUserProfileModal)({
                                        userId: t.id,
                                        guildId: v.guild_id,
                                        sourceAnalyticsLocations: x,
                                    }),
                                children: [y.ME, e.nick],
                            }),
                        );
                    }
                }
                break;
            }
            case c.jw.ATTACHMENT:
                f = P(O.intl.string(O.t.nONJVc));
                break;
            default: {
                let e = null == D || null == (s = D.choices) ? void 0 : s.find((e) => e.value === g.value);
                null != e && (j = null != (u = e.name_localized) ? u : e.name);
            }
        }
    return (
        null == f && (f = P(null == j ? void 0 : j.toString())),
        [
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsxs)(
                            l.Text,
                            A(I({}, C), {
                                children: [" ", null != (d = null == D ? void 0 : D.name_localized) ? d : g.name, ": "],
                            }),
                        ),
                        f,
                    ],
                },
                L,
            ),
        ]
    );
}
function w(e) {
    var t, n, a, o, p, _;
    let m,
        { channel: h, messageId: E, interactionData: b } = e,
        { analyticsLocations: y } = (0, u.ZP)(),
        { onCopy: O, copyRef: S } = (0, d.Z)(h, null == b || null == (t = b.application_command) ? void 0 : t.id),
        T = (0, s.e7)([g.Z], () => g.Z.getGuild(h.guild_id), [h.guild_id]);
    if (
        (i.useEffect(() => {
            (null == b || (b.type === c.yU.CHAT && void 0 === b.application_command)) && f.OG(h.id, E);
        }, [h.id, E, b]),
        null == b)
    )
        m = (0, r.jsx)(l.$jN, {
            type: l.$jN.Type.SPINNING_CIRCLE,
            className: v.spinner,
        });
    else {
        let e = [],
            t = Object.fromEntries(
                (null != (o = null == (n = b.application_command) ? void 0 : n.options) ? o : []).map((e) => [
                    e.name,
                    e,
                ]),
            );
        for (let n of null != (p = b.options) ? p : [])
            e = e.concat(
                R({
                    option: n,
                    channel: h,
                    guild: T,
                    messageId: E,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: y,
                }),
            );
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    l.Text,
                    A(I({}, C), {
                        children: [
                            "/",
                            null != (_ = null == (a = b.application_command) ? void 0 : a.name_localized) ? _ : b.name,
                        ],
                    }),
                ),
                e,
            ],
        });
    }
    let N = (e) => {
        var t, n, r;
        let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? void 0 : t.toString()) ? r : "";
        i.startsWith("/") && i.endsWith("\n") && O(e, b);
    };
    return (0, r.jsxs)("div", {
        className: v.container,
        onCopy: N,
        children: [
            (0, r.jsx)("div", {
                className: v.tooltip,
                ref: S,
                children: m,
            }),
            (0, r.jsx)("div", { className: v.tooltipPointer }),
        ],
    });
}
let D = i.memo(w);

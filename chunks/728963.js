n.d(t, {
    A: () => I,
}),
    n(446912),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(155718),
    u = n(688810),
    d = n(740075),
    p = n(706727),
    m = n(332173),
    f = n(657331),
    g = n(734057),
    h = n(317525),
    _ = n(71393),
    b = n(287809),
    A = n(763754);
n(827669);
var y = n(985018),
    v = n(998815);

function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {
        tag: "span",
        variant: "text-md/normal",
        color: "text-default",
    },
    j = {
        className: a()("mention", v.lE),
    };

function C(e) {
    return (0, r.jsx)(
        o.Text,
        O(x({}, E), {
            color: "text-strong",
            children: e,
        }),
    );
}
let I = i.memo(function (e) {
    var t, n, l, a, I, S;
    let T,
        { channel: N, messageId: P, interactionData: w } = e,
        { analyticsLocations: R } = (0, u.Ay)(),
        { onCopy: D, copyRef: L } = (0, d.A)(N, null == w || null == (t = w.application_command) ? void 0 : t.id),
        M = (0, s.bG)([_.A], () => _.A.getGuild(N.guild_id), [N.guild_id]);
    if (
        (i.useEffect(() => {
            (null == w || (w.type === c.kc.CHAT && void 0 === w.application_command)) && p.S7(N.id, P);
        }, [N.id, P, w]),
        null == w)
    )
        T = (0, r.jsx)(o.y$y, {
            type: o.y$y.Type.SPINNING_CIRCLE,
            className: v.u1,
        });
    else {
        let e = [],
            t = Object.fromEntries(
                (null != (n = null == (I = w.application_command) ? void 0 : I.options) ? n : []).map((e) => [
                    e.name,
                    e,
                ]),
            );
        for (let n of null != (l = w.options) ? l : [])
            e = e.concat(
                (function e(t) {
                    var n, l, a, s, u, d, p;
                    let _,
                        {
                            option: v,
                            channel: I,
                            guild: S,
                            messageId: T,
                            parentOptionKey: N,
                            commandOptionSpec: P,
                            sourceAnalyticsLocations: w,
                        } = t,
                        R = null != N ? N + " " + v.name : v.name;
                    if (v.type === c.n4.SUB_COMMAND || v.type === c.n4.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            " ",
                                            (0, r.jsx)(
                                                o.Text,
                                                O(x({}, E), {
                                                    children:
                                                        null != (l = null == P ? void 0 : P.name_localized)
                                                            ? l
                                                            : v.name,
                                                }),
                                            ),
                                        ],
                                    },
                                    R,
                                ),
                            ],
                            n = Object.fromEntries(
                                null == (u = null != (a = null == P ? void 0 : P.options) ? a : [])
                                    ? void 0
                                    : u.map((e) => [e.name, e]),
                            );
                        for (let r of null != (s = v.options) ? s : [])
                            t = t.concat(
                                e({
                                    option: r,
                                    channel: I,
                                    guild: S,
                                    messageId: T,
                                    parentOptionKey: R,
                                    commandOptionSpec: n[r.name],
                                    sourceAnalyticsLocations: w,
                                }),
                            );
                        return t;
                    }
                    let D = v.value;
                    if (null != v.value)
                        switch (v.type) {
                            case c.n4.USER: {
                                let e = v.value.toString(),
                                    t = b.default.getUser(e);
                                if (null != t) {
                                    let e = (0, A.FT)(t, I);
                                    _ = (0, r.jsxs)(
                                        m.A,
                                        O(x({}, j), {
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: I.guild_id,
                                                    channelId: I.id,
                                                    messageId: T,
                                                    sourceAnalyticsLocations: w,
                                                }),
                                            children: ["@", e.nick],
                                        }),
                                    );
                                }
                                break;
                            }
                            case c.n4.CHANNEL: {
                                let e = v.value.toString(),
                                    t = g.A.getChannel(e);
                                null != t &&
                                    (_ = (0, r.jsxs)(
                                        m.A,
                                        O(x({}, j), {
                                            children: ["#", t.name],
                                        }),
                                    ));
                                break;
                            }
                            case c.n4.ROLE: {
                                let e = v.value.toString(),
                                    t = null != S ? h.A.getRole(S.id, e) : void 0;
                                null != t &&
                                    (_ = (0, r.jsxs)(
                                        m.A,
                                        O(x({}, j), {
                                            children: ["@", t.name],
                                        }),
                                    ));
                                break;
                            }
                            case c.n4.MENTIONABLE: {
                                let e = v.value.toString(),
                                    t = null != S ? h.A.getRole(S.id, e) : void 0;
                                if (null != t)
                                    _ = (0, r.jsxs)(m.A, {
                                        children: ["@", t.name],
                                    });
                                else {
                                    let t = b.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, A.FT)(t, I);
                                        _ = (0, r.jsxs)(
                                            m.A,
                                            O(x({}, j), {
                                                onClick: () =>
                                                    (0, f.openUserProfileModal)({
                                                        userId: t.id,
                                                        guildId: I.guild_id,
                                                        sourceAnalyticsLocations: w,
                                                    }),
                                                children: ["@", e.nick],
                                            }),
                                        );
                                    }
                                }
                                break;
                            }
                            case c.n4.ATTACHMENT:
                                _ = C(y.intl.string(y.t.nONJVc));
                                break;
                            default: {
                                let e =
                                    null == P || null == (d = P.choices) ? void 0 : d.find((e) => e.value === v.value);
                                null != e && (D = null != (p = e.name_localized) ? p : e.name);
                            }
                        }
                    return (
                        null == _ && (_ = C(null == D ? void 0 : D.toString())),
                        [
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            o.Text,
                                            O(x({}, E), {
                                                children: [
                                                    " ",
                                                    null != (n = null == P ? void 0 : P.name_localized) ? n : v.name,
                                                    ": ",
                                                ],
                                            }),
                                        ),
                                        _,
                                    ],
                                },
                                R,
                            ),
                        ]
                    );
                })({
                    option: n,
                    channel: N,
                    guild: M,
                    messageId: P,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: R,
                }),
            );
        T = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    o.Text,
                    O(x({}, E), {
                        children: [
                            "/",
                            null != (a = null == (S = w.application_command) ? void 0 : S.name_localized) ? a : w.name,
                        ],
                    }),
                ),
                e,
            ],
        });
    }
    return (0, r.jsxs)("div", {
        className: v.kL,
        onCopy: (e) => {
            var t, n, r;
            let i =
                null != (t = null == (r = window) || null == (n = r.getSelection()) ? void 0 : n.toString()) ? t : "";
            i.startsWith("/") && i.endsWith("\n") && D(e, w);
        },
        children: [
            (0, r.jsx)("div", {
                className: v.YL,
                ref: L,
                children: T,
            }),
            (0, r.jsx)("div", {
                className: v.xQ,
            }),
        ],
    });
});

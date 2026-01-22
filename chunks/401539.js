n.d(t, { default: () => X }), n(896048), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(989349),
    d = n.n(a),
    o = n(158954),
    c = n(311907),
    u = n(827734),
    g = n(417048),
    h = n(444550),
    m = n(990078),
    x = n(397927),
    j = n(832712),
    p = n(544743),
    b = n(999903),
    N = n(47167),
    A = n(713654),
    v = n(585510),
    f = n(610136),
    S = n(594061),
    O = n(95701),
    _ = n(734057),
    E = n(769765),
    y = n(498642),
    G = n(71393),
    C = n(994500),
    M = n(543465),
    L = n(287809),
    T = n(403362),
    w = n(975571),
    I = n(477427),
    k = n(769591),
    R = n(717115),
    P = n(506849),
    D = n(652215),
    U = n(815968),
    H = n(985018),
    Y = n(453235);
function V() {
    return (V =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
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
function J(e) {
    let { label: t, channelId: n } = e,
        [l, s] = (0, c.yK)([_.A], () => {
            let e = _.A.getChannel(n);
            return [e, (null == e ? void 0 : e.parent_id) != null ? _.A.getChannel(e.parent_id) : null];
        });
    return null == l
        ? t
        : (0, i.jsx)(g.X, {
              icon: (0, A.gU)(l),
              title: t,
              subtitle: null == s ? void 0 : s.name,
          });
}
function z(e) {
    var t;
    let { muteConfig: n, muted: l, guild: s, handleCheckboxChange: r } = e,
        a = null != (t = null == n ? void 0 : n.selected_time_window) ? t : U.Xx.ALWAYS;
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: Y.bj,
              children: [
                  (0, i.jsxs)(x.BJc, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(x.dOG, {
                              label: H.intl.formatToPlainString(H.t["J+7D9E"], { name: s.name }),
                              description: H.intl.string(H.t["8wbTQ6"]),
                              checked: l,
                              onChange: (e) => r("muted", e, I.G_.muted(e)),
                          }),
                          l
                              ? (0, i.jsx)(x.l6P, {
                                    label: H.intl.string(H.t.Ztu2Yo),
                                    options: (0, k.b8)(),
                                    value: a,
                                    onSelectionChange: (e) => {
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        j.A.updateGuildNotificationSettings(
                                            s.id,
                                            {
                                                muted: !0,
                                                mute_config: {
                                                    selected_time_window: e,
                                                    end_time: t,
                                                },
                                            },
                                            I.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(x.cGx, { gap: 20 }),
              ],
          });
}
function B(e) {
    let { muted: t, messageNotifications: n, memberCount: l, handleRadioChange: s } = e;
    return (0, i.jsxs)("div", {
        className: Y.YK,
        children: [
            (0, i.jsx)("div", {
                className: Y.bj,
                children: (0, i.jsx)(x.z6M, {
                    label: H.intl.string(H.t.lprV7V),
                    disabled: t,
                    value: n,
                    onChange: (e) => s("message_notifications", e, I.G_.notifications(e)),
                    options: [
                        {
                            name: H.intl.string(H.t["n/bTaY"]),
                            value: D.orn.ALL_MESSAGES,
                            desc: null != l && l >= D._4N ? H.intl.string(H.t.Dh5p5j) : null,
                        },
                        {
                            name: H.intl.format(H.t.L2hmYy, {}),
                            value: D.orn.ONLY_MENTIONS,
                        },
                        {
                            name: H.intl.string(H.t.CtVGyQ),
                            value: D.orn.NO_MESSAGES,
                        },
                    ],
                }),
            }),
            (0, i.jsx)(x.cGx, {}),
        ],
    });
}
function F(e) {
    let { guildId: t } = e,
        n = (0, v._g)(t),
        l = (0, c.bG)([f.A], () => f.A.getGuildAlertSettings()[t]);
    if (n)
        return (0, i.jsxs)("div", {
            className: Y.YK,
            children: [
                (0, i.jsx)(x.lVW, {
                    className: Y.bj,
                    children: (0, i.jsxs)(o.D0$, {
                        label: H.intl.string(H.t.D9yVAH),
                        description: H.intl.string(H.t["0PhAOH"]),
                        children: [
                            (0, i.jsx)(x.dOG, {
                                label: H.intl.string(H.t.u6dc5B),
                                description: H.intl.string(H.t.z8Td48),
                                checked: !(null == l ? void 0 : l.disableRaidAlertNag),
                                onChange: (e) =>
                                    (0, S.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        S.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, i.jsx)(x.dOG, {
                                label: H.intl.string(H.t.P8MG6q),
                                description: H.intl.string(H.t.PyxXs8),
                                checked: !(null == l ? void 0 : l.disableRaidAlertPush),
                                onChange: (e) =>
                                    (0, S.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        S.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(x.cGx, {}),
            ],
        });
}
function Z(e) {
    let {
        suppressEveryone: t,
        suppressRoles: n,
        handleCheckboxChange: l,
        notifyHighlights: s,
        muteEvents: r,
        mobilePush: a,
        muted: d,
        guildId: o,
    } = e;
    return (0, i.jsxs)(x.BJc, {
        className: Y.bj,
        gap: 16,
        children: [
            (0, i.jsx)(x.dOG, {
                label: H.intl.format(H.t.OWiWAp, {}),
                onChange: (e) => l("suppress_everyone", e, I.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, i.jsx)(x.cGx, {}),
            (0, i.jsx)(x.dOG, {
                label: H.intl.string(H.t["O/QdoD"]),
                onChange: (e) => l("suppress_roles", e, I.G_.suppressRoles(e)),
                checked: n,
            }),
            (0, i.jsx)(x.cGx, {}),
            (0, i.jsxs)(x.BJc, {
                gap: 4,
                children: [
                    (0, i.jsx)(x.dOG, {
                        label: H.intl.string(H.t.gPuteJ),
                        onChange: (e) => {
                            j.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? D.guM.DISABLED : D.guM.ENABLED },
                                I.G_.highlights(!e),
                            );
                        },
                        checked: d || s === D.guM.DISABLED,
                        disabled: d,
                        description: H.intl.string(H.t["Vw/Xn8"]),
                    }),
                    (0, i.jsx)(x.MzZ, {
                        href: w.A.getArticleURL(D.MVz.HIGHLIGHTS),
                        children: (0, i.jsx)(x.Text, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: H.intl.string(H.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(x.cGx, {}),
            (0, i.jsx)(x.dOG, {
                label: H.intl.string(H.t.ONG3Yz),
                checked: r,
                onChange: (e) => l("mute_scheduled_events", e, I.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(x.cGx, {}),
            (0, i.jsx)(x.dOG, {
                label: H.intl.string(H.t.h1DL66),
                checked: !d && a,
                disabled: d,
                onChange: (e) => l("mobile_push", e, I.G_.mobilePush(e)),
            }),
        ],
    });
}
function Q(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: n, setLatestOverrideId: l, channels: s, categories: a } = e,
        d = r()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== D.rbe.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, N.m1)(t, L.default, C.A),
                };
            })
            .value();
    return (0, i.jsx)("div", {
        className: Y.bj,
        children: (0, i.jsx)(h.p, {
            label: H.intl.string(H.t["Z+oF8h"]),
            description: H.intl.string(H.t["2Y9ZfA"]),
            value: D.dJq,
            placeholder: H.intl.string(H.t["Z+oF8h"]),
            renderOptionLabel: (e) =>
                (0, i.jsx)(J, {
                    label: e.label,
                    channelId: e.value,
                }),
            options: d,
            onChange: (e) => {
                if (null == e) return;
                let i = new Set(n);
                i.add(e), t(i), l(e);
            },
            "data-migration-pending": !0,
        }),
    });
}
function q(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: n,
            channels: s,
            categories: r,
            muted: a,
            setNewChannelOverrides: d,
            latestOverrideId: o,
            messageNotifications: c,
        } = e,
        g = l.useMemo(() => new Set([...t, ...(0, k.ct)(n)]), [n, t]),
        h = (0, x.rdh)(u.A.unsafe_rawColors.GREEN_360).hex(),
        j = (e) => {
            let n = new Set(t);
            n.delete(e), d(n);
        },
        b = s
            .map((e) => {
                let { channel: t } = e;
                if (!g.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
                let l = n[t.id];
                return (0, i.jsx)(
                    R.O,
                    {
                        channel: t,
                        guildMuted: a,
                        muted: null != l && (0, p.tG)(l),
                        messageNotifications: null != l ? l.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: j,
                        checkboxColor: h,
                        autoFocus: t.id === o,
                    },
                    t.id,
                );
            })
            .filter(T.Vq);
    return (
        (0 === g.size || 0 === b.length) &&
            b.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: Y.uZ,
                        children: (0, i.jsx)(x.Text, {
                            className: Y.sr,
                            variant: "text-sm/semibold",
                            children: H.intl.string(H.t["2Y9ZfA"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: Y.n_,
                    children: [
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: Y.Bv,
                            children: H.intl.string(H.t.uShwWv),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: H.intl.string(H.t.e29Z12),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: H.intl.string(H.t.DD6gNd),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: H.intl.string(H.t.CtVGyQ),
                        }),
                        (0, i.jsx)(x.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: (0, i.jsx)(m.m, {
                                text: H.intl.string(H.t["8wbTQ6"]),
                                position: "bottom",
                                children: (0, i.jsx)("span", { children: H.intl.string(H.t.sWmtI6) }),
                            }),
                        }),
                    ],
                }),
                b,
            ],
        })
    );
}
function K(e) {
    let { guildId: t, onClose: n, transitionState: s } = e,
        r = (0, c.bG)([E.A], () => E.A.getCategories(t)),
        a = (0, c.bG)([G.A], () => G.A.getGuild(t)),
        d = (0, c.bG)([y.A], () => y.A.getMemberCount(t)),
        {
            suppressEveryone: u,
            suppressRoles: g,
            muteEvents: h,
            mobilePush: m,
            muted: x,
            muteConfig: p,
            messageNotifications: N,
            channelOverrides: A,
            notifyHighlights: v,
        } = (0, c.cf)([M.Ay], () => ({
            suppressEveryone: M.Ay.isSuppressEveryoneEnabled(t),
            suppressRoles: M.Ay.isSuppressRolesEnabled(t),
            muteEvents: M.Ay.isMuteScheduledEventsEnabled(t),
            mobilePush: M.Ay.isMobilePushEnabled(t),
            muted: M.Ay.isMuted(t),
            muteConfig: M.Ay.getMuteConfig(t),
            messageNotifications: M.Ay.getMessageNotifications(t),
            channelOverrides: M.Ay.getChannelOverrides(t),
            notifyHighlights: M.Ay.getNotifyHighlights(t),
        })),
        [f, S] = l.useState(new Set()),
        [_, C] = l.useState(null),
        L = l.useMemo(
            () =>
                (0, b.A)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, O.tr)(t) || t === D.rbe.GUILD_CATEGORY;
                }),
            [r],
        ),
        T = (e, n, i) => {
            j.A.updateGuildNotificationSettings(t, { [e]: n }, i);
        };
    return (0, i.jsxs)(o.Modal, {
        title: H.intl.string(H.t.h850Ss),
        actions: [
            {
                text: H.intl.string(H.t.i4jeWR),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: s,
        children: [
            (0, i.jsx)(z, {
                muteConfig: p,
                muted: x,
                guild: a,
                handleCheckboxChange: T,
            }),
            (0, i.jsx)(B, {
                muted: x,
                messageNotifications: N,
                memberCount: d,
                handleRadioChange: (e, n, i) => {
                    j.A.updateGuildNotificationSettings(t, { [e]: n }, i);
                },
            }),
            (0, i.jsx)(F, { guildId: t }),
            (0, i.jsx)(Z, {
                suppressEveryone: u,
                suppressRoles: g,
                handleCheckboxChange: T,
                notifyHighlights: v,
                muteEvents: h,
                mobilePush: m,
                muted: x,
                guildId: t,
            }),
            (0, i.jsx)(Q, {
                setNewChannelOverrides: S,
                newChannelOverrides: f,
                setLatestOverrideId: C,
                channels: L,
                categories: r,
            }),
            (0, i.jsx)(q, {
                newChannelOverrides: f,
                channelOverrides: A,
                channels: L,
                categories: r,
                muted: x,
                setNewChannelOverrides: S,
                latestOverrideId: _,
                messageNotifications: N,
            }),
        ],
    });
}
function X(e) {
    let {} = e,
        t = V({}, e);
    return (0, k.os)("NotificationSettingsModal") ? (0, i.jsx)(P.A, W({}, t)) : (0, i.jsx)(K, W({}, t));
}

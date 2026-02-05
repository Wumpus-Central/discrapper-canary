i.d(t, { default: () => q }), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(735438),
    a = i.n(l),
    r = i(989349),
    d = i.n(r),
    o = i(158954),
    c = i(311907),
    u = i(827734),
    g = i(417048),
    h = i(444550),
    x = i(990078),
    m = i(397927),
    A = i(832712),
    N = i(544743),
    j = i(999903),
    S = i(47167),
    p = i(713654),
    v = i(585510),
    b = i(610136),
    f = i(594061),
    _ = i(95701),
    G = i(734057),
    E = i(769765),
    C = i(498642),
    O = i(71393),
    M = i(994500),
    y = i(543465),
    L = i(287809),
    T = i(403362),
    k = i(975571),
    I = i(477427),
    R = i(769591),
    w = i(717115),
    U = i(506849),
    D = i(652215),
    P = i(815968),
    H = i(985018),
    Y = i(453235);
function V(e) {
    let { label: t, channelId: i } = e,
        [s, l] = (0, c.yK)([G.A], () => {
            let e = G.A.getChannel(i);
            return [e, e?.parent_id != null ? G.A.getChannel(e.parent_id) : null];
        });
    return null == s ? t : (0, n.jsx)(g.X, { icon: (0, p.gU)(s), title: t, subtitle: l?.name });
}
function W(e) {
    let { muteConfig: t, muted: i, guild: s, handleCheckboxChange: l } = e,
        a = t?.selected_time_window ?? P.Xx.ALWAYS;
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: Y.bj,
              children: [
                  (0, n.jsxs)(m.BJc, {
                      gap: 20,
                      children: [
                          (0, n.jsx)(m.dOG, {
                              label: H.intl.formatToPlainString(H.t["J+7D9E"], { name: s.name }),
                              description: H.intl.string(H.t["8wbTQ6"]),
                              checked: i,
                              onChange: (e) => l("muted", e, I.G_.muted(e)),
                          }),
                          i
                              ? (0, n.jsx)(m.l6P, {
                                    label: H.intl.string(H.t.Ztu2Yo),
                                    options: (0, R.b8)(),
                                    value: a,
                                    onSelectionChange: (e) => {
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        A.A.updateGuildNotificationSettings(
                                            s.id,
                                            { muted: !0, mute_config: { selected_time_window: e, end_time: t } },
                                            I.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, n.jsx)(m.cGx, { gap: 20 }),
              ],
          });
}
function J(e) {
    let { muted: t, messageNotifications: i, memberCount: s, handleRadioChange: l } = e;
    return (0, n.jsxs)("div", {
        className: Y.YK,
        children: [
            (0, n.jsx)("div", {
                className: Y.bj,
                children: (0, n.jsx)(m.z6M, {
                    label: H.intl.string(H.t.lprV7V),
                    disabled: t,
                    value: i,
                    onChange: (e) => l("message_notifications", e, I.G_.notifications(e)),
                    options: [
                        {
                            name: H.intl.string(H.t["n/bTaY"]),
                            value: D.orn.ALL_MESSAGES,
                            desc: null != s && s >= D._4N ? H.intl.string(H.t.Dh5p5j) : null,
                        },
                        { name: H.intl.format(H.t.L2hmYy, {}), value: D.orn.ONLY_MENTIONS },
                        { name: H.intl.string(H.t.CtVGyQ), value: D.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, n.jsx)(m.cGx, {}),
        ],
    });
}
function z(e) {
    let { guildId: t } = e,
        i = (0, v._g)(t),
        s = (0, c.bG)([b.A], () => b.A.getGuildAlertSettings()[t]);
    if (i)
        return (0, n.jsxs)("div", {
            className: Y.YK,
            children: [
                (0, n.jsx)(m.lVW, {
                    className: Y.bj,
                    children: (0, n.jsxs)(o.D0$, {
                        label: H.intl.string(H.t.D9yVAH),
                        description: H.intl.string(H.t["0PhAOH"]),
                        children: [
                            (0, n.jsx)(m.dOG, {
                                label: H.intl.string(H.t.u6dc5B),
                                description: H.intl.string(H.t.z8Td48),
                                checked: !s?.disableRaidAlertNag,
                                onChange: (e) =>
                                    (0, f.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        f.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, n.jsx)(m.dOG, {
                                label: H.intl.string(H.t.P8MG6q),
                                description: H.intl.string(H.t.PyxXs8),
                                checked: !s?.disableRaidAlertPush,
                                onChange: (e) =>
                                    (0, f.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        f.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(m.cGx, {}),
            ],
        });
}
function B(e) {
    let {
        suppressEveryone: t,
        suppressRoles: i,
        handleCheckboxChange: s,
        notifyHighlights: l,
        muteEvents: a,
        mobilePush: r,
        muted: d,
        guildId: o,
    } = e;
    return (0, n.jsxs)(m.BJc, {
        className: Y.bj,
        gap: 16,
        children: [
            (0, n.jsx)(m.dOG, {
                label: H.intl.format(H.t.OWiWAp, {}),
                onChange: (e) => s("suppress_everyone", e, I.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, n.jsx)(m.cGx, {}),
            (0, n.jsx)(m.dOG, {
                label: H.intl.string(H.t["O/QdoD"]),
                onChange: (e) => s("suppress_roles", e, I.G_.suppressRoles(e)),
                checked: i,
            }),
            (0, n.jsx)(m.cGx, {}),
            (0, n.jsxs)(m.BJc, {
                gap: 4,
                children: [
                    (0, n.jsx)(m.dOG, {
                        label: H.intl.string(H.t.gPuteJ),
                        onChange: (e) => {
                            A.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? D.guM.DISABLED : D.guM.ENABLED },
                                I.G_.highlights(!e),
                            );
                        },
                        checked: d || l === D.guM.DISABLED,
                        disabled: d,
                        description: H.intl.string(H.t["Vw/Xn8"]),
                    }),
                    (0, n.jsx)(m.MzZ, {
                        href: k.A.getArticleURL(D.MVz.HIGHLIGHTS),
                        children: (0, n.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: H.intl.string(H.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(m.cGx, {}),
            (0, n.jsx)(m.dOG, {
                label: H.intl.string(H.t.ONG3Yz),
                checked: a,
                onChange: (e) => s("mute_scheduled_events", e, I.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(m.cGx, {}),
            (0, n.jsx)(m.dOG, {
                label: H.intl.string(H.t.h1DL66),
                checked: !d && r,
                disabled: d,
                onChange: (e) => s("mobile_push", e, I.G_.mobilePush(e)),
            }),
        ],
    });
}
function F(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: i, setLatestOverrideId: s, channels: l, categories: r } = e,
        d = a()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== D.rbe.GUILD_CATEGORY || (null != r[t.id] && r[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, S.m1)(t, L.default, M.A) };
            })
            .value();
    return (0, n.jsx)("div", {
        className: Y.bj,
        children: (0, n.jsx)(h.p, {
            label: H.intl.string(H.t["Z+oF8h"]),
            description: H.intl.string(H.t["2Y9ZfA"]),
            value: D.dJq,
            placeholder: H.intl.string(H.t["Z+oF8h"]),
            renderOptionLabel: (e) => (0, n.jsx)(V, { label: e.label, channelId: e.value }),
            options: d,
            onChange: (e) => {
                if (null == e) return;
                let n = new Set(i);
                n.add(e), t(n), s(e);
            },
            "data-migration-pending": !0,
        }),
    });
}
function Z(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: i,
            channels: l,
            categories: a,
            muted: r,
            setNewChannelOverrides: d,
            latestOverrideId: o,
            messageNotifications: c,
        } = e,
        g = s.useMemo(() => new Set([...t, ...(0, R.ct)(i)]), [i, t]),
        h = (0, m.rdh)(u.A.unsafe_rawColors.GREEN_360).hex(),
        A = (e) => {
            let i = new Set(t);
            i.delete(e), d(i);
        },
        j = l
            .map((e) => {
                let { channel: t } = e;
                if (!g.has(t.id) || (null != a[t.id] && 0 === a[t.id].length)) return null;
                let s = i[t.id];
                return (0, n.jsx)(
                    w.O,
                    {
                        channel: t,
                        guildMuted: r,
                        muted: null != s && (0, N.tG)(s),
                        messageNotifications: null != s ? s.message_notifications : null,
                        guildMessageNotifications: c,
                        onDelete: A,
                        checkboxColor: h,
                        autoFocus: t.id === o,
                    },
                    t.id,
                );
            })
            .filter(T.Vq);
    return (
        (0 === g.size || 0 === j.length) &&
            j.push(
                (0, n.jsx)(
                    "div",
                    {
                        className: Y.uZ,
                        children: (0, n.jsx)(m.Text, {
                            className: Y.sr,
                            variant: "text-sm/semibold",
                            children: H.intl.string(H.t["2Y9ZfA"]),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: Y.n_,
                    children: [
                        (0, n.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: Y.Bv,
                            children: H.intl.string(H.t.uShwWv),
                        }),
                        (0, n.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: H.intl.string(H.t.e29Z12),
                        }),
                        (0, n.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: H.intl.string(H.t.DD6gNd),
                        }),
                        (0, n.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: H.intl.string(H.t.CtVGyQ),
                        }),
                        (0, n.jsx)(m.Heading, {
                            variant: "eyebrow",
                            className: Y.BO,
                            children: (0, n.jsx)(x.m, {
                                text: H.intl.string(H.t["8wbTQ6"]),
                                position: "bottom",
                                children: (0, n.jsx)("span", { children: H.intl.string(H.t.sWmtI6) }),
                            }),
                        }),
                    ],
                }),
                j,
            ],
        })
    );
}
function Q(e) {
    let { guildId: t, onClose: i, transitionState: l } = e,
        a = (0, c.bG)([E.A], () => E.A.getCategories(t)),
        r = (0, c.bG)([O.A], () => O.A.getGuild(t)),
        d = (0, c.bG)([C.A], () => C.A.getMemberCount(t)),
        {
            suppressEveryone: u,
            suppressRoles: g,
            muteEvents: h,
            mobilePush: x,
            muted: m,
            muteConfig: N,
            messageNotifications: S,
            channelOverrides: p,
            notifyHighlights: v,
        } = (0, c.cf)([y.Ay], () => ({
            suppressEveryone: y.Ay.isSuppressEveryoneEnabled(t),
            suppressRoles: y.Ay.isSuppressRolesEnabled(t),
            muteEvents: y.Ay.isMuteScheduledEventsEnabled(t),
            mobilePush: y.Ay.isMobilePushEnabled(t),
            muted: y.Ay.isMuted(t),
            muteConfig: y.Ay.getMuteConfig(t),
            messageNotifications: y.Ay.getMessageNotifications(t),
            channelOverrides: y.Ay.getChannelOverrides(t),
            notifyHighlights: y.Ay.getNotifyHighlights(t),
        })),
        [b, f] = s.useState(new Set()),
        [G, M] = s.useState(null),
        L = s.useMemo(
            () =>
                (0, j.A)(a._categories, a, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, _.tr)(t) || t === D.rbe.GUILD_CATEGORY;
                }),
            [a],
        ),
        T = (e, i, n) => {
            A.A.updateGuildNotificationSettings(t, { [e]: i }, n);
        };
    return (0, n.jsxs)(o.Modal, {
        title: H.intl.string(H.t.h850Ss),
        actions: [{ text: H.intl.string(H.t.i4jeWR), onClick: i }],
        onClose: i,
        transitionState: l,
        children: [
            (0, n.jsx)(W, { muteConfig: N, muted: m, guild: r, handleCheckboxChange: T }),
            (0, n.jsx)(J, {
                muted: m,
                messageNotifications: S,
                memberCount: d,
                handleRadioChange: (e, i, n) => {
                    A.A.updateGuildNotificationSettings(t, { [e]: i }, n);
                },
            }),
            (0, n.jsx)(z, { guildId: t }),
            (0, n.jsx)(B, {
                suppressEveryone: u,
                suppressRoles: g,
                handleCheckboxChange: T,
                notifyHighlights: v,
                muteEvents: h,
                mobilePush: x,
                muted: m,
                guildId: t,
            }),
            (0, n.jsx)(F, {
                setNewChannelOverrides: f,
                newChannelOverrides: b,
                setLatestOverrideId: M,
                channels: L,
                categories: a,
            }),
            (0, n.jsx)(Z, {
                newChannelOverrides: b,
                channelOverrides: p,
                channels: L,
                categories: a,
                muted: m,
                setNewChannelOverrides: f,
                latestOverrideId: G,
                messageNotifications: S,
            }),
        ],
    });
}
function q(e) {
    let { ...t } = e;
    return (0, R.os)("NotificationSettingsModal") ? (0, n.jsx)(U.A, { ...t }) : (0, n.jsx)(Q, { ...t });
}

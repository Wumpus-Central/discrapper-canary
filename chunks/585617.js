(i.d(t, { default: () => eT }), i(321073));
var n = i(477900),
    l = i(582128),
    s = i(435558),
    r = i.n(s),
    a = i(536637),
    d = i.n(a),
    o = i(452027),
    c = i(189213),
    u = i(17928),
    h = i(661531),
    g = i(194667),
    m = i(444550),
    N = i(331322),
    x = i(193249),
    A = i(691885),
    f = i(404778),
    j = i(144228),
    p = i(611677),
    b = i(28863),
    S = i(834730),
    v = i(602853),
    _ = i(297264),
    E = i(866665),
    C = i(832712),
    G = i(544743),
    O = i(999903),
    y = i(47167),
    M = i(713654),
    L = i(585510),
    I = i(610136),
    T = i(594061),
    R = i(95701),
    D = i(734057),
    k = i(769765),
    w = i(498642),
    P = i(71393),
    U = i(994500),
    Y = i(543465),
    H = i(287809),
    B = i(403362),
    J = i(975571),
    V = i(477427),
    F = i(769591),
    z = i(467324),
    W = i(568385),
    Z = i(993077),
    Q = i(414079),
    K = i(235986),
    X = i(652215),
    q = i(375708),
    $ = i(858177);
class ee extends l.PureComponent {
    _timeout;
    contentDomRef = l.createRef();
    state = { highlight: !1 };
    highlight() {
        this.setState({ highlight: !0 }, () => {
            (null != this._timeout && clearTimeout(this._timeout), (this._timeout = setTimeout(this.unhighlight, 1e3)));
        });
    }
    unhighlight = () => {
        this.setState({ highlight: !1 });
    };
    componentDidMount() {
        this.props.autoFocus && (this.contentDomRef.current?.scrollIntoView({ behavior: "smooth" }), this.highlight());
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    setMessageNotification(e, t, i) {
        let { channel: n } = this.props,
            l = n.getGuildId();
        null != l && C.A.updateChannelOverrideSettings(l, n.id, { message_notifications: e, muted: t ?? !1 }, i);
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, V.G_.notifications(e));
    }
    handleMute = (e) => {
        let { messageNotifications: t } = this.props;
        this.setMessageNotification(t ?? X.orn.NULL, e, V.G_.muted(e));
    };
    handleDelete = () => {
        let { onDelete: e, channel: t } = this.props;
        (this.setMessageNotification(X.orn.NULL, !1, V.fd.OverrideDeleted), null != e && e(t.id));
    };
    getChannelNameForLabel() {
        return (0, y.m1)(this.props.channel, H.default, U.A);
    }
    getOverrideLabelId(e) {
        return `channel-override-${this.props.channel.id}-${e}`;
    }
    renderMessageNotificationsRadioOption(e) {
        let t,
            i,
            { messageNotifications: l, guildMuted: s, guildMessageNotifications: r } = this.props,
            a = l === e;
        (null == l || l === X.orn.NULL) && e === r && (a = !0);
        let d = this.getChannelNameForLabel();
        e === X.orn.ALL_MESSAGES
            ? ((t = q.intl.formatToPlainString(q.t.TjtVTh, { channelName: d })), (i = "all"))
            : e === X.orn.ONLY_MENTIONS
              ? ((t = q.intl.formatToPlainString(q.t["3oPQOG"], { channelName: d })), (i = "mentions"))
              : ((t = q.intl.formatToPlainString(q.t.BvQ24S, { channelName: d })), (i = "nothing"));
        let o = this.getOverrideLabelId(i);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(z.s, { id: o, children: t }),
                (0, n.jsx)(W.J, {
                    checked: !s && a,
                    disabled: s,
                    labeledBy: o,
                    onChange: this.handleRadioChange.bind(this, e),
                }),
            ],
        });
    }
    renderName() {
        let e,
            t,
            { channel: i } = this.props;
        null != i.parent_id && (e = D.A.getChannel(i.parent_id));
        let l = (0, M.gU)(i);
        if (i.type === X.rbe.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
            let e = k.A.getCategories(i.guild_id);
            t = q.intl.formatToPlainString(q.t["2KzH89"], { num: null != e[i.id] ? e[i.id].length : 0 });
        } else
            t =
                null != e
                    ? q.intl.formatToPlainString(q.t.L1zJgb, { categoryName: (0, y.m1)(e, H.default, U.A) })
                    : q.intl.string(q.t.uIzfCE);
        return (0, n.jsxs)(K.A, {
            grow: 1,
            className: $.VW,
            role: "cell",
            children: [
                null != l ? (0, n.jsx)(l, { className: $.Kk }) : null,
                (0, n.jsxs)("div", {
                    className: $.aT,
                    children: [
                        (0, n.jsx)(S.E, {
                            variant: "text-md/semibold",
                            className: $.HA,
                            children: (0, y.m1)(i, H.default, U.A),
                        }),
                        (0, n.jsx)(S.E, { variant: "text-xs/normal", className: $.uM, children: t }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, n.jsxs)(K.A, {
            grow: 0,
            shrink: 0,
            role: "presentation",
            className: $.Pm,
            justify: K.A.Justify.AROUND,
            align: K.A.Align.CENTER,
            children: [
                (0, n.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(X.orn.ALL_MESSAGES),
                }),
                (0, n.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(X.orn.ONLY_MENTIONS),
                }),
                (0, n.jsx)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: t ? $.mH : $.HI,
                    children: this.renderMessageNotificationsRadioOption(X.orn.NO_MESSAGES),
                }),
                (0, n.jsxs)(K.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    role: "cell",
                    className: $.dy,
                    children: [
                        (0, n.jsx)(z.s, {
                            id: this.getOverrideLabelId("mute"),
                            children: q.intl.formatToPlainString(q.t.UovZPr, {
                                channelName: this.getChannelNameForLabel(),
                            }),
                        }),
                        (0, n.jsx)(W.J, {
                            checked: e,
                            labeledBy: this.getOverrideLabelId("mute"),
                            onChange: this.handleMute,
                        }),
                    ],
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state,
            { channel: t } = this.props;
        return (0, n.jsxs)(Z.Z, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            role: "row",
            className: e ? $.J$ : $.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, n.jsx)("div", {
                    role: "cell",
                    children: (0, n.jsx)(Q.A, {
                        "aria-label": q.intl.formatToPlainString(q.t.Gd4bTU, { name: (0, y.m1)(t, H.default, U.A) }),
                        className: $.ZY,
                        onClick: this.handleDelete,
                    }),
                }),
            ],
        });
    }
}
var et = i(503698),
    ei = i.n(et);
function en(e) {
    let { guildId: t } = e,
        i = (0, u.cf)([Y.Ay], () => ({
            highligths: Y.Ay.getNotifyHighlights(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
        })),
        l = C.A.updateGuildNotificationSettings;
    return (0, n.jsxs)(N.B, {
        gap: 24,
        children: [
            (0, n.jsx)(x.d, {
                checked: i.suppressEveryone,
                label: q.intl.format(q.t.OWiWAp, {}),
                onChange: (e) => l(t, { suppress_everyone: e }, V.G_.suppressEveryone(e)),
            }),
            (0, n.jsx)(x.d, {
                checked: i.suppressRoles,
                label: q.intl.string(q.t["O/QdoD"]),
                onChange: (e) => l(t, { suppress_roles: e }, V.G_.suppressRoles(e)),
            }),
            (0, n.jsx)(x.d, {
                label: q.intl.string(q.t.gPuteJ),
                description: q.intl.string(q.t["Vw/Xn8"]),
                checked: i.highligths === X.guM.ENABLED,
                onChange: (e) => l(t, { notify_highlights: e ? X.guM.ENABLED : X.guM.DISABLED }, V.G_.highlights(e)),
            }),
            (0, n.jsx)(x.d, {
                checked: i.muteScheduledEvents,
                label: q.intl.string(q.t.ONG3Yz),
                onChange: (e) => l(t, { mute_scheduled_events: e }, V.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(x.d, {
                checked: i.mobilePush,
                label: q.intl.string(q.t.h1DL66),
                onChange: (e) => l(t, { mobile_push: e }, V.G_.mobilePush(e)),
            }),
        ],
    });
}
var el = i(150934),
    es = i(887560),
    er = i(393432),
    ea = i(24873);
function ed(e) {
    let {
        channel: { type: t },
    } = e;
    return (0, R.tr)(t) || t === X.rbe.GUILD_CATEGORY;
}
function eo(e) {
    let { guildId: t, onSelected: i } = e,
        { channels: l, categories: s } = (0, u.cf)([k.A], () => {
            let e = k.A.getCategories(t);
            return { channels: (0, O.A)(e._categories, e, ed), categories: e };
        }),
        a = r()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== X.rbe.GUILD_CATEGORY || (null != s[t.id] && s[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, y.m1)(t, H.default, U.A) };
            })
            .value();
    return (0, n.jsx)(m.p, {
        description: q.intl.string(q.t["2Y9ZfA"]),
        value: X.dJq,
        onChange: i,
        options: a,
        renderOptionLabel: function (e) {
            let t = D.A.getChannel(e.value);
            if (null == t) return e.label;
            let i = D.A.getChannel(t.parent_id),
                l = null != i ? i.name : null;
            return (0, n.jsx)(g.X, { icon: (0, M.gU)(t), title: e.label, subtitle: l });
        },
        placeholder: q.intl.string(q.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
var ec = i(632422);
let eu = l.forwardRef(function (e, t) {
    let { guildId: i } = e,
        [s, r] = l.useState(null),
        a = (0, u.yK)([D.A, Y.Ay], () =>
            (0, F.ct)(Y.Ay.getChannelOverrides(i), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            })
                .map((e) => D.A.getChannel(e))
                .filter(B.Vq),
        ),
        d = (0, u.bG)([k.A], () => k.A.getCategories(i)),
        o = a.map((e, t) =>
            (0, n.jsxs)(
                l.Fragment,
                {
                    children: [
                        (0, n.jsx)(eh, { channel: e, categories: d, autoFocus: s === e.id }),
                        t < a.length - 1 && (0, n.jsx)("div", { className: ec.me, role: "presentation" }),
                    ],
                },
                e.id,
            ),
        );
    return (0, n.jsxs)("div", {
        ref: t,
        children: [
            (0, n.jsx)(eo, {
                guildId: i,
                onSelected: function (e) {
                    if (null != a.find((t) => t.id === e)) return;
                    let t = D.A.getChannel(e);
                    null != t &&
                        (C.A.updateChannelOverrideSettings(
                            i,
                            e,
                            {
                                muted: !1,
                                message_notifications: Y.Ay.resolvedMessageNotifications(t),
                                flags: (0, er.mD)(
                                    Y.Ay.getChannelIdFlags(t.guild_id, t.id),
                                    Y.Ay.resolveUnreadSetting(t),
                                ),
                            },
                            V.fd.OverrideCreated,
                        ),
                        r(e));
                },
            }),
            o.length > 0 &&
                (0, n.jsxs)("div", {
                    className: ec.tp,
                    role: "table",
                    "aria-label": q.intl.string(q.t.O4TIvi),
                    children: [
                        (0, n.jsxs)("div", {
                            className: ec.nM,
                            role: "row",
                            children: [
                                (0, n.jsx)("div", {
                                    className: ec._k,
                                    role: "columnheader",
                                    children: (0, n.jsx)(S.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.uShwWv),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(S.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.hZrr6k),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(S.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.JzbSEY),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(S.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t.y59NJm),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: ec.km,
                                    role: "columnheader",
                                    children: (0, n.jsx)(S.E, {
                                        variant: "text-xs/bold",
                                        color: "text-muted",
                                        children: q.intl.string(q.t["pGn/bJ"]),
                                    }),
                                }),
                            ],
                        }),
                        o.length > 0 && (0, n.jsx)("div", { className: ec.BM, role: "rowgroup", children: o }),
                    ],
                }),
        ],
    });
});
function eh(e) {
    let { channel: t, categories: i, autoFocus: s } = e,
        r = (0, u.bG)([D.A], () => D.A.getChannel(t?.parent_id)),
        a = (0, es.bH)(t),
        d = l.useRef(null);
    if (
        (l.useEffect(() => {
            s && d.current?.scrollIntoView({ behavior: "smooth" });
        }, []),
        null == t)
    )
        return null;
    let o = q.intl.string(q.t.uIzfCE),
        c = (0, M.gU)(t);
    t.type === X.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id
        ? (o = q.intl.formatToPlainString(q.t["2KzH89"], { num: null != i[t.id] ? i[t.id].length : 0 }))
        : null != r && (o = q.intl.formatToPlainString(q.t.L1zJgb, { categoryName: (0, y.m1)(r, H.default, U.A) }));
    let h = (0, ea.hJ)(a.unread, a.notification);
    return (0, n.jsxs)("div", {
        ref: d,
        className: ei()(ec.nM, ec.Ix, ec.WG),
        role: "row",
        children: [
            (0, n.jsxs)("div", {
                className: ei()(ec._k, ec.cU),
                role: "cell",
                children: [
                    null != c
                        ? (0, n.jsx)(c, {
                              size: "custom",
                              color: "currentColor",
                              height: 20,
                              width: 20,
                              className: ec.Kk,
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(S.E, {
                                variant: "text-md/semibold",
                                className: ec.cU,
                                children: (0, y.m1)(t, H.default, U.A),
                            }),
                            (0, n.jsx)(S.E, { variant: "text-xs/medium", className: ec.cU, children: o }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(el.S, {
                        checked: h === ea.N9.ALL_MESSAGES,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.ALL_MESSAGES),
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(el.S, {
                        checked: h === ea.N9.HYBRID,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.HYBRID),
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(el.S, {
                        checked: h === ea.N9.MENTIONS,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.MENTIONS),
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                className: ec.km,
                role: "cell",
                children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(el.S, {
                        checked: h === ea.N9.NOTHING,
                        label: "",
                        onChange: () => (0, es.gN)(t.guild_id, t.id, ea.N9.NOTHING),
                    }),
                }),
            }),
            (0, n.jsx)("div", {
                role: "cell",
                children: (0, n.jsx)(Q.A, {
                    "aria-label": q.intl.formatToPlainString(q.t.Gd4bTU, { name: (0, y.m1)(t, H.default, U.A) }),
                    onClick: () => (0, es.Au)(t.guild_id, t.id),
                    className: ec.DT,
                }),
            }),
        ],
    });
}
function eg(e) {
    let { guildId: t } = e,
        i = (0, u.bG)([I.A], () => I.A.getGuildAlertSettings()[t]);
    return (0, n.jsxs)(N.B, {
        gap: 24,
        children: [
            (0, n.jsx)(x.d, {
                checked: !i?.disableRaidAlertNag,
                label: q.intl.string(q.t.u6dc5B),
                description: q.intl.string(q.t.z8Td48),
                onChange: (e) =>
                    (0, T.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        T.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, n.jsx)(x.d, {
                checked: !i?.disableRaidAlertPush,
                label: q.intl.string(q.t.P8MG6q),
                description: q.intl.string(q.t.PyxXs8),
                onChange: (e) =>
                    (0, T.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertPush = !e;
                        },
                        T.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
        ],
    });
}
var em = i(702841),
    eN = i(270003),
    ex = i(355097);
function eA(e) {
    var t;
    let { guildId: i } = e,
        l = (0, em.bG)([P.A], () => P.A.getGuild(i)),
        s = (0, em.bG)([Y.Ay], () => Y.Ay.isMuted(i)),
        r = (0, em.bG)([Y.Ay], () => Y.Ay.getMuteConfig(i));
    return null == l
        ? null
        : (0, n.jsxs)(eN.n, {
              children: [
                  (0, n.jsx)(x.d, {
                      label: q.intl.format(q.t["J+7D9E"], { name: l.name }),
                      description: q.intl.string(q.t.IngcUv),
                      checked: s,
                      onChange: function (e) {
                          C.A.updateGuildNotificationSettings(i, { muted: e }, V.G_.muted(e));
                      },
                  }),
                  s &&
                      (0, n.jsx)(A.l, {
                          label: q.intl.string(q.t.Ztu2Yo),
                          description:
                              null == (t = r) || null == t.end_time
                                  ? null
                                  : q.intl.formatToPlainString(q.t.j7h4AJ, {
                                        endTime: new Date(t.end_time).toLocaleString(q.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onSelectionChange: function (e) {
                              let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                              C.A.updateGuildNotificationSettings(
                                  i,
                                  { mute_config: { selected_time_window: e, end_time: t }, muted: !0 },
                                  V.fd.Muted,
                              );
                          },
                          options: (0, F.b8)(),
                          value: r?.selected_time_window ?? ex.Xx.ALWAYS,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
              ],
          });
}
var ef = i(790782);
function ej(e) {
    let { guildId: t } = e,
        i = (0, em.bG)([Y.Ay], () => {
            let e = Y.Ay.getGuildUnreadSetting(t),
                i = Y.Ay.getMessageNotifications(t);
            return e === ef.e.UNSET ? (i === X.orn.ALL_MESSAGES ? ef.e.ALL_MESSAGES : ef.e.ONLY_MENTIONS) : e;
        }),
        l = (0, em.bG)([Y.Ay], () => Y.Ay.getMessageNotifications(t)),
        s = (0, ea.hJ)(i, l);
    return (0, n.jsx)(j.z, {
        label: q.intl.string(q.t.lprV7V),
        value: s,
        options: [
            { name: q.intl.string(q.t.hZrr6k), value: ea.N9.ALL_MESSAGES },
            { name: q.intl.string(q.t.JzbSEY), value: ea.N9.HYBRID },
            { name: q.intl.string(q.t.y59NJm), value: ea.N9.MENTIONS },
            { name: q.intl.string(q.t["pGn/bJ"]), value: ea.N9.NOTHING },
        ],
        onChange: (e) => {
            let i;
            return (
                (i = Y.Ay.getGuildFlags(t)),
                void (e === ea.N9.ALL_MESSAGES
                    ? C.A.updateGuildNotificationSettings(
                          t,
                          {
                              message_notifications: X.orn.ALL_MESSAGES,
                              flags: (0, er.md)(i, ex.n3.UNREADS_ALL_MESSAGES),
                          },
                          V.fd.PresetAll,
                      )
                    : e === ea.N9.HYBRID
                      ? C.A.updateGuildNotificationSettings(
                            t,
                            {
                                message_notifications: X.orn.ONLY_MENTIONS,
                                flags: (0, er.md)(i, ex.n3.UNREADS_ALL_MESSAGES),
                            },
                            V.fd.PresetHybrid,
                        )
                      : e === ea.N9.MENTIONS
                        ? C.A.updateGuildNotificationSettings(
                              t,
                              {
                                  message_notifications: X.orn.ONLY_MENTIONS,
                                  flags: (0, er.md)(i, ex.n3.UNREADS_ONLY_MENTIONS),
                              },
                              V.fd.PresetMentions,
                          )
                        : e === ea.N9.NOTHING &&
                          C.A.updateGuildNotificationSettings(
                              t,
                              {
                                  message_notifications: X.orn.NO_MESSAGES,
                                  flags: (0, er.md)(i, ex.n3.UNREADS_ONLY_MENTIONS),
                              },
                              V.fd.PresetNothing,
                          ))
            );
        },
    });
}
var ep = i(35258);
function eb(e) {
    return (0, n.jsx)("div", {
        className: ep.bV,
        children: (0, n.jsx)(_.D, {
            variant: "text-xs/bold",
            className: ep.l_,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function eS(e) {
    return (0, n.jsx)("div", {
        className: ep.yV,
        children: (0, n.jsx)(S.E, { variant: "text-sm/normal", color: "text-subtle", children: e.description }),
    });
}
function ev(e) {
    return (0, n.jsxs)("div", {
        children: [
            null != e.title && (0, n.jsx)(eb, { title: e.title }),
            (0, n.jsx)("div", {
                className: ei()(ep.f5, { [ep.ou]: !0 !== e.noPadding, [ep._9]: !0 !== e.noContainer }),
                children: e.children,
            }),
        ],
    });
}
function e_(e) {
    let { guildId: t, ...i } = e,
        l = (0, L._g)(t);
    return (0, n.jsxs)(c.Modal, {
        ...i,
        title: q.intl.string(q.t.h850Ss),
        actions: [{ text: q.intl.string(q.t.i4jeWR), onClick: i.onClose }],
        children: [
            (0, n.jsx)(ev, { noPadding: !0, noContainer: !0, children: (0, n.jsx)(eA, { guildId: t }) }),
            (0, n.jsx)(ev, { children: (0, n.jsx)(ej, { guildId: t }) }),
            (0, n.jsx)(ev, { title: q.intl.string(q.t["31DySj"]), children: (0, n.jsx)(en, { guildId: t }) }),
            l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(eb, { title: q.intl.string(q.t.D9yVAH) }),
                        (0, n.jsx)(eS, { description: q.intl.string(q.t["0PhAOH"]) }),
                        (0, n.jsx)(ev, { children: (0, n.jsx)(eg, { guildId: t }) }),
                    ],
                }),
            (0, n.jsx)(eb, { title: q.intl.string(q.t.JrySi3) }),
            (0, n.jsx)(eu, { guildId: t }),
        ],
    });
}
function eE(e) {
    let { label: t, channelId: i } = e,
        [l, s] = (0, u.yK)([D.A], () => {
            let e = D.A.getChannel(i);
            return [e, e?.parent_id != null ? D.A.getChannel(e.parent_id) : null];
        });
    return null == l ? t : (0, n.jsx)(g.X, { icon: (0, M.gU)(l), title: t, subtitle: s?.name });
}
function eC(e) {
    let { muteConfig: t, muted: i, guild: l, handleCheckboxChange: s } = e,
        r = t?.selected_time_window ?? ex.Xx.ALWAYS;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: $.bj,
              children: [
                  (0, n.jsxs)(N.B, {
                      gap: 20,
                      children: [
                          (0, n.jsx)(x.d, {
                              label: q.intl.formatToPlainString(q.t["J+7D9E"], { name: l.name }),
                              description: q.intl.string(q.t["8wbTQ6"]),
                              checked: i,
                              onChange: (e) => s("muted", e, V.G_.muted(e)),
                          }),
                          i
                              ? (0, n.jsx)(A.l, {
                                    label: q.intl.string(q.t.Ztu2Yo),
                                    options: (0, F.b8)(),
                                    value: r,
                                    onSelectionChange: function (e) {
                                        if (null == l) return;
                                        let t = e > 0 ? d()().add(e, "second").toISOString() : null;
                                        C.A.updateGuildNotificationSettings(
                                            l.id,
                                            { muted: !0, mute_config: { selected_time_window: e, end_time: t } },
                                            V.fd.Muted,
                                        );
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                })
                              : null,
                      ],
                  }),
                  (0, n.jsx)(f.c, { gap: 20 }),
              ],
          });
}
function eG(e) {
    let { muted: t, messageNotifications: i, memberCount: l, handleRadioChange: s } = e;
    return (0, n.jsxs)("div", {
        className: $.YK,
        children: [
            (0, n.jsx)("div", {
                className: $.bj,
                children: (0, n.jsx)(j.z, {
                    label: q.intl.string(q.t.lprV7V),
                    disabled: t,
                    value: i,
                    onChange: (e) => s("message_notifications", e, V.G_.notifications(e)),
                    options: [
                        {
                            name: q.intl.string(q.t["n/bTaY"]),
                            value: X.orn.ALL_MESSAGES,
                            desc: null != l && l >= X._4N ? q.intl.string(q.t.Dh5p5j) : null,
                        },
                        { name: q.intl.format(q.t.L2hmYy, {}), value: X.orn.ONLY_MENTIONS },
                        { name: q.intl.string(q.t.CtVGyQ), value: X.orn.NO_MESSAGES },
                    ],
                }),
            }),
            (0, n.jsx)(f.c, {}),
        ],
    });
}
function eO(e) {
    let { guildId: t } = e,
        i = (0, L._g)(t),
        l = (0, u.bG)([I.A], () => I.A.getGuildAlertSettings()[t]);
    if (i)
        return (0, n.jsxs)("div", {
            className: $.YK,
            children: [
                (0, n.jsx)(p.l, {
                    className: $.bj,
                    children: (0, n.jsxs)(o.D, {
                        label: q.intl.string(q.t.D9yVAH),
                        description: q.intl.string(q.t["0PhAOH"]),
                        children: [
                            (0, n.jsx)(x.d, {
                                label: q.intl.string(q.t.u6dc5B),
                                description: q.intl.string(q.t.z8Td48),
                                checked: !l?.disableRaidAlertNag,
                                onChange: (e) =>
                                    (0, T.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertNag = !e;
                                        },
                                        T.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                            (0, n.jsx)(x.d, {
                                label: q.intl.string(q.t.P8MG6q),
                                description: q.intl.string(q.t.PyxXs8),
                                checked: !l?.disableRaidAlertPush,
                                onChange: (e) =>
                                    (0, T.TG)(
                                        t,
                                        (t) => {
                                            t.disableRaidAlertPush = !e;
                                        },
                                        T.Sb.INFREQUENT_USER_ACTION,
                                    ),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(f.c, {}),
            ],
        });
}
function ey(e) {
    let {
        suppressEveryone: t,
        suppressRoles: i,
        handleCheckboxChange: l,
        notifyHighlights: s,
        muteEvents: r,
        mobilePush: a,
        muted: d,
        guildId: o,
    } = e;
    return (0, n.jsxs)(N.B, {
        className: $.bj,
        gap: 16,
        children: [
            (0, n.jsx)(x.d, {
                label: q.intl.format(q.t.OWiWAp, {}),
                onChange: (e) => l("suppress_everyone", e, V.G_.suppressEveryone(e)),
                checked: t,
            }),
            (0, n.jsx)(f.c, {}),
            (0, n.jsx)(x.d, {
                label: q.intl.string(q.t["O/QdoD"]),
                onChange: (e) => l("suppress_roles", e, V.G_.suppressRoles(e)),
                checked: i,
            }),
            (0, n.jsx)(f.c, {}),
            (0, n.jsxs)(N.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(x.d, {
                        label: q.intl.string(q.t.gPuteJ),
                        onChange: (e) => {
                            C.A.updateGuildNotificationSettings(
                                o,
                                { notify_highlights: e ? X.guM.DISABLED : X.guM.ENABLED },
                                V.G_.highlights(!e),
                            );
                        },
                        checked: d || s === X.guM.DISABLED,
                        disabled: d,
                        description: q.intl.string(q.t["Vw/Xn8"]),
                    }),
                    (0, n.jsx)(b.Anchor, {
                        href: J.A.getArticleURL(X.MVz.HIGHLIGHTS),
                        children: (0, n.jsx)(S.E, {
                            variant: "text-sm/normal",
                            color: "text-link",
                            children: q.intl.string(q.t.PRBn9K),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(f.c, {}),
            (0, n.jsx)(x.d, {
                label: q.intl.string(q.t.ONG3Yz),
                checked: r,
                onChange: (e) => l("mute_scheduled_events", e, V.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(f.c, {}),
            (0, n.jsx)(x.d, {
                label: q.intl.string(q.t.h1DL66),
                checked: !d && a,
                disabled: d,
                onChange: (e) => l("mobile_push", e, V.G_.mobilePush(e)),
            }),
        ],
    });
}
function eM(e) {
    let { setNewChannelOverrides: t, newChannelOverrides: i, setLatestOverrideId: l, channels: s, categories: a } = e,
        d = r()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== X.rbe.GUILD_CATEGORY || (null != a[t.id] && a[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, y.m1)(t, H.default, U.A) };
            })
            .value();
    return (0, n.jsx)("div", {
        className: $.bj,
        children: (0, n.jsx)(m.p, {
            label: q.intl.string(q.t["Z+oF8h"]),
            description: q.intl.string(q.t["2Y9ZfA"]),
            value: X.dJq,
            placeholder: q.intl.string(q.t["Z+oF8h"]),
            renderOptionLabel: function (e) {
                return (0, n.jsx)(eE, { label: e.label, channelId: e.value });
            },
            options: d,
            onChange: function (e) {
                if (null == e) return;
                let n = new Set(i);
                (n.add(e), t(n), l(e));
            },
            "data-migration-pending": !0,
        }),
    });
}
function eL(e) {
    let {
            newChannelOverrides: t,
            channelOverrides: i,
            channels: s,
            categories: r,
            muted: a,
            setNewChannelOverrides: d,
            latestOverrideId: o,
            messageNotifications: c,
        } = e,
        u = l.useMemo(() => new Set([...t, ...(0, F.ct)(i)]), [i, t]),
        g = (0, v.r)(h.A.unsafe_rawColors.GREEN_360).hex();
    function m(e) {
        let i = new Set(t);
        (i.delete(e), d(i));
    }
    let N = s
        .map((e) => {
            let { channel: t } = e;
            if (!u.has(t.id) || (null != r[t.id] && 0 === r[t.id].length)) return null;
            let l = i[t.id];
            return (0, n.jsx)(
                ee,
                {
                    channel: t,
                    guildMuted: a,
                    muted: null != l && (0, G.tG)(l),
                    messageNotifications: null != l ? l.message_notifications : null,
                    guildMessageNotifications: c,
                    onDelete: m,
                    checkboxColor: g,
                    autoFocus: t.id === o,
                },
                t.id,
            );
        })
        .filter(B.Vq);
    return (
        (0 === u.size || 0 === N.length) &&
            N.push(
                (0, n.jsx)(
                    "div",
                    {
                        className: $.uZ,
                        role: "row",
                        children: (0, n.jsx)("div", {
                            role: "cell",
                            children: (0, n.jsx)(S.E, {
                                className: $.sr,
                                variant: "text-sm/semibold",
                                children: q.intl.string(q.t["2Y9ZfA"]),
                            }),
                        }),
                    },
                    "placeholder",
                ),
            ),
        (0, n.jsxs)("div", {
            role: "table",
            "aria-label": q.intl.string(q.t.O4TIvi),
            children: [
                (0, n.jsxs)("div", {
                    className: $.n_,
                    role: "row",
                    children: [
                        (0, n.jsx)("div", {
                            className: $.$m,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.Bv,
                                children: q.intl.string(q.t.uShwWv),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: q.intl.string(q.t.e29Z12),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: q.intl.string(q.t.DD6gNd),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: q.intl.string(q.t.CtVGyQ),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: $.Lv,
                            role: "columnheader",
                            children: (0, n.jsx)(_.D, {
                                variant: "eyebrow",
                                className: $.BO,
                                children: (0, n.jsx)(E.m, {
                                    text: q.intl.string(q.t["8wbTQ6"]),
                                    position: "bottom",
                                    children: (0, n.jsx)("span", { children: q.intl.string(q.t.sWmtI6) }),
                                }),
                            }),
                        }),
                    ],
                }),
                N,
            ],
        })
    );
}
function eI(e) {
    let { guildId: t, onClose: i, transitionState: s } = e,
        r = (0, u.bG)([k.A], () => k.A.getCategories(t)),
        a = (0, u.bG)([P.A], () => P.A.getGuild(t)),
        d = (0, u.bG)([w.A], () => w.A.getMemberCount(t)),
        {
            suppressEveryone: o,
            suppressRoles: h,
            muteEvents: g,
            mobilePush: m,
            muted: N,
            muteConfig: x,
            messageNotifications: A,
            channelOverrides: f,
            notifyHighlights: j,
        } = (0, u.cf)([Y.Ay], () => ({
            suppressEveryone: Y.Ay.isSuppressEveryoneEnabled(t),
            suppressRoles: Y.Ay.isSuppressRolesEnabled(t),
            muteEvents: Y.Ay.isMuteScheduledEventsEnabled(t),
            mobilePush: Y.Ay.isMobilePushEnabled(t),
            muted: Y.Ay.isMuted(t),
            muteConfig: Y.Ay.getMuteConfig(t),
            messageNotifications: Y.Ay.getMessageNotifications(t),
            channelOverrides: Y.Ay.getChannelOverrides(t),
            notifyHighlights: Y.Ay.getNotifyHighlights(t),
        })),
        [p, b] = l.useState(new Set()),
        [S, v] = l.useState(null),
        _ = l.useMemo(
            () =>
                (0, O.A)(r._categories, r, (e) => {
                    let {
                        channel: { type: t },
                    } = e;
                    return (0, R.tr)(t) || t === X.rbe.GUILD_CATEGORY;
                }),
            [r],
        );
    function E(e, i, n) {
        C.A.updateGuildNotificationSettings(t, { [e]: i }, n);
    }
    return (0, n.jsxs)(c.Modal, {
        title: q.intl.string(q.t.h850Ss),
        actions: [{ text: q.intl.string(q.t.i4jeWR), onClick: i }],
        onClose: i,
        transitionState: s,
        children: [
            (0, n.jsx)(eC, { muteConfig: x, muted: N, guild: a, handleCheckboxChange: E }),
            (0, n.jsx)(eG, {
                muted: N,
                messageNotifications: A,
                memberCount: d,
                handleRadioChange: function (e, i, n) {
                    C.A.updateGuildNotificationSettings(t, { [e]: i }, n);
                },
            }),
            (0, n.jsx)(eO, { guildId: t }),
            (0, n.jsx)(ey, {
                suppressEveryone: o,
                suppressRoles: h,
                handleCheckboxChange: E,
                notifyHighlights: j,
                muteEvents: g,
                mobilePush: m,
                muted: N,
                guildId: t,
            }),
            (0, n.jsx)(eM, {
                setNewChannelOverrides: b,
                newChannelOverrides: p,
                setLatestOverrideId: v,
                channels: _,
                categories: r,
            }),
            (0, n.jsx)(eL, {
                newChannelOverrides: p,
                channelOverrides: f,
                channels: _,
                categories: r,
                muted: N,
                setNewChannelOverrides: b,
                latestOverrideId: S,
                messageNotifications: A,
            }),
        ],
    });
}
function eT(e) {
    let { ...t } = e;
    return (0, F.os)("NotificationSettingsModal") ? (0, n.jsx)(e_, { ...t }) : (0, n.jsx)(eI, { ...t });
}

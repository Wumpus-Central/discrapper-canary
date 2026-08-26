i.r(l), i.d(l, { default: () => eA });
var n = i(477900),
    t = i(582128),
    a = i(17928),
    r = i(228366),
    c = i(47167),
    s = i(726249),
    d = i(280450),
    o = i(71393),
    u = i(309010),
    h = i(662980),
    g = i(683180),
    p = i(595332),
    A = i(742589),
    f = i(131047),
    x = i(375708),
    I = i(999900);
function m(e) {
    let { channel: l, channelName: i, guild: t, toolbar: a } = e;
    return (0, n.jsx)("div", {
        className: I.SC,
        children: (0, n.jsx)(
            A.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: I.DD,
                "aria-label": x.intl.string(x.t.BIYAqa),
                children: (0, f.zF)({ channel: l, channelName: i, guild: t }),
            },
            `header-${l.id}`,
        ),
    });
}
i(321073);
var b = i(866665),
    y = i(408278),
    j = i(811893),
    C = i(70688),
    v = i(47294),
    E = i(16961),
    N = i(625180),
    T = i(91242),
    _ = i(580954),
    k = i(672929),
    P = i(494126),
    w = i(5867);
async function M(e) {
    null == T.A.getFrame(e) ||
        ((await (0, P.refreshProxyTicket)(e)) &&
            ((0, P.promoteFrame)(e),
            (0, P.updateFramePanelMode)(e, w.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var S = i(574172),
    O = i(869146),
    R = i(976860),
    G = i(808728),
    V = i(576705),
    B = i(673724),
    D = i(948230),
    z = i(972786),
    F = i(621466),
    H = i(453903),
    L = i(922016),
    W = i(980707),
    U = i(477782),
    Y = i(22231),
    K = i(663417),
    q = i(625903),
    X = i(624479),
    Z = i(365199),
    $ = i(18739),
    J = i(976814),
    Q = i(295813),
    ee = i(452394);
function el(e) {
    let {
            onRefresh: l,
            isRefreshing: i,
            canEdit: r,
            onEdit: c,
            canRemix: s,
            remixing: d,
            onRemix: o,
            projectId: u,
            sharingEnabled: h,
            onToggleSharing: g,
        } = e,
        p = t.useRef(null),
        A = x.intl.string(x.t["UKOtz+"]),
        f = (0, a.bG)([$.Ay], () => null != u && null != $.Ay.getSettings(u), [u]),
        I = t.useCallback(() => {
            null != u && (0, J.A)(u);
        }, [u]);
    return (0, n.jsx)(L.Y, {
        targetElementRef: p,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, F.vq)(document.activeElement, HTMLIFrameElement)) return H.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(W.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": A,
                children: (0, n.jsxs)(U.rX, {
                    children: [
                        r
                            ? (0, n.jsx)(U.Dr, {
                                  id: "edit",
                                  icon: Y.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: Y.PencilIcon },
                                  label: x.intl.string(Q.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, n.jsx)(U.Dr, {
                            id: "refresh",
                            icon: K.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: K.RefreshIcon },
                            label: x.intl.string(Q.default.xKexN1),
                            disabled: i,
                            action: l,
                        }),
                        f
                            ? (0, n.jsx)(U.Dr, {
                                  id: "settings",
                                  icon: q.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: q.SettingsIcon },
                                  label: x.intl.string(Q.default.gTMvzD),
                                  action: I,
                              })
                            : null,
                        s
                            ? (0, n.jsx)(U.Dr, {
                                  id: "remix",
                                  icon: X.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: X.CopyIcon },
                                  label: x.intl.string(Q.default["V+azw/"]),
                                  disabled: d,
                                  action: o,
                              })
                            : null,
                        null != g
                            ? (0, n.jsx)(U.sL, {
                                  id: "sharing",
                                  label: x.intl.string(Q.default.EHMPvA),
                                  checked: !0 === h,
                                  action: g,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, n.jsx)("div", {
                ref: p,
                className: ee.h,
                children: (0, n.jsx)(b.m, {
                    text: A,
                    ariaHidden: !0,
                    children: (0, n.jsx)(y.K, {
                        "aria-label": A,
                        icon: Z.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
var ei = i(534890),
    en = i(27989),
    et = i(403853);
function ea(e) {
    let { badge: l, ...i } = e,
        a = t.useId();
    if (null == l) return (0, n.jsx)(ei.ChatIcon, { ...i });
    let r = "custom" === i.size ? { width: i.width, height: i.height } : (0, en.J)(i.size ?? "md");
    return (0, n.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: i.className,
        style: i.style,
        children: [
            (0, n.jsx)("defs", {
                children: (0, n.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, n.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, n.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, n.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, n.jsx)(ei.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: i.color,
                    colorClass: i.colorClass,
                }),
            }),
            (0, n.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? et.a : et.Z }),
        ],
    });
}
var er = i(647514),
    ec = i(573163),
    es = i(652215),
    ed = i(746080),
    eo = i(165610);
function eu(e) {
    let { applicationId: l, surface: i, guildId: r, channelId: c, project: s, chatOpen: d, onToggleChat: o } = e,
        u = (0, k.A)(l, i),
        { badge: h, mentionCount: g } = (0, a.cf)([ec.Ay], () => {
            let e = ec.Ay.getMentionCount(c);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ec.Ay.hasUnread(c)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [c]),
        p = (0, E.G)(),
        {
            remix: A,
            remixing: f,
            canRemix: I,
        } = (function (e, l) {
            let [i, n] = t.useState(!1),
                a = null != l && null != e && ((0, z.P)(e) || (0, B.tr)(e));
            return {
                remix: t.useCallback(async () => {
                    if (!i && null != l && null != e) {
                        n(!0);
                        try {
                            await (0, er.A)(e, l);
                        } finally {
                            n(!1);
                        }
                    }
                }, [i, l, e]),
                remixing: i,
                canRemix: a,
            };
        })(s, r),
        m = null != s && (0, z.P)(s),
        P = null != r && null != s,
        w = t.useCallback(() => {
            null != r && null != s && (0, R.pX)(es.BVt.CHANNEL(r, ed.VV.VIBEGRATIONS, s.id));
        }, [r, s]),
        F = (0, eo.x1)(u) && u.data.proxyTicketRefreshing,
        H = t.useCallback(() => {
            null == u || F || N.A.refreshProxyTicket(u.id);
        }, [u, F]),
        L = t.useCallback(() => {
            null != u && (0, v.A)({ onConfirm: () => M(u.id) });
        }, [u]),
        W = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                O.A.getWindowOpen(es.MLl.ACTIVITY_POPOUT) &&
                T.A.getMainFrame()?.id === e &&
                (0, S.close)(es.MLl.ACTIVITY_POPOUT),
                (0, _.A)().leaveFrame(e),
                (0, R.pX)(
                    (function (e, l) {
                        if (null == e) return es.BVt.FRIENDS;
                        let i = G.Ay.getDefaultChannel(e);
                        if (null != i && i.id !== l) return es.BVt.CHANNEL(e, i.id);
                        let n = G.Ay.getFirstChannel(e, (e) => {
                            let { channel: i } = e;
                            return i.id !== l && V.A.can(es.xBc.VIEW_CHANNEL, i);
                        });
                        return null != n ? es.BVt.CHANNEL(e, n.id) : es.BVt.FRIENDS;
                    })(r, (0, eo.h)(i)),
                );
        }, [u?.id, r, i]),
        U = x.intl.string(!0 === d ? Q.default.YdgE0j : Q.default.aWVf4j),
        Y = !0 === d ? null : h,
        K = [U];
    "mention" === Y
        ? K.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: g }))
        : "unread" === Y && K.push(x.intl.string(x.t.x5zAGZ));
    let q = t.useCallback((e) => (0, n.jsx)(ea, { ...e, badge: Y }), [Y]),
        X =
            null == o
                ? null
                : (0, n.jsx)(b.m, {
                      text: U,
                      ariaHidden: !0,
                      children: (0, n.jsx)(y.K, {
                          "aria-label": K.join(", "),
                          "aria-pressed": !0 === d,
                          icon: q,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, eo.x1)(u)) return X;
    let Z = x.intl.string(Q.default["6g22y7"]),
        $ = x.intl.string(Q.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(el, {
                projectId: s?.id,
                onRefresh: H,
                isRefreshing: F,
                canEdit: P,
                onEdit: w,
                canRemix: I,
                remixing: f,
                onRemix: A,
                sharingEnabled: null != s && (0, B.tr)(s),
                onToggleSharing: m && null != s ? () => (0, D.gv)(s.id, !(0, B.tr)(s)) : void 0,
            }),
            X,
            p
                ? (0, n.jsx)(b.m, {
                      text: Z,
                      ariaHidden: !0,
                      children: (0, n.jsx)(y.K, {
                          "aria-label": Z,
                          icon: j.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: L,
                      }),
                  })
                : null,
            (0, n.jsx)(b.m, {
                text: $,
                ariaHidden: !0,
                children: (0, n.jsx)(y.K, {
                    "aria-label": $,
                    icon: C.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: W,
                }),
            }),
        ],
    });
}
var eh = i(155007),
    eg = i(899154),
    ep = i(955999);
function eA(e) {
    let l,
        i,
        A,
        f,
        { channel: x } = e,
        I = (0, g.B9)(x.topic),
        b =
            ((i = null != (l = (0, g.B9)(x?.topic))),
            (A = x?.guild_id ?? null),
            (f = (0, a.bG)([o.A, V.A], () => {
                let e = null != A ? o.A.getGuild(A) : null;
                return null != e && V.A.can(es.xBc.MANAGE_GUILD, e);
            }, [A])),
            t.useEffect(() => {
                if (!i || null == l) return;
                let e = z.A.getProjectsFetchState();
                (null == e || "error" === e.type || (f && null == z.A.findProjectByApplicationId(l))) &&
                    (0, D.hF)(A ?? void 0);
            }, [i, l, A, f]),
            (0, a.bG)([z.A], () => {
                if (null == l) return null;
                let e = z.A.findProjectByApplicationId(l);
                return null == e || (0, z.P)(e) || (f && e.guild_id === A) ? e : null;
            }, [l, f, A])),
        y = (0, c.Ay)(x),
        j = (0, a.bG)([o.A], () => o.A.getGuild(x.guild_id), [x.guild_id]),
        C = (0, a.bG)([p.A], () => p.A.isChatOpen(x.id), [x.id]),
        v = t.useRef(!1),
        E = t.useCallback(
            (e) => {
                (v.current = !e), (0, h.T)(x.id, e);
            },
            [x.id],
        ),
        N = t.useCallback(() => E(!C), [C, E]),
        T = t.useCallback(() => E(!1), [E]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== x.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== x.id ||
                v.current ||
                (0, h.T)(x.id, !0);
        }
        return (v.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [x.id]);
    let _ = t.useMemo(() => ({ channel: x, guild: j ?? void 0, open: C, onClose: T }), [x, j, C, T]),
        {
            availability: k,
            activeMode: P,
            widgetApplicationId: w,
        } = (0, eg.q)({
            applicationId: I ?? null,
            previewApplicationId: b?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: b?.install_scope ?? null,
        }),
        M = t.useMemo(() => ({ ...k, modes: null != P ? [P] : [], defaultMode: P, showModeSwitch: !1 }), [k, P]),
        S = t.useMemo(() => ({ type: eo.U4.APP_CHANNEL, channelId: x.id, guildId: x.guild_id ?? void 0 }), [x]);
    if (null == I) return null;
    let O = (0, n.jsx)(m, {
        channel: x,
        channelName: y,
        guild: j,
        toolbar: (0, n.jsx)(eu, {
            applicationId: I,
            surface: S,
            guildId: x.guild_id,
            channelId: x.id,
            project: b ?? null,
            chatOpen: C,
            onToggleChat: N,
        }),
    });
    return (0, n.jsxs)("div", {
        className: ep.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, n.jsx)(s.HI, { location: j?.name, subsection: y ?? void 0 }),
            (0, n.jsx)(eh.A, {
                availability: M,
                activeMode: P,
                widgetApplicationId: w,
                projectId: b?.id ?? null,
                previewApplicationId: b?.preview_application_id ?? null,
                applicationId: I,
                surface: S,
                header: O,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: _,
            }),
        ],
    });
}

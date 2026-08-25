l.r(i), l.d(i, { default: () => ef });
var n = l(477900),
    t = l(582128),
    a = l(17928),
    r = l(228366),
    s = l(47167),
    c = l(726249),
    d = l(280450),
    o = l(71393),
    u = l(309010),
    h = l(662980),
    g = l(683180),
    p = l(595332),
    x = l(742589),
    f = l(131047),
    m = l(375708),
    A = l(999900);
function I(e) {
    let { channel: i, channelName: l, guild: t, toolbar: a } = e;
    return (0, n.jsx)("div", {
        className: A.SC,
        children: (0, n.jsx)(
            x.A,
            {
                guildId: i.guild_id,
                channelId: i.id,
                channelType: i.type,
                hideSearch: !0,
                toolbar: a,
                className: A.DD,
                "aria-label": m.intl.string(m.t.BIYAqa),
                children: (0, f.zF)({ channel: i, channelName: l, guild: t }),
            },
            `header-${i.id}`,
        ),
    });
}
l(321073);
var b = l(866665),
    C = l(408278),
    y = l(811893),
    j = l(70688),
    v = l(47294),
    E = l(16961),
    N = l(625180),
    T = l(91242),
    k = l(580954),
    w = l(672929),
    _ = l(494126),
    P = l(5867);
async function M(e) {
    null == T.A.getFrame(e) ||
        ((await (0, _.refreshProxyTicket)(e)) &&
            ((0, _.promoteFrame)(e),
            (0, _.updateFramePanelMode)(e, P.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var S = l(574172),
    O = l(869146),
    R = l(976860),
    V = l(808728),
    z = l(576705),
    D = l(673724),
    H = l(948230),
    F = l(972786),
    G = l(621466),
    B = l(453903),
    L = l(922016),
    W = l(980707),
    U = l(477782),
    Y = l(22231),
    K = l(663417),
    q = l(625903),
    X = l(624479),
    Z = l(365199),
    $ = l(18739),
    J = l(976814),
    Q = l(295813),
    ee = l(452394);
function ei(e) {
    let {
            onRefresh: i,
            isRefreshing: l,
            canEdit: r,
            onEdit: s,
            canRemix: c,
            remixing: d,
            onRemix: o,
            projectId: u,
            sharingEnabled: h,
            onToggleSharing: g,
        } = e,
        p = t.useRef(null),
        x = m.intl.string(m.t["UKOtz+"]),
        f = (0, a.bG)([$.Ay], () => null != u && null != $.Ay.getSettings(u), [u]),
        A = t.useCallback(() => {
            null != u && (0, J.A)(u);
        }, [u]);
    return (0, n.jsx)(L.Y, {
        targetElementRef: p,
        align: "right",
        position: "bottom",
        onRequestClose: (e, i) => {
            if ("user:escape" === i && (0, G.vq)(document.activeElement, HTMLIFrameElement)) return B.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(W.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": x,
                children: (0, n.jsxs)(U.rX, {
                    children: [
                        r
                            ? (0, n.jsx)(U.Dr, {
                                  id: "edit",
                                  icon: Y.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: Y.PencilIcon },
                                  label: m.intl.string(Q.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, n.jsx)(U.Dr, {
                            id: "refresh",
                            icon: K.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: K.RefreshIcon },
                            label: m.intl.string(Q.default.xKexN1),
                            disabled: l,
                            action: i,
                        }),
                        f
                            ? (0, n.jsx)(U.Dr, {
                                  id: "settings",
                                  icon: q.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: q.SettingsIcon },
                                  label: m.intl.string(Q.default.gTMvzD),
                                  action: A,
                              })
                            : null,
                        c
                            ? (0, n.jsx)(U.Dr, {
                                  id: "remix",
                                  icon: X.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: X.CopyIcon },
                                  label: m.intl.string(Q.default["V+azw/"]),
                                  disabled: d,
                                  action: o,
                              })
                            : null,
                        null != g
                            ? (0, n.jsx)(U.sL, {
                                  id: "sharing",
                                  label: m.intl.string(Q.default.EHMPvA),
                                  checked: !0 === h,
                                  action: g,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: i } = e;
            return (0, n.jsx)("div", {
                ref: p,
                className: ee.h,
                children: (0, n.jsx)(b.m, {
                    text: x,
                    ariaHidden: !0,
                    children: (0, n.jsx)(C.K, {
                        "aria-label": x,
                        icon: Z.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: i,
                    }),
                }),
            });
        },
    });
}
var el = l(534890),
    en = l(27989),
    et = l(403853);
function ea(e) {
    let { badge: i, ...l } = e,
        a = t.useId();
    if (null == i) return (0, n.jsx)(el.ChatIcon, { ...l });
    let r = "custom" === l.size ? { width: l.width, height: l.height } : (0, en.J)(l.size ?? "md");
    return (0, n.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: l.className,
        style: l.style,
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
                children: (0, n.jsx)(el.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: l.color,
                    colorClass: l.colorClass,
                }),
            }),
            (0, n.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === i ? et.a : et.Z }),
        ],
    });
}
var er = l(647514),
    es = l(573163),
    ec = l(652215),
    ed = l(746080),
    eo = l(165610);
function eu(e) {
    let { applicationId: i, surface: l, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, w.A)(i, l),
        { badge: h, mentionCount: g } = (0, a.cf)([es.Ay], () => {
            let e = es.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : es.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        p = (0, E.G)(),
        {
            remix: x,
            remixing: f,
            canRemix: A,
        } = (function (e, i) {
            let [l, n] = t.useState(!1),
                a = null != i && null != e && ((0, F.P)(e) || (0, D.tr)(e));
            return {
                remix: t.useCallback(async () => {
                    if (!l && null != i && null != e) {
                        n(!0);
                        try {
                            await (0, er.A)(e, i);
                        } finally {
                            n(!1);
                        }
                    }
                }, [l, i, e]),
                remixing: l,
                canRemix: a,
            };
        })(c, r),
        I = null != c && (0, F.P)(c),
        _ = null != r && null != c,
        P = t.useCallback(() => {
            null != r && null != c && (0, R.pX)(ec.BVt.CHANNEL(r, ed.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        G = (0, eo.x1)(u) && u.data.proxyTicketRefreshing,
        B = t.useCallback(() => {
            null == u || G || N.A.refreshProxyTicket(u.id);
        }, [u, G]),
        L = t.useCallback(() => {
            null != u && (0, v.A)({ onConfirm: () => M(u.id) });
        }, [u]),
        W = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                O.A.getWindowOpen(ec.MLl.ACTIVITY_POPOUT) &&
                T.A.getMainFrame()?.id === e &&
                (0, S.close)(ec.MLl.ACTIVITY_POPOUT),
                (0, k.A)().leaveFrame(e),
                (0, R.pX)(
                    (function (e, i) {
                        if (null == e) return ec.BVt.FRIENDS;
                        let l = V.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== i) return ec.BVt.CHANNEL(e, l.id);
                        let n = V.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== i && z.A.can(ec.xBc.VIEW_CHANNEL, l);
                        });
                        return null != n ? ec.BVt.CHANNEL(e, n.id) : ec.BVt.FRIENDS;
                    })(r, (0, eo.h)(l)),
                );
        }, [u?.id, r, l]),
        U = m.intl.string(!0 === d ? Q.default.YdgE0j : Q.default.aWVf4j),
        Y = !0 === d ? null : h,
        K = [U];
    "mention" === Y
        ? K.push(m.intl.formatToPlainString(m.t["3l1GOx"], { mentionCount: g }))
        : "unread" === Y && K.push(m.intl.string(m.t.x5zAGZ));
    let q = t.useCallback((e) => (0, n.jsx)(ea, { ...e, badge: Y }), [Y]),
        X =
            null == o
                ? null
                : (0, n.jsx)(b.m, {
                      text: U,
                      ariaHidden: !0,
                      children: (0, n.jsx)(C.K, {
                          "aria-label": K.join(", "),
                          "aria-pressed": !0 === d,
                          icon: q,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, eo.x1)(u)) return X;
    let Z = m.intl.string(Q.default["6g22y7"]),
        $ = m.intl.string(Q.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ei, {
                projectId: c?.id,
                onRefresh: B,
                isRefreshing: G,
                canEdit: _,
                onEdit: P,
                canRemix: A,
                remixing: f,
                onRemix: x,
                sharingEnabled: null != c && (0, D.tr)(c),
                onToggleSharing: I && null != c ? () => (0, H.gv)(c.id, !(0, D.tr)(c)) : void 0,
            }),
            X,
            p
                ? (0, n.jsx)(b.m, {
                      text: Z,
                      ariaHidden: !0,
                      children: (0, n.jsx)(C.K, {
                          "aria-label": Z,
                          icon: y.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: L,
                      }),
                  })
                : null,
            (0, n.jsx)(b.m, {
                text: $,
                ariaHidden: !0,
                children: (0, n.jsx)(C.K, {
                    "aria-label": $,
                    icon: j.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: W,
                }),
            }),
        ],
    });
}
var eh = l(402738),
    eg = l(957907),
    ep = l(899154),
    ex = l(955999);
function ef(e) {
    let { channel: i } = e,
        l = (0, g.B9)(i.topic),
        x = (0, eg.A)(i),
        f = (0, s.Ay)(i),
        m = (0, a.bG)([o.A], () => o.A.getGuild(i.guild_id), [i.guild_id]),
        A = (0, a.bG)([p.A], () => p.A.isChatOpen(i.id), [i.id]),
        b = t.useRef(!1),
        C = t.useCallback(
            (e) => {
                (b.current = !e), (0, h.T)(i.id, e);
            },
            [i.id],
        ),
        y = t.useCallback(() => C(!A), [A, C]),
        j = t.useCallback(() => C(!1), [C]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== i.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== i.id ||
                b.current ||
                (0, h.T)(i.id, !0);
        }
        return (b.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [i.id]);
    let v = t.useMemo(() => ({ channel: i, guild: m ?? void 0, open: A, onClose: j }), [i, m, A, j]),
        {
            availability: E,
            activeMode: N,
            widgetApplicationId: T,
        } = (0, ep.q)({
            applicationId: l ?? null,
            previewApplicationId: x?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: x?.install_scope ?? null,
        }),
        k = t.useMemo(() => ({ ...E, modes: null != N ? [N] : [], defaultMode: N, showModeSwitch: !1 }), [E, N]),
        w = t.useMemo(() => ({ type: eo.U4.APP_CHANNEL, channelId: i.id, guildId: i.guild_id ?? void 0 }), [i]);
    if (null == l) return null;
    let _ = (0, n.jsx)(I, {
        channel: i,
        channelName: f,
        guild: m,
        toolbar: (0, n.jsx)(eu, {
            applicationId: l,
            surface: w,
            guildId: i.guild_id,
            channelId: i.id,
            project: x ?? null,
            chatOpen: A,
            onToggleChat: y,
        }),
    });
    return (0, n.jsxs)("div", {
        className: ex.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, n.jsx)(c.HI, { location: m?.name, subsection: f ?? void 0 }),
            (0, n.jsx)(eh.A, {
                availability: k,
                activeMode: N,
                widgetApplicationId: T,
                projectId: x?.id ?? null,
                previewApplicationId: x?.preview_application_id ?? null,
                applicationId: l,
                surface: w,
                header: _,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: v,
            }),
        ],
    });
}

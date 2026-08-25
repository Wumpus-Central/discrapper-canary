l.r(n), l.d(n, { default: () => ef });
var i = l(477900),
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
    x = l(595332),
    f = l(742589),
    m = l(131047),
    p = l(375708),
    A = l(999900);
function I(e) {
    let { channel: n, channelName: l, guild: t, toolbar: a } = e;
    return (0, i.jsx)("div", {
        className: A.SC,
        children: (0, i.jsx)(
            f.A,
            {
                guildId: n.guild_id,
                channelId: n.id,
                channelType: n.type,
                hideSearch: !0,
                toolbar: a,
                className: A.DD,
                "aria-label": p.intl.string(p.t.BIYAqa),
                children: (0, m.zF)({ channel: n, channelName: l, guild: t }),
            },
            `header-${n.id}`,
        ),
    });
}
l(321073);
var C = l(866665),
    b = l(408278),
    j = l(811893),
    y = l(70688),
    v = l(47294),
    E = l(16961),
    N = l(625180),
    T = l(91242),
    k = l(580954),
    P = l(672929),
    _ = l(494126),
    w = l(5867);
async function O(e) {
    null == T.A.getFrame(e) ||
        ((await (0, _.refreshProxyTicket)(e)) &&
            ((0, _.promoteFrame)(e),
            (0, _.updateFramePanelMode)(e, w.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var R = l(574172),
    S = l(869146),
    V = l(976860),
    M = l(808728),
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
    X = l(625903),
    q = l(624479),
    Z = l(365199),
    $ = l(18739),
    J = l(976814),
    Q = l(295813),
    ee = l(452394);
function en(e) {
    let {
            onRefresh: n,
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
        x = t.useRef(null),
        f = p.intl.string(p.t["UKOtz+"]),
        m = (0, a.bG)([$.Ay], () => null != u && null != $.Ay.getSettings(u), [u]),
        A = t.useCallback(() => {
            null != u && (0, J.A)(u);
        }, [u]);
    return (0, i.jsx)(L.Y, {
        targetElementRef: x,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, G.vq)(document.activeElement, HTMLIFrameElement)) return B.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(W.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": f,
                children: (0, i.jsxs)(U.rX, {
                    children: [
                        r
                            ? (0, i.jsx)(U.Dr, {
                                  id: "edit",
                                  icon: Y.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: Y.PencilIcon },
                                  label: p.intl.string(Q.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, i.jsx)(U.Dr, {
                            id: "refresh",
                            icon: K.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: K.RefreshIcon },
                            label: p.intl.string(Q.default.xKexN1),
                            disabled: l,
                            action: n,
                        }),
                        m
                            ? (0, i.jsx)(U.Dr, {
                                  id: "settings",
                                  icon: X.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: X.SettingsIcon },
                                  label: p.intl.string(Q.default.gTMvzD),
                                  action: A,
                              })
                            : null,
                        c
                            ? (0, i.jsx)(U.Dr, {
                                  id: "remix",
                                  icon: q.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: q.CopyIcon },
                                  label: p.intl.string(Q.default["V+azw/"]),
                                  disabled: d,
                                  action: o,
                              })
                            : null,
                        null != g
                            ? (0, i.jsx)(U.sL, {
                                  id: "sharing",
                                  label: p.intl.string(Q.default.EHMPvA),
                                  checked: !0 === h,
                                  action: g,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)("div", {
                ref: x,
                className: ee.h,
                children: (0, i.jsx)(C.m, {
                    text: f,
                    ariaHidden: !0,
                    children: (0, i.jsx)(b.K, {
                        "aria-label": f,
                        icon: Z.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
var el = l(534890),
    ei = l(27989),
    et = l(403853);
function ea(e) {
    let { badge: n, ...l } = e,
        a = t.useId();
    if (null == n) return (0, i.jsx)(el.ChatIcon, { ...l });
    let r = "custom" === l.size ? { width: l.width, height: l.height } : (0, ei.J)(l.size ?? "md");
    return (0, i.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: l.className,
        style: l.style,
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, i.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, i.jsx)(el.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: l.color,
                    colorClass: l.colorClass,
                }),
            }),
            (0, i.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === n ? et.a : et.Z }),
        ],
    });
}
var er = l(647514),
    es = l(573163),
    ec = l(652215),
    ed = l(746080),
    eo = l(165610);
function eu(e) {
    let { applicationId: n, surface: l, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, P.A)(n, l),
        { badge: h, mentionCount: g } = (0, a.cf)([es.Ay], () => {
            let e = es.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : es.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        x = (0, E.G)(),
        {
            remix: f,
            remixing: m,
            canRemix: A,
        } = (function (e, n) {
            let [l, i] = t.useState(!1),
                a = null != n && null != e && ((0, F.P)(e) || (0, D.tr)(e));
            return {
                remix: t.useCallback(async () => {
                    if (!l && null != n && null != e) {
                        i(!0);
                        try {
                            await (0, er.A)(e, n);
                        } finally {
                            i(!1);
                        }
                    }
                }, [l, n, e]),
                remixing: l,
                canRemix: a,
            };
        })(c, r),
        I = null != c && (0, F.P)(c),
        _ = null != r && null != c,
        w = t.useCallback(() => {
            null != r && null != c && (0, V.pX)(ec.BVt.CHANNEL(r, ed.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        G = (0, eo.x1)(u) && u.data.proxyTicketRefreshing,
        B = t.useCallback(() => {
            null == u || G || N.A.refreshProxyTicket(u.id);
        }, [u, G]),
        L = t.useCallback(() => {
            null != u && (0, v.A)({ onConfirm: () => O(u.id) });
        }, [u]),
        W = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                S.A.getWindowOpen(ec.MLl.ACTIVITY_POPOUT) &&
                T.A.getMainFrame()?.id === e &&
                (0, R.close)(ec.MLl.ACTIVITY_POPOUT),
                (0, k.A)().leaveFrame(e),
                (0, V.pX)(
                    (function (e, n) {
                        if (null == e) return ec.BVt.FRIENDS;
                        let l = M.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== n) return ec.BVt.CHANNEL(e, l.id);
                        let i = M.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== n && z.A.can(ec.xBc.VIEW_CHANNEL, l);
                        });
                        return null != i ? ec.BVt.CHANNEL(e, i.id) : ec.BVt.FRIENDS;
                    })(r, (0, eo.h)(l)),
                );
        }, [u?.id, r, l]),
        U = p.intl.string(!0 === d ? Q.default.YdgE0j : Q.default.aWVf4j),
        Y = !0 === d ? null : h,
        K = [U];
    "mention" === Y
        ? K.push(p.intl.formatToPlainString(p.t["3l1GOx"], { mentionCount: g }))
        : "unread" === Y && K.push(p.intl.string(p.t.x5zAGZ));
    let X = t.useCallback((e) => (0, i.jsx)(ea, { ...e, badge: Y }), [Y]),
        q =
            null == o
                ? null
                : (0, i.jsx)(C.m, {
                      text: U,
                      ariaHidden: !0,
                      children: (0, i.jsx)(b.K, {
                          "aria-label": K.join(", "),
                          "aria-pressed": !0 === d,
                          icon: X,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, eo.x1)(u)) return q;
    let Z = p.intl.string(Q.default["6g22y7"]),
        $ = p.intl.string(Q.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(en, {
                projectId: c?.id,
                onRefresh: B,
                isRefreshing: G,
                canEdit: _,
                onEdit: w,
                canRemix: A,
                remixing: m,
                onRemix: f,
                sharingEnabled: null != c && (0, D.tr)(c),
                onToggleSharing: I && null != c ? () => (0, H.gv)(c.id, !(0, D.tr)(c)) : void 0,
            }),
            q,
            x
                ? (0, i.jsx)(C.m, {
                      text: Z,
                      ariaHidden: !0,
                      children: (0, i.jsx)(b.K, {
                          "aria-label": Z,
                          icon: j.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: L,
                      }),
                  })
                : null,
            (0, i.jsx)(C.m, {
                text: $,
                ariaHidden: !0,
                children: (0, i.jsx)(b.K, {
                    "aria-label": $,
                    icon: y.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: W,
                }),
            }),
        ],
    });
}
var eh = l(950884),
    eg = l(957907),
    ex = l(955999);
function ef(e) {
    let { channel: n } = e,
        l = (0, g.B9)(n.topic),
        f = (0, eg.A)(n),
        m = (0, s.Ay)(n),
        p = (0, a.bG)([o.A], () => o.A.getGuild(n.guild_id), [n.guild_id]),
        A = (0, a.bG)([x.A], () => x.A.isChatOpen(n.id), [n.id]),
        C = t.useRef(!1),
        b = t.useCallback(
            (e) => {
                (C.current = !e), (0, h.T)(n.id, e);
            },
            [n.id],
        ),
        j = t.useCallback(() => b(!A), [A, b]),
        y = t.useCallback(() => b(!1), [b]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== n.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== n.id ||
                C.current ||
                (0, h.T)(n.id, !0);
        }
        return (C.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let v = t.useMemo(() => ({ channel: n, guild: p ?? void 0, open: A, onClose: y }), [n, p, A, y]),
        E = t.useMemo(() => ({ type: eo.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]);
    if (null == l) return null;
    let N = (0, i.jsx)(I, {
        channel: n,
        channelName: m,
        guild: p,
        toolbar: (0, i.jsx)(eu, {
            applicationId: l,
            surface: E,
            guildId: n.guild_id,
            channelId: n.id,
            project: f ?? null,
            chatOpen: A,
            onToggleChat: j,
        }),
    });
    return (0, i.jsxs)("div", {
        className: ex.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(c.HI, { location: p?.name, subsection: m ?? void 0 }),
            (0, i.jsx)(eh.A, {
                projectId: f?.id ?? null,
                previewApplicationId: f?.preview_application_id ?? null,
                applicationId: l,
                surface: E,
                header: N,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: v,
            }),
        ],
    });
}

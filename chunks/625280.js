i.r(l), i.d(l, { default: () => ex });
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
    x = i(353428),
    f = i(375708),
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
                "aria-label": f.intl.string(f.t.BIYAqa),
                children: (0, x.zF)({ channel: l, channelName: i, guild: t }),
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
    _ = i(625180),
    N = i(91242),
    k = i(580954),
    w = i(672929),
    S = i(241696),
    M = i(574172),
    R = i(869146),
    T = i(976860),
    G = i(808728),
    P = i(576705),
    V = i(972786),
    z = i(621466),
    B = i(453903),
    D = i(922016),
    H = i(980707),
    O = i(477782),
    F = i(22231),
    L = i(663417),
    K = i(625903),
    U = i(624479),
    Y = i(365199),
    W = i(18739),
    X = i(976814),
    q = i(759967),
    Z = i(452394);
function $(e) {
    let {
            onRefresh: l,
            isRefreshing: i,
            canEdit: r,
            onEdit: c,
            canRemix: s,
            onRemix: d,
            projectId: o,
            onProjectSettings: u,
        } = e,
        h = t.useRef(null),
        g = f.intl.string(f.t["UKOtz+"]),
        p = (0, a.bG)([W.Ay], () => null != o && null != W.Ay.getSettings(o), [o]),
        A = t.useCallback(() => {
            null != o && (0, X.A)(o);
        }, [o]);
    return (0, n.jsx)(D.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, z.vq)(document.activeElement, HTMLIFrameElement)) return B.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(H.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, n.jsxs)(O.rX, {
                    children: [
                        r
                            ? (0, n.jsx)(O.Dr, {
                                  id: "edit",
                                  icon: F.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: F.PencilIcon },
                                  label: f.intl.string(q.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, n.jsx)(O.Dr, {
                            id: "refresh",
                            icon: L.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: L.RefreshIcon },
                            label: f.intl.string(q.default.xKexN1),
                            disabled: i,
                            action: l,
                        }),
                        p
                            ? (0, n.jsx)(O.Dr, {
                                  id: "settings",
                                  icon: K.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: K.SettingsIcon },
                                  label: f.intl.string(q.default.gTMvzD),
                                  action: A,
                              })
                            : null,
                        null != u
                            ? (0, n.jsx)(O.Dr, {
                                  id: "project-settings",
                                  icon: K.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: K.SettingsIcon },
                                  label: f.intl.string(q.default["xhcY+n"]),
                                  action: u,
                              })
                            : null,
                        s
                            ? (0, n.jsx)(O.Dr, {
                                  id: "remix",
                                  icon: U.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: U.CopyIcon },
                                  label: f.intl.string(q.default["V+azw/"]),
                                  action: d,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, n.jsx)("div", {
                ref: h,
                className: Z.h,
                children: (0, n.jsx)(b.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, n.jsx)(y.K, {
                        "aria-label": g,
                        icon: Y.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
var J = i(534890),
    Q = i(27989),
    ee = i(403853);
function el(e) {
    let { badge: l, ...i } = e,
        a = t.useId();
    if (null == l) return (0, n.jsx)(J.ChatIcon, { ...i });
    let r = "custom" === i.size ? { width: i.width, height: i.height } : (0, Q.J)(i.size ?? "md");
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
                children: (0, n.jsx)(J.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: i.color,
                    colorClass: i.colorClass,
                }),
            }),
            (0, n.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? ee.a : ee.Z }),
        ],
    });
}
var ei = i(869369),
    en = i(584936),
    et = i(573163),
    ea = i(652215),
    er = i(746080),
    ec = i(165610);
function es(e) {
    let l,
        { applicationId: i, surface: r, guildId: c, channelId: s, project: d, chatOpen: o, onToggleChat: u } = e,
        h = (0, w.A)(i, r),
        { badge: g, mentionCount: p } = (0, a.cf)([et.Ay], () => {
            let e = et.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : et.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        A = (0, E.G)(),
        { remix: x, canRemix: I } =
            ((l = null != c && null != d && (0, V.H_)(d)),
            {
                remix: t.useCallback(() => {
                    null != c && null != d && (0, en.A)(d, c);
                }, [c, d]),
                canRemix: l,
            }),
        m = null != d && (0, V.PV)(d),
        z = null != c && null != d,
        B = t.useCallback(() => {
            null != c && null != d && (0, T.pX)(ea.BVt.CHANNEL(c, er.VV.VIBEGRATIONS, d.id));
        }, [c, d]),
        D = (0, ec.x1)(h) && h.data.proxyTicketRefreshing,
        H = t.useCallback(() => {
            null == h || D || _.A.refreshProxyTicket(h.id);
        }, [h, D]),
        O = t.useCallback(() => {
            null != h && (0, v.A)({ onConfirm: () => (0, S.A)(h.id) });
        }, [h]),
        F = t.useCallback(() => {
            let e = h?.id;
            null != e &&
                R.A.getWindowOpen(ea.MLl.ACTIVITY_POPOUT) &&
                N.A.getMainFrame()?.id === e &&
                (0, M.close)(ea.MLl.ACTIVITY_POPOUT),
                (0, k.A)().leaveFrame(e),
                (0, T.pX)(
                    (function (e, l) {
                        if (null == e) return ea.BVt.FRIENDS;
                        let i = G.Ay.getDefaultChannel(e);
                        if (null != i && i.id !== l) return ea.BVt.CHANNEL(e, i.id);
                        let n = G.Ay.getFirstChannel(e, (e) => {
                            let { channel: i } = e;
                            return i.id !== l && P.A.can(ea.xBc.VIEW_CHANNEL, i);
                        });
                        return null != n ? ea.BVt.CHANNEL(e, n.id) : ea.BVt.FRIENDS;
                    })(c, (0, ec.h)(r)),
                );
        }, [h?.id, c, r]),
        L = f.intl.string(!0 === o ? q.default.YdgE0j : q.default.aWVf4j),
        K = !0 === o ? null : g,
        U = [L];
    "mention" === K
        ? U.push(f.intl.formatToPlainString(f.t["3l1GOx"], { mentionCount: p }))
        : "unread" === K && U.push(f.intl.string(f.t.x5zAGZ));
    let Y = t.useCallback((e) => (0, n.jsx)(el, { ...e, badge: K }), [K]),
        W =
            null == u
                ? null
                : (0, n.jsx)(b.m, {
                      text: L,
                      ariaHidden: !0,
                      children: (0, n.jsx)(y.K, {
                          "aria-label": U.join(", "),
                          "aria-pressed": !0 === o,
                          icon: Y,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  });
    if (!(0, ec.x1)(h)) return W;
    let X = f.intl.string(q.default["6g22y7"]),
        Z = f.intl.string(q.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)($, {
                projectId: d?.id,
                onRefresh: H,
                isRefreshing: D,
                canEdit: z,
                onEdit: B,
                canRemix: I,
                onRemix: x,
                onProjectSettings: m && null != d ? () => (0, ei.A)(d.id, d.guild_id ?? c ?? void 0) : void 0,
            }),
            W,
            A
                ? (0, n.jsx)(b.m, {
                      text: X,
                      ariaHidden: !0,
                      children: (0, n.jsx)(y.K, {
                          "aria-label": X,
                          icon: j.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: O,
                      }),
                  })
                : null,
            (0, n.jsx)(b.m, {
                text: Z,
                ariaHidden: !0,
                children: (0, n.jsx)(y.K, {
                    "aria-label": Z,
                    icon: C.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: F,
                }),
            }),
        ],
    });
}
var ed = i(59345),
    eo = i(696451),
    eu = i(935208),
    eh = i(673724),
    eg = i(948230),
    ep = i(899154),
    eA = i(955999);
function ex(e) {
    let l,
        i,
        A,
        x,
        f,
        { channel: I } = e,
        b = (0, g.B9)(I.topic),
        y =
            ((i = null != (l = (0, g.B9)(I?.topic))),
            (A = I?.guild_id ?? null),
            (x = (0, a.bG)([o.A, P.A], () => {
                let e = null != A ? o.A.getGuild(A) : null;
                return null != e && P.A.can(ea.xBc.MANAGE_GUILD, e);
            }, [A])),
            (f = (0, a.yK)([eo.Ay], () => (null != A ? (eo.Ay.getSelfMember(A)?.roles ?? []) : []), [A])),
            t.useEffect(() => {
                i && null != l && (0, eg.hF)(A ?? void 0);
            }, [i, l, A, x, f]),
            (0, a.bG)([V.Ay], () => {
                if (null == l) return null;
                let e = V.Ay.findProjectByApplicationId(l);
                if (null == e || (0, V.PV)(e)) return e;
                let i = null != A ? eu.default.castGuildIdAsEveryoneGuildRoleId(A) : null,
                    n = (e.collaborator_role_ids ?? []).some((e) => e === i || f.includes(e));
                return e.guild_id === A && (0, eh.XE)(e) && (x || n) ? e : null;
            }, [l, x, f, A])),
        j = (0, c.Ay)(I),
        C = (0, a.bG)([o.A], () => o.A.getGuild(I.guild_id), [I.guild_id]),
        v = (0, a.bG)([p.A], () => p.A.isChatOpen(I.id), [I.id]),
        E = t.useRef(!1),
        _ = t.useCallback(
            (e) => {
                (E.current = !e), (0, h.T)(I.id, e);
            },
            [I.id],
        ),
        N = t.useCallback(() => _(!v), [v, _]),
        k = t.useCallback(() => _(!1), [_]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== I.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== I.id ||
                E.current ||
                (0, h.T)(I.id, !0);
        }
        return (E.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [I.id]);
    let w = t.useMemo(() => ({ channel: I, guild: C ?? void 0, open: v, onClose: k }), [I, C, v, k]),
        {
            availability: S,
            activeMode: M,
            widgetApplicationId: R,
        } = (0, ep.q)({
            applicationId: b ?? null,
            previewApplicationId: y?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: y?.install_scope ?? null,
        }),
        T = t.useMemo(() => ({ ...S, modes: null != M ? [M] : [], defaultMode: M, showModeSwitch: !1 }), [S, M]),
        G = t.useMemo(() => ({ type: ec.U4.APP_CHANNEL, channelId: I.id, guildId: I.guild_id ?? void 0 }), [I]);
    if (null == b) return null;
    let z = (0, n.jsx)(m, {
        channel: I,
        channelName: j,
        guild: C,
        toolbar: (0, n.jsx)(es, {
            applicationId: b,
            surface: G,
            guildId: I.guild_id,
            channelId: I.id,
            project: y ?? null,
            chatOpen: v,
            onToggleChat: N,
        }),
    });
    return (0, n.jsxs)("div", {
        className: eA.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, n.jsx)(s.HI, { location: C?.name, subsection: j ?? void 0 }),
            (0, n.jsx)(ed.A, {
                availability: T,
                activeMode: M,
                widgetApplicationId: R,
                projectId: y?.id ?? null,
                previewApplicationId: y?.preview_application_id ?? null,
                applicationId: b,
                surface: G,
                header: z,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: w,
            }),
        ],
    });
}

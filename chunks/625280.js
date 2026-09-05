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
    N = i(625180),
    _ = i(91242),
    k = i(580954),
    w = i(672929),
    S = i(241696),
    M = i(574172),
    R = i(869146),
    T = i(976860),
    G = i(808728),
    P = i(576705),
    V = i(673724),
    z = i(972786),
    B = i(621466),
    D = i(453903),
    H = i(922016),
    O = i(980707),
    F = i(477782),
    L = i(22231),
    K = i(663417),
    U = i(625903),
    Y = i(624479),
    W = i(365199),
    X = i(18739),
    q = i(976814),
    Z = i(759967),
    $ = i(452394);
function J(e) {
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
        p = (0, a.bG)([X.Ay], () => null != o && null != X.Ay.getSettings(o), [o]),
        A = t.useCallback(() => {
            null != o && (0, q.A)(o);
        }, [o]);
    return (0, n.jsx)(H.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, B.vq)(document.activeElement, HTMLIFrameElement)) return D.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(O.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, n.jsxs)(F.rX, {
                    children: [
                        r
                            ? (0, n.jsx)(F.Dr, {
                                  id: "edit",
                                  icon: L.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: L.PencilIcon },
                                  label: f.intl.string(Z.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, n.jsx)(F.Dr, {
                            id: "refresh",
                            icon: K.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: K.RefreshIcon },
                            label: f.intl.string(Z.default.xKexN1),
                            disabled: i,
                            action: l,
                        }),
                        p
                            ? (0, n.jsx)(F.Dr, {
                                  id: "settings",
                                  icon: U.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: U.SettingsIcon },
                                  label: f.intl.string(Z.default.gTMvzD),
                                  action: A,
                              })
                            : null,
                        null != u
                            ? (0, n.jsx)(F.Dr, {
                                  id: "project-settings",
                                  icon: U.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: U.SettingsIcon },
                                  label: f.intl.string(Z.default["xhcY+n"]),
                                  action: u,
                              })
                            : null,
                        s
                            ? (0, n.jsx)(F.Dr, {
                                  id: "remix",
                                  icon: Y.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: Y.CopyIcon },
                                  label: f.intl.string(Z.default["V+azw/"]),
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
                className: $.h,
                children: (0, n.jsx)(b.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, n.jsx)(y.K, {
                        "aria-label": g,
                        icon: W.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
var Q = i(534890),
    ee = i(27989),
    el = i(403853);
function ei(e) {
    let { badge: l, ...i } = e,
        a = t.useId();
    if (null == l) return (0, n.jsx)(Q.ChatIcon, { ...i });
    let r = "custom" === i.size ? { width: i.width, height: i.height } : (0, ee.J)(i.size ?? "md");
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
                children: (0, n.jsx)(Q.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: i.color,
                    colorClass: i.colorClass,
                }),
            }),
            (0, n.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? el.a : el.Z }),
        ],
    });
}
var en = i(869369),
    et = i(584936),
    ea = i(573163),
    er = i(652215),
    ec = i(746080),
    es = i(165610);
function ed(e) {
    let l,
        { applicationId: i, surface: r, guildId: c, channelId: s, project: d, chatOpen: o, onToggleChat: u } = e,
        h = (0, w.A)(i, r),
        { badge: g, mentionCount: p } = (0, a.cf)([ea.Ay], () => {
            let e = ea.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ea.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        A = (0, E.G)(),
        { remix: x, canRemix: I } =
            ((l = null != c && null != d && ((0, z.PV)(d) || (0, V.tr)(d))),
            {
                remix: t.useCallback(() => {
                    null != c && null != d && (0, et.A)(d, c);
                }, [c, d]),
                canRemix: l,
            }),
        m = null != d && (0, z.PV)(d),
        B = null != c && null != d,
        D = t.useCallback(() => {
            null != c && null != d && (0, T.pX)(er.BVt.CHANNEL(c, ec.VV.VIBEGRATIONS, d.id));
        }, [c, d]),
        H = (0, es.x1)(h) && h.data.proxyTicketRefreshing,
        O = t.useCallback(() => {
            null == h || H || N.A.refreshProxyTicket(h.id);
        }, [h, H]),
        F = t.useCallback(() => {
            null != h && (0, v.A)({ onConfirm: () => (0, S.A)(h.id) });
        }, [h]),
        L = t.useCallback(() => {
            let e = h?.id;
            null != e &&
                R.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT) &&
                _.A.getMainFrame()?.id === e &&
                (0, M.close)(er.MLl.ACTIVITY_POPOUT),
                (0, k.A)().leaveFrame(e),
                (0, T.pX)(
                    (function (e, l) {
                        if (null == e) return er.BVt.FRIENDS;
                        let i = G.Ay.getDefaultChannel(e);
                        if (null != i && i.id !== l) return er.BVt.CHANNEL(e, i.id);
                        let n = G.Ay.getFirstChannel(e, (e) => {
                            let { channel: i } = e;
                            return i.id !== l && P.A.can(er.xBc.VIEW_CHANNEL, i);
                        });
                        return null != n ? er.BVt.CHANNEL(e, n.id) : er.BVt.FRIENDS;
                    })(c, (0, es.h)(r)),
                );
        }, [h?.id, c, r]),
        K = f.intl.string(!0 === o ? Z.default.YdgE0j : Z.default.aWVf4j),
        U = !0 === o ? null : g,
        Y = [K];
    "mention" === U
        ? Y.push(f.intl.formatToPlainString(f.t["3l1GOx"], { mentionCount: p }))
        : "unread" === U && Y.push(f.intl.string(f.t.x5zAGZ));
    let W = t.useCallback((e) => (0, n.jsx)(ei, { ...e, badge: U }), [U]),
        X =
            null == u
                ? null
                : (0, n.jsx)(b.m, {
                      text: K,
                      ariaHidden: !0,
                      children: (0, n.jsx)(y.K, {
                          "aria-label": Y.join(", "),
                          "aria-pressed": !0 === o,
                          icon: W,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  });
    if (!(0, es.x1)(h)) return X;
    let q = f.intl.string(Z.default["6g22y7"]),
        $ = f.intl.string(Z.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(J, {
                projectId: d?.id,
                onRefresh: O,
                isRefreshing: H,
                canEdit: B,
                onEdit: D,
                canRemix: I,
                onRemix: x,
                onProjectSettings: m && null != d ? () => (0, en.A)(d.id, d.guild_id ?? c ?? void 0) : void 0,
            }),
            X,
            A
                ? (0, n.jsx)(b.m, {
                      text: q,
                      ariaHidden: !0,
                      children: (0, n.jsx)(y.K, {
                          "aria-label": q,
                          icon: j.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: F,
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
                    onClick: L,
                }),
            }),
        ],
    });
}
var eo = i(59345),
    eu = i(696451),
    eh = i(935208),
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
                return null != e && P.A.can(er.xBc.MANAGE_GUILD, e);
            }, [A])),
            (f = (0, a.yK)([eu.Ay], () => (null != A ? (eu.Ay.getSelfMember(A)?.roles ?? []) : []), [A])),
            t.useEffect(() => {
                i && null != l && (0, eg.hF)(A ?? void 0);
            }, [i, l, A, x, f]),
            (0, a.bG)([z.Ay], () => {
                if (null == l) return null;
                let e = z.Ay.findProjectByApplicationId(l);
                if (null == e || (0, z.PV)(e)) return e;
                let i = null != A ? eh.default.castGuildIdAsEveryoneGuildRoleId(A) : null,
                    n = (e.collaborator_role_ids ?? []).some((e) => e === i || f.includes(e));
                return e.guild_id === A && (0, V.XE)(e) && (x || n) ? e : null;
            }, [l, x, f, A])),
        j = (0, c.Ay)(I),
        C = (0, a.bG)([o.A], () => o.A.getGuild(I.guild_id), [I.guild_id]),
        v = (0, a.bG)([p.A], () => p.A.isChatOpen(I.id), [I.id]),
        E = t.useRef(!1),
        N = t.useCallback(
            (e) => {
                (E.current = !e), (0, h.T)(I.id, e);
            },
            [I.id],
        ),
        _ = t.useCallback(() => N(!v), [v, N]),
        k = t.useCallback(() => N(!1), [N]);
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
        G = t.useMemo(() => ({ type: es.U4.APP_CHANNEL, channelId: I.id, guildId: I.guild_id ?? void 0 }), [I]);
    if (null == b) return null;
    let B = (0, n.jsx)(m, {
        channel: I,
        channelName: j,
        guild: C,
        toolbar: (0, n.jsx)(ed, {
            applicationId: b,
            surface: G,
            guildId: I.guild_id,
            channelId: I.id,
            project: y ?? null,
            chatOpen: v,
            onToggleChat: _,
        }),
    });
    return (0, n.jsxs)("div", {
        className: eA.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, n.jsx)(s.HI, { location: C?.name, subsection: j ?? void 0 }),
            (0, n.jsx)(eo.A, {
                availability: T,
                activeMode: M,
                widgetApplicationId: R,
                projectId: y?.id ?? null,
                previewApplicationId: y?.preview_application_id ?? null,
                applicationId: b,
                surface: G,
                header: B,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: w,
            }),
        ],
    });
}

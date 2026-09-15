(n.r(e), n.d(e, { default: () => lA }));
var i = n(477900),
    t = n(582128),
    a = n(17928),
    c = n(228366),
    o = n(47167),
    r = n(726249),
    s = n(280450),
    d = n(71393),
    u = n(309010),
    h = n(662980),
    g = n(683180),
    p = n(595332),
    A = n(742589),
    f = n(353428),
    I = n(375708),
    x = n(999900);
function b(l) {
    let { channel: e, channelName: n, guild: t, toolbar: a } = l;
    return (0, i.jsx)("div", {
        className: x.SC,
        children: (0, i.jsx)(
            A.A,
            {
                guildId: e.guild_id,
                channelId: e.id,
                channelType: e.type,
                hideSearch: !0,
                toolbar: a,
                className: x.DD,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: (0, f.zF)({ channel: e, channelName: n, guild: t }),
            },
            `header-${e.id}`,
        ),
    });
}
n(321073);
var j = n(811893),
    m = n(70688),
    y = n(47294),
    C = n(16961),
    v = n(625180),
    E = n(91242),
    _ = n(580954),
    N = n(672929),
    k = n(241696),
    w = n(574172),
    S = n(869146),
    M = n(976860),
    R = n(808728),
    T = n(576705),
    G = n(972786),
    P = n(621466),
    V = n(453903),
    B = n(922016),
    D = n(980707),
    O = n(477782),
    z = n(22231),
    F = n(663417),
    H = n(625903),
    L = n(624479),
    U = n(365199),
    Y = n(277977),
    W = n(976814),
    X = n(759967),
    q = n(452394);
function K(l) {
    let {
            onRefresh: e,
            isRefreshing: n,
            canEdit: c,
            onEdit: o,
            canRemix: r,
            onRemix: s,
            projectId: d,
            onProjectSettings: u,
        } = l,
        h = t.useRef(null),
        g = I.intl.string(I.t["UKOtz+"]),
        p = (0, a.bG)([Y.Ay], () => null != d && null != Y.Ay.getSettings(d), [d]),
        f = t.useCallback(() => {
            null != d && (0, W.A)(d);
        }, [d]);
    return (0, i.jsx)(B.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (l, e) => {
            if ("user:escape" === e && (0, P.vq)(document.activeElement, HTMLIFrameElement)) return V.o;
        },
        renderPopout: (l) => {
            let { closePopout: t } = l;
            return (0, i.jsx)(D.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, i.jsxs)(O.rX, {
                    children: [
                        c
                            ? (0, i.jsx)(O.Dr, {
                                  id: "edit",
                                  icon: z.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: z.PencilIcon },
                                  label: I.intl.string(X.default.NXfIfj),
                                  action: o,
                              })
                            : null,
                        (0, i.jsx)(O.Dr, {
                            id: "refresh",
                            icon: F.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: F.RefreshIcon },
                            label: I.intl.string(X.default.xKexN1),
                            disabled: n,
                            action: e,
                        }),
                        p
                            ? (0, i.jsx)(O.Dr, {
                                  id: "settings",
                                  icon: H.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: H.SettingsIcon },
                                  label: I.intl.string(X.default.gTMvzD),
                                  action: f,
                              })
                            : null,
                        null != u
                            ? (0, i.jsx)(O.Dr, {
                                  id: "project-settings",
                                  icon: H.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: H.SettingsIcon },
                                  label: I.intl.string(X.default["xhcY+n"]),
                                  action: u,
                              })
                            : null,
                        r
                            ? (0, i.jsx)(O.Dr, {
                                  id: "remix",
                                  icon: L.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: L.CopyIcon },
                                  label: I.intl.string(X.default["V+azw/"]),
                                  action: s,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (l) => {
            let { onClick: e } = l;
            return (0, i.jsx)("div", {
                ref: h,
                className: q.h,
                children: (0, i.jsx)(A.A.Icon, { icon: U.MoreHorizontalIcon, tooltip: g, "aria-label": g, onClick: e }),
            });
        },
    });
}
var Z = n(534890),
    $ = n(27989),
    J = n(403853);
function Q(l) {
    let { badge: e, ...n } = l,
        a = t.useId();
    if (null == e) return (0, i.jsx)(Z.ChatIcon, { ...n });
    let c = "custom" === n.size ? { width: n.width, height: n.height } : (0, $.J)(n.size ?? "md");
    return (0, i.jsxs)("svg", {
        width: c?.width ?? 24,
        height: c?.height ?? 24,
        viewBox: "0 0 24 24",
        className: n.className,
        style: n.style,
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
                children: (0, i.jsx)(Z.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: n.color,
                    colorClass: n.colorClass,
                }),
            }),
            (0, i.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === e ? J.a : J.Z }),
        ],
    });
}
var ll = n(210744),
    le = n(869369),
    ln = n(584936),
    li = n(573163),
    lt = n(652215),
    la = n(746080),
    lc = n(165610);
function lo(l) {
    let e,
        { applicationId: n, surface: c, guildId: o, channelId: r, project: s, chatOpen: d, onToggleChat: u } = l,
        h = (0, N.A)(n, c),
        { badge: g, mentionCount: p } = (0, a.cf)(
            [li.Ay],
            () => {
                let l = li.Ay.getMentionCount(r);
                return l > 0
                    ? { badge: "mention", mentionCount: l }
                    : li.Ay.hasUnread(r)
                      ? { badge: "unread", mentionCount: l }
                      : { badge: null, mentionCount: l };
            },
            [r],
        ),
        f = (0, C.G)(),
        { remix: x, canRemix: b } =
            ((e = null != o && null != s && (0, G.H_)(s)),
            {
                remix: t.useCallback(() => {
                    null != o && null != s && (0, ln.A)(s, o);
                }, [o, s]),
                canRemix: e,
            }),
        P = null != s && (0, G.PV)(s),
        V = null != o && null != s,
        B = t.useCallback(() => {
            null != o && null != s && (0, M.pX)(lt.BVt.CHANNEL(o, la.VV.VIBEGRATIONS, s.id));
        }, [o, s]),
        D = (0, lc.x1)(h) && h.data.proxyTicketRefreshing,
        O = t.useCallback(() => {
            null == h || D || v.A.refreshProxyTicket(h.id);
        }, [h, D]),
        z = t.useCallback(() => {
            null != h && (0, y.A)({ onConfirm: () => (0, k.A)(h.id) });
        }, [h]),
        F = t.useCallback(() => {
            let l = h?.id;
            (null != l &&
                S.A.getWindowOpen(lt.MLl.ACTIVITY_POPOUT) &&
                E.A.getMainFrame()?.id === l &&
                (0, w.close)(lt.MLl.ACTIVITY_POPOUT),
                (0, _.A)().leaveFrame(l),
                (0, M.pX)(
                    (function (l, e) {
                        if (null == l) return lt.BVt.FRIENDS;
                        let n = R.Ay.getDefaultChannel(l);
                        if (null != n && n.id !== e) return lt.BVt.CHANNEL(l, n.id);
                        let i = R.Ay.getFirstChannel(l, (l) => {
                            let { channel: n } = l;
                            return n.id !== e && T.A.can(lt.xBc.VIEW_CHANNEL, n);
                        });
                        return null != i ? lt.BVt.CHANNEL(l, i.id) : lt.BVt.FRIENDS;
                    })(o, (0, lc.h)(c)),
                ));
        }, [h?.id, o, c]),
        H = I.intl.string(!0 === d ? X.default.YdgE0j : X.default.aWVf4j),
        L = !0 === d ? null : g,
        U = [H];
    "mention" === L
        ? U.push(I.intl.formatToPlainString(I.t["3l1GOx"], { mentionCount: p }))
        : "unread" === L && U.push(I.intl.string(I.t.x5zAGZ));
    let Y = t.useCallback((l) => (0, i.jsx)(Q, { ...l, badge: L }), [L]),
        W =
            null == u
                ? null
                : (0, i.jsx)(A.A.Icon, {
                      icon: Y,
                      tooltip: H,
                      "aria-label": U.join(", "),
                      selected: !0 === d,
                      onClick: u,
                  });
    if (!(0, lc.x1)(h)) return W;
    let q = I.intl.string(X.default["6g22y7"]),
        Z = I.intl.string(X.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(K, {
                projectId: s?.id,
                onRefresh: O,
                isRefreshing: D,
                canEdit: V,
                onEdit: B,
                canRemix: b,
                onRemix: x,
                onProjectSettings: P && null != s ? () => (0, le.A)(s.id, s.guild_id ?? o ?? void 0) : void 0,
            }),
            W,
            (0, i.jsx)(ll.A, { frame: h, controlProjectId: null != s && n === s.preview_application_id ? s.id : null }),
            f ? (0, i.jsx)(A.A.Icon, { icon: j.t, tooltip: q, "aria-label": q, onClick: z }) : null,
            (0, i.jsx)(A.A.Icon, { icon: m.DoorExitIcon, tooltip: Z, "aria-label": Z, onClick: F }),
        ],
    });
}
var lr = n(401145),
    ls = n(696451),
    ld = n(935208),
    lu = n(673724),
    lh = n(948230),
    lg = n(899154),
    lp = n(955999);
function lA(l) {
    let e,
        n,
        A,
        f,
        I,
        { channel: x } = l,
        j = (0, g.B9)(x.topic),
        m =
            ((n = null != (e = (0, g.B9)(x?.topic))),
            (A = x?.guild_id ?? null),
            (f = (0, a.bG)(
                [d.A, T.A],
                () => {
                    let l = null != A ? d.A.getGuild(A) : null;
                    return null != l && T.A.can(lt.xBc.MANAGE_GUILD, l);
                },
                [A],
            )),
            (I = (0, a.yK)([ls.Ay], () => (null != A ? (ls.Ay.getSelfMember(A)?.roles ?? []) : []), [A])),
            t.useEffect(() => {
                n && null != e && (0, lh.hF)(A ?? void 0);
            }, [n, e, A, f, I]),
            (0, a.bG)(
                [G.Ay],
                () => {
                    if (null == e) return null;
                    let l = G.Ay.findProjectByApplicationId(e);
                    if (null == l || (0, G.PV)(l)) return l;
                    let n = null != A ? ld.default.castGuildIdAsEveryoneGuildRoleId(A) : null,
                        i = (l.collaborator_role_ids ?? []).some((l) => l === n || I.includes(l));
                    return l.guild_id === A && (0, lu.XE)(l) && (f || i) ? l : null;
                },
                [e, f, I, A],
            )),
        y = (0, o.Ay)(x),
        C = (0, a.bG)([d.A], () => d.A.getGuild(x.guild_id), [x.guild_id]),
        v = (0, a.bG)([p.A], () => p.A.isChatOpen(x.id), [x.id]),
        E = t.useRef(!1),
        _ = t.useCallback(
            (l) => {
                ((E.current = !l), (0, h.T)(x.id, l));
            },
            [x.id],
        ),
        N = t.useCallback(() => _(!v), [v, _]),
        k = t.useCallback(() => _(!1), [_]);
    t.useEffect(() => {
        function l(l) {
            l.optimistic ||
                l.channelId !== x.id ||
                l.message.author?.id === s.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== x.id ||
                E.current ||
                (0, h.T)(x.id, !0);
        }
        return ((E.current = !1), c.h.subscribe("MESSAGE_CREATE", l), () => c.h.unsubscribe("MESSAGE_CREATE", l));
    }, [x.id]);
    let w = t.useMemo(() => ({ channel: x, guild: C ?? void 0, open: v, onClose: k }), [x, C, v, k]),
        {
            availability: S,
            activeMode: M,
            widgetApplicationId: R,
        } = (0, lg.q)({
            applicationId: j ?? null,
            previewApplicationId: m?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: m?.install_scope ?? null,
        }),
        P = t.useMemo(() => ({ ...S, modes: null != M ? [M] : [], defaultMode: M, showModeSwitch: !1 }), [S, M]),
        V = t.useMemo(() => ({ type: lc.U4.APP_CHANNEL, channelId: x.id, guildId: x.guild_id ?? void 0 }), [x]);
    if (null == j) return null;
    let B = (0, i.jsx)(b, {
        channel: x,
        channelName: y,
        guild: C,
        toolbar: (0, i.jsx)(lo, {
            applicationId: j,
            surface: V,
            guildId: x.guild_id,
            channelId: x.id,
            project: m ?? null,
            chatOpen: v,
            onToggleChat: N,
        }),
    });
    return (0, i.jsxs)("div", {
        className: lp.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(r.HI, { location: C?.name, subsection: y ?? void 0 }),
            (0, i.jsx)(lr.A, {
                availability: P,
                activeMode: M,
                widgetApplicationId: R,
                projectId: m?.id ?? null,
                installScope: m?.install_scope ?? null,
                previewApplicationId: m?.preview_application_id ?? null,
                applicationId: j,
                surface: V,
                header: B,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: w,
            }),
        ],
    });
}

l.r(n), l.d(n, { default: () => eu });
var i = l(477900),
    t = l(582128),
    a = l(17928),
    r = l(228366),
    s = l(47167),
    c = l(726249),
    d = l(280450),
    o = l(71393),
    u = l(309010),
    h = l(683180),
    g = l(742589),
    f = l(131047),
    x = l(375708),
    p = l(999900);
function I(e) {
    let { channel: n, channelName: l, guild: t, toolbar: a } = e;
    return (0, i.jsx)("div", {
        className: p.SC,
        children: (0, i.jsx)(
            g.A,
            {
                guildId: n.guild_id,
                channelId: n.id,
                channelType: n.type,
                hideSearch: !0,
                toolbar: a,
                className: p.DD,
                "aria-label": x.intl.string(x.t.BIYAqa),
                children: (0, f.zF)({ channel: n, channelName: l, guild: t }),
            },
            `header-${n.id}`,
        ),
    });
}
l(321073);
var m = l(866665),
    A = l(408278),
    C = l(811893),
    j = l(70688),
    b = l(47294),
    y = l(16961),
    k = l(625180),
    v = l(91242),
    E = l(580954),
    N = l(672929),
    T = l(494126),
    _ = l(5867);
async function P(e) {
    null == v.A.getFrame(e) ||
        ((await (0, T.refreshProxyTicket)(e)) &&
            ((0, T.promoteFrame)(e),
            (0, T.updateFramePanelMode)(e, _.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var w = l(574172),
    O = l(869146),
    S = l(976860),
    F = l(808728),
    R = l(576705),
    V = l(972786),
    D = l(621466),
    M = l(453903),
    z = l(922016),
    H = l(980707),
    B = l(477782),
    G = l(22231),
    L = l(663417),
    W = l(625903),
    U = l(624479),
    Y = l(365199),
    K = l(18739),
    X = l(976814),
    q = l(295813),
    Z = l(452394);
function $(e) {
    let { onRefresh: n, isRefreshing: l, canEdit: r, onEdit: s, canFork: c, forking: d, onFork: o, projectId: u } = e,
        h = t.useRef(null),
        g = x.intl.string(x.t["UKOtz+"]),
        f = (0, a.bG)([K.Ay], () => null != u && null != K.Ay.getSettings(u), [u]),
        p = t.useCallback(() => {
            null != u && (0, X.A)(u);
        }, [u]);
    return (0, i.jsx)(z.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, D.vq)(document.activeElement, HTMLIFrameElement)) return M.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(H.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, i.jsxs)(B.rX, {
                    children: [
                        r
                            ? (0, i.jsx)(B.Dr, {
                                  id: "edit",
                                  icon: G.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: G.PencilIcon },
                                  label: x.intl.string(q.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, i.jsx)(B.Dr, {
                            id: "refresh",
                            icon: L.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: L.RefreshIcon },
                            label: x.intl.string(q.default.xKexN1),
                            disabled: l,
                            action: n,
                        }),
                        f
                            ? (0, i.jsx)(B.Dr, {
                                  id: "settings",
                                  icon: W.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: W.SettingsIcon },
                                  label: x.intl.string(q.default.gTMvzD),
                                  action: p,
                              })
                            : null,
                        c
                            ? (0, i.jsx)(B.Dr, {
                                  id: "fork",
                                  icon: U.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: U.CopyIcon },
                                  label: x.intl.string(q.default.sFFX7L),
                                  disabled: d,
                                  action: o,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)("div", {
                ref: h,
                className: Z.h,
                children: (0, i.jsx)(m.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, i.jsx)(A.K, {
                        "aria-label": g,
                        icon: Y.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
var J = l(534890),
    Q = l(27989),
    ee = l(403853);
function en(e) {
    let { badge: n, ...l } = e,
        a = t.useId();
    if (null == n) return (0, i.jsx)(J.ChatIcon, { ...l });
    let r = "custom" === l.size ? { width: l.width, height: l.height } : (0, Q.J)(l.size ?? "md");
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
                children: (0, i.jsx)(J.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: l.color,
                    colorClass: l.colorClass,
                }),
            }),
            (0, i.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === n ? ee.a : ee.Z }),
        ],
    });
}
var el = l(594483),
    ei = l(573163),
    et = l(652215),
    ea = l(746080),
    er = l(165610);
function es(e) {
    let { applicationId: n, surface: l, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, N.A)(n, l),
        { badge: h, mentionCount: g } = (0, a.cf)([ei.Ay], () => {
            let e = ei.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ei.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        f = (0, y.G)(),
        {
            fork: p,
            forking: I,
            canFork: T,
        } = (function (e, n) {
            let [l, i] = t.useState(!1),
                a = null != n && null != e && (0, V.P)(e);
            return {
                fork: t.useCallback(async () => {
                    if (!l && null != n && null != e) {
                        i(!0);
                        try {
                            await (0, el.A)(e, n);
                        } finally {
                            i(!1);
                        }
                    }
                }, [l, n, e]),
                forking: l,
                canFork: a,
            };
        })(c, r),
        _ = null != r && null != c,
        D = t.useCallback(() => {
            null != r && null != c && (0, S.pX)(et.BVt.CHANNEL(r, ea.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        M = (0, er.x1)(u) && u.data.proxyTicketRefreshing,
        z = t.useCallback(() => {
            null == u || M || k.A.refreshProxyTicket(u.id);
        }, [u, M]),
        H = t.useCallback(() => {
            null != u && (0, b.A)({ onConfirm: () => P(u.id) });
        }, [u]),
        B = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                O.A.getWindowOpen(et.MLl.ACTIVITY_POPOUT) &&
                v.A.getMainFrame()?.id === e &&
                (0, w.close)(et.MLl.ACTIVITY_POPOUT),
                (0, E.A)().leaveFrame(e),
                (0, S.pX)(
                    (function (e, n) {
                        if (null == e) return et.BVt.FRIENDS;
                        let l = F.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== n) return et.BVt.CHANNEL(e, l.id);
                        let i = F.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== n && R.A.can(et.xBc.VIEW_CHANNEL, l);
                        });
                        return null != i ? et.BVt.CHANNEL(e, i.id) : et.BVt.FRIENDS;
                    })(r, (0, er.h)(l)),
                );
        }, [u?.id, r, l]),
        G = x.intl.string(!0 === d ? q.default.YdgE0j : q.default.aWVf4j),
        L = !0 === d ? null : h,
        W = [G];
    "mention" === L
        ? W.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: g }))
        : "unread" === L && W.push(x.intl.string(x.t.x5zAGZ));
    let U = t.useCallback((e) => (0, i.jsx)(en, { ...e, badge: L }), [L]),
        Y =
            null == o
                ? null
                : (0, i.jsx)(m.m, {
                      text: G,
                      ariaHidden: !0,
                      children: (0, i.jsx)(A.K, {
                          "aria-label": W.join(", "),
                          "aria-pressed": !0 === d,
                          icon: U,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, er.x1)(u)) return Y;
    let K = x.intl.string(q.default["6g22y7"]),
        X = x.intl.string(q.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)($, {
                projectId: c?.id,
                onRefresh: z,
                isRefreshing: M,
                canEdit: _,
                onEdit: D,
                canFork: T,
                forking: I,
                onFork: p,
            }),
            Y,
            f
                ? (0, i.jsx)(m.m, {
                      text: K,
                      ariaHidden: !0,
                      children: (0, i.jsx)(A.K, {
                          "aria-label": K,
                          icon: C.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: H,
                      }),
                  })
                : null,
            (0, i.jsx)(m.m, {
                text: X,
                ariaHidden: !0,
                children: (0, i.jsx)(A.K, {
                    "aria-label": X,
                    icon: j.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: B,
                }),
            }),
        ],
    });
}
var ec = l(567126),
    ed = l(957907),
    eo = l(955999);
function eu(e) {
    let { channel: n } = e,
        l = (0, h.B9)(n.topic),
        g = (0, ed.A)(n),
        f = (0, s.Ay)(n),
        x = (0, a.bG)([o.A], () => o.A.getGuild(n.guild_id), [n.guild_id]),
        [p, m] = t.useState(!1),
        A = t.useRef(!1),
        C = t.useCallback((e) => {
            (A.current = !e), m(e);
        }, []),
        j = t.useCallback(() => C(!p), [p, C]),
        b = t.useCallback(() => C(!1), [C]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== n.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== n.id ||
                A.current ||
                m(!0);
        }
        return (A.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let y = t.useMemo(() => ({ channel: n, guild: x ?? void 0, open: p, onClose: b }), [n, x, p, b]),
        k = t.useMemo(() => ({ type: er.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]);
    if (null == l) return null;
    let v = (0, i.jsx)(I, {
        channel: n,
        channelName: f,
        guild: x,
        toolbar: (0, i.jsx)(es, {
            applicationId: l,
            surface: k,
            guildId: n.guild_id,
            channelId: n.id,
            project: g ?? null,
            chatOpen: p,
            onToggleChat: j,
        }),
    });
    return (0, i.jsxs)("div", {
        className: eo.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(c.HI, { location: x?.name, subsection: f ?? void 0 }),
            (0, i.jsx)(ec.A, {
                projectId: g?.id ?? null,
                previewApplicationId: g?.preview_application_id ?? null,
                applicationId: l,
                surface: k,
                header: v,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: y,
            }),
        ],
    });
}

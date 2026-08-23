l.r(n), l.d(n, { default: () => eh });
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
function m(e) {
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
var I = l(866665),
    A = l(408278),
    C = l(811893),
    j = l(70688),
    y = l(47294),
    b = l(16961),
    v = l(625180),
    k = l(91242),
    E = l(580954),
    N = l(672929),
    T = l(494126),
    _ = l(5867);
async function w(e) {
    null == k.A.getFrame(e) ||
        ((await (0, T.refreshProxyTicket)(e)) &&
            ((0, T.promoteFrame)(e),
            (0, T.updateFramePanelMode)(e, _.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var P = l(574172),
    S = l(869146),
    O = l(976860),
    F = l(808728),
    M = l(576705),
    R = l(972786),
    V = l(621466),
    D = l(453903),
    z = l(922016),
    H = l(980707),
    B = l(477782),
    G = l(22231),
    L = l(663417),
    W = l(625903),
    Y = l(624479),
    U = l(365199),
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
            if ("user:escape" === n && (0, V.vq)(document.activeElement, HTMLIFrameElement)) return D.o;
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
                                  icon: Y.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: Y.CopyIcon },
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
                children: (0, i.jsx)(I.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, i.jsx)(A.K, {
                        "aria-label": g,
                        icon: U.MoreHorizontalIcon,
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
    let {
            applicationId: n,
            surface: l,
            guildId: r,
            channelId: s,
            project: c,
            chatOpen: d,
            onToggleChat: o,
            previewModeSwitcher: u,
        } = e,
        h = (0, N.A)(n, l),
        { badge: g, mentionCount: f } = (0, a.cf)([ei.Ay], () => {
            let e = ei.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ei.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        p = (0, b.G)(),
        {
            fork: m,
            forking: T,
            canFork: _,
        } = (function (e, n) {
            let [l, i] = t.useState(!1),
                a = null != n && null != e && (0, R.P)(e);
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
        V = null != r && null != c,
        D = t.useCallback(() => {
            null != r && null != c && (0, O.pX)(et.BVt.CHANNEL(r, ea.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        z = (0, er.x1)(h) && h.data.proxyTicketRefreshing,
        H = t.useCallback(() => {
            null == h || z || v.A.refreshProxyTicket(h.id);
        }, [h, z]),
        B = t.useCallback(() => {
            null != h && (0, y.A)({ onConfirm: () => w(h.id) });
        }, [h]),
        G = t.useCallback(() => {
            let e = h?.id;
            null != e &&
                S.A.getWindowOpen(et.MLl.ACTIVITY_POPOUT) &&
                k.A.getMainFrame()?.id === e &&
                (0, P.close)(et.MLl.ACTIVITY_POPOUT),
                (0, E.A)().leaveFrame(e),
                (0, O.pX)(
                    (function (e, n) {
                        if (null == e) return et.BVt.FRIENDS;
                        let l = F.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== n) return et.BVt.CHANNEL(e, l.id);
                        let i = F.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== n && M.A.can(et.xBc.VIEW_CHANNEL, l);
                        });
                        return null != i ? et.BVt.CHANNEL(e, i.id) : et.BVt.FRIENDS;
                    })(r, (0, er.h)(l)),
                );
        }, [h?.id, r, l]),
        L = x.intl.string(!0 === d ? q.default.YdgE0j : q.default.aWVf4j),
        W = !0 === d ? null : g,
        Y = [L];
    "mention" === W
        ? Y.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: f }))
        : "unread" === W && Y.push(x.intl.string(x.t.x5zAGZ));
    let U = t.useCallback((e) => (0, i.jsx)(en, { ...e, badge: W }), [W]),
        K =
            null == o
                ? null
                : (0, i.jsx)(I.m, {
                      text: L,
                      ariaHidden: !0,
                      children: (0, i.jsx)(A.K, {
                          "aria-label": Y.join(", "),
                          "aria-pressed": !0 === d,
                          icon: U,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, er.x1)(h)) return (0, i.jsxs)(i.Fragment, { children: [u, K] });
    let X = x.intl.string(q.default["6g22y7"]),
        Z = x.intl.string(q.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u,
            (0, i.jsx)($, {
                projectId: c?.id,
                onRefresh: H,
                isRefreshing: z,
                canEdit: V,
                onEdit: D,
                canFork: _,
                forking: T,
                onFork: m,
            }),
            K,
            p
                ? (0, i.jsx)(I.m, {
                      text: X,
                      ariaHidden: !0,
                      children: (0, i.jsx)(A.K, {
                          "aria-label": X,
                          icon: C.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: B,
                      }),
                  })
                : null,
            (0, i.jsx)(I.m, {
                text: Z,
                ariaHidden: !0,
                children: (0, i.jsx)(A.K, {
                    "aria-label": Z,
                    icon: j.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: G,
                }),
            }),
        ],
    });
}
var ec = l(501943),
    ed = l(250872),
    eo = l(957907),
    eu = l(955999);
function eh(e) {
    let { channel: n } = e,
        l = (0, h.B9)(n.topic),
        g = (0, eo.A)(n),
        f = (0, s.Ay)(n),
        x = (0, a.bG)([o.A], () => o.A.getGuild(n.guild_id), [n.guild_id]),
        [p, I] = t.useState(!1),
        A = t.useRef(!1),
        C = t.useCallback((e) => {
            (A.current = !e), I(e);
        }, []),
        j = t.useCallback(() => C(!p), [p, C]),
        y = t.useCallback(() => C(!1), [C]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== n.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== n.id ||
                A.current ||
                I(!0);
        }
        return (A.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let b = t.useMemo(() => ({ channel: n, guild: x ?? void 0, open: p, onClose: y }), [n, x, p, y]),
        v = t.useMemo(() => ({ type: er.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]),
        { mode: k, setMode: E, hasBothModes: N } = (0, ed.fY)(l, g?.preview_application_id ?? null);
    if (null == l) return null;
    let T = (0, i.jsx)(m, {
        channel: n,
        channelName: f,
        guild: x,
        toolbar: (0, i.jsx)(es, {
            applicationId: l,
            surface: v,
            guildId: n.guild_id,
            channelId: n.id,
            project: g ?? null,
            chatOpen: p,
            onToggleChat: j,
            previewModeSwitcher: N ? (0, i.jsx)(ed.Ay, { mode: k, onChange: E }) : null,
        }),
    });
    return (0, i.jsxs)("div", {
        className: eu.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(c.HI, { location: x?.name, subsection: f ?? void 0 }),
            (0, i.jsx)(ec.A, {
                projectId: g?.id ?? null,
                previewApplicationId: g?.preview_application_id ?? null,
                applicationId: l,
                surface: v,
                header: T,
                chatOpen: !1,
                previewReady: !0,
                previewMode: k,
                channelMessages: b,
            }),
        ],
    });
}

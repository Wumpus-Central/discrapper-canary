l.r(n), l.d(n, { default: () => eg });
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
    x = l(131047),
    f = l(375708),
    m = l(999900);
function p(e) {
    let { channel: n, channelName: l, guild: t, toolbar: a } = e;
    return (0, i.jsx)("div", {
        className: m.SC,
        children: (0, i.jsx)(
            g.A,
            {
                guildId: n.guild_id,
                channelId: n.id,
                channelType: n.type,
                hideSearch: !0,
                toolbar: a,
                className: m.DD,
                "aria-label": f.intl.string(f.t.BIYAqa),
                children: (0, x.zF)({ channel: n, channelName: l, guild: t }),
            },
            `header-${n.id}`,
        ),
    });
}
l(321073);
var I = l(866665),
    A = l(408278),
    C = l(811893),
    b = l(70688),
    j = l(47294),
    y = l(16961),
    v = l(625180),
    E = l(91242),
    N = l(580954),
    k = l(672929),
    T = l(494126),
    P = l(5867);
async function _(e) {
    null == E.A.getFrame(e) ||
        ((await (0, T.refreshProxyTicket)(e)) &&
            ((0, T.promoteFrame)(e),
            (0, T.updateFramePanelMode)(e, P.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var w = l(574172),
    S = l(869146),
    O = l(976860),
    R = l(808728),
    V = l(576705),
    M = l(673724),
    z = l(948230),
    D = l(972786),
    H = l(621466),
    F = l(453903),
    B = l(922016),
    G = l(980707),
    L = l(477782),
    W = l(22231),
    U = l(663417),
    Y = l(625903),
    K = l(624479),
    X = l(365199),
    q = l(18739),
    Z = l(976814),
    $ = l(295813),
    J = l(452394);
function Q(e) {
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
        m = f.intl.string(f.t["UKOtz+"]),
        p = (0, a.bG)([q.Ay], () => null != u && null != q.Ay.getSettings(u), [u]),
        C = t.useCallback(() => {
            null != u && (0, Z.A)(u);
        }, [u]);
    return (0, i.jsx)(B.Y, {
        targetElementRef: x,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, H.vq)(document.activeElement, HTMLIFrameElement)) return F.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(G.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": m,
                children: (0, i.jsxs)(L.rX, {
                    children: [
                        r
                            ? (0, i.jsx)(L.Dr, {
                                  id: "edit",
                                  icon: W.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: W.PencilIcon },
                                  label: f.intl.string($.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, i.jsx)(L.Dr, {
                            id: "refresh",
                            icon: U.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: U.RefreshIcon },
                            label: f.intl.string($.default.xKexN1),
                            disabled: l,
                            action: n,
                        }),
                        p
                            ? (0, i.jsx)(L.Dr, {
                                  id: "settings",
                                  icon: Y.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: Y.SettingsIcon },
                                  label: f.intl.string($.default.gTMvzD),
                                  action: C,
                              })
                            : null,
                        c
                            ? (0, i.jsx)(L.Dr, {
                                  id: "remix",
                                  icon: K.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: K.CopyIcon },
                                  label: f.intl.string($.default["V+azw/"]),
                                  disabled: d,
                                  action: o,
                              })
                            : null,
                        null != g
                            ? (0, i.jsx)(L.sL, {
                                  id: "sharing",
                                  label: f.intl.string($.default.EHMPvA),
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
                className: J.h,
                children: (0, i.jsx)(I.m, {
                    text: m,
                    ariaHidden: !0,
                    children: (0, i.jsx)(A.K, {
                        "aria-label": m,
                        icon: X.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
var ee = l(534890),
    en = l(27989),
    el = l(403853);
function ei(e) {
    let { badge: n, ...l } = e,
        a = t.useId();
    if (null == n) return (0, i.jsx)(ee.ChatIcon, { ...l });
    let r = "custom" === l.size ? { width: l.width, height: l.height } : (0, en.J)(l.size ?? "md");
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
                children: (0, i.jsx)(ee.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: l.color,
                    colorClass: l.colorClass,
                }),
            }),
            (0, i.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === n ? el.a : el.Z }),
        ],
    });
}
var et = l(647514),
    ea = l(573163),
    er = l(652215),
    es = l(746080),
    ec = l(165610);
function ed(e) {
    let { applicationId: n, surface: l, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, k.A)(n, l),
        { badge: h, mentionCount: g } = (0, a.cf)([ea.Ay], () => {
            let e = ea.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ea.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        x = (0, y.G)(),
        {
            remix: m,
            remixing: p,
            canRemix: T,
        } = (function (e, n) {
            let [l, i] = t.useState(!1),
                a = null != n && null != e && ((0, D.P)(e) || (0, M.tr)(e));
            return {
                remix: t.useCallback(async () => {
                    if (!l && null != n && null != e) {
                        i(!0);
                        try {
                            await (0, et.A)(e, n);
                        } finally {
                            i(!1);
                        }
                    }
                }, [l, n, e]),
                remixing: l,
                canRemix: a,
            };
        })(c, r),
        P = null != c && (0, D.P)(c),
        H = null != r && null != c,
        F = t.useCallback(() => {
            null != r && null != c && (0, O.pX)(er.BVt.CHANNEL(r, es.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        B = (0, ec.x1)(u) && u.data.proxyTicketRefreshing,
        G = t.useCallback(() => {
            null == u || B || v.A.refreshProxyTicket(u.id);
        }, [u, B]),
        L = t.useCallback(() => {
            null != u && (0, j.A)({ onConfirm: () => _(u.id) });
        }, [u]),
        W = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                S.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT) &&
                E.A.getMainFrame()?.id === e &&
                (0, w.close)(er.MLl.ACTIVITY_POPOUT),
                (0, N.A)().leaveFrame(e),
                (0, O.pX)(
                    (function (e, n) {
                        if (null == e) return er.BVt.FRIENDS;
                        let l = R.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== n) return er.BVt.CHANNEL(e, l.id);
                        let i = R.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== n && V.A.can(er.xBc.VIEW_CHANNEL, l);
                        });
                        return null != i ? er.BVt.CHANNEL(e, i.id) : er.BVt.FRIENDS;
                    })(r, (0, ec.h)(l)),
                );
        }, [u?.id, r, l]),
        U = f.intl.string(!0 === d ? $.default.YdgE0j : $.default.aWVf4j),
        Y = !0 === d ? null : h,
        K = [U];
    "mention" === Y
        ? K.push(f.intl.formatToPlainString(f.t["3l1GOx"], { mentionCount: g }))
        : "unread" === Y && K.push(f.intl.string(f.t.x5zAGZ));
    let X = t.useCallback((e) => (0, i.jsx)(ei, { ...e, badge: Y }), [Y]),
        q =
            null == o
                ? null
                : (0, i.jsx)(I.m, {
                      text: U,
                      ariaHidden: !0,
                      children: (0, i.jsx)(A.K, {
                          "aria-label": K.join(", "),
                          "aria-pressed": !0 === d,
                          icon: X,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, ec.x1)(u)) return q;
    let Z = f.intl.string($.default["6g22y7"]),
        J = f.intl.string($.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Q, {
                projectId: c?.id,
                onRefresh: G,
                isRefreshing: B,
                canEdit: H,
                onEdit: F,
                canRemix: T,
                remixing: p,
                onRemix: m,
                sharingEnabled: null != c && (0, M.tr)(c),
                onToggleSharing: P && null != c ? () => (0, z.gv)(c.id, !(0, M.tr)(c)) : void 0,
            }),
            q,
            x
                ? (0, i.jsx)(I.m, {
                      text: Z,
                      ariaHidden: !0,
                      children: (0, i.jsx)(A.K, {
                          "aria-label": Z,
                          icon: C.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: L,
                      }),
                  })
                : null,
            (0, i.jsx)(I.m, {
                text: J,
                ariaHidden: !0,
                children: (0, i.jsx)(A.K, {
                    "aria-label": J,
                    icon: b.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: W,
                }),
            }),
        ],
    });
}
var eo = l(567126),
    eu = l(957907),
    eh = l(955999);
function eg(e) {
    let { channel: n } = e,
        l = (0, h.B9)(n.topic),
        g = (0, eu.A)(n),
        x = (0, s.Ay)(n),
        f = (0, a.bG)([o.A], () => o.A.getGuild(n.guild_id), [n.guild_id]),
        [m, I] = t.useState(!1),
        A = t.useRef(!1),
        C = t.useCallback((e) => {
            (A.current = !e), I(e);
        }, []),
        b = t.useCallback(() => C(!m), [m, C]),
        j = t.useCallback(() => C(!1), [C]);
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
    let y = t.useMemo(() => ({ channel: n, guild: f ?? void 0, open: m, onClose: j }), [n, f, m, j]),
        v = t.useMemo(() => ({ type: ec.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]);
    if (null == l) return null;
    let E = (0, i.jsx)(p, {
        channel: n,
        channelName: x,
        guild: f,
        toolbar: (0, i.jsx)(ed, {
            applicationId: l,
            surface: v,
            guildId: n.guild_id,
            channelId: n.id,
            project: g ?? null,
            chatOpen: m,
            onToggleChat: b,
        }),
    });
    return (0, i.jsxs)("div", {
        className: eh.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(c.HI, { location: f?.name, subsection: x ?? void 0 }),
            (0, i.jsx)(eo.A, {
                projectId: g?.id ?? null,
                previewApplicationId: g?.preview_application_id ?? null,
                applicationId: l,
                surface: v,
                header: E,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: y,
            }),
        ],
    });
}

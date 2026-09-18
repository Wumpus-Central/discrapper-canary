(n.r(l), n.d(l, { default: () => eN }));
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(228366),
    c = n(334738),
    r = n(47167),
    o = n(726249),
    u = n(71393),
    d = n(573163),
    h = n(662980),
    A = n(683180),
    p = n(822835),
    g = n(595332),
    f = n(927813);
let I = { lastAutoOpenedAt: null },
    b = I;
class C extends a.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        b = e ?? I;
    }
    getState() {
        return b;
    }
    canAutoOpen(e) {
        return null == b.lastAutoOpenedAt || e - b.lastAutoOpenedAt >= f.A.Millis.DAY;
    }
}
let x = new C(s.h, {
    LOGOUT: function () {
        if (null == b.lastAutoOpenedAt) return !1;
        b = I;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: l } = e;
        b = { lastAutoOpenedAt: l };
    },
});
var y = n(333007),
    j = n(192308),
    m = n(148494),
    v = n(281969),
    E = n(672929),
    w = n(20465),
    _ = n(249288),
    N = n(120426),
    O = n(563013);
function S(e) {
    let l,
        { channelId: n, applicationId: s, surface: c, onOpenChat: r } = e,
        o = (0, E.A)(s, c),
        u = o?.id ?? null,
        d =
            ((l = i.useCallback((e) => v.A.subscribe(e), [])),
            i.useSyncExternalStore(l, () => null != u && v.A.isFrameVisible(u))),
        h = (0, a.bG)([_.A], () => _.A.getToastsEnabled(n), [n]),
        A = d && h,
        p = (0, j.useHasAnyModalOpen)(),
        [g, f] = i.useState(null);
    i.useEffect(() => {
        if (!A) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let l = e.getBoundingClientRect();
                return l.width < 1 || l.height < 1
                    ? null
                    : { left: l.left, top: l.top, width: l.width, height: l.height };
            })((0, N.F)(null, u));
            f((l) =>
                (
                    null == l || null == e
                        ? l === e
                        : l.left === e.left && l.top === e.top && l.width === e.width && l.height === e.height
                )
                    ? l
                    : e,
            );
        }
        e();
        let l = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(l), window.removeEventListener("resize", e));
            }
        );
    }, [A, u]);
    let I = i.useCallback(
        (e) => {
            (r(), m.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [r],
    );
    return !A || null == g || p
        ? null
        : (0, y.createPortal)(
              (0, t.jsx)("div", {
                  className: O.T,
                  style: { top: g.top, left: g.left, width: g.width, height: g.height / 2 },
                  children: (0, t.jsx)("div", {
                      className: O.f,
                      children: (0, t.jsx)(w.A, { channelId: n, onToastClick: I }),
                  }),
              }),
              document.body,
          );
}
var T = n(742589),
    k = n(353428),
    M = n(375708),
    R = n(999900);
function G(e) {
    let { channel: l, channelName: n, guild: i, toolbar: a } = e;
    return (0, t.jsx)("div", {
        className: R.SC,
        children: (0, t.jsx)(
            T.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: R.DD,
                "aria-label": M.intl.string(M.t.BIYAqa),
                children: (0, k.zF)({ channel: l, channelName: n, guild: i }),
            },
            `header-${l.id}`,
        ),
    });
}
n(321073);
var P = n(811893),
    V = n(70688),
    D = n(47294),
    B = n(16961),
    L = n(625180),
    H = n(91242),
    z = n(580954),
    U = n(241696),
    F = n(574172),
    Y = n(869146),
    K = n(976860),
    W = n(808728),
    X = n(576705),
    q = n(972786),
    J = n(621466),
    Z = n(453903),
    $ = n(922016),
    Q = n(980707),
    ee = n(477782),
    el = n(22231),
    en = n(663417),
    et = n(625903),
    ei = n(624479),
    ea = n(365199),
    es = n(277977),
    ec = n(976814),
    er = n(50617),
    eo = n(452394);
function eu(e) {
    let {
            onRefresh: l,
            isRefreshing: n,
            canEdit: s,
            onEdit: c,
            canRemix: r,
            onRemix: o,
            projectId: u,
            onProjectSettings: d,
        } = e,
        h = i.useRef(null),
        A = M.intl.string(M.t["UKOtz+"]),
        p = (0, a.bG)([es.Ay], () => null != u && null != es.Ay.getSettings(u), [u]),
        g = i.useCallback(() => {
            null != u && (0, ec.A)(u);
        }, [u]);
    return (0, t.jsx)($.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, J.vq)(document.activeElement, HTMLIFrameElement)) return Z.o;
        },
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, t.jsx)(Q.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: i,
                onSelect: i,
                "aria-label": A,
                children: (0, t.jsxs)(ee.rX, {
                    children: [
                        s
                            ? (0, t.jsx)(ee.Dr, {
                                  id: "edit",
                                  icon: el.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: el.PencilIcon },
                                  label: M.intl.string(er.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, t.jsx)(ee.Dr, {
                            id: "refresh",
                            icon: en.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: en.RefreshIcon },
                            label: M.intl.string(er.default.xKexN1),
                            disabled: n,
                            action: l,
                        }),
                        p
                            ? (0, t.jsx)(ee.Dr, {
                                  id: "settings",
                                  icon: et.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: et.SettingsIcon },
                                  label: M.intl.string(er.default.gTMvzD),
                                  action: g,
                              })
                            : null,
                        null != d
                            ? (0, t.jsx)(ee.Dr, {
                                  id: "project-settings",
                                  icon: et.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: et.SettingsIcon },
                                  label: M.intl.string(er.default["xhcY+n"]),
                                  action: d,
                              })
                            : null,
                        r
                            ? (0, t.jsx)(ee.Dr, {
                                  id: "remix",
                                  icon: ei.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: ei.CopyIcon },
                                  label: M.intl.string(er.default["V+azw/"]),
                                  action: o,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsx)("div", {
                ref: h,
                className: eo.h,
                children: (0, t.jsx)(T.A.Icon, {
                    icon: ea.MoreHorizontalIcon,
                    tooltip: A,
                    "aria-label": A,
                    onClick: l,
                }),
            });
        },
    });
}
var ed = n(534890),
    eh = n(27989),
    eA = n(403853);
function ep(e) {
    let { badge: l, ...n } = e,
        a = i.useId();
    if (null == l) return (0, t.jsx)(ed.ChatIcon, { ...n });
    let s = "custom" === n.size ? { width: n.width, height: n.height } : (0, eh.J)(n.size ?? "md");
    return (0, t.jsxs)("svg", {
        width: s?.width ?? 24,
        height: s?.height ?? 24,
        viewBox: "0 0 24 24",
        className: n.className,
        style: n.style,
        children: [
            (0, t.jsx)("defs", {
                children: (0, t.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, t.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, t.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, t.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, t.jsx)(ed.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: n.color,
                    colorClass: n.colorClass,
                }),
            }),
            (0, t.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? eA.a : eA.Z }),
        ],
    });
}
var eg = n(210744),
    ef = n(869369),
    eI = n(584936),
    eb = n(652215),
    eC = n(746080),
    ex = n(165610);
function ey(e) {
    let l,
        { applicationId: n, surface: s, guildId: c, channelId: r, project: o, chatOpen: u, onToggleChat: h } = e,
        A = (0, E.A)(n, s),
        { badge: p, mentionCount: g } = (0, a.cf)(
            [d.Ay],
            () => {
                let e = d.Ay.getMentionCount(r);
                return e > 0
                    ? { badge: "mention", mentionCount: e }
                    : d.Ay.hasUnread(r)
                      ? { badge: "unread", mentionCount: e }
                      : { badge: null, mentionCount: e };
            },
            [r],
        ),
        f = (0, B.G)(),
        { remix: I, canRemix: b } =
            ((l = null != c && null != o && (0, q.H_)(o)),
            {
                remix: i.useCallback(() => {
                    null != c && null != o && (0, eI.A)(o, c);
                }, [c, o]),
                canRemix: l,
            }),
        C = null != o && (0, q.PV)(o),
        x = null != c && null != o,
        y = i.useCallback(() => {
            null != c && null != o && (0, K.pX)(eb.BVt.CHANNEL(c, eC.VV.VIBEGRATIONS, o.id));
        }, [c, o]),
        j = (0, ex.x1)(A) && A.data.proxyTicketRefreshing,
        m = i.useCallback(() => {
            null == A || j || L.A.refreshProxyTicket(A.id);
        }, [A, j]),
        v = i.useCallback(() => {
            null != A && (0, D.A)({ onConfirm: () => (0, U.A)(A.id) });
        }, [A]),
        w = i.useCallback(() => {
            let e = A?.id;
            (null != e &&
                Y.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) &&
                H.A.getMainFrame()?.id === e &&
                (0, F.close)(eb.MLl.ACTIVITY_POPOUT),
                (0, z.A)().leaveFrame(e),
                (0, K.pX)(
                    (function (e, l) {
                        if (null == e) return eb.BVt.FRIENDS;
                        let n = W.Ay.getDefaultChannel(e);
                        if (null != n && n.id !== l) return eb.BVt.CHANNEL(e, n.id);
                        let t = W.Ay.getFirstChannel(e, (e) => {
                            let { channel: n } = e;
                            return n.id !== l && X.A.can(eb.xBc.VIEW_CHANNEL, n);
                        });
                        return null != t ? eb.BVt.CHANNEL(e, t.id) : eb.BVt.FRIENDS;
                    })(c, (0, ex.h)(s)),
                ));
        }, [A?.id, c, s]),
        _ = M.intl.string(!0 === u ? er.default.YdgE0j : er.default.aWVf4j),
        N = !0 === u ? null : p,
        O = [_];
    "mention" === N
        ? O.push(M.intl.formatToPlainString(M.t["3l1GOx"], { mentionCount: g }))
        : "unread" === N && O.push(M.intl.string(M.t.x5zAGZ));
    let S = i.useCallback((e) => (0, t.jsx)(ep, { ...e, badge: N }), [N]),
        k =
            null == h
                ? null
                : (0, t.jsx)(T.A.Icon, {
                      icon: S,
                      tooltip: _,
                      "aria-label": O.join(", "),
                      selected: !0 === u,
                      onClick: h,
                  });
    if (!(0, ex.x1)(A)) return k;
    let R = M.intl.string(er.default["6g22y7"]),
        G = M.intl.string(er.default.Ea0Wrr);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(eu, {
                projectId: o?.id,
                onRefresh: m,
                isRefreshing: j,
                canEdit: x,
                onEdit: y,
                canRemix: b,
                onRemix: I,
                onProjectSettings: C && null != o ? () => (0, ef.A)(o.id, o.guild_id ?? c ?? void 0) : void 0,
            }),
            k,
            (0, t.jsx)(eg.A, { frame: A, controlProjectId: null != o && n === o.preview_application_id ? o.id : null }),
            f ? (0, t.jsx)(T.A.Icon, { icon: P.t, tooltip: R, "aria-label": R, onClick: v }) : null,
            (0, t.jsx)(T.A.Icon, { icon: V.DoorExitIcon, tooltip: G, "aria-label": G, onClick: w }),
        ],
    });
}
var ej = n(803510),
    em = n(696451),
    ev = n(935208),
    eE = n(673724),
    ew = n(948230),
    e_ = n(955999);
function eN(e) {
    let l,
        n,
        f,
        I,
        b,
        { channel: C } = e,
        y = (0, A.B9)(C.topic),
        j =
            ((n = null != (l = (0, A.B9)(C?.topic))),
            (f = C?.guild_id ?? null),
            (I = (0, a.bG)(
                [u.A, X.A],
                () => {
                    let e = null != f ? u.A.getGuild(f) : null;
                    return null != e && X.A.can(eb.xBc.MANAGE_GUILD, e);
                },
                [f],
            )),
            (b = (0, a.yK)([em.Ay], () => (null != f ? (em.Ay.getSelfMember(f)?.roles ?? []) : []), [f])),
            i.useEffect(() => {
                n && null != l && (0, ew.hF)(f ?? void 0);
            }, [n, l, f, I, b]),
            (0, a.bG)(
                [q.Ay],
                () => {
                    if (null == l) return null;
                    let e = q.Ay.findProjectByApplicationId(l);
                    if (null == e || (0, q.PV)(e)) return e;
                    let n = null != f ? ev.default.castGuildIdAsEveryoneGuildRoleId(f) : null,
                        t = (e.collaborator_role_ids ?? []).some((e) => e === n || b.includes(e));
                    return e.guild_id === f && (0, eE.XE)(e) && (I || t) ? e : null;
                },
                [l, I, b, f],
            )),
        m = (0, r.Ay)(C),
        v = (0, a.bG)([u.A], () => u.A.getGuild(C.guild_id), [C.guild_id]),
        E = (0, a.bG)([g.A], () => g.A.isChatOpen(C.id), [C.id]),
        w = (0, a.bG)([d.Ay], () => d.Ay.hasUnread(C.id), [C.id]),
        _ = i.useRef(!1),
        N = i.useRef(!1),
        O = i.useRef(!0);
    i.useEffect(() => {
        ((_.current = !1), (N.current = !1), (O.current = !0));
    }, [C.id]);
    let T = i.useCallback(() => {
            !(d.Ay.getMentionCount(C.id) > 0) &&
                d.Ay.hasUnread(C.id) &&
                (0, c.ack)(
                    C.id,
                    {
                        section: eb.JJy.CHANNEL,
                        object: eb.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                        objectType: eb.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        }, [C.id]),
        k = i.useCallback(
            (e) => {
                ((_.current = !e), e || T(), (0, h.T)(C.id, e));
            },
            [C.id, T],
        ),
        M = i.useCallback(() => k(!E), [E, k]),
        R = i.useCallback(() => k(!1), [k]),
        P = i.useCallback(() => k(!0), [k]);
    (i.useEffect(() => {
        !w ||
            !O.current ||
            ((O.current = !1),
            _.current ||
                g.A.isChatOpen(C.id) ||
                (!N.current &&
                    x.canAutoOpen(Date.now()) &&
                    ((N.current = !0), (0, h.Y)(C.id, Date.now()), (0, h.T)(C.id, !0))));
    }, [w, C.id]),
        i.useEffect(() => {
            function e(e) {
                e.channelId === C.id && (O.current = !1);
            }
            return (s.h.subscribe("MESSAGE_CREATE", e), () => s.h.unsubscribe("MESSAGE_CREATE", e));
        }, [C.id]));
    let V = i.useMemo(() => ({ channel: C, guild: v ?? void 0, open: E, onClose: R }), [C, v, E, R]),
        {
            availability: D,
            activeMode: B,
            widgetApplicationId: L,
        } = (0, p.q)({
            applicationId: y ?? null,
            previewApplicationId: j?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: j?.install_scope ?? null,
        }),
        H = i.useMemo(() => ({ ...D, modes: null != B ? [B] : [], defaultMode: B, showModeSwitch: !1 }), [D, B]),
        z = i.useMemo(() => ({ type: ex.U4.APP_CHANNEL, channelId: C.id, guildId: C.guild_id ?? void 0 }), [C]);
    if (null == y) return null;
    let U = (0, t.jsx)(G, {
        channel: C,
        channelName: m,
        guild: v,
        toolbar: (0, t.jsx)(ey, {
            applicationId: y,
            surface: z,
            guildId: C.guild_id,
            channelId: C.id,
            project: j ?? null,
            chatOpen: E,
            onToggleChat: M,
        }),
    });
    return (0, t.jsxs)("div", {
        className: e_.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, t.jsx)(o.HI, { location: v?.name, subsection: m ?? void 0 }),
            (0, t.jsx)(ej.A, {
                availability: H,
                activeMode: B,
                widgetApplicationId: L,
                projectId: j?.id ?? null,
                installScope: j?.install_scope ?? null,
                previewApplicationId: j?.preview_application_id ?? null,
                applicationId: y,
                surface: z,
                header: U,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: V,
            }),
            E ? null : (0, t.jsx)(S, { channelId: C.id, applicationId: y, surface: z, onOpenChat: P }),
        ],
    });
}

l.d(n, { Ay: () => B, IC: () => K, Pk: () => F, dG: () => w, gm: () => z });
var s = l(477900),
    t = l(582128),
    a = l(503698),
    i = l.n(a);
if (221552 == l.j) var r = l(837381);
var u = l(17928);
if (221552 == l.j) var c = l(3026);
var o = l(97808),
    d = l(778712),
    A = l(866665);
if (221552 == l.j) var E = l(834730);
if (221552 == l.j) var f = l(559106);
var N = l(25639),
    m = l(186369),
    h = l(148719),
    b = l(47167),
    _ = l(970812),
    D = l(713654),
    x = l(945096),
    T = l(922301),
    g = l(660184),
    p = l(598104),
    U = l(95035),
    M = l(162199),
    C = l(897898),
    v = l(71393),
    I = l(290863),
    j = l(741961),
    R = l(287809),
    L = l(977997),
    y = l(19575),
    G = l(66933),
    O = l(652215),
    S = l(790782),
    V = l(964306),
    P = l(672812);
let k = {
    SELECTED: P.J1,
    CONNECTED: P.d4,
    UNREAD_IMPORTANT: P.V2,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.F4,
    LOCKED: P.yg,
};
function w(e) {
    (e.preventDefault(), e.stopPropagation());
}
let H = y.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function K(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: t } = e;
    return (0, s.jsx)(p.A, { className: t, channel: n, "aria-hidden": !0, size: l });
}
function F(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: t } = e,
        a = (0, u.bG)([R.default], () => R.default.getUser(n?.recipients[0])),
        i = (0, u.bG)(
            [j.A],
            () => !(null == a || null == n || n.isMultiUserDM()) && null != j.A.getTypingUsers(n?.id)[a?.id],
        ),
        {
            status: r,
            isMobile: c,
            isVR: o,
        } = (0, u.cf)([I.A], () =>
            null == a || null == n || n.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(a.id), isMobile: I.A.isMobileOnline(a.id), isVR: I.A.isVROnline(a.id) },
        );
    return (0, s.jsx)(H, {
        className: t,
        size: l,
        src: a?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: c,
        isVR: o,
        isTyping: i,
        "aria-label": a?.username,
        statusTooltip: !0,
    });
}
let z = t.memo(function (e) {
    let {
            className: n,
            containerClassName: l,
            channel: t,
            locked: a,
            hasActiveThreads: r,
            hasUsersInVoiceChannel: c,
        } = e,
        o = (0, u.bG)([v.A], () => v.A.getGuild(t.guild_id), [t.guild_id]),
        { enableWaveformIcon: d } = (0, m.b)(t.guild_id, "ChannelItemIcon"),
        E = (0, u.bG)([N.A], () => N.A.getAnimationStyle(t.id), [t.id]),
        f = t.type === O.rbe.GUILD_VOICE,
        b = null;
    if (d && f && !a && c)
        b = (0, s.jsx)(_.A, { color: "currentColor", className: i()(P.Kk, n), animationStyle: E, locked: (0, h.A)(t) });
    else {
        let e = (function (e, n, l) {
            switch (e.type) {
                case O.rbe.DM:
                    return function (n) {
                        let { className: l } = n;
                        return (0, s.jsx)(F, { channel: e, className: l });
                    };
                case O.rbe.GROUP_DM:
                    return function (n) {
                        let { className: l } = n;
                        return (0, s.jsx)(K, { channel: e, className: l });
                    };
                default:
                    return (0, D.gU)(e, n, l);
            }
        })(t, o, { locked: a, hasActiveThreads: r });
        if (null == e) return null;
        b = (0, s.jsx)(e, { color: "currentColor", className: i()(P.Kk, n) });
    }
    let x = (0, D.Bq)(t, o, a, r),
        T = `${x} icon`;
    return (0, s.jsx)(A.m, {
        text: x,
        delay: 500,
        children: (0, s.jsx)("div", { role: "img", "aria-label": T, className: i()(P.zc, l), children: b }),
    });
});
function B(e) {
    let {
            channel: n,
            name: l,
            muted: a,
            selected: o,
            connected: d,
            unread: A,
            locked: N,
            hasActiveThreads: m,
            onClick: h,
            onMouseDown: _,
            onMouseUp: D,
            onContextMenu: x,
            connectDragPreview: T,
            className: g,
            iconClassName: p,
            subtitle: v,
            subtitleColor: I,
            channel: { type: j },
            onMouseEnter: R,
            onMouseLeave: y,
            "aria-label": H,
            children: K,
            guild: F,
            channelTypeOverride: B,
            forceInteractable: J,
            mentionCount: W,
            resolvedUnreadSetting: Y,
            isFavoriteSuggestion: q,
            hasActiveEvent: X = !1,
            transitionExtras: $,
            ref: Q,
        } = e,
        ee = Y === S.e.ALL_MESSAGES || (null != W && W > 0),
        en = (0, u.bG)([L.A], () => Object.values(L.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
        { role: el, ...es } = (0, r.rm)(n.id),
        et = t.useRef(null),
        ea = t.useRef(null),
        ei = (0, M.A)(n);
    null != ei && G.A.getConfig({ guildId: ei, location: "channel_item" });
    let er = O.BVt.CHANNEL(ei, n.id),
        eu = (0, b.Ay)(n),
        ec = n.isGuildVocal(),
        eo = null != h || null != D || null != _ || J,
        ed = (0, s.jsx)("div", {
            className: i()({ [P.ow]: q }),
            ref: ea,
            children: (0, s.jsxs)(U.A, {
                role: ec && !d ? "button" : "link",
                href: ec ? void 0 : er,
                target: "_blank",
                ref: et,
                className: P.nf,
                onClick: () => h?.(n),
                onAuxClick: (e) => (0, C.A)(e, n),
                transitionExtras: $,
                ...es,
                "aria-label": H,
                "aria-current": o ? "page" : void 0,
                focusProps: { enabled: !1 },
                children: [
                    (0, s.jsxs)("div", {
                        className: P.Y5,
                        children: [
                            (0, s.jsx)(z, {
                                className: p,
                                channel: n,
                                guild: F,
                                hasUsersInVoiceChannel: en,
                                hasActiveThreads: m,
                                locked: N,
                            }),
                            (0, s.jsx)(c.A, {
                                className: i()(P.UU, { [P.NW]: X }),
                                "aria-hidden": !0,
                                children: (0, s.jsx)(Z, {
                                    textVariant: "text-md/medium",
                                    channel: n,
                                    name: null != l ? l : eu,
                                }),
                            }),
                            t.Children.count(K) > 0
                                ? (0, s.jsx)("div", { onClick: w, onKeyPress: w, className: P.Y_, children: K })
                                : null,
                        ],
                    }),
                    null != v
                        ? (0, s.jsx)("div", {
                              className: P.MA,
                              children: (0, s.jsx)(E.E, {
                                  color: I ?? "text-muted",
                                  variant: "text-xs/medium",
                                  className: P.VA,
                                  children: v,
                              }),
                          })
                        : null,
                ],
            }),
        });
    return (0, s.jsx)(f.vN, {
        focusTarget: et,
        ringTarget: ea,
        offset: { top: 2, bottom: 2, right: 4 },
        children: (0, s.jsxs)("div", {
            ref: Q,
            className: i()(
                g,
                eo ? P.iE : P.IA,
                (function () {
                    if (o) return i()(V.rM, k.SELECTED);
                    if (d) return i()(V.rM, k.CONNECTED);
                    if (N) return k.LOCKED;
                    if (a) return k.MUTED;
                    if (A)
                        if (ee) return k.UNREAD_IMPORTANT;
                        else return k.UNREAD_LESS_IMPORTANT;
                    return null;
                })(),
                (function (e) {
                    switch (e) {
                        case O.rbe.GUILD_STAGE_VOICE:
                        case O.rbe.GUILD_VOICE:
                            return P.typeVoice;
                        case O.rbe.ANNOUNCEMENT_THREAD:
                        case O.rbe.PUBLIC_THREAD:
                        case O.rbe.PRIVATE_THREAD:
                            return P.ZS;
                        case O.rbe.GUILD_ANNOUNCEMENT:
                        case O.rbe.GUILD_TEXT:
                        case O.rbe.GUILD_STORE:
                        case O.rbe.GUILD_FORUM:
                        case O.rbe.GUILD_MEDIA:
                        case O.rbe.GUILD_APP:
                        default:
                            return P.typeDefault;
                    }
                })(B ?? j),
            ),
            onMouseUp: (e) => D?.(e, n),
            onMouseDown: (e) => _?.(e, n),
            onContextMenu: (e) => x?.(e, n),
            onMouseEnter: R,
            onMouseLeave: y,
            children: [a || !A ? null : (0, s.jsx)("div", { className: i()(P.gy, ee ? P.WS : void 0) }), T?.(ed) ?? ed],
        }),
    });
}
function Z(e) {
    let { channel: n, name: l, textVariant: a } = e,
        i = n.isPrivate() && 1 === (n.rawRecipients ?? []).length,
        r = n.rawRecipients?.[0]?.display_name_styles,
        u = t.useMemo(() => (i ? (0, x.mT)(r) : null), [i, r]);
    return null != u
        ? (0, s.jsx)(g.A, {
              userName: l,
              displayNameStyles: u,
              effectDisplayType: T.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: a,
          })
        : (0, s.jsx)(E.E, { variant: a, tag: "span", color: "none", children: l });
}

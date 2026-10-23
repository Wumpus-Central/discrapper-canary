n.d(l, { Ay: () => B, IC: () => K, Pk: () => F, dG: () => w, gm: () => z });
var t = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i);
if (221552 == n.j) var r = n(837381);
var u = n(17928);
if (221552 == n.j) var c = n(3026);
var o = n(97808),
    d = n(778712),
    A = n(866665);
if (221552 == n.j) var E = n(834730);
if (221552 == n.j) var f = n(559106);
var N = n(25639),
    m = n(186369),
    h = n(148719),
    b = n(47167),
    _ = n(970812),
    x = n(713654),
    D = n(945096),
    T = n(922301),
    p = n(660184),
    g = n(598104),
    U = n(95035),
    M = n(162199),
    C = n(897898),
    v = n(71393),
    I = n(290863),
    j = n(741961),
    R = n(287809),
    L = n(977997),
    y = n(19575),
    G = n(66933),
    S = n(652215),
    O = n(790782),
    V = n(964306),
    P = n(672812);
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
    let { channel: l, size: n = d._3.SIZE_20, className: s } = e;
    return (0, t.jsx)(g.A, { className: s, channel: l, "aria-hidden": !0, size: n });
}
function F(e) {
    let { channel: l, size: n = d._3.SIZE_20, className: s } = e,
        i = (0, u.bG)([R.default], () => R.default.getUser(l?.recipients[0])),
        a = (0, u.bG)(
            [j.A],
            () => !(null == i || null == l || l.isMultiUserDM()) && null != j.A.getTypingUsers(l?.id)[i?.id],
        ),
        {
            status: r,
            isMobile: c,
            isVR: o,
        } = (0, u.cf)([I.A], () =>
            null == i || null == l || l.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(i.id), isMobile: I.A.isMobileOnline(i.id), isVR: I.A.isVROnline(i.id) },
        );
    return (0, t.jsx)(H, {
        className: s,
        size: n,
        src: i?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: c,
        isVR: o,
        isTyping: a,
        "aria-label": i?.username,
        statusTooltip: !0,
    });
}
let z = s.memo(function (e) {
    let {
            className: l,
            containerClassName: n,
            channel: s,
            locked: i,
            hasActiveThreads: r,
            hasUsersInVoiceChannel: c,
            tooltipText: o,
        } = e,
        d = (0, u.bG)([v.A], () => v.A.getGuild(s.guild_id), [s.guild_id]),
        { enableWaveformIcon: E } = (0, m.b)(s.guild_id, "ChannelItemIcon"),
        f = (0, u.bG)([N.A], () => N.A.getAnimationStyle(s.id), [s.id]),
        b = s.type === S.rbe.GUILD_VOICE,
        D = null;
    if (E && b && !i && c)
        D = (0, t.jsx)(_.A, { color: "currentColor", className: a()(P.Kk, l), animationStyle: f, locked: (0, h.A)(s) });
    else {
        let e = (function (e, l, n) {
            switch (e.type) {
                case S.rbe.DM:
                    return function (l) {
                        let { className: n } = l;
                        return (0, t.jsx)(F, { channel: e, className: n });
                    };
                case S.rbe.GROUP_DM:
                    return function (l) {
                        let { className: n } = l;
                        return (0, t.jsx)(K, { channel: e, className: n });
                    };
                default:
                    return (0, x.gU)(e, l, n);
            }
        })(s, d, { locked: i, hasActiveThreads: r });
        if (null == e) return null;
        D = (0, t.jsx)(e, { color: "currentColor", className: a()(P.Kk, l) });
    }
    let T = (0, x.Bq)(s, d, i, r),
        p = `${T} icon`;
    return (0, t.jsx)(A.m, {
        text: o ?? T,
        delay: 500,
        children: (0, t.jsx)("div", { role: "img", "aria-label": p, className: a()(P.zc, n), children: D }),
    });
});
function B(e) {
    let {
            channel: l,
            name: n,
            muted: i,
            selected: o,
            connected: d,
            unread: A,
            locked: N,
            hasActiveThreads: m,
            onClick: h,
            onMouseDown: _,
            onMouseUp: x,
            onContextMenu: D,
            connectDragPreview: T,
            className: p,
            iconClassName: g,
            iconTooltipText: v,
            subtitle: I,
            subtitleColor: j,
            channel: { type: R },
            onMouseEnter: y,
            onMouseLeave: H,
            "aria-label": K,
            children: F,
            guild: B,
            channelTypeOverride: J,
            forceInteractable: W,
            mentionCount: Y,
            resolvedUnreadSetting: q,
            isFavoriteSuggestion: X,
            hasActiveEvent: $ = !1,
            disableOverflowTooltip: Q = !1,
            transitionExtras: ee,
            ref: el,
        } = e,
        en = q === O.e.ALL_MESSAGES || (null != Y && Y > 0),
        et = (0, u.bG)([L.A], () => Object.values(L.A.getVoiceStatesForChannel(l.id)).length > 0, [l.id]),
        { role: es, ...ei } = (0, r.rm)(l.id),
        ea = s.useRef(null),
        er = s.useRef(null),
        eu = (0, M.A)(l);
    null != eu && G.A.getConfig({ guildId: eu, location: "channel_item" });
    let ec = S.BVt.CHANNEL(eu, l.id),
        eo = (0, b.Ay)(l),
        ed = l.isGuildVocal(),
        eA = null != h || null != x || null != _ || W,
        eE = (0, t.jsx)("div", {
            className: a()({ [P.ow]: X }),
            ref: er,
            children: (0, t.jsxs)(U.A, {
                role: ed && !d ? "button" : "link",
                href: ed ? void 0 : ec,
                target: "_blank",
                ref: ea,
                className: P.nf,
                onClick: () => h?.(l),
                onAuxClick: (e) => (0, C.A)(e, l),
                transitionExtras: ee,
                ...ei,
                "aria-label": K,
                "aria-current": o ? "page" : void 0,
                focusProps: { enabled: !1 },
                children: [
                    (0, t.jsxs)("div", {
                        className: P.Y5,
                        children: [
                            (0, t.jsx)(z, {
                                className: g,
                                tooltipText: v,
                                channel: l,
                                guild: B,
                                hasUsersInVoiceChannel: et,
                                hasActiveThreads: m,
                                locked: N,
                            }),
                            (0, t.jsx)(c.A, {
                                className: a()(P.UU, { [P.NW]: $ }),
                                shouldShow: !Q,
                                "aria-hidden": !0,
                                children: (0, t.jsx)(Z, {
                                    textVariant: "text-md/medium",
                                    channel: l,
                                    name: null != n ? n : eo,
                                }),
                            }),
                            s.Children.count(F) > 0
                                ? (0, t.jsx)("div", { onClick: w, onKeyPress: w, className: P.Y_, children: F })
                                : null,
                        ],
                    }),
                    null != I
                        ? (0, t.jsx)("div", {
                              className: P.MA,
                              children: (0, t.jsx)(E.E, {
                                  color: j ?? "text-muted",
                                  variant: "text-xs/medium",
                                  className: P.VA,
                                  children: I,
                              }),
                          })
                        : null,
                ],
            }),
        });
    return (0, t.jsx)(f.vN, {
        focusTarget: ea,
        ringTarget: er,
        offset: { top: 2, bottom: 2, right: 4 },
        children: (0, t.jsxs)("div", {
            ref: el,
            className: a()(
                p,
                eA ? P.iE : P.IA,
                (function () {
                    if (o) return a()(V.rM, k.SELECTED);
                    if (d) return a()(V.rM, k.CONNECTED);
                    if (N) return k.LOCKED;
                    if (i) return k.MUTED;
                    if (A)
                        if (en) return k.UNREAD_IMPORTANT;
                        else return k.UNREAD_LESS_IMPORTANT;
                    return null;
                })(),
                (function (e) {
                    switch (e) {
                        case S.rbe.GUILD_STAGE_VOICE:
                        case S.rbe.GUILD_VOICE:
                            return P.typeVoice;
                        case S.rbe.ANNOUNCEMENT_THREAD:
                        case S.rbe.PUBLIC_THREAD:
                        case S.rbe.PRIVATE_THREAD:
                            return P.ZS;
                        case S.rbe.GUILD_ANNOUNCEMENT:
                        case S.rbe.GUILD_TEXT:
                        case S.rbe.GUILD_STORE:
                        case S.rbe.GUILD_FORUM:
                        case S.rbe.GUILD_MEDIA:
                        case S.rbe.GUILD_APP:
                        default:
                            return P.typeDefault;
                    }
                })(J ?? R),
            ),
            onMouseUp: (e) => x?.(e, l),
            onMouseDown: (e) => _?.(e, l),
            onContextMenu: (e) => D?.(e, l),
            onMouseEnter: y,
            onMouseLeave: H,
            children: [i || !A ? null : (0, t.jsx)("div", { className: a()(P.gy, en ? P.WS : void 0) }), T?.(eE) ?? eE],
        }),
    });
}
function Z(e) {
    let { channel: l, name: n, textVariant: i } = e,
        a = l.isPrivate() && 1 === (l.rawRecipients ?? []).length,
        r = l.rawRecipients?.[0]?.display_name_styles,
        u = s.useMemo(() => (a ? (0, D.mT)(r) : null), [a, r]);
    return null != u
        ? (0, t.jsx)(p.A, {
              userName: n,
              displayNameStyles: u,
              effectDisplayType: T.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: i,
          })
        : (0, t.jsx)(E.E, { variant: i, tag: "span", color: "none", children: n });
}

l.d(n, { Ay: () => B, IC: () => K, Pk: () => F, dG: () => w, gm: () => z });
var t = l(477900),
    s = l(582128),
    i = l(503698),
    a = l.n(i);
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
    x = l(713654),
    D = l(945096),
    T = l(922301),
    p = l(660184),
    g = l(598104),
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
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e;
    return (0, t.jsx)(g.A, { className: s, channel: n, "aria-hidden": !0, size: l });
}
function F(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e,
        i = (0, u.bG)([R.default], () => R.default.getUser(n?.recipients[0])),
        a = (0, u.bG)(
            [j.A],
            () => !(null == i || null == n || n.isMultiUserDM()) && null != j.A.getTypingUsers(n?.id)[i?.id],
        ),
        {
            status: r,
            isMobile: c,
            isVR: o,
        } = (0, u.cf)([I.A], () =>
            null == i || null == n || n.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(i.id), isMobile: I.A.isMobileOnline(i.id), isVR: I.A.isVROnline(i.id) },
        );
    return (0, t.jsx)(H, {
        className: s,
        size: l,
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
            className: n,
            containerClassName: l,
            channel: s,
            locked: i,
            hasActiveThreads: r,
            hasUsersInVoiceChannel: c,
            tooltipText: o,
        } = e,
        d = (0, u.bG)([v.A], () => v.A.getGuild(s.guild_id), [s.guild_id]),
        { enableWaveformIcon: E } = (0, m.b)(s.guild_id, "ChannelItemIcon"),
        f = (0, u.bG)([N.A], () => N.A.getAnimationStyle(s.id), [s.id]),
        b = s.type === O.rbe.GUILD_VOICE,
        D = null;
    if (E && b && !i && c)
        D = (0, t.jsx)(_.A, { color: "currentColor", className: a()(P.Kk, n), animationStyle: f, locked: (0, h.A)(s) });
    else {
        let e = (function (e, n, l) {
            switch (e.type) {
                case O.rbe.DM:
                    return function (n) {
                        let { className: l } = n;
                        return (0, t.jsx)(F, { channel: e, className: l });
                    };
                case O.rbe.GROUP_DM:
                    return function (n) {
                        let { className: l } = n;
                        return (0, t.jsx)(K, { channel: e, className: l });
                    };
                default:
                    return (0, x.gU)(e, n, l);
            }
        })(s, d, { locked: i, hasActiveThreads: r });
        if (null == e) return null;
        D = (0, t.jsx)(e, { color: "currentColor", className: a()(P.Kk, n) });
    }
    let T = (0, x.Bq)(s, d, i, r),
        p = `${T} icon`;
    return (0, t.jsx)(A.m, {
        text: o ?? T,
        delay: 500,
        children: (0, t.jsx)("div", { role: "img", "aria-label": p, className: a()(P.zc, l), children: D }),
    });
});
function B(e) {
    let {
            channel: n,
            name: l,
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
            transitionExtras: Q,
            ref: ee,
        } = e,
        en = q === S.e.ALL_MESSAGES || (null != Y && Y > 0),
        el = (0, u.bG)([L.A], () => Object.values(L.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
        { role: et, ...es } = (0, r.rm)(n.id),
        ei = s.useRef(null),
        ea = s.useRef(null),
        er = (0, M.A)(n);
    null != er && G.A.getConfig({ guildId: er, location: "channel_item" });
    let eu = O.BVt.CHANNEL(er, n.id),
        ec = (0, b.Ay)(n),
        eo = n.isGuildVocal(),
        ed = null != h || null != x || null != _ || W,
        eA = (0, t.jsx)("div", {
            className: a()({ [P.ow]: X }),
            ref: ea,
            children: (0, t.jsxs)(U.A, {
                role: eo && !d ? "button" : "link",
                href: eo ? void 0 : eu,
                target: "_blank",
                ref: ei,
                className: P.nf,
                onClick: () => h?.(n),
                onAuxClick: (e) => (0, C.A)(e, n),
                transitionExtras: Q,
                ...es,
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
                                channel: n,
                                guild: B,
                                hasUsersInVoiceChannel: el,
                                hasActiveThreads: m,
                                locked: N,
                            }),
                            (0, t.jsx)(c.A, {
                                className: a()(P.UU, { [P.NW]: $ }),
                                "aria-hidden": !0,
                                children: (0, t.jsx)(Z, {
                                    textVariant: "text-md/medium",
                                    channel: n,
                                    name: null != l ? l : ec,
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
        focusTarget: ei,
        ringTarget: ea,
        offset: { top: 2, bottom: 2, right: 4 },
        children: (0, t.jsxs)("div", {
            ref: ee,
            className: a()(
                p,
                ed ? P.iE : P.IA,
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
                })(J ?? R),
            ),
            onMouseUp: (e) => x?.(e, n),
            onMouseDown: (e) => _?.(e, n),
            onContextMenu: (e) => D?.(e, n),
            onMouseEnter: y,
            onMouseLeave: H,
            children: [i || !A ? null : (0, t.jsx)("div", { className: a()(P.gy, en ? P.WS : void 0) }), T?.(eA) ?? eA],
        }),
    });
}
function Z(e) {
    let { channel: n, name: l, textVariant: i } = e,
        a = n.isPrivate() && 1 === (n.rawRecipients ?? []).length,
        r = n.rawRecipients?.[0]?.display_name_styles,
        u = s.useMemo(() => (a ? (0, D.mT)(r) : null), [a, r]);
    return null != u
        ? (0, t.jsx)(p.A, {
              userName: l,
              displayNameStyles: u,
              effectDisplayType: T.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: i,
          })
        : (0, t.jsx)(E.E, { variant: i, tag: "span", color: "none", children: l });
}

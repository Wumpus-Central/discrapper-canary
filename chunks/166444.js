var s = n(477900),
    i = n(582128),
    t = n(503698),
    a = n.n(t);
if (221552 == n.j) var r = n(837381);
var u = n(855986);
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
    D = n(713654),
    T = n(501803),
    p = n(922301),
    g = n(16371),
    x = n(598104),
    U = n(95035),
    M = n(162199),
    C = n(897898),
    v = n(71393),
    I = n(290863),
    j = n(741961),
    y = n(287809),
    R = n(977997),
    L = n(253400),
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
let H = L.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function K(e) {
    let { channel: l, size: n = d._3.SIZE_20, className: i } = e;
    return (0, s.jsx)(x.A, { className: i, channel: l, "aria-hidden": !0, size: n });
}
function F(e) {
    let { channel: l, size: n = d._3.SIZE_20, className: i } = e,
        t = (0, u.bG)([y.default], () => y.default.getUser(l?.recipients[0])),
        a = (0, u.bG)(
            [j.A],
            () => !(null == t || null == l || l.isMultiUserDM()) && null != j.A.getTypingUsers(l?.id)[t?.id],
        ),
        {
            status: r,
            isMobile: c,
            isVR: o,
        } = (0, u.cf)([I.A], () =>
            null == t || null == l || l.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(t.id), isMobile: I.A.isMobileOnline(t.id), isVR: I.A.isVROnline(t.id) },
        );
    return (0, s.jsx)(H, {
        className: i,
        size: n,
        src: t?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: c,
        isVR: o,
        isTyping: a,
        "aria-label": t?.username,
        statusTooltip: !0,
    });
}
let z = i.memo(function (e) {
    let {
            className: l,
            containerClassName: n,
            channel: i,
            locked: t,
            hasActiveThreads: r,
            hasUsersInVoiceChannel: c,
            tooltipText: o,
        } = e,
        d = (0, u.bG)([v.A], () => v.A.getGuild(i.guild_id), [i.guild_id]),
        { enableWaveformIcon: E } = (0, m.b)(i.guild_id, "ChannelItemIcon"),
        f = (0, u.bG)([N.A], () => N.A.getAnimationStyle(i.id), [i.id]),
        b = i.type === S.rbe.GUILD_VOICE,
        T = null;
    if (E && b && !t && c)
        T = (0, s.jsx)(_.A, { color: "currentColor", className: a()(P.Kk, l), animationStyle: f, locked: (0, h.A)(i) });
    else {
        let e = (function (e, l, n) {
            switch (e.type) {
                case S.rbe.DM:
                    return function (l) {
                        let { className: n } = l;
                        return (0, s.jsx)(F, { channel: e, className: n });
                    };
                case S.rbe.GROUP_DM:
                    return function (l) {
                        let { className: n } = l;
                        return (0, s.jsx)(K, { channel: e, className: n });
                    };
                default:
                    return (0, D.gU)(e, l, n);
            }
        })(i, d, { locked: t, hasActiveThreads: r });
        if (null == e) return null;
        T = (0, s.jsx)(e, { color: "currentColor", className: a()(P.Kk, l) });
    }
    let p = (0, D.Bq)(i, d, t, r),
        g = `${p} icon`;
    return (0, s.jsx)(A.m, {
        text: o ?? p,
        delay: 500,
        children: (0, s.jsx)("div", { role: "img", "aria-label": g, className: a()(P.zc, n), children: T }),
    });
});
function B(e) {
    let { channel: l, name: n, textVariant: t } = e,
        a = l.isPrivate() && 1 === (l.rawRecipients ?? []).length,
        r = l.rawRecipients?.[0]?.display_name_styles,
        u = i.useMemo(() => (a ? (0, T.mT)(r) : null), [a, r]);
    return null != u
        ? (0, s.jsx)(g.A, {
              userName: n,
              displayNameStyles: u,
              effectDisplayType: p.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: t,
          })
        : (0, s.jsx)(E.E, { variant: t, tag: "span", color: "none", children: n });
}
n.d(
    l,
    {},
    {
        Ay: function (e) {
            let {
                    channel: l,
                    name: n,
                    muted: t,
                    selected: o,
                    connected: d,
                    unread: A,
                    locked: N,
                    hasActiveThreads: m,
                    onClick: h,
                    onMouseDown: _,
                    onMouseUp: D,
                    onContextMenu: T,
                    connectDragPreview: p,
                    className: g,
                    iconClassName: x,
                    iconTooltipText: v,
                    subtitle: I,
                    subtitleColor: j,
                    channel: { type: y },
                    onMouseEnter: L,
                    onMouseLeave: H,
                    "aria-label": K,
                    children: F,
                    guild: Z,
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
                es = (0, u.bG)([R.A], () => Object.values(R.A.getVoiceStatesForChannel(l.id)).length > 0, [l.id]),
                { role: ei, ...et } = (0, r.rm)(l.id),
                ea = i.useRef(null),
                er = i.useRef(null),
                eu = (0, M.A)(l);
            null != eu && G.A.getConfig({ guildId: eu, location: "channel_item" });
            let ec = S.BVt.CHANNEL(eu, l.id),
                eo = (0, b.Ay)(l),
                ed = l.isGuildVocal(),
                eA = null != h || null != D || null != _ || W,
                eE = (0, s.jsx)("div", {
                    className: a()({ [P.ow]: X }),
                    ref: er,
                    children: (0, s.jsxs)(U.A, {
                        role: ed && !d ? "button" : "link",
                        href: ed ? void 0 : ec,
                        target: "_blank",
                        ref: ea,
                        className: P.nf,
                        onClick: () => h?.(l),
                        onAuxClick: (e) => (0, C.A)(e, l),
                        transitionExtras: ee,
                        ...et,
                        "aria-label": K,
                        "aria-current": o ? "page" : void 0,
                        focusProps: { enabled: !1 },
                        children: [
                            (0, s.jsxs)("div", {
                                className: P.Y5,
                                children: [
                                    (0, s.jsx)(z, {
                                        className: x,
                                        tooltipText: v,
                                        channel: l,
                                        guild: Z,
                                        hasUsersInVoiceChannel: es,
                                        hasActiveThreads: m,
                                        locked: N,
                                    }),
                                    (0, s.jsx)(c.A, {
                                        className: a()(P.UU, { [P.NW]: $ }),
                                        shouldShow: !Q,
                                        "aria-hidden": !0,
                                        children: (0, s.jsx)(B, {
                                            textVariant: "body-md/medium",
                                            channel: l,
                                            name: null != n ? n : eo,
                                        }),
                                    }),
                                    i.Children.count(F) > 0
                                        ? (0, s.jsx)("div", { onClick: w, onKeyPress: w, className: P.Y_, children: F })
                                        : null,
                                ],
                            }),
                            null != I
                                ? (0, s.jsx)("div", {
                                      className: P.MA,
                                      children: (0, s.jsx)(E.E, {
                                          color: j ?? "text-muted",
                                          variant: "body-xs/medium",
                                          className: P.VA,
                                          children: I,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                });
            return (0, s.jsx)(f.vN, {
                focusTarget: ea,
                ringTarget: er,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, s.jsxs)("div", {
                    ref: el,
                    className: a()(
                        g,
                        eA ? P.iE : P.IA,
                        (function () {
                            if (o) return a()(V.rM, k.SELECTED);
                            if (d) return a()(V.rM, k.CONNECTED);
                            if (N) return k.LOCKED;
                            if (t) return k.MUTED;
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
                        })(J ?? y),
                    ),
                    onMouseUp: (e) => D?.(e, l),
                    onMouseDown: (e) => _?.(e, l),
                    onContextMenu: (e) => T?.(e, l),
                    onMouseEnter: L,
                    onMouseLeave: H,
                    children: [
                        t || !A ? null : (0, s.jsx)("div", { className: a()(P.gy, en ? P.WS : void 0) }),
                        p?.(eE) ?? eE,
                    ],
                }),
            });
        },
        IC: K,
        Pk: F,
        dG: w,
        gm: z,
    },
);

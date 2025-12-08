n.d(t, { B: () => S }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(990547),
    u = n(399606),
    d = n(481060),
    p = n(630810),
    h = n(100527),
    f = n(906732),
    m = n(213609),
    g = n(518950),
    b = n(271383),
    C = n(430824),
    y = n(51144),
    v = n(771027),
    _ = n(981631),
    O = n(388032),
    x = n(764194),
    E = n(254477);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function S(e) {
    let { channel: t, inviteKey: l, onHoverOrFocus: o, setPopoutRef: u, closePopout: p } = e,
        g = r.useRef(null),
        b = (0, v.Tu)(g),
        y = (0, v.j1)({ channel: t }),
        { analyticsLocations: S } = (0, f.ZP)(h.Z.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, m.Z)({
        name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: c.ImpressionTypes.POPOUT,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: S,
        },
    }),
        r.useEffect(() => {
            null == u || u(g.current);
        }, [u]),
        r.useEffect(() => {
            null == o || o(b.isHoveringOrFocusing);
        }, [o, b]);
    let I = r.useCallback(() => {
        let e = C.Z.getGuild(t.guild_id);
        s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, d.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(
                    n.bind(n, 560114),
                );
                return (n) => {
                    var l, a;
                    return (0, i.jsx)(
                        r,
                        ((l = j({}, n)),
                        (a = a =
                            {
                                guild: e,
                                channel: t,
                                source: _.t4x.VOICE_INVITE_SUGGESTIONS,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        l),
                    );
                };
            }),
            p();
    }, [t, p]);
    return (0, i.jsx)("div", {
        ref: g,
        "aria-label": O.intl.string(O.t.o53CL2),
        className: a()(E.popover, x.popover),
        children: (0, i.jsx)("div", {
            className: x.inner,
            children: (0, i.jsxs)("ul", {
                className: x.list,
                children: [
                    y.map((e) =>
                        (0, i.jsx)(
                            P,
                            {
                                channel: t,
                                user: e,
                                inviteKey: l,
                            },
                            e.id,
                        ),
                    ),
                    (0, i.jsxs)(d.P3F, {
                        tag: "li",
                        onClick: I,
                        className: a()(x.row, x.clickable),
                        children: [
                            (0, i.jsx)("div", {
                                className: x.leading,
                                children: (0, i.jsx)(d.BFJ, {
                                    size: "xs",
                                    className: x.icon,
                                }),
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: x.name,
                                lineClamp: 1,
                                children: O.intl.string(O.t.NOP3Ry),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function P(e) {
    let { channel: t, user: n, inviteKey: l } = e,
        o = r.useRef(null),
        s = (0, u.e7)([b.ZP], () => b.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]),
        { isHoveringOrFocusing: c } = (0, v.Tu)(o),
        [h, f] = r.useState(null),
        m = "success" === h || "sending" === h || null == l,
        C = r.useCallback(() => {
            m ||
                (null != l &&
                    (f("sending"),
                    p.Z.enqueue(
                        {
                            type: p.m.USER,
                            user: n,
                            inviteKey: l,
                            location: "VoiceInviteSuggestionsPopover",
                            inviteAnalyticsMetadata: { source: _.t4x.VOICE_INVITE_SUGGESTIONS },
                        },
                        (e) => {
                            f(e ? "success" : null);
                        },
                    )));
        }, [m, l, n]),
        {
            avatarDecorationSrc: E,
            avatarSrc: S,
            eventHandlers: P,
        } = (0, g.Z)({
            userId: n.id,
            size: d.EFr.SIZE_24,
            animateOnHover: !c,
            guildId: t.guild_id,
        });
    if (null == s) return null;
    let I = y.ZP.getName(n),
        Z = O.intl.string(O.t.jYnGPG);
    return (0, i.jsxs)(d.P3F, {
        innerRef: o,
        tag: "li",
        className: a()(x.row, { [x.clickable]: !m }),
        "aria-disabled": m,
        onClick: C,
        "aria-label": Z,
        children: [
            (0, i.jsx)(
                d.qEK,
                j(
                    {
                        className: x.avatar,
                        "aria-label": I,
                        size: d.EFr.SIZE_24,
                        src: S,
                        avatarDecoration: E,
                    },
                    P,
                ),
            ),
            (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                className: x.name,
                lineClamp: 1,
                children: I,
            }),
            "sending" === h &&
                (0, i.jsx)("div", {
                    className: x.dots,
                    children: (0, i.jsx)(d.bbz, {
                        dotRadius: 2,
                        themed: !0,
                    }),
                }),
            "success" === h &&
                (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: x.status,
                    lineClamp: 1,
                    children: O.intl.string(O.t["8BEiNn"]),
                }),
            null == h &&
                (0, i.jsx)("div", {
                    className: x.userIconContainer,
                    children: (0, i.jsx)(d.oLu, {
                        color: "currentColor",
                        size: "xs",
                        className: x.icon,
                    }),
                }),
        ],
    });
}

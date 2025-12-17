n.d(t, { B: () => T }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(990547),
    u = n(399606),
    d = n(481060),
    p = n(447543),
    f = n(630810),
    h = n(100527),
    m = n(906732),
    g = n(213609),
    b = n(518950),
    C = n(271383),
    y = n(430824),
    v = n(341165),
    x = n(496675),
    O = n(51144),
    E = n(771027),
    j = n(981631),
    S = n(388032),
    _ = n(303092),
    P = n(770966);
function I(e) {
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
let Z = "VoiceInviteSuggestionsPopover";
function T(e) {
    let { channel: t, onHoverOrFocus: l, setPopoutRef: o, closePopout: u } = e,
        p = r.useRef(null),
        f = (0, E.Tu)(p),
        b = (0, E.j1)({ channel: t }),
        { analyticsLocations: C } = (0, m.ZP)(h.Z.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, g.Z)({
        name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: c.ImpressionTypes.POPOUT,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: C,
        },
    }),
        r.useEffect(() => {
            null == o || o(p.current);
        }, [o]),
        r.useEffect(() => {
            null == l || l(f.isHoveringOrFocusing);
        }, [l, f]);
    let v = r.useCallback(() => {
        let e = y.Z.getGuild(t.guild_id);
        s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, d.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(
                    n.bind(n, 560114),
                );
                return (n) => {
                    var l, a;
                    return (0, i.jsx)(
                        r,
                        ((l = I({}, n)),
                        (a = a =
                            {
                                guild: e,
                                channel: t,
                                source: j.t4x.VOICE_INVITE_SUGGESTIONS,
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
            u();
    }, [t, u]);
    return (0, i.jsx)("div", {
        ref: p,
        "aria-label": S.intl.string(S.t.o53CL2),
        className: a()(P.popover, _.popover),
        children: (0, i.jsx)("div", {
            className: _.inner,
            children: (0, i.jsxs)("ul", {
                className: _.list,
                children: [
                    b.map((e) =>
                        (0, i.jsx)(
                            N,
                            {
                                channel: t,
                                user: e,
                            },
                            e.id,
                        ),
                    ),
                    (0, i.jsxs)(d.P3F, {
                        tag: "li",
                        onClick: v,
                        className: a()(_.row, _.clickable),
                        children: [
                            (0, i.jsx)("div", {
                                className: _.leading,
                                children: (0, i.jsx)(d.BFJ, {
                                    size: "xs",
                                    className: _.icon,
                                }),
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: _.name,
                                lineClamp: 1,
                                children: S.intl.string(S.t.NOP3Ry),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function N(e) {
    let { channel: t, user: n } = e,
        l = r.useRef(null),
        o = (0, u.e7)([C.ZP], () => C.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]),
        { isHoveringOrFocusing: s } = (0, E.Tu)(l),
        [c, h] = r.useState(null),
        m = "success" === c || "sending" === c,
        g = r.useCallback(async () => {
            if (m) return;
            async function e() {
                var e, n, i;
                let r = null != (e = v.Z.getInvite(t.id, {})) ? e : null;
                if (null == r) {
                    if (!x.Z.can(j.Plq.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await p.ZP.createInvite(t.id, {}, Z);
                    } catch (e) {
                        return null;
                    }
                    r = null != (n = v.Z.getInvite(t.id, {})) ? n : null;
                }
                return null != (i = null == r ? void 0 : r.code) ? i : null;
            }
            h("sending");
            let i = await e();
            if (null == i) return void h(null);
            f.Z.enqueue(
                {
                    type: f.m.USER,
                    user: n,
                    inviteKey: i,
                    location: Z,
                    inviteAnalyticsMetadata: { source: j.t4x.VOICE_INVITE_SUGGESTIONS },
                },
                (e) => {
                    h(e ? "success" : null);
                },
            );
        }, [m, n, t]),
        {
            avatarDecorationSrc: y,
            avatarSrc: P,
            eventHandlers: T,
        } = (0, b.Z)({
            userId: n.id,
            size: d.EFr.SIZE_24,
            animateOnHover: !s,
            guildId: t.guild_id,
        });
    if (null == o) return null;
    let N = O.ZP.getName(n),
        A = S.intl.string(S.t.jYnGPG);
    return (0, i.jsxs)(d.P3F, {
        innerRef: l,
        tag: "li",
        className: a()(_.row, { [_.clickable]: !m }),
        "aria-disabled": m,
        onClick: g,
        "aria-label": A,
        children: [
            (0, i.jsx)(
                d.qEK,
                I(
                    {
                        className: _.avatar,
                        "aria-label": N,
                        size: d.EFr.SIZE_24,
                        src: P,
                        avatarDecoration: y,
                    },
                    T,
                ),
            ),
            (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                className: _.name,
                lineClamp: 1,
                children: N,
            }),
            "sending" === c &&
                (0, i.jsx)("div", {
                    className: _.dots,
                    children: (0, i.jsx)(d.bbz, {
                        dotRadius: 2,
                        themed: !0,
                    }),
                }),
            "success" === c &&
                (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: _.status,
                    lineClamp: 1,
                    children: S.intl.string(S.t["8BEiNn"]),
                }),
            null == c &&
                (0, i.jsx)("div", {
                    className: _.userIconContainer,
                    children: (0, i.jsx)(d.oLu, {
                        color: "currentColor",
                        size: "xs",
                        className: _.icon,
                    }),
                }),
        ],
    });
}

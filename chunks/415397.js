n.d(t, { B: () => x }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(399606),
    u = n(481060),
    d = n(630810),
    p = n(518950),
    h = n(271383),
    f = n(430824),
    m = n(51144),
    g = n(771027),
    b = n(981631),
    y = n(388032),
    C = n(764194),
    v = n(254477);
function _(e) {
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
function x(e) {
    let { channel: t, inviteKey: l, onHoverOrFocus: o, setPopoutRef: c, closePopout: d } = e,
        p = r.useRef(null),
        h = (0, g.Tu)(p),
        m = (0, g.j1)({ channel: t });
    r.useEffect(() => {
        null == c || c(p.current);
    }, [c]),
        r.useEffect(() => {
            null == o || o(h.isHoveringOrFocusing);
        }, [o, h]);
    let x = r.useCallback(() => {
        let e = f.Z.getGuild(t.guild_id);
        s()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, u.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(
                    n.bind(n, 560114),
                );
                return (n) => {
                    var l, a;
                    return (0, i.jsx)(
                        r,
                        ((l = _({}, n)),
                        (a = a =
                            {
                                guild: e,
                                channel: t,
                                source: b.t4x.VOICE_INVITE_SUGGESTIONS,
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
            d();
    }, [t, d]);
    return (0, i.jsx)("div", {
        ref: p,
        "aria-label": y.intl.string(y.t.o53CL2),
        className: a()(v.popover, C.popover),
        children: (0, i.jsx)("div", {
            className: C.inner,
            children: (0, i.jsxs)("ul", {
                className: C.list,
                children: [
                    m.map((e) =>
                        (0, i.jsx)(
                            j,
                            {
                                channel: t,
                                user: e,
                                inviteKey: l,
                            },
                            e.id,
                        ),
                    ),
                    (0, i.jsxs)(u.P3F, {
                        tag: "li",
                        onClick: x,
                        className: a()(C.row, C.clickable),
                        children: [
                            (0, i.jsx)("div", {
                                className: C.leading,
                                children: (0, i.jsx)(u.oLu, {
                                    size: "refresh_sm",
                                    className: C.icon,
                                }),
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-md/medium",
                                className: C.name,
                                lineClamp: 1,
                                children: y.intl.string(y.t.NOP3Ry),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function j(e) {
    let { channel: t, user: n, inviteKey: l } = e,
        o = r.useRef(null),
        s = (0, c.e7)([h.ZP], () => h.ZP.getMember(t.guild_id, n.id), [t.guild_id, n.id]),
        { isHoveringOrFocusing: f } = (0, g.Tu)(o),
        [b, v] = r.useState(null),
        x = "success" === b || "sending" === b || null == l,
        j = r.useCallback(() => {
            x ||
                (null != l &&
                    (v("sending"),
                    d.Z.enqueue(
                        {
                            type: d.m.USER,
                            user: n,
                            inviteKey: l,
                            location: "VoiceInviteSuggestionsPopover",
                            inviteAnalyticsMetadata: {},
                        },
                        (e) => {
                            v(e ? "success" : null);
                        },
                    )));
        }, [x, l, n]),
        {
            avatarDecorationSrc: O,
            avatarSrc: E,
            eventHandlers: S,
        } = (0, p.Z)({
            userId: n.id,
            size: u.EFr.SIZE_24,
            animateOnHover: !f,
            guildId: t.guild_id,
        });
    if (null == s) return null;
    let P = m.ZP.getName(n);
    return (0, i.jsxs)(u.P3F, {
        innerRef: o,
        tag: "li",
        "aria-label": y.intl.string(y.t.jYnGPG),
        className: a()(C.row, { [C.clickable]: !x }),
        onClick: j,
        "aria-disabled": x,
        children: [
            (0, i.jsx)(
                u.qEK,
                _(
                    {
                        className: C.avatar,
                        "aria-label": P,
                        size: u.EFr.SIZE_24,
                        src: E,
                        avatarDecoration: O,
                    },
                    S,
                ),
            ),
            (0, i.jsx)(u.Text, {
                variant: "text-md/medium",
                className: C.name,
                lineClamp: 1,
                children: P,
            }),
            "sending" === b &&
                (0, i.jsx)("div", {
                    className: C.dots,
                    children: (0, i.jsx)(u.bbz, {
                        dotRadius: 2,
                        themed: !0,
                    }),
                }),
            "success" === b &&
                (0, i.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: C.status,
                    lineClamp: 1,
                    children: y.intl.string(y.t["8BEiNn"]),
                }),
        ],
    });
}

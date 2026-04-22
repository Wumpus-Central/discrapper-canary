n.d(t, { O: () => F, d: () => W });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(417597),
    o = n(205693),
    d = n(990078),
    c = n(939249),
    u = n(358618),
    h = n(983851),
    m = n(834730),
    p = n(622631),
    g = n(365199),
    f = n(890856),
    _ = n(827343),
    x = n(442433),
    A = n(391973),
    E = n(401843),
    S = n(520698),
    I = n(164617),
    v = n(402216),
    b = n(607407),
    C = n(534400),
    T = n(267102),
    j = n(401901),
    y = n(203355),
    w = n(110234),
    N = n(616356),
    R = n(961350),
    M = n(430452),
    O = n(287809),
    k = n(562153),
    D = n(810412),
    z = n(761661),
    P = n(652215),
    L = n(985018),
    V = n(614715);
function G(e) {
    let { participant: t } = e,
        n = t.user.id,
        a = (0, l.bG)([M.Ay], () => {
            let e = (0, S.A)(t.type);
            return M.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        s = (0, l.bG)([R.default], () => R.default.getId()),
        { hasVideo: m } = (0, w.A)(t, s),
        p = a && m,
        g = r.useCallback(() => {
            _.A.toggleLocalMute(n, o.x.STREAM);
        }, [n]);
    return (0, i.jsx)(d.m, {
        text: p ? L.intl.string(L.t.YqAjXy) : L.intl.string(L.t.w4m945),
        children: (0, i.jsx)(c.D, {
            className: V.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, D.YX)(P.uss.GO_LIVE, {
                        type: D.Z5.AUDIO,
                        value: p ? D.IP.ENABLED : D.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    g();
            },
            children: p
                ? (0, i.jsx)(u._, { size: "sm", color: "currentColor" })
                : (0, i.jsx)(h.H, { size: "sm", color: "currentColor" }),
        }),
    });
}
function U(e, t) {
    return (r) => {
        (0, D.YX)(P.uss.GO_LIVE, { type: D.Z5.GO_LIVE, value: D.IP.SETTINGS_OPENED, userId: e.user.id }),
            r.stopPropagation(),
            (0, x.L3)(r, async () => {
                let { default: r } = await n.e("61361").then(n.bind(n, 663912));
                return (n) => (0, i.jsx)(r, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function H(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        a = (0, T.Us)(),
        o = n.user,
        u = (0, l.bG)([O.default], () => O.default.getUser(o.id) ?? o, [o]),
        h = t ? L.intl.string(L.t.tLxK4l) : L.intl.string(L.t.E5RDnK);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: s()(V.MI, { [V.te]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: V.TP,
                    children: (0, i.jsx)(d.m, {
                        text: h,
                        children: (0, i.jsxs)(c.D, {
                            className: V.kx,
                            onClick: () => {
                                (0, E.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    r(),
                                    (0, D.YX)(P.uss.GO_LIVE, {
                                        type: D.Z5.GO_LIVE,
                                        value: D.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, i.jsx)(m.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: L.intl.string(L.t.I6JG46),
                                }),
                                (0, i.jsx)(p.v, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: V.ne,
                children: [
                    (0, i.jsx)("div", {
                        className: V.fL,
                        children: (0, i.jsxs)("div", {
                            className: V.K8,
                            children: [
                                (0, i.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: V.yb,
                                    children: k.Ay.getName(n.stream.guildId, n.stream.channelId, o),
                                }),
                                (0, i.jsx)(C.Ay, {
                                    primaryGuild: u.primaryGuild,
                                    userId: u.id,
                                    containerClassName: V.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, D.YX)(P.uss.GO_LIVE, {
                                            type: D.Z5.GO_LIVE,
                                            value: D.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: V.FO,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(G, { participant: n }),
                                    (0, i.jsx)(d.m, {
                                        text: L.intl.string(L.t["3D5yo/"]),
                                        children: (0, i.jsx)(c.D, {
                                            className: V.IF,
                                            onClick: U(n, a),
                                            children: (0, i.jsx)(g.j, { size: "sm", color: "currentColor" }),
                                        }),
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
        ],
    });
}
let F = new Set([P.XYD.ENDED, P.XYD.FAILED, P.XYD.PAUSED]),
    W = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: a, pinned: s } = e,
            o = (0, l.bG)([N.A], () => N.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            d = (0, T.Us)(),
            c = null != o && F.has(o.state),
            u = null != o,
            h = (0, z.dh)(t.stream),
            m = (0, z.XG)(t.stream);
        return (!u && r) || c
            ? null
            : (0, i.jsxs)("div", {
                  className: V.Vs,
                  children: [
                      u && !r && (0, i.jsx)(v.Ay, { size: v.Ay.Sizes.SMALL, className: V.Ok }),
                      u
                          ? (0, i.jsx)("div", {
                                className: V.X$,
                                children: (0, i.jsx)(f.s, {
                                    "aria-label": L.intl.formatToPlainString(L.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: U(t, d),
                                    className: V.X$,
                                    style: { transform: `scale(${h})` },
                                    children: (0, i.jsx)(y.A, {
                                        participant: t,
                                        width: n,
                                        fit: m ?? j.$.CONTAIN,
                                        popoutType: I.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: r ? V.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, i.jsx)("div", {
                                className: V.Rh,
                                children: (0, i.jsx)(b.A, { noText: !0, className: V.HL, stream: t.stream }),
                            }),
                      r
                          ? null
                          : (0, i.jsx)(H, {
                                participant: t,
                                hasActiveStream: u,
                                onEnablePin: () => {
                                    s || (0, A.v0)(a);
                                },
                            }),
                  ],
              });
    });

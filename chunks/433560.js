n.d(t, { O: () => U, d: () => G });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(417597),
    o = n(205693),
    d = n(435371),
    u = n(397927),
    c = n(827343),
    h = n(442433),
    A = n(391973),
    m = n(401843),
    p = n(520698),
    g = n(164617),
    f = n(402216),
    _ = n(652896),
    E = n(607407),
    x = n(534400),
    S = n(267102),
    I = n(401901),
    T = n(203355),
    y = n(110234),
    C = n(616356),
    v = n(961350),
    N = n(430452),
    O = n(287809),
    b = n(562153),
    j = n(810412),
    w = n(589051),
    L = n(761661),
    R = n(652215),
    D = n(985018),
    M = n(444638);
function k(e) {
    let { participant: t } = e;
    return (0, i.jsx)(d.m_, {
        text: D.intl.string(D.t["4EGMWL"]),
        children: (0, i.jsx)(u.DUT, {
            className: M.IF,
            onClick: (e) => {
                (0, m.vN)((0, _._z)(t.stream), !1),
                    e.stopPropagation(),
                    (0, j.YX)(R.uss.GO_LIVE, { type: j.Z5.SCREEN_SHARE, value: j.IP.DISABLED, userId: t.user.id });
            },
            children: (0, i.jsx)(u.GT3, { size: "sm", color: u.LU0.colors.WHITE }),
        }),
    });
}
function z(e) {
    let { participant: t } = e,
        n = t.user.id,
        a = (0, r.bG)([N.Ay], () => {
            let e = (0, p.A)(t.type);
            return N.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        s = (0, r.bG)([v.default], () => v.default.getId()),
        { hasVideo: h } = (0, y.A)(t, s),
        A = a && h,
        m = l.useCallback(() => {
            c.A.toggleLocalMute(n, o.x.STREAM);
        }, [n]);
    return (0, i.jsx)(d.m_, {
        text: A ? D.intl.string(D.t.YqAjXy) : D.intl.string(D.t.w4m945),
        children: (0, i.jsx)(u.DUT, {
            className: M.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, j.YX)(R.uss.GO_LIVE, {
                        type: j.Z5.AUDIO,
                        value: A ? j.IP.ENABLED : j.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    m();
            },
            children: A
                ? (0, i.jsx)(u._RO, { size: "sm", color: "currentColor" })
                : (0, i.jsx)(u.HKD, { size: "sm", color: "currentColor" }),
        }),
    });
}
function V(e, t) {
    return (l) => {
        (0, j.YX)(R.uss.GO_LIVE, { type: j.Z5.GO_LIVE, value: j.IP.SETTINGS_OPENED, userId: e.user.id }),
            l.stopPropagation(),
            (0, h.L3)(l, async () => {
                let { default: l } = await n.e("61361").then(n.bind(n, 663912));
                return (n) => (0, i.jsx)(l, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function P(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: l } = e,
        a = (0, S.Us)(),
        o = n.user,
        c = (0, r.bG)([O.default], () => O.default.getUser(o.id) ?? o, [o]),
        h = t ? D.intl.string(D.t.tLxK4l) : D.intl.string(D.t.E5RDnK),
        { enabled: A } = (0, w.QC)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: s()(M.MI, { [M.te]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: M.TP,
                    children: (0, i.jsx)(d.m_, {
                        text: h,
                        children: (0, i.jsxs)(u.DUT, {
                            className: M.kx,
                            onClick: () => {
                                (0, m.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    l(),
                                    (0, j.YX)(R.uss.GO_LIVE, {
                                        type: j.Z5.GO_LIVE,
                                        value: j.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: D.intl.string(D.t.I6JG46),
                                }),
                                (0, i.jsx)(u.vAm, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: M.ne,
                children: [
                    (0, i.jsx)("div", {
                        className: M.fL,
                        children: (0, i.jsxs)("div", {
                            className: M.K8,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: M.yb,
                                    children: b.Ay.getName(n.stream.guildId, n.stream.channelId, o),
                                }),
                                (0, i.jsx)(x.Ay, {
                                    primaryGuild: c.primaryGuild,
                                    userId: c.id,
                                    containerClassName: M.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, j.YX)(R.uss.GO_LIVE, {
                                            type: j.Z5.GO_LIVE,
                                            value: j.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: M.FO,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    A && (0, i.jsx)(k, { participant: n }),
                                    (0, i.jsx)(z, { participant: n }),
                                    (0, i.jsx)(d.m_, {
                                        text: D.intl.string(D.t["3D5yo/"]),
                                        children: (0, i.jsx)(u.DUT, {
                                            className: M.IF,
                                            onClick: V(n, a),
                                            children: (0, i.jsx)(u.jNK, { size: "sm", color: "currentColor" }),
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
let U = new Set([R.XYD.ENDED, R.XYD.FAILED, R.XYD.PAUSED]),
    G = l.memo(function (e) {
        let { participant: t, width: n, locked: l, widgetId: a, pinned: s } = e,
            o = (0, r.bG)([C.A], () => C.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            d = (0, S.Us)(),
            c = null != o && U.has(o.state),
            h = null != o,
            m = (0, L.dh)(t.stream),
            p = (0, L.XG)(t.stream);
        return (!h && l) || c
            ? null
            : (0, i.jsxs)("div", {
                  className: M.Vs,
                  children: [
                      h && !l && (0, i.jsx)(f.Ay, { size: f.Ay.Sizes.SMALL, className: M.Ok }),
                      h
                          ? (0, i.jsx)("div", {
                                className: M.X$,
                                children: (0, i.jsx)(u.sqX, {
                                    "aria-label": D.intl.formatToPlainString(D.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: V(t, d),
                                    className: M.X$,
                                    style: { transform: `scale(${m})` },
                                    children: (0, i.jsx)(T.A, {
                                        participant: t,
                                        width: n,
                                        fit: p ?? I.$.CONTAIN,
                                        popoutType: g.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: l ? M.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, i.jsx)("div", {
                                className: M.Rh,
                                children: (0, i.jsx)(E.A, { noText: !0, className: M.HL, stream: t.stream }),
                            }),
                      l
                          ? null
                          : (0, i.jsx)(P, {
                                participant: t,
                                hasActiveStream: h,
                                onEnablePin: () => {
                                    s || (0, A.v0)(a);
                                },
                            }),
                  ],
              });
    });

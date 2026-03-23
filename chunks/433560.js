n.d(t, { O: () => k, d: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(205693),
    d = n(435371),
    u = n(397927),
    c = n(827343),
    h = n(442433),
    g = n(391973),
    m = n(401843),
    p = n(520698),
    A = n(164617),
    x = n(402216),
    E = n(607407),
    f = n(534400),
    S = n(267102),
    I = n(401901),
    T = n(203355),
    v = n(110234),
    C = n(616356),
    j = n(961350),
    y = n(430452),
    w = n(287809),
    O = n(562153),
    _ = n(810412),
    N = n(761661),
    b = n(652215),
    R = n(985018),
    M = n(444638);
function L(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, a.bG)([y.Ay], () => {
            let e = (0, p.A)(t.type);
            return y.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        r = (0, a.bG)([j.default], () => j.default.getId()),
        { hasVideo: h } = (0, v.A)(t, r),
        g = l && h,
        m = s.useCallback(() => {
            c.A.toggleLocalMute(n, o.x.STREAM);
        }, [n]);
    return (0, i.jsx)(d.m_, {
        text: g ? R.intl.string(R.t.YqAjXy) : R.intl.string(R.t.w4m945),
        children: (0, i.jsx)(u.DUT, {
            className: M.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, _.YX)(b.uss.GO_LIVE, {
                        type: _.Z5.AUDIO,
                        value: g ? _.IP.ENABLED : _.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    m();
            },
            children: g
                ? (0, i.jsx)(u._RO, { size: "sm", color: "currentColor" })
                : (0, i.jsx)(u.HKD, { size: "sm", color: "currentColor" }),
        }),
    });
}
function z(e, t) {
    return (s) => {
        (0, _.YX)(b.uss.GO_LIVE, { type: _.Z5.GO_LIVE, value: _.IP.SETTINGS_OPENED, userId: e.user.id }),
            s.stopPropagation(),
            (0, h.L3)(s, async () => {
                let { default: s } = await n.e("61361").then(n.bind(n, 663912));
                return (n) => (0, i.jsx)(s, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function D(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: s } = e,
        l = (0, S.Us)(),
        o = n.user,
        c = (0, a.bG)([w.default], () => w.default.getUser(o.id) ?? o, [o]),
        h = t ? R.intl.string(R.t.tLxK4l) : R.intl.string(R.t.E5RDnK);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: r()(M.MI, { [M.te]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: M.TP,
                    children: (0, i.jsx)(d.m_, {
                        text: h,
                        children: (0, i.jsxs)(u.DUT, {
                            className: M.kx,
                            onClick: () => {
                                (0, m.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    s(),
                                    (0, _.YX)(b.uss.GO_LIVE, {
                                        type: _.Z5.GO_LIVE,
                                        value: _.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: R.intl.string(R.t.I6JG46),
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
                                    children: O.Ay.getName(n.stream.guildId, n.stream.channelId, o),
                                }),
                                (0, i.jsx)(f.Ay, {
                                    primaryGuild: c.primaryGuild,
                                    userId: c.id,
                                    containerClassName: M.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, _.YX)(b.uss.GO_LIVE, {
                                            type: _.Z5.GO_LIVE,
                                            value: _.IP.GUILD_PROFILE_OPENED,
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
                                    (0, i.jsx)(L, { participant: n }),
                                    (0, i.jsx)(d.m_, {
                                        text: R.intl.string(R.t["3D5yo/"]),
                                        children: (0, i.jsx)(u.DUT, {
                                            className: M.IF,
                                            onClick: z(n, l),
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
let k = new Set([b.XYD.ENDED, b.XYD.FAILED, b.XYD.PAUSED]),
    P = s.memo(function (e) {
        let { participant: t, width: n, locked: s, widgetId: l, pinned: r } = e,
            o = (0, a.bG)([C.A], () => C.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            d = (0, S.Us)(),
            c = null != o && k.has(o.state),
            h = null != o,
            m = (0, N.dh)(t.stream),
            p = (0, N.XG)(t.stream);
        return (!h && s) || c
            ? null
            : (0, i.jsxs)("div", {
                  className: M.Vs,
                  children: [
                      h && !s && (0, i.jsx)(x.Ay, { size: x.Ay.Sizes.SMALL, className: M.Ok }),
                      h
                          ? (0, i.jsx)("div", {
                                className: M.X$,
                                children: (0, i.jsx)(u.sqX, {
                                    "aria-label": R.intl.formatToPlainString(R.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: z(t, d),
                                    className: M.X$,
                                    style: { transform: `scale(${m})` },
                                    children: (0, i.jsx)(T.A, {
                                        participant: t,
                                        width: n,
                                        fit: p ?? I.$.CONTAIN,
                                        popoutType: A.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: s ? M.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, i.jsx)("div", {
                                className: M.Rh,
                                children: (0, i.jsx)(E.A, { noText: !0, className: M.HL, stream: t.stream }),
                            }),
                      s
                          ? null
                          : (0, i.jsx)(D, {
                                participant: t,
                                hasActiveStream: h,
                                onEnablePin: () => {
                                    r || (0, g.v0)(l);
                                },
                            }),
                  ],
              });
    });

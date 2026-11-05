l.d(n, { c: () => J, A: () => H });
var s,
    i = l(477900),
    c = l(582128),
    a = l(503698),
    r = l.n(a),
    t = l(855986),
    o = l(866665),
    d = l(939249),
    u = l(834730),
    h = l(116085),
    m = l(825484),
    x = l(821609),
    N = l(890856),
    j = l(148719),
    C = l(47167),
    k = l(713654),
    v = l(931991),
    g = l(660110),
    p = l(576705),
    A = l(435328),
    E = l(530209),
    b = l(974930),
    y = l(428978),
    I = l(850183),
    M = l(557582),
    f = l(893110),
    w = l(97808),
    R = l(778712),
    T = l(831544),
    B = l(792996),
    U = l(639477);
function G(e) {
    let { guild: n, speakers: l, speakerCount: s, className: c } = e,
        a = l.slice(0, 5),
        t = a.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: U.dq,
                    children: [
                        (0, i.jsx)(w.eu, {
                            src: e?.user?.getAvatarURL(n.id, 20),
                            size: R._3.SIZE_20,
                            className: U.my,
                            "aria-label": `${e?.userNick}-avatar`,
                        }),
                        (0, i.jsx)("div", {
                            className: U.CU,
                            children: (0, i.jsx)(u.E, {
                                color: "text-default",
                                variant: "body-sm/normal",
                                className: U.br,
                                children: e?.userNick,
                            }),
                        }),
                    ],
                },
                e?.user?.id,
            ),
        ),
        o = s - a.length;
    return (0, i.jsxs)("div", {
        className: r()(U.Vg, c),
        children: [
            t,
            o > 0 &&
                (0, i.jsxs)("div", {
                    className: U.dq,
                    children: [
                        (0, i.jsx)("div", {
                            className: U.Ko,
                            children: (0, i.jsx)(T.MicrophoneIcon, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, i.jsx)(u.E, {
                            color: "text-default",
                            variant: "body-sm/normal",
                            className: U.br,
                            children: B.intl.format(B.t["185ggO"], { count: o }),
                        }),
                    ],
                }),
        ],
    });
}
var L = l(988794),
    _ = l(652215),
    D = l(572846),
    J = (((s = {})[(s.BANNER = 0)] = "BANNER"), (s[(s.THUMBNAIL = 1)] = "THUMBNAIL"), s);
function S(e) {
    let { channel: n, onClick: l } = e,
        s = (0, C.Ay)(n),
        { canManageAllEvents: a } = (0, v.nr)(n),
        h = (0, t.bG)([p.A], () => !n.isGuildVocal() || p.A.can(_.xBc.CONNECT, n), [n]),
        m = c.useMemo(() => (0, j.A)(n), [n]),
        x = c.useMemo(() => {
            let e = (0, k.gU)(n),
                l = (0, k.Bq)(n);
            return null != e
                ? c.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: D.Kk,
                      "aria-label": l ?? void 0,
                      role: null != l ? "img" : void 0,
                  })
                : null;
        }, [n]),
        N = !h && null != l,
        g = a && m && h && null != l;
    return (0, i.jsx)(o.m, {
        text: B.intl.string(B.t.nHjY9C),
        shouldShow: N,
        ariaHidden: !N,
        children: (0, i.jsxs)(d.D, {
            className: r()(D.mG, D.nU, { [D.MN]: h && null != l, [D.Pm]: !h && null != l }),
            onClick: l,
            children: [
                (0, i.jsx)(o.m, { text: B.intl.string(B.t["48WXaW"]), shouldShow: g, ariaHidden: !g, children: x }),
                (0, i.jsx)(u.E, { variant: "body-sm/normal", color: "none", className: D.h7, children: s }),
            ],
        }),
    });
}
function q(e) {
    let { channel: n, onJoinClick: l, handleLocationClick: s, location: c, isExternal: a } = e;
    return null != n
        ? (0, i.jsx)(S, { channel: n, onClick: l })
        : (0, i.jsxs)(d.D, {
              className: D.mG,
              onClick: s,
              children: [
                  (0, i.jsx)(h.LocationIcon, {
                      "aria-hidden": !0,
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: r()(D.nU, D.Kk),
                  }),
                  (0, i.jsx)(u.E, { className: a ? D.dC : D.h7, variant: "body-sm/normal", children: (0, A.y)(c, !0) }),
              ],
          });
}
function z(e) {
    let {
            channel: n,
            entityType: l,
            isJoined: s,
            isActive: c,
            isUserLurking: a,
            rsvped: r,
            canInvite: t,
            onContextMenu: o,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: h,
            onInviteClick: N,
            onEndClick: j,
            onJoinGuildClick: C,
        } = e,
        k = (0, E.D)(n, l),
        v = (0, y.Zq)({
            entityType: l,
            isJoined: s,
            isActive: c,
            isUserLurking: a,
            rsvped: r,
            canInvite: t,
            isChannelPublic: k,
            channel: n,
            onJoinClick: d,
            onRsvpClick: u,
            onStartClick: h,
            onInviteClick: N,
            onEndClick: j,
            onJoinGuildClick: C,
        });
    return (0, i.jsxs)(m.e, {
        fullWidth: !1,
        size: "sm",
        children: [null != o ? (0, i.jsx)(y.jD, { onClick: o }) : null, v?.map((e, n) => (0, i.jsx)(x.$, { ...e }, n))],
    });
}
function H(e) {
    let {
            className: n,
            guild: l,
            channel: s,
            creator: c,
            name: a,
            entityType: t,
            description: o,
            imageLocation: d = 0,
            imageSource: u,
            isActive: h,
            isUserLurking: m,
            isJoined: x = !1,
            isMember: j = !1,
            speakers: C,
            speakerCount: k,
            rsvped: v,
            canInvite: p,
            location: A,
            truncate: E,
            onContextMenu: y,
            onJoinClick: w,
            onJoinGuildClick: R,
            onRsvpClick: T,
            onStartClick: B,
            onInviteClick: U,
            onEndClick: _,
            onClick: J,
            isNew: S,
            guildEvent: H,
            eventPreview: K,
            recurrenceRule: P,
            recurrenceId: O,
            hideAgeVerificationNotice: V,
        } = e,
        W = t === L.Ps.EXTERNAL,
        X = W ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != P && null != event) {
        let e = (0, b.X7)(P);
        F = (0, b.er)(4, e, new Date(H.scheduled_start_time));
    }
    let Y = F.length > 0;
    return (0, i.jsxs)(N.s, {
        "aria-label": a,
        onClick: () => J?.(O),
        onContextMenu: y,
        className: r()(D.Nr, { [D.oR]: x, [D.hT]: m }, n),
        children: [
            (0, i.jsxs)("div", {
                className: r()(D.Ms, { [D.AD]: Y }),
                children: [
                    0 === d && (0, i.jsx)(I.A, { source: u }),
                    (0, i.jsx)(M.Ay, {
                        creator: c,
                        name: a,
                        description: o,
                        imageSource: 1 === d ? u : null,
                        truncate: E,
                        guildId: l?.id,
                        isNew: S,
                        guildEvent: H,
                        eventPreview: K,
                        recurrenceId: O,
                    }),
                    h &&
                        null != l &&
                        null != C &&
                        k > 0 &&
                        (0, i.jsx)(G, { guild: l, speakers: C, speakerCount: k, className: D.YK }),
                    (0, i.jsx)("hr", { className: D.yF }),
                    !V &&
                        L.Tn.has(H.entity_type) &&
                        (0, i.jsx)(g.A, { className: D.K4, noBackground: !0, divider: g.V.BOTTOM, channelId: s?.id }),
                    (0, i.jsxs)("div", {
                        className: r()(D.mG, D.qr),
                        children: [
                            (0, i.jsx)(q, {
                                channel: s,
                                onJoinClick: w,
                                handleLocationClick: X,
                                location: A,
                                isExternal: W,
                            }),
                            (0, i.jsx)("div", {
                                className: D.AQ,
                                children: (0, i.jsx)(z, {
                                    channel: s,
                                    entityType: t,
                                    isActive: h,
                                    isJoined: x,
                                    isUserLurking: m,
                                    isMember: j,
                                    rsvped: v,
                                    canInvite: p,
                                    onContextMenu: y,
                                    onRsvpClick: T,
                                    onJoinGuildClick: R,
                                    onInviteClick: U,
                                    onJoinClick: w,
                                    onStartClick: B,
                                    onEndClick: _,
                                }),
                            }),
                        ],
                    }),
                    Y && (0, i.jsx)("hr", { className: D.yF }),
                ],
            }),
            Y && (0, i.jsx)(f.A, { guildId: l?.id, recurrenceRule: P, guildEventId: H.id, onRecurrenceClick: J }),
        ],
    });
}

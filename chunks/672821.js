t.d(n, { A: () => L, c: () => I });
var i,
    l = t(627968),
    a = t(64700),
    r = t(503698),
    s = t.n(r),
    c = t(311907),
    o = t(435371),
    d = t(397927),
    u = t(148719),
    g = t(713654),
    A = t(931991),
    h = t(660110),
    m = t(576705),
    x = t(435328),
    C = t(530209),
    v = t(974930),
    p = t(428978),
    N = t(850183),
    E = t(557582),
    f = t(888637),
    j = t(823991),
    k = t(988794),
    y = t(652215),
    G = t(985018),
    _ = t(256538),
    I = (((i = {})[(i.BANNER = 0)] = "BANNER"), (i[(i.THUMBNAIL = 1)] = "THUMBNAIL"), i);
function b(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, A.nr)(n),
        r = (0, c.bG)([m.A], () => !n.isGuildVocal() || m.A.can(y.xBc.CONNECT, n), [n]),
        h = a.useMemo(() => (0, u.A)(n), [n]),
        x = a.useMemo(() => {
            let e = (0, g.gU)(n);
            return null != e
                ? a.createElement(e, { color: "currentColor", size: "custom", width: 20, height: 20, className: _.Kk })
                : null;
        }, [n]);
    return (0, l.jsx)(o.m_, {
        text: G.intl.string(G.t.nHjY9C),
        shouldShow: !r && null != t,
        children: (0, l.jsxs)(d.DUT, {
            className: s()(_.mG, _.nU, { [_.MN]: r && null != t, [_.Pm]: !r && null != t }),
            onClick: t,
            children: [
                (0, l.jsx)(o.m_, {
                    text: G.intl.string(G.t["48WXaW"]),
                    shouldShow: i && h && r && null != t,
                    children: x,
                }),
                (0, l.jsx)(d.Text, { variant: "text-sm/normal", color: "none", className: _.h7, children: n.name }),
            ],
        }),
    });
}
function T(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: i, location: a, isExternal: r } = e;
    return null != n
        ? (0, l.jsx)(b, { channel: n, onClick: t })
        : (0, l.jsxs)(d.DUT, {
              className: _.mG,
              onClick: i,
              children: [
                  (0, l.jsx)(d.BT6, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(_.nU, _.Kk),
                  }),
                  (0, l.jsx)(d.Text, {
                      className: r ? _.dC : _.h7,
                      variant: "text-sm/normal",
                      children: (0, x.l)(a, !0),
                  }),
              ],
          });
}
function P(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: r,
            rsvped: s,
            canInvite: c,
            onContextMenu: o,
            onJoinClick: u,
            onRsvpClick: g,
            onStartClick: A,
            onInviteClick: h,
            onEndClick: m,
            onJoinGuildClick: x,
        } = e,
        v = (0, C.D)(n, t),
        N = (0, p.Zq)({
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: r,
            rsvped: s,
            canInvite: c,
            isChannelPublic: v,
            channel: n,
            onJoinClick: u,
            onRsvpClick: g,
            onStartClick: A,
            onInviteClick: h,
            onEndClick: m,
            onJoinGuildClick: x,
        });
    return (0, l.jsxs)(d.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != o ? (0, l.jsx)(p.jD, { onClick: o }) : null,
            N?.map((e, n) => (0, l.jsx)(d.Button, { ...e }, n)),
        ],
    });
}
function L(e) {
    let {
            className: n,
            guild: t,
            channel: i,
            creator: a,
            name: r,
            entityType: c,
            description: o,
            imageLocation: u = 0,
            imageSource: g,
            isActive: A,
            isUserLurking: m,
            isJoined: x = !1,
            isMember: C = !1,
            speakers: p,
            speakerCount: y,
            rsvped: G,
            canInvite: I,
            location: b,
            truncate: L,
            onContextMenu: S,
            onJoinClick: M,
            onJoinGuildClick: w,
            onRsvpClick: D,
            onStartClick: B,
            onInviteClick: U,
            onEndClick: R,
            onClick: V,
            isNew: O,
            guildEvent: K,
            eventPreview: H,
            recurrenceRule: J,
            recurrenceId: z,
            hideAgeVerificationNotice: q,
        } = e,
        F = c === k.Ps.EXTERNAL,
        X = F ? (e) => e.stopPropagation() : void 0,
        W = [];
    if (null != J && null != event) {
        let e = (0, v.X7)(J);
        W = (0, v.er)(4, e, new Date(K.scheduled_start_time));
    }
    let Q = W.length > 0;
    return (0, l.jsxs)(d.sqX, {
        "aria-label": r,
        onClick: () => V?.(z),
        onContextMenu: S,
        className: s()(_.Nr, { [_.oR]: x, [_.hT]: m }, n),
        children: [
            (0, l.jsxs)("div", {
                className: s()(_.Ms, { [_.AD]: Q }),
                children: [
                    0 === u && (0, l.jsx)(N.A, { source: g }),
                    (0, l.jsx)(E.Ay, {
                        creator: a,
                        name: r,
                        description: o,
                        imageSource: 1 === u ? g : null,
                        truncate: L,
                        guildId: t?.id,
                        isNew: O,
                        guildEvent: K,
                        eventPreview: H,
                        recurrenceId: z,
                    }),
                    A &&
                        null != t &&
                        null != p &&
                        y > 0 &&
                        (0, l.jsx)(j.A, { guild: t, speakers: p, speakerCount: y, className: _.YK }),
                    (0, l.jsx)("hr", { className: _.yF }),
                    !q &&
                        k.Tn.has(K.entity_type) &&
                        (0, l.jsx)(h.A, { className: _.K4, noBackground: !0, divider: h.V.BOTTOM, channelId: i?.id }),
                    (0, l.jsxs)("div", {
                        className: s()(_.mG, _.qr),
                        children: [
                            (0, l.jsx)(T, {
                                channel: i,
                                onJoinClick: M,
                                handleLocationClick: X,
                                location: b,
                                isExternal: F,
                            }),
                            (0, l.jsx)("div", {
                                className: _.AQ,
                                children: (0, l.jsx)(P, {
                                    channel: i,
                                    entityType: c,
                                    isActive: A,
                                    isJoined: x,
                                    isUserLurking: m,
                                    isMember: C,
                                    rsvped: G,
                                    canInvite: I,
                                    onContextMenu: S,
                                    onRsvpClick: D,
                                    onJoinGuildClick: w,
                                    onInviteClick: U,
                                    onJoinClick: M,
                                    onStartClick: B,
                                    onEndClick: R,
                                }),
                            }),
                        ],
                    }),
                    Q && (0, l.jsx)("hr", { className: _.yF }),
                ],
            }),
            Q && (0, l.jsx)(f.A, { guildId: t?.id, recurrenceRule: J, guildEventId: K.id, onRecurrenceClick: V }),
        ],
    });
}

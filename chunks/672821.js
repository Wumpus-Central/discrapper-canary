t.d(n, { A: () => S, c: () => b });
var i,
    l = t(627968),
    a = t(64700),
    r = t(503698),
    s = t.n(r),
    c = t(311907),
    o = t(435371),
    d = t(397927),
    u = t(148719),
    g = t(47167),
    A = t(713654),
    h = t(931991),
    m = t(660110),
    x = t(576705),
    C = t(435328),
    v = t(530209),
    p = t(974930),
    N = t(428978),
    E = t(850183),
    f = t(557582),
    j = t(888637),
    k = t(823991),
    y = t(988794),
    G = t(652215),
    _ = t(985018),
    I = t(256538),
    b = (((i = {})[(i.BANNER = 0)] = "BANNER"), (i[(i.THUMBNAIL = 1)] = "THUMBNAIL"), i);
function T(e) {
    let { channel: n, onClick: t } = e,
        i = (0, g.Ay)(n),
        { canManageAllEvents: r } = (0, h.nr)(n),
        m = (0, c.bG)([x.A], () => !n.isGuildVocal() || x.A.can(G.xBc.CONNECT, n), [n]),
        C = a.useMemo(() => (0, u.A)(n), [n]),
        v = a.useMemo(() => {
            let e = (0, A.gU)(n);
            return null != e
                ? a.createElement(e, { color: "currentColor", size: "custom", width: 20, height: 20, className: I.Kk })
                : null;
        }, [n]);
    return (0, l.jsx)(o.m_, {
        text: _.intl.string(_.t.nHjY9C),
        shouldShow: !m && null != t,
        children: (0, l.jsxs)(d.DUT, {
            className: s()(I.mG, I.nU, { [I.MN]: m && null != t, [I.Pm]: !m && null != t }),
            onClick: t,
            children: [
                (0, l.jsx)(o.m_, {
                    text: _.intl.string(_.t["48WXaW"]),
                    shouldShow: r && C && m && null != t,
                    children: v,
                }),
                (0, l.jsx)(d.Text, { variant: "text-sm/normal", color: "none", className: I.h7, children: i }),
            ],
        }),
    });
}
function P(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: i, location: a, isExternal: r } = e;
    return null != n
        ? (0, l.jsx)(T, { channel: n, onClick: t })
        : (0, l.jsxs)(d.DUT, {
              className: I.mG,
              onClick: i,
              children: [
                  (0, l.jsx)(d.BT6, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(I.nU, I.Kk),
                  }),
                  (0, l.jsx)(d.Text, {
                      className: r ? I.dC : I.h7,
                      variant: "text-sm/normal",
                      children: (0, C.l)(a, !0),
                  }),
              ],
          });
}
function L(e) {
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
        C = (0, v.D)(n, t),
        p = (0, N.Zq)({
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: r,
            rsvped: s,
            canInvite: c,
            isChannelPublic: C,
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
            null != o ? (0, l.jsx)(N.jD, { onClick: o }) : null,
            p?.map((e, n) => (0, l.jsx)(d.Button, { ...e }, n)),
        ],
    });
}
function S(e) {
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
            isUserLurking: h,
            isJoined: x = !1,
            isMember: C = !1,
            speakers: v,
            speakerCount: N,
            rsvped: G,
            canInvite: _,
            location: b,
            truncate: T,
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
        F = c === y.Ps.EXTERNAL,
        X = F ? (e) => e.stopPropagation() : void 0,
        W = [];
    if (null != J && null != event) {
        let e = (0, p.X7)(J);
        W = (0, p.er)(4, e, new Date(K.scheduled_start_time));
    }
    let Q = W.length > 0;
    return (0, l.jsxs)(d.sqX, {
        "aria-label": r,
        onClick: () => V?.(z),
        onContextMenu: S,
        className: s()(I.Nr, { [I.oR]: x, [I.hT]: h }, n),
        children: [
            (0, l.jsxs)("div", {
                className: s()(I.Ms, { [I.AD]: Q }),
                children: [
                    0 === u && (0, l.jsx)(E.A, { source: g }),
                    (0, l.jsx)(f.Ay, {
                        creator: a,
                        name: r,
                        description: o,
                        imageSource: 1 === u ? g : null,
                        truncate: T,
                        guildId: t?.id,
                        isNew: O,
                        guildEvent: K,
                        eventPreview: H,
                        recurrenceId: z,
                    }),
                    A &&
                        null != t &&
                        null != v &&
                        N > 0 &&
                        (0, l.jsx)(k.A, { guild: t, speakers: v, speakerCount: N, className: I.YK }),
                    (0, l.jsx)("hr", { className: I.yF }),
                    !q &&
                        y.Tn.has(K.entity_type) &&
                        (0, l.jsx)(m.A, { className: I.K4, noBackground: !0, divider: m.V.BOTTOM, channelId: i?.id }),
                    (0, l.jsxs)("div", {
                        className: s()(I.mG, I.qr),
                        children: [
                            (0, l.jsx)(P, {
                                channel: i,
                                onJoinClick: M,
                                handleLocationClick: X,
                                location: b,
                                isExternal: F,
                            }),
                            (0, l.jsx)("div", {
                                className: I.AQ,
                                children: (0, l.jsx)(L, {
                                    channel: i,
                                    entityType: c,
                                    isActive: A,
                                    isJoined: x,
                                    isUserLurking: h,
                                    isMember: C,
                                    rsvped: G,
                                    canInvite: _,
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
                    Q && (0, l.jsx)("hr", { className: I.yF }),
                ],
            }),
            Q && (0, l.jsx)(j.A, { guildId: t?.id, recurrenceRule: J, guildEventId: K.id, onRecurrenceClick: V }),
        ],
    });
}

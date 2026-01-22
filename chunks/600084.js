n.d(t, { Z: () => B }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(570140),
    s = n(384275),
    c = n(82906),
    u = n(763762),
    d = n(933557),
    p = n(605436),
    f = n(736052),
    h = n(86203),
    g = n(189156),
    m = n(621853),
    b = n(484459),
    y = n(131704),
    v = n(881998),
    O = n(984933),
    j = n(496675),
    x = n(594174),
    C = n(51144),
    E = n(7782),
    S = n(967128),
    _ = n(320781),
    I = n(269203),
    P = n(86863),
    Z = n(558756),
    N = n(753898),
    T = n(734386),
    A = n(438306),
    w = n(544142),
    R = n(128557),
    D = n(981631),
    M = n(176505),
    k = n(388032),
    L = n(701766),
    U = n(478411);
function G(e) {
    let { canManageRoles: t, channel: n } = e,
        i = t && (0, p.Yk)(n),
        a = (0, l.e7)([O.ZP], () => null != n.guild_id && n === O.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, f.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(_.Z, { channel: n });
    if (y.Ec.has(n.type)) return (0, r.jsx)(w.Z, { channel: n });
    if (a) return (0, r.jsx)(R.Z, { channel: n });
    if (i) return (0, r.jsx)(T.Z, { channel: n });
    return (0, r.jsx)(A.Z, { channel: n });
}
function B(e) {
    var t;
    let { channel: n, showingBanner: p } = e,
        f = (0, d.ZP)(n),
        { type: y } = n,
        O = (0, l.e7)([x.default], () => (n.isPrivate() ? x.default.getUser(n.getRecipientId()) : null)),
        _ = C.ZP.useUserTag(O),
        { canManageRoles: T, canReadMessageHistory: A } = (0, l.cj)([j.Z], () => ({
            canManageRoles: j.Z.can(D.Plq.MANAGE_ROLES, n),
            canReadMessageHistory: j.Z.can(D.Plq.READ_MESSAGE_HISTORY, n),
        })),
        w = (0, l.e7)([m.Z], () => (y === D.d4z.DM ? m.Z.getMutualGuilds(n.getRecipientId()) : null), [n, y]),
        R = (0, u.Z)(null != (t = null == O ? void 0 : O.id) ? t : D.lds),
        { authorizedAppToken: B, authorizedAppsFetchState: F } = (0, l.cj)([v.default], () => ({
            authorizedAppToken: v.default.getNewestTokenForApplication(null == R ? void 0 : R.id),
            authorizedAppsFetchState: v.default.getFetchState(),
        })),
        H = c.Z.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (i.useEffect(() => {
            y === D.d4z.DM &&
                null == w &&
                null != O &&
                o.Z.wait(() => (0, b.Z)(n.getRecipientId(), O.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [w, y, n, O]),
        i.useEffect(() => {
            (null == O ? void 0 : O.bot) && F === v.FetchState.NOT_FETCHED && s.Z.fetch();
        }, [null == O ? void 0 : O.bot, F]),
        n.isSystemDM())
    )
        return (0, r.jsx)(N.Z, {
            channel: n,
            children: k.intl.string(k.t.Rzvnig),
        });
    if (y === D.d4z.DM) {
        let e;
        if (null != O && null != R) {
            let t = [];
            null != B &&
                (t.push(
                    (0, r.jsx)(
                        Z.W,
                        {
                            channel: n,
                            user: O,
                        },
                        "mute",
                    ),
                ),
                t.push(
                    (0, r.jsx)(
                        P.n,
                        {
                            user: O,
                            application: R,
                            channel: n,
                            oauth2Token: B,
                        },
                        "manage",
                    ),
                )),
                H && t.push((0, r.jsx)(h.Z, { channel: n }, "report")),
                t.length > 0 &&
                    (e = (0, r.jsx)("div", {
                        className: L.buttonContainer,
                        children: t,
                    }));
        } else
            e = (0, r.jsx)(E.Z, {
                userId: n.getRecipientId(),
                channel: n,
                showingBanner: p,
            });
        return (0, r.jsxs)(N.Z, {
            channel: n,
            user: O,
            children: [
                null != O &&
                    !O.isProvisional &&
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/medium",
                        className: U.marginBottom20,
                        children: _,
                    }),
                k.intl.format(k.t["Qvg+6+"], { username: f }),
                (null == O ? void 0 : O.isProvisional) && (0, r.jsx)(g.q, { userId: O.id }),
                e,
            ],
        });
    }
    if (n.isMultiUserDM())
        if (n.isManaged())
            return (0, r.jsxs)(S.ZP, {
                channelId: n.id,
                children: [
                    (0, r.jsx)(S.Ot, { children: k.intl.format(k.t.I3R7Vn, { channelName: f }) }),
                    (0, r.jsx)(S.jz, { children: k.intl.string(k.t.M8Ao6I) }),
                ],
            });
        else if (n.hasFlag(M.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(I.Z, { channel: n });
        else
            return (0, r.jsx)(N.Z, {
                channel: n,
                children: k.intl.format(k.t.MFwcqO, { name: f }),
            });
    return A
        ? (0, r.jsx)(G, {
              channel: n,
              canManageRoles: T,
          })
        : (0, r.jsx)(S.ZP, {
              channelId: n.id,
              children: (0, r.jsx)(S.jz, { children: k.intl.format(k.t.hPVEQG, { channelName: f }) }),
          });
}

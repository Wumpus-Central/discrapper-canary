n.d(t, { A: () => P });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(573613),
    a = n(734057),
    s = n(696451),
    o = n(309010),
    u = n(351906),
    d = n(562153),
    c = n(622543),
    A = n(570287),
    _ = n(987112),
    h = n(31432),
    E = n(559506),
    f = n(900179),
    N = n(646986),
    T = n(810396),
    S = n(570314),
    I = n(571077),
    p = n(243166),
    m = n(442228),
    g = n(568704),
    C = n(403369),
    v = n(360563),
    y = n(996988),
    O = n(985018),
    j = n(454555),
    L = n(656884);
function P(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: P,
            guild: b,
            isHoveringOrFocusing: x,
            onOpenProfile: R,
            channelId: U,
            onClose: G,
        } = e,
        H = d.Ay.getName(b?.id, U, t),
        M = (0, i.bG)([c.A], () => c.A.getUserProfile(t.id)?.application),
        D = (0, i.bG)([a.A, o.A], () => a.A.getChannel(o.A.getChannelId())),
        w = (0, i.bG)([s.Ay], () => s.Ay.isMember(b?.id, t.id)),
        V = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        k = (0, A.A)(t.id, b?.id);
    return (0, l.jsxs)(r.Ip, {
        fade: !0,
        className: L.rf,
        children: [
            (0, l.jsx)(E.A, { userId: t.id }),
            (0, l.jsx)(T.A, {
                user: t,
                guildId: b?.id,
                onOpenProfile: R,
                nickname: H,
                pronouns: P?.pronouns,
                tags: (0, l.jsx)(h.A, { displayProfile: P, themeType: y.d.POPOUT, onClose: G }),
                nicknameIcons: V ? null : (0, l.jsx)(p.A, { userId: t.id, isVisible: x, onOpenProfile: R }),
            }),
            (0, l.jsx)(v.A, { user: t, onOpenProfile: (e) => R?.({ tabSection: e }) }),
            k && (0, l.jsx)(g.A, { user: t, onClose: G }),
            (0, l.jsxs)("div", {
                className: j.U,
                children: [
                    (0, l.jsx)(S.A, { user: t, closePopout: G, fullWidth: !0 }),
                    (0, l.jsx)(I.A, { user: t, guildId: b?.id, fullWidth: !0 }),
                ],
            }),
            (0, l.jsx)(m.A, { user: t, bio: P?.bio, hidePersonalInformation: V, onClose: G }),
            (0, l.jsx)(N.A, { user: t, currentUser: n, guildId: b?.id, onOpenUserProfileModal: R, onClose: G }),
            M?.popularApplicationCommandIds != null &&
                null != D &&
                (0, l.jsx)(_.A, {
                    applicationId: M.id,
                    commandIds: M.popularApplicationCommandIds,
                    channel: D,
                    guildId: b?.id,
                    onClick: G,
                }),
            null != b &&
                w &&
                (0, l.jsx)(f.A, {
                    heading: O.intl.string(O.t["LPJmL/"]),
                    children: (0, l.jsx)(C.A, { userId: t.id, guild: b }),
                }),
        ],
    });
}

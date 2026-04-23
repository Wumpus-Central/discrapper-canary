n.d(t, { A: () => O });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(573613),
    a = n(734057),
    o = n(696451),
    s = n(309010),
    d = n(351906),
    u = n(562153),
    _ = n(622543),
    c = n(570287),
    f = n(987112),
    A = n(31432),
    h = n(559506),
    p = n(900179),
    E = n(646986),
    T = n(810396),
    N = n(570314),
    S = n(571077),
    I = n(243166),
    m = n(442228),
    C = n(568704),
    g = n(403369),
    v = n(360563),
    x = n(996988),
    y = n(985018),
    b = n(454555),
    L = n(656884);
function O(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: O,
            guild: j,
            isHoveringOrFocusing: P,
            onOpenProfile: R,
            channelId: U,
            onClose: G,
        } = e,
        H = u.Ay.getName(j?.id, U, t),
        k = (0, i.bG)([_.A], () => _.A.getUserProfile(t.id)?.application),
        w = (0, i.bG)([a.A, s.A], () => a.A.getChannel(s.A.getChannelId())),
        M = (0, i.bG)([o.Ay], () => o.Ay.isMember(j?.id, t.id)),
        D = (0, i.bG)([d.A], () => d.A.hidePersonalInformation),
        B = (0, c.A)(t.id, j?.id);
    return (0, l.jsxs)(r.Ip, {
        fade: !0,
        className: L.rf,
        children: [
            (0, l.jsx)(h.A, { userId: t.id }),
            (0, l.jsx)(T.A, {
                user: t,
                guildId: j?.id,
                onOpenProfile: R,
                nickname: H,
                pronouns: O?.pronouns,
                tags: (0, l.jsx)(A.A, { displayProfile: O, themeType: x.d.POPOUT, onClose: G }),
                nicknameIcons: D ? null : (0, l.jsx)(I.A, { userId: t.id, isVisible: P, onOpenProfile: R }),
            }),
            (0, l.jsx)(v.A, { user: t, onOpenProfile: (e) => R?.({ tabSection: e }) }),
            B && (0, l.jsx)(C.A, { user: t, onClose: G }),
            (0, l.jsxs)("div", {
                className: b.U,
                children: [
                    (0, l.jsx)(N.A, { user: t, closePopout: G, fullWidth: !0 }),
                    (0, l.jsx)(S.A, { user: t, guildId: j?.id, fullWidth: !0 }),
                ],
            }),
            (0, l.jsx)(m.A, { user: t, bio: O?.bio, hidePersonalInformation: D, onClose: G }),
            (0, l.jsx)(E.A, { user: t, currentUser: n, guildId: j?.id, onOpenUserProfileModal: R, onClose: G }),
            k?.popularApplicationCommandIds != null &&
                null != w &&
                (0, l.jsx)(f.A, {
                    applicationId: k.id,
                    commandIds: k.popularApplicationCommandIds,
                    channel: w,
                    guildId: j?.id,
                    onClick: G,
                }),
            null != j &&
                M &&
                (0, l.jsx)(p.A, {
                    heading: y.intl.string(y.t["LPJmL/"]),
                    children: (0, l.jsx)(g.A, { userId: t.id, guild: j }),
                }),
        ],
    });
}

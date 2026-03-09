n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(529200),
    m = n(95701),
    h = n(734057),
    p = n(287809),
    g = n(403362),
    A = n(168428),
    x = n(652215),
    f = n(985018),
    C = n(563111);
function E(e) {
    let t,
        { invite: n, message: l, currentUserId: E, onTransitionToInviteChannel: I, onAcceptInstantInvite: b } = e,
        T = E === l.author.id,
        v = n.state === x.elq.ACCEPTING,
        S = (0, o.bG)([h.A], () => (null != n.channel ? h.A.getChannel(n.channel.id) : null), [n]);
    a()(null == S || S.isPrivate(), "must be a private channel");
    let { analyticsLocations: y } = (0, u.Ay)(c.A.INVITE_EMBED),
        N = null != S,
        j = r.useCallback(() => {
            let e = "noop";
            N ? (I(), (e = "transition")) : (b(), (e = "accept")),
                (0, d.he)({ invite: n, action: e, inviter_id: l.author.id, invite_message_id: l.id }, y);
        }, [n, l, y, N, I, b]);
    if (null == S) {
        if (null == n.channel) return (0, i.jsx)(A.A, {});
        (S = (0, m.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = S.recipients.reduce((e, t) => {
            let n = p.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = p.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let L = S.name;
    (null == L || "" === L) &&
        (L =
            t.length > 0
                ? t
                      .filter(g.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : f.intl.string(f.t.LJpTRF));
    let R = f.intl.string(f.t.XpeFYr),
        P = "active";
    N && ((R = f.intl.string(f.t.cEnaWx)), (P = "secondary"));
    let M = f.intl.string(f.t["3p3/BK"]);
    return (
        T && (M = f.intl.string(f.t.qmtuXE)),
        (0, i.jsxs)(_.A, {
            children: [
                (0, i.jsx)(_.A.Header, { text: M }),
                (0, i.jsxs)(_.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.iH,
                            children: [
                                (0, i.jsx)(_.A.Icon, { channel: S, onClick: N ? j : void 0 }),
                                (0, i.jsx)(_.A.Info, {
                                    title: L,
                                    onClick: N ? j : void 0,
                                    children: (0, i.jsx)(_.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.$nd, { onClick: j, loading: v, disabled: N, variant: P, text: R, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}

n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
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
        { invite: n, message: a, currentUserId: E, onTransitionToInviteChannel: I, onAcceptInstantInvite: v } = e,
        b = E === a.author.id,
        T = n.state === x.elq.ACCEPTING,
        y = (0, o.bG)([h.A], () => (null != n.channel ? h.A.getChannel(n.channel.id) : null), [n]);
    l()(null == y || y.isPrivate(), "must be a private channel");
    let { analyticsLocations: S } = (0, u.Ay)(c.A.INVITE_EMBED),
        N = null != y,
        j = r.useCallback(() => {
            let e = "noop";
            N ? (I(), (e = "transition")) : (v(), (e = "accept")),
                (0, d.he)({ invite: n, action: e, inviter_id: a.author.id, invite_message_id: a.id }, S);
        }, [n, a, S, N, I, v]);
    if (null == y) {
        if (null == n.channel) return (0, i.jsx)(A.A, {});
        (y = (0, m.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = y.recipients.reduce((e, t) => {
            let n = p.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = p.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let L = y.name;
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
        b && (M = f.intl.string(f.t.qmtuXE)),
        (0, i.jsxs)(_.A, {
            children: [
                (0, i.jsx)(_.A.Header, { text: M }),
                (0, i.jsxs)(_.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.iH,
                            children: [
                                (0, i.jsx)(_.A.Icon, { channel: y, onClick: N ? j : void 0 }),
                                (0, i.jsx)(_.A.Info, {
                                    title: L,
                                    onClick: N ? j : void 0,
                                    children: (0, i.jsx)(_.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.$nd, { onClick: j, loading: T, disabled: N, variant: P, text: R, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}

n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    m = n(47167),
    _ = n(21599),
    h = n(529200),
    p = n(95701),
    g = n(734057),
    A = n(994500),
    x = n(287809),
    f = n(403362),
    C = n(168428),
    E = n(652215),
    I = n(985018),
    v = n(147673);
function b(e) {
    let t,
        { invite: n, message: s, currentUserId: b, onTransitionToInviteChannel: T, onAcceptInstantInvite: y } = e,
        N = b === s.author.id,
        S = n.state === E.elq.ACCEPTING,
        j = (0, o.bG)([g.A], () => (null != n.channel ? g.A.getChannel(n.channel.id) : null), [n]);
    r()(null == j || j.isPrivate(), "must be a private channel");
    let { analyticsLocations: L } = (0, u.Ay)(c.A.INVITE_EMBED),
        R = null != j,
        P = l.useCallback(() => {
            let e = "noop";
            R ? (T(), (e = "transition")) : (y(), (e = "accept")),
                (0, d.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: (0, _._U)(n.code, s.id),
                    },
                    L,
                );
        }, [n, s, L, R, T, y]);
    if (null == j) {
        if (null == n.channel) return (0, i.jsx)(C.A, {});
        (j = (0, p.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = j.recipients.reduce((e, t) => {
            let n = x.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = x.default.getCurrentUser();
        R && null != e && t.push(e);
    }
    let D = (0, m.m1)(j, x.default, A.A);
    (null == D || "" === D) &&
        (D =
            t.length > 0
                ? t
                      .filter(f.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : I.intl.string(I.t.LJpTRF));
    let M = I.intl.string(I.t.XpeFYr),
        w = "active";
    R && ((M = I.intl.string(I.t.cEnaWx)), (w = "secondary"));
    let O = I.intl.string(I.t["3p3/BK"]);
    return (
        N && (O = I.intl.string(I.t.qmtuXE)),
        (0, i.jsxs)(h.A, {
            children: [
                (0, i.jsx)(h.A.Header, { text: O }),
                (0, i.jsxs)(h.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.iH,
                            children: [
                                (0, i.jsx)(h.A.Icon, { channel: j, onClick: R ? P : void 0 }),
                                (0, i.jsx)(h.A.Info, {
                                    title: D,
                                    onClick: R ? P : void 0,
                                    children: (0, i.jsx)(h.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(a.$nd, { onClick: P, loading: S, disabled: R, variant: w, text: M, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}

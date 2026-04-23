n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(821609),
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
    f = n(287809),
    x = n(403362),
    C = n(168428),
    E = n(652215),
    I = n(985018),
    v = n(344900);
function b(e) {
    let t,
        { invite: n, message: a, currentUserId: b, onTransitionToInviteChannel: T, onAcceptInstantInvite: S } = e,
        y = b === a.author.id,
        N = n.state === E.elq.ACCEPTING,
        j = (0, o.bG)([g.A], () => (null != n.channel ? g.A.getChannel(n.channel.id) : null), [n]);
    s()(null == j || j.isPrivate(), "must be a private channel");
    let { analyticsLocations: L } = (0, u.Ay)(c.A.INVITE_EMBED),
        R = null != j,
        P = l.useCallback(() => {
            let e = "noop";
            R ? (T(), (e = "transition")) : (S(), (e = "accept")),
                (0, d.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, _._U)(n.code, a.id),
                    },
                    L,
                );
        }, [n, a, L, R, T, S]);
    if (null == j) {
        if (null == n.channel) return (0, i.jsx)(C.A, {});
        (j = (0, p.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = j.recipients.reduce((e, t) => {
            let n = f.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = f.default.getCurrentUser();
        R && null != e && t.push(e);
    }
    let w = (0, m.m1)(j, f.default, A.A);
    (null == w || "" === w) &&
        (w =
            t.length > 0
                ? t
                      .filter(x.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : I.intl.string(I.t.LJpTRF));
    let D = I.intl.string(I.t.XpeFYr),
        k = "active";
    R && ((D = I.intl.string(I.t.cEnaWx)), (k = "secondary"));
    let O = I.intl.string(I.t["3p3/BK"]);
    return (
        y && (O = I.intl.string(I.t.qmtuXE)),
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
                                    title: w,
                                    onClick: R ? P : void 0,
                                    children: (0, i.jsx)(h.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(r.$, { onClick: P, loading: N, disabled: R, variant: k, text: D, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}

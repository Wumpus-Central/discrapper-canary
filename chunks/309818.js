n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(284009),
    l = n.n(r),
    s = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(21599),
    m = n(529200),
    h = n(95701),
    p = n(734057),
    g = n(287809),
    A = n(403362),
    x = n(168428),
    f = n(652215),
    C = n(985018),
    I = n(366228);
function E(e) {
    let t,
        { invite: n, message: r, currentUserId: E, onTransitionToInviteChannel: b, onAcceptInstantInvite: v } = e,
        T = E === r.author.id,
        y = n.state === f.elq.ACCEPTING,
        S = (0, o.bG)([p.A], () => (null != n.channel ? p.A.getChannel(n.channel.id) : null), [n]);
    l()(null == S || S.isPrivate(), "must be a private channel");
    let { analyticsLocations: N } = (0, u.Ay)(c.A.INVITE_EMBED),
        j = null != S,
        L = a.useCallback(() => {
            let e = "noop";
            j ? (b(), (e = "transition")) : (v(), (e = "accept")),
                (0, d.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: (0, _._U)(n.code, r.id),
                    },
                    N,
                );
        }, [n, r, N, j, b, v]);
    if (null == S) {
        if (null == n.channel) return (0, i.jsx)(x.A, {});
        (S = (0, h.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = S.recipients.reduce((e, t) => {
            let n = g.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = g.default.getCurrentUser();
        j && null != e && t.push(e);
    }
    let R = S.name;
    (null == R || "" === R) &&
        (R =
            t.length > 0
                ? t
                      .filter(A.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : C.intl.string(C.t.LJpTRF));
    let P = C.intl.string(C.t.XpeFYr),
        w = "active";
    j && ((P = C.intl.string(C.t.cEnaWx)), (w = "secondary"));
    let M = C.intl.string(C.t["3p3/BK"]);
    return (
        T && (M = C.intl.string(C.t.qmtuXE)),
        (0, i.jsxs)(m.A, {
            children: [
                (0, i.jsx)(m.A.Header, { text: M }),
                (0, i.jsxs)(m.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: I.iH,
                            children: [
                                (0, i.jsx)(m.A.Icon, { channel: S, onClick: j ? L : void 0 }),
                                (0, i.jsx)(m.A.Info, {
                                    title: R,
                                    onClick: j ? L : void 0,
                                    children: (0, i.jsx)(m.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.$nd, { onClick: L, loading: y, disabled: j, variant: w, text: P, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}

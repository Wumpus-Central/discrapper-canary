n.d(t, { A: () => C }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    m = n(529200),
    _ = n(95701),
    h = n(734057),
    p = n(287809),
    g = n(403362),
    A = n(168428),
    f = n(652215),
    x = n(985018),
    E = n(42441);
function C(e) {
    let t,
        { invite: n, message: a, currentUserId: C, onTransitionToInviteChannel: I, onAcceptInstantInvite: T } = e,
        v = C === a.author.id,
        N = n.state === f.elq.ACCEPTING,
        S = (0, o.bG)([h.A], () => (null != n.channel ? h.A.getChannel(n.channel.id) : null), [n]);
    r()(null == S || S.isPrivate(), "must be a private channel");
    let { analyticsLocations: b } = (0, u.Ay)(c.A.INVITE_EMBED),
        j = null != S,
        y = l.useCallback(() => {
            let e = "noop";
            j ? (I(), (e = "transition")) : (T(), (e = "accept")),
                (0, d.he)({ invite: n, action: e, inviter_id: a.author.id, invite_message_id: a.id }, b);
        }, [n, a, b, j, I, T]);
    if (null == S) {
        if (null == n.channel) return (0, i.jsx)(A.A, {});
        (S = (0, _.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = S.recipients.reduce((e, t) => {
            let n = p.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = p.default.getCurrentUser();
        j && null != e && t.push(e);
    }
    let R = S.name;
    (null == R || "" === R) &&
        (R =
            t.length > 0
                ? t
                      .filter(g.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : x.intl.string(x.t.LJpTRF));
    let L = x.intl.string(x.t.XpeFYr),
        M = "active";
    j && ((L = x.intl.string(x.t.cEnaWx)), (M = "secondary"));
    let O = x.intl.string(x.t["3p3/BK"]);
    return (
        v && (O = x.intl.string(x.t.qmtuXE)),
        (0, i.jsxs)(m.A, {
            children: [
                (0, i.jsx)(m.A.Header, { text: O }),
                (0, i.jsxs)(m.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: E.iH,
                            children: [
                                (0, i.jsx)(m.A.Icon, { channel: S, onClick: j ? y : void 0 }),
                                (0, i.jsx)(m.A.Info, {
                                    title: R,
                                    onClick: j ? y : void 0,
                                    children: (0, i.jsx)(m.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.$nd, { onClick: y, loading: N, disabled: j, variant: M, text: L, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}

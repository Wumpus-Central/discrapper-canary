n.d(t, { A: () => O }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    f = n(529200),
    p = n(95701),
    _ = n(734057),
    h = n(287809),
    m = n(403362),
    g = n(168428),
    E = n(652215),
    b = n(985018),
    y = n(563111);
function O(e) {
    let t,
        { invite: n, message: a, currentUserId: O, onTransitionToInviteChannel: A, onAcceptInstantInvite: v } = e,
        S = O === a.author.id,
        I = n.state === E.elq.ACCEPTING,
        T = (0, l.bG)([_.A], () => (null != n.channel ? _.A.getChannel(n.channel.id) : null), [n]);
    s()(null == T || T.isPrivate(), "must be a private channel");
    let { analyticsLocations: C } = (0, d.Ay)(u.A.INVITE_EMBED),
        N = null != T,
        R = i.useCallback(() => {
            let e = "noop";
            N ? (A(), (e = "transition")) : (v(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                    },
                    C,
                );
        }, [n, a, C, N, A, v]);
    if (null == T) {
        if (null == n.channel) return (0, r.jsx)(g.A, {});
        (T = (0, p.OY)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = T.recipients.reduce((e, t) => {
            let n = h.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = h.default.getCurrentUser();
        N && null != e && t.push(e);
    }
    let w = T.name;
    (null == w || "" === w) &&
        (w =
            t.length > 0
                ? t
                      .filter(m.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : b.intl.string(b.t.LJpTRF));
    let P = b.intl.string(b.t.XpeFYr),
        D = "active";
    N && ((P = b.intl.string(b.t.cEnaWx)), (D = "secondary"));
    let x = b.intl.string(b.t["3p3/BK"]);
    return (
        S && (x = b.intl.string(b.t.qmtuXE)),
        (0, r.jsxs)(f.A, {
            children: [
                (0, r.jsx)(f.A.Header, { text: x }),
                (0, r.jsxs)(f.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.iH,
                            children: [
                                (0, r.jsx)(f.A.Icon, {
                                    channel: T,
                                    onClick: N ? R : void 0,
                                }),
                                (0, r.jsx)(f.A.Info, {
                                    title: w,
                                    onClick: N ? R : void 0,
                                    children: (0, r.jsx)(f.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.$nd, {
                            onClick: R,
                            loading: I,
                            disabled: N,
                            variant: D,
                            text: P,
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        })
    );
}

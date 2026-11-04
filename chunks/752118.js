var l = n(477900),
    r = n(582128),
    a = n(855986),
    i = n(620632),
    s = n(189213),
    c = n(993077),
    u = n(834730),
    d = n(95477),
    o = n(123292),
    A = n(964486),
    N = n(504049),
    x = n(46653),
    g = n(696451),
    m = n(71393),
    h = n(576705),
    k = n(287809),
    y = n(129230),
    E = n(427262),
    b = n(652215),
    C = n(792996),
    p = n(631130);
function f(t) {
    let { disabled: e = !1, user: n, setNickname: a, nickname: i, error: s, hasNick: A } = t,
        N = r.useRef(null),
        g = r.useCallback(() => {
            (a(""), N.current?.focus());
        }, [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e || null == n || n.id === x.default.getId()
                ? null
                : (0, l.jsx)(c.Z, {
                      type: c.Z.Types.WARNING,
                      className: p.Nr,
                      children: (0, l.jsx)(u.E, { variant: "body-md/normal", children: C.intl.string(C.t.dq3At2) }),
                  }),
            (0, l.jsx)(d.k, {
                label: e ? C.intl.string(C.t.EyA4q5) : C.intl.string(C.t["621LJD"]),
                disabled: e,
                inputRef: N,
                maxLength: 32,
                value: i,
                placeholder: E.Ay.getName(n),
                onChange: a,
                autoFocus: !0,
            }),
            null != s
                ? (0, l.jsx)(u.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      className: p.wt,
                      children: s,
                  })
                : null,
            A && !e
                ? (0, l.jsx)("div", {
                      className: p.cL,
                      children: (0, l.jsx)(o.Q, {
                          text: C.intl.string(C.t.aE02Rz),
                          onClick: g,
                          textVariant: "body-sm/normal",
                      }),
                  })
                : null,
        ],
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, user: n, guildId: c, onClose: u, analyticsSource: d, analyticsLocations: o } = t,
                x = (0, a.bG)([g.Ay], () => (null != c ? g.Ay.getMember(c, n.id) : null)),
                E = (0, a.bG)([h.A, k.default, m.A], () => {
                    let t = m.A.getGuild(c);
                    return (
                        null != t &&
                        (k.default.getCurrentUser()?.id === n.id
                            ? h.A.can(b.xBc.CHANGE_NICKNAME, t) || h.A.can(b.xBc.MANAGE_NICKNAMES, t)
                            : h.A.canManageUser(b.xBc.MANAGE_NICKNAMES, n.id, t))
                    );
                }),
                [p, j] = r.useState(!1),
                [M, _] = r.useState(x?.nick ?? ""),
                [v, G] = r.useState({});
            (0, A.Ay)(() => {
                y.default.track(b.HAw.OPEN_MODAL, {
                    type: "Change Server Identity",
                    location: b.liQ.GUILD_CHANNEL,
                    source: d,
                });
            });
            let I = (0, N.$9)(c, { location: o?.[0], targetUserId: n.id }),
                S = r.useCallback(
                    async (t) => {
                        t.preventDefault();
                        let e = null;
                        if ((M !== (x?.nick ?? "") && (e = { nick: M }), null == e)) return void u();
                        try {
                            (j(!0),
                                await i.Bo.patch({ url: b.Rsh.GUILD_MEMBER(c, n.id), body: e, rejectWithError: !1 }),
                                I(N.Nj.CHANGE_NICKNAME),
                                u());
                        } catch (n) {
                            let t;
                            j(!1);
                            let e = n.body?.errors ?? null;
                            (e?.nick != null
                                ? (t = e.nick?._errors?.[0]?.message || C.intl.string(C.t.xex86n))
                                : e?.username != null &&
                                  (t = e.username?._errors?.[0]?.message || C.intl.string(C.t.xex86n)),
                                G({ nick: t }));
                        }
                    },
                    [c, M, u, n, x, I],
                );
            return (0, l.jsx)("form", {
                onSubmit: S,
                children: (0, l.jsx)(s.a, {
                    transitionState: e,
                    onClose: u,
                    title: C.intl.string(C.t.dilOF6),
                    actions: [
                        { text: C.intl.string(C.t["ETE/oC"]), onClick: u, variant: "secondary" },
                        { text: C.intl.string(C.t["R3BPH+"]), variant: "primary", type: "submit", disabled: p },
                    ],
                    children: (0, l.jsx)(f, {
                        disabled: !E,
                        user: n,
                        error: v.nick,
                        nickname: M,
                        setNickname: _,
                        hasNick: x?.nick != null,
                    }),
                }),
            });
        },
    },
);

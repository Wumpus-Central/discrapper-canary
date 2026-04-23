n.d(e, { default: () => _ });
var l = n(627968),
    r = n(64700),
    a = n(17928),
    i = n(636537),
    s = n(189213),
    c = n(359778),
    u = n(834730),
    d = n(292666),
    o = n(123292),
    x = n(964486),
    A = n(504049),
    N = n(495544),
    g = n(696451),
    k = n(71393),
    m = n(576705),
    h = n(287809),
    E = n(954571),
    p = n(427262),
    C = n(652215),
    y = n(985018),
    b = n(371469);
function f(t) {
    let { disabled: e = !1, user: n, setNickname: a, nickname: i, error: s, hasNick: x } = t,
        A = r.useRef(null),
        g = r.useCallback(() => {
            a(""), A.current?.focus();
        }, [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e || null == n || n.id === N.default.getId()
                ? null
                : (0, l.jsx)(c.Z, {
                      type: c.Z.Types.WARNING,
                      className: b.Nr,
                      children: (0, l.jsx)(u.E, { variant: "text-md/normal", children: y.intl.string(y.t.dq3At2) }),
                  }),
            (0, l.jsx)(d.k, {
                label: e ? y.intl.string(y.t.EyA4q5) : y.intl.string(y.t["621LJD"]),
                disabled: e,
                inputRef: A,
                maxLength: C.d0r,
                value: i,
                placeholder: p.Ay.getName(n),
                onChange: a,
                autoFocus: !0,
            }),
            null != s
                ? (0, l.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: b.wt,
                      children: s,
                  })
                : null,
            x && !e
                ? (0, l.jsx)("div", {
                      className: b.cL,
                      children: (0, l.jsx)(o.Q, {
                          text: y.intl.string(y.t.aE02Rz),
                          onClick: g,
                          textVariant: "text-sm/normal",
                      }),
                  })
                : null,
        ],
    });
}
let _ = function (t) {
    let { transitionState: e, user: n, guildId: c, onClose: u, analyticsSource: d, analyticsLocations: o } = t,
        N = (0, a.bG)([g.Ay], () => (null != c ? g.Ay.getMember(c, n.id) : null)),
        p = (0, a.bG)([m.A, h.default, k.A], () => {
            let t = k.A.getGuild(c);
            return (
                null != t &&
                (h.default.getCurrentUser()?.id === n.id
                    ? m.A.can(C.xBc.CHANGE_NICKNAME, t) || m.A.can(C.xBc.MANAGE_NICKNAMES, t)
                    : m.A.canManageUser(C.xBc.MANAGE_NICKNAMES, n.id, t))
            );
        }),
        [b, _] = r.useState(!1),
        [j, M] = r.useState(N?.nick ?? ""),
        [v, G] = r.useState({});
    (0, x.Ay)(() => {
        E.default.track(C.HAw.OPEN_MODAL, { type: "Change Server Identity", location: C.liQ.GUILD_CHANNEL, source: d });
    });
    let I = (0, A.$9)(c, { location: o?.[0], targetUserId: n.id }),
        S = r.useCallback(
            async (t) => {
                t.preventDefault();
                let e = null;
                if ((j !== (N?.nick ?? "") && (e = { nick: j }), null == e)) return void u();
                try {
                    _(!0),
                        await i.Bo.patch({ url: C.Rsh.GUILD_MEMBER(c, n.id), body: e, rejectWithError: !1 }),
                        I(A.Nj.CHANGE_NICKNAME),
                        u();
                } catch (n) {
                    let t;
                    _(!1);
                    let e = n.body?.errors ?? null;
                    e?.nick != null
                        ? (t = e.nick?._errors?.[0]?.message || y.intl.string(y.t.xex86n))
                        : e?.username != null && (t = e.username?._errors?.[0]?.message || y.intl.string(y.t.xex86n)),
                        G({ nick: t });
                }
            },
            [c, j, u, n, N, I],
        );
    return (0, l.jsx)("form", {
        onSubmit: S,
        children: (0, l.jsx)(s.Modal, {
            transitionState: e,
            onClose: u,
            title: y.intl.string(y.t.dilOF6),
            actions: [
                { text: y.intl.string(y.t["ETE/oC"]), onClick: u, variant: "secondary" },
                { text: y.intl.string(y.t["R3BPH+"]), variant: "primary", type: "submit", disabled: b },
            ],
            children: (0, l.jsx)(f, {
                disabled: !p,
                user: n,
                error: v.nick,
                nickname: j,
                setNickname: M,
                hasNick: N?.nick != null,
            }),
        }),
    });
};

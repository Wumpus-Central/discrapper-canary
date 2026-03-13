n.d(e, { default: () => y });
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(562465),
    s = n(732955),
    c = n(397927),
    u = n(964486),
    d = n(504049),
    o = n(961350),
    x = n(696451),
    A = n(71393),
    N = n(576705),
    g = n(287809),
    k = n(954571),
    m = n(427262),
    h = n(652215),
    p = n(985018),
    C = n(398710);
function E(t) {
    let { disabled: e = !1, user: n, setNickname: a, nickname: i, error: s, hasNick: u } = t,
        d = r.useRef(null),
        x = r.useCallback(() => {
            a(""), d.current?.focus();
        }, [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e || null == n || n.id === o.default.getId()
                ? null
                : (0, l.jsx)(c.ZpM, {
                      type: c.ZpM.Types.WARNING,
                      className: C.Nr,
                      children: (0, l.jsx)(c.Text, { variant: "text-md/normal", children: p.intl.string(p.t.dq3At2) }),
                  }),
            (0, l.jsx)(c.ksK, {
                label: e ? p.intl.string(p.t.EyA4q5) : p.intl.string(p.t["621LJD"]),
                disabled: e,
                inputRef: d,
                maxLength: h.d0r,
                value: i,
                placeholder: m.Ay.getName(n),
                onChange: a,
                autoFocus: !0,
            }),
            null != s
                ? (0, l.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: C.wt,
                      children: s,
                  })
                : null,
            u && !e
                ? (0, l.jsx)("div", {
                      className: C.cL,
                      children: (0, l.jsx)(c.QWc, {
                          text: p.intl.string(p.t.aE02Rz),
                          onClick: x,
                          textVariant: "text-sm/normal",
                      }),
                  })
                : null,
        ],
    });
}
let y = function (t) {
    let { transitionState: e, user: n, guildId: c, onClose: o, analyticsSource: m, analyticsLocations: C } = t,
        y = (0, a.bG)([x.Ay], () => (null != c ? x.Ay.getMember(c, n.id) : null)),
        b = (0, a.bG)([N.A, g.default, A.A], () => {
            let t = A.A.getGuild(c);
            return (
                null != t &&
                (g.default.getCurrentUser()?.id === n.id
                    ? N.A.can(h.xBc.CHANGE_NICKNAME, t) || N.A.can(h.xBc.MANAGE_NICKNAMES, t)
                    : N.A.canManageUser(h.xBc.MANAGE_NICKNAMES, n.id, t))
            );
        }),
        [f, _] = r.useState(!1),
        [M, j] = r.useState(y?.nick ?? ""),
        [v, G] = r.useState({});
    (0, u.Ay)(() => {
        k.default.track(h.HAw.OPEN_MODAL, { type: "Change Server Identity", location: h.liQ.GUILD_CHANNEL, source: m });
    });
    let I = (0, d.$9)(c, { location: C?.[0], targetUserId: n.id }),
        S = r.useCallback(
            async (t) => {
                t.preventDefault();
                let e = null;
                if ((M !== (y?.nick ?? "") && (e = { nick: M }), null == e)) return void o();
                try {
                    _(!0),
                        await i.Bo.patch({ url: h.Rsh.GUILD_MEMBER(c, n.id), body: e, rejectWithError: !1 }),
                        I(d.Nj.CHANGE_NICKNAME),
                        o();
                } catch (n) {
                    let t;
                    _(!1);
                    let e = n.body?.errors ?? null;
                    e?.nick != null
                        ? (t = e.nick?._errors?.[0]?.message || p.intl.string(p.t.xex86n))
                        : e?.username != null && (t = e.username?._errors?.[0]?.message || p.intl.string(p.t.xex86n)),
                        G({ nick: t });
                }
            },
            [c, M, o, n, y, I],
        );
    return (0, l.jsx)("form", {
        onSubmit: S,
        children: (0, l.jsx)(s.aFV, {
            transitionState: e,
            onClose: o,
            title: p.intl.string(p.t.dilOF6),
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: o, variant: "secondary" },
                { text: p.intl.string(p.t["R3BPH+"]), variant: "primary", type: "submit", disabled: f },
            ],
            children: (0, l.jsx)(E, {
                disabled: !b,
                user: n,
                error: v.nick,
                nickname: M,
                setNickname: j,
                hasNick: y?.nick != null,
            }),
        }),
    });
};

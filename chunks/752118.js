r.d(t, { default: () => R });
var n = r(627968),
    a = r(64700),
    l = r(311907),
    i = r(562465),
    s = r(189213),
    c = r(359778),
    d = r(834730),
    u = r(292666),
    o = r(123292),
    N = r(964486),
    A = r(504049),
    x = r(961350),
    _ = r(696451),
    g = r(71393),
    m = r(576705),
    C = r(287809),
    h = r(954571),
    k = r(427262),
    E = r(652215),
    p = r(985018),
    y = r(371469);
function f(e) {
    let { disabled: t = !1, user: r, setNickname: l, nickname: i, error: s, hasNick: N } = e,
        A = a.useRef(null),
        _ = a.useCallback(() => {
            l(""), A.current?.focus();
        }, [l]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t || null == r || r.id === x.default.getId()
                ? null
                : (0, n.jsx)(c.Z, {
                      type: c.Z.Types.WARNING,
                      className: y.Nr,
                      children: (0, n.jsx)(d.E, { variant: "text-md/normal", children: p.intl.string(p.t.dq3At2) }),
                  }),
            (0, n.jsx)(u.k, {
                label: t ? p.intl.string(p.t.EyA4q5) : p.intl.string(p.t["621LJD"]),
                disabled: t,
                inputRef: A,
                maxLength: E.d0r,
                value: i,
                placeholder: k.Ay.getName(r),
                onChange: l,
                autoFocus: !0,
            }),
            null != s
                ? (0, n.jsx)(d.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: y.wt,
                      children: s,
                  })
                : null,
            N && !t
                ? (0, n.jsx)("div", {
                      className: y.cL,
                      children: (0, n.jsx)(o.Q, {
                          text: p.intl.string(p.t.aE02Rz),
                          onClick: _,
                          textVariant: "text-sm/normal",
                      }),
                  })
                : null,
        ],
    });
}
let R = function (e) {
    let { transitionState: t, user: r, guildId: c, onClose: d, analyticsSource: u, analyticsLocations: o } = e,
        x = (0, l.bG)([_.Ay], () => (null != c ? _.Ay.getMember(c, r.id) : null)),
        k = (0, l.bG)([m.A, C.default, g.A], () => {
            let e = g.A.getGuild(c);
            return (
                null != e &&
                (C.default.getCurrentUser()?.id === r.id
                    ? m.A.can(E.xBc.CHANGE_NICKNAME, e) || m.A.can(E.xBc.MANAGE_NICKNAMES, e)
                    : m.A.canManageUser(E.xBc.MANAGE_NICKNAMES, r.id, e))
            );
        }),
        [y, R] = a.useState(!1),
        [b, M] = a.useState(x?.nick ?? ""),
        [v, S] = a.useState({});
    (0, N.Ay)(() => {
        h.default.track(E.HAw.OPEN_MODAL, { type: "Change Server Identity", location: E.liQ.GUILD_CHANNEL, source: u });
    });
    let j = (0, A.$9)(c, { location: o?.[0], targetUserId: r.id }),
        I = a.useCallback(
            async (e) => {
                e.preventDefault();
                let t = null;
                if ((b !== (x?.nick ?? "") && (t = { nick: b }), null == t)) return void d();
                try {
                    R(!0),
                        await i.Bo.patch({ url: E.Rsh.GUILD_MEMBER(c, r.id), body: t, rejectWithError: !1 }),
                        j(A.Nj.CHANGE_NICKNAME),
                        d();
                } catch (r) {
                    let e;
                    R(!1);
                    let t = r.body?.errors ?? null;
                    t?.nick != null
                        ? (e = t.nick?._errors?.[0]?.message || p.intl.string(p.t.xex86n))
                        : t?.username != null && (e = t.username?._errors?.[0]?.message || p.intl.string(p.t.xex86n)),
                        S({ nick: e });
                }
            },
            [c, b, d, r, x, j],
        );
    return (0, n.jsx)("form", {
        onSubmit: I,
        children: (0, n.jsx)(s.Modal, {
            transitionState: t,
            onClose: d,
            title: p.intl.string(p.t.dilOF6),
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: d, variant: "secondary" },
                { text: p.intl.string(p.t["R3BPH+"]), variant: "primary", type: "submit", disabled: y },
            ],
            children: (0, n.jsx)(f, {
                disabled: !k,
                user: r,
                error: v.nick,
                nickname: b,
                setNickname: M,
                hasNick: x?.nick != null,
            }),
        }),
    });
};

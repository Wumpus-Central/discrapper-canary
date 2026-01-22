e.d(t, { default: () => C }), e(896048);
var n = e(627968),
    i = e(64700),
    r = e(311907),
    a = e(562465),
    s = e(732955),
    u = e(397927),
    c = e(964486),
    d = e(504049),
    o = e(961350),
    x = e(696451),
    A = e(71393),
    N = e(576705),
    v = e(287809),
    g = e(954571),
    m = e(427262),
    h = e(652215),
    k = e(985018),
    p = e(940892);
function f(l) {
    let { disabled: t = !1, user: e, setNickname: r, nickname: a, error: s, hasNick: c } = l,
        d = i.useRef(null),
        x = i.useCallback(() => {
            var l;
            r(""), null == (l = d.current) || l.focus();
        }, [r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t || null == e || e.id === o.default.getId()
                ? null
                : (0, n.jsx)(u.ZpM, {
                      type: u.ZpM.Types.WARNING,
                      className: p.Nr,
                      children: (0, n.jsx)(u.Text, {
                          variant: "text-md/normal",
                          children: k.intl.string(k.t.dq3At2),
                      }),
                  }),
            (0, n.jsx)(u.ksK, {
                label: t ? k.intl.string(k.t.EyA4q5) : k.intl.string(k.t["621LJD"]),
                disabled: t,
                inputRef: d,
                maxLength: h.d0r,
                value: a,
                placeholder: m.Ay.getName(e),
                onChange: r,
                autoFocus: !0,
            }),
            null != s
                ? (0, n.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: p.wt,
                      children: s,
                  })
                : null,
            c && !t
                ? (0, n.jsx)("div", {
                      className: p.cL,
                      children: (0, n.jsx)(u.QWc, {
                          text: k.intl.string(k.t.aE02Rz),
                          onClick: x,
                          textVariant: "text-sm/normal",
                      }),
                  })
                : null,
        ],
    });
}
let C = function (l) {
    var t;
    let { transitionState: e, user: u, guildId: o, onClose: m, analyticsSource: p, analyticsLocations: C } = l,
        E = (0, r.bG)([x.Ay], () => (null != o ? x.Ay.getMember(o, u.id) : null)),
        b = (0, r.bG)([N.A, v.default, A.A], () => {
            var l;
            let t = A.A.getGuild(o);
            return (
                null != t &&
                ((null == (l = v.default.getCurrentUser()) ? void 0 : l.id) === u.id
                    ? N.A.can(h.xBc.CHANGE_NICKNAME, t) || N.A.can(h.xBc.MANAGE_NICKNAMES, t)
                    : N.A.canManageUser(h.xBc.MANAGE_NICKNAMES, u.id, t))
            );
        }),
        [y, M] = i.useState(!1),
        [j, _] = i.useState(null != (t = null == E ? void 0 : E.nick) ? t : ""),
        [G, I] = i.useState({});
    (0, c.Ay)(() => {
        g.default.track(h.HAw.OPEN_MODAL, {
            type: "Change Server Identity",
            location: h.liQ.GUILD_CHANNEL,
            source: p,
        });
    });
    let S = (0, d.$9)(o, {
            location: null == C ? void 0 : C[0],
            targetUserId: u.id,
        }),
        L = i.useCallback(
            async (l) => {
                var t, e, n, i, r, s, c, x, A;
                l.preventDefault();
                let N = null;
                if (
                    (j !== (null != (t = null == E ? void 0 : E.nick) ? t : "") && ((N = null != N ? N : {}).nick = j),
                    null == N)
                )
                    return void m();
                try {
                    M(!0),
                        await a.Bo.patch({
                            url: h.Rsh.GUILD_MEMBER(o, u.id),
                            body: N,
                            rejectWithError: !1,
                        }),
                        S(d.Nj.CHANGE_NICKNAME),
                        m();
                } catch (a) {
                    let l;
                    M(!1);
                    let t = null != (e = null == (n = a.body) ? void 0 : n.errors) ? e : null;
                    (null == t ? void 0 : t.nick) != null
                        ? (l =
                              (null == (s = t.nick) || null == (r = s._errors) || null == (i = r[0])
                                  ? void 0
                                  : i.message) || k.intl.string(k.t.xex86n))
                        : (null == t ? void 0 : t.username) != null &&
                          (l =
                              (null == (A = t.username) || null == (x = A._errors) || null == (c = x[0])
                                  ? void 0
                                  : c.message) || k.intl.string(k.t.xex86n)),
                        I({ nick: l });
                }
            },
            [o, j, m, u, E, S],
        );
    return (0, n.jsx)("form", {
        onSubmit: L,
        children: (0, n.jsx)(s.aFV, {
            transitionState: e,
            onClose: m,
            title: k.intl.string(k.t.dilOF6),
            actions: [
                {
                    text: k.intl.string(k.t["ETE/oC"]),
                    onClick: m,
                    variant: "secondary",
                },
                {
                    text: k.intl.string(k.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: y,
                },
            ],
            children: (0, n.jsx)(f, {
                disabled: !b,
                user: u,
                error: G.nick,
                nickname: j,
                setNickname: _,
                hasNick: (null == E ? void 0 : E.nick) != null,
            }),
        }),
    });
};

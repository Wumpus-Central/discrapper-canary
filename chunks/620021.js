(n.d(e, { default: () => b }), n(388685));
var t = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    u = n(544891),
    d = n(755721),
    o = n(481060),
    c = n(493773),
    x = n(910693),
    h = n(314897),
    m = n(271383),
    N = n(430824),
    g = n(496675),
    k = n(594174),
    v = n(626135),
    p = n(51144),
    C = n(981631),
    E = n(388032),
    _ = n(696929);
function j(l) {
    let { disabled: e = !1, user: n, setNickname: i, nickname: s, error: u, hasNick: c } = l,
        x = r.useRef(null),
        m = r.useCallback(() => {
            var l;
            (i(''), null == (l = x.current) || l.focus());
        }, [i]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            e || null == n || n.id === h.default.getId()
                ? null
                : (0, t.jsx)(o.Zbd, {
                      type: o.Zbd.Types.WARNING,
                      className: _.card,
                      children: (0, t.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: E.intl.string(E.t.dq3At7)
                      })
                  }),
            (0, t.jsx)(o.vwX, {
                className: a()(_.itemGroup, { [_.disabled]: e }),
                children: e ? E.intl.string(E.t.EyA4q6) : E.intl.string(E.t['621LJC'])
            }),
            (0, t.jsx)(o.oil, {
                disabled: e,
                inputRef: x,
                maxLength: C.l$U,
                value: s,
                placeholder: p.ZP.getName(n),
                onChange: i,
                autoFocus: !0
            }),
            null != u
                ? (0, t.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      className: _.nickError,
                      children: u
                  })
                : null,
            c && !e
                ? (0, t.jsx)(d.zx, {
                      look: d.zx.Looks.LINK,
                      color: d.zx.Colors.LINK,
                      size: d.zx.Sizes.NONE,
                      onClick: m,
                      className: _.reset,
                      children: E.intl.string(E.t.aE02R0)
                  })
                : null
        ]
    });
}
let b = function (l) {
    var e;
    let { transitionState: n, user: i, guildId: a, onClose: d, analyticsSource: h, analyticsLocations: p } = l,
        b = (0, s.e7)([m.ZP], () => (null != a ? m.ZP.getMember(a, i.id) : null)),
        A = (0, s.e7)([g.Z, k.default, N.Z], () => {
            var l;
            let e = N.Z.getGuild(a);
            return null != e && ((null == (l = k.default.getCurrentUser()) ? void 0 : l.id) === i.id ? g.Z.can(C.Plq.CHANGE_NICKNAME, e) || g.Z.can(C.Plq.MANAGE_NICKNAMES, e) : g.Z.canManageUser(C.Plq.MANAGE_NICKNAMES, i.id, e));
        }),
        [f, y] = r.useState(!1),
        [I, M] = r.useState(null != (e = null == b ? void 0 : b.nick) ? e : ''),
        [Z, G] = r.useState({});
    (0, c.ZP)(() => {
        v.default.track(C.rMx.OPEN_MODAL, {
            type: 'Change Server Identity',
            location: C.ZY5.GUILD_CHANNEL,
            source: h
        });
    });
    let z = (0, x.sE)(a, {
            location: null == p ? void 0 : p[0],
            targetUserId: i.id
        }),
        P = r.useCallback(
            async (l) => {
                var e, n, t, r, s, o, c, h, m;
                l.preventDefault();
                let N = null;
                if ((I !== (null != (e = null == b ? void 0 : b.nick) ? e : '') && ((N = null != N ? N : {}).nick = I), null == N)) return void d();
                try {
                    (y(!0),
                        await u.tn.patch({
                            url: C.ANM.GUILD_MEMBER(a, i.id),
                            body: N,
                            rejectWithError: !1
                        }),
                        z(x.jQ.CHANGE_NICKNAME),
                        d());
                } catch (i) {
                    let l;
                    y(!1);
                    let e = null != (t = null == (n = i.body) ? void 0 : n.errors) ? t : null;
                    ((null == e ? void 0 : e.nick) != null ? (l = (null == (o = e.nick) || null == (s = o._errors) || null == (r = s[0]) ? void 0 : r.message) || E.intl.string(E.t.xex86u)) : (null == e ? void 0 : e.username) != null && (l = (null == (m = e.username) || null == (h = m._errors) || null == (c = h[0]) ? void 0 : c.message) || E.intl.string(E.t.xex86u)), G({ nick: l }));
                }
            },
            [a, I, d, i, b, z]
        );
    return (0, t.jsx)(o.Y0X, {
        'aria-label': E.intl.string(E.t['PKQB/P']),
        transitionState: n,
        parentComponent: 'ChangeGuildIdentity',
        children: (0, t.jsxs)('form', {
            onSubmit: P,
            children: [
                (0, t.jsx)(o.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: E.intl.string(E.t.dilOFx)
                    })
                }),
                (0, t.jsx)(o.hzk, {
                    className: _.modalContent,
                    children: (0, t.jsx)(j, {
                        disabled: !A,
                        user: i,
                        error: Z.nick,
                        nickname: I,
                        setNickname: M,
                        hasNick: (null == b ? void 0 : b.nick) != null
                    })
                }),
                (0, t.jsx)(o.mzw, {
                    children: (0, t.jsxs)(o.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, t.jsx)(o.zxk, {
                                variant: 'primary',
                                text: E.intl.string(E.t.R3BPHx),
                                type: 'submit',
                                disabled: f
                            }),
                            (0, t.jsx)(o.zxk, {
                                variant: 'secondary',
                                text: E.intl.string(E.t['ETE/oK']),
                                onClick: d
                            })
                        ]
                    })
                })
            ]
        })
    });
};

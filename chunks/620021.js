n.d(e, { default: () => b }), n(388685);
var t = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    u = n(544891),
    o = n(481060),
    d = n(493773),
    c = n(910693),
    x = n(314897),
    k = n(271383),
    N = n(430824),
    h = n(496675),
    m = n(594174),
    g = n(626135),
    v = n(51144),
    _ = n(981631),
    C = n(388032),
    E = n(245836);
function p(l) {
    let { disabled: e = !1, user: n, setNickname: i, nickname: s, error: u, hasNick: d } = l,
        c = r.useRef(null),
        k = r.useCallback(() => {
            var l;
            i(''), null == (l = c.current) || l.focus();
        }, [i]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            e || null == n || n.id === x.default.getId()
                ? null
                : (0, t.jsx)(o.Zbd, {
                      type: o.Zbd.Types.WARNING,
                      className: E.card,
                      children: (0, t.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          children: C.intl.string(C.t.dq3At7)
                      })
                  }),
            (0, t.jsx)(o.vwX, {
                className: a()(E.itemGroup, { [E.disabled]: e }),
                children: e ? C.intl.string(C.t.EyA4q6) : C.intl.string(C.t['621LJC'])
            }),
            (0, t.jsx)(o.oil, {
                disabled: e,
                inputRef: c,
                maxLength: _.l$U,
                value: s,
                placeholder: v.ZP.getName(n),
                onChange: i,
                autoFocus: !0
            }),
            null != u
                ? (0, t.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      className: E.nickError,
                      children: u
                  })
                : null,
            d && !e
                ? (0, t.jsx)(o.zxk, {
                      look: o.zxk.Looks.LINK,
                      color: o.zxk.Colors.LINK,
                      size: o.zxk.Sizes.NONE,
                      onClick: k,
                      className: E.reset,
                      children: C.intl.string(C.t.aE02R0)
                  })
                : null
        ]
    });
}
let b = function (l) {
    var e;
    let { transitionState: n, user: i, guildId: a, onClose: x, analyticsSource: v, analyticsLocations: b } = l,
        j = (0, s.e7)([k.ZP], () => (null != a ? k.ZP.getMember(a, i.id) : null)),
        A = (0, s.e7)([h.Z, m.default, N.Z], () => {
            var l;
            let e = N.Z.getGuild(a);
            return null != e && ((null == (l = m.default.getCurrentUser()) ? void 0 : l.id) === i.id ? h.Z.can(_.Plq.CHANGE_NICKNAME, e) || h.Z.can(_.Plq.MANAGE_NICKNAMES, e) : h.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, i.id, e));
        }),
        [f, I] = r.useState(!1),
        [M, Z] = r.useState(null != (e = null == j ? void 0 : j.nick) ? e : ''),
        [z, P] = r.useState({});
    (0, d.ZP)(() => {
        g.default.track(_.rMx.OPEN_MODAL, {
            type: 'Change Server Identity',
            location: _.ZY5.GUILD_CHANNEL,
            source: v
        });
    });
    let G = (0, c.sE)(a, {
            location: null == b ? void 0 : b[0],
            targetUserId: i.id
        }),
        L = r.useCallback(
            async (l) => {
                var e, n, t, r, s, o, d, k, N;
                l.preventDefault();
                let h = null;
                if ((M !== (null != (e = null == j ? void 0 : j.nick) ? e : '') && ((h = null != h ? h : {}).nick = M), null == h)) return void x();
                try {
                    I(!0),
                        await u.tn.patch({
                            url: _.ANM.GUILD_MEMBER(a, i.id),
                            body: h,
                            rejectWithError: !1
                        }),
                        G(c.jQ.CHANGE_NICKNAME),
                        x();
                } catch (i) {
                    let l;
                    I(!1);
                    let e = null != (t = null == (n = i.body) ? void 0 : n.errors) ? t : null;
                    (null == e ? void 0 : e.nick) != null ? (l = (null == (o = e.nick) || null == (s = o._errors) || null == (r = s[0]) ? void 0 : r.message) || C.intl.string(C.t.xex86u)) : (null == e ? void 0 : e.username) != null && (l = (null == (N = e.username) || null == (k = N._errors) || null == (d = k[0]) ? void 0 : d.message) || C.intl.string(C.t.xex86u)), P({ nick: l });
                }
            },
            [a, M, x, i, j, G]
        );
    return (0, t.jsx)(o.Y0X, {
        'aria-label': C.intl.string(C.t['PKQB/P']),
        transitionState: n,
        children: (0, t.jsxs)('form', {
            onSubmit: L,
            children: [
                (0, t.jsx)(o.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: C.intl.string(C.t.dilOFx)
                    })
                }),
                (0, t.jsx)(o.hzk, {
                    className: E.modalContent,
                    children: (0, t.jsx)(p, {
                        disabled: !A,
                        user: i,
                        error: z.nick,
                        nickname: M,
                        setNickname: Z,
                        hasNick: (null == j ? void 0 : j.nick) != null
                    })
                }),
                (0, t.jsxs)(o.mzw, {
                    children: [
                        (0, t.jsx)(o.zxk, {
                            type: 'submit',
                            disabled: f,
                            children: C.intl.string(C.t.R3BPHx)
                        }),
                        (0, t.jsx)(o.zxk, {
                            onClick: x,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: C.intl.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
};

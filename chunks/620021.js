e.d(n, { default: () => b }), e(388685);
var t = e(200651),
    r = e(192379),
    i = e(120356),
    a = e.n(i),
    s = e(442837),
    u = e(544891),
    o = e(481060),
    d = e(493773),
    c = e(910693),
    x = e(314897),
    k = e(271383),
    N = e(430824),
    m = e(496675),
    g = e(594174),
    h = e(626135),
    _ = e(51144),
    v = e(981631),
    C = e(388032),
    E = e(696929);
function p(l) {
    let { disabled: n = !1, user: e, setNickname: i, nickname: s, error: u, hasNick: d } = l,
        c = r.useRef(null),
        k = r.useCallback(() => {
            var l;
            i(''), null == (l = c.current) || l.focus();
        }, [i]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            n || null == e || e.id === x.default.getId()
                ? null
                : (0, t.jsx)(o.Zbd, {
                      type: o.Zbd.Types.WARNING,
                      className: E.card,
                      children: (0, t.jsx)(o.Text, {
                          className: E.warning,
                          variant: 'text-md/normal',
                          children: C.intl.string(C.t.dq3At7)
                      })
                  }),
            (0, t.jsx)(o.vwX, {
                className: a()(E.itemGroup, { [E.disabled]: n }),
                children: n ? C.intl.string(C.t.EyA4q6) : C.intl.string(C.t['621LJC'])
            }),
            (0, t.jsx)(o.oil, {
                disabled: n,
                inputRef: c,
                maxLength: v.l$U,
                value: s,
                placeholder: _.ZP.getName(e),
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
            d && !n
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
    var n;
    let { transitionState: e, user: i, guildId: a, onClose: x, analyticsSource: _, analyticsLocations: b } = l,
        j = (0, s.e7)([k.ZP], () => (null != a ? k.ZP.getMember(a, i.id) : null)),
        A = (0, s.e7)([m.Z, g.default, N.Z], () => {
            var l;
            let n = N.Z.getGuild(a);
            return null != n && ((null == (l = g.default.getCurrentUser()) ? void 0 : l.id) === i.id ? m.Z.can(v.Plq.CHANGE_NICKNAME, n) || m.Z.can(v.Plq.MANAGE_NICKNAMES, n) : m.Z.canManageUser(v.Plq.MANAGE_NICKNAMES, i.id, n));
        }),
        [f, I] = r.useState(!1),
        [M, Z] = r.useState(null != (n = null == j ? void 0 : j.nick) ? n : ''),
        [z, P] = r.useState({});
    (0, d.ZP)(() => {
        h.default.track(v.rMx.OPEN_MODAL, {
            type: 'Change Server Identity',
            location: v.ZY5.GUILD_CHANNEL,
            source: _
        });
    });
    let G = (0, c.sE)(a, {
            location: null == b ? void 0 : b[0],
            targetUserId: i.id
        }),
        L = r.useCallback(
            async (l) => {
                var n, e, t, r, s, o, d, k, N;
                l.preventDefault();
                let m = null;
                if ((M !== (null != (n = null == j ? void 0 : j.nick) ? n : '') && ((m = null != m ? m : {}).nick = M), null == m)) return void x();
                try {
                    I(!0),
                        await u.tn.patch({
                            url: v.ANM.GUILD_MEMBER(a, i.id),
                            body: m,
                            rejectWithError: !1
                        }),
                        G(c.jQ.CHANGE_NICKNAME),
                        x();
                } catch (i) {
                    let l;
                    I(!1);
                    let n = null != (t = null == (e = i.body) ? void 0 : e.errors) ? t : null;
                    (null == n ? void 0 : n.nick) != null ? (l = (null == (o = n.nick) || null == (s = o._errors) || null == (r = s[0]) ? void 0 : r.message) || C.intl.string(C.t.xex86u)) : (null == n ? void 0 : n.username) != null && (l = (null == (N = n.username) || null == (k = N._errors) || null == (d = k[0]) ? void 0 : d.message) || C.intl.string(C.t.xex86u)), P({ nick: l });
                }
            },
            [a, M, x, i, j, G]
        );
    return (0, t.jsx)(o.Y0X, {
        'aria-label': C.intl.string(C.t['PKQB/P']),
        transitionState: e,
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

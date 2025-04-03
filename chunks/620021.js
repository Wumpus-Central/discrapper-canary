n.d(e, { default: () => b }), n(47120);
var r = n(200651),
    t = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    u = n(544891),
    o = n(481060),
    d = n(493773),
    c = n(910693),
    N = n(314897),
    x = n(271383),
    k = n(430824),
    m = n(496675),
    g = n(594174),
    h = n(626135),
    _ = n(51144),
    v = n(981631),
    C = n(388032),
    E = n(696929);
function p(l) {
    let { disabled: e = !1, user: n, setNickname: a, nickname: s, error: u, hasNick: d } = l,
        c = t.useRef(null),
        x = t.useCallback(() => {
            var l;
            a(''), null == (l = c.current) || l.focus();
        }, [a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            e || null == n || n.id === N.default.getId()
                ? null
                : (0, r.jsx)(o.Zbd, {
                      type: o.Zbd.Types.WARNING,
                      className: E.card,
                      children: (0, r.jsx)(o.Text, {
                          className: E.warning,
                          variant: 'text-md/normal',
                          children: C.NW.string(C.t.dq3At7)
                      })
                  }),
            (0, r.jsx)(o.vwX, {
                className: i()(E.itemGroup, { [E.disabled]: e }),
                children: e ? C.NW.string(C.t.EyA4q6) : C.NW.string(C.t['621LJC'])
            }),
            (0, r.jsx)(o.oil, {
                disabled: e,
                inputRef: c,
                maxLength: v.l$U,
                value: s,
                placeholder: _.ZP.getName(n),
                onChange: a,
                autoFocus: !0
            }),
            null != u
                ? (0, r.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      className: E.nickError,
                      children: u
                  })
                : null,
            d && !e
                ? (0, r.jsx)(o.zxk, {
                      look: o.zxk.Looks.LINK,
                      color: o.zxk.Colors.LINK,
                      size: o.zxk.Sizes.NONE,
                      onClick: x,
                      className: E.reset,
                      children: C.NW.string(C.t.aE02R0)
                  })
                : null
        ]
    });
}
let b = function (l) {
    var e;
    let { transitionState: n, user: a, guildId: i, onClose: N, analyticsSource: _, analyticsLocations: b } = l,
        j = (0, s.e7)([x.ZP], () => (null != i ? x.ZP.getMember(i, a.id) : null)),
        A = (0, s.e7)([m.Z, g.default, k.Z], () => {
            var l;
            let e = k.Z.getGuild(i);
            return null != e && ((null == (l = g.default.getCurrentUser()) ? void 0 : l.id) === a.id ? m.Z.can(v.Plq.CHANGE_NICKNAME, e) || m.Z.can(v.Plq.MANAGE_NICKNAMES, e) : m.Z.canManageUser(v.Plq.MANAGE_NICKNAMES, a.id, e));
        }),
        [f, I] = t.useState(!1),
        [M, Z] = t.useState(null != (e = null == j ? void 0 : j.nick) ? e : ''),
        [z, P] = t.useState({});
    (0, d.ZP)(() => {
        h.default.track(v.rMx.OPEN_MODAL, {
            type: 'Change Server Identity',
            location: v.ZY5.GUILD_CHANNEL,
            source: _
        });
    });
    let W = (0, c.sE)(i, {
            location: null == b ? void 0 : b[0],
            targetUserId: a.id
        }),
        G = t.useCallback(
            async (l) => {
                var e, n, r, t, s, o, d, x, k;
                l.preventDefault();
                let m = null;
                if ((M !== (null != (e = null == j ? void 0 : j.nick) ? e : '') && ((m = null != m ? m : {}).nick = M), null == m)) return void N();
                try {
                    I(!0),
                        await u.tn.patch({
                            url: v.ANM.GUILD_MEMBER(i, a.id),
                            body: m,
                            rejectWithError: !1
                        }),
                        W(c.jQ.CHANGE_NICKNAME),
                        N();
                } catch (a) {
                    let l;
                    I(!1);
                    let e = null != (r = null == (n = a.body) ? void 0 : n.errors) ? r : null;
                    (null == e ? void 0 : e.nick) != null ? (l = (null == (o = e.nick) || null == (s = o._errors) || null == (t = s[0]) ? void 0 : t.message) || C.NW.string(C.t.xex86u)) : (null == e ? void 0 : e.username) != null && (l = (null == (k = e.username) || null == (x = k._errors) || null == (d = x[0]) ? void 0 : d.message) || C.NW.string(C.t.xex86u)), P({ nick: l });
                }
            },
            [i, M, N, a, j, W]
        );
    return (0, r.jsx)(o.Y0X, {
        'aria-label': C.NW.string(C.t['PKQB/P']),
        transitionState: n,
        children: (0, r.jsxs)('form', {
            onSubmit: G,
            children: [
                (0, r.jsx)(o.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: C.NW.string(C.t.dilOFx)
                    })
                }),
                (0, r.jsx)(o.hzk, {
                    className: E.modalContent,
                    children: (0, r.jsx)(p, {
                        disabled: !A,
                        user: a,
                        error: z.nick,
                        nickname: M,
                        setNickname: Z,
                        hasNick: (null == j ? void 0 : j.nick) != null
                    })
                }),
                (0, r.jsxs)(o.mzw, {
                    children: [
                        (0, r.jsx)(o.zxk, {
                            type: 'submit',
                            disabled: f,
                            children: C.NW.string(C.t.R3BPHx)
                        }),
                        (0, r.jsx)(o.zxk, {
                            onClick: N,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: C.NW.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
};

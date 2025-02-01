e.d(n, { default: () => b }), e(47120);
var i = e(200651),
    t = e(192379),
    r = e(120356),
    a = e.n(r),
    s = e(442837),
    o = e(544891),
    d = e(481060),
    u = e(493773),
    c = e(910693),
    x = e(314897),
    v = e(271383),
    k = e(430824),
    N = e(496675),
    m = e(594174),
    g = e(626135),
    h = e(51144),
    _ = e(981631),
    C = e(388032),
    E = e(53062);
function p(l) {
    let { disabled: n = !1, user: e, setNickname: r, nickname: s, error: o, hasNick: u } = l,
        c = t.useRef(null),
        v = t.useCallback(() => {
            var l;
            r(''), null === (l = c.current) || void 0 === l || l.focus();
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || null == e || e.id === x.default.getId()
                ? null
                : (0, i.jsx)(d.Zbd, {
                      type: d.Zbd.Types.WARNING,
                      className: E.card,
                      children: (0, i.jsx)(d.Text, {
                          className: E.warning,
                          variant: 'text-md/normal',
                          children: C.intl.string(C.t.dq3At7)
                      })
                  }),
            (0, i.jsx)(d.vwX, {
                className: a()(E.itemGroup, { [E.disabled]: n }),
                children: n ? C.intl.string(C.t.EyA4q6) : C.intl.string(C.t['621LJC'])
            }),
            (0, i.jsx)(d.oil, {
                disabled: n,
                inputRef: c,
                maxLength: _.l$U,
                value: s,
                placeholder: h.ZP.getName(e),
                onChange: r,
                autoFocus: !0
            }),
            null != o
                ? (0, i.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      className: E.nickError,
                      children: o
                  })
                : null,
            u && !n
                ? (0, i.jsx)(d.zxk, {
                      look: d.zxk.Looks.LINK,
                      color: d.zxk.Colors.LINK,
                      size: d.zxk.Sizes.NONE,
                      onClick: v,
                      className: E.reset,
                      children: C.intl.string(C.t.aE02R0)
                  })
                : null
        ]
    });
}
let b = function (l) {
    var n;
    let { transitionState: e, user: r, guildId: a, onClose: x, analyticsSource: h, analyticsLocations: b } = l,
        j = (0, s.e7)([v.ZP], () => (null != a ? v.ZP.getMember(a, r.id) : null)),
        A = (0, s.e7)([N.Z, m.default, k.Z], () => {
            var l;
            let n = k.Z.getGuild(a);
            return null != n && ((null === (l = m.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === r.id ? N.Z.can(_.Plq.CHANGE_NICKNAME, n) || N.Z.can(_.Plq.MANAGE_NICKNAMES, n) : N.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, r.id, n));
        }),
        [f, I] = t.useState(!1),
        [M, Z] = t.useState(null !== (n = null == j ? void 0 : j.nick) && void 0 !== n ? n : ''),
        [z, G] = t.useState({});
    (0, u.Z)(() => {
        g.default.track(_.rMx.OPEN_MODAL, {
            type: 'Change Server Identity',
            location: _.ZY5.GUILD_CHANNEL,
            source: h
        });
    });
    let L = (0, c.sE)(a, {
            location: null == b ? void 0 : b[0],
            targetUserId: r.id
        }),
        P = t.useCallback(
            async (l) => {
                var n, e, i, t, s, d, u, v, k;
                l.preventDefault();
                let N = null;
                if ((M !== (null !== (n = null == j ? void 0 : j.nick) && void 0 !== n ? n : '') && ((N = null != N ? N : {}).nick = M), null == N)) {
                    x();
                    return;
                }
                try {
                    I(!0),
                        await o.tn.patch({
                            url: _.ANM.GUILD_MEMBER(a, r.id),
                            body: N,
                            rejectWithError: !1
                        }),
                        L(c.jQ.CHANGE_NICKNAME),
                        x();
                } catch (r) {
                    let l;
                    I(!1);
                    let n = null !== (i = null === (e = r.body) || void 0 === e ? void 0 : e.errors) && void 0 !== i ? i : null;
                    (null == n ? void 0 : n.nick) != null ? (l = (null === (d = n.nick) || void 0 === d ? void 0 : null === (s = d._errors) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.message) || C.intl.string(C.t.xex86u)) : (null == n ? void 0 : n.username) != null && (l = (null === (k = n.username) || void 0 === k ? void 0 : null === (v = k._errors) || void 0 === v ? void 0 : null === (u = v[0]) || void 0 === u ? void 0 : u.message) || C.intl.string(C.t.xex86u)), G({ nick: l });
                }
            },
            [a, M, x, r, j, L]
        );
    return (0, i.jsx)(d.Y0X, {
        'aria-label': C.intl.string(C.t['PKQB/P']),
        transitionState: e,
        children: (0, i.jsxs)('form', {
            onSubmit: P,
            children: [
                (0, i.jsx)(d.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(d.X6q, {
                        variant: 'heading-lg/semibold',
                        children: C.intl.string(C.t.dilOFx)
                    })
                }),
                (0, i.jsx)(d.hzk, {
                    className: E.modalContent,
                    children: (0, i.jsx)(p, {
                        disabled: !A,
                        user: r,
                        error: z.nick,
                        nickname: M,
                        setNickname: Z,
                        hasNick: (null == j ? void 0 : j.nick) != null
                    })
                }),
                (0, i.jsxs)(d.mzw, {
                    children: [
                        (0, i.jsx)(d.zxk, {
                            type: 'submit',
                            disabled: f,
                            children: C.intl.string(C.t.R3BPHx)
                        }),
                        (0, i.jsx)(d.zxk, {
                            onClick: x,
                            look: d.zxk.Looks.LINK,
                            color: d.zxk.Colors.PRIMARY,
                            children: C.intl.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
};

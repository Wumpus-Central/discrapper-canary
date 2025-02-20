n.d(e, { default: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    t = n(120356),
    a = n.n(t),
    s = n(442837),
    o = n(544891),
    d = n(481060),
    u = n(493773),
    c = n(910693),
    N = n(314897),
    x = n(271383),
    v = n(430824),
    k = n(496675),
    m = n(594174),
    g = n(626135),
    h = n(51144),
    _ = n(981631),
    C = n(388032),
    E = n(697034);
function p(l) {
    let { disabled: e = !1, user: n, setNickname: t, nickname: s, error: o, hasNick: u } = l,
        c = r.useRef(null),
        x = r.useCallback(() => {
            var l;
            t(''), null === (l = c.current) || void 0 === l || l.focus();
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e || null == n || n.id === N.default.getId()
                ? null
                : (0, i.jsx)(d.Zbd, {
                      type: d.Zbd.Types.WARNING,
                      className: E.card,
                      children: (0, i.jsx)(d.Text, {
                          className: E.warning,
                          variant: 'text-md/normal',
                          children: C.NW.string(C.t.dq3At7)
                      })
                  }),
            (0, i.jsx)(d.vwX, {
                className: a()(E.itemGroup, { [E.disabled]: e }),
                children: e ? C.NW.string(C.t.EyA4q6) : C.NW.string(C.t['621LJC'])
            }),
            (0, i.jsx)(d.oil, {
                disabled: e,
                inputRef: c,
                maxLength: _.l$U,
                value: s,
                placeholder: h.ZP.getName(n),
                onChange: t,
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
            u && !e
                ? (0, i.jsx)(d.zxk, {
                      look: d.zxk.Looks.LINK,
                      color: d.zxk.Colors.LINK,
                      size: d.zxk.Sizes.NONE,
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
    let { transitionState: n, user: t, guildId: a, onClose: N, analyticsSource: h, analyticsLocations: b } = l,
        j = (0, s.e7)([x.ZP], () => (null != a ? x.ZP.getMember(a, t.id) : null)),
        A = (0, s.e7)([k.Z, m.default, v.Z], () => {
            var l;
            let e = v.Z.getGuild(a);
            return null != e && ((null === (l = m.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === t.id ? k.Z.can(_.Plq.CHANGE_NICKNAME, e) || k.Z.can(_.Plq.MANAGE_NICKNAMES, e) : k.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, t.id, e));
        }),
        [f, I] = r.useState(!1),
        [M, Z] = r.useState(null !== (e = null == j ? void 0 : j.nick) && void 0 !== e ? e : ''),
        [z, P] = r.useState({});
    (0, u.ZP)(() => {
        g.default.track(_.rMx.OPEN_MODAL, {
            type: 'Change Server Identity',
            location: _.ZY5.GUILD_CHANNEL,
            source: h
        });
    });
    let W = (0, c.sE)(a, {
            location: null == b ? void 0 : b[0],
            targetUserId: t.id
        }),
        G = r.useCallback(
            async (l) => {
                var e, n, i, r, s, d, u, x, v;
                l.preventDefault();
                let k = null;
                if ((M !== (null !== (e = null == j ? void 0 : j.nick) && void 0 !== e ? e : '') && ((k = null != k ? k : {}).nick = M), null == k)) {
                    N();
                    return;
                }
                try {
                    I(!0),
                        await o.tn.patch({
                            url: _.ANM.GUILD_MEMBER(a, t.id),
                            body: k,
                            rejectWithError: !1
                        }),
                        W(c.jQ.CHANGE_NICKNAME),
                        N();
                } catch (t) {
                    let l;
                    I(!1);
                    let e = null !== (i = null === (n = t.body) || void 0 === n ? void 0 : n.errors) && void 0 !== i ? i : null;
                    (null == e ? void 0 : e.nick) != null ? (l = (null === (d = e.nick) || void 0 === d ? void 0 : null === (s = d._errors) || void 0 === s ? void 0 : null === (r = s[0]) || void 0 === r ? void 0 : r.message) || C.NW.string(C.t.xex86u)) : (null == e ? void 0 : e.username) != null && (l = (null === (v = e.username) || void 0 === v ? void 0 : null === (x = v._errors) || void 0 === x ? void 0 : null === (u = x[0]) || void 0 === u ? void 0 : u.message) || C.NW.string(C.t.xex86u)), P({ nick: l });
                }
            },
            [a, M, N, t, j, W]
        );
    return (0, i.jsx)(d.Y0X, {
        'aria-label': C.NW.string(C.t['PKQB/P']),
        transitionState: n,
        children: (0, i.jsxs)('form', {
            onSubmit: G,
            children: [
                (0, i.jsx)(d.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(d.X6q, {
                        variant: 'heading-lg/semibold',
                        children: C.NW.string(C.t.dilOFx)
                    })
                }),
                (0, i.jsx)(d.hzk, {
                    className: E.modalContent,
                    children: (0, i.jsx)(p, {
                        disabled: !A,
                        user: t,
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
                            children: C.NW.string(C.t.R3BPHx)
                        }),
                        (0, i.jsx)(d.zxk, {
                            onClick: N,
                            look: d.zxk.Looks.LINK,
                            color: d.zxk.Colors.PRIMARY,
                            children: C.NW.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
};

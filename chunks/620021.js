e.d(n, { default: () => _ }), e(388685);
var t = e(951288),
    r = e(647438),
    i = e(442837),
    a = e(544891),
    s = e(755721),
    u = e(481060),
    o = e(493773),
    d = e(910693),
    c = e(314897),
    x = e(271383),
    h = e(430824),
    N = e(496675),
    g = e(594174),
    m = e(626135),
    k = e(51144),
    v = e(981631),
    C = e(388032),
    E = e(120526);
function p(l) {
    let { disabled: n = !1, user: e, setNickname: i, nickname: a, error: o, hasNick: d } = l,
        x = r.useRef(null),
        h = r.useCallback(() => {
            var l;
            i(""), null == (l = x.current) || l.focus();
        }, [i]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            n || null == e || e.id === c.default.getId()
                ? null
                : (0, t.jsx)(u.Zbd, {
                      type: u.Zbd.Types.WARNING,
                      className: E.card,
                      children: (0, t.jsx)(u.Text, {
                          variant: "text-md/normal",
                          children: C.intl.string(C.t.dq3At7),
                      }),
                  }),
            (0, t.jsx)(u.oil, {
                label: n ? C.intl.string(C.t.EyA4q6) : C.intl.string(C.t["621LJC"]),
                disabled: n,
                inputRef: x,
                maxLength: v.l$U,
                value: a,
                placeholder: k.ZP.getName(e),
                onChange: i,
                autoFocus: !0,
            }),
            null != o
                ? (0, t.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: "text-danger",
                      className: E.nickError,
                      children: o,
                  })
                : null,
            d && !n
                ? (0, t.jsx)(s.zx, {
                      look: s.zx.Looks.LINK,
                      color: s.zx.Colors.LINK,
                      size: s.zx.Sizes.NONE,
                      onClick: h,
                      className: E.reset,
                      children: C.intl.string(C.t.aE02R0),
                  })
                : null,
        ],
    });
}
let _ = function (l) {
    var n;
    let { transitionState: e, user: s, guildId: c, onClose: k, analyticsSource: _, analyticsLocations: j } = l,
        b = (0, i.e7)([x.ZP], () => (null != c ? x.ZP.getMember(c, s.id) : null)),
        A = (0, i.e7)([N.Z, g.default, h.Z], () => {
            var l;
            let n = h.Z.getGuild(c);
            return (
                null != n &&
                ((null == (l = g.default.getCurrentUser()) ? void 0 : l.id) === s.id
                    ? N.Z.can(v.Plq.CHANGE_NICKNAME, n) || N.Z.can(v.Plq.MANAGE_NICKNAMES, n)
                    : N.Z.canManageUser(v.Plq.MANAGE_NICKNAMES, s.id, n))
            );
        }),
        [f, y] = r.useState(!1),
        [I, M] = r.useState(null != (n = null == b ? void 0 : b.nick) ? n : ""),
        [Z, P] = r.useState({});
    (0, o.ZP)(() => {
        m.default.track(v.rMx.OPEN_MODAL, {
            type: "Change Server Identity",
            location: v.ZY5.GUILD_CHANNEL,
            source: _,
        });
    });
    let G = (0, d.sE)(c, {
            location: null == j ? void 0 : j[0],
            targetUserId: s.id,
        }),
        S = r.useCallback(
            async (l) => {
                var n, e, t, r, i, u, o, x, h;
                l.preventDefault();
                let N = null;
                if (
                    (I !== (null != (n = null == b ? void 0 : b.nick) ? n : "") && ((N = null != N ? N : {}).nick = I),
                    null == N)
                )
                    return void k();
                try {
                    y(!0),
                        await a.tn.patch({
                            url: v.ANM.GUILD_MEMBER(c, s.id),
                            body: N,
                            rejectWithError: !1,
                        }),
                        G(d.jQ.CHANGE_NICKNAME),
                        k();
                } catch (a) {
                    let l;
                    y(!1);
                    let n = null != (t = null == (e = a.body) ? void 0 : e.errors) ? t : null;
                    (null == n ? void 0 : n.nick) != null
                        ? (l =
                              (null == (u = n.nick) || null == (i = u._errors) || null == (r = i[0])
                                  ? void 0
                                  : r.message) || C.intl.string(C.t.xex86u))
                        : (null == n ? void 0 : n.username) != null &&
                          (l =
                              (null == (h = n.username) || null == (x = h._errors) || null == (o = x[0])
                                  ? void 0
                                  : o.message) || C.intl.string(C.t.xex86u)),
                        P({ nick: l });
                }
            },
            [c, I, k, s, b, G],
        );
    return (0, t.jsx)(u.Y0X, {
        "aria-label": C.intl.string(C.t["PKQB/P"]),
        transitionState: e,
        parentComponent: "ChangeGuildIdentity",
        children: (0, t.jsxs)("form", {
            onSubmit: S,
            children: [
                (0, t.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.dilOFx),
                    }),
                }),
                (0, t.jsx)(u.hzk, {
                    className: E.modalContent,
                    children: (0, t.jsx)(p, {
                        disabled: !A,
                        user: s,
                        error: Z.nick,
                        nickname: I,
                        setNickname: M,
                        hasNick: (null == b ? void 0 : b.nick) != null,
                    }),
                }),
                (0, t.jsx)(u.mzw, {
                    children: (0, t.jsxs)(u.ButtonGroup, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, t.jsx)(u.Button, {
                                variant: "primary",
                                text: C.intl.string(C.t.R3BPHx),
                                type: "submit",
                                disabled: f,
                            }),
                            (0, t.jsx)(u.Button, {
                                variant: "secondary",
                                text: C.intl.string(C.t["ETE/oK"]),
                                onClick: k,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
};

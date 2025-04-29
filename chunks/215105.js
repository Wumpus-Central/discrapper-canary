n.d(t, { Z: () => N }), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(106351),
    l = n(507274),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    f = n(131704),
    _ = n(823379),
    p = n(5192),
    h = n(51144),
    m = n(698305),
    g = n(510659),
    E = n(810097),
    b = n(652853),
    y = n(228168),
    O = n(420212),
    v = n(388032),
    I = n(42328);
let S = (0, f.kt)({
        id: '1',
        type: s.d.DM
    }),
    T = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case y.n_.ACTIVITY:
                let o = v.intl.formatToPlainString(v.t.WmvMCg, { username: n }),
                    a = '\n> '.concat(i);
                return null != i ? ''.concat(E.jd).concat(o, '*').concat(a, '\n').concat(t) : ''.concat(E.jd).concat(o, '*\n').concat(t);
            case y.n_.AVATAR:
                let s = v.intl.formatToPlainString(v.t.lpaBsL, { username: n });
                return ''.concat(E.jd).concat(s, '*\n').concat(t);
            case y.n_.STATUS:
                let l = v.intl.formatToPlainString(v.t.lFXgFR, { username: n }),
                    c = '\n> '.concat(i);
                return null != i ? ''.concat(E.jd).concat(l, '*').concat(c, '\n').concat(t) : ''.concat(E.jd).concat(l, '*\n').concat(t);
            default:
                (0, _.vE)(r);
        }
    },
    A = (e) => {
        switch (e) {
            case y.n_.ACTIVITY:
                return v.t.Qn081N;
            case y.n_.AVATAR:
                return v.t.xGNPFB;
            case y.n_.STATUS:
                return v.t.g9BTCA;
            default:
                (0, _.vE)(e);
        }
    };
function N(e) {
    let { user: t, guildId: n, channelId: o, sourceType: s, sourceDetails: f, setPopoutRef: _, modalKey: E, onAction: N, onClose: C, entry: R } = e,
        { resetInteraction: P, setInteractionToast: w } = (0, g.Xo)(),
        { primaryColor: D } = (0, b.z)(),
        [L, x] = i.useState(''),
        [M, k] = i.useState((0, u.JM)(L)),
        j = i.useRef(!1),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                e.key === O.vn.ESCAPE && (e.stopPropagation(), P());
            },
            [P]
        );
    i.useEffect(() => {
        null == _ || _(null == U ? void 0 : U.current);
    }, [U, _]);
    let B = async (e) => {
            if (null == e) return;
            s === y.n_.AVATAR ? N({ action: 'SEND_REPLY_AVATAR' }) : s === y.n_.STATUS ? N({ action: 'SEND_REPLY_CUSTOM_STATUS' }) : N({ action: 'SEND_REPLY_ACTIVITY' });
            let n = T({
                input: e,
                username: h.ZP.getName(t),
                sourceType: s,
                sourceDetails: f
            });
            w(null);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1,
                    entry: R
                });
            } catch (e) {}
            w(y.P.REPLY);
        },
        V = {
            [I.status]: s === y.n_.STATUS,
            [I.avatar]: s === y.n_.AVATAR,
            [I.activity]: s === y.n_.ACTIVITY
        };
    return (0, r.jsx)(l.V, {
        ref: U,
        onKeyDown: G,
        children: (0, r.jsx)('div', {
            className: a()(I.container, V, { [I.customProfileTheme]: null != D }),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: E,
                emojiPickerCloseOnModalOuterClick: !0,
                className: I.input,
                innerClassName: I.inputInner,
                editorClassName: I.editor,
                type: c.Ie.USER_PROFILE_REPLY,
                placeholder: v.intl.formatToPlainString(A(s), { username: p.ZP.getName(n, o, t) }),
                channel: S,
                textValue: L,
                richValue: M,
                onChange: (e, t, n) => {
                    t !== L && (x(t), k(n));
                },
                focused: j.current,
                onFocus: () => {
                    j.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    try {
                        return (
                            await B(n),
                            P(),
                            null == C || C(),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (e) {
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    }
                }
            })
        })
    });
}

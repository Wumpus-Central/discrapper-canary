n.d(t, { Z: () => A }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
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
    v = n(420212),
    O = n(388032),
    I = n(42328);
let S = (0, f.kt)({
        id: '1',
        type: s.d.DM
    }),
    T = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case y.n_.ACTIVITY:
                let o = O.NW.formatToPlainString(O.t.WmvMCg, { username: n }),
                    a = '\n> '.concat(i);
                return null != i ? ''.concat(E.jd).concat(o, '*').concat(a, '\n').concat(t) : ''.concat(E.jd).concat(o, '*\n').concat(t);
            case y.n_.AVATAR:
                let s = O.NW.formatToPlainString(O.t.lpaBsL, { username: n });
                return ''.concat(E.jd).concat(s, '*\n').concat(t);
            case y.n_.STATUS:
                let l = O.NW.formatToPlainString(O.t.lFXgFR, { username: n }),
                    c = '\n> '.concat(i);
                return null != i ? ''.concat(E.jd).concat(l, '*').concat(c, '\n').concat(t) : ''.concat(E.jd).concat(l, '*\n').concat(t);
            default:
                (0, _.vE)(r);
        }
    },
    N = (e) => {
        switch (e) {
            case y.n_.ACTIVITY:
                return O.t.Qn081N;
            case y.n_.AVATAR:
                return O.t.xGNPFB;
            case y.n_.STATUS:
                return O.t.g9BTCA;
            default:
                (0, _.vE)(e);
        }
    };
function A(e) {
    let { user: t, guildId: n, channelId: o, profileType: s, sourceType: f, sourceDetails: _, setPopoutRef: E, modalKey: A, onAction: C, onClose: R, entry: P } = e,
        { resetInteraction: w, setInteractionToast: D } = (0, g.Xo)(),
        { primaryColor: L } = (0, b.z)(),
        [x, M] = i.useState(''),
        [k, j] = i.useState((0, u.JM)(x)),
        U = i.useRef(!1),
        G = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.key === v.vn.ESCAPE && (e.stopPropagation(), w());
            },
            [w]
        );
    i.useEffect(() => {
        null == E || E(null == G ? void 0 : G.current);
    }, [G, E]);
    let F = async (e) => {
            if (null == e) return;
            f === y.n_.AVATAR ? C({ action: 'SEND_REPLY_AVATAR' }) : f === y.n_.STATUS ? C({ action: 'SEND_REPLY_CUSTOM_STATUS' }) : C({ action: 'SEND_REPLY_ACTIVITY' });
            let n = T({
                input: e,
                username: h.ZP.getName(t),
                sourceType: f,
                sourceDetails: _
            });
            D(null);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1,
                    entry: P
                });
            } catch (e) {}
            D(y.P.REPLY);
        },
        V = {
            [I.biteSize]: s === y.y0.BITE_SIZE,
            [I.panel]: s === y.y0.PANEL,
            [I.fullSize]: s === y.y0.FULL_SIZE
        },
        Z = {
            [I.status]: f === y.n_.STATUS,
            [I.avatar]: f === y.n_.AVATAR,
            [I.activity]: f === y.n_.ACTIVITY
        };
    return (0, r.jsx)(l.V, {
        ref: G,
        onKeyDown: B,
        children: (0, r.jsx)('div', {
            className: a()(I.container, V, Z, { [I.customProfileTheme]: null != L }),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: A,
                emojiPickerCloseOnModalOuterClick: !0,
                className: I.input,
                innerClassName: I.inputInner,
                editorClassName: I.editor,
                type: c.Ie.USER_PROFILE_REPLY,
                placeholder: O.NW.formatToPlainString(N(f), { username: p.ZP.getName(n, o, t) }),
                channel: S,
                textValue: x,
                richValue: k,
                onChange: (e, t, n) => {
                    t !== x && (M(t), j(n));
                },
                focused: U.current,
                onFocus: () => {
                    U.current = !0;
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
                            await F(n),
                            w(),
                            null == R || R(),
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

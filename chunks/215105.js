n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(507274),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    f = n(131704),
    _ = n(823379),
    p = n(5192),
    h = n(51144),
    m = n(698305),
    g = n(510659),
    E = n(810097),
    v = n(652853),
    y = n(228168),
    I = n(420212),
    T = n(388032),
    b = n(583677);
let S = (0, f.kt)({
        id: '1',
        type: o.d.DM
    }),
    A = (e) => {
        let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
        switch (i) {
            case y.n_.ACTIVITY:
                let a = T.intl.formatToPlainString(T.t.WmvMCg, { username: n }),
                    s = '\n> '.concat(r);
                return null != r ? ''.concat(E.jd).concat(a, '*').concat(s, '\n').concat(t) : ''.concat(E.jd).concat(a, '*\n').concat(t);
            case y.n_.AVATAR:
                let o = T.intl.formatToPlainString(T.t.lpaBsL, { username: n });
                return ''.concat(E.jd).concat(o, '*\n').concat(t);
            case y.n_.STATUS:
                let l = T.intl.formatToPlainString(T.t.lFXgFR, { username: n }),
                    u = '\n> '.concat(r);
                return null != r ? ''.concat(E.jd).concat(l, '*').concat(u, '\n').concat(t) : ''.concat(E.jd).concat(l, '*\n').concat(t);
            default:
                (0, _.vE)(i);
        }
    },
    N = (e) => {
        switch (e) {
            case y.n_.ACTIVITY:
                return T.t.Qn081N;
            case y.n_.AVATAR:
                return T.t.xGNPFB;
            case y.n_.STATUS:
                return T.t.g9BTCA;
            default:
                (0, _.vE)(e);
        }
    };
function C(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: f, sourceDetails: _, setPopoutRef: E, modalKey: C, onAction: R, onClose: O, entry: D } = e,
        { resetInteraction: x, setInteractionToast: L } = (0, g.Xo)(),
        { primaryColor: P } = (0, v.z)(),
        [w, M] = r.useState(''),
        [k, U] = r.useState((0, c.JM)(w)),
        G = r.useRef(!1),
        B = r.useRef(null),
        Z = r.useCallback(
            (e) => {
                e.key === I.vn.ESCAPE && (e.stopPropagation(), x());
            },
            [x]
        );
    r.useEffect(() => {
        null == E || E(null == B ? void 0 : B.current);
    }, [B, E]);
    let F = async (e) => {
            if (null == e) return;
            f === y.n_.AVATAR ? R({ action: 'SEND_REPLY_AVATAR' }) : f === y.n_.STATUS ? R({ action: 'SEND_REPLY_CUSTOM_STATUS' }) : R({ action: 'SEND_REPLY_ACTIVITY' });
            let n = A({
                input: e,
                username: h.ZP.getName(t),
                sourceType: f,
                sourceDetails: _
            });
            L(null);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1,
                    entry: D
                });
            } catch (e) {}
            L(y.P.REPLY);
        },
        V = {
            [b.biteSize]: o === y.y0.BITE_SIZE,
            [b.panel]: o === y.y0.PANEL,
            [b.fullSize]: o === y.y0.FULL_SIZE
        },
        j = {
            [b.status]: f === y.n_.STATUS,
            [b.avatar]: f === y.n_.AVATAR,
            [b.activity]: f === y.n_.ACTIVITY
        };
    return (0, i.jsx)(l.V, {
        ref: B,
        onKeyDown: Z,
        children: (0, i.jsx)('div', {
            className: s()(b.container, V, j, { [b.customProfileTheme]: null != P }),
            children: (0, i.jsx)(d.Z, {
                parentModalKey: C,
                emojiPickerCloseOnModalOuterClick: !0,
                className: b.input,
                innerClassName: b.inputInner,
                editorClassName: b.editor,
                type: u.Ie.USER_PROFILE_REPLY,
                placeholder: T.intl.formatToPlainString(N(f), { username: p.ZP.getName(n, a, t) }),
                channel: S,
                textValue: w,
                richValue: k,
                onChange: (e, t, n) => {
                    t !== w && (M(t), U(n));
                },
                focused: G.current,
                onFocus: () => {
                    G.current = !0;
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
                            x(),
                            null == O || O(),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch {
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

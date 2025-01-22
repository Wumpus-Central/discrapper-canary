r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(106351),
    c = r(507274),
    d = r(541716),
    f = r(752305),
    p = r(893718),
    h = r(131704),
    _ = r(823379),
    m = r(5192),
    g = r(51144),
    E = r(698305),
    v = r(510659),
    y = r(810097),
    b = r(652853),
    I = r(228168),
    T = r(420212),
    S = r(388032),
    A = r(583677);
let C = (0, h.kt)({
        id: '1',
        type: u.d.DM
    }),
    N = (e) => {
        let { input: n, username: r, sourceType: i, sourceDetails: a } = e;
        switch (i) {
            case I.n_.ACTIVITY:
                let o = S.intl.formatToPlainString(S.t.WmvMCg, { username: r }),
                    s = '\n> '.concat(a);
                return null != a ? ''.concat(y.jd).concat(o, '*').concat(s, '\n').concat(n) : ''.concat(y.jd).concat(o, '*\n').concat(n);
            case I.n_.AVATAR:
                let l = S.intl.formatToPlainString(S.t.lpaBsL, { username: r });
                return ''.concat(y.jd).concat(l, '*\n').concat(n);
            case I.n_.STATUS:
                let u = S.intl.formatToPlainString(S.t.lFXgFR, { username: r }),
                    c = '\n> '.concat(a);
                return null != a ? ''.concat(y.jd).concat(u, '*').concat(c, '\n').concat(n) : ''.concat(y.jd).concat(u, '*\n').concat(n);
            default:
                (0, _.vE)(i);
        }
    },
    R = (e) => {
        switch (e) {
            case I.n_.ACTIVITY:
                return S.t.Qn081N;
            case I.n_.AVATAR:
                return S.t.xGNPFB;
            case I.n_.STATUS:
                return S.t.g9BTCA;
            default:
                (0, _.vE)(e);
        }
    };
function O(e) {
    let { user: n, guildId: r, channelId: i, profileType: s, sourceType: u, sourceDetails: h, setPopoutRef: _, modalKey: y, onAction: O, onClose: D, entry: x } = e,
        { resetInteraction: L, setInteractionToast: w } = (0, v.Xo)(),
        { primaryColor: P } = (0, b.z)(),
        [M, k] = o.useState(''),
        [U, B] = o.useState((0, f.JM)(M)),
        G = o.useRef(!1),
        Z = o.useRef(null),
        F = o.useCallback(
            (e) => {
                e.key === T.vn.ESCAPE && (e.stopPropagation(), L());
            },
            [L]
        );
    o.useEffect(() => {
        null == _ || _(null == Z ? void 0 : Z.current);
    }, [Z, _]);
    let V = async (e) => {
            if (null == e) return;
            u === I.n_.AVATAR ? O({ action: 'SEND_REPLY_AVATAR' }) : u === I.n_.STATUS ? O({ action: 'SEND_REPLY_CUSTOM_STATUS' }) : O({ action: 'SEND_REPLY_ACTIVITY' });
            let r = N({
                input: e,
                username: g.ZP.getName(n),
                sourceType: u,
                sourceDetails: h
            });
            w(null);
            try {
                await (0, E.Z)({
                    userId: n.id,
                    content: r,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1,
                    entry: x
                });
            } catch (e) {}
            w(I.P.REPLY);
        },
        j = {
            [A.biteSize]: s === I.y0.BITE_SIZE,
            [A.panel]: s === I.y0.PANEL,
            [A.fullSize]: s === I.y0.FULL_SIZE
        },
        H = {
            [A.status]: u === I.n_.STATUS,
            [A.avatar]: u === I.n_.AVATAR,
            [A.activity]: u === I.n_.ACTIVITY
        };
    return (0, a.jsx)(c.V, {
        ref: Z,
        onKeyDown: F,
        children: (0, a.jsx)('div', {
            className: l()(A.container, j, H, { [A.customProfileTheme]: null != P }),
            children: (0, a.jsx)(p.Z, {
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: A.inner,
                editorClassName: A.editor,
                type: d.Ie.USER_PROFILE_REPLY,
                placeholder: S.intl.formatToPlainString(R(u), { username: m.ZP.getName(r, i, n) }),
                channel: C,
                textValue: M,
                richValue: U,
                onChange: (e, n, r) => {
                    if (n !== M) k(n), B(r);
                },
                focused: G.current,
                onFocus: () => {
                    G.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: n } = e,
                        r = n.trim();
                    if (0 === r.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    try {
                        return (
                            await V(r),
                            L(),
                            null == D || D(),
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

r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(106351),
    c = r(507274),
    d = r(541716),
    f = r(752305),
    _ = r(893718),
    h = r(131704),
    p = r(823379),
    m = r(5192),
    g = r(51144),
    E = r(698305),
    v = r(510659),
    I = r(810097),
    T = r(652853),
    b = r(228168),
    y = r(420212),
    S = r(388032),
    A = r(583677);
let N = (0, h.kt)({
        id: '1',
        type: u.d.DM
    }),
    C = (e) => {
        let { input: n, username: r, sourceType: i, sourceDetails: a } = e;
        switch (i) {
            case b.n_.ACTIVITY:
                let s = S.intl.formatToPlainString(S.t.WmvMCg, { username: r }),
                    o = '\n> '.concat(a);
                return null != a ? ''.concat(I.jd).concat(s, '*').concat(o, '\n').concat(n) : ''.concat(I.jd).concat(s, '*\n').concat(n);
            case b.n_.AVATAR:
                let l = S.intl.formatToPlainString(S.t.lpaBsL, { username: r });
                return ''.concat(I.jd).concat(l, '*\n').concat(n);
            case b.n_.STATUS:
                let u = S.intl.formatToPlainString(S.t.lFXgFR, { username: r }),
                    c = '\n> '.concat(a);
                return null != a ? ''.concat(I.jd).concat(u, '*').concat(c, '\n').concat(n) : ''.concat(I.jd).concat(u, '*\n').concat(n);
            default:
                (0, p.vE)(i);
        }
    },
    R = (e) => {
        switch (e) {
            case b.n_.ACTIVITY:
                return S.t.Qn081N;
            case b.n_.AVATAR:
                return S.t.xGNPFB;
            case b.n_.STATUS:
                return S.t.g9BTCA;
            default:
                (0, p.vE)(e);
        }
    };
function O(e) {
    let { user: n, guildId: r, channelId: i, profileType: o, sourceType: u, sourceDetails: h, setPopoutRef: p, modalKey: I, onAction: O, onClose: D, entry: L } = e,
        { resetInteraction: x, setInteractionToast: w } = (0, v.Xo)(),
        { primaryColor: P } = (0, T.z)(),
        [M, k] = s.useState(''),
        [U, B] = s.useState((0, f.JM)(M)),
        G = s.useRef(!1),
        Z = s.useRef(null),
        F = s.useCallback(
            (e) => {
                e.key === y.vn.ESCAPE && (e.stopPropagation(), x());
            },
            [x]
        );
    s.useEffect(() => {
        null == p || p(null == Z ? void 0 : Z.current);
    }, [Z, p]);
    let V = async (e) => {
            if (null == e) return;
            u === b.n_.AVATAR ? O({ action: 'SEND_REPLY_AVATAR' }) : u === b.n_.STATUS ? O({ action: 'SEND_REPLY_CUSTOM_STATUS' }) : O({ action: 'SEND_REPLY_ACTIVITY' });
            let r = C({
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
                    entry: L
                });
            } catch (e) {}
            w(b.P.REPLY);
        },
        j = {
            [A.biteSize]: o === b.y0.BITE_SIZE,
            [A.panel]: o === b.y0.PANEL,
            [A.fullSize]: o === b.y0.FULL_SIZE
        },
        H = {
            [A.status]: u === b.n_.STATUS,
            [A.avatar]: u === b.n_.AVATAR,
            [A.activity]: u === b.n_.ACTIVITY
        };
    return (0, a.jsx)(c.V, {
        ref: Z,
        onKeyDown: F,
        children: (0, a.jsx)('div', {
            className: l()(A.container, j, H, { [A.customProfileTheme]: null != P }),
            children: (0, a.jsx)(_.Z, {
                parentModalKey: I,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: A.inner,
                editorClassName: A.editor,
                type: d.Ie.USER_PROFILE_REPLY,
                placeholder: S.intl.formatToPlainString(R(u), { username: m.ZP.getName(r, i, n) }),
                channel: N,
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
                            x(),
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

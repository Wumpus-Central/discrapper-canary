n.d(t, { Z: () => C }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(106351),
    l = n(507274),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    f = n(131704),
    p = n(823379),
    _ = n(5192),
    m = n(51144),
    h = n(698305),
    g = n(510659),
    E = n(810097),
    b = n(652853),
    y = n(228168),
    O = n(295907),
    v = n(388032),
    S = n(36190);
let I = (0, f.createChannelRecord)({
        id: "1",
        type: s.d.DM,
    }),
    T = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case y.n_.ACTIVITY:
                let a = v.intl.formatToPlainString(v.t.WmvMCo, { username: n }),
                    o = "\n> ".concat(i);
                return null != i
                    ? "".concat(E.jd).concat(a, "*").concat(o, "\n").concat(t)
                    : "".concat(E.jd).concat(a, "*\n").concat(t);
            case y.n_.AVATAR:
                let s = v.intl.formatToPlainString(v.t.lpaBsB, { username: n });
                return "".concat(E.jd).concat(s, "*\n").concat(t);
            case y.n_.STATUS:
                let l = v.intl.formatToPlainString(v.t.lFXgFV, { username: n }),
                    c = "\n> ".concat(i);
                return null != i
                    ? "".concat(E.jd).concat(l, "*").concat(c, "\n").concat(t)
                    : "".concat(E.jd).concat(l, "*\n").concat(t);
            default:
                (0, p.vE)(r);
        }
    },
    A = (e) => {
        switch (e) {
            case y.n_.ACTIVITY:
                return v.t.Qn081O;
            case y.n_.AVATAR:
                return v.t.xGNPFK;
            case y.n_.STATUS:
                return v.t.g9BTCM;
            default:
                (0, p.vE)(e);
        }
    };
function C(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            sourceType: s,
            sourceDetails: f,
            setPopoutRef: p,
            modalKey: E,
            onAction: C,
            onClose: N,
            entry: P,
        } = e,
        { resetInteraction: R, setInteractionToast: w } = (0, g.Xo)(),
        { primaryColor: D } = (0, b.z)(),
        [x, L] = i.useState(""),
        [j, M] = i.useState((0, u.JM)(x)),
        k = i.useRef(!1),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                e.key === O.vn.ESCAPE && (e.stopPropagation(), R());
            },
            [R],
        );
    i.useEffect(() => {
        null == p || p(null == U ? void 0 : U.current);
    }, [U, p]);
    let Z = async (e) => {
            if (null == e) return;
            s === y.n_.AVATAR
                ? C({ action: "SEND_REPLY_AVATAR" })
                : s === y.n_.STATUS
                  ? C({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : C({ action: "SEND_REPLY_ACTIVITY" });
            let n = T({
                input: e,
                username: m.ZP.getName(t),
                sourceType: s,
                sourceDetails: f,
            });
            w(null);
            try {
                await (0, h.Z)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: P,
                });
            } catch (e) {}
            w(y.P.REPLY);
        },
        B = {
            [S.status]: s === y.n_.STATUS,
            [S.avatar]: s === y.n_.AVATAR,
            [S.activity]: s === y.n_.ACTIVITY,
        };
    return (0, r.jsx)(l.V, {
        ref: U,
        onKeyDown: G,
        children: (0, r.jsx)("div", {
            className: o()(S.container, B, { [S.customProfileTheme]: null != D }),
            children: (0, r.jsx)(d.ZP, {
                parentModalKey: E,
                emojiPickerCloseOnModalOuterClick: !0,
                className: S.input,
                innerClassName: S.inputInner,
                editorClassName: S.editor,
                type: c.Ie.USER_PROFILE_REPLY,
                placeholder: v.intl.formatToPlainString(A(s), { username: _.ZP.getName(n, a, t) }),
                channel: I,
                textValue: x,
                richValue: j,
                onChange: (e, t, n) => {
                    t !== x && (L(t), M(n));
                },
                focused: k.current,
                onFocus: () => {
                    k.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1,
                        };
                    try {
                        return (
                            await Z(n),
                            R(),
                            null == N || N(),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1,
                            }
                        );
                    } catch (e) {
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1,
                        };
                    }
                },
            }),
        }),
    });
}

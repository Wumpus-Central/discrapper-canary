n.d(t, {
    A: () => C,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(478437),
    l = n(305866),
    c = n(355622),
    u = n(408018),
    d = n(133343),
    f = n(95701),
    p = n(403362),
    _ = n(562153),
    h = n(427262),
    m = n(448613),
    g = n(679492),
    E = n(8925),
    b = n(939496),
    y = n(518477),
    O = n(650583),
    A = n(985018),
    v = n(313877);
let S = (0, f.createChannelRecord)({
        id: "1",
        type: o.r.DM,
    }),
    I = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case y.dS.ACTIVITY:
                let a = A.intl.formatToPlainString(A.t.WmvMCo, {
                        username: n,
                    }),
                    s = "\n> ".concat(i);
                return null != i
                    ? "".concat(E.c5).concat(a, "*").concat(s, "\n").concat(t)
                    : "".concat(E.c5).concat(a, "*\n").concat(t);
            case y.dS.AVATAR:
                let o = A.intl.formatToPlainString(A.t.lpaBsB, {
                    username: n,
                });
                return "".concat(E.c5).concat(o, "*\n").concat(t);
            case y.dS.STATUS:
                let l = A.intl.formatToPlainString(A.t.lFXgFV, {
                        username: n,
                    }),
                    c = "\n> ".concat(i);
                return null != i
                    ? "".concat(E.c5).concat(l, "*").concat(c, "\n").concat(t)
                    : "".concat(E.c5).concat(l, "*\n").concat(t);
            default:
                (0, p.xb)(r);
        }
    },
    T = (e) => {
        switch (e) {
            case y.dS.ACTIVITY:
                return A.t.Qn081O;
            case y.dS.AVATAR:
                return A.t.xGNPFK;
            case y.dS.STATUS:
                return A.t.g9BTCM;
            default:
                (0, p.xb)(e);
        }
    };

function C(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            sourceType: o,
            sourceDetails: f,
            setPopoutRef: p,
            modalKey: E,
            onAction: C,
            onClose: N,
            entry: R,
        } = e,
        { resetInteraction: w, setInteractionToast: P } = (0, g.Pq)(),
        { primaryColor: D } = (0, b.E)(),
        [x, L] = i.useState(""),
        [j, M] = i.useState((0, u.x7)(x)),
        k = i.useRef(!1),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                e.key === O.dh.ESCAPE && (e.stopPropagation(), w());
            },
            [w],
        );
    i.useEffect(() => {
        null == p || p(null == U ? void 0 : U.current);
    }, [U, p]);
    let V = async (e) => {
            if (null == e) return;
            o === y.dS.AVATAR
                ? C({
                      action: "SEND_REPLY_AVATAR",
                  })
                : o === y.dS.STATUS
                  ? C({
                        action: "SEND_REPLY_CUSTOM_STATUS",
                    })
                  : C({
                        action: "SEND_REPLY_ACTIVITY",
                    });
            let n = I({
                input: e,
                username: h.Ay.getName(t),
                sourceType: o,
                sourceDetails: f,
            });
            P(null);
            try {
                await (0, m.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: R,
                });
            } catch (e) {}
            P(y.AQ.REPLY);
        },
        F = {
            [v.h5]: o === y.dS.STATUS,
            [v.my]: o === y.dS.AVATAR,
            [v.Eb]: o === y.dS.ACTIVITY,
        };
    return (0, r.jsx)(l.l, {
        ref: U,
        onKeyDown: G,
        children: (0, r.jsx)("div", {
            className: s()(v.kL, F, {
                [v.GE]: null != D,
            }),
            children: (0, r.jsx)(d.Ay, {
                parentModalKey: E,
                emojiPickerCloseOnModalOuterClick: !0,
                className: v.hF,
                innerClassName: v.rn,
                editorClassName: v.EN,
                type: c.oU.USER_PROFILE_REPLY,
                placeholder: A.intl.formatToPlainString(T(o), {
                    username: _.Ay.getName(n, a, t),
                }),
                channel: S,
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
                            await V(n),
                            w(),
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

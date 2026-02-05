"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(478437),
    l = n(305866),
    u = n(355622),
    c = n(408018),
    d = n(133343),
    _ = n(95701),
    f = n(403362),
    p = n(562153),
    h = n(427262),
    m = n(448613),
    g = n(679492),
    E = n(8925),
    A = n(939496),
    I = n(518477),
    T = n(650583),
    y = n(985018),
    S = n(313877);
let v = (0, _.createChannelRecord)({ id: "1", type: o.r.DM }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case I.dS.ACTIVITY:
                let a = y.intl.formatToPlainString(y.t.WmvMCo, { username: n }),
                    s = `
> ${i}`;
                return null != i
                    ? `${E.c5}${a}*${s}
${t}`
                    : `${E.c5}${a}*
${t}`;
            case I.dS.AVATAR:
                let o = y.intl.formatToPlainString(y.t.lpaBsB, { username: n });
                return `${E.c5}${o}*
${t}`;
            case I.dS.STATUS:
                let l = y.intl.formatToPlainString(y.t.lFXgFV, { username: n }),
                    u = `
> ${i}`;
                return null != i
                    ? `${E.c5}${l}*${u}
${t}`
                    : `${E.c5}${l}*
${t}`;
            default:
                (0, f.xb)(r);
        }
    },
    b = (e) => {
        switch (e) {
            case I.dS.ACTIVITY:
                return y.t.Qn081O;
            case I.dS.AVATAR:
                return y.t.xGNPFK;
            case I.dS.STATUS:
                return y.t.g9BTCM;
            default:
                (0, f.xb)(e);
        }
    };
function N(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            sourceType: o,
            sourceDetails: _,
            setPopoutRef: f,
            modalKey: E,
            onAction: N,
            onClose: R,
            entry: O,
        } = e,
        { resetInteraction: D, setInteractionToast: L } = (0, g.Pq)(),
        { primaryColor: w } = (0, A.E)(),
        [x, P] = i.useState(""),
        [M, k] = i.useState((0, c.x7)(x)),
        U = i.useRef(!1),
        G = i.useRef(null),
        V = i.useCallback(
            (e) => {
                e.key === T.dh.ESCAPE && (e.stopPropagation(), D());
            },
            [D],
        );
    i.useEffect(() => {
        f?.(G?.current);
    }, [G, f]);
    let F = async (e) => {
            if (null == e) return;
            o === I.dS.AVATAR
                ? N({ action: "SEND_REPLY_AVATAR" })
                : o === I.dS.STATUS
                  ? N({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : N({ action: "SEND_REPLY_ACTIVITY" });
            let n = C({ input: e, username: h.Ay.getName(t), sourceType: o, sourceDetails: _ });
            L(null);
            try {
                await (0, m.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: O,
                });
            } catch (e) {}
            L(I.AQ.REPLY);
        },
        B = { [S.h5]: o === I.dS.STATUS, [S.my]: o === I.dS.AVATAR, [S.Eb]: o === I.dS.ACTIVITY };
    return (0, r.jsx)(l.l, {
        ref: G,
        onKeyDown: V,
        children: (0, r.jsx)("div", {
            className: s()(S.kL, B, { [S.GE]: null != w }),
            children: (0, r.jsx)(d.Ay, {
                parentModalKey: E,
                emojiPickerCloseOnModalOuterClick: !0,
                className: S.hF,
                innerClassName: S.rn,
                editorClassName: S.EN,
                type: u.oU.USER_PROFILE_REPLY,
                placeholder: y.intl.formatToPlainString(b(o), { username: p.Ay.getName(n, a, t) }),
                channel: v,
                textValue: x,
                richValue: M,
                onChange: (e, t, n) => {
                    t !== x && (P(t), k(n));
                },
                focused: U.current,
                onFocus: () => {
                    U.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return await F(n), D(), R?.(), { shouldClear: !0, shouldRefocus: !1 };
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}

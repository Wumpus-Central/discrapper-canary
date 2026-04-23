"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(478437),
    l = n(305866),
    u = n(355622),
    c = n(408018),
    d = n(133343),
    _ = n(95701),
    f = n(403362),
    p = n(562153),
    h = n(427262),
    E = n(448613),
    m = n(679492),
    g = n(8925),
    A = n(939496),
    I = n(518477),
    T = n(650583),
    S = n(985018),
    y = n(450262);
let N = (0, _.createChannelRecord)({ id: "1", type: o.r.DM });
function v(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            sourceType: o,
            sourceDetails: _,
            setPopoutRef: v,
            modalKey: C,
            onAction: O,
            onClose: R,
            entry: b,
        } = e,
        { resetInteraction: D, setInteractionToast: L } = (0, m.Pq)(),
        { primaryColor: w } = (0, A.E)(),
        [M, P] = i.useState(""),
        [x, k] = i.useState((0, c.x7)(M)),
        U = i.useRef(!1),
        G = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.key === T.dh.ESCAPE && (e.stopPropagation(), D());
            },
            [D],
        );
    i.useEffect(() => {
        v?.(G?.current);
    }, [G, v]);
    let V = async (e) => {
            if (null == e) return;
            o === I.dS.AVATAR
                ? O({ action: "SEND_REPLY_AVATAR" })
                : o === I.dS.STATUS
                  ? O({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : O({ action: "SEND_REPLY_ACTIVITY" });
            let n = ((e) => {
                let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
                switch (r) {
                    case I.dS.ACTIVITY:
                        let s = S.intl.formatToPlainString(S.t.WmvMCo, { username: n }),
                            a = `
> ${i}`;
                        return null != i
                            ? `${g.c5}${s}*${a}
${t}`
                            : `${g.c5}${s}*
${t}`;
                    case I.dS.AVATAR:
                        let o = S.intl.formatToPlainString(S.t.lpaBsB, { username: n });
                        return `${g.c5}${o}*
${t}`;
                    case I.dS.STATUS:
                        let l = S.intl.formatToPlainString(S.t.lFXgFV, { username: n }),
                            u = `
> ${i}`;
                        return null != i
                            ? `${g.c5}${l}*${u}
${t}`
                            : `${g.c5}${l}*
${t}`;
                    default:
                        (0, f.xb)(r);
                }
            })({ input: e, username: h.Ay.getName(t), sourceType: o, sourceDetails: _ });
            L(null);
            try {
                await (0, E.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: b,
                });
            } catch (e) {}
            L(I.AQ.REPLY);
        },
        B = { [y.h5]: o === I.dS.STATUS, [y.my]: o === I.dS.AVATAR, [y.Eb]: o === I.dS.ACTIVITY };
    return (0, r.jsx)(l.l, {
        ref: G,
        onKeyDown: F,
        children: (0, r.jsx)("div", {
            className: a()(y.kL, B, { [y.GE]: null != w }),
            children: (0, r.jsx)(d.Ay, {
                parentModalKey: C,
                emojiPickerCloseOnModalOuterClick: !0,
                className: y.hF,
                innerClassName: y.rn,
                editorClassName: y.EN,
                type: u.oU.USER_PROFILE_REPLY,
                placeholder: S.intl.formatToPlainString(
                    ((e) => {
                        switch (e) {
                            case I.dS.ACTIVITY:
                                return S.t.Qn081O;
                            case I.dS.AVATAR:
                                return S.t.xGNPFK;
                            case I.dS.STATUS:
                                return S.t.g9BTCM;
                            default:
                                (0, f.xb)(e);
                        }
                    })(o),
                    { username: p.Ay.getName(n, s, t) },
                ),
                channel: N,
                textValue: M,
                richValue: x,
                onChange: (e, t, n) => {
                    t !== M && (P(t), k(n));
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
                        return await V(n), D(), R?.(), { shouldClear: !0, shouldRefocus: !1 };
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}

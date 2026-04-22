n.d(t, { A: () => v });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(478437),
    s = n(305866),
    c = n(355622),
    u = n(408018),
    d = n(133343),
    f = n(95701),
    _ = n(403362),
    h = n(562153),
    A = n(427262),
    p = n(448613),
    m = n(679492),
    S = n(8925),
    g = n(939496),
    b = n(518477),
    x = n(650583),
    T = n(985018),
    E = n(450262);
let R = (0, f.createChannelRecord)({ id: "1", type: o.r.DM });
function v(e) {
    let {
            user: t,
            guildId: n,
            channelId: l,
            sourceType: o,
            sourceDetails: f,
            setPopoutRef: v,
            modalKey: C,
            onAction: y,
            onClose: j,
            entry: I,
        } = e,
        { resetInteraction: L, setInteractionToast: P } = (0, m.Pq)(),
        { primaryColor: N } = (0, g.E)(),
        [U, w] = r.useState(""),
        [k, M] = r.useState((0, u.x7)(U)),
        O = r.useRef(!1),
        V = r.useRef(null),
        $ = r.useCallback(
            (e) => {
                e.key === x.dh.ESCAPE && (e.stopPropagation(), L());
            },
            [L],
        );
    r.useEffect(() => {
        v?.(V?.current);
    }, [V, v]);
    let F = async (e) => {
            if (null == e) return;
            o === b.dS.AVATAR
                ? y({ action: "SEND_REPLY_AVATAR" })
                : o === b.dS.STATUS
                  ? y({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : y({ action: "SEND_REPLY_ACTIVITY" });
            let n = ((e) => {
                let { input: t, username: n, sourceType: a, sourceDetails: r } = e;
                switch (a) {
                    case b.dS.ACTIVITY:
                        let l = T.intl.formatToPlainString(T.t.WmvMCo, { username: n }),
                            i = `
> ${r}`;
                        return null != r
                            ? `${S.c5}${l}*${i}
${t}`
                            : `${S.c5}${l}*
${t}`;
                    case b.dS.AVATAR:
                        let o = T.intl.formatToPlainString(T.t.lpaBsB, { username: n });
                        return `${S.c5}${o}*
${t}`;
                    case b.dS.STATUS:
                        let s = T.intl.formatToPlainString(T.t.lFXgFV, { username: n }),
                            c = `
> ${r}`;
                        return null != r
                            ? `${S.c5}${s}*${c}
${t}`
                            : `${S.c5}${s}*
${t}`;
                    default:
                        (0, _.xb)(a);
                }
            })({ input: e, username: A.Ay.getName(t), sourceType: o, sourceDetails: f });
            P(null);
            try {
                await (0, p.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: I,
                });
            } catch (e) {}
            P(b.AQ.REPLY);
        },
        D = { [E.h5]: o === b.dS.STATUS, [E.my]: o === b.dS.AVATAR, [E.Eb]: o === b.dS.ACTIVITY };
    return (0, a.jsx)(s.l, {
        ref: V,
        onKeyDown: $,
        children: (0, a.jsx)("div", {
            className: i()(E.kL, D, { [E.GE]: null != N }),
            children: (0, a.jsx)(d.Ay, {
                parentModalKey: C,
                emojiPickerCloseOnModalOuterClick: !0,
                className: E.hF,
                innerClassName: E.rn,
                editorClassName: E.EN,
                type: c.oU.USER_PROFILE_REPLY,
                placeholder: T.intl.formatToPlainString(
                    ((e) => {
                        switch (e) {
                            case b.dS.ACTIVITY:
                                return T.t.Qn081O;
                            case b.dS.AVATAR:
                                return T.t.xGNPFK;
                            case b.dS.STATUS:
                                return T.t.g9BTCM;
                            default:
                                (0, _.xb)(e);
                        }
                    })(o),
                    { username: h.Ay.getName(n, l, t) },
                ),
                channel: R,
                textValue: U,
                richValue: k,
                onChange: (e, t, n) => {
                    t !== U && (w(t), M(n));
                },
                focused: O.current,
                onFocus: () => {
                    O.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return await F(n), L(), j?.(), { shouldClear: !0, shouldRefocus: !1 };
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}

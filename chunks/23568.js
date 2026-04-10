"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(582754),
    o = n(937773),
    l = n(544028),
    u = n(403362),
    c = n(427262),
    d = n(448613),
    _ = n(679492),
    f = n(8925),
    p = n(939496),
    h = n(518477),
    m = n(307731),
    E = n(818348),
    g = n(650583),
    A = n(985018),
    I = n(137821);
let T = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        s = `:${t.name}:`;
    switch (r) {
        case h.dS.ACTIVITY:
            let a = A.intl.formatToPlainString(A.t.EUFEJt, { username: n }),
                o = `
> ${i}`;
            return null != i
                ? `${f.c5}${a}*${o}
${s}`
                : `${f.c5}${a}*
${s}`;
        case h.dS.AVATAR:
            let l = A.intl.formatToPlainString(A.t.E6H15q, { username: n });
            return `${f.c5}${l}*
${s}`;
        case h.dS.STATUS:
            let c = A.intl.formatToPlainString(A.t.XPQgL2, { username: n }),
                d = `
> ${i}`;
            return null != i
                ? `${f.c5}${c}*${d}
${s}`
                : `${f.c5}${c}*
${s}`;
        default:
            (0, u.xb)(r);
    }
};
function S(e) {
    let {
            user: t,
            guildId: n,
            entry: u,
            sourceType: f,
            sourceDetails: A,
            setPopoutRef: S,
            onAction: y,
            onClose: v,
        } = e,
        { resetInteraction: N, setInteractionToast: C } = (0, _.Pq)(),
        { theme: R } = (0, p.E)(),
        O = (0, s.bG)([l.A], () => l.A.theme),
        b = (0, a.Mw)(O) ? !(0, a.Mw)(R) : (0, a.Mw)(R),
        D = i.useRef(null);
    i.useEffect(() => {
        S?.(D?.current);
    }, [D, S]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === g.dh.ESCAPE && (e.stopPropagation(), N());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [v, N]);
    let L = async (e) => {
        if (null == e) return;
        f === h.dS.AVATAR
            ? y({ action: "SEND_REACT_AVATAR" })
            : f === h.dS.STATUS
              ? y({ action: "SEND_REACT_CUSTOM_STATUS" })
              : y({ action: "SEND_REACT_ACTIVITY" });
        let n = T({ emoji: e, username: c.Ay.getName(t), sourceType: f, sourceDetails: A });
        C(null);
        try {
            await (0, d.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: u,
            });
        } catch (e) {}
        C(h.AQ.REACT);
    };
    return (0, r.jsx)(o.A, {
        headerClassName: b ? I.X : void 0,
        guildId: n ?? void 0,
        closePopout: E.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await L(t), n && (N(), v?.());
        },
        pickerIntention: m.EmojiIntention.PROFILE,
    });
}

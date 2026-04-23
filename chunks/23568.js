"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(462887),
    o = n(937773),
    l = n(544028),
    u = n(403362),
    c = n(427262),
    d = n(448613),
    _ = n(679492),
    f = n(8925),
    p = n(939496),
    h = n(518477),
    E = n(307731),
    m = n(818348),
    g = n(650583),
    A = n(985018),
    I = n(435693);
function T(e) {
    let {
            user: t,
            guildId: n,
            entry: T,
            sourceType: S,
            sourceDetails: y,
            setPopoutRef: N,
            onAction: v,
            onClose: C,
        } = e,
        { resetInteraction: O, setInteractionToast: R } = (0, _.Pq)(),
        { theme: b } = (0, p.E)(),
        D = (0, s.bG)([l.A], () => l.A.theme),
        L = (0, a.M)(D) ? !(0, a.M)(b) : (0, a.M)(b),
        w = i.useRef(null);
    i.useEffect(() => {
        N?.(w?.current);
    }, [w, N]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === g.dh.ESCAPE && (e.stopPropagation(), O());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [C, O]);
    let M = async (e) => {
        if (null == e) return;
        S === h.dS.AVATAR
            ? v({ action: "SEND_REACT_AVATAR" })
            : S === h.dS.STATUS
              ? v({ action: "SEND_REACT_CUSTOM_STATUS" })
              : v({ action: "SEND_REACT_ACTIVITY" });
        let n = ((e) => {
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
        })({ emoji: e, username: c.Ay.getName(t), sourceType: S, sourceDetails: y });
        R(null);
        try {
            await (0, d.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: T,
            });
        } catch (e) {}
        R(h.AQ.REACT);
    };
    return (0, r.jsx)(o.A, {
        headerClassName: L ? I.X : void 0,
        guildId: n ?? void 0,
        closePopout: m.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await M(t), n && (O(), C?.());
        },
        pickerIntention: E.EmojiIntention.PROFILE,
    });
}

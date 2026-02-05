"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(582754),
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
    g = n(818348),
    E = n(650583),
    A = n(985018),
    I = n(433366);
let T = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = `:${t.name}:`;
    switch (r) {
        case h.dS.ACTIVITY:
            let s = A.intl.formatToPlainString(A.t.EUFEJt, { username: n }),
                o = `
> ${i}`;
            return null != i
                ? `${f.c5}${s}*${o}
${a}`
                : `${f.c5}${s}*
${a}`;
        case h.dS.AVATAR:
            let l = A.intl.formatToPlainString(A.t.E6H15q, { username: n });
            return `${f.c5}${l}*
${a}`;
        case h.dS.STATUS:
            let c = A.intl.formatToPlainString(A.t.XPQgL2, { username: n }),
                d = `
> ${i}`;
            return null != i
                ? `${f.c5}${c}*${d}
${a}`
                : `${f.c5}${c}*
${a}`;
        default:
            (0, u.xb)(r);
    }
};
function y(e) {
    let {
            user: t,
            guildId: n,
            entry: u,
            sourceType: f,
            sourceDetails: A,
            setPopoutRef: y,
            onAction: S,
            onClose: v,
        } = e,
        { resetInteraction: C, setInteractionToast: b } = (0, _.Pq)(),
        { theme: N } = (0, p.E)(),
        R = (0, a.bG)([l.A], () => l.A.theme),
        O = (0, s.Mw)(R) ? !(0, s.Mw)(N) : (0, s.Mw)(N),
        D = i.useRef(null);
    i.useEffect(() => {
        y?.(D?.current);
    }, [D, y]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === E.dh.ESCAPE && (e.stopPropagation(), C());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [v, C]);
    let L = async (e) => {
        if (null == e) return;
        f === h.dS.AVATAR
            ? S({ action: "SEND_REACT_AVATAR" })
            : f === h.dS.STATUS
              ? S({ action: "SEND_REACT_CUSTOM_STATUS" })
              : S({ action: "SEND_REACT_ACTIVITY" });
        let n = T({ emoji: e, username: c.Ay.getName(t), sourceType: f, sourceDetails: A });
        b(null);
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
        b(h.AQ.REACT);
    };
    return (0, r.jsx)(o.A, {
        headerClassName: O ? I.X : void 0,
        guildId: n ?? void 0,
        closePopout: g.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await L(t), n && (C(), v?.());
        },
        pickerIntention: m.b_.PROFILE,
    });
}

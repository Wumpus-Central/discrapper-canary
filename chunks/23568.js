n.d(t, { A: () => x });
var a = n(627968),
    r = n(64700),
    l = n(311907),
    i = n(462887),
    o = n(937773),
    s = n(544028),
    c = n(403362),
    u = n(427262),
    d = n(448613),
    f = n(679492),
    _ = n(8925),
    h = n(939496),
    A = n(518477),
    p = n(307731),
    m = n(818348),
    S = n(650583),
    g = n(985018),
    b = n(435693);
function x(e) {
    let {
            user: t,
            guildId: n,
            entry: x,
            sourceType: T,
            sourceDetails: E,
            setPopoutRef: R,
            onAction: v,
            onClose: C,
        } = e,
        { resetInteraction: y, setInteractionToast: j } = (0, f.Pq)(),
        { theme: I } = (0, h.E)(),
        L = (0, l.bG)([s.A], () => s.A.theme),
        P = (0, i.M)(L) ? !(0, i.M)(I) : (0, i.M)(I),
        N = r.useRef(null);
    r.useEffect(() => {
        R?.(N?.current);
    }, [N, R]),
        r.useEffect(() => {
            let e = (e) => {
                e.key === S.dh.ESCAPE && (e.stopPropagation(), y());
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [C, y]);
    let U = async (e) => {
        if (null == e) return;
        T === A.dS.AVATAR
            ? v({ action: "SEND_REACT_AVATAR" })
            : T === A.dS.STATUS
              ? v({ action: "SEND_REACT_CUSTOM_STATUS" })
              : v({ action: "SEND_REACT_ACTIVITY" });
        let n = ((e) => {
            let { emoji: t, username: n, sourceType: a, sourceDetails: r } = e,
                l = `:${t.name}:`;
            switch (a) {
                case A.dS.ACTIVITY:
                    let i = g.intl.formatToPlainString(g.t.EUFEJt, { username: n }),
                        o = `
> ${r}`;
                    return null != r
                        ? `${_.c5}${i}*${o}
${l}`
                        : `${_.c5}${i}*
${l}`;
                case A.dS.AVATAR:
                    let s = g.intl.formatToPlainString(g.t.E6H15q, { username: n });
                    return `${_.c5}${s}*
${l}`;
                case A.dS.STATUS:
                    let u = g.intl.formatToPlainString(g.t.XPQgL2, { username: n }),
                        d = `
> ${r}`;
                    return null != r
                        ? `${_.c5}${u}*${d}
${l}`
                        : `${_.c5}${u}*
${l}`;
                default:
                    (0, c.xb)(a);
            }
        })({ emoji: e, username: u.Ay.getName(t), sourceType: T, sourceDetails: E });
        j(null);
        try {
            await (0, d.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: x,
            });
        } catch (e) {}
        j(A.AQ.REACT);
    };
    return (0, a.jsx)(o.A, {
        headerClassName: P ? b.X : void 0,
        guildId: n ?? void 0,
        closePopout: m.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await U(t), n && (y(), C?.());
        },
        pickerIntention: p.EmojiIntention.PROFILE,
    });
}

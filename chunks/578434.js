n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(811893),
    r = n(49229),
    o = n(256311),
    c = n(773669),
    d = n(222823),
    u = n(954571),
    h = n(883600),
    m = n(232835),
    p = n(343328),
    g = n(652215),
    A = n(994500),
    f = n(975571),
    _ = n(786051),
    E = n(559868),
    C = n(985018);
function x(e) {
    var t, x;
    let b,
        S,
        I,
        y,
        T,
        v,
        N,
        j,
        { channel: M, children: R } = e,
        L = (0, s.bG)([A.A], () => A.A.isBlocked(M.getRecipientId()));
    (x = t = M.id),
        (b = (0, s.bG)([m.A], () => m.A.getLastMessage(x))),
        (S = b?.changelogId),
        (I = (0, s.bG)([c.default], () => c.default.locale)),
        (y = (0, s.bG)([h.A], () => h.A.getChangelog(S ?? "", I), [S, I])),
        (T = (0, p.A)(t)),
        (v = l.useRef(T ? Date.now() : null)),
        (N = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (j = l.useRef(N)),
        l.useEffect(() => {
            j.current = N;
        }),
        l.useEffect(() => {
            v.current = Date.now();
        }, [T]),
        l.useEffect(() => {
            T && null != S && o.A.fetchChangelog(S, I, !0);
        }, [S, I, T]),
        l.useEffect(() => {
            T &&
                null != y &&
                u.default.track(g.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${y.date}:${y.revision}`,
                    unread_count: j.current,
                });
        }, [T, y]),
        l.useEffect(() => {
            let e = v.current;
            return () => {
                T &&
                    null != y &&
                    null != e &&
                    (u.default.track(g.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${y.date}:${y.revision}`,
                        unread_count: j.current,
                    }),
                    (v.current = 0));
            };
        }, [T, y]);
    let D = (0, p.A)(M.id),
        k = M.isSystemDM(),
        P = L && !k && !M.isMultiUserDM(),
        G = {};
    if (k) {
        let e = D ? C.intl.string(C.t["+KSnWX"]) : C.intl.string(C.t.hvVgAZ);
        (G.message = C.intl.string(C.t.Bt2N7D)),
            (G.subtitle = C.intl.string(C.t["n/Vzkw"])),
            (G.buttonText = e),
            (G.buttonIcon = D ? a.t : void 0),
            (G.onButtonClick = () => {
                if (D) {
                    open(E.Do),
                        u.default.track(g.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: E.Do });
                    return;
                }
                open(f.A.getArticleURL(g.MVz.SYSTEM_DMS));
            }),
            (G.imageSrc = n(388668));
    } else
        P &&
            ((G.message = C.intl.string(C.t["9T6N5/"])),
            (G.buttonText = C.intl.string(C.t.XyHpKH)),
            (G.onButtonClick = () => {
                r.A.unblockUser(M.getRecipientId());
            }));
    return (0, i.jsx)(_.A, { ...G, children: R });
}

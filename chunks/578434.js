n.d(t, { A: () => S });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(811893),
    r = n(717398),
    o = n(256311),
    c = n(773669),
    d = n(222823),
    u = n(174459),
    h = n(883600),
    m = n(232835),
    A = n(343328),
    g = n(652215),
    p = n(994500),
    f = n(975571),
    C = n(786051),
    E = n(559868),
    x = n(375708);
function S(e) {
    var t, S;
    let _,
        I,
        T,
        y,
        N,
        j,
        b,
        M,
        { channel: v, children: R } = e,
        D = (0, s.bG)([p.A], () => p.A.isBlocked(v.getRecipientId()));
    (S = t = v.id),
        (_ = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (I = _?.changelogId),
        (T = (0, s.bG)([c.default], () => c.default.locale)),
        (y = (0, s.bG)([h.A], () => h.A.getChangelog(I ?? "", T), [I, T])),
        (N = (0, A.A)(t)),
        (j = i.useRef(N ? Date.now() : null)),
        (b = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (M = i.useRef(b)),
        i.useEffect(() => {
            M.current = b;
        }),
        i.useEffect(() => {
            j.current = Date.now();
        }, [N]),
        i.useEffect(() => {
            N && null != I && o.A.fetchChangelog(I, T, !0);
        }, [I, T, N]),
        i.useEffect(() => {
            N &&
                null != y &&
                u.default.track(g.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${y.date}:${y.revision}`,
                    unread_count: M.current,
                });
        }, [N, y]),
        i.useEffect(() => {
            let e = j.current;
            return () => {
                N &&
                    null != y &&
                    null != e &&
                    (u.default.track(g.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${y.date}:${y.revision}`,
                        unread_count: M.current,
                    }),
                    (j.current = 0));
            };
        }, [N, y]);
    let L = (0, A.A)(v.id),
        P = v.isSystemDM(),
        k = D && !P && !v.isMultiUserDM(),
        G = {};
    if (P) {
        let e = L ? x.intl.string(x.t["+KSnWX"]) : x.intl.string(x.t.hvVgAZ);
        (G.message = x.intl.string(x.t.Bt2N7D)),
            (G.subtitle = x.intl.string(x.t["n/Vzkw"])),
            (G.buttonText = e),
            (G.buttonIcon = L ? a.t : void 0),
            (G.onButtonClick = () => {
                if (L) {
                    open(E.Do),
                        u.default.track(g.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: E.Do });
                    return;
                }
                open(f.A.getArticleURL(g.MVz.SYSTEM_DMS));
            }),
            (G.imageSrc = n(388668));
    } else
        k &&
            ((G.message = x.intl.string(x.t["9T6N5/"])),
            (G.buttonText = x.intl.string(x.t.XyHpKH)),
            (G.onButtonClick = () => {
                r.A.unblockUser(v.getRecipientId());
            }));
    return (0, l.jsx)(C.A, { ...G, children: R });
}

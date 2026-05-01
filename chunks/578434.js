n.d(t, { A: () => S });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(811893),
    r = n(49229),
    o = n(256311),
    c = n(773669),
    d = n(222823),
    u = n(954571),
    h = n(883600),
    m = n(232835),
    g = n(343328),
    A = n(652215),
    p = n(994500),
    f = n(975571),
    C = n(786051),
    E = n(559868),
    x = n(985018);
function S(e) {
    var t, S;
    let _,
        I,
        j,
        y,
        b,
        T,
        N,
        v,
        { channel: M, children: R } = e,
        D = (0, s.bG)([p.A], () => p.A.isBlocked(M.getRecipientId()));
    (S = t = M.id),
        (_ = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (I = _?.changelogId),
        (j = (0, s.bG)([c.default], () => c.default.locale)),
        (y = (0, s.bG)([h.A], () => h.A.getChangelog(I ?? "", j), [I, j])),
        (b = (0, g.A)(t)),
        (T = i.useRef(b ? Date.now() : null)),
        (N = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (v = i.useRef(N)),
        i.useEffect(() => {
            v.current = N;
        }),
        i.useEffect(() => {
            T.current = Date.now();
        }, [b]),
        i.useEffect(() => {
            b && null != I && o.A.fetchChangelog(I, j, !0);
        }, [I, j, b]),
        i.useEffect(() => {
            b &&
                null != y &&
                u.default.track(A.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${y.date}:${y.revision}`,
                    unread_count: v.current,
                });
        }, [b, y]),
        i.useEffect(() => {
            let e = T.current;
            return () => {
                b &&
                    null != y &&
                    null != e &&
                    (u.default.track(A.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${y.date}:${y.revision}`,
                        unread_count: v.current,
                    }),
                    (T.current = 0));
            };
        }, [b, y]);
    let L = (0, g.A)(M.id),
        k = M.isSystemDM(),
        P = D && !k && !M.isMultiUserDM(),
        G = {};
    if (k) {
        let e = L ? x.intl.string(x.t["+KSnWX"]) : x.intl.string(x.t.hvVgAZ);
        (G.message = x.intl.string(x.t.Bt2N7D)),
            (G.subtitle = x.intl.string(x.t["n/Vzkw"])),
            (G.buttonText = e),
            (G.buttonIcon = L ? a.t : void 0),
            (G.onButtonClick = () => {
                if (L) {
                    open(E.Do),
                        u.default.track(A.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: E.Do });
                    return;
                }
                open(f.A.getArticleURL(A.MVz.SYSTEM_DMS));
            }),
            (G.imageSrc = n(388668));
    } else
        P &&
            ((G.message = x.intl.string(x.t["9T6N5/"])),
            (G.buttonText = x.intl.string(x.t.XyHpKH)),
            (G.onButtonClick = () => {
                r.A.unblockUser(M.getRecipientId());
            }));
    return (0, l.jsx)(C.A, { ...G, children: R });
}

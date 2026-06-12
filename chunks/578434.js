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
    g = n(343328),
    p = n(652215),
    A = n(994500),
    f = n(975571),
    C = n(786051),
    x = n(559868),
    E = n(375708);
function S(e) {
    var t, S;
    let _,
        I,
        j,
        y,
        N,
        T,
        b,
        v,
        { channel: M, children: R } = e,
        D = (0, s.bG)([A.A], () => A.A.isBlocked(M.getRecipientId()));
    (S = t = M.id),
        (_ = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (I = _?.changelogId),
        (j = (0, s.bG)([c.default], () => c.default.locale)),
        (y = (0, s.bG)([h.A], () => h.A.getChangelog(I ?? "", j), [I, j])),
        (N = (0, g.A)(t)),
        (T = i.useRef(N ? Date.now() : null)),
        (b = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (v = i.useRef(b)),
        i.useEffect(() => {
            v.current = b;
        }),
        i.useEffect(() => {
            T.current = Date.now();
        }, [N]),
        i.useEffect(() => {
            N && null != I && o.A.fetchChangelog(I, j, !0);
        }, [I, j, N]),
        i.useEffect(() => {
            N &&
                null != y &&
                u.default.track(p.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${y.date}:${y.revision}`,
                    unread_count: v.current,
                });
        }, [N, y]),
        i.useEffect(() => {
            let e = T.current;
            return () => {
                N &&
                    null != y &&
                    null != e &&
                    (u.default.track(p.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${y.date}:${y.revision}`,
                        unread_count: v.current,
                    }),
                    (T.current = 0));
            };
        }, [N, y]);
    let L = (0, g.A)(M.id),
        P = M.isSystemDM(),
        O = D && !P && !M.isMultiUserDM(),
        k = {};
    if (P) {
        let e = L ? E.intl.string(E.t["+KSnWX"]) : E.intl.string(E.t.hvVgAZ);
        (k.message = E.intl.string(E.t.Bt2N7D)),
            (k.subtitle = E.intl.string(E.t["n/Vzkw"])),
            (k.buttonText = e),
            (k.buttonIcon = L ? a.t : void 0),
            (k.onButtonClick = () => {
                if (L) {
                    open(x.Do),
                        u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: x.Do });
                    return;
                }
                open(f.A.getArticleURL(p.MVz.SYSTEM_DMS));
            }),
            (k.imageSrc = n(388668));
    } else
        O &&
            ((k.message = E.intl.string(E.t["9T6N5/"])),
            (k.buttonText = E.intl.string(E.t.XyHpKH)),
            (k.onButtonClick = () => {
                r.A.unblockUser(M.getRecipientId());
            }));
    return (0, l.jsx)(C.A, { ...k, children: R });
}

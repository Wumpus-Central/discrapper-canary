n.d(t, { A: () => S });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(811893),
    r = n(717398),
    o = n(256311),
    c = n(773669),
    d = n(568548),
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
        b,
        N,
        v,
        T,
        { channel: M, children: R } = e,
        D = (0, s.bG)([A.A], () => A.A.isBlocked(M.getRecipientId()));
    (S = t = M.id),
        (_ = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (I = _?.changelogId),
        (j = (0, s.bG)([c.default], () => c.default.locale)),
        (y = (0, s.bG)([h.A], () => h.A.getChangelog(I ?? "", j), [I, j])),
        (b = (0, g.A)(t)),
        (N = i.useRef(b ? Date.now() : null)),
        (v = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (T = i.useRef(v)),
        i.useEffect(() => {
            T.current = v;
        }),
        i.useEffect(() => {
            N.current = Date.now();
        }, [b]),
        i.useEffect(() => {
            b && null != I && o.A.fetchChangelog(I, j, !0);
        }, [I, j, b]),
        i.useEffect(() => {
            b &&
                null != y &&
                u.default.track(p.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${y.date}:${y.revision}`,
                    unread_count: T.current,
                });
        }, [b, y]),
        i.useEffect(() => {
            let e = N.current;
            return () => {
                b &&
                    null != y &&
                    null != e &&
                    (u.default.track(p.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${y.date}:${y.revision}`,
                        unread_count: T.current,
                    }),
                    (N.current = 0));
            };
        }, [b, y]);
    let L = (0, g.A)(M.id),
        k = M.isSystemDM(),
        P = D && !k && !M.isMultiUserDM(),
        O = {};
    if (k) {
        let e = L ? E.intl.string(E.t["+KSnWX"]) : E.intl.string(E.t.hvVgAZ);
        (O.message = E.intl.string(E.t.Bt2N7D)),
            (O.subtitle = E.intl.string(E.t["n/Vzkw"])),
            (O.buttonText = e),
            (O.buttonIcon = L ? a.t : void 0),
            (O.onButtonClick = function () {
                if (L) {
                    open(x.Do),
                        u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: x.Do });
                    return;
                }
                open(f.A.getArticleURL(p.MVz.SYSTEM_DMS));
            }),
            (O.imageSrc = n(388668));
    } else
        P &&
            ((O.message = E.intl.string(E.t["9T6N5/"])),
            (O.buttonText = E.intl.string(E.t.XyHpKH)),
            (O.onButtonClick = function () {
                r.A.unblockUser(M.getRecipientId());
            }));
    return (0, l.jsx)(C.A, { ...O, children: R });
}

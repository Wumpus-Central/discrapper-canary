n.d(t, { A: () => S });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(811893),
    r = n(49229),
    o = n(256311),
    c = n(773669),
    d = n(573163),
    u = n(174459),
    h = n(883600),
    m = n(232835),
    g = n(343328),
    p = n(652215),
    A = n(994500),
    f = n(975571),
    C = n(786051),
    E = n(559868),
    x = n(105292);
function S(e) {
    var t, S;
    let y,
        I,
        b,
        _,
        j,
        v,
        N,
        T,
        { channel: M, children: R } = e,
        D = (0, s.bG)([A.A], () => A.A.isBlocked(M.getRecipientId()));
    ((S = t = M.id),
        (y = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (I = y?.changelogId),
        (b = (0, s.bG)([c.default], () => c.default.locale)),
        (_ = (0, s.bG)([h.A], () => h.A.getChangelog(I ?? "", b), [I, b])),
        (j = (0, g.A)(t)),
        (v = i.useRef(j ? Date.now() : null)),
        (N = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (T = i.useRef(N)),
        i.useEffect(() => {
            T.current = N;
        }),
        i.useEffect(() => {
            v.current = Date.now();
        }, [j]),
        i.useEffect(() => {
            j && null != I && o.A.fetchChangelog(I, b, !0);
        }, [I, b, j]),
        i.useEffect(() => {
            j &&
                null != _ &&
                u.default.track(p.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${_.date}:${_.revision}`,
                    unread_count: T.current,
                });
        }, [j, _]),
        i.useEffect(() => {
            let e = v.current;
            return () => {
                j &&
                    null != _ &&
                    null != e &&
                    (u.default.track(p.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${_.date}:${_.revision}`,
                        unread_count: T.current,
                    }),
                    (v.current = 0));
            };
        }, [j, _]));
    let k = (0, g.A)(M.id),
        L = M.isSystemDM(),
        P = D && !L && !M.isMultiUserDM(),
        O = {};
    if (L) {
        let e = k ? x.intl.string(x.t["+KSnWX"]) : x.intl.string(x.t.hvVgAZ);
        ((O.message = x.intl.string(x.t.Bt2N7D)),
            (O.subtitle = x.intl.string(x.t["n/Vzkw"])),
            (O.buttonText = e),
            (O.buttonIcon = k ? a.t : void 0),
            (O.onButtonClick = function () {
                if (k) {
                    (open(E.Do),
                        u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: E.Do }));
                    return;
                }
                open(f.A.getArticleURL(p.MVz.SYSTEM_DMS));
            }),
            (O.imageSrc = n(388668)));
    } else
        P &&
            ((O.message = x.intl.string(x.t["9T6N5/"])),
            (O.buttonText = x.intl.string(x.t.XyHpKH)),
            (O.onButtonClick = function () {
                r.A.unblockUser(M.getRecipientId());
            }));
    return (0, l.jsx)(C.A, { ...O, children: R });
}

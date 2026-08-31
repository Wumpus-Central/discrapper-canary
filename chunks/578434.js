n.d(t, { A: () => S });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(811893),
    r = n(717398),
    o = n(256311),
    c = n(773669),
    d = n(573163),
    u = n(174459),
    h = n(883600),
    m = n(232835),
    g = n(343328),
    A = n(652215),
    p = n(994500),
    f = n(975571),
    C = n(786051),
    x = n(559868),
    E = n(375708);
function S(e) {
    var t, S;
    let I,
        _,
        j,
        y,
        b,
        N,
        T,
        v,
        { channel: M, children: R } = e,
        D = (0, s.bG)([p.A], () => p.A.isBlocked(M.getRecipientId()));
    (S = t = M.id),
        (I = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (_ = I?.changelogId),
        (j = (0, s.bG)([c.default], () => c.default.locale)),
        (y = (0, s.bG)([h.A], () => h.A.getChangelog(_ ?? "", j), [_, j])),
        (b = (0, g.A)(t)),
        (N = i.useRef(b ? Date.now() : null)),
        (T = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (v = i.useRef(T)),
        i.useEffect(() => {
            v.current = T;
        }),
        i.useEffect(() => {
            N.current = Date.now();
        }, [b]),
        i.useEffect(() => {
            b && null != _ && o.A.fetchChangelog(_, j, !0);
        }, [_, j, b]),
        i.useEffect(() => {
            b &&
                null != y &&
                u.default.track(A.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${y.date}:${y.revision}`,
                    unread_count: v.current,
                });
        }, [b, y]),
        i.useEffect(() => {
            let e = N.current;
            return () => {
                b &&
                    null != y &&
                    null != e &&
                    (u.default.track(A.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${y.date}:${y.revision}`,
                        unread_count: v.current,
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
                        u.default.track(A.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: x.Do });
                    return;
                }
                open(f.A.getArticleURL(A.MVz.SYSTEM_DMS));
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

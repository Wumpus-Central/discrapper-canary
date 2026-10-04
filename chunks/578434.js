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
    p = n(652215),
    A = n(994500),
    f = n(975571),
    x = n(786051),
    C = n(559868),
    E = n(375708);
function S(e) {
    var t, S;
    let I,
        j,
        y,
        v,
        _,
        b,
        T,
        N,
        { channel: M, children: R } = e,
        D = (0, s.bG)([A.A], () => A.A.isBlocked(M.getRecipientId()));
    ((S = t = M.id),
        (I = (0, s.bG)([m.A], () => m.A.getLastMessage(S))),
        (j = I?.changelogId),
        (y = (0, s.bG)([c.default], () => c.default.locale)),
        (v = (0, s.bG)([h.A], () => h.A.getChangelog(j ?? "", y), [j, y])),
        (_ = (0, g.A)(t)),
        (b = i.useRef(_ ? Date.now() : null)),
        (T = (0, s.bG)([d.Ay], () => d.Ay.getUnreadCount(t), [t])),
        (N = i.useRef(T)),
        i.useEffect(() => {
            N.current = T;
        }),
        i.useEffect(() => {
            b.current = Date.now();
        }, [_]),
        i.useEffect(() => {
            _ && null != j && o.A.fetchChangelog(j, y, !0);
        }, [j, y, _]),
        i.useEffect(() => {
            _ &&
                null != v &&
                u.default.track(p.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: `${v.date}:${v.revision}`,
                    unread_count: N.current,
                });
        }, [_, v]),
        i.useEffect(() => {
            let e = b.current;
            return () => {
                _ &&
                    null != v &&
                    null != e &&
                    (u.default.track(p.HAw.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        change_log_id: `${v.date}:${v.revision}`,
                        unread_count: N.current,
                    }),
                    (b.current = 0));
            };
        }, [_, v]));
    let L = (0, g.A)(M.id),
        k = M.isSystemDM(),
        P = D && !k && !M.isMultiUserDM(),
        O = {};
    if (k) {
        let e = L ? E.intl.string(E.t["+KSnWX"]) : E.intl.string(E.t.hvVgAZ);
        ((O.message = E.intl.string(E.t.Bt2N7D)),
            (O.subtitle = E.intl.string(E.t["n/Vzkw"])),
            (O.buttonText = e),
            (O.buttonIcon = L ? a.t : void 0),
            (O.onButtonClick = function () {
                if (L) {
                    (open(C.Do),
                        u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: C.Do }));
                    return;
                }
                open(f.A.getArticleURL(p.MVz.SYSTEM_DMS));
            }),
            (O.imageSrc = n(388668)));
    } else
        P &&
            ((O.message = E.intl.string(E.t["9T6N5/"])),
            (O.buttonText = E.intl.string(E.t.XyHpKH)),
            (O.onButtonClick = function () {
                r.A.unblockUser(M.getRecipientId());
            }));
    return (0, l.jsx)(x.A, { ...O, children: R });
}

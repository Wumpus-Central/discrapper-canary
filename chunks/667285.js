n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(49229),
    r = n(258367),
    o = n(343328),
    c = n(994500),
    d = n(954571),
    u = n(975571),
    h = n(786051),
    m = n(652215),
    A = n(559868),
    p = n(985018);
function g(e) {
    let { channel: t, children: g } = e,
        f = (0, l.bG)([c.A], () => c.A.isBlocked(t.getRecipientId()));
    (0, r.A)(t.id);
    let _ = (0, o.A)(t.id),
        E = t.isSystemDM(),
        C = f && !E && !t.isMultiUserDM(),
        x = {};
    if (E) {
        let e = _ ? p.intl.string(p.t["+KSnWX"]) : p.intl.string(p.t.hvVgAZ);
        (x.message = p.intl.string(p.t.Bt2N7D)),
            (x.subtitle = p.intl.string(p.t["n/Vzkw"])),
            (x.buttonText = e),
            (x.buttonIcon = _ ? a.tfB : void 0),
            (x.onButtonClick = () => {
                if (_) {
                    open(A.Do),
                        d.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: A.Do });
                    return;
                }
                open(u.A.getArticleURL(m.MVz.SYSTEM_DMS));
            }),
            (x.imageSrc = n(388668));
    } else
        C &&
            ((x.message = p.intl.string(p.t["9T6N5/"])),
            (x.buttonText = p.intl.string(p.t.XyHpKH)),
            (x.onButtonClick = () => {
                s.A.unblockUser(t.getRecipientId());
            }));
    return (0, i.jsx)(h.A, { ...x, children: g });
}

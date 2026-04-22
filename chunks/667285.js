n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(811893),
    s = n(49229),
    r = n(258367),
    o = n(343328),
    c = n(994500),
    d = n(954571),
    u = n(975571),
    h = n(786051),
    m = n(652215),
    A = n(559868),
    g = n(985018);
function p(e) {
    let { channel: t, children: p } = e,
        _ = (0, l.bG)([c.A], () => c.A.isBlocked(t.getRecipientId()));
    (0, r.A)(t.id);
    let f = (0, o.A)(t.id),
        E = t.isSystemDM(),
        C = _ && !E && !t.isMultiUserDM(),
        x = {};
    if (E) {
        let e = f ? g.intl.string(g.t["+KSnWX"]) : g.intl.string(g.t.hvVgAZ);
        (x.message = g.intl.string(g.t.Bt2N7D)),
            (x.subtitle = g.intl.string(g.t["n/Vzkw"])),
            (x.buttonText = e),
            (x.buttonIcon = f ? a.t : void 0),
            (x.onButtonClick = () => {
                if (f) {
                    open(A.Do),
                        d.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "chat_blocker", target: A.Do });
                    return;
                }
                open(u.A.getArticleURL(m.MVz.SYSTEM_DMS));
            }),
            (x.imageSrc = n(388668));
    } else
        C &&
            ((x.message = g.intl.string(g.t["9T6N5/"])),
            (x.buttonText = g.intl.string(g.t.XyHpKH)),
            (x.onButtonClick = () => {
                s.A.unblockUser(t.getRecipientId());
            }));
    return (0, i.jsx)(h.A, { ...x, children: p });
}

n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(194359),
    s = n(631937),
    o = n(702321),
    c = n(377171),
    d = n(699516),
    u = n(626135),
    h = n(63063),
    p = n(862679),
    m = n(981631),
    f = n(596401),
    g = n(388032);
function _(e) {
    let { channel: t, children: _ } = e,
        C = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.getRecipientId()));
    (0, s.Z)(t.id);
    let x = (0, o.Z)(t.id),
        v = t.isSystemDM(),
        E = C && !v && !t.isMultiUserDM(),
        I = {};
    if (v) {
        let e = x
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      g.intl.string(g.t['+KSnWV']),
                      (0, i.jsx)(a.rgF, {
                          size: 'xs',
                          color: c.Z.HEADER_PRIMARY
                      })
                  ]
              })
            : g.intl.string(g.t.hvVgAQ);
        (I.message = g.intl.string(g.t.Bt2N7O)),
            (I.subtitle = g.intl.string(g.t['n/Vzk5'])),
            (I.buttonText = e),
            (I.onButtonClick = () => {
                if (x) {
                    open(f.D2),
                        u.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: 'chat_blocker',
                            target: f.D2
                        });
                    return;
                }
                open(h.Z.getArticleURL(m.BhN.SYSTEM_DMS));
            }),
            (I.imageSrc = n(780961));
    } else
        E &&
            ((I.message = g.intl.string(g.t['9T6N5+'])),
            (I.buttonText = g.intl.string(g.t.XyHpKC)),
            (I.onButtonClick = () => {
                r.Z.unblockUser(t.getRecipientId());
            }));
    return (0, i.jsx)(p.Z, {
        ...I,
        children: _
    });
}

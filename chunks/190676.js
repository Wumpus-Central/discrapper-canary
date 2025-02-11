n.d(t, { b: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(704215),
    r = n(481060),
    s = n(243778),
    o = n(970731),
    c = n(70956),
    d = n(378441),
    u = n(921944),
    h = n(388032);
let p = 1 * c.Z.Millis.SECOND;
function m(e) {
    let { children: t } = e,
        [n, c] = l.useState(!1),
        { activeVoice: m } = (0, d.o)(),
        f = null != m;
    return (
        l.useEffect(() => {
            let e = f ? setTimeout(() => c(!0), p) : null;
            return () => {
                clearTimeout(e), c(!1);
            };
        }, [f]),
        (0, i.jsx)(s.ZP, {
            bypassAutoDismiss: !0,
            contentTypes: f && n ? [a.z.VOICE_FILTER_LOOPBACK_COACHMARK] : [],
            children: (e) => {
                let { visibleContent: n, markAsDismissed: l } = e;
                return n === a.z.VOICE_FILTER_LOOPBACK_COACHMARK
                    ? (0, i.jsx)(r.yRy, {
                          renderPopout: () =>
                              (0, i.jsx)(o.ZP, {
                                  header: h.intl.string(h.t.UqDSMT),
                                  content: h.intl.string(h.t.bHZ6pa),
                                  buttonCTA: h.intl.string(h.t['NX+WJC']),
                                  buttonProps: { color: r.Ttl.WHITE },
                                  onClick: () => l(u.L.USER_DISMISS),
                                  markAsDismissed: l,
                                  caretPosition: o.DF.BOTTOM_CENTER
                              }),
                          animation: r.yRy.Animation.TRANSLATE,
                          animationPosition: 'bottom',
                          position: 'top',
                          align: 'center',
                          shouldShow: !0,
                          children: (e, n) => {
                              let { isShown: i } = n;
                              return t(i, () => l(u.L.INDIRECT_ACTION));
                          }
                      })
                    : t(!1);
            }
        })
    );
}

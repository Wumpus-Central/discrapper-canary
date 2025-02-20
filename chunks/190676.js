n.d(t, { b: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(704215),
    o = n(481060),
    l = n(243778),
    s = n(970731),
    c = n(70956),
    d = n(378441),
    u = n(921944),
    p = n(388032);
let m = +c.Z.Millis.SECOND;
function f(e) {
    let { children: t } = e,
        [n, c] = i.useState(!1),
        { activeVoice: f } = (0, d.o)(),
        h = null != f;
    return (
        i.useEffect(() => {
            let e = h ? setTimeout(() => c(!0), m) : null;
            return () => {
                clearTimeout(e), c(!1);
            };
        }, [h]),
        (0, r.jsx)(l.ZP, {
            bypassAutoDismiss: !0,
            contentTypes: h && n ? [a.z.VOICE_FILTER_LOOPBACK_COACHMARK] : [],
            children: (e) => {
                let { visibleContent: n, markAsDismissed: i } = e;
                return n === a.z.VOICE_FILTER_LOOPBACK_COACHMARK
                    ? (0, r.jsx)(o.yRy, {
                          renderPopout: () =>
                              (0, r.jsx)(s.ZP, {
                                  header: p.NW.string(p.t.UqDSMT),
                                  content: p.NW.string(p.t.bHZ6pa),
                                  buttonCTA: p.NW.string(p.t['NX+WJC']),
                                  buttonProps: { color: o.Ttl.WHITE },
                                  onClick: () => i(u.L.USER_DISMISS),
                                  markAsDismissed: i,
                                  caretPosition: s.DF.BOTTOM_CENTER
                              }),
                          animation: o.yRy.Animation.TRANSLATE,
                          animationPosition: 'bottom',
                          position: 'top',
                          align: 'center',
                          shouldShow: !0,
                          children: (e, n) => {
                              let { isShown: r } = n;
                              return t(r, () => i(u.L.INDIRECT_ACTION));
                          }
                      })
                    : t(!1);
            }
        })
    );
}

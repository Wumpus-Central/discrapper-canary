n.d(t, {
    S: () => Z,
    Z: () => N
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(704215),
    s = n(481060),
    o = n(358221),
    c = n(243778),
    d = n(390322),
    u = n(871499),
    h = n(819640),
    p = n(797258),
    m = n(446226),
    f = n(937393),
    g = n(43982),
    _ = n(721351),
    C = n(420529),
    x = n(927923),
    v = n(981631),
    E = n(921944),
    I = n(388032);
function b(e) {
    let { onClose: t, channel: n } = e,
        l = (0, C.Z)(n);
    return (0, i.jsx)(s.v2r, {
        onClose: t,
        onSelect: () => null,
        navId: 'transfer-menu',
        'aria-label': I.intl.string(I.t.jqqLb2),
        children: l
    });
}
function Z() {
    let e = (0, m.Z)(),
        t = (0, f.Z)();
    return null != e || t.length > 0;
}
function N(e) {
    let { channel: t, ...n } = e,
        C = (0, m.Z)(),
        Z = (0, a.e7)([p.Z], () => {
            var e, t;
            return null === (e = p.Z.getSessionById(null !== (t = null == C ? void 0 : C.sessionId) && void 0 !== t ? t : '')) || void 0 === e ? void 0 : e.clientInfo.os;
        }),
        N = (0, a.e7)([h.Z], () => h.Z.hasLayers()),
        [T, S] = (0, a.Wu)([o.Z], () => [o.Z.getMode(t.id), o.Z.getLayout(t.id)]),
        j = (0, s.s9z)(s.JQI),
        A = (0, f.Z)().filter((e) => e.twoWayLink),
        [y, P] = l.useState(!1),
        R = v.WtW.VOICE !== T && [v.AEg.NO_CHAT, v.AEg.FULL_SCREEN].includes(S) ? 'top' : 'bottom',
        M = [];
    return (
        A.length > 0 && M.push(r.z.DONUT_DESKTOP_NUX),
        (0, i.jsx)(c.ZP, {
            contentTypes: M,
            children: (e) => {
                let { visibleContent: l, markAsDismissed: a } = e,
                    o = l === r.z.DONUT_DESKTOP_NUX;
                return (0, i.jsx)(s.yRy, {
                    position: R,
                    spacing: o ? 16 : void 0,
                    positionKey: ''.concat(T, ':').concat(S),
                    onRequestClose: () => P(!1),
                    shouldShow: (o || y) && !N && !j,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, i.jsx)(d.Z, {
                            children: o
                                ? (0, i.jsx)(g.Z, {
                                      popoutPosition: R,
                                      onDismiss: () => a(E.L.UNKNOWN),
                                      onAccept: () => {
                                          a(E.L.UNKNOWN), P(!0);
                                      },
                                      gameConsoleAccounts: A
                                  })
                                : (0, i.jsx)(b, {
                                      onClose: () => {
                                          n();
                                      },
                                      channel: t
                                  })
                        });
                    },
                    children: (e) =>
                        (0, i.jsx)(u.Z, {
                            ...e,
                            ...n,
                            onClick: () => P(!0),
                            label: null != Z ? (Z === x.YE.XBOX ? I.intl.string(I.t.T0uYKy) : I.intl.string(I.t.FWAzS0)) : I.intl.string(I.t['mbi/fH']),
                            iconComponent: (0, _.Z)(Z)
                        })
                });
            }
        })
    );
}

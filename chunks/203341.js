n.d(t, {
    S: function () {
        return Z;
    },
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
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
    C = n(721351),
    x = n(420529),
    v = n(927923),
    _ = n(981631),
    I = n(921944),
    E = n(388032);
function b(e) {
    let { onClose: t, channel: n } = e,
        l = (0, x.Z)(n);
    return (0, i.jsx)(s.Menu, {
        onClose: t,
        onSelect: () => null,
        navId: 'transfer-menu',
        'aria-label': E.intl.string(E.t.jqqLb2),
        children: l
    });
}
function Z() {
    let e = (0, m.Z)(),
        t = (0, f.Z)();
    return null != e || t.length > 0;
}
function S(e) {
    let { channel: t, ...n } = e,
        x = (0, m.Z)(),
        Z = (0, r.e7)([p.Z], () => {
            var e, t;
            return null === (e = p.Z.getSessionById(null !== (t = null == x ? void 0 : x.sessionId) && void 0 !== t ? t : '')) || void 0 === e ? void 0 : e.clientInfo.os;
        }),
        S = (0, r.e7)([h.Z], () => h.Z.hasLayers()),
        [N, T] = (0, r.Wu)([o.Z], () => [o.Z.getMode(t.id), o.Z.getLayout(t.id)]),
        j = (0, s.useModalsStore)(s.hasAnyModalOpenSelector),
        A = (0, f.Z)().filter((e) => e.twoWayLink),
        [y, P] = l.useState(!1),
        M = _.WtW.VOICE !== N && [_.AEg.NO_CHAT, _.AEg.FULL_SCREEN].includes(T) ? 'top' : 'bottom',
        R = [];
    return (
        A.length > 0 && R.push(a.z.DONUT_DESKTOP_NUX),
        (0, i.jsx)(c.ZP, {
            contentTypes: R,
            children: (e) => {
                let { visibleContent: l, markAsDismissed: r } = e,
                    o = l === a.z.DONUT_DESKTOP_NUX;
                return (0, i.jsx)(s.Popout, {
                    position: M,
                    spacing: o ? 16 : void 0,
                    positionKey: ''.concat(N, ':').concat(T),
                    onRequestClose: () => P(!1),
                    shouldShow: (o || y) && !S && !j,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, i.jsx)(d.Z, {
                            children: o
                                ? (0, i.jsx)(g.Z, {
                                      popoutPosition: M,
                                      onDismiss: () => r(I.L.UNKNOWN),
                                      onAccept: () => {
                                          r(I.L.UNKNOWN), P(!0);
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
                    children: (e) => {
                        var t;
                        return (0, i.jsx)(u.Z, {
                            ...e,
                            ...n,
                            onClick: () => P(!0),
                            label: null != (t = Z) ? (t === v.YE.XBOX ? E.intl.string(E.t.T0uYKy) : E.intl.string(E.t.FWAzS0)) : E.intl.string(E.t['mbi/fH']),
                            iconComponent: (0, C.Z)(Z)
                        });
                    }
                });
            }
        })
    );
}

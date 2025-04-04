n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(131951),
    u = n(138821);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
var _ = (function (e) {
    return (e[(e.OUTGOING = 0)] = 'OUTGOING'), (e[(e.INCOMING = 1)] = 'INCOMING'), e;
})(_ || {});
function p(e) {
    let { userId: t, size: n, speaking: i = !1, muted: d = !1, deafen: _ = !1, src: p, disabled: h = !1, ringing: m, ringingType: g = 0, avatarClassName: E, renderIcon: b, style: y, onClick: v, onContextMenu: O, className: I } = e,
        S = (0, a.e7)([c.Z], () => null != t && c.Z.isLocalMute(t)),
        T = () => {
            let e = S ? s.v0G : _ ? s.wE8 : s.nRN;
            return d || _ || S
                ? (0, r.jsx)('div', {
                      className: u.statusContainer,
                      children: (0, r.jsx)(
                          e,
                          {
                              className: u.status,
                              color: s.TVs.colors.WHITE.css
                          },
                          'status'
                      )
                  })
                : null;
        },
        N = () => (0, r.jsx)('div', { className: o()(u.border, { [u.speaking]: i }) }, 'border'),
        A = () =>
            d && i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [N(), T()]
                  })
                : d || _ || S
                  ? (0, r.jsx)(r.Fragment, { children: T() })
                  : (0, r.jsx)(r.Fragment, { children: N() }),
        C = () => {
            let e = (0, s.pxk)(n),
                t = (0, r.jsx)('img', {
                    src: p,
                    alt: ' ',
                    className: o()(u.voiceAvatar, E, { [u.ringingOutgoing]: m && 0 === g })
                });
            if (h) return t;
            let i = l.QS.AVATAR_DEFAULT;
            return (
                null != b ? (i = n === s.EFr.SIZE_32 ? l.QS.AVATAR_CALL_ICON_32 : l.QS.AVATAR_CALL_ICON) : (d || _ || S) && (i = l.QS.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)('div', {
                    className: u.callAvatarMaskContainer,
                    children: [
                        (0, r.jsxs)(l.ZP, {
                            className: u.callAvatarMask,
                            width: e,
                            height: e,
                            mask: i,
                            children: [null == b ? void 0 : b(), t]
                        }),
                        A()
                    ]
                })
            );
        },
        R = o()(
            u.wrapper,
            {
                [u.clickable]: null != v,
                [u.ringingOutgoing]: m && 0 === g,
                [u.ringingIncoming]: m && 1 === g
            },
            I
        ),
        P = (0, s.pxk)(n),
        w = f(
            {
                height: P,
                width: P
            },
            y
        );
    return (0, r.jsx)('div', {
        style: w,
        onContextMenu: O,
        className: R,
        children: C()
    });
}
p.RingingType = _;
let h = p;

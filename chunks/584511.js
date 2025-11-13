n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(131951),
    u = n(993103);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
var _ = (function (e) {
    return (e[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e;
})(_ || {});
function p(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            latched: d = !1,
            muted: _ = !1,
            deafen: p = !1,
            src: h,
            disabled: m = !1,
            ringing: g,
            ringingType: E = 0,
            avatarClassName: b,
            renderIcon: y,
            style: O,
            onClick: v,
            onContextMenu: I,
            className: T,
        } = e,
        S = (0, o.e7)([c.Z], () => null != t && c.Z.isLocalMute(t)),
        A = () => {
            let e = S ? s.v0G : p ? s.wE8 : s.nRN;
            return _ || p || S
                ? (0, r.jsx)("div", {
                      className: u.statusContainer,
                      children: (0, r.jsx)(
                          e,
                          {
                              className: u.status,
                              color: s.TVs.colors.WHITE.css,
                          },
                          "status",
                      ),
                  })
                : null;
        },
        C = () =>
            (0, r.jsx)(
                "div",
                {
                    className: a()(u.border, {
                        [u.speaking]: i,
                        [u.latched]: d && !i,
                    }),
                },
                "border",
            ),
        N = () =>
            _ && i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [C(), A()],
                  })
                : _ || p || S
                  ? (0, r.jsx)(r.Fragment, { children: A() })
                  : (0, r.jsx)(r.Fragment, { children: C() }),
        R = () => {
            let e = (0, s.pxk)(n),
                t = (0, r.jsx)("img", {
                    src: h,
                    alt: " ",
                    className: a()(u.voiceAvatar, b, { [u.ringingOutgoing]: g && 0 === E }),
                });
            if (m) return t;
            let i = l.QS.AVATAR_DEFAULT;
            return (
                null != y
                    ? (i = n === s.EFr.SIZE_32 ? l.QS.AVATAR_CALL_ICON_32 : l.QS.AVATAR_CALL_ICON)
                    : (_ || p || S) && (i = l.QS.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: u.callAvatarMaskContainer,
                    children: [
                        (0, r.jsxs)(l.ZP, {
                            className: u.callAvatarMask,
                            width: e,
                            height: e,
                            mask: i,
                            children: [null == y ? void 0 : y(), t],
                        }),
                        N(),
                    ],
                })
            );
        },
        P = a()(
            u.wrapper,
            {
                [u.clickable]: null != v,
                [u.ringingOutgoing]: g && 0 === E,
                [u.ringingIncoming]: g && 1 === E,
            },
            T,
        ),
        D = (0, s.pxk)(n),
        w = f(
            {
                height: D,
                width: D,
            },
            O,
        );
    return (0, r.jsx)("div", {
        style: w,
        onContextMenu: I,
        className: P,
        children: R(),
    });
}
p.RingingType = _;
let h = p;

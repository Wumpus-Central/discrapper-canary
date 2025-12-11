n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(131951),
    u = n(538870),
    d = n(225375);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
var _ = (function (e) {
    return (e[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e;
})(_ || {});
function m(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            latched: f = !1,
            voiceDb: _ = -1 / 0,
            muted: m = !1,
            deafen: h = !1,
            src: g,
            disabled: E = !1,
            ringing: b,
            ringingType: y = 0,
            avatarClassName: O,
            renderIcon: v,
            style: S,
            onClick: I,
            onContextMenu: T,
            className: C,
        } = e,
        A = (0, o.e7)([c.Z], () => null != t && c.Z.isLocalMute(t)),
        N = (0, u._)({
            isSpeaking: i,
            isLatched: f,
            voiceDb: _,
        }),
        P = () => {
            let e = A ? s.v0G : h ? s.wE8 : s.nRN;
            return m || h || A
                ? (0, r.jsx)("div", {
                      className: d.statusContainer,
                      children: (0, r.jsx)(
                          e,
                          {
                              className: d.status,
                              color: s.TVs.colors.WHITE.css,
                          },
                          "status",
                      ),
                  })
                : null;
        },
        R = () =>
            (0, r.jsx)(
                "div",
                {
                    className: d.border,
                    style: N,
                },
                "border",
            ),
        w = () =>
            m && i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [R(), P()],
                  })
                : m || h || A
                  ? (0, r.jsx)(r.Fragment, { children: P() })
                  : (0, r.jsx)(r.Fragment, { children: R() }),
        D = () => {
            let e = (0, s.dcp)(n),
                t = (0, r.jsx)("img", {
                    src: g,
                    alt: " ",
                    className: a()(d.voiceAvatar, O, { [d.ringingOutgoing]: b && 0 === y }),
                });
            if (E) return t;
            let i = l.QS.AVATAR_DEFAULT;
            return (
                null != v
                    ? (i = n === s.EFr.SIZE_32 ? l.QS.AVATAR_CALL_ICON_32 : l.QS.AVATAR_CALL_ICON)
                    : (m || h || A) && (i = l.QS.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: d.callAvatarMaskContainer,
                    children: [
                        (0, r.jsxs)(l.ZP, {
                            className: d.callAvatarMask,
                            width: e,
                            height: e,
                            mask: i,
                            children: [null == v ? void 0 : v(), t],
                        }),
                        w(),
                    ],
                })
            );
        },
        x = a()(
            d.wrapper,
            {
                [d.clickable]: null != I,
                [d.ringingOutgoing]: b && 0 === y,
                [d.ringingIncoming]: b && 1 === y,
            },
            C,
        ),
        L = (0, s.dcp)(n),
        j = p(
            {
                height: L,
                width: L,
            },
            S,
        );
    return (0, r.jsx)("div", {
        style: j,
        onContextMenu: T,
        className: x,
        children: D(),
    });
}
m.RingingType = _;
let h = m;

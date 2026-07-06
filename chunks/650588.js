n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(661531),
    s = n(834730),
    u = n(922016),
    c = n(305866),
    d = n(939249),
    m = n(7807),
    E = n(807348),
    p = n(333216),
    C = n(375708),
    _ = n(139599);
let h = [54, 8, 8, 8];
function A(e) {
    let { onSelect: t, sound: n } = e,
        [i, A] = r.useState(!1),
        N = r.useRef(null),
        T = a()(_.Qq, _.Ow);
    function I(e) {
        A(!1), t?.(e);
    }
    function f(e) {
        return (0, l.jsxs)("div", {
            className: _.Ry,
            children: [
                (0, l.jsxs)("div", {
                    className: _.__invalid_customGiftHeaderText,
                    children: [
                        (0, l.jsx)(s.E, { variant: "text-md/bold", children: C.intl.string(C.t.aThJz8) }),
                        (0, l.jsx)(s.E, { variant: "text-sm/normal", children: C.intl.string(C.t.stGFA3) }),
                    ],
                }),
                (0, l.jsx)("div", { className: _.$H, children: e }),
            ],
        });
    }
    return (0, l.jsx)(u.Y, {
        targetElementRef: N,
        shouldShow: i,
        position: "bottom",
        align: "left",
        onRequestClose: () => A(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(p.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: I,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: E.If.ADD,
                    listPadding: h,
                    renderHeader: f,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: a()(_.kL, _.Ow),
                onClick: () => A(!0),
                innerRef: N,
                children:
                    null == n
                        ? (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(m.J, {
                                      size: "custom",
                                      color: o.A.colors.ICON_STRONG,
                                      className: _.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(s.E, {
                                      className: T,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: C.intl.string(C.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(s.E, {
                                      className: T,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, l.jsx)(s.E, {
                                      className: T,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}

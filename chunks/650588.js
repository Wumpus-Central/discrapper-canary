n.d(t, { A: () => E });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(827734),
    o = n(834730),
    u = n(265872),
    c = n(305866),
    d = n(939249),
    p = n(7807),
    m = n(807348),
    h = n(989799),
    A = n(985018),
    _ = n(139599);
let C = [54, 8, 8, 8];
function E(e) {
    let { onSelect: t, sound: n } = e,
        [a, E] = i.useState(!1),
        y = i.useRef(null),
        f = r()(_.Qq, _.Ow);
    function P(e) {
        E(!1), t?.(e);
    }
    let S = (e) =>
        (0, l.jsxs)("div", {
            className: _.Ry,
            children: [
                (0, l.jsxs)("div", {
                    className: _.__invalid_customGiftHeaderText,
                    children: [
                        (0, l.jsx)(o.E, { variant: "text-md/bold", children: A.intl.string(A.t.aThJz8) }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", children: A.intl.string(A.t.stGFA3) }),
                    ],
                }),
                (0, l.jsx)("div", { className: _.$H, children: e }),
            ],
        });
    return (0, l.jsx)(u.Y, {
        targetElementRef: y,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => E(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.l, {
                children: (0, l.jsx)(h.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: P,
                    analyticsSource: "gift soundboard",
                    soundButtonOverlay: m.If.ADD,
                    listPadding: C,
                    renderHeader: S,
                    defaultSoundsOnly: !0,
                }),
            });
        },
        children: () =>
            (0, l.jsx)(d.D, {
                className: r()(_.kL, _.Ow),
                onClick: () => E(!0),
                innerRef: y,
                children:
                    null == n
                        ? (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(p.J, {
                                      size: "custom",
                                      color: s.A.colors.ICON_STRONG,
                                      className: _.tc,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: A.intl.string(A.t.aThJz8),
                                  }),
                              ],
                          })
                        : (0, l.jsxs)("div", {
                              className: _.hQ,
                              children: [
                                  (0, l.jsx)(o.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.emojiName,
                                  }),
                                  (0, l.jsx)(o.E, {
                                      className: f,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                              ],
                          }),
            }),
    });
}

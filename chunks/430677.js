n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(28664),
    c = n(481060),
    d = n(471445),
    u = n(603211),
    g = n(307707),
    f = n(734893),
    m = n(216701),
    b = n(592125),
    p = n(430824),
    h = n(768581),
    x = n(388032),
    j = n(551952);
let v = function (e) {
    var t, l, v, O, C;
    let {
            guildId: y,
            action: N,
            actionIndex: E,
            onChange: I,
            onDelete: S,
            onDragStart: _,
            onDragComplete: T,
            onDragReset: P,
        } = e,
        w = (0, s.e7)([b.Z], () => b.Z.getChannel(N.channelId)),
        Z = (0, s.e7)([p.Z], () => p.Z.getGuild(y)),
        { customEmoji: R, unicodeEmoji: D } = (0, g.Z)(
            null == (t = N.emoji) ? void 0 : t.id,
            null == (l = N.emoji) ? void 0 : l.name,
        ),
        A = null == N.emoji || null != R || null != D,
        L = h.ZP.getNewMemberActionIconURL({
            channelId: N.channelId,
            icon: N.icon,
        }),
        k = null;
    null != w && (0, f.kb)(w) ? A || (k = x.intl.string(x.t.wAkIZW)) : (k = x.intl.string(x.t.CbTEKP));
    let {
            drag: G,
            dragSourcePosition: M,
            drop: U,
            setIsDraggable: B,
        } = (0, u.Z)({
            type: "NEW_MEMBER_ACTION",
            index: E,
            optionId: N.channelId,
            onDragStart: _,
            onDragComplete: T,
            onDragReset: P,
        }),
        F = i.useCallback(() => {
            if (null != y)
                return (0, c.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("7590"), n.e("88575")]).then(n.bind(n, 380716));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (i = i =
                                {
                                    guildId: y,
                                    action: N,
                                    onSave: (e, t, n) => I(E, e, t, n),
                                    onDelete: () => S(E),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    };
                });
        }, [y, N, E, I, S]);
    if (null == w || null == Z) return null;
    let H = null != (C = (0, d.KS)(w)) ? C : c.VL1;
    return (0, r.jsxs)("div", {
        className: j.actionItemContainer,
        children: [
            (0, r.jsxs)("div", {
                className: a()(j.actionItem, {
                    [j.dropIndicatorBefore]: null != M && E < M,
                    [j.dropIndicatorAfter]: null != M && E > M,
                    [j.actionItemError]: null != k,
                }),
                ref: (e) => {
                    G(U(e));
                },
                children: [
                    (0, r.jsx)("div", {
                        className: j.dragContainer,
                        onMouseEnter: () => B(!0),
                        onMouseLeave: () => B(!1),
                        children: (0, r.jsx)(c.Vni, {
                            size: "xs",
                            color: "currentColor",
                            className: j.dragIcon,
                        }),
                    }),
                    null != L
                        ? (0, r.jsx)("div", {
                              className: j.iconWrapper,
                              children: (0, r.jsx)("img", {
                                  src: L,
                                  className: j.icon,
                                  width: 48,
                                  height: 48,
                                  alt: "",
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: j.actionItemEmojiWrapper,
                              children: (0, r.jsx)(m.Z, {
                                  emojiId: null == (v = N.emoji) ? void 0 : v.id,
                                  emojiName: null == (O = N.emoji) ? void 0 : O.name,
                                  size: m.R.MEDIUM,
                                  defaultComponent: (0, r.jsx)(H, {}),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: j.actionItemText,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: N.title,
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: x.intl.format(x.t.Ngk8Nr, { channelName: w.name }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.u, {
                        text: x.intl.string(x.t.bt75uw),
                        children: (0, r.jsx)(c.hU, {
                            icon: c.vdY,
                            size: "sm",
                            variant: "primary",
                            onClick: F,
                            "aria-label": x.intl.string(x.t.bt75uw),
                        }),
                    }),
                ],
            }),
            null != k &&
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-feedback-critical",
                    children: k,
                }),
        ],
    });
};

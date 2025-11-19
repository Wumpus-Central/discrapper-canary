n.d(t, { Z: () => _ });
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
    m = n(734893),
    p = n(216701),
    f = n(592125),
    h = n(430824),
    b = n(768581),
    x = n(388032),
    j = n(197530);
let _ = function (e) {
    var t, l, _, v, O;
    let {
            guildId: C,
            action: y,
            actionIndex: N,
            onChange: E,
            onDelete: I,
            onDragStart: S,
            onDragComplete: T,
            onDragReset: P,
        } = e,
        w = (0, s.e7)([f.Z], () => f.Z.getChannel(y.channelId)),
        Z = (0, s.e7)([h.Z], () => h.Z.getGuild(C)),
        { customEmoji: R, unicodeEmoji: D } = (0, g.Z)(
            null == (t = y.emoji) ? void 0 : t.id,
            null == (l = y.emoji) ? void 0 : l.name,
        ),
        A = null == y.emoji || null != R || null != D,
        L = b.ZP.getNewMemberActionIconURL({
            channelId: y.channelId,
            icon: y.icon,
        }),
        k = null;
    null != w && (0, m.kb)(w) ? A || (k = x.intl.string(x.t.wAkIZW)) : (k = x.intl.string(x.t.CbTEKP));
    let {
            drag: G,
            dragSourcePosition: M,
            drop: U,
            setIsDraggable: B,
        } = (0, u.Z)({
            type: "NEW_MEMBER_ACTION",
            index: N,
            optionId: y.channelId,
            onDragStart: S,
            onDragComplete: T,
            onDragReset: P,
        }),
        F = i.useCallback(() => {
            if (null != C)
                return (0, c.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("7590"), n.e("83975")]).then(n.bind(n, 380716));
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
                                    guildId: C,
                                    action: y,
                                    onSave: (e, t, n) => E(N, e, t, n),
                                    onDelete: () => I(N),
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
        }, [C, y, N, E, I]);
    if (null == w || null == Z) return null;
    let H = null != (O = (0, d.KS)(w)) ? O : c.VL1;
    return (0, r.jsxs)("div", {
        className: j.actionItemContainer,
        children: [
            (0, r.jsxs)("div", {
                className: a()(j.actionItem, {
                    [j.dropIndicatorBefore]: null != M && N < M,
                    [j.dropIndicatorAfter]: null != M && N > M,
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
                              children: (0, r.jsx)(p.Z, {
                                  emojiId: null == (_ = y.emoji) ? void 0 : _.id,
                                  emojiName: null == (v = y.emoji) ? void 0 : v.name,
                                  size: p.R.MEDIUM,
                                  defaultComponent: (0, r.jsx)(H, {}),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: j.actionItemText,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: y.title,
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
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
                    color: "text-danger",
                    children: k,
                }),
        ],
    });
};

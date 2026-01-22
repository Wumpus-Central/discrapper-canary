n.d(t, {
    g1: () => T,
    nd: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    c = n(736653),
    u = n(355622),
    d = n(408018),
    f = n(133343),
    p = n(375499),
    _ = n(429433),
    h = n(95701);
n(790168);
var m = n(652215),
    g = n(985018),
    E = n(498386);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (0, h.createChannelRecord)({
    id: "1",
    type: m.rbe.DM,
});
function S(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: o = !1,
            renderAttachButton: l,
            autoFocus: c = !0,
            onFocus: p,
            channel: _,
            className: h,
        } = e,
        [m, g] = i.useState(""),
        [b, O] = i.useState((0, d.x7)("")),
        S = () => {
            g(""), O((0, d.x7)(""));
        },
        I = u.oU.ATOMIC_REACTOR_REPLY_INPUT,
        T = i.useRef(null),
        C = () => {
            if (null == T.current) return "top";
            let e = T.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        };
    return (0, r.jsx)(f.Ay, {
        ref: T,
        placeholder: t,
        editorClassName: h,
        className: s()(E.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: null != _ ? _ : v,
        onChange: (e, t, n) => {
            g(t), O(n);
        },
        type: o ? A(y({}, I), { emojis: { button: !0 } }) : I,
        textValue: m,
        richValue: b,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0,
                  })
                : (n(t),
                  S(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1,
                  }));
        },
        setEditorRef: a,
        focused: c,
        onFocus: p,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: C(),
        renderAttachButton: l,
    });
}
let I = (e, t) => {
        i.useEffect(() => {
            let n = (t) => {
                    "Escape" === t.key && e();
                },
                r = (n) => {
                    var r;
                    null != n.target &&
                        ((null == t || null == (r = t.current) ? void 0 : r.contains(null == n ? void 0 : n.target)) ||
                            e());
                };
            return (
                document.addEventListener("keydown", n),
                document.addEventListener("mousedown", r),
                () => {
                    document.removeEventListener("keydown", n), document.removeEventListener("mousedown", r);
                }
            );
        }, [e, t]);
    },
    T = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            a = (0, c.Ay)(),
            [s, u] = i.useState(!1),
            d = i.useRef(null),
            f = i.useRef(null);
        return (
            I(() => u(!1), d),
            (0, r.jsx)(l.YNO, {
                targetElementRef: f,
                align: "right",
                position: "top",
                shouldShow: s,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, r.jsx)(l.NPJ, {
                        theme: a,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                ref: d,
                                children: (0, r.jsx)(_.C, {
                                    messageId: m.dJq,
                                    channel: v,
                                    closePopout: () => {
                                        u(!1);
                                    },
                                    onSelectEmoji: (e) => {
                                        let { emoji: n, willClose: r, isBurst: i } = e;
                                        null != n &&
                                            (t({
                                                emoji: n,
                                                willClose: r,
                                                isBurst: i,
                                            }),
                                            u(!1));
                                    },
                                }),
                            }),
                    }),
                children: () =>
                    (0, r.jsx)(o.m, {
                        text: g.intl.string(g.t.lfIHs4),
                        children: (0, r.jsx)("div", {
                            ref: f,
                            className: E.mJ,
                            children: (0, r.jsx)(p.A, {
                                active: !1,
                                tabIndex: 0,
                                onClick: () => {
                                    null == n || n(), u(!0);
                                },
                            }),
                        }),
                    }),
            })
        );
    };

n.d(t, {
    A7: () => T,
    dE: () => A,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(410030),
    u = n(541716),
    d = n(752305),
    f = n(893718),
    p = n(318766),
    _ = n(931651),
    m = n(131704),
    h = n(142550),
    g = n(981631),
    E = n(388032),
    b = n(231493);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (0, m.createChannelRecord)({
    id: "1",
    type: g.d4z.DM,
});
function T(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: s = !1,
            renderAttachButton: l,
            autoFocus: c = !0,
            onFocus: p,
            channel: _,
            className: m,
        } = e,
        [g, E] = i.useState(""),
        [y, v] = i.useState((0, d.JM)("")),
        T = () => {
            E(""), v((0, d.JM)(""));
        },
        C = u.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        A = i.useRef(null),
        N = () => {
            if (null == A.current) return "top";
            let e = A.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        };
    return (0, r.jsx)(f.ZP, {
        ref: A,
        placeholder: t,
        editorClassName: m,
        className: o()(b.replyInput, m),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: h.z,
        channel: null != _ ? _ : I,
        onChange: (e, t, n) => {
            E(t), v(n);
        },
        type: s ? S(O({}, C), { emojis: { button: !0 } }) : C,
        textValue: g,
        richValue: y,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > h.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0,
                  })
                : (n(t),
                  T(),
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
        autoCompletePosition: N(),
        renderAttachButton: l,
    });
}
let C = (e, t) => {
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
    A = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            a = (0, c.ZP)(),
            [o, u] = i.useState(!1),
            d = i.useRef(null),
            f = i.useRef(null);
        return (
            C(() => u(!1), d),
            (0, r.jsx)(l.yRy, {
                targetElementRef: f,
                align: "right",
                position: "top",
                shouldShow: o,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, r.jsx)(l.f6W, {
                        theme: a,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                ref: d,
                                children: (0, r.jsx)(_.$, {
                                    messageId: g.lds,
                                    channel: I,
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
                    (0, r.jsx)(s.u, {
                        text: E.intl.string(E.t.lfIHs4),
                        children: (0, r.jsx)("div", {
                            ref: f,
                            className: b.reaction,
                            children: (0, r.jsx)(p.Z, {
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

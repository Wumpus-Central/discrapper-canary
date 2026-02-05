"use strict";
n.d(t, { g1: () => y, nd: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    u = n(736653),
    c = n(355622),
    d = n(408018),
    _ = n(133343),
    f = n(375499),
    p = n(429433),
    h = n(95701);
n(790168);
var m = n(652215),
    g = n(985018),
    E = n(498386);
let A = (0, h.createChannelRecord)({ id: "1", type: m.rbe.DM });
function I(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: o = !1,
            renderAttachButton: l,
            autoFocus: u = !0,
            onFocus: f,
            channel: p,
            className: h,
        } = e,
        [m, g] = i.useState(""),
        [I, T] = i.useState((0, d.x7)("")),
        y = () => {
            g(""), T((0, d.x7)(""));
        },
        S = c.oU.ATOMIC_REACTOR_REPLY_INPUT,
        v = i.useRef(null),
        C = () => {
            if (null == v.current) return "top";
            let e = v.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        };
    return (0, r.jsx)(_.Ay, {
        ref: v,
        placeholder: t,
        editorClassName: h,
        className: s()(E.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: p ?? A,
        onChange: (e, t, n) => {
            g(t), T(n);
        },
        type: o ? { ...S, emojis: { button: !0 } } : S,
        textValue: m,
        richValue: I,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), y(), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: a,
        focused: u,
        onFocus: f,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: C(),
        renderAttachButton: l,
    });
}
let T = (e, t) => {
        i.useEffect(() => {
            let n = (t) => {
                    "Escape" === t.key && e();
                },
                r = (n) => {
                    null != n.target && (t?.current?.contains(n?.target) || e());
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
    y = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            a = (0, u.Ay)(),
            [s, c] = i.useState(!1),
            d = i.useRef(null),
            _ = i.useRef(null);
        return (
            T(() => c(!1), d),
            (0, r.jsx)(l.YNO, {
                targetElementRef: _,
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
                                children: (0, r.jsx)(p.C, {
                                    messageId: m.dJq,
                                    channel: A,
                                    closePopout: () => {
                                        c(!1);
                                    },
                                    onSelectEmoji: (e) => {
                                        let { emoji: n, willClose: r, isBurst: i } = e;
                                        null != n && (t({ emoji: n, willClose: r, isBurst: i }), c(!1));
                                    },
                                }),
                            }),
                    }),
                children: () =>
                    (0, r.jsx)(o.m, {
                        text: g.intl.string(g.t.lfIHs4),
                        children: (0, r.jsx)("div", {
                            ref: _,
                            className: E.mJ,
                            children: (0, r.jsx)(f.A, {
                                active: !1,
                                tabIndex: 0,
                                onClick: () => {
                                    n?.(), c(!0);
                                },
                            }),
                        }),
                    }),
            })
        );
    };

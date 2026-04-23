"use strict";
n.d(t, { g1: () => S, nd: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(265872),
    u = n(43990),
    c = n(736653),
    d = n(355622),
    _ = n(408018),
    f = n(133343),
    p = n(375499),
    h = n(429433),
    E = n(95701);
n(790168);
var m = n(652215),
    g = n(985018),
    A = n(389605);
let I = (0, E.createChannelRecord)({ id: "1", type: m.rbe.DM });
function T(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: o = !1,
            renderAttachButton: l,
            autoFocus: u = !0,
            onFocus: c,
            channel: p,
            className: h,
        } = e,
        [E, m] = i.useState(""),
        [g, T] = i.useState((0, _.x7)("")),
        S = d.oU.ATOMIC_REACTOR_REPLY_INPUT,
        y = i.useRef(null);
    return (0, r.jsx)(f.Ay, {
        ref: y,
        placeholder: t,
        editorClassName: h,
        className: a()(A.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: p ?? I,
        onChange: (e, t, n) => {
            m(t), T(n);
        },
        type: o ? { ...S, emojis: { button: !0 } } : S,
        textValue: E,
        richValue: g,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), m(""), T((0, _.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: u,
        onFocus: c,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == y.current) return "top";
            let e = y.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: l,
    });
}
let S = (e) => {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        a = (0, c.Ay)(),
        [d, _] = i.useState(!1),
        f = i.useRef(null),
        E = i.useRef(null);
    return (
        (t = () => _(!1)),
        i.useEffect(() => {
            let e = (e) => {
                    "Escape" === e.key && t();
                },
                n = (e) => {
                    null != e.target && (f?.current?.contains(e?.target) || t());
                };
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, f]),
        (0, r.jsx)(l.Y, {
            targetElementRef: E,
            align: "right",
            position: "top",
            shouldShow: d,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, r.jsx)(u.N, {
                    theme: a,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            className: e,
                            ref: f,
                            children: (0, r.jsx)(h.C, {
                                messageId: m.dJq,
                                channel: I,
                                closePopout: () => {
                                    _(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: r, isBurst: i } = e;
                                    null != t && (n({ emoji: t, willClose: r, isBurst: i }), _(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, r.jsx)(o.m, {
                    text: g.intl.string(g.t.lfIHs4),
                    children: (0, r.jsx)("div", {
                        ref: E,
                        className: A.mJ,
                        children: (0, r.jsx)(p.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                s?.(), _(!0);
                            },
                        }),
                    }),
                }),
        })
    );
};

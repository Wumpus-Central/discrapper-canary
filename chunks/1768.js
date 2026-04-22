"use strict";
n.d(t, { g1: () => I, nd: () => E });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(265872),
    c = n(43990),
    u = n(736653),
    d = n(355622),
    h = n(408018),
    m = n(133343),
    p = n(375499),
    f = n(429433),
    g = n(95701);
n(790168);
var _ = n(652215),
    x = n(985018),
    A = n(389605);
let C = (0, g.createChannelRecord)({ id: "1", type: _.rbe.DM });
function E(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: a = !1,
            renderAttachButton: o,
            autoFocus: c = !0,
            onFocus: u,
            channel: p,
            className: f,
        } = e,
        [g, _] = l.useState(""),
        [x, E] = l.useState((0, h.x7)("")),
        I = d.oU.ATOMIC_REACTOR_REPLY_INPUT,
        v = l.useRef(null);
    return (0, i.jsx)(m.Ay, {
        ref: v,
        placeholder: t,
        editorClassName: f,
        className: r()(A.N8, f),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: p ?? C,
        onChange: (e, t, n) => {
            _(t), E(n);
        },
        type: a ? { ...I, emojis: { button: !0 } } : I,
        textValue: g,
        richValue: x,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), _(""), E((0, h.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: c,
        onFocus: u,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == v.current) return "top";
            let e = v.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
let I = (e) => {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        r = (0, u.Ay)(),
        [d, h] = l.useState(!1),
        m = l.useRef(null),
        g = l.useRef(null);
    return (
        (t = () => h(!1)),
        l.useEffect(() => {
            let e = (e) => {
                    "Escape" === e.key && t();
                },
                n = (e) => {
                    null != e.target && (m?.current?.contains(e?.target) || t());
                };
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, m]),
        (0, i.jsx)(o.Y, {
            targetElementRef: g,
            align: "right",
            position: "top",
            shouldShow: d,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(c.N, {
                    theme: r,
                    children: (e) =>
                        (0, i.jsx)("div", {
                            className: e,
                            ref: m,
                            children: (0, i.jsx)(f.C, {
                                messageId: _.dJq,
                                channel: C,
                                closePopout: () => {
                                    h(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: i, isBurst: l } = e;
                                    null != t && (n({ emoji: t, willClose: i, isBurst: l }), h(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, i.jsx)(a.m, {
                    text: x.intl.string(x.t.lfIHs4),
                    children: (0, i.jsx)("div", {
                        ref: g,
                        className: A.mJ,
                        children: (0, i.jsx)(p.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                s?.(), h(!0);
                            },
                        }),
                    }),
                }),
        })
    );
};

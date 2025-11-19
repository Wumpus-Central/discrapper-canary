n.d(t, { Z: () => k }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    c = n(481060),
    s = n(596454),
    u = n(907040),
    f = n(906411),
    d = n(592125),
    m = n(358085),
    p = n(79390),
    b = n(35463),
    g = n(489887),
    j = n(185923),
    O = n(957825),
    y = n(388032),
    v = n(220958);
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function P(e) {
    let {
        hasUpload: t,
        mediaUrl: n,
        mediaFilename: l,
        imageClassName: a,
        emoji: i,
        emojiClassName: o,
        fallback: c,
    } = e;
    return t
        ? (0, r.jsx)("img", {
              src: n,
              alt: l,
              className: a,
          })
        : null != i
          ? (0, r.jsx)(s.Z, {
                className: o,
                emojiId: i.id,
                emojiName: i.type === f.B.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated,
            })
          : c;
}
function w(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: a } = e;
    return (0, r.jsx)("div", {
        className: v.menuContainer,
        children: (0, r.jsx)(c.v2r, {
            navId: "poll-media-edit-menu",
            onClose: a,
            "aria-label": y.intl.string(y.t["cV+h7B"]),
            onSelect: t,
            children: (0, r.jsxs)(c.kSQ, {
                children: [
                    (0, r.jsx)(c.sNh, {
                        id: "poll-media-replace",
                        label: y.intl.string(y.t.CZeRhU),
                        action: n,
                    }),
                    (0, r.jsx)(c.sNh, {
                        id: "poll-media-delete",
                        label: y.intl.string(y.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function C(e) {
    let {
            channelId: t,
            localCreationAnswerId: n,
            buttonImage: a,
            onEmojiSelect: s,
            onEmojiRemove: f,
            answerIndex: m,
            shouldShowEmojiPicker: g,
            toggleEmojiPicker: C,
            containerRef: k,
        } = e,
        x = l.useRef(null),
        R = (0, o.e7)([d.Z], () => d.Z.getChannel(t)),
        {
            emoji: E,
            isLoadingMedia: S,
            hasUpload: _,
            mediaUrl: D,
            mediaFilename: A,
        } = (0, b.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: a,
        }),
        I = _ || null != E,
        N = l.useCallback(() => {
            f(m);
        }, [f, m]),
        U = l.useMemo(
            () =>
                _
                    ? y.intl.formatToPlainString(y.t.vcC7Qn, {
                          imageName: (0, p.fw)(A),
                          answerNumber: m + 1,
                      })
                    : null != E
                      ? y.intl.formatToPlainString(y.t.ncOAha, {
                            emojiName: E.name,
                            answerNumber: m + 1,
                        })
                      : y.intl.formatToPlainString(y.t.emdpNo, { answerNumber: m + 1 }),
            [_, E, m, A],
        ),
        L = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)("div", {
                    className: v.emojiPicker,
                    children: (0, r.jsx)(u.Z, {
                        channel: R,
                        pickerIntention: j.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r } = e;
                            null != n && s(n, m), r && t();
                        },
                    }),
                });
            },
            [R, s, m],
        ),
        T = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(w, {
                    onSelect: t,
                    onEditMedia: C,
                    onDeleteMedia: N,
                    closePopout: t,
                });
            },
            [N, C],
        ),
        Z = S
            ? (0, r.jsx)(c.$jN, { className: v.spinnerWrapperDefault })
            : (0, r.jsx)(P, {
                  hasUpload: _,
                  mediaUrl: D,
                  mediaFilename: A,
                  imageClassName: i()(v.media, v.gifDefault),
                  emoji: E,
                  emojiClassName: i()(v.media, v.emojiDefault),
                  fallback: (0, r.jsx)(c.EO4, {
                      size: "sm",
                      color: "currentColor",
                      className: v.expressionPickerIconDefault,
                  }),
              }),
        B = i()(O.CT, v.expressionPickerButtonDefault, { [v.canEditMedia]: I });
    return (0, r.jsx)(c.yRy, {
        targetElementRef: k,
        renderPopout: L,
        shouldShow: g,
        onRequestClose: C,
        animation: c.yRy.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            var { "aria-controls": t, "aria-expanded": n } = e;
            return (
                h(e, ["aria-controls", "aria-expanded"]),
                (0, r.jsx)(c.yRy, {
                    targetElementRef: x,
                    animation: c.yRy.Animation.NONE,
                    position: "bottom",
                    renderPopout: T,
                    children: (e) => {
                        var l,
                            a,
                            { onClick: i, "aria-controls": o, "aria-expanded": s } = e,
                            u = h(e, ["onClick", "aria-controls", "aria-expanded"]);
                        return (0, r.jsxs)(
                            c.P3F,
                            ((l = (function (e) {
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
                            })({ innerRef: x }, u)),
                            (a = a =
                                {
                                    className: B,
                                    onClick: I && !g ? i : C,
                                    "aria-label": U,
                                    "aria-controls": null != t ? t : o,
                                    "aria-expanded": n || s,
                                    children: [
                                        Z,
                                        I &&
                                            (0, r.jsx)(c.vdY, {
                                                size: "md",
                                                color: "currentColor",
                                                className: v.editIcon,
                                                "aria-hidden": !0,
                                            }),
                                    ],
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            l),
                        );
                    },
                })
            );
        },
    });
}
function k(e) {
    let {
            channelId: t,
            answer: n,
            index: a,
            isLastAnswer: i,
            onAnswerTextChange: o,
            onEmojiSelect: s,
            onEmojiRemove: u,
            canRemoveAnswer: f,
            onRemoveAnswer: d,
            addAnswer: b,
            submitPoll: j,
            error: O,
            ref: v,
            answerRowRefs: h,
        } = e,
        P = l.useRef(null),
        w = l.useRef(null),
        k = l.useRef(null);
    l.useImperativeHandle(v, () => ({
        focusDeleteButton: () => {
            var e;
            return null == (e = w.current) ? void 0 : e.focus();
        },
        focusInput: () => {
            var e;
            return null == (e = k.current) ? void 0 : e.focus();
        },
    }));
    let [x, R] = l.useState(!1),
        E = l.useCallback(() => {
            R((e) => !e);
        }, []),
        S = l.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        var l;
                        i &&
                            (e.preventDefault(),
                            ((0, p.cS)(n) || "macos" !== (0, m.getOS)() ? t : r) ? (e.stopPropagation(), j()) : b()),
                            null == (l = h.current[a + 1]) || l.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, m.getOS)() ? r : t) && (e.preventDefault(), e.stopPropagation(), E());
                }
            },
            [b, n, h, a, i, j, E],
        ),
        _ = (0, r.jsx)(C, {
            containerRef: P,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: s,
            onEmojiRemove: u,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: a,
            shouldShowEmojiPicker: x,
            toggleEmojiPicker: E,
        });
    return (0, r.jsx)("div", {
        ref: P,
        children: (0, r.jsx)(c.oil, {
            error: O,
            leading: {
                type: "emoji",
                button: _,
            },
            trailing: f
                ? {
                      "aria-label": y.intl.formatToPlainString(y.t["22fjEc"], { answerNumber: a + 1 }),
                      icon: c.XHJ,
                      onClick: () => d(a),
                      buttonRef: w,
                  }
                : void 0,
            "aria-label": y.intl.formatToPlainString(y.t["3+V8G9"], { answerNumber: a + 1 }),
            placeholder: y.intl.string(y.t.NNHVlv),
            value: n.text,
            onChange: (e) =>
                o({
                    text: e,
                    index: a,
                    localCreationAnswerId: n.localCreationAnswerId,
                }),
            onKeyDown: S,
            maxLength: g.WA,
            inputRef: k,
        }),
    });
}

n.d(t, { Z: () => ed }), n(388685), n(781311), n(290780);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(574583),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(374470),
    g = n(442837),
    f = n(680874),
    x = n(28664),
    p = n(481060),
    b = n(430742),
    j = n(166459),
    v = n(541716),
    _ = n(67158),
    C = n(893718),
    y = n(472243),
    T = n(923664),
    w = n(284182),
    S = n(795639),
    N = n(957730),
    O = n(25015),
    P = n(252032),
    I = n(216572),
    E = n(913663),
    R = n(268350),
    M = n(543855),
    Z = n(488131),
    k = n(602034),
    A = n(23750),
    L = n(703558),
    F = n(496675),
    D = n(300429),
    H = n(117530),
    z = n(594174),
    B = n(459273),
    U = n(838440),
    G = n(127654),
    V = n(681154),
    W = n(883429),
    q = n(945141),
    K = n(456269),
    X = n(228392),
    Y = n(259637),
    J = n(76451),
    Q = n(470623),
    $ = n(479099),
    ee = n(399894),
    et = n(81490),
    en = n(710352),
    er = n(981631),
    ei = n(176505),
    ea = n(388032),
    el = n(153846);
function es(e) {
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
}
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = v.Ie.CREATE_FORUM_POST;
function ed(e) {
    let { parentChannel: t, isSearchLoading: n, numResults: a, onChange: s, canCreatePost: o, inputRef: d } = e,
        u = !(0, I.HL)(t) && o,
        {
            textAreaState: m,
            formOpen: f,
            previewing: x,
        } = (0, Q.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r,
            };
        }, c.X),
        [p, b] = i.useState(null),
        j = i.useContext(B.oo),
        v = i.useCallback(() => {
            j.bumpDispatchPriority();
        }, [j]),
        _ = (0, g.e7)([F.Z], () => F.Z.can(er.Plq.ATTACH_FILES, t)),
        C = (0, g.Wu)([H.Z], () => H.Z.getUploads(t.id, L.d.FirstThreadMessage)),
        y = f && _ && u,
        T = (null == t ? void 0 : t.isMediaChannel()) === !0,
        O = (function (e, t) {
            let n = (0, Q.AF)(),
                r = (0, K.ql)(e);
            return i.useCallback(() => {
                let {
                    formOpen: i,
                    setFormOpenFromUserAction: a,
                    name: l,
                    textAreaState: s,
                    hasClickedForm: o,
                } = n.getState();
                !i &&
                    (setTimeout(() => {
                        if ((0, h.kK)(t.current, HTMLTextAreaElement)) {
                            var e;
                            null == (e = t.current) || e.focus();
                        }
                    }, 0),
                    ((o && l.length > 0) ||
                        (s.textValue.trim().length > 0 && s.textValue.trim() !== r) ||
                        H.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) &&
                        a());
            }, [n, e.id, r, t]);
        })(t, d),
        P = (function (e) {
            let { formOpen: t } = (0, Q.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, Q.AF)(),
                r = (0, k.r)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let a = i.useCallback(
                (t, r, i) => {
                    let { name: a, textAreaState: l } = n.getState();
                    null == t && (t = l.textValue), (t = t.trim());
                    let { content: s } = N.ZP.parse(e, t);
                    if (((t = s), null == r || 0 === r.length)) {
                        var o;
                        r = null == (o = E.Z.getStickerPreview(e.id, ec.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (
                        ((null == i || 0 === i.length) && (i = H.Z.getUploads(e.id, L.d.FirstThreadMessage)),
                        null != i && i.length > 0 && e.isMediaChannel())
                    ) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            i.splice(e, 1), i.unshift(t);
                        }
                    }
                    let c = 0 === a.length,
                        d = (null == t || 0 === t.length) && (null == r || 0 === r.length) && 0 === i.length;
                    return {
                        content: t,
                        stickers: r,
                        uploads: i,
                        hasNameError: c,
                        hasMessageError: d,
                    };
                },
                [e, n],
            );
            return i.useCallback(
                async (t, i, l) => {
                    let {
                            setNameError: s,
                            setMessageError: o,
                            setSubmitting: c,
                            resetFormState: d,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: g,
                            setGuidelinesOpen: f,
                        } = n.getState(),
                        x = q.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, X.P_)({
                                guildId: e.guild_id,
                                channelId: e.id,
                            }),
                            x || n.getState().setGuidelinesOpen(!0),
                            g(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1,
                            }
                        );
                    let { content: p, stickers: b, uploads: j, hasNameError: v, hasMessageError: _ } = a(t, i, l);
                    if ((s(v ? (0, V.V_)() : null), o(_ ? (0, V.T4)() : null), v || _))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0,
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, U.v)({
                            content: p,
                            stickers: b,
                            uploads: j,
                            type: ec,
                            channel: e,
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            };
                        let n = await r(p, b, j);
                        return (
                            (0, Z.ok)(n),
                            W.Z.resort(e.id),
                            (0, R.qB)(e.id, ec.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            q.Z.markAsSeen(e.id),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1,
                            }
                        );
                    } catch (t) {
                        var C, y;
                        return (
                            (null == (C = t.body) ? void 0 : C.code) === er.evJ.AUTOMOD_TITLE_BLOCKED
                                ? s((0, V.Gx)(t.body, e))
                                : (null == (y = t.body) ? void 0 : y.code) === er.evJ.AUTOMOD_MESSAGE_BLOCKED &&
                                  o((0, V.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [r, a, e, n],
            );
        })(t);
    return (
        i.useLayoutEffect(s, [f, m, C, s]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
                "aria-label": u ? ea.intl.string(ea.t.dq7mAa) : ea.intl.string(ea.t["5h0QOP"]),
                className: l()(el.container, { [el.collapsed]: !f }),
                onClick: !f && u ? O : void 0,
                children: (0, r.jsxs)("form", {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        e.preventDefault(), u && P();
                    },
                    children: [
                        (0, r.jsxs)("div", {
                            className: el.formContainer,
                            children: [
                                (0, r.jsx)(eu, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: d,
                                }),
                                (0, r.jsxs)("div", {
                                    className: x ? el.previewForm : el.form,
                                    children: [
                                        (0, r.jsx)(em, {
                                            editorRef: p,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            numResults: a,
                                            inputRef: d,
                                            canCreatePost: u,
                                        }),
                                        f &&
                                            (0, r.jsx)(ef, {
                                                editorRef: p,
                                                setEditorRef: b,
                                                parentChannel: t,
                                                submit: P,
                                                disabled: !u,
                                            }),
                                        x && (0, r.jsx)(ex, {}),
                                    ],
                                }),
                                y && (T ? (0, r.jsx)(S._, { parentChannel: t }) : (0, r.jsx)(J.Z, { channelId: t.id })),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: el.form,
                            children: [
                                y && T && (0, r.jsx)(w.Z, { parentChannel: t }),
                                f &&
                                    (0, r.jsx)(ev, {
                                        className: el.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: u,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let eu = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: a } = e,
            {
                formOpen: l,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u,
            } = (0, Q.xH)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    previewing: i,
                    textAreaState: a,
                    hasClickedForm: l,
                    submitting: s,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: a,
                    previewing: i,
                    hasClickedForm: l,
                    submitting: s,
                };
            }, c.X),
            m = (0, Q.AF)(),
            h = (0, K.ql)(t),
            g = i.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    b.Z.clearDraft(t.id, L.d.ThreadSettings),
                    b.Z.clearDraft(t.id, L.d.FirstThreadMessage),
                    j.Z.clearAll(t.id, L.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = a.current) || e.blur(),
                    (0, X.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id,
                    });
            }, [m, t.id, t.guild_id, a]),
            f = i.useMemo(
                () =>
                    !l &&
                    (s.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        H.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) &&
                    d
                        ? (0, r.jsx)(p.vdY, {
                              size: "md",
                              color: "currentColor",
                              className: el.pencilIcon,
                          })
                        : (0, r.jsx)(p.BK9, {
                              onClear: g,
                              hasContent: l,
                              isLoading: n || u,
                              size: "md",
                          }),
                [n, l, d, s, o.textValue, g, t.id, h, u],
            );
        return (0, r.jsx)("div", {
            className: el.prefixElement,
            children: f,
        });
    }),
    em = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: a, editorRef: l, isSearchLoading: s, numResults: d } = e,
            {
                formOpen: u,
                nameError: m,
                name: h,
                textAreaState: x,
                previewing: b,
            } = (0, Q.xH)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    previewing: i,
                    textAreaState: a,
                    hasClickedForm: l,
                    submitting: s,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: a,
                    previewing: i,
                    hasClickedForm: l,
                    submitting: s,
                };
            }, c.X),
            j = (0, Q.AF)(),
            v = null != t.topic && 0 !== t.topic.length,
            _ = q.Z.hasSeen(t.id),
            C = (0, K.ql)(t),
            y = (0, g.e7)([z.default], () => z.default.getCurrentUser());
        o()(null != y, "current user cannot be null"),
            (0, B.yp)({
                event: er.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    let e = n.current;
                    null == e || e.focus(),
                        j.getState().setTitleFocused(!0),
                        j.getState().setFormOpen(!0),
                        j.getState().setHasClickedForm(!0);
                },
            });
        let T = i.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, G.d)([n], t, L.d.FirstThreadMessage, { origin: "clipboard" }),
                        j.getState().setFormOpenFromUserAction());
                },
                [t, j],
            ),
            w = (0, V.Op)(m, { content: h });
        return (0, r.jsxs)("div", {
            className: el.titleContainer,
            onPaste: T,
            children: [
                u && b
                    ? (0, r.jsx)(p.Heading, {
                          variant: "heading-md/semibold",
                          className: el.title,
                          children: h,
                      })
                    : (0, r.jsxs)(p.Kqy, {
                          gap: 4,
                          children: [
                              (0, r.jsx)(f.l, {
                                  value: h,
                                  placeholder: a
                                      ? u || (x.textValue.length > 0 && x.textValue.trim() !== C)
                                          ? ea.intl.string(ea.t.lU4dDS)
                                          : ea.intl.string(ea.t.CjmivA)
                                      : ea.intl.string(ea.t["5h0QOP"]),
                                  rows: 1,
                                  maxLength: er.HN8,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          r = (0, M.Z)(n, !1);
                                      j.getState().setName(r);
                                      let i = 0 === r.trim().length,
                                          a = 0 === x.textValue.trim().length,
                                          l = x.textValue.trim() === C;
                                      i && (a || l) && j.getState().setHasClickedForm(!1),
                                          u || W.Z.updateForumSearchQuery(t.id, r);
                                  },
                                  onFocus: () => {
                                      j.getState().setTitleFocused(!0), j.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      j.getState().setTitleFocused(!1);
                                      let e = (0, M.Z)(h, !0);
                                      e !== h && (j.getState().setName(e), u || W.Z.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          u && h.length > 0
                                              ? null == l || l.focus()
                                              : a && e.shiftKey
                                                ? ((0, X.nH)({
                                                      guildId: t.guild_id,
                                                      channelId: t.id,
                                                  }),
                                                  v && !_ && j.getState().setGuidelinesOpen(!0),
                                                  j.getState().setFormOpenFromUserAction(),
                                                  h.trim().length > 0 &&
                                                      (j.getState().setBodyFocused(!0), null == l || l.focus()))
                                                : u ||
                                                  !(h.length > 0) ||
                                                  null != d ||
                                                  s ||
                                                  W.Z.updateForumSearchQuery(t.id, h));
                                      let r = n.current;
                                      if ("Home" === e.key || "End" === e.key) {
                                          if (null == r) return;
                                          if ((e.preventDefault(), e.stopPropagation(), "Home" === e.key)) {
                                              let t = e.shiftKey ? Math.max(r.selectionStart, r.selectionEnd) : 0;
                                              r.setSelectionRange(0, t, "backward");
                                          } else {
                                              let t = e.shiftKey
                                                      ? Math.min(r.selectionStart, r.selectionEnd)
                                                      : h.length,
                                                  n = h.length;
                                              r.setSelectionRange(t, n, "forward");
                                          }
                                      }
                                      if ("Escape" === e.key && !j.getState().submitting) {
                                          var i;
                                          null == (i = n.current) || i.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1);
                                      }
                                  },
                                  className: el.title,
                                  ref: n,
                              }),
                              null != w ? (0, r.jsx)(p.pdY, { error: w }) : null,
                          ],
                      }),
                u
                    ? null
                    : (0, r.jsxs)(p.Kqy, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, r.jsx)(eh, { parentChannel: t }),
                              (0, r.jsx)(e_, {
                                  parentChannel: t,
                                  canCreatePost: a,
                              }),
                          ],
                      }),
            ],
        });
    });
function eh(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, Q.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        i = (0, Q.AF)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, r.jsx)(x.u, {
              text: ea.intl.string(ea.t["4d4T4l"]),
              children: (0, r.jsx)(p.hU, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      i.getState().setGuidelinesOpen(!n);
                  },
                  icon: p.snC,
                  "aria-label": ea.intl.string(ea.t["4d4T4l"]),
              }),
          })
        : null;
}
let eg = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            i = new A.ZP({
                channel_id: t.id,
                content: n,
            }),
            { content: a } = (0, O.Z)(i, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            s = (0, P.Z)(
                {
                    message: i,
                    channel: t,
                    compact: !1,
                },
                a,
                !1,
            );
        return (0, r.jsx)("div", {
            className: l()(el.channelTextAreaInner, el.previewTextArea),
            children: s,
        });
    }),
    ef = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: a = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, g.e7)([z.default], () => z.default.getCurrentUser());
        o()(null != u, "current user cannot be null");
        let {
                messageError: m,
                previewing: h,
                textAreaState: f,
                bodyFocused: x,
                formOpen: b,
            } = (0, Q.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: i, formOpen: a } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: i,
                    formOpen: a,
                };
            }, c.X),
            j = (0, Q.AF)();
        i.useEffect(
            () => () =>
                (0, X.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id,
                }),
            [t.guild_id, t.id],
        );
        let v = i.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            _ = i.useCallback(() => {
                j.getState().setBodyFocused(!1);
            }, [j]),
            y = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: r } = j.getState();
                    r({
                        textValue: t,
                        richValue: n,
                    });
                },
                [j],
            ),
            T = i.useCallback(
                (e) => {
                    let { value: t, uploads: r, stickers: i } = e;
                    return n(t, i, r);
                },
                [n],
            );
        (0, B.yp)({
            event: er.CkL.TEXTAREA_FOCUS,
            handler: v,
        }),
            (0, B.yp)({
                event: er.CkL.TEXTAREA_BLUR,
                handler: _,
            });
        let w = (0, V.Op)(m, { content: f.textValue });
        return (0, r.jsx)("div", {
            className: el.bodyContainer,
            children: (0, r.jsxs)("div", {
                className: el.contentContainer,
                children: [
                    h
                        ? (0, r.jsx)(eg, {
                              parentChannel: t,
                              textValue: f.textValue,
                          })
                        : (0, r.jsx)("div", {
                              onClick: v,
                              children: (0, r.jsx)(C.ZP, {
                                  type: ec,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: ea.intl.string(ea.t["8IPnv1"]),
                                  textValue: f.textValue,
                                  richValue: f.richValue,
                                  focused: x,
                                  className: el.channelTextArea,
                                  innerClassName: l()(el.channelTextAreaInner, {
                                      [el.channelTextAreaInnerError]: null != w,
                                  }),
                                  onChange: y,
                                  onSubmit: T,
                                  promptToUpload: G.d,
                                  disabled: a,
                                  onKeyDown: (e) => {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          b &&
                                              "Escape" === e.key &&
                                              !j.getState().submitting &&
                                              (null == s || s.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, r.jsx)(p.pdY, { error: w }),
                ],
            }),
        });
    });
function ex() {
    return (0, r.jsx)("div", {
        className: el.previewModeIndicator,
        children: (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: ea.intl.string(ea.t["WE/cYo"]),
        }),
    });
}
function ep(e) {
    let { textAreaState: t } = (0, Q.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        n = (0, g.Wu)([H.Z], () => H.Z.getUploads(e.id, L.d.FirstThreadMessage));
    return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function eb(e) {
    let t = ep(e),
        { appliedTags: n, name: r } = (0, Q.xH)((e) => {
            let { appliedTags: t, name: n } = e;
            return {
                appliedTags: t,
                name: n,
            };
        }, c.X);
    return i.useMemo(() => e.hasFlag(ei.zZ.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t]);
}
function ej() {
    let { previewing: e } = (0, Q.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, Q.AF)(),
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, X.nE)();
        }, [e, t]),
        a = e ? ea.intl.string(ea.t.ojM1xJ) : ea.intl.string(ea.t.SKNnqq);
    return (0, r.jsx)(x.u, {
        text: a,
        children: (0, r.jsx)(p.hU, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? p.kZF : p.tEF,
            "aria-label": a,
        }),
    });
}
let ev = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: a } = e,
        { textAreaState: l, name: s } = (0, Q.xH)((e) => {
            let { textAreaState: t, name: n } = e;
            return {
                textAreaState: t,
                name: n,
            };
        }, c.X),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, g.e7)([D.Z], () => D.Z.getSlowmodeCooldownGuess(t.id, D.S.CreateThread)),
        m = (0, T.w)(t, D.S.CreateThread),
        h = eb(t),
        f = (0, Q.AF)(),
        x = i.useCallback(() => {
            f.getState().setBodyFocused(!1);
        }, [f]),
        b = i.useMemo(() => "" !== s.trim() && "" !== l.textValue.trim(), [s, l.textValue]);
    return (
        i.useEffect(() => {
            b || f.getState().setPreviewing(!1);
        }, [b, f]),
        (0, r.jsxs)("div", {
            className: a,
            children: [
                (0, r.jsx)(ey, { parentChannel: t }),
                (0, r.jsx)("div", { className: el.tagsDivider }),
                (0, r.jsxs)("div", {
                    className: el.controlsContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: el.controls,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: el.wrappedControls,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            type: ec,
                                            textValue: l.textValue,
                                            className: el.characterCount,
                                        }),
                                        d &&
                                            (0, r.jsx)(ee.Z, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(eh, { parentChannel: t }),
                                b && (0, r.jsx)(ej, {}),
                                (0, r.jsx)(e_, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, r.jsx)(
                            _.Z,
                            {
                                type: ec,
                                className: el.expressionPicker,
                                onClick: x,
                            },
                            "expression",
                        ),
                    ],
                }),
                h &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: el.requiredError,
                        children: ea.intl.string(ea.t.xPfNQi),
                    }),
            ],
        })
    );
});
function e_(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: a = !1 } = e,
        l = (0, I.HL)(t),
        {
            submitting: s,
            name: o,
            formOpen: d,
        } = (0, Q.xH)((e) => {
            let { submitting: t, name: n, formOpen: r } = e;
            return {
                submitting: t,
                name: n,
                formOpen: r,
            };
        }, c.X),
        u = ep(t),
        m = !eb(t) && u && o.trim().length > 0;
    return __OVERLAY__ || l
        ? null
        : (0, r.jsx)(p.Button, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: s,
              disabled: (a && !m) || i || !n,
              icon: p.kBi,
              text: d ? ea.intl.string(ea.t.pIuQI6) : ea.intl.string(ea.t.TyAuoT),
          });
}
function eC() {
    return Promise.resolve();
}
function ey(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: a,
            setPopoutOpen: s,
        } = (0, Q.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: r } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: r,
            };
        }, c.X),
        o = n.size >= en.Cn,
        h = (0, d.ZP)({
            id: "".concat(t.id, "-post-form-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eC,
            scrollToEnd: eC,
            orientation: m.hy.HORIZONTAL,
        }),
        { containerRef: g, containerWidth: f } = (0, et.Z)(),
        x = i.useRef(null),
        b = i.useRef(null),
        [j, v] = i.useState(!0),
        _ = (0, K.Vm)(t),
        [C, y] = i.useState(0);
    return (i.useLayoutEffect(() => {
        var e;
        let t = x.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            r = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((r !== j && v(r), r && null != g.current && null != n && null != n.children)) {
            let { left: e, top: t } = g.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: a, height: l } = i.getBoundingClientRect();
                if (a - t > l) break;
                n - e > r && (r = n - e);
            }
            y(r);
        }
    }, [_, j, g, f]),
    0 === _.length)
        ? null
        : (0, r.jsxs)("div", {
              className: el.tagsContainer,
              ref: g,
              children: [
                  (0, r.jsx)(p.lO_, {
                      size: "xs",
                      color: "currentColor",
                      className: el.tagsIcon,
                  }),
                  (0, r.jsx)("div", {
                      className: el.tagList,
                      ref: x,
                      children: (0, r.jsx)(u.bG, {
                          navigator: h,
                          children: (0, r.jsx)(u.SJ, {
                              children: (e) => {
                                  var { ref: t } = e,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      r,
                                                      i = {},
                                                      a = Object.keys(e);
                                                  for (r = 0; r < a.length; r++)
                                                      (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                  return i;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < a.length; r++)
                                                  (n = a[r]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (i[n] = e[n]);
                                          }
                                          return i;
                                      })(e, ["ref"]);
                                  return (0, r.jsx)(
                                      "div",
                                      eo(
                                          es(
                                              {
                                                  className: el.tagListInner,
                                                  ref: t,
                                              },
                                              i,
                                          ),
                                          {
                                              children: _.map((e) =>
                                                  (0, r.jsx)(
                                                      $.Z,
                                                      {
                                                          ariaLabel: ea.intl.formatToPlainString(ea.t.FSZVIR, {
                                                              tagName: e.name,
                                                          }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => a(e.id),
                                                          disabled: !n.has(e.id) && n.size >= en.Cn,
                                                          selected: n.has(e.id),
                                                          size: $.Z.Sizes.SMALL,
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          },
                                      ),
                                  );
                              },
                          }),
                      }),
                  }),
                  j &&
                      (0, r.jsx)(p.yRy, {
                          targetElementRef: b,
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, r.jsx)(Y.Z, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: a,
                                  onClose: i,
                              });
                          },
                          position: "bottom",
                          align: "center",
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: b,
                                  className: el.tagsButton,
                                  style: { left: C },
                                  children: (0, r.jsx)(
                                      p.Button,
                                      eo(es({}, e), {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: p.CJ0,
                                          iconPosition: "end",
                                          text: ea.intl.string(ea.t.w6T0Yc),
                                      }),
                                  ),
                              }),
                      }),
                  (0, r.jsx)("div", {
                      className: l()(el.tagsButton, el.tagsButtonPlaceholder),
                      children: (0, r.jsx)(p.Button, {
                          size: "sm",
                          variant: "secondary",
                          icon: p.CJ0,
                          iconPosition: "end",
                          text: ea.intl.string(ea.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}

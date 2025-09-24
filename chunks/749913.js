n.d(t, { Z: () => eo }), n(388685), n(781311), n(290780);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(524825),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(442837),
    g = n(755721),
    f = n(481060),
    x = n(430742),
    p = n(166459),
    b = n(541716),
    j = n(67158),
    v = n(893718),
    _ = n(472243),
    C = n(923664),
    y = n(284182),
    T = n(795639),
    w = n(957730),
    O = n(25015),
    S = n(252032),
    N = n(216572),
    P = n(913663),
    I = n(268350),
    E = n(456077),
    R = n(488131),
    M = n(602034),
    Z = n(23750),
    k = n(703558),
    A = n(496675),
    L = n(300429),
    F = n(117530),
    D = n(594174),
    z = n(459273),
    H = n(838440),
    B = n(127654),
    U = n(681154),
    V = n(883429),
    G = n(945141),
    q = n(456269),
    W = n(228392),
    X = n(259637),
    K = n(76451),
    Y = n(470623),
    J = n(479099),
    Q = n(399894),
    $ = n(81490),
    ee = n(710352),
    et = n(981631),
    en = n(176505),
    er = n(388032),
    ei = n(470581);
function ea(e) {
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
function el(e, t) {
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
let es = b.Ie.CREATE_FORUM_POST;
function eo(e) {
    let { parentChannel: t, isSearchLoading: n, numResults: a, onChange: s, canCreatePost: o, inputRef: d } = e,
        u = !(0, N.HL)(t) && o,
        {
            textAreaState: m,
            formOpen: g,
            previewing: x,
        } = (0, Y.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r,
            };
        }, c.X),
        [p, b] = i.useState(null),
        j = i.useContext(z.oo),
        v = i.useCallback(() => {
            j.bumpDispatchPriority();
        }, [j]),
        _ = (0, h.e7)([A.Z], () => A.Z.can(et.Plq.ATTACH_FILES, t)),
        C = (0, h.Wu)([F.Z], () => F.Z.getUploads(t.id, k.d.FirstThreadMessage)),
        O = g && _ && u,
        S = (null == t ? void 0 : t.isMediaChannel()) === !0,
        E = (function (e, t) {
            let n = (0, Y.AF)(),
                r = (0, q.ql)(e);
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
                        if (t.current instanceof f.lcI) {
                            var e, n, r, i;
                            null == (n = t.current) ||
                                null == (e = n._textArea) ||
                                e.setSelectionRange(l.length, l.length),
                                null == (i = t.current) || null == (r = i._textArea) || r.focus();
                        }
                    }, 0),
                    ((o && l.length > 0) ||
                        (s.textValue.trim().length > 0 && s.textValue.trim() !== r) ||
                        F.Z.getUploads(e.id, k.d.FirstThreadMessage).length > 0) &&
                        a());
            }, [n, e.id, r, t]);
        })(t, d),
        Z = (function (e) {
            let { formOpen: t } = (0, Y.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, Y.AF)(),
                r = (0, M.r)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let a = i.useCallback(
                (t, r, i) => {
                    let { name: a, textAreaState: l } = n.getState();
                    null == t && (t = l.textValue), (t = t.trim());
                    let { content: s } = w.ZP.parse(e, t);
                    if (((t = s), null == r || 0 === r.length)) {
                        var o;
                        r = null == (o = P.Z.getStickerPreview(e.id, es.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (
                        ((null == i || 0 === i.length) && (i = F.Z.getUploads(e.id, k.d.FirstThreadMessage)),
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
                        x = G.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, W.P_)({
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
                    if ((s(v ? (0, U.V_)() : null), o(_ ? (0, U.T4)() : null), v || _))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0,
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, H.v)({
                            content: p,
                            stickers: b,
                            uploads: j,
                            type: es,
                            channel: e,
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            };
                        let n = await r(p, b, j);
                        return (
                            (0, R.ok)(n),
                            V.Z.resort(e.id),
                            (0, I.qB)(e.id, es.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            G.Z.markAsSeen(e.id),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1,
                            }
                        );
                    } catch (t) {
                        var C, y;
                        return (
                            (null == (C = t.body) ? void 0 : C.code) === et.evJ.AUTOMOD_TITLE_BLOCKED
                                ? s((0, U.Gx)(t.body, e))
                                : (null == (y = t.body) ? void 0 : y.code) === et.evJ.AUTOMOD_MESSAGE_BLOCKED &&
                                  o((0, U.Gx)(t.body, e)),
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
        i.useLayoutEffect(s, [g, m, C, s]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
                "aria-label": u ? er.intl.string(er.t.dq7mAQ) : er.intl.string(er.t["5h0QOD"]),
                className: l()(ei.container, { [ei.collapsed]: !g }),
                onClick: !g && u ? E : void 0,
                children: (0, r.jsxs)("form", {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        e.preventDefault(), u && Z();
                    },
                    children: [
                        (0, r.jsxs)("div", {
                            className: ei.formContainer,
                            children: [
                                (0, r.jsx)(ec, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: d,
                                }),
                                (0, r.jsxs)("div", {
                                    className: x ? ei.previewForm : ei.form,
                                    children: [
                                        (0, r.jsx)(ed, {
                                            editorRef: p,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            numResults: a,
                                            inputRef: d,
                                            canCreatePost: u,
                                        }),
                                        g &&
                                            (0, r.jsx)(eh, {
                                                editorRef: p,
                                                setEditorRef: b,
                                                parentChannel: t,
                                                submit: Z,
                                                disabled: !u,
                                            }),
                                        x && (0, r.jsx)(eg, {}),
                                    ],
                                }),
                                O && (S ? (0, r.jsx)(T._, { parentChannel: t }) : (0, r.jsx)(K.Z, { channelId: t.id })),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: ei.form,
                            children: [
                                O && S && (0, r.jsx)(y.Z, { parentChannel: t }),
                                g &&
                                    (0, r.jsx)(eb, {
                                        className: ei.horizontalPadding,
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
let ec = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: a } = e,
            {
                formOpen: l,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u,
            } = (0, Y.xH)((e) => {
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
            m = (0, Y.AF)(),
            h = (0, q.ql)(t),
            g = i.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    x.Z.clearDraft(t.id, k.d.ThreadSettings),
                    x.Z.clearDraft(t.id, k.d.FirstThreadMessage),
                    p.Z.clearAll(t.id, k.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = a.current) || e.blur(),
                    (0, W.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id,
                    });
            }, [m, t.id, t.guild_id, a]),
            b = i.useMemo(
                () =>
                    n && !l
                        ? (0, r.jsx)(eC, {})
                        : n || l || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !l &&
                            (s.trim().length > 0 ||
                                (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                                F.Z.getUploads(t.id, k.d.FirstThreadMessage).length > 0) &&
                            d
                              ? (0, r.jsx)(f.vdY, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ei.pencilIcon,
                                })
                              : u
                                ? (0, r.jsx)(f.k$p, {
                                      size: "md",
                                      color: "currentColor",
                                      className: ei.closeIconDisabled,
                                  })
                                : (0, r.jsx)(f.ua7, {
                                      text: er.intl.string(er.t["98EPQE"]),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              f.P3F,
                                              el(ea({}, e), {
                                                  onClick: g,
                                                  children: (0, r.jsx)(f.k$p, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: ei.closeIcon,
                                                  }),
                                              }),
                                          ),
                                  })
                          : (0, r.jsx)(f._Ve, {
                                size: "md",
                                color: "currentColor",
                                className: ei.searchIcon,
                            }),
                [n, l, d, s, o.textValue, g, t.id, h, u],
            );
        return (0, r.jsx)("div", {
            className: ei.prefixElement,
            children: b,
        });
    }),
    ed = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: a, editorRef: l, isSearchLoading: s, numResults: d } = e,
            {
                formOpen: u,
                nameError: m,
                name: x,
                textAreaState: p,
                previewing: b,
            } = (0, Y.xH)((e) => {
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
            j = (0, Y.AF)(),
            v = null != t.topic && 0 !== t.topic.length,
            _ = G.Z.hasSeen(t.id),
            C = (0, q.ql)(t),
            y = (0, h.e7)([D.default], () => D.default.getCurrentUser());
        o()(null != y, "current user cannot be null"),
            (0, z.yp)({
                event: et.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof f.lcI ? (null == (e = n.current) ? void 0 : e._textArea) : n.current;
                    null == t || t.focus(),
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
                        await (0, B.d)([n], t, k.d.FirstThreadMessage, { origin: "clipboard" }),
                        j.getState().setFormOpenFromUserAction());
                },
                [t, j],
            ),
            w = (0, U.Op)(m, { content: x });
        return (0, r.jsxs)("div", {
            className: ei.titleContainer,
            onPaste: T,
            children: [
                u && b
                    ? (0, r.jsx)(f.X6q, {
                          variant: "heading-md/semibold",
                          className: ei.title,
                          children: x,
                      })
                    : (0, r.jsx)(g.iS, {
                          value: x,
                          placeholder: a
                              ? u || (p.textValue.length > 0 && p.textValue.trim() !== C)
                                  ? er.intl.string(er.t.lU4dDQ)
                                  : er.intl.string(er.t.CjmivL)
                              : er.intl.string(er.t["5h0QOD"]),
                          flex: !0,
                          autosize: u,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: et.HN8,
                          onChange: (e) => {
                              let n = (0, E.Z)(e, !1);
                              j.getState().setName(n);
                              let r = 0 === n.trim().length,
                                  i = 0 === p.textValue.trim().length,
                                  a = p.textValue.trim() === C;
                              r && (i || a) && j.getState().setHasClickedForm(!1),
                                  u || V.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              j.getState().setTitleFocused(!0), j.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              j.getState().setTitleFocused(!1);
                              let e = (0, E.Z)(x, !0);
                              e !== x && (j.getState().setName(e), u || V.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var r, i;
                              "Enter" === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  u && x.length > 0
                                      ? null == l || l.focus()
                                      : a && e.shiftKey
                                        ? ((0, W.nH)({
                                              guildId: t.guild_id,
                                              channelId: t.id,
                                          }),
                                          v && !_ && j.getState().setGuidelinesOpen(!0),
                                          j.getState().setFormOpenFromUserAction(),
                                          x.trim().length > 0 &&
                                              (j.getState().setBodyFocused(!0), null == l || l.focus()))
                                        : u ||
                                          !(x.length > 0) ||
                                          null != d ||
                                          s ||
                                          V.Z.updateForumSearchQuery(t.id, x));
                              let o =
                                  n.current instanceof f.lcI
                                      ? null == (r = n.current)
                                          ? void 0
                                          : r._textArea
                                      : n.current;
                              if ("Home" === e.key || "End" === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), "Home" === e.key)) {
                                      let t = e.shiftKey ? Math.max(o.selectionStart, o.selectionEnd) : 0;
                                      o.setSelectionRange(0, t, "backward");
                                  } else {
                                      let t = e.shiftKey ? Math.min(o.selectionStart, o.selectionEnd) : x.length,
                                          n = x.length;
                                      o.setSelectionRange(t, n, "forward");
                                  }
                              }
                              "Escape" !== e.key ||
                                  j.getState().submitting ||
                                  (null == (i = n.current) || i.blur(),
                                  j.getState().setFormOpen(!1),
                                  j.getState().setTitleFocused(!1),
                                  j.getState().setBodyFocused(!1),
                                  j.getState().setPreviewing(!1));
                          },
                          error: w,
                          className: ei.title,
                          inputRef: n,
                      }),
                u
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eu, { parentChannel: t }),
                              (0, r.jsx)(ej, {
                                  parentChannel: t,
                                  canCreatePost: a,
                              }),
                          ],
                      }),
            ],
        });
    });
function eu(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, Y.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        i = (0, Y.AF)(),
        a = null != t.topic && 0 !== t.topic.length,
        s = () => {
            i.getState().setGuidelinesOpen(!n);
        };
    return a
        ? (0, r.jsx)(f.ua7, {
              text: er.intl.string(er.t["4d4T4u"]),
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      el(ea({}, e), {
                          onClick: s,
                          className: l()(ei.forumPostFormButton, { [ei.forumPostFormButtonActive]: n }),
                          children: (0, r.jsx)(
                              f.snC,
                              ea(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                  },
                                  e,
                              ),
                          ),
                      }),
                  ),
          })
        : null;
}
let em = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            i = new Z.ZP({
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
            s = (0, S.Z)(
                {
                    message: i,
                    channel: t,
                    compact: !1,
                },
                a,
                !1,
            );
        return (0, r.jsx)("div", {
            className: l()(ei.channelTextAreaInner, ei.previewTextArea),
            children: s,
        });
    }),
    eh = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: a = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([D.default], () => D.default.getCurrentUser());
        o()(null != u, "current user cannot be null");
        let {
                messageError: m,
                previewing: g,
                textAreaState: x,
                bodyFocused: p,
                formOpen: b,
            } = (0, Y.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: i, formOpen: a } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: i,
                    formOpen: a,
                };
            }, c.X),
            j = (0, Y.AF)();
        i.useEffect(
            () => () =>
                (0, W.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id,
                }),
            [t.guild_id, t.id],
        );
        let _ = i.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            C = i.useCallback(() => {
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
        (0, z.yp)({
            event: et.CkL.TEXTAREA_FOCUS,
            handler: _,
        }),
            (0, z.yp)({
                event: et.CkL.TEXTAREA_BLUR,
                handler: C,
            });
        let w = (0, U.Op)(m, { content: x.textValue });
        return (0, r.jsx)("div", {
            className: ei.bodyContainer,
            children: (0, r.jsxs)("div", {
                className: ei.contentContainer,
                children: [
                    g
                        ? (0, r.jsx)(em, {
                              parentChannel: t,
                              textValue: x.textValue,
                          })
                        : (0, r.jsx)("div", {
                              onClick: _,
                              children: (0, r.jsx)(v.ZP, {
                                  type: es,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: er.intl.string(er.t["8IPnv7"]),
                                  textValue: x.textValue,
                                  richValue: x.richValue,
                                  focused: p,
                                  className: ei.channelTextArea,
                                  innerClassName: l()(ei.channelTextAreaInner, {
                                      [ei.channelTextAreaInnerError]: null != w,
                                  }),
                                  onChange: y,
                                  onSubmit: T,
                                  promptToUpload: B.d,
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
                    (0, r.jsx)(f.pdY, { error: w }),
                ],
            }),
        });
    });
function eg() {
    return (0, r.jsx)("div", {
        className: ei.previewModeIndicator,
        children: (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: er.intl.string(er.t["WE/cYm"]),
        }),
    });
}
function ef(e) {
    let { textAreaState: t } = (0, Y.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        n = (0, h.Wu)([F.Z], () => F.Z.getUploads(e.id, k.d.FirstThreadMessage));
    return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function ex(e) {
    let t = ef(e),
        { appliedTags: n, name: r } = (0, Y.xH)((e) => {
            let { appliedTags: t, name: n } = e;
            return {
                appliedTags: t,
                name: n,
            };
        }, c.X);
    return i.useMemo(() => e.hasFlag(en.zZ.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t]);
}
function ep() {
    let { previewing: e } = (0, Y.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, Y.AF)(),
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, W.nE)();
        }, [e, t]);
    return (0, r.jsx)(f.ua7, {
        text: e ? er.intl.string(er.t.ojM1xM) : er.intl.string(er.t.SKNnqq),
        children: (t) =>
            (0, r.jsx)(
                f.P3F,
                el(ea({}, t), {
                    onClick: n,
                    className: l()(ei.forumPostFormButton, { [ei.forumPostFormButtonActive]: e }),
                    children: e
                        ? (0, r.jsx)(
                              f.kZF,
                              ea(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                  },
                                  t,
                              ),
                          )
                        : (0, r.jsx)(
                              f.tEF,
                              ea(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                  },
                                  t,
                              ),
                          ),
                }),
            ),
    });
}
let eb = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: a } = e,
        { textAreaState: l, name: s } = (0, Y.xH)((e) => {
            let { textAreaState: t, name: n } = e;
            return {
                textAreaState: t,
                name: n,
            };
        }, c.X),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, h.e7)([L.Z], () => L.Z.getSlowmodeCooldownGuess(t.id, L.S.CreateThread)),
        m = (0, C.w)(t, L.S.CreateThread),
        g = ex(t),
        x = (0, Y.AF)(),
        p = i.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        b = i.useMemo(() => "" !== s.trim() && "" !== l.textValue.trim(), [s, l.textValue]);
    return (
        i.useEffect(() => {
            b || x.getState().setPreviewing(!1);
        }, [b, x]),
        (0, r.jsxs)("div", {
            className: a,
            children: [
                (0, r.jsx)(e_, { parentChannel: t }),
                (0, r.jsx)("div", { className: ei.tagsDivider }),
                (0, r.jsxs)("div", {
                    className: ei.controlsContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: ei.controls,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: ei.wrappedControls,
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            type: es,
                                            textValue: l.textValue,
                                            className: ei.characterCount,
                                        }),
                                        d &&
                                            (0, r.jsx)(Q.Z, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(eu, { parentChannel: t }),
                                b && (0, r.jsx)(ep, {}),
                                (0, r.jsx)(ej, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, r.jsx)(
                            j.Z,
                            {
                                type: es,
                                className: ei.expressionPicker,
                                onClick: p,
                            },
                            "expression",
                        ),
                    ],
                }),
                g &&
                    (0, r.jsx)(f.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        className: ei.requiredError,
                        children: er.intl.string(er.t.xPfNQk),
                    }),
            ],
        })
    );
});
function ej(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: a = !1 } = e,
        l = (0, N.HL)(t),
        {
            submitting: s,
            name: o,
            formOpen: d,
        } = (0, Y.xH)((e) => {
            let { submitting: t, name: n, formOpen: r } = e;
            return {
                submitting: t,
                name: n,
                formOpen: r,
            };
        }, c.X),
        u = ef(t),
        m = !ex(t) && u && o.trim().length > 0;
    return __OVERLAY__ || l
        ? null
        : (0, r.jsx)(f.zxk, {
              variant: "primary",
              type: "submit",
              loading: s,
              disabled: (a && !m) || i || !n,
              icon: f.kBi,
              text: d ? er.intl.string(er.t.pIuQIy) : er.intl.string(er.t.TyAuoa),
          });
}
function ev() {
    return Promise.resolve();
}
function e_(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: a,
            setPopoutOpen: s,
        } = (0, Y.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: r } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: r,
            };
        }, c.X),
        o = n.size >= ee.Cn,
        h = (0, d.ZP)({
            id: "".concat(t.id, "-post-form-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ev,
            scrollToEnd: ev,
            orientation: m.hy.HORIZONTAL,
        }),
        { containerRef: g, containerWidth: x } = (0, $.Z)(),
        p = i.useRef(null),
        b = i.useRef(null),
        [j, v] = i.useState(!0),
        _ = (0, q.Vm)(t),
        [C, y] = i.useState(0);
    return (i.useLayoutEffect(() => {
        var e;
        let t = p.current,
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
    }, [_, j, g, x]),
    0 === _.length)
        ? null
        : (0, r.jsxs)("div", {
              className: ei.tagsContainer,
              ref: g,
              children: [
                  (0, r.jsx)(f.lO_, {
                      size: "xs",
                      color: "currentColor",
                      className: ei.tagsIcon,
                  }),
                  (0, r.jsx)("div", {
                      className: ei.tagList,
                      ref: p,
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
                                      el(
                                          ea(
                                              {
                                                  className: ei.tagListInner,
                                                  ref: t,
                                              },
                                              i,
                                          ),
                                          {
                                              children: _.map((e) =>
                                                  (0, r.jsx)(
                                                      J.Z,
                                                      {
                                                          ariaLabel: er.intl.formatToPlainString(er.t.FSZVIS, {
                                                              tagName: e.name,
                                                          }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => a(e.id),
                                                          disabled: !n.has(e.id) && n.size >= ee.Cn,
                                                          selected: n.has(e.id),
                                                          size: J.Z.Sizes.SMALL,
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
                      (0, r.jsx)(f.yRy, {
                          targetElementRef: b,
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, r.jsx)(X.Z, {
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
                                  className: ei.tagsButton,
                                  style: { left: C },
                                  children: (0, r.jsx)(
                                      f.zxk,
                                      el(ea({}, e), {
                                          size: "sm",
                                          variant: "secondary",
                                          icon: f.CJ0,
                                          iconPosition: "end",
                                          text: er.intl.string(er.t.w6T0YW),
                                      }),
                                  ),
                              }),
                      }),
                  (0, r.jsx)("div", {
                      className: l()(ei.tagsButton, ei.tagsButtonPlaceholder),
                      children: (0, r.jsx)(f.zxk, {
                          size: "sm",
                          variant: "secondary",
                          icon: f.CJ0,
                          iconPosition: "end",
                          text: er.intl.string(er.t.w6T0YW),
                      }),
                  }),
              ],
          });
}
function eC(e) {
    let { style: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: n,
        style: t,
        children: (0, r.jsx)("div", { className: ei.loader }),
    });
}
